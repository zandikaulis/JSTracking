(window.webpackJsonp = window.webpackJsonp || []).push([
    [146], {
        "+/wI": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                o = t("/MKj"),
                s = t("fvjX"),
                r = t("cZKs"),
                l = t("aCAx"),
                c = t("xPN0"),
                d = t("/7QA"),
                u = t("2xye"),
                m = t("22qk"),
                p = t("Ue10"),
                v = function(e) {
                    var n = e.closeModal,
                        t = e.extensionClientID,
                        o = e.extensionVersion,
                        s = e.login;
                    return a.createElement(p.Wa, null, a.createElement(p.W, {
                        type: p.Ob.H5
                    }, Object(d.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(p.yb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.W, null, Object(d.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(p.Wa, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.W, null, Object(d.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(p.W, null, Object(d.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(p.Wa, {
                        display: p.X.Flex,
                        justifyContent: p.Va.Center
                    }, a.createElement(p.Wa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(p.z, {
                        type: p.F.Hollow,
                        onClick: n
                    }, Object(d.d)("Continue Browsing", "ExtensionInstalledModal"))), a.createElement(p.z, {
                        linkTo: i.__assign({}, Object(m.b)(s, t, o), {
                            state: {
                                medium: u.PageviewMedium.ExtensionInstalledModal,
                                content: u.PageviewContent.ExtensionConfigureButton
                            }
                        }),
                        onClick: n
                    }, Object(d.d)("Configure", "ExtensionInstalledModal"))))
                };
            v.displayName = "ExtensionInstalledModalPresentation";
            var g = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(c.a, null, a.createElement(v, {
                        closeModal: this.props.closeModal,
                        extensionClientID: this.props.extensionClientID,
                        extensionVersion: this.props.extensionVersion,
                        login: this.props.login
                    }), a.createElement(r.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component);
            var h = Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(g);
            t.d(n, !1, function() {
                return g
            }), t.d(n, "a", function() {
                return h
            })
        },
        "+RbR": function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionPermissionsPage"
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
                                                        value: "iconURLs"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "square100"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hasChatSupport"
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
                                                        value: "version"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "permittedFeatures"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "extensionPermissionsPageFeatureFlagsFragment"
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
                        value: "extensionPermissionsPageFeatureFlagsFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionInstallationFeatureFlags"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "canSendChat"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 345
                }
            };
            t.loc.source = {
                body: "query ExtensionPermissionsPage {\ncurrentUser {\nid\ninstalledExtensions {\nid\nextension {\nid\nauthorName\nclientID\niconURLs {\nsquare100\n}\nhasChatSupport\nname\nversion\n}\npermittedFeatures {\n...extensionPermissionsPageFeatureFlagsFragment\n}\n}\n}\n}\nfragment extensionPermissionsPageFeatureFlagsFragment on ExtensionInstallationFeatureFlags {\ncanSendChat\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "/Qsj": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t("1hWM"),
                a = t("/7QA"),
                o = function(e, n) {
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
        "/WSp": function(e, n, t) {},
        "0QYl": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("TSYQ"),
                o = t("1hWM"),
                s = t("q1tI"),
                r = t("/7QA"),
                l = t("qAxc"),
                c = t.n(l),
                d = t("DMoW"),
                u = t("2xye"),
                m = t("1Cad"),
                p = t("AN85"),
                v = t("OzNJ"),
                g = t("Ue10"),
                h = function(e) {
                    return e.type === v.b.Bits ? s.createElement(g.bb, {
                        label: Object(r.d)("BITS", "MonetizationPill")
                    }) : e.type === v.b.InExtensionPurchases ? s.createElement(g.bb, {
                        label: Object(r.d)("PURCHASES", "MonetizationPill")
                    }) : null
                };
            h.displayName = "MonetizationPill";
            var E, x = t("22qk"),
                f = t("5IFo"),
                k = t("Ar2k");
            t("EJuf");
            ! function(e) {
                e.InstallButton = "extension-card-install-button", e.TestStatusDisclosure = "extension-card-test-status-disclosure"
            }(E || (E = {}));
            var b = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            imageURL: n.props.splashImageURL || n.props.iconURL || c.a,
                            isInstalling: !1
                        }, n.renderHoverElement = function() {
                            var e = n.props,
                                t = e.extensionClientID,
                                i = e.extensionState,
                                a = e.extensionVersion,
                                o = e.trackingContext,
                                l = e.summary,
                                c = o.content,
                                m = o.contentIndex,
                                p = o.medium,
                                v = l;
                            return i !== d.w.RELEASED && l.length > 100 && (v = l.substring(0, 100) + "..."), s.createElement(g.yb, {
                                className: "extension-card__thumbnail__details-preview",
                                background: g.r.Alt2,
                                position: g.eb.Absolute,
                                attachRight: !0,
                                attachTop: !0,
                                attachLeft: !0,
                                attachBottom: !0
                            }, s.createElement(g.Wa, {
                                display: g.X.Flex,
                                flexDirection: g.Z.Column,
                                justifyContent: g.Va.Between,
                                alignItems: g.f.Center,
                                padding: {
                                    x: 3,
                                    y: 2
                                },
                                fullHeight: !0
                            }, s.createElement(g.Wa, {
                                className: "extension-card__thumbnail__summary",
                                overflow: g.Za.Hidden
                            }, s.createElement(g.W, {
                                type: g.Ob.P
                            }, v), i !== d.w.RELEASED && s.createElement(g.Wa, {
                                padding: {
                                    top: .5
                                }
                            }, s.createElement(g.W, {
                                "data-test-selector": E.TestStatusDisclosure,
                                type: g.Ob.P
                            }, Object(r.d)("This is a Test Extension; it has not been evaluated by Twitch in accordance with its policies.", "ExtensionCard"), s.createElement(g.Oa, {
                                padding: {
                                    left: .5
                                }
                            }, s.createElement("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                            }, Object(r.d)("Learn More.", "ExtensionCardTestDisclosure")))))), s.createElement(g.Wa, {
                                display: g.X.Flex,
                                flexWrap: g.Aa.NoWrap
                            }, s.createElement(g.Wa, null, s.createElement(g.z, {
                                type: g.F.Hollow,
                                linkTo: {
                                    pathname: Object(x.d)(t, a),
                                    state: {
                                        medium: p,
                                        content: c || u.PageviewContent.ExtensionCard,
                                        content_index: m
                                    }
                                }
                            }, Object(r.d)("Details", "ExtensionCard"))), s.createElement(g.Wa, {
                                padding: {
                                    left: 1
                                }
                            }, n.renderInstallationButton()))))
                        }, n.renderInstallationButton = function() {
                            var e = n.state.isInstalling,
                                t = n.props,
                                i = t.hasInstallPermission;
                            if (t.isInstalled) return s.createElement(g.z, {
                                disabled: !0
                            }, s.createElement(g.Wa, {
                                display: g.X.Flex,
                                alignItems: g.f.Center
                            }, s.createElement(g.nb, {
                                asset: g.ob.Check
                            }), s.createElement(g.Wa, {
                                padding: {
                                    left: .5
                                }
                            }, Object(r.d)("Installed", "ExtensionCard"))));
                            var a = Object(r.d)("Install", "ExtensionCard");
                            return !i || n.isMissingCheeringRequirement() ? s.createElement(g.Wa, {
                                refDelegate: n.setRef
                            }, s.createElement(g.z, {
                                disabled: !0,
                                "data-test-selector": E.InstallButton
                            }, a)) : s.createElement(g.z, {
                                "data-test-selector": E.InstallButton,
                                state: e ? g.E.Loading : g.E.Default,
                                onClick: n.installExtension
                            }, a)
                        }, n.renderAnchorTypePills = function() {
                            var e = n.props,
                                t = e.supportedAnchors,
                                i = e.supportedPlatforms,
                                a = t.map(function(e) {
                                    return s.createElement(g.Wa, {
                                        key: e,
                                        display: g.X.InlineBlock,
                                        padding: {
                                            right: .5
                                        }
                                    }, s.createElement(m.a, {
                                        anchorType: e
                                    }))
                                });
                            return i.includes(o.ExtensionPlatform.Mobile) && a.push(s.createElement(g.Wa, {
                                key: "mobile",
                                display: g.X.InlineBlock,
                                padding: {
                                    right: .5
                                }
                            }, s.createElement(m.a, {
                                mobile: !0
                            }))), a
                        }, n.installExtension = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, a, o, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (e = this.props, n = e.categoryID, t = e.extensionClientID, a = e.extensionID, o = e.extensionVersion, !(s = e.installExtension)) return [3, 5];
                                            this.setState({
                                                isInstalling: !0
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, s(a)];
                                        case 2:
                                            return i.sent(), Object(f.e)({
                                                categoryID: n,
                                                extensionClientID: t,
                                                extensionVersion: o
                                            }), [3, 4];
                                        case 3:
                                            return i.sent(), [3, 4];
                                        case 4:
                                            this.setState({
                                                isInstalling: !1
                                            }), i.label = 5;
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.onCardImageError = function() {
                            n.setState({
                                imageURL: c.a
                            })
                        }, n.setRef = function(e) {
                            return n.installButtonRef = e
                        }, n.onMouseEnter = function() {
                            if (n.installButtonRef) {
                                var e = void 0;
                                if (n.props.hasInstallPermission) {
                                    if (!n.isMissingCheeringRequirement()) return;
                                    e = Object(r.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionCard")
                                } else e = Object(r.d)("You do not have the proper permissions to install this extension.", "ExtensionCard");
                                n.props.tooltipLayer.show({
                                    from: n.installButtonRef,
                                    label: e,
                                    align: g.Sb.Center,
                                    direction: g.Tb.Top
                                })
                            }
                        }, n.onMouseLeave = function() {
                            n.props.tooltipLayer.hide()
                        }, n.addEventListeners = function() {
                            n.installButtonRef && (n.installButtonRef.addEventListener("mouseenter", n.onMouseEnter), n.installButtonRef.addEventListener("mouseleave", n.onMouseLeave))
                        }, n.removeEventListeners = function() {
                            n.installButtonRef && (n.installButtonRef.removeEventListener("mouseenter", n.onMouseEnter), n.installButtonRef.removeEventListener("mouseleave", n.onMouseLeave))
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.addEventListeners()
                    }, n.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, n.prototype.render = function() {
                        var e = this.state.imageURL,
                            n = this.props,
                            t = n.authorName,
                            i = n.className,
                            o = n.extensionName,
                            r = n.extensionState,
                            l = n.iconURL,
                            c = n.isInstalled,
                            u = n.monetizationType,
                            m = l && e === l;
                        return s.createElement(g.Wa, {
                            className: a("extension-card", i)
                        }, s.createElement(g.G, null, s.createElement(g.yb, {
                            className: "extension-card__thumbnail",
                            border: !0,
                            background: g.r.AccentAlt2,
                            position: g.eb.Relative,
                            overflow: g.Za.Hidden
                        }, s.createElement(g.o, {
                            ratio: g.p.Aspect3x2
                        }, s.createElement(g.yb, {
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Va.Center,
                            position: g.eb.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, m ? s.createElement(g.S, {
                            className: "extension-card__thumbnail__icon",
                            src: e,
                            alt: o,
                            onError: this.onCardImageError
                        }) : s.createElement(g.Oa, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(g.S, {
                            src: e,
                            alt: o,
                            onError: this.onCardImageError
                        }))), this.renderHoverElement()), c && s.createElement(g.yb, {
                            display: g.X.InlineFlex,
                            alignItems: g.f.Center,
                            justifyContent: g.Va.Center,
                            background: g.r.Accent,
                            position: g.eb.Absolute,
                            color: g.O.Overlay,
                            attachRight: !0,
                            attachTop: !0
                        }, s.createElement(g.nb, {
                            asset: g.ob.Check
                        }))), s.createElement(g.Wa, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(g.W, {
                            type: g.Ob.H6
                        }, o), s.createElement(g.W, {
                            type: g.Ob.Span,
                            color: g.O.Alt2,
                            fontSize: g.Ba.Size7
                        }, t), s.createElement(g.Wa, {
                            padding: {
                                top: .5
                            }
                        }, this.renderAnchorTypePills(), null !== u && s.createElement(g.Wa, {
                            key: "monetization-pill",
                            display: g.X.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(h, {
                            type: u
                        })), r !== d.w.RELEASED && s.createElement(p.a, {
                            state: r
                        })))))
                    }, n.prototype.isMissingCheeringRequirement = function() {
                        var e = this.props,
                            n = e.cheeringEnabled,
                            t = e.extensionState,
                            i = e.monetizationType;
                        return t === d.w.RELEASED && i === v.b.Bits && !n
                    }, n
                }(s.Component),
                y = Object(k.c)()(b);
            t.d(n, !1, function() {
                return E
            }), t.d(n, !1, function() {
                return b
            }), t.d(n, "a", function() {
                return y
            })
        },
        "0wBS": function(e, n, t) {},
        "1Cad": function(e, n, t) {
            "use strict";
            var i = t("1hWM"),
                a = t("q1tI"),
                o = t("s6gS"),
                s = t("/Qsj"),
                r = t("Ue10"),
                l = function(e) {
                    return e.anchorType ? a.createElement(r.bb, {
                        label: Object(o.a)(e.anchorType, !0)
                    }) : e.mobile ? a.createElement(r.bb, {
                        label: Object(s.a)(i.ExtensionPlatform.Mobile, !0)
                    }) : null
                };
            l.displayName = "AnchorPill", t.d(n, "a", function() {
                return l
            })
        },
        "1IJ0": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                o = t("9C/b"),
                s = t("/7QA"),
                r = t("2xye"),
                l = t("22qk"),
                c = t("Ue10"),
                d = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.internalTrackingMediums = [r.PageviewMedium.ExtensionCategory, r.PageviewMedium.ExtensionConfiguration, r.PageviewMedium.ExtensionDiscovery, r.PageviewMedium.ExtensionInstalledModal, r.PageviewMedium.ExtensionManagement, r.PageviewMedium.ExtensionManagerCarousel, r.PageviewMedium.ExtensionPage, r.PageviewMedium.ExtensionSearch], n.goBack = function() {
                            var e = n.props,
                                t = e.channelLogin,
                                i = e.location,
                                a = e.history;
                            !t || i.state && n.internalTrackingMediums.includes(i.state.medium) ? a.goBack() : a.push(Object(l.c)(t))
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.title,
                            t = e.showBackLink;
                        return a.createElement(c.yb, {
                            background: c.r.Alt2,
                            display: c.X.Flex,
                            alignItems: c.f.Stretch
                        }, t && a.createElement(c.yb, {
                            border: !0,
                            display: c.X.Flex,
                            flexGrow: 0
                        }, a.createElement(c.A, {
                            ariaLabel: Object(s.d)("Navigate to previous page", "ExtensionPageHeader"),
                            size: c.B.Large,
                            icon: c.ob.AngleLeft,
                            onClick: this.goBack
                        })), a.createElement(c.yb, {
                            border: !0,
                            display: c.X.Flex,
                            flexGrow: 1,
                            padding: 2
                        }, a.createElement(c.W, {
                            type: c.Ob.H4
                        }, n)))
                    }, n
                }(a.Component),
                u = Object(o.a)(d);
            t.d(n, !1, function() {
                return d
            }), t.d(n, "a", function() {
                return u
            })
        },
        "1Wpl": function(e, n, t) {
            "use strict";
            t.r(n);
            var i, a = t("mrSG"),
                o = t("q1tI"),
                s = t("4p7I"),
                r = t("jKe7"),
                l = t("/7QA"),
                c = t("ZS2+"),
                d = t("4VQm"),
                u = t("yR8l"),
                m = t("D7An"),
                p = t("GIFg"),
                v = t("kYmV"),
                g = t("cuu2"),
                h = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return o.createElement(p.a, null, o.createElement(g.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                            page: v.b.Extensions
                        }))
                    }, n
                }(o.Component),
                E = t("Ue10"),
                x = t("2xye"),
                f = t("22qk");

            function k(e) {
                var n = e.channelLogin,
                    t = e.selectedTab,
                    a = e.showWhitelistedTab,
                    s = {
                        medium: x.PageviewMedium.ExtensionDashboardTopNav,
                        content: x.PageviewContent.ExtensionNavTabLink
                    };
                return o.createElement(E.Wa, {
                    display: E.X.InlineBlock,
                    padding: {
                        bottom: 2
                    }
                }, o.createElement(E.Ab, null, o.createElement(E.zb, {
                    linkTo: {
                        pathname: Object(f.c)(n),
                        state: s
                    },
                    active: t === i.Discovery
                }, o.createElement(E.W, {
                    type: E.Ob.H4
                }, Object(l.d)("Discovery", "DiscoveryNavBar"))), o.createElement(E.zb, {
                    linkTo: {
                        pathname: Object(f.e)(n),
                        state: s
                    },
                    active: t === i.MyExtensions
                }, o.createElement(E.W, {
                    "data-a-target": "my-extensions-tab",
                    type: E.Ob.H4
                }, Object(l.d)("My Extensions", "DiscoveryNavBar"))), a && o.createElement(E.zb, {
                    linkTo: {
                        pathname: Object(f.h)(n),
                        state: s
                    },
                    active: t === i.Whitelisted
                }, o.createElement(E.W, {
                    "data-a-target": "invite-only-tab",
                    type: E.Ob.H4
                }, Object(l.d)("Invite Only", "DiscoveryNavBar")))))
            }! function(e) {
                e[e.Discovery = 0] = "Discovery", e[e.MyExtensions = 1] = "MyExtensions", e[e.Whitelisted = 2] = "Whitelisted"
            }(i || (i = {}));
            var b = t("/MKj"),
                y = t("fvjX"),
                C = t("aCAx"),
                N = t("MM5q"),
                S = t("+/wI"),
                O = t("8/mp"),
                I = t("V+GM"),
                D = t("geRD"),
                F = t("NvVO"),
                w = t("MXoD"),
                P = t("VQbD"),
                A = (t("QSti"), function(e) {
                    var n = [];
                    if (e.loading)
                        for (var t = 0; t < 8; t++) n.push(o.createElement(E.Wa, {
                            key: t,
                            padding: {
                                left: 1,
                                bottom: 1
                            }
                        }, o.createElement(E.db, {
                            key: t,
                            height: 275,
                            width: 400
                        })));
                    else {
                        if (!e.entries.length) return null;
                        n = e.entries.map(function(e, n) {
                            var t = new URL(e.clickThroughURL),
                                i = e.clickThroughURL;
                            t.hostname.includes("twitch.tv") && (i = t.pathname);
                            var a = Object(w.a)({
                                content: x.PageviewContent.ExtensionDetails,
                                content_index: n,
                                medium: x.PageviewMedium.ExtensionManagerCarousel
                            }, i);
                            return o.createElement(E.Wa, {
                                className: "extension-featured-carousel-item",
                                padding: {
                                    left: 1,
                                    bottom: 1
                                },
                                key: e.id
                            }, o.createElement(E.Ta, {
                                linkTo: a
                            }, o.createElement(E.G, null, o.createElement(E.I, {
                                src: e.imageURL,
                                alt: e.title,
                                aspect: E.p.Aspect3x2
                            }), e.title && o.createElement(E.yb, {
                                alignItems: E.f.Center,
                                background: E.r.Overlay,
                                className: "extension-featured-carousel-item__title-bar",
                                display: E.X.Flex,
                                padding: {
                                    left: 2
                                },
                                position: E.eb.Absolute,
                                attachBottom: !0,
                                fullWidth: !0
                            }, o.createElement(E.W, {
                                type: E.Ob.H3,
                                color: E.O.OverlayAlt
                            }, e.title)))))
                        })
                    }
                    return o.createElement(E.Wa, {
                        overflow: E.Za.Hidden,
                        fullWidth: !0
                    }, o.createElement(E.yb, {
                        border: !0,
                        overflow: E.Za.Hidden
                    }, o.createElement(E.Wa, {
                        padding: 1
                    }, o.createElement(E.W, {
                        type: E.Ob.H4,
                        noWrap: !0
                    }, Object(l.d)("Featured", "ExtensionFeaturedCarousel"))), o.createElement(P.a, {
                        insetStyle: !0,
                        items: n
                    })))
                });
            A.displayName = "ExtensionFeaturedCarousel";
            var W = t("G1aL"),
                M = t("OzNJ"),
                j = t("vYrU"),
                L = t("GnwI"),
                T = t("d9uE"),
                _ = function(e) {
                    for (var n = e.count, t = [], i = 0; i < n; i++) t.push(o.createElement(E.Wa, {
                        key: i,
                        padding: {
                            right: 2
                        }
                    }, o.createElement(T.a, null)));
                    return o.createElement(E.Wa, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(E.Wa, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(E.db, {
                        width: 120,
                        height: 24
                    })), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        padding: {
                            bottom: 2
                        }
                    }, t))
                };
            _.displayName = "ExtensionCategoryCarouselPlaceholder";
            var R = t("0QYl"),
                U = function(e) {
                    var n = e.categoryID,
                        t = e.categoryName,
                        i = e.extensions,
                        a = e.installExtension,
                        s = i.map(function(e, t) {
                            return o.createElement(E.Wa, {
                                margin: {
                                    right: 2
                                },
                                key: e.extensionID
                            }, o.createElement(R.a, {
                                authorName: e.authorName,
                                categoryID: n,
                                cheeringEnabled: e.cheeringEnabled,
                                extensionClientID: e.extensionClientID,
                                extensionID: e.extensionID,
                                extensionName: e.extensionName,
                                extensionState: e.extensionState,
                                extensionVersion: e.extensionVersion,
                                hasInstallPermission: e.hasInstallPermission,
                                iconURL: e.iconURL,
                                installExtension: a,
                                monetizationType: e.monetizationType,
                                isInstalled: e.isInstalled,
                                splashImageURL: e.splashImageURL,
                                summary: e.summary,
                                supportedAnchors: e.supportedAnchors,
                                supportedPlatforms: e.supportedPlatforms,
                                trackingContext: {
                                    content: x.PageviewContent.ExtensionCategoryPreview,
                                    contentIndex: t,
                                    medium: x.PageviewMedium.ExtensionDiscovery
                                }
                            }))
                        }),
                        r = {
                            pathname: Object(f.a)(n),
                            state: {
                                medium: x.PageviewMedium.ExtensionDiscovery,
                                content: x.PageviewContent.ExtensionCategoryPreview
                            }
                        };
                    return o.createElement(E.Wa, null, o.createElement(E.Wa, {
                        display: E.X.Flex,
                        justifyContent: E.Va.Between,
                        alignItems: E.f.Baseline
                    }, o.createElement(E.U, {
                        to: r
                    }, o.createElement(E.W, {
                        type: E.Ob.H4
                    }, t)), o.createElement(E.yb, {
                        fontSize: E.Ba.Size5
                    }, o.createElement(E.U, {
                        to: r
                    }, Object(l.d)("View more", "ExtensionCategoryCarousel")))), o.createElement(E.Oa, {
                        margin: {
                            top: 1,
                            bottom: 2
                        }
                    }, o.createElement(P.a, {
                        items: s,
                        insetStyle: !0
                    })))
                };
            U.displayName = "ExtensionCategoryCarousel";
            var B = t("UEdd"),
                V = t("H6uz"),
                z = 5,
                q = {
                    carouselID: "default",
                    first: z,
                    skipCurrentUser: !1
                },
                X = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.installExtension = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, t, i, o, s, r, l, c, d;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = this.props, t = n.extensionDiscoveryPageData, i = n.installExtension, o = n.showExtensionErrorModal, s = n.showExtensionInstalledModal, r = t.currentUser, l = t.extensionCategories, !r || !r.id || !r.login) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(D.a)({
                                                channelID: r.id,
                                                extensionID: e
                                            }))];
                                        case 2:
                                            return c = a.sent().data, l && c.installExtension && c.installExtension.installedExtension && (d = c.installExtension.installedExtension, Object(D.e)(V, q, function(e) {
                                                return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(d), e
                                            }), s({
                                                extensionClientID: d.extension.clientID,
                                                extensionVersion: d.extension.version,
                                                login: r.login
                                            })), [3, 4];
                                        case 3:
                                            return a.sent(), o(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.loadMore = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, i;
                                return a.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = this.props.extensionDiscoveryPageData, n = e.error, t = e.extensionCategories, e.loading || n || !t ? [3, 2] : (i = {
                                                carouselID: "default",
                                                afterCursor: t.edges[t.edges.length - 1].cursor,
                                                first: z,
                                                skipCurrentUser: !0
                                            }, [4, this.props.extensionDiscoveryPageData.fetchMore({
                                                query: V,
                                                variables: i,
                                                updateQuery: function(e, n) {
                                                    var t = n.fetchMoreResult;
                                                    if (e.extensionCategories && t.extensionCategories) {
                                                        var i = e.extensionCategories.edges,
                                                            o = t.extensionCategories.edges,
                                                            s = new Set(i.filter(function(e) {
                                                                return !!e.category
                                                            }).map(function(e) {
                                                                return e.category.id
                                                            }));
                                                        return a.__assign({}, e, {
                                                            extensionCategories: a.__assign({}, t.extensionCategories, {
                                                                edges: i.concat(o.filter(function(e) {
                                                                    return !e.category || !s.has(e.category.id)
                                                                }))
                                                            })
                                                        })
                                                    }
                                                    return e
                                                }
                                            })]);
                                        case 1:
                                            o.sent(), o.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.componentDidMount = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.render = function() {
                        var e = this,
                            n = this.props.extensionDiscoveryPageData,
                            t = n.error,
                            i = n.extensionCategories,
                            a = n.loading,
                            s = [],
                            r = Object(j.a)(n.currentUser);
                        if (a)
                            for (var c = 0; c < 5; c++) s.push(o.createElement(_, {
                                key: c,
                                count: 8
                            }));
                        else i && (s = i.edges.map(function(n) {
                            var t = n.category,
                                i = [];
                            return t.extensions && t.extensions.edges && t.extensions.edges.length ? (t.extensions.edges.forEach(function(n) {
                                var t = n.extension;
                                i.push({
                                    authorName: t.authorName,
                                    cheeringEnabled: r,
                                    splashImageURL: t.iconURLs.discoverySplash,
                                    iconURL: t.iconURLs.square100,
                                    monetizationType: Object(M.e)(t),
                                    extensionClientID: t.clientID,
                                    extensionID: t.id,
                                    extensionName: t.name,
                                    extensionState: t.state,
                                    extensionVersion: t.version,
                                    hasInstallPermission: null !== t.self && t.self.canInstall,
                                    isInstalled: e.isExtensionInstalled(t.id),
                                    summary: t.summary,
                                    supportedAnchors: Object(M.f)(t.views),
                                    supportedPlatforms: Object(M.g)(t.views)
                                })
                            }), o.createElement(U, {
                                key: t.id,
                                categoryID: t.id,
                                categoryName: t.name,
                                extensions: i,
                                installExtension: e.installExtension
                            })) : null
                        }));
                        return o.createElement(E.Wa, null, o.createElement(E.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(W.a, {
                            trackingContext: {
                                medium: x.PageviewMedium.ExtensionDiscovery
                            }
                        })), o.createElement(A, {
                            entries: this.getFeaturedCarouselEntries(),
                            loading: a
                        }), o.createElement(E.Wa, {
                            margin: {
                                y: 2
                            }
                        }, s), o.createElement(O.a, {
                            pixelThreshold: 400,
                            loadMore: this.loadMore,
                            enabled: this.canLoadMore()
                        }), t && o.createElement(E.W, null, Object(l.d)("We're having trouble fetching extensions.", "ExtensionDiscoveryPagePresentation")))
                    }, n.prototype.canLoadMore = function() {
                        var e = this.props.extensionDiscoveryPageData,
                            n = e.error,
                            t = e.loading,
                            i = e.extensionCategories;
                        return !!i && (!t && !n && i.pageInfo.hasNextPage)
                    }, n.prototype.checkAndReportPageInteractive = function() {
                        var e = this.props,
                            n = e.extensionDiscoveryPageData,
                            t = e.latencyTracking;
                        n.loading || t.reportInteractive()
                    }, n.prototype.getFeaturedCarouselEntries = function() {
                        var e = this.props.extensionDiscoveryPageData.extensionCarousel;
                        return e && e.entries ? e.entries.map(function(e) {
                            return {
                                clickThroughURL: e.clickThroughURL,
                                id: e.id,
                                imageURL: e.imageURL,
                                title: e.title
                            }
                        }) : []
                    }, n.prototype.isExtensionInstalled = function(e) {
                        var n = this.props.extensionDiscoveryPageData.currentUser;
                        return !(!n || !n.installedExtensions) && n.installedExtensions.some(function(n) {
                            return n.extension.id === e
                        })
                    }, n
                }(o.Component),
                H = Object(y.compose)(Object(L.b)("ExtensionDiscoveryPage", {
                    destination: F.a.ExtensionsDiscovery
                }), Object(I.a)({
                    location: x.PageviewLocation.ExtensionsDiscovery
                }), Object(u.a)(V, {
                    name: "extensionDiscoveryPageData",
                    options: {
                        variables: q
                    }
                }), Object(u.a)(B, {
                    name: "installExtension"
                }))(X);
            var Y = Object(b.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        showExtensionErrorModal: function() {
                            return Object(C.d)(N.a, {})
                        },
                        showExtensionInstalledModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(C.d)(S.a, n)
                        }
                    }, e)
                })(H),
                G = t("cZKs"),
                Q = t("xPN0"),
                J = function(e) {
                    var n = e.activations,
                        t = e.onConfirm;
                    return o.createElement(E.Wa, null, o.createElement(E.W, {
                        type: E.Ob.H5
                    }, Object(l.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
                        count: n.length
                    }, "ExtensionActivatedModal")), o.createElement(E.yb, {
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
                        return o.createElement(E.W, {
                            key: t
                        }, Object(l.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
                            extensionName: o.createElement(E.W, {
                                bold: !0,
                                type: E.Ob.Span
                            }, n),
                            anchorSlot: o.createElement(E.W, {
                                bold: !0,
                                type: E.Ob.Span,
                                transform: E.Nb.Uppercase
                            }, t)
                        }, "ExtensionActivatedModal"))
                    })), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        justifyContent: E.Va.Center
                    }, o.createElement(E.z, {
                        onClick: t
                    }, Object(l.d)("Done", "ExtensionActivatedModal"))))
                };
            J.displayName = "ExtensionActivatedModalPresentation";
            var Z = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return o.createElement(Q.a, null, o.createElement(J, {
                        activations: this.props.activations,
                        onConfirm: this.props.closeModal
                    }), o.createElement(G.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(o.Component);
            var $, K = Object(b.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        closeModal: C.c
                    }, e)
                })(Z),
                ee = t("TSYQ"),
                ne = function(e) {
                    var n, t = e.x,
                        i = e.y,
                        a = e.width,
                        s = e.height,
                        r = e.isGrabbed,
                        l = e.isOverlapped,
                        c = e.name,
                        d = e.slot,
                        u = e.tabIndex,
                        m = {
                            left: t + "px",
                            top: i + "px",
                            width: a + "px",
                            height: s + "px"
                        },
                        p = ee("extension-component-preview", ((n = {})["extension-component-preview--active"] = r, n["extension-component-preview--overlapped"] = l, n));
                    return o.createElement(E.Pa, {
                        position: E.eb.Absolute,
                        textAlign: E.Kb.Center
                    }, o.createElement("div", {
                        key: d,
                        tabIndex: u,
                        "data-slot": d,
                        className: p,
                        style: m
                    }, o.createElement(E.yb, {
                        fullHeight: !0,
                        display: E.X.Flex,
                        flexDirection: E.Z.Column,
                        justifyContent: E.Va.Center
                    }, o.createElement(E.W, {
                        color: E.O.Overlay,
                        type: E.Ob.Span,
                        fontSize: E.Ba.Size5
                    }, c))))
                },
                te = 1e-7;

            function ie(e, n) {
                return !(e.minX > n.maxX - te || e.maxX - te < n.minX) && !(e.minY > n.maxY - te || e.maxY - te < n.minY)
            }

            function ae(e, n, t, i) {
                return {
                    minX: e,
                    minY: n,
                    maxX: e + t,
                    maxY: n + i
                }
            }
            var oe = 768,
                se = 432,
                re = 60,
                le = 48,
                ce = 0,
                de = (re + 1) / se * 100,
                ue = ae(0, 0, oe, re),
                me = ae(0, se - le, oe, le),
                pe = "player-controls-top",
                ve = "player-controls-bottom",
                ge = (($ = {})[pe] = ue, $[ve] = me, $),
                he = 10,
                Ee = {
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
                xe = t("1hWM");

            function fe(e, n, t) {
                var i = Object(xe.getComponentSizeFromView)(oe, se, {
                        aspectHeight: 100 * t.aspectHeight,
                        aspectWidth: 100 * t.aspectWidth,
                        zoom: t.hasZoom,
                        zoomPixels: t.zoomPixels || xe.DefaultZoomPixelWidth
                    }),
                    a = i.width,
                    o = i.height,
                    s = Object(xe.getComponentPositionFromView)(oe, se, {
                        x: Math.floor(100 * e),
                        y: Math.floor(100 * n)
                    });
                return ae(s.x, s.y, a, o)
            }

            function ke(e) {
                for (var n = Object.keys(e).sort(), t = Object.keys(ge), i = n.concat(t).reduce(function(e, n) {
                        var t;
                        return Object.assign(e, ((t = {})[n] = !1, t))
                    }, {}), a = 0; a < n.length; ++a) {
                    for (var o = n[a], s = e[o], r = fe(s.x, s.y, s.componentConfig), l = a + 1; l < n.length; ++l) {
                        var c = n[l],
                            d = e[c];
                        ie(r, fe(d.x, d.y, d.componentConfig)) && (i[o] = !0, i[c] = !0)
                    }
                    for (var u = 0, m = t; u < m.length; u++) {
                        var p = m[u];
                        ie(r, ge[p]) && (i[p] = !0)
                    }
                }
                return i
            }
            t("0wBS");
            var be = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        t.renderOverlapError = function() {
                            var e = t.state.hasOverlappingComponents ? E.n.SlideInTop : E.n.SlideOutTop;
                            return t.state.hasOverlappingComponents || t.state.isAnimating ? o.createElement(E.i, {
                                enabled: !0,
                                onAnimationEnd: t.handleAnimationEnd,
                                type: e
                            }, o.createElement(E.yb, {
                                position: E.eb.Absolute,
                                attachTop: !0,
                                fullWidth: !0,
                                display: E.X.Flex,
                                justifyContent: E.Va.Center
                            }, o.createElement(E.Pa, {
                                display: E.X.Flex,
                                padding: 1,
                                elevation: 5
                            }, o.createElement("div", {
                                className: "extension-component-error"
                            }, o.createElement(E.nb, {
                                asset: E.ob.NotificationError
                            }), o.createElement(E.Pa, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(E.W, {
                                fontSize: E.Ba.Size4
                            }, Object(l.d)("Component Extensions cannot overlap", "ExtensionComponentActivateModal"))))))) : null
                        }, t.renderPositionPreview = function() {
                            var e, n, i = t.state.slotList.map(function(e, n) {
                                    var i = t.state.currentActivationSettings[e],
                                        a = i.componentConfig,
                                        s = i.extensionName,
                                        r = i.installationID,
                                        l = fe(i.x, i.y, a);
                                    return o.createElement(ne, {
                                        slot: e,
                                        name: s,
                                        tabIndex: n + 1,
                                        isGrabbed: t.state.grabbedSlot === e,
                                        isOverlapped: t.state.collisionMap[e],
                                        key: r,
                                        x: l.minX,
                                        y: l.minY,
                                        width: l.maxX - l.minX,
                                        height: l.maxY - l.minY
                                    })
                                }),
                                a = ee("extension-component-player-controls", ((e = {})["extension-component-player-controls--overlapped"] = t.state.collisionMap[pe], e)),
                                s = ee("extension-component-player-controls", ((n = {})["extension-component-player-controls--overlapped"] = t.state.collisionMap[ve], n));
                            return o.createElement(E.yb, null, o.createElement(E.Pa, {
                                position: E.eb.Relative
                            }, o.createElement("div", {
                                ref: t.updatePositionContainerRef,
                                className: "extension-component-player",
                                style: {
                                    width: oe,
                                    height: se
                                }
                            }, i, o.createElement("div", {
                                className: a,
                                style: {
                                    top: "0px",
                                    height: re
                                }
                            }), o.createElement("div", {
                                className: s,
                                style: {
                                    bottom: "0px",
                                    height: le
                                }
                            }), t.renderOverlapError())))
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
                                    o = n.y;
                                return {
                                    installationID: i,
                                    component: {
                                        slot: e,
                                        x: Math.floor(100 * a),
                                        y: Math.floor(100 * o)
                                    }
                                }
                            });
                            t.props.onConfirm(e)
                        }, t.clampCoordinates = function(e, n, t, i) {
                            var a = 100 - t,
                                o = 100 - i;
                            return {
                                x: Math.max(0, Math.min(e, a)),
                                y: Math.max(0, Math.min(n, o))
                            }
                        }, t.updateCoordinates = function(e, n, i) {
                            var o;
                            if (!t.state.currentActivationSettings[e]) throw new Error("Invalid slot to update");
                            var s = a.__assign({}, t.state.currentActivationSettings[e]),
                                r = s.componentConfig,
                                l = t.clampCoordinates(n, i, r.aspectWidth, r.aspectHeight),
                                c = l.x,
                                d = l.y;
                            return s.x = c, s.y = d, a.__assign({}, t.state.currentActivationSettings, ((o = {})[e] = s, o))
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
                                        o = i.getAttribute("data-slot");
                                    if (o) {
                                        var s = i.getBoundingClientRect(),
                                            r = e.clientX - a.left,
                                            l = e.clientY - a.top,
                                            c = r - (s.left - a.left),
                                            d = l - (s.top - a.top),
                                            u = t.bringSlotToFront(t.state.slotList, o);
                                        t.setState({
                                            grabbedSlot: o,
                                            mouseOffsetX: c,
                                            mouseOffsetY: d,
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
                                    o = i - t.state.mouseOffsetX + window.scrollX,
                                    s = a - t.state.mouseOffsetY + window.scrollY,
                                    r = o / oe,
                                    l = s / se,
                                    c = t.updateCoordinates(t.state.grabbedSlot, Math.floor(1e4 * r) / 100, Math.floor(1e4 * l) / 100);
                                t.setState({
                                    currentActivationSettings: c
                                })
                            }
                        }, t.handleAnimationEnd = function() {
                            t.setState({
                                isAnimating: !1
                            })
                        }, t.updateCollisionMap = function(e) {
                            var n = ke(e),
                                i = t.state.sortedSlotList.some(function(e) {
                                    return n[e]
                                }),
                                a = i !== t.state.hasOverlappingComponents;
                            t.setState({
                                collisionMap: n,
                                hasOverlappingComponents: i,
                                isAnimating: a,
                                currentActivationSettings: e
                            })
                        }, t.handleMouseUp = function() {
                            t.updateCollisionMap(t.state.currentActivationSettings), t.setState({
                                grabbedSlot: null
                            })
                        }, t.handleKeyDown = function(e) {
                            var n = document.activeElement ? document.activeElement.getAttribute("data-slot") : void 0;
                            if (n && t.state.positioningContainer && t.state.positioningContainer.contains(document.activeElement)) {
                                var i = t.state.positioningContainer.getBoundingClientRect(),
                                    a = 1 / oe,
                                    o = 1 / se,
                                    s = 0,
                                    r = 0,
                                    l = document.activeElement;
                                if (l) {
                                    var c = l.getBoundingClientRect();
                                    s = c.left, r = c.top
                                }
                                var d = 0,
                                    u = 0,
                                    m = e.key.toLowerCase(),
                                    p = Ee[m];
                                p && (d = p.x * a, u = p.y * o);
                                var v = e.shiftKey ? he : 1,
                                    g = s - i.left + (window.scrollX || 0),
                                    h = r - i.top + (window.scrollY || 0),
                                    E = d * v + g / oe,
                                    x = u * v + h / se,
                                    f = t.updateCoordinates(n, Math.floor(1e4 * E) / 100, Math.floor(1e4 * x) / 100);
                                t.updateCollisionMap(f)
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
                        var i = n.activatedComponentData.reduce(function(e, t) {
                            return t.installationID === n.idToActivate && t.slot !== n.slotToActivate ? e : (e[t.slot] = a.__assign({}, t, {
                                x: t.x / 100,
                                y: t.y / 100,
                                componentConfig: a.__assign({}, t.componentConfig, {
                                    aspectWidth: t.componentConfig.aspectWidth / 100,
                                    aspectHeight: t.componentConfig.aspectHeight / 100
                                })
                            }), e)
                        }, {});
                        if (!i[n.slotToActivate] || i[n.slotToActivate].installationID !== n.idToActivate) {
                            var s = n.componentConfigToActivate,
                                r = s.aspectWidth,
                                c = s.aspectHeight,
                                d = t.clampCoordinates(ce, de, r / 100, c / 100),
                                u = d.x,
                                m = d.y;
                            i[n.slotToActivate] = {
                                x: u,
                                y: m,
                                installationID: n.idToActivate,
                                extensionName: n.extensionNameToActivate,
                                componentConfig: a.__assign({}, n.componentConfigToActivate, {
                                    aspectWidth: n.componentConfigToActivate.aspectWidth / 100,
                                    aspectHeight: n.componentConfigToActivate.aspectHeight / 100
                                }),
                                slot: n.slotToActivate
                            }
                        }
                        var p = Object.keys(i).sort(),
                            v = t.bringSlotToFront(p, n.slotToActivate),
                            g = ke(i),
                            h = p.some(function(e) {
                                return g[e]
                            });
                        return t.state = {
                            slotList: v,
                            collisionMap: g,
                            sortedSlotList: p,
                            hasOverlappingComponents: h,
                            currentActivationSettings: i,
                            grabbedSlot: null,
                            mouseOffsetX: 0,
                            mouseOffsetY: 0,
                            positioningContainer: null,
                            isAnimating: !1
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.componentWillUpdate = function(e, n) {
                        var t = this.props.onIsDraggingChanged || e.onIsDraggingChanged;
                        if (t) {
                            var i = null !== this.state.grabbedSlot,
                                a = null !== n.grabbedSlot;
                            i !== a && t(a)
                        }
                    }, n.prototype.render = function() {
                        return o.createElement("div", {
                            onMouseDown: this.handleMouseDown,
                            onMouseMove: this.handleMouseMove,
                            onMouseUp: this.handleMouseUp,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleFocus
                        }, o.createElement(E.Wa, null, o.createElement(E.W, {
                            type: E.Ob.H5
                        }, Object(l.d)("Set Component Location", "ExtensionComponentActivateModal")), o.createElement(E.yb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            }
                        }, o.createElement(E.W, null, Object(l.d)("Drag and drop the selected component to set a default anchor point within the video player", "ExtensionComponentActivateModal"))), o.createElement(E.yb, {
                            background: E.r.Alt,
                            padding: {
                                bottom: 1
                            }
                        }, this.renderPositionPreview()), o.createElement(E.yb, {
                            display: E.X.Flex,
                            justifyContent: E.Va.Center,
                            borderTop: !0,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(E.Wa, {
                            display: E.X.Flex,
                            flexDirection: E.Z.Row
                        }, o.createElement("div", {
                            className: "extension-component-controls-indicator"
                        }), o.createElement(E.Wa, {
                            padding: {
                                left: .5
                            }
                        }, Object(l.d)("Components placed in this region are likely to be obscured by the video player controls", "ExtensionComponentActivateModal")))), o.createElement(E.yb, {
                            display: E.X.Flex,
                            justifyContent: E.Va.Center,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(E.Wa, {
                            padding: {
                                right: 1
                            }
                        }, o.createElement(E.z, {
                            type: E.F.Hollow,
                            onClick: this.props.onClose
                        }, Object(l.d)("Cancel", "ExtensionComponentActivateModal"))), o.createElement(E.z, {
                            disabled: this.state.hasOverlappingComponents,
                            onClick: this.activateComponentsWithCurrentSettings
                        }, Object(l.d)("Save", "ExtensionComponentActivateModal")))))
                    }, n.prototype.findComponentPreview = function(e) {
                        if (e) {
                            if (e.getAttribute("data-slot")) return e;
                            if (e.parentElement) return this.findComponentPreview(e.parentElement)
                        }
                        return null
                    }, n
                }(o.Component),
                ye = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            isDragging: !1
                        }, n.onConfirm = function(e) {
                            n.props.onConfirm(e), n.props.closeModal()
                        }, n.onClose = function() {
                            n.props.onClose(), n.props.closeModal()
                        }, n.onIsDraggingChanged = function(e) {
                            n.setState({
                                isDragging: e
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return o.createElement(Q.a, {
                            className: "extension-manager-modal-container--expand"
                        }, o.createElement(be, {
                            activatedComponentData: this.props.activatedComponentData,
                            componentConfigToActivate: this.props.componentConfigToActivate,
                            extensionNameToActivate: this.props.extensionNameToActivate,
                            idToActivate: this.props.idToActivate,
                            slotToActivate: this.props.slotToActivate,
                            onConfirm: this.onConfirm,
                            onClose: this.onClose,
                            onIsDraggingChanged: this.onIsDraggingChanged
                        }), o.createElement(G.a, {
                            closeOnBackdropClick: !this.state.isDragging,
                            onClose: this.onClose
                        }))
                    }, n
                }(o.Component);
            var Ce = Object(b.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        closeModal: C.c
                    }, e)
                })(ye),
                Ne = t("kRBY"),
                Se = t("oJmH"),
                Oe = t("mLw1"),
                Ie = t("qCDY"),
                De = t("1IJ0"),
                Fe = t("YyE3"),
                we = t("5IFo"),
                Pe = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            hasCardImageError: !1
                        }, n.onCardImageError = function() {
                            n.setState({
                                hasCardImageError: !0
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this.props,
                            n = e.extensionID,
                            t = e.extensionsForChannel,
                            i = n.split("-"),
                            a = i[0],
                            o = i[1];
                        t && !t.loading && t.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(t.installedExtensions)
                        }), Object(we.d)({
                            extensionClientID: a,
                            extensionVersion: o
                        })
                    }, n.prototype.componentWillReceiveProps = function(e) {
                        !this.state.installation && e.extensionsForChannel && !e.extensionsForChannel.loading && e.extensionsForChannel.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(e.extensionsForChannel.installedExtensions)
                        })
                    }, n.prototype.render = function() {
                        var e = this.props,
                            n = e.channelID,
                            t = e.channelLogin,
                            i = e.languageCode,
                            a = e.locale,
                            s = this.isLoading(),
                            r = n || "",
                            c = t || "",
                            d = null;
                        if (s) d = this.renderPlaceholders();
                        else {
                            if (!this.state.installation) return this.renderRedirect(c);
                            var u = this.state.installation,
                                m = u.extension;
                            d = o.createElement(E.Wa, {
                                fullWidth: !0
                            }, o.createElement(E.Wa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(E.G, {
                                row: !0,
                                border: !1
                            }, o.createElement(E.I, {
                                alt: m.name,
                                src: this.state.hasCardImageError ? l.a.defaultAvatarURL : m.iconUrl,
                                aspect: E.p.Aspect1x1,
                                size: E.J.Size6,
                                onError: this.onCardImageError
                            }), o.createElement(E.H, null, o.createElement(E.Wa, {
                                padding: 1
                            }, o.createElement(E.W, {
                                type: E.Ob.H4
                            }, m.name), o.createElement(E.W, {
                                type: E.Ob.Span,
                                color: E.O.Alt2
                            }, Object(l.d)("Created by {extensionAuthor}", {
                                extensionAuthor: m.authorName
                            }, "ExtensionConfigurePresentation")))))), o.createElement(E.Wa, null, o.createElement(Ie.a, {
                                channelID: r,
                                channelLogin: t,
                                className: "",
                                extensionMode: xe.ExtensionMode.Config,
                                installation: u,
                                languageCode: i,
                                locale: a,
                                login: t,
                                loginID: r,
                                isPopout: !1
                            })))
                        }
                        var p = o.createElement(De.a, {
                            channelLogin: t,
                            showBackLink: !1,
                            title: Object(l.d)("Configure", "ExtensionConfigurePresentation")
                        });
                        return o.createElement(O.b, null, o.createElement(E.Wa, {
                            padding: 2
                        }, p, o.createElement(E.yb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, d)))
                    }, n.prototype.findExtensionFromInstallations = function(e) {
                        var n = this;
                        return e.find(function(e) {
                            var t = e.extension;
                            return n.props.extensionID === t.clientId + "-" + t.version
                        })
                    }, n.prototype.renderPlaceholders = function() {
                        return o.createElement(E.Wa, {
                            fullWidth: !0
                        }, o.createElement(E.Wa, {
                            display: E.X.Flex,
                            alignItems: E.f.Center,
                            padding: {
                                y: 1
                            }
                        }, o.createElement(E.Wa, null, o.createElement(E.db, {
                            width: 60,
                            height: 60
                        })), o.createElement(E.Wa, {
                            padding: {
                                left: 1
                            }
                        }, o.createElement(E.db, {
                            lineCount: 2,
                            width: 200
                        }))))
                    }, n.prototype.isLoading = function() {
                        return !this.props.extensionsForChannel || !this.props.extensionsForChannel.installedExtensions
                    }, n.prototype.renderRedirect = function(e) {
                        return o.createElement(Oe.a, {
                            to: Object(f.e)(e)
                        })
                    }, n
                }(o.Component),
                Ae = Object(Se.compose)(Object(Fe.a)({
                    name: "extensionsForChannel",
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID || ""
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelID
                    }
                }))(Pe),
                We = (t("nH1N"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.channelID,
                            t = e.channelLogin,
                            i = e.extensionID,
                            a = e.languageCode,
                            s = e.locale,
                            r = e.onClose;
                        return o.createElement(E.yb, {
                            background: E.r.Base,
                            className: "extension-configure-modal"
                        }, o.createElement(Ae, {
                            channelLogin: t,
                            channelID: n,
                            extensionID: i,
                            languageCode: a,
                            locale: s
                        }), o.createElement(G.a, {
                            closeOnBackdropClick: !0,
                            onClose: r
                        }))
                    }, n
                }(o.Component));
            var Me = Object(b.connect)(function(e) {
                    var n = Object(Ne.e)(e);
                    return {
                        channelID: n && n.id,
                        languageCode: Object(Ne.b)(e),
                        locale: Object(Ne.d)(e)
                    }
                })(We),
                je = t("Z5H4"),
                Le = t("cr+I"),
                Te = t("DMoW");

            function _e(e) {
                return e.slice().sort(function(e, n) {
                    var t = e.extension,
                        i = n.extension;
                    return t.name.toLowerCase() > i.name.toLowerCase() ? 1 : t.name.toLowerCase() < i.name.toLowerCase() ? -1 : t.version < i.version ? 1 : t.version > i.version ? -1 : 0
                })
            }
            var Re, Ue = t("1Cad"),
                Be = t("AN85"),
                Ve = t("eJ65"),
                ze = t("EZh/");
            ! function(e) {
                e.Component1 = "extension-component-1", e.Component2 = "extension-component-2", e.Overlay1 = "extension-overlay-1", e.Panel1 = "extension-panel-1", e.Panel2 = "extension-panel-2", e.Panel3 = "extension-panel-3"
            }(Re || (Re = {}));
            var qe = function(e) {
                    var n;
                    switch (e) {
                        case Re.Component1:
                            n = Object(l.d)("Component 1", "LocalizeExtensionSlot");
                            break;
                        case Re.Component2:
                            n = Object(l.d)("Component 2", "LocalizeExtensionSlot");
                            break;
                        case Re.Overlay1:
                            n = Object(l.d)("Overlay 1", "LocalizeExtensionSlot");
                            break;
                        case Re.Panel1:
                            n = Object(l.d)("Panel 1", "LocalizeExtensionSlot");
                            break;
                        case Re.Panel2:
                            n = Object(l.d)("Panel 2", "LocalizeExtensionSlot");
                            break;
                        case Re.Panel3:
                            n = Object(l.d)("Panel 3", "LocalizeExtensionSlot");
                            break;
                        default:
                            n = e.toUpperCase()
                    }
                    return n
                },
                Xe = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderAnchorOptions = function() {
                            var e = n.props,
                                t = e.activationConfig,
                                i = e.availableSlots,
                                a = [];
                            if (i.components) {
                                var s = n.renderComponentAnchorOptions(i.components);
                                s.length && a.push(s)
                            }
                            if (i.overlays) {
                                var r = n.renderOverlayAnchorOptions(i.overlays);
                                r.length && a.push(r)
                            }
                            if (i.panels) {
                                var l = n.renderPanelAnchorOptions(i.panels);
                                l.length && a.push(l)
                            }
                            return t.state === Te.a.ACTIVE && a.push(n.renderDeactivate()), a.reduce(function(e, n, t) {
                                var i = o.createElement(E.yb, {
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
                            return o.createElement(E.Wa, {
                                display: E.X.Flex,
                                flexWrap: E.Aa.NoWrap,
                                alignItems: E.f.Center
                            }, o.createElement(E.fb, {
                                status: E.gb.Online
                            }), o.createElement(E.Wa, {
                                padding: {
                                    left: 1
                                }
                            }, qe(e)))
                        }, n.renderDeactivate = function() {
                            return o.createElement(E.Ta, {
                                key: "deactivate",
                                blurAfterClick: !0,
                                onClick: n.deactivateExtension
                            }, o.createElement(E.Wa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Deactivate", "ActivateExtensionDropdownV2")))
                        }, n.renderComponentAnchorOptions = function(e) {
                            return e.reduce(function(e, t) {
                                var i = n.renderSetAnchorLocationInteractable(t, Te.u.COMPONENT);
                                return i && e.push(i), e
                            }, [])
                        }, n.renderOverlayAnchorOptions = function(e) {
                            return e.reduce(function(e, t) {
                                var i = n.renderSetAnchorLocationInteractable(t, Te.u.VIDEO_OVERLAY);
                                return i && e.push(i), e
                            }, [])
                        }, n.renderPanelAnchorOptions = function(e) {
                            var t = e.reduce(function(e, t) {
                                var i = n.renderSetAnchorLocationInteractable(t, Te.u.PANEL);
                                return i && e.push(i), e
                            }, []);
                            return e.length < ze.a && t.push(o.createElement(E.Ta, {
                                key: "new-panel",
                                blurAfterClick: !0,
                                onClick: n.createPanelAndActivate
                            }, o.createElement(E.Wa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Add as a new panel", "ActivateExtensionDropdownV2")))), t
                        }, n.renderSetAnchorLocationInteractable = function(e, t) {
                            var i = n.props.activationConfig;
                            return i.state === Te.a.ACTIVE && i.slot === e ? i.anchor !== Te.u.COMPONENT ? null : o.createElement(E.Ta, {
                                key: e,
                                blurAfterClick: !0,
                                onClick: n.activateExtension,
                                "data-slot": e,
                                "data-anchor": t
                            }, o.createElement(E.Wa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Reposition {slot}", {
                                slot: qe(e)
                            }, "ActivateExtensionDropdownV2"))) : o.createElement(E.Ta, {
                                key: e,
                                blurAfterClick: !0,
                                onClick: n.activateExtension,
                                "data-slot": e,
                                "data-anchor": t
                            }, o.createElement(E.Wa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Set as {slot}", {
                                slot: qe(e)
                            }, "ActivateExtensionDropdownV2")))
                        }, n.createPanelAndActivate = function() {
                            n.props.activateExtension("", Te.u.PANEL, !0)
                        }, n.activateExtension = function(e) {
                            var t = e.currentTarget.dataset,
                                i = t.slot,
                                a = t.anchor;
                            i && a && n.props.activateExtension(i, a)
                        }, n.deactivateExtension = function() {
                            n.props.deactivateExtension()
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.activationConfig,
                            t = e.canActivate,
                            i = e.requiredActions;
                        return i && i.some(function(e) {
                            return e.type === Te.v.REQUIRES_CONFIGURATION
                        }) ? o.createElement(E.Wa, {
                            display: E.X.Flex,
                            alignItems: E.f.Center
                        }, o.createElement(E.W, {
                            color: E.O.Alt2
                        }, Object(l.d)("Needs Configuration", "ActivateExtensionDropdownV2"))) : t ? o.createElement(Ve.a, {
                            openByDefault: this.props.openByDefault
                        }, o.createElement(E.z, {
                            dropdown: !0,
                            type: E.F.Text
                        }, n.state === Te.a.ACTIVE ? this.renderActivePresence(n.slot) : Object(l.d)("Activate", "ActivateExtensionDropdownV2")), o.createElement(E.u, {
                            size: E.w.Medium,
                            offsetY: "-0.1rem",
                            noTail: !0
                        }, o.createElement(E.yb, {
                            color: E.O.Link,
                            padding: 1
                        }, this.renderAnchorOptions()))) : o.createElement(E.Wa, {
                            display: E.X.Flex,
                            alignItems: E.f.Center
                        }, o.createElement(E.W, {
                            color: E.O.Alt2
                        }, Object(l.d)("Activation Disabled", "ActivateExtensionDropdownV2")))
                    }, n
                }(o.Component),
                He = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            extensionIcon: n.props.extensionIcon
                        }, n.onCardImageError = function() {
                            n.setState({
                                extensionIcon: l.a.defaultAvatarURL
                            })
                        }, n.renderExtensionTagPills = function() {
                            var e = n.props,
                                t = e.supportedAnchors,
                                i = e.supportPlatforms,
                                a = t.map(function(e) {
                                    return o.createElement(E.Wa, {
                                        key: e,
                                        display: E.X.InlineBlock,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(Ue.a, {
                                        anchorType: e
                                    }))
                                });
                            return i.includes(xe.ExtensionPlatform.Mobile) && a.push(o.createElement(E.Wa, {
                                key: "mobile",
                                display: E.X.InlineBlock,
                                padding: {
                                    right: .5
                                }
                            }, o.createElement(Ue.a, {
                                mobile: !0
                            }))), a
                        }, n.activateExtension = function(e, t, i) {
                            void 0 === i && (i = !1);
                            var a = n.props.installationID;
                            n.props.activateExtension(a, e, t, i)
                        }, n.deactivateExtension = function() {
                            var e = n.props.installationID;
                            n.props.deactivateExtension(e)
                        }, n.uninstallExtension = function() {
                            var e = n.props.installationID;
                            n.props.uninstallExtension(e)
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.channelName,
                            t = e.extensionClientID,
                            i = e.extensionName,
                            s = e.extensionState,
                            r = e.extensionVersion,
                            c = e.trackingContext;
                        return o.createElement(E.yb, {
                            background: E.r.Base,
                            border: !0
                        }, o.createElement(E.yb, {
                            padding: 1,
                            borderBottom: !0
                        }, o.createElement(E.G, {
                            row: !0,
                            border: !1
                        }, o.createElement(E.I, {
                            alt: i,
                            src: this.state.extensionIcon,
                            aspect: E.p.Aspect1x1,
                            size: E.J.Size6,
                            onError: this.onCardImageError
                        }), o.createElement(E.H, null, o.createElement(E.Wa, {
                            padding: 1
                        }, o.createElement(E.U, {
                            to: {
                                pathname: Object(f.d)(t, r),
                                state: {
                                    medium: c.medium,
                                    content: x.PageviewContent.InstalledExtensionCard
                                }
                            }
                        }, o.createElement(E.W, {
                            type: E.Ob.H5
                        }, i)), this.renderExtensionTagPills(), s !== Te.w.RELEASED && o.createElement(Be.a, {
                            state: s
                        }))))), o.createElement(E.Wa, {
                            display: E.X.Flex,
                            justifyContent: E.Va.Between,
                            padding: 1
                        }, o.createElement(Xe, {
                            activationConfig: this.props.activationConfig,
                            availableSlots: this.props.availableSlots,
                            canActivate: this.props.canActivate,
                            requiredActions: this.props.requiredActions,
                            activateExtension: this.activateExtension,
                            deactivateExtension: this.deactivateExtension
                        }), o.createElement(E.Wa, null, o.createElement(E.A, {
                            ariaLabel: Object(l.d)("Configure", "InstalledExtensionCardComponent"),
                            icon: E.ob.Gear,
                            linkTo: a.__assign({}, Object(f.b)(n, t, r), {
                                state: {
                                    medium: c.medium,
                                    content: x.PageviewContent.InstalledExtensionCard
                                }
                            })
                        }), o.createElement(E.A, {
                            ariaLabel: Object(l.d)("Uninstall", "InstalledExtensionCardComponent"),
                            icon: E.ob.Trash,
                            onClick: this.uninstallExtension
                        }))))
                    }, n
                }(o.Component),
                Ye = function() {
                    return o.createElement(E.yb, {
                        margin: {
                            bottom: 1
                        },
                        background: E.r.Base,
                        border: !0
                    }, o.createElement(E.yb, {
                        display: E.X.Flex,
                        padding: 1,
                        borderBottom: !0
                    }, o.createElement(E.Wa, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(E.db, {
                        height: 60,
                        width: 60
                    })), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        flexDirection: E.Z.Column,
                        justifyContent: E.Va.Center
                    }, o.createElement(E.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(E.db, {
                        height: 20,
                        width: 225
                    })), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        flexDirection: E.Z.Row
                    }, o.createElement(E.Wa, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(E.db, {
                        width: 80,
                        height: 15
                    })), o.createElement(E.Wa, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(E.db, {
                        width: 80,
                        height: 15
                    })), o.createElement(E.Wa, null, o.createElement(E.db, {
                        width: 80,
                        height: 15
                    }))))), o.createElement(E.yb, {
                        display: E.X.Flex,
                        padding: 1,
                        justifyContent: E.Va.Between
                    }, o.createElement(E.Wa, {
                        padding: .5
                    }, o.createElement(E.db, {
                        height: 20,
                        width: 125
                    })), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        padding: .5
                    }, o.createElement(E.Wa, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(E.db, {
                        height: 20,
                        width: 20
                    })), o.createElement(E.Wa, null, o.createElement(E.db, {
                        height: 20,
                        width: 20
                    })))))
                };
            Ye.displayName = "InstalledExtensionPlaceHolder";
            var Ge = t("QA0N"),
                Qe = function(e) {
                    return o.createElement(o.Fragment, null, o.createElement(E.W, {
                        type: E.Ob.P
                    }, Object(l.d)("To find an extension that fits your channel, please visit the {extensionsDiscoveryPageLink}.", {
                        extensionsDiscoveryPageLink: o.createElement(E.U, {
                            to: {
                                pathname: Object(f.c)(e.channelLogin),
                                state: {
                                    medium: Ge.e.ExtensionManagement
                                }
                            }
                        }, Object(l.d)("Extensions Discovery Page", "NoInstalledExtensionsMessage"))
                    }, "NoInstalledExtensionsMessage")), o.createElement(E.Wa, {
                        padding: {
                            top: 1
                        }
                    }, o.createElement(E.W, {
                        type: E.Ob.P
                    }, Object(l.d)("If you're unsure what to do with an extension, learn more about extensions in {extensionsCreatorCampLink}!", {
                        extensionsCreatorCampLink: o.createElement(E.U, {
                            to: "https://www.twitch.tv/creatorcamp/en/level-up/extensions"
                        }, Object(l.d)("Creator Camp", "NoInstalledExtensionsMessage"))
                    }, "NoInstalledExtensionsMessage"))))
                },
                Je = t("uys4"),
                Ze = t("TkUT"),
                $e = t("RVVg"),
                Ke = t("l45E");
            t("/WSp");
            var en, nn = "ExtensionPanel";
            ! function(e) {
                e.InstalledExtensionList = "installed-list", e.ActiveExtensionList = "active-list", e.ManagePermissionsButton = "manage-permissions", e.NoInstalledExtensionsMessage = "none-installed-message", e.NoActivatedExtensionsMessage = "none-activated-message"
            }(en || (en = {}));
            var tn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onConfigureModalClose = function() {
                            var e = n.props,
                                t = e.extensionManagementPageData,
                                i = e.history,
                                a = e.match;
                            t.refetch(), i.push(Object(f.e)(a.params.channelLogin))
                        }, n.renderListCard = function(e) {
                            var t = e.activationConfig,
                                i = e.extension,
                                a = e.id,
                                s = e.requiredActions,
                                r = e.self,
                                l = n.props.extensionManagementPageData,
                                c = Object(M.f)(i.views);
                            return o.createElement(E.Wa, {
                                key: a,
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(He, {
                                channelName: n.props.match.params.channelLogin,
                                extensionClientID: i.clientID,
                                extensionName: i.name,
                                extensionIcon: i.iconURLs.square100,
                                extensionState: i.state,
                                extensionVersion: i.version,
                                installationID: a,
                                trackingContext: {
                                    medium: x.PageviewMedium.ExtensionManagement
                                },
                                supportedAnchors: Object(M.f)(i.views),
                                supportPlatforms: Object(M.g)(i.views),
                                activationConfig: t,
                                availableSlots: function(e, n) {
                                    var t = {};
                                    if (n.includes(Te.u.COMPONENT) && (t.components = ["extension-component-1", "extension-component-2"]), n.includes(Te.u.VIDEO_OVERLAY) && (t.overlays = ["extension-overlay-1"]), n.includes(Te.u.PANEL) && e.currentUser) {
                                        var i = e.currentUser.panels.reduce(function(e, n) {
                                            return n && n.__typename === nn && e.push(n.slotID), e
                                        }, []);
                                        t.panels = i.sort()
                                    }
                                    return t
                                }(l, c),
                                canActivate: !!r && r.canActivate,
                                requiredActions: s,
                                activateExtension: n.activateExtension,
                                deactivateExtension: n.deactivateExtension,
                                uninstallExtension: n.uninstallExtension
                            }))
                        }, n.activateExtension = function(e, t, i, o) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, s, r, l, c, d;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = this.props, s = n.extensionManagementPageData, r = n.showExtensionErrorModal, !(l = s.currentUser) || !l.id || !l.installedExtensions) return [2];
                                            c = {
                                                id: e,
                                                slot: t,
                                                anchor: i
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 6, , 7]), [4, this.confirmActivation(c)];
                                        case 2:
                                            return a.sent(), o ? [4, this.createPanel()] : [3, 4];
                                        case 3:
                                            return (d = a.sent()) ? (c.slot = d && d.slotID, [3, 5]) : [2, r()];
                                        case 4:
                                            if (i === Te.u.COMPONENT) return [2, this.activateComponentExtensions(e, t)];
                                            a.label = 5;
                                        case 5:
                                            return this.applyActivation(function(e) {
                                                var n = [];
                                                return e.forEach(function(e) {
                                                    var t = e.anchor,
                                                        i = e.id,
                                                        a = e.position,
                                                        o = e.slot,
                                                        s = {
                                                            installationID: i
                                                        };
                                                    switch (t) {
                                                        case Te.u.COMPONENT:
                                                            if (!a) return;
                                                            s.component = {
                                                                slot: o,
                                                                x: a.x,
                                                                y: a.y
                                                            };
                                                            break;
                                                        case Te.u.PANEL:
                                                            s.panel = {
                                                                slot: o
                                                            };
                                                            break;
                                                        case Te.u.VIDEO_OVERLAY:
                                                            s.videoOverlay = {
                                                                slot: o
                                                            }
                                                    }
                                                    n.push(s)
                                                }), n
                                            }([c])), [3, 7];
                                        case 6:
                                            return a.sent(), r(), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, n.confirmActivation = function(e) {
                            var t = n.props,
                                i = t.extensionManagementPageData,
                                a = t.showExtensionDestructionWarningModal,
                                o = i.currentUser;
                            return new Promise(function(n, t) {
                                if (!o || !o.id || !o.installedExtensions) return t();
                                var i = o.installedExtensions.find(function(n) {
                                    var t = n.id,
                                        i = n.activationConfig;
                                    return t !== e.id && i.state === Te.a.ACTIVE && i.anchor === e.anchor && i.slot === e.slot
                                });
                                i ? a({
                                    activationSlot: e.slot,
                                    destructionType: M.a.Replace,
                                    existingExtensionName: i.extension.name,
                                    existingMonetizationType: Object(M.e)(i.extension),
                                    onConfirm: n
                                }) : n()
                            })
                        }, n.applyActivation = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, t, i, o, s, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = this.props, t = n.extensionManagementPageData, i = n.showExtensionActivatedModal, o = n.showExtensionErrorModal, !t.currentUser || !t.currentUser.id) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.applyExtensionActivations(Object(D.a)({
                                                activations: e,
                                                channelID: t.currentUser.id
                                            }))];
                                        case 2:
                                            return (s = a.sent().data).applyExtensionActivations ? (r = e.map(function(e) {
                                                var n = e.installationID,
                                                    t = {
                                                        extensionName: "",
                                                        slot: ""
                                                    };
                                                if (!s.applyExtensionActivations) return t;
                                                var i = s.applyExtensionActivations.installedExtensions.find(function(e) {
                                                    return e.id === n
                                                });
                                                return i ? {
                                                    extensionName: i.extension.name,
                                                    slot: i.activationConfig.slot
                                                } : t
                                            }), i({
                                                activations: r
                                            })) : o(), [3, 4];
                                        case 3:
                                            return a.sent(), o(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.deactivateExtension = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, t, i, o, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = this.props, t = n.applyExtensionActivations, i = n.extensionManagementPageData, o = n.showExtensionErrorModal, !(s = i.currentUser) || !s.id) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, , 5]), [4, this.confirmExtensionDestruction(e, M.a.Deactivate)];
                                        case 2:
                                            return a.sent(), [4, t(Object(D.a)({
                                                channelID: s.id,
                                                activations: [{
                                                    installationID: e
                                                }]
                                            }))];
                                        case 3:
                                            return a.sent(), [3, 5];
                                        case 4:
                                            return a.sent(), o(), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.uninstallExtension = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, t, i, o, s, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = this.props, t = n.extensionManagementPageData, i = n.showExtensionErrorModal, o = n.uninstallExtension, !(s = t.currentUser) || !s.id) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, , 5]), [4, this.confirmExtensionDestruction(e, M.a.Uninstall)];
                                        case 2:
                                            return a.sent(), [4, o(Object(D.a)({
                                                extensionInstallationID: e
                                            }))];
                                        case 3:
                                            return (r = a.sent().data).uninstallExtension && r.uninstallExtension.id && Object(D.e)(Ke, {}, function(e) {
                                                return e.currentUser && e.currentUser.installedExtensions && (e.currentUser.installedExtensions = e.currentUser.installedExtensions.filter(function(e) {
                                                    var n = e.id;
                                                    return r.uninstallExtension && r.uninstallExtension.id !== n
                                                })), e
                                            }), [3, 5];
                                        case 4:
                                            return a.sent(), i(), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this,
                            n = this.props,
                            t = n.history,
                            i = n.location;
                        this.checkAndReportPageInteractive(), this.checkAndShowExtensionConfigureModal(i), this.historyUnlisten = t.listen(function(n) {
                            e.checkAndShowExtensionConfigureModal(n)
                        })
                    }, n.prototype.componentDidUpdate = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.componentWillUnmount = function() {
                        this.historyUnlisten(), this.props.closeModal()
                    }, n.prototype.render = function() {
                        var e = this.props,
                            n = e.extensionManagementPageData,
                            t = e.match,
                            i = n.currentUser,
                            a = n.loading,
                            s = o.createElement(E.Wa, {
                                "data-test-selector": en.NoInstalledExtensionsMessage,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(Qe, {
                                channelLogin: t.params.channelLogin
                            })),
                            r = s,
                            c = o.createElement(E.Wa, {
                                "data-test-selector": en.NoActivatedExtensionsMessage,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(E.W, {
                                type: E.Ob.P
                            }, Object(l.d)("Activate an extension from your installed extensions list for it to show up on your channel page!", "ExtensionManagementPagePresentation")));
                        if (a) c = r = o.createElement(o.Fragment, null, o.createElement(Ye, null), o.createElement(Ye, null));
                        else {
                            var d = i && i.installedExtensions ? _e(i.installedExtensions) : [];
                            if (d.length) {
                                var u = d.filter(function(e) {
                                    return e.activationConfig.state !== Te.a.ACTIVE
                                });
                                r = u.length ? o.createElement(o.Fragment, null, u.map(this.renderListCard)) : s;
                                var m = d.filter(function(e) {
                                    return e.activationConfig.state === Te.a.ACTIVE
                                });
                                (m = function(e) {
                                    return e.slice().sort(function(e, n) {
                                        return e.activationConfig.anchor === Te.u.COMPONENT && n.activationConfig.anchor !== Te.u.COMPONENT ? -1 : n.activationConfig.anchor === Te.u.COMPONENT && e.activationConfig.anchor !== Te.u.COMPONENT ? 1 : e.activationConfig.anchor === Te.u.VIDEO_OVERLAY && n.activationConfig.anchor !== Te.u.VIDEO_OVERLAY ? -1 : n.activationConfig.anchor === Te.u.VIDEO_OVERLAY && e.activationConfig.anchor !== Te.u.VIDEO_OVERLAY ? 1 : e.activationConfig.anchor === Te.u.PANEL && n.activationConfig.anchor !== Te.u.PANEL ? -1 : n.activationConfig.anchor === Te.u.PANEL && e.activationConfig.anchor !== Te.u.PANEL ? 1 : e.extension.name.toLowerCase() > n.extension.name.toLowerCase() ? 1 : e.extension.name.toLowerCase() < n.extension.name.toLowerCase() ? -1 : e.extension.version < n.extension.version ? 1 : e.extension.version > n.extension.version ? -1 : 0
                                    })
                                }(m)).length && (c = o.createElement(o.Fragment, null, m.map(this.renderListCard)))
                            }
                        }
                        return o.createElement(E.Wa, {
                            padding: {
                                bottom: 5
                            }
                        }, o.createElement(E.Wa, {
                            padding: {
                                bottom: 5
                            }
                        }, o.createElement(E.Wa, {
                            display: E.X.Flex,
                            alignItems: E.f.Start,
                            padding: {
                                bottom: 5
                            }
                        }, o.createElement(E.yb, {
                            className: "extensions-list",
                            "data-test-selector": en.InstalledExtensionList,
                            display: E.X.InlineBlock,
                            margin: {
                                bottom: 5
                            },
                            padding: {
                                x: 1
                            },
                            border: !0
                        }, o.createElement(E.Wa, {
                            padding: {
                                y: 1
                            },
                            display: E.X.Flex,
                            alignItems: E.f.Center,
                            justifyContent: E.Va.Between
                        }, o.createElement(E.W, {
                            type: E.Ob.H5
                        }, Object(l.d)("Installed", "ExtensionManagementPagePresentation")), this.anyInstallationUsesPermissions() && o.createElement(E.z, {
                            type: E.F.Text,
                            linkTo: Object(f.f)(this.props.match.params.channelLogin, {
                                medium: x.PageviewMedium.ExtensionManagement
                            }),
                            "data-test-selector": en.ManagePermissionsButton
                        }, Object(l.d)("Manage Permissions", "ExtensionManagementPagePresentation"))), r), o.createElement(E.yb, {
                            className: "extensions-list",
                            "data-test-selector": en.ActiveExtensionList,
                            display: E.X.InlineBlock,
                            margin: {
                                bottom: 5,
                                left: 2
                            },
                            padding: {
                                x: 1
                            },
                            border: !0
                        }, o.createElement(E.Wa, {
                            padding: {
                                y: 1
                            }
                        }, o.createElement(E.W, {
                            type: E.Ob.H5
                        }, Object(l.d)("Activated", "ExtensionManagementPagePresentation"))), c))))
                    }, n.prototype.anyInstallationUsesPermissions = function() {
                        var e = this.props.extensionManagementPageData.currentUser;
                        return !(!e || !e.installedExtensions) && e.installedExtensions.some(function(e) {
                            return e.extension.hasChatSupport
                        })
                    }, n.prototype.checkAndShowExtensionConfigureModal = function(e) {
                        var n = this.props,
                            t = n.closeModal,
                            i = n.match,
                            a = n.showExtensionConfigureModal,
                            o = Le.parse(e.search),
                            s = !!o.configure,
                            r = o.extensionID;
                        s && r ? a({
                            channelLogin: i.params.channelLogin,
                            extensionID: r,
                            onClose: this.onConfigureModalClose
                        }) : t()
                    }, n.prototype.checkAndReportPageInteractive = function() {
                        var e = this.props,
                            n = e.extensionManagementPageData,
                            t = e.latencyTracking;
                        n.loading || t.reportInteractive()
                    }, n.prototype.createPanel = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, n, t;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return (e = this.props.extensionManagementPageData.currentUser) && e.id ? [4, this.props.createPanel(Object(D.a)({
                                            channelID: e.id,
                                            type: Te.z.EXTENSION
                                        }))] : [2, Promise.reject("No user id.")];
                                    case 1:
                                        return n = i.sent(), (t = n.data.createPanel) && t.panel.__typename === nn ? [2, t.panel] : [2]
                                }
                            })
                        })
                    }, n.prototype.activateComponentExtensions = function(e, n) {
                        var t = this,
                            i = this.props.extensionManagementPageData.currentUser;
                        if (i && i.id && i.installedExtensions) {
                            var o = i.installedExtensions.find(function(n) {
                                return n.id === e
                            });
                            if (o) {
                                var s = {
                                        extensionId: o.extension.clientID,
                                        extensionVersion: o.extension.version,
                                        slotName: n
                                    },
                                    r = i.installedExtensions.filter(function(e) {
                                        var n = e.activationConfig;
                                        return n.state === Te.a.ACTIVE && n.anchor === Te.u.COMPONENT
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
                                    }),
                                    l = o.extension,
                                    c = l.name,
                                    d = l.views;
                                d.component && (Object(we.b)(s), this.props.showComponentActivationModal({
                                    onClose: function() {
                                        Object(we.a)(s)
                                    },
                                    onConfirm: function(e) {
                                        return a.__awaiter(t, void 0, void 0, function() {
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, this.applyActivation(e)];
                                                    case 1:
                                                        return n.sent(), Object(we.c)(s), [2]
                                                }
                                            })
                                        })
                                    },
                                    activatedComponentData: r,
                                    extensionNameToActivate: c,
                                    idToActivate: e,
                                    slotToActivate: n,
                                    componentConfigToActivate: d.component
                                }))
                            }
                        }
                    }, n.prototype.confirmExtensionDestruction = function(e, n) {
                        var t = this.props,
                            i = t.extensionManagementPageData,
                            a = t.showExtensionDestructionWarningModal,
                            o = i.currentUser;
                        return new Promise(function(t, i) {
                            if (!o || !o.id || !o.installedExtensions) return i();
                            var s = o.installedExtensions.find(function(n) {
                                return n.id === e
                            });
                            if (!s) return i();
                            var r = Object(M.e)(s.extension);
                            n === M.a.Uninstall ? a({
                                destructionType: M.a.Uninstall,
                                extensionName: s.extension.name,
                                monetizationType: r,
                                onConfirm: t
                            }) : null !== r && n === M.a.Deactivate ? a({
                                destructionType: M.a.Deactivate,
                                extensionName: s.extension.name,
                                monetizationType: r,
                                onConfirm: t
                            }) : t()
                        })
                    }, n
                }(o.Component),
                an = Object(Se.compose)(Object(L.b)("ExtensionManagementPage", {
                    destination: F.a.ChannelDashboardExtensionsManagement
                }), Object(I.a)({
                    location: x.PageviewLocation.DashboardExtensionsManagement
                }), Object(u.a)(Ke, {
                    name: "extensionManagementPageData"
                }), Object(u.a)(Ze, {
                    name: "createPanel"
                }), Object(u.a)(Je, {
                    name: "applyExtensionActivations"
                }), Object(u.a)($e, {
                    name: "uninstallExtension"
                }))(tn);
            var on, sn = Object(b.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        closeModal: C.c,
                        showComponentActivationModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(C.d)(Ce, n)
                        },
                        showExtensionActivatedModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(C.d)(K, n)
                        },
                        showExtensionConfigureModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(C.d)(Me, n)
                        },
                        showExtensionDestructionWarningModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(C.d)(je.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(C.d)(N.a, {})
                        }
                    }, e)
                })(an),
                rn = t("ll/k");
            ! function(e) {
                e.ChatToggle = "chat-toggle"
            }(on || (on = {}));
            var ln, cn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            canSendChatError: !1,
                            extensionIcon: n.props.extensionIcon
                        }, n.handleCanSendChat = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, t, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            n = e.currentTarget, t = n.name, i = n.checked, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.setFeatureFlags(Object(D.a)({
                                                id: t,
                                                canSendChat: i
                                            }))];
                                        case 2:
                                            return a.sent(), this.setState({
                                                canSendChatError: !1
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                canSendChatError: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.onCardImageError = function() {
                            n.setState({
                                extensionIcon: l.a.defaultAvatarURL
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.extensionClientID,
                            t = e.extensionName,
                            i = e.extensionVersion,
                            a = e.installationID;
                        return o.createElement(E.yb, {
                            borderTop: !this.props.isFirstChild,
                            padding: {
                                y: 2
                            }
                        }, o.createElement(E.Wa, {
                            display: E.X.Flex,
                            alignItems: E.f.Center,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(E.Wa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(E.I, {
                            alt: t,
                            src: this.state.extensionIcon,
                            aspect: E.p.Aspect1x1,
                            size: E.J.Size6,
                            onError: this.onCardImageError
                        })), o.createElement(E.Wa, null, o.createElement(E.U, {
                            to: {
                                pathname: Object(f.d)(n, i),
                                state: {
                                    medium: x.PageviewMedium.ExtensionPermissions,
                                    content: x.PageviewContent.ExtensionPermissionsCard
                                }
                            }
                        }, o.createElement(E.W, {
                            type: E.Ob.H5
                        }, t)), o.createElement(E.W, null, Object(l.d)("Created by {authorName}", {
                            authorName: this.props.extensionAuthor
                        }, "PermissionCard")))), o.createElement(E.Wa, null, this.props.hasChatSupport && o.createElement(E.Wa, {
                            display: E.X.Flex
                        }, o.createElement(E.Wa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(E.Qb, {
                            checked: this.props.permittedFeatures.canSendChat,
                            "data-installation-id": this.props.installationID,
                            "data-test-selector": on.ChatToggle,
                            error: this.state.canSendChatError,
                            name: a,
                            onChange: this.handleCanSendChat
                        })), o.createElement(E.W, null, Object(l.d)("This extension can send message to my chat.", "PermissionCard")))))
                    }, n
                }(o.Component),
                dn = function(e) {
                    var n = e.border;
                    return o.createElement(E.yb, {
                        borderTop: n,
                        padding: {
                            y: 2
                        }
                    }, o.createElement(E.Wa, {
                        display: E.X.Flex
                    }, o.createElement(E.Wa, {
                        display: E.X.Flex
                    }, o.createElement(E.db, {
                        height: 60,
                        width: 60
                    })), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        justifyContent: E.Va.Center,
                        flexDirection: E.Z.Column,
                        margin: {
                            left: 1
                        }
                    }, o.createElement(E.Wa, null, o.createElement(E.db, {
                        height: 20,
                        width: 150
                    })), o.createElement(E.Wa, {
                        margin: {
                            top: .5
                        }
                    }, o.createElement(E.db, {
                        height: 15,
                        width: 200
                    })))), o.createElement(E.Wa, {
                        display: E.X.Flex,
                        alignItems: E.f.Center,
                        padding: {
                            top: 2
                        }
                    }, o.createElement(E.Wa, null, o.createElement(E.db, {
                        height: 20,
                        width: 45
                    })), o.createElement(E.Wa, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(E.db, {
                        height: 15,
                        width: 225
                    }))))
                },
                un = t("sx1r"),
                mn = t("+RbR");
            (ln || (ln = {})).NoneRequirePermissions = "no-required-permissions";
            var pn, vn = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.permittedFeaturesModalData,
                            t = n.loading,
                            i = n.currentUser,
                            a = [];
                        return t ? a = Object(rn.c)(3, function(e) {
                            return o.createElement(dn, {
                                key: e,
                                border: 0 !== e
                            })
                        }) : i && i.installedExtensions && i.installedExtensions.length ? (a = _e(i.installedExtensions).filter(function(e) {
                            return e.extension.hasChatSupport
                        }).map(function(n, t) {
                            var i = n.id,
                                a = n.extension,
                                s = n.permittedFeatures;
                            return o.createElement(cn, {
                                extensionAuthor: a.authorName,
                                extensionClientID: a.clientID,
                                extensionIcon: a.iconURLs.square100,
                                extensionName: a.name,
                                extensionVersion: a.version,
                                hasChatSupport: a.hasChatSupport,
                                isFirstChild: 0 === t,
                                installationID: i,
                                key: i,
                                permittedFeatures: s,
                                setFeatureFlags: e.props.setFeatureFlags
                            })
                        })).length || (a = o.createElement(E.W, {
                            "data-test-selector": ln.NoneRequirePermissions
                        }, Object(l.d)("None of your installed extensions require permissions.", "ExtensionPermissionsPageComponent"))) : a = o.createElement(Qe, {
                            channelLogin: this.props.match.params.channelLogin
                        }), o.createElement(E.yb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0
                        }, o.createElement(De.a, {
                            channelLogin: this.props.match.params.channelLogin,
                            showBackLink: !0,
                            title: Object(l.d)("Extension Permissions", "ExtensionPermissionsPageComponent")
                        }), o.createElement(E.Wa, {
                            padding: {
                                right: 2,
                                left: 2
                            }
                        }, a))
                    }, n
                }(o.Component),
                gn = Object(Se.compose)(Object(u.a)(mn, {
                    name: "permittedFeaturesModalData"
                }), Object(u.a)(un, {
                    name: "setFeatureFlags"
                }))(vn),
                hn = t("a1OF"),
                En = (t("FIFN"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.buttonLink,
                            t = e.buttonText,
                            i = e.emoteID,
                            a = e.headerLink,
                            s = e.headerText,
                            r = e.hideButton,
                            c = e.onAnnouncementDismissed,
                            d = e.onButtonLinkClick,
                            u = e.subtitleText,
                            m = null;
                        i && (m = o.createElement(E.Wa, {
                            alignSelf: E.g.Center,
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: Object(hn.d)(i, 3),
                            width: "21"
                        })));
                        var p = this.props.headerText;
                        return a && (p = o.createElement(E.U, {
                            to: a
                        }, s)), o.createElement(E.yb, {
                            background: E.r.Base,
                            border: !0,
                            className: "dashboard-announcement-banner-container",
                            display: E.X.Flex,
                            margin: {
                                bottom: 2
                            },
                            padding: 2
                        }, m, o.createElement(E.Wa, null, o.createElement(E.Oa, {
                            margin: {
                                bottom: 0
                            }
                        }, o.createElement(E.W, {
                            bold: !0,
                            fontSize: E.Ba.Size4,
                            type: E.Ob.H2
                        }, p)), o.createElement(E.W, {
                            color: E.O.Alt2,
                            fontSize: E.Ba.Size5
                        }, u)), o.createElement(E.Wa, {
                            alignSelf: E.g.Center,
                            margin: {
                                left: "auto",
                                right: 1
                            }
                        }, !r && o.createElement(E.z, {
                            onClick: d,
                            linkTo: n
                        }, t)), o.createElement(E.Wa, {
                            alignSelf: E.g.Center
                        }, o.createElement(E.A, {
                            ariaLabel: Object(l.d)("Close", "AnnouncementBanner"),
                            icon: E.ob.Close,
                            onClick: c,
                            "data-test-selector": "dismiss-button"
                        })))
                    }, n
                }(o.PureComponent)),
                xn = "extensions_mve_banner_enabled",
                fn = "extensions_mve_banner_dismissed",
                kn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            enabled: l.b.get(xn, !1),
                            dismissed: l.m.get(fn, !1)
                        }, n.handleAnnouncementDismissed = function() {
                            n.setState({
                                dismissed: !0
                            }, function() {
                                return l.m.set(fn, !0)
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.channelLogin,
                            t = e.hideButton,
                            i = this.state,
                            a = i.enabled,
                            s = i.dismissed;
                        return !a || s ? null : o.createElement(En, {
                            buttonLink: {
                                pathname: Object(f.c)(n),
                                state: {
                                    content: x.PageviewContent.AnnouncementBanner,
                                    medium: x.PageviewMedium.DashboardLive
                                }
                            },
                            buttonText: Object(l.d)("Go to Extension Manager", "MultipleVideoExtensionsBanner"),
                            emoteID: "112290",
                            headerText: Object(l.d)("Introducing multiple video extensions.", "MultipleVideoExtensionsBanner"),
                            hideButton: t,
                            onAnnouncementDismissed: this.handleAnnouncementDismissed,
                            subtitleText: o.createElement(o.Fragment, null, Object(l.d)("You can now activate up to 3 extensions over your video player at a time.", "MultipleVideoExtensionsBanner"), " ", o.createElement(E.U, {
                                targetBlank: !0,
                                to: "https://blog.twitch.tv/cant-decide-which-extension-to-use-now-you-don-t-have-to-99c6d0b4f5c6"
                            }, Object(l.d)("Learn more.", "MultipleVideoExtensionsBanner")))
                        })
                    }, n
                }(o.Component),
                bn = t("8xJJ"),
                yn = t("RRhV"),
                Cn = t("Q1Lx");
            (pn || (pn = {})).ErrorMessage = "extension-whitelisted-error-message";
            var Nn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.canLoadMoreExtensions = function() {
                            var e = n.props.whitelistedExtensionsPageData,
                                t = e.error,
                                i = e.extensionCategory,
                                a = e.loading;
                            return !(!i || !i.extensions) && (!a && !t && i.extensions.pageInfo.hasNextPage)
                        }, n.loadMoreExtensions = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, n, t;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = this.props.whitelistedExtensionsPageData, n = e.error, t = e.extensionCategory, e.loading || n || !t || !t.extensions ? [3, 2] : [4, e.fetchMore({
                                                query: Cn,
                                                variables: {
                                                    afterCursor: t.extensions.edges[t.extensions.edges.length - 1].cursor,
                                                    skipCurrentUser: !0
                                                },
                                                updateQuery: function(e, n) {
                                                    var t = n.fetchMoreResult;
                                                    return e.extensionCategory && e.extensionCategory.extensions && t.extensionCategory && t.extensionCategory.extensions ? a.__assign({}, e, {
                                                        extensionCategory: a.__assign({}, t.extensionCategory, {
                                                            extensions: a.__assign({}, t.extensionCategory.extensions, {
                                                                edges: Object(D.c)(e.extensionCategory.extensions.edges, t.extensionCategory.extensions.edges)
                                                            })
                                                        })
                                                    }) : e
                                                }
                                            })];
                                        case 1:
                                            i.sent(), i.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, n.installExtension = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, t, i, o, s, r, l, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = this.props, t = n.whitelistedExtensionsPageData, i = n.installExtension, o = n.showExtensionErrorModal, s = n.showExtensionInstalledModal, !(r = t.currentUser) || !r.id || !r.login) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(D.a)({
                                                channelID: r.id,
                                                extensionID: e
                                            }))];
                                        case 2:
                                            return (l = a.sent().data).installExtension && l.installExtension.installedExtension && (c = l.installExtension.installedExtension, Object(D.e)(Cn, {
                                                skipCurrentUser: !1
                                            }, function(e) {
                                                return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(c), e
                                            }), s({
                                                extensionClientID: c.extension.clientID,
                                                extensionVersion: c.extension.version,
                                                login: r.login
                                            })), [3, 4];
                                        case 3:
                                            return a.sent(), o(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.componentDidMount = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.render = function() {
                        var e = this.props.whitelistedExtensionsPageData,
                            n = e.error,
                            t = e.extensionCategory,
                            i = [];
                        if (e.loading && !t)
                            for (var a = 0; a < 4; a++) i.push(o.createElement(E.Wa, {
                                key: a,
                                padding: 1
                            }, o.createElement(T.a, null)));
                        else t && t.extensions && (i = t.extensions.edges.map(this.renderCard, this));
                        return o.createElement(E.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(bn.a, {
                            loadMoreEnabled: this.canLoadMoreExtensions(),
                            loadMore: this.loadMoreExtensions
                        }, i), n && o.createElement(E.W, {
                            "data-test-selector": pn.ErrorMessage
                        }, Object(l.d)("We're having trouble fetching extensions.", "WhitelistedExtensionsPageComponent")))
                    }, n.prototype.renderCard = function(e) {
                        var n = this.props.whitelistedExtensionsPageData,
                            t = e.node;
                        return o.createElement(E.Oa, {
                            margin: {
                                y: 1
                            },
                            key: t.id
                        }, o.createElement(R.a, {
                            authorName: t.authorName,
                            cheeringEnabled: Object(j.a)(n.currentUser),
                            extensionClientID: t.clientID,
                            extensionID: t.id,
                            extensionName: t.name,
                            extensionVersion: t.version,
                            hasInstallPermission: null !== t.self && t.self.canInstall,
                            splashImageURL: t.iconURLs.discoverySplash,
                            iconURL: t.iconURLs.square100,
                            monetizationType: Object(M.e)(t),
                            isInstalled: this.isExtensionInstalled(t.id),
                            installExtension: this.installExtension,
                            extensionState: t.state,
                            trackingContext: {
                                medium: x.PageviewMedium.ExtensionsWhitelisted
                            },
                            summary: t.summary,
                            supportedAnchors: Object(M.f)(t.views),
                            supportedPlatforms: Object(M.g)(t.views)
                        }))
                    }, n.prototype.isExtensionInstalled = function(e) {
                        var n = this.props.whitelistedExtensionsPageData.currentUser;
                        return !(!n || !n.installedExtensions) && (n && n.installedExtensions && n.installedExtensions.some(function(n) {
                            return n.extension.id === e
                        }))
                    }, n.prototype.checkAndReportPageInteractive = function() {
                        var e = this.props,
                            n = e.whitelistedExtensionsPageData,
                            t = e.latencyTracking;
                        n.loading || t.reportInteractive()
                    }, n
                }(o.Component),
                Sn = Object(y.compose)(Object(L.b)("WhitelistedExtensionsPage", {
                    destination: F.a.ExtensionsCategory
                }), Object(I.a)({
                    location: x.PageviewLocation.ExtensionsCategory
                }), Object(u.a)(Cn, {
                    name: "whitelistedExtensionsPageData",
                    options: function() {
                        return {
                            variables: {
                                skipCurrentUser: !1
                            }
                        }
                    }
                }), Object(u.a)(yn, {
                    name: "installExtension"
                }))(Nn);
            var On = Object(b.connect)(null, function(e) {
                    return Object(y.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(C.d)(S.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(C.d)(N.a, {})
                        }
                    }, e)
                })(Sn),
                In = t("F4WJ"),
                Dn = c.a.wrap(function() {
                    return t.e(138).then(t.bind(null, "t1ne"))
                }, "ExtensionConfigurePage"),
                Fn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderExtensionManagementPage = function(e) {
                            var t = e.match;
                            return o.createElement(o.Fragment, null, o.createElement(k, {
                                channelLogin: t.params.channelLogin,
                                selectedTab: i.MyExtensions,
                                showWhitelistedTab: n.isWhitelistedForExtensions()
                            }), o.createElement(sn, null))
                        }, n.renderExtensionDiscoveryPage = function(e) {
                            var t = e.match;
                            return o.createElement(o.Fragment, null, o.createElement(k, {
                                channelLogin: t.params.channelLogin,
                                selectedTab: i.Discovery,
                                showWhitelistedTab: n.isWhitelistedForExtensions()
                            }), o.createElement(Y, null))
                        }, n.renderWhitelistedExtensionsPage = function(e) {
                            var t = e.match;
                            return o.createElement(o.Fragment, null, o.createElement(k, {
                                channelLogin: t.params.channelLogin,
                                selectedTab: i.Whitelisted,
                                showWhitelistedTab: n.isWhitelistedForExtensions()
                            }), o.createElement(On, null))
                        }, n.isWhitelistedForExtensions = function() {
                            var e = n.props.extensionDashboardRootData;
                            return !!(e.extensionCategory && e.extensionCategory.extensions && e.extensionCategory.extensions.totalCount > 0)
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = l.p.experiments.getAssignment(m.b.ExtensionConfigureModal);
                        return o.createElement(d.b, {
                            suppressScrollX: !0,
                            "data-a-target": "extensions-dashboard-root-scroller"
                        }, o.createElement(E.Wa, {
                            padding: {
                                x: 4,
                                top: 2
                            }
                        }, o.createElement(kn, {
                            channelLogin: this.props.match.params.channelLogin,
                            hideButton: !0
                        }), o.createElement(r.a, null, "control" === e && o.createElement(s.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/extensions/:extensionID/configure",
                            component: Dn
                        }), o.createElement(s.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/extensions/manage",
                            render: this.renderExtensionManagementPage
                        }), this.isWhitelistedForExtensions() && o.createElement(s.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/extensions/whitelisted",
                            render: this.renderWhitelistedExtensionsPage
                        }), o.createElement(s.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/extensions/permissions",
                            component: gn
                        }), o.createElement(s.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/extensions",
                            render: this.renderExtensionDiscoveryPage
                        })), o.createElement(h, null)))
                    }, n
                }(o.Component),
                wn = Object(u.a)(In, {
                    name: "extensionDashboardRootData"
                })(Fn);
            t.d(n, "ExtensionDashboardRoot", function() {
                return wn
            })
        },
        "5IFo": function(e, n, t) {
            "use strict";
            t.d(n, "e", function() {
                return s
            }), t.d(n, "d", function() {
                return r
            }), t.d(n, "b", function() {
                return c
            }), t.d(n, "a", function() {
                return d
            }), t.d(n, "c", function() {
                return u
            }), t.d(n, "g", function() {
                return p
            }), t.d(n, "f", function() {
                return v
            });
            var i, a = t("/7QA"),
                o = t("2xye");

            function s(e) {
                var n = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                a.o.track(o.SpadeEventType.ExtensionInstall, n)
            }

            function r(e) {
                var n = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                a.o.track(o.SpadeEventType.ExtensionConfigureView, n)
            }

            function l(e, n) {
                return {
                    action: e,
                    extension_id: n.extensionId,
                    extension_version: n.extensionVersion,
                    extension_anchor: "component",
                    extension_slot: function(e) {
                        if (!e) return null;
                        var n = e.split("-");
                        return n && 3 === n.length ? parseInt(n[2], 10) : null
                    }(n.slotName)
                }
            }

            function c(e) {
                a.o.track(o.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Open, e))
            }

            function d(e) {
                a.o.track(o.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Close, e))
            }

            function u(e) {
                a.o.track(o.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Save, e))
            }

            function m(e) {
                return {
                    extension_id: e.extensionID,
                    extension_version: e.extensionVersion,
                    extension_anchor: e.anchor,
                    extension_mode: e.mode,
                    user_id: e.loginID,
                    channel_id: e.channelID
                }
            }

            function p(e) {
                a.o.track(o.SpadeEventType.ExtensionPopoutClicked, m(e))
            }

            function v(e) {
                a.o.track(o.SpadeEventType.ExtensionPopinClicked, m(e))
            }! function(e) {
                e.Open = "open", e.Close = "close", e.Save = "save"
            }(i || (i = {}))
        },
        "8xJJ": function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("8/mp"),
                o = t("Ue10"),
                s = function(e) {
                    var n = e.children,
                        t = e.loadMore,
                        s = e.loadMoreEnabled;
                    return i.createElement(o.Ub, {
                        childWidth: o.Vb.Large,
                        gutterSize: o.Wb.Small,
                        placeholderItems: 20
                    }, n, i.createElement(a.a, {
                        pixelThreshold: 200,
                        enabled: s,
                        loadMore: t
                    }))
                };
            s.displayName = "ExtensionGrid", t.d(n, "a", function() {
                return s
            })
        },
        AN85: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("/7QA"),
                o = t("DMoW"),
                s = t("Ue10"),
                r = function(e) {
                    var n;
                    switch (e.state) {
                        case o.w.IN_TEST:
                            n = Object(a.d)("TESTING", "ExtensionStatusPill");
                            break;
                        case o.w.READY_FOR_REVIEW:
                            n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                            break;
                        case o.w.IN_REVIEW:
                            n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                            break;
                        case o.w.REJECTED:
                            n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                            break;
                        case o.w.APPROVED:
                            n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                            break;
                        case o.w.DEPRECATED:
                            n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                            break;
                        case o.w.PENDING_ACTION:
                            n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                            break;
                        case o.w.UPLOADING:
                            n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                            break;
                        case o.w.ASSETS_UPLOADED:
                            n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                            break;
                        default:
                            n = ""
                    }
                    return i.createElement(s.bb, {
                        type: s.cb.Brand,
                        label: n
                    })
                };
            r.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
                return r
            })
        },
        EJuf: function(e, n, t) {},
        "EZh/": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var i = 3
        },
        F4WJ: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionDashboardRoot"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "extensionCategory"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "StringValue",
                                    value: "whitelisted",
                                    block: !1
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
                                                value: "totalCount"
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
                    end: 112
                }
            };
            t.loc.source = {
                body: 'query ExtensionDashboardRoot {\nextensionCategory(id: "whitelisted") {\nid\nextensions(first: 1) {\ntotalCount\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        FIFN: function(e, n, t) {},
        G1aL: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                o = t("9C/b"),
                s = t("/7QA"),
                r = t("2xye"),
                l = t("22qk"),
                c = t("Ue10"),
                d = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            searchTerm: n.props.initialSearchTerm || ""
                        }, n.onSubmit = function(e) {
                            e.preventDefault(), n.state.searchTerm && n.props.history.push(Object(l.g)(n.state.searchTerm), {
                                medium: n.props.trackingContext.medium,
                                content: r.PageviewContent.ExtensionSearchBar
                            })
                        }, n.onSearchInputChange = function(e) {
                            n.setState({
                                searchTerm: e.currentTarget.value
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(c.yb, {
                            border: !0,
                            background: c.r.Base,
                            padding: 1
                        }, a.createElement(c.Ia, null, a.createElement(c.P, {
                            cols: 8
                        }), a.createElement(c.P, {
                            cols: 4
                        }, a.createElement("form", {
                            onSubmit: this.onSubmit
                        }, a.createElement(c.qb, {
                            placeholder: Object(s.d)("Search all extensions", "ExtensionSearchBar"),
                            value: this.state.searchTerm,
                            onChange: this.onSearchInputChange
                        })))))
                    }, n
                }(a.Component),
                u = Object(o.a)(d);
            t.d(n, !1, function() {
                return d
            }), t.d(n, "a", function() {
                return u
            })
        },
        H6uz: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionDiscoveryPage"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "first"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            }
                        }
                    }, {
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
                                value: "carouselID"
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
                                value: "skipCurrentUser"
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
                                value: "currentUser"
                            },
                            arguments: [],
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                            value: "skipCurrentUser"
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
                                                        value: "version"
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
                                value: "extensionCarousel"
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
                                        value: "carouselID"
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
                                        value: "entries"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "clickThroughURL"
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
                                                value: "imageURL"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "extensionCategories"
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
                                        value: "first"
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
                                        value: "afterCursor"
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
                                            alias: {
                                                kind: "Name",
                                                value: "category"
                                            },
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
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
                                                            value: "10"
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
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "ExtensionDiscoveryPage_ExtensionEdge"
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
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ExtensionDiscoveryPage_ExtensionEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionEdge"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "extension"
                            },
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
                                        value: "iconURLs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "discoverySplash"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "square100"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                                value: "canInstall"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                }],
                loc: {
                    start: 0,
                    end: 869
                }
            };
            t.loc.source = {
                body: "query ExtensionDiscoveryPage($first: Int! $afterCursor: Cursor $carouselID: ID! $skipCurrentUser: Boolean!) {\ncurrentUser @skip(if: $skipCurrentUser) {\nid\ncheer {\nid\n}\ninstalledExtensions {\nid\nextension {\nid\nversion\n}\n}\nlogin\n}\nextensionCarousel(id: $carouselID) {\nid\nentries {\nclickThroughURL\nid\nimageURL\ntitle\n}\n}\nextensionCategories(first: $first after: $afterCursor) {\nedges {\ncursor\ncategory: node {\nid\nname\nextensions(first: 10) {\nedges {\n...ExtensionDiscoveryPage_ExtensionEdge\n}\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\nfragment ExtensionDiscoveryPage_ExtensionEdge on ExtensionEdge {\nextension: node {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nisBitsEnabled\nname\nself {\ncanInstall\n}\nsku\nstate\nsummary\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        J4PI: function(e, n, t) {},
        JxAY: function(e, n, t) {},
        MM5q: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                o = t("cZKs"),
                s = t("xPN0"),
                r = t("/7QA"),
                l = t("Ue10"),
                c = function() {
                    return a.createElement(l.Wa, null, a.createElement(l.W, null, Object(r.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
                };
            c.displayName = "ExtensionErrorModalPresentation";
            var d = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(s.a, null, a.createElement(c, null), a.createElement(o.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, n
                }(a.Component),
                u = d;
            t.d(n, !1, function() {
                return d
            }), t.d(n, "a", function() {
                return u
            })
        },
        OzNJ: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return i
            }), t.d(n, "a", function() {
                return a
            }), t.d(n, "e", function() {
                return r
            }), t.d(n, "f", function() {
                return l
            }), t.d(n, "g", function() {
                return c
            }), t.d(n, "c", function() {
                return d
            }), t.d(n, "d", function() {
                return u
            });
            var i, a, o = t("1hWM"),
                s = t("DMoW");

            function r(e) {
                return e.isBitsEnabled ? i.Bits : e.vendorCode && e.sku ? i.InExtensionPurchases : null
            }

            function l(e) {
                var n = [];
                return e.component && e.component.viewerURL && n.push(s.u.COMPONENT), e.panel && e.panel.viewerURL && n.push(s.u.PANEL), e.videoOverlay && e.videoOverlay.viewerURL && n.push(s.u.VIDEO_OVERLAY), n
            }

            function c(e) {
                var n = [o.ExtensionPlatform.Web];
                return e.mobile && e.mobile.viewerURL && n.push(o.ExtensionPlatform.Mobile), n
            }

            function d(e, n) {
                return e + ":" + n
            }

            function u(e) {
                return d(e.extension.id, e.extension.version)
            }! function(e) {
                e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
            }(i || (i = {})),
            function(e) {
                e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
            }(a || (a = {}))
        },
        Q1Lx: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "WhitelistedExtensionPage"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "skipCurrentUser"
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
                            directives: [{
                                kind: "Directive",
                                name: {
                                    kind: "Name",
                                    value: "skip"
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
                                            value: "skipCurrentUser"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
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
                                value: "extensionCategory"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "StringValue",
                                    value: "whitelisted",
                                    block: !1
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "WhitelistedExtensionPage_ExtensionEdge"
                                                    },
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
                        value: "WhitelistedExtensionPage_ExtensionEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionEdge"
                        }
                    },
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
                                        value: "iconURLs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "discoverySplash"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "square100"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                                value: "canInstall"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                }],
                loc: {
                    start: 0,
                    end: 706
                }
            };
            t.loc.source = {
                body: 'query WhitelistedExtensionPage($skipCurrentUser: Boolean! $afterCursor: Cursor) {\ncurrentUser @skip(if: $skipCurrentUser) {\nid\ncheer {\nid\n}\nlogin\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\nextensionCategory(id: "whitelisted") {\nid\nextensions(first: 20 after: $afterCursor) {\nedges {\n...WhitelistedExtensionPage_ExtensionEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\nfragment WhitelistedExtensionPage_ExtensionEdge on ExtensionEdge {\ncursor\nnode {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nisBitsEnabled\nname\nself {\ncanInstall\n}\nsku\nstate\nsummary\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        QSti: function(e, n, t) {},
        RRhV: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "WhitelistedExtensionsPage_InstallExtension"
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
                                                        value: "clientID"
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
                    end: 184
                }
            };
            t.loc.source = {
                body: "mutation WhitelistedExtensionsPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        RVVg: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionManagementPage_UninstallExtension"
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
                    end: 131
                }
            };
            t.loc.source = {
                body: "mutation ExtensionManagementPage_UninstallExtension ($input: UninstallExtensionInput!) {\nuninstallExtension(input: $input) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        TkUT: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionManagementPage_CreatePanel"
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
                    end: 157
                }
            };
            t.loc.source = {
                body: "mutation ExtensionManagementPage_CreatePanel($input: CreatePanelInput!) {\ncreatePanel(input: $input) {\npanel {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        UEdd: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionDiscoveryPage_InstallExtension"
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
                                                        value: "clientID"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 206
                }
            };
            t.loc.source = {
                body: "mutation ExtensionDiscoveryPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\nrequiredActions {\ntype\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        VQbD: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return p
            });
            var i, a, o = t("mrSG"),
                s = t("TSYQ"),
                r = t("q1tI"),
                l = t("/7QA"),
                c = t("GnwI"),
                d = t("Ue10"),
                u = (t("J4PI"), "[data-js-selector=carousel-content]");
            ! function(e) {
                e.Previous = "previous", e.Next = "next"
            }(a || (a = {}));
            var m = ((i = {})[a.Previous] = d.ob.AngleLeft, i[a.Next] = d.ob.AngleRight, i),
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
                        }, n.renderNavButton = function(e, t, i) {
                            var o, c = ((o = {})[a.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), o[a.Next] = Object(l.d)("next", "MediaCarouselNavButton"), o),
                                u = s("media-carousel__button", {
                                    "media-carousel__button--previous": e === a.Previous,
                                    "media-carousel__button--next": e === a.Next,
                                    "media-carousel__button--disabled": t
                                }, {
                                    "media-carousel__button--inset": !0 === n.props.insetStyle
                                });
                            return r.createElement(d.Wa, {
                                className: u,
                                position: d.eb.Relative,
                                display: d.X.Flex,
                                alignItems: d.f.Stretch
                            }, r.createElement(d.A, {
                                "data-test-selector": e + "-button",
                                "data-a-target": e + "-button",
                                onClick: i,
                                disabled: t,
                                ariaLabel: c[e],
                                icon: m[e],
                                size: d.B.Large
                            }))
                        }, n
                    }
                    return o.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        this.state.childrenRendered || null === this.props.items || this.setState({
                            childrenRendered: !0
                        })
                    }, n.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onResize)
                    }, n.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onResize)
                    }, n.prototype.render = function() {
                        return r.createElement(d.Oa, o.__assign({}, this.props, {
                            position: d.eb.Relative
                        }), r.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, r.createElement(d.Wa, {
                            className: "media-carousel__child-container",
                            overflow: d.Za.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, r.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, r.createElement(d.Oa, {
                            className: "media-carousel__content",
                            display: d.X.Flex,
                            flexWrap: d.Aa.NoWrap,
                            flexDirection: d.Z.Row,
                            alignItems: d.f.Center,
                            "data-js-selector": "carousel-content"
                        }, r.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), r.createElement(d.Wa, {
                            className: "media-carousel__nav",
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            position: d.eb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), r.createElement(d.Wa, {
                            className: "media-carousel__nav",
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            position: d.eb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                    }, n = o.__decorate([Object(c.b)("MediaCarousel", {
                        autoReportInteractive: !0
                    })], n)
                }(r.Component)
        },
        Z5H4: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                o = t("/MKj"),
                s = t("fvjX"),
                r = t("cZKs"),
                l = t("aCAx"),
                c = t("xPN0"),
                d = t("OzNJ"),
                u = t("/7QA"),
                m = t("Ue10"),
                p = function(e) {
                    var n = e.closeModal,
                        t = e.extensionName,
                        i = e.monetizationType,
                        o = e.onConfirm,
                        s = i === d.b.InExtensionPurchases,
                        r = i === d.b.Bits,
                        l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                        c = l;
                    return s ? c = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : r && (c = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m.Wa, null, a.createElement(m.W, {
                        type: m.Ob.H5
                    }, l), a.createElement(m.yb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("You are deactivating {extensionName} ", {
                        extensionName: a.createElement(m.W, {
                            bold: !0,
                            type: m.Ob.P
                        }, t)
                    }, "ExtensionDeactivationWarning")), a.createElement(m.Wa, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.W, {
                        type: m.Ob.P
                    }, c))), a.createElement(m.Wa, {
                        display: m.X.Flex,
                        justifyContent: m.Va.Center
                    }, a.createElement(m.Wa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.z, {
                        type: m.F.Hollow,
                        onClick: n
                    }, Object(u.d)("Cancel", "ExtensionDeactivationWarning"))), a.createElement(m.z, {
                        onClick: o
                    }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
                },
                v = function(e) {
                    var n = e.existingExtensionName,
                        t = e.activationSlot,
                        i = e.existingMonetizationType,
                        o = e.closeModal,
                        s = e.onConfirm,
                        r = i === d.b.InExtensionPurchases,
                        l = i === d.b.Bits,
                        c = Object(u.d)("Are you sure you want to deactivate?", "ExtensionReplacementWarning");
                    return r ? c = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning") : l && (c = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning")), a.createElement(m.Wa, null, a.createElement(m.W, {
                        type: m.Ob.H5
                    }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementWarning")), a.createElement(m.yb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementWarning")), a.createElement(m.Wa, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                        extensionName: a.createElement(m.W, {
                            bold: !0,
                            type: m.Ob.Span
                        }, n),
                        anchorSlot: a.createElement(m.W, {
                            bold: !0,
                            type: m.Ob.Span,
                            transform: m.Nb.Uppercase
                        }, t)
                    }, "ExtensionReplacementWarning"))), a.createElement(m.W, {
                        type: m.Ob.P
                    }, c)), a.createElement(m.Wa, {
                        display: m.X.Flex,
                        justifyContent: m.Va.Center
                    }, a.createElement(m.Wa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.z, {
                        type: m.F.Hollow,
                        onClick: o
                    }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.z, {
                        onClick: s
                    }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
                };
            v.displayName = "ExtensionReplacementWarning";
            var g = function(e) {
                    var n = e.closeModal,
                        t = e.extensionName,
                        i = e.monetizationType,
                        o = e.onConfirm,
                        s = i === d.b.InExtensionPurchases,
                        r = i === d.b.Bits,
                        l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                        c = l;
                    return s ? c = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : r && (c = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m.Wa, null, a.createElement(m.W, {
                        type: m.Ob.H5
                    }, l), a.createElement(m.yb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("You are uninstalling {extensionName} ", {
                        extensionName: a.createElement(m.W, {
                            bold: !0,
                            type: m.Ob.P
                        }, t)
                    }, "ExtensionUninstallationWarning")), a.createElement(m.Wa, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.W, {
                        type: m.Ob.P
                    }, c))), a.createElement(m.Wa, {
                        display: m.X.Flex,
                        justifyContent: m.Va.Center
                    }, a.createElement(m.Wa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.z, {
                        type: m.F.Hollow,
                        onClick: n
                    }, Object(u.d)("Cancel", "ExtensionUninstallationWarning"))), a.createElement(m.z, {
                        onClick: o
                    }, Object(u.d)("Uninstall", "ExtensionUninstallationWarning"))))
                },
                h = function(e) {
                    switch (e.destructionType) {
                        case d.a.Deactivate:
                            return a.createElement(p, {
                                closeModal: e.closeModal,
                                extensionName: e.extensionName,
                                monetizationType: e.monetizationType,
                                onConfirm: e.onConfirm
                            });
                        case d.a.Replace:
                            return a.createElement(v, {
                                closeModal: e.closeModal,
                                existingExtensionName: e.existingExtensionName,
                                existingMonetizationType: e.existingMonetizationType,
                                activationSlot: e.activationSlot,
                                onConfirm: e.onConfirm
                            });
                        case d.a.Uninstall:
                            return a.createElement(g, {
                                closeModal: e.closeModal,
                                extensionName: e.extensionName,
                                monetizationType: e.monetizationType,
                                onConfirm: e.onConfirm
                            });
                        default:
                            return null
                    }
                };
            h.displayName = "ExtensionDestructionWarningModalComponent";
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
                        case d.a.Deactivate:
                            e = a.createElement(h, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                extensionName: this.props.extensionName,
                                monetizationType: this.props.monetizationType,
                                onConfirm: this.onConfirm
                            });
                            break;
                        case d.a.Replace:
                            e = a.createElement(h, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                existingExtensionName: this.props.existingExtensionName,
                                existingMonetizationType: this.props.existingMonetizationType,
                                activationSlot: this.props.activationSlot,
                                onConfirm: this.props.onConfirm
                            });
                            break;
                        case d.a.Uninstall:
                            e = a.createElement(h, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                extensionName: this.props.extensionName,
                                monetizationType: this.props.monetizationType,
                                onConfirm: this.onConfirm
                            })
                    }
                    return a.createElement(c.a, null, e, a.createElement(r.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component);
            var x = Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(E);
            t.d(n, !1, function() {
                return E
            }), t.d(n, "a", function() {
                return x
            })
        },
        d9uE: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("Ue10"),
                o = function() {
                    return i.createElement(a.Wa, {
                        display: a.X.Flex,
                        flexDirection: a.Z.Column
                    }, i.createElement(a.db, {
                        width: 300,
                        height: 200
                    }), i.createElement(a.Wa, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(a.db, {
                        width: 250,
                        height: 15
                    })), i.createElement(a.Wa, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.db, {
                        width: 140,
                        height: 15
                    })), i.createElement(a.Wa, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.db, {
                        width: 60,
                        height: 15
                    })))
                };
            o.displayName = "ExtensionCardPlaceholder", t.d(n, "a", function() {
                return o
            })
        },
        l45E: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionManagementPage"
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
                                        value: "installedExtensions"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionManagementPageExtensionInstallation"
                                            },
                                            directives: []
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ExtensionManagementPageExtensionInstallation"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionInstallation"
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
                                        value: "anchor"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                                        value: "clientID"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "iconURLs"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "square100"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasChatSupport"
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
                                                        value: "aspectHeight"
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
                                                        value: "hasZoom"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
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
                }],
                loc: {
                    start: 0,
                    end: 629
                }
            };
            t.loc.source = {
                body: "query ExtensionManagementPage {\ncurrentUser {\nid\ninstalledExtensions {\n...ExtensionManagementPageExtensionInstallation\n}\npanels {\nid\ntype\n...on ExtensionPanel {\nslotID\n}\n}\n}\n}\nfragment ExtensionManagementPageExtensionInstallation on ExtensionInstallation {\nid\nactivationConfig {\nanchor\nslot\nstate\nx\ny\n}\nextension {\nid\nclientID\niconURLs {\nsquare100\n}\nhasChatSupport\nisBitsEnabled\nname\nsku\nstate\nvendorCode\nversion\nviews {\ncomponent {\naspectHeight\naspectWidth\nhasZoom\nviewerURL\nzoomPixels\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "ll/k": function(e, n, t) {
            "use strict";

            function i(e, n) {
                if (void 0 === n && (n = 0), n > e) {
                    var t = n;
                    n = e, e = t
                }
                return n + Math.floor(Math.random() * (e - n + 1))
            }

            function a(e) {
                return e[i(e.length - 1)]
            }

            function o(e, n) {
                for (var t = 0, i = []; t < e;) i.push(n(t)), t += 1;
                return i
            }
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return a
            }), t.d(n, "c", function() {
                return o
            })
        },
        nH1N: function(e, n, t) {},
        qAxc: function(e, n, t) {
            e.exports = t.p + "assets/discovery-splash-fallback-d5c69de700c33441b513.png"
        },
        s6gS: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t("/7QA"),
                a = t("DMoW"),
                o = function(e, n) {
                    var t;
                    switch (e) {
                        case a.u.COMPONENT:
                            t = n ? Object(i.d)("COMPONENT", "ExtensionAnchorType") : Object(i.d)("Component", "ExtensionAnchorType");
                            break;
                        case a.u.PANEL:
                            t = n ? Object(i.d)("PANEL", "ExtensionAnchorType") : Object(i.d)("Panel", "ExtensionAnchorType");
                            break;
                        case a.u.VIDEO_OVERLAY:
                            t = n ? Object(i.d)("OVERLAY", "ExtensionAnchorType") : Object(i.d)("Overlay", "ExtensionAnchorType");
                            break;
                        default:
                            t = ""
                    }
                    return t
                }
        },
        sx1r: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionPermissionsPageSetFeatureFlags"
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
                                    value: "SetExtensionFeatureFlagsInput"
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
                                value: "setExtensionFeatureFlags"
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
                                                value: "permittedFeatures"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "canSendChat"
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
                    end: 197
                }
            };
            t.loc.source = {
                body: "mutation ExtensionPermissionsPageSetFeatureFlags ($input: SetExtensionFeatureFlagsInput!) {\nsetExtensionFeatureFlags(input: $input) {\ninstalledExtension {\nid\npermittedFeatures {\ncanSendChat\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        uys4: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionManagementPage_ApplyExtensionActivations"
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
                                                        value: "anchor"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
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
                    end: 287
                }
            };
            t.loc.source = {
                body: "mutation ExtensionManagementPage_ApplyExtensionActivations ($input: ApplyExtensionActivationsInput!) {\napplyExtensionActivations(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nanchor\nslot\nstate\nx\ny\n}\nextension {\nid\nname\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        vYrU: function(e, n, t) {
            "use strict";

            function i(e) {
                return !(!e || null === e.cheer)
            }
            t.d(n, "a", function() {
                return i
            })
        },
        xPN0: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("Ue10"),
                o = (t("JxAY"), function(e) {
                    return i.createElement(a.yb, {
                        className: e.className || "extension-manager-modal-container",
                        background: a.r.Base,
                        padding: 2
                    }, e.children)
                });
            o.displayName = "ModalContainer", t.d(n, "a", function() {
                return o
            })
        }
    }
]);