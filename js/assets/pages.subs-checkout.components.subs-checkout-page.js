webpackJsonp([38], {
    "+/J2": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMilliseconds(r), n
        }
    },
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        });
        var i = "subscribe_to_channel",
            r = "turbo",
            a = "visit_url",
            o = "broadcaster"
    },
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "+e5i": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Clear"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clearUnreadFriendRequests"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "user"
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
                end: 87
            }
        };
        n.loc.source = {
            body: "mutation FriendRequestsNotification_Clear {\nclearUnreadFriendRequests {\nuser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "+sSA": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMilliseconds(999), t
        }
    },
    "/3Lr": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "e", function() {
            return r
        });
        var i, r, a, o, s = {
                BitsLeaderboardEvents: "leaderboard-events-v1",
                CampaignGlobalEvents: "campaign-events",
                CampaignUserEvents: "user-campaign-events",
                ChannelBitsEvents: "channel-bits-events-v1",
                ChannelBitsPinEvents: "channel-bit-events-public",
                ChannelEventUpdates: "channel-event-updates",
                ChannelSubscribeEvents: "channel-subscribe-events-v1",
                ChatRoom: "chatrooms-room-v1",
                ChatRoomsChannel: "chatrooms-channel-v1",
                ChatRoomsUser: "chatrooms-user-v1",
                Friendship: "friendship",
                ImageUpload: "user-image-update",
                ModerationActionsByUserAndChannel: "chat_moderator_actions",
                OnsiteNotifications: "onsite-notifications",
                PayoutOnboardingEvents: "payout-onboarding-events",
                Presence: "presence",
                Raid: "raid",
                StreamChange: "stream-change-v1",
                StreamChatRoom: "stream-chat-room-v1",
                UploadService: "upload",
                UserBitsUpdates: "user-bits-updates-v1",
                UserCommerceEvents: "user-commerce-events",
                UserCrateEvents: "user-crate-events-v1",
                UserSubscribeEvents: "user-subscribe-events-v1",
                VideoPlayback: "video-playback",
                VideoPlaybackById: "video-playback-by-id",
                VideoThumbnailProcessing: "video-thumbnail-processing",
                Whispers: "whispers"
            },
            c = {
                BitsPinEvent: "bits-pin-event",
                BitsLeaderboardEvent: "bits-leaderboard-event",
                ChannelStreamDown: "stream-down",
                ChannelStreamUp: "stream-up",
                ChatNotification: "chat-notification",
                ChatRoomCreated: "created_room",
                ChatRoomDeleted: "deleted_room",
                ChatRoomUpdated: "updated_room",
                ChatRoomsUserModAction: "user_moderation_action",
                ChatRoomMessageCreated: "created_room_message",
                ChatRoomMessageEdited: "edited_room_message",
                ChatRoomMessageDeleted: "deleted_room_message",
                ChatRoomsRoomViewUpdated: "updated_room_view",
                ImageUploadSuccess: "imageuploadsuccess",
                LiveEvent: "live-event",
                ModerationAction: "moderation_action",
                OnsiteNotificationCreate: "create-notification",
                OnsiteNotificationDelete: "delete-notification",
                OnsiteNotificationsRead: "read-notifications",
                OnsiteNotificationSummaryUpdate: "update-summary",
                OnsiteNotificationUpdate: "update-notification",
                PayoutOnboardingEvent: "payout-onboarding-event",
                Presence: "presence",
                PresenceSettings: "settings",
                PurgeMessageRequest: "purge_messages_request",
                RaidCancel: "raid_cancel",
                RaidUpdate: "raid_update",
                StreamChatRoomChatRichEmbed: "chat_rich_embed",
                StreamDown: "stream_down",
                StreamUp: "stream_up",
                UpdatedChannelChatProperty: "updated_channel_chat_property",
                UploadService: "upload",
                UserBitsBalanceUpdate: "balance_update",
                UserBitsBadgeUpdate: "badge_update",
                UserCampaignProgressEvent: "progress",
                UserCampaignRewardEvent: "reward",
                UserCrateEvent: "crate-event",
                UserGiftEvent: "gift-event",
                UserMention: "user_mention",
                VideoThumbnailProcessingComplete: "processing_complete",
                VideoThumbnailProcessingError: "processing_error",
                ViewCount: "viewcount",
                Vodcast: "watchparty-vod",
                WhisperAllThreadsUpdate: "threads",
                WhisperDeleted: "whisper_deleted",
                WhisperEdited: "whisper_edited",
                WhisperReceived: "whisper_received",
                WhisperSent: "whisper_sent",
                WhisperThreadUpdate: "thread"
            },
            l = {
                Accepted: "accepted",
                Requested: "requested",
                Removed: "removed",
                SelfAccepted: "self_accepted",
                SelfRemoved: "self_removed",
                SelfRequested: "self_requested"
            };
        ! function(e) {
            e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.Ban = "ban", e.Clear = "clear", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
        }(i || (i = {})),
        function(e) {
            e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied"
        }(r || (r = {})),
        function(e) {
            e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
        }(a || (a = {})),
        function(e) {
            e.Private = "private", e.Public = "public"
        }(o || (o = {}))
    },
    "/Urv": function(e, t) {},
    "/dIK": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setDate(r), n
        }
    },
    "024F": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMilliseconds()
        }
    },
    "0LAu": function(e, t, n) {
        var i = n("MIQa");
        e.exports = function() {
            return i(new Date)
        }
    },
    "0Mfl": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = "https://www.amazon.com/twitchmerch?channel=tpn&ref_=tw_or_web_tpn_ms"
    },
    "0UyA": function(e, t, n) {
        var i = n("4Z4o");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i - 1), r.setHours(23, 59, 59, 999), r
        }
    },
    "0aH9": function(e, t, n) {
        var i = n("3znZ"),
            r = 6e4,
            a = 6048e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * r,
                c = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - c) / a)
        }
    },
    "0oN5": function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), i(e).getTime() === i(t).getTime()
        }
    },
    "11Bn": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return i(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
        }
    },
    "1gtq": function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), i(e).getTime() === i(t).getTime()
        }
    },
    "1rLR": function(e, t, n) {
        var i = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 3 * n)
        }
    },
    "1udo": function(e, t, n) {
        var i = n("WNGz");
        e.exports = function() {
            return i(new Date)
        }
    },
    "25hp": function(e, t, n) {
        var i = n("G7No");
        e.exports = function(e, t) {
            var n = i(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "2Hj/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("Ex+h"),
            s = n("l4QG");

        function c(e, t) {
            var n = e.activity,
                i = e.availability;
            if (!n) return null;
            switch (n.type) {
                case o.a.Playing:
                    return n.game && n.game.name ? Object(a.d)("playing {game}", {
                        game: n.game.name
                    }, "PresenceActivity") : Object(a.d)("playing", "PresenceActivity");
                case o.a.Watching:
                    var r = function(e) {
                        if (e && e.type === o.a.Watching && e.user) return e.user.hosting && e.user.hosting.displayName ? {
                            isHost: !0,
                            displayName: e.user.hosting.displayName
                        } : {
                            isHost: !1,
                            displayName: e.user.displayName
                        };
                        return null
                    }(n);
                    return r ? i && i === s.a.Offline ? !t && r.isHost ? Object(a.d)("was watching {user} with the {community} community", {
                        user: r.displayName,
                        community: n.user.displayName
                    }, "PresenceActivity") : !t && n.user.stream && n.user.stream.game && n.user.stream.game.name ? Object(a.d)("was watching {user} stream {game}", {
                        user: r.displayName,
                        game: n.user.stream.game.name
                    }, "PresenceActivity") : Object(a.d)("was watching {user}", {
                        user: r.displayName
                    }, "PresenceActivity") : !t && r.isHost ? Object(a.d)("watching {user} with the {community} community", {
                        user: r.displayName,
                        community: n.user.displayName
                    }, "PresenceActivity") : !t && n.user.stream && n.user.stream.game && n.user.stream.game.name ? Object(a.d)("watching {user} stream {game}", {
                        user: r.displayName,
                        game: n.user.stream.game.name
                    }, "PresenceActivity") : Object(a.d)("watching {user}", {
                        user: r.displayName
                    }, "PresenceActivity") : null;
                case o.a.Streaming:
                    return n.stream && n.stream.game && n.stream.game.name ? Object(a.d)("streaming {game}", {
                        game: n.stream.game.name
                    }, "PresenceActivity") : Object(a.d)("streaming", "PresenceActivity");
                default:
                    return null
            }
        }

        function l(e, t) {
            if (!t) return null;
            switch (t.type) {
                case o.a.Streaming:
                    return "/" + e;
                case o.a.Watching:
                    return "/" + t.user.login;
                default:
                    return null
            }
        }

        function u(e) {
            var t = Object(a.d)("Online", "PresenceAvailability");
            switch (e) {
                case s.a.Idle:
                case s.a.Away:
                    return Object(a.d)("Away", "PresenceAvailability");
                case s.a.Busy:
                    return Object(a.d)("Busy", "PresenceAvailability");
                case s.a.Offline:
                    return Object(a.d)("Offline", "PresenceAvailability");
                case s.a.Invisible:
                    return Object(a.d)("Invisible", "PresenceAvailability");
                case s.a.Online:
                default:
                    return t
            }
        }
        var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.o.experiments.getAssignment("TWILIGHT_EXTENDED_PRESENCE")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasExtendedRichPresence: "variant_a" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.activity,
                        n = e.availability,
                        i = e.condensed,
                        a = this.state.hasExtendedRichPresence ? {
                            activity: t,
                            availability: n
                        } : {
                            activity: t
                        };
                    return r.createElement("span", {
                        "data-a-target": "presence-text"
                    }, c(a, i) || u(n))
                }, t
            }(r.Component),
            p = n("Odds"),
            m = function(e) {
                var t = p._15.Online;
                switch (e.availability) {
                    case s.a.Idle:
                    case s.a.Away:
                        t = p._15.Away;
                        break;
                    case s.a.Busy:
                        t = p._15.Busy;
                        break;
                    case s.a.Invisible:
                        t = p._15.Invisible;
                        break;
                    case s.a.Offline:
                        t = p._15.Offline;
                        break;
                    case s.a.Online:
                        t = p._15.Online;
                        break;
                    default:
                        t = p._15.Online
                }
                return r.createElement(p._14, {
                    status: t
                })
            },
            f = n("HZww");
        var g = n("aMxy"),
            h = n("mqvl"),
            v = n("TVUY");

        function y(e) {
            return function(t) {
                return function(e) {
                    return function(t) {
                        return function(n) {
                            function a(t) {
                                var i = n.call(this, t) || this;
                                return i.options = e(t), i
                            }
                            return i.__extends(a, n), a.prototype.componentDidMount = function() {
                                this.options.skip || this.subscribe(this.options)
                            }, a.prototype.componentWillReceiveProps = function(t) {
                                var n = e(t);
                                n.topic === this.options.topic || n.skip || (this.unsubscribe(), this.subscribe(n)), this.options = n
                            }, a.prototype.componentWillUnmount = function() {
                                this.unsubscribe()
                            }, a.prototype.render = function() {
                                return r.createElement(t, i.__assign({}, this.props))
                            }, a.prototype.subscribe = function(e) {
                                this.unsubscriber = Object(f.p)({
                                    fragment: e.fragment,
                                    id: e.id,
                                    topic: e.topic,
                                    type: e.type,
                                    mutator: e.mutator
                                })
                            }, a.prototype.unsubscribe = function() {
                                this.unsubscriber && this.unsubscriber()
                            }, a
                        }(r.Component)
                    }
                }(function(t) {
                    var n = e(t);
                    return {
                        id: "User:" + n.id,
                        skip: n.skip,
                        fragment: v,
                        topic: Object(f.m)(n.currentUserID),
                        type: g.PubsubMessageType.Presence,
                        mutator: function(e, t) {
                            if (!t) return null;
                            var i = n.id;
                            if (e.data.user_id !== +i) return t;
                            var r = "$User:" + i + ".activity";
                            return t.availability = e.data.availability.toUpperCase(), t.activity = Object(h.a)(e.data.activity, r), t
                        }
                    }
                })(t)
            }
        }
        n.d(t, "b", function() {
            return d
        }), n.d(t, "a", function() {
            return m
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, !1, function() {
            return u
        })
    },
    "2IkU": function(e, t) {},
    "2Nqs": function(e, t) {},
    "2b/B": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("NikC"),
            c = n("Aj/L"),
            l = n("TToO"),
            u = n("HW6M"),
            d = n("GiK3"),
            p = n("6sO2"),
            m = n("rCmJ"),
            f = n("7vx8"),
            g = n("NXs7"),
            h = n("VAT8"),
            v = n("CSlQ"),
            y = n("Odds"),
            b = n("Kkxm"),
            _ = (n("e6tx"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCardClick = function() {
                        n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.onLoginClick = function(e) {
                        e.preventDefault(), n.props.login()
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === g.a.Dark ? g.a.Light : g.a.Dark;
                        n.props.changeTheme(e, s.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return d.createElement(y._12, null);
                    if (this.props.isOnboarding) return d.createElement(y._6, {
                        display: y.P.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, d.createElement(y._6, {
                        display: y.P.Flex,
                        flexWrap: y.S.NoWrap,
                        alignItems: y.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, d.createElement(y._6, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, d.createElement(y._6, null, d.createElement(y.l, {
                        size: 30,
                        src: this.props.data.currentUser.profileImageURL,
                        alt: "User avatar"
                    }))), d.createElement(y._6, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: y.R.Column,
                        ellipsis: !0
                    }, d.createElement(y._29, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = d.createElement(y._29, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, d.createElement(y._6, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, d.createElement(y.I, {
                            id: "dark-mode-toggle",
                            label: Object(p.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === g.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = u(Object(h.c)(g.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = u({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return d.createElement(m.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, d.createElement(y._6, {
                            display: y.P.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, d.createElement(y._4, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, d.createElement(y._6, {
                            display: y.P.Flex,
                            flexWrap: y.S.NoWrap,
                            alignItems: y.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, d.createElement(y._6, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, d.createElement(y._6, null, d.createElement(y.l, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), d.createElement(y._6, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: y.R.Column,
                            ellipsis: !0
                        }, d.createElement(y._29, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), d.createElement(y._29, {
                            display: y.P.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, d.createElement(y._19, {
                            asset: y._20.GlyphArrDown
                        }))))), d.createElement(y._29, {
                            fullWidth: !0,
                            overflow: y._9.Hidden,
                            position: y._13.Absolute,
                            padding: {
                                y: 1
                            },
                            background: y.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, d.createElement(y._4, {
                            onClick: this.onLogoutClick
                        }, d.createElement(y._29, {
                            color: y.J.Alt,
                            display: y.P.Flex,
                            alignItems: y.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, d.createElement(y._6, {
                            display: y.P.Flex,
                            alignItems: y.c.Center,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(y._19, {
                            asset: y._20.NavLogout,
                            height: 18,
                            width: 18
                        })), d.createElement(y.O, null, Object(p.d)("Log Out", "MinimalUser"))))))
                    }
                    return d.createElement(y._6, {
                        margin: 1
                    }, d.createElement(y.u, {
                        onClick: this.onLoginClick
                    }, Object(p.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(v.d)("MinimalUser"), Object(f.a)(b)], t)
            }(d.Component));
        var k = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(c.d)(e),
                theme: e.ui.theme
            }
        }, function(e) {
            return Object(r.b)({
                logout: o.g,
                login: function() {
                    return o.f(a.a.TopNavLoginButton)
                },
                changeTheme: s.b
            }, e)
        })(_);
        n.d(t, "a", function() {
            return k
        })
    },
    "2lB6": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t, n, r) {
            var a = i(e).getTime(),
                o = i(t).getTime(),
                s = i(n).getTime(),
                c = i(r).getTime();
            if (a > o || s > c) throw new Error("The start of the range cannot be after the end of the range");
            return a < c && s < o
        }
    },
    3: function(e, t) {},
    "3EIC": function(e, t, n) {
        var i = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = n.getMonth() + a,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var c = r(s);
            return n.setMonth(o, Math.min(c, n.getDate())), n
        }
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            r = n("mbxv"),
            a = n("+V/3"),
            o = (n("AwFw"), n("TToO")),
            s = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === a.b && (e = o.__assign({}, e, {
                            channelName: n
                        }));
                        var i = t.get(e.setID);
                        i || (i = new Map, t.set(e.setID, i)), i.set(e.version, e)
                    })
                }, e
            }();
        new s([], [], "");
        n.d(t, "b", function() {
            return i.a
        }), n.d(t, "a", function() {
            return r.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
        })
    },
    "3g9B": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getDate()
        }
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "i", function() {
            return l
        }), n.d(t, "k", function() {
            return u
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "e", function() {
            return h
        }), n.d(t, "f", function() {
            return v
        });
        var i, r = n("I89S"),
            a = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            c = o + "/actions",
            l = 8e5,
            u = 1e4,
            d = 500,
            p = 1e3,
            m = "cheer",
            f = r.a.Purple,
            g = "FIRST_PARTY",
            h = "THIRD_PARTY",
            v = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i)
    },
    "3nPg": function(e, t, n) {
        var i = n("G7No"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = i(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3znZ": function(e, t, n) {
        var i = n("u/4p");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    "40wk": function(e, t) {},
    "46tX": function(e, t, n) {
        "use strict";
        t.d = m, t.c = function(e) {
            return i.test(e)
        }, t.a = f, t.b = function(e) {
            return a.test(e)
        };
        var i = /firefox/i,
            r = /Android/i,
            a = /chrome/i,
            o = /webOS/i,
            s = /iPhone/i,
            c = /iPad/i,
            l = /iPod/i,
            u = /BlackBerry/i,
            d = /Windows Phone/i,
            p = /Mobile/i;

        function m(e) {
            return f(e) || o.test(e) || s.test(e) || c.test(e) || l.test(e) || u.test(e) || d.test(e) || p.test(e)
        }

        function f(e) {
            return r.test(e)
        }
    },
    "4LxA": function(e, t, n) {
        var i = n("iRXW");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getDay();
            return 0 === t || 6 === t
        }
    },
    "4Z4o": function(e, t, n) {
        var i = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 12 * n)
        }
    },
    "4zIR": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t, n) {
            var r = i(e).getTime(),
                a = i(t).getTime(),
                o = i(n).getTime();
            if (a > o) throw new Error("The start of the range cannot be after the end of the range");
            return r >= a && r <= o
        }
    },
    "5LoI": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Games = "game", e.Videos = "vod", e.VideosNewest = "vod_by_created_at", e.Users = "user", e.Channels = "live_channel", e.Communities = "community"
            }(i || (i = {}))
    },
    "5k8C": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), Object.defineProperty(t.prototype, "kaptchaIframeSrc", {
                    get: function() {
                        return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoHtm?m=300532&s=" + this.props.sessionId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "kaptchaImgSrc", {
                    get: function() {
                        return "https://secure" + (this.props.isProduction ? "" : "var") + ".paymentech.com/kount/LogoGif?m=300532&s=" + this.props.sessionId
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return r.createElement("iframe", {
                        width: "1",
                        height: "1",
                        scrolling: "no",
                        src: this.kaptchaIframeSrc
                    }, r.createElement("img", {
                        width: "137",
                        height: "33",
                        src: this.kaptchaImgSrc
                    }))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return a
        })
    },
    "5qwL": function(e, t, n) {
        var i = n("VaeB");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "65au": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6CZb": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, n) {
        var i = n("gAt4");
        e.exports = function(e, t) {
            var n = i(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "6Vb7": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("Ejve"),
            c = "legacy_routes_enabled",
            l = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? r.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var a = r.stringify(i),
                                        c = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        l = window.location.protocol + "//" + c + e.pathname + "?" + a;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: l
                                    }), void window.location.replace(l)
                                }
                            } catch (e) {
                                o.j.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? r.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = r.stringify(t),
                                    a = "";
                                i.length > 0 && (a = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(c, !1), n.logger = o.j.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var r = i[n];
                        try {
                            var a = new RegExp(r, "i");
                            t.push(a)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: r,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return c
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return l
        })
    },
    "6WAQ": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
            }(i || (i = {}))
    },
    "6Zhv": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = Number(t);
            return new Date(n + r)
        }
    },
    "6axH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 6 === i(e).getDay()
        }
    },
    "6udH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 1 === i(e).getDate()
        }
    },
    "6uxC": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Algolia_RequestInfo"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 57
            }
        };
        n.loc.source = {
            body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "73jS": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SetSessionStatus"
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
                                value: "SetSessionStatusInput"
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
                            value: "setSessionStatus"
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
                                    value: "setAgainInSeconds"
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
                end: 127
            }
        };
        n.loc.source = {
            body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\nsetSessionStatus(input: $input) {\nsetAgainInSeconds\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7EGB": function(e, t, n) {
        var i = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 7 * n)
        }
    },
    "7L7x": function(e, t) {},
    "7LBo": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateVisibility"
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
                                value: "UpdateVisibilityInput"
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
                            value: "updateVisibility"
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
                                    value: "user"
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
                                            value: "availability"
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
                end: 134
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\nupdateVisibility(input: $input) {\nuser {\nid\navailability\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7LIQ": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("CSlQ"),
            c = n("Odds"),
            l = (n("VkpB"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = r("emote-picker__emote-link", {
                            "emote-picker__emote-link--locked": this.props.locked
                        }),
                        n = a.createElement(c._29, {
                            alignItems: c.c.Center,
                            background: c.m.Overlay,
                            borderRadius: c.s.Small,
                            className: "emote-picker__emote-lock",
                            color: c.J.Overlay,
                            display: c.P.InlineFlex,
                            justifyContent: c._5.Center,
                            position: c._13.Absolute,
                            zIndex: c._54.Above
                        }, a.createElement(c._19, {
                            asset: c._20.Lock,
                            height: 10,
                            width: 10
                        })),
                        i = this.props.emoteSet.emotes.map(function(i, r) {
                            if (!i.srcSet) return null;
                            var l = a.createElement("img", {
                                className: "emote-picker__emote-image",
                                srcSet: i.srcSet,
                                alt: i.displayName
                            });
                            if (0 === r) {
                                var u = i.srcSet.split(" ")[0];
                                l = a.createElement(s.b, {
                                    className: "emote-picker__emote-image",
                                    src: u,
                                    srcSet: i.srcSet,
                                    alt: i.displayName
                                })
                            }
                            return a.createElement("div", {
                                key: i.id,
                                className: "emote-picker__emote"
                            }, a.createElement(c._46, {
                                label: i.displayName || Object(o.d)("Emote", "EmoteGrid"),
                                direction: c._48.Bottom
                            }, a.createElement(c._0, {
                                display: c.P.Flex,
                                alignItems: c.c.Center,
                                justifyContent: c._5.Center
                            }, a.createElement("button", {
                                className: t,
                                "aria-label": i.displayName,
                                name: i.displayName,
                                onClick: e.props.locked ? void 0 : e.handleClickEmote.bind(e, i.id),
                                "data-a-target": i.displayName
                            }, a.createElement("figure", {
                                className: "emote-picker__emote-figure"
                            }, e.props.locked ? n : null, l)))))
                        });
                    return a.createElement(c._6, {
                        display: c.P.Flex,
                        flexWrap: c.S.Wrap,
                        justifyContent: c._5.Center
                    }, i)
                }, t.prototype.handleClickEmote = function(e, t) {
                    this.props.onClickEmote && this.props.onClickEmote(t.currentTarget.name, e)
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return l
        })
    },
    "7Nlu": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("5kgt"),
            c = n("Odds"),
            l = n("rZAm"),
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c._4, i.__assign({
                        onClick: this.props.onClick,
                        linkTo: this.props.linkTo,
                        hover: this.props.hover,
                        tabIndex: -1,
                        key: this.props.id
                    }, Object(s.a)(this.props)), r.createElement(c._6, {
                        className: "search-game-result-card",
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(c.B, {
                        row: !0
                    }, r.createElement(c.D, {
                        alt: this.props.imageAlt,
                        src: this.props.data && !this.props.data.loading && this.props.data.game ? this.props.data.game.boxArtURL : a.a.defaultBoxArtURL,
                        size: c.E.Size4,
                        aspect: c.k.BoxArt
                    }), r.createElement(c.C, {
                        overflow: c._9.Hidden
                    }, r.createElement(c._0, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(c.O, {
                        type: c._43.H5,
                        ellipsis: !0
                    }, this.props.title))))))
                }, t = i.__decorate([Object(o.a)(l, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(r.Component);
        n.d(t, "a", function() {
            return u
        })
    },
    "7Swd": function(e, t, n) {
        var i = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "7Xwz": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7gLH": function(e, t) {},
    "7yyf": function(e, t, n) {
        var i = n("rBmI");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "8Gpr": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getHours()
        }
    },
    "8KV+": function(e, t, n) {
        var i = n("u/4p");
        e.exports = function(e, t, n) {
            var r = i(e, n),
                a = i(t, n);
            return r.getTime() === a.getTime()
        }
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("TToO"),
            a = n("OAwv"),
            o = n("GiK3"),
            s = n("6sO2"),
            c = n("+Znq"),
            l = n("7vx8"),
            u = n("S1vB"),
            d = n("ZVME"),
            p = n("CSlQ"),
            m = n("Odds"),
            f = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._6, null, o.createElement(m._29, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: m.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(m.O, {
                        bold: !0,
                        type: m._43.H6
                    }, Object(s.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return o.createElement(m._29, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: m.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(m._6, {
                        fullWidth: !0,
                        display: m.P.Flex,
                        alignItems: m.c.Center
                    }, o.createElement(m._6, {
                        flexGrow: 1
                    }, o.createElement(m.O, {
                        bold: !0,
                        type: m._43.H6
                    }, Object(s.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(m._6, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: m._39.Center
                    }, o.createElement(m._29, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: m.m.Base,
                        color: m.J.Base,
                        display: m.P.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m._5.Center
                    }, o.createElement(m.O, null, e.toString())))))
                }, t = r.__decorate([Object(p.d)("PrimeOfferHeader")], t)
            }(o.Component)),
            g = n("zCIC"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: o.createElement(m.O, {
                            italic: !0,
                            type: m._43.Span
                        }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                        smite: o.createElement(m.O, {
                            italic: !0,
                            type: m._43.Span
                        }, Object(s.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return o.createElement(m._6, {
                        className: "prime-empty",
                        margin: 2
                    }, o.createElement(m._6, {
                        textAlign: m._39.Center,
                        margin: 2
                    }, o.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), o.createElement(m.O, {
                        type: m._43.P,
                        bold: !0
                    }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                }, t = r.__decorate([Object(p.d)("PrimeEmpty")], t)
            }(o.Component),
            v = n("lfvs"),
            y = n("oIkB"),
            b = n("R0Kh"),
            _ = (n("w/8h"), n("sq7i")),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._6, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = o.createElement(m.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? m.z.Loading : m.z.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === b.b.EXTERNAL_OFFER ? o.createElement(m.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : o.createElement(m._6, {
                        position: m._13.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === b.b.CLAIM_CODE ? Object(s.d)("Get Code", "PrimeClaimButton") : this.props.offerType === b.b.EXTERNAL_OFFER ? Object(s.d)("Learn More", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                }, t = r.__decorate([Object(l.a)(_), Object(p.d)("PrimeClaimButton")], t)
            }(o.Component),
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        n.setState({
                            showDescription: !n.state.showDescription
                        })
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._6, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, o.createElement(m.u, {
                        fullWidth: !0,
                        type: m.A.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = o.createElement(m._29, {
                        className: "prime-claim-description__body",
                        background: m.m.Alt2,
                        border: !0
                    }, o.createElement(m._6, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, o.createElement(v, {
                        source: this.props.description || ""
                    })))), e
                }, t = r.__decorate([Object(p.d)("PrimeClaimDescription")], t)
            }(o.Component),
            N = n("Hs3O"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(N.d)(N.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return o.createElement(m._6, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(m.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = r.__decorate([Object(p.d)("PrimeUpsellButton")], t)
            }(o.Component),
            E = n("e2wA"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._6, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? o.createElement(k, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : o.createElement(w, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === b.b.EXTERNAL_OFFER ? null : o.createElement(S, {
                        description: this.props.offerDescription
                    })
                }, t = r.__decorate([Object(l.a)(E), Object(p.d)("PrimeInstructions")], t)
            }(o.Component),
            C = n("F8kA"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getErrorMessage = function() {
                        switch (t.props.errorType || b.a.UNKNOWN_ERROR) {
                            case b.a.OFFER_ALREADY_CLAIMED:
                                return Object(s.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click here to {learnMoreLink}.", {
                                    learnMoreLink: o.createElement(C.a, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        target: "_blank",
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, "learn more")
                                }, "PrimeError");
                            default:
                                return Object(s.d)("Something has gone wrong. Please try again later.", "PrimeError")
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getErrorMessage();
                    return o.createElement(m._29, {
                        background: m.m.Alt2,
                        display: m.P.Flex,
                        justifyContent: m._5.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: m._39.Center,
                        "data-test-selector": this.props.testTarget,
                        "data-a-target": this.props.testTarget
                    }, o.createElement(m.O, {
                        type: m._43.H4,
                        align: m._53.Middle
                    }, o.createElement(m._29, {
                        padding: 1,
                        display: m.P.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.S.NoWrap,
                        alignItems: m.c.Center,
                        textAlign: m._39.Left,
                        fontSize: this.props.fontSize ? this.props.fontSize : m.T.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, o.createElement(m._6, {
                        margin: {
                            right: 1
                        },
                        display: m.P.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.S.NoWrap,
                        alignItems: m.c.Center
                    }, o.createElement(m._19, {
                        asset: m._20.DeadGlitch,
                        type: m._21.Alert,
                        width: 20,
                        height: 20
                    })), o.createElement(m.O, {
                        type: m._43.P
                    }, e))))
                }, t = r.__decorate([Object(p.d)("PrimeError")], t)
            }(o.Component),
            T = (n("nFc2"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.setRef = function(e) {
                        n.setState({
                            clipboardInput: e
                        })
                    }, n.copy = function() {
                        var e;
                        try {
                            n.state.clipboardInput && n.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return n.setState({
                            copied: e
                        }), e
                    }, n.state = {
                        copied: !1,
                        clipboardInput: null
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                    return o.createElement(m._6, {
                        className: "copy-button copy-btn",
                        display: m.P.Flex,
                        "data-test-target": "copy-button"
                    }, o.createElement(m._0, {
                        className: "copy-button__btn"
                    }, o.createElement(m.u, {
                        onClick: this.copy,
                        type: this.state.copied ? m.A.Success : m.A.Default
                    }, e)), o.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = r.__decorate([Object(p.d)("CopyButton")], t)
            }(o.Component)),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? o.createElement(m._6, {
                        className: "copyable-item",
                        display: m.P.Flex,
                        flexGrow: 1
                    }, o.createElement(m._6, {
                        flexGrow: 1
                    }, o.createElement(m._2, {
                        type: m._3.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), o.createElement(m._6, null, o.createElement(T, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = r.__decorate([Object(p.d)("CopyableItem")], t)
            }(o.Component),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._29, {
                        className: "prime-claim-instructions",
                        background: m.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: m.T.Size6
                    }, o.createElement(m._52, null, o.createElement(v, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0,
                        renderers: {
                            Link: function(e) {
                                return o.createElement("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferrer"
                                }, e.children)
                            }
                        }
                    })))
                }, t = r.__decorate([Object(p.d)("PrimeClaimInstructions")], t)
            }(o.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._6, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === b.b.CLAIM_CODE ? o.createElement(m._6, null, o.createElement(P, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : o.createElement(m._29, {
                        background: m.m.Alt2,
                        display: m.P.Flex,
                        justifyContent: m._5.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(m.O, {
                        type: m._43.H4,
                        align: m._53.Middle
                    }, o.createElement(m._6, {
                        padding: 1,
                        display: m.P.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.S.NoWrap,
                        alignItems: m.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, o.createElement(m._6, {
                        margin: {
                            right: 1
                        },
                        display: m.P.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.S.NoWrap,
                        alignItems: m.c.Center
                    }, o.createElement(m._19, {
                        asset: m._20.Check,
                        type: m._21.Success,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return o.createElement(D, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = r.__decorate([Object(p.d)("PrimeRedeem")], t)
            }(o.Component),
            I = n("el3o"),
            R = (n("v+rJ"), n("rM0q")),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: "",
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            r = (t.props.data || {}).currentUser || {};
                        if (t.state.error) {
                            var a = t.getErrorType();
                            return o.createElement(x, {
                                fontSize: m.T.Size6,
                                testTarget: "prime-offer-error",
                                errorType: a
                            })
                        }
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && r && r.hasPrime) {
                            var s = t.state.claimData || i.claimData;
                            return o.createElement(F, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return o.createElement(O, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || b.a.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = n.currentUser.id,
                                r = t.props.offer,
                                a = Object(y.a)({
                                    offerID: r.id
                                });
                            t.props.claimPrimeOffer(a).then(function(e) {
                                var n = (e.data || {}).claimPrimeOffer || {},
                                    a = n.self || {},
                                    o = n.error || {};
                                if (a && a.hasEntitlement && r && (t.setState({
                                        claimData: a.claimData
                                    }), t.markAsClaimedInLocalStorage(i)), o && o.code) {
                                    var s = b.a[o.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: s || b.a.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: b.a.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            i = b.c(n.id, e),
                            r = b.d();
                        r.push(i), b.g(r), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: ""
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            i = n.game || {},
                            r = n.categories || [];
                        return o.createElement(m._29, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer",
                            alignItems: m.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(m._6, {
                            className: "prime-offer__title",
                            "data-a-target": e.id,
                            padding: {
                                y: .5
                            }
                        }, o.createElement(v, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), o.createElement("img", {
                            src: e.imageURL
                        }), o.createElement(m._6, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, o.createElement(m.O, {
                            type: m._43.P
                        }, i.name, " ", r[0])), o.createElement(m._6, {
                            className: "prime-offer__publisher"
                        }, o.createElement(m.O, {
                            type: m._43.P,
                            color: m.J.Alt2,
                            fontSize: m.T.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            i = b.c(t.id, n);
                        return b.d().includes(i)
                    }
                }, t = r.__decorate([Object(l.a)(R, {
                    name: "data"
                }), Object(l.a)(I, {
                    name: "claimPrimeOffer"
                }), Object(p.d)("PrimeOffer")], t)
            }(o.Component),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._29, {
                        className: "prime-offer-placeholder",
                        alignItems: m.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(m._6, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(m._12, {
                        height: 20
                    })), o.createElement(m._12, {
                        height: 160
                    }), o.createElement(m._6, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(m._12, {
                        height: 20,
                        width: 160
                    })), o.createElement(m._6, {
                        className: "prime-offer-placeholder__publisher"
                    }, o.createElement(m._12, {
                        height: 20,
                        width: 80
                    })), o.createElement(m._6, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(m._12, {
                        height: 40
                    })))
                }, t = r.__decorate([Object(p.d)("PrimeOfferPlaceholder")], t)
            }(o.Component),
            M = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._29, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: m.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(m.O, {
                        type: m._43.H4
                    }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(m._6, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: m._39.Center
                    }, o.createElement(m._19, {
                        asset: m._20.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: m._21.Brand
                    })), o.createElement(m.O, {
                        type: m._43.P
                    }, Object(s.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(w, null))
                }, t = r.__decorate([Object(p.d)("PrimeUpsell")], t)
            }(o.Component)),
            j = n("eY4D"),
            L = (n("DgR+"), n("65au")),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        if (!t.props.offersData) return !0;
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(o.createElement(U, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(g.b, {
                        className: "prime-offer-listing"
                    }, o.createElement(m._6, {
                        className: "prime-offer-listing__content",
                        alignItems: m.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (e && !e.loading && !e.error && !this.currentUserHasPrime(e)) return o.createElement(M, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return o.createElement(A, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return o.createElement(h, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.getUserId();
                    if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                    var t = this.props.offersData.primeOffers;
                    if (e) {
                        var n = Object(b.d)(),
                            i = t.filter(function(t) {
                                return !n.includes(Object(b.c)(t.id, e))
                            }).sort(b.j),
                            r = t.filter(function(e) {
                                return !i.includes(e)
                            }).sort(b.j);
                        return i.concat(r)
                    }
                    return t.slice().sort(b.j)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = r.__decorate([Object(l.a)(j, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(b.e)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(l.a)(L, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(p.d)("PrimeOfferList", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component);
        var H = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(B),
            W = n("tTbW"),
            G = (n("9856"), n("wjhu")),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = a.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var n = t.props.offersData;
                        !n || n.loading || n.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: d.a.TwitchPrime,
                            key: d.b.PrimeOfferLoaded,
                            label: d.c.Loaded,
                            start: d.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                r = b.f();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(r.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            b.h(n)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1,
                            i = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && i && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), i || n ? o.createElement(m._6, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, o.createElement(f, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), o.createElement(H, null)) : null
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(u.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: m._47.Center,
                        direction: m._48.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(s.d)("New Prime Loot", "PrimeOffers") : n.label = Object(s.d)("Prime Loot", "PrimeOffers"), o.createElement(m._6, {
                        className: "prime-offers",
                        position: m._13.Relative
                    }, o.createElement(c.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, o.createElement(m.v, {
                        ariaLabel: Object(s.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: m.w.Large,
                        icon: m._20.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), o.createElement(m.p, {
                        direction: m.q.BottomRight,
                        size: m.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return o.createElement(m._6, {
                        className: "prime-offers__pill",
                        position: m._13.Absolute
                    }, o.createElement(m.e, {
                        type: m.i.BounceIn,
                        duration: m.g.Medium,
                        timing: m.h.EaseIn,
                        enabled: e > 0
                    }, o.createElement(m._10, {
                        label: e.toString(),
                        type: m._11.Notification
                    })))
                }, t = r.__decorate([Object(l.a)(W, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(b.e)()
                            }
                        }
                    }
                }), Object(l.a)(G, {
                    name: "userData"
                }), Object(p.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component);
        var z = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(V),
            q = (n("ukY1"), n("F1v6")),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(b.i)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(N.d)(N.a, ""),
                        i = Object(s.d)("Twitch Prime", "BlueBar"),
                        r = o.createElement("span", null, Object(s.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(N.d)(N.a, ""),
                        c = Object(s.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var l = this.props.data;
                        l && l.primePromotions && l.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, i = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    r = o.createElement(v, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return o.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    a = e.externalURL, c = e.text
                            }
                        })
                    }
                    return o.createElement(m._29, {
                        color: m.J.Base,
                        className: "blue-bar",
                        position: m._13.Relative,
                        fullWidth: !0,
                        zIndex: m._54.Above
                    }, o.createElement(m._6, {
                        className: "blue-bar__bar",
                        display: m.P.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m._5.Between,
                        flexWrap: m.S.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(m._6, {
                        display: m.P.InlineFlex,
                        alignItems: m.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(m._6, {
                        className: "blue-bar__logo",
                        display: m.P.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement(m._19, {
                        asset: m._20.Crown,
                        width: 20,
                        height: 13
                    })), o.createElement(m.O, {
                        bold: !0,
                        type: m._43.Span,
                        noWrap: !0,
                        fontSize: m.T.Size6
                    }, o.createElement(m._0, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i))), o.createElement(m.O, {
                        className: "blue-bar__headline",
                        type: m._43.Span,
                        fontSize: m.T.Size6
                    }, r)), o.createElement(m._6, {
                        display: m.P.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(m.O, {
                        bold: !0,
                        type: m._43.Span,
                        noWrap: !0,
                        fontSize: m.T.Size6,
                        color: m.J.Base
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c)))))
                }, t = r.__decorate([Object(l.a)(q, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(b.e)()
                            }
                        }
                    }
                }), Object(p.d)("BlueBarComponent")], t)
            }(o.Component);
        n.d(t, "c", function() {
            return z
        }), n.d(t, "a", function() {
            return Y
        }), n.d(t, "b", function() {
            return x
        }), n.d(t, "d", function() {
            return b.e
        })
    },
    "8QR2": function(e, t, n) {
        var i = n("xA5w"),
            r = 864e5;
        e.exports = function(e, t, n, a) {
            var o = i(e).getTime(),
                s = i(t).getTime(),
                c = i(n).getTime(),
                l = i(a).getTime();
            if (o > s || c > l) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < l && c < s)) return 0;
            var u = (l > s ? s : l) - (c < o ? o : c);
            return Math.ceil(u / r)
        }
    },
    "94wQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateIsSharingActivity"
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
                                value: "UpdateIsSharingActivityInput"
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
                            value: "updateIsSharingActivity"
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
                                    value: "user"
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
                                                    value: "isSharingActivity"
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
                end: 173
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\nupdateIsSharingActivity(input: $input) {\nuser {\nid\nsettings {\nisSharingActivity\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    9856: function(e, t) {},
    "9Jn5": function(e, t, n) {
        var i = n("zZbG");
        e.exports = function(e, t) {
            return i(e) - i(t)
        }
    },
    "9q8M": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_User_CurrentUser"
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
                                    value: "availability"
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
                                            value: "isSharingActivity"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "visibility"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "activity"
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Watching"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "user"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
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
                                                                            value: "name"
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
                                                            value: "hosting"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
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
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Streaming"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Playing"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 358
            }
        };
        n.loc.source = {
            body: "query TopNav_User_CurrentUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\navailability\nsettings {\nisSharingActivity\nvisibility\n}\nactivity {\ntype\n... on Watching {\nuser {\ndisplayName\nstream {\ngame {\nname\n}\n}\nhosting {\ndisplayName\nstream {\ngame {\nname\n}\n}\n}\n}\n}\n... on Streaming {\nstream {\ngame {\nname\n}\n}\n}\n... on Playing {\ngame {\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9r5b": function(e, t, n) {
        var i = n("nfOx");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, s;
                        return i.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = o.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return a = i.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(a.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    A2zO: function(e, t, n) {
        var i = n("Be26");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    AZvW: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    Akl5: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    AwFw: function(e, t) {},
    Bb5e: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() - r.getFullYear()
        }
    },
    Be26: function(e, t, n) {
        var i = n("8KV+");
        e.exports = function(e, t) {
            return i(e, t, {
                weekStartsOn: 1
            })
        }
    },
    Bir6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
    },
    CVNg: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMonth(0), n.setDate(r), n
        }
    },
    D0Fd: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("HW6M"),
            o = n("GiK3"),
            s = n("HM6l"),
            c = n("46tX"),
            l = n("Odds");
        n("w0LG");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
        }(i || (i = {}));
        var u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                return this.props.isUnavailable !== e.isUnavailable || this.props.needsToCheerMore !== e.needsToCheerMore || this.props.comingSoon !== e.comingSoon || this.props.size !== e.size
            }, t.prototype.render = function() {
                var e, t, n = "esports-hexagon__mask--unavailable-" + Object(s.a)(),
                    r = "esports-hexagon__mask--cheer-more-" + Object(s.a)(),
                    u = "esports-hexagon__pattern--" + Object(s.a)();
                this.props.isUnavailable ? (e = "url(#" + n, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + r, t = "esports-hexagon__mask--cheer-more");
                var d = /Edge/.test(window.navigator.userAgent) ? 5 : Object(c.b)(window.navigator.userAgent) ? -25 : 0,
                    p = /Edge/.test(window.navigator.userAgent) ? -5 : Object(c.b)(window.navigator.userAgent) ? 8 : 5,
                    m = /Edge/.test(window.navigator.userAgent) ? 155 : 132,
                    f = /Edge/.test(window.navigator.userAgent) ? 90 : Object(c.b)(window.navigator.userAgent) ? 150 : 100,
                    g = Object(c.b)(window.navigator.userAgent) ? 150 : 132,
                    h = Object(c.b)(window.navigator.userAgent) ? 0 : 10,
                    v = a("esports-hexagon__svg", {
                        "esports-hexagon__svg--large": this.props.size === i.Large
                    }, {
                        "esports-hexagon__svg--small": this.props.size === i.Small
                    }, {
                        "esports-hexagon__svg--medium": this.props.size === i.Medium
                    }, {
                        "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === i.Small
                    }),
                    y = a("esports-hexagon__svg--background", {
                        "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                    }),
                    b = a("esports-hexagon__svg--fill", {
                        "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                    });
                return o.createElement(l._6, {
                    className: "esports-hexagon",
                    display: l.P.Flex,
                    flexDirection: l.R.Column
                }, o.createElement("svg", {
                    className: v,
                    viewBox: "5 0 90 132"
                }, o.createElement("defs", null, o.createElement("pattern", {
                    id: u,
                    patternUnits: "userSpaceOnUse",
                    width: "100",
                    height: g
                }, o.createElement("image", {
                    className: "esports-hexagon__image",
                    xlinkHref: this.props.imageURL,
                    x: d,
                    y: p,
                    width: f,
                    height: m
                })), o.createElement("filter", {
                    id: n
                }, o.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.04 0 0 0 0 0 0.04 0 0 0 0 0 0.04 0 0 0 0 0 1 0"
                })), o.createElement("filter", {
                    id: r
                }, o.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                }))), o.createElement("polygon", {
                    className: y,
                    points: "50,2 8.042394,26.558603 8,75 50,98 92,75 92,25",
                    stroke: "none",
                    strokeWidth: "1px",
                    transform: "translate(0, 31)"
                }), o.createElement("polygon", {
                    points: "0,0 48,0 0,28",
                    strokeWidth: "1px",
                    fill: "none",
                    transform: ""
                }), o.createElement("polygon", {
                    points: "52,100 100.062347,99.750626 100,70",
                    stroke: "none",
                    strokeWidth: "1px",
                    fill: "none",
                    transform: ""
                }), o.createElement("polygon", {
                    points: "100,29.052368 100,0 52,0",
                    stroke: "none",
                    strokeWidth: "1px",
                    fill: "none",
                    transform: ""
                }), o.createElement("polygon", {
                    points: "0,68.578552 49.438904,100 0,100",
                    stroke: "none",
                    strokeWidth: "1px",
                    fill: "none",
                    transform: ""
                }), o.createElement("path", {
                    transform: "translate(0, 31)",
                    className: b,
                    d: "M49.9,99.1c-2.1,0-4.2-0.5-5.8-1.4L11.6,79c-3.3-2-5.9-6.4-5.9-10.2V31.3c0-3.8,2.6-8.3,5.9-10.2L44.2,2.4C45.8,1.5,47.8,1,50,1c2.2,0,4.3,0.5,5.8,1.4l32.5,18.7c3.3,1.9,5.9,6.5,5.7,10.3l0,37.4c0,3.8-2.6,8.3-5.9,10.2L55.8,97.7C54.1,98.6,52,99.1,49.9,99.1z M50,4c-1.7,0-3.2,0.4-4.4,1L13.1,23.7c-2.4,1.3-4.3,4.8-4.3,7.6v37.5c0,2.7,2,6.2,4.4,7.6l32.4,18.7c2.3,1.3,6.4,1.3,8.7,0l32.4-18.7c2.4-1.3,4.3-4.8,4.3-7.6V31.3c0.2-2.7-1.8-6.2-4.1-7.6l0,0L54.4,5C53.3,4.4,51.6,4,50,4z"
                }), !this.props.comingSoon && o.createElement("polygon", {
                    className: "esports-hexagon__svg--filtered-image",
                    "data-test-selector": t,
                    filter: e,
                    points: 0 + h + ",0 " + (100 - h) + ",0 " + (100 - h) + ",132 " + (0 + h) + ",132",
                    stroke: "none",
                    strokeWidth: "1px",
                    fill: "url(#" + u + ")"
                }), this.props.comingSoon && o.createElement("text", {
                    className: "esports-hexagon__svg--question-mark",
                    x: "38",
                    y: "97",
                    fontSize: "44",
                    fontWeight: "600"
                }, "?"), !this.props.comingSoon && (this.props.isUnavailable || this.props.needsToCheerMore) && o.createElement("path", {
                    className: "esports-hexagon__svg--lock",
                    transform: "translate(40, 70)",
                    fill: "white",
                    d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                    fillRule: "evenodd"
                })))
            }, t
        }(o.Component);
        n.d(t, !1, function() {
            return "esports-hexagon__mask--unavailable"
        }), n.d(t, !1, function() {
            return "esports-hexagon__mask--cheer-more"
        }), n.d(t, !1, function() {
            return "esports-hexagon__pattern"
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        })
    },
    D6ie: function(e, t, n) {
        var i = n("xA5w"),
            r = n("3znZ"),
            a = n("iRXW"),
            o = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = r(t).getTime() - a(t).getTime();
            return Math.round(n / o) + 1
        }
    },
    DBTH: function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return s
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "i", function() {
            return u
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "h", function() {
            return p
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "d", function() {
            return m
        }), n.d(t, "c", function() {
            return f
        }), n.d(t, "n", function() {
            return v
        }), n.d(t, "l", function() {
            return y
        }), n.d(t, "m", function() {
            return b
        }), n.d(t, "k", function() {
            return _
        }), n.d(t, "o", function() {
            return k
        });
        var i, r, a, o, s = "TWILIGHT_WEB_ONBOARDING_CATEGORIES",
            c = "TWILIGHT_WEB_ONBOARDING_CATEGORIES_ANON_FRONT_PAGE",
            l = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            u = "TWILIGHT_WEB_ONBOARDING",
            d = "TWILIGHT_WEB_ONBOARDING_FOLLOW_CATEGORIES",
            p = "TWILIGHT_WEB_ONBOARDING_CHANNEL_SURFING";
        ! function(e) {
            e.NoSkip = "no_skip"
        }(i || (i = {})),
        function(e) {
            e.Yes = "yes"
        }(r || (r = {})),
        function(e) {
            e.Yes = "yes"
        }(a || (a = {})),
        function(e) {
            e.Games = "games", e.Streams = "streams"
        }(o || (o = {}));
        var m, f, g = new Set([o.Games.toString(), o.Streams.toString()]);
        ! function(e) {
            e.ENABLED = "enabled"
        }(m || (m = {})),
        function(e) {
            e.Chat = "chat", e.NoChat = "no_chat"
        }(f || (f = {}));
        var h = new Set([f.Chat.toString(), f.NoChat.toString()]),
            v = function(e) {
                return e === i.NoSkip
            },
            y = function(e, t) {
                return v(e) && t === r.Yes
            },
            b = function(e, t) {
                return v(e) && !!t && h.has(t)
            },
            _ = function(e) {
                return !!e && g.has(e)
            },
            k = function(e) {
                return e.getTime() >= S().getTime()
            },
            S = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    "DgR+": function(e, t) {},
    EaWz: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftRecipientQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientName"
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
                        alias: {
                            kind: "Name",
                            value: "recipient"
                        },
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
                                    value: "recipientName"
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
                end: 110
            }
        };
        n.loc.source = {
            body: "query GiftRecipientQuery($recipientName: String!) {\nrecipient: user(login: $recipientName){\nid\ndisplayName\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "Eoz/": function(e, t, n) {
        var i = n("ymQ7"),
            r = n("D6ie"),
            a = n("zZbG"),
            o = n("xA5w"),
            s = n("dH3X"),
            c = n("uyaC");
        var l = {
            M: function(e) {
                return e.getMonth() + 1
            },
            MM: function(e) {
                return d(e.getMonth() + 1, 2)
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3)
            },
            D: function(e) {
                return e.getDate()
            },
            DD: function(e) {
                return d(e.getDate(), 2)
            },
            DDD: function(e) {
                return i(e)
            },
            DDDD: function(e) {
                return d(i(e), 3)
            },
            d: function(e) {
                return e.getDay()
            },
            E: function(e) {
                return e.getDay() || 7
            },
            W: function(e) {
                return r(e)
            },
            WW: function(e) {
                return d(r(e), 2)
            },
            YY: function(e) {
                return d(e.getFullYear(), 4).substr(2)
            },
            YYYY: function(e) {
                return d(e.getFullYear(), 4)
            },
            GG: function(e) {
                return String(a(e)).substr(2)
            },
            GGGG: function(e) {
                return a(e)
            },
            H: function(e) {
                return e.getHours()
            },
            HH: function(e) {
                return d(e.getHours(), 2)
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t
            },
            hh: function(e) {
                return d(l.h(e), 2)
            },
            m: function(e) {
                return e.getMinutes()
            },
            mm: function(e) {
                return d(e.getMinutes(), 2)
            },
            s: function(e) {
                return e.getSeconds()
            },
            ss: function(e) {
                return d(e.getSeconds(), 2)
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100)
            },
            SS: function(e) {
                return d(Math.floor(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return d(e.getMilliseconds(), 3)
            },
            Z: function(e) {
                return u(e.getTimezoneOffset(), ":")
            },
            ZZ: function(e) {
                return u(e.getTimezoneOffset())
            },
            X: function(e) {
                return Math.floor(e.getTime() / 1e3)
            },
            x: function(e) {
                return e.getTime()
            }
        };

        function u(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                i = Math.abs(e),
                r = i % 60;
            return n + d(Math.floor(i / 60), 2) + t + d(r, 2)
        }

        function d(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        e.exports = function(e, t, n) {
            var i = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                r = (n || {}).locale,
                a = c.format.formatters,
                u = c.format.formattingTokensRegExp;
            r && r.format && r.format.formatters && (a = r.format.formatters, r.format.formattingTokensRegExp && (u = r.format.formattingTokensRegExp));
            var d = o(e);
            return s(d) ? function(e, t, n) {
                var i, r, a, o = e.match(n),
                    s = o.length;
                for (i = 0; i < s; i++) r = t[o[i]] || l[o[i]], o[i] = r || ((a = o[i]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, "") : a.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < s; n++) o[n] instanceof Function ? t += o[n](e, l) : t += o[n];
                    return t
                }
            }(i, a, u)(d) : "Invalid Date"
        }
    },
    Epw6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    "Ex+h": function(e, t, n) {
        "use strict";
        var i, r;
        n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }),
            function(e) {
                e.Playing = "PLAYING", e.Streaming = "BROADCASTING", e.Watching = "WATCHING"
            }(i || (i = {})),
            function(e) {
                e.Playing = "playing", e.Streaming = "broadcasting", e.Watching = "watching"
            }(r || (r = {}))
    },
    F1v6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_BlueBar_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "stringIds"
                        }
                    },
                    type: {
                        kind: "ListType",
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
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "primePromotions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "stringIds"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 231
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    FDYX: function(e, t, n) {
        "use strict";
        t.d = function(e) {
            return e.some(function(e) {
                return !!e.self && !!e.self.promotion
            })
        }, t.c = function(e) {
            return e.some(function(e) {
                return !!e.giftPromotion
            })
        }, t.a = function(e, t) {
            var n;
            t ? n = e.giftPromotion : e.self && (n = e.self.promotion);
            if (n) return n.newPrice;
            return e.price
        }, t.b = function(e, t) {
            var n;
            t ? n = e.giftPromotion : e.self && (n = e.self.promotion);
            if (n) return n.discountValue;
            return 0
        }
    },
    FLwB: function(e, t, n) {
        "use strict";
        t.f = function(e) {
            return d.debug("Updating activity", e), m = i.__assign({}, m, {
                activity: e
            }), g()
        }, t.e = function(e) {
            d.debug("Updating visibility", e),
                function(e) {
                    if (!Object(o.d)(r.o.store.getState())) return;
                    d.debug("Setting visibility on server", {
                        visibility: e
                    }), r.o.apollo.client.mutate({
                        mutation: c,
                        variables: {
                            input: {
                                visibility: e
                            }
                        }
                    }).then(function(e) {
                        d.debug("Visibility set", {
                            visibility: e.data.updateVisibility.user.availability
                        })
                    }, function(e) {
                        d.warn("Failed to update visibility.", e)
                    })
                }(e)
        }, t.c = f, t.b = function() {
            f(a.a.Online)
        }, t.d = function() {
            f(a.a.Idle)
        }, t.a = function() {
            d.debug("Clearing activity"), m = i.__assign({}, m, {
                activity: null
            }), g()
        }, t.g = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            d.debug("Clearing previous session"), m = {
                                sessionID: r.l.get(l, ""),
                                availability: a.a.Online,
                                activity: null
                            }, e.label = 1;
                        case 1:
                            return e.trys.push([1, 4, , 5]), [4, g()];
                        case 2:
                            return e.sent(), d.debug("Setting new session"), m = i.__assign({}, m, {
                                sessionID: r.o.session.tabID
                            }), t = r.o.session.tabID, r.l.set(l, t), [4, g()];
                        case 3:
                            return [2, e.sent()];
                        case 4:
                            return [2, e.sent()];
                        case 5:
                            return [2]
                    }
                    var t
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("l4QG"),
            o = n("Aj/L"),
            s = n("73jS"),
            c = (n.n(s), n("7LBo")),
            l = (n.n(c), "twilight.sessionID"),
            u = 0,
            d = r.j.withCategory("Session Status"),
            p = {
                sessionID: r.o.session.tabID,
                availability: "",
                activity: null
            },
            m = p;

        function f(e) {
            d.debug("Saving current availability", e), m = i.__assign({}, m, {
                availability: e
            })
        }

        function g() {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(e) {
                    return Object(o.d)(r.o.store.getState()) ? (d.debug("Setting status on server", {
                        state: m
                    }), u && clearTimeout(u), [2, r.o.apollo.client.mutate({
                        mutation: s,
                        variables: {
                            input: m
                        }
                    }).then(function(e) {
                        d.debug("Status scheduled to be set again", {
                            seconds: e.data.setSessionStatus.setAgainInSeconds
                        }), u = setTimeout(g, 1e3 * e.data.setSessionStatus.setAgainInSeconds)
                    }, function(e) {
                        d.warn("Failed to update status. Trying again in 60 seconds.", e), u = setTimeout(g, 6e4)
                    })]) : [2]
                })
            })
        }
    },
    FroJ: function(e, t) {},
    G7No: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() - r.getTime()
        }
    },
    GHQc: function(e, t) {},
    GI7G: function(e, t, n) {
        var i = n("xA5w"),
            r = n("orNa"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                c = Math.abs(r(n, o));
            return n.setMonth(n.getMonth() - s * c), s * (c - (a(n, o) === -s))
        }
    },
    GtMZ: function(e, t) {},
    GvNH: function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e) {
            return i(e).getTime() === i(new Date).getTime()
        }
    },
    H9qc: function(e, t) {},
    "HTB+": function(e, t) {},
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i + 1), r.setHours(23, 59, 59, 999), r
        }
    },
    HZww: function(e, t, n) {
        "use strict";
        t.d = function(e) {
            return r.PubsubTopic.ChatRoom + "." + e
        }, t.e = function(e) {
            return r.PubsubTopic.ChatRoomsChannel + "." + e
        }, t.f = function(e) {
            return r.PubsubTopic.ChatRoomsUser + "." + e
        }, t.y = function(e) {
            return r.PubsubTopic.VideoThumbnailProcessing + "." + e
        }, t.i = function(e) {
            return r.PubsubTopic.ImageUpload + "." + e
        }, t.r = function(e) {
            return r.PubsubTopic.UploadService + "." + e
        }, t.x = function(e) {
            return r.PubsubTopic.VideoPlaybackById + "." + e
        }, t.l = function(e) {
            return r.PubsubTopic.PayoutOnboardingEvents + "." + e
        }, t.m = function(e) {
            return r.PubsubTopic.Presence + "." + e
        }, t.j = function(e, t) {
            return r.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
        }, t.n = function(e) {
            return r.PubsubTopic.Raid + "." + e
        }, t.g = function(e) {
            return r.PubsubTopic.Friendship + "." + e
        }, t.b = function(e) {
            return r.PubsubTopic.ChannelBitsPinEvents + "." + e
        }, t.a = function(e) {
            return r.PubsubTopic.BitsLeaderboardEvents + "." + e.id
        }, t.s = function(e) {
            return r.PubsubTopic.UserBitsUpdates + "." + e
        }, t.w = function(e) {
            return r.PubsubTopic.UserSubscribeEvents + "." + e
        }, t.v = function(e) {
            return r.PubsubTopic.UserCrateEvents + "." + e
        }, t.h = function(e) {
            return r.PubsubTopic.CampaignGlobalEvents + "." + e
        }, t.t = function(e) {
            return r.PubsubTopic.CampaignUserEvents + "." + e
        }, t.u = function(e) {
            return r.PubsubTopic.UserCommerceEvents + "." + e
        }, t.z = function(e) {
            return r.PubsubTopic.Whispers + "." + e
        }, t.k = function(e) {
            return r.PubsubTopic.OnsiteNotifications + "." + e
        }, t.o = function(e) {
            return r.PubsubTopic.StreamChatRoom + "." + e
        }, t.c = function(e) {
            return r.PubsubTopic.ChannelEventUpdates + "." + e
        }, t.q = function(e) {
            return i.k.subscribe({
                topic: e.topic,
                onMessage: function(t) {
                    t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(a.d)(e.query, e.variables, function(n) {
                        return e.mutator(t, n)
                    }, function(n) {
                        return !!e.skipMessage && e.skipMessage(t, n)
                    })
                }
            })
        }, t.p = function(e) {
            return i.k.subscribe({
                topic: e.topic,
                onMessage: function(t) {
                    t.type && t.type !== e.type || Object(a.c)({
                        fragment: e.fragment,
                        id: e.id,
                        mutator: function(n) {
                            return e.mutator(t, n)
                        }
                    })
                }
            })
        };
        var i = n("6sO2"),
            r = n("aMxy"),
            a = n("oIkB")
    },
    Heyg: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CheckoutPayments"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "productName"
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
                            value: "includePromotion"
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
                            value: "isGift"
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
                            value: "recipientID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "subscriptionProduct"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "productName"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "productName"
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
                                    value: "tier"
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
                                    value: "price"
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
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "interval"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unit"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "url"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasSubonlyVideoArchive"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasAdFree"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasFastChat"
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
                                            value: "checkoutConfigs"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "isGift"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isGift"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "recipientID"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "recipientID"
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
                                                    value: "canGift"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isOneMonthFreeEligible"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "paymentProviderConfigs"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "xsolla"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "iframeURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "recurly"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "payWithAmazonConfigs"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
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
                                                                            value: "isProduction"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "sellerID"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "publicKey"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "braintreeClientAuthorization"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "zuora"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "externalAccountID"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tenantID"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "publicKey"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "signature"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hostedPageID"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hostedPageURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "externalAccountID"
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
                                            value: "purchase"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "details"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "paymentProvider"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "currency"
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
                                                            value: "cancelledAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productTier"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "compatiblePurchases"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "paymentProvider"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "currency"
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
                                                            value: "cancelledAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productTier"
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
                                            value: "benefit"
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
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "gift"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
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
                                            value: "promotion"
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
                                                        value: "includePromotion"
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
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "discountValue"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannerImageURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "broadcastBadges"
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
                                                value: "300"
                                            }
                                        }],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionProducts"
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
                                                    value: "tier"
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
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "price"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "emoteSetID"
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
                                                            value: "promotion"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "newPrice"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "oldPrice"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "discountValue"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "discountType"
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
                end: 1414
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery CheckoutPayments($productName: String! $includePromotion: Boolean! $isGift: Boolean! $recipientID: ID) {\ncurrentUser {\nid\ndisplayName\n}\nrequestInfo {\ncountryCode\n}\nsubscriptionProduct(productName: $productName) {\nid\ntier\nname\nprice\ntype\ninterval {\nduration\nunit\n}\nurl\nhasSubonlyVideoArchive\nhasAdFree\nhasFastChat\ndisplayName\nemotes {\nid\ntoken\n}\nself {\ncheckoutConfigs (isGift: $isGift recipientID: $recipientID) {\ncanGift\nisOneMonthFreeEligible\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\n}\nbenefit {\nid\ntier\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion @include(if: $includePromotion) {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\n}\nowner {\nid\ndisplayName\ndescription\nlogin\nroles{\nisPartner\n}\nbannerImageURL\nbroadcastBadges{\n...badge\n}\nprofileImageURL(width:300)\nsubscriptionProducts{\nid\ntier\ndisplayName\nurl\nprice\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var n = i.b.get(s, "https://twitch.amazon.com/prime"),
                r = "";
            try {
                r = btoa(t)
            } catch (e) {
                c.error(e, "Could not decode location pathname substring for redirect")
            }
            return r ? n + "?ref_=" + e + "&redirectRoute=" + r : n + "?ref_=" + e
        };
        var i = n("6sO2"),
            r = "sm_tw_tup_ntp_t_all",
            a = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            c = i.j.withCategory("PrimeUtilsLogger")
    },
    Hvpt: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            c = n("TToO"),
            l = n("OAwv"),
            u = n("GiK3"),
            d = n("6sO2"),
            p = n("ZyA2"),
            m = n("7vx8"),
            f = n("j7/Y"),
            g = n("w9tK"),
            h = n("vH/s"),
            v = n("9u8h"),
            y = n("Odds"),
            b = function() {
                return u.createElement(y._6, null, u.createElement(y.O, {
                    type: y._43.H2,
                    bold: !0
                }, Object(d.d)("Get Your All-Access Pass", "EsportsTicketPurchaseInfo")), u.createElement(y.O, null, Object(d.d)("Buying a Pass is fast, easy, and secure. Don't hesitate to contatct Purchase Support if you need help", "EsportsTicketPurchaseInfo")))
            },
            _ = n("QCL8"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.channel && Object(_.a)(this.props.channel, this.props.sessionUser) ? u.createElement(b, null) : u.createElement(y.O, {
                        type: y._43.H2,
                        bold: !0,
                        "data-test-selector": "sub-info-selector"
                    }, this.props.isGift ? Object(d.d)("Gift A Subscription", "PurchaseSubInfo") : Object(d.d)("Start Your Subscription", "PersonalSubPurchaseInfo"))
                }, t
            }(u.Component);
        var S, N, w, E, O = Object(i.b)(function(e) {
                return {
                    sessionUser: Object(s.c)(e)
                }
            })(k),
            C = n("ryON"),
            x = n.n(C),
            T = n("hmTn"),
            P = n.n(T),
            D = n("W59S"),
            F = n.n(D),
            I = n("MQyO"),
            R = n.n(I),
            A = n("ekbR"),
            U = n.n(A),
            M = n("p2Aq"),
            j = n.n(M),
            L = n("SgWI"),
            B = n.n(L),
            H = n("YkGD"),
            W = n.n(H);
        ! function(e) {
            e.Failed = "failed", e.Pending = "pending", e.Success = "success"
        }(S || (S = {})),
        function(e) {
            e.Gifting = "gifting", e.Personal = "personal"
        }(N || (N = {})),
        function(e) {
            e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlyPayWithAmazon = "recurly_pay_with_amazon", e.ZuoraCreditCard = "zuora_credit_card", e.Xsolla = "xsolla"
        }(w || (w = {})),
        function(e) {
            e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error"
        }(E || (E = {}));
        var G = n("CSlQ"),
            V = (n("aMOL"), function() {
                function e(e) {}
                e.prototype.bind = function(e) {}
            }(), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amazonScriptLoaded: null,
                        walletLoaded: null,
                        billingAgreementId: null,
                        awaitingResponse: !1
                    }, t.handleSubmit = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            awaitingResponse: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_flow: w.RecurlyPayWithAmazon,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: this.state.billingAgreementId,
                                                gateway: "amazon"
                                            }
                                        })];
                                    case 2:
                                        return e.sent(), this.forceUpdate(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    window.onAmazonLoginReady = function() {
                        window.amazon.Login.setClientId(e.props.clientID)
                    }, window.onAmazonPaymentsReady = function() {
                        e.props.latencyTracking.reportInteractive(), e.setState({
                            amazonScriptLoaded: !0
                        }), window.OffAmazonPayments.Button("recurly-amazon-pay__button", e.props.sellerID, {
                            type: "PwA",
                            color: "DarkGray",
                            useAmazonAddressBook: !1,
                            agreementType: "BillingAgreement",
                            authorization: function() {
                                window.amazon.Login.authorize({
                                    scope: "profile payments:widget payments:autopay_consent",
                                    popup: !0
                                }, function(e) {
                                    if (e.error) return "err"
                                })
                            },
                            onSignIn: function(t) {
                                e.setState({
                                    walletLoaded: !0,
                                    billingAgreementId: t.getAmazonBillingAgreementId()
                                }), e.initWidget()
                            }
                        })
                    };
                    var t = document.querySelector("#pwa-script");
                    t && document.body.removeChild(t);
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.id = "pwa-script", n.src = "https://static-na.payments-amazon.com/OffAmazonPayments/us" + (this.props.isProduction ? "" : "/sandbox") + "/js/Widgets.js?sellerId=" + this.props.sellerID, n.async = !0, document.body.appendChild(n)
                }, t.prototype.initWidget = function() {
                    var e = {
                        agreementType: "BillingAgreement",
                        amazonBillingAgreementId: this.state.billingAgreementId,
                        sellerId: this.props.sellerID,
                        design: {
                            designMode: "responsive"
                        },
                        onPaymentSelect: function() {
                            return !0
                        },
                        onError: function() {
                            return !1
                        }
                    };
                    new window.OffAmazonPayments.Widgets.Wallet(e).bind("recurly-amazon-pay__wallet")
                }, t.prototype.render = function() {
                    return this.state.amazonScriptLoaded ? u.createElement(y._6, {
                        padding: {
                            top: 1
                        },
                        className: "recurly-amazon-pay"
                    }, u.createElement(y._6, {
                        display: this.state.walletLoaded ? y.P.Hide : y.P.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._5.Center
                    }, u.createElement("div", {
                        id: "recurly-amazon-pay__button"
                    })), u.createElement(y._6, {
                        display: this.state.walletLoaded ? y.P.Flex : y.P.Hide,
                        flexDirection: y.R.Column,
                        alignItems: y.c.Center,
                        justifyContent: y._5.Center
                    }, u.createElement("div", {
                        id: "recurly-amazon-pay__wallet",
                        className: "recurly-amazon-pay__wallet"
                    }), u.createElement(y._6, {
                        padding: {
                            top: 1
                        }
                    }, u.createElement(y.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? y.z.Loading : y.z.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))) : u.createElement(y._8, null)
                }, t = c.__decorate([Object(G.d)("RecurlyAmazonPay")], t)
            }(u.Component)),
            z = n("NXs7"),
            q = n("0nzt"),
            Y = n("l7ua"),
            K = (n("pDuT"), {
                light: "#000",
                dark: "#fff"
            }),
            Q = {
                light: "#a49fad",
                dark: "#898395"
            },
            Z = function() {
                return {
                    cvv: !1,
                    first_name: !1,
                    last_name: !1,
                    month: !1,
                    number: !1,
                    year: !1
                }
            },
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstName: "",
                        lastName: "",
                        recurlyReady: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        errorState: Z()
                    }, t.handleSubmit = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return c.__generator(this, function(t) {
                                return this.setState(function(e) {
                                    return {
                                        awaitingResponse: !0,
                                        errorState: c.__assign({}, e.errorState)
                                    }
                                }), window.recurly.token(this.form, function(t, n) {
                                    return c.__awaiter(e, void 0, void 0, function() {
                                        return c.__generator(this, function(e) {
                                            return t ? (this.handleValidationError(t), this.setState({
                                                awaitingResponse: !1
                                            })) : this.handleValidationSuccess(n), [2]
                                        })
                                    })
                                }), [2]
                            })
                        })
                    }, t.handleValidationSuccess = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_flow: w.RecurlyCreditCard,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: e.id,
                                                gateway: "cc"
                                            }
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState(function(e) {
                                            return {
                                                awaitingResponse: !1,
                                                errorState: c.__assign({}, e.errorState)
                                            }
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function(e) {
                        if (e.code === Y.a.Validation || e.code === Y.a.InvalidParameter) {
                            var n = Z();
                            e.fields && e.fields.forEach(function(e) {
                                n[e] = !0
                            }), t.setState({
                                errorMessage: Object(d.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"),
                                errorState: n
                            })
                        } else e.code && t.setState({
                            errorMessage: Object(d.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"),
                            errorState: Z()
                        })
                    }, t.handleFirstName = function(e) {
                        t.setState({
                            firstName: e.currentTarget.value
                        })
                    }, t.handleLastName = function(e) {
                        t.setState({
                            lastName: e.currentTarget.value
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.recurlyPollId = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.recurlyPollId), clearInterval(this.hostedFieldPollId)
                }, t.prototype.componentDidUpdate = function(e) {
                    window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs()
                }, t.prototype.render = function() {
                    var e = this;
                    return u.createElement(y._6, {
                        className: "recurly-credit-card",
                        fullWidth: !0
                    }, u.createElement(y._6, {
                        display: this.state.recurlyReady ? y.P.Hide : y.P.Block
                    }, u.createElement(y._8, {
                        fillContent: !0
                    })), u.createElement(y._6, {
                        display: this.state.recurlyReady ? y.P.Block : y.P.Hide
                    }, u.createElement("form", {
                        className: "recurly-form",
                        ref: function(t) {
                            return e.form = t
                        }
                    }, u.createElement(y._6, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(y.U, {
                        id: "recurly-name",
                        label: Object(d.d)("Name", "RecurlyCreditCard")
                    }, u.createElement("div", {
                        id: "recurly-name"
                    }, u.createElement(y.W, {
                        gutterSize: y.X.Medium
                    }, u.createElement(y.K, {
                        cols: 6
                    }, u.createElement(y._2, {
                        id: "recurly-first-name",
                        type: y._3.Text,
                        placeholder: Object(d.d)("First Name", "RecurlyCreditCard"),
                        value: this.state.firstName,
                        onChange: this.handleFirstName,
                        error: this.state.errorState.first_name
                    }), u.createElement("input", {
                        type: "hidden",
                        "data-recurly": "first_name",
                        value: this.state.firstName
                    })), u.createElement(y.K, {
                        cols: 6
                    }, u.createElement(y._2, {
                        id: "recurly-last-name",
                        type: y._3.Text,
                        placeholder: Object(d.d)("Last Name", "RecurlyCreditCard"),
                        value: this.state.lastName,
                        onChange: this.handleLastName,
                        error: this.state.errorState.last_name
                    }), u.createElement("input", {
                        type: "hidden",
                        "data-recurly": "last_name",
                        value: this.state.lastName
                    })))))), u.createElement(y._6, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(y.U, {
                        id: "recurly-credit-card",
                        label: Object(d.d)("Credit Card", "RecurlyCreditCard")
                    }, u.createElement("div", {
                        id: "recurly-credit-card"
                    }, u.createElement(y.W, {
                        gutterSize: y.X.Medium
                    }, u.createElement(y.K, {
                        cols: 8
                    }, u.createElement("div", {
                        id: "recurly-number",
                        "data-recurly": "number",
                        className: this.state.errorState.number ? "recurly-error" : ""
                    })), u.createElement(y.K, {
                        cols: 4
                    }, u.createElement("div", {
                        id: "recurly-cvv",
                        "data-recurly": "cvv",
                        className: this.state.errorState.cvv ? "recurly-error" : ""
                    })))))), u.createElement(y._6, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(y.U, {
                        id: "recurly-credit-card",
                        label: Object(d.d)("Expiration Date", "RecurlyCreditCard")
                    }, u.createElement("div", {
                        id: "recurly-credit-card"
                    }, u.createElement(y.W, {
                        gutterSize: y.X.Medium
                    }, u.createElement(y.K, {
                        cols: 6
                    }, u.createElement("div", {
                        id: "recurly-month",
                        "data-recurly": "month",
                        className: this.state.errorState.month ? "recurly-error" : ""
                    })), u.createElement(y.K, {
                        cols: 6
                    }, u.createElement("div", {
                        id: "recurly-year",
                        "data-recurly": "year",
                        className: this.state.errorState.year ? "recurly-error" : ""
                    })))))), u.createElement("input", {
                        type: "hidden",
                        name: "recurly-token",
                        "data-recurly": "token"
                    }), u.createElement(y.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? y.z.Loading : y.z.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy))))
                }, t.prototype.pollForHostedField = function() {
                    var e = this;
                    this.hostedFieldPollId = setInterval(function() {
                        document.querySelector(".recurly-hosted-field > iframe") && (e.setState({
                            recurlyReady: !0
                        }), clearInterval(e.hostedFieldPollId))
                    }, 500)
                }, t.prototype.setupConfigs = function() {
                    window.recurly.configure({
                        publicKey: this.props.publicKey,
                        fraud: {
                            kount: {
                                dataCollector: !0
                            }
                        },
                        required: ["cvv"],
                        fields: {
                            all: {
                                style: {
                                    height: "auto",
                                    fontSize: "12px",
                                    fontColor: K.light,
                                    placeholder: {
                                        color: Q.light
                                    }
                                }
                            },
                            number: {
                                selector: "#recurly-number",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("Card Number", "RecurlyCreditCard")
                                    }
                                }
                            },
                            month: {
                                selector: "#recurly-month",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("Month", "RecurlyCreditCard")
                                    }
                                }
                            },
                            year: {
                                selector: "#recurly-year",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("Year", "RecurlyCreditCard")
                                    }
                                }
                            },
                            cvv: {
                                selector: "#recurly-cvv",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("CVV", "RecurlyCreditCard")
                                    }
                                }
                            }
                        }
                    })
                }, t = c.__decorate([Object(G.d)("RecurlyCreditCard")], t)
            }(u.Component);
        var $, X = Object(i.b)(function(e) {
                return {
                    darkModeEnabled: Object(q.a)(e) === z.a.Dark
                }
            })(J),
            ee = (n("t2Wb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        paypalConfigured: !1,
                        awaitingResponse: !1,
                        hasError: !1
                    }, t.handleValidationSuccess = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_flow: w.RecurlyPaypal,
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: e.id,
                                                gateway: "paypal"
                                            }
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function() {
                        t.setState({
                            hasError: !0
                        })
                    }, t.handleClick = function() {
                        t.setState({
                            awaitingResponse: !0,
                            hasError: !1
                        }), t.paypalInstance.start()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.pollForRecurly = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                            paypalConfigured: !0
                        }))
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.pollForRecurly)
                }, t.prototype.render = function() {
                    return this.state.paypalConfigured ? u.createElement(y._6, {
                        className: "recurly-paypal",
                        display: y.P.Flex,
                        margin: {
                            y: 2
                        }
                    }, u.createElement(y.u, {
                        "data-a-target": "recurly-paypal__button",
                        onClick: this.handleClick,
                        state: this.state.awaitingResponse ? y.z.Loading : y.z.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)) : u.createElement(y._6, {
                        margin: {
                            y: 2
                        }
                    }, u.createElement(y._8, null))
                }, t.prototype.setupConfigs = function() {
                    var e = this;
                    window.recurly.configure(this.props.publicKey);
                    var t = window.recurly.PayPal({
                        braintree: {
                            clientAuthorization: this.props.braintreeClientAuthorization
                        }
                    });
                    t.on("token", function(t) {
                        e.handleValidationSuccess(t)
                    }), t.on("error", function() {
                        e.handleValidationError(), e.setState({
                            awaitingResponse: !1
                        })
                    }), t.on("cancel", function() {
                        e.setState({
                            awaitingResponse: !1
                        })
                    }), this.paypalInstance = t
                }, t = c.__decorate([Object(G.d)("RecurlyPaypal")], t)
            }(u.Component)),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        xsollaLoaded: !1
                    }, t.handleXsollaEvent = function(e) {
                        if ((!e.origin || e.origin.includes("xsolla")) && e.data) {
                            var n = JSON.parse(e.data);
                            if (n.command && "status" === n.command)
                                if (n.data && n.data.paymentInfo) switch (n.data.paymentInfo.status) {
                                    case "done":
                                        return t.props.trackPaymentFormInteraction({
                                            paymentFlow: w.Xsolla,
                                            action: E.CompletePurchaseClick,
                                            actionDetail: S.Pending
                                        }), t.props.trackPaymentFormInteraction({
                                            paymentFlow: w.Xsolla,
                                            action: E.CompletePurchaseClick,
                                            actionDetail: S.Success
                                        });
                                    case "troubled":
                                        return t.props.trackPaymentFormInteraction({
                                            paymentFlow: w.Xsolla,
                                            action: E.CompletePurchaseClick,
                                            actionDetail: S.Pending
                                        }), t.props.trackPaymentFormInteraction({
                                            paymentFlow: w.Xsolla,
                                            action: E.CompletePurchaseClick,
                                            actionDetail: S.Failed
                                        })
                                }
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.iframe,
                        t = this;
                    e && (e.addEventListener("load", function() {
                        t.props.latencyTracking.reportInteractive(), t.setState({
                            xsollaLoaded: !0
                        })
                    }), window.addEventListener("message", t.handleXsollaEvent))
                }, t.prototype.render = function() {
                    var e = this;
                    return u.createElement(y._6, {
                        fullWidth: !0
                    }, !this.state.xsollaLoaded && u.createElement(y._8, {
                        fillContent: !0
                    }), u.createElement(y._6, {
                        fullWidth: !0,
                        display: this.state.xsollaLoaded ? y.P.Inline : y.P.Hide
                    }, u.createElement("iframe", {
                        ref: function(t) {
                            return e.iframe = t
                        },
                        id: "xsolla",
                        src: this.props.iframeURL,
                        width: "100%",
                        height: "650px"
                    })))
                }, t = c.__decorate([Object(G.d)("XsollaMoreMethods")], t)
            }(u.Component),
            ne = n("HM6l"),
            ie = n("5k8C");
        n("7gLH");
        ! function(e) {
            e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
        }($ || ($ = {}));
        var re = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    zuoraConfigured: !1,
                    awaitingResponse: !1,
                    errorMessage: "",
                    nullValueErrors: [],
                    sessionId: Object(ne.b)()
                }, t.handleSubmit = function() {
                    t.setState({
                        awaitingResponse: !0,
                        errorMessage: "",
                        nullValueErrors: []
                    }), window.Z.submit()
                }, t.renderErrorMessage = function() {
                    if (t.state.nullValueErrors.length) {
                        var e = t.state.nullValueErrors.map(function(e, t) {
                            return u.createElement(y._6, {
                                key: t,
                                margin: {
                                    left: 2
                                }
                            }, u.createElement(y.O, {
                                color: y.J.Error
                            }, "• ", e))
                        });
                        return u.createElement("div", null, u.createElement(y._6, {
                            margin: {
                                top: 1,
                                left: 1,
                                bottom: .5
                            }
                        }, u.createElement(y.O, {
                            color: y.J.Error
                        }, Object(d.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                    }
                    if (t.state.errorMessage) return u.createElement(y._6, {
                        margin: {
                            top: 1,
                            left: 1
                        }
                    }, u.createElement(y.O, {
                        color: y.J.Error
                    }, t.state.errorMessage))
                }, t.successCallback = function(e) {
                    return c.__awaiter(t, void 0, void 0, function() {
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!e.success) return [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                        payment_flow: w.ZuoraCreditCard,
                                        payment_provider: "zuora",
                                        payment_info: {
                                            token: e.refId,
                                            gateway: "cc"
                                        }
                                    })];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return t.sent(), this.setState({
                                        awaitingResponse: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.errorCallback = function(e, n, i) {
                    if (t.setState({
                            awaitingResponse: !1
                        }), "unknown" === n) return t.parseGatewayErrorMessage(i);
                    window.Z.sendErrorMessageToHpm(e, i)
                }, t.parseGatewayErrorMessage = function(e) {
                    return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                        errorMessage: Object(d.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                    }) : t.setState({
                        errorMessage: Object(d.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                    })
                }, t.parseNullValueErrorMessage = function(e) {
                    var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                        i = {
                            creditCardHolderName: Object(d.d)("Name on Card", "ZuoraCreditCard"),
                            creditCardAddress1: Object(d.d)("Billing Address", "ZuoraCreditCard"),
                            creditCardCity: Object(d.d)("City", "ZuoraCreditCard"),
                            creditCardPostalCode: Object(d.d)("Zip Code", "ZuoraCreditCard")
                        },
                        r = n.map(function(e) {
                            var t = i[e];
                            return t || ""
                        }).filter(function(e) {
                            return "" !== e
                        });
                    t.setState({
                        nullValueErrors: r
                    })
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this;
                if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                else {
                    var t = document.createElement("script");
                    t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                        e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                    }
                }
            }, t.prototype.render = function() {
                return u.createElement("div", null, !this.state.zuoraConfigured && u.createElement(y._6, {
                    padding: {
                        y: 5
                    }
                }, u.createElement(y._8, {
                    fillContent: !0
                })), u.createElement(y._6, {
                    display: this.state.zuoraConfigured ? y.P.Block : y.P.Hide,
                    "data-test-selector": $.ZUORA_PARENT_LAYOUT
                }, this.renderErrorMessage(), u.createElement("div", {
                    id: "zuora_payment",
                    className: this.state.awaitingResponse ? "zuora-disabled" : ""
                }), u.createElement(y._6, {
                    margin: {
                        left: .5,
                        top: 2,
                        bottom: 1
                    }
                }, u.createElement(y.u, {
                    onClick: this.handleSubmit,
                    state: this.state.awaitingResponse ? y.z.Loading : y.z.Default,
                    disabled: this.state.awaitingResponse,
                    "data-test-selector": $.UPDATE_PAYMENT_BUTTON
                }, this.props.submitButtonCopy)), u.createElement(ie.a, {
                    isProduction: this.props.isProductionConfig,
                    sessionId: this.state.sessionId
                })))
            }, t.prototype.initZuoraIFrame = function() {
                var e = this,
                    t = {
                        id: this.props.hostedPageID,
                        url: this.props.hostedPageURL,
                        style: "inline",
                        submitEnabled: "true",
                        field_accountId: this.props.externalAccountID,
                        tenantId: this.props.tenantID,
                        token: this.props.token,
                        key: this.props.publicKey,
                        signature: this.props.signature,
                        locale: this.formattedLocale
                    };
                window.Z.renderWithErrorHandler(t, {
                    creditCardCountry: "USA"
                }, this.successCallback, this.errorCallback);
                var n = document.getElementById("z_hppm_iframe");
                n && n.addEventListener("load", function() {
                    e.setState({
                        zuoraConfigured: !0
                    })
                })
            }, Object.defineProperty(t.prototype, "formattedLocale", {
                get: function() {
                    var e = this.props.languageCode || "en";
                    if (e.includes("-")) {
                        var t = e.split("-");
                        e = t[0] + "_" + t[1].toUpperCase()
                    }
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), t = c.__decorate([Object(G.d)("ZuoraCreditCard")], t)
        }(u.Component);
        var ae = Object(i.b)(function(e) {
                return {
                    languageCode: e.session.languageCode
                }
            })(re),
            oe = {
                CreditCard: function() {
                    return Object(d.d)("Credit Card", "TicketDescription")
                },
                Paypal: function() {
                    return Object(d.d)("Paypal", "TicketDescription")
                },
                AmazonPay: function() {
                    return Object(d.d)("Amazon Pay", "TicketDescription")
                },
                MoreMethods: function() {
                    return Object(d.d)("More Methods", "TicketDescription")
                }
            },
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedProvider: w.ZuoraCreditCard,
                        subsCheckoutVariantAssignment: "zuora"
                    }, t.submitButtonCopy = Object(d.d)("Complete Purchase", "PaymentMethods"), t.paymentProviders = [{
                        name: w.ZuoraCreditCard,
                        enabled: "zuora" === t.state.subsCheckoutVariantAssignment || "owlallaccess2018" === t.props.productShortName,
                        button: {
                            label: oe.CreditCard(),
                            src: F.a,
                            alt: oe.CreditCard(),
                            srcSet: {
                                "1x": F.a,
                                "2x": R.a
                            }
                        },
                        component: u.createElement(ae, c.__assign({
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess,
                            isProductionConfig: t.props.configs.recurly.payWithAmazonConfigs.isProduction
                        }, t.props.configs.zuora))
                    }, {
                        name: w.RecurlyCreditCard,
                        enabled: "recurly" === t.state.subsCheckoutVariantAssignment && !("owlallaccess2018" === t.props.productShortName),
                        button: {
                            label: oe.CreditCard(),
                            src: F.a,
                            alt: oe.CreditCard(),
                            srcSet: {
                                "1x": F.a,
                                "2x": R.a
                            }
                        },
                        component: u.createElement(X, {
                            publicKey: t.props.configs.recurly.publicKey,
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        })
                    }, {
                        name: w.RecurlyPaypal,
                        enabled: !("owlallaccess2018" === t.props.productShortName),
                        button: {
                            label: oe.Paypal(),
                            src: B.a,
                            alt: oe.Paypal(),
                            srcSet: {
                                "1x": B.a,
                                "2x": W.a
                            }
                        },
                        component: u.createElement(ee, {
                            publicKey: t.props.configs.recurly.publicKey,
                            braintreeClientAuthorization: t.props.configs.recurly.braintreeClientAuthorization,
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        })
                    }, {
                        name: w.RecurlyPayWithAmazon,
                        enabled: !("owlallaccess2018" === t.props.productShortName),
                        button: {
                            label: oe.AmazonPay(),
                            src: x.a,
                            alt: oe.AmazonPay(),
                            srcSet: {
                                "1x": x.a,
                                "2x": P.a
                            }
                        },
                        component: u.createElement(V, c.__assign({
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        }, t.props.configs.recurly.payWithAmazonConfigs))
                    }, {
                        name: w.Xsolla,
                        enabled: !0,
                        button: {
                            label: oe.MoreMethods(),
                            src: U.a,
                            alt: oe.MoreMethods(),
                            srcSet: {
                                "1x": U.a,
                                "2x": j.a
                            }
                        },
                        component: u.createElement(te, c.__assign({
                            trackPaymentFormInteraction: t.props.trackPaymentFormInteraction
                        }, t.props.configs.xsolla))
                    }], t.renderSelector = function(e) {
                        return e.enabled ? u.createElement(y.K, {
                            key: e.name,
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, u.createElement(y._6, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(y.Y, {
                            label: e.button.label,
                            type: y.Z.Radio,
                            src: e.button.src,
                            alt: e.button.alt,
                            srcSet: e.button.srcSet,
                            value: e.name,
                            onChange: t.setProviderFactory(e.name),
                            checked: t.state.selectedProvider === e.name
                        }))) : u.createElement(u.Fragment, {
                            key: e.name
                        })
                    }, t.renderProvider = function(e) {
                        return u.createElement(y._6, {
                            key: e.name,
                            display: t.state.selectedProvider === e.name ? y.P.Inline : y.P.Hide
                        }, e.component)
                    }, t.setProviderFactory = function(e) {
                        return function() {
                            if (t.props.trackPaymentFormInteraction({
                                    paymentFlow: e,
                                    action: E.RadioButtonClick,
                                    actionDetail: e
                                }), t.setState({
                                    selectedProvider: e
                                }), e === w.RecurlyPaypal) document.querySelector('[data-a-target="recurly-paypal__button"]').click();
                            else if (e === w.RecurlyPayWithAmazon) {
                                document.querySelector('[data-metric-name="amazon-pay-button-load"]').click()
                            }
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, d.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_VARIANT")];
                                case 1:
                                    return e = n.sent() || this.state.subsCheckoutVariantAssignment, "owlallaccess2018" !== this.props.productShortName && this.setState({
                                        selectedProvider: "recurly" === e ? w.RecurlyCreditCard : w.ZuoraCreditCard,
                                        subsCheckoutVariantAssignment: e
                                    }), document.querySelector("#recurly-script") ? [2] : ((t = document.createElement("script")).src = "https://js.recurly.com/v4/recurly.js", t.async = !0, t.id = "recurly-script", document.body.appendChild(t), [2])
                            }
                        })
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if ("US" !== this.props.countryCode) {
                        this.state.selectedProvider !== w.Xsolla && this.setState({
                            selectedProvider: w.Xsolla
                        });
                        var e = this.paymentProviders.find(function(e) {
                            return e.name === w.Xsolla
                        });
                        return e && this.renderProvider(e)
                    }
                    return u.createElement(y._6, null, u.createElement(y._6, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(y.O, {
                        type: y._43.H4,
                        bold: !0
                    }, Object(d.d)("Choose Your Payment Method", "PaymentMethods"))), u.createElement(y.W, {
                        gutterSize: y.X.Small
                    }, this.paymentProviders.map(this.renderSelector)), u.createElement(y._6, null, this.paymentProviders.map(this.renderProvider)))
                }, t = c.__decorate([Object(G.d)("PaymentMethods")], t)
            }(u.Component),
            ce = n("3T7g"),
            le = (n("VH0v"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    if (t) return u.createElement(y._29, {
                        className: "ticket-description"
                    }, u.createElement(y.B, {
                        border: !0,
                        elevation: 1
                    }, u.createElement("div", {
                        className: "ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, u.createElement(y._6, {
                        className: "ticket-description__broadcaster-info",
                        textAlign: y._39.Center,
                        display: y.P.Flex,
                        flexDirection: y.R.Column,
                        alignItems: y.c.Center,
                        flexWrap: y.S.NoWrap,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        breakpointMedium: {
                            padding: 4
                        },
                        breakpointLarge: {
                            padding: 5
                        }
                    }, u.createElement(y._0, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, u.createElement(y.l, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    })), u.createElement(y._0, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, u.createElement(y.O, {
                        type: y._43.H4,
                        bold: !0,
                        color: y.J.Overlay
                    }, t.displayName)), u.createElement(y._6, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, u.createElement(y.O, {
                        type: y._43.H5,
                        color: y.J.Overlay
                    }, e.displayName)))), u.createElement(y.C, null, u.createElement(y._29, {
                        borderBottom: !0,
                        textAlign: y._39.Center,
                        background: y.m.Alt,
                        padding: 2
                    }, this.props.renderPrice()), u.createElement(y._29, {
                        className: "ticket-description__description",
                        padding: {
                            x: 1,
                            bottom: 2
                        },
                        textAlign: y._39.Left,
                        background: y.m.Alt
                    }, u.createElement(y._1, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(y.O, {
                        className: "ticket-description__description__line-item",
                        bold: !0
                    }, Ee["Subscription benefits"]())), u.createElement(y.O, {
                        className: "ticket-description__description__line-item"
                    }, Ee["Directly support the broadcaster"]()), e.hasAdFree && u.createElement(y.O, {
                        className: "ticket-description__description__line-item"
                    }, Ee["Ad-free (with limited exceptions)"]()), u.createElement(y.O, {
                        className: "ticket-description__description__line-item"
                    }, Ee["Chat during subscriber-only mode"]()), e.hasFastChat && u.createElement(y.O, {
                        className: "ticket-description__description__line-item"
                    }, Ee["Not affected by chat slow mode"]()), e.hasSubonlyVideoArchive && u.createElement(y.O, {
                        className: "ticket-description__description__line-item"
                    }, Ee["Access to VODs"]()), this.props.renderSubBadges(), this.props.renderSubEmotes()))))
                }, t = c.__decorate([Object(G.d)("TicketDescription")], t)
            }(u.Component)),
            ue = (n("kgE+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: !0
                    }, t.toggleCollapsed = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    if (t) return u.createElement(y._29, {
                        className: "mobile-ticket-description",
                        fullWidth: !0,
                        margin: 1
                    }, u.createElement(y.B, {
                        border: !0,
                        elevation: 1
                    }, u.createElement("div", {
                        className: "mobile-ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, u.createElement(y._29, {
                        margin: {
                            top: 2
                        },
                        display: y.P.Flex,
                        flexDirection: y.R.Column,
                        alignItems: y.c.Center
                    }, u.createElement(y.l, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    }))), u.createElement(y._29, {
                        className: "mobile-ticket-description__broadcaster-info",
                        textAlign: y._39.Center,
                        display: y.P.Flex,
                        flexDirection: y.R.Column,
                        alignItems: y.c.Center,
                        flexWrap: y.S.NoWrap,
                        margin: {
                            top: 2
                        }
                    }, u.createElement(y._29, {
                        background: y.m.Alt,
                        fullWidth: !0
                    }, u.createElement(y._6, {
                        margin: 1
                    }, u.createElement(y.O, {
                        type: y._43.H4,
                        bold: !0
                    }, t.displayName)), u.createElement(y._6, {
                        margin: 1
                    }, u.createElement(y.O, {
                        type: y._43.H5
                    }, e.displayName)), u.createElement(y._6, {
                        margin: 1
                    }, this.props.renderPrice())), this.state.collapsed && u.createElement(y._4, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, u.createElement(y._29, {
                        fullWidth: !0,
                        textAlign: y._39.Center,
                        alignItems: y.c.Center,
                        padding: {
                            y: 1
                        }
                    }, u.createElement(y.O, {
                        type: y._43.Span,
                        color: y.J.Link
                    }, Object(d.d)("Show Subcription Benefits", "MobileTicketDescription"))))), u.createElement(y.C, null, !this.state.collapsed && u.createElement(u.Fragment, null, u.createElement(y._29, {
                        className: "mobile-ticket-description__description",
                        padding: {
                            x: 1,
                            bottom: 1
                        },
                        textAlign: y._39.Left,
                        background: y.m.Alt,
                        borderTop: !0
                    }, u.createElement(y._1, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(y.O, {
                        className: "mobile-ticket-description__description__line-item",
                        bold: !0
                    }, Ee["Subscription benefits"]())), u.createElement(y.O, {
                        className: "mobile-ticket-description__description__line-item"
                    }, Ee["Directly support the broadcaster"]()), e.hasAdFree && u.createElement(y.O, {
                        className: "mobile-ticket-description__description__line-item"
                    }, Ee["Ad-free (with limited exceptions)"]()), u.createElement(y.O, {
                        className: "mobile-ticket-description__description__line-item"
                    }, Ee["Chat during subscriber-only mode"]()), e.hasFastChat && u.createElement(y.O, {
                        className: "mobile-ticket-description__description__line-item"
                    }, Ee["Not affected by chat slow mode"]()), e.hasSubonlyVideoArchive && u.createElement(y.O, {
                        className: "mobile-ticket-description__description__line-item"
                    }, Ee["Access to VODs"]()), this.props.renderSubBadges(), this.props.renderSubEmotes()), u.createElement(y._4, {
                        onClick: this.toggleCollapsed,
                        hover: !1,
                        alpha: !0
                    }, u.createElement(y._29, {
                        fullWidth: !0,
                        textAlign: y._39.Center,
                        alignItems: y.c.Center,
                        padding: {
                            y: 1
                        }
                    }, u.createElement(y.O, {
                        type: y._43.Span,
                        color: y.J.Link
                    }, Object(d.d)("Hide Subcription Benefits", "MobileTicketDescription"))))))))
                }, t = c.__decorate([Object(G.d)("TicketDescription")], t)
            }(u.Component)),
            de = (n("40wk"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.turboBenefitsList = [{
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_ad-free.png",
                        benefitHeader: Oe["Ad-Free*"](),
                        benefitDescription: Oe["No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_custom-emotes.png",
                        benefitHeader: Oe["Custom Emoticon Set"](),
                        benefitDescription: Oe["Express your emotions with an exclusive set of faces."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_badge.png",
                        benefitHeader: Oe.Badge(),
                        benefitDescription: Oe["Show everyone how Turbo you are with a shiny new chat badge."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_chat-color.png",
                        benefitHeader: Oe["Extended Chat Colors"](),
                        benefitDescription: Oe["Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_storage.png",
                        benefitHeader: Oe["Increased Video Storage"](),
                        benefitDescription: Oe["Save your past broadcasts on Twitch for 60 days."]()
                    }], t.renderTurboBenefit = function(e) {
                        return u.createElement(y.K, {
                            cols: 12,
                            key: e.benefitHeader
                        }, u.createElement(y._29, {
                            margin: {
                                top: 2
                            }
                        }, u.createElement(y.W, null, u.createElement(y.K, {
                            cols: 4
                        }, u.createElement(y.L, {
                            src: e.imgSrc,
                            alt: e.benefitHeader
                        })), u.createElement(y.K, {
                            cols: 8
                        }, u.createElement(y.O, {
                            type: y._43.H4,
                            bold: !0
                        }, e.benefitHeader), u.createElement(y.O, {
                            type: y._43.P
                        }, e.benefitDescription)))))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Oe.Features();
                    return u.createElement(y._29, {
                        className: "turbo-mobile-ticket-description",
                        background: y.m.Alt2,
                        border: !0,
                        padding: 2,
                        elevation: 1,
                        fullWidth: !0
                    }, u.createElement(y.W, null, u.createElement(y.K, {
                        cols: 12
                    }, u.createElement(y.O, {
                        type: y._43.H2,
                        bold: !0
                    }, e)), u.createElement(y.K, {
                        cols: 12
                    }, u.createElement(y.O, {
                        type: y._43.H4
                    }, Oe["This list doesn’t even include how much of a baller you’ll become after upgrading."]())), this.turboBenefitsList.map(this.renderTurboBenefit), u.createElement(y.K, {
                        cols: 12
                    }, u.createElement(y._29, {
                        borderBottom: !0,
                        textAlign: y._39.Center,
                        background: y.m.Alt,
                        margin: {
                            top: 2
                        },
                        padding: 2
                    }, this.props.renderPrice()))))
                }, t = c.__decorate([Object(G.d)("TicketDescription")], t)
            }(u.Component)),
            pe = (n("Mn81"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.turboBenefitsList = [{
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_ad-free.png",
                        benefitHeader: Oe["Ad-Free*"](),
                        benefitDescription: Oe["No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_custom-emotes.png",
                        benefitHeader: Oe["Custom Emoticon Set"](),
                        benefitDescription: Oe["Express your emotions with an exclusive set of faces."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_badge.png",
                        benefitHeader: Oe.Badge(),
                        benefitDescription: Oe["Show everyone how Turbo you are with a shiny new chat badge."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_chat-color.png",
                        benefitHeader: Oe["Extended Chat Colors"](),
                        benefitDescription: Oe["Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up."]()
                    }, {
                        imgSrc: "https://www.twitch.tv/images/xarth/pages/turbo/features_storage.png",
                        benefitHeader: Oe["Increased Video Storage"](),
                        benefitDescription: Oe["Save your past broadcasts on Twitch for 60 days."]()
                    }], t.renderTurboBenefit = function(e) {
                        return u.createElement(y.K, {
                            cols: 12,
                            key: e.benefitHeader
                        }, u.createElement(y._29, {
                            margin: {
                                top: 2
                            }
                        }, u.createElement(y.W, null, u.createElement(y.K, {
                            cols: 4
                        }, u.createElement(y.L, {
                            src: e.imgSrc,
                            alt: e.benefitHeader
                        })), u.createElement(y.K, {
                            cols: 8
                        }, u.createElement(y.O, {
                            type: y._43.H4,
                            bold: !0
                        }, e.benefitHeader), u.createElement(y.O, {
                            type: y._43.P
                        }, e.benefitDescription)))))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Oe.Features();
                    return u.createElement(y._29, {
                        className: "turbo-ticket-description",
                        background: y.m.Alt2,
                        border: !0,
                        padding: 2,
                        elevation: 1
                    }, u.createElement(y.W, null, u.createElement(y.K, {
                        cols: 12
                    }, u.createElement(y.O, {
                        type: y._43.H2,
                        bold: !0
                    }, e)), u.createElement(y.K, {
                        cols: 12
                    }, u.createElement(y.O, {
                        type: y._43.H4
                    }, Oe["This list doesn’t even include how much of a baller you’ll become after upgrading."]())), this.turboBenefitsList.map(this.renderTurboBenefit), u.createElement(y.K, {
                        cols: 12
                    }, u.createElement(y._29, {
                        borderBottom: !0,
                        textAlign: y._39.Center,
                        background: y.m.Alt,
                        margin: {
                            top: 2
                        },
                        padding: 2
                    }, this.props.renderPrice()))))
                }, t = c.__decorate([Object(G.d)("TicketDescription")], t)
            }(u.Component)),
            me = n("7LIQ"),
            fe = n("Tzcg"),
            ge = n("3zLD"),
            he = n("3iBR"),
            ve = n("D0Fd"),
            ye = n("FDYX"),
            be = n("PGoF"),
            _e = (n("iLMR"), "skin-selector"),
            ke = "igc-selector",
            Se = "badge-selector",
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderHeroSkins = function() {
                        if (t.props.owner && !t.props.data.loading && !t.props.data.error) {
                            var e = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.heroSkins.map(function(e) {
                                return u.createElement(y._0, {
                                    margin: {
                                        x: .5
                                    },
                                    key: "skin-" + e.id,
                                    display: y.P.Flex,
                                    flexDirection: y.R.Row,
                                    alignItems: y.c.Center,
                                    "data-test-selector": _e
                                }, u.createElement("li", null, u.createElement(ve.a, {
                                    imageURL: e.imageURL,
                                    size: ve.b.Small
                                })))
                            }) : null;
                            return u.createElement(y._0, {
                                display: y.P.Flex,
                                flexDirection: y.R.Row,
                                flexWrap: y.S.Wrap,
                                justifyContent: y._5.Center,
                                alignItems: y.c.Center
                            }, u.createElement("ul", null, e))
                        }
                    }, t.renderInGameContent = function() {
                        if (t.props.owner && !t.props.data.loading && !t.props.data.error) {
                            var e = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.inGameContent.map(function(e) {
                                return u.createElement(y.l, {
                                    key: "igc-" + e.id,
                                    src: e.imageURL,
                                    alt: e.name,
                                    size: 64,
                                    "data-test-selector": ke
                                })
                            }) : null;
                            return u.createElement(y._6, {
                                display: y.P.Flex,
                                flexDirection: y.R.Row,
                                flexWrap: y.S.Wrap,
                                justifyContent: y._5.Center,
                                alignItems: y.c.Center
                            }, e)
                        }
                    }, t.renderSubBadges = function() {
                        if (t.props.owner && !t.props.data.loading && !t.props.data.error) {
                            var e = t.props.owner.broadcastBadges.map(function(e) {
                                    return {
                                        name: e.title,
                                        imageURL: e.image4x
                                    }
                                }),
                                n = t.props.data.user.tournament ? t.props.data.user.tournament.rewards.insider.badges.map(function(e) {
                                    return {
                                        name: e.name,
                                        imageURL: e.imageURL
                                    }
                                }) : null;
                            n && (e = e.concat(n));
                            var i = e.map(function(e) {
                                return u.createElement(y._0, {
                                    margin: {
                                        x: 1
                                    },
                                    key: "access-badge-" + e.name
                                }, u.createElement("li", null, u.createElement(y.l, {
                                    src: e.imageURL,
                                    alt: e.name,
                                    size: 36,
                                    "data-test-selector": Se
                                })))
                            });
                            return u.createElement(y._6, null, u.createElement(y.O, {
                                className: "ticket-description__description__line-item"
                            }, Object(d.d)("{numBadges, number} All-Access Pass Twitch Badges:", {
                                numBadges: 2
                            }, "EsportsTicketDescription")), u.createElement(y._0, {
                                display: y.P.Flex,
                                flexWrap: y.S.Wrap
                            }, u.createElement("ul", null, i)))
                        }
                    }, t.renderSubEmotes = function() {
                        if (t.props.owner) {
                            var e = t.props.owner.subscriptionProducts.map(function(e) {
                                return e.emotes
                            }).reduce(function(e, t) {
                                return e.concat(t)
                            }, []);
                            if (0 !== e.length) return u.createElement(y._6, null, u.createElement(y.O, {
                                className: "ticket-description__description__line-item"
                            }, Object(d.d)("{numEmotes, number} All-Access Pass Twitch Emotes:", {
                                numEmotes: e.length
                            }, "EsportsTicketDescription")), u.createElement(me.a, {
                                emoteSet: {
                                    id: "",
                                    emotes: Object(fe.b)(e)
                                },
                                onClickEmote: void 0,
                                locked: !1
                            }))
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.owner) {
                        var e = this.props.product.price;
                        return this.props.owner && Object(ye.d)(this.props.owner.subscriptionProducts) && (e = Object(ye.a)(this.props.owner.subscriptionProducts[0])), u.createElement(y._29, {
                            className: "ticket-description"
                        }, u.createElement(y.B, {
                            border: !0,
                            elevation: 1
                        }, u.createElement(y._6, {
                            className: "ticket-description__banner-image",
                            padding: 3
                        }, u.createElement("img", {
                            src: he.c + "/owl-2017/all-access-logo.svg",
                            alt: Object(d.d)("Overwatch League All-Access Pass on Twitch", "EsportsTicketDescription"),
                            height: "80px"
                        })), u.createElement(y.C, null, u.createElement(y._29, {
                            borderBottom: !0,
                            textAlign: y._39.Center,
                            background: y.m.Alt,
                            padding: 2
                        }, u.createElement(y.O, {
                            type: y._43.H4,
                            "data-test-selector": "esport-ticket-description-price"
                        }, Object(d.d)("{price} {interval}", {
                            price: u.createElement(y.O, {
                                type: y._43.Span,
                                bold: !0
                            }, e),
                            interval: "One-Time Purchase"
                        }, "EsportsTicketDescription"))), u.createElement(y._29, {
                            className: "ticket-description__description",
                            padding: {
                                x: 1,
                                y: 2
                            },
                            textAlign: y._39.Left,
                            background: y.m.Alt
                        }, u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            bold: !0,
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Overwatch League All-Access Pass Benefits", "EsportsTicketDescription")), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Exclusive Command Center Stream", "EsportsTicketDescription")), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Match Analysis Videos by Players", "EsportsTicketDescription")), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Participate in Post-Match Q&A", "EsportsTicketDescription")), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Passholder-Only Chat Access", "EsportsTicketDescription")), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Ad-Free Viewing on Overwatch League", "EsportsTicketDescription")), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "ticket-feature"
                        }, Object(d.d)("Overwatch In-Game Content:", "EsportsTicketDescription")), this.renderHeroSkins(), this.renderInGameContent(), this.renderSubBadges(), this.renderSubEmotes(), u.createElement(y.O, {
                            className: "ticket-description__description__line-item",
                            "data-test-selector": "disclaimer"
                        }, Object(d.d)("All-Access benefits last up to the start of the 2019 OWL Season. Twitch emotes, badges, and in-game content are yours to keep.", "EsportsTicketDescription"))))))
                    }
                }, t
            }(u.PureComponent),
            we = Object(ge.compose)(Object(m.a)(be, {
                options: function(e) {
                    return {
                        variables: {
                            channelID: e.owner.id
                        }
                    }
                }
            }))(Ne),
            Ee = {
                "Subscription benefits": function() {
                    return Object(d.d)("Subscription benefits", "TicketDescription")
                },
                "Directly support the broadcaster": function() {
                    return Object(d.d)("Directly support the broadcaster", "TicketDescription")
                },
                "Ad-free (with limited exceptions)": function() {
                    return Object(d.d)("Ad-free (with limited exceptions)", "TicketDescription")
                },
                "Chat during subscriber-only mode": function() {
                    return Object(d.d)("Chat during subscriber-only mode", "TicketDescription")
                },
                "Not affected by chat slow mode": function() {
                    return Object(d.d)("Not affected by chat slow mode", "TicketDescription")
                },
                "Access to VODs": function() {
                    return Object(d.d)("Access to VODs", "TicketDescription")
                },
                "Subscriber Badges:": function() {
                    return Object(d.d)("Subscriber Badges:", "TicketDescription")
                },
                "Subscriber Emotes:": function() {
                    return Object(d.d)("Subscriber Emotes:", "TicketDescription")
                }
            },
            Oe = {
                "Ad-Free*": function() {
                    return Object(d.d)("Ad-Free*", "TicketDescription")
                },
                "Custom Emoticon Set": function() {
                    return Object(d.d)("Custom Emoticon Set", "TicketDescription")
                },
                Badge: function() {
                    return Object(d.d)("Badge", "TicketDescription")
                },
                "Extended Chat Colors": function() {
                    return Object(d.d)("Extended Chat Colors", "TicketDescription")
                },
                "Increased Video Storage": function() {
                    return Object(d.d)("Increased Video Storage", "TicketDescription")
                },
                "No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers.": function() {
                    return Object(d.d)("No pre-rolls, no mid-rolls, no companions, no display ads. All you see is front-page takeovers.", "TicketDescription")
                },
                "Express your emotions with an exclusive set of faces.": function() {
                    return Object(d.d)("Express your emotions with an exclusive set of faces.", "TicketDescription")
                },
                "Show everyone how Turbo you are with a shiny new chat badge.": function() {
                    return Object(d.d)("Show everyone how Turbo you are with a shiny new chat badge.", "TicketDescription")
                },
                "Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up.": function() {
                    return Object(d.d)("Sick and tired of getting suspended because you’re chatting in SpringGreen? Change it up.", "TicketDescription")
                },
                "Save your past broadcasts on Twitch for 60 days.": function() {
                    return Object(d.d)("Save your past broadcasts on Twitch for 60 days.", "TicketDescription")
                },
                Features: function() {
                    return Object(d.d)("Features", "TicketDescription")
                },
                "This list doesn’t even include how much of a baller you’ll become after upgrading.": function() {
                    return Object(d.d)("This list doesn’t even include how much of a baller you’ll become after upgrading.", "TicketDescription")
                }
            },
            Ce = {
                "One Time": function() {
                    return Object(d.d)("One Time", "TicketDescription")
                },
                Year: function() {
                    return Object(d.d)("Year", "TicketDescription")
                },
                Month: function() {
                    return Object(d.d)("Month", "TicketDescription")
                }
            },
            xe = function(e, t) {
                return Object(d.d)("{price} / {interval}", {
                    price: u.createElement(y.O, {
                        type: y._43.Span,
                        bold: !0
                    }, e),
                    interval: t
                }, "TicketDescription")
            },
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderPrice = function() {
                        var e;
                        switch (t.props.product.interval.unit) {
                            case Pe.OneTime:
                                e = Ce["One Time"]();
                                break;
                            case Pe.Year:
                                e = Ce.Year();
                                break;
                            case Pe.Month:
                            default:
                                e = Ce.Month()
                        }
                        return u.createElement(y.O, {
                            type: y._43.H4
                        }, xe(t.props.product.price, e))
                    }, t.renderSubBadges = function() {
                        if (!t.props.owner) return u.createElement(u.Fragment, null);
                        var e = t.props.owner.broadcastBadges.filter(function(e) {
                            return "subscriber" === e.setID
                        }).sort(function(e, t) {
                            return parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                        });
                        if (!e.length) return u.createElement(u.Fragment, null);
                        var n = e.map(function(e) {
                            return u.createElement(y._6, {
                                key: e.setID + "/" + e.version,
                                margin: .5
                            }, u.createElement(ce.a, {
                                badge: e
                            }))
                        });
                        return u.createElement(u.Fragment, null, u.createElement(y.O, {
                            className: "ticket-description__description__line-item"
                        }, Ee["Subscriber Badges:"]()), u.createElement(y._6, {
                            display: y.P.Flex,
                            flexWrap: y.S.Wrap,
                            justifyContent: y._5.Center
                        }, n))
                    }, t.renderSubEmotes = function() {
                        if (!t.props.owner) return u.createElement(u.Fragment, null);
                        var e = t.props.owner.subscriptionProducts.filter(function(e) {
                            return (e.tier || "") <= (t.props.product.tier || "")
                        }).map(function(e) {
                            return e.emotes
                        }).reduce(function(e, t) {
                            return e.concat(t)
                        }, []);
                        return 0 === e.length ? u.createElement(u.Fragment, null) : u.createElement(u.Fragment, null, u.createElement(y.O, {
                            className: "ticket-description__description__line-item"
                        }, e.length, " ", Ee["Subscriber Emotes:"]()), u.createElement(me.a, {
                            emoteSet: {
                                id: "",
                                emotes: Object(fe.b)(e)
                            },
                            onClickEmote: void 0,
                            locked: !1
                        }))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = !this.props.owner && "turbo" === this.props.product.type;
                    return this.props.owner && Object(_.a)(this.props.owner.id, this.props.sessionUser) ? u.createElement(we, {
                        owner: this.props.owner,
                        product: this.props.product
                    }) : this.props.mobile && e ? u.createElement(de, c.__assign({}, this.props, {
                        renderPrice: this.renderPrice
                    })) : e ? u.createElement(pe, c.__assign({}, this.props, {
                        renderPrice: this.renderPrice
                    })) : this.props.owner && this.props.mobile ? u.createElement(ue, c.__assign({}, this.props, {
                        renderPrice: this.renderPrice,
                        renderSubBadges: this.renderSubBadges,
                        renderSubEmotes: this.renderSubEmotes
                    })) : this.props.owner ? u.createElement(le, c.__assign({}, this.props, {
                        renderPrice: this.renderPrice,
                        renderSubBadges: this.renderSubBadges,
                        renderSubEmotes: this.renderSubEmotes
                    })) : void 0
                }, t = c.__decorate([Object(G.d)("TicketDescription")], t)
            }(u.Component);
        var Pe, De = Object(i.b)(function(e) {
                return {
                    sessionUser: Object(s.c)(e)
                }
            })(Te),
            Fe = n("Heyg"),
            Ie = function(e) {
                var t;
                return t = e.canGift ? u.createElement(y.O, null, Object(d.d)("You are buying a single month {price} Gift Subscription for {recipientName}.", {
                    price: e.price,
                    recipientName: u.createElement(y.O, {
                        type: y._43.Span,
                        bold: !0
                    }, e.recipientDisplayName || "")
                }, "PurchaseSubInfo")) : u.createElement(y.O, {
                    color: y.J.Error
                }, Object(d.d)("Sorry, a Gift Subscription to this channel is not available for {recipientName}", {
                    recipientName: u.createElement(y.O, {
                        bold: !0
                    }, e.recipientDisplayName || "")
                }, "PurchaseSubInfo")), u.createElement(y._29, {
                    background: y.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, t)
            },
            Re = n("CIox"),
            Ae = (n("pOYM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(y._6, {
                        className: "gift-sub-receipt__container",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, u.createElement(y._6, null, u.createElement(y.O, {
                        type: y._43.H2,
                        bold: !0
                    }, Object(d.d)("Purchase Successful", "GiftSubReceipt"))), u.createElement(y._6, {
                        padding: {
                            y: 3
                        }
                    }, u.createElement(y.O, null, Object(d.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                        price: Object(d.e)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        }),
                        recipientDisplayName: this.props.recipientDisplayName || "",
                        "x:strong": function(e) {
                            return u.createElement(y.O, {
                                key: "recipient-display-name",
                                type: y._43.Span,
                                bold: !0
                            }, e)
                        }
                    }, "GiftSubReceipt"))), u.createElement(y._29, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, u.createElement(y._6, {
                        className: "gift-sub-receipt__label",
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, {
                        bold: !0
                    }, Object(d.d)("Gift Status", "GiftSubReceipt"))), u.createElement(y._6, {
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, null, Object(d.d)("Active", "GiftSubReceipt")))), u.createElement(y._29, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, u.createElement(y._6, {
                        className: "gift-sub-receipt__label",
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, {
                        bold: !0
                    }, Object(d.d)("Your Invoice Total", "GiftSubReceipt"))), u.createElement(y._6, {
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, null, Object(d.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), u.createElement(y._6, {
                        margin: {
                            y: 3
                        }
                    }, u.createElement(y.u, {
                        onClick: this.goBackToChannel
                    }, Object(d.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "GiftSubReceipt"))))
                }, t
            }(u.Component)),
            Ue = Object(Re.f)(Ae),
            Me = n("j6Ui"),
            je = function(e) {
                return u.createElement(y._29, {
                    background: y.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, u.createElement(y._6, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(y.O, null, Object(d.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                    newPrice: Object(d.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradePrimeWarning"))), u.createElement(y._6, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(y.O, null, Object(d.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30-days after you last used your free subscription.", "UpgradePrimeWarning"))), u.createElement(y.O, null, Object(d.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
            },
            Le = function(e) {
                return u.createElement(y._29, {
                    background: y.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, u.createElement(y._6, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(y.O, null, Object(d.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                    originalPrice: Object(d.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    }),
                    newPrice: Object(d.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradeTierWarning"))), u.createElement(y._6, {
                    margin: {
                        bottom: .5
                    }
                }, u.createElement(y.O, null, Object(d.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                    originalPrice: Object(d.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    })
                }, "UpgradeTierWarning"))), u.createElement(y.O, null, Object(d.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
            },
            Be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOneMonthFree = function() {
                        var e = new Date;
                        null !== t.props.endsAt && (e = Object(Me.c)(t.props.endsAt));
                        var n = new Date(e);
                        return n.setMonth(e.getMonth() + 1), u.createElement(y._29, {
                            background: y.m.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, u.createElement(y.O, null, Object(d.d)("Your next month is on us. You will be charged when your free month ends on <x:strong>{date}</x:strong>.", {
                            date: Object(d.c)(n, "short"),
                            "x:strong": function(e) {
                                return u.createElement(y.O, {
                                    type: y._43.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PersonalSubPurchaseInfo")))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(y._6, null, this.props.isOneMonthFreeEligible && this.renderOneMonthFree(), this.tierUpgrade && u.createElement(Le, {
                        originalPrice: this.originalPrice,
                        originalCurrency: "USD",
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.primeUpgrade && u.createElement(je, {
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.props.hasGift && this.props.endsAt && u.createElement(y._29, {
                        background: y.m.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, u.createElement(y.O, null, Object(d.d)("You will be charged when your Gift Subscription ends on <x:strong>{date}</x:strong>.", {
                        date: Object(d.c)(Object(Me.c)(this.props.endsAt), "short"),
                        "x:strong": function(e) {
                            return u.createElement(y.O, {
                                type: y._43.Span,
                                bold: !0
                            }, e)
                        }
                    }, "PersonalSubPurchaseInfo"))))
                }, Object.defineProperty(t.prototype, "tierUpgrade", {
                    get: function() {
                        return !(!this.props.purchase || this.props.purchase.details && (!this.props.purchase.details || "inactive" !== this.props.purchase.details.state) || !this.props.purchase.compatiblePurchases) && !!this.props.purchase.compatiblePurchases.find(function(e) {
                            return "prime" !== e.paymentProvider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "primeUpgrade", {
                    get: function() {
                        return !(!this.props.purchase || this.props.purchase.details && (!this.props.purchase.details || "inactive" !== this.props.purchase.details.state) || !this.props.purchase.compatiblePurchases) && !!this.props.purchase.compatiblePurchases.find(function(e) {
                            return "prime" === e.paymentProvider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "originalPrice", {
                    get: function() {
                        return this.props.purchase.compatiblePurchases ? this.props.purchase.compatiblePurchases[0].price : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "newPrice", {
                    get: function() {
                        return this.props.price && this.props.price.includes("$") ? 100 * +this.props.price.replace("$", "") : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(u.Component),
            He = (n("McJK"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.giftSubEndsAt ? Object(d.d)("Your paid subscription will begin on <x:strong>{endsAt}</x:strong> after your Gift Subscription ends", {
                        "x:strong": function(e) {
                            return u.createElement(y.O, {
                                type: y._43.Span,
                                bold: !0
                            }, e)
                        },
                        endsAt: Object(d.c)(new Date(this.props.giftSubEndsAt), "long")
                    }, "PersonalSubReceipt") : Object(d.d)("Active", "PersonalSubReceipt"), u.createElement(y._6, {
                        className: "personal-sub-receipt",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, u.createElement(y._29, {
                        borderBottom: !0,
                        padding: {
                            bottom: 3
                        }
                    }, u.createElement(y.O, {
                        type: y._43.H2,
                        bold: !0
                    }, Object(d.d)("Your Subscription", "PersonalSubReceipt"))), u.createElement(y._29, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, u.createElement(y._6, {
                        className: "personal-sub-receipt__label",
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, {
                        bold: !0
                    }, Object(d.d)("Subscription for", "PersonalSubReceipt"))), u.createElement(y._6, {
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, null, this.props.purchaserDisplayName))), u.createElement(y._29, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, u.createElement(y._6, {
                        className: "personal-sub-receipt__label",
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, {
                        bold: !0
                    }, Object(d.d)("Status", "PersonalSubReceipt"))), u.createElement(y._6, {
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, null, e))), u.createElement(y._29, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, u.createElement(y._6, {
                        className: "personal-sub-receipt__label",
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, {
                        bold: !0
                    }, Object(d.d)("Invoice Total", "PersonalSubReceipt"))), u.createElement(y._6, {
                        display: y.P.InlineBlock
                    }, u.createElement(y.O, null, Object(d.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), u.createElement(y._6, {
                        margin: {
                            y: 3
                        }
                    }, u.createElement(y.u, {
                        onClick: this.goBackToChannel
                    }, Object(d.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "PersonalSubReceipt"))))
                }, t
            }(u.Component)),
            We = Object(Re.f)(He);
        n("gKy9");
        ! function(e) {
            e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
        }(Pe || (Pe = {}));
        var Ge = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    giftSubPurchased: !1
                }, t.trackPaymentFormInteraction = function(e) {
                    var n, i, r = {
                        channelLogin: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.login,
                        channelId: t.props.data.subscriptionProduct.owner && t.props.data.subscriptionProduct.owner.id,
                        paymentType: t.props.isGift ? N.Gifting : N.Personal,
                        productId: t.props.data.subscriptionProduct.id,
                        ticketPrice: t.props.data.subscriptionProduct.price,
                        paymentFlow: e.paymentFlow,
                        action: e.action,
                        actionDetail: e.actionDetail || ""
                    };
                    i = {
                        channel: (n = r).channelLogin,
                        channel_id: n.channelId,
                        payment_type: n.paymentType,
                        payment_flow: n.paymentFlow,
                        action: n.action,
                        action_detail: n.actionDetail,
                        product_id: n.productId,
                        ticket_price: n.ticketPrice.replace(/[\$\.]/g, "")
                    }, d.n.track(h.SpadeEventType.PaymentFormInteraction, i)
                }, t.completePurchase = function(e) {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var t, n;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e.recipient_id = this.props.recipientID, e.is_gift = this.props.isGift, t = "/kraken/checkout/users/" + this.props.data.currentUser.id + "/products/" + this.props.productShortName + "/purchase/complete", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, v.a.post(t, {
                                        body: e
                                    }, {
                                        version: 5
                                    })];
                                case 2:
                                    return (n = i.sent()).error ? (this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: E.CompletePurchaseClick,
                                        actionDetail: S.Failed
                                    }), [2]) : (this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: E.CompletePurchaseClick,
                                        actionDetail: S.Success
                                    }), this.props.isGift ? this.setState({
                                        giftSubPurchased: !0,
                                        giftPurchaseInfo: n.body
                                    }) : this.props.data.refetch(), [3, 4]);
                                case 3:
                                    return i.sent(), this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: E.CompletePurchaseClick,
                                        actionDetail: S.Failed
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.renderPurchaseInfo = function() {
                    if (!t.purchased) {
                        if (t.props.isGift) return u.createElement(Ie, {
                            canGift: t.props.data.subscriptionProduct.self.checkoutConfigs.canGift,
                            recipientDisplayName: t.props.recipientDisplayName,
                            price: t.props.data.subscriptionProduct.price
                        });
                        var e = t.props.data.subscriptionProduct.self.benefit;
                        return u.createElement(Be, {
                            price: t.props.data.subscriptionProduct.price,
                            hasGift: e && e.gift.isGift,
                            purchase: t.props.data.subscriptionProduct.self.purchase,
                            isOneMonthFreeEligible: t.props.data.subscriptionProduct.self.checkoutConfigs.isOneMonthFreeEligible,
                            endsAt: e && e.endsAt
                        })
                    }
                }, t.renderReceipt = function() {
                    var e = t.props.data.subscriptionProduct.self.benefit,
                        n = t.props.data.subscriptionProduct.self.purchase.details;
                    return t.props.data.subscriptionProduct.owner && t.state.giftSubPurchased && t.state.giftPurchaseInfo ? u.createElement(Ue, {
                        recipientDisplayName: t.props.recipientDisplayName,
                        productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                        productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                        invoicePrice: t.state.giftPurchaseInfo.invoice_total.price,
                        invoiceCurrency: "USD"
                    }) : t.props.data.subscriptionProduct.owner && n && t.purchased ? u.createElement(We, {
                        purchaserDisplayName: t.props.data.currentUser.displayName,
                        productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                        productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                        giftSubEndsAt: e && (e.gift.isGift || null) && e.endsAt,
                        invoicePrice: n.price,
                        invoiceCurrency: "USD"
                    }) : void 0
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                if (this.props.data.loading || this.props.data.error) return u.createElement(y._6, null);
                var e = this.props.data.subscriptionProduct.owner,
                    t = this.props.data.subscriptionProduct,
                    n = this.props.data.subscriptionProduct.self.checkoutConfigs.paymentProviderConfigs,
                    i = Object(d.d)("Buying a Channel Subscription is fast, easy and secure. Don't hesitate to contact <x:link>Purchase Support</x:link> if you need help.", {
                        "x:link": function(e) {
                            return u.createElement("span", {
                                key: "helplink"
                            }, u.createElement(y.M, {
                                targetBlank: !0,
                                to: "https://help.twitch.tv/"
                            }, e))
                        }
                    }, "SubsCheckoutPage"),
                    r = Object(d.d)('You may cancel at any time by selecting "Do Not Renew" on your <x:link>subscriptions page</x:link>.', {
                        "x:link": function(e) {
                            return u.createElement("span", {
                                key: "sublink"
                            }, u.createElement(y.M, {
                                targetBlank: !0,
                                to: "https://www.twitch.tv/subscriptions"
                            }, e))
                        }
                    }, "SubsCheckoutPage");
                return u.createElement(y._6, {
                    className: "checkout-payments",
                    fullWidth: !0,
                    padding: 3,
                    overflow: y._9.Auto
                }, u.createElement(y._6, {
                    display: y.P.Flex,
                    justifyContent: y._5.Center,
                    flexWrap: y.S.Wrap
                }, u.createElement(y._6, {
                    display: y.P.Hide,
                    alignItems: y.c.Start,
                    margin: {
                        bottom: 4
                    },
                    breakpointExtraSmall: {
                        display: y.P.Hide
                    },
                    breakpointMedium: {
                        display: y.P.Flex
                    }
                }, u.createElement(De, {
                    owner: e,
                    product: t
                })), u.createElement(y._6, {
                    className: "checkout-payments__content",
                    breakpointMedium: {
                        margin: {
                            x: 4
                        }
                    }
                }, !this.purchased && u.createElement(y._6, {
                    margin: {
                        bottom: 1
                    }
                }, u.createElement(O, {
                    channel: this.props.data.subscriptionProduct.owner && this.props.data.subscriptionProduct.owner.id,
                    isGift: this.props.isGift
                })), u.createElement(y._6, {
                    display: y.P.Flex,
                    breakpointMedium: {
                        display: y.P.Hide
                    }
                }, u.createElement(De, {
                    owner: e,
                    product: t,
                    mobile: !0
                })), this.purchased && this.renderReceipt(), !this.purchased && u.createElement(u.Fragment, null, this.renderPurchaseInfo(), this.showPaymenOptions && u.createElement(se, {
                    configs: n,
                    countryCode: this.props.data.requestInfo.countryCode,
                    onSuccess: this.completePurchase,
                    productShortName: this.props.productShortName,
                    trackPaymentFormInteraction: this.trackPaymentFormInteraction
                }), "689376" !== t.id && u.createElement(y._6, {
                    margin: {
                        top: 5
                    }
                }, u.createElement(y.O, null, i), u.createElement(y.O, null, r))))))
            }, Object.defineProperty(t.prototype, "personalSubPurchased", {
                get: function() {
                    return !!this.props.data.subscriptionProduct.self.purchase.details
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "purchased", {
                get: function() {
                    return !this.props.isGift && this.personalSubPurchased || this.state.giftSubPurchased
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "showPaymenOptions", {
                get: function() {
                    return !this.purchased && (!this.props.isGift || this.props.data.subscriptionProduct.self.checkoutConfigs.canGift)
                },
                enumerable: !0,
                configurable: !0
            }), t = c.__decorate([Object(G.d)("CheckoutPayments"), Object(m.a)(Fe, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            productName: e.productShortName,
                            isGift: e.isGift,
                            recipientID: e.recipientID,
                            includePromotion: "turbo" !== e.productShortName
                        }
                    }
                }
            })], t)
        }(u.Component);
        var Ve = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(r.b)({
                    promptLogin: function() {
                        return Object(o.f)(a.a.DashboardPage)
                    }
                }, e)
            })(Ge),
            ze = n("tnNl"),
            qe = n("TP6L"),
            Ye = n("EaWz"),
            Ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, d.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT")];
                                case 1:
                                    return "no" !== e.sent() || ["testingteamsub", "owlallaccess2018"].includes(this.props.match.params.productShortName) || window.location.assign("/products/" + this.props.match.params.productShortName + this.props.location.search), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), u.createElement(p.a, null);
                    var e = this.props.match.params.productShortName,
                        t = this.props.data && this.props.data.recipient || null;
                    return u.createElement(y._6, {
                        display: y.P.Flex,
                        flexDirection: y.R.Column,
                        flexWrap: y.S.NoWrap,
                        position: y._13.Relative,
                        fullWidth: !0,
                        fullHeight: !0
                    }, u.createElement(qe.a, null), u.createElement(y._6, {
                        breakpointExtraSmall: {
                            display: y.P.Inline
                        },
                        breakpointMedium: {
                            display: y.P.Hide
                        }
                    }, u.createElement(ze.a, null)), u.createElement(y._6, {
                        display: y.P.Flex,
                        flexWrap: y.S.NoWrap,
                        position: y._13.Relative,
                        fullHeight: !0
                    }, u.createElement(Ve, {
                        productShortName: e,
                        isGift: !(!t || !t.id),
                        recipientID: t && t.id,
                        recipientDisplayName: t && t.displayName
                    })))
                }, t = c.__decorate([Object(G.d)("SubsCheckoutPage", {
                    destination: g.a.SubsCheckoutPage
                }), Object(f.a)({
                    location: h.PageviewLocation.SubsCheckoutPage
                }), Object(m.a)(Ye, {
                    options: function(e) {
                        return {
                            fetchPolicy: "cache-first",
                            variables: {
                                recipientName: l.parse(e.location.search).recipient
                            }
                        }
                    },
                    skip: function(e) {
                        return !l.parse(e.location.search).recipient
                    }
                })], t)
            }(u.Component);
        var Qe = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                onAnonymousVisit: function() {
                    return Object(o.f)(a.a.SubsCheckoutPage)
                }
            }, e)
        })(Ke);
        n.d(t, "SubsCheckoutPage", function() {
            return Qe
        })
    },
    I7cV: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                r = i(e),
                a = r.getDay(),
                o = 6 + (a < n ? -7 : 0) - (a - n);
            return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
        }
    },
    I89S: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(i || (i = {}))
    },
    JNsx: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMinutes()
        }
    },
    JURy: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
    },
    Javx: function(e, t, n) {
        var i = n("b7g8");
        e.exports = function(e) {
            return i(e) ? 366 : 365
        }
    },
    Jtuq: function(e, t, n) {
        var i = n("lQzg"),
            r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return 4 * (n.getFullYear() - a.getFullYear()) + (i(n) - i(a))
        }
    },
    Jvcu: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setDate(n.getDate() + r), n
        }
    },
    K7ZZ: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = r(n);
            return a.setMilliseconds(a.getMilliseconds() - 1), a
        }
    },
    Kkxm: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "MinimalTopNav_MinimalUser"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 93
            }
        };
        n.loc.source = {
            body: "query MinimalTopNav_MinimalUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    L6HU: function(e, t) {},
    LLTj: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LU20: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setSeconds(59, 999), t
        }
    },
    M5Oo: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t, n) {
            var r = i(e),
                a = i(t),
                o = void 0 !== n ? n : 1,
                s = a.getTime();
            if (r.getTime() > s) throw new Error("The first date cannot be after the second date");
            var c = [],
                l = r;
            for (l.setHours(0, 0, 0, 0); l.getTime() <= s;) c.push(i(l)), l.setDate(l.getDate() + o);
            return c
        }
    },
    MAZT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var i = n("TToO"),
            r = n("6gPI"),
            a = (n.n(r), n("+UWA")),
            o = (n.n(a), n("Ejve")),
            s = n("5LoI"),
            c = n("PHcJ"),
            l = n("6uxC"),
            u = (n.n(l), {
                games: {
                    indexName: s.a.Games,
                    hitsPerPage: 2,
                    topNumericFilters: ["popularity>1"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                videos: {
                    indexName: s.a.Videos,
                    hitsPerPage: 6,
                    get topNumericFilters() {
                        return ["created_at>" + (e = new Date, e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3))];
                        var e
                    },
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                users: {
                    indexName: s.a.Users,
                    hitsPerPage: 2,
                    topNumericFilters: ["followers>50"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                channels: {
                    indexName: s.a.Channels,
                    hitsPerPage: 6,
                    get topNumericFilters() {
                        return ["channel_count>10", "updated_on>" + p()]
                    },
                    get singleTypeNumericFilters() {
                        return ["updated_on>" + p()]
                    },
                    optionalFacetFilters: ""
                },
                communities: {
                    indexName: s.a.Communities,
                    hitsPerPage: 2,
                    topNumericFilters: ["channels>9"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                }
            }),
            d = function() {
                function e(e) {
                    this.client = r(e.appId, e.apiKey), this.stats = a.Stats.getInstance(e.config.buildType === o.a.Production ? "production" : "development", "twilight.features.algolia"), this.logger = e.logger.withCategory("search-client"), this.getCountryCode(e.apolloClient)
                }
                return e.prototype.queryTopResults = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r, a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = [], (n = []).push(this.getTopResult(u.games, e)), n.push(this.getTopResult(u.videos, e)), n.push(this.getTopResult(u.users, e)), n.push(this.getTopResult(u.channels, e)), n.push(this.getTopResult(u.communities, e)), r.push(this.getTotalResult(u.games, e)), r.push(this.getTotalResult(u.videos, e)), r.push(this.getTotalResult(u.users, e)), r.push(this.getTotalResult(u.channels, e)), r.push(this.getTotalResult(u.communities, e)), [4, this.query(n.concat(r))];
                                case 1:
                                    return (a = i.sent()) ? (o = a.results, [2, {
                                        id: t,
                                        games: {
                                            totalHits: o[5].nbHits,
                                            hits: o[0].hits
                                        },
                                        videos: {
                                            totalHits: o[6].nbHits,
                                            hits: o[1].hits
                                        },
                                        users: {
                                            totalHits: o[7].nbHits,
                                            hits: o[2].hits
                                        },
                                        channels: {
                                            totalHits: o[8].nbHits,
                                            hits: o[3].hits
                                        },
                                        communities: {
                                            totalHits: o[9].nbHits,
                                            hits: o[4].hits
                                        }
                                    }]) : [2, function(e) {
                                        return {
                                            id: e,
                                            games: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            videos: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            users: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            channels: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            communities: {
                                                totalHits: 0,
                                                hits: []
                                            }
                                        }
                                    }(t)]
                            }
                        })
                    })
                }, e.prototype.queryForType = function(e, t, n, r) {
                    var a = void 0 === r ? {} : r,
                        o = a.page,
                        c = void 0 === o ? 0 : o,
                        l = a.hitsPerPage,
                        d = void 0 === l ? 50 : l,
                        p = a.facetFilters,
                        m = void 0 === p ? "" : p,
                        f = a.numericFilters;
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, l, p, g, h, v = this;
                        return i.__generator(this, function(y) {
                            switch (y.label) {
                                case 0:
                                    switch (r = {
                                        id: n,
                                        currentPage: c
                                    }, a = function(e) {
                                        return i.__awaiter(v, void 0, void 0, function() {
                                            var n, a;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return n = {
                                                            indexName: e.indexName,
                                                            query: t,
                                                            params: {
                                                                page: c,
                                                                hitsPerPage: d,
                                                                numericFilters: f || e.singleTypeNumericFilters,
                                                                facets: "*",
                                                                facetFilters: m
                                                            }
                                                        }, [4, this.query([n])];
                                                    case 1:
                                                        return (a = i.sent()) ? (r.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < d, [2, {
                                                            totalHits: a.results[0].nbHits,
                                                            hits: a.results[0].hits
                                                        }]) : (r.exhaustedHits = !0, [2, {
                                                            totalHits: 0,
                                                            hits: []
                                                        }])
                                                }
                                            })
                                        })
                                    }, e) {
                                        case s.a.Games:
                                            return [3, 1];
                                        case s.a.Users:
                                            return [3, 3];
                                        case s.a.Channels:
                                            return [3, 5];
                                        case s.a.Videos:
                                            return [3, 7];
                                        case s.a.Communities:
                                            return [3, 9]
                                    }
                                    return [3, 11];
                                case 1:
                                    return o = r, [4, a(u.games)];
                                case 2:
                                    return o.games = y.sent(), [3, 12];
                                case 3:
                                    return l = r, [4, a(u.users)];
                                case 4:
                                    return l.users = y.sent(), [3, 12];
                                case 5:
                                    return p = r, [4, a(u.channels)];
                                case 6:
                                    return p.channels = y.sent(), [3, 12];
                                case 7:
                                    return g = r, [4, a(u.videos)];
                                case 8:
                                    return g.videos = y.sent(), [3, 12];
                                case 9:
                                    return h = r, [4, a(u.communities)];
                                case 10:
                                    return h.communities = y.sent(), [3, 12];
                                case 11:
                                    return [2, null];
                                case 12:
                                    return [2, r]
                            }
                        })
                    })
                }, e.prototype.queryVideos = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, l;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    switch (n.sort) {
                                        case c.b.Newest:
                                            r = s.a.VideosNewest;
                                            break;
                                        case c.b.Popular:
                                        default:
                                            r = s.a.Videos
                                    }
                                    switch (a = [], n.length) {
                                        case c.a.Short:
                                            a.push("length<=900");
                                            break;
                                        case c.a.Long:
                                            a.push("length>900")
                                    }
                                    switch (o = {
                                        indexName: r,
                                        query: e,
                                        params: {
                                            page: 0,
                                            hitsPerPage: 50,
                                            numericFilters: a,
                                            facets: "*",
                                            facetFilters: ""
                                        }
                                    }, n.type) {
                                        case c.c.PastBroadcasts:
                                            o.params.facetFilters = "broadcast_type:archive";
                                            break;
                                        case c.c.Uploads:
                                            o.params.facetFilters = "broadcast_type:upload";
                                            break;
                                        case c.c.Highlights:
                                            o.params.facetFilters = "broadcast_type:highlight"
                                    }
                                    return [4, this.query([o])];
                                case 1:
                                    return (l = i.sent()) ? [2, {
                                        id: t,
                                        totalHits: l.results[0].nbHits,
                                        hits: l.results[0].hits
                                    }] : [2, {
                                        id: t,
                                        totalHits: 0,
                                        hits: []
                                    }]
                            }
                        })
                    })
                }, e.prototype.getCountryCode = function(e) {
                    var t = this;
                    try {
                        e.query({
                            query: l
                        }).then(function(e) {
                            t.countryCode = e.data.requestInfo.countryCode
                        })
                    } catch (e) {
                        this.logger.error(e, "Failed to get country code")
                    }
                }, e.prototype.getTopResult = function(e, t) {
                    return {
                        indexName: e.indexName,
                        query: t,
                        params: {
                            page: 0,
                            hitsPerPage: e.hitsPerPage,
                            numericFilters: e.topNumericFilters
                        }
                    }
                }, e.prototype.getTotalResult = function(e, t) {
                    return {
                        indexName: e.indexName,
                        query: t,
                        params: {
                            hitsPerPage: 0,
                            numericFilters: e.singleTypeNumericFilters
                        }
                    }
                }, e.prototype.query = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    n = Date.now(), a = !1, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.client.search(e)];
                                case 2:
                                    return t = i.sent(), [3, 4];
                                case 3:
                                    return i.sent(), a = !0, t = null, [3, 4];
                                case 4:
                                    r = Date.now();
                                    try {
                                        this.countryCode && (a ? (this.stats.logCounter("error." + this.countryCode, 1), this.stats.logTimer("error_duration." + this.countryCode, r - n)) : (this.stats.logCounter("success." + this.countryCode, 1), this.stats.logTimer("success_duration." + this.countryCode, r - n)))
                                    } catch (t) {
                                        this.logger.error(t, "Failed to send search stats", e)
                                    }
                                    return [2, t]
                            }
                        })
                    })
                }, e
            }();

        function p() {
            return Math.floor(((new Date).getTime() - 6e5) / 1e3)
        }
    },
    MIQa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, n) {
        var i = n("oNnY");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    MQyO: function(e, t, n) {
        e.exports = n.p + "assets/credit_cards_2x-051201f07d7c83cdf8077df9a45c5034.png"
    },
    Mbb9: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getDay()
        }
    },
    McJK: function(e, t) {},
    Mdww: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear(),
                r = t.getMonth(),
                a = new Date(0);
            return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
        }
    },
    Mn81: function(e, t) {},
    MnLQ: function(e, t) {},
    Moxe: function(e, t, n) {
        var i = n("M5Oo");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = i(t).getTime();
            return n < r ? -1 : n > r ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var i = n("6Zhv"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * r)
        }
    },
    NY9D: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            return "/directory/game/" + encodeURIComponent(e)
        }, t.a = function(e) {
            return "/communities/" + encodeURIComponent(e)
        }, t.b = function(e) {
            return "/events/" + encodeURIComponent(e)
        }, t.d = function(e) {
            return "/" + encodeURIComponent(e) + "/manager"
        }
    },
    NikC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e, t, n) {
            void 0 === n && (n = !0);
            return function(i) {
                i(Object(a.s)(e)), n && Object(r.d)(e), t && Object(o.b)(e, t)
            }
        };
        var i, r = n("VAT8"),
            a = n("7enT"),
            o = n("xrVp");
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(i || (i = {}))
    },
    PGoF: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EsportsTicketDescription_GetBadges"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelID"
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
                                    value: "channelID"
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
                                    value: "tournament"
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
                                            value: "rewards"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "insider"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "heroSkins"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reward"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "inGameContent"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reward"
                                                                },
                                                                directives: []
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
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reward"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 272
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/esports-campaign-tabs/models/reward.gql"\nquery EsportsTicketDescription_GetBadges($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\ninsider {\nheroSkins {\n...reward\n}\ninGameContent {\n...reward\n}\nbadges {\n...reward\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("lKyS").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    PHcJ: function(e, t, n) {
        "use strict";
        var i, r, a;
        n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }),
            function(e) {
                e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
            }(i || (i = {})),
            function(e) {
                e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
            }(r || (r = {})),
            function(e) {
                e[e.Popular = 0] = "Popular", e[e.Newest = 1] = "Newest"
            }(a || (a = {}))
    },
    Ptqd: function(e, t) {
        e.exports = function() {
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: function(t, n, i) {
                    var r;
                    return i = i || {}, r = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), i.addSuffix ? i.comparison > 0 ? "in " + r : r + " ago" : r
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var i = n("u/4p"),
            r = 6e4,
            a = 6048e5;
        e.exports = function(e, t, n) {
            var o = i(e, n),
                s = i(t, n),
                c = o.getTime() - o.getTimezoneOffset() * r,
                l = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((c - l) / a)
        }
    },
    Q8Dy: function(e, t) {},
    QCL8: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            void 0 === n && (n = !1);
            var a = i.b.get(r, []),
                o = void 0 !== t && t.roles && t.roles.isStaff || !1;
            return a.includes(e) || a.includes(e + "-staff") && (o || n)
        };
        var i = n("6sO2"),
            r = "esport_insider_pass_whitelist"
    },
    "QU+n": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "badge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Badge"
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
                            value: "setID"
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
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image1x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "NORMAL"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image2x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "DOUBLE"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image4x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "QUADRUPLE"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clickAction"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clickURL"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 170
            }
        };
        n.loc.source = {
            body: "fragment badge on Badge {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Qbo9: function(e, t, n) {
        var i = n("Moxe");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    Qk3C: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("TToO"),
            o = n("FuaS"),
            s = n("U9pL");

        function c(e, t) {
            var n = this;
            return function() {
                return a.__awaiter(n, void 0, void 0, function() {
                    return a.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return t ? [4, Object(s.c)({
                                    userID: t,
                                    preferredLanguageTag: Object(s.b)(e)
                                })] : [3, 2];
                            case 1:
                                n.sent(), n.label = 2;
                            case 2:
                                return Object(o.c)(e), window.location.reload(!0), [2]
                        }
                    })
                })
            }
        }
        var l = n("GiK3"),
            u = n("6sO2"),
            d = n("Odds"),
            p = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return l.createElement(d._4, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, l.createElement(d._6, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-a-target": "language-" + e.languageCode
                        }, e.name))
                    }, t.handleLanguageClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-language");
                        n && t.props.changeLanguage(n, t.props.currentUserID)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(u.a.locales.length / 2);
                    return l.createElement(d._6, {
                        className: "language-selector",
                        display: d.P.Flex,
                        padding: {
                            y: 1
                        }
                    }, l.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, u.a.locales.slice(0, e).map(this.renderLink)), l.createElement("div", {
                        className: "language-selector__list"
                    }, u.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(l.Component));
        var m = Object(i.b)(function(e) {
            return {
                currentUserID: e.session.user && e.session.user.id || null
            }
        }, function(e) {
            return Object(r.b)({
                changeLanguage: c
            }, e)
        })(p);
        n.d(t, "a", function() {
            return m
        })
    },
    Qxz6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() === r.getFullYear()
        }
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "g", function() {
            return u
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "h", function() {
            return p
        }), n.d(t, "j", function() {
            return m
        }), n.d(t, "i", function() {
            return g
        }), n.d(t, "e", function() {
            return h
        });
        var i = n("OAwv"),
            r = (n.n(i), n("6sO2")),
            a = n("S1vB"),
            o = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            s = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED"
            },
            c = function(e, t) {
                return e + "-" + t
            },
            l = function() {
                return f("claimedOffers")
            },
            u = function(e) {
                r.l.set("claimedOffers", e)
            },
            d = function() {
                return f("seenOffers")
            },
            p = function(e) {
                r.l.set("seenOffers", e)
            },
            m = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            f = function(e) {
                return r.l.get(e, [])
            },
            g = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(a.a)(t))
            },
            h = function() {
                var e = location.search,
                    t = i.parse(e);
                return t && t.dateOverride || void 0
            }
    },
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            r = (n.n(i), n("mbxv")),
            a = function(e) {
                var t, n = e.badgesToRender,
                    a = e.badgeSets,
                    o = [];
                t = n, Array.isArray(t) ? o = n.map(function(e) {
                    var t = a.getBadge(e.setID, e.version);
                    return null === t ? null : i.createElement(r.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (o = Object.keys(n).map(function(e) {
                    var t = n[e],
                        o = a.getBadge(e, t);
                    return null === o ? null : i.createElement(r.a, {
                        key: o.setID + "/" + o.version,
                        badge: o
                    })
                }));
                var s = o.filter(function(e) {
                    return null !== e
                });
                return i.createElement("span", null, s)
            }
    },
    RweG: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2");

        function o(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var i = n.call(this, t) || this;
                        i.unsubscribers = {};
                        var r = {};
                        return e.map(function(e) {
                            e.skip && e.skip(t) || (r[i.getTopic(e.topic, t)] = {
                                isSubscribing: !0
                            })
                        }), i.state = {
                            status: r,
                            messages: {}
                        }, i
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var t = this;
                        e.forEach(function(e) {
                            if (!e.skip || !e.skip(t.props)) {
                                var n = t.getTopic(e.topic, t.props);
                                t.unsubscribers[n] = t.subscribe(e, n)
                            }
                        })
                    }, o.prototype.componentWillReceiveProps = function(t) {
                        var n = this,
                            r = {},
                            a = {};
                        e.forEach(function(e) {
                            if (!e.skip || !e.skip(t)) {
                                var i = n.getTopic(e.topic, t);
                                r[i] || (r[i] = {
                                    isSubscribing: !0
                                }), n.unsubscribers[i] ? a[i] = n.unsubscribers[i] : a[i] = n.subscribe(e, i)
                            }
                        }), Object.keys(this.unsubscribers).forEach(function(e) {
                            a[e] || n.unsubscribers[e]()
                        }), this.unsubscribers = a, this.setState(function(e) {
                            return {
                                status: i.__assign({}, e.status, r)
                            }
                        })
                    }, o.prototype.componentWillUnmount = function() {
                        var e = this;
                        Object.keys(this.unsubscribers).map(function(t) {
                            return e.unsubscribers[t]()
                        })
                    }, o.prototype.render = function() {
                        var e = {
                            pubsub: {
                                messages: this.state.messages,
                                status: this.state.status
                            }
                        };
                        return r.createElement(t, i.__assign({}, this.props, e))
                    }, o.prototype.getTopic = function(e, t) {
                        return "string" == typeof e ? e : e(t)
                    }, o.prototype.subscribe = function(e, t) {
                        var n = this;
                        return a.k.subscribe({
                            topic: t,
                            success: function() {
                                n.setState(function(e) {
                                    return {
                                        status: i.__assign({}, e.status, (n = {}, n[t] = {
                                            isSubscribing: !1
                                        }, n))
                                    };
                                    var n
                                })
                            },
                            failure: function(e) {
                                n.setState(function(n) {
                                    return {
                                        status: i.__assign({}, n.status, (r = {}, r[t] = {
                                            error: e,
                                            isSubscribing: !1
                                        }, r))
                                    };
                                    var r
                                })
                            },
                            onMessage: function(t) {
                                var r = e.mapMessageTypesToProps[t.type || ""] || e.mapMessageTypesToProps["*"];
                                r && (e.skipMessage && e.skipMessage(t, n.props) || n.setState(function(e) {
                                    return {
                                        messages: i.__assign({}, e.messages, (n = {}, n[r] = t, n))
                                    };
                                    var n
                                }))
                            }
                        })
                    }, o
                }(r.Component)
            }
        }
        n.d(t, "a", function() {
            return o
        })
    },
    S1vB: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.b.get("prime_blocked_regions", []);
            if (!e) return !1;
            return !t.includes(e.toUpperCase())
        };
        var i = n("6sO2")
    },
    SHOI: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Jvcu");
        e.exports = function(e, t, n) {
            var a = n && Number(n.weekStartsOn) || 0,
                o = i(e),
                s = Number(t),
                c = o.getDay();
            return r(o, ((s % 7 + 7) % 7 < a ? 7 : 0) + s - c)
        }
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(i);
            var r = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, n) {
        var i = n("I7cV");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    SZoP: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = o;
        var i = n("GiK3"),
            r = (n.n(i), /^[\x00-\x7F]*$/),
            a = function(e, t, n) {
                return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : i.createElement("span", null, t, " ", i.createElement("span", {
                    className: "intl-login"
                }, "(" + e + ")")) : t || (e || "")
            };

        function o(e) {
            return r.test(e)
        }
    },
    SgWI: function(e, t, n) {
        e.exports = n.p + "assets/paypal_1x-2a610ceedc14dc7f967360aeb1f053ff.png"
    },
    "T/Ln": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    TP6L: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("F8kA"),
            a = n("2KeS"),
            o = n("+xm8"),
            s = n("f2i/"),
            c = n("Aj/L"),
            l = n("TToO"),
            u = n("GiK3"),
            d = n("6sO2"),
            p = n("Qk3C"),
            m = n("+Znq"),
            f = n("7vx8"),
            g = n("vH/s"),
            h = n("0Mfl"),
            v = n("CSlQ"),
            y = n("DBTH"),
            b = n("U3i2");
        var _ = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    languageCode: e.session.languageCode,
                    currentUser: Object(c.c)(e)
                }
            })(b.b),
            k = n("CIox"),
            S = n("6BvN"),
            N = n("HM6l"),
            w = n("ZVME"),
            E = n("MAZT"),
            O = n("uTyw"),
            C = n("5LoI"),
            x = "search_tracking_enabled";

        function T() {
            var e = Math.round(Date.now() / 1e3);
            return {
                client_time: e,
                distinct_id: d.o.session.deviceID,
                time: e
            }
        }

        function P() {
            return d.o.dynamicSettings.get(x, !1)
        }

        function D(e, t) {
            P() && d.o.tracking.track(g.SpadeEventType.SearchQuery, l.__assign({}, T(), {
                query: e,
                count: t
            }))
        }
        var F = n("rCmJ"),
            I = n("HW6M"),
            R = n("zCIC"),
            A = n("czpb"),
            U = n("SZoP"),
            M = n("mi6k"),
            j = n("7Nlu"),
            L = n("5kgt"),
            B = n("Odds"),
            H = (n("afun"), n("y+bN")),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "search-live-result-card": !0,
                        "search-live-result-card--hover": this.props.borderHover
                    };
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), u.createElement(B._6, {
                        className: I(t),
                        key: this.props.id,
                        fullWidth: !0
                    }, u.createElement(B._4, l.__assign({
                        linkTo: this.props.linkTo,
                        hover: this.props.borderHover,
                        tabIndex: -1,
                        "data-a-target": "search-live-result-card-link",
                        onClick: this.props.onClick
                    }, Object(L.a)(this.props)), u.createElement(B.B, null, u.createElement(B._6, {
                        className: "search-live-result-card__wrapper",
                        position: B._13.Relative,
                        overflow: B._9.Hidden,
                        fullWidth: !0
                    }, u.createElement(B.D, {
                        src: e || d.a.defaultStreamPreviewURL,
                        alt: this.props.imageAlt,
                        aspect: B.k.Aspect16x9
                    }), u.createElement(B._29, {
                        className: "search-live-result-card__overlay",
                        position: B._13.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        display: B.P.Flex,
                        flexDirection: B.R.Column,
                        justifyContent: B._5.End,
                        overflow: B._9.Hidden,
                        color: B.J.Overlay
                    }, u.createElement(B.C, null, u.createElement(B._6, {
                        className: "search-live-result-card__body",
                        padding: .5
                    }, u.createElement(B.O, {
                        type: B._43.H5,
                        ellipsis: !0,
                        className: "search-live-result-card__title"
                    }, this.props.channelName), u.createElement(B._6, {
                        className: "search-live-result-card__viewer-count-container",
                        display: B.P.Flex,
                        alignItems: B.c.Center
                    }, u.createElement(B._6, {
                        margin: {
                            right: .5
                        },
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        flexShrink: 0
                    }, u.createElement(B._19, {
                        asset: B._20.GlyphLive,
                        type: B._21.Live,
                        width: 14,
                        height: 14
                    })), u.createElement(B.O, {
                        className: "search-live-result-card__viewer-count",
                        ellipsis: !0
                    }, Object(d.e)(this.props.viewerCount))), u.createElement(B.O, {
                        className: "search-live-result-card__info",
                        ellipsis: !0
                    }, this.props.title))))))))
                }, t = l.__decorate([Object(f.a)(H, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(u.Component),
            G = (n("H9qc"), function(e) {
                var t, n, i, r;
                return e.title && (e.hitsCount && e.hitsCount > 0 ? t = Object(d.d)("more", "SearchResultSection") : e.totalHitsCount && e.totalHitsCount > 0 && (t = Object(d.d)("Show", "SearchResultSection")), void 0 !== e.totalHitsCount && (i = u.createElement(B._10, {
                    type: B._11.Brand,
                    label: e.totalHitsCount < 100 ? Object(d.e)(e.totalHitsCount) : "99+"
                })), n = u.createElement(B._6, {
                    className: "search-result-section__titlesep"
                }, u.createElement(B._4, l.__assign({
                    onClick: e.onHeaderClick,
                    tabIndex: -1,
                    alpha: !0
                }, Object(B._55)(e), {
                    "data-ts_selectable": !0
                }), u.createElement(B._6, {
                    display: B.P.Flex,
                    padding: {
                        left: 1,
                        right: 2,
                        y: .5
                    }
                }, u.createElement(B._6, {
                    display: B.P.Inline,
                    margin: {
                        right: 1
                    }
                }, u.createElement(B.O, {
                    type: B._43.Span,
                    color: B.J.Link,
                    fontSize: B.T.Size7,
                    transform: B._42.Uppercase
                }, e.title)), u.createElement("div", null, i), u.createElement(B._6, {
                    textAlign: B._39.Right,
                    flexGrow: 1
                }, u.createElement(B.O, {
                    fontSize: B.T.Size7,
                    transform: B._42.Uppercase
                }, t)))))), (Array.isArray(e.children) && e.children.length > 0 || e.children && !Array.isArray(e.children)) && (r = u.createElement(B._6, {
                    className: "search-result-section__listing-wrapper",
                    margin: {
                        top: .5,
                        bottom: .5
                    }
                }, e.children)), u.createElement("div", {
                    className: "search-result-section__block"
                }, n, r)
            }),
            V = (n("oI0V"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(B._29, {
                        className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                        background: B.m.Alt2,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        position: B._13.Relative,
                        zIndex: B._54.Above,
                        borderBottom: !0,
                        "data-a-target": "nav-search-title-bar"
                    }, u.createElement(B._6, {
                        className: "search-title-bar__back-container",
                        display: B.P.Flex,
                        alignContent: B.b.Stretch
                    }, u.createElement(B.v, {
                        icon: B._20.AngleLeft,
                        type: B.x.Secondary,
                        size: B.w.Large,
                        onClick: this.props.onBackClick,
                        ariaLabel: Object(d.d)("Back button", "SearchTitleBar"),
                        "data-ts_selectable": this.props.showBack,
                        "data-a-target": "nav-search-back"
                    })), u.createElement(B._6, {
                        className: "search-title-bar__title",
                        position: B._13.Relative,
                        padding: {
                            left: 1
                        }
                    }, u.createElement(B.O, {
                        fontSize: B.T.Size5
                    }, this.props.title)))
                }, t
            }(u.Component)),
            z = n("PHcJ"),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOptionChange = function(e) {
                        var n = e.currentTarget.elements;
                        t.props.onOptionsChange({
                            type: +n.type.value,
                            length: +n.video_length.value,
                            sort: +n.sort.value
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(B._29, {
                        className: "search__video-filters",
                        background: B.m.Alt,
                        padding: {
                            top: .5,
                            x: 1
                        }
                    }, u.createElement(B._0, {
                        display: B.P.Flex,
                        justifyContent: B._5.Between,
                        flexWrap: B.S.Wrap
                    }, u.createElement("form", {
                        onInput: this.handleOptionChange
                    }, u.createElement(B._6, {
                        display: B.P.Flex
                    }, u.createElement(B._6, {
                        display: B.P.InlineFlex,
                        margin: {
                            right: 1,
                            bottom: .5
                        },
                        flexShrink: 0
                    }, u.createElement(B._25, {
                        name: "type"
                    }, u.createElement("option", {
                        value: z.c.AllVideos
                    }, Object(d.d)("All Videos", "search__video-filters")), u.createElement("option", {
                        value: z.c.PastBroadcasts
                    }, Object(d.d)("Past Broadcasts", "search__video-filters")), u.createElement("option", {
                        value: z.c.Uploads
                    }, Object(d.d)("Uploads", "search__video-filters")), u.createElement("option", {
                        value: z.c.Highlights
                    }, Object(d.d)("Highlights", "search__video-filters")))), u.createElement(B._6, {
                        display: B.P.InlineFlex,
                        margin: {
                            right: 1,
                            bottom: .5
                        }
                    }, u.createElement(B._25, {
                        name: "video_length"
                    }, u.createElement("option", {
                        value: z.a.AnyLength
                    }, Object(d.d)("Any Length", "search__video-filters")), u.createElement("option", {
                        value: z.a.Short
                    }, Object(d.d)("Short", "search__video-filters")), u.createElement("option", {
                        value: z.a.Long
                    }, Object(d.d)("Long", "search__video-filters"))))), u.createElement(B._6, {
                        margin: {
                            bottom: .5
                        },
                        display: B.P.InlineFlex,
                        flexShrink: 0
                    }, u.createElement(B._25, {
                        name: "sort"
                    }, u.createElement("option", {
                        value: z.b.Popular
                    }, Object(d.d)("Popular", "search__video-filters")), u.createElement("option", {
                        value: z.b.Newest
                    }, Object(d.d)("Newest", "search__video-filters")))))))
                }, t
            }(u.Component),
            Y = (n("FroJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBackClick = function() {
                        return t.headerSelect(null)
                    }, t.gameHeaderSelect = function() {
                        return t.headerSelect(C.a.Games)
                    }, t.liveHeaderSelect = function() {
                        return t.headerSelect(C.a.Channels)
                    }, t.userHeaderSelect = function() {
                        return t.headerSelect(C.a.Users)
                    }, t.videoHeaderSelect = function() {
                        return t.headerSelect(C.a.Videos)
                    }, t.communityHeaderSelect = function() {
                        return t.headerSelect(C.a.Communities)
                    }, t.headerSelect = function(e) {
                        t.props.onCategorySelected(e)
                    }, t.onClick = function(e) {
                        if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                            var n = e.target,
                                i = n.querySelector("a"),
                                r = i ? i.querySelector("[data-tt_content]") : null;
                            r || (i = n.closest("a")), (r = i && i.dataset.tt_content ? i : null) && t.props.onResultSelected()
                        }
                    }, t.setScrollRef = function(e) {
                        return t.scroll = e
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                }, t.prototype.render = function() {
                    var e, t, n, i = {
                        "search-results-panel": !0,
                        "search-results-panel--active": !0,
                        "search-results-panel--closed": !this.props.isOpen,
                        "search-results-panel--filtered": this.props.currentCategory === C.a.Videos
                    };
                    return e = this.props.currentCategory && null !== this.props.currentCategory ? u.createElement(V, {
                        title: this.getCategoryTitle(this.props.currentCategory),
                        showBack: !0,
                        onBackClick: this.onBackClick
                    }) : u.createElement(V, {
                        title: Object(d.d)("Top Results", "SearchResultPanel__titlebar"),
                        showBack: !1
                    }), t = this.props.isWaiting ? u.createElement(B._8, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.communityResults && this.props.communityResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage(), this.props.currentCategory === C.a.Videos && (n = u.createElement(q, {
                        key: "video-filters",
                        onOptionsChange: this.props.onVideoOptionsChange
                    })), u.createElement("div", {
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, u.createElement(B._29, {
                        className: I(i),
                        background: B.m.Base,
                        overflow: B._9.Hidden,
                        elevation: 5,
                        display: B.P.Flex,
                        flexDirection: B.R.Column,
                        flexWrap: B.S.NoWrap
                    }, e, n, u.createElement(R.b, {
                        className: "search-results-panel__wrapper",
                        contentClassName: "search-results-panel__content",
                        onClick: this.onClick,
                        scrollRef: this.setScrollRef,
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, u.createElement(B._6, {
                        fullWidth: !0
                    }, t, u.createElement(R.a, {
                        key: this.props.currentCategory || "none",
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))
                }, t.prototype.getResultSections = function() {
                    var e, t = [],
                        n = [],
                        i = this.getGameCards(),
                        r = this.getUserCards(),
                        a = this.getCommunityCards(),
                        o = this.getVideoCards(),
                        s = this.getLiveCards();
                    return s.length > 0 && (e = u.createElement(B._6, {
                        className: "search-results-panel__live",
                        margin: {
                            y: 1,
                            x: 1
                        }
                    }, u.createElement(B.W, null, s))), this.getResultSection("games-section", C.a.Games, this.gameHeaderSelect, this.props.gameResults, i.length, i, n, t), this.getResultSection("live-section", C.a.Channels, this.liveHeaderSelect, this.props.liveResults, s.length, e, n, t), this.getResultSection("channels-section", C.a.Users, this.userHeaderSelect, this.props.userResults, r.length, r, n, t), this.getResultSection("videos-section", C.a.Videos, this.videoHeaderSelect, this.props.videoResults, o.length, o, n, t), this.getResultSection("communities-section", C.a.Communities, this.communityHeaderSelect, this.props.communityResults, a.length, a, n, t), t.concat(n)
                }, t.prototype.getResultSection = function(e, t, n, i, r, a, o, s) {
                    var c = u.createElement(G, {
                        key: e,
                        totalHitsCount: i ? i.totalHits : 0,
                        hitsCount: r,
                        title: this.getCategoryTitle(t),
                        onHeaderClick: n,
                        "data-a-target": e
                    }, a);
                    0 === r ? o.push(c) : s.push(c)
                }, t.prototype.getGameCards = function() {
                    var e = this;
                    return this.props.gameResults ? this.props.gameResults.results.map(function(t) {
                        return u.createElement(j.a, {
                            onClick: e.onClick,
                            id: "game_" + t.id,
                            key: "game_" + t.id,
                            imageAlt: t.thumbnailAltText,
                            linkTo: t.linkTo,
                            title: t.title,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })
                    }) : []
                }, t.prototype.getLiveCards = function() {
                    var e = this;
                    return this.props.liveResults ? this.props.liveResults.results.map(function(t) {
                        var n = Object(U.a)(t.login || "", t.name || "");
                        return u.createElement(B.K, {
                            key: "live_" + t.id,
                            cols: 6
                        }, u.createElement(B._6, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(W, {
                            onClick: e.onClick,
                            id: "live_" + t.id,
                            imageAlt: t.thumbnailAltText,
                            linkTo: t.linkTo,
                            title: t.status || "",
                            login: t.login ? t.login : "",
                            channelName: n,
                            viewerCount: t.viewerCount || 0,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })))
                    }) : []
                }, t.prototype.getUserCards = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(U.a)(t.login || "", t.name || "");
                        return u.createElement(B._4, {
                            linkTo: t.linkTo,
                            onClick: e.onClick,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: t.id
                        }, u.createElement(B._6, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(B.B, {
                            row: !0
                        }, u.createElement(B.D, {
                            alt: t.thumbnailAltText,
                            src: t.thumbnail || "",
                            size: B.E.Size4,
                            aspect: B.k.Aspect1x1
                        }), u.createElement(B.C, {
                            overflow: B._9.Hidden
                        }, u.createElement(B._0, {
                            padding: {
                                x: 1
                            }
                        }, u.createElement(B.O, {
                            type: B._43.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : []
                }, t.prototype.getVideoCards = function() {
                    var e = this;
                    return this.props.videoResults ? this.props.videoResults.results.map(function(t) {
                        var n = Object(U.a)(t.login || "", t.name || ""),
                            i = Object(M.a)(t.length || 0);
                        return u.createElement(B._4, {
                            key: "video_" + t.id,
                            linkTo: t.linkTo,
                            onClick: e.onClick,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(B._6, {
                            className: "search-results-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(B.B, {
                            row: !0
                        }, u.createElement(B.D, {
                            src: t.thumbnail ? t.thumbnail : "",
                            alt: t.thumbnailAltText,
                            size: B.E.Size8,
                            aspect: B.k.Aspect16x9
                        }), u.createElement(B.C, {
                            overflow: B._9.Hidden
                        }, u.createElement(B._0, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B.O, {
                            type: B._43.H5,
                            ellipsis: !0
                        }, t.title)), u.createElement(B._0, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B.O, {
                            className: "search-results-panel__link",
                            ellipsis: !0
                        }, t.createdAt ? Object(d.c)(new Date(1e3 * t.createdAt), "medium") : "", " · ", i || "", " · ", u.createElement(B.O, {
                            className: "search-results-panel__highlight-link",
                            type: B._43.Span
                        }, n)))))))
                    }) : []
                }, t.prototype.getCommunityCards = function() {
                    var e = this;
                    return this.props.communityResults ? this.props.communityResults.results.map(function(t) {
                        return u.createElement(B._4, {
                            key: "community_" + t.id,
                            targetBlank: Object(A.b)(),
                            linkTo: Object(A.a)(t.linkTo),
                            onClick: e.onClick,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(B._6, {
                            className: "search-results-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(B.B, {
                            row: !0
                        }, u.createElement(B.D, {
                            src: t.thumbnail ? t.thumbnail : "",
                            alt: t.thumbnailAltText,
                            size: B.E.Size4,
                            aspect: B.k.BoxArt
                        }), u.createElement(B.C, {
                            overflow: B._9.Hidden
                        }, u.createElement(B._0, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B.O, {
                            type: B._43.H5,
                            ellipsis: !0
                        }, t.name)), u.createElement(B._0, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B.O, {
                            className: "search-results-panel__link",
                            ellipsis: !0
                        }, Object(d.d)("{viewerCount,number} Viewers", {
                            viewerCount: t.viewerCount || 0
                        }, "SearchResultPanel")))))))
                    }) : []
                }, t.prototype.getCategoryDrillDown = function(e) {
                    var t;
                    switch (e) {
                        case C.a.Games:
                            if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                            t = this.getGameCards();
                            break;
                        case C.a.Users:
                            if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                            t = this.getUserCards();
                            break;
                        case C.a.Communities:
                            if (!this.props.communityResults || 0 === this.props.communityResults.totalHits) return this.getNoResultsMessage();
                            t = this.getCommunityCards();
                            break;
                        case C.a.Videos:
                            if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                            t = this.getVideoCards();
                            break;
                        case C.a.Channels:
                            if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                            t = [u.createElement(B._6, {
                                className: "search-results-panel__live",
                                margin: {
                                    x: 1
                                },
                                key: "live_drill-down-container"
                            }, u.createElement(B.W, null, this.getLiveCards()))];
                            break;
                        default:
                            return this.getNoResultsMessage()
                    }
                    return u.createElement(G, null, t)
                }, t.prototype.getCategoryTitle = function(e) {
                    switch (e) {
                        case C.a.Games:
                            return Object(d.d)("Games", "SearchResultPanel");
                        case C.a.Users:
                            return Object(d.d)("Channels", "SearchResultPanel");
                        case C.a.Communities:
                            return Object(d.d)("Communities", "SearchResultPanel");
                        case C.a.Videos:
                            return Object(d.d)("Videos", "SearchResultPanel");
                        case C.a.Channels:
                            return Object(d.d)("Live", "SearchResultPanel");
                        default:
                            return Object(d.d)("Top Results", "SearchResultPanel")
                    }
                }, t.prototype.getNoResultsMessage = function() {
                    return u.createElement(B._6, {
                        display: B.P.Flex,
                        flexDirection: B.R.Column,
                        justifyContent: B._5.Center,
                        alignItems: B.c.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        zIndex: B._54.Above,
                        className: "search-results-panel__notice-wrap"
                    }, u.createElement(B._29, {
                        color: B.J.Alt2,
                        textAlign: B._39.Center,
                        flexShrink: 1
                    }, u.createElement(B._19, {
                        asset: B._20.SearchNoResults,
                        width: 46,
                        height: 48
                    })), u.createElement(B._0, {
                        margin: {
                            top: 1
                        },
                        textAlign: B._39.Center
                    }, u.createElement(B.O, {
                        type: B._43.H4,
                        "data-test-selector": "panel-body-no-results"
                    }, Object(d.d)("No results found", "SearchResultPanel"))), u.createElement(B.O, {
                        type: B._43.P
                    }, Object(d.d)("They're probably in another castle", "SearchResultPanel")))
                }, t.prototype.getErrorMessage = function() {
                    return u.createElement(B._6, {
                        display: B.P.Flex,
                        flexDirection: B.R.Column,
                        justifyContent: B._5.Center,
                        alignItems: B.c.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        zIndex: B._54.Above,
                        className: "search-results-panel__notice-wrap"
                    }, u.createElement(B._29, {
                        color: B.J.Alt2,
                        textAlign: B._39.Center,
                        flexShrink: 1
                    }, u.createElement(B._19, {
                        asset: B._20.DeadGlitch,
                        width: 46,
                        height: 48
                    })), u.createElement(B._0, {
                        margin: {
                            top: 1
                        },
                        textAlign: B._39.Center
                    }, u.createElement(B.O, {
                        type: B._43.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(d.d)("Search is not available at this time", "SearchResultPanel"))), u.createElement(B.O, {
                        type: B._43.P
                    }, Object(d.d)("Please try again later", "SearchResultPanel")))
                }, t
            }(u.Component)),
            K = (n("GtMZ"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isAnimating: !1,
                        currentCategory: t.currentCategory
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this;
                    e.currentCategory && e.currentCategory !== this.props.currentCategory && this.setState({
                        currentCategory: e.currentCategory
                    }), this.props.isVisible !== e.isVisible && (this.animationTimeout && window.clearTimeout(this.animationTimeout), this.setState({
                        isAnimating: !0
                    }), this.animationTimeout = window.setTimeout(function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, 300))
                }, t.prototype.componentWillUnmount = function() {
                    this.animationTimeout && window.clearTimeout(this.animationTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.currentCategory) return null;
                    var e = this.getAssetName(this.state.currentCategory);
                    return this.props.isVisible || this.state.isAnimating ? u.createElement(B._6, {
                        className: "search-tag",
                        display: B.P.Flex,
                        position: B._13.Absolute,
                        attachTop: !0,
                        attachBottom: !0,
                        alignItems: B.c.Center
                    }, u.createElement(B.e, {
                        enabled: !0,
                        type: this.props.isVisible ? B.i.BounceIn : B.i.BounceOut
                    }, u.createElement(B._38, {
                        label: this.state.currentCategory,
                        icon: e,
                        onClose: this.props.onClick,
                        "data-test-selector": "filter-icon",
                        "data-a-target": "nav-search-clear"
                    }))) : null
                }, t.prototype.getAssetName = function(e) {
                    switch (e) {
                        case C.a.Games:
                            return B._20.NavGames;
                        case C.a.Users:
                            return B._20.NavProfile;
                        case C.a.Communities:
                            return B._20.Communities;
                        case C.a.Videos:
                            return B._20.NavVideos;
                        case C.a.Channels:
                        default:
                            return B._20.NavChannels
                    }
                }, t
            }(u.Component)),
            Q = (n("p6Rc"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleKeydown = function(e) {
                        e.keyCode === S.a.F && e.altKey && (e.preventDefault(), t.NavSearchInputRef.focus())
                    }, t.setNavSearchInputRef = function(e) {
                        return t.NavSearchInputRef = e
                    }, t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.categoryTagClicked = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("keydown", this.handleKeydown)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("keydown", this.handleKeydown)
                }, t.prototype.render = function() {
                    return u.createElement("div", null, u.createElement("div", {
                        className: "top-nav__search-container",
                        "data-click-out-id": "nav-search-balloon"
                    }, u.createElement(F.a, {
                        onClickOut: this.props.onClickOut
                    }, u.createElement(B._22, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: Object(d.d)("Search", "NavSearch"),
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1,
                        refDelegate: this.setNavSearchInputRef
                    }), u.createElement(B.p, {
                        direction: B.q.Bottom,
                        noTail: !0,
                        size: B.r.Large,
                        show: this.props.isOpen,
                        offsetY: "5px",
                        "data-a-target": "nav-search-balloon"
                    }, u.createElement(Y, {
                        isOpen: this.props.isOpen,
                        gameResults: this.props.gameResults,
                        userResults: this.props.userResults,
                        communityResults: this.props.communityResults,
                        videoResults: this.props.videoResults,
                        liveResults: this.props.liveResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        onCategorySelected: this.props.onCategorySelected,
                        currentCategory: this.props.currentCategory,
                        onVideoOptionsChange: this.props.onVideoOptionsChange,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    })), u.createElement(K, {
                        isVisible: this.props.isOpen && !!this.props.currentCategory,
                        currentCategory: this.props.currentCategory,
                        onClick: this.categoryTagClicked
                    }))))
                }, t
            }(u.Component)),
            Z = 175,
            J = 1e3,
            $ = 1e3,
            X = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.didSelectCategory = !1, n.didSelectResult = !1, n.searchResultsFirstPage = null, n.onCategorySelected = function(e) {
                        n.setState(function(t) {
                            return l.__assign({}, n.getEmptyState(), {
                                term: t.term,
                                currentCategory: e,
                                isOpen: !0,
                                isWaiting: !0
                            })
                        }, function() {
                            n.didSelectCategory = !0, n.doSearch(n.state.term)
                        })
                    }, n.onChange = function(e) {
                        n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.props.latencyTracking.resetCustomEvents(w.a.Search), e ? (n.searchResultsFirstPage = n.props.latencyTracking.registerCustomEvent({
                            benchmark: J,
                            group: w.a.Search,
                            key: w.b.SearchResultsFirstPage,
                            label: w.c.FirstPageLoaded,
                            start: w.d.Registration
                        }), n.inputTimer = setTimeout(function() {
                            n.setState({
                                topGameResults: null,
                                topUserResults: null,
                                topLiveResults: null,
                                topVideoResults: null,
                                topCommunityResults: null,
                                isWaiting: !0,
                                term: e
                            }, function() {
                                n.state.videoOptions ? n.doVideosSearch(e, n.state.videoOptions) : n.doSearch(e)
                            })
                        }, Z)) : n.setState(n.getEmptyState())
                    }, n.onHistoryChange = function() {
                        n.state.isOpen && n.setState({
                            isOpen: !1
                        })
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.setState({
                            isOpen: !1
                        })
                    }, n.onFocus = function() {
                        n.state.term && !n.state.isOpen && n.setState({
                            isOpen: !0
                        })
                    }, n.onKeyDown = function(e) {
                        if (n.state.term) {
                            var t = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === S.a.Esc ? n.setState({
                                isOpen: !1
                            }) : e.keyCode === S.a.Up ? (t(), n.focusNext(-1)) : e.keyCode === S.a.Down && (t(), n.focusNext(1))
                        }
                    }, n.onResultSelected = function() {
                        n.didSelectResult = !0, n.setState({
                            isOpen: !1
                        })
                    }, n.loadMore = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, i, r, a = this;
                            return l.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits || this.state.videoOptions) return [2];
                                        e = this.state.currentPage + 1, this.props.latencyTracking.resetCustomEvents(w.a.Search), n = this.props.latencyTracking.registerCustomEvent({
                                            benchmark: $,
                                            group: w.a.Search,
                                            key: w.b.SearchResultsLaterPage,
                                            label: w.c.LaterPageLoaded,
                                            start: w.d.Registration
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = o.sent(), [3, 4];
                                    case 3:
                                        return i = o.sent(), d.j.error(i, "Algolia page search failed"), this.setState(l.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (r = Object(O.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentCommunityResults: this.state.currentCommunityResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(l.__assign({}, r, {
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: r.exhaustedHits
                                        }), function() {
                                            a.props.latencyTracking.reportCustomEvent(n)
                                        }), [2]) : (this.setState(l.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, n.doVideosSearch = function(e, t) {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var n, i, r, a = this;
                            return l.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        n = N.a(), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryVideos(e, n, t)];
                                    case 2:
                                        return i = o.sent(), D(e, i.totalHits), i.hits && this.setState({
                                            topGameResults: null,
                                            topUserResults: null,
                                            topLiveResults: null,
                                            topVideoResults: null,
                                            topCommunityResults: null,
                                            currentVideoResults: {
                                                totalHits: i.totalHits,
                                                results: i.hits.map(O.a)
                                            },
                                            queryID: "",
                                            isWaiting: !1
                                        }, function() {
                                            a.searchResultsFirstPage && (a.props.latencyTracking.reportCustomEvent(a.searchResultsFirstPage), a.searchResultsFirstPage = null)
                                        }), [3, 4];
                                    case 3:
                                        return r = o.sent(), d.j.error(r, "Algolia video search failed"), this.setState({
                                            isErrored: !0,
                                            isWaiting: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.changeVideoOptions = function(e) {
                        n.setState({
                            videoOptions: e
                        }, function() {
                            n.doVideosSearch(n.state.term, e)
                        })
                    }, n.searchClient = new E.a({
                        appId: d.a.algoliaApplicationID,
                        apiKey: d.a.algoliaAPIKey,
                        apolloClient: d.o.apollo.client,
                        logger: d.j,
                        config: d.a
                    }), n.state = n.getEmptyState(), n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentDidUpdate = function(e, t) {
                    var n, i;
                    !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                        focusSelectable: !1
                    })), t.isOpen && !this.state.isOpen ? (this.didSelectCategory || this.didSelectResult ? (n = this.state.term, i = this.state.currentCategory ? function(e) {
                        switch (e) {
                            case C.a.Channels:
                                return "channels";
                            case C.a.Communities:
                                return "communities";
                            case C.a.Games:
                                return "games";
                            case C.a.Users:
                                return "users";
                            case C.a.Videos:
                            case C.a.VideosNewest:
                                return "videos";
                            default:
                                return ""
                        }
                    }(this.state.currentCategory) : "", P() && d.o.tracking.track(g.SpadeEventType.CompletedSearch, l.__assign({}, T(), {
                        query: n,
                        filter: i
                    }))) : function(e) {
                        P() && d.o.tracking.track(g.SpadeEventType.AbandonedSearch, l.__assign({}, T(), {
                            query: e
                        }))
                    }(this.state.term), this.didSelectCategory = !1, this.didSelectResult = !1) : !t.isOpen && this.state.isOpen && function(e) {
                        P() && d.o.tracking.track(g.SpadeEventType.BeganSearch, l.__assign({}, T(), {
                            query: e
                        }))
                    }(this.state.term)
                }, t.prototype.render = function() {
                    return u.createElement(Q, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        onResultSelected: this.onResultSelected,
                        gameResults: this.state.currentGameResults,
                        userResults: this.state.currentUserResults,
                        communityResults: this.state.currentCommunityResults,
                        videoResults: this.state.currentVideoResults,
                        liveResults: this.state.currentLiveResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onCategorySelected: this.onCategorySelected,
                        currentCategory: this.state.currentCategory,
                        onVideoOptionsChange: this.changeVideoOptions,
                        loadMore: this.loadMore
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        r = Array.prototype.indexOf.call(n, i);
                    if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t.prototype.doSearch = function(e) {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, a, o, s = this;
                        return l.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = N.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), c.label = 1;
                                case 1:
                                    return c.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                case 2:
                                    return r = c.sent(), [3, 5];
                                case 3:
                                    return this.state.topGameResults && this.state.topUserResults && this.state.topLiveResults && this.state.topVideoResults && this.state.topCommunityResults ? (this.setState({
                                        currentGameResults: this.state.topGameResults,
                                        currentUserResults: this.state.topUserResults,
                                        currentLiveResults: this.state.topLiveResults,
                                        currentVideoResults: this.state.topVideoResults,
                                        currentCommunityResults: this.state.topCommunityResults,
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    }), [2]) : [4, this.searchClient.queryTopResults(e, n)];
                                case 4:
                                    r = c.sent(), c.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return a = c.sent(), d.j.error(a, "Algolia top results search failed"), this.setState(l.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 7:
                                    return r ? (D(e, (r.channels ? r.channels.totalHits : 0) + (r.communities ? r.communities.totalHits : 0) + (r.games ? r.games.totalHits : 0) + (r.users ? r.users.totalHits : 0) + (r.videos ? r.videos.totalHits : 0)), this.state.queryID !== r.id ? [2] : (o = Object(O.b)({
                                        searchResults: r,
                                        append: !1,
                                        currentGameResults: this.state.currentGameResults,
                                        currentUserResults: this.state.currentUserResults,
                                        currentCommunityResults: this.state.currentCommunityResults,
                                        currentVideoResults: this.state.currentVideoResults,
                                        currentLiveResults: this.state.currentLiveResults
                                    }), this.setState(l.__assign({}, o, {
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    }), function() {
                                        s.searchResultsFirstPage && (s.props.latencyTracking.reportCustomEvent(s.searchResultsFirstPage), s.searchResultsFirstPage = null)
                                    }), this.state.currentCategory && null === this.state.currentCategory && this.setState({
                                        topGameResults: o.currentGameResults,
                                        topUserResults: o.currentUserResults,
                                        topLiveResults: o.currentLiveResults,
                                        topVideoResults: o.currentVideoResults,
                                        topCommunityResults: o.currentCommunityResults,
                                        exhaustedHits: o.exhaustedHits
                                    }), [2])) : (this.setState(l.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        term: "",
                        currentGameResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentLiveResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentCommunityResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentVideoResults: {
                            totalHits: 0,
                            results: []
                        },
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentCategory: null,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1,
                        videoOptions: void 0
                    }
                }, t = l.__decorate([Object(v.d)("NavSearch")], t)
            }(u.Component),
            ee = Object(k.f)(X),
            te = n("Uhaz"),
            ne = n("ekcc"),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = !1;
                    if (this.props.data) {
                        if (this.props.data.loading || this.props.data.error) return null;
                        e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }
                    return !this.props.isLoggedIn || e ? u.createElement("a", {
                        href: h.a,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "store-link"
                    }, Object(d.d)("Store", "TopNavStore")) : null
                }, t = l.__decorate([Object(f.a)(ne, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(v.d)("TopNavStoreComponent", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component);
        var re, ae = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            })(ie),
            oe = n("S1vB"),
            se = n("Hs3O"),
            ce = n("iGr2"),
            le = Object(A.a)("/products/turbo?ref=top_nav"),
            ue = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo && !Object(oe.a)(this.props.data.requestInfo.countryCode),
                        t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                    if (e && t) return u.createElement("a", {
                        href: le,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "try-prime-link"
                    }, Object(d.d)("Go Turbo", "TopNavUpsell"));
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var n = Object(se.d)(se.b, window.location.pathname.substring(1));
                        return u.createElement("a", {
                            href: n,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(d.d)("Try Prime", "TopNavUpsell"))
                    }
                    return null
                }, t = l.__decorate([Object(f.a)(ce), Object(v.d)("TopNavUpsellComponent")], t)
            }(u.Component),
            de = n("RweG"),
            pe = n("WIs4"),
            me = n("l4QG"),
            fe = n("aMxy"),
            ge = n("NXs7"),
            he = n("HZww"),
            ve = n("FLwB"),
            ye = n("VAT8"),
            be = n("ZaD5"),
            _e = n("NikC"),
            ke = n("0nzt"),
            Se = n("oIkB");
        ! function(e) {
            e.Disable = "disable", e.Enable = "enable"
        }(re || (re = {}));
        n("/Urv");
        var Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLogoutClick = function(e) {
                        e.preventDefault(), t.props.logout()
                    }, t.onShareCheckboxClick = function() {
                        t.props.data && !t.props.data.error && t.props.data.currentUser && t.props.toggleShareActivity()
                    }, t.onDarkModeCheckboxClick = function() {
                        var e = t.props.theme === ge.a.Dark ? ge.a.Light : ge.a.Dark;
                        t.props.changeTheme(e, _e.a.UserMenu)
                    }, t.onOnlineClick = function(e) {
                        t.props.data && !t.props.data.error && t.props.data.currentUser && (e && e.stopPropagation(), t.props.toggleVisibility(me.a.Online))
                    }, t.onInvisibleClick = function(e) {
                        t.props.data && !t.props.data.error && t.props.data.currentUser && (e && e.stopPropagation(), t.props.toggleVisibility(me.a.Offline))
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = I("top-nav-user-menu-dropdown", {
                            "top-nav-user-menu-dropdown--toggled": this.props.dropdownOpen
                        }),
                        t = this.props.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        n = this.props.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        i = !1,
                        r = B.J.Alt2,
                        a = B.J.Alt2,
                        o = !1,
                        s = !0,
                        c = !1,
                        l = !1,
                        p = void 0,
                        m = void 0,
                        f = void 0;
                    return this.props.data && !this.props.data.error && this.props.data.currentUser && (i = !0, r = this.props.data.currentUser.availability === me.a.Offline ? B.J.Base : B.J.Alt2, a = this.props.data.currentUser.availability === me.a.Online ? B.J.Base : B.J.Alt2, o = !!this.props.data.currentUser.settings && this.props.data.currentUser.settings.isSharingActivity, s = this.props.data.currentUser.availability === me.a.Offline, c = this.props.data.currentUser.availability === me.a.Online, l = this.props.data.currentUser.availability === me.a.Offline, p = {
                        pathname: "/" + this.props.data.currentUser.login,
                        state: {
                            content: g.PageviewContent.SelfChannel,
                            medium: g.PageviewMedium.TopNav
                        }
                    }, m = Object(A.a)("/" + this.props.data.currentUser.login + "/manager"), f = Object(A.a)("/" + this.props.data.currentUser.login + "/dashboard")), u.createElement(B._29, {
                        overflow: B._9.Hidden,
                        position: B._13.Absolute,
                        className: e,
                        background: B.m.Base,
                        color: B.J.Base,
                        "data-a-target": t,
                        "data-test-selector": n,
                        attachRight: !0,
                        zIndex: B._54.Below
                    }, u.createElement(R.b, {
                        className: "top-nav-user-menu-dropdown__scrollable",
                        suppressScrollX: !0
                    }, u.createElement(B._6, null, u.createElement(B._29, {
                        padding: {
                            y: 1
                        },
                        background: B.m.Alt
                    }, u.createElement(B._4, {
                        disabled: !i,
                        onClick: this.onOnlineClick,
                        "data-a-target": "online-dropdown-button",
                        "data-test-selector": "online-dropdown-button"
                    }, u.createElement(B._29, {
                        color: B.J.Alt2,
                        display: B.P.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        alignItems: B.c.Center,
                        display: B.P.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._14, {
                        status: B._15.Online
                    })), u.createElement(B.O, {
                        bold: c,
                        color: a
                    }, Object(d.d)("Online", "UserMenuDropdown")))), u.createElement(B._4, {
                        disabled: !i,
                        onClick: this.onInvisibleClick,
                        "data-a-target": "invisible-dropdown-button",
                        "data-test-selector": "invisible-dropdown-button"
                    }, u.createElement(B._29, {
                        color: B.J.Base,
                        display: B.P.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        alignItems: B.c.Center,
                        display: B.P.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._14, {
                        status: B._15.Invisible
                    })), u.createElement(B.O, {
                        bold: l,
                        color: r
                    }, Object(d.d)("Invisible", "UserMenuDropdown")))), u.createElement(B._6, {
                        margin: {
                            x: 2,
                            bottom: 1,
                            top: .5
                        }
                    }, u.createElement(B.I, {
                        id: "share-activity-toggle",
                        label: Object(d.d)("Share my activity", "UserMenuDropdown"),
                        "data-a-target": "share-activity-toggle",
                        "data-test-selector": "share-activity-toggle",
                        "data-a-value": o,
                        checked: o,
                        onChange: this.onShareCheckboxClick,
                        disabled: s
                    }), u.createElement(B.O, {
                        type: B._43.Span,
                        color: B.J.Alt
                    }, Object(d.d)("Share what you're watching, playing, or streaming with your friends.", "UserMenuDropdown"))), u.createElement(B._29, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(B._6, {
                        margin: {
                            x: 2,
                            bottom: 1
                        }
                    }, u.createElement(B.I, {
                        id: "dark-mode-toggle",
                        label: Object(d.d)("Dark Mode", "UserMenuDropdown"),
                        "data-a-target": "dark-mode-toggle",
                        "data-test-selector": "dark-mode-toggle",
                        "data-a-value": this.props.theme,
                        checked: this.props.theme === ge.a.Dark,
                        onChange: this.onDarkModeCheckboxClick
                    }))), u.createElement(B._6, {
                        margin: {
                            y: 1
                        }
                    }, u.createElement(B._4, {
                        disabled: !i,
                        linkTo: p,
                        "data-a-target": "channel-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavMyChannel,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Channel", "UserMenuDropdown")))), u.createElement(B._4, {
                        disabled: !i,
                        linkTo: m,
                        "data-a-target": "video-manager-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavManager,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Video Producer", "UserMenuDropdown")))), u.createElement(B._4, {
                        disabled: !i,
                        linkTo: f,
                        "data-a-target": "dashboard-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavDashboard,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Dashboard", "UserMenuDropdown")))), u.createElement(B._29, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(B._4, {
                        targetBlank: Object(A.b)(),
                        linkTo: Object(A.a)("/friends"),
                        "data-a-target": "friends-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.Friends,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Friends", "UserMenuDropdown")))), u.createElement(B._4, {
                        targetBlank: Object(A.b)(),
                        linkTo: Object(A.a)("/messages/inbox"),
                        "data-a-target": "inbox-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavMessages,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Messages", "UserMenuDropdown")))), u.createElement(B._4, {
                        targetBlank: Object(A.b)(),
                        linkTo: Object(A.a)("/subscriptions"),
                        "data-a-target": "subscriptions-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.Star,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Subscriptions", "UserMenuDropdown")))), u.createElement(B._4, {
                        linkTo: "/inventory",
                        "data-a-target": "inventory-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.Crate,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Inventory", "UserMenuDropdown")))), u.createElement(B._4, {
                        linkTo: "/payments",
                        "data-a-target": "payments-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavBackpack,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Payments", "UserMenuDropdown")))), u.createElement(B._29, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(B._4, {
                        targetBlank: Object(A.b)(),
                        linkTo: Object(A.a)("/settings/profile"),
                        "data-a-target": "settings-dropdown-link"
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavSettings,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Settings", "UserMenuDropdown")))), u.createElement(B._4, {
                        "data-a-target": "dropdown-logout",
                        onClick: this.onLogoutClick
                    }, u.createElement(B._29, {
                        color: B.J.Alt,
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._19, {
                        asset: B._20.NavLogout,
                        height: 18,
                        width: 18
                    })), u.createElement(B.O, null, Object(d.d)("Log Out", "UserMenuDropdown"))))))))
                }, t = l.__decorate([Object(v.d)("UserMenuDropdown")], t)
            }(u.Component),
            we = n("jAYy"),
            Ee = n("94wQ"),
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toggleShareActivity = function() {
                        if (t.props.data && !t.props.data.error && t.props.data.currentUser) {
                            var e, n, i = !!t.props.data.currentUser.settings && !t.props.data.currentUser.settings.isSharingActivity,
                                r = l.__assign({}, Object(Se.a)({
                                    isSharingActivity: i
                                }), {
                                    optimisticResponse: {
                                        updateIsSharingActivity: {
                                            __typename: "UpdateIsSharingActivityPayload",
                                            user: {
                                                __typename: "User",
                                                id: t.props.data.currentUser.id,
                                                settings: {
                                                    isSharingActivity: i,
                                                    __typename: "UserSettings"
                                                }
                                            }
                                        }
                                    }
                                });
                            t.props.updateIsSharingActivity(r), e = {
                                login: t.props.data.currentUser.login,
                                isSharingEnabled: i
                            }, n = {
                                login: e.login,
                                action: e.isSharingEnabled ? re.Enable : re.Disable
                            }, d.n.track(g.SpadeEventType.PresenceToggle, n)
                        }
                    }, t.toggleVisibility = function(e) {
                        t.props.data && !t.props.data.error && t.props.data.currentUser && Object(ve.e)(e)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(Ne, {
                        data: this.props.data,
                        dropdownOpen: this.props.dropdownOpen,
                        toggleShareActivity: this.toggleShareActivity,
                        toggleVisibility: this.toggleVisibility,
                        changeTheme: this.props.changeTheme,
                        logout: this.props.logout,
                        theme: this.props.theme
                    })
                }, t = l.__decorate([Object(f.a)(we, {
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(f.a)(Ee, {
                    name: "updateIsSharingActivity"
                }), Object(pe.a)(function(e) {
                    return {
                        query: we,
                        topic: e.data && e.data.currentUser ? Object(he.m)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: fe.PubsubMessageType.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser && t.currentUser.settings && (t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity), t
                        }
                    }
                })], t)
            }(u.Component);
        var Ce = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    theme: Object(ke.a)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    changeTheme: _e.b,
                    logout: s.g
                }, e)
            })(Oe),
            xe = (n("Q8Dy"), function(e) {
                return u.createElement(B._6, {
                    position: B._13.Relative,
                    display: B.P.Flex,
                    flexGrow: 1,
                    alignItems: B.c.Stretch,
                    fullHeight: !0,
                    className: Object(ye.c)(ge.a.Dark)
                }, u.createElement(B._6, {
                    display: B.P.Flex,
                    flexGrow: 1,
                    alignItems: B.c.Stretch,
                    fullHeight: !0
                }, u.createElement(B._4, {
                    onClick: e.onMenuCardClick,
                    "data-a-target": "user-menu-toggle",
                    "data-test-selector": "user-menu-toggle"
                }, u.createElement(B._6, {
                    display: B.P.Flex,
                    flexGrow: 1,
                    alignItems: B.c.Center,
                    fullHeight: !0,
                    className: "top-nav-user-menu-placeholder",
                    "data-a-target": "user-card"
                }, u.createElement(B._6, {
                    display: B.P.Flex,
                    flexWrap: B.S.NoWrap,
                    alignItems: B.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0
                }, u.createElement(B._6, {
                    margin: {
                        x: 1
                    }
                }, u.createElement(B._12, {
                    width: 30,
                    height: 30,
                    overlay: !0
                })), u.createElement(B._6, {
                    flexGrow: 1,
                    display: B.P.Flex,
                    flexDirection: B.R.Column,
                    justifyContent: B._5.Center
                }, u.createElement(B._29, {
                    margin: {
                        y: .5
                    }
                }, u.createElement(B._12, {
                    width: 80,
                    height: 4,
                    overlay: !0
                })), u.createElement(B._6, null, u.createElement(B._6, {
                    ellipsis: !0,
                    display: B.P.Flex,
                    alignItems: B.c.Center
                }, u.createElement(B._6, {
                    display: B.P.InlineFlex,
                    margin: {
                        right: .5
                    }
                }, u.createElement(B._12, {
                    width: 6,
                    height: 6,
                    overlay: !0
                })), u.createElement(B._29, {
                    display: B.P.InlineFlex,
                    margin: {
                        y: .5
                    }
                }, u.createElement(B._12, {
                    width: 40,
                    height: 4,
                    overlay: !0
                }))))), u.createElement(B._29, {
                    display: B.P.Flex,
                    flexShrink: 0,
                    color: B.J.Base,
                    className: "top-nav-user-menu__dropdown-arrow",
                    "data-a-target": "top-nav-dropdown-arrow"
                }, u.createElement(B._19, {
                    asset: B._20.GlyphArrDown
                })))))))
            }),
            Te = n("2Hj/"),
            Pe = (n("nist"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCardClick = function() {
                        t.props.onMenuCardClick()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.profileImageURL || d.a.defaultAvatarURL,
                        n = e && e.displayName || "",
                        i = me.a.Offline;
                    return e && (e.availability ? i = e.availability : e.settings && e.settings.visibility && (i = e.settings.visibility)), u.createElement(B._6, {
                        position: B._13.Relative,
                        display: B.P.Flex,
                        flexGrow: 1,
                        alignItems: B.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        flexGrow: 1,
                        alignItems: B.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(B._4, {
                        onClick: this.onCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": "user-menu-toggle"
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        flexWrap: B.S.NoWrap,
                        alignItems: B.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        className: "top-nav-user-menu"
                    }, u.createElement(B._6, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, u.createElement(B._6, {
                        className: "top-nav-user-menu__avatar-container"
                    }, u.createElement(v.a, {
                        size: 30,
                        src: t,
                        alt: Object(d.d)("User avatar", "UserMenuToggle"),
                        "data-a-target": "top-nav-avatar"
                    }))), u.createElement(B._6, {
                        overflow: B._9.Hidden,
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: B.R.Column
                    }, u.createElement(B._29, {
                        color: B.J.Base,
                        fontSize: B.T.Size5,
                        className: "top-nav-user-menu__username",
                        "data-a-target": "user-display-name"
                    }, u.createElement(B.O, {
                        lineHeight: B._7.Heading
                    }, n)), u.createElement(B._29, {
                        className: "top-nav-user-menu__status-wrapper",
                        ellipsis: !0,
                        fullWidth: !0,
                        fontSize: B.T.Size7,
                        alignItems: B.c.Center,
                        display: B.P.Flex,
                        flexWrap: B.S.NoWrap
                    }, u.createElement(B._6, {
                        display: B.P.Flex,
                        flexShrink: 0,
                        margin: {
                            right: .5
                        }
                    }, u.createElement(Te.a, {
                        availability: i
                    })), u.createElement(B._29, {
                        ellipsis: !0,
                        color: B.J.Alt
                    }, u.createElement(B.O, {
                        type: B._43.Span,
                        noWrap: !0,
                        "data-a-target": "online-status",
                        lineHeight: B._7.Heading
                    }, this.props.data.currentUser && u.createElement(Te.b, {
                        activity: this.props.data.currentUser.activity,
                        availability: i === me.a.Offline ? me.a.Invisible : i
                    }))))), u.createElement(B._29, {
                        display: B.P.Flex,
                        flexShrink: 0,
                        color: B.J.Base,
                        className: "top-nav-user-menu__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, u.createElement(B._19, {
                        asset: B._20.GlyphArrDown
                    }))))))
                }, t
            }(u.Component)),
            De = n("9q8M"),
            Fe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isSettingNewSession = !1, n.onMenuCardClick = function() {
                        n.props.data.loading && !n.props.data.currentUser || n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.dataIsReady = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, n.setUserToOffline = function() {
                        Object(ve.c)(me.a.Offline), Object(ve.a)()
                    }, n.setNewSession = function() {
                        return l.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSettingNewSession) return [2];
                                        this.isSettingNewSession = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, Object(ve.g)()];
                                    case 2:
                                        return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                    case 3:
                                        return e = t.sent(), d.j.warn("Failed to set new user availability session.", e), [3, 5];
                                    case 4:
                                        return this.isSettingNewSession = !1, [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, n.maybeRefetchData = function(e) {
                        var t = e.pubsub.messages.presence;
                        t && e.data.currentUser && e.data.currentUser.id && t.data.user_id === +e.data.currentUser.id && n.props.pubsub.messages.presence !== t && e.data.refetch()
                    }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }), n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory(), this.setUserToOffline()
                }, t.prototype.render = function() {
                    var e = I(Object(ye.c)(ge.a.Dark), {
                            "top-nav-user-menu--dropdown-open": this.state.dropdownOpen
                        }),
                        t = null;
                    return t = this.props.data.loading && !this.props.data.currentUser || this.props.data.error ? u.createElement(xe, {
                        onMenuCardClick: this.onMenuCardClick
                    }) : u.createElement(Pe, {
                        data: this.props.data,
                        onMenuCardClick: this.onMenuCardClick,
                        theme: this.props.theme
                    }), u.createElement(B._6, {
                        position: B._13.Relative,
                        display: B.P.Flex,
                        flexGrow: 1,
                        alignItems: B.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(F.a, {
                        onClickOut: this.onClickOut,
                        className: e
                    }, t, u.createElement(Ce, {
                        dropdownOpen: this.state.dropdownOpen
                    })))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(f.a)(De), Object(pe.a)(function(e) {
                    return {
                        query: De,
                        topic: e.data.currentUser ? Object(he.m)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: fe.PubsubMessageType.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser && t.currentUser.settings && (t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity), t
                        }
                    }
                }), Object(de.a)([{
                    topic: function(e) {
                        return e.data.currentUser ? Object(he.m)(e.data.currentUser.id) : ""
                    },
                    mapMessageTypesToProps: (Ie = {}, Ie[fe.PubsubMessageType.Presence] = "presence", Ie),
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(v.d)("User")], t)
            }(u.Component);
        var Ie, Re = Object(i.b)(function(e) {
                return {
                    theme: Object(ke.a)(e),
                    firstPageLoaded: e.session.firstPageLoaded,
                    initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
                }
            }, function(e) {
                return Object(a.b)({
                    changeTheme: _e.b,
                    initialUserAvailabilitySet: be.g
                }, e)
            })(Object(r.f)(Fe)),
            Ae = n("8PKe"),
            Ue = n("p+06"),
            Me = (n("HTB+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isError: !1
                    }, t.logger = d.o.logger.withCategory("top-nav"), t.renderOnsiteNotifications = function() {
                        return t.props.isLoggedIn ? u.createElement(B._6, {
                            flexGrow: 0,
                            alignSelf: B.d.Center,
                            flexWrap: B.S.NoWrap,
                            padding: {
                                left: .5,
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement(_, null)) : null
                    }, t.renderTwitchPrimeCrown = function(e) {
                        return u.createElement(B._6, {
                            className: "top-nav__prime",
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: B.d.Center,
                            flexWrap: B.S.NoWrap
                        }, !e && u.createElement(Ae.c, null))
                    }, t.renderStoreLink = function() {
                        var e = !1;
                        if (t.props.data) {
                            if (t.props.data.loading || t.props.data.error) return null;
                            e = !!t.props.data.currentUser && t.props.data.currentUser.hasPrime
                        }
                        return !t.props.isLoggedIn || e ? null : u.createElement(B._4, {
                            targetBlank: !0,
                            linkTo: h.a,
                            "data-a-target": "store-link-dropdown",
                            "data-test-selector": "store-link-dropdown"
                        }, u.createElement(B._6, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(d.d)("Store", "TopNav")))
                    }, t.saveEllipsisRef = function(e) {
                        return t.ellipsisMenu = e
                    }, t.onNavigationClicked = function() {
                        t.ellipsisMenu.toggleBalloon(!1)
                    }, t.renderBrowseLink = function(e) {
                        var t = e.match,
                            n = t && "following" !== t.params.subpage,
                            i = Object(d.d)("Browse", "TopNav");
                        return u.createElement(r.a, {
                            className: "top-nav__nav-link" + (n ? " active" : ""),
                            "data-a-target": "browse-link",
                            title: i,
                            to: {
                                pathname: "/directory",
                                state: {
                                    medium: g.PageviewMedium.TopNav,
                                    content: g.PageviewContent.Games
                                }
                            }
                        }, i)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidCatch = function(e, t) {
                    var n = this;
                    this.setState({
                        isError: !0
                    }, function() {
                        n.logger.error(e, "A unhandled exception occurred in the component hierarchy", {
                            info: t
                        })
                    })
                }, t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, d.o.experiments.getAssignment(y.i)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        inOnboarding: Object(y.n)(e)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.isLoggedIn) {
                        var t = Object(d.d)("Following", "TopNav"),
                            n = this.props.data && this.props.data.currentUser && Object(y.o)(new Date(this.props.data.currentUser.createdAt)),
                            i = this.state.inOnboarding && n ? "/directory/following/foryou" : "/directory/following";
                        e = u.createElement(r.b, {
                            activeClassName: "active",
                            to: {
                                pathname: i,
                                state: {
                                    medium: g.PageviewMedium.TopNav,
                                    content: g.PageviewContent.Following
                                }
                            },
                            className: "top-nav__nav-link",
                            "data-a-target": "following-link",
                            title: t
                        }, t)
                    }
                    return u.createElement(B._0, {
                        position: B._13.Relative
                    }, u.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container",
                        style: {
                            height: "5rem"
                        }
                    }, u.createElement(B._6, {
                        className: "top-nav__menu",
                        display: B.P.Flex,
                        alignItems: B.c.Stretch,
                        flexWrap: B.S.NoWrap,
                        fullHeight: !0
                    }, u.createElement(B._0, {
                        display: B.P.InlineFlex,
                        alignItems: B.c.Center,
                        flexShrink: 0
                    }, u.createElement(r.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: g.PageviewMedium.TopNav,
                                content: g.PageviewContent.Logo
                            }
                        },
                        className: "top-nav__home-link",
                        "data-a-target": "home-link"
                    }, u.createElement(B._19, {
                        asset: B._20.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), u.createElement(B._6, {
                        className: "top-nav__nav-items-container",
                        display: B.P.Flex,
                        alignItems: B.c.Stretch,
                        flexGrow: 1,
                        flexWrap: B.S.NoWrap,
                        flexShrink: 0
                    }, e, u.createElement(r.d, {
                        path: "/directory/:subpage?",
                        children: this.renderBrowseLink
                    }), u.createElement("a", {
                        href: "https://app.twitch.tv/download",
                        "data-a-target": "get-desktop-link",
                        className: "top-nav__nav-link"
                    }, Object(d.d)("Get Desktop", "TopNav")), u.createElement(ue, null), u.createElement(ae, null), u.createElement(B._6, {
                        className: "top-nav__ellipsis-button",
                        display: B.P.Flex,
                        alignItems: B.c.Center
                    }, u.createElement(m.a, {
                        ref: this.saveEllipsisRef
                    }, u.createElement(B.v, {
                        icon: B._20.NavMore,
                        overlay: !0,
                        ariaLabel: Object(d.d)("More nav items", "TopNav"),
                        "data-a-target": "ellipsis-button"
                    }), u.createElement(B.p, {
                        direction: B.q.Bottom,
                        tailOffset: 7,
                        size: B.r.Small,
                        "data-a-target": "overflow-menu"
                    }, u.createElement(B._6, {
                        padding: 1
                    }, u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/about",
                        "data-a-target": "about-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("About", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "http://twitchadvertising.tv/",
                        "data-a-target": "advertisers-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Advertisers", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://blog.twitch.tv/",
                        "data-a-target": "blog-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Blog", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                        "data-a-target": "community-guidelines-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Community Guidelines", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/cookie-policy",
                        "data-a-target": "cookie-policy-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Cookie Policy", "TopNav"))), u.createElement(B._4, {
                        onClick: this.onNavigationClicked,
                        linkTo: "/directory/game/Creative",
                        "data-a-target": "creative-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Creative", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://dev.twitch.tv/",
                        "data-a-target": "developers-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Developers", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/",
                        "data-a-target": "help-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Help", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/jobs",
                        "data-a-target": "jobs-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Jobs", "TopNav"))), u.createElement(m.a, {
                        display: B.P.Block
                    }, u.createElement(B._4, {
                        "data-target": "language-selector-click",
                        "data-a-target": "language-selector"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Language", "TopNav"))), u.createElement(B.p, {
                        size: B.r.Small,
                        direction: B.q.Right,
                        tailOffset: 270,
                        offsetY: "-263px",
                        offsetX: "20px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, u.createElement(p.a, null))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://music.twitch.tv/",
                        "data-a-target": "music-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Music", "TopNav"))), this.renderStoreLink(), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/partners",
                        "data-a-target": "partners-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Partners", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/press",
                        "data-a-target": "press-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Press", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://twitch.tv/p/security",
                        "data-a-target": "security-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Security", "TopNav"))), u.createElement(B._4, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/terms-of-service",
                        "data-a-target": "terms-link"
                    }, u.createElement(B._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(d.d)("Terms", "TopNav"))))))), u.createElement(B._6, {
                        className: "top-nav__search",
                        flexGrow: 1,
                        alignSelf: B.d.Center
                    }, !this.state.isError && u.createElement(ee, null))), !this.state.isError && this.renderTwitchPrimeCrown(), !this.state.isError && this.renderOnsiteNotifications(), !this.state.isError && u.createElement(B._6, {
                        className: "top-nav__nav-items-container",
                        display: B.P.Flex,
                        alignItems: B.c.Center,
                        flexWrap: B.S.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.props.isLoggedIn ? u.createElement(Re, null) : u.createElement(te.a, {
                        login: this.props.login,
                        signup: this.props.signup
                    })))))
                }, t = l.__decorate([Object(f.a)(Ue, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(v.d)("TopNav")], t)
            }(u.Component));
        var je = Object(r.f)(Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(s.f)(o.a.TopNavSignupButton)
                },
                logout: s.g,
                signup: function() {
                    return Object(s.h)(o.a.TopNavSignupButton)
                }
            }, e)
        })(Me));
        n.d(t, !1, function() {
            return "5rem"
        }), n.d(t, !1, function() {
            return "9.5rem"
        }), n.d(t, "a", function() {
            return je
        })
    },
    TVUY: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "currentUser"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                            value: "login"
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
                            value: "availability"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "activity"
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
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Watching"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "user"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
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
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Streaming"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Playing"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 204
            }
        };
        n.loc.source = {
            body: "fragment currentUser on User {\nid\nlogin\ndisplayName\navailability\nactivity {\ntype\n... on Watching {\nuser {\ndisplayName\n}\n}\n... on Streaming {\nstream {\ngame {\nname\n}\n}\n}\n... on Playing {\ngame {\nname\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ToRI: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setSeconds(r), n
        }
    },
    Tv4R: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, a = i(e).getTime();
            return t.forEach(function(e) {
                var t = i(e),
                    o = Math.abs(a - t.getTime());
                (void 0 === n || o < r) && (n = t, r = o)
            }), n
        }
    },
    Tzcg: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "d", function() {
            return g
        });
        var i = n("TToO"),
            r = n("Bir6"),
            a = n("nEoF"),
            o = {
                "^B-?\\)$": "B)",
                "^:-?[z|Z|\\|]$": ":|",
                "^:-?\\)$": ":)",
                "^:-?\\($": ":(",
                "^:-?(p|P)$": ":P",
                "^;-?(p|P)$": ";P",
                "^:-?[\\\\/]$": ":/",
                "^;-?\\)$": ";)",
                "^R-?\\)$": "R)",
                "^:>$": ":>",
                "^[oO](_|\\.)[oO]$": "O_o",
                "^:-?D$": ":D",
                "^:-?(o|O)$": ":O",
                "^>\\($": ">(",
                "^:-?(?:7|L)$": ":7",
                "^:-?(S|s)$": ":S",
                "^#-?[\\\\/]$": "#/",
                "^<\\]$": "<]",
                "^<3$": "<3",
                "^&lt;3$": "<3",
                "^&lt;\\]$": "<]",
                "^&gt;\\($": ">("
            },
            s = ["1.0", "2.0", "3.0"],
            c = new Set([457, 33, 42, 0]),
            l = function(e) {
                return e.map(function(e) {
                    var t = m(e.token),
                        n = o[t] || t,
                        r = s.reduce(function(t, n) {
                            var i = t.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x");
                            return "3.0" !== n && (i = i.concat(", ")), i
                        }, "");
                    return i.__assign({
                        displayName: n,
                        srcSet: r
                    }, e)
                })
            },
            u = function(e) {
                var t = m(e);
                return o[t] || t
            },
            d = function(e) {
                return e.slice().sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            },
            p = function(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
                    c.has(parseInt(a.id, 10)) ? t.push({
                        id: a.id,
                        emotes: l(d(a.emotes))
                    }) : n.push({
                        id: a.id,
                        emotes: l(d(a.emotes))
                    })
                }
                return n.concat(t)
            },
            m = function(e) {
                return function(e) {
                    return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
            },
            f = function(e, t) {
                var n = a.c,
                    i = [],
                    o = [],
                    s = [],
                    c = new RegExp("^" + Object(r.a)(t), "i");
                return e.forEach(function(e) {
                    n[e.token] ? s.push(e) : e.token.match(c) ? i.push(e) : o.push(e)
                }), i.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), o.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), s.sort(function(e, t) {
                    return n[t.token].count - n[e.token].count
                }), s.concat(i).concat(o)
            },
            g = function(e) {
                var t = {};
                return e.filter(function(e) {
                    return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                })
            }
    },
    U3i2: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("+Znq"),
            c = n("7vx8"),
            l = n("WIs4"),
            u = n("Ejve"),
            d = n("aMxy"),
            p = n("oIkB"),
            m = n("HZww"),
            f = n("ZVME"),
            g = n("CSlQ"),
            h = n("zCIC"),
            v = n("3zLD"),
            y = n("gIPD"),
            b = n.n(y),
            _ = n("KSGD"),
            k = n("lfvs"),
            S = n("vH/s"),
            N = new Set(["affiliateinvite", "chatroommention", "feedcomment", "friendrequests", "partneragreementupdate", "partnerinvite"]);

        function w(e, t) {
            var n, i = {},
                a = function(e) {
                    var t = e.actions.filter(function(e) {
                        return "click" === e.type
                    });
                    return t.length > 0 ? t[0].url : ""
                }(e);
            if (!a) return i;
            try {
                n = new URL(a)
            } catch (t) {
                return o.j.error(t.toString(), a + " was malformed from notification id:[" + e.id + "]"), i
            }
            return ! function(e, t) {
                if (N.has(e)) return !1;
                return "https://www.twitch.tv" === t.origin
            }(e.type, n) ? (i.linkTo = function(e, t, n) {
                var i = e.split("?");
                if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
                var a = r.parse(i[1]);
                return a.tt_content = a.tt_content ? a.tt_content : t, a.tt_medium = a.tt_medium ? a.tt_medium : n, [i[0], r.stringify(a, {
                    encode: !1
                })].join("?")
            }(n.toString(), e.type, t), i.targetBlank = !0) : i.linkTo = {
                pathname: n.pathname,
                search: n.search,
                state: {
                    content: e.type,
                    medium: t
                }
            }, i
        }
        var E = {};
        var O = {
                Center: "center",
                Toast: "toast",
                Browser: "browser"
            },
            C = {
                Open: "open",
                Close: "close",
                MarkAllRead: "mark_all_read"
            },
            x = {
                PrimaryCta: "primary_cta",
                Dismiss: "dismiss"
            },
            T = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext
                };
                o.n.track(S.SpadeEventType.NotificationImpression, t)
            },
            P = function(e) {
                var t = {
                    unseen_view_count: e.unseenCount,
                    action: e.action
                };
                o.n.track(S.SpadeEventType.NotificationCenterInteraction, t)
            },
            D = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext,
                    action: e.action
                };
                o.n.track(S.SpadeEventType.NotificationInteraction, t)
            },
            F = n("Odds"),
            I = (n("UW/+"), "persistent-notification__delete"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.top < e.bottom && n.bottom > e.top
                        }
                        return !1
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t.deleteNotification = function() {
                        D({
                            uiContext: O.Center,
                            notification: t.props.data,
                            action: x.Dismiss
                        }), t.props.onDeleteNotification(t.props.data.id)
                    }, t.clickNotification = function() {
                        D({
                            uiContext: O.Center,
                            notification: t.props.data,
                            action: x.PrimaryCta
                        }), t.props.onViewNotification(t.props.data.id)
                    }, t.renderDeleteNotification = function() {
                        return a.createElement(F._6, {
                            className: "persistent-notification__delete",
                            padding: {
                                top: 1,
                                left: 1,
                                right: .5
                            },
                            position: F._13.Absolute
                        }, a.createElement(F._6, {
                            display: F.P.Flex,
                            flexWrap: F.S.NoWrap,
                            alignItems: F.c.Start
                        }, a.createElement(F.v, {
                            ariaLabel: "delete-notification",
                            "data-test-selector": I,
                            icon: F._20.Close,
                            size: F.w.Small,
                            onClick: t.deleteNotification
                        })))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive();
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : o.j.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return a.createElement(F._6, {
                        className: "persistent-notification",
                        position: F._13.Relative,
                        refDelegate: this.setRef,
                        "data-test-selector": "persistent-notification"
                    }, a.createElement(F._29, {
                        display: F.P.Flex,
                        className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                        borderBottom: !0,
                        flexWrap: F.S.NoWrap
                    }, a.createElement(F._4, i.__assign({
                        "data-test-selector": "persistent-notification__click",
                        onClick: this.clickNotification
                    }, w(this.props.data, S.PageviewMedium.NotificationCenter), {
                        alpha: !0
                    }), a.createElement(F._6, {
                        className: "persistent-notification__area",
                        display: F.P.Flex,
                        flexWrap: F.S.NoWrap,
                        padding: {
                            top: 1,
                            bottom: 1,
                            left: 1,
                            right: 3
                        }
                    }, a.createElement(F.D, {
                        aspect: F.k.Aspect1x1,
                        src: this.props.data.thumbnailURL,
                        alt: Object(o.d)("Notification center item thumbnail", "OnsiteNotifications"),
                        size: F.E.Size4
                    }), a.createElement(F._6, {
                        display: F.P.Flex,
                        flexDirection: F.R.Column,
                        flexWrap: F.S.NoWrap,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(F._6, {
                        className: "persistent-notification__body",
                        overflow: F._9.Hidden,
                        "data-test-selector": "persistent-notification__body"
                    }, a.createElement(F.O, {
                        type: F._43.Span,
                        color: F.J.Alt
                    }, a.createElement(k, {
                        source: this.props.data.body || ""
                    }))), a.createElement(F._6, {
                        display: F.P.Flex,
                        alignItems: F.c.Center,
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, a.createElement(F._19, {
                        asset: (e = this.props.data.type, t = F._20.MessagesSC, e in E ? E[e] : t),
                        height: 12,
                        width: 12,
                        type: F._21.Alt2
                    }), a.createElement(F._6, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(F.O, {
                        type: F._43.Span,
                        color: F.J.Alt2
                    }, Object(o.h)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()));
                    var e, t
                }, t.prototype.checkVisible = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (T({
                                uiContext: O.Center,
                                notification: this.props.data
                            }), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: _.func
                }, t = i.__decorate([Object(g.d)("PersistentNotification")], t)
            }(a.Component),
            A = n("+e5i"),
            U = n("UUPo"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRead: !1
                    }, t.createNotificationData = function() {
                        return {
                            id: "friendrequests",
                            type: "friendrequests",
                            body: Object(o.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                count: t.props.count
                            }, "FriendRequestsNotification"),
                            createdAt: t.props.date,
                            updatedAt: t.props.date,
                            isRead: t.props.isOldNotification || t.state.isRead,
                            thumbnailURL: b.a,
                            actions: [{
                                body: "View",
                                type: "click",
                                url: "https://www.twitch.tv/friends/requests"
                            }]
                        }
                    }, t.clearUnseenCount = function() {
                        Object(p.d)(U, {}, function(e) {
                            return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                        }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                            return o.j.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                        })
                    }, t.viewFriendRequests = function() {
                        t.setState({
                            isRead: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(R, {
                        key: "friendRequestsNotification",
                        data: this.createNotificationData(),
                        onDeleteNotification: this.clearUnseenCount,
                        onViewNotification: this.viewFriendRequests
                    })
                }, t
            }(a.Component),
            j = Object(v.compose)(Object(c.a)(A, {
                name: "clearUnreadFriendRequests"
            }))(M),
            L = (n("cLQP"), "center-window__empty"),
            B = "center-window__content-footer",
            H = "center-window__footer__text",
            W = "center-window__read-all",
            G = o.j.withCategory("onsite-notifications-center-window"),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMore: !1
                    }, t.renderContent = function() {
                        return !t.props.hasInitiallyLoaded || t.props.data.length || t.props.friendRequestsData ? [t.mapPersistentNotificationElements(), t.renderContentFooter()] : t.renderEmptyCenterWindowElement()
                    }, t.renderContentFooter = function() {
                        var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? a.createElement(F._8, {
                            delay: 0,
                            fillContent: !0
                        }) : a.createElement(F._19, {
                            asset: F._20.LogoGlitch,
                            width: 24,
                            height: 24,
                            type: F._21.Alt2
                        });
                        return a.createElement(F._6, {
                            className: "center-window__content-footer",
                            key: "center-window__content-footer",
                            "data-test-selector": B,
                            display: F.P.Flex,
                            flexDirection: F.R.Column,
                            justifyContent: F._5.Center,
                            alignItems: F.c.Center,
                            textAlign: F._39.Center,
                            padding: 1,
                            flexGrow: 1
                        }, e)
                    }, t.mapPersistentNotificationElements = function() {
                        var e = t.props.data.map(function(e) {
                            return a.createElement(R, {
                                key: "onsite-notification-" + e.node.id,
                                data: e.node,
                                onDeleteNotification: t.props.onDeleteNotification,
                                onViewNotification: t.props.onViewNotification
                            })
                        });
                        return t.props.friendRequestsData && e.unshift(a.createElement(j, i.__assign({
                            key: "friend-requests"
                        }, t.props.friendRequestsData))), e
                    }, t.renderEmptyCenterWindowElement = function() {
                        return a.createElement(F._29, {
                            "data-test-selector": L,
                            className: "center-window__empty-state",
                            background: F.m.Alt,
                            display: F.P.Flex,
                            justifyContent: F._5.Center,
                            alignItems: F.c.Center,
                            textAlign: F._39.Center,
                            flexDirection: F.R.Column,
                            padding: 2,
                            fullWidth: !0
                        }, a.createElement(F._19, {
                            asset: F._20.LogoGlitch,
                            width: 100,
                            height: 100,
                            type: F._21.Placeholder
                        }), a.createElement(F._6, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(F.O, {
                            type: F._43.H5,
                            color: F.J.Alt2
                        }, Object(o.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                    }, t.renderMarkAsRead = function() {
                        return 0 !== t.props.data.length || t.props.friendRequestsData ? a.createElement(F.u, {
                            "data-test-selector": W,
                            type: F.A.Text,
                            size: F.y.Small,
                            disabled: 0 === t.props.data.length && !t.props.friendRequestsData,
                            onClick: t.props.onReadAllNotifications
                        }, Object(o.d)("Mark All as Read", "OnsiteNotifications")) : null
                    }, t.renderNotificationsHeaderElement = function() {
                        return a.createElement(F._29, {
                            className: "center-window__header",
                            background: F.m.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: F.P.Flex,
                            alignItems: F.c.Center,
                            justifyContent: F._5.Between,
                            borderBottom: !0
                        }, a.createElement(F.O, {
                            type: F._43.H6,
                            color: F.J.Alt2,
                            bold: !0
                        }, Object(o.d)("Notifications", "OnsiteNotifications")), t.renderMarkAsRead())
                    }, t.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === t.props.newNotificationsCount ? null : a.createElement(F.O, {
                            "data-test-selector": H,
                            type: F._43.H6,
                            color: F.J.Alt2
                        }, Object(o.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: t.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return a.createElement(F._29, {
                            className: "center-window__footer",
                            background: F.m.Alt,
                            padding: .5,
                            alignItems: F.c.Center,
                            textAlign: F._39.Center,
                            borderTop: !0
                        }, e)
                    }, t.loadMore = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.state.isLoadingMore) return [3, 5];
                                        this.setState({
                                            isLoadingMore: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.onLoadMore()];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return e = t.sent(), G.error(e, "unexpected loadMore failure"), [3, 4];
                                    case 4:
                                        this.setState({
                                            isLoadingMore: !1
                                        }), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(F._29, {
                        className: "center-window",
                        "data-test-selector": "center-window",
                        background: F.m.Alt
                    }, this.renderNotificationsHeaderElement(), a.createElement(h.b, {
                        className: "center-window__scroll",
                        contentClassName: "center-window__scroll-container",
                        suppressScrollX: !0
                    }, a.createElement(F._6, {
                        display: F.P.Flex,
                        alignItems: F.c.Center,
                        flexDirection: F.R.Column,
                        flexGrow: 1,
                        flexWrap: F.S.NoWrap
                    }, this.renderContent(), a.createElement(h.a, {
                        enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                        contentLength: this.props.data.length,
                        loadMore: this.loadMore,
                        pixelThreshold: 200
                    }))), this.renderUnreadNotificationsFooterElement())
                }, t = i.__decorate([Object(g.d)("OnsiteNotificationsCenterWindow")], t)
            }(a.Component),
            z = n("RH2O"),
            q = n("Aj/L"),
            Y = n("RweG"),
            K = (n("MnLQ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeTimeout = 0, t.close = function() {
                        D({
                            uiContext: O.Toast,
                            notification: t.props.item,
                            action: x.Dismiss
                        }), t.props.close(t.props.index)
                    }, t.onMouseEnter = function() {
                        t.cancelCloseTimer()
                    }, t.onMouseLeave = function() {
                        t.scheduleCloseTimer()
                    }, t.view = function() {
                        D({
                            uiContext: O.Toast,
                            notification: t.props.item,
                            action: x.PrimaryCta
                        }), t.props.view(t.props.index)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.scheduleCloseTimer()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), T({
                        uiContext: O.Toast,
                        notification: this.props.item
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.cancelCloseTimer()
                }, t.prototype.render = function() {
                    return a.createElement(F.e, {
                        type: F.i.BounceIn,
                        duration: F.g.Medium,
                        enabled: !0
                    }, a.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                    }, a.createElement(F._29, {
                        className: "onsite-notification-toast",
                        background: F.m.Base,
                        display: F.P.Flex,
                        flexWrap: F.S.NoWrap,
                        margin: {
                            bottom: 1
                        },
                        border: !0
                    }, a.createElement(F._4, i.__assign({
                        onClick: this.view,
                        alpha: !0
                    }, w(this.props.item, S.PageviewMedium.NotificationToast)), a.createElement(F._6, {
                        className: "onsite-notification-toast__container",
                        display: F.P.Flex,
                        flexWrap: F.S.NoWrap
                    }, a.createElement(F._6, {
                        padding: {
                            y: 1,
                            left: 1
                        },
                        display: F.P.Flex,
                        flexShrink: 0
                    }, a.createElement(F.D, {
                        aspect: F.k.Aspect1x1,
                        src: this.props.item.thumbnailURL,
                        alt: Object(o.d)("Notification toast thumbnail", "OnsiteNotifications"),
                        size: F.E.Size4
                    })), a.createElement(F._6, {
                        display: F.P.Flex,
                        flexDirection: F.R.Column,
                        flexWrap: F.S.NoWrap,
                        flexGrow: 1,
                        padding: 1
                    }, a.createElement(F._6, {
                        className: "onsite-notification-toast__body",
                        overflow: F._9.Hidden
                    }, a.createElement(F._29, {
                        color: F.J.Alt
                    }, a.createElement(k, {
                        source: this.props.item.body
                    }))), a.createElement(F._6, {
                        margin: {
                            top: .5
                        },
                        flexShrink: 0
                    }, a.createElement(F._29, {
                        color: F.J.Alt2
                    }, Object(o.h)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                }, t.prototype.renderActions = function() {
                    return a.createElement(F._29, {
                        className: "onsite-notification-toast__action-wrapper",
                        display: F.P.Flex,
                        alignContent: F.b.Stretch,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexDirection: F.R.Column,
                        borderLeft: !0
                    }, a.createElement(F._29, {
                        className: "onsite-notification-toast__action",
                        display: F.P.Flex,
                        alignContent: F.b.Stretch,
                        flexGrow: 1,
                        borderBottom: !0
                    }, a.createElement(F._4, i.__assign({
                        onClick: this.view,
                        "data-test-selector": "onsite-notification-toast__view",
                        alpha: !0
                    }, w(this.props.item, S.PageviewMedium.NotificationToast)), a.createElement(F._29, {
                        display: F.P.Flex,
                        alignItems: F.c.Center,
                        justifyContent: F._5.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, a.createElement(F.O, {
                        color: F.J.Link
                    }, this.primaryCTAText())))), a.createElement(F._29, {
                        className: "onsite-notification-toast__action",
                        display: F.P.Flex,
                        alignContent: F.b.Stretch,
                        flexGrow: 1
                    }, a.createElement(F._4, {
                        onClick: this.close,
                        "data-test-selector": "onsite-notification-toast__close",
                        alpha: !0
                    }, a.createElement(F._29, {
                        display: F.P.Flex,
                        alignItems: F.c.Center,
                        justifyContent: F._5.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, a.createElement(F.O, {
                        color: F.J.Alt2
                    }, Object(o.d)("Close", "OnsiteNotifications"))))))
                }, t.prototype.primaryCTAText = function() {
                    var e = this.props.item.actions.find(function(e) {
                        return "click" === e.type
                    });
                    return e ? e.body : Object(o.d)("View", "OnsiteNotifications")
                }, t.prototype.scheduleCloseTimer = function() {
                    var e = this;
                    this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                        e.props.close(e.props.index), e.closeTimeout = 0
                    }, 1e4)
                }, t.prototype.cancelCloseTimer = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                }, t
            }(a.Component)),
            Q = Object(g.d)("OnsiteNotificationToast")(K);

        function Z(e, t) {
            return {
                id: e.id,
                body: e.body_md,
                type: e.type,
                thumbnailURL: e.thumbnail_url,
                createdAt: e.created_at,
                updatedAt: e.updated_at,
                isRead: e.read,
                actions: e.actions.map(function(e) {
                    return {
                        body: e.body,
                        type: e.type,
                        url: e.url,
                        __typename: "OnsiteNotificationAction"
                    }
                }),
                isTransient: !t,
                __typename: "OnsiteNotification"
            }
        }
        n("L6HU");
        var J, $ = o.j.withCategory("toast-manager"),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        notifications: []
                    }, t.view = function(e) {
                        var n = t.state.notifications[e];
                        t.props.onViewNotification(n.id, !n.isTransient), t.close(e)
                    }, t.close = function(e) {
                        var n = t.state.notifications.slice();
                        n.splice(e, 1), t.setState({
                            notifications: n
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.info,
                        n = e.pubsub.messages.info;
                    if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                        $.debug("Received pubsub update", e.pubsub.messages.info);
                        var i = Z(n.data.notification, n.data.persistent);
                        this.onNewNotification(i)
                    }
                }, t.prototype.render = function() {
                    return a.createElement(F._6, {
                        className: "onsite-notifications-toast-manager",
                        position: F._13.Absolute,
                        margin: {
                            top: 5
                        },
                        "data-test-selector": "onsite-notifications-toast-manager"
                    }, this.renderToasts())
                }, t.prototype.conditionallyInsertTestData = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o.a.buildType !== u.a.Production && r.parse(window.location.search).onsite_test_data ? [4, n.e(30).then(n.bind(null, "SFZn"))] : [3, 2];
                                case 1:
                                    e = i.sent().MockOnsiteNotifications, t = e.getMockOnsiteNotificationModels(3), this.setState({
                                        notifications: t
                                    }), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderToasts = function() {
                    var e = this,
                        t = this.state.notifications.map(function(t, n) {
                            return a.createElement(Q, {
                                key: t.id,
                                item: t,
                                index: n,
                                view: e.view,
                                close: e.close
                            })
                        });
                    return 0 === t.length ? null : t
                }, t.prototype.onNewNotification = function(e) {
                    var t = this.state.notifications.slice(),
                        n = t.findIndex(function(t) {
                            return t.id === e.id
                        });
                    n > -1 && t.splice(n, 1), t.unshift(e), t.length > 3 && t.pop(), this.setState({
                        notifications: t
                    })
                }, t = i.__decorate([Object(g.d)("OnsiteNotificationToastManager"), Object(Y.a)([{
                    topic: function(e) {
                        return Object(m.k)("" + (e.currentUser && e.currentUser.id))
                    },
                    mapMessageTypesToProps: (J = {}, J[d.PubsubMessageType.OnsiteNotificationCreate] = "info", J[d.PubsubMessageType.OnsiteNotificationUpdate] = "info", J),
                    skip: function(e) {
                        return !e.currentUser
                    }
                }])], t)
            }(a.Component);
        var ee = Object(z.b)(function(e) {
            return {
                currentUser: Object(q.c)(e)
            }
        })(X);
        var te = o.j.withCategory("onsite-pubsub-mutators");

        function ne(e, t) {
            return te.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
        }

        function ie(e, t) {
            if (te.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
            if (function(e) {
                    return e.type === d.PubsubMessageType.OnsiteNotificationsRead
                }(e)) {
                var n = new Set(e.data.notification_ids),
                    r = t.currentUser.notifications.edges.map(function(e) {
                        return n.has(e.node.id) ? i.__assign({}, e, {
                            node: i.__assign({}, e.node, {
                                isRead: !0
                            })
                        }) : e
                    });
                t.currentUser.notifications.edges = r
            } else if (function(e) {
                    return e.type === d.PubsubMessageType.OnsiteNotificationCreate || e.type === d.PubsubMessageType.OnsiteNotificationUpdate
                }(e)) {
                if (e.data.persistent) {
                    var a = Z(e.data.notification, !0);
                    (r = re(t.currentUser.notifications.edges, a.id)).unshift({
                        cursor: null,
                        node: a,
                        __typename: "OnsiteNotificationEdge"
                    }), t.currentUser.notifications.edges = r
                }
            } else(function(e) {
                return e.type === d.PubsubMessageType.OnsiteNotificationDelete
            })(e) && (t.currentUser.notifications.edges = re(t.currentUser.notifications.edges, e.data.notification_id));
            return t
        }

        function re(e, t) {
            return e.filter(function(e) {
                return e.node.id !== t
            })
        }
        var ae = n("XF1M"),
            oe = n("UhWx"),
            se = n("WfBs"),
            ce = n("c8sn"),
            le = n("wHbv");
        n("adox");
        n.d(t, "a", function() {
            return fe
        }), n.d(t, "b", function() {
            return ye
        });
        var ue = o.j.withCategory("onsite-notifications"),
            de = "onsite-notifications__badge",
            pe = "99+",
            me = 5e3,
            fe = 10,
            ge = 100,
            he = {
                align: F._47.Center,
                direction: F._48.Bottom,
                label: ""
            },
            ve = {
                limit: fe,
                cursor: ""
            },
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        newNotificationsCount: 0,
                        newFriendRequestsBadgeCount: 0,
                        isFriendRequestsNotificationUnread: !1
                    }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.hasReportedListNotificationsLoaded = !1, t.viewNotification = function(e, n) {
                        void 0 === n && (n = !0), t.centerWindowToggleBalloon.toggleBalloon(!1), n && t.readNotification(e)
                    }, t.conditionallyInsertSummaryTestData = function() {
                        t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && o.a.buildType !== u.a.Production && r.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(p.d)(ce, i.__assign({}, t.props.summaryData.variables), function(e) {
                            return e.currentUser.notifications.summary.unseenCount = r.parse(window.location.search).onsite_test_data, e
                        }))
                    }, t.conditionallyInsertListNotificationsTestData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.listDataLoaded() && !this.hasInsertedListNotificationsData && o.a.buildType !== u.a.Production && r.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(30).then(n.bind(null, "SFZn"))]) : [3, 2];
                                    case 1:
                                        e = t.sent().MockOnsiteNotifications, Object(p.d)(oe, i.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(r.parse(window.location.search).onsite_test_data), t
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.summaryDataLoaded = function(e) {
                        return e.summaryData && !e.summaryData.loading && !e.summaryData.error && e.summaryData.currentUser && e.summaryData.currentUser.notifications && e.summaryData.currentUser.notifications.summary && e.summaryData.currentUser.incomingFriendRequests
                    }, t.listDataLoaded = function() {
                        return t.props.listData && t.props.listData.currentUser && t.props.listData.currentUser.notifications && void 0 !== t.props.listData.currentUser.notifications.edges
                    }, t.hasNewFriendRequests = function(e) {
                        var t = e.summaryData.currentUser;
                        if (t.incomingFriendRequests && t.incomingFriendRequests.newestEdge && t.incomingFriendRequests.newestEdge.createdAt) {
                            var n = new Date(t.incomingFriendRequests.newestEdge.createdAt),
                                i = new Date(t.notifications.summary.lastSeenAt);
                            return t.incomingFriendRequests.totalUnreadCount > 0 && n > i
                        }
                        return !1
                    }, t.getFriendRequestsData = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            var e = t.props.summaryData.currentUser;
                            if (e.incomingFriendRequests && e.incomingFriendRequests.newestEdge) {
                                var n = e.incomingFriendRequests.totalUnreadCount,
                                    i = e.incomingFriendRequests.newestEdge.createdAt;
                                return n && i ? {
                                    count: n,
                                    date: i,
                                    isOldNotification: !t.state.isFriendRequestsNotificationUnread
                                } : void 0
                            }
                        }
                    }, t.toggleCenter = function(e) {
                        e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), P({
                            unseenCount: t.getUnseenNotificationsCount(t.props),
                            action: e ? C.Close : C.Open
                        })
                    }, t.getUnseenNotificationsAndApplyTimer = function() {
                        var e = t.state.newNotificationsCount;
                        t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                            newNotificationsCount: e
                        })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                            t.setState({
                                newNotificationsCount: 0
                            }), t.clearTimeout()
                        }, me))
                    }, t.viewNotifications = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.summaryDataLoaded(this.props)) return [2];
                                        this.setState({
                                            newFriendRequestsBadgeCount: 0
                                        }), e = i.__assign({}, Object(p.a)({}), {
                                            optimisticResponse: {
                                                viewedNotifications: {
                                                    user: {
                                                        notifications: {
                                                            summary: {
                                                                unseenCount: 0,
                                                                lastSeenAt: new Date,
                                                                __typename: "OnsiteNotificationsSummary"
                                                            },
                                                            __typename: "OnsiteNotificationConnection"
                                                        },
                                                        __typename: "User"
                                                    },
                                                    __typename: "ViewedNotificationsPayload"
                                                }
                                            }
                                        }), Object(p.d)(ce, i.__assign({}, this.props.summaryData.variables), function(e) {
                                            return e.currentUser.notifications.summary.unseenCount = 0, e
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.viewNotifications(e)];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return t = n.sent(), ue.error(t, "failure to read message..."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.getUnseenNotificationsCount = function(e) {
                        return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                    }, t.renderUnseenNotificationsBadge = function() {
                        var e = t.getUnseenNotificationsCount(t.props);
                        if (e > 0) {
                            var n = e >= 100 ? pe : e.toString();
                            return a.createElement(F._6, {
                                className: "onsite-notifications__badge",
                                "data-test-selector": de,
                                position: F._13.Absolute
                            }, a.createElement(F._10, {
                                label: n,
                                type: F._11.Notification
                            }))
                        }
                    }, t.deleteNotification = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = i.__assign({}, Object(p.a)({
                                            id: e
                                        }), {
                                            optimisticResponse: {
                                                deleteNotification: {
                                                    __typename: "DeleteNotificationPayload",
                                                    notification: {
                                                        __typename: "OnsiteNotification",
                                                        id: e
                                                    }
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(p.d)(oe, i.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                                return t.node.id !== e
                                            }), t
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.deleteOnsiteNotification(t)];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), ue.error(n, "Unable to delete notification " + e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readAllNotifications = function() {
                        if (t.setState({
                                isFriendRequestsNotificationUnread: !1
                            }), t.listDataLoaded()) {
                            P({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: C.MarkAllRead
                            });
                            var e = t.props.listData.currentUser.notifications.edges.filter(function(e) {
                                return !e.node.isRead
                            }).map(function(e) {
                                return e.node.id
                            });
                            if (0 !== e.length) {
                                var n = function(e, t) {
                                    for (var n = [], i = 0; i < e.length; i += t) {
                                        var r = e.slice(i, i + t);
                                        n.push(r)
                                    }
                                    return n
                                }(e, ge);
                                Object(p.d)(oe, i.__assign({}, t.props.listData.variables), function(e) {
                                    return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                        return i.__assign({}, e, {
                                            node: i.__assign({}, e.node, {
                                                isRead: !0
                                            })
                                        })
                                    }), e
                                });
                                for (var r = 0, a = n; r < a.length; r++) {
                                    var o = a[r];
                                    t.markIDsAsRead(o)
                                }
                            }
                        }
                    }, t.markIDsAsRead = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return {
                                                id: e,
                                                isRead: !0,
                                                __typename: "OnsiteNotification"
                                            }
                                        }), n = i.__assign({}, Object(p.a)({
                                            ids: e
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: t,
                                                    count: e.length
                                                }
                                            }
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(n)];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return r = a.sent(), ue.error(r, "Unable to read notifications", {
                                            ids: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readNotification = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = i.__assign({}, Object(p.a)({
                                            ids: [e]
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: [{
                                                        id: e,
                                                        isRead: !0,
                                                        __typename: "OnsiteNotification"
                                                    }],
                                                    count: 1
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(p.d)(oe, i.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                                return t.node.id === e ? i.__assign({}, t, {
                                                    node: i.__assign({}, t.node, {
                                                        isRead: !0
                                                    })
                                                }) : t
                                            }), t
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(t)];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), ue.error(n, "Unable to read notification", {
                                            id: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.loadMore = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                            })
                        })
                    }, t.clearTimeout = function() {
                        t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                    }, t.saveCenterWindowToggleBalloonRef = function(e) {
                        return t.centerWindowToggleBalloon = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.conditionallyInsertSummaryTestData(), this.conditionallyInsertListNotificationsTestData(), this.listNotificationsLoaded && !this.hasReportedListNotificationsLoaded && this.listDataLoaded() && (this.hasReportedListNotificationsLoaded = !0, this.props.latencyTracking.reportCustomEvent(this.listNotificationsLoaded))
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.summaryDataLoaded(e)) {
                        var t = this.hasNewFriendRequests(e);
                        this.setState({
                            newFriendRequestsBadgeCount: t ? 1 : 0
                        }), this.summaryDataLoaded(this.props) || this.setState({
                            isFriendRequestsNotificationUnread: t
                        }), o.o.setBadgeCount(this.getUnseenNotificationsCount(e))
                    }
                    e.shouldDefer || this.listNotificationsLoaded || (this.listNotificationsLoaded = this.registerListNotificationsLoadedEvent())
                }, t.prototype.render = function() {
                    var e = this.props.shouldDefer || !this.listDataLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                    return he.label = Object(o.d)("Notifications", "OnsiteNotificationsToolTip"), a.createElement(F._6, {
                        className: "onsite-notifications"
                    }, a.createElement(ee, {
                        onViewNotification: this.viewNotification
                    }), a.createElement(F._6, {
                        position: F._13.Relative
                    }, a.createElement(s.a, {
                        onToggle: this.toggleCenter,
                        ref: this.saveCenterWindowToggleBalloonRef,
                        tooltipProps: he
                    }, a.createElement(F.v, {
                        ariaLabel: Object(o.d)("Open Notifications", "OnsiteNotifications"),
                        size: F.w.Large,
                        icon: F._20.NotificationBell,
                        overlay: !0
                    }), a.createElement(F.p, {
                        "data-test-selector": "center-window__balloon",
                        direction: F.q.BottomRight,
                        size: F.r.Large,
                        offsetX: "10px"
                    }, a.createElement(V, {
                        newNotificationsCount: this.state.newNotificationsCount,
                        hasInitiallyLoaded: this.listDataLoaded(),
                        data: e,
                        friendRequestsData: this.getFriendRequestsData(),
                        onLoadMore: this.loadMore,
                        onViewNotification: this.viewNotification,
                        onReadAllNotifications: this.readAllNotifications,
                        onDeleteNotification: this.deleteNotification
                    }))), this.renderUnseenNotificationsBadge()))
                }, t.prototype.registerListNotificationsLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: f.a.OnsiteNotifications,
                        key: f.b.OnsiteNotificationsLoaded,
                        label: f.c.Init,
                        start: f.d.Registration
                    })
                }, t = i.__decorate([function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.state = {
                                shouldDefer: !0
                            }, e.stopDeferring = function() {
                                e.state.shouldDefer && e.setState({
                                    shouldDefer: !1
                                })
                            }, e
                        }
                        return i.__extends(n, t), n.prototype.render = function() {
                            var t = {
                                shouldDefer: this.state.shouldDefer,
                                stopDeferring: this.stopDeferring
                            };
                            return a.createElement(e, i.__assign({}, this.props, t))
                        }, n
                    }(a.Component)
                }, Object(c.a)(ce, {
                    name: "summaryData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(c.a)(le, {
                    name: "viewNotifications"
                }), Object(c.a)(oe, {
                    name: "listData",
                    options: function(e) {
                        return {
                            variables: i.__assign({}, ve, {
                                language: e.languageCode
                            })
                        }
                    },
                    skip: function(e) {
                        return e.shouldDefer
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.listData.fetchMore({
                                    query: oe,
                                    variables: i.__assign({}, e.listData.variables, {
                                        cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: i.__assign({}, n.currentUser, {
                                                notifications: i.__assign({}, n.currentUser.notifications, {
                                                    edges: e.currentUser.notifications.edges.concat(n.currentUser.notifications.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(c.a)(ae, {
                    name: "deleteOnsiteNotification"
                }), Object(c.a)(se, {
                    name: "readOnsiteNotification"
                }), Object(l.a)(function(e) {
                    return {
                        query: ce,
                        skip: !e.currentUser,
                        topic: Object(m.k)("" + (e.currentUser && e.currentUser.id)),
                        types: [d.PubsubMessageType.OnsiteNotificationSummaryUpdate, d.PubsubMessageType.OnsiteNotificationUpdate, d.PubsubMessageType.OnsiteNotificationCreate, d.PubsubMessageType.OnsiteNotificationDelete],
                        mutator: ne
                    }
                }), Object(l.a)(function(e) {
                    return {
                        query: oe,
                        variables: i.__assign({}, ve, {
                            language: e.languageCode
                        }),
                        skip: !(e.currentUser && e.listData && e.listData.currentUser && e.listData.currentUser.notifications && e.listData.currentUser.notifications.edges),
                        topic: Object(m.k)("" + (e.currentUser && e.currentUser.id)),
                        types: [d.PubsubMessageType.OnsiteNotificationsRead, d.PubsubMessageType.OnsiteNotificationUpdate, d.PubsubMessageType.OnsiteNotificationCreate, d.PubsubMessageType.OnsiteNotificationDelete],
                        mutator: ie
                    }
                }), Object(g.d)("OnsiteNotifications", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component)
    },
    UUPo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Query"
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
                                    value: "incomingFriendRequests"
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
                                            value: "totalUnreadCount"
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
                end: 115
            }
        };
        n.loc.source = {
            body: "query FriendRequestsNotification_Query {\ncurrentUser {\nid\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "UW/+": function(e, t) {},
    UhWx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ListNotifications"
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
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
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
                                    value: "notifications"
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
                                        value: "language"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "language"
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
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "body"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "createdAt"
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
                                                            value: "isRead"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "actions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "body"
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
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "url"
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
                end: 311
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_ListNotifications($limit: Int $cursor: Cursor $language: String) {\ncurrentUser {\nid\nnotifications(first: $limit after: $cursor language: $language) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\ntype\nbody\ncreatedAt\nupdatedAt\nisRead\nthumbnailURL\nactions {\nbody\ntype\nurl\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Uhaz: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("CSlQ"),
            s = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(s._6, {
                        className: "anon-user",
                        flexWrap: s.S.NoWrap,
                        display: s.P.Flex,
                        margin: {
                            left: 1
                        },
                        "data-a-target": "user-card"
                    }, r.createElement(s._6, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, Object(a.d)("Log in", "top-nav"))), r.createElement(s._6, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.u, {
                        onClick: this.onSignUpClick,
                        "data-a-target": "signup-button"
                    }, Object(a.d)("Sign up", "top-nav"))))
                }, t = i.__decorate([Object(o.d)("AnonUser")], t)
            }(r.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    "Uu+E": function(e, t, n) {
        var i = n("xA5w"),
            r = n("iRXW"),
            a = n("nizW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = a(n, r(n)),
                c = new Date(0);
            return c.setFullYear(o, 0, 4), c.setHours(0, 0, 0, 0), (n = r(c)).setDate(n.getDate() + s), n
        }
    },
    VH0v: function(e, t) {},
    VaeB: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMilliseconds(0), t
        }
    },
    VkpB: function(e, t) {},
    W59S: function(e, t, n) {
        e.exports = n.p + "assets/credit_cards_1x-0c57bd2e9d4cd4bb8474fb968acc4bd2.png"
    },
    WIs4: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("HZww");

        function o(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var i = n.call(this, t) || this;
                        return i.mutator = function(e, t) {
                            return i.options.mutator(e, t)
                        }, i.typesChanged = function(e) {
                            if (e.types && !i.options.types || !e.types && i.options.types) return !0;
                            if (e.types && i.options.types) {
                                if (e.types.length !== i.options.types.length) return !0;
                                var t = new Set(i.options.types);
                                return e.types.some(function(e) {
                                    return !t.has(e)
                                })
                            }
                            return !1
                        }, i.options = e(t), i
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        this.options.skip || this.subscribe(this.options)
                    }, o.prototype.componentWillReceiveProps = function(t) {
                        var n = e(t);
                        n.skip !== this.options.skip && (n.skip ? this.unsubscribe() : this.subscribe(n)), n.skip || (n.topic !== this.options.topic || n.type !== this.options.type || this.typesChanged(n)) && (this.unsubscribe(), this.subscribe(n)), this.options = n
                    }, o.prototype.componentWillUnmount = function() {
                        this.unsubscribe()
                    }, o.prototype.render = function() {
                        return r.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.subscribe = function(e) {
                        this.unsubscriber = Object(a.q)({
                            query: e.query,
                            variables: e.variables,
                            topic: e.topic,
                            type: e.type,
                            types: e.types,
                            mutator: this.mutator,
                            skipMessage: e.skipMessage
                        })
                    }, o.prototype.unsubscribe = function() {
                        this.unsubscriber && (this.unsubscriber(), this.unsubscriber = null)
                    }, o
                }(r.Component)
            }
        }
        n.d(t, "a", function() {
            return o
        })
    },
    WNGz: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setHours(0, 0, 0, 0), t
        }
    },
    WfBs: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ReadNotifications"
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
                                value: "ReadNotificationsInput"
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
                            value: "readNotifications"
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
                                    value: "notifications"
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
                                            value: "isRead"
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
                end: 148
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\nreadNotifications(input: $input) {\nnotifications {\nid\nisRead\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    XF1M: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_DeleteNotification"
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
                                value: "DeleteNotificationInput"
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
                            value: "deleteNotification"
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
                                    value: "notification"
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
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\ndeleteNotification(input: $input) {\nnotification {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    XFzU: function(e, t, n) {
        var i = n("GI7G");
        e.exports = function(e, t) {
            var n = i(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    Xorj: function(e, t) {},
    YPf8: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 5 === i(e).getDay()
        }
    },
    YPjl: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Jvcu"),
            a = n("AZvW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = a(n);
            return r(n, o - s)
        }
    },
    YRFD: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = i(t).getTime();
            return n > r ? -1 : n < r ? 1 : 0
        }
    },
    YkGD: function(e, t, n) {
        e.exports = n.p + "assets/paypal_2x-36ebff55eec001d935d0605e6f97b955.png"
    },
    ZUMa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 0 === i(e).getDay()
        }
    },
    a7Cs: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setFullYear(r), n
        }
    },
    aHtT: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return i(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    aMOL: function(e, t) {},
    aMxy: function(e, t, n) {
        "use strict";
        var i = n("arZ9");
        n.n(i);
        n.o(i, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
            return i.FrienshipChangeType
        }), n.o(i, "ModerationActions") && n.d(t, "ModerationActions", function() {
            return i.ModerationActions
        }), n.o(i, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
            return i.PubsubMessageType
        }), n.o(i, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
            return i.PubsubTopic
        }), n.o(i, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
            return i.TargetedModerationActions
        });
        var r = n("GHQc");
        n.n(r);
        n.o(r, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
            return r.FrienshipChangeType
        }), n.o(r, "ModerationActions") && n.d(t, "ModerationActions", function() {
            return r.ModerationActions
        }), n.o(r, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
            return r.PubsubMessageType
        }), n.o(r, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
            return r.PubsubTopic
        }), n.o(r, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
            return r.TargetedModerationActions
        });
        var a = n("/3Lr");
        n.d(t, "FrienshipChangeType", function() {
            return a.a
        }), n.d(t, "ModerationActions", function() {
            return a.b
        }), n.d(t, "PubsubMessageType", function() {
            return a.c
        }), n.d(t, "PubsubTopic", function() {
            return a.d
        }), n.d(t, "TargetedModerationActions", function() {
            return a.e
        })
    },
    adox: function(e, t) {},
    afun: function(e, t) {},
    arZ9: function(e, t) {},
    b7g8: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    balU: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = n.getFullYear(),
                s = n.getDate(),
                c = new Date(0);
            c.setFullYear(o, a, 15), c.setHours(0, 0, 0, 0);
            var l = r(c);
            return n.setMonth(a, Math.min(s, l)), n
        }
    },
    bbdo: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMinutes(59, 59, 999), t
        }
    },
    c8sn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_Summary"
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
                                    value: "notifications"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "summary"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "unseenCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "lastSeenAt"
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
                                    value: "incomingFriendRequests"
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
                                            value: "totalUnreadCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "newestEdge"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "createdAt"
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
                end: 188
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_Summary {\ncurrentUser {\nid\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\nnewestEdge {\ncreatedAt\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "cA+x": function(e, t, n) {
        var i = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    cLQP: function(e, t) {},
    cONr: function(e, t, n) {
        var i = n("f+sD");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    cw9o: function(e, t, n) {
        var i = n("7EGB");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    cwv1: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime()
        }
    },
    czpb: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return i.b.get(a.a, !1) || i.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !i.b.get(a.a, !1) && i.a.buildType === r.a.Production
        };
        var i = n("6sO2"),
            r = n("Ejve"),
            a = n("6Vb7"),
            o = "https://www.twitch.tv"
    },
    dH3X: function(e, t, n) {
        var i = n("607n");
        e.exports = function(e) {
            if (i(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    danj: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMinutes(r), n
        }
    },
    "e/EH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 3 === i(e).getDay()
        }
    },
    e2wA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    e6tx: function(e, t) {},
    eCZG: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime() < (new Date).getTime()
        }
    },
    eKpK: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getSeconds()
        }
    },
    eY4D: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "title"
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
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "publisher"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "categories"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 276
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ekbR: function(e, t, n) {
        e.exports = n.p + "assets/more_methods_1x-98862ad01d0cfaef3e09da4e3908bf4b.png"
    },
    ekcc: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_Store_CurrentUser"
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
                                    value: "hasPrime"
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
                end: 62
            }
        };
        n.loc.source = {
            body: "query TopNav_Store_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    el3o: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimPrimeOffer"
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
                                value: "ClaimPrimeOfferInput"
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
                            value: "claimPrimeOffer"
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
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
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "f+sD": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    f8UT: function(e, t) {},
    fK0I: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() > r.getTime()
        }
    },
    fUo1: function(e, t, n) {
        var i = n("iRXW"),
            r = n("7EGB"),
            a = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = i(r(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / a)
        }
    },
    fo7E: function(e, t, n) {
        var i = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    gAt4: function(e, t, n) {
        var i = n("xA5w"),
            r = n("nizW"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                c = Math.abs(r(n, o));
            return n.setDate(n.getDate() - s * c), s * (c - (a(n, o) === -s))
        }
    },
    gDPd: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() < r.getTime()
        }
    },
    gIPD: function(e, t, n) {
        e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d982c8c0f43d9.png"
    },
    gKy9: function(e, t) {},
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i + 1), r.setHours(0, 0, 0, 0), r
        }
    },
    hUHO: function(e, t, n) {
        var i = n("4LxA");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    hico: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = r(n);
            return a.setDate(a.getDate() - 1), a
        }
    },
    hj5Y: function(e, t, n) {
        var i = n("5qwL");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    hmTn: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_2x-914335e3401a72109a8a082c5ecc4aad.png"
    },
    iGr2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_PrimeUpsell_CurrentUser"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 105
            }
        };
        n.loc.source = {
            body: "query TopNav_PrimeUpsell_CurrentUser {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    iLMR: function(e, t) {},
    iRXW: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), r(n)
        }
    },
    j6Ui: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e, t) {
            return Object(i.format)(e, t)
        }, t.c = function(e) {
            return Object(i.parse)(e)
        }, t.d = function(e, t) {
            var n = e.split(":");
            if (2 !== n.length) throw new Error("invalid time string: " + e);
            var i = parseInt(n[0], 10),
                r = parseInt(n[1].substring(0, 2), 10),
                a = n[1].substring(n[1].length - 2);
            12 === i && "am" === a && (i = 0);
            "pm" === a && i < 12 && (i += 12);
            if (isNaN(i) || i < 0 || i > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
            var o = t || new Date;
            return o.setHours(i, r), o
        };
        var i = n("wuJz"),
            r = (n.n(i), {
                RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                timeString: "h:mma"
            })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    o = a.content,
                                    c = a.medium,
                                    l = a.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: c,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, o
                }(a.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    jAYy: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_UserMenu_Dropdown"
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
                                    value: "availability"
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
                                            value: "isSharingActivity"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "visibility"
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
                end: 126
            }
        };
        n.loc.source = {
            body: "query TopNav_UserMenu_Dropdown {\ncurrentUser {\nid\ndisplayName\nlogin\navailability\nsettings {\nisSharingActivity\nvisibility\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jQas: function(e, t, n) {
        var i = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                o = ["AM", "PM"],
                s = ["am", "pm"],
                c = ["a.m.", "p.m."],
                l = {
                    MMM: function(t) {
                        return e[t.getMonth()]
                    },
                    MMMM: function(e) {
                        return t[e.getMonth()]
                    },
                    dd: function(e) {
                        return n[e.getDay()]
                    },
                    ddd: function(e) {
                        return r[e.getDay()]
                    },
                    dddd: function(e) {
                        return a[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? o[1] : o[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? c[1] : c[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                l[e + "o"] = function(t, n) {
                    return function(e) {
                        var t = e % 100;
                        if (t > 20 || t < 10) switch (t % 10) {
                            case 1:
                                return e + "st";
                            case 2:
                                return e + "nd";
                            case 3:
                                return e + "rd"
                        }
                        return e + "th"
                    }(n[e](t))
                }
            }), {
                formatters: l,
                formattingTokensRegExp: i(l)
            }
        }
    },
    jetF: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("HM6l")),
            o = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(a.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.setState({
                            showBalloon: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.onMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = r.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== o.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var a = r.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = r.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var c = a;
                    return this.props.tooltipProps && (c = r.createElement(o._46, i.__assign({}, this.props.tooltipProps), a)), r.createElement(o._6, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._13.Relative
                    }, r.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, c), s)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t
            }(r.Component)
    },
    jy2q: function(e, t, n) {
        var i = n("xA5w"),
            r = n("balU");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return r(n, n.getMonth() + 3 * a)
        }
    },
    kDuD: function(e, t, n) {
        var i = n("xA5w"),
            r = n("MIQa"),
            a = n("xKy+");
        e.exports = function(e) {
            var t = i(e);
            return r(t).getTime() === a(t).getTime()
        }
    },
    kIFi: function(e, t, n) {
        var i = n("NSOL");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    kRs6: function(e, t, n) {
        var i = n("Qxz6");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    "kgE+": function(e, t) {},
    kjlQ: function(e, t, n) {
        var i = n("G7No"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = i(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    kkVd: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 1 === i(e).getDay()
        }
    },
    l4QG: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Away: "AWAY",
            Busy: "BUSY",
            Idle: "IDLE",
            Invisible: "INVISIBLE",
            Offline: "OFFLINE",
            Online: "ONLINE"
        }
    },
    l7ua: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
            }(i || (i = {}))
    },
    l85J: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMonth()
        }
    },
    lKyS: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "reward"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "TournamentReward"
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
                            value: "name"
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
                            value: "description"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "canBeFulfilled"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 99
            }
        };
        n.loc.source = {
            body: "fragment reward on TournamentReward {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lQzg: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i - 1), r.setHours(0, 0, 0, 0), r
        }
    },
    mXYp: function(e, t, n) {
        var i = n("YRFD"),
            r = n("xA5w"),
            a = n("25hp"),
            o = n("GI7G"),
            s = n("uyaC"),
            c = 1440,
            l = 2520,
            u = 43200,
            d = 86400;
        e.exports = function(e, t, n) {
            var p = n || {},
                m = i(e, t),
                f = p.locale,
                g = s.distanceInWords.localize;
            f && f.distanceInWords && f.distanceInWords.localize && (g = f.distanceInWords.localize);
            var h, v, y = {
                addSuffix: Boolean(p.addSuffix),
                comparison: m
            };
            m > 0 ? (h = r(e), v = r(t)) : (h = r(t), v = r(e));
            var b, _ = a(v, h),
                k = v.getTimezoneOffset() - h.getTimezoneOffset(),
                S = Math.round(_ / 60) - k;
            if (S < 2) return p.includeSeconds ? _ < 5 ? g("lessThanXSeconds", 5, y) : _ < 10 ? g("lessThanXSeconds", 10, y) : _ < 20 ? g("lessThanXSeconds", 20, y) : _ < 40 ? g("halfAMinute", null, y) : g(_ < 60 ? "lessThanXMinutes" : "xMinutes", 1, y) : 0 === S ? g("lessThanXMinutes", 1, y) : g("xMinutes", S, y);
            if (S < 45) return g("xMinutes", S, y);
            if (S < 90) return g("aboutXHours", 1, y);
            if (S < c) return g("aboutXHours", Math.round(S / 60), y);
            if (S < l) return g("xDays", 1, y);
            if (S < u) return g("xDays", Math.round(S / c), y);
            if (S < d) return g("aboutXMonths", b = Math.round(S / u), y);
            if ((b = o(v, h)) < 12) return g("xMonths", Math.round(S / u), y);
            var N = b % 12,
                w = Math.floor(b / 12);
            return N < 3 ? g("aboutXYears", w, y) : N < 9 ? g("overXYears", w, y) : g("almostXYears", w + 1, y)
        }
    },
    mbxv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("+V/3"),
            o = n("Odds"),
            s = (n("2IkU"), n("6sO2")),
            c = n("vH/s"),
            l = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.o.tracking.track(c.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return u
        });
        var u = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isHovering: !1
                }, t.onMouseOver = function() {
                    t.setState({
                        isHovering: !0
                    })
                }, t.onMouseOut = function() {
                    t.setState({
                        isHovering: !1
                    })
                }, t.onBadgeClickHandler = function() {
                    l({
                        badge_type: t.props.badge.title,
                        badge_url_target: t.targetURL
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    i = e.image2x,
                    a = e.image4x,
                    c = r.createElement("img", {
                        alt: t,
                        "aria-label": Object(s.d)("{badgeTitle} badge", {
                            badgeTitle: t
                        }, "Badge"),
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + i + " 2x, " + a + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (c = r.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, c)), this.state.isHovering ? r.createElement(o._46, {
                    align: o._47.Left,
                    "data-a-target": "chat-badge",
                    display: o.P.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, c) : c
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case a.d:
                        return e.clickURL;
                    case a.b:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case a.c:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(r.Component)
    },
    mi6k: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = function(e, t) {
            var n = Math.floor(e % 60),
                r = Math.floor(e % 3600 / 60),
                a = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(a, 2) + ":" + i(r, 2) + ":" + i(n, 2) : a ? a + ":" + i(r, 2) + ":" + i(n, 2) : r + ":" + i(n, 2)
        }
    },
    mqvl: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            switch (e.type) {
                case i.b.Playing:
                    return {
                        type: i.a.Playing,
                        "Symbol(id)": t,
                        __typename: "Playing",
                        game: {
                            id: e.game_id,
                            name: e.game,
                            "Symbol(id)": t + ".game",
                            __typename: "Game"
                        }
                    };
                case i.b.Streaming:
                    var n = {
                        type: i.a.Streaming,
                        "Symbol(id)": t,
                        __typename: "Streaming",
                        stream: {
                            id: e.channel_id,
                            game: null,
                            "Symbol(id)": t + ".stream",
                            __typename: "Stream"
                        }
                    };
                    return e.game && e.game_id && (n.stream.game = {
                        id: e.game_id,
                        name: e.game,
                        "Symbol(id)": t + ".stream.game",
                        __typename: "Game"
                    }), n;
                case i.b.Watching:
                    var r = {
                        type: i.a.Watching,
                        "Symbol(id)": t,
                        __typename: "Watching",
                        user: {
                            id: e.channel_id,
                            login: e.channel_login,
                            displayName: e.channel_display_name,
                            "Symbol(id)": t + ".user",
                            __typename: "User",
                            hosting: {
                                id: e.hosted_channel_id || null,
                                displayName: e.hosted_channel_display_name || null,
                                login: e.hosted_channel_login || null,
                                "Symbol(id)": t + ".user.hosting",
                                __typename: "User"
                            }
                        }
                    };
                    return r;
                default:
                    return null
            }
        };
        var i = n("Ex+h")
    },
    nEoF: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return i
        });
        var i, r = {
                TriHard: {
                    count: 196568036
                },
                Kappa: {
                    count: 192158118
                },
                "4Head": {
                    count: 155758710
                },
                PogChamp: {
                    count: 151485090
                },
                cmonBruh: {
                    count: 146352878
                },
                BibleThump: {
                    count: 56472964
                },
                WutFace: {
                    count: 45069031
                },
                Kreygasm: {
                    count: 41387580
                },
                DansGame: {
                    count: 38097659
                },
                hi5F: {
                    count: 34986404
                },
                SMOrc: {
                    count: 34734484
                },
                KappaPride: {
                    count: 34262839
                },
                VoHiYo: {
                    count: 27886434
                },
                SwiftRage: {
                    count: 24561900
                },
                ResidentSleeper: {
                    count: 24438298
                },
                EleGiggle: {
                    count: 19891526
                },
                FailFish: {
                    count: 19118343
                },
                NotLikeThis: {
                    count: 18802905
                },
                Keepo: {
                    count: 18351415
                },
                BabyRage: {
                    count: 18220906
                },
                MingLee: {
                    count: 18026207
                },
                pbfSSH: {
                    count: 16911241
                },
                forsenE: {
                    count: 14960299
                },
                HeyGuys: {
                    count: 14851569
                },
                ANELE: {
                    count: 14648986
                },
                PJSalt: {
                    count: 14438861
                }
            },
            a = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
        ! function(e) {
            e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
        }(i || (i = {}))
    },
    nFc2: function(e, t) {},
    nZeo: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getFullYear()
        }
    },
    nfOx: function(e, t, n) {
        var i = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, 1e3 * n)
        }
    },
    nist: function(e, t) {},
    nizW: function(e, t, n) {
        var i = n("WNGz"),
            r = 6e4,
            a = 864e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * r,
                c = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - c) / a)
        }
    },
    nk30: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                r = i(e),
                a = r.getDay(),
                o = 6 + (a < n ? -7 : 0) - (a - n);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + o), r
        }
    },
    oI0V: function(e, t) {},
    oNnY: function(e, t, n) {
        var i = n("zZbG"),
            r = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, i(e) + n)
        }
    },
    oke8: function(e, t, n) {
        var i = n("1rLR");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    orNa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
        }
    },
    "p+06": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_CurrentUser"
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
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
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
                end: 66
            }
        };
        n.loc.source = {
            body: "query TopNav_CurrentUser {\ncurrentUser {\nid\ncreatedAt\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    p2Aq: function(e, t, n) {
        e.exports = n.p + "assets/more_methods_2x-3b1c8bbdaabcd0fb7c8a25d33ef1bc97.png"
    },
    p6Rc: function(e, t) {},
    pDuT: function(e, t) {},
    pOYM: function(e, t) {},
    pe7V: function(e, t, n) {
        var i = n("8KV+");
        e.exports = function(e, t) {
            return i(new Date, e, t)
        }
    },
    puy8: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), t.a = r, t.c = function(e, t) {
            var n = parseInt(e, 10) % i.length;
            return r(i[n], t)
        };
        var i = [{
            id: "profile_image_001",
            urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
        }, {
            id: "profile_image_002",
            urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
        }, {
            id: "profile_image_003",
            urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
        }, {
            id: "profile_image_004",
            urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
        }, {
            id: "profile_image_005",
            urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
        }, {
            id: "profile_image_006",
            urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
        }, {
            id: "profile_image_007",
            urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
        }];

        function r(e, t) {
            var n = 70;
            return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
        }
    },
    qNYo: function(e, t, n) {
        var i = n("xA5w"),
            r = n("9Jn5"),
            a = n("NKE6"),
            o = n("MKc+");
        e.exports = function(e, t) {
            var n = i(e),
                s = i(t),
                c = a(n, s),
                l = Math.abs(r(n, s));
            return n = o(n, c * l), c * (l - (a(n, s) === -c))
        }
    },
    qPxx: function(e, t, n) {
        var i = n("LLTj");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    rBmI: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                r = n - n % 3;
            return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rCmJ: function(e, t, n) {
        "use strict";
        var i = n("zgdU");
        n.d(t, "a", function() {
            return i.a
        })
    },
    rM0q: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rO5X: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Bb5e"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                c = Math.abs(r(n, o));
            return n.setFullYear(n.getFullYear() - s * c), s * (c - (a(n, o) === -s))
        }
    },
    rZAm: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchGameResultCard_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "game"
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
                                    value: "name"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 115
            }
        };
        n.loc.source = {
            body: "query Search_SearchGameResultCard_Game($name: String!) {\ngame(name: $name) {\nid\nboxArtURL(width: 40 height: 55)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ryON: function(e, t, n) {
        e.exports = n.p + "assets/amazon_pay_1x-94c97f413ee6005ab1a198c77cbfdd6c.png"
    },
    sdTe: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    sq7i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 41
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    t2Wb: function(e, t) {},
    t6pj: function(e, t, n) {
        var i = n("YRFD"),
            r = n("xA5w"),
            a = n("25hp"),
            o = n("uyaC"),
            s = 1440,
            c = 43200,
            l = 525600;
        e.exports = function(e, t, n) {
            var u = n || {},
                d = i(e, t),
                p = u.locale,
                m = o.distanceInWords.localize;
            p && p.distanceInWords && p.distanceInWords.localize && (m = p.distanceInWords.localize);
            var f, g, h, v = {
                addSuffix: Boolean(u.addSuffix),
                comparison: d
            };
            d > 0 ? (f = r(e), g = r(t)) : (f = r(t), g = r(e));
            var y = Math[u.partialMethod ? String(u.partialMethod) : "floor"],
                b = a(g, f),
                _ = g.getTimezoneOffset() - f.getTimezoneOffset(),
                k = y(b / 60) - _;
            if ("s" === (h = u.unit ? String(u.unit) : k < 1 ? "s" : k < 60 ? "m" : k < s ? "h" : k < c ? "d" : k < l ? "M" : "Y")) return m("xSeconds", b, v);
            if ("m" === h) return m("xMinutes", k, v);
            if ("h" === h) return m("xHours", y(k / 60), v);
            if ("d" === h) return m("xDays", y(k / s), v);
            if ("M" === h) return m("xMonths", y(k / c), v);
            if ("Y" === h) return m("xYears", y(k / l), v);
            throw new Error("Unknown unit: " + h)
        }
    },
    t8zS: function(e, t, n) {
        var i = n("nk30");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    tTbW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tnNl: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("F8kA"),
            o = n("vH/s"),
            s = n("CSlQ"),
            c = n("2b/B"),
            l = n("Odds"),
            u = (n("Xorj"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(l._0, {
                        position: l._13.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "minimal-top-nav"
                    }, r.createElement(l._6, {
                        className: "minimal-top-nav__menu",
                        display: l.P.Flex,
                        alignItems: l.c.Stretch,
                        flexWrap: l.S.NoWrap,
                        fullHeight: !0,
                        justifyContent: l._5.Between
                    }, r.createElement(l._0, {
                        display: l.P.InlineFlex,
                        alignItems: l.c.Center,
                        flexShrink: 0
                    }, r.createElement(a.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: o.PageviewMedium.TopNav,
                                content: o.PageviewContent.Logo
                            }
                        },
                        className: "minimal-top-nav__home-link"
                    }, r.createElement(l._19, {
                        asset: l._20.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(c.a, {
                        darkModeEnabled: this.props.darkModeEnabled
                    }))))
                }, t = i.__decorate([Object(s.d)("MinimalTopNav", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component));
        n.d(t, "a", function() {
            return u
        })
    },
    "u/4p": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                r = i(e),
                a = r.getDay(),
                o = (a < n ? 7 : 0) + a - n;
            return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
        }
    },
    uTyw: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            var t, n, c, l, u, d = e.append,
                p = void 0 !== d && d,
                m = e.searchResults,
                f = e.currentGameResults,
                g = e.currentUserResults,
                h = e.currentCommunityResults,
                v = e.currentVideoResults,
                y = e.currentLiveResults;
            m.games && (t = {
                totalHits: m.games.totalHits,
                results: p && f ? f.results : []
            }, p && m.exhaustedHits && f && !m.games.totalHits && (t.totalHits = f.totalHits), t.results = t.results.concat(m.games.hits.map(function(e, t) {
                var n = i.o.intl.getLanguageCode();
                return {
                    title: n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name,
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: Object(a.c)(e.name),
                        state: {
                            content: o.PageviewContent.Game,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    popularity: e.popularity
                }
            })));
            if (m.videos) {
                var b = p && v ? v.results : [],
                    _ = m.videos.totalHits;
                p && m.exhaustedHits && v && !m.videos.totalHits && (_ = v.totalHits), l = function(e, t, n) {
                    return {
                        results: e.concat(t.hits.map(s)),
                        totalHits: t.totalHits || n
                    }
                }(b, m.videos, _)
            }
            m.users && (n = {
                totalHits: p && g ? g.totalHits : m.users.totalHits,
                results: p && g ? g.results : []
            }, p && m.exhaustedHits && g && !m.users.totalHits && (n.totalHits = g.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
                return {
                    login: e.login,
                    name: e.name,
                    thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: "/" + e.login,
                        state: {
                            content: o.PageviewContent.User,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    followers: e.followers
                }
            })));
            m.channels && ((u = {
                totalHits: p && y ? y.totalHits : m.channels.totalHits,
                results: p && y ? y.results : []
            }).results = u.results.concat(m.channels.hits.map(function(e, t) {
                return {
                    viewerCount: e.channel_count,
                    login: e.login,
                    name: e.name,
                    thumbnailAltText: e.status,
                    linkTo: {
                        pathname: "/" + e.login,
                        state: {
                            content: o.PageviewContent.Live,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    status: e.status
                }
            })));
            m.communities && (c = {
                totalHits: m.communities.totalHits,
                results: p && h ? h.results : []
            }, p && m.exhaustedHits && h && !m.communities.totalHits && (c.totalHits = h.totalHits), c.results = c.results.concat(m.communities.hits.map(function(e, t) {
                return {
                    name: e.name,
                    thumbnail: e.avatar_image_url,
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: "/communities/" + e.name,
                        state: {
                            content: o.PageviewContent.Community,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    viewerCount: e.viewers,
                    id: e.objectID
                }
            })));
            return {
                currentGameResults: t,
                currentUserResults: n,
                currentLiveResults: u,
                currentCommunityResults: c,
                currentVideoResults: l,
                exhaustedHits: m.exhaustedHits
            }
        }, t.a = s;
        var i = n("6sO2"),
            r = n("puy8"),
            a = n("NY9D"),
            o = n("vH/s");

        function s(e, t) {
            return {
                title: e.title,
                thumbnail: e.thumbnail,
                thumbnailAltText: e.title,
                linkTo: {
                    pathname: "/videos/" + e.objectID,
                    state: {
                        content: o.PageviewContent.Video,
                        content_index: t,
                        medium: o.PageviewMedium.NavSearch
                    }
                },
                login: e.broadcaster_login,
                name: e.broadcaster_name,
                createdAt: e.created_at,
                length: e.length,
                id: e.objectID
            }
        }
    },
    ukY1: function(e, t) {},
    uwZN: function(e, t, n) {
        var i = n("7yyf");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    uyaC: function(e, t, n) {
        var i = n("Ptqd"),
            r = n("jQas");
        e.exports = {
            distanceInWords: i(),
            format: r()
        }
    },
    "v+rJ": function(e, t) {},
    vBvW: function(e, t, n) {
        var i = n("mXYp");
        e.exports = function(e, t) {
            return i(Date.now(), e, t)
        }
    },
    ve2D: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 2 === i(e).getDay()
        }
    },
    "w/8h": function(e, t) {},
    w0LG: function(e, t) {},
    w4by: function(e, t, n) {
        var i = n("6Zhv"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * r)
        }
    },
    wAFH: function(e, t, n) {
        var i = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    wHbv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_View"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewedNotifications"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "notifications"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "unseenCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "lastSeenAt"
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
                end: 123
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_View {\nviewedNotifications {\nuser {\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wPo5: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setHours(r), n
        }
    },
    wajf: function(e, t, n) {
        var i = n("xA5w"),
            r = n("D6ie");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = r(n) - a;
            return n.setDate(n.getDate() - 7 * o), n
        }
    },
    wiYS: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, a = i(e).getTime();
            return t.forEach(function(e, t) {
                var o = i(e),
                    s = Math.abs(a - o.getTime());
                (void 0 === n || s < r) && (n = t, r = s)
            }), n
        }
    },
    wjhu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_CurrentUser"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "requestInfo"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wuJz: function(e, t, n) {
        e.exports = {
            addDays: n("Jvcu"),
            addHours: n("w4by"),
            addISOYears: n("oNnY"),
            addMilliseconds: n("6Zhv"),
            addMinutes: n("NSOL"),
            addMonths: n("3EIC"),
            addQuarters: n("1rLR"),
            addSeconds: n("nfOx"),
            addWeeks: n("7EGB"),
            addYears: n("4Z4o"),
            areRangesOverlapping: n("2lB6"),
            closestIndexTo: n("wiYS"),
            closestTo: n("Tv4R"),
            compareAsc: n("NKE6"),
            compareDesc: n("YRFD"),
            differenceInCalendarDays: n("nizW"),
            differenceInCalendarISOWeeks: n("0aH9"),
            differenceInCalendarISOYears: n("9Jn5"),
            differenceInCalendarMonths: n("orNa"),
            differenceInCalendarQuarters: n("Jtuq"),
            differenceInCalendarWeeks: n("Q2rx"),
            differenceInCalendarYears: n("Bb5e"),
            differenceInDays: n("gAt4"),
            differenceInHours: n("kjlQ"),
            differenceInISOYears: n("qNYo"),
            differenceInMilliseconds: n("G7No"),
            differenceInMinutes: n("3nPg"),
            differenceInMonths: n("GI7G"),
            differenceInQuarters: n("XFzU"),
            differenceInSeconds: n("25hp"),
            differenceInWeeks: n("6SO/"),
            differenceInYears: n("rO5X"),
            distanceInWords: n("mXYp"),
            distanceInWordsStrict: n("t6pj"),
            distanceInWordsToNow: n("vBvW"),
            eachDay: n("M9Ev"),
            endOfDay: n("MIQa"),
            endOfHour: n("bbdo"),
            endOfISOWeek: n("SZZR"),
            endOfISOYear: n("K7ZZ"),
            endOfMinute: n("LU20"),
            endOfMonth: n("xKy+"),
            endOfQuarter: n("zQFw"),
            endOfSecond: n("+sSA"),
            endOfToday: n("0LAu"),
            endOfTomorrow: n("HXCM"),
            endOfWeek: n("I7cV"),
            endOfYear: n("Epw6"),
            endOfYesterday: n("0YGC"),
            format: n("Eoz/"),
            getDate: n("3g9B"),
            getDay: n("Mbb9"),
            getDayOfYear: n("ymQ7"),
            getDaysInMonth: n("Mdww"),
            getDaysInYear: n("Javx"),
            getHours: n("8Gpr"),
            getISODay: n("AZvW"),
            getISOWeek: n("D6ie"),
            getISOWeeksInYear: n("fUo1"),
            getISOYear: n("zZbG"),
            getMilliseconds: n("024F"),
            getMinutes: n("JNsx"),
            getMonth: n("l85J"),
            getOverlappingDaysInRanges: n("8QR2"),
            getQuarter: n("lQzg"),
            getSeconds: n("eKpK"),
            getTime: n("cwv1"),
            getYear: n("nZeo"),
            isAfter: n("fK0I"),
            isBefore: n("gDPd"),
            isDate: n("607n"),
            isEqual: n("sdTe"),
            isFirstDayOfMonth: n("6udH"),
            isFriday: n("YPf8"),
            isFuture: n("6CZb"),
            isLastDayOfMonth: n("kDuD"),
            isLeapYear: n("b7g8"),
            isMonday: n("kkVd"),
            isPast: n("eCZG"),
            isSameDay: n("f4ga"),
            isSameHour: n("qPxx"),
            isSameISOWeek: n("Be26"),
            isSameISOYear: n("4LxA"),
            isSameMinute: n("Moxe"),
            isSameMonth: n("f+sD"),
            isSameQuarter: n("7yyf"),
            isSameSecond: n("5qwL"),
            isSameWeek: n("8KV+"),
            isSameYear: n("Qxz6"),
            isSaturday: n("6axH"),
            isSunday: n("ZUMa"),
            isThisHour: n("z3wv"),
            isThisISOWeek: n("A2zO"),
            isThisISOYear: n("hUHO"),
            isThisMinute: n("Qbo9"),
            isThisMonth: n("cONr"),
            isThisQuarter: n("uwZN"),
            isThisSecond: n("hj5Y"),
            isThisWeek: n("pe7V"),
            isThisYear: n("kRs6"),
            isThursday: n("yu3m"),
            isToday: n("GvNH"),
            isTomorrow: n("0oN5"),
            isTuesday: n("ve2D"),
            isValid: n("dH3X"),
            isWednesday: n("e/EH"),
            isWeekend: n("4OFc"),
            isWithinRange: n("4zIR"),
            isYesterday: n("1gtq"),
            lastDayOfISOWeek: n("t8zS"),
            lastDayOfISOYear: n("hico"),
            lastDayOfMonth: n("Akl5"),
            lastDayOfQuarter: n("T/Ln"),
            lastDayOfWeek: n("nk30"),
            lastDayOfYear: n("xLg3"),
            max: n("11Bn"),
            min: n("aHtT"),
            parse: n("xA5w"),
            setDate: n("/dIK"),
            setDay: n("SHOI"),
            setDayOfYear: n("CVNg"),
            setHours: n("wPo5"),
            setISODay: n("YPjl"),
            setISOWeek: n("wajf"),
            setISOYear: n("Uu+E"),
            setMilliseconds: n("+/J2"),
            setMinutes: n("danj"),
            setMonth: n("balU"),
            setQuarter: n("jy2q"),
            setSeconds: n("ToRI"),
            setYear: n("a7Cs"),
            startOfDay: n("WNGz"),
            startOfHour: n("LLTj"),
            startOfISOWeek: n("3znZ"),
            startOfISOYear: n("iRXW"),
            startOfMinute: n("M5Oo"),
            startOfMonth: n("7Xwz"),
            startOfQuarter: n("rBmI"),
            startOfSecond: n("VaeB"),
            startOfToday: n("1udo"),
            startOfTomorrow: n("gUEJ"),
            startOfWeek: n("u/4p"),
            startOfYear: n("JURy"),
            startOfYesterday: n("mSFb"),
            subDays: n("cA+x"),
            subHours: n("fo7E"),
            subISOYears: n("MKc+"),
            subMilliseconds: n("wAFH"),
            subMinutes: n("kIFi"),
            subMonths: n("7Swd"),
            subQuarters: n("oke8"),
            subSeconds: n("9r5b"),
            subWeeks: n("cw9o"),
            subYears: n("0UyA")
        }
    },
    xA5w: function(e, t, n) {
        var i = n("607n"),
            r = 36e5,
            a = 6e4,
            o = 2,
            s = /[T ]/,
            c = /:/,
            l = /^(\d{2})$/,
            u = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            d = /^(\d{4})/,
            p = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            m = /^-(\d{2})$/,
            f = /^-?(\d{3})$/,
            g = /^-?(\d{2})-?(\d{2})$/,
            h = /^-?W(\d{2})$/,
            v = /^-?W(\d{2})-?(\d{1})$/,
            y = /^(\d{2}([.,]\d*)?)$/,
            b = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            _ = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            k = /([Z+-].*)$/,
            S = /^(Z)$/,
            N = /^([+-])(\d{2})$/,
            w = /^([+-])(\d{2}):?(\d{2})$/;

        function E(e, t, n) {
            t = t || 0, n = n || 0;
            var i = new Date(0);
            i.setUTCFullYear(e, 0, 4);
            var r = 7 * t + n + 1 - (i.getUTCDay() || 7);
            return i.setUTCDate(i.getUTCDate() + r), i
        }
        e.exports = function(e, t) {
            if (i(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? o : Number(n);
            var O = function(e) {
                    var t, n = {},
                        i = e.split(s);
                    if (c.test(i[0]) ? (n.date = null, t = i[0]) : (n.date = i[0], t = i[1]), t) {
                        var r = k.exec(t);
                        r ? (n.time = t.replace(r[1], ""), n.timezone = r[1]) : n.time = t
                    }
                    return n
                }(e),
                C = function(e, t) {
                    var n, i = u[t],
                        r = p[t];
                    if (n = d.exec(e) || r.exec(e)) {
                        var a = n[1];
                        return {
                            year: parseInt(a, 10),
                            restDateString: e.slice(a.length)
                        }
                    }
                    if (n = l.exec(e) || i.exec(e)) {
                        var o = n[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(O.date, n),
                x = C.year,
                T = function(e, t) {
                    if (null === t) return null;
                    var n, i, r, a;
                    if (0 === e.length) return (i = new Date(0)).setUTCFullYear(t), i;
                    if (n = m.exec(e)) return i = new Date(0), r = parseInt(n[1], 10) - 1, i.setUTCFullYear(t, r), i;
                    if (n = f.exec(e)) {
                        i = new Date(0);
                        var o = parseInt(n[1], 10);
                        return i.setUTCFullYear(t, 0, o), i
                    }
                    if (n = g.exec(e)) {
                        i = new Date(0), r = parseInt(n[1], 10) - 1;
                        var s = parseInt(n[2], 10);
                        return i.setUTCFullYear(t, r, s), i
                    }
                    if (n = h.exec(e)) return a = parseInt(n[1], 10) - 1, E(t, a);
                    if (n = v.exec(e)) {
                        a = parseInt(n[1], 10) - 1;
                        var c = parseInt(n[2], 10) - 1;
                        return E(t, a, c)
                    }
                    return null
                }(C.restDateString, x);
            if (T) {
                var P, D = T.getTime(),
                    F = 0;
                return O.time && (F = function(e) {
                    var t, n, i;
                    if (t = y.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * r;
                    if (t = b.exec(e)) return n = parseInt(t[1], 10), i = parseFloat(t[2].replace(",", ".")), n % 24 * r + i * a;
                    if (t = _.exec(e)) {
                        n = parseInt(t[1], 10), i = parseInt(t[2], 10);
                        var o = parseFloat(t[3].replace(",", "."));
                        return n % 24 * r + i * a + 1e3 * o
                    }
                    return null
                }(O.time)), O.timezone ? (I = O.timezone, P = (R = S.exec(I)) ? 0 : (R = N.exec(I)) ? (A = 60 * parseInt(R[2], 10), "+" === R[1] ? -A : A) : (R = w.exec(I)) ? (A = 60 * parseInt(R[2], 10) + parseInt(R[3], 10), "+" === R[1] ? -A : A) : 0) : (P = new Date(D + F).getTimezoneOffset(), P = new Date(D + F + P * a).getTimezoneOffset()), new Date(D + F + P * a)
            }
            var I, R, A;
            return new Date(e)
        }
    },
    "xKy+": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    xrVp: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = "";
            switch (t) {
                case o.a.TypedCommand:
                    n = "typed_command";
                    break;
                case o.a.UserMenu:
                    n = "user_menu";
                    break;
                default:
                    n = "user_menu"
            }
            var a = "";
            switch (e) {
                case r.a.Dark:
                    a = "dark";
                    break;
                case r.a.Light:
                    a = "light";
                    break;
                default:
                    a = "light"
            }
            i.n.track(s.SpadeEventType.ThemeChange, {
                source: n,
                mode: a
            })
        }, t.a = function(e) {
            switch (e) {
                case a.a.Archive:
                    return s.SpadeVideoBroadcastType.Archive;
                case a.a.Highlight:
                    return s.SpadeVideoBroadcastType.Highlight;
                case a.a.Upload:
                    return s.SpadeVideoBroadcastType.Upload;
                case a.a.WatchParty:
                    return s.SpadeVideoBroadcastType.WatchParty;
                case a.a.PastPremiere:
                    return s.SpadeVideoBroadcastType.PastPremiere;
                case a.a.PremiereUpload:
                    return s.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    var t = e;
                    return t
            }
        };
        var i = n("6sO2"),
            r = n("NXs7"),
            a = n("6WAQ"),
            o = n("NikC"),
            s = n("vH/s")
    },
    "y+bN": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchLiveResultCard_UserStream"
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
                                            value: "previewImageURL"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "156"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "88"
                                            }
                                        }],
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
                end: 145
            }
        };
        n.loc.source = {
            body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\npreviewImageURL(width: 156 height: 88)\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ymQ7: function(e, t, n) {
        var i = n("xA5w"),
            r = n("JURy"),
            a = n("nizW");
        e.exports = function(e) {
            var t = i(e);
            return a(t, r(t)) + 1
        }
    },
    yu3m: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 4 === i(e).getDay()
        }
    },
    z3wv: function(e, t, n) {
        var i = n("qPxx");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    zQFw: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var i = n("xA5w"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear(),
                a = new Date(0);
            a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var o = r(a),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var c = r(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
        }
    },
    zgdU: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        t.container = e
                    }, t.handleGlobalClick = function(e) {
                        var n = e.target;
                        t.isParentOf(n) || t.props.onClickOut(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.onClickOut, i.__rest(e, ["onClickOut"]));
                    return r.createElement("div", i.__assign({}, t, {
                        ref: this.setContainerRef
                    }), this.props.children)
                }, t.prototype.isParentOf = function(e) {
                    for (var t = e; t;) {
                        if (t === this.container) return !0;
                        t = t.parentElement
                    }
                    return !1
                }, t
            }(r.Component))
    }
});
//# sourceMappingURL=pages.subs-checkout.components.subs-checkout-page-c8ef93ce1c3d08772baa6c02cf2514c9.js.map