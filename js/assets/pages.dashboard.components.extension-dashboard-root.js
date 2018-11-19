(window.webpackJsonp = window.webpackJsonp || []).push([
    [163], {
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
                    return a.createElement(p.Ya, null, a.createElement(p.W, {
                        type: p.Wb.H5
                    }, Object(d.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(p.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.W, null, Object(d.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(p.Ya, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.W, null, Object(d.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(p.W, null, Object(d.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(p.Ya, {
                        display: p.X.Flex,
                        justifyContent: p.Xa.Center
                    }, a.createElement(p.Ya, {
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
            var x = Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(g);
            t.d(n, !1, function() {
                return g
            }), t.d(n, "a", function() {
                return x
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
                x = function(e) {
                    return e.type === v.b.Bits ? s.createElement(g.hb, {
                        label: Object(r.d)("BITS", "MonetizationPill")
                    }) : e.type === v.b.InExtensionPurchases ? s.createElement(g.hb, {
                        label: Object(r.d)("PURCHASES", "MonetizationPill")
                    }) : null
                };
            x.displayName = "MonetizationPill";
            var h, E = t("22qk"),
                f = t("dhGg"),
                k = t("5IFo"),
                b = t("Ar2k");
            t("EJuf");
            ! function(e) {
                e.InstallButton = "extension-card-install-button", e.InstalledIndicator = "extension-card-installed-indicator", e.Version = "extension-card-version", e.TestStatusDisclosure = "extension-card-test-status-disclosure"
            }(h || (h = {}));
            var y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            imageURL: n.props.splashImageURL || n.props.iconURL || c.a,
                            isInstalling: !1
                        }, n.projectFreewayIDs = Object(f.a)(), n.renderHoverElement = function() {
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
                            return i !== d.z.RELEASED && l.length > 100 && (v = l.substring(0, 100) + "..."), s.createElement(g.Fb, {
                                className: "extension-card__thumbnail__details-preview",
                                background: g.r.Alt2,
                                position: g.kb.Absolute,
                                attachRight: !0,
                                attachTop: !0,
                                attachLeft: !0,
                                attachBottom: !0
                            }, s.createElement(g.Ya, {
                                display: g.X.Flex,
                                flexDirection: g.Aa.Column,
                                justifyContent: g.Xa.Between,
                                alignItems: g.f.Center,
                                padding: {
                                    x: 3,
                                    y: 2
                                },
                                fullHeight: !0
                            }, s.createElement(g.Ya, {
                                className: "extension-card__thumbnail__summary",
                                display: g.X.Flex,
                                flexDirection: g.Aa.Column,
                                justifyContent: g.Xa.Center,
                                overflow: g.db.Hidden
                            }, s.createElement(g.W, {
                                type: g.Wb.P
                            }, v), i !== d.z.RELEASED && s.createElement(g.Ya, {
                                padding: {
                                    top: .5
                                }
                            }, s.createElement(g.W, {
                                "data-test-selector": h.TestStatusDisclosure,
                                type: g.Wb.P
                            }, Object(r.d)("This is a Test Extension; it has not been evaluated by Twitch in accordance with its policies.", "ExtensionCard"), s.createElement(g.Qa, {
                                padding: {
                                    left: .5
                                }
                            }, s.createElement("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                            }, Object(r.d)("Learn More.", "ExtensionCardTestDisclosure")))))), s.createElement(g.Ya, {
                                display: g.X.Flex,
                                flexWrap: g.Ba.NoWrap
                            }, s.createElement(g.Ya, null, s.createElement(g.z, {
                                type: g.F.Hollow,
                                linkTo: {
                                    pathname: Object(E.d)(t, a),
                                    state: {
                                        medium: p,
                                        content: c || u.PageviewContent.ExtensionCard,
                                        content_index: m
                                    }
                                }
                            }, Object(r.d)("Details", "ExtensionCard"))), s.createElement(g.Ya, {
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
                            }, s.createElement(g.Ya, {
                                display: g.X.Flex,
                                alignItems: g.f.Center
                            }, s.createElement(g.tb, {
                                asset: g.ub.Check
                            }), s.createElement(g.Ya, {
                                padding: {
                                    left: .5
                                }
                            }, Object(r.d)("Installed", "ExtensionCard"))));
                            var a = Object(r.d)("Install", "ExtensionCard");
                            return !i || n.isMissingCheeringRequirement() ? s.createElement(g.Ya, {
                                refDelegate: n.setRef
                            }, s.createElement(g.z, {
                                disabled: !0,
                                "data-test-selector": h.InstallButton
                            }, a)) : s.createElement(g.z, {
                                "data-test-selector": h.InstallButton,
                                state: e ? g.E.Loading : g.E.Default,
                                onClick: n.installExtension
                            }, a)
                        }, n.renderAnchorTypePills = function() {
                            var e = n.props,
                                t = e.supportedAnchors,
                                i = e.supportedPlatforms,
                                a = t.map(function(e) {
                                    return s.createElement(g.Ya, {
                                        key: e,
                                        display: g.X.InlineBlock,
                                        padding: {
                                            right: .5
                                        }
                                    }, s.createElement(m.a, {
                                        anchorType: e
                                    }))
                                });
                            return i.includes(o.ExtensionPlatform.Mobile) && a.push(s.createElement(g.Ya, {
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
                                            return i.sent(), Object(k.e)({
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
                                    align: g.ac.Center,
                                    direction: g.bc.Top
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
                            l = n.extensionVersion,
                            c = n.iconURL,
                            u = n.isInstalled,
                            m = n.monetizationType,
                            v = c && e === c;
                        return s.createElement(g.Ya, {
                            className: a("extension-card", i)
                        }, s.createElement(g.G, null, s.createElement(g.Fb, {
                            className: "extension-card__thumbnail",
                            border: !0,
                            background: g.r.AccentAlt2,
                            position: g.kb.Relative,
                            overflow: g.db.Hidden
                        }, s.createElement(g.o, {
                            ratio: g.p.Aspect3x2
                        }, s.createElement(g.Fb, {
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Xa.Center,
                            position: g.kb.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, v ? s.createElement(g.S, {
                            className: "extension-card__thumbnail__icon",
                            src: e,
                            alt: o,
                            onError: this.onCardImageError
                        }) : s.createElement(g.Qa, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(g.S, {
                            src: e,
                            alt: o,
                            onError: this.onCardImageError
                        }))), this.renderHoverElement()), u && s.createElement(g.Fb, {
                            display: g.X.InlineFlex,
                            alignItems: g.f.Center,
                            justifyContent: g.Xa.Center,
                            background: g.r.Accent,
                            position: g.kb.Absolute,
                            color: g.O.Overlay,
                            attachRight: !0,
                            attachTop: !0
                        }, s.createElement(g.tb, {
                            "data-test-selector": h.InstalledIndicator,
                            asset: g.ub.Check
                        })), r !== d.z.RELEASED && s.createElement(g.Fb, {
                            attachBottom: !0,
                            attachRight: !0,
                            alignItems: g.f.Center,
                            background: g.r.Accent,
                            color: g.O.Overlay,
                            "data-test-selector": h.Version,
                            display: g.X.InlineFlex,
                            justifyContent: g.Xa.Center,
                            padding: {
                                x: .5
                            },
                            position: g.kb.Absolute
                        }, l)), s.createElement(g.Ya, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(g.W, {
                            type: g.Wb.H6
                        }, o), s.createElement(g.W, {
                            type: g.Wb.Span,
                            color: g.O.Alt2,
                            fontSize: g.Ca.Size7
                        }, t), s.createElement(g.Ya, {
                            padding: {
                                top: .5
                            }
                        }, this.renderAnchorTypePills(), null !== m && s.createElement(g.Ya, {
                            key: "monetization-pill",
                            display: g.X.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(x, {
                            type: m
                        })), r !== d.z.RELEASED && s.createElement(p.a, {
                            state: r
                        })))))
                    }, n.prototype.isMissingCheeringRequirement = function() {
                        var e = this.props,
                            n = e.cheeringEnabled,
                            t = e.extensionClientID,
                            i = e.extensionState,
                            a = e.monetizationType;
                        return !this.projectFreewayIDs.includes(t) && (i === d.z.RELEASED && a === v.b.Bits && !n)
                    }, n
                }(s.Component),
                C = Object(b.c)()(y);
            t.d(n, !1, function() {
                return h
            }), t.d(n, !1, function() {
                return y
            }), t.d(n, "a", function() {
                return C
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
                    return e.anchorType ? a.createElement(r.hb, {
                        label: Object(o.a)(e.anchorType, !0)
                    }) : e.mobile ? a.createElement(r.hb, {
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
                        return a.createElement(c.Fb, {
                            background: c.r.Alt2,
                            display: c.X.Flex,
                            alignItems: c.f.Stretch
                        }, t && a.createElement(c.Fb, {
                            border: !0,
                            display: c.X.Flex,
                            flexGrow: 0
                        }, a.createElement(c.A, {
                            ariaLabel: Object(s.d)("Navigate to previous page", "ExtensionPageHeader"),
                            size: c.B.Large,
                            icon: c.ub.AngleLeft,
                            onClick: this.goBack
                        })), a.createElement(c.Fb, {
                            border: !0,
                            display: c.X.Flex,
                            flexGrow: 1,
                            padding: 2
                        }, a.createElement(c.W, {
                            type: c.Wb.H4
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
                c = t("4VQm"),
                d = t("yR8l"),
                u = t("GIFg"),
                m = t("kYmV"),
                p = t("cuu2"),
                v = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return o.createElement(u.a, null, o.createElement(p.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                            page: m.b.Extensions
                        }))
                    }, n
                }(o.Component),
                g = t("Ue10"),
                x = t("2xye"),
                h = t("22qk"),
                E = t("a1OF"),
                f = (t("FIFN"), function(e) {
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
                        i && (m = o.createElement(g.Ya, {
                            alignSelf: g.g.Center,
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: Object(E.d)(i, 3),
                            width: "21"
                        })));
                        var p = this.props.headerText;
                        return a && (p = o.createElement(g.U, {
                            to: a
                        }, s)), o.createElement(g.Fb, {
                            background: g.r.Base,
                            border: !0,
                            className: "dashboard-announcement-banner-container",
                            display: g.X.Flex,
                            margin: {
                                bottom: 2
                            },
                            padding: 2
                        }, m, o.createElement(g.Ya, null, o.createElement(g.Qa, {
                            margin: {
                                bottom: 0
                            }
                        }, o.createElement(g.W, {
                            bold: !0,
                            fontSize: g.Ca.Size4,
                            type: g.Wb.H2
                        }, p)), o.createElement(g.W, {
                            color: g.O.Alt2,
                            fontSize: g.Ca.Size5
                        }, u)), o.createElement(g.Ya, {
                            alignSelf: g.g.Center,
                            margin: {
                                left: "auto",
                                right: 1
                            }
                        }, !r && o.createElement(g.z, {
                            onClick: d,
                            linkTo: n
                        }, t)), o.createElement(g.Ya, {
                            alignSelf: g.g.Center
                        }, o.createElement(g.A, {
                            ariaLabel: Object(l.d)("Close", "AnnouncementBanner"),
                            icon: g.ub.Close,
                            onClick: c,
                            "data-test-selector": "dismiss-button"
                        })))
                    }, n
                }(o.PureComponent)),
                k = "extensions_bits_promotion",
                b = "extensions_bits_promotion_dismissed",
                y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            enabled: l.b.get(k, !1),
                            dismissed: l.m.get(b, !1)
                        }, n.handleAnnouncementDismissed = function() {
                            n.setState({
                                dismissed: !0
                            }, function() {
                                return l.m.set(b, !0)
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.state,
                            n = e.enabled,
                            t = e.dismissed;
                        return !n || t ? null : o.createElement(f, {
                            buttonLink: {
                                pathname: Object(h.a)("de82d4e2-591d-4ec0-998d-71d0f48886c9"),
                                state: {
                                    content: x.PageviewContent.AnnouncementBanner,
                                    medium: x.PageviewMedium.ExtensionDiscovery
                                }
                            },
                            buttonText: Object(l.d)("Explore Extensions", "BitsExtensionPromotion"),
                            emoteID: "74510",
                            headerText: Object(l.d)("Bits in Extensions Promotion! ", "BitsExtensionPromotion"),
                            onAnnouncementDismissed: this.handleAnnouncementDismissed,
                            subtitleText: Object(l.d)("Through December 31, 2018 we’re giving you 100% of the Bits earned within an Extension. Explore popular Extensions in our Bits! Bits! Bits! featured category.", "BitsExtensionPromotion")
                        })
                    }, n
                }(o.Component);

            function C(e) {
                var n = e.channelLogin,
                    t = e.selectedTab,
                    a = e.showWhitelistedTab,
                    s = {
                        medium: x.PageviewMedium.ExtensionDashboardTopNav,
                        content: x.PageviewContent.ExtensionNavTabLink
                    };
                return o.createElement(g.Ya, {
                    display: g.X.InlineBlock,
                    padding: {
                        bottom: 2
                    }
                }, o.createElement(g.Hb, null, o.createElement(g.Gb, {
                    linkTo: {
                        pathname: Object(h.c)(n),
                        state: s
                    },
                    active: t === i.Discovery
                }, o.createElement(g.W, {
                    type: g.Wb.H4
                }, Object(l.d)("Discovery", "DiscoveryNavBar"))), o.createElement(g.Gb, {
                    linkTo: {
                        pathname: Object(h.e)(n),
                        state: s
                    },
                    active: t === i.MyExtensions
                }, o.createElement(g.W, {
                    "data-a-target": "my-extensions-tab",
                    type: g.Wb.H4
                }, Object(l.d)("My Extensions", "DiscoveryNavBar"))), a && o.createElement(g.Gb, {
                    linkTo: {
                        pathname: Object(h.h)(n),
                        state: s
                    },
                    active: t === i.Whitelisted
                }, o.createElement(g.W, {
                    "data-a-target": "invite-only-tab",
                    type: g.Wb.H4
                }, Object(l.d)("Invite Only", "DiscoveryNavBar")))))
            }! function(e) {
                e[e.Discovery = 0] = "Discovery", e[e.MyExtensions = 1] = "MyExtensions", e[e.Whitelisted = 2] = "Whitelisted"
            }(i || (i = {}));
            var N = t("/MKj"),
                S = t("fvjX"),
                F = t("aCAx"),
                I = t("MM5q"),
                D = t("+/wI"),
                O = t("8/mp"),
                P = t("V+GM"),
                w = t("geRD"),
                A = t("NvVO"),
                M = t("MXoD"),
                j = t("VQbD"),
                L = (t("QSti"), function(e) {
                    var n = [];
                    if (e.loading)
                        for (var t = 0; t < 8; t++) n.push(o.createElement(g.Ya, {
                            key: t,
                            padding: {
                                left: 1,
                                bottom: 1
                            }
                        }, o.createElement(g.jb, {
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
                            var a = Object(M.a)({
                                content: x.PageviewContent.ExtensionDetails,
                                content_index: n,
                                medium: x.PageviewMedium.ExtensionManagerCarousel
                            }, i);
                            return o.createElement(g.Ya, {
                                className: "extension-featured-carousel-item",
                                padding: {
                                    left: 1,
                                    bottom: 1
                                },
                                key: e.id
                            }, o.createElement(g.Va, {
                                linkTo: a
                            }, o.createElement(g.G, null, o.createElement(g.I, {
                                src: e.imageURL,
                                alt: e.title,
                                aspect: g.p.Aspect3x2
                            }), e.title && o.createElement(g.Fb, {
                                alignItems: g.f.Center,
                                background: g.r.Overlay,
                                className: "extension-featured-carousel-item__title-bar",
                                display: g.X.Flex,
                                padding: {
                                    left: 2
                                },
                                position: g.kb.Absolute,
                                attachBottom: !0,
                                fullWidth: !0
                            }, o.createElement(g.W, {
                                type: g.Wb.H3,
                                color: g.O.OverlayAlt
                            }, e.title)))))
                        })
                    }
                    return o.createElement(g.Ya, {
                        overflow: g.db.Hidden,
                        fullWidth: !0
                    }, o.createElement(g.Fb, {
                        border: !0,
                        overflow: g.db.Hidden
                    }, o.createElement(g.Ya, {
                        padding: 1
                    }, o.createElement(g.W, {
                        type: g.Wb.H4,
                        noWrap: !0
                    }, Object(l.d)("Featured", "ExtensionFeaturedCarousel"))), o.createElement(j.a, {
                        insetStyle: !0,
                        items: n
                    })))
                });
            L.displayName = "ExtensionFeaturedCarousel";
            var T = t("G1aL"),
                R = t("OzNJ"),
                _ = t("vYrU"),
                W = t("GnwI"),
                U = t("d9uE"),
                Y = function(e) {
                    for (var n = e.count, t = [], i = 0; i < n; i++) t.push(o.createElement(g.Ya, {
                        key: i,
                        padding: {
                            right: 2
                        }
                    }, o.createElement(U.a, null)));
                    return o.createElement(g.Ya, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(g.Ya, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(g.jb, {
                        width: 120,
                        height: 24
                    })), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        padding: {
                            bottom: 2
                        }
                    }, t))
                };
            Y.displayName = "ExtensionCategoryCarouselPlaceholder";
            var B = t("0QYl"),
                V = function(e) {
                    var n = e.categoryID,
                        t = e.categoryName,
                        i = e.extensions,
                        a = e.installExtension,
                        s = i.map(function(e, t) {
                            return o.createElement(g.Ya, {
                                margin: {
                                    right: 2
                                },
                                key: e.extensionID
                            }, o.createElement(B.a, {
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
                            pathname: Object(h.a)(n),
                            state: {
                                medium: x.PageviewMedium.ExtensionDiscovery,
                                content: x.PageviewContent.ExtensionCategoryPreview
                            }
                        };
                    return o.createElement(g.Ya, null, o.createElement(g.Ya, {
                        display: g.X.Flex,
                        justifyContent: g.Xa.Between,
                        alignItems: g.f.Baseline
                    }, o.createElement(g.U, {
                        to: r
                    }, o.createElement(g.W, {
                        type: g.Wb.H4
                    }, t)), o.createElement(g.Fb, {
                        fontSize: g.Ca.Size5
                    }, o.createElement(g.U, {
                        to: r
                    }, Object(l.d)("View more", "ExtensionCategoryCarousel")))), o.createElement(g.Qa, {
                        margin: {
                            top: 1,
                            bottom: 2
                        }
                    }, o.createElement(j.a, {
                        items: s,
                        insetStyle: !0
                    })))
                };
            V.displayName = "ExtensionCategoryCarousel";
            var z = t("UEdd"),
                X = t("H6uz"),
                q = 5,
                H = {
                    carouselID: "default",
                    first: q,
                    skipCurrentUser: !1
                },
                Q = function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(w.a)({
                                                channelID: r.id,
                                                extensionID: e
                                            }))];
                                        case 2:
                                            return c = a.sent().data, l && c.installExtension && c.installExtension.installedExtension && (d = c.installExtension.installedExtension, Object(w.e)(X, H, function(e) {
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
                                                first: q,
                                                skipCurrentUser: !0
                                            }, [4, this.props.extensionDiscoveryPageData.fetchMore({
                                                query: X,
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
                            r = Object(_.a)(n.currentUser);
                        if (a)
                            for (var c = 0; c < 5; c++) s.push(o.createElement(Y, {
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
                                    monetizationType: Object(R.e)(t),
                                    extensionClientID: t.clientID,
                                    extensionID: t.id,
                                    extensionName: t.name,
                                    extensionState: t.state,
                                    extensionVersion: t.version,
                                    hasInstallPermission: null !== t.self && t.self.canInstall,
                                    isInstalled: e.isExtensionInstalled(t.id),
                                    summary: t.summary,
                                    supportedAnchors: Object(R.f)(t.views),
                                    supportedPlatforms: Object(R.g)(t.views)
                                })
                            }), o.createElement(V, {
                                key: t.id,
                                categoryID: t.id,
                                categoryName: t.name,
                                extensions: i,
                                installExtension: e.installExtension
                            })) : null
                        }));
                        return o.createElement(g.Ya, null, o.createElement(g.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(T.a, {
                            trackingContext: {
                                medium: x.PageviewMedium.ExtensionDiscovery
                            }
                        })), o.createElement(L, {
                            entries: this.getFeaturedCarouselEntries(),
                            loading: a
                        }), o.createElement(g.Ya, {
                            margin: {
                                y: 2
                            }
                        }, s), o.createElement(O.a, {
                            pixelThreshold: 400,
                            loadMore: this.loadMore,
                            enabled: this.canLoadMore()
                        }), t && o.createElement(g.W, null, Object(l.d)("We're having trouble fetching extensions.", "ExtensionDiscoveryPagePresentation")))
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
                G = Object(S.compose)(Object(W.b)("ExtensionDiscoveryPage", {
                    destination: A.a.ExtensionsDiscovery
                }), Object(P.a)({
                    location: x.PageviewLocation.ExtensionsDiscovery
                }), Object(d.a)(X, {
                    name: "extensionDiscoveryPageData",
                    options: {
                        variables: H
                    }
                }), Object(d.a)(z, {
                    name: "installExtension"
                }))(Q);
            var J = Object(N.connect)(null, function(e) {
                    return Object(S.bindActionCreators)({
                        showExtensionErrorModal: function() {
                            return Object(F.d)(I.a, {})
                        },
                        showExtensionInstalledModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(F.d)(D.a, n)
                        }
                    }, e)
                })(G),
                $ = t("cZKs"),
                Z = t("xPN0"),
                K = function(e) {
                    var n = e.activations,
                        t = e.onConfirm;
                    return o.createElement(g.Ya, null, o.createElement(g.W, {
                        type: g.Wb.H5
                    }, Object(l.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
                        count: n.length
                    }, "ExtensionActivatedModal")), o.createElement(g.Fb, {
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
                        return o.createElement(g.W, {
                            key: t
                        }, Object(l.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
                            extensionName: o.createElement(g.W, {
                                bold: !0,
                                type: g.Wb.Span
                            }, n),
                            anchorSlot: o.createElement(g.W, {
                                bold: !0,
                                type: g.Wb.Span,
                                transform: g.Vb.Uppercase
                            }, t)
                        }, "ExtensionActivatedModal"))
                    })), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        justifyContent: g.Xa.Center
                    }, o.createElement(g.z, {
                        onClick: t
                    }, Object(l.d)("Done", "ExtensionActivatedModal"))))
                };
            K.displayName = "ExtensionActivatedModalPresentation";
            var ee = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    return o.createElement(Z.a, null, o.createElement(K, {
                        activations: this.props.activations,
                        onConfirm: this.props.closeModal
                    }), o.createElement($.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(o.Component);
            var ne, te = Object(N.connect)(null, function(e) {
                    return Object(S.bindActionCreators)({
                        closeModal: F.c
                    }, e)
                })(ee),
                ie = t("TSYQ"),
                ae = function(e) {
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
                        p = ie("extension-component-preview", ((n = {})["extension-component-preview--active"] = r, n["extension-component-preview--overlapped"] = l, n));
                    return o.createElement(g.Ra, {
                        position: g.kb.Absolute,
                        textAlign: g.Sb.Center
                    }, o.createElement("div", {
                        key: d,
                        tabIndex: u,
                        "data-slot": d,
                        className: p,
                        style: m
                    }, o.createElement(g.Fb, {
                        fullHeight: !0,
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        justifyContent: g.Xa.Center
                    }, o.createElement(g.W, {
                        color: g.O.Overlay,
                        type: g.Wb.Span,
                        fontSize: g.Ca.Size5
                    }, c))))
                },
                oe = 1e-7;

            function se(e, n) {
                return !(e.minX > n.maxX - oe || e.maxX - oe < n.minX) && !(e.minY > n.maxY - oe || e.maxY - oe < n.minY)
            }

            function re(e, n, t, i) {
                return {
                    minX: e,
                    minY: n,
                    maxX: e + t,
                    maxY: n + i
                }
            }
            var le = 768,
                ce = 432,
                de = 60,
                ue = 48,
                me = 0,
                pe = (de + 1) / ce * 100,
                ve = re(0, 0, le, de),
                ge = re(0, ce - ue, le, ue),
                xe = "player-controls-top",
                he = "player-controls-bottom",
                Ee = ((ne = {})[xe] = ve, ne[he] = ge, ne),
                fe = 10,
                ke = {
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
                be = t("1hWM");

            function ye(e, n, t) {
                var i = Object(be.getComponentSizeFromView)(le, ce, {
                        aspectHeight: 100 * t.aspectHeight,
                        aspectWidth: 100 * t.aspectWidth,
                        zoom: t.hasZoom,
                        zoomPixels: t.zoomPixels || be.DefaultZoomPixelWidth
                    }),
                    a = i.width,
                    o = i.height,
                    s = Object(be.getComponentPositionFromView)(le, ce, {
                        x: Math.floor(100 * e),
                        y: Math.floor(100 * n)
                    });
                return re(s.x, s.y, a, o)
            }

            function Ce(e) {
                for (var n = Object.keys(e).sort(), t = Object.keys(Ee), i = n.concat(t).reduce(function(e, n) {
                        var t;
                        return Object.assign(e, ((t = {})[n] = !1, t))
                    }, {}), a = 0; a < n.length; ++a) {
                    for (var o = n[a], s = e[o], r = ye(s.x, s.y, s.componentConfig), l = a + 1; l < n.length; ++l) {
                        var c = n[l],
                            d = e[c];
                        se(r, ye(d.x, d.y, d.componentConfig)) && (i[o] = !0, i[c] = !0)
                    }
                    for (var u = 0, m = t; u < m.length; u++) {
                        var p = m[u];
                        se(r, Ee[p]) && (i[p] = !0)
                    }
                }
                return i
            }
            t("0wBS");
            var Ne = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        t.renderOverlapError = function() {
                            var e = t.state.hasOverlappingComponents ? g.n.SlideInTop : g.n.SlideOutTop;
                            return t.state.hasOverlappingComponents || t.state.isAnimating ? o.createElement(g.i, {
                                enabled: !0,
                                onAnimationEnd: t.handleAnimationEnd,
                                type: e
                            }, o.createElement(g.Fb, {
                                position: g.kb.Absolute,
                                attachTop: !0,
                                fullWidth: !0,
                                display: g.X.Flex,
                                justifyContent: g.Xa.Center
                            }, o.createElement(g.Ra, {
                                display: g.X.Flex,
                                padding: 1,
                                elevation: 5
                            }, o.createElement("div", {
                                className: "extension-component-error"
                            }, o.createElement(g.tb, {
                                asset: g.ub.NotificationError
                            }), o.createElement(g.Ra, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(g.W, {
                                fontSize: g.Ca.Size4
                            }, Object(l.d)("Component Extensions cannot overlap", "ExtensionComponentActivateModal"))))))) : null
                        }, t.renderPositionPreview = function() {
                            var e, n, i = t.state.slotList.map(function(e, n) {
                                    var i = t.state.currentActivationSettings[e],
                                        a = i.componentConfig,
                                        s = i.extensionName,
                                        r = i.installationID,
                                        l = ye(i.x, i.y, a);
                                    return o.createElement(ae, {
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
                                a = ie("extension-component-player-controls", ((e = {})["extension-component-player-controls--overlapped"] = t.state.collisionMap[xe], e)),
                                s = ie("extension-component-player-controls", ((n = {})["extension-component-player-controls--overlapped"] = t.state.collisionMap[he], n));
                            return o.createElement(g.Fb, null, o.createElement(g.Ra, {
                                position: g.kb.Relative
                            }, o.createElement("div", {
                                ref: t.updatePositionContainerRef,
                                className: "extension-component-player",
                                style: {
                                    width: le,
                                    height: ce
                                }
                            }, i, o.createElement("div", {
                                className: a,
                                style: {
                                    top: "0px",
                                    height: de
                                }
                            }), o.createElement("div", {
                                className: s,
                                style: {
                                    bottom: "0px",
                                    height: ue
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
                                    r = o / le,
                                    l = s / ce,
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
                            var n = Ce(e),
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
                                    a = 1 / le,
                                    o = 1 / ce,
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
                                    p = ke[m];
                                p && (d = p.x * a, u = p.y * o);
                                var v = e.shiftKey ? fe : 1,
                                    g = s - i.left + (window.scrollX || 0),
                                    x = r - i.top + (window.scrollY || 0),
                                    h = d * v + g / le,
                                    E = u * v + x / ce,
                                    f = t.updateCoordinates(n, Math.floor(1e4 * h) / 100, Math.floor(1e4 * E) / 100);
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
                                d = t.clampCoordinates(me, pe, r / 100, c / 100),
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
                            x = Ce(i),
                            h = p.some(function(e) {
                                return x[e]
                            });
                        return t.state = {
                            slotList: v,
                            collisionMap: x,
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
                        }, o.createElement(g.Ya, null, o.createElement(g.W, {
                            type: g.Wb.H5
                        }, Object(l.d)("Set Component Location", "ExtensionComponentActivateModal")), o.createElement(g.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            }
                        }, o.createElement(g.W, null, Object(l.d)("Drag and drop the selected component to set a default anchor point within the video player", "ExtensionComponentActivateModal"))), o.createElement(g.Fb, {
                            background: g.r.Alt,
                            padding: {
                                bottom: 1
                            }
                        }, this.renderPositionPreview()), o.createElement(g.Fb, {
                            display: g.X.Flex,
                            justifyContent: g.Xa.Center,
                            borderTop: !0,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(g.Ya, {
                            display: g.X.Flex,
                            flexDirection: g.Aa.Row
                        }, o.createElement("div", {
                            className: "extension-component-controls-indicator"
                        }), o.createElement(g.Ya, {
                            padding: {
                                left: .5
                            }
                        }, Object(l.d)("Components placed in this region are likely to be obscured by the video player controls", "ExtensionComponentActivateModal")))), o.createElement(g.Fb, {
                            display: g.X.Flex,
                            justifyContent: g.Xa.Center,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(g.Ya, {
                            padding: {
                                right: 1
                            }
                        }, o.createElement(g.z, {
                            type: g.F.Hollow,
                            onClick: this.props.onClose
                        }, Object(l.d)("Cancel", "ExtensionComponentActivateModal"))), o.createElement(g.z, {
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
                Se = function(e) {
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
                        return o.createElement(Z.a, {
                            className: "extension-manager-modal-container--expand"
                        }, o.createElement(Ne, {
                            activatedComponentData: this.props.activatedComponentData,
                            componentConfigToActivate: this.props.componentConfigToActivate,
                            extensionNameToActivate: this.props.extensionNameToActivate,
                            idToActivate: this.props.idToActivate,
                            slotToActivate: this.props.slotToActivate,
                            onConfirm: this.onConfirm,
                            onClose: this.onClose,
                            onIsDraggingChanged: this.onIsDraggingChanged
                        }), o.createElement($.a, {
                            closeOnBackdropClick: !this.state.isDragging,
                            onClose: this.onClose
                        }))
                    }, n
                }(o.Component);
            var Fe = Object(N.connect)(null, function(e) {
                    return Object(S.bindActionCreators)({
                        closeModal: F.c
                    }, e)
                })(Se),
                Ie = t("AfzZ"),
                De = t("Z5H4"),
                Oe = t("cr+I"),
                Pe = t("oJmH"),
                we = t("DMoW");

            function Ae(e) {
                return e.slice().sort(function(e, n) {
                    var t = e.extension,
                        i = n.extension;
                    return t.name.toLowerCase() > i.name.toLowerCase() ? 1 : t.name.toLowerCase() < i.name.toLowerCase() ? -1 : t.version < i.version ? 1 : t.version > i.version ? -1 : 0
                })
            }
            var Me, je = t("5IFo"),
                Le = t("1Cad"),
                Te = t("AN85"),
                Re = t("eJ65"),
                _e = t("EZh/");
            ! function(e) {
                e.Component1 = "extension-component-1", e.Component2 = "extension-component-2", e.Overlay1 = "extension-overlay-1", e.Panel1 = "extension-panel-1", e.Panel2 = "extension-panel-2", e.Panel3 = "extension-panel-3"
            }(Me || (Me = {}));
            var We = function(e) {
                    var n;
                    switch (e) {
                        case Me.Component1:
                            n = Object(l.d)("Component 1", "LocalizeExtensionSlot");
                            break;
                        case Me.Component2:
                            n = Object(l.d)("Component 2", "LocalizeExtensionSlot");
                            break;
                        case Me.Overlay1:
                            n = Object(l.d)("Overlay 1", "LocalizeExtensionSlot");
                            break;
                        case Me.Panel1:
                            n = Object(l.d)("Panel 1", "LocalizeExtensionSlot");
                            break;
                        case Me.Panel2:
                            n = Object(l.d)("Panel 2", "LocalizeExtensionSlot");
                            break;
                        case Me.Panel3:
                            n = Object(l.d)("Panel 3", "LocalizeExtensionSlot");
                            break;
                        default:
                            n = e.toUpperCase()
                    }
                    return n
                },
                Ue = function(e) {
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
                            return t.state === we.a.ACTIVE && a.push(n.renderDeactivate()), a.reduce(function(e, n, t) {
                                var i = o.createElement(g.Fb, {
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
                            return o.createElement(g.Ya, {
                                display: g.X.Flex,
                                flexWrap: g.Ba.NoWrap,
                                alignItems: g.f.Center
                            }, o.createElement(g.lb, {
                                status: g.mb.Online
                            }), o.createElement(g.Ya, {
                                padding: {
                                    left: 1
                                }
                            }, We(e)))
                        }, n.renderDeactivate = function() {
                            return o.createElement(g.Va, {
                                key: "deactivate",
                                blurAfterClick: !0,
                                onClick: n.deactivateExtension
                            }, o.createElement(g.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Deactivate", "ActivateExtensionDropdownV2")))
                        }, n.renderComponentAnchorOptions = function(e) {
                            return e.reduce(function(e, t) {
                                var i = n.renderSetAnchorLocationInteractable(t, we.x.COMPONENT);
                                return i && e.push(i), e
                            }, [])
                        }, n.renderOverlayAnchorOptions = function(e) {
                            return e.reduce(function(e, t) {
                                var i = n.renderSetAnchorLocationInteractable(t, we.x.VIDEO_OVERLAY);
                                return i && e.push(i), e
                            }, [])
                        }, n.renderPanelAnchorOptions = function(e) {
                            var t = e.reduce(function(e, t) {
                                var i = n.renderSetAnchorLocationInteractable(t, we.x.PANEL);
                                return i && e.push(i), e
                            }, []);
                            return e.length < _e.a && t.push(o.createElement(g.Va, {
                                key: "new-panel",
                                blurAfterClick: !0,
                                onClick: n.createPanelAndActivate
                            }, o.createElement(g.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Add as a new panel", "ActivateExtensionDropdownV2")))), t
                        }, n.renderSetAnchorLocationInteractable = function(e, t) {
                            var i = n.props.activationConfig;
                            return i.state === we.a.ACTIVE && i.slot === e ? i.anchor !== we.x.COMPONENT ? null : o.createElement(g.Va, {
                                key: e,
                                blurAfterClick: !0,
                                onClick: n.activateExtension,
                                "data-slot": e,
                                "data-anchor": t
                            }, o.createElement(g.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Reposition {slot}", {
                                slot: We(e)
                            }, "ActivateExtensionDropdownV2"))) : o.createElement(g.Va, {
                                key: e,
                                blurAfterClick: !0,
                                onClick: n.activateExtension,
                                "data-slot": e,
                                "data-anchor": t
                            }, o.createElement(g.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, Object(l.d)("Set as {slot}", {
                                slot: We(e)
                            }, "ActivateExtensionDropdownV2")))
                        }, n.createPanelAndActivate = function() {
                            n.props.activateExtension("", we.x.PANEL, !0)
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
                            return e.type === we.y.REQUIRES_CONFIGURATION
                        }) ? o.createElement(g.Ya, {
                            display: g.X.Flex,
                            alignItems: g.f.Center
                        }, o.createElement(g.W, {
                            color: g.O.Alt2
                        }, Object(l.d)("Needs Configuration", "ActivateExtensionDropdownV2"))) : t ? o.createElement(Re.a, {
                            openByDefault: this.props.openByDefault
                        }, o.createElement(g.z, {
                            dropdown: !0,
                            type: g.F.Text
                        }, n.state === we.a.ACTIVE ? this.renderActivePresence(n.slot) : Object(l.d)("Activate", "ActivateExtensionDropdownV2")), o.createElement(g.u, {
                            size: g.w.Medium,
                            offsetY: "-0.1rem",
                            noTail: !0
                        }, o.createElement(g.Fb, {
                            color: g.O.Link,
                            padding: 1
                        }, this.renderAnchorOptions()))) : o.createElement(g.Ya, {
                            display: g.X.Flex,
                            alignItems: g.f.Center
                        }, o.createElement(g.W, {
                            color: g.O.Alt2
                        }, Object(l.d)("Activation Disabled", "ActivateExtensionDropdownV2")))
                    }, n
                }(o.Component),
                Ye = function(e) {
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
                                    return o.createElement(g.Ya, {
                                        key: e,
                                        display: g.X.InlineBlock,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(Le.a, {
                                        anchorType: e
                                    }))
                                });
                            return i.includes(be.ExtensionPlatform.Mobile) && a.push(o.createElement(g.Ya, {
                                key: "mobile",
                                display: g.X.InlineBlock,
                                padding: {
                                    right: .5
                                }
                            }, o.createElement(Le.a, {
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
                        return o.createElement(g.Fb, {
                            background: g.r.Base,
                            border: !0
                        }, o.createElement(g.Fb, {
                            padding: 1,
                            borderBottom: !0
                        }, o.createElement(g.G, {
                            row: !0,
                            border: !1
                        }, o.createElement(g.I, {
                            alt: i,
                            src: this.state.extensionIcon,
                            aspect: g.p.Aspect1x1,
                            size: g.J.Size6,
                            onError: this.onCardImageError
                        }), o.createElement(g.H, null, o.createElement(g.Ya, {
                            padding: 1
                        }, o.createElement(g.U, {
                            to: {
                                pathname: Object(h.d)(t, r),
                                state: {
                                    medium: c.medium,
                                    content: x.PageviewContent.InstalledExtensionCard
                                }
                            }
                        }, o.createElement(g.W, {
                            type: g.Wb.H5
                        }, i, s !== we.z.RELEASED && " " + r)), this.renderExtensionTagPills(), s !== we.z.RELEASED && o.createElement(Te.a, {
                            state: s
                        }))))), o.createElement(g.Ya, {
                            display: g.X.Flex,
                            justifyContent: g.Xa.Between,
                            padding: 1
                        }, o.createElement(Ue, {
                            activationConfig: this.props.activationConfig,
                            availableSlots: this.props.availableSlots,
                            canActivate: this.props.canActivate,
                            requiredActions: this.props.requiredActions,
                            activateExtension: this.activateExtension,
                            deactivateExtension: this.deactivateExtension
                        }), o.createElement(g.Ya, null, o.createElement(g.A, {
                            ariaLabel: Object(l.d)("Configure", "InstalledExtensionCardComponent"),
                            icon: g.ub.Gear,
                            linkTo: a.__assign({}, Object(h.b)(n, t, r), {
                                state: {
                                    medium: c.medium,
                                    content: x.PageviewContent.InstalledExtensionCard
                                }
                            })
                        }), o.createElement(g.A, {
                            ariaLabel: Object(l.d)("Uninstall", "InstalledExtensionCardComponent"),
                            icon: g.ub.Trash,
                            onClick: this.uninstallExtension
                        }))))
                    }, n
                }(o.Component),
                Be = function() {
                    return o.createElement(g.Fb, {
                        margin: {
                            bottom: 1
                        },
                        background: g.r.Base,
                        border: !0
                    }, o.createElement(g.Fb, {
                        display: g.X.Flex,
                        padding: 1,
                        borderBottom: !0
                    }, o.createElement(g.Ya, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(g.jb, {
                        height: 60,
                        width: 60
                    })), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        justifyContent: g.Xa.Center
                    }, o.createElement(g.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g.jb, {
                        height: 20,
                        width: 225
                    })), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        flexDirection: g.Aa.Row
                    }, o.createElement(g.Ya, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(g.jb, {
                        width: 80,
                        height: 15
                    })), o.createElement(g.Ya, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(g.jb, {
                        width: 80,
                        height: 15
                    })), o.createElement(g.Ya, null, o.createElement(g.jb, {
                        width: 80,
                        height: 15
                    }))))), o.createElement(g.Fb, {
                        display: g.X.Flex,
                        padding: 1,
                        justifyContent: g.Xa.Between
                    }, o.createElement(g.Ya, {
                        padding: .5
                    }, o.createElement(g.jb, {
                        height: 20,
                        width: 125
                    })), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        padding: .5
                    }, o.createElement(g.Ya, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(g.jb, {
                        height: 20,
                        width: 20
                    })), o.createElement(g.Ya, null, o.createElement(g.jb, {
                        height: 20,
                        width: 20
                    })))))
                };
            Be.displayName = "InstalledExtensionPlaceHolder";
            var Ve = t("QA0N"),
                ze = function(e) {
                    return o.createElement(o.Fragment, null, o.createElement(g.W, {
                        type: g.Wb.P
                    }, Object(l.d)("To find an extension that fits your channel, please visit the {extensionsDiscoveryPageLink}.", {
                        extensionsDiscoveryPageLink: o.createElement(g.U, {
                            to: {
                                pathname: Object(h.c)(e.channelLogin),
                                state: {
                                    medium: Ve.e.ExtensionManagement
                                }
                            }
                        }, Object(l.d)("Extensions Discovery Page", "NoInstalledExtensionsMessage"))
                    }, "NoInstalledExtensionsMessage")), o.createElement(g.Ya, {
                        padding: {
                            top: 1
                        }
                    }, o.createElement(g.W, {
                        type: g.Wb.P
                    }, Object(l.d)("If you're unsure what to do with an extension, learn more about extensions in {extensionsCreatorCampLink}!", {
                        extensionsCreatorCampLink: o.createElement(g.U, {
                            to: "https://www.twitch.tv/creatorcamp/en/level-up/extensions"
                        }, Object(l.d)("Creator Camp", "NoInstalledExtensionsMessage"))
                    }, "NoInstalledExtensionsMessage"))))
                },
                Xe = t("uys4"),
                qe = t("TkUT"),
                He = t("RVVg"),
                Qe = t("l45E");
            t("/WSp");
            var Ge, Je = "ExtensionPanel";
            ! function(e) {
                e.InstalledExtensionList = "installed-list", e.ActiveExtensionList = "active-list", e.ManagePermissionsButton = "manage-permissions", e.NoInstalledExtensionsMessage = "none-installed-message", e.NoActivatedExtensionsMessage = "none-activated-message"
            }(Ge || (Ge = {}));
            var $e = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onConfigureModalClose = function() {
                            var e = n.props,
                                t = e.extensionManagementPageData,
                                i = e.history,
                                a = e.match;
                            t.refetch(), i.push(Object(h.e)(a.params.channelLogin))
                        }, n.renderListCard = function(e) {
                            var t = e.activationConfig,
                                i = e.extension,
                                a = e.id,
                                s = e.requiredActions,
                                r = e.self,
                                l = n.props.extensionManagementPageData,
                                c = Object(R.f)(i.views);
                            return o.createElement(g.Ya, {
                                key: a,
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(Ye, {
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
                                supportedAnchors: Object(R.f)(i.views),
                                supportPlatforms: Object(R.g)(i.views),
                                activationConfig: t,
                                availableSlots: function(e, n) {
                                    var t = {};
                                    if (n.includes(we.x.COMPONENT) && (t.components = ["extension-component-1", "extension-component-2"]), n.includes(we.x.VIDEO_OVERLAY) && (t.overlays = ["extension-overlay-1"]), n.includes(we.x.PANEL) && e.currentUser) {
                                        var i = e.currentUser.panels.reduce(function(e, n) {
                                            return n && n.__typename === Je && e.push(n.slotID), e
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
                                            if (i === we.x.COMPONENT) return [2, this.activateComponentExtensions(e, t)];
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
                                                        case we.x.COMPONENT:
                                                            if (!a) return;
                                                            s.component = {
                                                                slot: o,
                                                                x: a.x,
                                                                y: a.y
                                                            };
                                                            break;
                                                        case we.x.PANEL:
                                                            s.panel = {
                                                                slot: o
                                                            };
                                                            break;
                                                        case we.x.VIDEO_OVERLAY:
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
                                    return t !== e.id && i.state === we.a.ACTIVE && i.anchor === e.anchor && i.slot === e.slot
                                });
                                i ? a({
                                    activationSlot: e.slot,
                                    destructionType: R.a.Replace,
                                    existingExtensionName: i.extension.name,
                                    existingMonetizationType: Object(R.e)(i.extension),
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
                                            return a.trys.push([1, 3, , 4]), [4, this.props.applyExtensionActivations(Object(w.a)({
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
                                            return a.trys.push([1, 4, , 5]), [4, this.confirmExtensionDestruction(e, R.a.Deactivate)];
                                        case 2:
                                            return a.sent(), [4, t(Object(w.a)({
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
                                            return a.trys.push([1, 4, , 5]), [4, this.confirmExtensionDestruction(e, R.a.Uninstall)];
                                        case 2:
                                            return a.sent(), [4, o(Object(w.a)({
                                                extensionInstallationID: e
                                            }))];
                                        case 3:
                                            return (r = a.sent().data).uninstallExtension && r.uninstallExtension.id && Object(w.e)(Qe, {}, function(e) {
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
                            s = o.createElement(g.Ya, {
                                "data-test-selector": Ge.NoInstalledExtensionsMessage,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(ze, {
                                channelLogin: t.params.channelLogin
                            })),
                            r = s,
                            c = o.createElement(g.Ya, {
                                "data-test-selector": Ge.NoActivatedExtensionsMessage,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(g.W, {
                                type: g.Wb.P
                            }, Object(l.d)("Activate an extension from your installed extensions list for it to show up on your channel page!", "ExtensionManagementPagePresentation")));
                        if (a) c = r = o.createElement(o.Fragment, null, o.createElement(Be, null), o.createElement(Be, null));
                        else {
                            var d = i && i.installedExtensions ? Ae(i.installedExtensions) : [];
                            if (d.length) {
                                var u = d.filter(function(e) {
                                    return e.activationConfig.state !== we.a.ACTIVE
                                });
                                r = u.length ? o.createElement(o.Fragment, null, u.map(this.renderListCard)) : s;
                                var m = d.filter(function(e) {
                                    return e.activationConfig.state === we.a.ACTIVE
                                });
                                (m = function(e) {
                                    return e.slice().sort(function(e, n) {
                                        return e.activationConfig.anchor === we.x.COMPONENT && n.activationConfig.anchor !== we.x.COMPONENT ? -1 : n.activationConfig.anchor === we.x.COMPONENT && e.activationConfig.anchor !== we.x.COMPONENT ? 1 : e.activationConfig.anchor === we.x.VIDEO_OVERLAY && n.activationConfig.anchor !== we.x.VIDEO_OVERLAY ? -1 : n.activationConfig.anchor === we.x.VIDEO_OVERLAY && e.activationConfig.anchor !== we.x.VIDEO_OVERLAY ? 1 : e.activationConfig.anchor === we.x.PANEL && n.activationConfig.anchor !== we.x.PANEL ? -1 : n.activationConfig.anchor === we.x.PANEL && e.activationConfig.anchor !== we.x.PANEL ? 1 : e.extension.name.toLowerCase() > n.extension.name.toLowerCase() ? 1 : e.extension.name.toLowerCase() < n.extension.name.toLowerCase() ? -1 : e.extension.version < n.extension.version ? 1 : e.extension.version > n.extension.version ? -1 : 0
                                    })
                                }(m)).length && (c = o.createElement(o.Fragment, null, m.map(this.renderListCard)))
                            }
                        }
                        return o.createElement(g.Ya, {
                            padding: {
                                bottom: 5
                            }
                        }, o.createElement(g.Ya, {
                            padding: {
                                bottom: 5
                            }
                        }, o.createElement(g.Ya, {
                            display: g.X.Flex,
                            alignItems: g.f.Start,
                            padding: {
                                bottom: 5
                            }
                        }, o.createElement(g.Fb, {
                            className: "extensions-list",
                            "data-test-selector": Ge.InstalledExtensionList,
                            display: g.X.InlineBlock,
                            margin: {
                                bottom: 5
                            },
                            padding: {
                                x: 1
                            },
                            border: !0
                        }, o.createElement(g.Ya, {
                            padding: {
                                y: 1
                            },
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Xa.Between
                        }, o.createElement(g.W, {
                            type: g.Wb.H5
                        }, Object(l.d)("Installed", "ExtensionManagementPagePresentation")), this.anyInstallationUsesPermissions() && o.createElement(g.z, {
                            type: g.F.Text,
                            linkTo: Object(h.f)(this.props.match.params.channelLogin, {
                                medium: x.PageviewMedium.ExtensionManagement
                            }),
                            "data-test-selector": Ge.ManagePermissionsButton
                        }, Object(l.d)("Manage Permissions", "ExtensionManagementPagePresentation"))), r), o.createElement(g.Fb, {
                            className: "extensions-list",
                            "data-test-selector": Ge.ActiveExtensionList,
                            display: g.X.InlineBlock,
                            margin: {
                                bottom: 5,
                                left: 2
                            },
                            padding: {
                                x: 1
                            },
                            border: !0
                        }, o.createElement(g.Ya, {
                            padding: {
                                y: 1
                            }
                        }, o.createElement(g.W, {
                            type: g.Wb.H5
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
                            o = Oe.parse(e.search),
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
                                        return (e = this.props.extensionManagementPageData.currentUser) && e.id ? [4, this.props.createPanel(Object(w.a)({
                                            channelID: e.id,
                                            type: we.D.EXTENSION
                                        }))] : [2, Promise.reject("No user id.")];
                                    case 1:
                                        return n = i.sent(), (t = n.data.createPanel) && t.panel.__typename === Je ? [2, t.panel] : [2]
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
                                        return n.state === we.a.ACTIVE && n.anchor === we.x.COMPONENT
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
                                d.component && (Object(je.b)(s), this.props.showComponentActivationModal({
                                    onClose: function() {
                                        Object(je.a)(s)
                                    },
                                    onConfirm: function(e) {
                                        return a.__awaiter(t, void 0, void 0, function() {
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, this.applyActivation(e)];
                                                    case 1:
                                                        return n.sent(), Object(je.c)(s), [2]
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
                            var r = Object(R.e)(s.extension);
                            n === R.a.Uninstall ? a({
                                destructionType: R.a.Uninstall,
                                extensionName: s.extension.name,
                                monetizationType: r,
                                onConfirm: t
                            }) : null !== r && n === R.a.Deactivate ? a({
                                destructionType: R.a.Deactivate,
                                extensionName: s.extension.name,
                                monetizationType: r,
                                onConfirm: t
                            }) : t()
                        })
                    }, n
                }(o.Component),
                Ze = Object(Pe.compose)(Object(W.b)("ExtensionManagementPage", {
                    destination: A.a.ChannelDashboardExtensionsManagement
                }), Object(P.a)({
                    location: x.PageviewLocation.DashboardExtensionsManagement
                }), Object(d.a)(Qe, {
                    name: "extensionManagementPageData"
                }), Object(d.a)(qe, {
                    name: "createPanel"
                }), Object(d.a)(Xe, {
                    name: "applyExtensionActivations"
                }), Object(d.a)(He, {
                    name: "uninstallExtension"
                }))($e);
            var Ke, en = Object(N.connect)(null, function(e) {
                    return Object(S.bindActionCreators)({
                        closeModal: F.c,
                        showComponentActivationModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(F.d)(Fe, n)
                        },
                        showExtensionActivatedModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(F.d)(te, n)
                        },
                        showExtensionConfigureModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(F.d)(Ie.a, n)
                        },
                        showExtensionDestructionWarningModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(F.d)(De.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(F.d)(I.a, {})
                        }
                    }, e)
                })(Ze),
                nn = t("ll/k"),
                tn = t("1IJ0");
            ! function(e) {
                e.ChatToggle = "chat-toggle"
            }(Ke || (Ke = {}));
            var an, on = function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, this.props.setFeatureFlags(Object(w.a)({
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
                        return o.createElement(g.Fb, {
                            borderTop: !this.props.isFirstChild,
                            padding: {
                                y: 2
                            }
                        }, o.createElement(g.Ya, {
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(g.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(g.I, {
                            alt: t,
                            src: this.state.extensionIcon,
                            aspect: g.p.Aspect1x1,
                            size: g.J.Size6,
                            onError: this.onCardImageError
                        })), o.createElement(g.Ya, null, o.createElement(g.U, {
                            to: {
                                pathname: Object(h.d)(n, i),
                                state: {
                                    medium: x.PageviewMedium.ExtensionPermissions,
                                    content: x.PageviewContent.ExtensionPermissionsCard
                                }
                            }
                        }, o.createElement(g.W, {
                            type: g.Wb.H5
                        }, t)), o.createElement(g.W, null, Object(l.d)("Created by {authorName}", {
                            authorName: this.props.extensionAuthor
                        }, "PermissionCard")))), o.createElement(g.Ya, null, this.props.hasChatSupport && o.createElement(g.Ya, {
                            display: g.X.Flex
                        }, o.createElement(g.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(g.Yb, {
                            checked: this.props.permittedFeatures.canSendChat,
                            "data-installation-id": this.props.installationID,
                            "data-test-selector": Ke.ChatToggle,
                            error: this.state.canSendChatError,
                            name: a,
                            onChange: this.handleCanSendChat
                        })), o.createElement(g.W, null, Object(l.d)("This extension can send message to my chat.", "PermissionCard")))))
                    }, n
                }(o.Component),
                sn = function(e) {
                    var n = e.border;
                    return o.createElement(g.Fb, {
                        borderTop: n,
                        padding: {
                            y: 2
                        }
                    }, o.createElement(g.Ya, {
                        display: g.X.Flex
                    }, o.createElement(g.Ya, {
                        display: g.X.Flex
                    }, o.createElement(g.jb, {
                        height: 60,
                        width: 60
                    })), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        justifyContent: g.Xa.Center,
                        flexDirection: g.Aa.Column,
                        margin: {
                            left: 1
                        }
                    }, o.createElement(g.Ya, null, o.createElement(g.jb, {
                        height: 20,
                        width: 150
                    })), o.createElement(g.Ya, {
                        margin: {
                            top: .5
                        }
                    }, o.createElement(g.jb, {
                        height: 15,
                        width: 200
                    })))), o.createElement(g.Ya, {
                        display: g.X.Flex,
                        alignItems: g.f.Center,
                        padding: {
                            top: 2
                        }
                    }, o.createElement(g.Ya, null, o.createElement(g.jb, {
                        height: 20,
                        width: 45
                    })), o.createElement(g.Ya, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(g.jb, {
                        height: 15,
                        width: 225
                    }))))
                },
                rn = t("sx1r"),
                ln = t("+RbR");
            (an || (an = {})).NoneRequirePermissions = "no-required-permissions";
            var cn, dn = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.permittedFeaturesModalData,
                            t = n.loading,
                            i = n.currentUser,
                            a = [];
                        return t ? a = Object(nn.c)(3, function(e) {
                            return o.createElement(sn, {
                                key: e,
                                border: 0 !== e
                            })
                        }) : i && i.installedExtensions && i.installedExtensions.length ? (a = Ae(i.installedExtensions).filter(function(e) {
                            return e.extension.hasChatSupport
                        }).map(function(n, t) {
                            var i = n.id,
                                a = n.extension,
                                s = n.permittedFeatures;
                            return o.createElement(on, {
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
                        })).length || (a = o.createElement(g.W, {
                            "data-test-selector": an.NoneRequirePermissions
                        }, Object(l.d)("None of your installed extensions require permissions.", "ExtensionPermissionsPageComponent"))) : a = o.createElement(ze, {
                            channelLogin: this.props.match.params.channelLogin
                        }), o.createElement(g.Fb, {
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0
                        }, o.createElement(tn.a, {
                            channelLogin: this.props.match.params.channelLogin,
                            showBackLink: !0,
                            title: Object(l.d)("Extension Permissions", "ExtensionPermissionsPageComponent")
                        }), o.createElement(g.Ya, {
                            padding: {
                                right: 2,
                                left: 2
                            }
                        }, a))
                    }, n
                }(o.Component),
                un = Object(Pe.compose)(Object(d.a)(ln, {
                    name: "permittedFeaturesModalData"
                }), Object(d.a)(rn, {
                    name: "setFeatureFlags"
                }))(dn),
                mn = t("8xJJ"),
                pn = t("RRhV"),
                vn = t("Q1Lx");
            (cn || (cn = {})).ErrorMessage = "extension-whitelisted-error-message";
            var gn = function(e) {
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
                                                query: vn,
                                                variables: {
                                                    afterCursor: t.extensions.edges[t.extensions.edges.length - 1].cursor,
                                                    skipCurrentUser: !0
                                                },
                                                updateQuery: function(e, n) {
                                                    var t = n.fetchMoreResult;
                                                    return e.extensionCategory && e.extensionCategory.extensions && t.extensionCategory && t.extensionCategory.extensions ? a.__assign({}, e, {
                                                        extensionCategory: a.__assign({}, t.extensionCategory, {
                                                            extensions: a.__assign({}, t.extensionCategory.extensions, {
                                                                edges: Object(w.c)(e.extensionCategory.extensions.edges, t.extensionCategory.extensions.edges)
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
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(w.a)({
                                                channelID: r.id,
                                                extensionID: e
                                            }))];
                                        case 2:
                                            return (l = a.sent().data).installExtension && l.installExtension.installedExtension && (c = l.installExtension.installedExtension, Object(w.e)(vn, {
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
                            for (var a = 0; a < 4; a++) i.push(o.createElement(g.Ya, {
                                key: a,
                                padding: 1
                            }, o.createElement(U.a, null)));
                        else t && t.extensions && (i = t.extensions.edges.map(this.renderCard, this));
                        return o.createElement(g.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(mn.a, {
                            loadMoreEnabled: this.canLoadMoreExtensions(),
                            loadMore: this.loadMoreExtensions
                        }, i), n && o.createElement(g.W, {
                            "data-test-selector": cn.ErrorMessage
                        }, Object(l.d)("We're having trouble fetching extensions.", "WhitelistedExtensionsPageComponent")))
                    }, n.prototype.renderCard = function(e) {
                        var n = this.props.whitelistedExtensionsPageData,
                            t = e.node;
                        return o.createElement(g.Qa, {
                            margin: {
                                y: 1
                            },
                            key: t.id
                        }, o.createElement(B.a, {
                            authorName: t.authorName,
                            cheeringEnabled: Object(_.a)(n.currentUser),
                            extensionClientID: t.clientID,
                            extensionID: t.id,
                            extensionName: t.name,
                            extensionVersion: t.version,
                            hasInstallPermission: null !== t.self && t.self.canInstall,
                            splashImageURL: t.iconURLs.discoverySplash,
                            iconURL: t.iconURLs.square100,
                            monetizationType: Object(R.e)(t),
                            isInstalled: this.isExtensionInstalled(t.id),
                            installExtension: this.installExtension,
                            extensionState: t.state,
                            trackingContext: {
                                medium: x.PageviewMedium.ExtensionsWhitelisted
                            },
                            summary: t.summary,
                            supportedAnchors: Object(R.f)(t.views),
                            supportedPlatforms: Object(R.g)(t.views)
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
                xn = Object(S.compose)(Object(W.b)("WhitelistedExtensionsPage", {
                    destination: A.a.ExtensionsCategory
                }), Object(P.a)({
                    location: x.PageviewLocation.ExtensionsCategory
                }), Object(d.a)(vn, {
                    name: "whitelistedExtensionsPageData",
                    options: function() {
                        return {
                            variables: {
                                skipCurrentUser: !1
                            }
                        }
                    }
                }), Object(d.a)(pn, {
                    name: "installExtension"
                }))(gn);
            var hn = Object(N.connect)(null, function(e) {
                    return Object(S.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = a.__rest(e, []);
                            return Object(F.d)(D.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(F.d)(I.a, {})
                        }
                    }, e)
                })(xn),
                En = t("F4WJ"),
                fn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderExtensionManagementPage = function(e) {
                            var t = e.match;
                            return o.createElement(o.Fragment, null, o.createElement(C, {
                                channelLogin: t.params.channelLogin,
                                selectedTab: i.MyExtensions,
                                showWhitelistedTab: n.isWhitelistedForExtensions()
                            }), o.createElement(en, null))
                        }, n.renderExtensionDiscoveryPage = function(e) {
                            var t = e.match;
                            return o.createElement(o.Fragment, null, o.createElement(C, {
                                channelLogin: t.params.channelLogin,
                                selectedTab: i.Discovery,
                                showWhitelistedTab: n.isWhitelistedForExtensions()
                            }), o.createElement(J, null))
                        }, n.renderWhitelistedExtensionsPage = function(e) {
                            var t = e.match;
                            return o.createElement(o.Fragment, null, o.createElement(C, {
                                channelLogin: t.params.channelLogin,
                                selectedTab: i.Whitelisted,
                                showWhitelistedTab: n.isWhitelistedForExtensions()
                            }), o.createElement(hn, null))
                        }, n.isWhitelistedForExtensions = function() {
                            var e = n.props.extensionDashboardRootData;
                            return !!(e.extensionCategory && e.extensionCategory.extensions && e.extensionCategory.extensions.totalCount > 0)
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        l.p.setPageTitle(Object(l.d)("Extensions", "ExtensionsDashboardRoot"))
                    }, n.prototype.render = function() {
                        var e = this.props.extensionDashboardRootData.currentUser,
                            n = e && e.roles && (e.roles.isAffiliate || e.roles.isPartner);
                        return o.createElement(c.b, {
                            suppressScrollX: !0,
                            "data-a-target": "extensions-dashboard-root-scroller"
                        }, o.createElement(g.Ya, {
                            padding: {
                                x: 4,
                                top: 2
                            }
                        }, n && o.createElement(y, null), o.createElement(r.a, null, o.createElement(s.a, {
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
                            component: un
                        }), o.createElement(s.a, {
                            exact: !0,
                            path: "/:channelLogin/dashboard/extensions",
                            render: this.renderExtensionDiscoveryPage
                        })), o.createElement(v, null)))
                    }, n
                }(o.Component),
                kn = Object(d.a)(En, {
                    name: "extensionDashboardRootData"
                })(fn);
            t.d(n, "ExtensionDashboardRoot", function() {
                return kn
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
                    return i.createElement(o.cc, {
                        childWidth: o.dc.Large,
                        gutterSize: o.ec.Small,
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
                        case o.z.IN_TEST:
                            n = Object(a.d)("TESTING", "ExtensionStatusPill");
                            break;
                        case o.z.READY_FOR_REVIEW:
                            n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                            break;
                        case o.z.IN_REVIEW:
                            n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                            break;
                        case o.z.REJECTED:
                            n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                            break;
                        case o.z.APPROVED:
                            n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                            break;
                        case o.z.DEPRECATED:
                            n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                            break;
                        case o.z.PENDING_ACTION:
                            n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                            break;
                        case o.z.UPLOADING:
                            n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                            break;
                        case o.z.ASSETS_UPLOADED:
                            n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                            break;
                        default:
                            n = ""
                    }
                    return i.createElement(s.hb, {
                        type: s.ib.Brand,
                        label: n
                    })
                };
            r.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
                return r
            })
        },
        AfzZ: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                o = t("/MKj"),
                s = t("cZKs"),
                r = t("kRBY"),
                l = t("Ue10"),
                c = t("1hWM"),
                d = t("oJmH"),
                u = t("mLw1"),
                m = t("/7QA"),
                p = t("8/mp"),
                v = t("qCDY"),
                g = t("1IJ0"),
                x = t("YyE3"),
                h = t("22qk"),
                E = t("5IFo"),
                f = function(e) {
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
                    return i.__extends(n, e), n.prototype.componentDidMount = function() {
                        var e = this.props,
                            n = e.extensionID,
                            t = e.extensionsForChannel,
                            i = n.split("-"),
                            a = i[0],
                            o = i[1];
                        t && !t.loading && t.installedExtensions && this.setState({
                            installation: this.findExtensionFromInstallations(t.installedExtensions)
                        }), Object(E.d)({
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
                            o = e.locale,
                            s = this.isLoading(),
                            r = n || "",
                            d = t || "",
                            u = null;
                        if (s) u = this.renderPlaceholders();
                        else {
                            if (!this.state.installation) return this.renderRedirect(d);
                            var x = this.state.installation,
                                h = x.extension;
                            u = a.createElement(l.Ya, {
                                fullWidth: !0
                            }, a.createElement(l.Ya, {
                                padding: {
                                    bottom: 1
                                }
                            }, a.createElement(l.G, {
                                row: !0,
                                border: !1
                            }, a.createElement(l.I, {
                                alt: h.name,
                                src: this.state.hasCardImageError ? m.a.defaultAvatarURL : h.iconUrl,
                                aspect: l.p.Aspect1x1,
                                size: l.J.Size6,
                                onError: this.onCardImageError
                            }), a.createElement(l.H, null, a.createElement(l.Ya, {
                                padding: 1
                            }, a.createElement(l.W, {
                                type: l.Wb.H4
                            }, h.name), a.createElement(l.W, {
                                type: l.Wb.Span,
                                color: l.O.Alt2
                            }, Object(m.d)("Created by {extensionAuthor}", {
                                extensionAuthor: h.authorName
                            }, "ExtensionConfigurePresentation")))))), a.createElement(l.Ya, null, a.createElement(v.a, {
                                channelID: r,
                                channelLogin: t,
                                className: "",
                                extensionMode: c.ExtensionMode.Config,
                                installation: x,
                                languageCode: i,
                                locale: o,
                                login: t,
                                loginID: r,
                                isPopout: !1
                            })))
                        }
                        var E = a.createElement(g.a, {
                            channelLogin: t,
                            showBackLink: !1,
                            title: Object(m.d)("Configure", "ExtensionConfigurePresentation")
                        });
                        return a.createElement(p.b, null, a.createElement(l.Ya, {
                            padding: 2
                        }, E, a.createElement(l.Fb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, u)))
                    }, n.prototype.findExtensionFromInstallations = function(e) {
                        var n = this;
                        return e.find(function(e) {
                            var t = e.extension;
                            return n.props.extensionID === t.clientId + "-" + t.version
                        })
                    }, n.prototype.renderPlaceholders = function() {
                        return a.createElement(l.Ya, {
                            fullWidth: !0
                        }, a.createElement(l.Ya, {
                            display: l.X.Flex,
                            alignItems: l.f.Center,
                            padding: {
                                y: 1
                            }
                        }, a.createElement(l.Ya, null, a.createElement(l.jb, {
                            width: 60,
                            height: 60
                        })), a.createElement(l.Ya, {
                            padding: {
                                left: 1
                            }
                        }, a.createElement(l.jb, {
                            lineCount: 2,
                            width: 200
                        }))))
                    }, n.prototype.isLoading = function() {
                        return !this.props.extensionsForChannel || !this.props.extensionsForChannel.installedExtensions
                    }, n.prototype.renderRedirect = function(e) {
                        return a.createElement(u.a, {
                            to: Object(h.e)(e)
                        })
                    }, n
                }(a.Component),
                k = Object(d.compose)(Object(x.a)({
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
                }))(f),
                b = (t("nH1N"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.channelID,
                            t = e.channelLogin,
                            i = e.extensionID,
                            o = e.languageCode,
                            r = e.locale,
                            c = e.onClose;
                        return a.createElement(l.Fb, {
                            background: l.r.Base,
                            className: "extension-configure-modal"
                        }, a.createElement(k, {
                            channelLogin: t,
                            channelID: n,
                            extensionID: i,
                            languageCode: o,
                            locale: r
                        }), a.createElement(s.a, {
                            closeOnBackdropClick: !0,
                            onClose: c
                        }))
                    }, n
                }(a.Component));
            var y = Object(o.connect)(function(e) {
                var n = Object(r.e)(e);
                return {
                    channelID: n && n.id,
                    languageCode: Object(r.b)(e),
                    locale: Object(r.d)(e)
                }
            })(b);
            t.d(n, !1, function() {
                return b
            }), t.d(n, "a", function() {
                return y
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 163
                }
            };
            t.loc.source = {
                body: 'query ExtensionDashboardRoot {\nextensionCategory(id: "whitelisted") {\nid\nextensions(first: 1) {\ntotalCount\n}\n}\ncurrentUser {\nid\nroles {\nisAffiliate\nisPartner\n}\n}\n}',
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
                        return a.createElement(c.Fb, {
                            border: !0,
                            background: c.r.Base,
                            padding: 1
                        }, a.createElement(c.Ja, null, a.createElement(c.P, {
                            cols: 8
                        }), a.createElement(c.P, {
                            cols: 4
                        }, a.createElement("form", {
                            onSubmit: this.onSubmit
                        }, a.createElement(c.wb, {
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
                    return a.createElement(l.Ya, null, a.createElement(l.W, null, Object(r.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
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
                return e.component && e.component.viewerURL && n.push(s.x.COMPONENT), e.panel && e.panel.viewerURL && n.push(s.x.PANEL), e.videoOverlay && e.videoOverlay.viewerURL && n.push(s.x.VIDEO_OVERLAY), n
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
            var m = ((i = {})[a.Previous] = d.ub.AngleLeft, i[a.Next] = d.ub.AngleRight, i),
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
                            return r.createElement(d.Ya, {
                                display: d.X.Flex,
                                alignItems: d.f.Center,
                                position: d.kb.Absolute,
                                attachTop: !0,
                                attachLeft: e && e === a.Previous,
                                attachRight: e && e === a.Next,
                                fullHeight: !0
                            }, r.createElement(d.Fb, {
                                className: u,
                                position: d.kb.Relative,
                                display: d.X.Flex,
                                borderRadius: d.x.Medium,
                                background: t ? d.r.Base : void 0
                            }, r.createElement(d.Va, {
                                ariaLabel: c[e],
                                blurAfterClick: !0,
                                "data-test-selector": e + "-button",
                                "data-a-target": e + "-button",
                                disabled: t,
                                onClick: i,
                                type: d.Wa.Base,
                                borderRadius: n.props.insetStyle ? d.x.None : d.x.Medium,
                                border: n.props.insetStyle
                            }, r.createElement(d.Fb, {
                                color: d.O.Link,
                                display: d.X.InlineFlex,
                                padding: {
                                    x: .5,
                                    y: 2
                                }
                            }, r.createElement(d.La, {
                                asset: m[e]
                            })))))
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
                        return r.createElement(d.Qa, o.__assign({}, this.props, {
                            position: d.kb.Relative
                        }), r.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, r.createElement(d.Ya, {
                            className: "media-carousel__child-container",
                            overflow: d.db.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, r.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, r.createElement(d.Qa, {
                            className: "media-carousel__content",
                            display: d.X.Flex,
                            flexWrap: d.Ba.NoWrap,
                            flexDirection: d.Aa.Row,
                            alignItems: d.f.Center,
                            "data-js-selector": "carousel-content"
                        }, r.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), r.createElement(d.Ya, {
                            className: "media-carousel__nav",
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            position: d.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), r.createElement(d.Ya, {
                            className: "media-carousel__nav",
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            position: d.kb.Absolute,
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
                    return s ? c = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : r && (c = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m.Ya, null, a.createElement(m.W, {
                        type: m.Wb.H5
                    }, l), a.createElement(m.Fb, {
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
                            type: m.Wb.P
                        }, t)
                    }, "ExtensionDeactivationWarning")), a.createElement(m.Ya, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.W, {
                        type: m.Wb.P
                    }, c))), a.createElement(m.Ya, {
                        display: m.X.Flex,
                        justifyContent: m.Xa.Center
                    }, a.createElement(m.Ya, {
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
                    return r ? c = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning") : l && (c = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning")), a.createElement(m.Ya, null, a.createElement(m.W, {
                        type: m.Wb.H5
                    }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementWarning")), a.createElement(m.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementWarning")), a.createElement(m.Ya, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                        extensionName: a.createElement(m.W, {
                            bold: !0,
                            type: m.Wb.Span
                        }, n),
                        anchorSlot: a.createElement(m.W, {
                            bold: !0,
                            type: m.Wb.Span,
                            transform: m.Vb.Uppercase
                        }, t)
                    }, "ExtensionReplacementWarning"))), a.createElement(m.W, {
                        type: m.Wb.P
                    }, c)), a.createElement(m.Ya, {
                        display: m.X.Flex,
                        justifyContent: m.Xa.Center
                    }, a.createElement(m.Ya, {
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
                    return s ? c = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : r && (c = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m.Ya, null, a.createElement(m.W, {
                        type: m.Wb.H5
                    }, l), a.createElement(m.Fb, {
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
                            type: m.Wb.P
                        }, t)
                    }, "ExtensionUninstallationWarning")), a.createElement(m.Ya, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.W, {
                        type: m.Wb.P
                    }, c))), a.createElement(m.Ya, {
                        display: m.X.Flex,
                        justifyContent: m.Xa.Center
                    }, a.createElement(m.Ya, {
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
                x = function(e) {
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
            x.displayName = "ExtensionDestructionWarningModalComponent";
            var h = function(e) {
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
                            e = a.createElement(x, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                extensionName: this.props.extensionName,
                                monetizationType: this.props.monetizationType,
                                onConfirm: this.onConfirm
                            });
                            break;
                        case d.a.Replace:
                            e = a.createElement(x, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                existingExtensionName: this.props.existingExtensionName,
                                existingMonetizationType: this.props.existingMonetizationType,
                                activationSlot: this.props.activationSlot,
                                onConfirm: this.props.onConfirm
                            });
                            break;
                        case d.a.Uninstall:
                            e = a.createElement(x, {
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
            var E = Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(h);
            t.d(n, !1, function() {
                return h
            }), t.d(n, "a", function() {
                return E
            })
        },
        d9uE: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("Ue10"),
                o = function() {
                    return i.createElement(a.Ya, {
                        display: a.X.Flex,
                        flexDirection: a.Aa.Column
                    }, i.createElement(a.jb, {
                        width: 300,
                        height: 200
                    }), i.createElement(a.Ya, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(a.jb, {
                        width: 250,
                        height: 15
                    })), i.createElement(a.Ya, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.jb, {
                        width: 140,
                        height: 15
                    })), i.createElement(a.Ya, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.jb, {
                        width: 60,
                        height: 15
                    })))
                };
            o.displayName = "ExtensionCardPlaceholder", t.d(n, "a", function() {
                return o
            })
        },
        dhGg: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var i = t("/7QA"),
                a = "freeway_extension_ids";

            function o() {
                return i.b.get(a, [])
            }
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
                        case a.x.COMPONENT:
                            t = n ? Object(i.d)("COMPONENT", "ExtensionAnchorType") : Object(i.d)("Component", "ExtensionAnchorType");
                            break;
                        case a.x.PANEL:
                            t = n ? Object(i.d)("PANEL", "ExtensionAnchorType") : Object(i.d)("Panel", "ExtensionAnchorType");
                            break;
                        case a.x.VIDEO_OVERLAY:
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
                    return i.createElement(a.Fb, {
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