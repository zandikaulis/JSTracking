webpackJsonp([100], {
    "1O+o": function(e, n, t) {
        e.exports = t.p + "assets/topclip-d733c8c582ce9a364447d5ac75ed97aa.png"
    },
    "448H": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ExtensionSearch"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "afterCursor"
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
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "state"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionStateFilter"
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
                            value: "extensions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "20"
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
                                    value: "afterCursor"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "state"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "state"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasPreviousPage"
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
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
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
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                end: 528
            }
        };
        t.loc.source = {
            body: "query ExtensionManager_ExtensionSearch($afterCursor: Cursor $search: String $state: ExtensionStateFilter) {\nextensions(first: 20 after: $afterCursor search: $search state: $state) {\npageInfo {\nhasNextPage\nhasPreviousPage\n}\nedges {\ncursor\nnode {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    "5Neo": function(e, n, t) {
        "use strict";
        var i = t("BwgW"),
            a = t("GiK3"),
            s = t("nP5L"),
            r = t("VHHT"),
            o = t("Odds"),
            l = function(e) {
                return e.anchorType ? a.createElement(o._12, {
                    label: Object(s.a)(e.anchorType, !0)
                }) : e.mobile ? a.createElement(o._12, {
                    label: Object(r.a)(i.ExtensionPlatform.Mobile, !0)
                }) : null
            };
        l.displayName = "AnchorPill", t.d(n, "a", function() {
            return l
        })
    },
    "9Gfr": function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("+8VM"),
            r = t("sfWM"),
            o = t("6sO2"),
            l = t("Odds"),
            d = function() {
                return a.createElement(l._8, null, a.createElement(l.Q, null, Object(o.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
            };
        d.displayName = "ExtensionErrorModalPresentation";
        var c = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(r.a, null, a.createElement(d, null), a.createElement(s.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component),
            u = c;
        t.d(n, !1, function() {
            return c
        }), t.d(n, "a", function() {
            return u
        })
    },
    AI7U: function(e, n) {},
    AS3O: function(e, n) {},
    BNqM: function(e, n, t) {
        e.exports = t.p + "assets/pretzel-7f009a3cd531356ca1f9d698dc263c67.png"
    },
    "D/X5": function(e, n) {},
    G8hb: function(e, n, t) {
        "use strict";
        t.d(n, "d", function() {
            return i
        }), t.d(n, "c", function() {
            return a
        }), t.d(n, "a", function() {
            return s
        }), t.d(n, "f", function() {
            return r
        }), t.d(n, "b", function() {
            return o
        }), t.d(n, "e", function() {
            return l
        }), n.h = function(e) {
            if (e.isBitsEnabled) return i.Bits;
            if (e.vendorCode && e.sku) return i.InExtensionPurchases;
            return null
        }, n.i = function(e) {
            var n = [];
            e.component && e.component.viewerURL && n.push(o.Component);
            e.panel && e.panel.viewerURL && n.push(o.Panel);
            e.videoOverlay && e.videoOverlay.viewerURL && n.push(o.VideoOverlay);
            return n
        }, n.j = function(e) {
            var n = [d.ExtensionPlatform.Web];
            e.mobile && e.mobile.viewerURL && n.push(d.ExtensionPlatform.Mobile);
            return n
        }, n.g = function(e) {
            return e.extension.id + ":" + e.extension.version
        }, n.k = function(e) {
            if (e.requiredActions) return e.requiredActions.some(function(e) {
                var n = e.type;
                return n === l.RequiresConfiguration
            });
            return !1
        };
        var i, a, s, r, o, l, d = t("BwgW");
        t.n(d);
        ! function(e) {
            e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
        }(i || (i = {})),
        function(e) {
            e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
        }(a || (a = {})),
        function(e) {
            e.Active = "ACTIVE", e.Inactive = "INACTIVE", e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
        }(s || (s = {})),
        function(e) {
            e.Approved = "APPROVED", e.AssetsUploaded = "ASSETS_UPLOADED", e.Deleted = "DELETED", e.Deprecated = "DEPRECATED", e.InReview = "IN_REVIEW", e.InTest = "IN_TEST", e.PendingAction = "PENDING_ACTION", e.ReadyForReview = "READY_FOR_REVIEW", e.Rejected = "REJECTED", e.Released = "RELEASED", e.Uploading = "UPLOADING", e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
        }(r || (r = {})),
        function(e) {
            e.Component = "COMPONENT", e.Hidden = "HIDDEN", e.Panel = "PANEL", e.VideoOverlay = "VIDEO_OVERLAY", e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
        }(o || (o = {})),
        function(e) {
            e.RequiresConfiguration = "REQUIRES_CONFIGURATION", e.PromptForPermissions = "PROMPT_FOR_PERMISSIONS", e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
        }(l || (l = {}))
    },
    GeUc: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_UninstallExtension"
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
                                value: "UninstallExtensionInput"
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
                            value: "uninstallExtension"
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
                end: 124
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_UninstallExtension ($input: UninstallExtensionInput!) {\nuninstallExtension(input: $input) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    KqsW: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return p
        });
        var i, a = t("TToO"),
            s = t("HW6M"),
            r = (t.n(s), t("GiK3")),
            o = (t.n(r), t("6sO2")),
            l = t("CSlQ"),
            d = t("Odds"),
            c = t("M4d4"),
            u = (t.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, v = ((m = {})[i.Previous] = d._25.AngleLeft, m[i.Next] = d._25.AngleRight, m),
            p = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        windowWidth: window.innerWidth
                    }, n.onResize = function() {
                        n.setState({
                            windowWidth: window.innerWidth
                        })
                    }, n.moveCarouselForward = function() {
                        if (!n.isForwardButtonDisabled() && n.props.items) {
                            for (var e = n.getCarouselChildren(), t = n.getCarouselWidth(), i = n.state.currentElementIndex + 1, a = i; a < e.length; a++) {
                                if (e[a].getBoundingClientRect().right - n.getBaseOffset() > t) {
                                    i = a;
                                    break
                                }
                            }
                            n.setState({
                                currentElementIndex: i
                            })
                        }
                    }, n.moveCarouselBackward = function() {
                        if (!n.isBackButtonDisabled()) {
                            for (var e = n.getCarouselChildren(), t = n.getCarouselWidth(), i = n.state.currentElementIndex - 1, a = i - 1; a >= 0; a--) {
                                if (t < -1 * (e[a].getBoundingClientRect().left - n.getBaseOffset())) break;
                                i = a
                            }
                            n.setState({
                                currentElementIndex: i
                            })
                        }
                    }, n.isForwardButtonDisabled = function() {
                        if (!n.carouselContainerRef) return !0;
                        if (n.props.items) {
                            var e = n.getCarouselWidth(),
                                t = n.getCarouselChildren();
                            if (n.state.currentElementIndex >= t.length - 1) return !0;
                            var i = t[n.state.currentElementIndex].getBoundingClientRect().left;
                            if (t[t.length - 1].getBoundingClientRect().right - i > e) return !1
                        }
                        return !0
                    }, n.isBackButtonDisabled = function() {
                        return 0 === n.state.currentElementIndex
                    }, n.getCarouselChildren = function() {
                        if (!n.carouselContainerRef) return [];
                        var e = n.getCarouselSlider();
                        return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                    }, n.getCarouselSlider = function() {
                        return n.carouselContainerRef.querySelector(u)
                    }, n.getCarouselWidth = function() {
                        return n.carouselContainerRef ? n.carouselContainerRef.getBoundingClientRect().width : 0
                    }, n.getBaseOffset = function() {
                        return n.carouselContainerRef ? n.carouselContainerRef.getBoundingClientRect().left : 0
                    }, n.getSliderOffset = function() {
                        if (!n.carouselContainerRef) return 0;
                        var e = n.getCarouselSlider();
                        return e ? e.getBoundingClientRect().left : 0
                    }, n.getChildOffset = function(e) {
                        var t = n.getCarouselChildren();
                        return 0 === t.length || t.length <= e ? 0 : t[e].getBoundingClientRect().left
                    }, n.transformString = function() {
                        return -1 * (n.getChildOffset(n.state.currentElementIndex) - n.getSliderOffset()) + "px"
                    }, n.refHandler = function(e) {
                        return n.state.childrenRendered || null === n.props.items || n.setState({
                            childrenRendered: !0
                        }), n.carouselContainerRef = e
                    }, n.renderNavButton = function(e, t, a) {
                        var l, c = ((l = {})[i.Previous] = Object(o.d)("previous", "MediaCarouselNavButton"), l[i.Next] = Object(o.d)("next", "MediaCarouselNavButton"), l),
                            u = s("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": t
                            }, {
                                "media-carousel__button--inset": !0 === n.props.insetStyle
                            });
                        return r.createElement(d._8, {
                            className: u,
                            position: d._15.Relative,
                            display: d.R.Flex,
                            alignItems: d.c.Stretch
                        }, r.createElement(d.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: t,
                            ariaLabel: c[e],
                            icon: v[e],
                            size: d.x.Large
                        }))
                    }, n
                }
                return a.__extends(n, e), n.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, n.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize)
                }, n.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize)
                }, n.prototype.render = function() {
                    return r.createElement(d._2, a.__assign({}, this.props, {
                        position: d._15.Relative
                    }), r.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, r.createElement(d._8, {
                        className: "media-carousel__child-container",
                        overflow: d._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, r.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, r.createElement(d._2, {
                        className: "media-carousel__content",
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap,
                        flexDirection: d.T.Row,
                        alignItems: d.c.Center,
                        "data-js-selector": "carousel-content"
                    }, r.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), r.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), r.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, n = a.__decorate([Object(l.d)("MediaCarousel", {
                    autoReportInteractive: !0
                })], n)
            }(r.Component)
    },
    M4d4: function(e, n) {},
    MD1s: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ApplyExtensionActivationsInput"
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
                                value: "ApplyExtensionActivationsInput"
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
                            value: "applyExtensionActivations"
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
                                    value: "installedExtensions"
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
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "x"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "y"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
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
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
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
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
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
                                                    value: "canActivate"
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
            }],
            loc: {
                start: 0,
                end: 553
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_ApplyExtensionActivationsInput ($input: ApplyExtensionActivationsInput!) {\napplyExtensionActivations(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\nx\ny\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Mtzm: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "EditPanel_CreatePanel"
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
                                value: "CreatePanelInput"
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
                            value: "createPanel"
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
                                    value: "panel"
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionPanel"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slotID"
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
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        t.loc.source = {
            body: "mutation EditPanel_CreatePanel($input: CreatePanelInput!) {\ncreatePanel(input: $input) {\npanel {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Oxrw: function(e, n) {},
    PJs0: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, "a", function() {
                return i
            }),
            function(e) {
                e.Default = "DEFAULT", e.Extension = "EXTENSION"
            }(i || (i = {}))
    },
    PSJy: function(e, n, t) {
        e.exports = t.p + "assets/stanza-a882cce28515a2799687ab4272c20fa5.png"
    },
    SfDx: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("6sO2"),
            u = t("vH/s"),
            m = t("q7Ag"),
            v = t("Odds"),
            p = function(e) {
                var n = e.closeModal,
                    t = e.extensionClientID,
                    i = e.extensionVersion,
                    s = e.login;
                return a.createElement(v._8, null, a.createElement(v.Q, {
                    type: v._49.H5
                }, Object(c.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(v._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(v.Q, null, Object(c.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(v._8, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(v.Q, null, Object(c.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(v.Q, null, Object(c.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(v._8, {
                    display: v.R.Flex,
                    justifyContent: v._7.Center
                }, a.createElement(v._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(v.v, {
                    type: v.B.Hollow,
                    onClick: n
                }, Object(c.d)("Continue Browsing", "ExtensionInstalledModal"))), a.createElement(v.v, {
                    linkTo: {
                        pathname: Object(m.b)(s, t, i),
                        state: {
                            medium: u.PageviewMedium.ExtensionInstalledModal,
                            content: u.PageviewContent.ExtensionConfigureButton
                        }
                    },
                    onClick: n
                }, Object(c.d)("Configure", "ExtensionInstalledModal"))))
            };
        p.displayName = "ExtensionInstalledModalPresentation";
        var k = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(d.a, null, a.createElement(p, {
                    closeModal: this.props.closeModal,
                    extensionClientID: this.props.extensionClientID,
                    extensionVersion: this.props.extensionVersion,
                    login: this.props.login
                }), a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var g = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(k);
        t.d(n, !1, function() {
            return k
        }), t.d(n, "a", function() {
            return g
        })
    },
    VHHT: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return s
        });
        var i = t("BwgW"),
            a = (t.n(i), t("6sO2")),
            s = function(e, n) {
                var t;
                switch (e) {
                    case i.ExtensionPlatform.Web:
                        t = n ? Object(a.d)("WEB", "LocalizeExtensionPlatform") : Object(a.d)("Web", "LocalizeExtensionPlatform");
                        break;
                    case i.ExtensionPlatform.Mobile:
                        t = n ? Object(a.d)("MOBILE", "LocalizeExtensionPlatform") : Object(a.d)("Mobile", "LocalizeExtensionPlatform");
                        break;
                    default:
                        t = ""
                }
                return t
            }
    },
    XwK1: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_InstallExtension"
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
                                value: "InstallExtensionInput"
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
                            value: "installExtension"
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
                                    value: "installedExtension"
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
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
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
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
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
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                                    value: "canActivate"
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
            }],
            loc: {
                start: 0,
                end: 491
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    YJkA: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("6sO2"),
            u = t("Odds"),
            m = function(e) {
                var n = e.activations,
                    t = e.onConfirm;
                return a.createElement(u._8, null, a.createElement(u.Q, {
                    type: u._49.H5
                }, Object(c.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
                    count: n.length
                }, "ExtensionActivatedModal")), a.createElement(u._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, n.map(function(e) {
                    var n = e.extensionName,
                        t = e.slot;
                    return a.createElement(u.Q, {
                        key: t
                    }, Object(c.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
                        extensionName: a.createElement(u.Q, {
                            bold: !0,
                            type: u._49.Span
                        }, n),
                        anchorSlot: a.createElement(u.Q, {
                            bold: !0,
                            type: u._49.Span,
                            transform: u._48.Uppercase
                        }, t)
                    }, "ExtensionActivatedModal"))
                })), a.createElement(u._8, {
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, a.createElement(u.v, {
                    onClick: t
                }, Object(c.d)("Done", "ExtensionActivatedModal"))))
            };
        m.displayName = "ExtensionActivatedModalPresentation";
        var v = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return a.createElement(d.a, null, a.createElement(m, {
                    activations: this.props.activations,
                    onConfirm: this.props.closeModal
                }), a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var p = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(v);
        t.d(n, !1, function() {
            return v
        }), t.d(n, "a", function() {
            return p
        })
    },
    bpr6: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("BwgW"),
            u = t("6sO2");

        function m(e, n) {
            return !(e.minX > n.maxX || e.maxX < n.minX) && !(e.minY > n.maxY || e.maxY < n.minY)
        }

        function v(e, n, t, i) {
            return {
                minX: e,
                minY: n,
                maxX: e + t,
                maxY: n + i
            }
        }
        var p = t("Odds"),
            k = t("HW6M"),
            g = function(e) {
                var n, t = e.x,
                    i = e.y,
                    s = e.width,
                    r = e.height,
                    o = e.isGrabbed,
                    l = e.isOverlapped,
                    d = e.name,
                    c = e.slot,
                    u = e.tabIndex,
                    m = {
                        left: t + "px",
                        top: i + "px",
                        width: s + "px",
                        height: r + "px"
                    },
                    v = k("extension-component-preview", ((n = {})["extension-component-preview--active"] = o, n["extension-component-preview--overlapped"] = l, n));
                return a.createElement(p._3, {
                    position: p._15.Absolute,
                    textAlign: p._45.Center
                }, a.createElement("div", {
                    key: c,
                    tabIndex: u,
                    "data-slot": c,
                    className: v,
                    style: m
                }, a.createElement(p._35, {
                    fullHeight: !0,
                    display: p.R.Flex,
                    flexDirection: p.T.Column,
                    justifyContent: p._7.Center
                }, a.createElement(p.Q, {
                    color: p.K.Overlay,
                    type: p._49.Span,
                    fontSize: p.V.Size5
                }, d))))
            },
            E = 768,
            f = 432,
            h = 10,
            x = {
                w: {
                    x: 0,
                    y: -1
                },
                a: {
                    x: -1,
                    y: 0
                },
                s: {
                    x: 0,
                    y: 1
                },
                d: {
                    x: 1,
                    y: 0
                },
                k: {
                    x: 0,
                    y: -1
                },
                j: {
                    x: 0,
                    y: 1
                },
                h: {
                    x: -1,
                    y: 0
                },
                l: {
                    x: 1,
                    y: 0
                },
                arrowup: {
                    x: 0,
                    y: -1
                },
                arrowdown: {
                    x: 0,
                    y: 1
                },
                arrowleft: {
                    x: -1,
                    y: 0
                },
                arrowright: {
                    x: 1,
                    y: 0
                }
            },
            b = (t("p8So"), function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    t.renderOverlapError = function() {
                        var e = t.state.hasOverlappingComponents ? p.j.SlideInTop : p.j.SlideOutTop;
                        return t.state.hasOverlappingComponents || t.state.isAnimating ? a.createElement(p.e, {
                            enabled: !0,
                            onAnimationEnd: t.handleAnimationEnd,
                            type: e
                        }, a.createElement(p._35, {
                            position: p._15.Absolute,
                            attachTop: !0,
                            fullWidth: !0,
                            display: p.R.Flex,
                            justifyContent: p._7.Center
                        }, a.createElement(p._3, {
                            display: p.R.Flex,
                            padding: 1,
                            elevation: 5
                        }, a.createElement("div", {
                            className: "extension-component-error"
                        }, a.createElement(p._24, {
                            asset: p._25.NotificationError
                        }), a.createElement(p._3, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(p.Q, {
                            fontSize: p.V.Size4
                        }, Object(u.d)("Component Extensions cannot overlap", "ExtensionComponentActivateModal"))))))) : null
                    }, t.renderPositionPreview = function() {
                        var e = t.state.slotList.map(function(e, n) {
                            var i = t.state.currentActivationSettings[e],
                                s = i.componentConfig,
                                r = i.extensionName,
                                o = i.installationID,
                                l = i.x,
                                d = i.y,
                                u = Object(c.getComponentSizeFromView)(E, f, {
                                    aspectHeight: s.aspectHeight,
                                    aspectWidth: s.aspectWidth,
                                    zoom: s.hasZoom,
                                    zoomPixels: s.zoomPixels || c.DefaultZoomPixelWidth
                                }),
                                m = Object(c.getComponentPositionFromView)(E, f, {
                                    x: 100 * l,
                                    y: 100 * d
                                });
                            return a.createElement(g, {
                                slot: e,
                                name: r,
                                tabIndex: n + 1,
                                isGrabbed: t.state.grabbedSlot === e,
                                isOverlapped: t.state.collisionMap[e],
                                key: o,
                                x: m.x,
                                y: m.y,
                                width: u.width,
                                height: u.height
                            })
                        });
                        return a.createElement(p._3, {
                            position: p._15.Relative
                        }, a.createElement("div", {
                            ref: t.updatePositionContainerRef,
                            className: "extension-component-player",
                            style: {
                                width: E,
                                height: f
                            }
                        }, e, t.renderOverlapError()))
                    }, t.bringSlotToFront = function(e, n) {
                        var t = e.filter(function(e) {
                            return e !== n
                        });
                        return t.push(n), t
                    }, t.activateComponentsWithCurrentSettings = function() {
                        var e = t.state.sortedSlotList.map(function(e) {
                            var n = t.state.currentActivationSettings[e],
                                i = n.installationID,
                                a = n.x,
                                s = n.y;
                            return {
                                installationID: i,
                                component: {
                                    slot: e,
                                    x: Math.floor(100 * a),
                                    y: Math.floor(100 * s)
                                }
                            }
                        });
                        t.props.onConfirm(e), t.props.closeModal()
                    }, t.updateCollisionMap = function(e, n, t) {
                        e[n] = !1;
                        for (var i = t[n], a = i.x, s = i.y, r = i.componentConfig, o = v(a, s, r.aspectWidth / 100, r.aspectHeight / 100), l = 0, d = Object.keys(t).sort(); l < d.length; l++) {
                            var c = d[l];
                            if (n !== c) {
                                var u = t[c],
                                    p = u.x,
                                    k = u.y,
                                    g = u.componentConfig;
                                e[c] = !1, m(o, v(p, k, g.aspectWidth / 100, g.aspectHeight / 100)) && (e[n] = !0, e[c] = !0)
                            }
                        }
                        return e
                    }, t.updateCoordinates = function(e, n, a) {
                        if (t.state.currentActivationSettings[e]) {
                            var s = i.__assign({}, t.state.currentActivationSettings[e]),
                                r = s.componentConfig,
                                o = 100 - r.aspectWidth / 100,
                                l = 100 - r.aspectHeight / 100;
                            s.x = Math.max(0, Math.min(n, o)), s.y = Math.max(0, Math.min(a, l));
                            var d, c = i.__assign({}, t.state.currentActivationSettings, ((d = {})[e] = s, d)),
                                u = t.updateCollisionMap(t.state.collisionMap, e, c);
                            t.setState({
                                collisionMap: u,
                                currentActivationSettings: c
                            })
                        }
                    }, t.updatePositionContainerRef = function(e) {
                        t.setState({
                            positioningContainer: e
                        })
                    }, t.handleMouseDown = function(e) {
                        if (t.state.positioningContainer) {
                            var n = e.target,
                                i = t.findComponentPreview(n);
                            if (i) {
                                var a = t.state.positioningContainer.getBoundingClientRect(),
                                    s = i.getAttribute("data-slot");
                                if (s) {
                                    var r = i.getBoundingClientRect(),
                                        o = e.clientX - a.left,
                                        l = e.clientY - a.top,
                                        d = o - (r.left - a.left),
                                        c = l - (r.top - a.top),
                                        u = t.bringSlotToFront(t.state.slotList, s);
                                    t.setState({
                                        grabbedSlot: s,
                                        mouseOffsetX: d,
                                        mouseOffsetY: c,
                                        slotList: u
                                    })
                                }
                            } else t.setState({
                                grabbedSlot: null
                            })
                        }
                    }, t.handleMouseMove = function(e) {
                        if (t.state.grabbedSlot && t.state.positioningContainer) {
                            var n = t.state.positioningContainer.getBoundingClientRect(),
                                i = e.clientX - n.left,
                                a = e.clientY - n.top,
                                s = i - t.state.mouseOffsetX + window.scrollX,
                                r = a - t.state.mouseOffsetY + window.scrollY,
                                o = s / E,
                                l = r / f;
                            t.updateCoordinates(t.state.grabbedSlot, Math.floor(1e4 * o) / 100, Math.floor(1e4 * l) / 100)
                        }
                    }, t.handleAnimationEnd = function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, t.handleFinishMove = function() {
                        var e = t.state.sortedSlotList.some(function(e) {
                                return t.state.collisionMap[e]
                            }),
                            n = e !== t.state.hasOverlappingComponents;
                        t.setState({
                            hasOverlappingComponents: e,
                            isAnimating: n,
                            grabbedSlot: null
                        })
                    }, t.handleKeyDown = function(e) {
                        var n = document.activeElement ? document.activeElement.getAttribute("data-slot") : void 0;
                        if (n && t.state.positioningContainer && t.state.positioningContainer.contains(document.activeElement)) {
                            var i = t.state.positioningContainer.getBoundingClientRect(),
                                a = 1 / E,
                                s = 1 / f,
                                r = 0,
                                o = 0,
                                l = document.activeElement;
                            if (l) {
                                var d = l.getBoundingClientRect();
                                r = d.left, o = d.top
                            }
                            var c = 0,
                                u = 0,
                                m = e.key.toLowerCase(),
                                v = x[m];
                            v && (c = v.x * a, u = v.y * s);
                            var p = e.shiftKey ? h : 1,
                                k = r - i.left + (window.scrollX || 0),
                                g = o - i.top + (window.scrollY || 0),
                                b = c * p + k / E,
                                y = u * p + g / f;
                            t.updateCoordinates(n, Math.floor(1e4 * b) / 100, Math.floor(1e4 * y) / 100), t.handleFinishMove()
                        }
                    }, t.handleFocus = function() {
                        var e = document.activeElement ? document.activeElement.getAttribute("data-slot") : void 0;
                        if (e && t.state.positioningContainer && t.state.positioningContainer.contains(document.activeElement)) {
                            var n = t.bringSlotToFront(t.state.slotList, e);
                            t.setState({
                                slotList: n
                            })
                        }
                    };
                    var s = n.activatedComponentData.reduce(function(e, t) {
                        return t.installationID === n.idToActivate ? e : (e[t.slot] = i.__assign({}, t, {
                            x: t.x / 100,
                            y: t.y / 100
                        }), e)
                    }, {});
                    s[n.slotToActivate] = {
                        installationID: n.idToActivate,
                        extensionName: n.extensionNameToActivate,
                        componentConfig: n.componentConfigToActivate,
                        slot: n.slotToActivate,
                        x: 0,
                        y: 0
                    };
                    var r = Object.keys(s).sort(),
                        o = t.bringSlotToFront(r, n.slotToActivate),
                        l = t.updateCollisionMap({}, n.slotToActivate, s),
                        d = r.some(function(e) {
                            return l[e]
                        });
                    return t.state = {
                        slotList: o,
                        collisionMap: l,
                        sortedSlotList: r,
                        hasOverlappingComponents: d,
                        currentActivationSettings: s,
                        grabbedSlot: null,
                        mouseOffsetX: 0,
                        mouseOffsetY: 0,
                        positioningContainer: null,
                        isAnimating: !1
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement("div", {
                        onMouseDown: this.handleMouseDown,
                        onMouseMove: this.handleMouseMove,
                        onMouseUp: this.handleFinishMove,
                        onKeyDown: this.handleKeyDown,
                        onFocus: this.handleFocus
                    }, a.createElement(p._8, null, a.createElement(p.Q, {
                        type: p._49.H5
                    }, Object(u.d)("Set Component Location", "ExtensionComponentActivateModal")), a.createElement(p._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        }
                    }, a.createElement(p.Q, null, Object(u.d)("Drag and drop the selected component to set a default anchor point within the video player", "ExtensionComponentActivateModal"))), a.createElement(p._35, {
                        background: p.n.Alt,
                        padding: {
                            bottom: 1
                        }
                    }, this.renderPositionPreview()), a.createElement(p._35, {
                        display: p.R.Flex,
                        justifyContent: p._7.Center,
                        borderTop: !0,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(p._8, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(p.v, {
                        type: p.B.Hollow,
                        onClick: this.props.closeModal
                    }, Object(u.d)("Cancel", "ExtensionComponentActivateModal"))), a.createElement(p.v, {
                        disabled: this.state.hasOverlappingComponents,
                        onClick: this.activateComponentsWithCurrentSettings
                    }, Object(u.d)("Save", "ExtensionComponentActivateModal")))))
                }, n.prototype.findComponentPreview = function(e) {
                    if (e) {
                        if (e.getAttribute("data-slot")) return e;
                        if (e.parentElement) return this.findComponentPreview(e.parentElement)
                    }
                    return null
                }, n
            }(a.Component)),
            y = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(d.a, {
                        className: "extension-manager-modal-container--expand"
                    }, a.createElement(b, {
                        activatedComponentData: this.props.activatedComponentData,
                        componentConfigToActivate: this.props.componentConfigToActivate,
                        extensionNameToActivate: this.props.extensionNameToActivate,
                        idToActivate: this.props.idToActivate,
                        slotToActivate: this.props.slotToActivate,
                        onConfirm: this.props.onConfirm,
                        closeModal: this.props.closeModal
                    }), a.createElement(o.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component);
        var N = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(y);
        t.d(n, !1, function() {
            return y
        }), t.d(n, "a", function() {
            return N
        })
    },
    deLJ: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ActivateExtension"
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
                                value: "ActivateExtensionInput"
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
                            value: "activateExtension"
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
                                    value: "installedExtensions"
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
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
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
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
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
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
                                                },
                                                arguments: [],
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
                                                    value: "canActivate"
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
            }],
            loc: {
                start: 0,
                end: 532
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_ActivateExtension ($input: ActivateExtensionInput!) {\nactivateExtension(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    eyrD: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_InstalledExtensionList"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
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
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isExtensionsApprover"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isExtensionsDeveloper"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "installedExtensions"
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
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "x"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "y"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
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
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
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
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "aspectWidth"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "aspectHeight"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hasZoom"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "zoomPixels"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
                                                },
                                                arguments: [],
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
                                                    value: "canActivate"
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
                                    value: "panels"
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionPanel"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slotID"
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
            }],
            loc: {
                start: 0,
                end: 670
            }
        };
        t.loc.source = {
            body: "query ExtensionManager_InstalledExtensionList {\ncurrentUser {\nid\ncheer {\nid\n}\nroles {\nisAffiliate\nisPartner\nisExtensionsApprover\nisExtensionsDeveloper\n}\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\nx\ny\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\naspectWidth\naspectHeight\nhasZoom\nzoomPixels\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\npanels {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    hd33: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_DeactivateExtension"
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
                                value: "DeactivateExtensionInput"
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
                            value: "deactivateExtension"
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
                                    value: "installedExtension"
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
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
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
                                                    value: "authorName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "clientID"
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
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sku"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "version"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
                                                },
                                                arguments: [],
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
                                                    value: "canActivate"
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
            }],
            loc: {
                start: 0,
                end: 537
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_DeactivateExtension ($input: DeactivateExtensionInput!) {\ndeactivateExtension(input: $input) {\ninstalledExtension {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    j9Lx: function(e, n, t) {
        e.exports = t.p + "assets/latest-followers-d3d6e53831f8fba34b47596ddb8d97e3.png"
    },
    liDD: function(e, n, t) {
        e.exports = t.p + "assets/bithead-arcade-58899fbda7f2df09f93301470735464a.png"
    },
    nP5L: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return s
        });
        var i = t("6sO2"),
            a = t("G8hb"),
            s = function(e, n) {
                var t;
                switch (e) {
                    case a.b.Component:
                        t = n ? Object(i.d)("COMPONENT", "ExtensionAnchorType") : Object(i.d)("Component", "ExtensionAnchorType");
                        break;
                    case a.b.Panel:
                        t = n ? Object(i.d)("PANEL", "ExtensionAnchorType") : Object(i.d)("Panel", "ExtensionAnchorType");
                        break;
                    case a.b.VideoOverlay:
                        t = n ? Object(i.d)("OVERLAY", "ExtensionAnchorType") : Object(i.d)("Overlay", "ExtensionAnchorType");
                        break;
                    default:
                        t = ""
                }
                return t
            }
    },
    nqtJ: function(e, n, t) {
        e.exports = t.p + "assets/sound-alerts-54a4340d12e937bd31cd6dece71355cd.png"
    },
    p8So: function(e, n) {},
    "ry+I": function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("6sO2"),
            s = t("G8hb"),
            r = t("Odds"),
            o = function(e) {
                var n;
                switch (e.state) {
                    case s.f.InTest:
                        n = Object(a.d)("TESTING", "ExtensionStatusPill");
                        break;
                    case s.f.ReadyForReview:
                        n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                        break;
                    case s.f.InReview:
                        n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                        break;
                    case s.f.Rejected:
                        n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                        break;
                    case s.f.Approved:
                        n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                        break;
                    case s.f.Deprecated:
                        n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                        break;
                    case s.f.PendingAction:
                        n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                        break;
                    case s.f.Uploading:
                        n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                        break;
                    case s.f.AssetsUploaded:
                        n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                        break;
                    default:
                        n = ""
                }
                return i.createElement(r._12, {
                    type: r._13.Brand,
                    label: n
                })
            };
        o.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
            return o
        })
    },
    sfWM: function(e, n, t) {
        "use strict";
        var i = t("GiK3"),
            a = t("Odds"),
            s = (t("Oxrw"), function(e) {
                return i.createElement(a._35, {
                    className: e.className || "extension-manager-modal-container",
                    background: a.n.Base,
                    padding: 2
                }, e.children)
            });
        s.displayName = "ModalContainer", t.d(n, "a", function() {
            return s
        })
    },
    twC3: function(e, n, t) {
        "use strict";
        var i = t("TToO"),
            a = t("GiK3"),
            s = t("RH2O"),
            r = t("2KeS"),
            o = t("+8VM"),
            l = t("V5M+"),
            d = t("sfWM"),
            c = t("G8hb"),
            u = t("6sO2"),
            m = t("Odds"),
            v = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    s = e.onConfirm,
                    r = i === c.d.InExtensionPurchases,
                    o = i === c.d.Bits,
                    l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                    d = l;
                return r ? d = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, l), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("You are deactivating {extensionName} ", {
                    extensionName: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.P
                    }, t)
                }, "ExtensionDeactivationWarning")), a.createElement(m._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(m.Q, {
                    type: m._49.P
                }, d))), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: n
                }, Object(u.d)("Cancel", "ExtensionDeactivationWarning"))), a.createElement(m.v, {
                    onClick: s
                }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
            },
            p = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.existingMonetizationType,
                    s = e.closeModal,
                    r = e.onConfirm,
                    o = i === c.d.InExtensionPurchases,
                    l = i === c.d.Bits,
                    d = Object(u.d)("Are you sure you want to uninstall?", "ExtensionDeactivationWarning");
                return o ? d = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionDeactivationWarning") : l && (d = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionDeactivationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementWarning")), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementWarning")), a.createElement(m._8, {
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                    extensionName: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.Span
                    }, n),
                    anchorSlot: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.Span,
                        transform: m._48.Uppercase
                    }, t)
                }, "ExtensionReplacementWarning"))), a.createElement(m.Q, {
                    type: m._49.P
                }, d)), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: s
                }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.v, {
                    onClick: r
                }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
            };
        p.displayName = "ExtensionReplacementWarning";
        var k = function(e) {
                var n = e.closeModal,
                    t = e.extensionName,
                    i = e.monetizationType,
                    s = e.onConfirm,
                    r = i === c.d.InExtensionPurchases,
                    o = i === c.d.Bits,
                    l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                    d = l;
                return r ? d = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m._8, null, a.createElement(m.Q, {
                    type: m._49.H5
                }, l), a.createElement(m._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, a.createElement(m.Q, null, Object(u.d)("You are uninstalling {extensionName} ", {
                    extensionName: a.createElement(m.Q, {
                        bold: !0,
                        type: m._49.P
                    }, t)
                }, "ExtensionUninstallationWarning")), a.createElement(m._8, {
                    padding: {
                        top: 1
                    }
                }, a.createElement(m.Q, {
                    type: m._49.P
                }, d))), a.createElement(m._8, {
                    display: m.R.Flex,
                    justifyContent: m._7.Center
                }, a.createElement(m._8, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(m.v, {
                    type: m.B.Hollow,
                    onClick: n
                }, Object(u.d)("Cancel", "ExtensionUninstallationWarning"))), a.createElement(m.v, {
                    onClick: s
                }, Object(u.d)("Uninstall", "ExtensionUninstallationWarning"))))
            },
            g = function(e) {
                switch (e.destructionType) {
                    case c.c.Deactivate:
                        return a.createElement(v, {
                            closeModal: e.closeModal,
                            extensionName: e.extensionName,
                            monetizationType: e.monetizationType,
                            onConfirm: e.onConfirm
                        });
                    case c.c.Replace:
                        return a.createElement(p, {
                            closeModal: e.closeModal,
                            existingExtensionName: e.existingExtensionName,
                            existingMonetizationType: e.existingMonetizationType,
                            activationSlot: e.activationSlot,
                            onConfirm: e.onConfirm
                        });
                    case c.c.Uninstall:
                        return a.createElement(k, {
                            closeModal: e.closeModal,
                            extensionName: e.extensionName,
                            monetizationType: e.monetizationType,
                            onConfirm: e.onConfirm
                        });
                    default:
                        return null
                }
            };
        g.displayName = "ExtensionDestructionWarningModalComponent";
        var E = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    n.props.onConfirm(), n.props.closeModal()
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                var e = null;
                switch (this.props.destructionType) {
                    case c.c.Deactivate:
                        e = a.createElement(g, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            extensionName: this.props.extensionName,
                            monetizationType: this.props.monetizationType,
                            onConfirm: this.onConfirm
                        });
                        break;
                    case c.c.Replace:
                        e = a.createElement(g, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            existingExtensionName: this.props.existingExtensionName,
                            existingMonetizationType: this.props.existingMonetizationType,
                            activationSlot: this.props.activationSlot,
                            onConfirm: this.props.onConfirm
                        });
                        break;
                    case c.c.Uninstall:
                        e = a.createElement(g, {
                            closeModal: this.props.closeModal,
                            destructionType: this.props.destructionType,
                            extensionName: this.props.extensionName,
                            monetizationType: this.props.monetizationType,
                            onConfirm: this.onConfirm
                        })
                }
                return a.createElement(d.a, null, e, a.createElement(o.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(a.Component);
        var f = Object(s.b)(null, function(e) {
            return Object(r.b)({
                closeModal: l.c
            }, e)
        })(E);
        t.d(n, !1, function() {
            return E
        }), t.d(n, "a", function() {
            return f
        })
    },
    yJuJ: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("RH2O"),
            s = t("2KeS"),
            r = t("V5M+"),
            o = t("Aj/L"),
            l = t("YJkA"),
            d = t("bpr6"),
            c = t("twC3"),
            u = t("9Gfr"),
            m = t("SfDx"),
            v = t("GiK3"),
            p = t("3zLD"),
            k = t("CIox"),
            g = t("6sO2"),
            E = t("N221"),
            f = t("7vx8"),
            h = t("j7/Y"),
            x = t("oIkB"),
            b = t("w9tK"),
            y = t("vH/s"),
            N = t("liDD"),
            S = t.n(N),
            _ = t("j9Lx"),
            C = t.n(_),
            A = t("BNqM"),
            F = t.n(A),
            O = t("nqtJ"),
            w = t.n(O),
            R = t("PSJy"),
            D = t.n(R),
            I = t("1O+o"),
            L = t.n(I),
            M = t("q7Ag"),
            U = t("KqsW"),
            P = t("Odds"),
            T = (t("AS3O"), [{
                alt: "Bithead Arcade",
                id: "4s0p3jkn926i4xix9nqewle4rhxw3t",
                url: S.a
            }, {
                alt: "TopClip",
                id: "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
                url: L.a
            }, {
                alt: "Sound Alerts",
                id: "bttsqjy6dnv05acplp5vy0mflgrh3z",
                url: w.a
            }, {
                alt: "Stanza Cal",
                id: "tel8o38klejg0wn9xmd4l96ib7gbuq",
                url: D.a
            }, {
                alt: "Pretzel Rocks",
                id: "lym9op247qx2dplz60iu0quhhwrjwt",
                url: F.a
            }, {
                alt: "Latest Followers",
                id: "wb3bnc8np7tdnxj2sfbk0aa3vklulo",
                url: C.a
            }]),
            j = function() {
                var e = T.map(function(e, n) {
                    return v.createElement(P._8, {
                        className: "extension-featured-carousel-item",
                        padding: {
                            left: 1,
                            bottom: 1
                        },
                        key: n
                    }, v.createElement(P._6, {
                        linkTo: {
                            pathname: Object(M.d)(e.id),
                            state: {
                                content: y.PageviewContent.ExtensionDetails,
                                content_index: n,
                                medium: y.PageviewMedium.ExtensionManagerCarousel
                            }
                        }
                    }, v.createElement(P.k, {
                        ratio: P.l.Aspect3x2
                    }, v.createElement("img", {
                        src: e.url,
                        alt: e.alt
                    }))))
                });
                return v.createElement(P._8, {
                    overflow: P._11.Hidden,
                    fullWidth: !0
                }, v.createElement(P._35, {
                    border: !0,
                    overflow: P._11.Hidden
                }, v.createElement(P._8, {
                    padding: 1
                }, v.createElement(P.Q, {
                    type: P._49.H4,
                    noWrap: !0
                }, Object(g.d)("Featured Extensions", "ExtensionFeaturedCarousel"))), v.createElement(U.a, {
                    insetStyle: !0,
                    items: e
                })))
            };
        j.displayName = "ExtensionFeaturedCarousel";
        var B = t("G8hb"),
            W = t("XwK1"),
            V = t("GeUc"),
            Q = t("CSlQ"),
            z = t("PJs0"),
            H = t("WmaG"),
            q = t("zCIC"),
            G = t("BwgW"),
            K = t("F8kA"),
            Y = t("+Znq"),
            J = t("5Neo"),
            X = t("ry+I"),
            $ = (t("AI7U"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.extension,
                            t = Object(B.i)(e.views).map(function(e) {
                                return v.createElement(P._8, {
                                    key: e,
                                    display: P.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, v.createElement(J.a, {
                                    anchorType: e
                                }))
                            });
                        return Object(B.j)(e.views).includes(G.ExtensionPlatform.Mobile) && t.push(v.createElement(P._8, {
                            key: "mobile",
                            display: P.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, v.createElement(J.a, {
                            mobile: !0
                        }))), t
                    }, n.renderMonetizableMessage = function() {
                        var e = Object(g.d)("In-Extension Purchases", "AvailableExtensionCard");
                        return v.createElement(P._8, {
                            textAlign: P._45.Center
                        }, v.createElement(Y.a, null, v.createElement("a", null, e), v.createElement(P.q, {
                            direction: P.r.LeftCenter,
                            size: P.s.Large
                        }, v.createElement(P._8, {
                            padding: 1,
                            textAlign: P._45.Left
                        }, v.createElement(P.Q, {
                            type: P._49.H4
                        }, e), v.createElement(P._8, {
                            padding: {
                                top: .5
                            }
                        }, v.createElement(P.Q, {
                            type: P._49.P
                        }, Object(g.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "AvailableExtensionCard"), v.createElement(P._2, {
                            padding: {
                                x: .5
                            }
                        }, v.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.renderBitsMessage = function() {
                        var e = Object(g.d)("In-Extension Bits", "AvailableExtensionCard");
                        return v.createElement(P._8, {
                            textAlign: P._45.Center
                        }, v.createElement(Y.a, null, v.createElement("a", null, e), v.createElement(P.q, {
                            direction: P.r.LeftCenter,
                            size: P.s.Large
                        }, v.createElement(P._8, {
                            padding: 1,
                            textAlign: P._45.Left
                        }, v.createElement(P._8, {
                            display: P.R.Flex,
                            alignItems: P.c.Center
                        }, v.createElement(P._24, {
                            asset: P._25.Bits
                        }), v.createElement(P._8, {
                            display: P.R.InlineBlock,
                            padding: {
                                left: .5
                            }
                        }, v.createElement(P.Q, {
                            type: P._49.H4
                        }, e))), v.createElement(P._8, {
                            padding: {
                                top: .5
                            }
                        }, v.createElement(P.Q, {
                            type: P._49.P
                        }, Object(g.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "AvailableExtensionCard"), v.createElement(P._8, null, v.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.learnMoreMessage = function() {
                        return Object(g.d)("Learn More.", "AvailableExtensionCard")
                    }, n.onInstall = function() {
                        n.props.onInstall(n.props.extension)
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e, n = this.props,
                        t = n.isInstalled,
                        i = n.isChannelCheeringEnabled,
                        a = n.extension,
                        s = a.clientID,
                        r = a.version,
                        o = Object(B.h)(a),
                        l = Object(g.d)("Install", "AvailableExtensionCard");
                    if (a.state !== B.f.Released || o !== B.d.Bits || i) e = v.createElement(P.v, {
                        onClick: this.onInstall
                    }, l);
                    else {
                        var d = Object(g.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "AvailableExtensionCard");
                        e = v.createElement(P._52, {
                            label: d,
                            direction: P._54.Left
                        }, v.createElement(P.v, {
                            onClick: this.onInstall,
                            disabled: !0
                        }, l))
                    }
                    return v.createElement(P._35, {
                        display: P.R.Flex,
                        flexWrap: P.U.NoWrap,
                        justifyContent: P._7.Between,
                        background: P.n.Base,
                        padding: {
                            left: 1
                        },
                        flexGrow: 1,
                        border: !0
                    }, v.createElement(P.C, {
                        row: !0,
                        border: !1
                    }, v.createElement(P.E, {
                        alt: a.name,
                        src: this.state.hasCardImageError ? g.a.defaultAvatarURL : a.iconURL,
                        aspect: P.l.Aspect1x1,
                        size: P.F.Size6,
                        onError: this.onCardImageError
                    }), v.createElement(P.D, null, v.createElement(P._8, {
                        padding: 1
                    }, v.createElement(P.Q, {
                        type: P._49.H4
                    }, a.name), v.createElement(P.Q, {
                        type: P._49.Span,
                        color: P.K.Alt2
                    }, a.authorName), v.createElement(P.Q, {
                        type: P._49.P
                    }, a.summary), this.renderAnchorTypePills(), a.state !== B.f.Released && v.createElement(X.a, {
                        state: a.state
                    })))), v.createElement(P._35, {
                        borderLeft: !0,
                        display: P.R.Flex,
                        alignItems: P.c.Center,
                        justifyContent: P._7.Center,
                        flexGrow: 0,
                        flexShrink: 0,
                        margin: {
                            y: 1
                        }
                    }, v.createElement(P._8, {
                        className: "available-extension-card__buttons"
                    }, v.createElement(P._8, {
                        display: P.R.Flex,
                        flexWrap: P.U.NoWrap,
                        justifyContent: P._7.Center,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, v.createElement(K.a, {
                        to: Object(M.d)(s, r)
                    }, v.createElement(P.v, {
                        type: P.B.Hollow
                    }, Object(g.d)("Details", "AvailableExtensionCard"))), v.createElement(P._8, {
                        padding: {
                            left: 1
                        }
                    }, t ? v.createElement(P.v, {
                        disabled: !0
                    }, Object(g.d)("Installed", "AvailableExtensionCard")) : e)), o === B.d.Bits && this.renderBitsMessage(), o === B.d.InExtensionPurchases && this.renderMonetizableMessage())))
                }, n
            }(v.Component)),
            Z = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onSearchInputChange = function(e) {
                        var t = e.target.value;
                        n.props.searchQuery !== t && n.props.onSearchQueryChange(t)
                    }, n.onReleasedCheckboxChange = function(e) {
                        var t = e.target.checked;
                        n.props.showReleasedOnly !== t && n.props.onShowReleasedOnlyChange(t)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.canLoadMore,
                        t = e.displayShowReleasedOnlyCheckbox,
                        i = e.extensions,
                        a = e.installedExtensions,
                        s = e.isChannelCheeringEnabled,
                        r = e.isLoading,
                        o = e.loadMore,
                        l = e.onInstall,
                        d = e.searchQuery,
                        c = e.showReleasedOnly;
                    return v.createElement(P._35, {
                        border: !0,
                        background: P.n.Alt,
                        padding: 1,
                        fullWidth: !0
                    }, v.createElement(P._8, {
                        display: P.R.Flex,
                        flexWrap: P.U.Wrap
                    }, v.createElement(P._8, {
                        display: P.R.Flex,
                        justifyContent: P._7.Between,
                        alignItems: P.c.Baseline,
                        flexGrow: 4,
                        padding: {
                            bottom: .5,
                            right: 1
                        }
                    }, v.createElement(P._8, {
                        display: P.R.Flex,
                        alignItems: P.c.Baseline,
                        flexWrap: P.U.NoWrap,
                        padding: {
                            right: 1
                        }
                    }, v.createElement(P._8, {
                        padding: {
                            right: 1
                        }
                    }, v.createElement(P.Q, {
                        type: P._49.H4,
                        noWrap: !0
                    }, Object(g.d)("Available Extensions", "AvailableExtensionList"))), v.createElement(P.Q, {
                        type: P._49.Span,
                        color: P.K.Alt2,
                        noWrap: !0
                    }, Object(g.d)("(Sorted by Popularity)", "AvailableExtensionList"))), t && v.createElement(P.J, {
                        label: Object(g.d)("Show only released", "AvailableExtensionList"),
                        onChange: this.onReleasedCheckboxChange,
                        checked: c
                    })), v.createElement(P._8, {
                        flexGrow: 1
                    }, v.createElement(P._27, {
                        placeholder: Object(g.d)("Filter extensions", "AvailableExtensionList"),
                        value: this.props.searchQuery,
                        onChange: this.onSearchInputChange
                    }))), v.createElement(P._8, {
                        padding: {
                            top: 1
                        },
                        fullWidth: !0
                    }, i.map(function(e) {
                        var n = void 0 !== a.find(function(n) {
                            return n.extension.id === e.id
                        });
                        return v.createElement(P._8, {
                            key: e.id + e.version,
                            padding: {
                                bottom: 1
                            }
                        }, v.createElement($, {
                            isInstalled: n,
                            extension: e,
                            isChannelCheeringEnabled: s,
                            onInstall: l
                        }))
                    }), v.createElement(q.a, {
                        key: d + c,
                        pixelThreshold: 200,
                        enabled: n(),
                        loadMore: o
                    }), !r && 0 === i.length && v.createElement(P.Q, {
                        type: P._49.P
                    }, Object(g.d)("No extensions are available to install.", "AvailableExtensionList"))))
                }, n
            }(v.Component),
            ee = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.onDismiss = function() {
                        t.setState(function(e) {
                            return i.__assign({}, e, {
                                dismissed: !0
                            })
                        }, function() {
                            g.l.set(t.props.dismissedStorageKey, !0)
                        })
                    }, t.state = {
                        dismissed: g.l.get(n.dismissedStorageKey, !1),
                        enabled: g.b.get(n.enabledDynamicKey, !1)
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return this.state.enabled ? this.state.dismissed ? null : v.createElement(P._35, {
                        alignItems: P.c.Center,
                        "data-test-selector": "announcement-banner",
                        display: P.R.Flex,
                        flexDirection: P.T.Column,
                        justifyContent: P._7.Around,
                        background: P.n.Base,
                        padding: 1,
                        position: P._15.Relative,
                        margin: {
                            top: .5
                        },
                        border: !0
                    }, v.createElement(P._8, {
                        position: P._15.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, v.createElement(P.w, {
                        ariaLabel: "close",
                        "data-test-selector": "announcement-banner-dismiss",
                        icon: P._25.Close,
                        onClick: this.onDismiss
                    })), this.props.children) : null
                }, n
            }(v.Component),
            ne = function() {
                return v.createElement(ee, {
                    dismissedStorageKey: "extensions_dashboard_bits_banner_dismissed",
                    enabledDynamicKey: "extensions_bits_banner_enabled"
                }, v.createElement(P.Q, {
                    fontSize: P.V.Size5,
                    type: P._49.P
                }, Object(g.d)("Your viewers can now use Bits in Extensions to power amazing new experiences on Twitch. Use Bits-enabled Extensions to keep your audience engaged and grow your revenue.", "BitsAnnouncementBanner"), " ", v.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://blog.twitch.tv/bits-in-extensions-a036151cc309"
                }, Object(g.d)("Learn more.", "BitsAnnouncementBanner"))))
            };
        ne.displayName = "BitsAnnouncementBanner";
        var te = t("Tc6d"),
            ie = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderAnchorOptions = function() {
                        var e = n.props,
                            t = e.installedExtension,
                            i = e.availableSlots,
                            a = t.extension.views,
                            s = Object(B.i)(a),
                            r = [];
                        if (s.includes(B.b.Component) && i.components) {
                            var o = n.renderComponentAnchorOptions(i.components);
                            o.length && r.push(o)
                        }
                        if (s.includes(B.b.VideoOverlay) && i.overlays) {
                            var l = n.renderOverlayAnchorOptions(i.overlays);
                            l.length && r.push(l)
                        }
                        if (s.includes(B.b.Panel) && i.panels) {
                            var d = n.renderPanelAnchorOptions(i.panels);
                            d.length && r.push(d)
                        }
                        return t.activationConfig.state === B.a.Active && r.push(n.renderDeactivate()), r.reduce(function(e, n, t) {
                            var i = v.createElement(P._35, {
                                key: t,
                                borderTop: !0,
                                margin: {
                                    top: .5
                                },
                                padding: {
                                    top: .5
                                }
                            });
                            return 0 === e.length ? [n] : e.concat([i, n])
                        }, [])
                    }, n.renderActivePresence = function(e) {
                        return v.createElement(P._8, {
                            display: P.R.Flex,
                            flexWrap: P.U.NoWrap,
                            alignItems: P.c.Center
                        }, v.createElement(P._16, {
                            status: P._17.Online
                        }), v.createElement(P._8, {
                            padding: {
                                left: 1
                            }
                        }, Object(g.d)("Active {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.renderDeactivate = function() {
                        return v.createElement(P._6, {
                            key: "deactivate",
                            blurAfterClick: !0,
                            onClick: n.onDeactivate
                        }, v.createElement(P._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(g.d)("Deactivate", "ActivateExtensionDropdown")))
                    }, n.renderComponentAnchorOptions = function(e) {
                        return e.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, B.b.Component);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderOverlayAnchorOptions = function(e) {
                        return e.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, B.b.VideoOverlay);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderPanelAnchorOptions = function(e) {
                        var t = e.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, B.b.Panel);
                            return i && e.push(i), e
                        }, []);
                        return e.length < te.b && t.push(v.createElement(P._6, {
                            blurAfterClick: !0,
                            onClick: n.onCreatePanelAndActivate
                        }, v.createElement(P._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(g.d)("Add as a new panel", "ActivateExtensionDropdown")))), t
                    }, n.renderSetAnchorLocationInteractable = function(e, t) {
                        var i = n.props.installedExtension.activationConfig;
                        return i.state === B.a.Active && i.slot === e ? null : v.createElement(P._6, {
                            key: e,
                            blurAfterClick: !0,
                            onClick: n.onActivate,
                            "data-slot": e,
                            "data-anchor": t
                        }, v.createElement(P._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(g.d)("Set as {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.onCreatePanelAndActivate = function() {
                        n.props.onCreatePanelAndActivate(n.props.installedExtension)
                    }, n.onActivate = function(e) {
                        var t = n.props,
                            i = t.installedExtension,
                            a = t.onActivate,
                            s = t.onActivateComponent,
                            r = e.currentTarget.dataset,
                            o = r.slot,
                            l = r.anchor;
                        if (o && l) {
                            if (l === B.b.Component) return void s(i, o);
                            a(i, o, l)
                        }
                    }, n.onDeactivate = function() {
                        n.props.onDeactivate(n.props.installedExtension), n.dropdown && n.dropdown.toggleBalloon(!1)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this,
                        n = this.props.installedExtension;
                    return v.createElement(Y.a, {
                        openByDefault: this.props.openByDefault,
                        ref: function(n) {
                            e.dropdown = n
                        }
                    }, v.createElement(P.v, {
                        dropdown: !0,
                        type: P.B.Text
                    }, n.activationConfig.state === B.a.Active ? this.renderActivePresence(n.activationConfig.slot) : Object(g.d)("Activate", "ActivateExtensionDropdown")), v.createElement(P.q, {
                        size: P.s.Medium,
                        offsetY: "-0.1rem",
                        noTail: !0
                    }, v.createElement(P._35, {
                        color: P.K.Link,
                        padding: 1
                    }, this.renderAnchorOptions())))
                }, n
            }(v.Component),
            ae = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onUninstall = function() {
                        return n.props.onUninstall(n.props.installedExtension)
                    }, n.renderActivationStatus = function() {
                        var e = n.props.installedExtension,
                            t = e.self && e.self.canActivate,
                            i = v.createElement(ie, {
                                installedExtension: e,
                                availableSlots: n.props.availableSlots,
                                onActivate: n.props.onActivate,
                                onActivateComponent: n.props.onActivateComponent,
                                onCreatePanelAndActivate: n.props.onCreatePanelAndActivate,
                                onDeactivate: n.props.onDeactivate
                            });
                        return t ? i : Object(B.k)(e) ? v.createElement(P._8, {
                            display: P.R.Flex,
                            alignItems: P.c.Center
                        }, v.createElement(P.Q, {
                            color: P.K.Alt2
                        }, Object(g.d)("Needs Configuration", "InstalledExtensionActions"))) : v.createElement(P._8, {
                            display: P.R.Flex,
                            alignItems: P.c.Center
                        }, v.createElement(P.Q, {
                            color: P.K.Alt2
                        }, Object(g.d)("Activation Disabled", "InstalledExtensionActions")))
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName,
                        i = n.extension,
                        a = i.clientID,
                        s = i.version;
                    return v.createElement(P._8, {
                        padding: 1,
                        display: P.R.Flex,
                        flexWrap: P.U.NoWrap,
                        justifyContent: P._7.Between
                    }, this.renderActivationStatus(), v.createElement(P._8, {
                        display: P.R.Flex,
                        flexWrap: P.U.NoWrap
                    }, v.createElement(K.a, {
                        to: Object(M.b)(t, a, s)
                    }, v.createElement(P.w, {
                        ariaLabel: Object(g.d)("Configure", "InstalledExtensionActions"),
                        icon: P._25.Gear
                    })), v.createElement(P.w, {
                        ariaLabel: Object(g.d)("Uninstall", "InstalledExtensionActions"),
                        icon: P._25.Trash,
                        onClick: this.onUninstall
                    })))
                }, n
            }(v.Component),
            se = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.installedExtension.extension,
                            t = Object(B.i)(e.views).map(function(e) {
                                return v.createElement(P._8, {
                                    key: e,
                                    display: P.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, v.createElement(J.a, {
                                    anchorType: e
                                }))
                            });
                        return Object(B.j)(e.views).includes(G.ExtensionPlatform.Mobile) && t.push(v.createElement(P._8, {
                            key: "mobile",
                            display: P.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, v.createElement(J.a, {
                            mobile: !0
                        }))), t
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName,
                        i = e.availableSlots,
                        a = e.onUninstall,
                        s = e.onActivate,
                        r = e.onCreatePanelAndActivate,
                        o = e.onDeactivate,
                        l = n.extension;
                    return v.createElement(P._35, {
                        background: P.n.Base,
                        border: !0
                    }, v.createElement(P._35, {
                        padding: 1,
                        borderBottom: !0
                    }, v.createElement(P.C, {
                        row: !0,
                        border: !1
                    }, v.createElement(P.E, {
                        alt: l.name,
                        src: this.state.hasCardImageError ? g.a.defaultAvatarURL : l.iconURL,
                        aspect: P.l.Aspect1x1,
                        size: P.F.Size6,
                        onError: this.onCardImageError
                    }), v.createElement(P.D, null, v.createElement(P._8, {
                        padding: 1
                    }, v.createElement(K.a, {
                        to: Object(M.d)(l.clientID, l.version)
                    }, v.createElement(P.Q, {
                        type: P._49.H5
                    }, l.name)), this.renderAnchorTypePills(), l.state !== B.f.Released && v.createElement(X.a, {
                        state: l.state
                    }))))), v.createElement(ae, {
                        channelName: t,
                        installedExtension: n,
                        availableSlots: i,
                        onUninstall: a,
                        onActivate: s,
                        onActivateComponent: this.props.onActivateComponent,
                        onCreatePanelAndActivate: r,
                        onDeactivate: o
                    }))
                }, n
            }(v.Component),
            re = function(e) {
                return v.createElement(P._8, {
                    padding: 1,
                    fullWidth: !0
                }, v.createElement(P._8, {
                    padding: {
                        bottom: 1
                    }
                }, v.createElement(P.Q, {
                    type: P._49.H4,
                    noWrap: !0
                }, Object(g.d)("Installed Extensions", "InstalledExtensionList"))), e.installedExtensions.map(function(n) {
                    return v.createElement(P._8, {
                        key: n.id,
                        padding: {
                            bottom: 1
                        }
                    }, v.createElement(se, {
                        channelName: e.channelName,
                        installedExtension: n,
                        availableSlots: e.availableSlots,
                        onCreatePanelAndActivate: e.onCreatePanelAndActivate,
                        onActivate: e.onActivate,
                        onActivateComponent: e.onActivateComponent,
                        onDeactivate: e.onDeactivate,
                        onUninstall: e.onUninstall
                    }))
                }), !e.isLoading && 0 === e.installedExtensions.length && v.createElement(P.Q, {
                    type: P._49.P
                }, Object(g.d)("No installed extensions.", "InstalledExtensionList")))
            };
        re.displayName = "InstalledExtensionList";
        var oe = function() {
            return v.createElement(ee, {
                dismissedStorageKey: "extensions_dashboard_mobile_banner_dismissed",
                enabledDynamicKey: "extensions_mobile_banner_enabled"
            }, v.createElement(P.Q, {
                fontSize: P.V.Size5,
                type: P._49.P
            }, Object(g.d)("Extensions are now available on mobile. See which Extensions are mobile-ready in the manager below.", "MobileExtensionsBanner"), " ", v.createElement("a", {
                target: "_blank",
                rel: "noopener",
                href: "https://blog.twitch.tv/extensions-on-mobile-d6cf9e3be759"
            }, Object(g.d)("Learn more.", "MobileExtensionsBanner"))))
        };
        oe.displayName = "MobileExtensionsBanner";
        var le = t("eyrD"),
            de = this,
            ce = function(e, n, t, a, s, r) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!(r && e.self && e.self.canActivate)) return [3, 6];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 5, , 6]), [4, n(Object(x.a)({
                                    channelID: r.currentUser.id,
                                    type: z.a.Extension
                                }))];
                            case 2:
                                return (o = i.sent().data).createPanel && o.createPanel.panel && o.createPanel.panel.type === z.a.Extension ? (l = o.createPanel.panel, [4, me(e, l.slotID, B.b.Panel, t, a, s)]) : [3, 4];
                            case 3:
                                i.sent(), d = function(e) {
                                    return e.currentUser.panels.push(l), e
                                }, Object(x.e)(le, {}, d), i.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return i.sent(), s(), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            ue = function(e, n, t, a, s, r, o, l) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var d, c;
                    return i.__generator(this, function(i) {
                        if (l && e.self && e.self.canActivate) {
                            if (d = l.currentUser.installedExtensions.find(function(e) {
                                    var i = e.activationConfig;
                                    return i.state === B.a.Active && i.slot === n && i.anchor === t
                                }), c = function() {
                                    return me(e, n, t, a, r, o)
                                }, !d) return [2, c()];
                            s({
                                activationSlot: n,
                                destructionType: B.c.Replace,
                                existingExtensionName: d.extension.name,
                                existingMonetizationType: Object(B.h)(d.extension),
                                onConfirm: c
                            })
                        }
                        return [2]
                    })
                })
            },
            me = function(e, n, t, a, s, r) {
                return i.__awaiter(de, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, a(Object(x.a)({
                                    extensionInstallationID: e.id,
                                    slot: n,
                                    anchor: t
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), r(), [3, 3];
                            case 3:
                                return s({
                                    activations: [{
                                        extensionName: e.extension.name,
                                        slot: n
                                    }]
                                }), [2]
                        }
                    })
                })
            },
            ve = function(e, n, t, a) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var s, r;
                    return i.__generator(this, function(i) {
                        return (s = Object(B.h)(e.extension)) ? (r = function() {
                            return pe(e, n, a)
                        }, t({
                            destructionType: B.c.Deactivate,
                            extensionName: e.extension.name,
                            monetizationType: s,
                            onConfirm: r
                        }), [2]) : [2, pe(e, n, a)]
                    })
                })
            },
            pe = function(e, n, t) {
                return i.__awaiter(de, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(x.a)({
                                    extensionInstallationID: e.id
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            ke = function(e, n, t, a, s, r) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!r) return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, t(Object(x.a)({
                                    extensionID: e.id,
                                    channelID: r.currentUser.id
                                }))];
                            case 2:
                                return (o = i.sent().data).installExtension && o.installExtension.installedExtension && (l = o.installExtension.installedExtension, d = function(e) {
                                    return e.currentUser.installedExtensions.push(l), e
                                }, Object(x.e)(le, {}, d), a({
                                    extensionClientID: l.extension.clientID,
                                    extensionVersion: l.extension.version,
                                    login: n
                                })), [3, 4];
                            case 3:
                                return i.sent(), s(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            ge = function(e, n, t, a) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var s;
                    return i.__generator(this, function(i) {
                        return s = function() {
                            return Ee(e.id, n, a)
                        }, t({
                            destructionType: B.c.Uninstall,
                            extensionName: e.extension.name,
                            monetizationType: Object(B.h)(e.extension),
                            onConfirm: s
                        }), [2]
                    })
                })
            },
            Ee = function(e, n, t) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var a, s, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(x.a)({
                                    extensionInstallationID: e
                                }))];
                            case 1:
                                return (a = i.sent().data).uninstallExtension && a.uninstallExtension.id && (s = a.uninstallExtension.id, r = function(e) {
                                    var n = e.currentUser.installedExtensions;
                                    return e.currentUser.installedExtensions = n.filter(function(e) {
                                        return e.id !== s
                                    }), e
                                }, Object(x.e)(le, {}, r)), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            fe = function(e, n, t, a, s, r, o) {
                return i.__awaiter(de, void 0, void 0, function() {
                    var l, d, c;
                    return i.__generator(this, function(u) {
                        if (l = function(e) {
                                ! function(e, n, t, a, s) {
                                    i.__awaiter(de, void 0, void 0, function() {
                                        var r, o, l;
                                        return i.__generator(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    if (!s) return [2];
                                                    i.label = 1;
                                                case 1:
                                                    return i.trys.push([1, 3, , 4]), [4, n(Object(x.a)({
                                                        channelID: s.currentUser.id,
                                                        activations: e
                                                    }))];
                                                case 2:
                                                    return (r = i.sent().data).applyExtensionActivations && r.applyExtensionActivations.installedExtensions && (o = r.applyExtensionActivations.installedExtensions, l = o.filter(function(n) {
                                                        var t = n.id;
                                                        return e.some(function(e) {
                                                            return e.installationID === t
                                                        })
                                                    }).map(function(e) {
                                                        var n = e.activationConfig;
                                                        return {
                                                            extensionName: e.extension.name,
                                                            slot: n.slot
                                                        }
                                                    }), t({
                                                        activations: l
                                                    })), [3, 4];
                                                case 3:
                                                    return i.sent(), a(), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(e.filter(function(e) {
                                    return void 0 !== e.component
                                }), a, s, r, o)
                            }, o) {
                            if (!(d = e.extension.views.component)) return [2];
                            c = o.currentUser.installedExtensions.filter(function(e) {
                                var n = e.activationConfig;
                                return n.state === B.a.ACTIVE && n.anchor === B.b.COMPONENT
                            }).map(function(e) {
                                var n = e.id,
                                    t = e.activationConfig,
                                    i = e.extension;
                                return {
                                    installationID: n,
                                    componentConfig: i.views.component,
                                    extensionName: i.name,
                                    slot: t.slot,
                                    x: t.x,
                                    y: t.y
                                }
                            }), t({
                                activatedComponentData: c,
                                extensionNameToActivate: e.extension.name,
                                idToActivate: e.id,
                                slotToActivate: n,
                                componentConfigToActivate: d,
                                onConfirm: l
                            })
                        }
                        return [2]
                    })
                })
            },
            he = t("deLJ"),
            xe = t("MD1s"),
            be = t("Mtzm"),
            ye = t("hd33"),
            Ne = t("448H"),
            Se = (t("D/X5"), function(e, n) {
                return e.extension.clientID > n.extension.clientID ? 1 : e.extension.clientID < n.extension.clientID ? -1 : e.extension.version < n.extension.version ? 1 : e.extension.version > n.extension.version ? -1 : 0
            }),
            _e = "extensions_dashboard_show_released_only",
            Ce = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        availableExtensions: [],
                        availableExtensionsSearchQuery: "",
                        availableExtensionsShowReleasedOnly: g.l.get(_e, !1),
                        availableSlots: {
                            components: [],
                            overlays: [],
                            panels: []
                        },
                        installedExtensions: []
                    }, n.searchQueryDebounceDurationMS = 250, n.onCreatePanelAndActivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s, r, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.createPanel, a = n.activateExtension, s = n.showActivatedModal, r = n.showErrorModal, o = n.userData, [4, ce(e, t, a, s, r, o)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateComponentExtensions = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, s, r, o, l;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, a = n.applyExtensionActivations, s = n.userData, r = n.showComponentActivateModal, o = n.showActivatedModal, l = n.showErrorModal, [4, fe(e, t, r, a, o, l, s)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateExtension = function(e, t, a) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, s, r, o, l, d;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, s = n.activateExtension, r = n.showDestructionWarningModal, o = n.showActivatedModal, l = n.showErrorModal, d = n.userData, [4, ue(e, t, a, s, r, o, l, d)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onDeactivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.deactivateExtension, a = n.showDestructionWarningModal, s = n.showErrorModal, [4, ve(e, t, a, s)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onUninstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.uninstallExtension, a = n.showDestructionWarningModal, s = n.showErrorModal, [4, ge(e, t, a, s)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onInstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, s, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.userData, a = n.showInstalledModal, s = n.showErrorModal, r = this.props.installExtension, [4, ke(e, this.props.channelName, r, a, s, t)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.canLoadMoreAvailableExtensions = function() {
                        var e = n.props.availableExtensionListData;
                        return void 0 !== e && !e.loading && !e.error && !!e.extensions.pageInfo.hasNextPage
                    }, n.loadMoreAvailableExtensions = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (e = this.props.availableExtensionListData) && this.canLoadMoreAvailableExtensions() ? [4, e.fetchMore({
                                            query: Ne,
                                            variables: {
                                                afterCursor: e.extensions.edges[e.extensions.edges.length - 1].cursor,
                                                search: this.state.availableExtensionsSearchQuery,
                                                state: this.state.availableExtensionsShowReleasedOnly ? B.f.Released : null
                                            },
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult;
                                                return i.__assign({}, t, {
                                                    extensions: i.__assign({}, t.extensions, {
                                                        edges: Object(x.c)(e.extensions.edges, t.extensions.edges)
                                                    })
                                                })
                                            }
                                        })] : [3, 2];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, n.updateSearchQuery = function(e) {
                        n.setState({
                            availableExtensionsSearchQuery: e
                        }), clearTimeout(n.searchQueryDebounceID), n.searchQueryDebounceID = setTimeout(function() {
                            n.updateExtensionsFilters(e, n.state.availableExtensionsShowReleasedOnly)
                        }, n.searchQueryDebounceDurationMS)
                    }, n.updateReleasedStatusQuery = function(e) {
                        n.setState({
                            availableExtensionsShowReleasedOnly: e
                        }), g.l.set(_e, e), n.updateExtensionsFilters(n.state.availableExtensionsSearchQuery, e)
                    }, n.updateExtensionsFilters = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = this.props, a = n.availableExtensionListData, s = n.showErrorModal, !a || a.error || a.loading) return [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, a.refetch({
                                            search: e,
                                            state: t ? B.f.Released : null
                                        })];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), s(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    g.o.setPageTitle(Object(g.d)("Extensions", "DashboardExtensionsManagerPageTitle"))
                }, n.prototype.componentWillReceiveProps = function(e) {
                    if (e !== this.props) {
                        var n = this.props.userData,
                            t = e.userData;
                        if (n !== t && t && !t.loading && !t.error) {
                            var i = t.currentUser.installedExtensions.slice();
                            i.sort(Se), this.setState({
                                installedExtensions: i,
                                availableSlots: (o = t.currentUser.panels, {
                                    components: ["extension-component-1", "extension-component-2"],
                                    overlays: ["extension-overlay-1"],
                                    panels: o.reduce(function(e, n) {
                                        return n.type === z.a.Extension && e.push(n.slotID), e
                                    }, []).sort()
                                })
                            })
                        }
                        var a = this.props.availableExtensionListData,
                            s = e.availableExtensionListData;
                        if (a !== s && s && !s.loading && !s.error) {
                            var r = s.extensions.edges.map(function(e) {
                                return e.node
                            });
                            this.setState({
                                availableExtensions: r
                            })
                        }
                    }
                    var o
                }, n.prototype.componentDidUpdate = function() {
                    this.props.userData && !this.props.userData.loading && this.props.availableExtensionListData && !this.props.availableExtensionListData.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this.props,
                        n = e.availableExtensionListData,
                        t = e.channelName,
                        i = e.userData,
                        a = e.userLogin;
                    if (t !== a) return v.createElement(k.b, {
                        to: Object(M.c)(a)
                    });
                    var s = void 0 !== i && i.loading,
                        r = void 0 !== n && n.loading,
                        o = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isExtensionsApprover && !e.currentUser.roles.isExtensionsDeveloper)
                        }(i),
                        l = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.cheer)
                        }(i),
                        d = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isAffiliate && !e.currentUser.roles.isPartner)
                        }(i);
                    return v.createElement(E.b, null, v.createElement(P._35, {
                        padding: 2,
                        background: P.n.Alt
                    }, v.createElement(oe, null), d && v.createElement(ne, null), v.createElement(j, null), v.createElement(P._8, {
                        display: P.R.Flex,
                        flexWrap: P.U.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, v.createElement(P._35, {
                        className: "installed-extension-list-container",
                        border: !0,
                        display: P.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, v.createElement(re, {
                        channelName: t,
                        installedExtensions: this.state.installedExtensions,
                        isLoading: s,
                        availableSlots: this.state.availableSlots,
                        onCreatePanelAndActivate: this.onCreatePanelAndActivateExtension,
                        onActivate: this.onActivateExtension,
                        onActivateComponent: this.onActivateComponentExtensions,
                        onDeactivate: this.onDeactivateExtension,
                        onUninstall: this.onUninstallExtension
                    })), v.createElement(P._8, {
                        display: P.R.Flex,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, v.createElement(Z, {
                        extensions: this.state.availableExtensions,
                        installedExtensions: this.state.installedExtensions,
                        isChannelCheeringEnabled: l,
                        isLoading: r,
                        searchQuery: this.state.availableExtensionsSearchQuery,
                        displayShowReleasedOnlyCheckbox: o,
                        showReleasedOnly: this.state.availableExtensionsShowReleasedOnly,
                        onInstall: this.onInstallExtension,
                        canLoadMore: this.canLoadMoreAvailableExtensions,
                        loadMore: this.loadMoreAvailableExtensions,
                        onSearchQueryChange: this.updateSearchQuery,
                        onShowReleasedOnlyChange: this.updateReleasedStatusQuery
                    }))), v.createElement(H.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        page: "extension-manager"
                    })))
                }, n
            }(v.Component);
        var Ae = Object(p.compose)(Object(Q.d)("ExtensionManagerPage", {
            destination: b.a.ChannelDashboardExtensionsLegacy
        }), Object(h.a)({
            location: y.PageviewLocation.DashboardExtensionsLegacy
        }), Object(f.a)(Ne, {
            name: "availableExtensionListData",
            options: {
                variables: {get state() {
                        return g.l.get(_e, !1) ? B.f.Released : null
                    }
                }
            }
        }), Object(f.a)(le, {
            options: {
                fetchPolicy: "network-only"
            },
            name: "userData"
        }), Object(f.a)(W, {
            name: "installExtension"
        }), Object(f.a)(V, {
            name: "uninstallExtension"
        }), Object(f.a)(xe, {
            name: "applyExtensionActivations"
        }), Object(f.a)(he, {
            name: "activateExtension"
        }), Object(f.a)(ye, {
            name: "deactivateExtension"
        }), Object(f.a)(be, {
            name: "createPanel"
        }))(Ce);
        var Fe = Object(a.b)(function(e) {
            var n = Object(o.c)(e);
            return {
                userLogin: n && n.login || ""
            }
        }, function(e) {
            return Object(s.b)({
                showActivatedModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(l.a, n)
                },
                showInstalledModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(m.a, n)
                },
                showDestructionWarningModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(c.a, n)
                },
                showErrorModal: function() {
                    return Object(r.d)(u.a, {})
                },
                showComponentActivateModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(r.d)(d.a, n)
                }
            }, e)
        })(Ae);
        t.d(n, "ExtensionManagerPage", function() {
            return Fe
        })
    }
});
//# sourceMappingURL=pages.extension-manager-c50585e6493fc9ac80de419f67de8d6b.js.map