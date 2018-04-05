webpackJsonp([65], {
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
                end: 341
            }
        };
        t.loc.source = {
            body: "query SideNav_SubscribedChannels($limit: Int $cursor: Cursor $isLive: Boolean) {\ncurrentUser {\nid\nsubscribedChannels(first: $limit after: $cursor live: $isLive){\npageInfo{\nhasNextPage\n}\nedges {\ncursor\nnode{\nid\ndisplayName\nlogin\nprofileImageURL(width: 70)\nbroadcastSettings {\ntitle\n}\nstream {\nid\nviewersCount\ngame {\nid\nname\n}\ntype\n}\n}\n}\n}\n}\n}",
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
            o = t("CSlQ"),
            c = t("+3pi"),
            u = t("abYt"),
            p = t("SZoP"),
            m = t("vH/s"),
            h = t("4t/L"),
            v = t("Odds"),
            k = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = Object(p.a)(this.props.channel.login, this.props.channel.displayName, !0);
                    return a.createElement(h.a, {
                        avatarAlt: e,
                        avatarSrc: this.props.channel.profileImageURL,
                        collapsed: this.props.collapsed,
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: m.PageviewContent.FollowedChannels,
                                medium: m.PageviewMedium.SideNav
                            }
                        },
                        metadataLeft: this.renderMetadataLeft(),
                        metadataRight: this.renderMetadataRight(),
                        onClick: this.onChannelClick,
                        offline: !1,
                        title: e,
                        titleElement: Object(p.a)(this.props.channel.login, this.props.channel.displayName),
                        tooltipContent: this.renderTooltipContent()
                    })
                }, n.prototype.renderMetadataLeft = function() {
                    return this.props.channel.stream && this.props.channel.stream.game ? this.props.channel.stream.game.name : null
                }, n.prototype.renderMetadataRight = function() {
                    return this.props.channel.stream && this.props.channel.stream.id ? a.createElement(v._6, {
                        display: v.P.Flex,
                        alignItems: v.c.Center
                    }, a.createElement(v.F, {
                        status: v.H.Live,
                        size: v.G.Small
                    }), a.createElement(v._6, {
                        margin: {
                            left: .5
                        }
                    }, Object(r.e)(this.props.channel.stream.viewersCount || 0))) : null
                }, n.prototype.renderTooltipContent = function() {
                    if (this.props.channel.stream && this.props.channel.broadcastSettings && this.props.channel.broadcastSettings.title) return a.createElement(v.O, {
                        color: v.J.Base
                    }, this.props.channel.broadcastSettings.title)
                }, n.prototype.onChannelClick = function() {
                    this.props.onChannelClick(this.props.index, this.props.channel)
                }, n = i.__decorate([Object(o.d)("SubscribedChannel", {
                    autoReportInteractive: !0
                })], n)
            }(a.Component),
            b = t("yDaU"),
            g = t("BBWW");
        t.d(n, "SubscribedChannelsComponent", function() {
            return S
        }), t.d(n, "SubscribedChannels", function() {
            return f
        });
        var C = 3,
            S = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        displayAmount: C
                    }, n.onClickShowMore = function() {
                        var e = n.props.data.currentUser && n.props.data.currentUser.subscribedChannels && n.props.data.currentUser.subscribedChannels.edges ? n.props.data.currentUser.subscribedChannels.edges.length : 0,
                            t = Math.min(n.state.displayAmount + C, e);
                        n.setState({
                            displayAmount: t
                        })
                    }, n.onClickShowLess = function() {
                        var e = n.state.displayAmount;
                        n.state.displayAmount % C != 0 ? e -= e % C : e -= C, n.setState({
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
                    else if (this.props.data.loading) e = a.createElement(v._8, {
                        key: "subscribed-channels-loading",
                        fillContent: !0
                    });
                    else {
                        if (!this.hasLiveSubscriptions()) return null;
                        e = this.renderSubscribedChannels();
                        var n = this.renderShowMore();
                        n && e.push(n)
                    }
                    return a.createElement(v._6, {
                        className: "subscribed-channels"
                    }, a.createElement(u.a, {
                        title: Object(r.d)("Subscribed Channels", "SubscribedChannels"),
                        collapsed: this.props.collapsed,
                        collapsedIcon: v._20.Star
                    }), e)
                }, n.prototype.renderSubscribedChannels = function() {
                    var e = [];
                    if (!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.subscribedChannels && this.props.data.currentUser.subscribedChannels.edges)) return e;
                    for (var n = 0; n < this.props.data.currentUser.subscribedChannels.edges.length && n < this.state.displayAmount; n++) {
                        var t = this.props.data.currentUser.subscribedChannels.edges[n].node;
                        t && e.push(a.createElement(k, {
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
                    return this.props.collapsed || !this.props.data || !this.props.data.currentUser || !this.props.data.currentUser.subscribedChannels || !this.props.data.currentUser.subscribedChannels.edges || this.props.data.currentUser.subscribedChannels.edges.length <= C ? null : a.createElement(c.a, {
                        key: "subscribed-channels-show-more",
                        onClickMore: this.onClickShowMore,
                        onClickLess: this.onClickShowLess,
                        lessDisabled: this.state.displayAmount <= C,
                        moreDisabled: this.state.displayAmount >= this.props.data.currentUser.subscribedChannels.edges.length
                    })
                }, n.prototype.onChannelClick = function(e, n) {
                    Object(b.d)(e, n.stream ? n.stream.type : null)
                }, n.prototype.hasLiveSubscriptions = function() {
                    return !!this.props.data.currentUser && !!this.props.data.currentUser.subscribedChannels && !!this.props.data.currentUser.subscribedChannels.edges && this.props.data.currentUser.subscribedChannels.edges.length > 0
                }, n
            }(a.Component),
            f = Object(s.compose)(Object(d.a)(g, {
                options: {
                    pollInterval: 6e5,
                    variables: {
                        limit: 50,
                        cursor: null,
                        isLive: !0
                    }
                }
            }), Object(o.d)("SubscribedChannels"))(S)
    }
});
//# sourceMappingURL=features.side-nav.components.subscribed-channels.component-c22ce75cb66cde9908ce121fae5c0e58.js.map