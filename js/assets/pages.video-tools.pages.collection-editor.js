(window.webpackJsonp = window.webpackJsonp || []).push([
    [158], {
        "+AC8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var i = n("/7QA"),
                o = n("QzU5");

            function r(e) {
                var t;
                switch (e.toUpperCase()) {
                    case o.a.Upload:
                        t = Object(i.d)("Upload", "VideoManagerVideoCard");
                        break;
                    case o.a.Archive:
                        t = Object(i.d)("Past Broadcast", "VideoManagerVideoCard");
                        break;
                    case o.a.Highlight:
                        t = Object(i.d)("Highlight", "VideoManagerVideoCard");
                        break;
                    case o.a.PastPremiere:
                        t = Object(i.d)("Past Premiere", "VideoManagerVideoCard");
                        break;
                    case o.a.PremiereUpload:
                        t = Object(i.d)("Premiere Upload", "VideoManagerVideoCard");
                        break;
                    default:
                        t = ""
                }
                return t
            }

            function a(e) {
                if (!e) return e;
                var t = e;
                switch (e.toUpperCase()) {
                    case o.a.Upload:
                        t = [o.a.Upload, o.a.PremiereUpload].join(",")
                }
                return t.toLowerCase()
            }
        },
        "/+vS": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            });
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                l = n("8Ad5"),
                c = n("Ue10"),
                s = (n("DqcE"), String.fromCharCode(160));
            ! function(e) {
                e.SubmitButton = "SubmitButton", e.TitleInput = "TitleInput"
            }(i || (i = {}));
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collectionTitle: "",
                        localTitleChanges: !1
                    }, t.onNameInputChange = function(e) {
                        t.setState({
                            collectionTitle: e.currentTarget.value,
                            localTitleChanges: !0
                        })
                    }, t.onSubmit = function() {
                        t.setState({
                            localTitleChanges: !1
                        }, function() {
                            return t.props.onSubmit(t.state.collectionTitle)
                        })
                    }, t.onKeyDown = function(e) {
                        e.keyCode === l.a.Enter && t.canSaveTitle() && t.onSubmit()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.state.collectionTitle.length.toString(),
                            maxLength: 100..toString()
                        }, "CollectionCreator"),
                        t = "";
                    return !this.state.localTitleChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), r.createElement(c.Ea, {
                        hint: this.state.collectionTitle.length > 0 ? e : s,
                        error: t.length > 0,
                        errorMessage: t,
                        label: Object(a.d)("Title", "CollectionEditorInfoCard")
                    }, r.createElement(c.Xa, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Row
                    }, r.createElement(c.Xa, {
                        className: "collection-title-input__input",
                        display: c.X.InlineFlex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(c.Ra, {
                        "data-test-selector": i.TitleInput,
                        defaultValue: this.props.defaultTitle,
                        disabled: this.props.disabled,
                        maxLength: 100,
                        onChange: this.onNameInputChange,
                        placeholder: Object(a.d)("Collection name", "CollectionCreator"),
                        type: c.Ta.Text,
                        onKeyDown: this.onKeyDown
                    })), r.createElement(c.Xa, {
                        display: c.X.Flex
                    }, r.createElement(c.z, {
                        "data-test-selector": i.SubmitButton,
                        disabled: !this.canSaveTitle(),
                        onClick: this.onSubmit
                    }, this.props.callToAction))))
                }, t.prototype.canSaveTitle = function() {
                    var e = !(this.state.collectionTitle && this.state.collectionTitle.replace(/\s/g, "").length > 0),
                        t = Boolean(this.state.collectionTitle && this.state.collectionTitle.length > 100),
                        n = this.state.collectionTitle === this.props.defaultTitle;
                    return !(e || t || n)
                }, t
            }(r.Component)
        },
        "0+qQ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                o = n("Ue10"),
                r = (n("I4Mg"), function(e) {
                    return i.createElement(o.Xa, {
                        className: "manager-card__stats-container",
                        display: o.X.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: o.Ba.NoWrap,
                        flexDirection: o.Aa.Row,
                        alignItems: o.f.Center
                    }, e.children)
                })
        },
        "0/Iv": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "collectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
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
                                value: "lengthSeconds"
                            },
                            arguments: [],
                            directives: []
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
                                value: "title"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "viewCount"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "updatedAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "thumbnailURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "320"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "180"
                                }
                            }],
                            directives: []
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
                }],
                loc: {
                    start: 0,
                    end: 159
                }
            };
            n.loc.source = {
                body: "fragment collectionFields on Collection {\nid\nlengthSeconds\nowner {\nid\nlogin\n}\ndescription\ntitle\nviewCount\nupdatedAt\nthumbnailURL(width: 320 height: 180)\ntype\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "2jWE": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CollectionItemCard_CurrentUser"
                    },
                    variableDefinitions: [],
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 59
                }
            };
            n.loc.source = {
                body: "query CollectionItemCard_CurrentUser {\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3udf": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CollectionManager_CreatorCollections"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "creatorLogin"
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
                                value: "after"
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
                                        value: "creatorLogin"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "collections"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "15"
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
                                                value: "after"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "options"
                                        },
                                        value: {
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "includeEmpty"
                                                },
                                                value: {
                                                    kind: "BooleanValue",
                                                    value: !0
                                                }
                                            }]
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
                                                                value: "items"
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "lengthSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "thumbnailURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "160"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "90"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "title"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "updatedAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "viewCount"
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
                                        }]
                                    }
                                }]
                            }
                        }, {
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 393
                }
            };
            n.loc.source = {
                body: "query CollectionManager_CreatorCollections($creatorLogin: String! $after: Cursor) {\nuser(login: $creatorLogin) {\nid\ndisplayName\ncollections(first: 15 after: $after options: { includeEmpty: true }) {\nedges {\ncursor\nnode {\nid\nitems {\ntotalCount\n}\nowner {\nid\nlogin\n}\nlengthSeconds\nthumbnailURL(width: 160 height: 90)\ntitle\nupdatedAt\nviewCount\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5Ijs": function(e, t, n) {
            "use strict";
            var i, o = n("mrSG"),
                r = n("oJmH"),
                a = n("/7QA"),
                l = n("q1tI"),
                c = n("eJ65"),
                s = n("EuPq"),
                d = n("KYAw"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object(d.a)(this.props.collection.id);
                        return l.createElement("div", null, l.createElement(u.W, null, Object(a.d)("Collection Link", "VideoShareBox")), l.createElement(s.a, {
                            onClick: function() {
                                e.props.onClick(t)
                            },
                            value: t
                        }))
                    }, t
                }(l.Component),
                m = n("BQs+"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e) {
                            var n = {
                                location: t.props.tracking.location,
                                platform: m.a.Link,
                                shareURL: e
                            };
                            Object(m.b)(t.props.collection, n, a.p.apollo.client)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(p, o.__assign({}, this.props, {
                            onClick: this.onClickHandler
                        }))
                    }, t
                }(l.Component),
                h = n("EdhP"),
                v = n("2xye"),
                g = n("Addw");

            function k(e) {
                switch (e.type) {
                    case i.Collection:
                        return e.currentVideo || null;
                    case i.Video:
                        return e;
                    default:
                        return e
                }
            }! function(e) {
                e[e.Collection = 0] = "Collection", e[e.Video = 1] = "Video"
            }(i || (i = {}));
            var b = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.content,
                            n = this.getEmbedPlayerContentURL(t);
                        return l.createElement("div", null, l.createElement(u.W, null, Object(a.d)("Embed Video", "VideoShareBox")), l.createElement(s.a, {
                            onClick: function() {
                                e.props.onClick(n)
                            },
                            value: this.getEmbedPlayerCode(t)
                        }))
                    }, t.prototype.getEmbedPlayerCode = function(e) {
                        var t = function(e, t) {
                                var n = {
                                    autoplay: !1
                                };
                                switch (e.type) {
                                    case i.Collection:
                                        e.currentVideo ? (n.video = e.currentVideo.id, n.t = t ? Object(g.a)(t) : void 0) : n.collection = e.id;
                                        break;
                                    case i.Video:
                                        n.video = e.id, n.t = t ? Object(g.a)(t) : void 0
                                }
                                return n
                            }(e, null !== this.props.selectedVideoStartTime ? this.props.selectedVideoStartTime : void 0),
                            n = e.owner.displayName,
                            o = e.title,
                            r = Object(a.d)("Watch {title} from {displayName} on www.twitch.tv", {
                                displayName: n,
                                title: o
                            }, "VideoShareBox");
                        return Object(h.b)(t, {
                            textLink: {
                                url: this.getEmbedPlayerContentURL(e),
                                text: r
                            },
                            allowScrolling: !1,
                            allowFullscreen: !0
                        })
                    }, t.prototype.getEmbedPlayerContentURL = function(e) {
                        switch (e.type) {
                            case i.Collection:
                                return e.currentVideo ? Object(d.b)(e.currentVideo.id, {
                                    tt_medium: v.PageviewMedium.VideoEmbed,
                                    tt_content: v.PageviewContent.TextLink,
                                    t: this.props.selectedVideoStartTime
                                }) : Object(d.a)(e.id, {
                                    tt_medium: v.PageviewMedium.VideoEmbed,
                                    tt_content: v.PageviewContent.TextLink
                                });
                            case i.Video:
                                return Object(d.b)(e.id, {
                                    tt_medium: v.PageviewMedium.VideoEmbed,
                                    tt_content: v.PageviewContent.TextLink,
                                    t: this.props.selectedVideoStartTime
                                });
                            default:
                                return e
                        }
                    }, t
                }(l.Component),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e) {
                            var n = t.props.content;
                            switch (n.type) {
                                case i.Collection:
                                    n.currentVideo ? t.trackVideoShare(e, n.currentVideo) : t.trackCollectionShare(e, n);
                                    break;
                                case i.Video:
                                    t.trackVideoShare(e, n);
                                    break;
                                default:
                                    return n
                            }
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(b, o.__assign({}, this.props, {
                            onClick: this.onClickHandler
                        }))
                    }, t.prototype.trackCollectionShare = function(e, t) {
                        var n = {
                            location: this.props.tracking.location,
                            platform: m.a.Embed,
                            shareURL: e
                        };
                        Object(m.b)(t, n, a.p.apollo.client)
                    }, t.prototype.trackVideoShare = function(e, t) {
                        var n = {
                            location: this.props.tracking.location,
                            platform: m.a.Embed,
                            shareURL: e
                        };
                        Object(m.c)(t, n, a.p.apollo.client)
                    }, t
                }(l.Component),
                C = n("X7Ac"),
                S = [{
                    type: C.b.Twitter,
                    selector: "twitter-button"
                }, {
                    type: C.b.Facebook,
                    selector: "fb-button"
                }, {
                    type: C.b.VKontakte,
                    selector: "vk-button"
                }, {
                    type: C.b.Reddit,
                    selector: "reddit-button"
                }, {
                    type: C.b.Copy,
                    selector: "copy-link-button"
                }],
                E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.content,
                            n = this.getContentURL(t),
                            i = this.getSocialShareContextTitle(t),
                            o = S.map(function(t) {
                                return l.createElement(C.a, {
                                    "data-test-selector": t.selector,
                                    key: t.type,
                                    onShareClick: function(t) {
                                        e.props.onClick(n, t)
                                    },
                                    text: i,
                                    type: t.type,
                                    url: n
                                })
                            });
                        return l.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between
                        }, o)
                    }, t.prototype.getSocialShareContextTitle = function(e) {
                        return Object(a.d)("Check out {title} from {displayName} on www.twitch.tv", {
                            displayName: e.owner.displayName,
                            title: e.title
                        }, "VideoShareBox")
                    }, t.prototype.getContentURL = function(e) {
                        switch (e.type) {
                            case i.Collection:
                                return e.currentVideo ? Object(d.b)(e.currentVideo.id, {
                                    collection: e.id,
                                    t: this.props.selectedVideoStartTime
                                }) : Object(d.a)(e.id);
                            case i.Video:
                                return Object(d.b)(e.id, {
                                    t: this.props.selectedVideoStartTime
                                });
                            default:
                                return e
                        }
                    }, t
                }(l.Component),
                w = function(e) {
                    switch (e) {
                        case C.b.Twitter:
                            return m.a.Twitter;
                        case C.b.Reddit:
                            return m.a.Reddit;
                        case C.b.VKontakte:
                            return m.a.VKontakte;
                        case C.b.Facebook:
                            return m.a.Facebook;
                        case C.b.Copy:
                            return m.a.Copy;
                        case C.b.CopyInput:
                            return m.a.Link;
                        case C.b.Download:
                            return m.a.Download;
                        default:
                            return e
                    }
                },
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e, n) {
                            var o = t.props.content;
                            switch (o.type) {
                                case i.Collection:
                                    o.currentVideo ? t.trackVideoShare(e, o.currentVideo, n, o.id) : t.trackCollectionShare(e, o, n);
                                    break;
                                case i.Video:
                                    t.trackVideoShare(e, o, n);
                                    break;
                                default:
                                    return o
                            }
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(E, o.__assign({}, this.props, {
                            onClick: this.onClickHandler
                        }))
                    }, t.prototype.trackCollectionShare = function(e, t, n) {
                        var i = {
                            location: this.props.tracking.location,
                            platform: w(n),
                            shareURL: e
                        };
                        Object(m.b)(t, i, a.p.apollo.client)
                    }, t.prototype.trackVideoShare = function(e, t, n, i) {
                        var o = {
                            collectionID: i,
                            location: this.props.tracking.location,
                            platform: w(n),
                            shareURL: e
                        };
                        Object(m.c)(t, o, a.p.apollo.client)
                    }, t
                }(l.Component),
                x = n("hyVY"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onShareTimestampClick = function(e) {
                            void 0 !== t.props.currentVideoTime && t.props.onVideoStartTimeChange(e.currentTarget.checked ? t.props.currentVideoTime : void 0)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = {};
                        this.props.collectionID && (t.collection = this.props.collectionID), this.props.selectedVideoStartTime && (t.t = this.props.selectedVideoStartTime);
                        var n = Object(d.b)(this.props.video.id, t);
                        return l.createElement("div", null, l.createElement(u.W, null, Object(a.d)("Video Link", "VideoShareBox")), l.createElement(s.a, {
                            onClick: function() {
                                e.props.onInputClick(n)
                            },
                            value: n
                        }), this.renderCurrentVideoOffsetLinkOption())
                    }, t.prototype.renderCurrentVideoOffsetLinkOption = function() {
                        if (void 0 === this.props.currentVideoTime) return null;
                        var e = this.props.selectedVideoStartTime || this.props.currentVideoTime,
                            t = Object(x.b)(e);
                        return l.createElement(u.Xa, {
                            padding: {
                                top: .5
                            }
                        }, l.createElement(u.N, {
                            id: "video-share-timestamp-toggle",
                            label: Object(a.d)("Skip to {deeplinkTimestamp}", {
                                deeplinkTimestamp: t
                            }, "VideoShareBox"),
                            "data-a-target": "video-share-timestamp-toggle",
                            "data-a-value": void 0 !== this.props.selectedVideoStartTime,
                            checked: !!this.props.selectedVideoStartTime,
                            onChange: this.onShareTimestampClick
                        }))
                    }, t
                }(l.Component),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e, n) {
                            var i = {
                                collectionID: n,
                                location: t.props.tracking.location,
                                platform: m.a.Link,
                                shareURL: e
                            };
                            Object(m.c)(t.props.video, i, a.p.apollo.client)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(D, o.__assign({}, this.props, {
                            onInputClick: this.onClickHandler
                        }))
                    }, t
                }(l.Component),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.toggleTimer = function(e) {
                            t.props.getCurrentVideoTime && !e && (t.updateCurrentTime(), t.getTimeTimer = setInterval(t.updateCurrentTime, 1e3))
                        }, t.updateCurrentTime = function() {
                            if (t.props.getCurrentVideoTime) {
                                var e = t.props.getCurrentVideoTime();
                                t.setState({
                                    currentTime: e
                                })
                            }
                        }, t.onVideoStartTimeChangeHandler = function(e) {
                            t.setState({
                                selectedVideoStartTime: e
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.currentVideoTime === this.state.currentTime || e.getCurrentVideoTime || this.setState({
                            currentTime: e.currentVideoTime
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.getTimeTimer && clearTimeout(this.getTimeTimer)
                    }, t.prototype.render = function() {
                        var e = null;
                        return this.props.content && (e = this.shareBalloonContent(this.props.content)), l.createElement(c.a, {
                            onToggle: this.toggleTimer
                        }, l.createElement(u.z, {
                            disabled: !this.props.content,
                            icon: u.rb.Share,
                            type: this.props.buttonType
                        }, Object(a.d)("Share", "VideoShareBox")), l.createElement(u.u, {
                            direction: this.props.balloonDirection,
                            size: u.w.Small
                        }, e))
                    }, t.prototype.shareBalloonContent = function(e) {
                        return l.createElement(u.Xa, {
                            padding: 1
                        }, l.createElement(I, {
                            content: e,
                            selectedVideoStartTime: this.state.selectedVideoStartTime,
                            tracking: this.props.tracking
                        }), this.renderCollectionShareInput(e), this.renderVideoShareInput(e), this.renderEmbedPlayerInput(e))
                    }, t.prototype.renderCollectionShareInput = function(e) {
                        return e.type !== i.Collection ? null : l.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, l.createElement(f, {
                            collection: e,
                            tracking: this.props.tracking
                        }))
                    }, t.prototype.renderVideoShareInput = function(e) {
                        var t, n;
                        if (e.type === i.Collection) {
                            if (!e.currentVideo) return null;
                            n = e.id, t = e.currentVideo
                        } else t = e;
                        return l.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, l.createElement(O, {
                            collectionID: n,
                            currentVideoTime: this.state.currentTime,
                            onVideoStartTimeChange: this.onVideoStartTimeChangeHandler,
                            selectedVideoStartTime: this.state.selectedVideoStartTime,
                            tracking: this.props.tracking,
                            video: t
                        }))
                    }, t.prototype.renderEmbedPlayerInput = function(e) {
                        return l.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, l.createElement(y, {
                            content: e,
                            selectedVideoStartTime: this.state.selectedVideoStartTime,
                            tracking: this.props.tracking
                        }))
                    }, t
                }(l.Component),
                _ = n("gFHd");

            function T(e) {
                return e.owner && e.title ? {
                    type: i.Video,
                    id: e.id,
                    owner: {
                        id: e.owner.id,
                        displayName: e.owner.displayName
                    },
                    title: e.title
                } : null
            }
            var V = Object(r.compose)(Object(r.graphql)(_, {
                options: function(e) {
                    var t = e.content;
                    return t ? {
                        variables: {
                            collectionID: t.collectionID || "",
                            hasCollection: !!t.collectionID,
                            hasVideo: !!t.videoID,
                            videoID: t.videoID || ""
                        }
                    } : {
                        variables: {
                            collectionID: "",
                            hasCollection: !1,
                            hasVideo: !1,
                            videoID: ""
                        }
                    }
                },
                props: function(e) {
                    var t = o.__assign({}, e, {
                            content: void 0
                        }),
                        n = e.data;
                    return n.loading ? t : n.error ? (a.k.error(n.error, "VideoShareBoxContainer"), t) : (n.collection ? t.content = function(e, t) {
                        var n;
                        if (t) {
                            var o = T(t);
                            if (!o) return null;
                            n = o
                        }
                        return e.owner && e.title ? {
                            type: i.Collection,
                            id: e.id,
                            owner: {
                                id: e.owner.id,
                                displayName: e.owner.displayName
                            },
                            title: e.title,
                            currentVideo: n
                        } : null
                    }(n.collection, n.video) || void 0 : n.video && (t.content = T(n.video) || void 0), t)
                }
            }))(N);
            n.d(t, "a", function() {
                return V
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return k
            })
        },
        "7BY1": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                o = n("aCAx"),
                r = n("mrSG"),
                a = n("q1tI"),
                l = n("/7QA"),
                c = n("hyVY"),
                s = n("2xye"),
                d = n("MxAq"),
                u = n("JVvM"),
                p = n("GnwI"),
                m = n("I9oz"),
                f = n("LoeD"),
                h = n("9afg"),
                v = n("0+qQ"),
                g = n("FYX4"),
                k = n("Ue10"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.navigateToEdit = function() {
                            var e = t.collectionEditLocationDescriptor();
                            e && l.p.history.push(e)
                        }, t.collectionEditLocationDescriptor = function() {
                            if (t.props.collection.owner) return {
                                pathname: "/" + t.props.collection.owner.login + "/manager/collections/" + t.props.collection.id,
                                state: {
                                    content: s.PageviewContent.CollectionCard,
                                    medium: s.PageviewMedium.VideoManagerCollectionManager
                                }
                            }
                        }, t.onDeleteOptionClickHandler = function() {
                            t.props.onDeleteOptionClick(t.props.collection)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.collection;
                        return t.thumbnailURL && (e = {
                            "160w": t.thumbnailURL
                        }), a.createElement(m.a, null, a.createElement(k.Xa, {
                            flexShrink: 0
                        }, a.createElement(d.a, {
                            alt: t.title,
                            sizes: [{
                                size: "160px"
                            }],
                            src: t.thumbnailURL,
                            srcSet: e,
                            videoCount: t.items.totalCount,
                            fallbackSize: u.b.Half
                        })), a.createElement(g.a, {
                            onClick: this.navigateToEdit
                        }, a.createElement(k.W, {
                            bold: !0,
                            type: k.Rb.H4,
                            color: k.O.Alt
                        }, t.title), a.createElement(k.Ub, {
                            direction: k.Wb.Bottom,
                            label: Object(l.d)("Last Updated", "CollectionManagerCard")
                        }, a.createElement(k.W, {
                            color: k.O.Alt2
                        }, Object(l.c)(new Date(t.updatedAt), "long")))), a.createElement(v.a, null, this.collectionStats(t)), this.renderCardMenu())
                    }, t.prototype.renderCardMenu = function() {
                        if (this.props.hideOptionsMenu || !this.props.collection.owner) return null;
                        var e = [{
                            asset: k.rb.Edit,
                            linkTo: this.collectionEditLocationDescriptor(),
                            title: Object(l.d)("Edit", "CollectionManagerCard")
                        }, {
                            asset: k.rb.Trash,
                            onClick: this.onDeleteOptionClickHandler,
                            title: Object(l.d)("Delete", "CollectionManagerCard")
                        }];
                        return a.createElement(f.a, {
                            options: e
                        })
                    }, t.prototype.collectionStats = function(e) {
                        return [{
                            value: Object(c.b)(e.lengthSeconds),
                            icon: k.rb.GlyphLength,
                            label: Object(l.d)("Collection length", "CollectionManagerCard")
                        }, {
                            value: "" + e.viewCount,
                            icon: k.rb.GlyphViews,
                            label: Object(l.d)("Views", "CollectionManagerCard")
                        }].map(function(e, t) {
                            return a.createElement(h.a, r.__assign({
                                key: t
                            }, e))
                        })
                    }, t
                }(a.Component),
                y = Object(p.b)("CollectionManagerCard", {
                    autoReportInteractive: !0
                })(b),
                C = n("HYil");
            n.d(t, "a", function() {
                return S
            });
            var S = Object(i.connect)(null, function(e, t) {
                return {
                    onDeleteOptionClick: function(n) {
                        e(Object(o.d)(C.a, {
                            collection: n,
                            onSuccess: t.onDelete
                        }))
                    }
                }
            })(y)
        },
        "8ENv": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = a(n("J2m7")),
                r = a(n("xweI"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.refs = {}
                }
                return i(e, [{
                    key: "add",
                    value: function(e, t) {
                        this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                    }
                }, {
                    key: "remove",
                    value: function(e, t) {
                        var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
                    }
                }, {
                    key: "isActive",
                    value: function() {
                        return this.active
                    }
                }, {
                    key: "getActive",
                    value: function() {
                        var e = this;
                        return (0, o.default)(this.refs[this.active.collection], function(t) {
                            return t.node.sortableInfo.index == e.active.index
                        })
                    }
                }, {
                    key: "getIndex",
                    value: function(e, t) {
                        return this.refs[e].indexOf(t)
                    }
                }, {
                    key: "getOrderedRefs",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                        return (0, r.default)(this.refs[e], function(e) {
                            return e.node.sortableInfo.index
                        })
                    }
                }]), e
            }();
            t.default = l
        },
        "8n0m": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return l
            });
            var i = n("/7QA"),
                o = n("2xye");

            function r(e) {
                i.o.track(o.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function a(e) {
                i.o.track(o.SpadeEventType.CollectionAddItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    place: e.place
                })
            }

            function l(e) {
                i.o.track(o.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        "9afg": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("N0BP"),
                a = n("Ue10"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = o.createElement(a.Xa, {
                                alignItems: a.f.Center,
                                display: a.X.Flex,
                                fullHeight: !0,
                                justifyContent: a.Wa.Center,
                                padding: 2
                            }, o.createElement(a.Ab, {
                                icon: this.props.icon,
                                label: this.props.label,
                                value: this.props.value
                            })),
                            t = this.props.linkTo ? o.createElement(a.Ua, {
                                type: a.Va.Alpha,
                                linkTo: this.props.linkTo,
                                targetBlank: !0
                            }, e) : e;
                        return o.createElement(a.Xa, i.__assign({
                            display: a.X.InlineFlex,
                            fullHeight: !0
                        }, Object(r.a)(this.props)), t)
                    }, t
                }(o.Component)
        },
        BCEg: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }();
            t.default = function(e) {
                var t, n, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = (0, l.findDOMNode)(this);
                            e.sortableHandle = !0
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, c.default)(d.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = d.withRef ? "wrappedInstance" : null;
                            return a.default.createElement(e, i({
                                ref: t
                            }, this.props))
                        }
                    }]), n
                }(r.Component), t.displayName = (0, s.provideDisplayName)("sortableHandle", e), n
            };
            var r = n("q1tI"),
                a = d(r),
                l = n("i8i4"),
                c = d(n("QLaP")),
                s = n("jTc+");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var i, o = n("mrSG"),
                r = n("/7QA"),
                a = n("2xye"),
                l = n("I6K6"),
                c = n("bTcf"),
                s = n("L7EG");

            function d(e, t, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var i, c, u, p;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: s,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return i = o.sent().data, c = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, i.video), u = {
                                    channel: c.owner ? c.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: c.game ? c.game.name : null,
                                    partner: !!c.owner && c.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? a.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : c.id,
                                    shared_item_type: t.collectionID ? a.ShareItemType.Collection : Object(l.a)(c.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: c.id,
                                    source_item_type: Object(l.a)(c.broadcastType)
                                }, r.p.tracking.track(a.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = o.sent(), r.k.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var i, l, s;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return i = o.sent().data, l = {
                                    channel: i.user ? i.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!i.user && i.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: a.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: a.SourceItemType.Collection
                                }, r.p.tracking.track(a.SpadeEventType.ShareItem, l), [3, 3];
                            case 2:
                                return s = o.sent(), r.k.error(s.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(i || (i = {}))
        },
        Bucx: function(e, t, n) {},
        DqcE: function(e, t, n) {},
        EdhP: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                o = n("cr+I"),
                r = n("/7QA"),
                a = n("vRsq"),
                l = {
                    height: 378,
                    width: 620,
                    allowScrolling: !0,
                    allowFullscreen: !0
                };

            function c(e, t) {
                return s(function(e) {
                    e.video && (e.video = Object(a.p)(e.video));
                    var t = o.stringify(e);
                    return r.p.config.playerBaseURL + "/?" + t
                }(e), t)
            }

            function s(e, t) {
                void 0 === t && (t = l);
                var n = i.__assign({}, l, t),
                    o = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
                return n.textLink && (o += function(e, t) {
                    return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
                }(n.textLink.url, n.textLink.text)), o
            }
        },
        EtbQ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CollectionManager_DeleteCollection"
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
                                    value: "DeleteCollectionInput"
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
                                value: "deleteCollection"
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
                                        value: "collection"
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
                    end: 133
                }
            };
            n.loc.source = {
                body: "mutation CollectionManager_DeleteCollection($input: DeleteCollectionInput!) {\ndeleteCollection(input: $input) {\ncollection {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        EuPq: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickHandler = function(e) {
                            t.props.onClick && t.props.onClick(), e.currentTarget.select()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(r.Ra, {
                            readOnly: !0,
                            type: r.Ta.Text,
                            value: this.props.value,
                            onClick: this.handleClickHandler
                        })
                    }, t
                }(o.Component);
            n.d(t, "a", function() {
                return a
            })
        },
        FYX4: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                o = n("Ue10"),
                r = function(e) {
                    return i.createElement(o.Ua, {
                        onClick: e.onClick
                    }, i.createElement(o.Xa, {
                        alignItems: o.f.Start,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: o.Wa.Center,
                        padding: {
                            x: 2
                        }
                    }, e.children))
                }
        },
        GnlB: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CollectionEditor_RemoveCollectionItem"
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
                                    value: "RemoveCollectionItemInput"
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
                                value: "removeCollectionItem"
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
                                        value: "collection"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "collectionFields"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "itemConnection"
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
                    end: 422
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_RemoveCollectionItem($input: RemoveCollectionItemInput!) {\nremoveCollectionItem(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("0/Iv").definitions)), i.definitions = i.definitions.concat(r(n("dc0Q").definitions)), e.exports = i
        },
        HNnW: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff8445933141.png"
        },
        HYil: function(e, t, n) {
            "use strict";
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                s = n("yR8l"),
                d = n("geRD"),
                u = n("aCAx"),
                p = n("3udf"),
                m = n("cZKs"),
                f = n("7BY1"),
                h = n("Ue10");
            ! function(e) {
                e[e.CancelButton = 0] = "CancelButton", e[e.ConfirmButton = 1] = "ConfirmButton", e[e.ErrorAlert = 2] = "ErrorAlert"
            }(i || (i = {}));
            var v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.collection,
                            t = null;
                        return this.props.error && (t = r.createElement(h.i, {
                            delay: h.j.Short,
                            type: h.n.BounceIn,
                            enabled: !0
                        }, r.createElement(h.Bb, {
                            border: !0,
                            margin: {
                                bottom: 1
                            },
                            padding: 1,
                            fullWidth: !0
                        }, r.createElement(h.W, {
                            bold: !0,
                            color: h.O.Error,
                            "data-test-selector": i.ErrorAlert
                        }, this.props.error)))), r.createElement(h.i, {
                            type: h.n.FadeIn,
                            delay: h.j.Medium,
                            duration: h.k.Medium,
                            enabled: !0
                        }, r.createElement(h.Bb, {
                            background: h.r.Base,
                            padding: {
                                x: 3,
                                top: 2,
                                bottom: 3
                            }
                        }, r.createElement(h.Pa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(h.W, {
                            fontSize: h.Ca.Size3
                        }, Object(c.d)("Delete Collection", "DeleteCollectionModal"))), r.createElement(h.W, {
                            fontSize: h.Ca.Size6
                        }, Object(c.d)("Are you sure you want to delete this collection?", "DeleteCollectionModal")), r.createElement(h.W, {
                            fontSize: h.Ca.Size6
                        }, Object(c.d)("This action cannot be undone. ", "DeleteCollectionModal")), r.createElement(h.Xa, {
                            padding: {
                                y: 2
                            }
                        }, r.createElement(f.a, {
                            collection: e,
                            hideOptionsMenu: !0
                        })), t, r.createElement(h.Xa, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row,
                            justifyContent: h.Wa.Center
                        }, r.createElement(h.Xa, {
                            margin: {
                                x: .5
                            }
                        }, r.createElement(h.z, {
                            "data-test-selector": i.CancelButton,
                            onClick: this.props.onCancel,
                            type: h.F.Hollow
                        }, Object(c.d)("Cancel", "DeleteCollectionModal"))), r.createElement(h.Xa, {
                            margin: {
                                x: .5
                            }
                        }, r.createElement(h.z, {
                            "data-test-selector": i.ConfirmButton,
                            onClick: this.props.onDeleteRequest,
                            type: h.F.Alert
                        }, Object(c.d)("Delete", "DeleteCollectionModal")))), r.createElement(m.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t
                }(r.Component),
                g = n("EtbQ");
            n.d(t, "a", function() {
                return y
            });
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.defaultUserError = Object(c.d)("Unable to delete this collection, try again later.", "DeleteCollectionModal"), t.onCancelHandler = function() {
                            t.props.onClose()
                        }, t.onDeleteHandler = function() {
                            t.setState({
                                deletionError: void 0
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var e;
                                    return o.__generator(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                if (!this.props.collection.owner) return this.setState({
                                                    deletionError: this.defaultUserError
                                                }), [2];
                                                t.label = 1;
                                            case 1:
                                                return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(o.__assign({}, Object(d.a)({
                                                    collectionID: this.props.collection.id
                                                }), {
                                                    refetchQueries: [{
                                                        query: p,
                                                        variables: {
                                                            creatorLogin: this.props.collection.owner.login
                                                        }
                                                    }]
                                                }))];
                                            case 2:
                                                return t.sent(), [3, 4];
                                            case 3:
                                                return e = t.sent(), c.k.error(e, "DeleteCollectionModal"), this.setState({
                                                    deletionError: this.defaultUserError
                                                }), [2];
                                            case 4:
                                                return this.props.onSuccess(), [2]
                                        }
                                    })
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(v, {
                            collection: this.props.collection,
                            error: this.state.deletionError,
                            onCancel: this.onCancelHandler,
                            onDeleteRequest: this.onDeleteHandler
                        })
                    }, t
                }(r.Component),
                b = Object(l.compose)(Object(s.a)(g, {
                    name: "onDeleteRequest"
                }))(k);
            var y = Object(a.connect)(null, function(e, t) {
                return {
                    onClose: function() {
                        e(Object(u.c)())
                    },
                    onSuccess: function() {
                        e(Object(u.c)()), t.onSuccess && t.onSuccess()
                    }
                }
            })(b)
        },
        I4Mg: function(e, t, n) {},
        I9oz: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(r.Bb, {
                            background: r.r.Base,
                            elevation: 1,
                            display: r.X.Flex,
                            flexDirection: r.Aa.Row,
                            alignItems: r.f.Stretch
                        }, this.props.children)
                    }, t
                }(o.Component);
            n.d(t, "a", function() {
                return a
            })
        },
        JVvM: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return g
            });
            var i, o, r, a = n("mrSG"),
                l = n("q1tI"),
                c = n("/7QA"),
                s = n("u3aQ"),
                d = n.n(s),
                u = n("HNnW"),
                p = n.n(u),
                m = n("GnwI"),
                f = n("Ue10");
            n("Bucx");
            ! function(e) {
                e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
            }(o || (o = {})),
            function(e) {
                e.Half = "160", e.Full = "320"
            }(r || (r = {}));
            var h = ((i = {})[r.Half] = d.a, i[r.Full] = p.a, i),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imageLoadError: !1
                        }, t.onErrorHandler = function() {
                            t.props.latencyTracking.reportInteractive(), t.setState({
                                imageLoadError: !0
                            })
                        }, t.onLoadHandler = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, i = null;
                        "number" == typeof this.props.videoCount && (i = l.createElement(f.Xa, {
                            position: f.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, l.createElement(f.Bb, {
                            alignItems: f.f.Center,
                            attachRight: !0,
                            className: "collection-preview-image__wrapper",
                            color: f.O.Overlay,
                            display: f.X.InlineFlex,
                            flexDirection: f.Aa.Column,
                            fontSize: f.Ca.Size5,
                            fullHeight: !0,
                            justifyContent: f.Wa.Center,
                            position: f.hb.Absolute,
                            textAlign: f.Nb.Center
                        }, l.createElement(f.qb, {
                            asset: f.rb.Collections,
                            height: 20,
                            width: 20
                        }), l.createElement(f.W, {
                            "data-test-selector": o.VideoCountOverlayText
                        }, Object(c.d)("{videoCount, plural, one {# video} other {# videos}}", {
                            videoCount: this.props.videoCount.toString()
                        }, "CollectionCard")))));
                        var a = r.Full;
                        return this.props.fallbackSize && (a = this.props.fallbackSize), !this.props.src || this.state.imageLoadError ? (t = h[a], (e = {})[a + "w"] = t, n = e) : (t = this.props.src, n = this.props.srcSet), l.createElement(f.Xa, {
                            position: f.hb.Relative
                        }, l.createElement(f.S, {
                            alt: this.props.alt,
                            onError: this.onErrorHandler,
                            onLoad: this.onLoadHandler,
                            src: t,
                            srcSet: n,
                            sizes: this.props.sizes
                        }), i)
                    }, t
                }(l.Component),
                g = Object(m.b)("CollectionPreviewImage")(v)
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function i(e) {
                var t = document.createElement("textarea");
                t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
                var n = !0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    n = !1
                }
                return document.body.removeChild(t), n
            }
            n.d(t, "a", function() {
                return i
            })
        },
        KYAw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return l
            });
            var i = n("mrSG"),
                o = n("cr+I"),
                r = n("Addw");

            function a(e, t) {
                var n = new URL("https://www.twitch.tv/collections/" + e);
                return t && (n.search = o.stringify(t)), n.toString()
            }

            function l(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = o.stringify(i.__assign({}, t, {
                    t: "number" == typeof t.t ? Object(r.a)(t.t) : void 0
                }))), n.toString()
            }
        },
        L7EG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_TrackingVideoContext"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "video"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "videoID"
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
                                        value: "broadcastType"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "roles"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isPartner"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 156
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_TrackingVideoContext($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        LoeD: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("u5aL"),
                a = n("Ue10"),
                l = function(e) {
                    var t = e.asset ? o.createElement(a.qb, {
                        asset: e.asset
                    }) : null;
                    return o.createElement(a.Ua, {
                        linkTo: e.linkTo,
                        onClick: e.onClick
                    }, o.createElement(a.Xa, {
                        alignItems: a.f.Center,
                        display: a.X.Flex,
                        flexGrow: 1,
                        padding: 1
                    }, t, o.createElement(a.Pa, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(a.W, null, e.title))))
                };
            n.d(t, "a", function() {
                return c
            });
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showDropMenu: !1
                    }, t.menuButtonClickHandler = function() {
                        t.setState(function(e) {
                            return {
                                showDropMenu: !e.showDropMenu
                            }
                        })
                    }, t.clickOutHandler = function() {
                        t.setState(function() {
                            return {
                                showDropMenu: !1
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.state.showDropMenu && (e = this.dropMenu()), o.createElement(a.Xa, {
                        flexGrow: 0,
                        flexShrink: 0,
                        display: a.X.Flex,
                        position: a.hb.Relative
                    }, o.createElement(a.Pa, {
                        fullHeight: !0
                    }, o.createElement(r.a, {
                        onClickOut: this.clickOutHandler
                    }, o.createElement(a.Xa, {
                        fullHeight: !0,
                        display: a.X.Flex,
                        alignItems: a.f.Stretch
                    }, o.createElement(a.z, {
                        disabled: 0 === this.props.options.length,
                        icon: a.rb.More,
                        onClick: this.menuButtonClickHandler,
                        type: a.F.Text
                    })), e)))
                }, t.prototype.dropMenu = function() {
                    var e = this.props.options.map(function(e, t) {
                        return o.createElement(l, i.__assign({
                            key: t
                        }, e))
                    });
                    return o.createElement(a.u, {
                        size: a.w.Small,
                        direction: a.v.BottomRight,
                        noTail: !0,
                        show: !0
                    }, e)
                }, t
            }(o.Component)
        },
        MxAq: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                o = n("fvjX"),
                r = n("kRBY"),
                a = n("SiBg"),
                l = (n("zHWM"), n("mrSG")),
                c = n("q1tI"),
                s = n("/7QA"),
                d = n("hyVY"),
                u = n("GnwI"),
                p = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeHandler = function() {
                            return t.props.onSelected(t.props.collection)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(p.Xa, {
                            display: p.X.Flex
                        }, c.createElement(p.Xa, {
                            padding: 2
                        }, c.createElement(p.N, {
                            label: "",
                            onChange: this.onChangeHandler,
                            checked: this.props.videoIsInCollection
                        })), c.createElement(p.Xa, {
                            padding: 1
                        }, c.createElement(p.I, {
                            aspect: p.p.Aspect16x9,
                            alt: this.props.collection.title,
                            src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            size: p.J.Size8
                        })), c.createElement(p.Xa, {
                            padding: 1,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, c.createElement(p.Xa, null, c.createElement(p.W, {
                            ellipsis: !0
                        }, this.props.collection.title)), c.createElement(p.Xa, {
                            display: p.X.Flex
                        }, c.createElement(p.Xa, {
                            padding: {
                                right: 1
                            }
                        }, c.createElement(p.W, null, Object(s.d)("{videoCount} video", {
                            videoCount: this.props.collection.itemsCount
                        }, "CollectionRowPresentation"))), c.createElement(p.Xa, {
                            padding: {
                                x: 1
                            }
                        }, c.createElement(p.W, null, "·")), c.createElement(p.Xa, {
                            padding: {
                                left: 1
                            }
                        }, c.createElement(p.W, null, Object(d.b)(this.props.collection.totalDuration))))))
                    }, t
                }(c.Component),
                f = Object(u.b)("CollectionRow")(m),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onCollectionRowChange = function(e) {
                            t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID, t.props.trackingPlace)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.channelID && this.props.videoID && this.props.collections ? c.createElement(p.Xa, null, this.props.collections.map(function(t) {
                            return c.createElement(f, {
                                key: t.id,
                                collection: t,
                                videoIsInCollection: e.props.containingCollections.map(function(e) {
                                    return e.id
                                }).indexOf(t.id) > -1,
                                onSelected: e.onCollectionRowChange
                            })
                        })) : c.createElement(p.Xa, null)
                    }, t
                }(c.Component),
                v = Object(u.b)("CollectionsListPresentation")(h);
            var g = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(r.f)(e),
                        collections: e.collections.collections,
                        containingCollections: e.collections.containingCollections
                    }
                }, function(e) {
                    return Object(o.bindActionCreators)({
                        fetchCollectionsForVideo: a.e,
                        updateItemInCollection: a.f
                    }, e)
                })(v),
                k = n("JVvM");
            n.d(t, "b", function() {
                return g
            }), n.d(t, "a", function() {
                return k.a
            })
        },
        "N1/g": function(e, t, n) {},
        NCCa: function(e, t, n) {},
        Nxrd: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = t.sortableHandle = t.sortableElement = t.sortableContainer = t.SortableHandle = t.SortableElement = t.SortableContainer = void 0;
            var i = n("jTc+");
            Object.defineProperty(t, "arrayMove", {
                enumerable: !0,
                get: function() {
                    return i.arrayMove
                }
            });
            var o = l(n("ezMb")),
                r = l(n("hk6T")),
                a = l(n("BCEg"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.SortableContainer = o.default, t.SortableElement = r.default, t.SortableHandle = a.default, t.sortableContainer = o.default, t.sortableElement = r.default, t.sortableHandle = a.default
        },
        R5Df: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CollectionManager_EditCollection"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "collectionID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ownerLogin"
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
                                value: "collection"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "collectionID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "includeAllItems"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
                                        }
                                    }]
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "collectionFields"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "itemConnection"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
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
                                        value: "ownerLogin"
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
                                        value: "displayName"
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
                    end: 476
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionManager_EditCollection($collectionID: ID! $ownerLogin: String!) {\ncollection(id: $collectionID options: { includeAllItems: true}) {\n...collectionFields\n...itemConnection\n}\nuser(login: $ownerLogin) {\nid\ndisplayName\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("0/Iv").definitions)), i.definitions = i.definitions.concat(r(n("dc0Q").definitions)), e.exports = i
        },
        "RYh/": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                l = n("ZDlU"),
                c = n("VwyG"),
                s = n("/MKj"),
                d = n("aCAx"),
                u = n("kRBY"),
                p = n("oJmH"),
                m = n("cZKs"),
                f = n("8/mp"),
                h = n("yR8l"),
                v = n("geRD"),
                g = n("8n0m"),
                k = n("rj3Y"),
                b = n("YJDT"),
                y = n("vEO4"),
                C = n("GnlB"),
                S = n("QzU5"),
                E = n("DMoW");
            ! function(e) {
                e.Public = "PUBLIC", e.Private = "PRIVATE"
            }(i || (i = {}));
            var w, I = function(e, t) {
                    var n;
                    return n = t.newDescription ? "" === t.newDescription ? "" : t.newDescription : e.description, o.__assign({}, Object(v.a)({
                        collectionID: e.id,
                        title: t.newTitle,
                        description: t.newDescription,
                        thumbnailInput: t.thumbnailInput,
                        type: t.newType
                    }), {
                        optimisticResponse: {
                            updateCollection: {
                                __typename: "UpdateCollectionPayload",
                                collection: o.__assign({
                                    __typename: "Collection"
                                }, e, {
                                    title: t.newTitle || e.title,
                                    type: t.newType || e.type,
                                    description: n
                                })
                            }
                        }
                    })
                },
                x = function(e, t, n, i) {
                    return o.__assign({}, Object(v.a)({
                        itemID: t,
                        collectionID: e.id,
                        position: n,
                        itemType: k.b.Video
                    }), {
                        optimisticResponse: {
                            reorderCollectionItem: {
                                __typename: "ReorderCollectionItemPayload",
                                collection: o.__assign({}, e, {
                                    __typename: "Collection",
                                    items: o.__assign({}, e.items, {
                                        edges: i
                                    })
                                })
                            }
                        }
                    })
                },
                D = function(e, t, n) {
                    var i = e.items.edges.filter(function(e) {
                            return e.node.id !== t
                        }),
                        r = e.id;
                    return o.__assign({}, Object(v.a)({
                        collectionID: r,
                        itemID: t,
                        itemType: n
                    }), {
                        optimisticResponse: {
                            removeCollectionItem: {
                                __typename: "RemoveCollectionItemPayload",
                                collection: o.__assign({}, e, {
                                    __typename: "Collection",
                                    items: o.__assign({}, e.items, {
                                        totalCount: i.length,
                                        edges: i
                                    })
                                })
                            }
                        }
                    })
                },
                O = function(e, t, n) {
                    var r = e.items.edges,
                        a = {
                            node: o.__assign({}, t, {
                                __typename: "Video",
                                broadcastType: S.a.Upload,
                                isDeleted: !1,
                                scope: i.Public,
                                viewCount: 0,
                                publishedAt: (new Date).toString()
                            }),
                            cursor: "optimistic-cursor",
                            __typename: "CollectionItemEdge"
                        },
                        l = r.slice();
                    return e.type === E.m.SERIES ? l.push(a) : l.unshift(a), o.__assign({}, Object(v.a)({
                        collectionID: e.id,
                        itemID: t.id,
                        itemType: n
                    }), {
                        optimisticResponse: {
                            addCollectionItem: {
                                __typename: "AddCollectionItemPayload",
                                collection: o.__assign({
                                    __typename: "Collection"
                                }, e, {
                                    items: o.__assign({
                                        __typename: "CollectionConnection"
                                    }, e.items, {
                                        totalCount: e.items.totalCount + 1,
                                        edges: l
                                    })
                                })
                            }
                        }
                    })
                },
                N = n("Ue10"),
                _ = n("ZuCk"),
                T = (n("lhqL"), String.fromCharCode(160));
            ! function(e) {
                e.AddVideoButton = "AddVideoButton", e.RemoveVideoButton = "AddVideoButton", e.DoneButton = "DoneButton"
            }(w || (w = {}));
            var V = 200,
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            addItemError: !1,
                            removeItemError: !1
                        }, t.onVideoAddHandler = function(e) {
                            t.setState({
                                addItemError: !1
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                if (!this.props.currentUser) return this.setState({
                                                    addItemError: !0
                                                }), [2];
                                                n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 3, , 4]), [4, this.props.addCollectionItem(O(this.props.data.collection, e, k.b.Video))];
                                            case 2:
                                                return n.sent(), Object(g.a)({
                                                    channelID: this.props.collection.owner.id,
                                                    itemID: e.id,
                                                    itemPosition: this.props.data.collection.items.totalCount - 1,
                                                    itemType: k.b.Video,
                                                    playlistID: this.props.collection.id,
                                                    userID: this.props.currentUser.id,
                                                    place: k.a.CollectionManager
                                                }), [3, 4];
                                            case 3:
                                                return t = n.sent(), a.k.error(t, "Failed adding item to collection"), this.setState({
                                                    addItemError: !0
                                                }), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }, t.onVideoRemoveHandler = function(e) {
                            t.setState({
                                removeItemError: !1
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                if (!this.props.currentUser) return this.setState({
                                                    removeItemError: !0
                                                }), [2];
                                                n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem(D(this.props.data.collection, e, k.b.Video))];
                                            case 2:
                                                return n.sent(), Object(g.c)({
                                                    channelID: this.props.collection.owner.id,
                                                    itemID: e,
                                                    itemPosition: this.props.data.collection.items.edges.findIndex(function(t) {
                                                        return t.node.id === e
                                                    }),
                                                    itemType: k.b.Video,
                                                    playlistID: this.props.collection.id,
                                                    userID: this.props.currentUser.id
                                                }), [3, 4];
                                            case 3:
                                                return t = n.sent(), a.k.error(t, "Failed adding item to collection"), this.setState({
                                                    removeItemError: !0
                                                }), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }, t.onLoadMoreHandler = function() {
                            if (!t.props.data.user || !t.props.data.user.searchVideos) return Promise.reject(new Error("Encountered unexpected null value for user or searchVideos, cannot load more."));
                            var e = t.props.data.user.searchVideos.edges.length - 1,
                                n = t.props.data.user.searchVideos.edges[e].cursor;
                            return t.props.data.fetchMore({
                                query: _,
                                variables: {
                                    creatorID: t.props.data.collection.owner.id,
                                    after: n,
                                    collectionID: t.props.data.collection.id
                                },
                                updateQuery: j
                            }).then(function() {})
                        }, t.onCompleteClickHandler = function() {
                            t.props.onComplete()
                        }, t.onSearchInputChangeHandler = function(e) {
                            var n = e.currentTarget.value;
                            t.state.searchChangeTimeoutID && clearTimeout(t.state.searchChangeTimeoutID);
                            var i = setTimeout(function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    return o.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, , 2, 3]), [4, this.props.data.refetch({
                                                    creatorID: this.props.data.collection.owner.id,
                                                    search: {
                                                        term: n
                                                    },
                                                    collectionID: this.props.data.collection.id
                                                })];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                return this.setState({
                                                    searchChangeTimeoutID: void 0
                                                }), [7];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }, V);
                            t.setState({
                                searchChangeTimeoutID: i
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                        return r.createElement(N.i, {
                            type: N.n.FadeIn,
                            delay: N.j.Medium,
                            duration: N.k.Medium,
                            enabled: !0
                        }, r.createElement(N.Bb, {
                            background: N.r.Base,
                            className: "collection-editor-item-selector",
                            display: N.X.Flex,
                            flexDirection: N.Aa.Column
                        }, r.createElement(N.Xa, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, r.createElement(N.W, {
                            fontSize: N.Ca.Size4
                        }, Object(a.d)("Add videos to collection", "CollectionItemSelectorModal")), r.createElement(N.Xa, {
                            padding: {
                                y: 1
                            }
                        }, r.createElement(N.Ea, {
                            label: Object(a.d)("Search your videos", "CollectionItemSelectorModal"),
                            error: !!this.isCollectionFull(),
                            errorMessage: this.isCollectionFull() ? Object(a.d)("This collection has the maximum number of items. Please remove an item to add more.", "CollectionItemSelectorModal") : T,
                            hint: T
                        }, r.createElement(N.tb, {
                            onChange: this.onSearchInputChangeHandler,
                            placeholder: Object(a.d)("Filter by video title", "CollectionItemSelectorModal")
                        })))), r.createElement(f.b, {
                            suppressScrollX: !0
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Column
                        }, this.renderVideoSelectors(), r.createElement(f.a, {
                            enabled: e,
                            loadMore: this.onLoadMoreHandler
                        }))), r.createElement(N.Bb, {
                            display: N.X.Flex,
                            justifyContent: N.Wa.Center,
                            padding: {
                                y: 2
                            },
                            background: N.r.Base,
                            flexShrink: 0
                        }, r.createElement(N.z, {
                            "data-test-selector": w.DoneButton,
                            onClick: this.onCompleteClickHandler
                        }, Object(a.d)("Done", "CollectionItemSelectorModal"))), r.createElement(m.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t.prototype.componentWillUnmount = function() {
                        this.state.searchChangeTimeoutID && clearTimeout(this.state.searchChangeTimeoutID)
                    }, t.prototype.renderVideoSelectors = function() {
                        var e = this;
                        if (this.state.searchChangeTimeoutID || this.props.data.loading) return r.createElement(N.Za, {
                            fillContent: !0,
                            delay: 500
                        });
                        if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return r.createElement(N.Xa, {
                            alignSelf: N.g.Center,
                            justifyContent: N.Wa.Center
                        }, Object(a.d)("There was an error searching your videos. Please try again.", "CollectionItemSelectorModal"));
                        var t = this.props.data.user.searchVideos.edges.map(function(e) {
                            return e.node
                        });
                        return 0 === t.length ? r.createElement(N.Xa, {
                            alignSelf: N.g.Center,
                            justifyContent: N.Wa.Center
                        }, Object(a.d)("No results found.", "CollectionItemSelectorModal")) : t.map(function(n, i) {
                            var o = e.videoIsInCollection(e.props.data.collection, n),
                                a = o ? N.r.Alt2 : N.r.Base;
                            return r.createElement(N.Bb, {
                                alignItems: N.f.Center,
                                display: N.X.Flex,
                                flexDirection: N.Aa.Row,
                                flexGrow: 1,
                                key: i,
                                padding: {
                                    x: 3,
                                    y: .5
                                },
                                background: a
                            }, r.createElement(N.Xa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                padding: {
                                    right: .5
                                },
                                ellipsis: !0
                            }, r.createElement(b.a, {
                                video: n,
                                selected: o
                            })), r.createElement(N.Xa, {
                                flexGrow: 0,
                                flexShrink: 0
                            }, e.renderVideoResultButton(o, t[i])))
                        })
                    }, t.prototype.renderVideoResultButton = function(e, t) {
                        var n = this;
                        return e ? r.createElement(N.z, {
                            "data-test-selector": w.RemoveVideoButton,
                            onClick: function() {
                                n.onVideoRemoveHandler(t.id)
                            },
                            type: N.F.Hollow
                        }, Object(a.d)("Remove", "CollectionItemSelectorModal")) : r.createElement(N.z, {
                            "data-test-selector": w.AddVideoButton,
                            onClick: function() {
                                n.onVideoAddHandler(t)
                            },
                            type: N.F.Hollow,
                            disabled: this.isCollectionFull()
                        }, Object(a.d)("Add", "CollectionItemSelectorModal"))
                    }, t.prototype.videoIsInCollection = function(e, t) {
                        return -1 !== e.items.edges.findIndex(function(e) {
                            return e.node.id === t.id
                        })
                    }, t.prototype.isCollectionFull = function() {
                        return !this.props.data.collection || this.props.data.collection.items.totalCount >= 100
                    }, t
                }(r.Component),
                j = function(e, t) {
                    if (!t.fetchMoreResult) return e;
                    var n = t.fetchMoreResult;
                    return n.user && n.user.searchVideos ? {
                        user: o.__assign({}, n.user, {
                            searchVideos: o.__assign({}, n.user.searchVideos, {
                                edges: Object(v.c)(e.user.searchVideos.edges, n.user.searchVideos.edges)
                            })
                        }),
                        collection: e.collection
                    } : e
                },
                A = Object(p.compose)(Object(h.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                creatorID: e.collection.owner.id,
                                collectionID: e.collection.id
                            }
                        }
                    }
                }), Object(h.a)(y, {
                    name: "addCollectionItem"
                }), Object(h.a)(C, {
                    name: "removeCollectionItem"
                }))(F);
            var L, R = Object(s.connect)(function(e) {
                    return {
                        currentUser: Object(u.e)(e)
                    }
                }, function(e, t) {
                    return {
                        onComplete: function() {
                            t.onComplete(), e(Object(d.c)())
                        }
                    }
                })(A),
                P = n("mLw1"),
                M = n("Nxrd"),
                X = n("V+GM"),
                B = n("NvVO"),
                U = n("2xye"),
                H = n("GnwI"),
                W = n("tMx0"),
                q = n("HYil"),
                G = n("9C/b"),
                z = n("lZCe"),
                Q = n("hyVY"),
                $ = n("D7An"),
                Y = n("MxAq"),
                K = n("5Ijs"),
                J = n("8Ad5"),
                Z = (n("d+Oo"), 160),
                ee = String.fromCharCode(160);
            ! function(e) {
                e.EditDescriptionButton = "EditDescriptionButton", e.CancelButton = "CancelButton", e.SaveButton = "SaveButton", e.DescriptionInput = "DescriptionInput", e.DescriptionText = "DescriptionText"
            }(L || (L = {}));
            var te, ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showDescriptionInput: !1,
                            collectionDescription: "",
                            localDescriptionChanges: !1
                        }, t.renderDescription = function() {
                            return r.createElement(N.Xa, {
                                alignItems: N.f.Center
                            }, t.props.defaultDescription && r.createElement(N.Xa, {
                                className: "collection-description-editor__description-text",
                                "data-test-selector": L.DescriptionText,
                                display: N.X.InlineFlex,
                                margin: {
                                    right: .5
                                }
                            }, r.createElement(N.W, {
                                lines: 1,
                                ellipsis: !0
                            }, t.props.defaultDescription)), r.createElement(N.Xa, {
                                display: N.X.InlineFlex
                            }, r.createElement(N.z, {
                                "data-test-selector": L.EditDescriptionButton,
                                type: N.F.Hollow,
                                onClick: t.onShowDescriptionInput
                            }, t.props.defaultDescription ? Object(a.d)("Edit", "CollectionEditorInfoCard") : Object(a.d)("Add description", "CollectionEditorInfoCard"))))
                        }, t.renderEditableDescription = function() {
                            return r.createElement(N.Xa, null, r.createElement(N.Xa, {
                                className: "collection-description-editor__input",
                                display: N.X.InlineFlex,
                                margin: {
                                    right: .5
                                }
                            }, r.createElement(N.Ra, {
                                "data-test-selector": L.DescriptionInput,
                                defaultValue: t.props.defaultDescription,
                                disabled: t.props.disabled,
                                maxLength: Z,
                                onChange: t.onDescriptionInputChange,
                                placeholder: Object(a.d)("Let your viewers know what these video are about.", "CollectionDescriptionEditor"),
                                type: N.Ta.Text,
                                onKeyDown: t.onKeyDown
                            })), r.createElement(N.Xa, {
                                display: N.X.InlineFlex,
                                margin: {
                                    right: .5
                                }
                            }, r.createElement(N.z, {
                                "data-test-selector": L.SaveButton,
                                disabled: !t.canSaveDescription(),
                                onClick: t.onSubmit
                            }, Object(a.d)("Save", "CollectionDescriptionEditor"))), r.createElement(N.Xa, {
                                display: N.X.InlineFlex
                            }, r.createElement(N.z, {
                                "data-test-selector": L.CancelButton,
                                onClick: t.onCancel,
                                type: N.F.Hollow
                            }, Object(a.d)("Cancel", "CollectionDescriptionEditor"))))
                        }, t.onDescriptionInputChange = function(e) {
                            t.setState({
                                collectionDescription: e.currentTarget.value,
                                localDescriptionChanges: !0
                            })
                        }, t.onSubmit = function() {
                            t.setState({
                                localDescriptionChanges: !1
                            }, function() {
                                return t.props.onSubmit(t.state.collectionDescription)
                            })
                        }, t.onKeyDown = function(e) {
                            e.keyCode === J.a.Enter && t.canSaveDescription() && t.onSubmit()
                        }, t.onShowDescriptionInput = function() {
                            t.setState({
                                showDescriptionInput: !0
                            })
                        }, t.onCancel = function() {
                            t.setState({
                                showDescriptionInput: !1
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = Object(a.d)("{currentLength} of {maxLength} characters.", {
                                currentLength: this.state.collectionDescription.length.toString(),
                                maxLength: Z.toString()
                            }, "CollectionDescriptionEditor"),
                            t = "";
                        return !this.state.localDescriptionChanges && this.props.errorMessage.length > 0 && (t = this.props.errorMessage), r.createElement(N.Ea, {
                            hint: this.state.collectionDescription.length > 0 ? e : ee,
                            error: t.length > 0,
                            errorMessage: t,
                            label: Object(a.d)("Description", "CollectionDescriptionEditor")
                        }, this.state.showDescriptionInput ? this.renderEditableDescription() : this.renderDescription())
                    }, t.prototype.canSaveDescription = function() {
                        var e = !!(this.state.collectionDescription && this.state.collectionDescription.length > Z),
                            t = this.state.collectionDescription !== this.props.defaultDescription;
                        return !e && t
                    }, t
                }(r.Component),
                ie = n("mZc/"),
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSeriesCollectionClick = function(e) {
                            var n = e.target.checked ? E.m.SERIES : E.m.DEFAULT;
                            t.props.onChange(n)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(N.Ea, {
                            error: !!this.props.errorMessage,
                            errorMessage: this.props.errorMessage,
                            label: Object(a.d)("Series Checkbox", "CollectionEditorInfoCard")
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            alignItems: N.f.Center,
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(N.Xa, {
                            display: N.X.InlineFlex
                        }, r.createElement(N.N, {
                            checked: this.props.collectionType === E.m.SERIES,
                            onChange: this.onSeriesCollectionClick,
                            label: Object(a.d)("This collection is a series", "CollectionEditorInfoCard")
                        })), r.createElement(N.Xa, {
                            display: N.X.InlineFlex
                        }, r.createElement(ie.a, {
                            direction: N.v.Right
                        }, Object(a.d)("A series lets viewers watch a collection in chronological order. This is helpful for content like Let’s Plays, story games, and creative projects.", "CollectionEditorInfo")))))
                    }, t
                }(r.Component),
                re = n("/+vS"),
                ae = n("oqbW");
            ! function(e) {
                e[e.AddVideos = 0] = "AddVideos", e[e.DeleteButton = 1] = "DeleteButton", e[e.ErrorMessage = 2] = "ErrorMessage", e[e.PlayAllButton = 3] = "PlayAllButton", e[e.SaveButton = 4] = "SaveButton", e[e.Thumbnail = 5] = "Thumbnail", e[e.SeriesCollectionCheckbox = 6] = "SeriesCollectionCheckbox"
            }(te || (te = {}));
            var le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saveTitleError: "",
                            saveDescriptionError: "",
                            saveTypeError: ""
                        }, t.onAddVideosClickHandler = function() {
                            t.props.onAddVideosClick(t.props.collection, t.props.onVideosChange)
                        }, t.onDeleteOptionClickHandler = function() {
                            t.props.onDeleteOptionClick(t.props.collection, function() {
                                t.props.history.push("/" + t.props.match.params.creatorLogin + "/manager/collections", {
                                    content: U.PageviewContent.CollectionCard,
                                    medium: U.PageviewMedium.VideoManagerCollectionEditor
                                })
                            })
                        }, t.onSaveTitleClick = function(e) {
                            t.setState({
                                saveTitleError: ""
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(I(this.props.collection, {
                                                    newTitle: e
                                                }))];
                                            case 1:
                                                return n.sent(), [3, 3];
                                            case 2:
                                                return t = n.sent(), a.k.error(t, "Failed to update collection title"), this.setState({
                                                    saveTitleError: Object(a.d)("The title update failed to save. Please try again.", "CollectionEditorInfoCard")
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }, t.onSaveDescriptionClick = function(e) {
                            t.setState({
                                saveDescriptionError: ""
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(I(this.props.collection, {
                                                    newDescription: e
                                                }))];
                                            case 1:
                                                return n.sent(), [3, 3];
                                            case 2:
                                                return t = n.sent(), a.k.error(t, "Failed to update collection description"), this.setState({
                                                    saveDescriptionError: Object(a.d)("The description update failed to save. Please try again.", "CollectionEditorInfoCard")
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }, t.onSeriesCollectionClick = function(e) {
                            t.setState({
                                saveTypeError: ""
                            }, function() {
                                return o.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return o.__generator(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(I(this.props.collection, {
                                                    newType: e
                                                }))];
                                            case 1:
                                                return n.sent(), [3, 3];
                                            case 2:
                                                return t = n.sent(), a.k.error(t, "Failed to update collection type"), this.setState({
                                                    saveTypeError: Object(a.d)("The type update failed to save. Please try again.", "CollectionEditorInfoCard")
                                                }), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return r.createElement(N.Bb, {
                            background: N.r.Alt,
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row,
                            alignItems: N.f.Stretch
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Column
                        }, r.createElement(N.Xa, {
                            margin: {
                                top: 1,
                                bottom: .5
                            }
                        }, r.createElement(N.W, {
                            color: N.O.Alt,
                            type: N.Rb.H6,
                            bold: !0
                        }, Object(a.d)("Collection Thumbnail", "CollectionEditorInfoCard"))), r.createElement(Y.a, {
                            "data-test-selector": te.Thumbnail,
                            alt: this.props.collection.title,
                            sizes: [{
                                size: "320px"
                            }],
                            src: this.props.collection.thumbnailURL,
                            videoCount: this.props.collection.items.totalCount
                        })), r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Column,
                            margin: {
                                left: 3
                            },
                            flexGrow: 2,
                            flexShrink: 0
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row,
                            margin: {
                                top: 1,
                                bottom: .5
                            }
                        }, r.createElement(re.a, {
                            onSubmit: this.onSaveTitleClick,
                            callToAction: Object(a.d)("Save", "CollectionEditorInfoCard"),
                            errorMessage: this.state.saveTitleError,
                            defaultTitle: this.props.collection.title
                        })), r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row
                        }, r.createElement(ne, {
                            onSubmit: this.onSaveDescriptionClick,
                            errorMessage: this.state.saveDescriptionError,
                            defaultDescription: this.props.collection.description
                        })), r.createElement(z.a, {
                            name: $.b.VODTopShelf,
                            assignments: {
                                fallback: function() {
                                    return null
                                },
                                control: function() {
                                    return null
                                },
                                on: function() {
                                    return r.createElement(oe, {
                                        collectionType: e.props.collection.type,
                                        errorMessage: e.state.saveTypeError,
                                        onChange: e.onSeriesCollectionClick
                                    })
                                }
                            }
                        }), r.createElement(N.Xa, {
                            margin: {
                                y: .5
                            },
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row
                        }, r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, Object(a.d)("{totalViewCount, plural, one {# view} other {# views}}", {
                            totalViewCount: this.props.collection.viewCount || 0
                        }, "CollectionEditorInfoCard")), r.createElement(N.Xa, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, "·")), r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, Object(Q.b)(this.props.collection.lengthSeconds)), r.createElement(N.Xa, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, "·")), r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, Object(a.d)("Last updated {updatedAt}", {
                            updatedAt: Object(a.c)(new Date(this.props.collection.updatedAt), "long")
                        }, "CollectionEditorInfoCard")), r.createElement(N.Xa, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, "·")), r.createElement(N.W, {
                            type: N.Rb.Span,
                            color: N.O.Alt2
                        }, Object(a.d)("{videoCount} of {videoTotal} videos added to collection", {
                            videoCount: this.props.collection.items.totalCount,
                            videoTotal: 100
                        }, "CollectionEditorInfoCard"))), this.managerMenu()))
                    }, t.prototype.managerMenu = function() {
                        var e = this.props.collection.items.totalCount >= 100,
                            t = r.createElement(N.z, {
                                "data-test-selector": te.AddVideos,
                                icon: N.rb.Plus,
                                onClick: this.onAddVideosClickHandler,
                                type: N.F.Text,
                                disabled: e
                            }, Object(a.d)("Add videos", "CollectionEditorInfoCard"));
                        return e && (t = r.createElement(N.Ub, {
                            label: Object(a.d)("This collection has the maximum number of items. Please remove an item to add more.", "CollectionEditorInfoCard"),
                            direction: N.Wb.Bottom
                        }, t)), r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row
                        }, r.createElement(N.z, {
                            "data-test-selector": te.PlayAllButton,
                            icon: N.rb.Play,
                            type: N.F.Text,
                            linkTo: "/collections/" + this.props.collection.id
                        }, Object(a.d)("Play All", "CollectionEditorInfoCard")), t, r.createElement(K.a, {
                            balloonDirection: N.v.BottomCenter,
                            buttonType: N.F.Text,
                            content: {
                                collectionID: this.props.collection.id
                            },
                            tracking: {
                                location: U.PageviewLocation.VideoManagerCollectionEditor
                            }
                        }), r.createElement(N.z, {
                            "data-test-selector": te.DeleteButton,
                            icon: N.rb.Trash,
                            type: N.F.Text,
                            onClick: this.onDeleteOptionClickHandler
                        }, Object(a.d)("Delete", "CollectionEditorInfoCard")))
                    }, t
                }(r.Component),
                ce = Object(p.compose)(Object(p.graphql)(ae, {
                    name: "updateCollection"
                }))(Object(G.a)(le));
            var se, de = Object(s.connect)(null, function(e) {
                    return {
                        onDeleteOptionClick: function(t, n) {
                            e(Object(d.d)(q.a, {
                                collection: t,
                                onSuccess: n
                            }))
                        },
                        onAddVideosClick: function(t, n) {
                            e(Object(d.d)(R, {
                                collection: t,
                                onComplete: n
                            }))
                        }
                    }
                })(ce),
                ue = function() {
                    return r.createElement(N.Bb, {
                        background: N.r.Alt,
                        display: N.X.Flex,
                        flexDirection: N.Aa.Row,
                        alignItems: N.f.Stretch,
                        margin: {
                            bottom: 5
                        }
                    }, r.createElement(N.Xa, {
                        display: N.X.Flex,
                        flexDirection: N.Aa.Column
                    }, r.createElement(N.Xa, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(N.gb, {
                        width: 100
                    })), r.createElement(N.gb, {
                        height: 180,
                        width: 320
                    })), r.createElement(N.Xa, {
                        display: N.X.Flex,
                        flexDirection: N.Aa.Column,
                        margin: {
                            left: 3
                        },
                        flexGrow: 2,
                        flexShrink: 0
                    }, r.createElement(N.Xa, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(N.gb, {
                        width: 50
                    })), r.createElement(N.gb, {
                        height: 25,
                        width: 400
                    }), r.createElement(N.Xa, {
                        margin: {
                            top: 1,
                            bottom: 3
                        }
                    }, r.createElement(N.gb, {
                        height: 15,
                        width: 300
                    })), r.createElement(N.gb, {
                        height: 30,
                        width: 400
                    })))
                },
                pe = n("+AC8"),
                me = n("LoeD"),
                fe = n("9afg"),
                he = n("0+qQ"),
                ve = n("I9oz");
            ! function(e) {
                e.Control = "control", e.Variant1 = "variant1"
            }(se || (se = {}));
            var ge, ke = n("2jWE");
            n("N1/g");
            ! function(e) {
                e[e.ItemLength = 0] = "ItemLength", e[e.VideoLink = 1] = "VideoLink", e[e.Overlay = 2] = "Overlay"
            }(ge || (ge = {}));
            var be, ye = Object(M.SortableHandle)(function() {
                    return r.createElement(N.qb, {
                        asset: N.rb.DragHandle
                    })
                }),
                Ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saveError: !1,
                            deleteError: !1
                        }, t.subHeader = function(e) {
                            return r.createElement(N.Bb, {
                                display: N.X.Flex,
                                flexDirection: N.Aa.Row,
                                margin: {
                                    top: .5
                                },
                                color: N.O.Alt2
                            }, r.createElement(N.Xa, {
                                padding: {
                                    right: 1
                                }
                            }, r.createElement(N.Ub, {
                                direction: N.Wb.Bottom,
                                align: N.Vb.Center,
                                label: Object(a.d)("Published At", "CollectionItemCard")
                            }, r.createElement(N.W, null, Object(a.c)(new Date(e.publishedAt), "long")))), r.createElement(N.Xa, {
                                padding: {
                                    right: 1
                                },
                                display: N.X.Flex,
                                alignItems: N.f.Center
                            }, r.createElement(N.Ab, {
                                "data-test-selector": ge.ItemLength,
                                label: Object(a.d)("Length", "CollectionItemCard"),
                                value: Object(Q.b)(e.lengthSeconds),
                                icon: N.rb.GlyphLength
                            })), r.createElement(N.Xa, {
                                padding: {
                                    right: 1
                                },
                                display: N.X.Flex,
                                alignItems: N.f.Center
                            }, r.createElement(N.Ab, {
                                label: Object(a.d)("Video Type", "CollectionItemCard"),
                                value: Object(pe.a)(e.broadcastType),
                                icon: N.rb.NavVideos
                            })))
                        }, t.reportImageInteractive = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.collectionItem;
                        return r.createElement(N.Xa, {
                            className: "collection-item-card",
                            margin: {
                                y: 1
                            }
                        }, r.createElement(ve.a, null, r.createElement(N.Bb, {
                            background: N.r.Alt,
                            display: N.X.Flex,
                            className: "collection-item__drag-handle"
                        }, r.createElement(ye, null)), r.createElement(N.Xa, {
                            alignSelf: N.g.Center,
                            padding: {
                                x: 1
                            }
                        }, this.props.itemIndex + 1), r.createElement(N.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            position: N.hb.Relative
                        }, r.createElement(N.I, {
                            aspect: N.p.Aspect16x9,
                            size: N.J.Size16,
                            onLoad: this.reportImageInteractive,
                            onError: this.reportImageInteractive,
                            src: e.previewThumbnailURL ? e.previewThumbnailURL : "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            alt: e.title
                        }), this.renderOverlay(this.props.collectionItem)), r.createElement(N.Xa, {
                            alignItems: N.f.Start,
                            display: N.X.Flex,
                            flexDirection: N.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            justifyContent: N.Wa.Center,
                            padding: {
                                x: 2
                            }
                        }, r.createElement(N.Ub, {
                            label: Object(a.d)("Watch this video", "CollectionItemCard"),
                            direction: N.Wb.Right
                        }, r.createElement(N.W, {
                            type: N.Rb.H5,
                            color: N.O.Alt
                        }, r.createElement(N.U, {
                            "data-test-selector": ge.VideoLink,
                            to: {
                                pathname: "/videos/" + this.props.collectionItem.id,
                                state: {
                                    content: U.PageviewContent.CollectionItemCard,
                                    medium: U.PageviewMedium.VideoManagerCollectionEditor
                                }
                            }
                        }, e.title))), this.subHeader(e)), r.createElement(he.a, null, r.createElement(fe.a, {
                            value: e.viewCount.toString(),
                            icon: N.rb.GlyphViews,
                            label: Object(a.d)("Total videos", "CollectionItemCard")
                        })), r.createElement(me.a, {
                            options: this.collectionMenuOptions(e)
                        })))
                    }, t.prototype.collectionMenuOptions = function(e) {
                        var t = this;
                        return [{
                            asset: N.rb.Edit,
                            title: Object(a.d)("Set as collection thumbnail", "CollectionItemCard"),
                            onClick: function() {
                                t.setState({
                                    saveError: !1
                                }, function() {
                                    return o.__awaiter(t, void 0, void 0, function() {
                                        var t;
                                        return o.__generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return n.trys.push([0, 2, , 3]), [4, this.props.updateCollection(I(this.props.parentCollection, {
                                                        thumbnailInput: {
                                                            id: e.id,
                                                            type: k.b.Video
                                                        }
                                                    }))];
                                                case 1:
                                                    return n.sent(), [3, 3];
                                                case 2:
                                                    return t = n.sent(), a.k.error(t, "Failed to set this video as the collection thumbnail."), this.setState({
                                                        saveError: !0
                                                    }), [3, 3];
                                                case 3:
                                                    return [2]
                                            }
                                        })
                                    })
                                })
                            }
                        }, {
                            asset: N.rb.Trash,
                            title: Object(a.d)("Remove from collection", "CollectionItemCard"),
                            onClick: function() {
                                t.setState({
                                    deleteError: !1
                                }, function() {
                                    return o.__awaiter(t, void 0, void 0, function() {
                                        var t;
                                        return o.__generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    if (!this.props.data.currentUser || !this.props.data.currentUser.id) return this.setState({
                                                        deleteError: !0
                                                    }), [2];
                                                    n.label = 1;
                                                case 1:
                                                    return n.trys.push([1, 3, , 4]), [4, this.props.removeCollectionItem(D(this.props.parentCollection, this.props.collectionItem.id, k.b.Video))];
                                                case 2:
                                                    return n.sent(), Object(g.c)({
                                                        channelID: this.props.parentCollection.owner.id,
                                                        itemID: e.id,
                                                        itemPosition: this.props.itemIndex,
                                                        itemType: k.b.Video,
                                                        playlistID: this.props.parentCollection.id,
                                                        userID: this.props.data.currentUser.id
                                                    }), [3, 4];
                                                case 3:
                                                    return t = n.sent(), a.k.error(t, "Failed to set this video as the collection thumbnail."), this.setState({
                                                        deleteError: !0
                                                    }), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                })
                            }
                        }]
                    }, t.prototype.renderOverlay = function(e) {
                        if (e.isDeleted || e.scope !== i.Public) {
                            var t = null,
                                n = null;
                            return e.isDeleted ? (t = Object(a.d)("Deleted", "CollectionItemCard"), n = r.createElement(N.qb, {
                                asset: N.rb.Trash
                            })) : e.scope !== i.Public && (n = r.createElement(N.qb, {
                                asset: N.rb.Lock
                            }), t = Object(a.d)("Private", "CollectionItemCard")), r.createElement(N.Bb, {
                                attachTop: !0,
                                attachLeft: !0,
                                fullWidth: !0,
                                fullHeight: !0,
                                alignItems: N.f.Center,
                                background: N.r.Overlay,
                                "data-test-selector": ge.Overlay,
                                display: N.X.Flex,
                                flexDirection: N.Aa.Column,
                                justifyContent: N.Wa.Center,
                                position: N.hb.Absolute
                            }, n, r.createElement(N.W, null, t))
                        }
                        return null
                    }, t
                }(r.Component),
                Se = Object(p.compose)(Object(H.b)("CollectionItemCard"), Object(p.graphql)(ke), Object(p.graphql)(ae, {
                    name: "updateCollection"
                }), Object(p.graphql)(C, {
                    name: "removeCollectionItem"
                }))(Ce),
                Ee = Object(M.SortableElement)(function(e) {
                    return r.createElement(Se, o.__assign({}, e))
                }),
                we = Object(M.SortableContainer)(function(e) {
                    var t = e.collection,
                        n = e.items,
                        i = 0;
                    return r.createElement(N.Xa, null, n.map(function(e, n) {
                        return !!e.id && r.createElement(Ee, {
                            parentCollection: t,
                            collectionItem: e,
                            index: n,
                            key: e.id,
                            itemIndex: i++
                        })
                    }))
                }),
                Ie = n("R5Df"),
                xe = n("bHHn");
            n("aMfF");
            ! function(e) {
                e.BackButton = "BackButton", e.AddVideos = "AddVideos", e.NoCollectionItemsCTA = "NoCollectionItemsCTA", e.CollectionItemsUnavailableError = "CollectionItemsUnavailableError", e.CollectionUnavailableError = "CollectionUnavailableError"
            }(be || (be = {}));
            var De = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isEditingTitle: !1,
                            saveError: !1
                        }, t.onSortEnd = function(e) {
                            var n = e.oldIndex,
                                i = e.newIndex;
                            return o.__awaiter(t, void 0, Promise, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.props.data.collection && n !== i ? (e = Object(M.arrayMove)(this.props.data.collection.items.edges, n, i), [4, this.onItemsChange(e, e[i].node.id, i)]) : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onItemsChange = function(e, n, i) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, r;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (!this.props.data.collection) return [3, 4];
                                            t = x(this.props.data.collection, n, i, e), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, this.props.reorderCollectionItem(t)];
                                        case 2:
                                            return o.sent(), [3, 4];
                                        case 3:
                                            return r = o.sent(), a.k.error(r, "Collection reordering Mutation failed"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onAddVideosClickHandler = function() {
                            t.props.data.collection && t.props.onAddVideosClick(t.props.data.collection, t.props.data.refetch)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPageTitle()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && (this.props.latencyTracking.reportInteractive(), this.setPageTitle())
                    }, t.prototype.render = function() {
                        var e, t, n = !1;
                        return this.props.data.loading ? (e = this.collectionInfoPlaceholder(), t = this.collectionCardPlaceholders()) : this.props.data.error || !this.props.data.collection ? (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()) : this.props.data.collection && this.props.data.collection.items.totalCount > 0 ? (e = r.createElement(de, {
                            collection: this.props.data.collection,
                            onVideosChange: this.props.data.refetch
                        }), t = r.createElement(we, {
                            collection: this.props.data.collection,
                            items: this.props.data.collection.items.edges.map(function(e) {
                                return e.node
                            }),
                            onSortEnd: this.onSortEnd,
                            useDragHandle: !0
                        }), n = this.props.data.collection.items.pageInfo.hasNextPage || !1) : this.props.data.collection && this.props.data.collection.items.totalCount <= 0 ? (e = r.createElement(de, {
                            collection: this.props.data.collection,
                            onVideosChange: this.props.data.refetch
                        }), t = this.noCollectionItemsCTA()) : (e = this.collectionUnavailableError(), t = this.collectionItemsUnavaibleError()), this.props.data.collection && this.props.data.collection.owner && this.props.data.collection.owner.login !== this.props.match.params.creatorLogin ? r.createElement(P.a, {
                            to: "/" + this.props.match.params.creatorLogin + "/manager/collections"
                        }) : r.createElement(f.b, null, r.createElement(N.Xa, {
                            padding: 3,
                            margin: {
                                bottom: 3
                            },
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row,
                            className: "collection-editor-page"
                        }, r.createElement(N.Xa, {
                            flexGrow: 1,
                            margin: {
                                bottom: 3
                            }
                        }, r.createElement(N.Xa, {
                            margin: {
                                bottom: 1
                            },
                            flexGrow: 1,
                            flexDirection: N.Aa.Row,
                            display: N.X.Flex
                        }, r.createElement(N.Xa, {
                            flexGrow: 1
                        }, r.createElement(N.W, {
                            type: N.Rb.H3
                        }, Object(a.d)("Edit Collection", "CollectionEditorPagePresentation")))), r.createElement(N.Xa, {
                            padding: {
                                y: .5
                            }
                        }, r.createElement(N.U, {
                            "data-test-selector": be.BackButton,
                            hoverUnderlineNone: !0,
                            to: {
                                pathname: "/" + this.props.match.params.creatorLogin + "/manager/collections",
                                state: {
                                    content: "all_collections",
                                    medium: U.PageviewMedium.VideoManagerCollectionEditor
                                }
                            }
                        }, r.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexDirection: N.Aa.Row,
                            alignItems: N.f.Center
                        }, r.createElement(N.qb, {
                            asset: N.rb.ChatSettingsBack,
                            height: 20,
                            width: 20
                        }), r.createElement(N.W, {
                            align: N.bc.Middle,
                            bold: !0
                        }, Object(a.d)("All collections", "CollectionEditorPagePresentation"))))), e, t, r.createElement(f.a, {
                            enabled: n,
                            loadMore: this.props.loadMore
                        }))))
                    }, t.prototype.collectionCardPlaceholders = function() {
                        return [r.createElement(W.a, {
                            key: 1
                        }), r.createElement(W.a, {
                            key: 2
                        }), r.createElement(W.a, {
                            key: 3
                        })]
                    }, t.prototype.collectionInfoPlaceholder = function() {
                        return r.createElement(ue, null)
                    }, t.prototype.noCollectionItemsCTA = function() {
                        return r.createElement(N.Xa, {
                            alignItems: N.f.Center,
                            "data-test-selector": be.NoCollectionItemsCTA,
                            display: N.X.Flex,
                            flexDirection: N.Aa.Column,
                            justifyContent: N.Wa.Center,
                            margin: {
                                top: 5
                            }
                        }, r.createElement(N.W, {
                            type: N.Rb.H4
                        }, Object(a.d)("Put all your best videos in one spot.", "CollectionEditorPagePresentation")), r.createElement(N.W, {
                            type: N.Rb.H4
                        }, Object(a.d)("Videos organized into collections help your viewers easily find related content.", "CollectionEditorPagePresentation")), r.createElement(N.W, {
                            type: N.Rb.H4
                        }, Object(a.d)("Your most recently updated Collection will be featured at the top of channel’s video page.", "CollectionEditorPagePresentation")), r.createElement(N.Xa, {
                            padding: 2
                        }, r.createElement(N.z, {
                            "data-test-selector": be.AddVideos,
                            icon: N.rb.Plus,
                            onClick: this.onAddVideosClickHandler,
                            type: N.F.Hollow
                        }, Object(a.d)("Add videos", "CollectionEditorPagePresentation"))))
                    }, t.prototype.collectionItemsUnavaibleError = function() {
                        return r.createElement(N.Xa, {
                            "data-test-selector": be.CollectionItemsUnavailableError
                        }, Object(a.d)("Something went wrong loading your collections items. Please try again.", "CollectionEditorPagePresentation"))
                    }, t.prototype.collectionUnavailableError = function() {
                        return r.createElement(N.Xa, {
                            "data-test-selector": be.CollectionUnavailableError
                        }, Object(a.d)("Something went wrong loading your collection. Please try again.", "CollectionEditorPagePresentation"))
                    }, t.prototype.setPageTitle = function() {
                        if (this.props.data.user) {
                            var e = this.props.data.user.displayName;
                            a.p.setPageTitle(Object(a.d)("{ownerDisplayName} - Collection Editor", {
                                ownerDisplayName: e
                            }, "CollectionEditorPage"))
                        }
                    }, t
                }(r.Component),
                Oe = function(e, t) {
                    var n = t.fetchMoreResult;
                    if (!n || !n.collection || !n.collection.items) return e;
                    var i = e.collection && e.collection.items.edges || [];
                    return n.collection.items.edges = i.concat(n.collection.items.edges), n
                },
                Ne = Object(p.compose)(Object(p.graphql)(Ie, {
                    options: function(e) {
                        var t = e.match.params;
                        return {
                            variables: {
                                collectionID: t.collectionID,
                                ownerLogin: t.creatorLogin
                            }
                        }
                    },
                    props: function(e) {
                        return o.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    variables: {
                                        collectionID: e.ownProps.match.params.collectionID
                                    },
                                    query: Ie,
                                    updateQuery: Oe
                                })
                            }
                        })
                    }
                }), Object(p.graphql)(xe, {
                    name: "reorderCollectionItem"
                }), Object(H.b)("CollectionEditorPage", {
                    destination: B.a.VideoManagerCollectionsEditor
                }), Object(X.a)({
                    location: U.PageviewLocation.VideoManagerCollectionEditor,
                    properties: function(e) {
                        return {
                            channel: e.match.params.creatorLogin
                        }
                    },
                    skip: function(e) {
                        return e.data.loading
                    }
                }))(De);
            var _e = Object(s.connect)(null, function(e) {
                    return {
                        onAddVideosClick: function(t, n) {
                            e(Object(d.d)(R, {
                                collection: t,
                                onComplete: n
                            }))
                        }
                    }
                })(Ne),
                Te = function(e) {
                    return r.createElement(c.a, {
                        ownerLogin: e.match.params.creatorLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        var n = t.loading,
                            i = t.permitted;
                        return n || i ? r.createElement(_e, o.__assign({}, e)) : r.createElement(l.a, {
                            message: Object(a.d)("Something went wrong. Please try again.", "CollectionEditorPage")
                        })
                    })
                };
            n.d(t, "CollectionEditorPage", function() {
                return Te
            })
        },
        SiBg: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("/7QA"),
                r = n("8n0m"),
                a = n("b6Yk"),
                l = n("kRBY"),
                c = n("rj3Y"),
                s = n("uzvh");

            function d(e) {
                return function(t, n) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: n
                        }
                    })
                }
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "d", function() {
                return k
            }), n.d(t, "f", function() {
                return b
            });
            var u = "collections.COLLECTIONS_FETCHED",
                p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                m = "collections.COLLECTIONS_FETCH_FAILED",
                f = "collections.COLLECTIONS_CREATE_FAILED",
                h = "collections.COLLECTIONS_UPDATE_FAILED";

            function v(e, t) {
                var n = this;
                return d(function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, l, s;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return n = i.sent(), r.store.dispatch({
                                        type: u,
                                        collections: Object(c.d)(n.body)
                                    }), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + c.b.Video + ":" + t)];
                                case 2:
                                    return l = i.sent(), r.store.dispatch({
                                        type: p,
                                        containingCollections: Object(c.d)(l.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return s = i.sent(), o.k.error(s, "Failed to fetch collections"), r.store.dispatch({
                                        type: m,
                                        errorType: "Fetch Failed",
                                        errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }
            var g = function(e, t) {
                return a.a.postOrThrow(e, {
                    body: t
                })
            };

            function k(e, t, n, a) {
                var s = this;
                return d(function(d) {
                    return i.__awaiter(s, void 0, void 0, function() {
                        var s, m, h, v, k, b, y, C;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    s = d.store.getState(), m = s.collections, h = Object(l.e)(s), v = h ? h.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, g("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return k = i.sent(), b = Object(c.c)(k.body), m.collections = [b].concat(m.collections), d.store.dispatch({
                                        type: u,
                                        collections: m.collections
                                    }), Object(r.b)({
                                        channelID: e,
                                        playlistID: b.id,
                                        userID: v,
                                        title: b.title
                                    }), y = {
                                        type: c.b.Video,
                                        id: n
                                    }, [4, g("/v5/collections/" + b.id + "/items", y)];
                                case 3:
                                    return i.sent(), m.containingCollections = [b].concat(m.containingCollections), d.store.dispatch({
                                        type: p,
                                        containingCollections: m.containingCollections,
                                        videoID: n
                                    }), Object(r.a)({
                                        channelID: e,
                                        itemID: n,
                                        itemPosition: -1,
                                        itemType: c.b.Video,
                                        playlistID: b.id,
                                        userID: v,
                                        place: a
                                    }), [3, 5];
                                case 4:
                                    return C = i.sent(), o.k.error(C, "Failed to add new collection with video"), d.store.dispatch({
                                        type: f,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function b(e, t, n, u) {
                var m = this;
                return d(function(d) {
                    return i.__awaiter(m, void 0, void 0, function() {
                        var m, f, v, k, b, y, C, S, E;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    m = d.store.getState(), f = Object(s.a)(m), v = Object(l.e)(m), k = v ? v.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 6, , 7]), f.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (b = JSON.stringify({
                                        type: c.b.Video,
                                        id: t
                                    }), y = btoa(b), [4, a.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + y)]) : [3, 3];
                                case 2:
                                    return i.sent(), S = f.filter(function(t) {
                                        return t.id !== e.id
                                    }), d.store.dispatch({
                                        type: p,
                                        containingCollections: S,
                                        videoID: t
                                    }), Object(r.c)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: c.b.Video,
                                        playlistID: e.id,
                                        userID: k
                                    }), [3, 5];
                                case 3:
                                    return C = {
                                        type: c.b.Video,
                                        id: t
                                    }, [4, g("/v5/collections/" + e.id + "/items", C)];
                                case 4:
                                    i.sent(), S = f.concat([e]), d.store.dispatch({
                                        type: p,
                                        containingCollections: S,
                                        videoID: t
                                    }), Object(r.a)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: c.b.Video,
                                        playlistID: e.id,
                                        userID: k,
                                        place: u
                                    }), i.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return E = i.sent(), o.k.error(E, "Failed to fetch collections"), d.store.dispatch({
                                        type: h,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        VwyG: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                o = n("kRBY"),
                r = n("mrSG"),
                a = n("q1tI"),
                l = n("oJmH"),
                c = n("/7QA"),
                s = n("yR8l"),
                d = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = c.k.withCategory("role-restricted"), n.state = {
                            loading: t.isLoggedIn,
                            permitted: !1,
                            roles: {
                                staff: !1,
                                editor: !1,
                                owner: !1
                            },
                            error: null
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.data && e.data.loading,
                            n = this.props.data && this.props.data.loading;
                        (!this.props.isLoggedIn || t && !n) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeSetRoleState(e)
                    }, t.prototype.componentDidMount = function() {
                        this.maybeSetRoleState(this.props)
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.maybeSetRoleState = function(e) {
                        if (e.isLoggedIn && e.data) {
                            var t = function(e) {
                                    var t = e.data,
                                        n = {
                                            staff: !1,
                                            editor: !1,
                                            owner: !1
                                        };
                                    t && !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id);
                                    return n
                                }(e),
                                n = {
                                    loading: e.data.loading,
                                    permitted: function(e, t) {
                                        if (e.owner) return !0;
                                        if (e.staff && t.staff) return !0;
                                        if (e.editor && t.editor) return !0;
                                        return !1
                                    }(t, e.permittedRoles),
                                    roles: t,
                                    error: null
                                };
                            e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                                err: n.error
                            })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                                err: n.error
                            })), this.setState(n)
                        }
                    }, t
                }(a.Component);
            var m = Object(l.compose)(Object(s.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            contentOwnerLogin: e.ownerLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(d.b)("RoleRestricted"))(p);
            var f = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return f
            })
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var i = n("wbMx");
            n.d(t, "a", function() {
                return i.a
            }), n.d(t, "b", function() {
                return i.b
            })
        },
        YJDT: function(e, t, n) {
            "use strict";
            n("y8/E");
            var i = n("z3cX");
            n.d(t, "a", function() {
                return i.a
            })
        },
        ZuCk: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CollectionEditor_SearchCreatorVideos"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "creatorID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "collectionID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "after"
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
                                value: "search"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "VideoConnectionSearchParams"
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
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "creatorID"
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
                                        value: "searchVideos"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "6"
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
                                                value: "after"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "search"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "search"
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
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "SearchCardVideo"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
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
                                value: "collection"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "collectionID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "includeAllItems"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
                                        }
                                    }]
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "collectionFields"
                                    },
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "itemConnection"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 713
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-search-card/models/search-card-video.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nquery CollectionEditor_SearchCreatorVideos($creatorID: ID! $collectionID: ID! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(id: $creatorID) {\nid\nsearchVideos(first: 6 after: $after search: $search) {\nedges {\ncursor\nnode {\n...SearchCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncollection(id: $collectionID options: { includeAllItems: true}) {\n...collectionFields\n...itemConnection\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("a4Br").definitions)), i.definitions = i.definitions.concat(r(n("0/Iv").definitions)), i.definitions = i.definitions.concat(r(n("dc0Q").definitions)), e.exports = i
        },
        a4Br: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "SearchCardVideo"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Video"
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
                                value: "lengthSeconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "previewThumbnailURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "160"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "90"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "publishedAt"
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
                }],
                loc: {
                    start: 0,
                    end: 115
                }
            };
            n.loc.source = {
                body: "fragment SearchCardVideo on Video {\nid\nlengthSeconds\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\ntitle\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        aMfF: function(e, t, n) {},
        bHHn: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CollectionEditor_ReorderCollectionItem"
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
                                    value: "ReorderCollectionItemInput"
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
                                value: "reorderCollectionItem"
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
                                        value: "collection"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "itemConnection"
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
                    end: 289
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_ReorderCollectionItem($input: ReorderCollectionItemInput!) {\nreorderCollectionItem(input: $input) {\ncollection {\nid\n...itemConnection\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }(n("dc0Q").definitions)), e.exports = i
        },
        bTcf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_CollectionTrackingMeta"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "creatorID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "creatorID"
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
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
                    end: 117
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_CollectionTrackingMeta($creatorID: ID!) {\nuser(id: $creatorID) {\nid\nlogin\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "d+Oo": function(e, t, n) {},
        dc0Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "itemConnection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "items"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "100"
                                }
                            }],
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
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "Video"
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
                                                                value: "broadcastType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isDeleted"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "lengthSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "previewThumbnailURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "240"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "135"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "publishedAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "scope"
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "viewCount"
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
                }],
                loc: {
                    start: 0,
                    end: 395
                }
            };
            n.loc.source = {
                body: "fragment itemConnection on Collection {\n# Request the max (50 atm) because we support drag and drop\n# reordering which makes little sense at the moment without all the items\nitems(first: 100) {\ntotalCount\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n... on Video {\nid\nbroadcastType\nisDeleted\nlengthSeconds\npreviewThumbnailURL(width: 240 height: 135)\npublishedAt\nscope\ntitle\nviewCount\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ezMb: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                i = !0,
                                o = !1,
                                r = void 0;
                            try {
                                for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                            } catch (e) {
                                o = !0, r = e
                            } finally {
                                try {
                                    !i && l.return && l.return()
                                } finally {
                                    if (o) throw r
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }();
            t.default = function(e) {
                var t, n, m = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.handleStart = function(e) {
                            var n = t.props,
                                i = n.distance,
                                o = n.shouldCancelStart;
                            if (2 === e.button || o(e)) return !1;
                            t._touched = !0, t._pos = {
                                x: e.pageX,
                                y: e.pageY
                            };
                            var r = (0, p.closest)(e.target, function(e) {
                                return null != e.sortableInfo
                            });
                            if (r && r.sortableInfo && t.nodeIsChild(r) && !t.state.sorting) {
                                var a = t.props.useDragHandle,
                                    l = r.sortableInfo,
                                    c = l.index,
                                    s = l.collection;
                                if (a && !(0, p.closest)(e.target, function(e) {
                                        return null != e.sortableHandle
                                    })) return;
                                t.manager.active = {
                                    index: c,
                                    collection: s
                                }, "a" === e.target.tagName.toLowerCase() && e.preventDefault(), i || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout(function() {
                                    return t.handlePress(e)
                                }, t.props.pressDelay))
                            }
                        }, t.nodeIsChild = function(e) {
                            return e.sortableInfo.manager === t.manager
                        }, t.handleMove = function(e) {
                            var n = t.props,
                                i = n.distance,
                                o = n.pressThreshold;
                            if (!t.state.sorting && t._touched) {
                                t._delta = {
                                    x: t._pos.x - e.pageX,
                                    y: t._pos.y - e.pageY
                                };
                                var r = Math.abs(t._delta.x) + Math.abs(t._delta.y);
                                i || o && !(o && r >= o) ? i && r >= i && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                            }
                        }, t.handleEnd = function() {
                            var e = t.props.distance;
                            t._touched = !1, e || t.cancel()
                        }, t.cancel = function() {
                            t.state.sorting || (clearTimeout(t.pressTimer), t.manager.active = null)
                        }, t.handlePress = function(e) {
                            var n = t.manager.getActive();
                            if (n) {
                                var i = t.props,
                                    o = i.axis,
                                    r = i.getHelperDimensions,
                                    a = i.helperClass,
                                    l = i.hideSortableGhost,
                                    c = i.onSortStart,
                                    s = i.useWindowAsScrollContainer,
                                    d = n.node,
                                    u = n.collection,
                                    m = d.sortableInfo.index,
                                    h = (0, p.getElementMargin)(d),
                                    v = t.container.getBoundingClientRect(),
                                    g = r({
                                        index: m,
                                        node: d,
                                        collection: u
                                    });
                                t.node = d, t.margin = h, t.width = g.width, t.height = g.height, t.marginOffset = {
                                    x: t.margin.left + t.margin.right,
                                    y: Math.max(t.margin.top, t.margin.bottom)
                                }, t.boundingClientRect = d.getBoundingClientRect(), t.containerBoundingRect = v, t.index = m, t.newIndex = m, t.axis = {
                                    x: o.indexOf("x") >= 0,
                                    y: o.indexOf("y") >= 0
                                }, t.offsetEdge = t.getEdgeOffset(d), t.initialOffset = t.getOffset(e), t.initialScroll = {
                                    top: t.scrollContainer.scrollTop,
                                    left: t.scrollContainer.scrollLeft
                                }, t.initialWindowScroll = {
                                    top: window.pageYOffset,
                                    left: window.pageXOffset
                                };
                                var k, b = d.querySelectorAll("input, textarea, select"),
                                    y = d.cloneNode(!0),
                                    C = [].concat(f(y.querySelectorAll("input, textarea, select")));
                                if (C.forEach(function(e, t) {
                                        "file" !== e.type && b[t] && (e.value = b[t].value)
                                    }), t.helper = t.document.body.appendChild(y), t.helper.style.position = "fixed", t.helper.style.top = t.boundingClientRect.top - h.top + "px", t.helper.style.left = t.boundingClientRect.left - h.left + "px", t.helper.style.width = t.width + "px", t.helper.style.height = t.height + "px", t.helper.style.boxSizing = "border-box", t.helper.style.pointerEvents = "none", l && (t.sortableGhost = d, d.style.visibility = "hidden", d.style.opacity = 0), t.minTranslate = {}, t.maxTranslate = {}, t.axis.x && (t.minTranslate.x = (s ? 0 : v.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (s ? t.contentWindow.innerWidth : v.left + v.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (s ? 0 : v.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (s ? t.contentWindow.innerHeight : v.top + v.height) - t.boundingClientRect.top - t.height / 2), a)(k = t.helper.classList).add.apply(k, f(a.split(" ")));
                                t.listenerNode = e.touches ? d : t.contentWindow, p.events.move.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                                }), p.events.end.forEach(function(e) {
                                    return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                                }), t.setState({
                                    sorting: !0,
                                    sortingIndex: m
                                }), c && c({
                                    node: d,
                                    index: m,
                                    collection: u
                                }, e)
                            }
                        }, t.handleSortMove = function(e) {
                            var n = t.props.onSortMove;
                            e.preventDefault(), t.updatePosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                        }, t.handleSortEnd = function(e) {
                            var n = t.props,
                                i = n.hideSortableGhost,
                                o = n.onSortEnd,
                                r = t.manager.active.collection;
                            t.listenerNode && (p.events.move.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortMove)
                            }), p.events.end.forEach(function(e) {
                                return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                            })), t.helper.parentNode.removeChild(t.helper), i && t.sortableGhost && (t.sortableGhost.style.visibility = "", t.sortableGhost.style.opacity = "");
                            for (var a = t.manager.refs[r], l = 0, c = a.length; l < c; l++) {
                                var s = a[l],
                                    d = s.node;
                                s.edgeOffset = null, d.style[p.vendorPrefix + "Transform"] = "", d.style[p.vendorPrefix + "TransitionDuration"] = ""
                            }
                            clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.manager.active = null, t.setState({
                                sorting: !1,
                                sortingIndex: null
                            }), "function" == typeof o && o({
                                oldIndex: t.index,
                                newIndex: t.newIndex,
                                collection: r
                            }, e), t._touched = !1
                        }, t.autoscroll = function() {
                            var e = t.translate,
                                n = {
                                    x: 0,
                                    y: 0
                                },
                                i = {
                                    x: 1,
                                    y: 1
                                },
                                o = {
                                    x: 10,
                                    y: 10
                                };
                            e.y >= t.maxTranslate.y - t.height / 2 ? (n.y = 1, i.y = o.y * Math.abs((t.maxTranslate.y - t.height / 2 - e.y) / t.height)) : e.x >= t.maxTranslate.x - t.width / 2 ? (n.x = 1, i.x = o.x * Math.abs((t.maxTranslate.x - t.width / 2 - e.x) / t.width)) : e.y <= t.minTranslate.y + t.height / 2 ? (n.y = -1, i.y = o.y * Math.abs((e.y - t.height / 2 - t.minTranslate.y) / t.height)) : e.x <= t.minTranslate.x + t.width / 2 && (n.x = -1, i.x = o.x * Math.abs((e.x - t.width / 2 - t.minTranslate.x) / t.width)), t.autoscrollInterval && (clearInterval(t.autoscrollInterval), t.autoscrollInterval = null, t.isAutoScrolling = !1), 0 === n.x && 0 === n.y || (t.autoscrollInterval = setInterval(function() {
                                t.isAutoScrolling = !0;
                                var e = {
                                    left: 1 * i.x * n.x,
                                    top: 1 * i.y * n.y
                                };
                                t.scrollContainer.scrollTop += e.top, t.scrollContainer.scrollLeft += e.left, t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                            }, 5))
                        }, t.manager = new u.default, t.events = {
                            start: t.handleStart,
                            move: t.handleMove,
                            end: t.handleEnd
                        }, (0, d.default)(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time."), t.state = {}, t
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), r(n, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                manager: this.manager
                            }
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.getContainer,
                                i = t.useWindowAsScrollContainer,
                                o = this.props.contentWindow || window;
                            this.container = "function" == typeof n ? n(this.getWrappedInstance()) : (0, s.findDOMNode)(this), this.document = this.container.ownerDocument || document, this.scrollContainer = i ? this.document.body : this.container, this.contentWindow = "function" == typeof o ? o() : o;
                            var r = function(t) {
                                e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                    return e.container.addEventListener(n, e.events[t], !1)
                                })
                            };
                            for (var a in this.events) r(a)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this,
                                t = function(t) {
                                    e.events.hasOwnProperty(t) && p.events[t].forEach(function(n) {
                                        return e.container.removeEventListener(n, e.events[t])
                                    })
                                };
                            for (var n in this.events) t(n)
                        }
                    }, {
                        key: "getEdgeOffset",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                top: 0,
                                left: 0
                            };
                            if (e) {
                                var n = {
                                    top: t.top + e.offsetTop,
                                    left: t.left + e.offsetLeft
                                };
                                return e.parentNode !== this.container ? this.getEdgeOffset(e.parentNode, n) : n
                            }
                        }
                    }, {
                        key: "getOffset",
                        value: function(e) {
                            return {
                                x: e.touches ? e.touches[0].pageX : e.pageX,
                                y: e.touches ? e.touches[0].pageY : e.pageY
                            }
                        }
                    }, {
                        key: "getLockPixelOffsets",
                        value: function() {
                            var e = this.props.lockOffset;
                            Array.isArray(e) || (e = [e, e]), (0, d.default)(2 === e.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e);
                            var t = e,
                                n = o(t, 2),
                                i = n[0],
                                r = n[1];
                            return [this.getLockPixelOffset(i), this.getLockPixelOffset(r)]
                        }
                    }, {
                        key: "getLockPixelOffset",
                        value: function(e) {
                            var t = e,
                                n = e,
                                i = "px";
                            if ("string" == typeof e) {
                                var o = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e);
                                (0, d.default)(null !== o, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', e), t = n = parseFloat(e), i = o[1]
                            }
                            return (0, d.default)(isFinite(t) && isFinite(n), "lockOffset value should be a finite. Given %s", e), "%" === i && (t = t * this.width / 100, n = n * this.height / 100), {
                                x: t,
                                y: n
                            }
                        }
                    }, {
                        key: "updatePosition",
                        value: function(e) {
                            var t = this.props,
                                n = t.lockAxis,
                                i = t.lockToContainerEdges,
                                r = this.getOffset(e),
                                a = {
                                    x: r.x - this.initialOffset.x,
                                    y: r.y - this.initialOffset.y
                                };
                            if (a.y -= window.pageYOffset - this.initialWindowScroll.top, a.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = a, i) {
                                var l = this.getLockPixelOffsets(),
                                    c = o(l, 2),
                                    s = c[0],
                                    d = c[1],
                                    u = {
                                        x: this.width / 2 - s.x,
                                        y: this.height / 2 - s.y
                                    },
                                    m = {
                                        x: this.width / 2 - d.x,
                                        y: this.height / 2 - d.y
                                    };
                                a.x = (0, p.limit)(this.minTranslate.x + u.x, this.maxTranslate.x - m.x, a.x), a.y = (0, p.limit)(this.minTranslate.y + u.y, this.maxTranslate.y - m.y, a.y)
                            }
                            "x" === n ? a.y = 0 : "y" === n && (a.x = 0), this.helper.style[p.vendorPrefix + "Transform"] = "translate3d(" + a.x + "px," + a.y + "px, 0)"
                        }
                    }, {
                        key: "animateNodes",
                        value: function() {
                            var e = this.props,
                                t = e.transitionDuration,
                                n = e.hideSortableGhost,
                                i = this.manager.getOrderedRefs(),
                                o = {
                                    left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                    top: this.scrollContainer.scrollTop - this.initialScroll.top
                                },
                                r = {
                                    left: this.offsetEdge.left + this.translate.x + o.left,
                                    top: this.offsetEdge.top + this.translate.y + o.top
                                },
                                a = {
                                    top: window.pageYOffset - this.initialWindowScroll.top,
                                    left: window.pageXOffset - this.initialWindowScroll.left
                                };
                            this.newIndex = null;
                            for (var l = 0, c = i.length; l < c; l++) {
                                var s = i[l].node,
                                    d = s.sortableInfo.index,
                                    u = s.offsetWidth,
                                    m = s.offsetHeight,
                                    f = {
                                        width: this.width > u ? u / 2 : this.width / 2,
                                        height: this.height > m ? m / 2 : this.height / 2
                                    },
                                    h = {
                                        x: 0,
                                        y: 0
                                    },
                                    v = i[l].edgeOffset;
                                v || (i[l].edgeOffset = v = this.getEdgeOffset(s));
                                var g = l < i.length - 1 && i[l + 1],
                                    k = l > 0 && i[l - 1];
                                g && !g.edgeOffset && (g.edgeOffset = this.getEdgeOffset(g.node)), d !== this.index ? (t && (s.style[p.vendorPrefix + "TransitionDuration"] = t + "ms"), this.axis.x ? this.axis.y ? d < this.index && (r.left + a.left - f.width <= v.left && r.top + a.top <= v.top + f.height || r.top + a.top + f.height <= v.top) ? (h.x = this.width + this.marginOffset.x, v.left + h.x > this.containerBoundingRect.width - f.width && (h.x = g.edgeOffset.left - v.left, h.y = g.edgeOffset.top - v.top), null === this.newIndex && (this.newIndex = d)) : d > this.index && (r.left + a.left + f.width >= v.left && r.top + a.top + f.height >= v.top || r.top + a.top + f.height >= v.top + m) && (h.x = -(this.width + this.marginOffset.x), v.left + h.x < this.containerBoundingRect.left + f.width && (h.x = k.edgeOffset.left - v.left, h.y = k.edgeOffset.top - v.top), this.newIndex = d) : d > this.index && r.left + a.left + f.width >= v.left ? (h.x = -(this.width + this.marginOffset.x), this.newIndex = d) : d < this.index && r.left + a.left <= v.left + f.width && (h.x = this.width + this.marginOffset.x, null == this.newIndex && (this.newIndex = d)) : this.axis.y && (d > this.index && r.top + a.top + f.height >= v.top ? (h.y = -(this.height + this.marginOffset.y), this.newIndex = d) : d < this.index && r.top + a.top <= v.top + f.height && (h.y = this.height + this.marginOffset.y, null == this.newIndex && (this.newIndex = d))), s.style[p.vendorPrefix + "Transform"] = "translate3d(" + h.x + "px," + h.y + "px,0)") : n && (this.sortableGhost = s, s.style.visibility = "hidden", s.style.opacity = 0)
                            }
                            null == this.newIndex && (this.newIndex = this.index)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, d.default)(m.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = m.withRef ? "wrappedInstance" : null;
                            return l.default.createElement(e, i({
                                ref: t
                            }, (0, p.omit)(this.props, "contentWindow", "useWindowAsScrollContainer", "distance", "helperClass", "hideSortableGhost", "transitionDuration", "useDragHandle", "pressDelay", "pressThreshold", "shouldCancelStart", "onSortStart", "onSortMove", "onSortEnd", "axis", "lockAxis", "lockOffset", "lockToContainerEdges", "getContainer", "getHelperDimensions")))
                        }
                    }]), n
                }(a.Component), t.displayName = (0, p.provideDisplayName)("sortableList", e), t.defaultProps = {
                    axis: "y",
                    transitionDuration: 300,
                    pressDelay: 0,
                    pressThreshold: 5,
                    distance: 0,
                    useWindowAsScrollContainer: !1,
                    hideSortableGhost: !0,
                    shouldCancelStart: function(e) {
                        if (-1 !== ["input", "textarea", "select", "option", "button"].indexOf(e.target.tagName.toLowerCase())) return !0
                    },
                    lockToContainerEdges: !1,
                    lockOffset: "50%",
                    getHelperDimensions: function(e) {
                        var t = e.node;
                        return {
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        }
                    }
                }, t.propTypes = {
                    axis: c.default.oneOf(["x", "y", "xy"]),
                    distance: c.default.number,
                    lockAxis: c.default.string,
                    helperClass: c.default.string,
                    transitionDuration: c.default.number,
                    contentWindow: c.default.any,
                    onSortStart: c.default.func,
                    onSortMove: c.default.func,
                    onSortEnd: c.default.func,
                    shouldCancelStart: c.default.func,
                    pressDelay: c.default.number,
                    useDragHandle: c.default.bool,
                    useWindowAsScrollContainer: c.default.bool,
                    hideSortableGhost: c.default.bool,
                    lockToContainerEdges: c.default.bool,
                    lockOffset: c.default.oneOfType([c.default.number, c.default.string, c.default.arrayOf(c.default.oneOfType([c.default.number, c.default.string]))]),
                    getContainer: c.default.func,
                    getHelperDimensions: c.default.func
                }, t.childContextTypes = {
                    manager: c.default.object.isRequired
                }, n
            };
            var a = n("q1tI"),
                l = m(a),
                c = m(n("17x9")),
                s = n("i8i4"),
                d = m(n("QLaP")),
                u = m(n("8ENv")),
                p = n("jTc+");

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
        },
        gFHd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ShareVideo_Content"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "collectionID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "hasVideo"
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
                                value: "hasCollection"
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
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "video"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "videoID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "includePrivate"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
                                        }
                                    }]
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
                                            value: "hasVideo"
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
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
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
                                        }]
                                    }
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
                                value: "collection"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "collectionID"
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
                                            value: "hasCollection"
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
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
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
                                        }]
                                    }
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 451
                }
            };
            n.loc.source = {
                body: "query ShareVideo_Content($videoID: ID! $collectionID: ID! $hasVideo: Boolean! $hasCollection: Boolean!) {\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @include(if: $hasVideo) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $hasCollection) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hk6T: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }();
            t.default = function(e) {
                var t, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    withRef: !1
                };
                return n = t = function(t) {
                    function n() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, n),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled,
                                i = e.index;
                            n || this.setDraggable(t, i)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.index !== e.index && this.node && (this.node.sortableInfo.index = e.index), this.props.disabled !== e.disabled) {
                                var t = e.collection,
                                    n = e.disabled,
                                    i = e.index;
                                n ? this.removeDraggable(t) : this.setDraggable(t, i)
                            } else this.props.collection !== e.collection && (this.removeDraggable(this.props.collection), this.setDraggable(e.collection, e.index))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props,
                                t = e.collection,
                                n = e.disabled;
                            n || this.removeDraggable(t)
                        }
                    }, {
                        key: "setDraggable",
                        value: function(e, t) {
                            var n = this.node = (0, c.findDOMNode)(this);
                            n.sortableInfo = {
                                index: t,
                                collection: e,
                                manager: this.context.manager
                            }, this.ref = {
                                node: n
                            }, this.context.manager.add(e, this.ref)
                        }
                    }, {
                        key: "removeDraggable",
                        value: function(e) {
                            this.context.manager.remove(e, this.ref)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return (0, s.default)(u.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = u.withRef ? "wrappedInstance" : null;
                            return a.default.createElement(e, i({
                                ref: t
                            }, (0, d.omit)(this.props, "collection", "disabled", "index")))
                        }
                    }]), n
                }(r.Component), t.displayName = (0, d.provideDisplayName)("sortableElement", e), t.contextTypes = {
                    manager: l.default.object.isRequired
                }, t.propTypes = {
                    index: l.default.number.isRequired,
                    collection: l.default.oneOfType([l.default.number, l.default.string]),
                    disabled: l.default.bool
                }, t.defaultProps = {
                    collection: 0
                }, n
            };
            var r = n("q1tI"),
                a = u(r),
                l = u(n("17x9")),
                c = n("i8i4"),
                s = u(n("QLaP")),
                d = n("jTc+");

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        "jTc+": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.arrayMove = function(e, t, n) {
                var i = e.slice(0);
                if (n >= i.length)
                    for (var o = n - i.length; 1 + o--;) i.push(void 0);
                return i.splice(n, 0, i.splice(t, 1)[0]), i
            }, t.omit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return Object.keys(e).reduce(function(t, i) {
                    return -1 === n.indexOf(i) && (t[i] = e[i]), t
                }, {})
            }, t.closest = function(e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    e = e.parentNode
                }
            }, t.limit = function(e, t, n) {
                if (n < e) return e;
                if (n > t) return t;
                return n
            }, t.getElementMargin = function(e) {
                var t = window.getComputedStyle(e);
                return {
                    top: i(t.marginTop),
                    right: i(t.marginRight),
                    bottom: i(t.marginBottom),
                    left: i(t.marginLeft)
                }
            }, t.provideDisplayName = function(e, t) {
                var n = t.displayName || t.name;
                return n ? e + "(" + n + ")" : e
            };
            t.events = {
                start: ["touchstart", "mousedown"],
                move: ["touchmove", "mousemove"],
                end: ["touchend", "touchcancel", "mouseup"]
            }, t.vendorPrefix = function() {
                if ("undefined" == typeof window || "undefined" == typeof document) return "";
                var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                    t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
                switch (t) {
                    case "ms":
                        return "ms";
                    default:
                        return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
                }
            }();

            function i(e) {
                return "px" === e.substr(-2) ? parseFloat(e) : 0
            }
        },
        jeZI: function(e, t, n) {},
        lhqL: function(e, t, n) {},
        "mZc/": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("Ue10"),
                a = (n("NCCa"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isHovered: !1
                        }, t.handleMouseEnter = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleMouseLeave = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.direction,
                            i = e.size;
                        return o.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, o.createElement(r.Bb, {
                            display: r.X.Flex,
                            margin: {
                                x: 1
                            },
                            position: r.hb.Relative
                        }, o.createElement(r.Bb, {
                            className: "hoverable-icon",
                            display: r.X.InlineFlex,
                            color: r.O.Alt2,
                            alignItems: r.f.Center,
                            justifyContent: r.Wa.Center
                        }, o.createElement(r.qb, {
                            asset: r.rb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), o.createElement(r.u, {
                            show: this.state.isHovered,
                            direction: n,
                            size: i
                        }, o.createElement(r.Xa, {
                            padding: {
                                x: 1,
                                y: 1
                            }
                        }, t))))
                    }, t.defaultProps = {
                        direction: r.v.Bottom,
                        size: r.w.Small
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return a
            })
        },
        nt5g: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoleRestricted"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "contentOwnerLogin"
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
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
                                        value: "contentOwnerLogin"
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
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isEditor"
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
                    end: 147
                }
            };
            n.loc.source = {
                body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        oqbW: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CollectionEditor_UpdateCollection"
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
                                    value: "UpdateCollectionInput"
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
                                value: "updateCollection"
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
                                        value: "collection"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "collectionFields"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "itemConnection"
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
                    end: 410
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_UpdateCollection($input: UpdateCollectionInput!) {\nupdateCollection(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("0/Iv").definitions)), i.definitions = i.definitions.concat(r(n("dc0Q").definitions)), e.exports = i
        },
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var i = n("+GjP"),
                o = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                a = "https://www.reddit.com/submit",
                l = "https://vk.com/share.php";

            function c(e) {
                return Object(i.e)(o, {
                    u: e
                })
            }

            function s(e, t) {
                return Object(i.e)(r, {
                    url: e,
                    text: t
                })
            }

            function d(e, t) {
                return Object(i.e)(a, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(i.e)(l, {
                    url: e
                })
            }
        },
        rj3Y: function(e, t, n) {
            "use strict";
            var i, o, r = function(e, t, n) {
                var i = e.collectionItems || [];
                return Boolean(i.find(function(e) {
                    return e.ObjectType === n && e.id === t
                }))
            };
            ! function(e) {
                e.Public = "public"
            }(i || (i = {})),
            function(e) {
                e.Staff = "staff"
            }(o || (o = {}));
            var a, l, c = function(e) {
                return {
                    __typename: "Collection",
                    id: e._id,
                    title: e.title,
                    state: i.Public,
                    thumbnailSrc: e.thumbnails && e.thumbnails.small,
                    totalDuration: e.total_duration,
                    itemsCount: e.items_count
                }
            };

            function s(e) {
                return e.collections.map(function(e) {
                    return c(e)
                })
            }! function(e) {
                e.Video = "video"
            }(a || (a = {})),
            function(e) {
                e.PostCreateModal = "post-create", e.EditModal = "edit", e.CollectionManager = "collection_manager", e.VideoProducerRow = "video_producer_row"
            }(l || (l = {})), n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return o
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return l
            })
        },
        tMx0: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                o = n("q1tI"),
                r = n("Ue10"),
                a = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(r.Bb, {
                            margin: {
                                bottom: 1
                            },
                            elevation: 1,
                            display: r.X.Flex,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Row,
                            alignItems: r.f.Stretch
                        }, o.createElement(r.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            display: r.X.Flex,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Column,
                            breakpointSmall: {
                                flexDirection: r.Aa.Row
                            }
                        }, o.createElement(r.Xa, {
                            fullWidth: !0
                        }, o.createElement(r.G, {
                            row: !0
                        }, o.createElement(r.Xa, null, o.createElement(r.gb, {
                            height: 75,
                            width: 133
                        })), o.createElement(r.H, null, o.createElement(r.Xa, {
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(r.W, null, o.createElement(r.gb, {
                            width: 600,
                            lineCount: 1
                        }), o.createElement(r.gb, {
                            width: 200,
                            lineCount: 1
                        })))))), o.createElement(r.Xa, {
                            display: r.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Row,
                            alignItems: r.f.Center
                        }, o.createElement(r.Bb, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, o.createElement(r.Xa, {
                            display: r.X.InlineFlex,
                            fullHeight: !0
                        }, o.createElement(r.Xa, {
                            fullHeight: !0,
                            display: r.X.Flex,
                            alignItems: r.f.Center,
                            justifyContent: r.Wa.Center,
                            padding: 2
                        }, o.createElement(r.W, null, o.createElement(r.gb, {
                            width: 40,
                            lineCount: 1
                        })))))), o.createElement(r.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, o.createElement(r.Xa, {
                            fullHeight: !0,
                            display: r.X.Flex,
                            alignItems: r.f.Center,
                            justifyContent: r.Wa.Center,
                            padding: 1
                        }, o.createElement(r.W, null, o.createElement(r.gb, {
                            width: 20,
                            lineCount: 1
                        }))))))
                    }, t
                }(o.PureComponent);
            n.d(t, "a", function() {
                return a
            })
        },
        u3aQ: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-160x90-6d63306a771e0e239cf4.png"
        },
        uzvh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                o = n("/7QA"),
                r = n("SiBg");

            function a(e) {
                return e.collections.containingCollections
            }
            o.p.store.registerReducer("collections", function(e, t) {
                var n;
                switch (void 0 === e && (e = {
                    collections: [],
                    videoID: "",
                    containingCollections: [],
                    errors: {}
                }), t.type) {
                    case r.a:
                        return i.__assign({}, e, {
                            collections: t.collections
                        });
                    case r.b:
                        return i.__assign({}, e, {
                            videoID: t.videoID,
                            containingCollections: t.containingCollections
                        });
                    case r.c:
                        return i.__assign({}, e, {
                            errors: i.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                        });
                    default:
                        return e
                }
            })
        },
        vEO4: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CollectionEditor_AddCollectionItem"
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
                                    value: "AddCollectionItemInput"
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
                                value: "addCollectionItem"
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
                                        value: "collection"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "collectionFields"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "itemConnection"
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
                    end: 413
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/collection-fragment.gql"\n#import "twilight/pages/video-tools/pages/collection-editor/components/collection-editor-page/item-connection-fragment.gql"\nmutation CollectionEditor_AddCollectionItem($input: AddCollectionItemInput!) {\naddCollectionItem(input: $input) {\ncollection {\n...collectionFields\n...itemConnection\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(r(n("0/Iv").definitions)), i.definitions = i.definitions.concat(r(n("dc0Q").definitions)), e.exports = i
        },
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return d
            });
            var i, o = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                l = n("Jxh/"),
                c = n("r62z"),
                s = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(i || (i = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === i.Download ? r.createElement("a", o.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(s.fc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", o.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(s.fc)(n.props)), n.renderIcon()) : r.createElement("button", o.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(s.fc)(n.props)), n.renderIcon())
                    }, n.onShareClickHandler = function() {
                        n.props.onShareClick && n.props.onShareClick(n.props.type)
                    }, n.clearIsCopiedStatus = function() {
                        n.setState({
                            isCopied: !1
                        })
                    }, n.getUrl = function() {
                        return n.props.url || window.location.href
                    }, n.copyPageUrl = function(e) {
                        e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(l.a)(n.getUrl()), n.setState({
                            isCopied: !0
                        })
                    }, n.renderIcon = function() {
                        var e = n.getAssetFromType();
                        return r.createElement(s.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Center
                        }, r.createElement(s.qb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== i.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return "Twitter";
                            case i.Reddit:
                                return "Reddit";
                            case i.Facebook:
                                return "Facebook";
                            case i.VKontakte:
                                return "VKontakte";
                            case i.Download:
                                return Object(a.d)("Download", "SocialButton");
                            case i.Copy:
                                return n.state.isCopied ? Object(a.d)("Copied", "SocialButton") : Object(a.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case i.Twitter:
                                return s.rb.Twitter;
                            case i.Facebook:
                                return s.rb.Facebook;
                            case i.VKontakte:
                                return s.rb.VKontakte;
                            case i.Reddit:
                                return s.rb.Reddit;
                            case i.Download:
                                return s.rb.Download;
                            case i.Copy:
                            default:
                                return s.rb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case i.Twitter:
                                return e + "--twitter";
                            case i.Reddit:
                                return e + "--reddit";
                            case i.Facebook:
                                return e + "--facebook";
                            case i.VKontakte:
                                return e + "--vkontakte";
                            case i.Download:
                                return e + "--download";
                            case i.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            o = e.type,
                            r = n.getUrl(),
                            a = t || "";
                        switch (o) {
                            case i.Reddit:
                                return Object(c.b)(r, a);
                            case i.VKontakte:
                                return Object(c.d)(r);
                            case i.Facebook:
                                return Object(c.a)(r);
                            case i.Twitter:
                                return Object(c.c)(r, a);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.Xa, {
                        className: "social-button"
                    }, r.createElement(s.Ub, {
                        label: this.getTooltipFromType(),
                        direction: s.Wb.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        },
        "y8/E": function(e, t) {},
        z3cX: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var i, o = n("q1tI"),
                r = n("/7QA"),
                a = n("hyVY"),
                l = n("Ue10");
            ! function(e) {
                e[e.Metadata = 0] = "Metadata", e[e.Overlay = 1] = "Overlay"
            }(i || (i = {}));
            var c = function(e) {
                    var t, n = Object(a.b)(e.video.lengthSeconds);
                    return t = e.video.publishedAt ? o.createElement(l.W, {
                        fontSize: l.Ca.Size7
                    }, Object(r.c)(new Date(e.video.publishedAt), "medium"), o.createElement("span", null, " · "), n) : o.createElement(l.W, {
                        fontSize: l.Ca.Size7
                    }, n), o.createElement(l.Xa, {
                        alignItems: l.f.Stretch,
                        display: l.X.Flex,
                        flexDirection: l.Aa.Row,
                        flexGrow: 1,
                        padding: .5
                    }, o.createElement(l.Xa, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: l.hb.Relative
                    }, o.createElement(l.I, {
                        alt: e.video.title,
                        aspect: l.p.Aspect16x9,
                        size: l.J.Size8,
                        src: e.video.previewThumbnailURL
                    }), s(e.selected)), o.createElement(l.Xa, {
                        alignItems: l.f.Start,
                        display: l.X.Flex,
                        flexDirection: l.Aa.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: l.Wa.Center,
                        padding: {
                            x: 1
                        },
                        overflow: l.cb.Hidden
                    }, o.createElement(l.Xa, {
                        fullWidth: !0,
                        overflow: l.cb.Hidden
                    }, o.createElement(l.W, {
                        type: l.Rb.H3,
                        fontSize: l.Ca.Size6,
                        title: e.video.title,
                        ellipsis: !0
                    }, e.video.title)), o.createElement("div", {
                        "data-test-selector": i.Metadata
                    }, t)))
                },
                s = function(e) {
                    return e ? o.createElement(l.Bb, {
                        background: l.r.Overlay,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        position: l.hb.Absolute,
                        alignItems: l.f.Center,
                        "data-test-selector": i.Overlay,
                        display: l.X.Flex,
                        flexDirection: l.Aa.Column,
                        justifyContent: l.Wa.Center
                    }, o.createElement(l.qb, {
                        asset: l.rb.Check
                    })) : null
                }
        },
        zHWM: function(e, t, n) {
            "use strict";
            n("uzvh")
        }
    }
]);