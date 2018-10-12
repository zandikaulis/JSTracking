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
                v = function(e) {
                    var n = e.closeModal,
                        t = e.extensionClientID,
                        r = e.extensionVersion,
                        s = e.login;
                    return a.createElement(p.Va, null, a.createElement(p.V, {
                        type: p.Nb.H5
                    }, Object(c.d)("Extension Installed Successfully!", "ExtensionInstalledModal")), a.createElement(p.xb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.V, null, Object(c.d)("Your extension will not display on your page until it is activated on the Extensions page.", "ExtensionInstalledModal")), a.createElement(p.Va, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(p.V, null, Object(c.d)("Your extension may require additional configuration before it can be activated.", "ExtensionInstalledModal"))), a.createElement(p.V, null, Object(c.d)("Would you like to configure this extension now?", "ExtensionInstalledModal"))), a.createElement(p.Va, {
                        display: p.W.Flex,
                        justifyContent: p.Ua.Center
                    }, a.createElement(p.Va, {
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
            v.displayName = "ExtensionInstalledModalPresentation";
            var g = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return a.createElement(d.a, null, a.createElement(v, {
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
            })(g);
            t.d(n, !1, function() {
                return g
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
                v = t("OzNJ"),
                g = t("Ue10"),
                E = function(e) {
                    return e.type === v.b.Bits ? s.createElement(g.ab, {
                        label: Object(o.d)("BITS", "MonetizationPill")
                    }) : e.type === v.b.InExtensionPurchases ? s.createElement(g.ab, {
                        label: Object(o.d)("PURCHASES", "MonetizationPill")
                    }) : null
                };
            E.displayName = "MonetizationPill";
            var x, h = t("22qk"),
                k = t("5IFo"),
                f = t("Ar2k");
            t("EJuf");
            ! function(e) {
                e.InstallButton = "extension-card-install-button", e.TestStatusDisclosure = "extension-card-test-status-disclosure"
            }(x || (x = {}));
            var b = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            imageURL: n.props.splashImageURL || n.props.iconURL || d.a,
                            isInstalling: !1
                        }, n.renderHoverElement = function() {
                            var e = n.props,
                                t = e.extensionClientID,
                                i = e.extensionState,
                                a = e.extensionVersion,
                                r = e.trackingContext,
                                l = e.summary,
                                d = r.content,
                                m = r.contentIndex,
                                p = r.medium,
                                v = l;
                            return i !== c.v.RELEASED && l.length > 100 && (v = l.substring(0, 100) + "..."), s.createElement(g.xb, {
                                className: "extension-card__thumbnail__details-preview",
                                background: g.r.Alt2,
                                position: g.db.Absolute,
                                attachRight: !0,
                                attachTop: !0,
                                attachLeft: !0,
                                attachBottom: !0
                            }, s.createElement(g.Va, {
                                display: g.W.Flex,
                                flexDirection: g.Y.Column,
                                justifyContent: g.Ua.Between,
                                alignItems: g.f.Center,
                                padding: {
                                    x: 3,
                                    y: 2
                                },
                                fullHeight: !0
                            }, s.createElement(g.Va, {
                                className: "extension-card__thumbnail__summary",
                                overflow: g.Ya.Hidden
                            }, s.createElement(g.V, {
                                type: g.Nb.P
                            }, v), i !== c.v.RELEASED && s.createElement(g.Va, {
                                padding: {
                                    top: .5
                                }
                            }, s.createElement(g.V, {
                                "data-test-selector": x.TestStatusDisclosure,
                                type: g.Nb.P
                            }, Object(o.d)("This is a Test Extension; it has not been evaluated by Twitch in accordance with its policies.", "ExtensionCard"), s.createElement(g.Na, {
                                padding: {
                                    left: .5
                                }
                            }, s.createElement("a", {
                                target: "_blank",
                                rel: "noopener",
                                href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                            }, Object(o.d)("Learn More.", "ExtensionCardTestDisclosure")))))), s.createElement(g.Va, {
                                display: g.W.Flex,
                                flexWrap: g.Z.NoWrap
                            }, s.createElement(g.Va, null, s.createElement(g.z, {
                                type: g.F.Hollow,
                                linkTo: {
                                    pathname: Object(h.d)(t, a),
                                    state: {
                                        medium: p,
                                        content: d || u.PageviewContent.ExtensionCard,
                                        content_index: m
                                    }
                                }
                            }, Object(o.d)("Details", "ExtensionCard"))), s.createElement(g.Va, {
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
                            }, s.createElement(g.Va, {
                                display: g.W.Flex,
                                alignItems: g.f.Center
                            }, s.createElement(g.mb, {
                                asset: g.nb.Check
                            }), s.createElement(g.Va, {
                                padding: {
                                    left: .5
                                }
                            }, Object(o.d)("Installed", "ExtensionCard"))));
                            var a = Object(o.d)("Install", "ExtensionCard");
                            return !i || n.isMissingCheeringRequirement() ? s.createElement(g.Va, {
                                refDelegate: n.setRef
                            }, s.createElement(g.z, {
                                disabled: !0,
                                "data-test-selector": x.InstallButton
                            }, a)) : s.createElement(g.z, {
                                "data-test-selector": x.InstallButton,
                                state: e ? g.E.Loading : g.E.Default,
                                onClick: n.installExtension
                            }, a)
                        }, n.renderAnchorTypePills = function() {
                            var e = n.props,
                                t = e.supportedAnchors,
                                i = e.supportedPlatforms,
                                a = t.map(function(e) {
                                    return s.createElement(g.Va, {
                                        key: e,
                                        display: g.W.InlineBlock,
                                        padding: {
                                            right: .5
                                        }
                                    }, s.createElement(m.a, {
                                        anchorType: e
                                    }))
                                });
                            return i.includes(r.ExtensionPlatform.Mobile) && a.push(s.createElement(g.Va, {
                                key: "mobile",
                                display: g.W.InlineBlock,
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
                                            return i.sent(), Object(k.e)({
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
                                    align: g.Rb.Center,
                                    direction: g.Sb.Top
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
                            l = n.iconURL,
                            d = n.isInstalled,
                            u = n.monetizationType,
                            m = l && e === l;
                        return s.createElement(g.Va, {
                            className: a("extension-card", i)
                        }, s.createElement(g.G, null, s.createElement(g.xb, {
                            className: "extension-card__thumbnail",
                            border: !0,
                            background: g.r.AccentAlt2,
                            position: g.db.Relative,
                            overflow: g.Ya.Hidden
                        }, s.createElement(g.o, {
                            ratio: g.p.Aspect3x2
                        }, s.createElement(g.xb, {
                            display: g.W.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Ua.Center,
                            position: g.db.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachBottom: !0
                        }, m ? s.createElement(g.S, {
                            className: "extension-card__thumbnail__icon",
                            src: e,
                            alt: r,
                            onError: this.onCardImageError
                        }) : s.createElement(g.Na, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, s.createElement(g.S, {
                            src: e,
                            alt: r,
                            onError: this.onCardImageError
                        }))), this.renderHoverElement()), d && s.createElement(g.xb, {
                            display: g.W.InlineFlex,
                            alignItems: g.f.Center,
                            justifyContent: g.Ua.Center,
                            background: g.r.Accent,
                            position: g.db.Absolute,
                            color: g.O.Overlay,
                            attachRight: !0,
                            attachTop: !0
                        }, s.createElement(g.mb, {
                            asset: g.nb.Check
                        }))), s.createElement(g.Va, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(g.V, {
                            type: g.Nb.H6
                        }, r), s.createElement(g.V, {
                            type: g.Nb.Span,
                            color: g.O.Alt2,
                            fontSize: g.Aa.Size7
                        }, t), s.createElement(g.Va, {
                            padding: {
                                top: .5
                            }
                        }, this.renderAnchorTypePills(), null !== u && s.createElement(g.Va, {
                            key: "monetization-pill",
                            display: g.W.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(E, {
                            type: u
                        })), o !== c.v.RELEASED && s.createElement(p.a, {
                            state: o
                        })))))
                    }, n.prototype.isMissingCheeringRequirement = function() {
                        var e = this.props,
                            n = e.cheeringEnabled,
                            t = e.extensionState,
                            i = e.monetizationType;
                        return t === c.v.RELEASED && i === v.b.Bits && !n
                    }, n
                }(s.Component),
                y = Object(f.c)()(b);
            t.d(n, !1, function() {
                return x
            }), t.d(n, !1, function() {
                return b
            }), t.d(n, "a", function() {
                return y
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
                    return e.anchorType ? a.createElement(o.ab, {
                        label: Object(r.a)(e.anchorType, !0)
                    }) : e.mobile ? a.createElement(o.ab, {
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
                        return a.createElement(d.xb, {
                            background: d.r.Alt2,
                            display: d.W.Flex,
                            alignItems: d.f.Stretch
                        }, t && a.createElement(d.xb, {
                            border: !0,
                            display: d.W.Flex,
                            flexGrow: 0
                        }, a.createElement(d.A, {
                            ariaLabel: Object(s.d)("Navigate to previous page", "ExtensionPageHeader"),
                            size: d.B.Large,
                            icon: d.nb.AngleLeft,
                            onClick: this.goBack
                        })), a.createElement(d.xb, {
                            border: !0,
                            display: d.W.Flex,
                            flexGrow: 1,
                            padding: 2
                        }, a.createElement(d.V, {
                            type: d.Nb.H4
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
            t.d(n, "d", function() {
                return r
            }), t.d(n, "b", function() {
                return s
            }), t.d(n, "c", function() {
                return o
            }), t.d(n, "e", function() {
                return l
            }), t.d(n, "h", function() {
                return d
            }), t.d(n, "f", function() {
                return c
            }), t.d(n, "a", function() {
                return u
            }), t.d(n, "g", function() {
                return m
            });
            var i = t("/7QA"),
                a = t("D7An");

            function r(e, n) {
                return "/ext/" + p(e, n)
            }

            function s(e, n, t) {
                return "control" === i.o.experiments.getAssignment(a.b.ExtensionConfigureModal) ? {
                    pathname: o(e) + "/" + p(n, t) + "/configure"
                } : {
                    pathname: "" + l(e),
                    search: "?configure=true&extensionID=" + p(n, t)
                }
            }

            function o(e) {
                return "/" + e + "/dashboard/extensions"
            }

            function l(e) {
                return "/" + e + "/dashboard/extensions/manage"
            }

            function d(e) {
                return "/" + e + "/dashboard/extensions/whitelisted"
            }

            function c(e, n) {
                return {
                    pathname: "/" + e + "/dashboard/extensions/permissions",
                    state: n
                }
            }

            function u(e) {
                return "/ext/categories/" + e
            }

            function m(e) {
                return "/ext/search?q=" + encodeURIComponent(e)
            }

            function p(e, n) {
                return n ? e + "-" + n : e
            }
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
                return v
            });
            var i, a = t("/7QA"),
                r = t("2xye");

            function s(e) {
                var n = {
                    category_id: e.categoryID,
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                a.n.track(r.SpadeEventType.ExtensionInstall, n)
            }

            function o(e) {
                var n = {
                    extension_id: e.extensionClientID,
                    extension_version: e.extensionVersion
                };
                a.n.track(r.SpadeEventType.ExtensionConfigureView, n)
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
                a.n.track(r.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Open, e))
            }

            function c(e) {
                a.n.track(r.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Close, e))
            }

            function u(e) {
                a.n.track(r.SpadeEventType.ExtensionStreamerComponentSettings, l(i.Save, e))
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
                a.n.track(r.SpadeEventType.ExtensionPopoutClicked, m(e))
            }

            function v(e) {
                a.n.track(r.SpadeEventType.ExtensionPopinClicked, m(e))
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
                    return i.createElement(r.Tb, {
                        childWidth: r.Ub.Large,
                        gutterSize: r.Vb.Small,
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
                        case r.v.IN_TEST:
                            n = Object(a.d)("TESTING", "ExtensionStatusPill");
                            break;
                        case r.v.READY_FOR_REVIEW:
                            n = Object(a.d)("READY FOR REVIEW", "ExtensionStatusPill");
                            break;
                        case r.v.IN_REVIEW:
                            n = Object(a.d)("IN REVIEW", "ExtensionStatusPill");
                            break;
                        case r.v.REJECTED:
                            n = Object(a.d)("REJECTED", "ExtensionStatusPill");
                            break;
                        case r.v.APPROVED:
                            n = Object(a.d)("APPROVED", "ExtensionStatusPill");
                            break;
                        case r.v.DEPRECATED:
                            n = Object(a.d)("DEPRECATED", "ExtensionStatusPill");
                            break;
                        case r.v.PENDING_ACTION:
                            n = Object(a.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                            break;
                        case r.v.UPLOADING:
                            n = Object(a.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                            break;
                        case r.v.ASSETS_UPLOADED:
                            n = Object(a.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                            break;
                        default:
                            n = ""
                    }
                    return i.createElement(s.ab, {
                        type: s.bb.Brand,
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
                        return a.createElement(d.xb, {
                            border: !0,
                            background: d.r.Base,
                            padding: 1
                        }, a.createElement(d.Ha, null, a.createElement(d.P, {
                            cols: 8
                        }), a.createElement(d.P, {
                            cols: 4
                        }, a.createElement("form", {
                            onSubmit: this.onSubmit
                        }, a.createElement(d.pb, {
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
                    return a.createElement(l.Va, null, a.createElement(l.V, null, Object(o.d)("There was an error. Please try again later.", "ExtensionErrorModal")))
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
                return e.component && e.component.viewerURL && n.push(s.t.COMPONENT), e.panel && e.panel.viewerURL && n.push(s.t.PANEL), e.videoOverlay && e.videoOverlay.viewerURL && n.push(s.t.VIDEO_OVERLAY), n
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
            var m = ((i = {})[a.Previous] = c.nb.AngleLeft, i[a.Next] = c.nb.AngleRight, i),
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
                            return o.createElement(c.Va, {
                                className: u,
                                position: c.db.Relative,
                                display: c.W.Flex,
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
                        return o.createElement(c.Na, r.__assign({}, this.props, {
                            position: c.db.Relative
                        }), o.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, o.createElement(c.Va, {
                            className: "media-carousel__child-container",
                            overflow: c.Ya.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, o.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, o.createElement(c.Na, {
                            className: "media-carousel__content",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            flexDirection: c.Y.Row,
                            alignItems: c.f.Center,
                            "data-js-selector": "carousel-content"
                        }, o.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), o.createElement(c.Va, {
                            className: "media-carousel__nav",
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            position: c.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(c.Va, {
                            className: "media-carousel__nav",
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            position: c.db.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                    }, n = r.__decorate([Object(d.c)("MediaCarousel", {
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
                    return s ? d = Object(u.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you deactivate this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivationWarning")), a.createElement(m.Va, null, a.createElement(m.V, {
                        type: m.Nb.H5
                    }, l), a.createElement(m.xb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.V, null, Object(u.d)("You are deactivating {extensionName} ", {
                        extensionName: a.createElement(m.V, {
                            bold: !0,
                            type: m.Nb.P
                        }, t)
                    }, "ExtensionDeactivationWarning")), a.createElement(m.Va, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.V, {
                        type: m.Nb.P
                    }, d))), a.createElement(m.Va, {
                        display: m.W.Flex,
                        justifyContent: m.Ua.Center
                    }, a.createElement(m.Va, {
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
                v = function(e) {
                    var n = e.existingExtensionName,
                        t = e.activationSlot,
                        i = e.existingMonetizationType,
                        r = e.closeModal,
                        s = e.onConfirm,
                        o = i === c.b.InExtensionPurchases,
                        l = i === c.b.Bits,
                        d = Object(u.d)("Are you sure you want to deactivate?", "ExtensionReplacementWarning");
                    return o ? d = Object(u.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning") : l && (d = Object(u.d)("This extension is Bits-enabled. If you replace this extension, your viewers may not be able to enjoy items and experiences they’ve exchanged for Bits through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementWarning")), a.createElement(m.Va, null, a.createElement(m.V, {
                        type: m.Nb.H5
                    }, Object(u.d)("You are replacing an active extension", "ExtensionReplacementWarning")), a.createElement(m.xb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.V, null, Object(u.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementWarning")), a.createElement(m.Va, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.V, null, Object(u.d)("{extensionName} on {anchorSlot}", {
                        extensionName: a.createElement(m.V, {
                            bold: !0,
                            type: m.Nb.Span
                        }, n),
                        anchorSlot: a.createElement(m.V, {
                            bold: !0,
                            type: m.Nb.Span,
                            transform: m.Mb.Uppercase
                        }, t)
                    }, "ExtensionReplacementWarning"))), a.createElement(m.V, {
                        type: m.Nb.P
                    }, d)), a.createElement(m.Va, {
                        display: m.W.Flex,
                        justifyContent: m.Ua.Center
                    }, a.createElement(m.Va, {
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
            v.displayName = "ExtensionReplacementWarning";
            var g = function(e) {
                    var n = e.closeModal,
                        t = e.extensionName,
                        i = e.monetizationType,
                        r = e.onConfirm,
                        s = i === c.b.InExtensionPurchases,
                        o = i === c.b.Bits,
                        l = Object(u.d)("Are you sure you want to uninstall?", "ExtensionUninstallationWarning"),
                        d = l;
                    return s ? d = Object(u.d)("This extension enables in-extension purchases. If you uninstall this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning") : o && (d = Object(u.d)("This extension is Bits-enabled. If you uninstall this extension, your viewers may not be able to enjoy items and experiences they've exchanged for Bits through the extension on your channel unless you reinstall and activate it. Are you sure you want to uninstall?", "ExtensionUninstallationWarning")), a.createElement(m.Va, null, a.createElement(m.V, {
                        type: m.Nb.H5
                    }, l), a.createElement(m.xb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, a.createElement(m.V, null, Object(u.d)("You are uninstalling {extensionName} ", {
                        extensionName: a.createElement(m.V, {
                            bold: !0,
                            type: m.Nb.P
                        }, t)
                    }, "ExtensionUninstallationWarning")), a.createElement(m.Va, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(m.V, {
                        type: m.Nb.P
                    }, d))), a.createElement(m.Va, {
                        display: m.W.Flex,
                        justifyContent: m.Ua.Center
                    }, a.createElement(m.Va, {
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
                            return a.createElement(v, {
                                closeModal: e.closeModal,
                                existingExtensionName: e.existingExtensionName,
                                existingMonetizationType: e.existingMonetizationType,
                                activationSlot: e.activationSlot,
                                onConfirm: e.onConfirm
                            });
                        case c.a.Uninstall:
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
                    return i.createElement(a.Va, {
                        display: a.W.Flex,
                        flexDirection: a.Y.Column
                    }, i.createElement(a.cb, {
                        width: 300,
                        height: 200
                    }), i.createElement(a.Va, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(a.cb, {
                        width: 250,
                        height: 15
                    })), i.createElement(a.Va, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.cb, {
                        width: 140,
                        height: 15
                    })), i.createElement(a.Va, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(a.cb, {
                        width: 60,
                        height: 15
                    })))
                };
            r.displayName = "ExtensionCardPlaceholder", t.d(n, "a", function() {
                return r
            })
        },
        i2r2: function(e, n) {
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
                v = t("MM5q"),
                g = t("+/wI"),
                E = t("/7QA"),
                x = t("ZDlU"),
                h = t("LA8z"),
                k = t("4VQm"),
                f = t("yR8l"),
                b = t("V+GM"),
                y = t("geRD"),
                N = t("NvVO"),
                S = t("2xye"),
                C = t("0QYl"),
                I = t("d9uE"),
                D = t("8xJJ"),
                O = t("1IJ0"),
                w = t("OzNJ"),
                P = t("22qk"),
                V = t("vYrU"),
                j = t("GnwI"),
                L = t("Ue10"),
                F = t("yG7w"),
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
                            for (var c = 0; c < 16; c++) d.push(a.createElement(L.Va, {
                                key: c,
                                padding: 1
                            }, a.createElement(I.a, null)));
                        else {
                            if (!l && !o && s) return a.createElement(x.a, {
                                message: Object(E.d)("Something went wrong.", "ExtensionCategoryPageComponent")
                            });
                            if (!(l || o || s)) return a.createElement(h.a, null, r && r.login && a.createElement(L.z, {
                                linkTo: Object(P.c)(r.login)
                            }, Object(E.d)("Browse extensions", "PageNotFound")));
                            o && o.extensions && (d = o.extensions.edges.map(this.renderCard, this))
                        }
                        var u = "",
                            m = a.createElement(L.Va, {
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(L.cb, {
                                height: 16,
                                width: 360
                            }));
                        return o && (o.name && (u = o.name), o.description && (m = a.createElement(L.V, {
                            color: L.O.Alt,
                            fontSize: L.Aa.Size5,
                            type: L.Nb.P
                        }, o.description))), a.createElement(k.b, null, a.createElement(L.Va, {
                            padding: 4
                        }, a.createElement(O.a, {
                            channelLogin: r && r.login,
                            showBackLink: n,
                            title: u
                        }), a.createElement(L.xb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, a.createElement(L.Va, {
                            padding: {
                                bottom: 2
                            }
                        }, m), a.createElement(D.a, {
                            loadMoreEnabled: this.canLoadMoreExtensions(),
                            loadMore: this.loadMoreExtensions
                        }, d), s && a.createElement(L.V, {
                            "data-test-selector": i.ErrorMessage
                        }, Object(E.d)("We're having trouble fetching extensions.", "ExtensionCategoryPage")))))
                    }, n.prototype.renderCard = function(e) {
                        var n = this.props,
                            t = n.extensionCategoryPageData,
                            i = n.match,
                            r = e.node;
                        return a.createElement(L.Na, {
                            key: r.id,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(C.a, {
                            authorName: r.authorName,
                            categoryID: i.params.categoryID,
                            cheeringEnabled: Object(V.a)(t.currentUser),
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
                                medium: S.PageviewMedium.ExtensionCategory
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
                T = Object(d.compose)(Object(j.c)("ExtensionCategoryPage", {
                    destination: N.a.ExtensionsCategory
                }), Object(b.a)({
                    location: S.PageviewLocation.ExtensionsCategory
                }), Object(f.a)(R, {
                    name: "extensionCategoryPageData",
                    options: function(e) {
                        return {
                            variables: {
                                categoryID: e.match.params.categoryID,
                                includeCurrentUser: e.isLoggedIn
                            }
                        }
                    }
                }), Object(f.a)(F, {
                    name: "installExtension"
                }))(U);
            var _ = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(g.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(u.d)(v.a, {})
                        },
                        showLoginModal: function() {
                            return Object(m.e)(c.a.ExtensionInstallButton)
                        }
                    }, e)
                })(T),
                M = t("Z5H4"),
                A = t("oJmH"),
                B = t("5IFo"),
                W = t("VQbD"),
                z = t("DMoW"),
                q = function(e) {
                    var n = e.extensionClientID,
                        t = e.extensionState,
                        i = e.extensionVersion,
                        r = e.isChannelCheeringEnabled,
                        s = e.isExtensionInstalled,
                        l = e.userLogin,
                        d = e.monetizationType,
                        c = e.onInstall,
                        u = e.onUninstall;
                    if (s) return a.createElement(L.Va, {
                        display: L.W.Flex,
                        alignItems: L.f.Center,
                        justifyContent: L.Ua.Center,
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(L.Va, {
                        padding: {
                            right: 1
                        }
                    }, a.createElement(L.z, {
                        linkTo: o.__assign({}, Object(P.b)(l, n, i), {
                            state: {
                                medium: S.PageviewMedium.ExtensionPage,
                                content: S.PageviewContent.ExtensionConfigureButton
                            }
                        }),
                        type: L.F.Text,
                        size: L.D.Large
                    }, Object(E.d)("Configure", "ExtensionPage"))), a.createElement(L.z, {
                        type: L.F.Hollow,
                        onClick: u
                    }, Object(E.d)("Uninstall", "ExtensionPage")));
                    var m = void 0,
                        p = Object(E.d)("Install", "ExtensionPage");
                    if (t !== z.v.RELEASED || d !== w.b.Bits || r) m = a.createElement(L.z, {
                        size: L.D.Large,
                        icon: L.nb.Plus,
                        onClick: c
                    }, p);
                    else {
                        var v = Object(E.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "ExtensionPage");
                        m = a.createElement(L.Qb, {
                            label: v,
                            direction: L.Sb.Left
                        }, a.createElement(L.z, {
                            size: L.D.Large,
                            icon: L.nb.Plus,
                            disabled: !0
                        }, p))
                    }
                    return a.createElement(L.Va, {
                        display: L.W.Flex,
                        alignItems: L.f.Center,
                        justifyContent: L.Ua.Center,
                        flexGrow: 0,
                        flexShrink: 0
                    }, m)
                };
            q.displayName = "ExtensionButtons";
            var H, G = t("1hWM"),
                Q = t("s6gS"),
                Y = t("/Qsj");
            ! function(e) {
                e.AnchorTypes = "anchor-types", e.ChatFeature = "has-chat-support", e.Features = "features-container", e.MonetizationTypeIEP = "monetization-in-extension-purchases", e.MonetizationTypeBits = "monetization-bits", e.TestStatusDisclosure = "test-status-disclosure"
            }(H || (H = {}));
            var $ = function(e) {
                var n = e.supportedAnchors.map(function(e) {
                        return Object(Q.a)(e, !1)
                    }).concat(e.supportedPlatforms.filter(function(e) {
                        return e !== G.ExtensionPlatform.Web
                    }).map(function(e) {
                        return Object(Y.a)(e, !1)
                    })),
                    t = e.hasChatSupport;
                return a.createElement(L.xb, {
                    background: L.r.Base,
                    border: !0,
                    padding: 1
                }, a.createElement(L.Va, null, a.createElement(L.Va, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(L.V, {
                    type: L.Nb.Strong
                }, Object(E.d)("Details", "ExtensionDetails"))), a.createElement(L.V, {
                    type: L.Nb.P,
                    wordBreak: L.Zb.BreakWord
                }, e.description)), a.createElement(L.xb, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, a.createElement(L.Va, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(L.V, {
                    type: L.Nb.Strong
                }, Object(E.d)("Additional Information", "ExtensionDetails"))), a.createElement(L.V, {
                    type: L.Nb.P
                }, Object(E.d)("Version: {extensionVersion}", {
                    extensionVersion: e.extensionVersion
                }, "ExtensionDetails")), a.createElement(L.V, {
                    type: L.Nb.P
                }, Object(E.d)("Support: {supportEmail}", {
                    supportEmail: a.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: "mailto:" + e.supportEmail
                    }, e.supportEmail)
                }, "ExtensionDetails")), a.createElement(L.V, {
                    type: L.Nb.P,
                    "data-test-selector": H.AnchorTypes
                }, Object(E.d)("{typesCount, plural, one {Type: {types}} other {Types: {types}}}", {
                    types: n.join(", "),
                    typesCount: n.length
                }, "ExtensionDetails")), "" !== e.privacyPolicyURL && a.createElement(L.V, {
                    type: L.Nb.P,
                    wordBreak: L.Zb.BreakWord
                }, Object(E.d)("Privacy Policy: {privacyPolicyURL}", {
                    privacyPolicyURL: a.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: e.privacyPolicyURL
                    }, e.privacyPolicyURL)
                }, "ExtensionDetails")), "" !== e.termsURL && a.createElement(L.V, {
                    type: L.Nb.P,
                    wordBreak: L.Zb.BreakWord
                }, Object(E.d)("User Agreement: {termsOfServiceURL}", {
                    termsOfServiceURL: a.createElement("a", {
                        target: "_blank",
                        rel: "noopener",
                        href: e.termsURL
                    }, e.termsURL)
                }, "ExtensionDetails"))), t && a.createElement(L.xb, {
                    "data-test-selector": H.Features,
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, a.createElement(L.Va, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(L.V, {
                    type: L.Nb.Strong
                }, Object(E.d)("Features", "ExtensionDetails"))), e.hasChatSupport && a.createElement(L.V, {
                    "data-test-selector": H.ChatFeature,
                    type: L.Nb.P
                }, Object(E.d)("This extension can send messages to your chat.", "ExtensionDetails"))), e.releaseState !== z.v.RELEASED && a.createElement(L.xb, {
                    "data-test-selector": H.TestStatusDisclosure,
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    }
                }, a.createElement(L.Va, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(L.V, {
                    type: L.Nb.Strong
                }, Object(E.d)("Test Extension", "ExtensionDetails"))), a.createElement(L.V, {
                    type: L.Nb.P
                }, Object(E.d)("Twitch permits 3rd party developers to submit Extensions for purposes of testing the performance and other attributes of an Extension before making a final submission to Twitch Extensions. This means the Extension has not been evaluated by Twitch in accordance with its policies.", "ExtensionDetails"), a.createElement(L.Na, {
                    padding: {
                        left: .5
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions"
                }, Object(E.d)("Learn More.", "ExtensionDetailsTest"))))), e.monetizationType === w.b.InExtensionPurchases && a.createElement(L.xb, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    },
                    "data-test-selector": H.MonetizationTypeIEP
                }, a.createElement(L.Va, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(L.V, {
                    type: L.Nb.Strong
                }, Object(E.d)("In-Extension Purchases", "ExtensionDetails"))), a.createElement(L.V, {
                    type: L.Nb.P
                }, Object(E.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "ExtensionDetails"), a.createElement(L.Na, {
                    padding: {
                        left: .5
                    }
                }, a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                }, Object(E.d)("Learn More.", "ExtensionDetails")))), a.createElement(L.V, {
                    type: L.Nb.P
                }, Object(E.d)("For questions regarding your In-Extension Purchase orders, please contact {amazonCustomerService} team.", {
                    amazonCustomerService: a.createElement("a", {
                        href: "https://www.amazon.com/gp/help/customer/contact-us?",
                        target: "_blank",
                        rel: "noopener"
                    }, Object(E.d)("Amazon's Twitch Customer Service", "ExtensionDetails"))
                }, "ExtensionDetailsPurchases"))), e.monetizationType === w.b.Bits && a.createElement(L.xb, {
                    borderTop: !0,
                    padding: {
                        top: 1
                    },
                    margin: {
                        top: 1
                    },
                    "data-test-selector": H.MonetizationTypeBits
                }, a.createElement(L.Va, {
                    display: L.W.Flex,
                    alignItems: L.f.Center,
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(L.mb, {
                    asset: L.nb.Bits
                }), a.createElement(L.Va, {
                    display: L.W.InlineBlock,
                    padding: {
                        left: .5
                    }
                }, a.createElement(L.V, {
                    type: L.Nb.Strong
                }, Object(E.d)("In-Extension Bits", "ExtensionDetails")))), a.createElement(L.V, {
                    type: L.Nb.P
                }, Object(E.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "ExtensionDetails"), a.createElement(L.Va, null, a.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                }, Object(E.d)("Learn More.", "ExtensionDetailsBits"))))))
            };
            $.displayName = "ExtensionDetails";
            var J = t("r52A"),
                Z = t("bwzz"),
                K = t("i2r2"),
                X = (t("MATl"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            hasCardImageError: !1
                        }, n.renderScreenshots = function(e) {
                            return e.map(function(e, t) {
                                return a.createElement(L.Va, {
                                    className: "extension-details-page__screenshot",
                                    padding: {
                                        right: 1
                                    },
                                    key: e
                                }, a.createElement(L.Sa, {
                                    onClick: n.onScreenshotClick,
                                    "data-index": t
                                }, a.createElement(L.o, {
                                    ratio: L.p.Aspect4x3
                                }, a.createElement("img", {
                                    src: e
                                }))))
                            })
                        }, n.renderPlaceholders = function() {
                            return a.createElement(L.xb, {
                                borderRight: !0,
                                borderLeft: !0,
                                borderBottom: !0,
                                padding: 2
                            }, a.createElement(L.Va, {
                                display: L.W.Flex,
                                alignItems: L.f.Center,
                                padding: {
                                    y: 1
                                }
                            }, a.createElement(L.Va, null, a.createElement(L.cb, {
                                width: 60,
                                height: 60
                            })), a.createElement(L.Va, {
                                padding: {
                                    left: 1
                                }
                            }, a.createElement(L.cb, {
                                lineCount: 2,
                                width: 200
                            }))), a.createElement(L.Ha, null, a.createElement(L.P, {
                                cols: 7
                            }, a.createElement(L.xb, {
                                border: !0,
                                background: L.r.Base,
                                display: L.W.Flex,
                                padding: 1
                            }, a.createElement(L.Va, null, a.createElement(L.cb, {
                                height: 300
                            })))), a.createElement(L.P, {
                                cols: 5
                            }, a.createElement(L.xb, {
                                border: !0,
                                background: L.r.Base,
                                padding: 1
                            }, a.createElement(L.Va, null, a.createElement(L.cb, {
                                width: 100
                            }), a.createElement(L.Va, {
                                padding: {
                                    top: 1
                                }
                            }, a.createElement(L.cb, {
                                lineCount: 2
                            }))), a.createElement(L.xb, {
                                borderTop: !0,
                                padding: {
                                    top: 1
                                },
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(L.cb, {
                                width: 100
                            }), a.createElement(L.Va, {
                                padding: {
                                    top: 1
                                }
                            }, a.createElement(L.cb, {
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
                                            return (d = u.sent()).data.installExtension && d.data.installExtension.installedExtension && (c = d.data.installExtension.installedExtension, Object(B.e)({
                                                extensionClientID: c.extension.clientID,
                                                extensionVersion: c.extension.version
                                            }), Object(y.e)(K, o.__assign({}, ee(this.props)), function(e) {
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
                                            return (t = a.sent().data).uninstallExtension && t.uninstallExtension.id && (i = t.uninstallExtension.id, Object(y.e)(K, o.__assign({}, ee(this.props)), function(e) {
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
                        E.o.setPageTitle(Object(E.d)("Extensions", "ExtensionDetailsPageComponent"))
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
                        return l ? a.createElement(L.xb, {
                            padding: 4,
                            background: L.r.Alt
                        }, this.renderPageHeader(), this.renderPlaceholders()) : s ? a.createElement(x.a, {
                            message: Object(E.d)("An error occurred on this page", "ExtensionDetailsPageComponent")
                        }) : o ? a.createElement(L.xb, {
                            padding: 4,
                            background: L.r.Alt
                        }, this.renderPageHeader(), a.createElement(L.xb, {
                            borderRight: !0,
                            borderLeft: !0,
                            borderBottom: !0,
                            padding: 2
                        }, a.createElement(L.Va, {
                            display: L.W.Flex,
                            flexWrap: L.Z.NoWrap,
                            justifyContent: L.Ua.Between,
                            flexGrow: 1,
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(L.G, {
                            row: !0,
                            border: !1
                        }, a.createElement(L.I, {
                            alt: o.name,
                            src: this.state.hasCardImageError ? E.a.defaultAvatarURL : o.iconURLs.square100,
                            aspect: L.p.Aspect1x1,
                            size: L.J.Size6,
                            onError: this.onCardImageError
                        }), a.createElement(L.H, null, a.createElement(L.Va, {
                            padding: 1
                        }, a.createElement(L.V, {
                            type: L.Nb.H4
                        }, o.name), a.createElement(L.V, {
                            type: L.Nb.Span,
                            color: L.O.Alt2
                        }, Object(E.d)("Created by {extensionAuthor}", {
                            extensionAuthor: o.authorName
                        }, "ExtensionDetailsPageComponent"))))), n && o.self && o.self.canInstall && a.createElement(q, {
                            extensionClientID: o.clientID,
                            extensionState: o.state,
                            extensionVersion: o.version,
                            isChannelCheeringEnabled: d,
                            isExtensionInstalled: this.isExtensionInstalled(),
                            userLogin: i,
                            monetizationType: Object(w.e)(o),
                            onInstall: this.onInstallExtension,
                            onUninstall: this.confirmExtensionUninstallation
                        })), a.createElement(L.Ha, null, a.createElement(L.P, {
                            cols: 7
                        }, a.createElement(L.xb, {
                            background: L.r.Base,
                            border: !0,
                            padding: 1
                        }, a.createElement(W.a, {
                            insetStyle: !0,
                            items: this.renderScreenshots(o.screenshotURLs)
                        }))), a.createElement(L.P, {
                            cols: 5
                        }, a.createElement($, {
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
                        }))))) : a.createElement(h.a, null, n && a.createElement(L.z, {
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

            function ee(e) {
                var n = e.match,
                    t = e.isLoggedIn,
                    i = n.params.extensionID.split("-");
                return {
                    extensionID: i[0],
                    extensionVersion: i[1],
                    isLoggedIn: t
                }
            }
            var ne, te = Object(A.compose)(Object(j.c)("ExtensionDetailsPage", {
                    destination: N.a.ExtensionDetails
                }), Object(b.a)({
                    location: S.PageviewLocation.ExtensionDetails
                }), Object(f.a)(K, {
                    name: "extensionDetailsPageData",
                    options: function(e) {
                        return {
                            variables: o.__assign({}, ee(e))
                        }
                    }
                }), Object(f.a)(J, {
                    name: "installExtension"
                }), Object(f.a)(Z, {
                    name: "uninstallExtension"
                }))(X),
                ie = t("cZKs"),
                ae = t("8Ad5");
            t("Hhhw");
            ! function(e) {
                e.NavigationPrevious = "modal-navigation-previous", e.NavigationNext = "modal-navigation-next"
            }(ne || (ne = {}));
            var re = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onKeyDown = function(e) {
                        var t = e.charCode || e.keyCode;
                        t === ae.a.Left ? n.showPreviousImage() : t === ae.a.Right && n.showNextImage()
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
                    return n > 0 && (i = a.createElement(L.Va, {
                        position: L.db.Absolute,
                        display: L.W.Flex,
                        alignItems: L.f.Stretch,
                        className: "modal-navigation-button modal-navigation-button--previous"
                    }, a.createElement(L.A, {
                        ariaLabel: Object(E.d)("Previous screenshot", "ExtensionsImageViewerModal"),
                        type: L.C.Primary,
                        icon: L.nb.AngleLeft,
                        onClick: this.showPreviousImage,
                        "data-test-selector": ne.NavigationPrevious
                    }))), n < t.length - 1 && (r = a.createElement(L.Va, {
                        position: L.db.Absolute,
                        display: L.W.Flex,
                        alignItems: L.f.Stretch,
                        className: "modal-navigation-button modal-navigation-button--next"
                    }, a.createElement(L.A, {
                        ariaLabel: Object(E.d)("Next screenshot", "ExtensionsImageViewerModal"),
                        type: L.C.Primary,
                        icon: L.nb.AngleRight,
                        onClick: this.showNextImage,
                        "data-test-selector": ne.NavigationNext
                    }))), a.createElement(L.Va, {
                        position: L.db.Relative
                    }, i, a.createElement(L.xb, {
                        padding: {
                            x: 2,
                            y: 3
                        },
                        background: L.r.Base
                    }, a.createElement("img", {
                        src: t[n]
                    }), a.createElement(ie.a, {
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
            var se = Object(l.connect)(null, function(e) {
                return Object(d.bindActionCreators)({
                    showImageViewerModal: function(e) {
                        var n = o.__rest(e, []);
                        return Object(u.d)(se, n)
                    },
                    closeModal: u.c
                }, e)
            })(re);
            var oe, le = Object(l.connect)(function(e) {
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
                            return Object(u.d)(g.a, n)
                        },
                        showExtensionDestructionWarningModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(M.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(u.d)(v.a, {})
                        },
                        showImageViewerModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(se, n)
                        }
                    }, e)
                })(te),
                de = t("cr+I"),
                ce = t("G1aL"),
                ue = t("sZhG"),
                me = t("cVuv");
            (oe || (oe = {})).ErrorMessage = "extension-search-error-message";
            var pe = function(e) {
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
                                            query: me,
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
                                        return (l = o.sent().data).installExtension && l.installExtension.installedExtension && (d = l.installExtension.installedExtension, Object(y.e)(me, {
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
                        searchTerm: ve(n)
                    }, t
                }
                return o.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                    var n = ve(e);
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
                        for (var r = 0; r < 4; r++) i.push(a.createElement(L.Va, {
                            key: r,
                            padding: 1
                        }, a.createElement(I.a, null)));
                    else n && n.extensions && (i = n.extensions.edges.map(this.renderCard, this));
                    return a.createElement(k.b, null, a.createElement(L.Va, {
                        padding: 4
                    }, a.createElement(O.a, {
                        channelLogin: n && n.currentUser && n.currentUser.login,
                        showBackLink: t,
                        title: Object(E.d)("Extension Search Results", "ExtensionSearchPage")
                    }), a.createElement(L.xb, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0,
                        padding: 2
                    }, a.createElement(L.Va, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(ce.a, {
                        initialSearchTerm: this.state.searchTerm,
                        trackingContext: {
                            medium: S.PageviewMedium.ExtensionSearch
                        }
                    })), a.createElement(D.a, {
                        loadMoreEnabled: this.canLoadMoreExtensions(),
                        loadMore: this.loadMoreExtensions
                    }, i), n && n.error && a.createElement(L.V, {
                        "data-test-selector": oe.ErrorMessage
                    }, Object(E.d)("We're having trouble fetching extensions.", "ExtensionSearchPage")))))
                }, n.prototype.renderCard = function(e) {
                    var n = this.props.extensionSearchData,
                        t = e.node;
                    return a.createElement(L.Na, {
                        key: t.id,
                        margin: {
                            y: 1
                        }
                    }, a.createElement(C.a, {
                        authorName: t.authorName,
                        cheeringEnabled: Object(V.a)(n && n.currentUser),
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
                            medium: S.PageviewMedium.ExtensionSearch
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

            function ve(e) {
                return de.parse(e.location.search).q || ""
            }
            var ge = Object(d.compose)(Object(j.c)("ExtensionSearchPage", {
                destination: N.a.ExtensionsSearch
            }), Object(b.a)({
                location: S.PageviewLocation.ExtensionsSearch
            }), Object(f.a)(me, {
                name: "extensionSearchData",
                options: function(e) {
                    return {
                        variables: {
                            search: ve(e),
                            includeCurrentUser: e.isLoggedIn
                        }
                    }
                },
                skip: function(e) {
                    return "" === ve(e)
                }
            }), Object(f.a)(ue, {
                name: "installExtension"
            }))(pe);
            var Ee = Object(l.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        showExtensionInstalledModal: function(e) {
                            var n = o.__rest(e, []);
                            return Object(u.d)(g.a, n)
                        },
                        showExtensionErrorModal: function() {
                            return Object(u.d)(v.a, {})
                        },
                        showLoginModal: function() {
                            return Object(m.e)(c.a.ExtensionInstallButton)
                        }
                    }, e)
                })(ge),
                xe = function() {
                    return a.createElement(s.a, null, a.createElement(r.a, {
                        path: "/ext/search",
                        component: Ee
                    }), a.createElement(r.a, {
                        path: "/ext/categories/:categoryID",
                        component: _
                    }), a.createElement(r.a, {
                        path: "/ext/:extensionID",
                        component: le
                    }))
                };
            xe.displayName = "ExtensionsRoot", t.d(n, "ExtensionsRoot", function() {
                return xe
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
                        case a.t.COMPONENT:
                            t = n ? Object(i.d)("COMPONENT", "ExtensionAnchorType") : Object(i.d)("Component", "ExtensionAnchorType");
                            break;
                        case a.t.PANEL:
                            t = n ? Object(i.d)("PANEL", "ExtensionAnchorType") : Object(i.d)("Panel", "ExtensionAnchorType");
                            break;
                        case a.t.VIDEO_OVERLAY:
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
                    return i.createElement(a.xb, {
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