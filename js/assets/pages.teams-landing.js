webpackJsonp([65], {
    "2hJ3": function(e, n, t) {
        "use strict";
        n.a = function(e) {
            var n = document.createElement("textarea");
            n.style.position = "fixed", n.style.top = "0", n.style.left = "0", n.style.fontSize = "12pt", n.style.width = "2em", n.style.height = "2em", n.style.padding = "0", n.style.border = "none", n.style.outline = "none", n.style.boxShadow = "none", n.style.background = "transparent", n.value = e, document.body.appendChild(n), n.select();
            var t = !0;
            try {
                t = document.execCommand("copy")
            } catch (e) {
                t = !1
            }
            return document.body.removeChild(n), t
        }
    },
    "2ohs": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TeamLandingMemberList"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withLiveMembers"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "liveMembersCursor"
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
                            value: "withMembers"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "membersCursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
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
                                    value: "liveMembers"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "10"
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
                                            value: "liveMembersCursor"
                                        }
                                    }
                                }],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "withLiveMembers"
                                            }
                                        }
                                    }]
                                }],
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
                                                                value: "50"
                                                            }
                                                        }],
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
                                                                    value: "viewersCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "__typename"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "__typename"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
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
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "members"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "10"
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
                                            value: "membersCursor"
                                        }
                                    }
                                }],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "withMembers"
                                            }
                                        }
                                    }]
                                }],
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
                                                                value: "50"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "__typename"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
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
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "allMembers"
                                },
                                name: {
                                    kind: "Name",
                                    value: "members"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
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
                end: 695
            }
        };
        t.loc.source = {
            body: "query TeamLandingMemberList($teamName: String! $withLiveMembers: Boolean! $liveMembersCursor: Cursor $withMembers: Boolean! $membersCursor: Cursor) {\nteam(name: $teamName) {\nid\nliveMembers(first: 10 after: $liveMembersCursor) @include(if: $withLiveMembers) {\nedges {\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\nstream {\nid\nviewersCount\n__typename\n}\n__typename\n}\ncursor\n__typename\n}\npageInfo {\nhasNextPage\n__typename\n}\n}\nmembers(first: 10 after: $membersCursor) @include(if: $withMembers) {\nedges {\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n__typename\n}\ncursor\n__typename\n}\npageInfo {\nhasNextPage\n__typename\n}\n}\nallMembers: members {\ntotalCount\n__typename\n}\n__typename\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "8Wuk": function(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return a
        }), t.d(n, "a", function() {
            return c
        });
        var a, i = t("TToO"),
            r = t("GiK3"),
            l = (t.n(r), t("6sO2")),
            d = t("2hJ3"),
            m = t("f6Cj"),
            s = t("Odds"),
            o = t("bdk8");
        t.n(o);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
        }(a || (a = {}));
        var c = function(e) {
            function n(n) {
                var t = e.call(this, n) || this;
                return t.renderLink = function() {
                    var e = "social-button__link " + t.addSocialClassModifier("social-button__link");
                    return t.props.type === a.Download ? r.createElement("a", i.__assign({
                        href: t.props.url,
                        target: "_blank",
                        className: e,
                        onClick: t.onShareClickHandler
                    }, Object(s._63)(t.props), {
                        download: t.props.text
                    }), t.renderIcon()) : t.isLink() ? r.createElement("a", i.__assign({
                        href: t.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: t.onShareClickHandler
                    }, Object(s._63)(t.props)), t.renderIcon()) : r.createElement("button", i.__assign({
                        onClick: t.copyPageUrl,
                        onMouseLeave: t.clearIsCopiedStatus,
                        className: e
                    }, Object(s._63)(t.props)), t.renderIcon())
                }, t.onShareClickHandler = function() {
                    t.props.onShareClick && t.props.onShareClick(t.props.type)
                }, t.clearIsCopiedStatus = function() {
                    t.setState({
                        isCopied: !1
                    })
                }, t.getUrl = function() {
                    return t.props.url || window.location.href
                }, t.copyPageUrl = function(e) {
                    e && e.preventDefault(), t.props.onShareClick && t.props.onShareClick(t.props.type), Object(d.a)(t.getUrl()), t.setState({
                        isCopied: !0
                    })
                }, t.renderIcon = function() {
                    var e = t.getAssetFromType(),
                        n = t.getAssetSizeFromType();
                    return r.createElement(s._8, {
                        className: "social-button__icon " + t.addSocialClassModifier("social-button__icon"),
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        alignItems: s.c.Center
                    }, r.createElement(s._24, {
                        asset: e,
                        width: n,
                        height: n
                    }))
                }, t.isLink = function() {
                    return t.props.type !== a.Copy
                }, t.getAssetSizeFromType = function() {
                    switch (t.props.type) {
                        case a.Download:
                            return 20;
                        default:
                            return 30
                    }
                }, t.getTooltipFromType = function() {
                    switch (t.props.type) {
                        case a.Twitter:
                            return "Twitter";
                        case a.Reddit:
                            return "Reddit";
                        case a.Facebook:
                            return "Facebook";
                        case a.VKontakte:
                            return "VKontakte";
                        case a.Download:
                            return Object(l.d)("Download", "SocialButton");
                        case a.Copy:
                            return t.state.isCopied ? Object(l.d)("Copied", "SocialButton") : Object(l.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, t.getAssetFromType = function() {
                    switch (t.props.type) {
                        case a.Twitter:
                            return s._25.Twitter;
                        case a.Facebook:
                            return s._25.Facebook;
                        case a.VKontakte:
                            return s._25.VKontakte;
                        case a.Reddit:
                            return s._25.Reddit;
                        case a.Download:
                            return s._25.Download;
                        case a.Copy:
                        default:
                            return s._25.Copy
                    }
                }, t.addSocialClassModifier = function(e) {
                    switch (t.props.type) {
                        case a.Twitter:
                            return e + "--twitter";
                        case a.Reddit:
                            return e + "--reddit";
                        case a.Facebook:
                            return e + "--facebook";
                        case a.VKontakte:
                            return e + "--vkontakte";
                        case a.Download:
                            return e + "--download";
                        case a.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, t.getLinkTarget = function() {
                    var e = t.props,
                        n = e.text,
                        i = e.type,
                        r = t.getUrl(),
                        l = n || "";
                    switch (i) {
                        case a.Reddit:
                            return Object(m.b)(r, l);
                        case a.VKontakte:
                            return Object(m.d)(r);
                        case a.Facebook:
                            return Object(m.a)(r);
                        case a.Twitter:
                            return Object(m.c)(r, l);
                        default:
                            return ""
                    }
                }, t.state = {
                    isCopied: !1
                }, t
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return r.createElement(s._8, {
                    className: "social-button"
                }, r.createElement(s._52, {
                    label: this.getTooltipFromType(),
                    direction: s._54.Bottom
                }, this.renderLink()))
            }, n
        }(r.Component)
    },
    AoO8: function(e, n, t) {
        "use strict";
        n.b = function(e, n) {
            return m(function(e) {
                e.video && (e.video = Object(l.b)(e.video));
                var n = i.stringify(e);
                return r.o.config.playerBaseURL + "/?" + n
            }(e), n)
        }, n.a = m;
        var a = t("TToO"),
            i = t("OAwv"),
            r = (t.n(i), t("6sO2")),
            l = t("JpYe"),
            d = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function m(e, n) {
            void 0 === n && (n = d);
            var t, i, r = a.__assign({}, d, n),
                l = '<iframe src="' + e + '" frameborder="0" ' + (r.allowFullscreen ? 'allowfullscreen="true" ' : "") + (r.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + r.height + '" width="' + r.width + '"></iframe>';
            return r.textLink && (l += (t = r.textLink.url, i = r.textLink.text, '<a href="' + t + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + i + "</a>")), l
        }
    },
    EtaR: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("GiK3"),
            i = t("2KeS"),
            r = t("6sO2"),
            l = t("j7/Y"),
            d = t("w9tK"),
            m = t("vH/s"),
            s = t("CSlQ"),
            o = t("TP6L"),
            c = t("TToO"),
            u = t("CIox"),
            p = t("yWCw"),
            g = t("68hr"),
            v = t("N221"),
            k = t("7vx8"),
            y = t("zCIC"),
            b = t("Odds"),
            f = function(e) {
                var n = e.member,
                    t = null;
                n.live && (t = a.createElement(b._8, {
                    margin: {
                        x: .5
                    }
                }, a.createElement(b.G, {
                    status: b.I.Live
                })));
                var i = null;
                n.live && (i = a.createElement(b._8, {
                    margin: {
                        x: .5
                    }
                }, a.createElement(b.Q, {
                    color: b.K.Alt2
                }, Object(r.e)(n.viewersCount))));
                return a.createElement(b._6, {
                    onClick: function() {
                        e.onClick({
                            userID: n.userID,
                            live: n.live,
                            login: n.login
                        })
                    },
                    selected: e.isSelected
                }, a.createElement(b._35, {
                    display: b.R.Flex,
                    alignItems: b.c.Center,
                    padding: {
                        y: 1,
                        x: 1
                    }
                }, a.createElement(b.m, {
                    alt: n.displayName,
                    size: 30,
                    src: n.profileImageURL
                }), a.createElement(b._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: b._11.Hidden,
                    margin: {
                        x: .5
                    }
                }, a.createElement(b.Q, {
                    ellipsis: !0
                }, n.displayName)), t, i))
            },
            h = function() {
                function e(e) {
                    this.data = e
                }
                return e.prototype.getTeamID = function() {
                    return this.data.team && this.data.team.id || ""
                }, e.prototype.getLiveMemberPageInfo = function() {
                    return this.data.team && this.data.team.liveMembers && this.data.team.liveMembers.pageInfo || null
                }, e.prototype.getMemberPageInfo = function() {
                    return this.data.team && this.data.team.members && this.data.team.members.pageInfo || null
                }, e.prototype.getLiveMemberEdges = function() {
                    return this.data.team && this.data.team.liveMembers && this.data.team.liveMembers.edges || []
                }, e.prototype.getMemberEdges = function() {
                    return this.data.team && this.data.team.members && this.data.team.members.edges || []
                }, e.prototype.hasNextLiveMembersPage = function() {
                    return this.data.team && this.data.team.liveMembers && this.data.team.liveMembers.pageInfo.hasNextPage || !1
                }, e.prototype.hasNextMembersPage = function() {
                    return this.data.team && this.data.team.members && this.data.team.members.pageInfo.hasNextPage || !1
                }, e.prototype.getTotalMemberCount = function() {
                    return this.data.team && this.data.team.allMembers && this.data.team.allMembers.totalCount || 0
                }, e.prototype.getTotalEdgeCount = function() {
                    return this.getLiveMemberEdges().length + this.getMemberEdges().length
                }, e.prototype.getAllMembers = function() {
                    var e = this.getLiveMembers();
                    if (this.hasNextLiveMembersPage()) return e;
                    var n = new Set(e.map(function(e) {
                            return e.userID
                        })),
                        t = this.getMembers().filter(function(e) {
                            return !n.has(e.userID)
                        });
                    return e.concat(t)
                }, e.prototype.getLiveMembers = function() {
                    for (var e = [], n = 0, t = this.getLiveMemberEdges(); n < t.length; n++) {
                        var a = t[n],
                            i = a && a.node;
                        if (i) {
                            var r = i.id,
                                l = i.displayName,
                                d = i.login,
                                m = i.stream;
                            if (r && l && d && m) {
                                var s = m.viewersCount || 0,
                                    o = i.profileImageURL || "";
                                e.push({
                                    userID: r,
                                    displayName: l,
                                    live: !0,
                                    viewersCount: s,
                                    profileImageURL: o,
                                    login: d
                                })
                            }
                        }
                    }
                    return e.sort(function(e, n) {
                        return n.viewersCount - e.viewersCount
                    }), e
                }, e.prototype.getMembers = function() {
                    for (var e = [], n = 0, t = this.getMemberEdges(); n < t.length; n++) {
                        var a = t[n],
                            i = a && a.node;
                        if (i) {
                            var r = i.id,
                                l = i.displayName,
                                d = i.login;
                            r && l && d && e.push({
                                userID: r,
                                displayName: l,
                                live: !1,
                                viewersCount: 0,
                                profileImageURL: i.profileImageURL,
                                login: d
                            })
                        }
                    }
                    return e
                }, e
            }();

        function _(e, n) {
            var t = new Set(e.filter(function(e) {
                return !!e.node
            }).map(function(e) {
                return e.node.id
            }));
            return e.concat(n.filter(function(e) {
                return !e.node || !t.has(e.node.id)
            }))
        }
        var N, S, C = function(e) {
                for (var n = e.length - 1; n >= 0; n--) {
                    var t = e[n] && e[n].cursor;
                    if (t) return t
                }
                return null
            },
            F = function(e, n) {
                return n || e || {
                    __typename: "PageInfo",
                    hasNextPage: !1
                }
            },
            E = function(e) {
                var n = new h(e),
                    t = C(n.getLiveMemberEdges());
                if (n.hasNextLiveMembersPage() && t) return {
                    liveMembersCursor: t,
                    withLiveMembers: !0,
                    membersCursor: null,
                    withMembers: !1
                };
                var a = C(n.getMemberEdges());
                return n.hasNextMembersPage() && a ? {
                    liveMembersCursor: null,
                    withLiveMembers: !1,
                    membersCursor: a,
                    withMembers: !0
                } : {
                    liveMembersCursor: null,
                    withLiveMembers: !1,
                    membersCursor: null,
                    withMembers: !1
                }
            },
            w = t("2ohs"),
            T = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        activeUserID: ""
                    }, n.handleMemberItemClick = function(e) {
                        n.setState({
                            activeUserID: e.userID
                        }), n.props.onMemberItemClick(e)
                    }, n
                }
                return c.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this,
                        n = this.props.data.members.map(function(n) {
                            var t = e.state.activeUserID === n.userID;
                            return a.createElement(f, {
                                member: n,
                                onClick: e.handleMemberItemClick,
                                isSelected: t,
                                key: n.userID
                            })
                        });
                    return a.createElement(b._8, {
                        display: b.R.Flex,
                        flexDirection: b.T.Column
                    }, a.createElement(b._8, {
                        display: b.R.Flex,
                        flexShrink: 0
                    }, a.createElement(b._8, {
                        flexGrow: 1,
                        flexShrink: 1
                    }, a.createElement(b.Q, {
                        fontSize: b.V.Size5,
                        type: b._49.Strong
                    }, Object(r.d)("Team Members", "TeamLandingPage_MemberList"))), a.createElement(b.Q, {
                        color: b.K.Alt2
                    }, Object(r.e)(this.props.data.total))), a.createElement(v.b, null, a.createElement(b._8, null, n, a.createElement(y.a, {
                        loadMore: this.props.loadMore,
                        enabled: this.props.data.infiniteScrollEnabled,
                        contentLength: this.props.data.numLoaded
                    }))))
                }, n
            }(a.Component),
            L = Object(i.d)(Object(s.d)("MemberList"), Object(k.a)(w, {
                options: function(e) {
                    return {
                        variables: {
                            teamName: e.teamName,
                            withLiveMembers: !0,
                            withMembers: !0
                        }
                    }
                },
                props: function(e) {
                    var n, t, a = new h(e.data);
                    return {
                        data: {
                            members: a.getAllMembers(),
                            total: a.getTotalMemberCount(),
                            numLoaded: a.getTotalEdgeCount(),
                            infiniteScrollEnabled: !e.data.loading && (n = e.data, t = E(n), t.withLiveMembers || t.withMembers)
                        },
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: w,
                                variables: c.__assign({}, e.data.variables, E(e.data)),
                                updateQuery: function(e, n) {
                                    return function(e, n) {
                                        if (!e.team && !n.team) return {
                                            team: null
                                        };
                                        var t = new h(e),
                                            a = new h(n),
                                            i = _(t.getLiveMemberEdges(), a.getLiveMemberEdges()),
                                            r = F(t.getLiveMemberPageInfo(), a.getLiveMemberPageInfo()),
                                            l = _(t.getMemberEdges(), a.getMemberEdges()),
                                            d = F(t.getMemberPageInfo(), a.getMemberPageInfo());
                                        return {
                                            team: {
                                                __typename: "Team",
                                                id: t.getTeamID(),
                                                liveMembers: {
                                                    __typename: "UserConnection",
                                                    edges: i,
                                                    pageInfo: r
                                                },
                                                members: {
                                                    __typename: "UserConnection",
                                                    edges: l,
                                                    pageInfo: d
                                                },
                                                allMembers: {
                                                    __typename: "UserConnection",
                                                    totalCount: t.getTotalMemberCount()
                                                }
                                            }
                                        }
                                    }(e, n.fetchMoreResult)
                                }
                            })
                        }
                    }
                }
            }))(T),
            M = t("lfvs"),
            x = Object(i.d)(Object(s.d)("TeamsDescription", {
                autoReportInteractive: !0
            }))(function(e) {
                return e.description ? a.createElement(b._8, null, a.createElement(b.Q, {
                    bold: !0,
                    fontSize: b.V.Size4
                }, e.displayName), a.createElement(b._8, null, a.createElement(b._58, null, a.createElement(M, {
                    source: e.description
                })))) : null
            }),
            I = t("+Znq"),
            O = t("xX9u"),
            R = t("bhVC"),
            j = t("AoO8"),
            D = t("yDzg"),
            P = function(e) {
                var n = Object(D.a)("https://www.twitch.tv/" + e.login, {
                        tt_medium: "live_embed",
                        tt_content: "text_link"
                    }),
                    t = Object(r.d)("Watch live video from {displayName} on www.twitch.tv", {
                        displayName: e.displayName || e.login
                    }, "ChannelShareButton"),
                    i = Object(j.b)({
                        channel: e.login
                    }, {
                        textLink: {
                            url: n,
                            text: t
                        },
                        allowScrolling: !1,
                        allowFullscreen: !0
                    }),
                    l = "https://www.twitch.tv/embed/" + e.login + "/chat",
                    d = Object(j.a)(l, {
                        height: 500,
                        width: 350,
                        allowFullscreen: !1,
                        allowScrolling: !1
                    });
                return a.createElement(I.a, null, a.createElement(b.v, {
                    type: b.B.Hollow,
                    "data-a-target": "share-button",
                    icon: b._25.Share
                }, Object(r.d)("Share", "ChannelShareButton")), a.createElement(b.q, {
                    direction: b.r.TopRight,
                    size: b.s.Small,
                    "data-a-target": "share-balloon"
                }, a.createElement(b._8, {
                    padding: 1
                }, a.createElement(b._8, {
                    padding: {
                        top: 1,
                        bottom: 1
                    },
                    display: b.R.Flex,
                    justifyContent: b._7.Between
                }, a.createElement(R.a, {
                    type: R.b.Twitter,
                    text: e.title,
                    "data-a-target": "twitter-share-button"
                }), a.createElement(R.a, {
                    type: R.b.Facebook,
                    "data-a-target": "facebook-share-button"
                }), a.createElement(R.a, {
                    type: R.b.VKontakte,
                    "data-a-target": "vkontakte-share-button"
                }), a.createElement(R.a, {
                    type: R.b.Reddit,
                    text: e.title,
                    "data-a-target": "reddit-share-button"
                }), a.createElement(R.a, {
                    type: R.b.Copy,
                    "data-a-target": "copy-link-share-button"
                })), a.createElement(b._8, null, a.createElement(b._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(b.Q, null, Object(r.d)("Embed Channel", "ChannelShareButton")), a.createElement(O.a, {
                    value: i
                })), a.createElement(b._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(b.Q, null, Object(r.d)("Embed Chat", "ChannelShareButton")), a.createElement(O.a, {
                    value: d
                }))))))
            },
            A = t("F8kA"),
            U = function(e) {
                return a.createElement(b._8, {
                    padding: {
                        left: .5
                    },
                    display: b.R.InlineFlex
                }, a.createElement(A.a, {
                    to: {
                        pathname: "/communities/" + e.name,
                        state: {
                            content: "current_community",
                            medium: "twitch_channel"
                        }
                    },
                    title: e.displayName
                }, e.displayName))
            },
            V = function(e) {
                return a.createElement(b._52, {
                    align: b._53.Left,
                    direction: b._54.Bottom,
                    label: Object(r.d)("Communities", "Communities")
                }, a.createElement(b._35, {
                    color: b.K.Alt2,
                    display: b.R.InlineFlex,
                    margin: {
                        right: 1
                    }
                }, a.createElement(b._24, {
                    asset: b._25.Communities
                }), a.createElement(b.Q, {
                    type: b._49.Span,
                    fontSize: b.V.Size5
                }, a.Children.map(e.children, function(n, t) {
                    if (n.type !== U) throw new Error("Communities only accepts CommunityLink components as children");
                    return a.createElement(a.Fragment, null, n, t !== a.Children.count(e.children) - 1 && ",")
                }))))
            },
            B = t("NY9D"),
            G = function(e) {
                return a.createElement(b._2, {
                    margin: {
                        right: 1
                    },
                    overflow: b._11.Hidden,
                    flexShrink: 0
                }, a.createElement(A.a, {
                    to: {
                        pathname: Object(B.c)(e.name),
                        state: {
                            content: "current_game",
                            medium: "twitch_channel"
                        }
                    },
                    "data-a-target": "stream-box-art-link"
                }, a.createElement(b.E, {
                    src: e.boxArtURL,
                    alt: e.name,
                    aspect: b.l.Aspect3x4,
                    size: b.F.Size4
                })))
            },
            z = t("cSst"),
            K = function(e) {
                return a.createElement(z.a, {
                    linkTo: {
                        pathname: Object(B.c)(e.name),
                        state: {
                            content: "current_game",
                            medium: "twitch_channel"
                        }
                    },
                    tooltip: Object(r.d)("Game", "GameLink"),
                    svgAsset: b._25.NavGames,
                    title: e.name,
                    "data-a-target": "stream-game-link"
                })
            },
            H = t("czpb"),
            W = function(e) {
                return a.createElement(z.a, c.__assign({
                    linkTo: Object(H.a)("/team/" + e.name),
                    svgAsset: b._25.Team,
                    target: Object(H.b)() ? "_blank" : "",
                    title: e.displayName,
                    tooltip: Object(r.d)("Team", "TeamLink")
                }, Object(b._63)(e)))
            },
            Q = t("70dR"),
            $ = t("fc0G");
        ! function(e) {
            e.CREATIVE = "CREATIVE", e.GAME = "GAME", e.OTHER = "OTHER"
        }(N || (N = {})),
        function(e) {
            e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
        }(S || (S = {}));
        var q, Y = t("eakv"),
            J = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n.getGame = function() {
                        var e = n.props.data.user;
                        return e && e.directories ? e.directories.nodes.find(function(e) {
                            return !(!e || e.directoryType !== S.GAME)
                        }) : null
                    }, n.getTitle = function() {
                        var e = n.props.data.user;
                        if (e && e.broadcastSettings && e.broadcastSettings.title) return e.broadcastSettings.title
                    }, n.renderCommunities = function() {
                        var e = n.props.data.user;
                        if (e) {
                            var t = e.directories ? e.directories.nodes.filter(function(e) {
                                    return e && e.communityType === N.CREATIVE || e.communityType === N.OTHER
                                }) : null,
                                i = null;
                            if (t && t.length > 0) {
                                var r = t.map(function(e, n) {
                                    return a.createElement(U, {
                                        name: e.name,
                                        displayName: e.displayName,
                                        key: e.name + "_" + n
                                    })
                                });
                                i = a.createElement(V, null, r)
                            }
                            return i
                        }
                    }, n.renderGame = function() {
                        var e = n.getGame();
                        return e && e.name ? a.createElement(K, {
                            name: e.name
                        }) : null
                    }, n.renderGameBoxArt = function() {
                        var e = n.getGame(),
                            t = e && e.name ? e.name : "",
                            i = e && e.boxArtURL ? e.boxArtURL : "";
                        return e && t && i ? a.createElement(G, {
                            name: t,
                            boxArtURL: i
                        }) : null
                    }, n.renderTeam = function() {
                        var e = n.props.data.user;
                        return e && e.primaryTeam ? a.createElement(W, {
                            name: e.primaryTeam.name,
                            displayName: e.primaryTeam.displayName
                        }) : null
                    }, n.renderUserIcon = function() {
                        var e = n.props.data.user;
                        return e ? a.createElement(b._8, {
                            margin: {
                                right: 1
                            },
                            overflow: b._11.Hidden,
                            flexShrink: 0
                        }, a.createElement(b.E, {
                            src: e.profileImageURL || "",
                            alt: name,
                            aspect: b.l.Aspect1x1,
                            size: b.F.Size4
                        })) : null
                    }, n
                }
                return c.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    return a.createElement(b._8, {
                        className: "teams-player",
                        fullWidth: !0
                    }, this.renderTopBar(), a.createElement(b.k, {
                        ratio: b.l.Aspect16x9
                    }, a.createElement($.c, {
                        channelLogin: this.props.channelLogin,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: $.b.Site
                    })), this.renderBottomBar())
                }, n.prototype.renderTopBar = function() {
                    var e = this.props.data.user;
                    if (!e || !e.id) return null;
                    var n = Object(r.e)(e.stream && e.stream.viewersCount ? e.stream.viewersCount : 0);
                    return a.createElement(b._35, {
                        display: b.R.Flex,
                        flexWrap: b.U.Wrap,
                        justifyContent: b._7.Between,
                        padding: 1
                    }, a.createElement(b.C, {
                        row: !0
                    }, this.renderUserIcon(), a.createElement(b.D, {
                        overflow: b._11.Hidden
                    }, e.displayName && a.createElement(b._8, {
                        margin: {
                            bottom: .5
                        },
                        ellipsis: !0
                    }, a.createElement(b.O, {
                        to: "/" + this.props.channelLogin
                    }, a.createElement(b.Q, {
                        type: b._49.Span,
                        fontSize: b.V.Size4,
                        title: e.displayName
                    }, e.displayName))), a.createElement(b._35, {
                        display: b.R.Flex,
                        flexWrap: b.U.Wrap,
                        color: b.K.Alt2
                    }, e.stream && e.stream.id && a.createElement(b._35, {
                        color: b.K.Live,
                        display: b.R.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(b._34, {
                        value: n,
                        label: Object(r.d)("Watching Now", "TeamPlayer"),
                        icon: b._25.GlyphLive,
                        "data-a-target": "channel-viewers-count"
                    })), a.createElement(b._8, {
                        margin: {
                            right: 1
                        },
                        display: b.R.Flex
                    }, a.createElement(b._34, {
                        value: Object(r.d)("{followerCount, number}", {
                            followerCount: e.followers && e.followers.totalCount ? e.followers.totalCount : 0
                        }, "TeamPlayer"),
                        label: Object(r.d)("Followers", "TeamPlayer"),
                        icon: b._25.GlyphFollowers
                    })), a.createElement(b._8, {
                        display: b.R.Flex
                    }, a.createElement(b._34, {
                        value: Object(r.d)("{channelCount, number}", {
                            channelCount: e.profileViewCount || 0
                        }, "TeamPlayer"),
                        label: Object(r.d)("Total Views", "TeamPlayer"),
                        icon: b._25.GlyphViews
                    }))))), a.createElement(b._8, {
                        display: b.R.Flex,
                        alignItems: b.c.Center
                    }, e.description && a.createElement(I.a, null, a.createElement(b.v, {
                        type: b.B.Hollow
                    }, Object(r.d)("Info", "Team Player")), a.createElement(b.q, {
                        size: b.s.Medium,
                        direction: b.r.BottomRight
                    }, a.createElement(b._8, {
                        zIndex: b._62.Above,
                        padding: 1
                    }, a.createElement(b.Q, {
                        type: b._49.Span,
                        fontSize: b.V.Size6,
                        color: b.K.Alt2
                    }, e.description)))), a.createElement(b._8, {
                        padding: {
                            left: 1
                        }
                    }, a.createElement(Q.a, {
                        channelLogin: this.props.channelLogin
                    }))))
                }, n.prototype.renderBottomBar = function() {
                    var e = this.getTitle();
                    return a.createElement(b._35, {
                        display: b.R.Flex,
                        flexWrap: b.U.NoWrap,
                        justifyContent: b._7.Between,
                        padding: 1
                    }, a.createElement(b._8, {
                        overflow: b._11.Hidden
                    }, a.createElement(b.C, {
                        row: !0
                    }, this.renderGameBoxArt(), a.createElement(b.D, {
                        overflow: b._11.Hidden
                    }, a.createElement(b._8, {
                        margin: {
                            bottom: .5
                        },
                        ellipsis: !0
                    }, a.createElement(b.Q, {
                        type: b._49.Span,
                        fontSize: b.V.Size4,
                        title: e
                    }, e)), a.createElement(b._8, {
                        display: b.R.Flex,
                        flexWrap: b.U.Wrap
                    }, this.renderGame(), this.renderCommunities(), this.renderTeam())))), a.createElement(b._8, {
                        className: "teams-player__action-container",
                        display: b.R.Flex,
                        alignItems: b.c.Center,
                        justifyContent: b._7.End,
                        margin: {
                            top: 1
                        },
                        padding: {
                            top: 1
                        }
                    }, a.createElement(b._8, {
                        display: b.R.Flex,
                        margin: {
                            x: 1
                        }
                    }, this.props.data.user && a.createElement(P, {
                        login: this.props.channelLogin,
                        displayName: this.props.data.user.displayName || "",
                        title: e || ""
                    }))))
                }, n
            }(a.Component),
            X = Object(i.d)(Object(s.d)("TeamsPlayer"), Object(k.a)(Y, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                }
            }))(J),
            Z = t("N/Ws");
        t("HkGo");
        ! function(e) {
            e.LogoImage = "teamspagebody-logo", e.BannerImage = "teamspagebody-banner", e.BackgroundImage = "teamspagebody-background"
        }(q || (q = {}));
        var ee = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {}, n.changeSelectedMember = function(e) {
                        e.live ? n.setState({
                            activeUserLogin: e.login
                        }) : n.props.history.push({
                            pathname: "/" + e.login
                        })
                    }, n
                }
                return c.__extends(n, e), n.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return a.createElement(p.a, {
                            message: Object(r.d)("An error occurred on this page", "TeamsPageBody")
                        });
                        if (!this.props.data.team || !this.props.data.team.id) return a.createElement(g.a, null)
                    }
                    return a.createElement("div", {
                        className: "teams-page-body__outer-container",
                        style: this.getBackgroundStyle(),
                        "data-test-selector": q.BackgroundImage
                    }, a.createElement(v.b, null, a.createElement(b._8, {
                        display: b.R.Flex,
                        justifyContent: b._7.Center,
                        padding: {
                            top: 3,
                            left: 3,
                            right: 3
                        }
                    }, a.createElement(b._35, {
                        className: "teams-page-body__inner-container",
                        background: b.n.Base,
                        display: b.R.Flex,
                        padding: 2
                    }, a.createElement(b._8, {
                        className: "teams-page-body__column--left",
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        margin: {
                            right: 2
                        }
                    }, this.renderLogo(), a.createElement(L, {
                        teamName: this.props.teamName,
                        onMemberItemClick: this.changeSelectedMember
                    })), a.createElement(b._8, {
                        className: "teams-page-body__column--right"
                    }, this.renderBanner(), this.renderPlayer(), this.renderTeamDescription())))))
                }, n.prototype.getBackgroundStyle = function() {
                    var e = this.props.data.team && this.props.data.team.backgroundImageURL;
                    return e ? {
                        backgroundImage: 'url("' + e + '")'
                    } : {}
                }, n.prototype.renderBanner = function() {
                    var e = this.props.data.team && this.props.data.team.bannerURL;
                    if (!e) return null;
                    var n = Object(r.d)("team banner", "TeamsPageBody");
                    return a.createElement(b._35, {
                        textAlign: b._45.Center,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(b.N, {
                        className: "teams-page-body__banner-image",
                        src: e,
                        alt: n,
                        "data-test-selector": q.BannerImage
                    }))
                }, n.prototype.renderLogo = function() {
                    var e = this.props.data.team && this.props.data.team.logoURL;
                    if (!e) return null;
                    var n = Object(r.d)("team logo", "TeamsPageBody");
                    return a.createElement(b._35, {
                        className: "teams-page-body__logo",
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(b.N, {
                        src: e,
                        alt: n,
                        "data-test-selector": q.LogoImage
                    }))
                }, n.prototype.renderTeamDescription = function() {
                    var e = this.props.data.team && this.props.data.team.displayName || "",
                        n = this.props.data.team && this.props.data.team.description || "";
                    return a.createElement(x, {
                        displayName: e,
                        description: n
                    })
                }, n.prototype.renderPlayer = function() {
                    var e = this.getPlayerLogin();
                    return e ? a.createElement(X, {
                        channelLogin: e
                    }) : null
                }, n.prototype.getPlayerLogin = function() {
                    if (this.state && this.state.activeUserLogin) return this.state.activeUserLogin;
                    var e = this.props.data && this.props.data.team;
                    return e ? function(e) {
                        var n = e && e.liveFeaturedChannels && e.liveFeaturedChannels.edges && e.liveFeaturedChannels.edges.length > 0 && e.liveFeaturedChannels.edges[0] && e.liveFeaturedChannels.edges[0].node,
                            t = n && n.stream && n.login;
                        if (t) return t;
                        var a = e && e.liveMembers && e.liveMembers.edges && e.liveMembers.edges.length > 0 && e.liveMembers.edges[0] && e.liveMembers.edges[0].node,
                            i = a && a.stream && a.login;
                        if (i) return i;
                        var r = e && e.members && e.members.edges && e.members.edges.length > 0 && e.members.edges[0] && e.members.edges[0].node,
                            l = r && r.login;
                        return l || e && e.owner && e.owner.login || ""
                    }(e) : ""
                }, n
            }(a.Component),
            ne = Object(i.d)(u.f, Object(s.d)("TeamsPageBody"), Object(k.a)(Z, {
                options: function(e) {
                    return {
                        variables: {
                            teamName: e.teamName
                        }
                    }
                }
            }))(ee),
            te = function(e) {
                return a.createElement(b._8, {
                    display: b.R.Flex,
                    flexDirection: b.T.Column,
                    flexWrap: b.U.NoWrap,
                    fullHeight: !0
                }, a.createElement(o.a, null), a.createElement(b._8, {
                    flexGrow: 1,
                    display: b.R.Flex
                }, e.children))
            },
            ae = Object(i.d)(Object(s.d)("TeamsLandingPage", {
                destination: d.a.TeamsLandingPage,
                autoReportInteractive: !0
            }), Object(l.a)({
                location: m.PageviewLocation.TeamsLandingPage
            }))(function(e) {
                return r.b.get("teams_landing_launch", !1) ? a.createElement(te, null, a.createElement(ne, {
                    teamName: e.match.params.teamName
                })) : a.createElement(o.a, null)
            });
        t.d(n, "TeamsLandingPage", function() {
            return ae
        })
    },
    HkGo: function(e, n) {},
    "N/Ws": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TeamsLandingBody"
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
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                                    value: "backgroundImageURL"
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
                                    value: "description"
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
                                    value: "logoURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "TeamsLandingBody_PlayerUser"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "TeamsLandingBody_PlayerUser"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Team"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "liveFeaturedChannels"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "1"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
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
                                            value: "__typename"
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
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                            value: "__typename"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "liveMembers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "1"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
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
                                            value: "__typename"
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
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                            value: "__typename"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "members"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "1"
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
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
                                            value: "__typename"
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
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "owner"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 573
            }
        };
        t.loc.source = {
            body: "query TeamsLandingBody($teamName: String!) {\nteam(name: $teamName) {\n__typename\nid\nbackgroundImageURL\nbannerURL\ndescription\ndisplayName\nlogoURL\n...TeamsLandingBody_PlayerUser\n}\n}\nfragment TeamsLandingBody_PlayerUser on Team {\nliveFeaturedChannels(first: 1) {\n__typename\nedges {\n__typename\nnode {\n__typename\nid\nlogin\nstream {\n__typename\nid\n}\n}\n}\n}\nliveMembers(first: 1) {\n__typename\nedges {\n__typename\nnode {\n__typename\nid\nlogin\nstream {\n__typename\nid\n}\n}\n}\n}\nmembers(first: 1) {\n__typename\nedges {\n__typename\nnode {\n__typename\nid\nlogin\n}\n}\n}\nowner {\n__typename\nid\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    bdk8: function(e, n) {},
    bhVC: function(e, n, t) {
        "use strict";
        var a = t("8Wuk");
        t.d(n, "a", function() {
            return a.a
        }), t.d(n, "b", function() {
            return a.b
        })
    },
    cSst: function(e, n, t) {
        "use strict";
        var a = t("TToO"),
            i = t("GiK3"),
            r = t("F8kA"),
            l = t("Odds"),
            d = function(e) {
                return i.createElement(l._8, {
                    margin: {
                        right: 1
                    },
                    display: l.R.Flex,
                    alignItems: l.c.Center
                }, i.createElement(l._52, {
                    align: l._53.Left,
                    label: e.tooltip,
                    direction: l._54.Bottom
                }, i.createElement(l._8, {
                    margin: {
                        right: .5
                    }
                }, i.createElement(l._35, {
                    display: l.R.Flex,
                    alignItems: l.c.Center,
                    color: l.K.Alt2
                }, i.createElement(l._24, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), i.createElement(l.Q, {
                    fontSize: l.V.Size5,
                    ellipsis: !0
                }, i.createElement(r.a, a.__assign({
                    to: e.linkTo
                }, Object(l._63)(e), {
                    target: e.target
                }), e.title))))
            };
        t.d(n, "a", function() {
            return d
        })
    },
    eakv: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelInfoBar_User"
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
                                    value: "login"
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
                                    value: "displayName"
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
                                    value: "followers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "primaryTeam"
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
                                    value: "profileViewCount"
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
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "directories"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "nodes"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "teamsPlayerGame"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "teamsPlayerCommunity"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "teamsPlayerDirectory"
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
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "teamsPlayerGame"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Game"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                            value: "boxArtURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "40"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "55"
                            }
                        }],
                        directives: []
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "teamsPlayerCommunity"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Community"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "communityType"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "teamsPlayerDirectory"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Directory"
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
                            value: "directoryType"
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
                            value: "name"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 584
            }
        };
        t.loc.source = {
            body: "query ChannelPage_ChannelInfoBar_User($login: String!) {\nuser(login: $login) {\nid\nlogin\ndescription\ndisplayName\nprofileImageURL(width: 70)\nbroadcastSettings {\ntitle\n}\nfollowers {\ntotalCount\n}\nprimaryTeam {\nid\ndisplayName\nname\n}\nprofileViewCount\nstream {\nid\nviewersCount\n}\ndirectories {\nnodes {\n...teamsPlayerGame\n...teamsPlayerCommunity\n...teamsPlayerDirectory\n}\n}\n}\n}\nfragment teamsPlayerGame on Game {\nname\nboxArtURL(width: 40 height: 55)\n}\nfragment teamsPlayerCommunity on Community {\ncommunityType\n}\nfragment teamsPlayerDirectory on Directory {\nid\ndirectoryType\ndisplayName\nname\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    f6Cj: function(e, n, t) {
        "use strict";
        n.a = function(e) {
            return Object(a.a)(i, {
                u: e
            })
        }, n.c = function(e, n) {
            return Object(a.a)(r, {
                url: e,
                text: n
            })
        }, n.b = function(e, n) {
            return Object(a.a)(l, {
                url: e,
                title: n
            })
        }, n.d = function(e) {
            return Object(a.a)(d, {
                url: e
            })
        };
        var a = t("yDzg"),
            i = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            l = "https://www.reddit.com/submit",
            d = "https://vk.com/share.php"
    },
    xX9u: function(e, n, t) {
        "use strict";
        var a = t("TToO"),
            i = t("GiK3"),
            r = t("Odds"),
            l = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.handleClickHandler = function(e) {
                        n.props.onClick && n.props.onClick(), e.currentTarget.select()
                    }, n
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return i.createElement(r._4, {
                        readOnly: !0,
                        type: r._5.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, n
            }(i.Component);
        t.d(n, "a", function() {
            return l
        })
    }
});
//# sourceMappingURL=pages.teams-landing-d79a62c5c125744c371611f13595aa77.js.map