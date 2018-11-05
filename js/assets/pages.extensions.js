(window.webpackJsonp = window.webpackJsonp || []).push([
    [62], {
        "+/wI": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("/MKj"),
                s = t("fvjX"),
                o = t("cZKs"),
                l = t("aCAx"),
                d = t("xPN0"),
                c = t("/7QA"),
                u = t("2xye"),
                m = t("22qk"),
                p = t("Ue10"),
                g = function(e) {
                    var n = e.closeModal,
                        t = e.extensionClientID,
                        r = e.extensionVersion,
                        s = e.login;
                    return a.createElement(p.Xa, null, a.createElement(p.W, {
                        type: p.Tb.H5
                    }, Object(c.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(p.Cb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.W, null, Object(c.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(p.Xa, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.W, null, Object(c.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(p.W, null, Object(c.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(p.Xa, {
                        display: p.X.Flex,
                        justifyContent: p.Wa.Center
                    }, a.createElement(p.Xa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(p.z, {
                        type: p.F.Hollow,
                        onClick: n
                    }, Object(c.d)("Continue Browsing", "ExtensionInstalledModal"))), a.createElement(p.z, {
                        linkTo: i.__assign({}, Object(m.b)(s, t, r), {
                            state: {
                                medium: u.PageviewMedium.ExtensionInstalledModal,
                                content: u.PageviewContent.ExtensionConfigureButton
                            }
                        }),
                        onClick: n
                    }, Object(c.d)("Configure", "ExtensionInstalledModal"))))
                };
            g.displayName = "ExtensionInstalledModalPresentation";
            var v = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(d.a, null, a.createElement(g, {
                        closeModal: this.props.closeModal,
                        extensionClientID: this.props.extensionClientID,
                        extensionVersion: this.props.extensionVersion,
                        login: this.props.login
                    }), a.createElement(o.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(a.Component);
            var E = Object(r.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(v);
            t.d(n, !1, function() {
                return v
            }), t.d(n, "a", function() {
                return E
            })
        },
        "/Qsj": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("1hWM"),
                a = t("/7QA"),
                r = function(e, n) {
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
        "0QYl": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("TSYQ"),
                r = t("1hWM"),
                s = t("q1tI"),
                o = t("/7QA"),
                l = t("qAxc"),
                d = t.n(l),
                c = t("DMoW"),
                u = t("2xye"),
                m = t("1Cad"),
                p = t("AN85"),
                g = t("OzNJ"),
                v = t("Ue10"),
                E = function(e) {
                    return e.type === g.b.Bits ? s.createElement(v.eb, {
                        label: Object(o.d)("BITS", "MonetizationPill")
                    }) : e.type === g.b.InExtensionPurchases ? s.createElement(v.eb, {
                        label: Object(o.d)("PURCHASES", "MonetizationPill")
                    }) : null
                };
            E.displayName = "MonetizationPill";
            var x, h = t("22qk"),
                k = t("dhGg"),
                b = t("5IFo"),
                f = t("Ar2k");
            t("EJuf");
            ! function(e) {
                e.InstallButton = "extension-card-install-button", e.InstalledIndicator = "extension-card-installed-indicator", e.Version = "extension-card-version", e.TestStatusDisclosure = "extension-card-test-status-disclosure"
            }(x || (x = {}));
            var y = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            imageURL: n.props.splashImageURL || n.props.iconURL || d.a,
                            isInstalling: !1
                        }, n.projectFreewayIDs = Object(k.a)(), n.renderHoverElement = function() {
                            var e = n.props,
                                t = e.extensionClientID,
                                i = e.extensionState,
                                a = e.extensionVersion,
                                r = e.trackingContext,
                                l = e.summary,
                                d = r.content,
                                m = r.contentIndex,
                                p = r.medium,
                                g = l;
                            return i !== c.x.RELEASED && l.length > 100 && (g = l.substring(0, 100) + "..."), s.createElement(v.Cb, {
                                className: "extension-card__thumbnail__details-preview",
                                background: v.r.Alt2,
                                position: v.hb.Absolute,
                                attachRight: !0,
                                attachTop: !0,
                                attachLeft: !0,
                                attachBottom: !0
                            }, s.createElement(v.Xa, {
                                display: v.X.Flex,
                                flexDirection: v.Aa.Column,
                                justifyContent: v.Wa.Between,
                                alignItems: v.f.Center,
                                padding: {
                                    x: 3,
                                    y: 2
                                },
                                fullHeight: !0
                            }, s.createElement(v.Xa, {
                                className: "extension-card__thumbnail__summary",
                                display: v.X.Flex,
                                flexDirection: v.Aa.Column,
                                justifyContent: v.Wa.Center,
                                overflow: v.cb.Hidden
                            }, s.createElement(v.W, {
                                type: v.Tb.P
                            }, g), i !== c.x.RELEASED && s.createElement(v.Xa, {
                                padding: {
                                    top: .5
                                }
                            }, s.createElement(v.W, {
                                "data-test-selector": x.TestStatusDisclosure,
                                type: v.Tb.P
                            }, Object(o.d)("This is a Test Extension; it has not been evaluated by Twitch in accordance with its policies.", "ExtensionCard"), s.createElement(v.Pa, {
                                padding: {
                                    left: .5
                                }
                            }, s.createElement("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                            }, Object(o.d)("Learn More.", "ExtensionCardTestDisclosure")))))), s.createElement(v.Xa, {
                                display: v.X.Flex,
                                flexWrap: v.Ba.NoWrap
                            }, s.createElement(v.Xa, null, s.createElement(v.z, {
                                type: v.F.Hollow,
                                linkTo: {
                                    pathname: Object(h.d)(t, a),
                                    state: {
                                        medium: p,
                                        content: d || u.PageviewContent.ExtensionCard,
                                        content_index: m
                                    }
                                }
                            }, Object(o.d)("Details", "ExtensionCard"))), s.createElement(v.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, n.renderInstallationButton()))))
                        }, n.renderInstallationButton = function() {
                            var e = n.state.isInstalling,
                                t = n.props,
                                i = t.hasInstallPermission;
                            if (t.isInstalled) return s.createElement(v.z, {
                                disabled: !0
                            }, s.createElement(v.Xa, {
                                display: v.X.Flex,
                                alignItems: v.f.Center
                            }, s.createElement(v.qb, {
                                asset: v.rb.Check
                            }), s.createElement(v.Xa, {
                                padding: {
                                    left: .5
                                }
                            }, Object(o.d)("Installed", "ExtensionCard"))));
                            var a = Object(o.d)("Install", "ExtensionCard");
                            return !i || n.isMissingCheeringRequirement() ? s.createElement(v.Xa, {
                                refDelegate: n.setRef
                            }, s.createElement(v.z, {
                                disabled: !0,
                                "data-test-selector": x.InstallButton
                            }, a)) : s.createElement(v.z, {
                                "data-test-selector": x.InstallButton,
                                state: e ? v.E.Loading : v.E.Default,
                                onClick: n.installExtension
                            }, a)
                        }, n.renderAnchorTypePills = function() {
                            var e = n.props,
                                t = e.supportedAnchors,
                                i = e.supportedPlatforms,
                                a = t.map(function(e) {
                                    return s.createElement(v.Xa, {
                                        key: e,
                                        display: v.X.InlineBlock,
                                        padding: {
                                            right: .5
                                        }
                                    }, s.createElement(m.a, {
                                        anchorType: e
                                    }))
                                });
                            return i.includes(r.ExtensionPlatform.Mobile) && a.push(s.createElement(v.Xa, {
                                key: "mobile",
                                display: v.X.InlineBlock,
                                padding: {
                                    right: .5
                                }
                            }, s.createElement(m.a, {
                                mobile: !0
                            }))), a
                        }, n.installExtension = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, a, r, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (e = this.props, n = e.categoryID, t = e.extensionClientID, a = e.extensionID, r = e.extensionVersion, !(s = e.installExtension)) return [3, 5];
                                            this.setState({
                                                isInstalling: !0
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, s(a)];
                                        case 2:
                                            return i.sent(), Object(b.e)({
                                                categoryID: n,
                                                extensionClientID: t,
                                                extensionVersion: r
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
                                imageURL: d.a
                            })
                        }, n.setRef = function(e) {
                            return n.installButtonRef = e
                        }, n.onMouseEnter = function() {
                            if (n.installButtonRef) {
                                var e = void 0;
                                if (n.props.hasInstallPermission) {
                                    if (!n.isMissingCheeringRequirement()) return;
                                    e = Object(o.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionCard")
                                } else e = Object(o.d)("You do not have the proper permissions to install this extension.", "ExtensionCard");
                                n.props.tooltipLayer.show({
                                    from: n.installButtonRef,
                                    label: e,
                                    align: v.Xb.Center,
                                    direction: v.Yb.Top
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
                            r = n.extensionName,
                            o = n.extensionState,
                            l = n.extensionVersion,
                            d = n.iconURL,
                            u = n.isInstalled,
                            m = n.monetizationType,
                            g = d && e === d;
                        return s.createElement(v.Xa, {
                            className: a("extension-card", i)
                        }, s.createElement(v.G, null, s.createElement(v.Cb, {
                            className: "extension-card__thumbnail",
                            border: !0,
                            background: v.r.AccentAlt2,
                            position: v.hb.Relative,
                            overflow: v.cb.Hidden
                        }, s.createElement(v.o, {
                            ratio: v.p.Aspect3x2
                        }, s.createElement(v.Cb, {
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Center,
                            position: v.hb.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, g ? s.createElement(v.S, {
                            className: "extension-card__thumbnail__icon",
                            src: e,
                            alt: r,
                            onError: this.onCardImageError
                        }) : s.createElement(v.Pa, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(v.S, {
                            src: e,
                            alt: r,
                            onError: this.onCardImageError
                        }))), this.renderHoverElement()), u && s.createElement(v.Cb, {
                            display: v.X.InlineFlex,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Center,
                            background: v.r.Accent,
                            position: v.hb.Absolute,
                            color: v.O.Overlay,
                            attachRight: !0,
                            attachTop: !0
                        }, s.createElement(v.qb, {
                            "data-test-selector": x.InstalledIndicator,
                            asset: v.rb.Check
                        })), o !== c.x.RELEASED && s.createElement(v.Cb, {
                            attachBottom: !0,
                            attachRight: !0,
                            alignItems: v.f.Center,
                            background: v.r.Accent,
                            color: v.O.Overlay,
                            "data-test-selector": x.Version,
                            display: v.X.InlineFlex,
                            justifyContent: v.Wa.Center,
                            padding: {
                                x: .5
                            },
                            position: v.hb.Absolute
                        }, l)), s.createElement(v.Xa, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(v.W, {
                            type: v.Tb.H6
                        }, r), s.createElement(v.W, {
                            type: v.Tb.Span,
                            color: v.O.Alt2,
                            fontSize: v.Ca.Size7
                        }, t), s.createElement(v.Xa, {
                            padding: {
                                top: .5
                            }
                        }, this.renderAnchorTypePills(), null !== m && s.createElement(v.Xa, {
                            key: "monetization-pill",
                            display: v.X.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(E, {
                            type: m
                        })), o !== c.x.RELEASED && s.createElement(p.a, {
                            state: o
                        })))))
                    }, n.prototype.isMissingCheeringRequirement = function() {
                        var e = this.props,
                            n = e.cheeringEnabled,
                            t = e.extensionClientID,
                            i = e.extensionState,
                            a = e.monetizationType;
                        return !this.projectFreewayIDs.includes(t) && (i === c.x.RELEASED && a === g.b.Bits && !n)
                    }, n
                }(s.Component),
                S = Object(f.c)()(y);
            t.d(n, !1, function() {
                return x
            }), t.d(n, !1, function() {
                return y
            }), t.d(n, "a", function() {
                return S
            })
        },
        "1Cad": function(e, n, t) {
            "use strict";
            var i = t("1hWM"),
                a = t("q1tI"),
                r = t("s6gS"),
                s = t("/Qsj"),
                o = t("Ue10"),
                l = function(e) {
                    return e.anchorType ? a.createElement(o.eb, {
                        label: Object(r.a)(e.anchorType, !0)
                    }) : e.mobile ? a.createElement(o.eb, {
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
                r = t("9C/b"),
                s = t("/7QA"),
                o = t("2xye"),
                l = t("22qk"),
                d = t("Ue10"),
                c = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.internalTrackingMediums = [o.PageviewMedium.ExtensionCategory, o.PageviewMedium.ExtensionConfiguration, o.PageviewMedium.ExtensionDiscovery, o.PageviewMedium.ExtensionInstalledModal, o.PageviewMedium.ExtensionManagement, o.PageviewMedium.ExtensionManagerCarousel, o.PageviewMedium.ExtensionPage, o.PageviewMedium.ExtensionSearch], n.goBack = function() {
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
                        return a.createElement(d.Cb, {
                            background: d.r.Alt2,
                            display: d.X.Flex,
                            alignItems: d.f.Stretch
                        }, t && a.createElement(d.Cb, {
                            border: !0,
                            display: d.X.Flex,
                            flexGrow: 0
                        }, a.createElement(d.A, {
                            ariaLabel: Object(s.d)("Navigate to previous page", "ExtensionPageHeader"),
                            size: d.B.Large,
                            icon: d.rb.AngleLeft,
                            onClick: this.goBack
                        })), a.createElement(d.Cb, {
                            border: !0,
                            display: d.X.Flex,
                            flexGrow: 1,
                            padding: 2
                        }, a.createElement(d.W, {
                            type: d.Tb.H4
                        }, n)))
                    }, n
                }(a.Component),
                u = Object(r.a)(c);
            t.d(n, !1, function() {
                return c
            }), t.d(n, "a", function() {
                return u
            })
        },
        "22qk": function(e, n, t) {
            "use strict";

            function i(e, n) {
                return "/ext/" + u(e, n)
            }

            function a(e, n, t) {
                return {
                    pathname: "" + s(e),
                    search: "?configure=true&extensionID=" + u(n, t)
                }
            }

            function r(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function s(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function o(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function l(e, n) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: n
                }
            }

            function d(e) {
                return "/ext/categories/" + e
            }

            function c(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function u(e, n) {
                return n ? e + "-" + n : e
            }
            t.d(n, "d", function() {
                return i
            }), t.d(n, "b", function() {
                return a
            }), t.d(n, "c", function() {
                return r
            }), t.d(n, "e", function() {
                return s
            }), t.d(n, "h", function() {
                return o
            }), t.d(n, "f", function() {
                return l
            }), t.d(n, "a", function() {
                return d
            }), t.d(n, "g", function() {
                return c
            })
        },
        "5IFo": function(e, n, t) {
            "use strict";
            t.d(n, "e", function() {
                return s
            }), t.d(n, "d", function() {
                return o
            }), t.d(n, "b", function() {
                return d
            }), t.d(n, "a", function() {
                return c
            }), t.d(n, "c", function() {
                return u
            }), t.d(n, "g", function() {
                return p
            }), t.d(n, "f", function() {
                return g
            });
            var i, a = t("/7QA"),
                r = t("2xye");

            function s(e) {
                var n = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                a.o.track(r.SpadeEventType.ExtensionInstall, n)
            }

            function o(e) {
                var n = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                a.o.track(r.SpadeEventType.ExtensionConfigureView, n)
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

            function d(e) {
                a.o.track(r.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Open, e))
            }

            function c(e) {
                a.o.track(r.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Close, e))
            }

            function u(e) {
                a.o.track(r.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Save, e))
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
                a.o.track(r.SpadeEventType.ExtensionPopoutClicked, m(e))
            }

            function g(e) {
                a.o.track(r.SpadeEventType.ExtensionPopinClicked, m(e))
            }! function(e) {
                e.Open = "open", e.Close = "close", e.Save = "save"
            }(i || (i = {}))
        },
        "8xJJ": function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("8/mp"),
                r = t("Ue10"),
                s = function(e) {
                    var n = e.children,
                        t = e.loadMore,
                        s = e.loadMoreEnabled;
                    return i.createElement(r.Zb, {
                        childWidth: r.ac.Large,
                        gutterSize: r.bc.Small,
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
                r = t("DMoW"),
                s = t("Ue10"),
                o = function(e) {
                    var n;
                    switch (e.state) {
                        case r.x.IN_TEST:
                            n = Object(a.d)("TESTING", "ExtensionStatusPill");
                            break;
                        case r.x.READY_FOR_REVIEW:
                            n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                            break;
                        case r.x.IN_REVIEW:
                            n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                            break;
                        case r.x.REJECTED:
                            n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                            break;
                        case r.x.APPROVED:
                            n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                            break;
                        case r.x.DEPRECATED:
                            n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                            break;
                        case r.x.PENDING_ACTION:
                            n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                            break;
                        case r.x.UPLOADING:
                            n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                            break;
                        case r.x.ASSETS_UPLOADED:
                            n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                            break;
                        default:
                            n = ""
                    }
                    return i.createElement(s.eb, {
                        type: s.fb.Brand,
                        label: n
                    })
                };
            o.displayName = "ExtensionStatusPill", t.d(n, "a", function() {
                return o
            })
        },
        Dm6d: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionCategoryPage"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "categoryID"
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
                                value: "includeCurrentUser"
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
                                            value: "includeCurrentUser"
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
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "categoryID"
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
                                        value: "description"
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
                                                        value: "ExtensionCategoryPage_ExtensionEdge"
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
                        value: "ExtensionCategoryPage_ExtensionEdge"
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
                    end: 738
                }
            };
            t.loc.source = {
                body: "query ExtensionCategoryPage($categoryID: ID! $includeCurrentUser: Boolean! $afterCursor: Cursor) {\ncurrentUser @include(if: $includeCurrentUser) {\nid\ncheer {\nid\n}\nlogin\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\nextensionCategory(id: $categoryID) {\nid\ndescription\nname\nextensions(first: 20 after: $afterCursor) {\nedges {\n...ExtensionCategoryPage_ExtensionEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\nfragment ExtensionCategoryPage_ExtensionEdge on ExtensionEdge {\ncursor\nnode {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nisBitsEnabled\nname\nself {\ncanInstall\n}\nsku\nstate\nsummary\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        EJuf: function(e, n, t) {},
        Fb0V: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionDetailsPage"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "extensionID"
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
                                value: "extensionVersion"
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
                                value: "isLoggedIn"
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
                                            value: "isLoggedIn"
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
                                value: "extension"
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
                                        value: "extensionID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "version"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "extensionVersion"
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
                }],
                loc: {
                    start: 0,
                    end: 584
                }
            };
            t.loc.source = {
                body: "query ExtensionDetailsPage($extensionID: ID! $extensionVersion: String $isLoggedIn: Boolean!) {\ncurrentUser @include(if: $isLoggedIn) {\nid\ncheer {\nid\n}\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\nextension(id: $extensionID version: $extensionVersion) {\nid\nauthorName\nclientID\ndescription\niconURLs {\nsquare100\n}\nhasChatSupport\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nself {\ncanInstall\n}\nsku\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        G1aL: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("9C/b"),
                s = t("/7QA"),
                o = t("2xye"),
                l = t("22qk"),
                d = t("Ue10"),
                c = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            searchTerm: n.props.initialSearchTerm || ""
                        }, n.onSubmit = function(e) {
                            e.preventDefault(), n.state.searchTerm && n.props.history.push(Object(l.g)(n.state.searchTerm), {
                                medium: n.props.trackingContext.medium,
                                content: o.PageviewContent.ExtensionSearchBar
                            })
                        }, n.onSearchInputChange = function(e) {
                            n.setState({
                                searchTerm: e.currentTarget.value
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(d.Cb, {
                            border: !0,
                            background: d.r.Base,
                            padding: 1
                        }, a.createElement(d.Ja, null, a.createElement(d.P, {
                            cols: 8
                        }), a.createElement(d.P, {
                            cols: 4
                        }, a.createElement("form", {
                            onSubmit: this.onSubmit
                        }, a.createElement(d.tb, {
                            placeholder: Object(s.d)("Search all extensions", "ExtensionSearchBar"),
                            value: this.state.searchTerm,
                            onChange: this.onSearchInputChange
                        })))))
                    }, n
                }(a.Component),
                u = Object(r.a)(c);
            t.d(n, !1, function() {
                return c
            }), t.d(n, "a", function() {
                return u
            })
        },
        Hhhw: function(e, n, t) {},
        J4PI: function(e, n, t) {},
        JxAY: function(e, n, t) {},
        MATl: function(e, n, t) {},
        MM5q: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("cZKs"),
                s = t("xPN0"),
                o = t("/7QA"),
                l = t("Ue10"),
                d = function() {
                    return a.createElement(l.Xa, null, a.createElement(l.W, null, Object(o.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
                };
            d.displayName = "ExtensionErrorModalPresentation";
            var c = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        return a.createElement(s.a, null, a.createElement(d, null), a.createElement(r.a, {
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
        OzNJ: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return i
            }), t.d(n, "a", function() {
                return a
            }), t.d(n, "e", function() {
                return o
            }), t.d(n, "f", function() {
                return l
            }), t.d(n, "g", function() {
                return d
            }), t.d(n, "c", function() {
                return c
            }), t.d(n, "d", function() {
                return u
            });
            var i, a, r = t("1hWM"),
                s = t("DMoW");

            function o(e) {
                return e.isBitsEnabled ? i.Bits : e.vendorCode && e.sku ? i.InExtensionPurchases : null
            }

            function l(e) {
                var n = [];
                return e.component && e.component.viewerURL && n.push(s.v.COMPONENT), e.panel && e.panel.viewerURL && n.push(s.v.PANEL), e.videoOverlay && e.videoOverlay.viewerURL && n.push(s.v.VIDEO_OVERLAY), n
            }

            function d(e) {
                var n = [r.ExtensionPlatform.Web];
                return e.mobile && e.mobile.viewerURL && n.push(r.ExtensionPlatform.Mobile), n
            }

            function c(e, n) {
                return e + ":" + n
            }

            function u(e) {
                return c(e.extension.id, e.extension.version)
            }! function(e) {
                e[e.Bits = 0] = "Bits", e[e.InExtensionPurchases = 1] = "InExtensionPurchases"
            }(i || (i = {})),
            function(e) {
                e[e.Deactivate = 0] = "Deactivate", e[e.Replace = 1] = "Replace", e[e.Uninstall = 2] = "Uninstall"
            }(a || (a = {}))
        },
        VQbD: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return p
            });
            var i, a, r = t("mrSG"),
                s = t("TSYQ"),
                o = t("q1tI"),
                l = t("/7QA"),
                d = t("GnwI"),
                c = t("Ue10"),
                u = (t("J4PI"), "[data-js-selector=carousel-content]");
            ! function(e) {
                e.Previous = "previous", e.Next = "next"
            }(a || (a = {}));
            var m = ((i = {})[a.Previous] = c.rb.AngleLeft, i[a.Next] = c.rb.AngleRight, i),
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
                            var r, d = ((r = {})[a.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), r[a.Next] = Object(l.d)("next", "MediaCarouselNavButton"), r),
                                u = s("media-carousel__button", {
                                    "media-carousel__button--previous": e === a.Previous,
                                    "media-carousel__button--next": e === a.Next,
                                    "media-carousel__button--disabled": t
                                }, {
                                    "media-carousel__button--inset": !0 === n.props.insetStyle
                                });
                            return o.createElement(c.Xa, {
                                className: u,
                                position: c.hb.Relative,
                                display: c.X.Flex,
                                alignItems: c.f.Stretch
                            }, o.createElement(c.A, {
                                "data-test-selector": e + "-button",
                                "data-a-target": e + "-button",
                                onClick: i,
                                disabled: t,
                                ariaLabel: d[e],
                                icon: m[e],
                                size: c.B.Large
                            }))
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        this.state.childrenRendered || null === this.props.items || this.setState({
                            childrenRendered: !0
                        })
                    }, n.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onResize)
                    }, n.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onResize)
                    }, n.prototype.render = function() {
                        return o.createElement(c.Pa, r.__assign({}, this.props, {
                            position: c.hb.Relative
                        }), o.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, o.createElement(c.Xa, {
                            className: "media-carousel__child-container",
                            overflow: c.cb.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, o.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, o.createElement(c.Pa, {
                            className: "media-carousel__content",
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            flexDirection: c.Aa.Row,
                            alignItems: c.f.Center,
                            "data-js-selector": "carousel-content"
                        }, o.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), o.createElement(c.Xa, {
                            className: "media-carousel__nav",
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            position: c.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(c.Xa, {
                            className: "media-carousel__nav",
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            position: c.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                    }, n = r.__decorate([Object(d.b)("MediaCarousel", {
                        autoReportInteractive: !0
                    })], n)
                }(o.Component)
        },
        Z5H4: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                a = t("q1tI"),
                r = t("/MKj"),
                s = t("fvjX"),
                o = t("cZKs"),
                l = t("aCAx"),
                d = t("xPN0"),
                c = t("OzNJ"),
                u = t("/7QA"),
                m = t("Ue10"),
                p = function(e) {
                    var n = e.closeModal,
                        t = e.extensionName,
                        i = e.monetizationType,
                        r = e.onConfirm,
                        s = i === c.b.InExtensionPurchases,
                        o = i === c.b.Bits,
                        l = Object(u.d)("Are you sure you want to deactivate?", "ExtensionDeactivationWarning"),
                        d = l;
                    return s ? d = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m.Xa, null, a.createElement(m.W, {
                        type: m.Tb.H5
                    }, l), a.createElement(m.Cb, {
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
                            type: m.Tb.P
                        }, t)
                    }, "ExtensionDeactivationWarning")), a.createElement(m.Xa, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.W, {
                        type: m.Tb.P
                    }, d))), a.createElement(m.Xa, {
                        display: m.X.Flex,
                        justifyContent: m.Wa.Center
                    }, a.createElement(m.Xa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.z, {
                        type: m.F.Hollow,
                        onClick: n
                    }, Object(u.d)("Cancel", "ExtensionDeactivationWarning"))), a.createElement(m.z, {
                        onClick: r
                    }, Object(u.d)("Deactivate", "ExtensionDeactivationWarning"))))
                },
                g = function(e) {
                    var n = e.existingExtensionName,
                        t = e.activationSlot,
                        i = e.existingMonetizationType,
                        r = e.closeModal,
                        s = e.onConfirm,
                        o = i === c.b.InExtensionPurchases,
                        l = i === c.b.Bits,
                        d = Object(u.d)("Are you sure you want to deactivate?", "ExtensionReplacementWarning");
                    return o ? d = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning") : l && (d = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning")), a.createElement(m.Xa, null, a.createElement(m.W, {
                        type: m.Tb.H5
                    }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementWarning")), a.createElement(m.Cb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementWarning")), a.createElement(m.Xa, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.W, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                        extensionName: a.createElement(m.W, {
                            bold: !0,
                            type: m.Tb.Span
                        }, n),
                        anchorSlot: a.createElement(m.W, {
                            bold: !0,
                            type: m.Tb.Span,
                            transform: m.Sb.Uppercase
                        }, t)
                    }, "ExtensionReplacementWarning"))), a.createElement(m.W, {
                        type: m.Tb.P
                    }, d)), a.createElement(m.Xa, {
                        display: m.X.Flex,
                        justifyContent: m.Wa.Center
                    }, a.createElement(m.Xa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.z, {
                        type: m.F.Hollow,
                        onClick: r
                    }, Object(u.d)("Cancel", "ExtensionReplacementWarning"))), a.createElement(m.z, {
                        onClick: s
                    }, Object(u.d)("Replace", "ExtensionReplacementWarning"))))
                };
            g.displayName = "ExtensionReplacementWarning";
            var v = function(e) {
                    var n = e.closeModal,
                        t = e.extensionName,
                        i = e.monetizationType,
                        r = e.onConfirm,
                        s = i === c.b.InExtensionPurchases,
                        o = i === c.b.Bits,
                        l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                        d = l;
                    return s ? d = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m.Xa, null, a.createElement(m.W, {
                        type: m.Tb.H5
                    }, l), a.createElement(m.Cb, {
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
                            type: m.Tb.P
                        }, t)
                    }, "ExtensionUninstallationWarning")), a.createElement(m.Xa, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.W, {
                        type: m.Tb.P
                    }, d))), a.createElement(m.Xa, {
                        display: m.X.Flex,
                        justifyContent: m.Wa.Center
                    }, a.createElement(m.Xa, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(m.z, {
                        type: m.F.Hollow,
                        onClick: n
                    }, Object(u.d)("Cancel", "ExtensionUninstallationWarning"))), a.createElement(m.z, {
                        onClick: r
                    }, Object(u.d)("Uninstall", "ExtensionUninstallationWarning"))))
                },
                E = function(e) {
                    switch (e.destructionType) {
                        case c.a.Deactivate:
                            return a.createElement(p, {
                                closeModal: e.closeModal,
                                extensionName: e.extensionName,
                                monetizationType: e.monetizationType,
                                onConfirm: e.onConfirm
                            });
                        case c.a.Replace:
                            return a.createElement(g, {
                                closeModal: e.closeModal,
                                existingExtensionName: e.existingExtensionName,
                                existingMonetizationType: e.existingMonetizationType,
                                activationSlot: e.activationSlot,
                                onConfirm: e.onConfirm
                            });
                        case c.a.Uninstall:
                            return a.createElement(v, {
                                closeModal: e.closeModal,
                                extensionName: e.extensionName,
                                monetizationType: e.monetizationType,
                                onConfirm: e.onConfirm
                            });
                        default:
                            return null
                    }
                };
            E.displayName = "ExtensionDestructionWarningModalComponent";
            var x = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onConfirm = function() {
                        n.props.onConfirm(), n.props.closeModal()
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = null;
                    switch (this.props.destructionType) {
                        case c.a.Deactivate:
                            e = a.createElement(E, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                extensionName: this.props.extensionName,
                                monetizationType: this.props.monetizationType,
                                onConfirm: this.onConfirm
                            });
                            break;
                        case c.a.Replace:
                            e = a.createElement(E, {
                                closeModal: this.props.closeModal,
                                destructionType: this.props.destructionType,
                                existingExtensionName: this.props.existingExtensionName,
                                existingMonetizationType: this.props.existingMonetizationType,
                                activationSlot: this.props.activationSlot,
                                onConfirm: this.props.onConfirm
                            });
                            break;
                        case c.a.Uninstall:
                            e = a.createElement(E, {
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
            var h = Object(r.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(x);
            t.d(n, !1, function() {
                return x
            }), t.d(n, "a", function() {
                return h
            })
        },
        bwzz: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionDetailsPage_UninstallExtension"
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
                    end: 128
                }
            };
            t.loc.source = {
                body: "mutation ExtensionDetailsPage_UninstallExtension ($input: UninstallExtensionInput!) {\nuninstallExtension(input: $input) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        cVuv: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ExtensionSearchPage"
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
                                value: "includeCurrentUser"
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
                                                value: "ExtensionSearchPage_ExtensionEdge"
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
                                }]
                            }
                        }, {
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
                                            value: "includeCurrentUser"
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
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ExtensionSearchPage_ExtensionEdge"
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
                    end: 704
                }
            };
            t.loc.source = {
                body: "query ExtensionSearchPage($afterCursor: Cursor $search: String $includeCurrentUser: Boolean!) {\nextensions(first: 20 after: $afterCursor search: $search) {\nedges {\n...ExtensionSearchPage_ExtensionEdge\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\ncurrentUser @include(if: $includeCurrentUser) {\nid\ncheer {\nid\n}\nlogin\ninstalledExtensions {\nid\nextension {\nid\n}\n}\n}\n}\nfragment ExtensionSearchPage_ExtensionEdge on ExtensionEdge {\ncursor\nnode {\nid\nauthorName\nclientID\niconURLs {\ndiscoverySplash\nsquare100\n}\nisBitsEnabled\nname\nself {\ncanInstall\n}\nsku\nstate\nsummary\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        d9uE: function(e, n, t) {
            "use strict";
            var i = t("q1tI"),
                a = t("Ue10"),
                r = function() {
                    return i.createElement(a.Xa, {
                        display: a.X.Flex,
                        flexDirection: a.Aa.Column
                    }, i.createElement(a.gb, {
                        width: 300,
                        height: 200
                    }), i.createElement(a.Xa, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(a.gb, {
                        width: 250,
                        height: 15
                    })), i.createElement(a.Xa, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.gb, {
                        width: 140,
                        height: 15
                    })), i.createElement(a.Xa, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.gb, {
                        width: 60,
                        height: 15
                    })))
                };
            r.displayName = "ExtensionCardPlaceholder", t.d(n, "a", function() {
                return r
            })
        },
        dhGg: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("/7QA"),
                a = "freeway_extension_ids";

            function r() {
                return i.b.get(a, [])
            }
        },
        lQdQ: function(e, n, t) {
            "use strict";
            t.r(n);
            var i, a = t("q1tI"),
                r = t("4p7I"),
                s = t("jKe7"),
                o = t("mrSG"),
                l = t("/MKj"),
                d = t("fvjX"),
                c = t("1/iK"),
                u = t("aCAx"),
                m = t("y5D0"),
                p = t("kRBY"),
                g = t("MM5q"),
                v = t("+/wI"),
                E = t("/7QA"),
                x = t("ZDlU"),
                h = t("LA8z"),
                k = t("4VQm"),
                b = t("yR8l"),
                f = t("V+GM"),
                y = t("geRD"),
                S = t("NvVO"),
                N = t("2xye"),
                C = t("0QYl"),
                I = t("d9uE"),
                D = t("8xJJ"),
                O = t("1IJ0"),
                w = t("OzNJ"),
                P = t("22qk"),
                T = t("vYrU"),
                j = t("GnwI"),
                F = t("Ue10"),
                L = t("yG7w"),
                R = t("Dm6d");
            ! function(e) {
                e.ErrorMessage = "extension-category-error-message"
            }(i || (i = {}));
            var U = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.canLoadMoreExtensions = function() {
                            var e = n.props.extensionCategoryPageData,
                                t = e.error,
                                i = e.extensionCategory,
                                a = e.loading;
                            return !(!i || !i.extensions) && (!a && !t && i.extensions.pageInfo.hasNextPage)
                        }, n.loadMoreExtensions = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, i, a, r;
                                return o.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return e = this.props, n = e.extensionCategoryPageData, t = e.isLoggedIn, i = e.match, a = n.error, r = n.extensionCategory, n.loading || a || !r || !r.extensions ? [3, 2] : [4, n.fetchMore({
                                                query: R,
                                                variables: {
                                                    afterCursor: r.extensions.edges[r.extensions.edges.length - 1].cursor,
                                                    categoryID: i.params.categoryID,
                                                    includeCurrentUser: t
                                                },
                                                updateQuery: function(e, n) {
                                                    var t = n.fetchMoreResult;
                                                    return e.extensionCategory && e.extensionCategory.extensions && t.extensionCategory && t.extensionCategory.extensions ? o.__assign({}, e, {
                                                        extensionCategory: o.__assign({}, t.extensionCategory, {
                                                            extensions: o.__assign({}, t.extensionCategory.extensions, {
                                                                edges: Object(y.c)(e.extensionCategory.extensions.edges, t.extensionCategory.extensions.edges)
                                                            })
                                                        })
                                                    }) : e
                                                }
                                            })];
                                        case 1:
                                            s.sent(), s.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, n.installExtension = function(e) {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var n, t, i, a, r, s, l, d, c, u, m;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (n = this.props, t = n.extensionCategoryPageData, i = n.installExtension, a = n.isLoggedIn, r = n.match, s = n.showExtensionErrorModal, l = n.showExtensionInstalledModal, d = r.params.categoryID, !(c = t.currentUser) || !c.id || !c.login) return [2];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, i(Object(y.a)({
                                                channelID: c.id,
                                                extensionID: e
                                            }))];
                                        case 2:
                                            return (u = o.sent().data).installExtension && u.installExtension.installedExtension && (m = u.installExtension.installedExtension, Object(y.e)(R, {
                                                categoryID: d,
                                                includeCurrentUser: a
                                            }, function(e) {
                                                return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(m), e
                                            }), l({
                                                extensionClientID: m.extension.clientID,
                                                extensionVersion: m.extension.version,
                                                login: c.login
                                            })), [3, 4];
                                        case 3:
                                            return o.sent(), s(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return o.__extends(n, e), n.prototype.componentDidUpdate = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.componentDidMount = function() {
                        this.checkAndReportPageInteractive()
                    }, n.prototype.render = function() {
                        var e = this.props,
                            n = e.isLoggedIn,
                            t = e.extensionCategoryPageData,
                            r = t.currentUser,
                            s = t.error,
                            o = t.extensionCategory,
                            l = t.loading,
                            d = [];
                        if (l && !o)
                            for (var c = 0; c < 16; c++) d.push(a.createElement(F.Xa, {
                                key: c,
                                padding: 1
                            }, a.createElement(I.a, null)));
                        else {
                            if (!l && !o && s) return a.createElement(x.a, {
                                message: Object(E.d)("Something went wrong.", "ExtensionCategoryPageComponent")
                            });
                            if (!(l || o || s)) return a.createElement(h.a, null, r && r.login && a.createElement(F.z, {
                                linkTo: Object(P.c)(r.login)
                            }, Object(E.d)("Browse extensions", "PageNotFound")));
                            o && o.extensions && (d = o.extensions.edges.map(this.renderCard, this))
                        }
                        var u = "",
                            m = a.createElement(F.Xa, {
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(F.gb, {
                                height: 16,
                                width: 360
                            }));
                        return o && (o.name && (u = o.name), o.description && (m = a.createElement(F.W, {
                            color: F.O.Alt,
                            fontSize: F.Ca.Size5,
                            type: F.Tb.P
                        }, o.description))), a.createElement(k.b, null, a.createElement(F.Xa, {
                            padding: 4
                        }, a.createElement(O.a, {
                            channelLogin: r && r.login,
                            showBackLink: n,
                            title: u
                        }), a.createElement(F.Cb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, a.createElement(F.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, m), a.createElement(D.a, {
                            loadMoreEnabled: this.canLoadMoreExtensions(),
                            loadMore: this.loadMoreExtensions
                        }, d), s && a.createElement(F.W, {
                            "data-test-selector": i.ErrorMessage
                        }, Object(E.d)("We're having trouble fetching extensions.", "ExtensionCategoryPage")))))
                    }, n.prototype.renderCard = function(e) {
                        var n = this.props,
                            t = n.extensionCategoryPageData,
                            i = n.match,
                            r = e.node;
                        return a.createElement(F.Pa, {
                            key: r.id,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(C.a, {
                            authorName: r.authorName,
                            categoryID: i.params.categoryID,
                            cheeringEnabled: Object(T.a)(t.currentUser),
                            extensionClientID: r.clientID,
                            extensionID: r.id,
                            extensionName: r.name,
                            extensionVersion: r.version,
                            hasInstallPermission: null !== r.self && r.self.canInstall,
                            splashImageURL: r.iconURLs.discoverySplash,
                            iconURL: r.iconURLs.square100,
                            monetizationType: Object(w.e)(r),
                            isInstalled: this.isExtensionInstalled(r.id),
                            installExtension: this.props.isLoggedIn ? this.installExtension : this.props.showLoginModal,
                            extensionState: r.state,
                            trackingContext: {
                                medium: N.PageviewMedium.ExtensionCategory
                            },
                            summary: r.summary,
                            supportedAnchors: Object(w.f)(r.views),
                            supportedPlatforms: Object(w.g)(r.views)
                        }))
                    }, n.prototype.isExtensionInstalled = function(e) {
                        var n = this.props.extensionCategoryPageData.currentUser;
                        return !(!n || !n.installedExtensions) && (n && n.installedExtensions && n.installedExtensions.some(function(n) {
                            return n.extension.id === e
                        }))
                    }, n.prototype.checkAndReportPageInteractive = function() {
                        var e = this.props,
                            n = e.extensionCategoryPageData,
                            t = e.latencyTracking;
                        n.loading || t.reportInteractive()
                    }, n
                }(a.Component),
                _ = Object(d.compose)(Object(j.b)("ExtensionCategoryPage", {
                    destination: S.a.ExtensionsCategory
                }), Object(f.a)({
                    location: N.PageviewLocation.ExtensionsCategory
                }), Object(b.a)(R, {
                    name: "extensionCategoryPageData",
                    options: function(e) {
                        return {
                            variables: {
                                categoryID: e.match.params.categoryID,
                                includeCurrentUser: e.isLoggedIn
                            }
                        }
                    }
                }), Object(b.a)(L, {
                    name: "installExtension"
                }))(U);
            var M, A = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(v.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(u.d)(g.a, {})
                        },
                        showLoginModal: function() {
                            return Object(m.e)(c.a.ExtensionInstallButton)
                        }
                    }, e)
                })(_),
                B = t("Z5H4"),
                W = t("oJmH"),
                X = t("5IFo"),
                V = t("VQbD"),
                z = t("DMoW"),
                q = t("dhGg");
            ! function(e) {
                e.EnabledInstallButton = "enabled-install-button", e.DisabledInstallButton = "disabled-install-button", e.UninstallButton = "uninstall-button"
            }(M || (M = {}));
            var G = function(e) {
                var n = e.extensionClientID,
                    t = e.extensionState,
                    i = e.extensionVersion,
                    r = e.isChannelCheeringEnabled,
                    s = e.isExtensionInstalled,
                    l = e.userLogin,
                    d = e.monetizationType,
                    c = e.onInstall,
                    u = e.onUninstall,
                    m = Object(q.a)();
                if (s) return a.createElement(F.Xa, {
                    display: F.X.Flex,
                    alignItems: F.f.Center,
                    justifyContent: F.Wa.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, a.createElement(F.Xa, {
                    padding: {
                        right: 1
                    }
                }, a.createElement(F.z, {
                    linkTo: o.__assign({}, Object(P.b)(l, n, i), {
                        state: {
                            medium: N.PageviewMedium.ExtensionPage,
                            content: N.PageviewContent.ExtensionConfigureButton
                        }
                    }),
                    type: F.F.Text,
                    size: F.D.Large
                }, Object(E.d)("Configure", "ExtensionPage"))), a.createElement(F.z, {
                    type: F.F.Hollow,
                    onClick: u,
                    "data-test-selector": M.UninstallButton
                }, Object(E.d)("Uninstall", "ExtensionPage")));
                var p = Object(E.d)("Install", "ExtensionPage"),
                    g = a.createElement(F.z, {
                        size: F.D.Large,
                        icon: F.rb.Plus,
                        onClick: c,
                        "data-test-selector": M.EnabledInstallButton
                    }, p);
                if (t === z.x.RELEASED && d === w.b.Bits && !r && !m.includes(n)) {
                    var v = Object(E.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionPage");
                    g = a.createElement(F.Wb, {
                        label: v,
                        direction: F.Yb.Left
                    }, a.createElement(F.z, {
                        size: F.D.Large,
                        icon: F.rb.Plus,
                        disabled: !0,
                        "data-test-selector": M.DisabledInstallButton
                    }, p))
                }
                return a.createElement(F.Xa, {
                    display: F.X.Flex,
                    alignItems: F.f.Center,
                    justifyContent: F.Wa.Center,
                    flexGrow: 0,
                    flexShrink: 0
                }, g)
            };
            G.displayName = "ExtensionButtons";
            var H, Q = t("1hWM"),
                $ = t("s6gS"),
                J = t("/Qsj");
            ! function(e) {
                e.AnchorTypes = "anchor-types", e.ChatFeature = "has-chat-support", e.Features = "features-container", e.MonetizationTypeIEP = "monetization-in-extension-purchases", e.MonetizationTypeBits = "monetization-bits", e.TestStatusDisclosure = "test-status-disclosure"
            }(H || (H = {}));
            var Y = function(e) {
                var n = e.supportedAnchors.map(function(e) {
                        return Object($.a)(e, !1)
                    }).concat(e.supportedPlatforms.filter(function(e) {
                        return e !== Q.ExtensionPlatform.Web
                    }).map(function(e) {
                        return Object(J.a)(e, !1)
                    })),
                    t = e.hasChatSupport;
                return a.createElement(F.Cb, {
                    background: F.r.Base,
                    border: !0,
                    padding: 1
                }, a.createElement(F.Xa, null, a.createElement(F.Xa, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("Details", "ExtensionDetails"))), a.createElement(F.W, {
                    type: F.Tb.P,
                    wordBreak: F.fc.BreakWord
                }, e.description)), a.createElement(F.Cb, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, a.createElement(F.Xa, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("Additional Information", "ExtensionDetails"))), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("Version: {extensionVersion}", {
                    extensionVersion: e.extensionVersion
                }, "ExtensionDetails")), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("Support: {supportEmail}", {
                    supportEmail: a.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: "mailto:" + e.supportEmail
                    }, e.supportEmail)
                }, "ExtensionDetails")), a.createElement(F.W, {
                    type: F.Tb.P,
                    "data-test-selector": H.AnchorTypes
                }, Object(E.d)("{typesCount, plural, one {Type: {types}} other {Types: {types}}}", {
                    types: n.join(", "),
                    typesCount: n.length
                }, "ExtensionDetails")), "" !== e.privacyPolicyURL && a.createElement(F.W, {
                    type: F.Tb.P,
                    wordBreak: F.fc.BreakWord
                }, Object(E.d)("Privacy Policy: {privacyPolicyURL}", {
                    privacyPolicyURL: a.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: e.privacyPolicyURL
                    }, e.privacyPolicyURL)
                }, "ExtensionDetails")), "" !== e.termsURL && a.createElement(F.W, {
                    type: F.Tb.P,
                    wordBreak: F.fc.BreakWord
                }, Object(E.d)("User Agreement: {termsOfServiceURL}", {
                    termsOfServiceURL: a.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: e.termsURL
                    }, e.termsURL)
                }, "ExtensionDetails"))), t && a.createElement(F.Cb, {
                    "data-test-selector": H.Features,
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, a.createElement(F.Xa, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("Features", "ExtensionDetails"))), e.hasChatSupport && a.createElement(F.W, {
                    "data-test-selector": H.ChatFeature,
                    type: F.Tb.P
                }, Object(E.d)("This extension can send messages to your chat.", "ExtensionDetails"))), e.releaseState !== z.x.RELEASED && a.createElement(F.Cb, {
                    "data-test-selector": H.TestStatusDisclosure,
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, a.createElement(F.Xa, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("Test Extension", "ExtensionDetails"))), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("Twitch permits 3rd party developers to submit Extensions for purposes of testing the performance and other attributes of an Extension before making a final submission to Twitch Extensions. This means the Extension has not been evaluated by Twitch in accordance with its policies.", "ExtensionDetails"), a.createElement(F.Pa, {
                    padding: {
                        left: .5
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                }, Object(E.d)("Learn More.", "ExtensionDetailsTest"))))), e.monetizationType === w.b.InExtensionPurchases && a.createElement(F.Cb, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    },
                    "data-test-selector": H.MonetizationTypeIEP
                }, a.createElement(F.Xa, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("In-Extension Purchases", "ExtensionDetails"))), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "ExtensionDetails"), a.createElement(F.Pa, {
                    padding: {
                        left: .5
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                }, Object(E.d)("Learn More.", "ExtensionDetails")))), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("For questions regarding your In-Extension Purchase orders, please contact {amazonCustomerService} team.", {
                    amazonCustomerService: a.createElement("a", {
                        href: "https://www.amazon.com/gp/help/customer/contact-us?",
                        target: "_blank",
                        rel: "noopener"
                    }, Object(E.d)("Amazon's Twitch Customer Service", "ExtensionDetails"))
                }, "ExtensionDetailsPurchases"))), e.monetizationType === w.b.Bits && a.createElement(F.Cb, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    },
                    "data-test-selector": H.MonetizationTypeBits
                }, a.createElement(F.Xa, {
                    display: F.X.Flex,
                    alignItems: F.f.Center,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(F.qb, {
                    asset: F.rb.Bits
                }), a.createElement(F.Xa, {
                    display: F.X.InlineBlock,
                    padding: {
                        left: .5
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("In-Extension Bits", "ExtensionDetails")))), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "ExtensionDetails"), a.createElement(F.Xa, null, a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                }, Object(E.d)("Learn More.", "ExtensionDetailsBits")))), a.createElement(F.Cb, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(F.W, {
                    type: F.Tb.Strong
                }, Object(E.d)("LIMITED PROMOTION: ", "ExtensionBitsPromoBold")), a.createElement(F.W, {
                    type: F.Tb.P
                }, Object(E.d)("From October 31, 2018 11:59pm PST through December 31, 2018 11:59pm PST, when you use a Bits-enabled Extension, there will be no revenue split with the Developer during this limited promotional period.  Twitch will cover the 20% developer revenue share normally attributed to Bits-enabled Extensions.", "ExtensionBitsPromo")))))
            };
            Y.displayName = "ExtensionDetails";
            var K = t("r52A"),
                Z = t("bwzz"),
                ee = t("Fb0V"),
                ne = (t("MATl"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            hasCardImageError: !1
                        }, n.renderScreenshots = function(e) {
                            return e.map(function(e, t) {
                                return a.createElement(F.Xa, {
                                    className: "extension-details-page__screenshot",
                                    padding: {
                                        right: 1
                                    },
                                    key: e
                                }, a.createElement(F.Ua, {
                                    onClick: n.onScreenshotClick,
                                    "data-index": t
                                }, a.createElement(F.o, {
                                    ratio: F.p.Aspect4x3
                                }, a.createElement("img", {
                                    src: e
                                }))))
                            })
                        }, n.renderPlaceholders = function() {
                            return a.createElement(F.Cb, {
                                borderRight: !0,
                                borderLeft: !0,
                                borderBottom: !0,
                                padding: 2
                            }, a.createElement(F.Xa, {
                                display: F.X.Flex,
                                alignItems: F.f.Center,
                                padding: {
                                    y: 1
                                }
                            }, a.createElement(F.Xa, null, a.createElement(F.gb, {
                                width: 60,
                                height: 60
                            })), a.createElement(F.Xa, {
                                padding: {
                                    left: 1
                                }
                            }, a.createElement(F.gb, {
                                lineCount: 2,
                                width: 200
                            }))), a.createElement(F.Ja, null, a.createElement(F.P, {
                                cols: 7
                            }, a.createElement(F.Cb, {
                                border: !0,
                                background: F.r.Base,
                                display: F.X.Flex,
                                padding: 1
                            }, a.createElement(F.Xa, null, a.createElement(F.gb, {
                                height: 300
                            })))), a.createElement(F.P, {
                                cols: 5
                            }, a.createElement(F.Cb, {
                                border: !0,
                                background: F.r.Base,
                                padding: 1
                            }, a.createElement(F.Xa, null, a.createElement(F.gb, {
                                width: 100
                            }), a.createElement(F.Xa, {
                                padding: {
                                    top: 1
                                }
                            }, a.createElement(F.gb, {
                                lineCount: 2
                            }))), a.createElement(F.Cb, {
                                borderTop: !0,
                                padding: {
                                    top: 1
                                },
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(F.gb, {
                                width: 100
                            }), a.createElement(F.Xa, {
                                padding: {
                                    top: 1
                                }
                            }, a.createElement(F.gb, {
                                width: 300,
                                lineCount: 2
                            })))))))
                        }, n.onScreenshotClick = function(e) {
                            var t = n.props.extensionDetailsPageData.extension;
                            if (t) {
                                var i = parseInt(e.currentTarget.dataset.index || "0", 10);
                                n.props.showImageViewerModal({
                                    screenshotURLs: t.screenshotURLs,
                                    index: i
                                })
                            }
                        }, n.onCardImageError = function() {
                            n.setState({
                                hasCardImageError: !0
                            })
                        }, n.onInstallExtension = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, i, a, r, s, l, d, c;
                                return o.__generator(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (e = this.props, n = e.extensionDetailsPageData, t = e.installExtension, i = e.showExtensionInstalledModal, a = e.showExtensionErrorModal, r = e.userLogin, s = n.currentUser, !((l = n.extension) && s && s.id)) return [3, 4];
                                            u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 3, , 4]), [4, t(o.__assign({}, Object(y.a)({
                                                extensionID: l.id,
                                                channelID: s.id
                                            })))];
                                        case 2:
                                            return (d = u.sent()).data.installExtension && d.data.installExtension.installedExtension && (c = d.data.installExtension.installedExtension, Object(X.e)({
                                                extensionClientID: c.extension.clientID,
                                                extensionVersion: c.extension.version
                                            }), Object(y.e)(ee, o.__assign({}, te(this.props)), function(e) {
                                                return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(c), e
                                            }), i({
                                                extensionClientID: c.extension.clientID,
                                                extensionVersion: c.extension.version,
                                                login: r
                                            })), [3, 4];
                                        case 3:
                                            return u.sent(), a(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.confirmExtensionUninstallation = function() {
                            var e = n.props.extensionDetailsPageData,
                                t = e.currentUser,
                                i = e.extension;
                            if (i && t && t.installedExtensions) {
                                var a = t.installedExtensions.find(function(e) {
                                    return e.extension.id === i.id
                                });
                                a && n.props.showExtensionDestructionWarningModal({
                                    destructionType: w.a.Uninstall,
                                    extensionName: i.name,
                                    monetizationType: Object(w.e)(i),
                                    onConfirm: function() {
                                        return n.uninstallExtension(a.id)
                                    }
                                })
                            }
                        }, n.uninstallExtension = function(e) {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var n, t, i;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            n = this.props.showExtensionErrorModal, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.uninstallExtension(Object(y.a)({
                                                extensionInstallationID: e
                                            }))];
                                        case 2:
                                            return (t = a.sent().data).uninstallExtension && t.uninstallExtension.id && (i = t.uninstallExtension.id, Object(y.e)(ee, o.__assign({}, te(this.props)), function(e) {
                                                var n = e.currentUser;
                                                return n && n.installedExtensions && (n.installedExtensions = n.installedExtensions.filter(function(e) {
                                                    return e.id !== i
                                                })), e
                                            })), [3, 4];
                                        case 3:
                                            return a.sent(), n(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return o.__extends(n, e), n.prototype.componentDidMount = function() {
                        E.p.setPageTitle(Object(E.d)("Extensions", "ExtensionDetailsPageComponent"))
                    }, n.prototype.componentDidUpdate = function() {
                        this.props.extensionDetailsPageData.loading || this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        var e = this.props,
                            n = e.isLoggedIn,
                            t = e.extensionDetailsPageData,
                            i = e.userLogin,
                            r = t.currentUser,
                            s = t.error,
                            o = t.extension,
                            l = t.loading,
                            d = !(!r || !r.cheer);
                        return l ? a.createElement(F.Cb, {
                            padding: 4,
                            background: F.r.Alt
                        }, this.renderPageHeader(), this.renderPlaceholders()) : s ? a.createElement(x.a, {
                            message: Object(E.d)("An error occurred on this page", "ExtensionDetailsPageComponent")
                        }) : o ? a.createElement(F.Cb, {
                            padding: 4,
                            background: F.r.Alt
                        }, this.renderPageHeader(), a.createElement(F.Cb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, a.createElement(F.Xa, {
                            display: F.X.Flex,
                            flexWrap: F.Ba.NoWrap,
                            justifyContent: F.Wa.Between,
                            flexGrow: 1,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(F.G, {
                            row: !0,
                            border: !1
                        }, a.createElement(F.I, {
                            alt: o.name,
                            src: this.state.hasCardImageError ? E.a.defaultAvatarURL : o.iconURLs.square100,
                            aspect: F.p.Aspect1x1,
                            size: F.J.Size6,
                            onError: this.onCardImageError
                        }), a.createElement(F.H, null, a.createElement(F.Xa, {
                            padding: 1
                        }, a.createElement(F.W, {
                            type: F.Tb.H4
                        }, o.name), a.createElement(F.W, {
                            type: F.Tb.Span,
                            color: F.O.Alt2
                        }, Object(E.d)("Created by {extensionAuthor}", {
                            extensionAuthor: o.authorName
                        }, "ExtensionDetailsPageComponent"))))), n && o.self && o.self.canInstall && a.createElement(G, {
                            extensionClientID: o.clientID,
                            extensionState: o.state,
                            extensionVersion: o.version,
                            isChannelCheeringEnabled: d,
                            isExtensionInstalled: this.isExtensionInstalled(),
                            userLogin: i,
                            monetizationType: Object(w.e)(o),
                            onInstall: this.onInstallExtension,
                            onUninstall: this.confirmExtensionUninstallation
                        })), a.createElement(F.Ja, null, a.createElement(F.P, {
                            cols: 7
                        }, a.createElement(F.Cb, {
                            background: F.r.Base,
                            border: !0,
                            padding: 1
                        }, a.createElement(V.a, {
                            insetStyle: !0,
                            items: this.renderScreenshots(o.screenshotURLs)
                        }))), a.createElement(F.P, {
                            cols: 5
                        }, a.createElement(Y, {
                            description: o.description,
                            extensionVersion: o.version,
                            hasChatSupport: o.hasChatSupport,
                            monetizationType: Object(w.e)(o),
                            privacyPolicyURL: o.privacyPolicyURL,
                            releaseState: o.state,
                            supportedAnchors: Object(w.f)(o.views),
                            supportedPlatforms: Object(w.g)(o.views),
                            supportEmail: o.supportEmail,
                            termsURL: o.termsURL
                        }))))) : a.createElement(h.a, null, n && a.createElement(F.z, {
                            linkTo: Object(P.c)(i)
                        }, Object(E.d)("Browse extensions", "ExtensionDetailsPageComponent")))
                    }, n.prototype.renderPageHeader = function() {
                        var e = this.props,
                            n = e.isLoggedIn,
                            t = e.userLogin;
                        return a.createElement(O.a, {
                            channelLogin: t,
                            showBackLink: n,
                            title: Object(E.d)("Details", "ExtensionDetailsPageComponent")
                        })
                    }, n.prototype.isExtensionInstalled = function() {
                        var e = this.props.extensionDetailsPageData,
                            n = e.currentUser,
                            t = e.extension;
                        return !!(t && n && n.installedExtensions) && n.installedExtensions.some(function(e) {
                            return e.extension.id === t.id
                        })
                    }, n
                }(a.Component));

            function te(e) {
                var n = e.match,
                    t = e.isLoggedIn,
                    i = n.params.extensionID.split("-");
                return {
                    extensionID: i[0],
                    extensionVersion: i[1],
                    isLoggedIn: t
                }
            }
            var ie, ae = Object(W.compose)(Object(j.b)("ExtensionDetailsPage", {
                    destination: S.a.ExtensionDetails
                }), Object(f.a)({
                    location: N.PageviewLocation.ExtensionDetails
                }), Object(b.a)(ee, {
                    name: "extensionDetailsPageData",
                    options: function(e) {
                        return {
                            variables: o.__assign({}, te(e))
                        }
                    }
                }), Object(b.a)(K, {
                    name: "installExtension"
                }), Object(b.a)(Z, {
                    name: "uninstallExtension"
                }))(ne),
                re = t("cZKs"),
                se = t("8Ad5");
            t("Hhhw");
            ! function(e) {
                e.NavigationPrevious = "modal-navigation-previous", e.NavigationNext = "modal-navigation-next"
            }(ie || (ie = {}));
            var oe = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onKeyDown = function(e) {
                        var t = e.charCode || e.keyCode;
                        t === se.a.Left ? n.showPreviousImage() : t === se.a.Right && n.showNextImage()
                    }, n.showPreviousImage = function() {
                        n.updateImage(n.props.index - 1)
                    }, n.showNextImage = function() {
                        n.updateImage(n.props.index + 1)
                    }, n
                }
                return o.__extends(n, e), n.prototype.componentDidMount = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, n.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, n.prototype.render = function() {
                    var e = this.props,
                        n = e.index,
                        t = e.screenshotURLs,
                        i = null,
                        r = null;
                    return n > 0 && (i = a.createElement(F.Xa, {
                        position: F.hb.Absolute,
                        display: F.X.Flex,
                        alignItems: F.f.Stretch,
                        className: "modal-navigation-button modal-navigation-button--previous"
                    }, a.createElement(F.A, {
                        ariaLabel: Object(E.d)("Previous screenshot", "ExtensionsImageViewerModal"),
                        type: F.C.Primary,
                        icon: F.rb.AngleLeft,
                        onClick: this.showPreviousImage,
                        "data-test-selector": ie.NavigationPrevious
                    }))), n < t.length - 1 && (r = a.createElement(F.Xa, {
                        position: F.hb.Absolute,
                        display: F.X.Flex,
                        alignItems: F.f.Stretch,
                        className: "modal-navigation-button modal-navigation-button--next"
                    }, a.createElement(F.A, {
                        ariaLabel: Object(E.d)("Next screenshot", "ExtensionsImageViewerModal"),
                        type: F.C.Primary,
                        icon: F.rb.AngleRight,
                        onClick: this.showNextImage,
                        "data-test-selector": ie.NavigationNext
                    }))), a.createElement(F.Xa, {
                        position: F.hb.Relative
                    }, i, a.createElement(F.Cb, {
                        padding: {
                            x: 2,
                            y: 3
                        },
                        background: F.r.Base
                    }, a.createElement("img", {
                        src: t[n]
                    }), a.createElement(re.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    })), r)
                }, n.prototype.updateImage = function(e) {
                    var n = this.props,
                        t = n.onClose,
                        i = n.screenshotURLs,
                        a = n.showImageViewerModal;
                    e >= 0 && e < i.length && a({
                        index: e,
                        screenshotURLs: i,
                        onClose: t
                    })
                }, n
            }(a.Component);
            var le = Object(l.connect)(null, function(e) {
                return Object(d.bindActionCreators)({
                    showImageViewerModal: function(e) {
                        var n = o.__rest(e, []);
                        return Object(u.d)(le, n)
                    },
                    closeModal: u.c
                }, e)
            })(oe);
            var de, ce = Object(l.connect)(function(e) {
                    var n = Object(p.f)(e),
                        t = Object(p.e)(e);
                    return {
                        isLoggedIn: n,
                        userLogin: t && t.login || ""
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(v.a, n)
                        },
                        showExtensionDestructionWarningModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(B.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(u.d)(g.a, {})
                        },
                        showImageViewerModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(le, n)
                        }
                    }, e)
                })(ae),
                ue = t("cr+I"),
                me = t("G1aL"),
                pe = t("sZhG"),
                ge = t("cVuv");
            (de || (de = {})).ErrorMessage = "extension-search-error-message";
            var ve = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.canLoadMoreExtensions = function() {
                        var e = t.props.extensionSearchData;
                        return !!(e && !e.loading && !e.error && e.extensions && e.extensions.pageInfo.hasNextPage)
                    }, t.loadMoreExtensions = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, n, t, i, a, r, s;
                            return o.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return e = this.props, n = e.extensionSearchData, t = e.isLoggedIn, i = this.state.searchTerm, this.canLoadMoreExtensions() ? (a = n.extensions.edges, r = a[a.length - 1], s = {
                                            afterCursor: r && r.cursor,
                                            search: i,
                                            includeCurrentUser: t
                                        }, [4, n.fetchMore({
                                            query: ge,
                                            variables: s,
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult,
                                                    i = e.extensions ? e.extensions.edges : [],
                                                    a = t.extensions ? t.extensions.edges : [];
                                                return o.__assign({}, t, {
                                                    extensions: o.__assign({}, t.extensions, {
                                                        edges: Object(y.c)(i, a)
                                                    })
                                                })
                                            }
                                        })]) : [3, 2];
                                    case 1:
                                        l.sent(), l.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.installExtension = function(e) {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var n, t, i, a, r, s, l, d;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = this.props, t = n.extensionSearchData, i = n.installExtension, a = n.isLoggedIn, r = n.showExtensionErrorModal, s = n.showExtensionInstalledModal, !(t && t.currentUser && t.currentUser.id && t.currentUser.login)) return [2];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, i(Object(y.a)({
                                            channelID: t.currentUser.id,
                                            extensionID: e
                                        }))];
                                    case 2:
                                        return (l = o.sent().data).installExtension && l.installExtension.installedExtension && (d = l.installExtension.installedExtension, Object(y.e)(ge, {
                                            includeCurrentUser: a,
                                            search: this.state.searchTerm
                                        }, function(e) {
                                            return e.currentUser && e.currentUser.installedExtensions && e.currentUser.installedExtensions.push(d), e
                                        }), s({
                                            extensionClientID: d.extension.clientID,
                                            extensionVersion: d.extension.version,
                                            login: t.currentUser.login
                                        })), [3, 4];
                                    case 3:
                                        return o.sent(), r(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = {
                        searchTerm: Ee(n)
                    }, t
                }
                return o.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                    var n = Ee(e);
                    n !== this.state.searchTerm && this.setState({
                        searchTerm: n
                    })
                }, n.prototype.componentDidUpdate = function(e, n) {
                    this.checkAndReportPageInteractive();
                    var t = this.props,
                        i = t.extensionSearchData,
                        a = t.isLoggedIn;
                    i && n.searchTerm !== this.state.searchTerm && i.refetch({
                        search: this.state.searchTerm,
                        includeCurrentUser: a
                    })
                }, n.prototype.componentDidMount = function() {
                    this.checkAndReportPageInteractive()
                }, n.prototype.render = function() {
                    var e = this.props,
                        n = e.extensionSearchData,
                        t = e.isLoggedIn,
                        i = [];
                    if (n && n.loading && !n.extensions)
                        for (var r = 0; r < 4; r++) i.push(a.createElement(F.Xa, {
                            key: r,
                            padding: 1
                        }, a.createElement(I.a, null)));
                    else n && n.extensions && (i = n.extensions.edges.map(this.renderCard, this));
                    return a.createElement(k.b, null, a.createElement(F.Xa, {
                        padding: 4
                    }, a.createElement(O.a, {
                        channelLogin: n && n.currentUser && n.currentUser.login,
                        showBackLink: t,
                        title: Object(E.d)("Extension Search Results", "ExtensionSearchPage")
                    }), a.createElement(F.Cb, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0,
                        padding: 2
                    }, a.createElement(F.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(me.a, {
                        initialSearchTerm: this.state.searchTerm,
                        trackingContext: {
                            medium: N.PageviewMedium.ExtensionSearch
                        }
                    })), a.createElement(D.a, {
                        loadMoreEnabled: this.canLoadMoreExtensions(),
                        loadMore: this.loadMoreExtensions
                    }, i), n && n.error && a.createElement(F.W, {
                        "data-test-selector": de.ErrorMessage
                    }, Object(E.d)("We're having trouble fetching extensions.", "ExtensionSearchPage")))))
                }, n.prototype.renderCard = function(e) {
                    var n = this.props.extensionSearchData,
                        t = e.node;
                    return a.createElement(F.Pa, {
                        key: t.id,
                        margin: {
                            y: 1
                        }
                    }, a.createElement(C.a, {
                        authorName: t.authorName,
                        cheeringEnabled: Object(T.a)(n && n.currentUser),
                        extensionClientID: t.clientID,
                        extensionID: t.id,
                        extensionName: t.name,
                        extensionVersion: t.version,
                        hasInstallPermission: null !== t.self && t.self.canInstall,
                        splashImageURL: t.iconURLs.discoverySplash,
                        iconURL: t.iconURLs.square100,
                        isInstalled: this.isExtensionInstalled(t.id),
                        monetizationType: Object(w.e)(t),
                        installExtension: this.props.isLoggedIn ? this.installExtension : this.props.showLoginModal,
                        extensionState: t.state,
                        trackingContext: {
                            medium: N.PageviewMedium.ExtensionSearch
                        },
                        summary: t.summary,
                        supportedAnchors: Object(w.f)(t.views),
                        supportedPlatforms: Object(w.g)(t.views)
                    }))
                }, n.prototype.isExtensionInstalled = function(e) {
                    var n = this.props.extensionSearchData;
                    if (n && n.currentUser && n.currentUser.installedExtensions) {
                        var t = n.currentUser;
                        return null !== t && null !== t.installedExtensions && t.installedExtensions.some(function(n) {
                            return n.extension.id === e
                        })
                    }
                    return !1
                }, n.prototype.checkAndReportPageInteractive = function() {
                    var e = this.props,
                        n = e.extensionSearchData,
                        t = e.latencyTracking;
                    n && !n.loading && t.reportInteractive()
                }, n
            }(a.Component);

            function Ee(e) {
                return ue.parse(e.location.search).q || ""
            }
            var xe = Object(d.compose)(Object(j.b)("ExtensionSearchPage", {
                destination: S.a.ExtensionsSearch
            }), Object(f.a)({
                location: N.PageviewLocation.ExtensionsSearch
            }), Object(b.a)(ge, {
                name: "extensionSearchData",
                options: function(e) {
                    return {
                        variables: {
                            search: Ee(e),
                            includeCurrentUser: e.isLoggedIn
                        }
                    }
                },
                skip: function(e) {
                    return "" === Ee(e)
                }
            }), Object(b.a)(pe, {
                name: "installExtension"
            }))(ve);
            var he = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(v.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(u.d)(g.a, {})
                        },
                        showLoginModal: function() {
                            return Object(m.e)(c.a.ExtensionInstallButton)
                        }
                    }, e)
                })(xe),
                ke = function() {
                    return a.createElement(s.a, null, a.createElement(r.a, {
                        path: "/ext/search",
                        component: he
                    }), a.createElement(r.a, {
                        path: "/ext/categories/:categoryID",
                        component: A
                    }), a.createElement(r.a, {
                        path: "/ext/:extensionID",
                        component: ce
                    }))
                };
            ke.displayName = "ExtensionsRoot", t.d(n, "ExtensionsRoot", function() {
                return ke
            })
        },
        qAxc: function(e, n, t) {
            e.exports = t.p + "assets/discovery-splash-fallback-d5c69de700c33441b513.png"
        },
        r52A: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionDetailsPage_InstallExtension"
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
                    end: 179
                }
            };
            t.loc.source = {
                body: "mutation ExtensionDetailsPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        s6gS: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var i = t("/7QA"),
                a = t("DMoW"),
                r = function(e, n) {
                    var t;
                    switch (e) {
                        case a.v.COMPONENT:
                            t = n ? Object(i.d)("COMPONENT", "ExtensionAnchorType") : Object(i.d)("Component", "ExtensionAnchorType");
                            break;
                        case a.v.PANEL:
                            t = n ? Object(i.d)("PANEL", "ExtensionAnchorType") : Object(i.d)("Panel", "ExtensionAnchorType");
                            break;
                        case a.v.VIDEO_OVERLAY:
                            t = n ? Object(i.d)("OVERLAY", "ExtensionAnchorType") : Object(i.d)("Overlay", "ExtensionAnchorType");
                            break;
                        default:
                            t = ""
                    }
                    return t
                }
        },
        sZhG: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionSearchPage_InstallExtension"
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
                    end: 178
                }
            };
            t.loc.source = {
                body: "mutation ExtensionSearchPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\n}\n}\n}",
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
                r = (t("JxAY"), function(e) {
                    return i.createElement(a.Cb, {
                        className: e.className || "extension-manager-modal-container",
                        background: a.r.Base,
                        padding: 2
                    }, e.children)
                });
            r.displayName = "ModalContainer", t.d(n, "a", function() {
                return r
            })
        },
        yG7w: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ExtensionCategoryPage_InstallExtension"
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
                    end: 180
                }
            };
            t.loc.source = {
                body: "mutation ExtensionCategoryPage_InstallExtension ($input: InstallExtensionInput!) {\ninstallExtension(input: $input) {\ninstalledExtension {\nid\nextension {\nid\nclientID\nversion\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        }
    }
]);