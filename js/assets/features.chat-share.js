(window.webpackJsonp = window.webpackJsonp || []).push([
    [174], {
        "1VMv": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DismissPurchaseToken"
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
                                    value: "DismissPurchaseTokenInput"
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
                                value: "dismissPurchaseToken"
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
                                        value: "token"
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
                    end: 113
                }
            };
            n.loc.source = {
                body: "mutation DismissPurchaseToken($input:DismissPurchaseTokenInput!) {\ndismissPurchaseToken(input:$input) {\ntoken\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        EnXQ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Chat_ShareResub_ChannelData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                        value: "channelLogin"
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
                                                value: "resubNotification"
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
                                                        value: "months"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "token"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "query Chat_ShareResub_ChannelData($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nself {\nresubNotification {\nid\nmonths\ntoken\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "L3x+": function(e, t, n) {},
        QjsH: function(e, t, n) {},
        VDBt: function(e, t, n) {},
        bBo8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "SharePurchaseTokenInChat"
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
                                    value: "SharePurchaseTokenInChatInput"
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
                                value: "sharePurchaseTokenInChat"
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
                                        value: "token"
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
                    end: 125
                }
            };
            n.loc.source = {
                body: "mutation SharePurchaseTokenInChat($input:SharePurchaseTokenInChatInput!) {\nsharePurchaseTokenInChat(input:$input) {\ntoken\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        miqE: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i = n("mrSG"),
                s = n("TSYQ"),
                r = n("q1tI"),
                o = n("/MKj"),
                c = n("/7QA"),
                u = n("yR8l"),
                l = n("x7UT"),
                d = n("0Log"),
                h = n("geRD"),
                m = n("/aPz"),
                p = n("2xye"),
                g = n("VeT4"),
                k = n("Ue10"),
                f = (n("VDBt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            formInputValue: "",
                            sharing: !1
                        }, t.hasUnmounted = !1, t.handleShareClick = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            this.setState({
                                                sharing: !0
                                            }), e.label = 1;
                                        case 1:
                                            return e.trys.push([1, , 3, 4]), [4, this.props.onShare(this.state.formInputValue)];
                                        case 2:
                                            return e.sent(), [3, 4];
                                        case 3:
                                            return this.hasUnmounted || this.setState({
                                                sharing: !1
                                            }), [7];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onInputChange = function(e) {
                            t.setState({
                                formInputValue: e.currentTarget.value
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.hasUnmounted = !1
                    }, t.prototype.componentWillUnmount = function() {
                        this.hasUnmounted = !0
                    }, t.prototype.render = function() {
                        var e = s("share-input", {
                                "share-input--hidden": this.props.hide
                            }),
                            t = this.state.formInputValue.length > 255,
                            n = t ? "-" + (this.state.formInputValue.length - 255) : Object(c.d)("Share", "ChatResubNotification"),
                            a = Object(c.d)("Close", "ChatResubNotification"),
                            i = Object(c.d)("Add a message to the streamer", "ChatResubNotification"),
                            o = this.state.sharing ? k.E.Loading : k.E.Default;
                        return r.createElement(k.Xa, {
                            className: e,
                            padding: 1,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            position: k.hb.Absolute
                        }, r.createElement(k.Bb, {
                            className: "share-input__container",
                            position: k.hb.Relative,
                            border: !0,
                            background: k.r.Base,
                            padding: 1
                        }, r.createElement(k.Xa, {
                            position: k.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(k.A, {
                            ariaLabel: a,
                            onClick: this.props.onClose,
                            type: k.C.Secondary,
                            icon: k.rb.Close,
                            "data-a-target": "resub-notification-close-form-btn",
                            "data-test-selector": "share-input__close-form-btn"
                        })), r.createElement(k.Xa, {
                            textAlign: k.Nb.Center,
                            padding: {
                                top: 1,
                                bottom: 2
                            }
                        }, this.props.children), r.createElement(k.Xa, {
                            display: k.X.Flex,
                            flexWrap: k.Ba.NoWrap
                        }, r.createElement(k.Xa, {
                            fullWidth: !0
                        }, r.createElement(k.Ra, {
                            autoFocus: !0,
                            type: k.Ta.Text,
                            value: this.state.formInputValue,
                            onChange: this.onInputChange,
                            placeholder: i,
                            "data-a-target": "resub-notification-share-message-input",
                            "data-test-selector": "share-input__share-message-input"
                        })), r.createElement(k.z, {
                            disabled: t,
                            onClick: this.handleShareClick,
                            "data-a-target": "resub-notification-send-msg-btn",
                            "data-test-selector": "share-input__send-msg-btn",
                            state: o
                        }, n))))
                    }, t
                }(r.Component)),
                b = (n("L3x+"), function(e) {
                    var t = Object(c.d)("Share", "Chat--SharePrompt"),
                        n = Object(c.d)("Close", "Chat--SharePrompt"),
                        a = s("chat-share-prompt", {
                            "chat-share-prompt--hidden": e.hide || !e.children
                        });
                    return r.createElement(k.Xa, {
                        position: k.hb.Absolute,
                        fullWidth: !0,
                        className: a,
                        padding: {
                            y: .5,
                            left: .5
                        }
                    }, r.createElement(k.Xa, {
                        display: k.X.Flex,
                        padding: 1,
                        justifyContent: k.Wa.Between,
                        alignItems: k.f.Center,
                        flexWrap: k.Ba.NoWrap
                    }, r.createElement(k.W, {
                        "data-a-target": "resub-notification-months-subbed-text",
                        "data-test-selector": "share-prompt__text"
                    }, e.children), r.createElement(k.Xa, {
                        display: k.X.Flex,
                        flexWrap: k.Ba.NoWrap,
                        alignItems: k.f.Center,
                        flexShrink: 0,
                        padding: {
                            left: .5
                        }
                    }, r.createElement(k.Xa, {
                        display: k.X.Inline,
                        padding: {
                            right: .5
                        },
                        flexShrink: 0
                    }, r.createElement(k.z, {
                        onClick: e.onClickShare,
                        size: k.D.Small,
                        "data-a-target": "resub-notification-share-notification-btn",
                        "data-test-selector": "share-prompt__share-btn"
                    }, t)), r.createElement(k.Xa, {
                        flexShrink: 0
                    }, r.createElement(k.A, {
                        ariaLabel: n,
                        onClick: e.onClickClose,
                        type: k.C.Secondary,
                        icon: k.rb.Close,
                        "data-a-target": "resub-notification-close-notification-btn",
                        "data-test-selector": "share-prompt__close-btn"
                    })))))
                }),
                v = n("OpME"),
                S = n("1VMv"),
                N = n("oP/b"),
                y = n("bBo8"),
                _ = (n("QjsH"), "chat_dismiss"),
                C = "chat_share",
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showMessageInput: !1,
                            sendingMessage: !1
                        }, t.dataIsReady = function(e) {
                            return e.data && !e.data.loading && !e.data.error
                        }, t.purchaseTokensExist = function(e) {
                            return e.data.user.self && e.data.user.self.purchaseTokens.length > 0
                        }, t.manageParentSpace = function(e) {
                            t.dataIsReady(e) && t.purchaseTokensExist(e) ? t.props.requestSpace() : t.props.dismissSpace()
                        }, t.toggleContentShown = function() {
                            t.setState(function(e) {
                                return {
                                    showMessageInput: !e.showMessageInput
                                }
                            })
                        }, t.dismissPurchaseToken = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.sendingMessage || !this.props.data.user.self || !this.props.data.user.self.purchaseTokens) return [2];
                                            this.setState({
                                                sendingMessage: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, , 3, 4]), e = this.props.data.user.self.purchaseTokens[0], t = function(e) {
                                                return e.user.self && (e.user.self.purchaseTokens = e.user.self.purchaseTokens.slice(1)), e
                                            }, Object(h.e)(N, {
                                                channelLogin: this.props.channelLogin
                                            }, t), c.o.track(p.SpadeEventType.FuelSocialShare, {
                                                channel_id: this.props.data.user.id,
                                                user_id: this.props.currentUserID,
                                                asin: e.asin,
                                                item_name: e.title,
                                                context: _,
                                                payout_enabled: this.props.data.user.settings.isCommerceRevShareEnabled
                                            }), [4, this.props.dismissPurchaseToken(Object(h.a)({
                                                token: e.id,
                                                channelID: this.props.data.user.id
                                            }))];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return this.setState({
                                                sendingMessage: !1
                                            }), [7];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.sharePurchase = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.sendingMessage || !this.props.data.user.self || !this.props.data.user.self.purchaseTokens) return [2];
                                            this.setState({
                                                sendingMessage: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, , 3, 4]), t = this.props.data.user.self.purchaseTokens[0], [4, this.props.sharePurchaseTokenInChat(Object(h.a)({
                                                token: t.id,
                                                channelID: this.props.data.user.id,
                                                message: e
                                            }))];
                                        case 2:
                                            return a.sent(), c.o.track(p.SpadeEventType.FuelSocialShare, {
                                                channel_id: this.props.data.user.id,
                                                user_id: this.props.currentUserID,
                                                asin: t.asin,
                                                item_name: t.title,
                                                context: C,
                                                context_details: e,
                                                payout_enabled: this.props.data.user.settings.isCommerceRevShareEnabled
                                            }), n = function(e) {
                                                return e.user.self && (e.user.self.purchaseTokens = e.user.self.purchaseTokens.slice(1)), e
                                            }, Object(h.e)(N, {
                                                channelLogin: this.props.channelLogin
                                            }, n), [3, 4];
                                        case 3:
                                            return this.setState({
                                                sendingMessage: !1
                                            }), [7];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.manageParentSpace(this.props)
                    }, t.prototype.componentDidUpdate = function() {
                        this.manageParentSpace(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (this.dataIsReady(e)) {
                            var t = e.pubsub.messages.userCommerceUpdateEvent,
                                n = this.props.pubsub.messages.userCommerceUpdateEvent,
                                a = !n && t,
                                i = n && t && n.time !== t.time;
                            (a || i) && this.props.data && this.props.data.refetch()
                        }
                    }, t.prototype.render = function() {
                        return this.dataIsReady(this.props) && this.purchaseTokensExist(this.props) && this.props.data.user.self ? this.renderPurchaseToken(this.props.data.user.self.purchaseTokens[0]) : null
                    }, t.prototype.renderPurchaseToken = function(e) {
                        var t, n;
                        t = this.props.data.user.settings.isCommerceRevShareEnabled ? Object(c.d)("You bought {product} and supported {channelName}!", {
                            product: r.createElement("strong", null, e.title),
                            channelName: r.createElement("strong", null, this.props.channelDisplayName)
                        }, "ShareToChat") : Object(c.d)("You bought {product} while watching {channelName}!", {
                            product: r.createElement("strong", null, e.title),
                            channelName: r.createElement("strong", null, this.props.channelDisplayName)
                        }, "ShareToChat");
                        var a = e.inGameContents.map(this.renderLootInGameContent),
                            i = e.badges.map(this.renderLootBadge),
                            s = e.emoteSets.map(this.renderLootEmoteSet),
                            o = e.bits.map(this.renderLootBits, this);
                        return (a.length || i.length || s.length || o.length) && (n = r.createElement(k.Xa, {
                            "data-test-selector": "share-purchase__loot",
                            padding: {
                                bottom: 1
                            },
                            display: k.X.Flex,
                            justifyContent: k.Wa.Center
                        }, a, i, s, o), t = Object(c.d)("You bought {product} and opened a Twitch Crate! Let {channelName} know you shared the love.", {
                            product: r.createElement("strong", null, e.title),
                            channelName: r.createElement("strong", null, this.props.channelDisplayName)
                        }, "ShareToChat")), r.createElement(k.Xa, {
                            className: "chat-resub-notification",
                            padding: 0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            position: k.hb.Absolute
                        }, r.createElement(b, {
                            hide: this.state.showMessageInput,
                            onClickShare: this.toggleContentShown,
                            onClickClose: this.dismissPurchaseToken
                        }, t), r.createElement(f, {
                            hide: !this.state.showMessageInput,
                            onShare: this.sharePurchase,
                            onClose: this.toggleContentShown
                        }, r.createElement(k.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement("figure", null, r.createElement("img", {
                            width: 40,
                            height: 40,
                            src: e.imageThumbnail
                        }))), n, r.createElement(k.W, null, Object(c.d)("Score! Give a shout out to {channelName} in Chat about all your sweet loot!", {
                            channelName: r.createElement("strong", null, this.props.channelDisplayName)
                        }, "ShareToChat"))))
                    }, t.prototype.renderLootInGameContent = function(e) {
                        return r.createElement(k.Xa, {
                            key: e.id,
                            margin: {
                                top: .5,
                                right: 1
                            },
                            "data-test-selector": "share-purchase__igc"
                        }, r.createElement("img", {
                            className: "share-to-chat__loot",
                            src: e.imageURL
                        }))
                    }, t.prototype.renderLootEmoteSet = function(e) {
                        return Object(v.b)(e.emoteSet.emotes).map(function(e) {
                            return r.createElement(k.Xa, {
                                key: e.id,
                                margin: {
                                    top: .5,
                                    right: 1
                                },
                                "data-test-selector": "share-purchase__emoticon"
                            }, r.createElement("img", {
                                className: "share-to-chat__loot",
                                srcSet: e.srcSet,
                                alt: e.displayName
                            }))
                        })
                    }, t.prototype.renderLootBadge = function(e) {
                        return r.createElement(k.Xa, {
                            key: e.id,
                            margin: {
                                top: .5,
                                right: 1
                            },
                            "data-test-selector": "share-purchase__badge"
                        }, r.createElement("img", {
                            className: "share-to-chat__loot",
                            src: e.badge.image2x
                        }))
                    }, t.prototype.renderLootBits = function(e) {
                        if (this.props.bitsConfig) return r.createElement(k.Xa, {
                            key: e.id,
                            margin: {
                                top: .5,
                                right: 1
                            },
                            "data-test-selector": "share-purchase__bits"
                        }, r.createElement(g.a, {
                            count: e.quantity,
                            bitsConfig: this.props.bitsConfig,
                            withImage: !0
                        }))
                    }, t = i.__decorate([Object(u.a)(N, {
                        name: "data",
                        options: function(e) {
                            return {
                                variables: {
                                    channelLogin: e.channelLogin
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.channelLogin
                        }
                    }), Object(l.a)([{
                        topic: function(e) {
                            return Object(m.D)(e.currentUserID)
                        },
                        mapMessageTypesToProps: (a = {}, a[d.PubsubMessageType.ChatNotification] = "userCommerceUpdateEvent", a)
                    }])], t)
                }(r.Component),
                T = Object(u.a)(S, {
                    name: "dismissPurchaseToken"
                })(Object(u.a)(y, {
                    name: "sharePurchaseTokenInChat"
                })(E));
            var I = Object(o.connect)(function(e) {
                    return {
                        currentUserID: e.session.user && "" + e.session.user.id || ""
                    }
                })(T),
                R = n("kRBY"),
                w = n("oJmH"),
                D = (n("tRzL"), function(e) {
                    var t = s("rare-emote__face", {
                            "rare-emote__face--animate": !!e.animate
                        }),
                        n = s("rare-emote__neck", {
                            "rare-emote__neck--animate": !!e.animate
                        });
                    return r.createElement(k.Xa, {
                        overflow: k.cb.Hidden,
                        className: "rare-emote"
                    }, r.createElement(k.Pa, {
                        zIndex: k.ec.Above,
                        position: k.hb.Relative
                    }, r.createElement("img", {
                        className: t,
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.emoteID + "/2.0"
                    })), r.createElement(k.Xa, {
                        position: k.hb.Relative,
                        zIndex: k.ec.Default,
                        className: n
                    }, r.createElement(k.qb, {
                        width: 28,
                        height: 28,
                        asset: k.rb.Neck
                    })))
                }),
                L = 3;
            var P = n("cpJf"),
                F = n("EnXQ"),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            resubDismissed: !1,
                            showMessageInput: !1,
                            sendingMessage: !1
                        }, t.randomEmoteId = t.getRandomEmoteId(), t.dataIsReady = function(e) {
                            return e.data && !e.data.loading && !e.data.error
                        }, t.resubExists = function(e, t) {
                            return e.data.user.self && e.data.user.self.resubNotification && !t.resubDismissed
                        }, t.manageParentSpace = function() {
                            t.dataIsReady(t.props) && t.resubExists(t.props, t.state) ? t.props.requestSpace() : t.props.dismissSpace()
                        }, t.toggleContentShown = function() {
                            t.setState(function(e) {
                                return {
                                    showMessageInput: !e.showMessageInput
                                }
                            })
                        }, t.dismissResubNotification = function() {
                            t.setState({
                                resubDismissed: !0
                            })
                        }, t.shareResub = function(e) {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (this.state.sendingMessage || !this.props.data.user.self || !this.props.data.user.self.resubNotification) return [2];
                                            this.setState({
                                                sendingMessage: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, 5, 6]), this.props.authToken ? [4, function(e, t, n, a) {
                                                return i.__awaiter(this, void 0, void 0, function() {
                                                    var s, r, o, u, l;
                                                    return i.__generator(this, function(i) {
                                                        switch (i.label) {
                                                            case 0:
                                                                s = "https://api.twitch.tv/api/channels/" + e + "/use_chat_notification_token", r = 1, i.label = 1;
                                                            case 1:
                                                                if (!(r <= L)) return [3, 9];
                                                                i.label = 2;
                                                            case 2:
                                                                return i.trys.push([2, 7, , 8]), [4, fetch(s, {
                                                                    body: JSON.stringify({
                                                                        token_id: t,
                                                                        custom_message: n
                                                                    }),
                                                                    method: "POST",
                                                                    headers: {
                                                                        "Client-ID": c.p.config.legacyClientID,
                                                                        Accept: "application/json; charset=UTF-8",
                                                                        "content-type": "application/json; charset=UTF-8",
                                                                        Authorization: "OAuth " + a
                                                                    }
                                                                })];
                                                            case 3:
                                                                return (o = i.sent()).ok ? [2, !0] : [3, 4];
                                                            case 4:
                                                                return [4, o.json()];
                                                            case 5:
                                                                throw u = i.sent(), new Error(u.message);
                                                            case 6:
                                                                return [3, 8];
                                                            case 7:
                                                                if (l = i.sent(), r === L) throw l;
                                                                return [3, 8];
                                                            case 8:
                                                                return ++r, [3, 1];
                                                            case 9:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(this.props.channelLogin, this.props.data.user.self.resubNotification.token, e, this.props.authToken)] : [3, 3];
                                        case 2:
                                            a.sent(), t = function(e) {
                                                return e.user.self && (e.user.self.resubNotification = null), e
                                            }, Object(h.e)(F, {
                                                channelLogin: this.props.channelLogin
                                            }, t), this.dismissResubNotification(), a.label = 3;
                                        case 3:
                                            return [3, 6];
                                        case 4:
                                            return n = a.sent(), c.k.error(n, "Failed to post resub message"), [3, 6];
                                        case 5:
                                            return this.setState({
                                                sendingMessage: !1
                                            }), [7];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.manageParentSpace()
                    }, t.prototype.componentDidUpdate = function() {
                        this.manageParentSpace()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.dataIsReady(e) && e.data.user.self && e.data.user.self.resubNotification && !this.randomEmoteId && (this.randomEmoteId = this.getRandomEmoteId()), this.dataIsReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                    }, t.prototype.render = function() {
                        return this.dataIsReady(this.props) && this.resubExists(this.props, this.state) && this.props.data.user.self && this.props.data.user.self.resubNotification ? this.renderResubToken(this.props.data.user.self.resubNotification) : null
                    }, t.prototype.renderResubToken = function(e) {
                        return r.createElement(k.Xa, {
                            className: "chat-resub-notification",
                            padding: 0,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            position: k.hb.Absolute
                        }, r.createElement(b, {
                            hide: this.state.showMessageInput,
                            onClickShare: this.toggleContentShown,
                            onClickClose: this.dismissResubNotification
                        }, Object(c.d)("It's your {monthsSubbed, number} month anniversary!", {
                            monthsSubbed: e.months
                        }, "ChatResubNotification")), r.createElement(f, {
                            hide: !this.state.showMessageInput,
                            onShare: this.shareResub,
                            onClose: this.toggleContentShown
                        }, r.createElement(D, {
                            emoteID: this.randomEmoteId,
                            animate: this.state.showMessageInput
                        }), r.createElement(k.W, null, Object(c.d)("Hooray! Let {channelName} know it's your {monthsSubbed, number} month anniversary.", {
                            channelName: r.createElement("strong", null, this.props.channelDisplayName),
                            monthsSubbed: e.months
                        }, "ChatResubNotification"))))
                    }, t.prototype.getRandomEmoteId = function() {
                        var e = Math.floor(Math.random() * P.c.length);
                        return P.c[e]
                    }, t
                }(r.Component),
                j = Object(w.compose)(Object(u.a)(F, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(l.a)([{
                    topic: function(e) {
                        return Object(m.F)(e.currentUserId ? e.currentUserId : "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !e.currentUserId
                    }
                }]))(O);
            var x, M = Object(o.connect)(function(e) {
                var t = Object(R.e)(e);
                return {
                    currentUserId: t ? t.id : null
                }
            })(j);
            n("z5b3");
            ! function(e) {
                e[e.Resub = 1] = "Resub", e[e.Purchase = 2] = "Purchase"
            }(x || (x = {}));
            var q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        requestedSpaces: new Set
                    }, t.addSpace = function(e) {
                        t.state.requestedSpaces.has(e) || t.setState(function(t) {
                            var n = new Set(t.requestedSpaces);
                            return n.add(e), {
                                requestedSpaces: n
                            }
                        })
                    }, t.removeSpace = function(e) {
                        t.state.requestedSpaces.has(e) && t.setState(function(t) {
                            var n = new Set(t.requestedSpaces);
                            return n.delete(e), {
                                requestedSpaces: n
                            }
                        })
                    }, t.requestResubSpace = function() {
                        t.addSpace(x.Resub)
                    }, t.dismissResubSpace = function() {
                        t.removeSpace(x.Resub)
                    }, t.requestPurchaseSpace = function() {
                        t.addSpace(x.Purchase)
                    }, t.dismissPurchaseSpace = function() {
                        t.removeSpace(x.Purchase)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    this.state.requestedSpaces.size && (e = Array.from(this.state.requestedSpaces.values()).sort()[0]);
                    var t = s({
                            "share-to-chat__space--hidden": e !== x.Resub
                        }),
                        n = s({
                            "share-to-chat__space--hidden": e !== x.Purchase
                        });
                    return r.createElement(k.Xa, null, r.createElement(k.Xa, {
                        className: t
                    }, r.createElement(M, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.props.channelDisplayName,
                        channelLogin: this.props.channelLogin,
                        requestSpace: this.requestResubSpace,
                        dismissSpace: this.dismissResubSpace
                    })), r.createElement(k.Xa, {
                        className: n
                    }, r.createElement(I, {
                        channelDisplayName: this.props.channelDisplayName,
                        channelLogin: this.props.channelLogin,
                        bitsConfig: this.props.bitsConfig,
                        requestSpace: this.requestPurchaseSpace,
                        dismissSpace: this.dismissPurchaseSpace
                    })))
                }, t
            }(r.Component);
            n.d(t, "PublicProps", function() {}), n.d(t, "ShareToChat", function() {
                return q
            })
        },
        "oP/b": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Chat_SharePurchase_ChannelData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                                        value: "channelLogin"
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
                                        value: "settings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isCommerceRevShareEnabled"
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
                                                value: "purchaseTokens"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "asin"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    alias: {
                                                        kind: "Name",
                                                        value: "imageThumbnail"
                                                    },
                                                    name: {
                                                        kind: "Name",
                                                        value: "imageURL"
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
                                                    }],
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
                                                        value: "emoteSets"
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
                                                                value: "emoteSet"
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
                                                                        value: "emotes"
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
                                                                                value: "token"
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
                                                        value: "badges"
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
                                                                value: "badge"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "badge"
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
                                                        value: "bits"
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
                                                                value: "quantity"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "inGameContents"
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
                                                                value: "imageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "30"
                                                                }
                                                            }],
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
                    end: 433
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery Chat_SharePurchase_ChannelData($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nsettings {\nisCommerceRevShareEnabled\n}\nself {\npurchaseTokens {\nid\ntitle\nasin\nimageThumbnail: imageURL(width: 40)\nimageURL\nemoteSets {\nid\nemoteSet {\nid\nemotes {\nid\ntoken\n}\n}\n}\nbadges {\nid\nbadge{\n...badge\n}\n}\nbits {\nid\nquantity\n}\ninGameContents {\nid\nimageURL(width: 30)\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = a
        },
        tRzL: function(e, t, n) {},
        z5b3: function(e, t, n) {}
    }
]);