webpackJsonp([48], {
    "+ChX": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCurator"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "broadcaster"
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
                                            value: "isPartner"
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
                end: 125
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\nlogin\nisPartner\nstream {\nid\n}\n}\ngame {\nid\nname\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return a
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        });
        var i = "subscribe_to_channel",
            r = "turbo",
            a = "visit_url",
            o = "none",
            s = "broadcaster"
    },
    "+YN9": function(e, t) {},
    "+Znq": function(e, t, n) {
        "use strict";
        var i = n("jetF");
        n.d(t, "a", function() {
            return i.a
        })
    },
    "+g5R": function(e, t) {},
    "+p4h": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeBalloon_User"
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
                                    value: "displayName"
                                },
                                arguments: [],
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
                                            value: "price"
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
                                            value: "emoteSetID"
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
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftPromotion"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
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
                                                    value: "platform"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "renewsAt"
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
                                                    value: "paidUpgrade"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
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
                                                            value: "startsAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
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
                                    value: "login"
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
                end: 554
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeBalloon_User($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nsubscriptionProducts {\nid\nprice\nurl\nemoteSetID\ndisplayName\nname\nemotes {\nid\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nlogin\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "/3Lr": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "a", function() {
            return c
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
                BroadcastSettingsUpdate: "broadcast-settings-update",
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
            l = {
                BitsPinEvent: "bits-pin-event",
                BitsLeaderboardEvent: "bits-leaderboard-event",
                ChannelStreamDown: "stream-down",
                ChannelStreamUp: "stream-up",
                BroadcastSettingsUpdate: "broadcast_settings_update",
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
            c = {
                Accepted: "accepted",
                Requested: "requested",
                Removed: "removed",
                SelfAccepted: "self_accepted",
                SelfRemoved: "self_removed",
                SelfRequested: "self_requested"
            };
        ! function(e) {
            e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.Ban = "ban", e.Clear = "clear", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
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
    "0B06": function(e, t, n) {
        "use strict";
        t.b = function(e) {
            if (!e) return r();
            try {
                var t = new Date(e.replace(/(Z)/i, "")),
                    n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
                return Object(i.g)(n)
            } catch (e) {
                return r()
            }
        }, t.a = function(e) {
            if (e <= 0) return "00:00";
            var t = Math.floor(e / 60).toString(),
                n = Math.floor(e - 60 * Number(t)).toString();
            1 === t.length && (t = "0" + t);
            1 === n.length && (n = "0" + n);
            return t + ":" + n
        };
        var i = n("6sO2");

        function r() {
            return Object(i.d)("N/A", "ClipsRelativeTimeHelper")
        }
    },
    "0CQq": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewCount"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "viewCount"
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
                end: 71
            }
        };
        n.loc.source = {
            body: "query ClipsViewCount($slug: ID!) {\nclip(slug: $slug) {\nid\nviewCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Kuu": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsTitle"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 63
            }
        };
        n.loc.source = {
            body: "query ClipsTitle($slug: ID!) {\nclip(slug: $slug) {\nid\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0QL4": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCurator"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "curator"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "champBadge"
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
                end: 110
            }
        };
        n.loc.source = {
            body: "query ClipsCurator($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\ndisplayName\nlogin\n}\nchampBadge {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0Ssf": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("vH/s"),
            l = n("CSlQ"),
            c = n("XOun"),
            d = n("kJau"),
            u = n("Odds"),
            p = n("0QL4"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.clip;
                    if (!e || !e.curator || this.props.data.loading) return r.createElement(u._8, null, this.renderPlaceholders());
                    var t = Object(d.b)(e.curator.login, {
                        tt_medium: "clips_web",
                        tt_content: "curator_name"
                    });
                    return r.createElement(u._8, {
                        ellipsis: this.props.ellipsis
                    }, e.champBadge && e.champBadge.id && r.createElement(u._8, {
                        margin: {
                            right: .5
                        },
                        display: u.R.InlineBlock
                    }, r.createElement(c.a, {
                        pageType: s.PageviewLocation.ClipsViewing
                    })), r.createElement(u._2, {
                        display: u.R.Inline
                    }, r.createElement(u.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : u.V.Size5
                    }, Object(a.d)("Clipped by {curatorName}", {
                        curatorName: r.createElement("a", {
                            href: t,
                            target: "_blank"
                        }, e.curator.displayName)
                    }, "ClipsCurator"))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.data.clip.curator && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return r.createElement(u.e, {
                        type: u.j.FadeIn,
                        duration: u.g.Long,
                        delay: u.f.Medium,
                        enabled: !0
                    }, r.createElement(u.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : u.V.Size5
                    }, r.createElement(u._14, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = i.__decorate([Object(l.d)("ClipsCurator"), Object(o.a)(p)], t)
            }(r.Component);
        n.d(t, "a", function() {
            return m
        })
    },
    "0vB1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n("TToO"),
            a = n("KSGD"),
            o = n("GiK3"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("j7/Y"),
            d = n("w9tK"),
            u = n("zcHb"),
            p = n("vH/s"),
            m = n("CSlQ"),
            h = n("fc0G"),
            g = n("YV3U"),
            b = n("kJau"),
            f = n("oMs9");
        ! function(e) {
            e.top = "top", e.similar = "similar", e.game = "game", e.broadcaster = "broadcaster", e.curator = "curator"
        }(i || (i = {}));
        var v = [i.similar, i.broadcaster, i.game, i.top];
        var k = n("Odds"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        imageFailed: !1
                    }, t.onImageError = function() {
                        t.setState({
                            imageFailed: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.recommendedClip,
                        t = e.broadcaster && e.game && o.createElement(k.Q, {
                            color: k.K.Alt2,
                            ellipsis: !0
                        }, Object(s.d)("{broadcasterDisplayName} playing {gameDisplayName}", {
                            broadcasterDisplayName: o.createElement(k.O, {
                                type: k.P.Inherit,
                                to: Object(b.c)(e.broadcaster.login, {
                                    tt_medium: "clips",
                                    tt_content: "player_channel_name"
                                })
                            }, e.broadcaster.displayName),
                            gameDisplayName: o.createElement(k.O, {
                                type: k.P.Inherit,
                                to: Object(b.d)(e.game.name, {
                                    tt_medium: "clips",
                                    tt_content: "player_game"
                                })
                            }, e.game.displayName)
                        }, "ClipsRecommendations")),
                        n = "/" + e.slug + "?tt_medium=clips&tt_content=recommendation";
                    return o.createElement(k._8, {
                        key: e.slug,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k.C, null, o.createElement(k.O, {
                        to: n,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(k._35, {
                        position: k._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: .5,
                        margin: .5,
                        background: k.n.Overlay,
                        color: k.K.Overlay,
                        elevation: 2,
                        zIndex: k._62.Default,
                        display: k.R.Flex,
                        justifyContent: k._7.Around,
                        alignItems: k.c.Center
                    }, o.createElement(k._8, {
                        display: k.R.Flex,
                        margin: {
                            right: .5
                        }
                    }, o.createElement(k._24, {
                        asset: k._25.GlyphViews
                    })), Object(s.d)("{views} views", {
                        views: Object(s.e)(e.viewCount)
                    }, "ClipsRecommendations"))), o.createElement(k._35, {
                        background: k.n.Alt2
                    }, o.createElement(k.e, {
                        type: k.j.FadeIn,
                        duration: k.g.ExtraLong,
                        enabled: !0
                    }, o.createElement(k.O, {
                        to: n,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(k.E, {
                        src: this.getImageForClip(),
                        alt: Object(s.d)("Clip Thumbnail", "ClipsRecommendations"),
                        onError: this.onImageError
                    })))), o.createElement(k.D, null, o.createElement(k._8, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(k.O, {
                        to: n,
                        onClick: this.props.trackSelectionClickHandler,
                        "data-test-selector": "clips-recommendation-view-rec-link"
                    }, o.createElement(k.Q, {
                        ellipsis: !0,
                        type: k._49.H3,
                        fontSize: k.V.Size5
                    }, e.title)), t))))
                }, t.prototype.getImageForClip = function() {
                    return this.state.imageFailed ? "https://clips-media-assets.twitch.tv/img/clips-404-320x180.png" : this.props.recommendedClip.thumbnailURL
                }, t
            }(o.Component),
            S = n("+ChX");

        function _(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function() {
                var i, a, o, l, c, d, u, p, m, h, g, b, f, v, k, y, _, C;
                return r.__generator(this, function(T) {
                    switch (T.label) {
                        case 0:
                            i = null, a = null, o = null, l = null, c = null, d = null, t || s.j.error(new Error, "Missing `slug` in trackClipsEvent", {
                                slug: t
                            }), T.label = 1;
                        case 1:
                            return T.trys.push([1, 3, , 4]), [4, s.o.apollo.client.query({
                                query: S,
                                variables: {
                                    slug: t
                                }
                            })];
                        case 2:
                            return u = T.sent(), i = !!(u.data.clip.broadcaster && u.data.clip.broadcaster.stream && u.data.clip.broadcaster.stream.id), a = u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, o = u.data.clip.broadcaster ? u.data.clip.broadcaster.login : null, l = u.data.clip.game ? u.data.clip.game.name : null, c = u.data.clip.broadcaster ? u.data.clip.broadcaster.isPartner : null, d = u.data.clip.id, [3, 4];
                        case 3:
                            return p = T.sent(), s.j.error(p, "Failed to make query for Clip info for tracking event.", {
                                slug: t
                            }), [3, 4];
                        case 4:
                            return m = null, h = null, g = !1, (b = s.o.store.getState().session.user) && (h = b.id, m = b.login, g = !0), f = null, v = null, k = null, y = null, (_ = s.n.getLastPageview()) && (f = _.medium || null, v = _.content || null, k = _.tab_session_id || null, y = _.location || null), C = r.__assign({
                                game: l,
                                live: i,
                                channel: a,
                                channel_id: o,
                                logged_in: g,
                                login: m,
                                user_id: h,
                                tt_content: v,
                                tt_medium: f,
                                partner: c,
                                vod_id: d,
                                vod_type: "clip",
                                tab_session_id: k,
                                location: y,
                                play_session_id: "TODO"
                            }, n), s.n.track(e, C), [2]
                    }
                })
            })
        }

        function C(e, t) {
            return {
                source_channel: e.broadcaster ? e.broadcaster.login : null,
                source_game: e.game ? e.game.name : null,
                source_vod_id: e.video ? e.video.id : null,
                source_item_type: "clip",
                item_type: "clip",
                content: function(e) {
                    switch (e) {
                        case i.top:
                            return "popular_clips";
                        case i.game:
                            return "game_popular_clips";
                        case i.broadcaster:
                            return "channel_popular_clips";
                        case i.similar:
                            return "similar_popular_clips";
                        default:
                            return null
                    }
                }(t),
                carousel_content: "similar_clips"
            }
        }

        function T(e, t, n, i) {
            _(p.SpadeEventType.ItemSectionLoad, e.slug, r.__assign({}, C(e, i), {
                num_recs_visible: n.length,
                rendered_item_count: n.map(function(e) {
                    return e.id
                }),
                rendered_item_list: n.map(function(e) {
                    return e.id
                }),
                rendered_items_types: n.map(function() {
                    return "clip"
                }),
                rendered_items_viewcounts: n.map(function(e) {
                    return e.viewCount
                }),
                section_index: t
            }))
        }
        var E = n("tGx1");

        function O(e) {
            return o.createElement(k._8, {
                key: e
            }, o.createElement(k._8, {
                position: k._15.Relative
            }, o.createElement(k.k, {
                ratio: k.l.Aspect16x9
            }, o.createElement(k._14, null)), o.createElement(k._8, {
                position: k._15.Absolute,
                attachTop: !0,
                attachRight: !0,
                margin: .5
            }, o.createElement(k._14, {
                height: 28,
                width: 100
            }))), o.createElement(k._35, {
                margin: {
                    top: .5
                },
                fontSize: k.V.Size8
            }, o.createElement(k._14, {
                lineCount: 1,
                width: 180
            }), o.createElement(k._14, {
                lineCount: 1,
                width: 120
            })))
        }

        function N(e) {
            return o.createElement(k._8, {
                margin: {
                    bottom: 3
                },
                key: e
            }, o.createElement(k.Q, {
                fontSize: k.V.Size5
            }, o.createElement(k._14, {
                lineCount: 1,
                width: 100
            })), o.createElement(k._8, {
                margin: {
                    top: 2
                }
            }, o.createElement(k.e, {
                type: k.j.FadeIn,
                duration: k.g.Medium,
                enabled: !0
            }, o.createElement(k._55, {
                childWidth: k._56.Medium,
                gutterSize: k._57.Small
            }, [1, 2, 3, 4].map(O)))))
        }
        var w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.trackedLoad = !1, t.renderRow = function(e, n) {
                        if (t.props.data.clip && t.props.data.clip.relatedClips) {
                            var a = t.props.data.clip.relatedClips[e];
                            return o.createElement("div", {
                                key: e
                            }, o.createElement(k._8, {
                                padding: {
                                    y: 2
                                }
                            }, o.createElement(k.Q, {
                                fontSize: k.V.Size4
                            }, function(e, t) {
                                if (t.data.clip) switch (e) {
                                    case i.top:
                                        return Object(s.d)("Popular Clips", "ClipsRecommendations");
                                    case i.similar:
                                        return Object(s.d)("Similar Clips", "ClipsRecommendations");
                                    case i.game:
                                        return t.data.clip.game && Object(s.d)("Popular Clips from {game}", {
                                            game: t.data.clip.game.displayName
                                        }, "ClipsRecommendations");
                                    case i.broadcaster:
                                        return t.data.clip.broadcaster && Object(s.d)("Popular Clips from {channel}", {
                                            channel: t.data.clip.broadcaster.displayName
                                        }, "ClipsRecommendations");
                                    default:
                                        return null
                                }
                            }(e, t.props))), o.createElement(k._55, {
                                childWidth: k._56.Medium,
                                gutterSize: k._57.Small
                            }, a.map(function(i, a) {
                                return o.createElement(y, {
                                    key: i.id,
                                    recommendedClip: i,
                                    trackSelectionClickHandler: function() {
                                        ! function(e, t, n, i, a) {
                                            _(p.SpadeEventType.ItemSectionClick, e.slug, r.__assign({}, C(e, a), {
                                                item_id: t.slug,
                                                item_viewcount: t.viewCount,
                                                section_index: n,
                                                itemIndex: i
                                            }))
                                        }(t.props.data.clip, i, n, a, e)
                                    }
                                })
                            })))
                        }
                    }, t.trackSelectionLoad = function(e) {
                        if (!t.trackedLoad && e.data.clip && e.data.clip.relatedClips) {
                            t.props.latencyTracking.reportInteractive(), t.trackedLoad = !0;
                            for (var n = t.getValidCategories(e), i = 0; i < n.length; i++) {
                                var r = n[i],
                                    a = e.data.clip.relatedClips[r];
                                a && T(e.data.clip, i, a, r)
                            }
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackSelectionLoad(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.trackSelectionLoad(e)
                }, t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(k._8, {
                        padding: {
                            top: 1
                        }
                    }, this.getValidCategories(this.props).map(this.renderRow)) : o.createElement(k._8, null, this.renderPlaceholders())
                }, t.prototype.getValidCategories = function(e) {
                    var t = e.data.clip && e.data.clip.relatedClips;
                    return t ? v.filter(function(e) {
                        return 4 === t[e].length
                    }) : []
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k._8, {
                        margin: {
                            top: 3
                        }
                    }, [1, 2, 3].map(N))
                }, t
            }(o.Component),
            P = Object(m.d)("ClipsRecommendations")(Object(l.a)(E)(w)),
            R = n("ynxC"),
            I = n("RH2O"),
            D = n("Aj/L"),
            F = n("zCIC"),
            x = n("0B06"),
            j = n("0Ssf"),
            M = n("nU46"),
            L = n("dPTw"),
            U = n("QIXk"),
            A = n("E5Ip"),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFinishedEditing = function() {
                        t.props.editTitleToggle()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.clip ? o.createElement(k._8, {
                        fullWidth: !0,
                        className: "clips-view-title-edit"
                    }, o.createElement(U.a, {
                        clipId: this.props.data.clip.id,
                        clipSlug: this.props.slug,
                        clipTitle: this.props.data.clip.title,
                        clipBroadcasterId: this.props.data.clip.broadcaster ? Number(this.props.data.clip.broadcaster.id) : 0,
                        location: p.PageviewLocation.ClipsViewing,
                        onCancel: this.onFinishedEditing,
                        onSuccess: this.onFinishedEditing
                    })) : o.createElement(k._8, null)
                }, t = r.__decorate([Object(l.a)(A)], t)
            }(o.Component),
            V = n("mmqR"),
            W = (n("NjaO"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isChatAutoScrolling: !0,
                        isChatContentCollapsed: !1,
                        isEditingTitle: !1,
                        shouldRenderChat: !0
                    }, t.scrollPosition = 0, t.renderClipTitle = function() {
                        var e = t.props.data.clip,
                            n = e && e.curator && e.curator.login,
                            i = t.props.slug;
                        if (t.state.isEditingTitle) return o.createElement(B, {
                            slug: i,
                            editTitleToggle: t.editTitleToggle
                        });
                        var r = o.createElement(k._8, {
                            alignItems: k.c.Center,
                            display: k.R.Flex,
                            flexDirection: k.T.Row,
                            justifyContent: k._7.Start,
                            margin: {
                                y: 1
                            },
                            ellipsis: !0
                        }, t.renderCreatedAt(), o.createElement(j.a, {
                            slug: i,
                            ellipsis: !0
                        }));
                        return t.props.userLogin !== n ? o.createElement(k._8, null, o.createElement(M.a, {
                            slug: i
                        }), r) : o.createElement(k._8, null, o.createElement("div", {
                            className: "clips-chat__edit",
                            onClick: t.editTitleToggle,
                            "data-test-selector": "clips-chat-card-edit"
                        }, o.createElement(M.a, {
                            slug: i
                        }), o.createElement(k._24, {
                            asset: k._25.Edit
                        })), r)
                    }, t.setChatContentRef = function(e) {
                        t.chatContentRef = e
                    }, t.setScrollableAreaEl = function(e) {
                        t.scrollableAreaEl = e
                    }, t.scrollChatToBottom = function() {
                        t.scrollableAreaEl && (t.scrollableAreaEl.scrollTop = t.scrollableAreaEl.scrollHeight)
                    }, t.moreChatClick = function() {
                        t.setState({
                            isChatAutoScrolling: !0
                        }), t.scrollChatToBottom()
                    }, t.autoScrollChatToBottom = function() {
                        t.state.isChatAutoScrolling && t.scrollChatToBottom()
                    }, t.editTitleToggle = function() {
                        t.setState(function(e) {
                            return {
                                isEditingTitle: !e.isEditingTitle,
                                isChatAutoScrolling: !1
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.currentTime,
                        n = t && t > 1,
                        i = e.slug !== this.props.slug,
                        r = {};
                    this.scrollableAreaEl && this.state.shouldRenderChat && (!n || i) ? (this.scrollPosition = 0, this.scrollableAreaEl.scrollTop = 0, r = {
                        isChatAutoScrolling: !this.state.isEditingTitle,
                        isChatContentCollapsed: !1,
                        shouldRenderChat: !1
                    }) : !this.state.shouldRenderChat && n && (r = {
                        shouldRenderChat: !0
                    }), i && (r.isEditingTitle = !1), 0 !== Object.keys(r).length && this.setState(r)
                }, t.prototype.componentDidMount = function() {
                    this.addScrollableAreaEventListener()
                }, t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(k._8, {
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        position: k._15.Relative,
                        flexGrow: 1
                    }, o.createElement(k._8, {
                        position: k._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, this.state.isChatContentCollapsed && o.createElement(te, {
                        slug: e
                    }), o.createElement(F.b, {
                        className: "clips-chat",
                        contentClassName: "clips-chat__content",
                        contentRef: this.setScrollableAreaEl,
                        suppressScrollX: !0
                    }, o.createElement(k._8, {
                        padding: {
                            x: 1
                        },
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        fullWidth: !0
                    }, o.createElement(k._8, {
                        className: "clips-chat-info",
                        flexShrink: 1,
                        flexGrow: 1,
                        display: k.R.Flex,
                        alignItems: k.c.Start,
                        justifyContent: k._7.Center,
                        flexDirection: k.T.Column,
                        margin: {
                            top: 1
                        },
                        breakpointLarge: {
                            margin: {
                                y: 2
                            }
                        },
                        refDelegate: this.setChatContentRef
                    }, o.createElement(L.a, {
                        slug: e
                    }), this.renderClipTitle()), o.createElement(ee, {
                        autoScrollChatToBottom: this.autoScrollChatToBottom,
                        videoOffsetSeconds: this.props.data.clip ? this.props.data.clip.videoOffsetSeconds : null,
                        slug: e,
                        shouldRenderChat: this.state.shouldRenderChat,
                        currentTime: this.props.currentTime
                    }), this.renderMoreChatButton()))))
                }, t.prototype.renderMoreChatButton = function() {
                    return !this.props.data.clip || this.props.data.clip && !this.props.data.clip.video || this.state.isChatAutoScrolling ? null : o.createElement(k._8, {
                        alignItems: k.c.Center,
                        attachBottom: !0,
                        attachLeft: !0,
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        position: k._15.Absolute,
                        fullWidth: !0
                    }, o.createElement(k.v, {
                        size: k.z.Small,
                        onClick: this.moreChatClick
                    }, Object(s.d)("MORE CHAT ↓", "ClipsChatCard")))
                }, t.prototype.addScrollableAreaEventListener = function() {
                    var e = this;
                    this.scrollableAreaEl && this.scrollableAreaEl.addEventListener("scroll", function() {
                        var t = {},
                            n = e.scrollableAreaEl;
                        if (n) {
                            e.scrollPosition > n.scrollTop ? t.isChatAutoScrolling = !1 : e.scrollPosition < n.scrollTop && n.scrollHeight === n.scrollTop + n.clientHeight && (t.isChatAutoScrolling = !0), e.scrollPosition = n.scrollTop;
                            var i = e.isChatContentCollapsed;
                            void 0 !== i && (t.isChatContentCollapsed = i), e.setState(t)
                        }
                    })
                }, t.prototype.renderCreatedAt = function() {
                    var e = this.props.data.clip;
                    return !e || this.props.data.loading ? null : o.createElement(k._35, {
                        display: k.R.Flex,
                        fontSize: k.V.Size5
                    }, o.createElement(k.Q, {
                        type: k._49.Span
                    }, Object(x.b)(e.createdAt)), o.createElement(k._8, {
                        margin: {
                            x: .5
                        }
                    }, "•"))
                }, Object.defineProperty(t.prototype, "isChatContentCollapsed", {
                    get: function() {
                        if (this.chatContentRef && this.scrollableAreaEl) {
                            var e = this.chatContentRef.getBoundingClientRect().top,
                                t = this.scrollableAreaEl.getBoundingClientRect().top,
                                n = void 0;
                            return e < t && this.percentScrolled(this.scrollableAreaEl) > .25 && !this.state.isChatContentCollapsed ? n = !0 : e >= t && this.percentScrolled(this.scrollableAreaEl) <= .25 && this.state.isChatContentCollapsed && (n = !1), n
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.percentScrolled = function(e) {
                    return e.scrollTop / (e.scrollHeight - e.clientHeight)
                }, t = r.__decorate([Object(l.a)(V), Object(m.d)("ClipsChatCard", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component));
        var G = Object(I.b)(function(e) {
                var t = Object(D.c)(e);
                return {
                    userLogin: t && t.login
                }
            })(W),
            z = n("3T7g"),
            H = n("+V/3"),
            q = n("8RKZ"),
            Q = (n("dJGa"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.node,
                        t = e.message.userBadges || [],
                        n = e.commenter,
                        i = n.chatColor,
                        r = n.displayName,
                        a = n.login;
                    return o.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(k.e, {
                        type: k.j.SlideInBottom,
                        duration: k.g.Short,
                        enabled: !0
                    }, this.renderUserBadges(t.filter(function(e) {
                        return !!e
                    })), this.renderUserLink({
                        chatColor: i,
                        displayName: r,
                        login: a
                    }), o.createElement(k._8, {
                        display: k.R.InlineBlock,
                        margin: {
                            right: .5
                        }
                    }, ":"), this.renderFragments(e.message.fragments)))
                }, t.prototype.renderUserBadges = function(e) {
                    var t = this.props.video && this.props.video.owner.broadcastBadges.filter(function(e) {
                        return e.clickAction === H.c
                    }) || [];
                    return this.mergeSubscriberBadgeUrls(e, t).map(this.renderUserBadge)
                }, t.prototype.renderUserBadge = function(e, t) {
                    return o.createElement(z.a, {
                        badge: e,
                        key: t
                    })
                }, t.prototype.mergeSubscriberBadgeUrls = function(e, t) {
                    var n = this;
                    return e.map(function(e) {
                        var i = n.props.channelName,
                            r = e.clickAction === H.c,
                            a = t.filter(function(t) {
                                return t.version === e.version
                            })[0];
                        if (r && a) {
                            var o = a.image1x,
                                s = a.image2x,
                                l = a.image4x;
                            return Object.assign({}, e, {
                                channelName: i,
                                image1x: o,
                                image2x: s,
                                image4x: l
                            })
                        }
                        return Object.assign({}, e, {
                            channelName: i
                        })
                    })
                }, t.prototype.renderUserLink = function(e) {
                    var t = e.chatColor,
                        n = e.displayName,
                        i = e.login;
                    return o.createElement("a", {
                        href: Object(b.c)(i),
                        style: {
                            color: t
                        }
                    }, o.createElement(k.Q, {
                        type: k._49.Span,
                        fontSize: k.V.Size5,
                        bold: !0
                    }, n))
                }, t.prototype.renderFragments = function(e) {
                    var t = this;
                    return e.map(function(e, n) {
                        var i = e.emote,
                            r = e.text;
                        return o.createElement(k._8, {
                            display: k.R.Inline,
                            key: n
                        }, i ? t.renderFragmentEmote(i, r) : t.renderFragmentText(r))
                    })
                }, t.prototype.renderFragmentEmote = function(e, t) {
                    var n = e.emoteID;
                    return o.createElement(q.a, {
                        alt: t,
                        className: "clips-chat-line-emote",
                        srcKey: "1x",
                        srcSet: {
                            themed: !1,
                            sources: {
                                "1x": "https://static-cdn.jtvnw.net/emoticons/v1/" + n + "/1.0"
                            }
                        }
                    })
                }, t.prototype.renderFragmentText = function(e) {
                    return o.createElement(k.Q, {
                        type: k._49.Span,
                        fontSize: k.V.Size5,
                        color: k.K.Alt
                    }, e)
                }, t
            }(o.Component)),
            K = n("oIkB"),
            $ = n("YJNl"),
            Y = "";

        function J(e) {
            return e && e.clip && e.clip.video && e.clip.video.comments && e.clip.video.comments.edges || []
        }

        function Z(e) {
            var t = e[Math.max(e.length - 1, 0)];
            return t || {
                node: {
                    id: Y,
                    contentOffsetSeconds: 1 / 0
                },
                cursor: null
            }
        }
        var X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.prevCommentId = Y, t.filterChatLines = function(e) {
                        var n = t.props.videoOffsetSeconds,
                            i = n + (t.props.currentTime ? t.props.currentTime : 0),
                            r = e.node.contentOffsetSeconds;
                        return r >= n && r <= i
                    }, t.maybeLoadMore = function(e) {
                        var n = t.props.data && t.props.data.clip,
                            i = n && n.video;
                        if (!i || !i.comments || t.props.data.error || !t.props.videoOffsetSeconds) return null;
                        var r = Z(i.comments.edges).node,
                            a = e.videoOffsetSeconds + Number(e.data.clip && e.data.clip.durationSeconds);
                        r.contentOffsetSeconds <= a && t.props.loadMore()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.autoScrollChatToBottom();
                    var e = Z(J(this.props.data)).node.id;
                    this.prevCommentId !== e && (this.prevCommentId = e, this.maybeLoadMore(this.props))
                }, t.prototype.render = function() {
                    if (!this.props.shouldRenderChat) return null;
                    var e = this.props.data && this.props.data.clip,
                        t = e && e.video;
                    if (!e || !t || !t.comments || this.props.data.error || !this.props.videoOffsetSeconds) return null;
                    var n = t.comments.edges.filter(this.filterChatLines);
                    return 0 === n.length ? null : o.createElement(k._8, {
                        className: "clips-chat-replay",
                        flexGrow: 1,
                        flexShrink: 0,
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        alignItems: k.c.Start,
                        justifyContent: k._7.End,
                        margin: {
                            top: 1
                        }
                    }, n.map(function(n, i) {
                        var r = n.node;
                        return o.createElement(Q, {
                            channelName: e.broadcaster && e.broadcaster.displayName || void 0,
                            node: r,
                            video: t,
                            key: i
                        })
                    }))
                }, t
            }(o.Component),
            ee = Object(l.a)($, {
                skip: function(e) {
                    return !e.videoOffsetSeconds
                },
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug,
                            videoOffsetSeconds: e.videoOffsetSeconds
                        }
                    }
                },
                props: function(e) {
                    return r.__assign({}, e, {
                        loadMore: function() {
                            var t = J(e.data);
                            if (0 !== t.length) {
                                var n = Z(t).cursor;
                                return e.data.fetchMore({
                                    query: $,
                                    variables: {
                                        slug: e.data.variables.slug,
                                        cursor: n
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            clip: r.__assign({}, n.clip, {
                                                video: r.__assign({}, n.clip && n.clip.video || {}, {
                                                    comments: r.__assign({}, n.clip && n.clip.video && n.clip.video.comments || {}, {
                                                        edges: Object(K.c)(J(e), J(n)),
                                                        __typename: "VideoCommentEdge"
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            })(X),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(k._35, {
                        alignItems: k.c.Center,
                        attachTop: !0,
                        className: "clips-chat-title",
                        display: k.R.Flex,
                        flexDirection: k.T.Row,
                        fullWidth: !0,
                        position: k._15.Absolute,
                        justifyContent: k._7.Start,
                        background: k.n.Base,
                        borderBottom: !0,
                        zIndex: k._62.Default,
                        padding: 1
                    }, o.createElement(M.a, {
                        fontSize: k.V.Size5,
                        slug: this.props.slug,
                        ellipsis: !0
                    }), o.createElement(k._8, {
                        flexShrink: 0,
                        margin: {
                            x: .5
                        }
                    }, o.createElement(k.Q, {
                        type: k._49.Span
                    }, "•")), o.createElement(k._8, {
                        flexShrink: 0
                    }, o.createElement(L.a, {
                        padding: {
                            bottom: 0
                        },
                        slug: this.props.slug,
                        fontSize: k.V.Size6,
                        hideSymbol: !0
                    })), o.createElement(k._8, {
                        margin: {
                            x: .5
                        }
                    }, o.createElement(k.Q, {
                        type: k._49.Span
                    }, "•")), o.createElement(j.a, {
                        slug: this.props.slug,
                        fontSize: k.V.Size6,
                        ellipsis: !0
                    }))
                }, t
            }(o.Component),
            ne = (n("tIhJ"), n("3Fw+")),
            ie = n("J4ib"),
            re = n("dQ/z"),
            ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip ? (e = this.props.data.clip.video ? o.createElement(k.v, {
                        targetBlank: !0,
                        linkTo: Object(b.g)(this.props.data.clip.video.id, {
                            t: Object(ne.a)(this.props.data.clip.videoOffsetSeconds),
                            tt_medium: "clips_web",
                            tt_content: "full_vod_button"
                        })
                    }, Object(ie.d)("Watch Full Video", "ClipsFullVideoButton")) : o.createElement(k.v, {
                        disabled: !0
                    }, Object(ie.d)("Full Video Unavailable", "ClipsFullVideoButton")), o.createElement(k._8, {
                        display: k.R.InlineBlock
                    }, e)) : o.createElement(k._8, null, this.renderPlaceholders());
                    var e
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return o.createElement(k.e, {
                        type: k.j.FadeIn,
                        duration: k.g.Long,
                        enabled: !0
                    }, o.createElement(k._14, {
                        width: 108,
                        height: 28
                    }))
                }, t = r.__decorate([Object(m.d)("ClipsFullVideoButton"), Object(l.a)(re)], t)
            }(o.Component),
            oe = (n("mK8J"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug;
                    return o.createElement(k._8, {
                        className: "clips-sidebar",
                        display: k.R.Flex,
                        flexDirection: k.T.Column
                    }, o.createElement(k._35, {
                        borderBottom: !0
                    }, o.createElement(R.a, {
                        slug: e
                    })), o.createElement(k._8, {
                        className: "clips-sidebar-info",
                        display: k.R.Flex,
                        flexDirection: k.T.Column,
                        justifyContent: k._7.Around
                    }, o.createElement(G, {
                        slug: e,
                        currentTime: this.props.currentTime
                    })), o.createElement(k._35, {
                        borderTop: !0
                    }, o.createElement(k._8, {
                        display: k.R.Flex,
                        justifyContent: k._7.End,
                        alignItems: k.c.Center,
                        padding: 1
                    }, o.createElement(ae, {
                        slug: e
                    }))))
                }, t
            }(o.Component)),
            se = Object(m.d)("ClipsSidebar", {
                autoReportInteractive: !0
            })(oe),
            le = n("ZxOd"),
            ce = n("mVDO"),
            de = n("bW4X"),
            ue = (n("IcDq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        animationCompleted: !1,
                        currentTime: void 0
                    }, t.redirected = !1, t.maybeRedirectToErrorPage = function(e) {
                        void 0 === e && (e = t.props), t.redirected || e.data.loading || !(e.data.error || e.data.clip && e.data.clip.creationState !== f.a.created) || (t.redirected = !0, e.history.replace(Object(b.f)(g.a.ClipMissing)))
                    }, t.onAnimationEnd = function() {
                        t.setState({
                            animationCompleted: !0
                        })
                    }, t.setCurrentTime = function(e) {
                        t.setState({
                            currentTime: e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.o.experiments.trackExperiment({
                        assignment: "variant1",
                        id: "0e636d13-56a8-44f4-bd51-7e65cd5a5225",
                        name: "twilight_clips_howdy_partner",
                        type: u.a.Device,
                        version: 1
                    }), this.props.latencyTracking.reportInteractive(), this.maybeRedirectToErrorPage()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.params.slug !== e.match.params.slug && this.context.scrollToTop(), this.maybeRedirectToErrorPage(e)
                }, t.prototype.render = function() {
                    var e = this.props.match.params.slug;
                    return o.createElement(k._8, {
                        className: "clips-watch",
                        padding: {
                            bottom: 2
                        },
                        breakpointSmall: {
                            padding: {
                                bottom: 3
                            }
                        },
                        breakpointLarge: {
                            padding: {
                                bottom: 5
                            }
                        }
                    }, o.createElement(k.e, {
                        type: k.j.FadeIn,
                        duration: k.g.Long,
                        enabled: !this.state.animationCompleted,
                        onAnimationEnd: this.onAnimationEnd
                    }, o.createElement(le.a, {
                        slug: e,
                        pageType: p.PageviewLocation.ClipsViewing
                    }), o.createElement(k._35, {
                        background: k.n.Base,
                        display: k.R.Flex,
                        elevation: 3,
                        flexDirection: k.T.Column,
                        breakpointLarge: {
                            flexDirection: k.T.Row
                        }
                    }, o.createElement(ce.a, {
                        slug: e,
                        playerType: h.b.ClipsViewing,
                        setCurrentTime: this.setCurrentTime,
                        currentTime: this.state.currentTime
                    }), o.createElement(se, {
                        slug: e,
                        currentTime: this.state.currentTime
                    })), o.createElement(P, {
                        slug: e
                    })))
                }, t.contextTypes = {
                    scrollToTop: a.func
                }, t = r.__decorate([Object(m.d)("ClipsViewPage", {
                    destination: d.a.ClipsViewing
                }), Object(c.a)({
                    location: p.PageviewLocation.ClipsViewing
                }), Object(l.a)(de, {
                    options: function(e) {
                        return {
                            variables: {
                                slug: e.match.params.slug
                            }
                        }
                    }
                })], t)
            }(o.Component));
        n.d(t, "ClipsView", function() {
            return ue
        })
    },
    "1EXI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                    value: "userId"
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
                                                    value: "displayName"
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
                end: 140
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\nuser(id: $userId) {\nid\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1OO3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("7vx8"),
            a = 60,
            o = 60 * a,
            s = 24 * o,
            l = 7 * s,
            c = 4 * l;
        var d, u = n("MApH");
        n.d(t, "a", function() {
                return d
            }), t.b = function(e) {
                var t = this;
                return Object(r.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(r, d) {
                                return void 0 === d && (d = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: r,
                                                            expiresIn: d && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > c) {
                                                                    var i = Math.floor(t / c);
                                                                    t -= i * c, n += i + "mo"
                                                                }
                                                                if (t > l) {
                                                                    var r = Math.floor(t / l);
                                                                    t -= r * l, n += r + "w"
                                                                }
                                                                if (t > s) {
                                                                    var d = Math.floor(t / s);
                                                                    t -= d * s, n += d + "d"
                                                                }
                                                                if (t > o) {
                                                                    var u = Math.floor(t / o);
                                                                    t -= u * o, n += u + "h"
                                                                }
                                                                if (t > a) {
                                                                    var p = Math.floor(t / a);
                                                                    t -= p * a, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(d)
                                                        }
                                                    }
                                                })];
                                            case 2:
                                                return [2, i.sent().data];
                                            case 3:
                                                throw i.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            },
            function(e) {
                e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
            }(d || (d = {}))
    },
    "2BvQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_Video"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                                    value: "id"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 81
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2IkU": function(e, t) {},
    "2TZ0": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClipsTitleEdit_UpdateClip"
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
                                value: "UpdateClipInput"
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
                            value: "updateClip"
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
                                    value: "clip"
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
                                            value: "message"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation ClipsTitleEdit_UpdateClip($input: UpdateClipInput!) {\nupdateClip(input: $input) {\nclip {\nid\ntitle\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
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
    },
    "2rJy": function(e, t) {},
    3: function(e, t) {},
    "37Pp": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("6sO2"),
            a = n("FDYX"),
            o = n("Odds"),
            s = (n("M5Tl"), function(e) {
                var t = e.subscriptionProduct;
                if (void 0 === t) return i.createElement("div", null);
                var n = e.isOneTime ? Object(r.d)("{price} / One-time purchase", {
                    price: t.price
                }, "SubDiscountPriceLabel") : Object(r.d)("{price} / Month", {
                    price: t.price
                }, "SubDiscountPriceLabel");
                if (e.isGift ? Object(a.c)([e.subscriptionProduct]) : Object(a.d)([e.subscriptionProduct])) {
                    var s = void 0;
                    return s = e.isGift ? Object(r.d)("{price} (Save {percent})", {
                        price: Object(a.a)(e.subscriptionProduct, e.isGift),
                        percent: Object(r.e)(Object(a.b)(e.subscriptionProduct, e.isGift) / 100, "percent")
                    }, "SubDiscountPriceLabel") : Object(r.d)("{price} for the first month (Save {percent})", {
                        price: Object(a.a)(e.subscriptionProduct, e.isGift),
                        percent: Object(r.e)(Object(a.b)(e.subscriptionProduct, e.isGift) / 100, "percent")
                    }, "SubDiscountPriceLabel"), i.createElement(o._8, {
                        "data-test-selector": "sub-discount-price-label__discounted"
                    }, i.createElement(o.Q, {
                        color: o.K.Alt2,
                        decoration: o._47.Strikethrough
                    }, n), i.createElement(o.Q, {
                        className: "sub-discount-price-label__discount-price",
                        type: o._49.H5,
                        bold: !0
                    }, s))
                }
                return i.createElement(o._8, {
                    "data-test-selector": "sub-discount-price-label__non-discounted"
                }, i.createElement(o.Q, null, n))
            });
        n.d(t, !1, function() {
            return "sub-discount-price-label__discounted"
        }), n.d(t, !1, function() {
            return "sub-discount-price-label__non-discounted"
        }), n.d(t, "a", function() {
            return s
        })
    },
    "3Fw+": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var t = e,
                n = Math.floor(t / 3600);
            t %= 3600;
            var r = Math.floor(t / 60);
            return n + "h" + r + "m" + (t %= 60) + "s"
        };
        var i = "0h0m1s"
    },
    "3QSP": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_SubEvent_User"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withVideo"
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
                            value: "videoID"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
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
                                        value: "withVideo"
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
                                    value: "broadcastType"
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
                end: 266
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_SubEvent_User($channelID: ID! $withVideo: Boolean! $videoID: ID) {\nuser(id: $channelID) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\ntier\npurchasedWithPrime\n}\n}\n}\nvideo(id: $videoID) @include(if: $withVideo) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            r = n("urTJ"),
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
                        n && e.clickAction === a.c && (e = o.__assign({}, e, {
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
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "k", function() {
            return d
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return h
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "e", function() {
            return b
        }), n.d(t, "f", function() {
            return f
        });
        var i, r = n("I89S"),
            a = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            l = o + "/actions",
            c = 8e5,
            d = 1e4,
            u = 500,
            p = 1e3,
            m = "cheer",
            h = r.a.Purple,
            g = "FIRST_PARTY",
            b = "THIRD_PARTY",
            f = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i)
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return i
        });
        var i, r = "VIEWS",
            a = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    "3ydF": function(e, t) {},
    "3yhY": function(e, t) {},
    "4MRZ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
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
                                    value: "displayName"
                                },
                                arguments: [],
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
                                            value: "emoteSetID"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
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
                end: 262
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "4NZK": function(e, t) {},
    "4bQk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("2KeS"),
            o = n("6sO2"),
            s = n("+Znq"),
            l = n("7vx8"),
            c = n("oIkB"),
            d = n("2BvQ"),
            u = n("xrVp"),
            p = n("YugT"),
            m = {
                Channel: "channel"
            };
        var h = n("vH/s"),
            g = n("CSlQ"),
            b = n("Odds"),
            f = n("VNvG"),
            v = (n("3ydF"), n("SUA7")),
            k = n("x4k6");
        n.d(t, "b", function() {
            return y
        }), n.d(t, "a", function() {
            return _
        });
        var y;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(y || (y = {}));
        var S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1,
                        showDropdown: !1,
                        disableNotifications: !0
                    }, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                    }, t.toggleFollowing = function() {
                        var e;
                        t.state.isFollowing ? (t.unfollowUser(), e = h.SpadeEventType.Unfollow) : (t.followUser(), e = h.SpadeEventType.Follow);
                        var n = t.getFollowData();
                        n && function(e, t) {
                            i.__awaiter(this, void 0, void 0, function() {
                                var n, r, a, s, l, c, m, h, g, b;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (n = null, r = null, a = null, s = null, l = null, !t.channelID) return [3, 5];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, o.o.apollo.client.query({
                                                query: p,
                                                variables: {
                                                    id: t.channelID
                                                }
                                            })];
                                        case 2:
                                            return s = i.sent(), [3, 4];
                                        case 3:
                                            return m = i.sent(), o.j.error(m, "Failed to make query for channel info in FollowEvent reporting.", {
                                                channelID: t.channelID
                                            }), [3, 4];
                                        case 4:
                                            (a = s && s.data && s.data.user) ? l = a.hosting.stream && a.hosting.stream.game ? a.hosting.stream.game.name : a.stream && a.stream.game && a.stream.game.name: o.j.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                                channelID: t.channelID
                                            }), i.label = 5;
                                        case 5:
                                            if (!(h = o.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                            i.label = 6;
                                        case 6:
                                            return i.trys.push([6, 8, , 9]), [4, o.o.apollo.client.query({
                                                query: d,
                                                variables: {
                                                    id: h
                                                }
                                            })];
                                        case 7:
                                            return n = i.sent(), [3, 9];
                                        case 8:
                                            return g = i.sent(), o.j.error(g, "Failed to make query for VOd info in FollowEvent reporting.", {
                                                currentVODID: h
                                            }), [3, 9];
                                        case 9:
                                            (r = n && n.data && n.data.video) ? c = Object(u.a)(r.broadcastType): (c = null, o.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                                currentVODID: h
                                            })), i.label = 10;
                                        case 10:
                                            return b = {
                                                channel: t.channelLogin,
                                                channel_id: t.channelID,
                                                channel_game: l,
                                                cta_visible: o.n.getVideoPlayerTrackingData().followCTAVisible,
                                                host_channel: t.hostChannelLogin,
                                                host_channel_id: t.hostChannelID,
                                                game: t.game,
                                                partner: a ? a.isPartner : null,
                                                src: t.src,
                                                vod_id: h,
                                                vod_type: c
                                            }, o.n.track(e, b), [2]
                                    }
                                })
                            })
                        }(e, {
                            channelLogin: n.user && n.user.login || "",
                            channelID: n.user && n.user.id || "",
                            hostChannelLogin: t.props.hostChannelLogin,
                            hostChannelID: t.props.hostChannelID,
                            src: m.Channel
                        }), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing,
                                disableNotifications: !1
                            }
                        })
                    }, t.followUser = function() {
                        var e = t.getFollowData();
                        if (t.props.followUser && e) {
                            t.setState({
                                showDropdown: !0
                            });
                            var n = i.__assign({}, Object(c.a)({
                                disableNotifications: !1,
                                targetID: e.user && e.user.id || ""
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !1,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.followUser(n).then(function(e) {
                                Object(c.e)(k, {
                                    login: t.props.channelLogin
                                }, function(t) {
                                    var n = t.user;
                                    return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                        __typename: "FollowerEdge",
                                        disableNotifications: e.data.followUser.follow.disableNotifications
                                    }), t
                                }), t.props.onFollow && t.props.onFollow(t.props.channelLogin)
                            })
                        }
                    }, t.unfollowUser = function() {
                        var e = t.getFollowData();
                        if (t.props.unfollowUser && e) {
                            var n = i.__assign({}, Object(c.a)({
                                targetID: e.user && e.user.id || ""
                            }), {
                                optimisticResponse: {
                                    unfollowUser: {
                                        __typename: "UnfollowUserPayload",
                                        follow: {
                                            disableNotifications: null,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.unfollowUser(n).then(function() {
                                Object(c.e)(k, {
                                    login: t.props.channelLogin
                                }, function(e) {
                                    var t = e.user;
                                    return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                        __typename: "FollowerEdge",
                                        disableNotifications: null
                                    }), e
                                }), t.props.onUnfollow && t.props.onUnfollow(t.props.channelLogin)
                            })
                        }
                    }, t.toggleNotificationsEnabled = function() {
                        var e = t.getFollowData();
                        if (t.props.followUser && e) {
                            var n = i.__assign({}, Object(c.a)({
                                disableNotifications: !t.state.disableNotifications,
                                targetID: e.user && e.user.id || ""
                            }), {
                                optimisticResponse: {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            disableNotifications: !t.state.disableNotifications,
                                            __typename: "Follow"
                                        }
                                    }
                                }
                            });
                            t.props.followUser(n).then(function(e) {
                                Object(c.e)(k, {
                                    login: t.props.channelLogin
                                }, function(t) {
                                    var n = t.user;
                                    return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                        __typename: "FollowerEdge",
                                        disableNotifications: e.data.followUser.follow.disableNotifications
                                    }), t
                                })
                            }), t.setState(function(e) {
                                return {
                                    disableNotifications: !e.disableNotifications
                                }
                            })
                        }
                    }, t.getFollowData = function() {
                        return t.props.followData ? t.props.followData : t.props.data
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    var e = this.props.followData;
                    if (e) {
                        var t = e.user;
                        this.setState({
                            isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                            disableNotifications: t && t.self && t.self.follower && t.self.follower.disableNotifications
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data && !e.data.loading && !e.data.error) {
                        var t = e.data.user;
                        this.setState({
                            isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                            disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? !this.props.showLoadingPlaceholder || this.props.data && !this.props.data.loading ? this.props.currentUserLogin !== this.props.channelLogin && this.props.followUser && this.props.unfollowUser && (this.props.followData || this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user) ? this.state.isFollowing ? this.props.hideWhenFollowing ? null : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown() : this.renderFollowButton(this.toggleFollowing) : null : this.renderPlaceholder() : this.renderFollowButton(this.props.login)
                }, t.prototype.renderPlaceholder = function() {
                    switch (this.props.size) {
                        case b.z.Large:
                            return r.createElement(b._14, {
                                width: 93,
                                height: 36
                            });
                        case b.z.Small:
                            return r.createElement(b._14, {
                                width: 66,
                                height: 24
                            });
                        default:
                            return r.createElement(b._14, {
                                width: 70,
                                height: 30
                            })
                    }
                }, t.prototype.renderFollowButton = function(e) {
                    var t = this.props.isHostedFollow && this.props.channelName ? Object(o.d)("Follow {username}", {
                        username: this.props.channelName
                    }, "FollowButton") : Object(o.d)("Follow", "FollowButton");
                    return r.createElement(b.v, i.__assign({
                        ariaLabel: t,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "follow-button",
                        "data-test-selector": "follow-button",
                        icon: this.props.followUIType === y.TextOnly ? void 0 : b._25.Heart,
                        onClick: e,
                        size: this.props.size,
                        tabIndex: this.props.tabIndex
                    }, Object(b._63)(this.props)), this.props.followUIType === y.IconOnly ? null : t)
                }, t.prototype.renderUnfollowButton = function() {
                    var e = Object(o.d)("Unfollow", "FollowButton");
                    return r.createElement(b.v, i.__assign({
                        ariaLabel: e,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: this.props.unfollowUIType === y.TextOnly ? void 0 : b._25.Heart,
                        statusAlertIcon: this.props.unfollowUIType === y.TextOnly ? void 0 : b._25.Unheart,
                        statusAlertText: this.props.unfollowUIType === y.IconOnly ? "" : e,
                        tabIndex: this.props.tabIndex,
                        size: this.props.size,
                        onClick: this.toggleFollowing
                    }, Object(b._63)(this.props)), this.props.unfollowUIType === y.IconOnly ? null : Object(o.d)("Followed", "FollowButton"))
                }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                    var e = this.props.balloonDirection ? this.props.balloonDirection : b.r.BottomRight,
                        t = this.getFollowData(),
                        n = t && t.user && t.user.displayName || "",
                        i = this.state.disableNotifications ? Object(o.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(o.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                    return r.createElement(b._8, {
                        display: b.R.Flex,
                        className: "follow-btn",
                        "data-test-selector": "unfollow-button__dropdown"
                    }, r.createElement(b._8, null, this.renderUnfollowButton()), r.createElement(s.a, {
                        display: b.R.InlineFlex,
                        openByDefault: this.state.showDropdown
                    }, r.createElement("button", {
                        tabIndex: this.props.tabIndex,
                        "aria-label": Object(o.d)("Dropdown", "FollowButton"),
                        className: "follow-btn__dropdown-toggle",
                        "data-a-target": "follow-dropdown-toggle"
                    }, r.createElement(b._8, {
                        justifyContent: b._7.Center,
                        display: b.R.Flex,
                        alignItems: b.c.Stretch,
                        fullHeight: !0
                    }, r.createElement(b._24, {
                        asset: b._25.GlyphArrDown
                    }))), r.createElement(b.q, {
                        size: b.s.Small,
                        direction: e,
                        "data-a-target": "follow-notifications-balloon"
                    }, r.createElement(b._35, {
                        color: b.K.Base,
                        display: b.R.Flex,
                        flexWrap: b.U.Wrap,
                        padding: 1
                    }, r.createElement(b._8, {
                        display: b.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(b.Q, {
                        type: b._49.H6
                    }, Object(o.d)("You are following {followingName}", {
                        followingName: n
                    }, "FollowButton"))), r.createElement(b._8, {
                        display: b.R.Flex,
                        flexWrap: b.U.NoWrap,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(b._8, {
                        display: b.R.Flex,
                        padding: {
                            right: 2
                        }
                    }, r.createElement("span", null, r.createElement(b.Q, {
                        type: b._49.H6
                    }, Object(o.d)("Notifications", "FollowButton")))), r.createElement(b._8, {
                        display: b.R.Flex,
                        flexShrink: 0
                    }, r.createElement(b._51, {
                        onChange: this.toggleNotificationsEnabled,
                        checked: !this.state.disableNotifications,
                        "data-a-target": "notifications-toggle"
                    }))), r.createElement(b._8, {
                        display: b.R.InlineFlex,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(b.Q, {
                        type: b._49.Span,
                        color: b.K.Alt2
                    }, i))))))
                }, t.prototype.reportInteractive = function() {
                    C(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t
            }(r.Component),
            _ = Object(a.d)(Object(l.a)(k, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return C(e)
                }
            }), Object(l.a)(f, {
                name: "followUser"
            }), Object(l.a)(v, {
                name: "unfollowUser"
            }), Object(g.d)("FollowButton"))(S);

        function C(e) {
            return !e.isLoggedIn || (!e.channelLogin || (!!e.followData || e.channelLogin === e.currentUserLogin))
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
    "5MsU": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange", e.ExternalFullscreenChange = "externalfullscreenchange", e.ClipsModerationOpen = "clips-moderation-open"
            }(i || (i = {}))
    },
    "6O9f": function(e, t) {},
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
    "70dR": function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            s = n("Aj/L"),
            l = n("CSlQ"),
            c = n("6sO2"),
            d = n("+Znq"),
            u = n("7vx8"),
            p = n("RweG"),
            m = n("vBst"),
            h = n("TeXj"),
            g = n("S1vB"),
            b = n("HZww"),
            f = n("oIkB"),
            v = n("HM6l"),
            k = n("a0y1"),
            y = n("3iBR"),
            S = n("Odds"),
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(S._8, {
                        className: "esports-top-page-details"
                    }, a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: S.R.Flex,
                        justifyContent: S._7.Center,
                        className: "insider-pass-pre-purchase__header"
                    }, a.createElement("img", {
                        src: y.c + "/owl-2017/all-access-logo.svg",
                        alt: Object(c.d)("Overwatch League All-Access Pass on Twitch", "EsportsTopPageDetails"),
                        height: "80px",
                        "data-test-selector": "balloon-detail-logo"
                    })), a.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S.Q, {
                        type: S._49.H4,
                        bold: !0,
                        "data-test-selector": "balloon-detail-subheader"
                    }, Object(c.d)("Your VIP pass to the best of the Overwatch League", "EsportsTopPageDetails"))), a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S.Q, {
                        type: S._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-igc-subheader"
                    }, Object(c.d)("Overwatch In-Game Content (requires Blizzard account link)", "EsportsTopPageDetails")), a.createElement(S.Q, {
                        "data-test-selector": "balloon-detail-igc-copy"
                    }, Object(c.d)("3 Hero Skins • Overwatch League Player Icon • Overwatch League Spray •", "EsportsTopPageDetails"), " ", a.createElement(S.Q, {
                        type: S._49.Span,
                        italic: !0
                    }, Object(c.d)("Plus more content coming soon", "EsportsTopPageDetails")))), a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S.Q, {
                        type: S._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-experience-subheader"
                    }, Object(c.d)("The Overwatch League All-Access Experience", "EsportsTopPageDetails")), a.createElement(S.Q, {
                        "data-test-selector": "balloon-detail-experience-copy"
                    }, Object(c.d)("Exclusive Command Center stream • Match analysis videos by players • Ask questions in post-match Q&A with players • Passholder-only chat • 23 Twitch emotes • Overwatch League chat badges • Ad-free viewing on Overwatch League", "EsportsTopPageDetails"))))
                }, t
            }(a.PureComponent),
            C = n("YEG/"),
            T = n("FDYX"),
            E = (n("VOrx"), function(e) {
                var t = Object(T.d)(e.subscriptionProducts) ? Object(T.a)(e.subscriptionProducts[0]) : e.subscriptionProducts[0].price,
                    n = null;
                if (e.isEsportGiftingApproved) {
                    var i = Object(c.d)("Gift All-Access Pass", "EsportsNonSubbedTopPage");
                    n = a.createElement(S.v, {
                        ariaLabel: i,
                        onClick: e.showRecipientSelect,
                        type: S.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, i)
                }
                return a.createElement(S._8, {
                    padding: 2
                }, a.createElement(_, null), a.createElement(S.Q, {
                    type: S._49.H6,
                    bold: !0
                }, Object(c.d)("One-Time Purchase for the 2018 Season", "EsportsNonSubbedTopPage")), a.createElement(S.Q, null, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep forever.", "EsportsNonSubbedTopPage")), a.createElement(S._8, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(S._8, {
                    margin: {
                        right: .5
                    },
                    display: S.R.Inline
                }, a.createElement(C.a, {
                    isSubbedToTier: !1,
                    tierPrice: t,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url,
                    isEsportChannel: !0
                })), n), a.createElement(S._8, {
                    display: S.R.Flex,
                    margin: {
                        top: 1
                    },
                    flexDirection: S.T.Column
                }, a.createElement(k.a, {
                    subscriptionProducts: e.subscriptionProducts,
                    userHasPrime: e.userHasPrime
                })))
            }),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (this.props.isEsportGiftingApproved) {
                        var t = Object(c.d)("Gift All-Access Pass", "EsportsSubbedTopPage");
                        e = a.createElement(S._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(S.v, {
                            ariaLabel: t,
                            onClick: this.props.showRecipientSelect,
                            type: S.B.Hollow,
                            "data-test-selector": "subscribe-button__gift"
                        }, t))
                    }
                    return a.createElement(S._8, {
                        padding: 2
                    }, a.createElement(_, null), a.createElement(S.Q, {
                        "test-selector": "subbed-subheader",
                        type: S._49.H4,
                        bold: !0
                    }, Object(c.d)("You have the All-Access Pass", "EsportsSubbedTopPage")), a.createElement(S.Q, {
                        "test-selector": "subbed-copy"
                    }, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep.", "EsportsSubbedTopPage")), e)
                }, t
            }(a.PureComponent),
            N = n("6BvN"),
            w = n("5LoI"),
            P = n("MAZT"),
            R = n("uTyw"),
            I = n("zCIC"),
            D = n("SZoP"),
            F = n("2KeS"),
            x = n("lK86"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading || !this.props.recipientLogin || this.props.data.user.self.canGift) return null;
                    var e = this.props.isEsportChannel ? Object(c.d)("Sorry, an All-Access Pass to this channel is not available for this user", "GiftRecipientIneligibleMessage") : Object(c.d)("Sorry, a gift subscription to this channel is not available for this user.", "GiftRecipientIneligibleMessage"),
                        t = this.props.isEsportChannel ? "esports-gift-eligibility-message-selector" : "gift-eligibility-message-selector";
                    return a.createElement(S._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(S.Q, {
                        italic: !0,
                        color: S.K.Alt2,
                        "data-test-selector": t
                    }, e))
                }, t
            }(a.Component),
            M = Object(F.d)(Object(l.d)("GiftRecipientIneligibleMessage"), Object(u.a)(x, {
                options: function(e) {
                    return {
                        variables: {
                            recipientLogin: e.recipientLogin,
                            subProductId: e.subProductId
                        }
                    }
                },
                skip: function(e) {
                    return !e.recipientLogin || !e.subProductId
                }
            }))(j),
            L = n("daN3"),
            U = n("CwIZ"),
            A = (n("+YN9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                        n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: n.dataset.userId || "",
                                login: n.dataset.user_login || "",
                                name: n.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? a.createElement(S._8, {
                        fullHeight: !0
                    }, a.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : a.createElement(S._8, {
                        margin: 1
                    }, a.createElement(S.Q, {
                        color: S.K.Alt2
                    }, Object(c.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult"))), a.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, a.createElement(S._35, {
                        className: "gift-recipient-search-result-view",
                        background: S.n.Alt,
                        position: S._15.Relative,
                        overflow: S._11.Hidden,
                        display: S.R.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, a.createElement(S._2, {
                        overflow: S._11.Hidden,
                        position: S._15.Relative
                    }, a.createElement(I.b, {
                        suppressScrollX: !0
                    }, a.createElement(S._8, null, e, a.createElement(I.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), a.createElement(S._8, null, a.createElement(S._8, {
                        display: S.R.Flex,
                        alignItems: S.c.Center,
                        fullWidth: !0
                    }, this.getBuyGiftButton(), a.createElement(S._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(S.Q, {
                        "data-test-selector": "gift-recipient-display-name-selector"
                    }, Object(c.d)("for {displayName}", {
                        displayName: a.createElement(S.Q, {
                            bold: !0,
                            type: S._49.Span
                        }, this.getFormattedDisplayName())
                    }, "GiftRecipientCheckoutButton")))), a.createElement(M, {
                        subProductId: this.props.selectedProductId,
                        recipientLogin: this.state.selectedUser ? this.state.selectedUser.login : null,
                        isEsportChannel: this.props.isEsportChannel
                    })))
                }, t.prototype.getBuyGiftButton = function() {
                    return a.createElement(L.a, {
                        subProductId: this.props.selectedProductId,
                        giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                        checkoutURL: this.props.selectedProductURL,
                        onClick: this.reportGiftCheckoutAction,
                        isEsportChannel: this.props.isEsportChannel
                    })
                }, t.prototype.getFormattedDisplayName = function() {
                    return this.state.selectedUser ? Object(D.a)(this.state.selectedUser.login, this.state.selectedUser.name) : ""
                }, t.prototype.getErrorMessage = function() {
                    return a.createElement(S._8, {
                        fullWidth: !0,
                        textAlign: S._45.Center,
                        justifyContent: S._7.Center
                    }, a.createElement(S.Q, null, Object(c.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(D.a)(t.login || "", t.name || "");
                        return a.createElement(S._6, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, a.createElement(S._8, {
                            padding: .5
                        }, a.createElement(S.C, {
                            row: !0
                        }, a.createElement(S.E, {
                            alt: t.thumbnailAltText,
                            src: t.thumbnail ? t.thumbnail : "",
                            size: S.F.Size4,
                            aspect: S.l.Aspect1x1
                        }), a.createElement(S.D, {
                            overflow: S._11.Hidden
                        }, a.createElement(S._2, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(S.Q, {
                            type: S._49.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : a.createElement(S._14, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return a.createElement(S._8, {
                        margin: 1
                    }, a.createElement(S.Q, {
                        color: S.K.Alt2
                    }, Object(c.d)("No Results", "GiftRecipientSearchResult")))
                }, t = r.__decorate([Object(l.d)("GiftRecipientSearchResultPanel")], t)
            }(a.Component)),
            B = (n("m0Vj"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.selectedSubProduct) {
                        var e = null;
                        if (this.props.selectedSubProduct && this.props.selectedSubProduct.giftPromotion) {
                            var t = this.props.selectedSubProduct && this.props.selectedSubProduct.giftPromotion ? this.props.selectedSubProduct.giftPromotion : null;
                            e = a.createElement(S.Q, {
                                bold: !0,
                                className: "subscription-gift-recipient-search__discount-message"
                            }, Object(c.d)("{price} (Save {percent})", {
                                price: t ? t.newPrice : "",
                                percent: Object(c.e)(t ? t.discountValue / 100 : 0, "percent")
                            }, "GiftRecipientSearch"))
                        }
                        var n = "gift-recipient-search-subheading-selector",
                            i = Object(c.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                                subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                                giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                            }, "GiftRecipientSearch");
                        return this.props.isEsportChannel && (n = "gift-recipient-search-esports-subheading-selector", i = Object(c.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch")), a.createElement(S._8, {
                            padding: 2,
                            className: "subscription-gift-recipient-search"
                        }, a.createElement(S._8, null, a.createElement(S._8, {
                            display: S.R.Flex,
                            justifyContent: S._7.Between,
                            alignItems: S.c.Center,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(S.Q, {
                            type: S._49.H4,
                            bold: !0
                        }, Object(c.d)("Choose a Gift Recipient", "GiftRecipientSearch")), a.createElement(S.v, {
                            type: S.B.Text,
                            "data-a-target": "subscribe-back-button",
                            icon: S._25.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "gift-recipient-search-back-button"
                        }, a.createElement(S._8, {
                            alignItems: S.c.Center,
                            display: S.R.InlineFlex
                        }, a.createElement(S.Q, null, Object(c.d)("Back", "GiftRecipientSearch"))))), a.createElement(S._8, null, a.createElement(S.Q, {
                            "data-test-selector": n
                        }, i), e, a.createElement(S._8, {
                            display: S.R.Flex,
                            justifyContent: S._7.Center,
                            padding: {
                                top: 1
                            },
                            fullWidth: !0
                        }, a.createElement(S._2, {
                            fullWidth: !0
                        }, a.createElement("div", null, a.createElement(S._27, {
                            onChange: this.handleChange,
                            onKeyDown: this.props.onKeyDown,
                            id: "gift-recipient-search",
                            placeholder: Object(c.d)("Search for a Twitch ID", "GiftRecipientSearch"),
                            "data-test-selector": "gift-recipient-search-input-selector"
                        }), a.createElement(A, {
                            hasInput: this.props.hasInput,
                            userResults: this.props.userResults,
                            isErrored: this.props.isErrored,
                            isWaiting: this.props.isWaiting,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown,
                            selectedProductId: this.props.selectedSubProduct.id,
                            selectedProductURL: this.props.selectedSubProduct.url,
                            selectedProductPrice: this.props.selectedSubProduct.price,
                            reportSubMenuAction: this.props.reportSubMenuAction,
                            isEsportChannel: this.props.isEsportChannel
                        })))))))
                    }
                    return a.createElement(S._14, null)
                }, t
            }(a.Component)),
            V = 50,
            W = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onChange = function(e) {
                        n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                            isWaiting: !0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doSearch(e)
                        }, V)) : n.setState(n.getEmptyState())
                    }, n.loadMore = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(w.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (n = Object(R.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: n.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: n.exhaustedHits
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, n.onKeyDown = function(e) {
                        n.state.term && (e.keyCode === N.a.Esc ? n.setState({
                            hasInput: !1
                        }) : e.keyCode === N.a.Up ? n.focusNext(-1) : e.keyCode === N.a.Down && n.focusNext(1))
                    }, n.state = n.getEmptyState(), n.searchClient = new P.a({
                        appId: c.a.algoliaApplicationID,
                        apiKey: c.a.algoliaAPIKey,
                        apolloClient: c.o.apollo.client,
                        logger: c.j,
                        config: c.a
                    }), n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(B, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportChannel
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, o;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = v.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(w.a.Users, e, n)];
                                case 2:
                                    return a = s.sent(), [3, 4];
                                case 3:
                                    return s.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(R.b)({
                                        searchResults: a,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return r.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
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
                }, t = r.__decorate([Object(l.d)("GiftRecipientSearch")], t)
            }(a.Component);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(i || (i = {}));
        var G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goToPreviousPage = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickBack,
                            modalLevel: t.props.currentPage === i.SubOptions || t.props.currentPage === i.GiftOptions ? "top_page" : "second_page"
                        }), t.props.currentPage !== i.RecipientSelect || t.props.showTop()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.currentPage === i.RecipientSelect ? this.getGiftRecipientSearchPage() : this.props.isSubscribed ? this.getSubbedTopPage() : this.getUnsubbedTopPage()
                }, t.prototype.getSubbedTopPage = function() {
                    return a.createElement(O, {
                        showRecipientSelect: this.props.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })
                }, t.prototype.getUnsubbedTopPage = function() {
                    return a.createElement(E, {
                        channelLogin: this.props.channelLogin,
                        handleTopPageSubButtonClick: this.props.handleTopPageSubButtonClick,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts ? this.props.subscriptionProducts : [],
                        userHasPrime: this.props.userHasPrime,
                        showRecipientSelect: this.props.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return this.props.subscriptionProducts ? a.createElement(W, {
                        key: "gift-recipient-search-page",
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[0],
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportGiftingApproved
                    }) : null
                }, t
            }(a.Component),
            z = n("37Pp"),
            H = n("odx1"),
            q = function(e) {
                var t = null,
                    n = null,
                    i = null,
                    r = e.subscriptionProducts[0].price;
                if (Object(T.d)(e.subscriptionProducts) && (r = Object(T.a)(e.subscriptionProducts[0])), e.channelLogin && (e.inPrimeRegion || e.userHasPrime)) {
                    var o = e.userHasPrime ? Object(c.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                        upsellTextLink: a.createElement("a", {
                            href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            target: "_blank"
                        }, Object(c.d)("Learn more about your free sub", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage") : Object(c.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                        upsellTextBold: a.createElement("strong", null, Object(c.d)("Support your favorite streamer", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage");
                    i = a.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S.Q, {
                        type: S._49.H4,
                        bold: !0
                    }, Object(c.d)("Free Channel Sub with Twitch Prime", "NonSubbedTopPage"))), a.createElement(S._8, null, a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S.Q, null, o)), a.createElement(H.a, {
                        authToken: e.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: e.onSubscribedWithPrime,
                        reportSubMenuAction: e.reportSubMenuAction,
                        subLogin: e.channelLogin,
                        userHasPrime: e.userHasPrime,
                        canPrimeSubscribe: e.canPrimeSubscribe,
                        channelLogin: e.channelLogin
                    })))
                }
                if (!e.isNonStandardSub) {
                    var s = Object(c.d)("More Paid Subscription Options", "NonSubbedTopPage");
                    t = a.createElement(S._8, {
                        margin: {
                            right: 1
                        },
                        display: S.R.Inline
                    }, a.createElement(S.v, {
                        ariaLabel: s,
                        onClick: e.showSubOptions,
                        type: S.B.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, s));
                    var l = Object(c.d)("Gift a Subscription", "NonSubbedTopPage");
                    n = a.createElement(S._8, {
                        display: S.R.Inline
                    }, a.createElement(S.v, {
                        ariaLabel: l,
                        onClick: e.showGiftOptions,
                        type: S.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, l))
                }
                return a.createElement(S._8, {
                    padding: 2
                }, i, a.createElement(S._8, null, a.createElement(S.Q, {
                    type: S._49.H4,
                    bold: !0
                }, Object(c.d)("Paid Subscription", "NonSubbedTopPage")), a.createElement(z.a, {
                    subscriptionProduct: e.subscriptionProducts[0]
                }), a.createElement(S._8, {
                    display: S.R.Flex
                }, a.createElement(S._8, {
                    margin: {
                        right: 1,
                        top: 1
                    }
                }, a.createElement(C.a, {
                    isSubbedToTier: !1,
                    tierPrice: r,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url
                })))), a.createElement(S._8, {
                    margin: {
                        right: 1,
                        top: 2
                    }
                }, t, n))
            },
            Q = n("YH6m"),
            K = function(e) {
                return a.createElement(S._8, {
                    padding: 2
                }, a.createElement(S._8, null, a.createElement(S._8, {
                    display: S.R.Flex,
                    justifyContent: S._7.Between,
                    alignItems: S.c.Center,
                    fullWidth: !0
                }, a.createElement(S.Q, {
                    type: S._49.H4,
                    bold: !0
                }, e.header), a.createElement(S.v, {
                    type: S.B.Text,
                    "data-a-target": "subscribe-back-button",
                    "data-test-selector": "subscribe-button__back-button",
                    icon: S._25.AngleLeft,
                    onClick: e.onBack
                }, a.createElement(S._8, {
                    alignItems: S.c.Center,
                    display: S.R.InlineFlex
                }, a.createElement(S.Q, null, Object(c.d)("Back", "PaidSubOptions"))))), a.createElement(Q.a, {
                    canPrimeSubscribe: !1,
                    channelDisplayName: e.channelDisplayName,
                    isSubscribed: e.isSubscribed,
                    onSelectTierTab: e.onSelectTierTab,
                    isGift: e.isGift,
                    onGiftSelect: e.onGiftSelect,
                    giftRecipient: e.giftRecipient,
                    reportSubMenuAction: e.reportSubMenuAction,
                    subscriptionProducts: e.subscriptionProducts,
                    userHasPrime: !1
                })))
            },
            $ = n("pQNb"),
            Y = (n("DquS"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform,
                        t = e || this.props.isGift ? null : this.getTopPageUpgradeSection(),
                        n = e ? this.getMobileSubbedSection() : null,
                        i = this.getGiftSection();
                    return a.createElement(S._8, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, i, n, t)
                }, t.prototype.getTopPageUpgradeSection = function() {
                    var e = this.props.subbedTier !== m.a.Tier3 ? Object(c.d)("Change Your Subscription", "SubbedTopPage") : this.getSubbedHeader();
                    return a.createElement(S._8, null, a.createElement(S.Q, {
                        type: S._49.H4,
                        bold: !0
                    }, e), a.createElement(Q.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.channelLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.props.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getMobileSubbedSection = function() {
                    var e = this.getFormattedRenewalDate(),
                        t = this.getFormattedGiftEndDate(),
                        n = 0 === e.length ? Object(c.d)("Tier 1 Subscription, benefits end on {date}", {
                            date: t
                        }, "SubbedTopPage") : Object(c.d)("Tier 1 Subscription, benefits renew on {date}", {
                            date: e
                        }, "SubbedTopPage"),
                        i = Object(c.d)("Subscribed via {platform} Subscriptions", {
                            platform: "IOS" === this.props.subbedPlatform ? "Apple" : "Google"
                        }, "SubbedTopPage"),
                        r = "IOS" === this.props.subbedPlatform ? "https://help.twitch.tv/customer/portal/articles/2921095#ManageiOS" : "https://help.twitch.tv/customer/portal/articles/2921095#ManageGoogle";
                    return a.createElement(S._8, {
                        "data-test-selector": "subscribed-view-mobile"
                    }, a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S.Q, {
                        type: S._49.H4,
                        bold: !0
                    }, this.getSubbedHeader())), a.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S._8, null, n), a.createElement(S._8, null, i), a.createElement(S._8, null, a.createElement(S.O, {
                        to: r
                    }, Object(c.d)("How do I manage this subscription?", "SubbedTopPage")))))
                }, t.prototype.getGiftSection = function() {
                    return this.props.giftSender ? this.props.giftSender && !this.props.giftPaidUpgrade ? a.createElement(S._8, null, a.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : a.createElement(S._8, null, a.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : a.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection())
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.getSubbedHeader(), t = Object(c.d)("{giftPrice} Gift Subscription from {giftSender}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(S.Q, {
                            bold: !0,
                            type: S._49.Span
                        }, this.props.giftSender || "")
                    }, "SubbedTopPage"), n = Object(c.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                        upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                        subStartDate: this.getFormattedGiftUpgradeStartDate()
                    }, "SubbedTopPage")) : (e = Object(c.d)("Your Gift Subscription", "SubbedTopPage"), t = Object(c.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(S.Q, {
                            bold: !0,
                            type: S._49.Span
                        }, this.props.giftSender || ""),
                        giftEndDate: this.getFormattedGiftEndDate()
                    }, "SubbedTopPage")), a.createElement(S._8, null, a.createElement(S.Q, {
                        bold: !0,
                        type: S._49.H4
                    }, e), a.createElement(S._2, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(S.Q, null, t)), a.createElement(S.Q, {
                        className: "balloon-subscribed-user__gift-upgrade-info",
                        bold: !0
                    }, n))
                }, t.prototype.getGiftExtendSection = function() {
                    var e, t = null;
                    if (!this.props.isNonStandardSub) {
                        var n = Object(c.d)("More Paid Subscription Options", "SubbedTopPage");
                        t = a.createElement(S._8, {
                            margin: {
                                right: 1
                            },
                            display: S.R.Inline
                        }, a.createElement(S.v, {
                            ariaLabel: n,
                            onClick: this.props.showSubOptions,
                            type: S.B.Hollow,
                            "data-a-target": "see-more-sub-options-button"
                        }, n))
                    }
                    var i = this.getGiftMessage();
                    return e = a.createElement(S._8, {
                        display: S.R.Inline
                    }, a.createElement(S.v, {
                        "data-test-selector": "subscribe-button__gift",
                        ariaLabel: i,
                        onClick: this.props.showGiftOptions,
                        type: S.B.Hollow
                    }, i)), a.createElement(S._8, null, a.createElement(S._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(S.Q, {
                        type: S._49.H4,
                        bold: !0
                    }, Object(c.d)("Extend Your Subscription", "SubbedTopPage")), a.createElement(S._2, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(S.Q, null, Object(c.d)("{price} / Month", {
                        price: this.props.subscriptionProducts[0].price
                    }, "SubbedTopPage"))), a.createElement(S._8, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, a.createElement(S.v, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.props.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, Object(c.d)("Subscribe Now", "SubbedTopPage")))), a.createElement(S._8, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, t, e))
                }, t.prototype.getTopPageGiftSection = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    Object(T.c)(this.props.subscriptionProducts) && (e = Object(T.a)(this.props.subscriptionProducts[0], !0));
                    var t = this.getGiftMessage(),
                        n = Object(c.d)("More Gift Options", "SubbedTopPage");
                    return a.createElement(S._8, null, a.createElement(S.Q, {
                        type: S._49.H4,
                        bold: !0
                    }, Object(c.d)("Help Grow {streamer}'s Community", {
                        streamer: this.props.channelDisplayName
                    }, "SubbedTopPage")), a.createElement(S._8, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: S.R.Flex
                    }, a.createElement(S.v, {
                        ariaLabel: t + " " + e,
                        onClick: this.props.onGiftSelect,
                        purchase: e
                    }, t), a.createElement(S._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(S.v, {
                        ariaLabel: n,
                        onClick: this.props.showGiftOptions,
                        type: S.B.Hollow
                    }, n))))
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(c.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        c.j.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.subEndDate) try {
                        e = Object(c.c)(new Date(this.props.subEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        c.j.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedRenewalDate = function() {
                    var e = "";
                    if (this.props.renewsAt) try {
                        e = Object(c.c)(new Date(this.props.renewsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        c.j.debug(t, "There was an error formatting sub renewal date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case m.a.Tier1:
                            return this.props.subscriptionProducts[0].price;
                        case m.a.Tier2:
                            return this.props.subscriptionProducts[1].price;
                        case m.a.Tier3:
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t.prototype.getSubbedHeader = function() {
                    return Object(c.d)("Your Subscription", "SubbedTopPage")
                }, t.prototype.getGiftMessage = function() {
                    return Object(c.d)("Gift A Subscription", "SubbedTopPage")
                }, t
            }(a.Component));
        n("UKw0");
        var J = n("+p4h"),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentPage: i.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1
                    }, t.showTop = function() {
                        t.setState(function() {
                            return {
                                currentPage: i.Top
                            }
                        })
                    }, t.showRecipientSelect = function() {
                        t.setState(function() {
                            return {
                                currentPage: i.RecipientSelect
                            }
                        })
                    }, t.showGiftOptions = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), t.setState(function() {
                            return {
                                currentPage: i.GiftOptions
                            }
                        })
                    }, t.showSubOptions = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), t.setState(function() {
                            return {
                                currentPage: i.SubOptions
                            }
                        })
                    }, t.goToPreviousPage = function() {
                        if (t.props.reportSubMenuAction({
                                action: U.a.ClickBack,
                                modalLevel: t.state.currentPage === i.SubOptions || t.state.currentPage === i.GiftOptions ? "top_page" : "second_page"
                            }), t.state.currentPage === i.GiftOptions || t.state.currentPage === i.SubOptions || t.state.giftShortcut) return t.showTop(), void t.setState({
                            giftShortcut: !1
                        });
                        t.state.currentPage !== i.RecipientSelect || t.showGiftOptions()
                    }, t.onGiftSelect = function() {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        t.state.currentPage === i.Top ? t.setState({
                            giftShortcut: !0,
                            selectedSubProductIndex: 0
                        }) : t.setState({
                            giftShortcut: !1
                        }), t.props.reportSubMenuAction({
                            action: U.a.GiftASub,
                            checkoutButtonTier: t.props.data.user.subscriptionProducts[t.state.selectedSubProductIndex].price
                        }), t.showRecipientSelect()
                    }, t.onSelectTierTab = function(e) {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        var n, i;
                        t.tabToSubProduct || (t.tabToSubProduct = (n = t.props.data.user.subscriptionProducts, (i = new Map).set(Q.b.Prime, null), n.forEach(function(e, t) {
                            i.set(t + 1, e)
                        }), i));
                        var r = t.tabToSubProduct.get(e);
                        if (r) {
                            var a = t.props.data.user.subscriptionProducts.findIndex(function(e) {
                                return e.price === r.price
                            });
                            a !== t.state.selectedSubProductIndex && t.setState({
                                selectedSubProductIndex: a
                            }), t.props.onSelectTierTab(r.price)
                        } else t.props.onSelectTierTab(m.a.Prime)
                    }, t.handleTopPageSubButtonClick = function() {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        t.props.reportSubMenuAction({
                            action: U.a.ClickCheckout,
                            checkoutButtonTier: t.props.data.user.subscriptionProducts[0].price
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.props.onSubscribedWithPrime(), Object(f.e)(J, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(v.a)(),
                                platform: "WEB",
                                purchasedWithPrime: !0,
                                tier: m.a.Prime,
                                endsAt: null,
                                renewsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.channelLogin !== this.props.channelLogin && this.setState({
                        currentPage: i.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1
                    })
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), a.createElement(S._8, {
                        display: S.R.Flex,
                        alignItems: S.c.Center,
                        justifyContent: S._7.Center,
                        className: "channel-header__subscription-modal"
                    }, a.createElement(S._10, {
                        fillContent: !0
                    }));
                    if (!this.props.data.user || !this.props.data.user.subscriptionProducts) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    c.j.debug("rendering balloon", {
                        state: this.state
                    });
                    var e, t = a.createElement(S._14, null),
                        n = !1,
                        r = this.props.data.user.subscriptionProducts,
                        o = !0;
                    if (this.props.isEsportChannel) return this.getEsportPage();
                    switch (this.state.currentPage) {
                        case i.Top:
                            if (!this.props.isSubscribed) {
                                e = this.getUnsubbedTopPage();
                                break
                            }
                            e = this.getSubbedTopPage(), n = !0;
                            break;
                        case i.SubOptions:
                            if (this.props.isSubscribed) {
                                e = this.getPaidOptionsPage(!0), o = !1;
                                break
                            }
                            e = this.getPaidOptionsPage(!1);
                            break;
                        case i.GiftOptions:
                            e = this.getGiftOptionsPage(), n = !0;
                            break;
                        case i.RecipientSelect:
                            e = this.getGiftRecipientSearchPage(), r = [r[this.state.selectedSubProductIndex]], n = !0;
                            break;
                        default:
                            if (!this.props.isSubscribed) {
                                e = this.getUnsubbedTopPage();
                                break
                            }
                            e = this.getSubbedTopPage(), n = !0
                    }
                    return o && (t = a.createElement($.a, {
                        subscriptionProducts: r,
                        isGift: n
                    })), a.createElement(S._8, {
                        key: "subscribe-balloon"
                    }, t, e)
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(W, {
                        key: "gift-recipient-search-page",
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.data.user.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportChannel
                    }) : null
                }, t.prototype.getGiftOptionsPage = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(K, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.data.user.displayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user.subscriptionProducts,
                        isGift: !0,
                        onGiftSelect: this.onGiftSelect,
                        isSubscribed: !1,
                        header: Object(c.d)("Choose A Gift Subscription", "SubscribeBalloon"),
                        channelLogin: this.props.channelLogin
                    }) : null
                }, t.prototype.getPaidOptionsPage = function(e) {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(K, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.data.user.displayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user.subscriptionProducts,
                        isSubscribed: e,
                        header: Object(c.d)("All Paid Subscriptions", "SubscribeBalloon"),
                        channelLogin: this.props.channelLogin
                    }) : null
                }, t.prototype.getSubbedTopPage = function() {
                    if (!this.props.data.user || !this.props.data.user.self || !this.props.data.user.self.subscriptionBenefit) return null;
                    var e = this.props.data.user.self.subscriptionBenefit.gift,
                        t = e && e.isGift ? e.gifter.displayName : null,
                        n = !(!e || !e.isGift);
                    return a.createElement(Y, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        channelDisplayName: this.props.data.user.displayName,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        isGift: n,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        isNonStandardSub: this.props.isNonStandardSub,
                        subEndDate: this.props.data.user.self.subscriptionBenefit.endsAt,
                        giftPaidUpgrade: this.props.data.user.self.subscriptionBenefit.paidUpgrade,
                        onGiftSelect: this.onGiftSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        showGiftOptions: this.showGiftOptions,
                        showSubOptions: this.showSubOptions,
                        subbedPlatform: this.props.data.user.self.subscriptionBenefit.platform,
                        renewsAt: this.props.data.user.self.subscriptionBenefit.renewsAt,
                        showRecipientSelect: this.showRecipientSelect,
                        subbedTier: this.props.subbedTier,
                        giftSender: t,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    })
                }, t.prototype.getUnsubbedTopPage = function() {
                    return this.props.data.user ? a.createElement(q, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        inPrimeRegion: this.props.inPrimeRegion,
                        isNonStandardSub: this.props.isNonStandardSub,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        showGiftOptions: this.showGiftOptions,
                        showSubOptions: this.showSubOptions,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }) : null
                }, t.prototype.getEsportPage = function() {
                    return this.props.data.user ? a.createElement(S._8, {
                        key: "subscribe-balloon"
                    }, a.createElement(G, {
                        channelLogin: this.props.channelLogin,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        isSubscribed: this.props.isSubscribed,
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        currentPage: this.state.currentPage,
                        showTop: this.showTop,
                        showRecipientSelect: this.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })) : null
                }, t = r.__decorate([Object(u.a)(J, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(l.d)("SubscribeBalloon")], t)
            }(a.Component),
            X = n("4MRZ"),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTierPrice: null,
                        inPrimeRegion: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        var n = !!(t.props.data.user && t.props.data.user.self && t.props.data.user.self.subscriptionBenefit),
                            i = t.props.data.requestInfo && Object(g.a)(t.props.data.requestInfo.countryCode);
                        Object(U.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || (t.state.activeTierPrice || m.a.Prime).slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === U.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !n,
                            modalLevel: n ? "" : t.modalLevel.slice(),
                            showPrimeContent: i,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== U.a.ClickMoreSubOptions && e.action !== U.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: m.a.Prime
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? U.a.CloseSubMenu : U.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: U.a.SubWithPrime
                        }), t.modalLevel = ""
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.props.reportInteractive()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                }, t.prototype.render = function() {
                    if (!this.isUserDataReady(this.props) || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.props.hideEsportsSubscription && Object(h.a)(this.props.data.user.id, this.props.sessionUser)) return null;
                    var e = this.props.data.requestInfo && Object(g.a)(this.props.data.requestInfo.countryCode),
                        t = !!(this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                        n = Object(h.a)(this.props.data.user.id, this.props.sessionUser),
                        i = Object(h.b)(this.props.data.user.id, this.props.sessionUser),
                        r = 1 === this.props.data.user.subscriptionProducts.length,
                        o = null;
                    this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && (o = this.props.data.user.self.subscriptionBenefit.purchasedWithPrime ? m.a.Prime : this.props.data.user.self.subscriptionBenefit.tier, this.modalLevel = ""), this.props.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && (r = !0);
                    var s, l = t ? Object(c.d)("All-Access Pass", "SubscribeButton") : Object(c.d)("Get the All-Access Pass", "SubscribeButton");
                    if (t) {
                        var u = r ? Object(c.d)("Subscribed", "SubscribeButton") : Object(c.d)("Gift A Sub", "SubscribeButton");
                        if (s = this.props.hostChannelID ? Object(c.d)("Subscribed to {username}", {
                                username: this.props.data.user.displayName
                            }, "SubscribeButton") : u, r && !n) return a.createElement(S.v, {
                            disabled: !0,
                            ariaLabel: s,
                            icon: S._25.Star
                        }, s);
                        n && (s = l)
                    } else s = n ? l : this.props.hostChannelID ? Object(c.d)("Subscribe to {username}", {
                        username: this.props.data.user.displayName
                    }, "SubscribeButton") : Object(c.d)("Subscribe", "SubscribeButton");
                    var p = o === m.a.Prime ? S._25.Crown : S._25.Star,
                        b = t ? "subscribed-button" : "subscribe-button",
                        f = a.createElement(S.v, {
                            "data-a-target": b,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: s,
                            type: t ? S.B.Success : S.B.Default,
                            dropdown: !0,
                            icon: t ? p : void 0
                        }, s),
                        v = this.props.hostChannelID ? S.r.TopLeft : S.r.BottomRight;
                    return a.createElement(d.a, {
                        onToggle: this.handleMenuToggle
                    }, f, a.createElement(S.q, {
                        size: S.s.Large,
                        direction: v,
                        "data-a-target": "sub-balloon"
                    }, a.createElement(Z, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin || "",
                        inPrimeRegion: e,
                        isNonStandardSub: r,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subbedTier: o || m.a.Prime,
                        userHasPrime: !1,
                        isSubscribed: t,
                        isEsportChannel: n,
                        isEsportGiftingApproved: i
                    })))
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t = r.__decorate([Object(u.a)(X, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(p.a)([{
                    topic: function(e) {
                        return Object(b.x)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(a.Component),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(ee, {
                        authToken: this.props.authToken,
                        sessionUser: this.props.sessionUser,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        hideEsportsSubscription: this.props.hideEsportsSubscription,
                        reportInteractive: this.reportInteractive
                    })
                }, t = r.__decorate([Object(l.d)("SubscribeButton")], t)
            }(a.Component);
        var ne = Object(o.b)(function(e) {
            return {
                authToken: Object(s.a)(e),
                sessionUser: Object(s.c)(e)
            }
        })(te);
        n.d(t, !1, function() {
            return te
        }), n.d(t, "a", function() {
            return ne
        }), n.d(t, !1, function() {
            return "subscribe-button__dropdown"
        }), n.d(t, !1, function() {
            return ee
        })
    },
    "8RKZ": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("GiK3"),
            o = n("qe65"),
            s = n("Odds"),
            l = (n("2rJy"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onImageLoad = function() {
                        n.setState({
                            imageLoaded: !0
                        })
                    }, n.onMouseOver = function() {
                        n.setState({
                            isHovering: !0
                        })
                    }, n.onMouseOut = function() {
                        n.setState({
                            isHovering: !1
                        })
                    }, n.renderImage = function() {
                        var e = null,
                            t = r("chat-image", {
                                "chat-image__animated": !!n.props.cheerText && n.state.imageLoaded
                            }, n.props.className);
                        if (n.props.srcSet.themed) e = a.createElement(s._2, {
                            display: n.state.imageLoaded ? s.R.InlineBlock : s.R.Hide
                        }, a.createElement(o.a, {
                            alt: n.props.alt,
                            className: t,
                            defaultRes: n.props.srcKey,
                            onLoad: n.onImageLoad,
                            onMouseOver: n.onMouseOver,
                            onMouseOut: n.onMouseOut,
                            sources: n.props.srcSet
                        }));
                        else {
                            for (var i = [], l = 0, c = Object.keys(n.props.srcSet.sources); l < c.length; l++) {
                                var d = c[l];
                                i.push(n.props.srcSet.sources[d] + " " + d)
                            }
                            e = a.createElement(s._2, {
                                display: n.state.imageLoaded ? s.R.InlineBlock : s.R.Hide
                            }, a.createElement("img", {
                                className: t,
                                onLoad: n.onImageLoad,
                                onMouseOver: n.onMouseOver,
                                onMouseOut: n.onMouseOut,
                                src: n.props.srcSet.sources[n.props.srcKey],
                                srcSet: i.join(","),
                                alt: n.props.alt
                            }))
                        }
                        return e
                    }, n.renderPlaceholder = function() {
                        return n.state.imageLoaded ? null : a.createElement(s._2, {
                            display: s.R.InlineBlock
                        }, a.createElement(s.Q, {
                            type: s._49.Span,
                            className: "chat-image__placeholder",
                            align: s._59.Top
                        }, a.createElement(s._14, {
                            height: 28,
                            width: 28
                        })))
                    }, n.state = {
                        imageLoaded: !1,
                        isHovering: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.state.isHovering && this.state.imageLoaded ? a.createElement(s._52, {
                        direction: this.props.tooltipDirection || s._54.Top,
                        label: this.props.alt,
                        display: s.R.Inline,
                        offsetY: "0.9rem",
                        "data-a-target": "emote-name"
                    }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText) : a.createElement("span", {
                        "data-a-target": "emote-name"
                    }, this.renderPlaceholder(), this.renderImage(), this.props.cheerText), this.props.cheerText ? a.createElement(s.Q, {
                        type: s._49.Span,
                        noWrap: !0
                    }, e) : e
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return l
        })
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            c = n("Odds"),
            d = n("bdk8");
        n.n(d);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.props.type === i.Download ? a.createElement("a", r.__assign({
                        href: n.props.url,
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(c._63)(n.props), {
                        download: n.props.text
                    }), n.renderIcon()) : n.isLink() ? a.createElement("a", r.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(c._63)(n.props)), n.renderIcon()) : a.createElement("button", r.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(c._63)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType(),
                        t = n.getAssetSizeFromType();
                    return a.createElement(c._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        alignItems: c.c.Center
                    }, a.createElement(c._24, {
                        asset: e,
                        width: t,
                        height: t
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getAssetSizeFromType = function() {
                    switch (n.props.type) {
                        case i.Download:
                            return 20;
                        default:
                            return 30
                    }
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
                            return Object(o.d)("Download", "SocialButton");
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return c._25.Twitter;
                        case i.Facebook:
                            return c._25.Facebook;
                        case i.VKontakte:
                            return c._25.VKontakte;
                        case i.Reddit:
                            return c._25.Reddit;
                        case i.Download:
                            return c._25.Download;
                        case i.Copy:
                        default:
                            return c._25.Copy
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
                        r = e.type,
                        a = n.getUrl(),
                        o = t || "";
                    switch (r) {
                        case i.Reddit:
                            return Object(l.b)(a, o);
                        case i.VKontakte:
                            return Object(l.d)(a);
                        case i.Facebook:
                            return Object(l.a)(a);
                        case i.Twitter:
                            return Object(l.c)(a, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return a.createElement(c._8, {
                    className: "social-button"
                }, a.createElement(c._52, {
                    label: this.getTooltipFromType(),
                    direction: c._54.Bottom
                }, this.renderLink()))
            }, t
        }(a.Component)
    },
    A5Hr: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            s = n("2KeS"),
            l = n("6sO2"),
            c = n("7vx8"),
            d = n("u8SD"),
            u = n("Kxgf"),
            p = n("oIkB"),
            m = n("HM6l"),
            h = n("vH/s"),
            g = n("CSlQ"),
            b = n("Odds"),
            f = (n("Vr0l"), "report-wizard-block"),
            v = "report-wizard-unblock",
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        userBlocked: t.props.userBlocked || !1
                    }, t.renderBlock = function() {
                        return a.createElement(b.O, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleBlock,
                            "data-test-selector": f
                        }, a.createElement(b._8, {
                            display: b.R.Flex,
                            alignItems: b.c.Center
                        }, a.createElement(b._24, {
                            type: b._26.Brand,
                            asset: b._25.Ban
                        }), a.createElement(b._8, {
                            margin: {
                                left: .5
                            }
                        }, Object(l.d)("Block {user}", {
                            user: t.props.targetUser.displayName
                        }, "ReportWizardBlockActions"))))
                    }, t.renderUnblock = function() {
                        return a.createElement(b._8, {
                            className: "reporting-wizard__block-actions",
                            display: b.R.Flex,
                            alignItems: b.c.Center
                        }, a.createElement(b._24, {
                            type: b._26.Success,
                            asset: b._25.FollowCheck
                        }), a.createElement(b._8, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(b.Q, {
                            className: "block-user__success",
                            type: b._49.Span
                        }, Object(l.d)("{user} blocked", {
                            user: t.props.targetUser.displayName
                        }, "ReportWizardBlockActions"))), a.createElement(b.O, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleUnblock,
                            "data-test-selector": v
                        }, a.createElement(b._8, {
                            margin: {
                                left: .5
                            }
                        }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                    }, t.handleBlock = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                return this.props.onBlock(), this.setState({
                                    userBlocked: !0
                                }), [2]
                            })
                        })
                    }, t.handleUnblock = function() {
                        t.props.onUnblock(), t.setState({
                            userBlocked: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock();
                    return a.createElement(b._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            top: 1
                        }
                    }, a.createElement(b._8, null, Object(l.d)("Would you like to block {user}?", {
                        user: this.props.targetUser.displayName
                    }, "ReportWizardBlockActions")), a.createElement(b._8, {
                        margin: {
                            y: 1
                        }
                    }, Object(l.d)("By blocking them, you will no longer see their messages, and they will not be able to host you or add you as a friend.", "ReportWizardBlockActions")), a.createElement(b._8, {
                        margin: {
                            top: 1
                        }
                    }, e))
                }, t
            }(a.Component),
            y = n("mw/a");
        ! function(e) {
            e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
        }(i || (i = {}));
        var S, _ = {
                generalFilter: function() {
                    return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                },
                me: function() {
                    return Object(l.d)("Me", "ReportModalWizard")
                },
                someoneElse: function() {
                    return Object(l.d)("Someone else", "ReportModalWizard")
                },
                sexuallyCoercive: function() {
                    return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                },
                abusiveViolence: function() {
                    return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                },
                commitingViolence: function() {
                    return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                },
                threatening: function() {
                    return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                },
                abusive: function() {
                    return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                }
            },
            C = {
                input_description: {
                    getTitle: function() {
                        return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                    },
                    value: "description",
                    type: i.Textarea,
                    required: !0
                },
                input_link: {
                    getTitle: function() {
                        return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                    },
                    rows: 2,
                    value: "external links",
                    type: i.Textarea
                },
                input_usernames: {
                    getTitle: function() {
                        return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                    },
                    value: "other usernames",
                    rows: 2,
                    type: i.Textarea
                },
                input_connection: {
                    getTitle: function() {
                        return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                    },
                    value: "offsite content connection",
                    type: i.Textarea
                },
                input_comments: {
                    getTitle: function() {
                        return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                    },
                    value: "comments",
                    type: i.Textarea
                },
                input_identifyOwner: {
                    getTitle: function() {
                        return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                    },
                    rows: 2,
                    value: "connect account owner",
                    type: i.Textarea
                },
                endBlurb_socialmedia: {
                    getTitle: function() {
                        return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                    },
                    type: i.Text
                },
                endBlurb_threat: {
                    getTitle: function() {
                        return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                    },
                    type: i.Text
                },
                endLink_selfharm: {
                    getTitle: function() {
                        return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                    },
                    value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                    type: i.Link
                },
                endLink_DMCA: {
                    getTitle: function() {
                        return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                    type: i.Link
                },
                endLink_trademark: {
                    getTitle: function() {
                        return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/trademark-policy/",
                    type: i.Link
                },
                endLink_devAgreement: {
                    getTitle: function() {
                        return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/developer-agreement/",
                    type: i.Link
                },
                endLink_eventCoC: {
                    getTitle: function() {
                        return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                    type: i.Link
                },
                messaging_general: {
                    getTitle: _.generalFilter,
                    value: "general_messaging",
                    omitFromDescription: !0
                },
                profile_general: {
                    getTitle: _.generalFilter,
                    value: "general_profile",
                    omitFromDescription: !0
                },
                maliciousRaid: {
                    getTitle: function() {
                        return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                    },
                    value: "malicious raid",
                    reportReason: y.b.Harassment
                },
                violence: {
                    getTitle: function() {
                        return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                    },
                    value: "violence/threats",
                    reportReason: y.b.Harm
                },
                report_username: {
                    getTitle: function() {
                        return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                    },
                    value: "inappropriate username",
                    reportReason: y.b.OffensiveUsername
                },
                report_emotes: {
                    getTitle: function() {
                        return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                    },
                    value: "inappropriate emotes",
                    reportReason: y.b.Other
                },
                abusive: {
                    getTitle: function() {
                        return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    value: "abusive"
                },
                scam: {
                    getTitle: function() {
                        return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                    },
                    value: "scam",
                    reportReason: y.b.Spam
                },
                emptyStream: {
                    getTitle: function() {
                        return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                    },
                    value: "empty stream"
                },
                impersonation: {
                    getTitle: function() {
                        return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: y.b.Impersonation
                },
                underage: {
                    getTitle: function() {
                        return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                    },
                    value: "underage",
                    reportReason: y.b.Underaged
                },
                report_ip: {
                    getTitle: function() {
                        return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                    },
                    value: "intellectual property"
                },
                inappropriateContent: {
                    getTitle: function() {
                        return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                    },
                    value: "inappropriate content"
                },
                violateDevAgreement: {
                    getTitle: function() {
                        return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                    },
                    value: "violating developer agreement"
                },
                revealPersonalInfo: {
                    getTitle: function() {
                        return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                    },
                    value: "revealing personal info",
                    reportReason: y.b.Other
                },
                inappropriateBadge: {
                    getTitle: function() {
                        return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                    },
                    value: "emote/subscriber badge",
                    reportReason: y.b.Other
                },
                noModeration: {
                    getTitle: function() {
                        return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                    },
                    value: "not moderating chat",
                    reportReason: y.b.Other
                },
                inappropriateExtension: {
                    getTitle: function() {
                        return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                    },
                    value: "inappropriate extension",
                    reportReason: y.b.Other
                },
                cheating: {
                    getTitle: function() {
                        return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                    },
                    value: "cheating",
                    reportReason: y.b.Cheating
                },
                bitsViolation: {
                    getTitle: function() {
                        return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                    },
                    value: "bits violation",
                    reportReason: y.b.BitsViolation
                },
                video_labeling: {
                    getTitle: function() {
                        return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                    },
                    value: "incorrect label",
                    reportReason: y.b.Miscategorized
                },
                video_inactive: {
                    getTitle: function() {
                        return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                    },
                    value: "inactive stream",
                    reportReason: y.b.Miscategorized
                },
                video_general: {
                    getTitle: _.generalFilter,
                    value: "general_video",
                    omitFromDescription: !0
                },
                hateSpeech: {
                    getTitle: function() {
                        return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                    },
                    value: "hate speech",
                    reportReason: y.b.HatefulConduct
                },
                harassment: {
                    getTitle: function() {
                        return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                    },
                    value: "harassment",
                    reportReason: y.b.Harassment
                },
                abusiveViolence: {
                    getTitle: _.abusiveViolence,
                    value: "threatening violence",
                    reportReason: y.b.Harm
                },
                commitingViolence: {
                    getTitle: _.commitingViolence,
                    value: "committing violence",
                    reportReason: y.b.Harm
                },
                swatting: {
                    getTitle: function() {
                        return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                    },
                    value: "swatting/ddosing",
                    reportReason: y.b.Harassment
                },
                personalInfo: {
                    getTitle: function() {
                        return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                    },
                    value: "revealing personal info",
                    reportReason: y.b.Harassment
                },
                threat_me: {
                    getTitle: function() {
                        return Object(l.d)("At me", "ReportModalWizard")
                    },
                    value: "against me",
                    reportReason: y.b.Harm
                },
                threat_person: {
                    getTitle: function() {
                        return Object(l.d)("At someone else", "ReportModalWizard")
                    },
                    value: "against another person",
                    reportReason: y.b.Harm
                },
                threat_group: {
                    getTitle: function() {
                        return Object(l.d)("At a group of people", "ReportModalWizard")
                    },
                    value: "against group of people",
                    reportReason: y.b.Harm
                },
                threat_selfharm: {
                    getTitle: function() {
                        return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                    },
                    value: "selfharm"
                },
                inappropriate_game: {
                    getTitle: function() {
                        return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                    },
                    value: "prohibited game",
                    reportReason: y.b.Prohibited
                },
                sexuallyViolent: {
                    getTitle: function() {
                        return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                    },
                    value: "sexually violent",
                    reportReason: y.b.SexualViolence
                },
                childAnimal: {
                    getTitle: function() {
                        return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                    },
                    value: "sexual conduct; child or animal",
                    reportReason: y.b.SexualViolence
                },
                pornographic: {
                    getTitle: function() {
                        return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                    },
                    value: "pornographic",
                    reportReason: y.b.SexualContent
                },
                gory: {
                    getTitle: function() {
                        return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                    },
                    value: "gory",
                    reportReason: y.b.Gore
                },
                suggestive: {
                    getTitle: function() {
                        return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                    },
                    value: "sexually suggestive",
                    reportReason: y.b.SexualContent
                },
                nudity: {
                    getTitle: function() {
                        return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                    },
                    value: "nudity",
                    reportReason: y.b.SexualContent
                },
                other: {
                    getTitle: function() {
                        return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                    },
                    value: "other",
                    reportReason: y.b.Other
                },
                evasion: {
                    getTitle: function() {
                        return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                    },
                    value: "ban evasion"
                },
                evasion_sitewide: {
                    getTitle: function() {
                        return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                    },
                    value: "sitewide ban",
                    reportReason: y.b.TosBanEvasion
                },
                evasion_chat: {
                    getTitle: function() {
                        return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                    },
                    value: "chat ban",
                    reportReason: y.b.ChatBanEvasion
                },
                evasion_messaging: {
                    getTitle: function() {
                        return Object(l.d)("A block from messaging me", "ReportModalWizard")
                    },
                    value: "messaging block",
                    reportReason: y.b.ChatBanEvasion
                },
                impersonation_me: {
                    getTitle: _.me,
                    value: "impersonating me",
                    reportReason: y.b.Impersonation
                },
                impersonation_brand: {
                    getTitle: function() {
                        return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                    },
                    value: "impersonating brand",
                    reportReason: y.b.Impersonation
                },
                impersonation_other: {
                    getTitle: _.someoneElse,
                    value: "impersonating someone else",
                    reportReason: y.b.Impersonation
                },
                selfharm: {
                    getTitle: function() {
                        return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                    },
                    value: "selfharm",
                    reportReason: y.b.SelfHarm
                },
                chat: {
                    getTitle: function() {
                        return Object(l.d)("In a stream chat message", "ReportModalWizard")
                    },
                    value: "chat"
                },
                profile: {
                    getTitle: function() {
                        return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                    },
                    value: "profile"
                },
                video: {
                    getTitle: function() {
                        return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                    },
                    value: "video"
                },
                room: {
                    getTitle: function(e) {
                        return Object(l.d)("In one of {username}'s rooms", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    value: "room"
                },
                whisper: {
                    getTitle: function() {
                        return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                    },
                    value: "whisper",
                    reportContext: y.a.Whisper
                },
                username: {
                    getTitle: function() {
                        return Object(l.d)("In the username", "ReportModalWizard")
                    },
                    value: "username",
                    reportReason: y.b.OffensiveUsername
                },
                report_other: {
                    getTitle: function() {
                        return Object(l.d)("Somewhere else...", "ReportModalWizard")
                    },
                    value: "somewhere else",
                    omitFromDescription: !0
                },
                video_streamer: {
                    getTitle: function() {
                        return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                    },
                    value: "streamer"
                },
                video_someoneElse: {
                    getTitle: function() {
                        return Object(l.d)("Someone else in the video", "ReportModalWizard")
                    },
                    value: "someone else in video"
                },
                video_chatSomeone: {
                    getTitle: function() {
                        return Object(l.d)("Someone in chat", "ReportModalWizard")
                    },
                    value: "someone in chat",
                    differentTarget: !0
                },
                report_channelOwner: {
                    getTitle: function() {
                        return Object(l.d)("The channel owner", "ReportModalWizard")
                    },
                    value: "channel owner"
                },
                report_member: {
                    getTitle: function() {
                        return Object(l.d)("Another community member", "ReportModalWizard")
                    },
                    value: "community member",
                    differentTarget: !0
                },
                location_onTwitch: {
                    getTitle: function() {
                        return Object(l.d)("On Twitch", "ReportModalWizard")
                    },
                    value: "on twitch"
                },
                location_anotherSite: {
                    getTitle: function() {
                        return Object(l.d)("On another site or service", "RpoertModalWizard")
                    },
                    value: "another site"
                },
                location_TwitchEvent: {
                    getTitle: function() {
                        return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                    },
                    value: "twitch event"
                },
                external_incitingRaids: {
                    getTitle: function() {
                        return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                    },
                    reportReason: y.b.Harassment,
                    value: "brigading/raids"
                },
                external_threatening: {
                    getTitle: _.threatening,
                    value: "threatening"
                },
                external_harassment: {
                    getTitle: _.abusive,
                    value: "hateful/harassing"
                },
                external_abusiveViolence: {
                    getTitle: _.abusiveViolence,
                    value: "external site; threatening violence",
                    reportReason: y.b.Harm
                },
                external_commitingViolence: {
                    getTitle: _.commitingViolence,
                    value: "external site; committing violence",
                    reportReason: y.b.Harm
                },
                conduct_impersonation: {
                    getTitle: function() {
                        return Object(l.d)("impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: y.b.Impersonation
                },
                spam: {
                    getTitle: function() {
                        return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                    },
                    value: "spam",
                    reportReason: y.b.Spam
                },
                spam_bot: {
                    getTitle: function() {
                        return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                    },
                    value: "bot"
                },
                spam_scam: {
                    getTitle: function() {
                        return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                    },
                    value: "scam or malicious links"
                },
                spam_repeated: {
                    getTitle: function() {
                        return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                    },
                    value: "repeat messages"
                }
            },
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = e.target,
                            i = n.name,
                            r = n.value;
                        t.props.onChangeText(i, r)
                    }, t.onSelect = function(e) {
                        if (t.props.currentCard.items && e.currentTarget.parentElement) {
                            var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                i = t.props.currentCard.items[n];
                            t.props.onChangeRadio(i)
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.currentCard.getDescription ? a.createElement(b._8, {
                        padding: {
                            bottom: 1
                        }
                    }, this.props.currentCard.getDescription()) : null;
                    return a.createElement(b._8, {
                        className: "reporting-wizard-card"
                    }, e, a.createElement(b.W, {
                        label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                    }, this.renderCardItems()))
                }, t.prototype.renderCardItems = function() {
                    var e = this,
                        t = this.props.currentCard,
                        n = [];
                    return t.items && t.type && (n = t.items.filter(function(e) {
                        return !!e
                    }).map(function(t, n) {
                        switch (t.type) {
                            case i.Text:
                                return a.createElement(b._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, t.getTitle());
                            case i.Link:
                                return a.createElement(b._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, a.createElement(b.O, {
                                    to: t.value,
                                    targetBlank: !0
                                }, a.createElement(b._8, {
                                    display: b.R.Flex
                                }, a.createElement(b._8, {
                                    display: b.R.Inline,
                                    padding: {
                                        right: .5
                                    }
                                }, a.createElement(b._24, {
                                    asset: b._25.Document
                                })), t.getTitle())));
                            case i.Textarea:
                                var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                    o = t.required && (!r || !!r && 0 === r.trim().length);
                                return a.createElement(b._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, a.createElement(b.W, {
                                    label: t.getTitle(),
                                    labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                }, a.createElement(b._46, {
                                    onChange: e.onChange,
                                    rows: t.rows || 3,
                                    name: t.value,
                                    error: e.props.error && o,
                                    value: r,
                                    "data-test-selector": "report-wizard-textarea"
                                })));
                            case i.MultipleChoice:
                            default:
                                return a.createElement(b._8, {
                                    key: n,
                                    padding: {
                                        y: .5
                                    }
                                }, a.createElement(b._21, {
                                    checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                    onChange: e.onSelect,
                                    label: t.getTitle(e.props.targetUser.displayName),
                                    "data-a-index": n,
                                    name: "card",
                                    value: t.value
                                }))
                        }
                    })), n
                }, t
            }(a.Component),
            E = n("LjAQ");
        ! function(e) {
            e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
        }(S || (S = {}));
        var O, N, w, P = {
                contentGeneral: function() {
                    return Object(l.d)("What would you like to report?", "ReportModalWizard")
                },
                content: function() {
                    return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                },
                identifyUser: function() {
                    return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                },
                thisPersonIs: function() {
                    return Object(l.d)("This person is...", "ReportModalWizard")
                },
                relevantStatements: function() {
                    return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                }
            },
            R = {
                report: function(e) {
                    return Object(l.d)("Report {username}", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportVideo: function(e) {
                    return Object(l.d)("Report {username}'s Video", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportMessage: function(e) {
                    return Object(l.d)("Report {username}'s Message", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportProfile: function(e) {
                    return Object(l.d)("Report {username}'s Profile Or Other Content", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportAbusive: function(e) {
                    return Object(l.d)("Report {username} for Abusive Conduct", {
                        username: e
                    }, "ReportModalWizard")
                },
                tellUsMore: function() {
                    return Object(l.d)("Tell Us More", "ReportModalWizard")
                },
                thanks: function() {
                    return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                },
                thanksConcern: function() {
                    return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                }
            },
            I = {
                getDescription: function() {
                    return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                },
                blockPrompt: !0,
                getTitle: R.thanks,
                type: S.Info,
                value: "end card"
            },
            D = {
                socialMedia: r.__assign({}, I, {
                    items: [C.endBlurb_socialmedia]
                }),
                violence: r.__assign({}, I, {
                    items: [C.endBlurb_threat]
                }),
                legal: {
                    getTitle: R.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                    },
                    items: [C.endLink_DMCA, C.endLink_trademark, C.endLink_devAgreement],
                    type: S.Info,
                    value: "ip end"
                },
                selfharm: {
                    getTitle: R.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                    },
                    items: [C.endLink_selfharm],
                    type: S.Info,
                    value: "selfharm end"
                },
                twitchEvent: {
                    getTitle: R.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                    },
                    items: [C.endLink_eventCoC],
                    value: "twitch event end",
                    type: S.Info
                }
            },
            F = {
                getTitle: R.report,
                getLabel: function() {
                    return Object(l.d)("Where is the problem?", "ReportModalWizard")
                },
                items: [C.video, C.whisper, C.chat, C.room, C.profile, C.username, C.report_other],
                type: S.MultipleChoice,
                value: "content type"
            },
            x = {
                identifyUser: {
                    getTitle: R.reportVideo,
                    getLabel: P.identifyUser,
                    items: [C.video_streamer, C.video_someoneElse, C.video_chatSomeone],
                    type: S.MultipleChoice,
                    value: "video identify user"
                },
                content: {
                    getTitle: R.reportVideo,
                    getLabel: P.contentGeneral,
                    items: [C.revealPersonalInfo, C.video_labeling, C.video_inactive, C.video_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                    type: S.MultipleChoice,
                    value: "video report reason"
                },
                general: {
                    getTitle: R.reportVideo,
                    getLabel: P.content,
                    items: [C.report_username, C.violence, C.abusive, C.cheating, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                    type: S.MultipleChoice,
                    value: "video general report reason"
                }
            },
            j = {
                content: {
                    getTitle: R.reportMessage,
                    getLabel: P.contentGeneral,
                    items: [C.revealPersonalInfo, C.evasion, C.spam, C.maliciousRaid, C.report_username, C.messaging_general, C.selfharm],
                    type: S.MultipleChoice,
                    value: "message report reason"
                },
                general: {
                    getTitle: R.reportMessage,
                    getLabel: P.content,
                    items: [C.report_emotes, C.violence, C.abusive, C.inappropriateContent, C.impersonation, C.underage, C.bitsViolation],
                    type: S.MultipleChoice,
                    value: "message general report reason"
                }
            },
            M = r.__assign({}, j.content, {
                getDescription: function() {
                    return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                }
            }),
            L = {
                content: {
                    getTitle: R.reportProfile,
                    getLabel: P.contentGeneral,
                    items: [C.revealPersonalInfo, C.inappropriateBadge, C.inappropriateExtension, C.noModeration, C.profile_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                    type: S.MultipleChoice,
                    value: "profile report reason"
                },
                general: {
                    getTitle: R.reportProfile,
                    getLabel: P.content,
                    items: [C.report_username, C.violence, C.abusive, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                    type: S.MultipleChoice,
                    value: "profile general report reason"
                }
            },
            U = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Room", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: P.identifyUser,
                items: [C.report_channelOwner, C.report_member],
                value: "room report user",
                type: S.MultipleChoice
            },
            A = {
                getTitle: R.tellUsMore,
                items: [C.input_description],
                type: S.Confirm,
                value: "tell us more"
            },
            B = {
                banEvasion: r.__assign({}, A, {
                    items: [C.input_usernames, C.input_description],
                    value: "ban evasion tell us more"
                }),
                socialMedia: r.__assign({}, A, {
                    items: [C.input_link, C.input_connection, C.input_description],
                    nextCard: D.socialMedia,
                    value: "social media tell us more"
                })
            },
            V = {
                content: {
                    getTitle: R.reportAbusive,
                    getLabel: P.relevantStatements,
                    items: [C.hateSpeech, C.harassment, C.abusiveViolence, C.commitingViolence, C.swatting, C.personalInfo],
                    type: S.MultipleChoice,
                    value: "abuse type"
                },
                violence: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Violence or Threats", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                    },
                    items: [C.threat_me, C.threat_person, C.threat_group, C.threat_selfharm],
                    type: S.MultipleChoice,
                    value: "violence type"
                }
            },
            W = {
                identifyLocation: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for something else...", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                    },
                    items: [C.location_onTwitch, C.location_anotherSite, C.location_TwitchEvent],
                    type: S.MultipleChoice,
                    value: "off-site conduct location"
                },
                externalSite: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: P.thisPersonIs,
                    getDescription: function() {
                        return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                    },
                    items: [C.external_incitingRaids, C.external_threatening, C.external_harassment],
                    type: S.MultipleChoice,
                    nextCard: B.socialMedia,
                    value: "external site conduct"
                },
                external_violence: r.__assign({}, V.violence, {
                    items: [C.threat_me, C.threat_person, C.threat_group],
                    nextCard: B.socialMedia
                }),
                external_abusive: r.__assign({}, V.content, {
                    items: [C.hateSpeech, C.harassment, C.external_abusiveViolence, C.external_commitingViolence, C.swatting, C.personalInfo],
                    nextCard: B.socialMedia
                })
            },
            G = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: P.contentGeneral,
                items: [C.spam_bot, C.spam_scam, C.spam_repeated],
                type: S.MultipleChoice,
                value: "spam type"
            },
            z = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Inappropriate Content", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: P.relevantStatements,
                items: [C.inappropriate_game, C.gory, C.sexuallyViolent, C.childAnimal, C.pornographic, C.suggestive, C.nudity, C.other],
                type: S.MultipleChoice,
                value: "inappropriate content type"
            },
            H = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Evading a Ban", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: function() {
                    return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                },
                value: "ban type",
                items: [C.evasion_chat, C.evasion_sitewide, C.evasion_messaging],
                type: S.MultipleChoice,
                nextCard: B.banEvasion
            },
            q = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Impersonation", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: function() {
                    return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                },
                getDescription: function() {
                    return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                },
                items: [C.impersonation_me, C.impersonation_brand, C.impersonation_other],
                type: S.MultipleChoice,
                value: "impersonation type"
            },
            Q = F,
            K = A,
            $ = I,
            Y = {
                video: x.identifyUser,
                whisper: M,
                chat: j.content,
                profile: L.content,
                room: U,
                "somewhere else": W.identifyLocation,
                streamer: x.content,
                "someone else in video": x.content,
                "someone in chat": j.content,
                general_video: x.general,
                general_messaging: j.general,
                general_profile: L.general,
                "channel owner": L.content,
                "community member": j.content,
                "on twitch": L.content,
                "another site": W.externalSite,
                "twitch event": D.twitchEvent,
                "brigading/raids": B.socialMedia,
                threatening: W.external_violence,
                "hateful/harassing": W.external_abusive,
                "external site; threatening violence": W.external_violence,
                "external site; committing violence": W.external_violence,
                "external site; scam": B.socialMedia,
                "ban evasion": H,
                spam: G,
                hateful: V.content,
                impersonation: q,
                "violence/threats": V.violence,
                "threatening violence": V.violence,
                "committing violence": V.violence,
                abusive: V.content,
                "inappropriate content": z,
                "intellectual property": D.legal,
                "violating developer agreement": D.legal
            },
            J = {
                selfharm: D.selfharm,
                harm: D.violence,
                other: $
            },
            Z = {
                CHANNEL_FEED_POST_REPORT: L.content,
                COMMUNITY_REPORT: L.content,
                CHAT_REPORT: j.content,
                CLIP_REPORT: x.content,
                EVENT_REPORT: L.content,
                EXTENSION_REPORT: L.content,
                LIVE_UP_REPORT: L.content,
                ROOM_REPORT: U,
                WHISPER_REPORT: M,
                VOD_COMMENT_REPORT: j.content
            },
            X = "report-wizard-back",
            ee = "report-wizard-close",
            te = "report-wizard-next",
            ne = "report-wizard-submit",
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentCard: t.props.currentCard || Z[t.props.reportContentType] || Q,
                        prevCards: [],
                        currentSelection: null,
                        prevSelections: [],
                        displacedSelections: [],
                        userTextInput: {},
                        error: "",
                        reportReason: t.props.reportReason || "",
                        modalCloseTracked: !1,
                        targetUnknown: !1,
                        reportContext: t.props.reportContentType
                    }, t.renderPrimer = function() {
                        return a.createElement(b._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(b.Q, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                    }, t.renderButtons = function() {
                        var e = Object(l.d)("Close", "ReportModalWizard"),
                            n = t.handleClose,
                            i = ee,
                            r = !1,
                            o = t.state.prevCards.length ? t.renderBack() : null;
                        switch (t.state.currentCard.type) {
                            case S.MultipleChoice:
                                e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, i = te, r = !t.state.currentSelection;
                                break;
                            case S.Confirm:
                                e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, i = ne
                        }
                        return a.createElement(b._8, null, o, a.createElement(b.v, {
                            onClick: n,
                            disabled: r,
                            "data-test-selector": i
                        }, a.createElement(b._8, {
                            padding: {
                                x: 1
                            }
                        }, e)))
                    }, t.renderBack = function() {
                        return a.createElement(b._8, {
                            margin: {
                                right: 1
                            },
                            display: b.R.InlineBlock
                        }, a.createElement(b.v, {
                            type: b.B.Hollow,
                            onClick: t.handleBack,
                            "data-test-selector": X
                        }, a.createElement(b._8, {
                            padding: {
                                x: 1
                            }
                        }, Object(l.d)("Back", "ReportModalWizard"))))
                    }, t.getTitle = function() {
                        return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUserID ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                    }, t.handleClose = function() {
                        t.setState({
                            modalCloseTracked: !0
                        }, function() {
                            return t.props.trackClose(w.Finish, t.state.currentCard.value)
                        }), t.props.onClose()
                    }, t.handleNext = function() {
                        if (t.state.currentSelection && t.state.currentSelection.value) {
                            var e = t.state.currentCard,
                                n = t.state.prevCards.concat(e),
                                i = t.state.prevSelections.concat(t.state.currentSelection),
                                r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                o = t.state.currentSelection.reportContext || t.state.reportContext,
                                s = e.nextCard || K;
                            Y[t.state.currentSelection.value] && (s = Y[t.state.currentSelection.value]);
                            var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                c = s.type === S.Info;
                            t.setState({
                                currentCard: s,
                                reportReason: l,
                                prevCards: c ? [] : n,
                                prevSelections: i,
                                targetUnknown: a,
                                currentSelection: r || null,
                                displacedSelections: t.state.displacedSelections.slice(0, -1),
                                reportContext: o
                            }, function() {
                                return t.trackNavigation(N.Next, e.value)
                            })
                        }
                    }, t.createReportDescription = function() {
                        return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                            if (!e.omitFromDescription) return e.value
                        }).filter(function(e) {
                            return !!e
                        }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                            return e + ": " + t.state.userTextInput[e]
                        }).join("\n")
                    }, t.requiredInputsNonEmpty = function() {
                        if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                            if (e.type !== i.Textarea || !e.required) return !1;
                            var n = t.state.userTextInput[e.value],
                                r = n && 0 === n.trim().length;
                            return !n || r
                        }).length
                    }, t.handleSubmit = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                    case 1:
                                        switch (r.sent(), this.props.submitStatus) {
                                            case E.b.FormError:
                                                this.setState({
                                                    error: e
                                                });
                                                break;
                                            case E.b.Success:
                                                i = $, J[t] && (i = J[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                    currentCard: i,
                                                    prevCards: [],
                                                    prevSelections: [],
                                                    currentSelection: null,
                                                    displacedSelections: [],
                                                    userTextInput: {},
                                                    error: ""
                                                }, function() {
                                                    return a.trackNavigation(N.Submit)
                                                });
                                                break;
                                            case E.b.UserError:
                                                this.setState({
                                                    error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                });
                                                break;
                                            case E.b.MutationError:
                                            default:
                                                this.setState({
                                                    error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                })
                                        }
                                        return [3, 3];
                                    case 2:
                                        this.props.onError(E.b.FormError), this.setState({
                                            error: e
                                        }), r.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleBack = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, o = this;
                            return r.__generator(this, function(r) {
                                return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                    currentCard: t,
                                    currentSelection: n,
                                    displacedSelections: a,
                                    prevCards: this.state.prevCards.slice(0, -1),
                                    prevSelections: this.state.prevSelections.slice(0, -1),
                                    error: "",
                                    targetUnknown: i
                                }, function() {
                                    return o.trackNavigation(N.Back, e.value)
                                }), [2]
                            })
                        })
                    }, t.handleTextInput = function(e, n) {
                        var i = t.state.userTextInput;
                        i[e] = n, t.setState({
                            userTextInput: i
                        })
                    }, t.handleSelection = function(e) {
                        if (t.state.currentCard.items && e !== t.state.currentSelection) {
                            var n = t.state.targetUnknown;
                            if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                return e.differentTarget
                            }).length;
                            var i = t.state.reportContext;
                            (t.state.displacedSelections.filter(function(e) {
                                return e.reportContext
                            }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (i = t.props.reportContentType), t.setState({
                                currentSelection: e,
                                displacedSelections: [],
                                userTextInput: {},
                                targetUnknown: n,
                                reportContext: i
                            })
                        }
                    }, t.trackNavigation = function(e, n) {
                        t.props.trackAction(e, n, t.state.currentCard.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.state.modalCloseTracked || this.props.trackClose(w.Close, this.state.currentCard.value)
                }, t.prototype.render = function() {
                    var e = this.state.currentCard.type === S.Info && this.state.currentCard.blockPrompt ? a.createElement(k, {
                            targetUser: this.props.targetUser,
                            onBlock: this.props.onBlock,
                            onUnblock: this.props.onUnblock,
                            userBlocked: this.props.userBlocked
                        }) : null,
                        t = this.state.error ? a.createElement(b._35, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            padding: 1,
                            className: "reporting__error-container"
                        }, this.state.error) : null,
                        n = this.state.prevCards.length || this.state.currentCard.type === S.Info ? null : this.renderPrimer();
                    return a.createElement(b._35, {
                        className: "reporting-wizard",
                        display: b.R.Flex,
                        margin: {
                            x: 1
                        },
                        flexDirection: b.T.Column,
                        fullHeight: !0,
                        "data-test-card-value": this.state.currentCard.value
                    }, t, a.createElement(b.Q, {
                        bold: !0,
                        fontSize: b.V.Size4
                    }, this.getTitle()), n, a.createElement(b._8, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(T, {
                        currentCard: this.state.currentCard,
                        currentSelection: this.state.currentSelection,
                        targetUser: this.props.targetUser,
                        targetUserID: this.props.targetUserID,
                        onChangeRadio: this.handleSelection,
                        onChangeText: this.handleTextInput,
                        userTextInputs: this.state.userTextInput,
                        error: this.props.submitStatus === E.b.FormError && !!this.state.error
                    }), e), this.renderButtons())
                }, t
            }(a.Component),
            re = n("xwpJ"),
            ae = n("mmQh"),
            oe = n("mRH2"),
            se = n("IRHd");
        n.d(t, "c", function() {
                return N
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "b", function() {
                return ce
            }),
            function(e) {
                e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(O || (O = {})),
            function(e) {
                e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(N || (N = {})),
            function(e) {
                e.Close = "close", e.Finish = "finish"
            }(w || (w = {}));
        var le = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleSubmit = function(e, t, i, a, o) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, s, c, d, u = this;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (e !== E.a) return [3, 5];
                                    c = {
                                        userID: this.props.reportContext.targetUserID,
                                        communityID: i || "",
                                        reason: t
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                case 2:
                                    return r.sent(), l.o.tracking.track(h.SpadeEventType.CommunityModeration, {
                                        community_id: i,
                                        name: a,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        target_id: this.props.reportContext.targetUserID,
                                        action: "report",
                                        reason: e
                                    }), this.setState({
                                        submitStatus: E.b.Success
                                    }, function() {
                                        u.state.showWizard || u.trackAction(O.Submit)
                                    }), [3, 4];
                                case 3:
                                    return n = r.sent(), l.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                        submitStatus: E.b.MutationError
                                    }), [3, 4];
                                case 4:
                                    return [3, 9];
                                case 5:
                                    if (s = o === y.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                            description: t,
                                            reason: e,
                                            content: s,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === y.a.Community && this.props.reportContext.extra && (c.description = Object(re.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                        submitStatus: E.b.UserError
                                    }), [2];
                                    r.label = 6;
                                case 6:
                                    return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                case 7:
                                    return r.sent(), this.props.reportContext.contentType === y.a.Community && l.o.tracking.track(h.SpadeEventType.CommunityReport, {
                                        community_id: this.props.reportContext.contentID,
                                        name: this.props.reportContext.extra,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        reason: e
                                    }), this.setState({
                                        submitStatus: E.b.Success
                                    }, function() {
                                        u.state.showWizard || u.trackAction(O.Submit)
                                    }), [3, 9];
                                case 8:
                                    return d = r.sent(), l.j.error(d, "ReportUser Mutation failed."), this.setState({
                                        submitStatus: E.b.MutationError
                                    }), [3, 9];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, n.handleChildError = function(e) {
                    return n.setState({
                        submitStatus: e
                    })
                }, n.handleClose = function() {
                    n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                }, n.onBlock = function() {
                    n.props.blockUserMutation(n.props.reportContext.targetUserID, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                        __typename: "User"
                    })), n.setState({
                        userBlocked: !0
                    })
                }, n.onUnblock = function() {
                    n.props.unblockUserMutation(n.props.reportContext.targetUserID, r.__assign({}, n.props.sessionUser, {
                        __typename: "User"
                    })), n.setState({
                        userBlocked: !1
                    })
                }, n.trackOpen = function(e) {
                    n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(N.Open, void 0, e) : n.trackAction(O.Open), n.setState({
                        openEventSent: !0
                    }))
                }, n.trackClose = function(e, t) {
                    n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(N.Close, t, void 0, e) : n.trackAction(O.Close), n.setState({
                        closeEventSent: !0
                    }))
                }, n.trackWizardAction = function(e, t, i, r) {
                    l.o.tracking.track(h.SpadeEventType.ReportWizardFlowAction, {
                        ui_context: n.props.reportContext.contentType,
                        target_user_id: n.props.reportContext.targetUserID,
                        report_sent: n.state.submitStatus === E.b.Success,
                        modal_type: "wizard_v1",
                        extra_user_id: n.props.reportContext.additionalTrackingID,
                        action: e,
                        close_type: r,
                        report_session_id: n.reportID,
                        current_step: t,
                        navigated_to: i
                    })
                }, n.trackAction = function(e) {
                    l.o.tracking.track(h.SpadeEventType.ReportFlowAction, {
                        ui_context: n.props.reportContext.contentType,
                        target_user_id: n.props.reportContext.targetUserID,
                        report_sent: n.state.submitStatus === E.b.Success,
                        extra_user_id: n.props.reportContext.additionalTrackingID,
                        action: e,
                        report_session_id: n.reportID
                    })
                }, n.reportID = Object(m.a)();
                var i = l.o.experiments.getAssignment("TWILIGHT_NEW_REPORTING_WIZARD");
                return n.state = {
                    submitStatus: E.b.Unsubmitted,
                    showWizard: "yes" === i,
                    openEventSent: !1,
                    closeEventSent: !1,
                    userBlocked: !1
                }, n
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.trackOpen()
            }, t.prototype.componentWillUnmount = function() {
                this.handleClose(), this.state.showWizard || this.trackClose()
            }, t.prototype.render = function() {
                var e = {
                    onClose: this.handleClose,
                    onError: this.handleChildError,
                    onSubmit: this.handleSubmit,
                    reportContentType: this.props.reportContext.contentType,
                    submitStatus: this.state.submitStatus,
                    targetUserID: this.props.reportContext.targetUserID,
                    title: this.props.title,
                    defaultDescription: this.props.defaultDescription
                };
                return this.state.showWizard ? this.props.data.loading ? a.createElement(b._10, null) : a.createElement(ie, r.__assign({}, e, {
                    user: this.props.sessionUser,
                    targetUser: this.props.data.user,
                    onBlock: this.onBlock,
                    onUnblock: this.onUnblock,
                    trackAction: this.trackWizardAction,
                    trackClose: this.trackClose,
                    userBlocked: this.userBlocked
                })) : a.createElement(E.c, r.__assign({}, e))
            }, Object.defineProperty(t.prototype, "userBlocked", {
                get: function() {
                    var e = this;
                    return !(!this.props.data.currentUser.blockedUsers || !this.props.data.currentUser.blockedUsers.find(function(t) {
                        return !!t && t.id === e.props.reportContext.targetUserID
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.Component);
        var ce = Object(s.d)(Object(c.a)(ae, {
            name: "reportUserInCommunity"
        }), Object(c.a)(oe, {
            name: "reportUser"
        }), Object(c.a)(se, {
            options: function(e) {
                return {
                    variables: {
                        userId: e.reportContext.targetUserID
                    }
                }
            }
        }), Object(g.d)("ReportUser", {
            autoReportInteractive: !0
        }), Object(d.a)(), Object(u.a)(), Object(o.b)(function(e) {
            return {
                sessionUser: e.session.user
            }
        }, null))(le)
    },
    AoO8: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            return l(function(e) {
                e.video && (e.video = Object(o.b)(e.video));
                var t = r.stringify(e);
                return a.o.config.playerBaseURL + "/?" + t
            }(e), t)
        }, t.a = l;
        var i = n("TToO"),
            r = n("OAwv"),
            a = (n.n(r), n("6sO2")),
            o = n("JpYe"),
            s = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function l(e, t) {
            void 0 === t && (t = s);
            var n, r, a = i.__assign({}, s, t),
                o = '<iframe src="' + e + '" frameborder="0" ' + (a.allowFullscreen ? 'allowfullscreen="true" ' : "") + (a.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + a.height + '" width="' + a.width + '"></iframe>';
            return a.textLink && (o += (n = a.textLink.url, r = a.textLink.text, '<a href="' + n + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + r + "</a>")), o
        }
    },
    AwFw: function(e, t) {},
    Bir6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
    },
    CwIZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), t.b = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n, l, c, d, u, p, m, h, g, b, f, v;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            t = r.n.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                channelID: e.channelID,
                                withVideo: !1
                            }, n && (l.withVideo = !0, l.videoID = t), c = null, i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, r.o.apollo.client.query({
                                query: s,
                                variables: l
                            })];
                        case 2:
                            return c = i.sent(), [3, 4];
                        case 3:
                            return d = i.sent(), r.j.error(d, "Failed to make query for channel info in FollowEvent reporting.", {
                                channelID: e.channelID
                            }), [3, 4];
                        case 4:
                            return u = c && c.data && c.data.user || null, c && !u && r.j.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                channelID: e.channelID
                            }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(o.a)(m.broadcastType) : r.j.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                currentVideoID: t
                            })), h = u && u.self, g = h ? !!h.subscriptionBenefit : null, b = h && h.subscriptionBenefit && h.subscriptionBenefit.purchasedWithPrime || !1, f = h ? h.canPrimeSubscribe : null, v = {
                                action: e.action,
                                can_subscribe: f,
                                channel: e.channelLogin,
                                channel_id: e.channelID,
                                checkout_button_tier: e.checkoutButtonTier,
                                has_sub_credit: e.hasSubCredit,
                                host_channel: e.hostChannelLogin,
                                host_channel_id: e.hostChannelID,
                                is_menu_open: e.isMenuOpen,
                                is_subscribed: g,
                                is_subscribed_current_tier: h && h.subscriptionBenefit && h.subscriptionBenefit.tier,
                                sub_location: e.sub_location,
                                sub_recipient: e.giftRecipient,
                                modal: e.modal,
                                modal_level: e.modalLevel || "",
                                show_prime_content: e.showPrimeContent,
                                show_resub: u ? f && b : null,
                                vod_id: t,
                                vod_type: p,
                                viewport_height: window.innerHeight,
                                viewport_width: window.innerWidth
                            }, r.n.track(a.SpadeEventType.Subscription, v), [2]
                    }
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("vH/s"),
            o = n("xrVp"),
            s = n("3QSP"),
            l = (n.n(s), {
                BuyGiftSub: "buy_gift_sub",
                ClickCheckout: "click_checkout_button",
                ClickMoreSubOptions: "more_options_click",
                ClickGiftSubOptions: "gift_options_click",
                ClickPrimeFAQ: "click_prime_faq",
                ClickSignupForPrime: "click_signup_for_prime",
                ClickBack: "back_top_level",
                CloseSubMenu: "close_subscribe_menu",
                GiftASub: "gift_a_sub",
                OpenSubMenu: "open_subscribe_menu",
                SubWithPrime: "samus_spend_credit"
            })
    },
    DquS: function(e, t) {},
    E5Ip: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewTitleEdit"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "broadcaster"
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
                end: 90
            }
        };
        n.loc.source = {
            body: "query ClipsViewTitleEdit($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ntitle\n}\n}",
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
    GHQc: function(e, t) {},
    HZww: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            return r.PubsubTopic.BroadcastSettingsUpdate + "." + e
        }, t.e = function(e) {
            return r.PubsubTopic.ChatRoom + "." + e
        }, t.f = function(e) {
            return r.PubsubTopic.ChatRoomsChannel + "." + e
        }, t.g = function(e) {
            return r.PubsubTopic.ChatRoomsUser + "." + e
        }, t.z = function(e) {
            return r.PubsubTopic.VideoThumbnailProcessing + "." + e
        }, t.i = function(e) {
            return r.PubsubTopic.ImageUpload + "." + e
        }, t.s = function(e) {
            return r.PubsubTopic.UploadService + "." + e
        }, t.y = function(e) {
            return r.PubsubTopic.VideoPlaybackById + "." + e
        }, t.l = function(e) {
            return r.PubsubTopic.PayoutOnboardingEvents + "." + e
        }, t.m = function(e) {
            return r.PubsubTopic.Presence + "." + e
        }, t.j = function(e, t) {
            return r.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
        }, t.n = function(e) {
            return r.PubsubTopic.Raid + "." + e
        }, t.o = function(e) {
            return r.PubsubTopic.StreamChange + "." + e
        }, t.h = function(e) {
            return r.PubsubTopic.Friendship + "." + e
        }, t.b = function(e) {
            return r.PubsubTopic.ChannelBitsPinEvents + "." + e
        }, t.a = function(e) {
            return r.PubsubTopic.BitsLeaderboardEvents + "." + e.id
        }, t.t = function(e) {
            return r.PubsubTopic.UserBitsUpdates + "." + e
        }, t.x = function(e) {
            return r.PubsubTopic.UserSubscribeEvents + "." + e
        }, t.w = function(e) {
            return r.PubsubTopic.UserCrateEvents + "." + e
        }, t.u = function(e) {
            return r.PubsubTopic.CampaignUserEvents + "." + e
        }, t.v = function(e) {
            return r.PubsubTopic.UserCommerceEvents + "." + e
        }, t.A = function(e) {
            return r.PubsubTopic.Whispers + "." + e
        }, t.k = function(e) {
            return r.PubsubTopic.OnsiteNotifications + "." + e
        }, t.p = function(e) {
            return r.PubsubTopic.StreamChatRoom + "." + e
        }, t.d = function(e) {
            return r.PubsubTopic.ChannelEventUpdates + "." + e
        }, t.r = function(e) {
            return i.k.subscribe({
                topic: e.topic,
                onMessage: function(t) {
                    t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(a.e)(e.query, e.variables, function(n) {
                        return e.mutator(t, n)
                    }, function(n) {
                        return !!e.skipMessage && e.skipMessage(t, n)
                    })
                }
            })
        }, t.q = function(e) {
            return i.k.subscribe({
                topic: e.topic,
                onMessage: function(t) {
                    t.type && t.type !== e.type || Object(a.d)({
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
    Hjbq: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e) {
            return {
                type: i,
                playerRefID: e
            }
        };
        var i = "video-player.VIDEO_PLAYER_INSTANCE_STARTED"
    },
    I4TS: function(e, t) {},
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
    IRHd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_TargetReportUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                    value: "userId"
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
                                    value: "blockedUsers"
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
                end: 132
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_TargetReportUser($userId: ID!) {\nuser(id: $userId) {\nid\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    IcDq: function(e, t) {},
    Jjeq: function(e, t) {},
    JpYe: function(e, t, n) {
        "use strict";
        t.e = function(e, t, n, r) {
            var o = r || l(t),
                d = "";
            o && (d = "?sort=" + function(e) {
                switch (e) {
                    case s.b:
                        return i.Popular;
                    case s.a:
                        return i.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(o));
            var u = n ? n.toLowerCase() : function(e) {
                var t = c(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            a.o.history.push(e + "/" + u + d)
        }, t.d = l, t.c = c, t.a = function(e) {
            var t = r.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.f = d, t.b = function(e) {
            if ("" === e) return "";
            if (e.startsWith("v")) return e;
            return "v" + e
        };
        var i, r = n("OAwv"),
            a = (n.n(r), n("6sO2")),
            o = n("6WAQ"),
            s = n("3yQz");

        function l(e) {
            return d(r.parse(e.location.search).sort || "")
        }

        function c(e) {
            switch (e.match.params.filter) {
                case o.a.Archive.toLowerCase():
                    return o.a.Archive;
                case o.a.Highlight.toLowerCase():
                    return o.a.Highlight;
                case o.a.Upload.toLowerCase():
                    return o.a.Upload;
                case o.a.PastPremiere.toLowerCase():
                    return o.a.PastPremiere;
                default:
                    return
            }
        }

        function d(e) {
            switch (e.toUpperCase()) {
                case s.b:
                    return s.b;
                case s.a:
                    return s.a;
                default:
                    return null
            }
        }! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(i || (i = {}))
    },
    KJtg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnblockUser"
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
                                value: "UnblockUserInput"
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
                            value: "unblockUser"
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
                                    value: "targetUser"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Kxgf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(r.a)(s, {
                props: function(t) {
                    return {
                        unblockUserMutation: function(n, r) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n
                                                    }
                                                },
                                                optimisticResponse: {
                                                    unblockUser: {
                                                        __typename: "UnblockUserPayload",
                                                        targetUser: {
                                                            __typename: "User",
                                                            id: n
                                                        }
                                                    }
                                                },
                                                update: function(e) {
                                                    var t = e.readFragment({
                                                        id: Object(o.a)(r),
                                                        fragment: a
                                                    });
                                                    t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                        return null !== e && e.id !== n
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(r),
                                                        fragment: a,
                                                        data: t
                                                    }))
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            throw new Error("unblockUserMutation is not ready");
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var i = n("TToO"),
            r = n("7vx8"),
            a = n("nmYW"),
            o = (n.n(a), n("yADj")),
            s = n("KJtg");
        n.n(s)
    },
    L3z0: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
            }(i || (i = {}))
    },
    LjAQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("GiK3"),
            o = n("2KeS"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("CSlQ"),
            d = n("xwpJ"),
            u = n("Odds"),
            p = n("x6ny"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(s.d)("Select One...", "ReportUserModal");
                    this.props.data.loading ? e = [a.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(d.b)()).map(function(e) {
                        return a.createElement("option", {
                            key: e.id,
                            value: e.id
                        }, e.text)
                    });
                    return a.createElement(u._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(u.W, {
                        id: "reporting-modal__select",
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, a.createElement(u._30, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, a.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t
            }(a.Component),
            h = Object(o.d)(Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            }), Object(c.d)("ReportReasonSelect"))(m),
            g = (n("I4TS"), n("1EXI"));
        n.d(t, "a", function() {
            return f
        }), n.d(t, "b", function() {
            return b
        }), n.d(t, "c", function() {
            return k
        });
        var b, f = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
        }(b || (b = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(s.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(s.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.getAttribute("data-community-name")
                        })
                    }, t.handleSubmit = function(e) {
                        if (e.preventDefault(), t.state.reason && t.state.description.length > 0) {
                            if (t.state.reason === f && !t.state.selectedCommunityID) {
                                if (t.props.data.user && !t.props.data.user.directories.nodes.length) return void t.props.onError(b.CommunityError);
                                t.props.onError(b.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(b.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories ? t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }) : [];
                        n.length && e === f ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u._8, {
                        display: u.R.Flex,
                        flexDirection: u.T.Column,
                        alignItems: u.c.Center,
                        justifyContent: u._7.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === b.Success ? a.createElement("div", null, a.createElement(u.v, {
                        onClick: this.props.onClose
                    }, a.createElement(u._8, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(u._8, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(u.Q, {
                        type: u._49.H4
                    }, this.props.title), a.createElement(u._35, {
                        color: u.K.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(u._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), a.createElement(u.W, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, a.createElement(u._46, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(u._35, {
                        display: u.R.Flex,
                        justifyContent: u._7.Center
                    }, a.createElement(u.v, {
                        onClick: this.handleSubmit
                    }, a.createElement(u._8, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id,
                                "data-community-name": e.name
                            }, e.displayName)
                        });
                        return a.createElement(u._8, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.W, {
                            id: "reporting__select-community",
                            label: Object(s.d)("Community", "ReportUser")
                        }, a.createElement(u._30, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, e)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case b.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case b.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case b.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        case b.UserError:
                            e = Object(s.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case b.CommunityError:
                            e = Object(s.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== b.Success,
                        "reporting__success-container": this.props.submitStatus === b.Success
                    });
                    return a.createElement(u._35, {
                        className: t,
                        fullWidth: this.props.submitStatus !== b.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component),
            k = Object(o.d)(Object(l.a)(g, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(v)
    },
    LnKh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Clips_ModalDelete"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "broadcaster"
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
                                    value: "curator"
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
                                    value: "thumbnailURL"
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
                                    value: "viewCount"
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
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    M5Tl: function(e, t) {},
    MAZT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var i = n("TToO"),
            r = n("6gPI"),
            a = (n.n(r), n("+UWA")),
            o = (n.n(a), n("Ejve")),
            s = n("5LoI"),
            l = n("PHcJ"),
            c = n("6uxC"),
            d = (n.n(c), {
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
                        return ["created_at>" + function(e) {
                            if (e <= 100) return e;
                            return 100 * Math.round(e / 100)
                        }((e = new Date, e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)))];
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
                    topNumericFilters: [],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                }
            }),
            u = function() {
                function e(e) {
                    this.client = r(e.appId, e.apiKey), this.stats = a.Stats.getInstance(e.config.buildType === o.a.Production ? "production" : "development", "twilight.features.algolia"), this.logger = e.logger.withCategory("search-client"), this.getCountryCode(e.apolloClient)
                }
                return e.prototype.queryTopResults = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r, a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), n.push(this.getTopResult(d.communities, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(r))];
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
                                            totalHits: o[4].nbHits,
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
                        l = void 0 === o ? 0 : o,
                        c = a.hitsPerPage,
                        u = void 0 === c ? 50 : c,
                        p = a.facetFilters,
                        m = void 0 === p ? "" : p,
                        h = a.numericFilters;
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, c, p, g, b, f = this;
                        return i.__generator(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    switch (r = {
                                        id: n,
                                        currentPage: l
                                    }, a = function(e) {
                                        return i.__awaiter(f, void 0, void 0, function() {
                                            var n, a;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return n = {
                                                            indexName: e.indexName,
                                                            query: t,
                                                            params: {
                                                                page: l,
                                                                hitsPerPage: u,
                                                                numericFilters: h || e.singleTypeNumericFilters,
                                                                facets: "*",
                                                                facetFilters: m
                                                            }
                                                        }, [4, this.query([n])];
                                                    case 1:
                                                        return (a = i.sent()) ? (r.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < u, [2, {
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
                                    return o = r, [4, a(d.games)];
                                case 2:
                                    return o.games = v.sent(), [3, 12];
                                case 3:
                                    return c = r, [4, a(d.users)];
                                case 4:
                                    return c.users = v.sent(), [3, 12];
                                case 5:
                                    return p = r, [4, a(d.channels)];
                                case 6:
                                    return p.channels = v.sent(), [3, 12];
                                case 7:
                                    return g = r, [4, a(d.videos)];
                                case 8:
                                    return g.videos = v.sent(), [3, 12];
                                case 9:
                                    return b = r, [4, a(d.communities)];
                                case 10:
                                    return b.communities = v.sent(), [3, 12];
                                case 11:
                                    return [2, null];
                                case 12:
                                    return [2, r]
                            }
                        })
                    })
                }, e.prototype.queryVideos = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    switch (n.sort) {
                                        case l.b.Newest:
                                            r = s.a.VideosNewest;
                                            break;
                                        case l.b.Popular:
                                        default:
                                            r = s.a.Videos
                                    }
                                    switch (a = [], n.length) {
                                        case l.a.Short:
                                            a.push("length<=900");
                                            break;
                                        case l.a.Long:
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
                                        case l.c.PastBroadcasts:
                                            o.params.facetFilters = "broadcast_type:archive";
                                            break;
                                        case l.c.Uploads:
                                            o.params.facetFilters = "broadcast_type:upload";
                                            break;
                                        case l.c.Highlights:
                                            o.params.facetFilters = "broadcast_type:highlight"
                                    }
                                    return [4, this.query([o])];
                                case 1:
                                    return (c = i.sent()) ? [2, {
                                        id: t,
                                        totalHits: c.results[0].nbHits,
                                        hits: c.results[0].hits
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
                    e.query({
                        query: c
                    }).then(function(e) {
                        t.countryCode = e.data.requestInfo.countryCode
                    }).catch(function(e) {
                        t.logger.error(e, "Failed to get country code")
                    })
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
    MApH: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_BanUserFromChatRoom"
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
                                value: "BanUserFromChatRoomInput"
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
                            value: "banUserFromChatRoom"
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
                end: 126
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    McFO: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("Aj/L"),
            a = n("TToO"),
            o = n("GiK3"),
            s = n("Snvs"),
            l = n("bhVC"),
            c = n("7vx8"),
            d = n("WNmM"),
            u = n("U2Sd"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip,
                        n = t && t.curator && t.curator.login === this.props.userLogin,
                        i = "";
                    if (t && t.videoQualities) {
                        var r = t.videoQualities[0];
                        i = r.sourceURL
                    }
                    var a = this.props,
                        c = a.broadcasterId,
                        u = a.broadcasterLogin,
                        p = a.forceShow;
                    return o.createElement(s.a, {
                        ownerLogin: this.props.broadcasterLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(r) {
                        var a = r.permitted;
                        return i && (a || n || p) ? o.createElement(l.a, {
                            type: l.b.Download,
                            text: e.props.slug,
                            url: i,
                            onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, c, u, e.props.pageType) : void 0
                        }) : null
                    })
                }, t
            }(o.Component),
            m = Object(c.a)(u)(p);
        var h = Object(i.b)(function(e) {
            var t = Object(r.c)(e);
            return {
                userLogin: t ? t.login : ""
            }
        })(m);
        n.d(t, "a", function() {
            return h
        })
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
    NjaO: function(e, t) {},
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
    QIXk: function(e, t, n) {
        "use strict";
        var i, r, a, o = n("TToO"),
            s = n("GiK3"),
            l = n("6sO2"),
            c = n("7vx8"),
            d = n("6BvN"),
            u = n("oIkB"),
            p = n("vH/s"),
            m = function(e, t, n, i, r) {
                var a = Date.now() / 1e3;
                l.o.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: a,
                    clip_edit_session_id: t + "," + Math.floor(a),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "title",
                    effect_setting: i,
                    front_end: !0,
                    location: r
                })
            },
            h = n("CIox");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration", e.InvalidTitle = "invalid_title", e.Unknown = "unknown"
        }(i || (i = {})),
        function(e) {
            e.InvalidTitle = "invalid_title"
        }(r || (r = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(a || (a = {}));
        var g, b = 5,
            f = 60,
            v = n("Odds"),
            k = n("isxN"),
            y = {
                publishState: a.Unsent,
                errorMessage: null
            },
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = y, t.onError = function(e) {
                        t.setState({
                            publishState: a.Error,
                            errorMessage: e
                        }), t.props.onError(e)
                    }, t.onPublish = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return o.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: a.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < b || e > f) return this.onError(i.InvalidDuration), [2];
                                        if ("" === this.props.title.trim()) return this.onError(g.emptySubmission), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(u.a)({
                                            segments: [{
                                                offsetSeconds: this.props.startOffset,
                                                durationSeconds: this.props.endOffset - this.props.startOffset,
                                                speed: 1
                                            }],
                                            slug: this.props.slug,
                                            title: this.props.title
                                        }))];
                                    case 2:
                                        return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (this.setState({
                                            publishState: a.Successful
                                        }), this.props.history.push("/create", {
                                            isPostEdit: !0,
                                            slug: this.props.slug
                                        })), [3, 4];
                                    case 3:
                                        return r.sent(), n = i.Unknown, this.onError(n), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(y), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return s.createElement(v._8, null, s.createElement(v.v, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? v.A.Loading : v.A.Default,
                        size: v.z.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = o.__decorate([Object(c.a)(k, {
                    name: "publishClip"
                })], t)
            }(s.Component),
            _ = Object(h.f)(S),
            C = n("2TZ0"),
            T = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(g || (g = {}));
        var E = 100,
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return s.createElement("div", null, s.createElement(v._46, {
                            id: T.TITLE_INPUT,
                            "data-test-selector": T.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), s.createElement(v._8, {
                            display: v.R.Flex,
                            justifyContent: v._7.Between,
                            alignItems: v.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? s.createElement(v.Q, {
                            color: v.K.Error
                        }, n.getErrorMessage()) : s.createElement(v.Q, {
                            color: v.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(v._8, {
                            display: v.R.Flex
                        }, s.createElement(v.v, {
                            "data-test-selector": T.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: v.B.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(v._8, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return s.createElement(v.W, {
                            id: T.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, s.createElement(v._8, {
                            display: v.R.Flex,
                            flexWrap: v.U.NoWrap
                        }, s.createElement(v._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(v._4, {
                            id: T.TITLE_INPUT,
                            "data-test-selector": T.TITLE_INPUT,
                            type: v._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), s.createElement(v._8, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(v._8, {
                            position: v._15.Relative
                        }, n.renderSave(), s.createElement(v._6, {
                            onClick: n.dismissMessage,
                            "data-test-selector": T.TITLE_SAVE_TOOLTIP
                        }, s.createElement(v.q, {
                            direction: v.r.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, s.createElement(v._8, {
                            padding: 1
                        }, n.state.showSuccess ? s.createElement(v.Q, {
                            color: v.K.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(v.Q, {
                            color: v.K.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(v.Q, {
                            color: v.K.Error
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(v.Q, {
                            color: v.K.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : s.createElement(v.Q, {
                            color: v.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(v._8, null, s.createElement(v._8, {
                            fullWidth: !0
                        }, s.createElement(v._4, {
                            id: T.TITLE_INPUT,
                            "data-test-selector": T.TITLE_INPUT,
                            type: v._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), s.createElement(v._8, {
                            display: v.R.Flex,
                            justifyContent: v._7.Between,
                            alignItems: v.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, s.createElement(v._8, {
                            display: v.R.Flex
                        }, s.createElement(v._8, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(_, {
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return s.createElement(v.v, {
                            "data-test-selector": T.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(l.d)("Save", "ClipsTitleEdit"))
                    }, n.onPublishClipError = function(e) {
                        n.setState({
                            showSuccess: !1,
                            showError: !0,
                            error: n.errorMessageToError(e)
                        })
                    }, n.getRemainingCharacterText = function() {
                        return Object(l.d)("{characterCount, number} remaining", {
                            characterCount: E - n.state.title.length
                        }, "ClipsTitleEdit")
                    }, n.onSuccess = function() {
                        n.props.onSuccess && n.props.onSuccess(), n.setState({
                            showSuccess: !0,
                            showError: !1,
                            error: null
                        }), setTimeout(function() {
                            n.setState({
                                showSuccess: !1
                            })
                        }, 1500)
                    }, n.dismissMessage = function() {
                        n.setState({
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, E);
                        n.setState({
                            title: t,
                            showError: !1,
                            showSuccess: !1
                        })
                    }, n.editClipTitle = function() {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if ("" === this.state.title.trim()) return this.setState({
                                            showError: !0,
                                            error: g.emptySubmission
                                        }), [2];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.editTitle(Object(u.a)({
                                            title: this.state.title.trim(),
                                            slug: this.props.clipSlug
                                        }))];
                                    case 2:
                                        return (e = n.sent()).data.updateClip && e.data.updateClip.error ? (this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(e.data.updateClip.error.message)
                                        }), [2]) : (this.props.clipBroadcasterId && this.props.clipId && this.props.clipTitle && m(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.clipSlug, this.props.clipTitle, this.props.location), this.onSuccess(), [3, 4]);
                                    case 3:
                                        return t = n.sent(), this.setState({
                                            showError: !0,
                                            error: this.errorMessageToError(t.message)
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.canSaveEditedTitle = function() {
                        return n.props.clipTitle !== n.state.title.trim()
                    }, n.handleKeyDown = function(e) {
                        switch (e.keyCode) {
                            case d.a.Enter:
                                return void(n.props.location === p.PageviewLocation.ClipsEditing ? n.setState({
                                    showSuccess: !0
                                }) : n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clipTitle ? t.clipTitle.trim() : "",
                        showError: !1,
                        showSuccess: !1,
                        error: null
                    }, n
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.location === p.PageviewLocation.MyClipsManager ? this.renderForManager() : this.props.location === p.PageviewLocation.ClipsEditing ? this.renderForEdit() : this.renderForClipsViewing()
                }, t.prototype.getErrorMessage = function() {
                    switch (this.state.error) {
                        case g.channelViolation:
                            return Object(l.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsTitleEdit");
                        case g.emptySubmission:
                            return Object(l.d)("Please add a title.", "ClipsTitleEdit");
                        default:
                            return Object(l.d)("Whoops. Something went wrong.", "ClipsTitleEdit")
                    }
                }, t.prototype.errorMessageToError = function(e) {
                    return e.includes("403:") || e.toLowerCase() === i.InvalidTitle.toLowerCase() || e.toLowerCase() === r.InvalidTitle.toLowerCase() ? g.channelViolation : e === g.emptySubmission ? g.emptySubmission : g.unknown
                }, t
            }(s.Component),
            N = Object(c.a)(C, {
                name: "editTitle"
            })(O);
        n.d(t, !1, function() {
            return T
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, !1, function() {
            return O
        }), n.d(t, "a", function() {
            return N
        })
    },
    QRuM: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2");
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(i || (i = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, i.Off);
                    return e === i.On || e === i.StaffOnly && this.props.isStaff ? this.props.children : null
                }, t
            }(a.Component),
            l = s;
        n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        })
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
    RsNJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "WatchLivePrompt"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "durationSeconds"
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
                                            value: "displayName"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "broadcaster"
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
                                                    value: "id"
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
                                        value: "86"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "45"
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
                end: 188
            }
        };
        n.loc.source = {
            body: "query WatchLivePrompt($slug: ID!) {\nclip(slug: $slug) {\nid\ndurationSeconds\ngame {\ndisplayName\nid\n}\nbroadcaster {\nid\nlogin\ndisplayName\nstream {\nid\n}\n}\nthumbnailURL(width: 86 height: 45)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    RsvU: function(e, t) {},
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
    Ryxq: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = e - 3600 * t - 60 * n;
            t < 10 && (t = "0" + t);
            n < 10 && (n = "0" + n);
            i < 10 && (i = "0" + i);
            return t + "h" + n + "m" + i + "s"
        }
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
    SUA7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_UnfollowUser"
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
                                value: "UnfollowUserInput"
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
                            value: "unfollowUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("3zLD"),
            o = n("6sO2"),
            s = n("7vx8"),
            l = n("CSlQ"),
            c = n("acVP"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        loading: !0,
                        permitted: !1,
                        roles: {
                            staff: !1,
                            editor: !1,
                            owner: !1
                        },
                        error: null
                    }, t.logger = o.j.withCategory("role-restricted"), t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = p(e),
                        n = {
                            loading: e.data.loading,
                            permitted: u(t, e.permittedRoles),
                            roles: t,
                            error: null
                        };
                    e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                        err: n.error
                    })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                        err: n.error
                    })), this.setState(n)
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t
            }(r.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function p(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var m = Object(a.compose)(Object(s.a)(c, {
            options: function(e) {
                return {
                    variables: {
                        contentOwnerLogin: e.ownerLogin
                    }
                }
            }
        }), Object(l.d)("RoleRestricted"))(d);
        n.d(t, !1, function() {
            return d
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    TeXj: function(e, t, n) {
        "use strict";
        t.c = function(e, t, n) {
            void 0 === n && (n = !1);
            return d(a, e, t, n)
        }, t.a = c, t.b = function(e, t, n) {
            void 0 === n && (n = !1);
            var a = i.b.get(s, r.a.Off),
                o = t && t.roles && t.roles.isStaff || !1;
            return c(e, t, n) && (a === r.a.On || a === r.a.StaffOnly && o)
        }, t.d = function(e, t) {
            return d(l, e, t)
        };
        var i = n("6sO2"),
            r = n("QRuM"),
            a = "esport_channel_page_whitelist",
            o = "esport_insider_pass_whitelist",
            s = "esport_insider_pass_gifting_launch",
            l = "esports_room_cheering_whitelist";

        function c(e, t, n) {
            return void 0 === n && (n = !1), d(o, e, t, n)
        }

        function d(e, t, n, r) {
            void 0 === r && (r = !1);
            var a = i.b.get(e, []),
                o = n && n.roles && n.roles.isStaff || r;
            return a.includes(t) || a.includes(t + "-staff") && o
        }
    },
    Tjmd: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            if (!e && !t) return !1;
            if (!t || !e) return !0;
            return t.channelLogin !== e.channelLogin || t.vodID !== e.vodID || t.collectionID !== e.collectionID
        }, t.a = function(e, t) {
            if (!e && !t) return !1;
            if (!t || !e) return !0;
            return e.vodID && !t.vodID || e.collectionID && !t.collectionID
        }
    },
    Tzcg: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, "e", function() {
            return h
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
            l = new Set([457, 33, 42, 0]),
            c = function(e) {
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
            d = function(e) {
                var t = m(e);
                return o[t] || t
            },
            u = function(e) {
                return e.slice().sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            },
            p = function(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
                    l.has(parseInt(a.id, 10)) ? t.push({
                        id: a.id,
                        emotes: c(u(a.emotes))
                    }) : n.push({
                        id: a.id,
                        emotes: c(u(a.emotes))
                    })
                }
                return n.concat(t)
            },
            m = function(e) {
                return function(e) {
                    return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
            },
            h = function(e, t) {
                var n = a.c,
                    i = [],
                    o = [],
                    s = [],
                    l = new RegExp("^" + Object(r.a)(t), "i");
                return e.forEach(function(e) {
                    n[e.token] ? s.push(e) : e.token.match(l) ? i.push(e) : o.push(e)
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
    U2Sd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsDownloadButton"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "curator"
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
                                    value: "broadcaster"
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
                                    value: "videoQualities"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sourceURL"
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
                end: 152
            }
        };
        n.loc.source = {
            body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\ncurator {\nid\nlogin\n}\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U5tC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsBroadcasterInfo"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "broadcaster"
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
                                                value: "28"
                                            }
                                        }],
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
                end: 174
            }
        };
        n.loc.source = {
            body: "query ClipsBroadcasterInfo($slug: ID!) {\nclip(slug: $slug) {\nid\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nprofileImageURL(width: 28)\ndisplayName\nlogin\nstream {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "U8/5": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsViewModerationModals"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "broadcaster"
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
                                    value: "curator"
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
                end: 106
            }
        };
        n.loc.source = {
            body: "query ClipsViewModerationModals($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UKw0: function(e, t) {},
    UvtE: function(e, t, n) {
        "use strict";
        var i = n("sADG"),
            r = n("nWgz");
        n.d(t, "b", function() {
            return i.a
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return r.a
        })
    },
    VNvG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowUser"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 124
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VOrx: function(e, t) {},
    Vr0l: function(e, t) {},
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "c", function() {
            return p
        });
        var i, r, a = n("6sO2"),
            o = n("8Wuk"),
            s = n("vH/s"),
            l = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i[o.b.Download] = "download", i),
            c = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            u = ((r = {
                MyClips: s.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                TopClipsGame: s.PageviewLocation.ClipsGame,
                TopClipsChannel: s.PageviewLocation.ChannelClips
            })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, r[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, r),
            p = function(e, t, n, i, r) {
                return function(o) {
                    a.o.tracking.track(s.SpadeEventType.VideoShare, {
                        vod_id: e,
                        vod_type: "clip",
                        share_platform: l[o],
                        location: u[r],
                        game: t,
                        channel_id: Number(n || 0),
                        channel: i,
                        live: null
                    })
                }
            }
    },
    XITx: function(e, t) {},
    XOun: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("vH/s"),
            s = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
            l = function(e) {
                var t = e.type;
                a.o.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
                    target_url: s,
                    type: t.toLowerCase()
                })
            };
        n("RsvU");
        n.d(t, "a", function() {
            return c
        });
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onClick = function() {
                    l({
                        type: t.props.pageType
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return r.createElement("a", {
                    href: s,
                    onClick: this.onClick,
                    target: "_blank"
                }, r.createElement("img", {
                    alt: Object(a.d)("clip champ badge", "ClipsCurator"),
                    className: "clips-champ-badge-img",
                    src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                }))
            }, t
        }(r.Component)
    },
    "YEG/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("yDzg"),
            s = n("CSlQ"),
            l = n("CwIZ"),
            c = n("Odds"),
            d = "subscribe-button__subscribe-tier-button",
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPopupExperiment: !1
                    }, t.handleClick = function() {
                        t.openCheckout(), t.props.reportSubAction({
                            action: l.a.ClickCheckout,
                            checkoutButtonTier: t.props.tierPrice
                        })
                    }, t.setPopupExperiment = function() {
                        var e = a.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_POPUP");
                        t.setState({
                            hasPopupExperiment: "yes" === e
                        })
                    }, t.openCheckout = function() {
                        t.state.hasPopupExperiment && window.open(Object(o.a)(t.props.url, {
                            ref: "subscribe-tier-button"
                        }), "Twitch", "width=1000, height=1100, menubar, toolbar, location, personalbar, scrollbars")
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    !1 !== this.props.targetBlank && this.setPopupExperiment()
                }, t.prototype.render = function() {
                    if (this.props.isSubbedToTier) {
                        var e = Object(a.d)("Subscribed", "SubTierButton");
                        return r.createElement(c.v, {
                            ariaLabel: e,
                            "data-test-selector": d,
                            disabled: !0,
                            icon: c._25.Star
                        }, e)
                    }
                    var t = this.props.isEsportChannel ? Object(a.d)("Get the All-Access Pass", "SubTierButton") : Object(a.d)("Subscribe Now", "SubTierButton");
                    return r.createElement(c.v, i.__assign({
                        ariaLabel: t + " " + this.props.tierPrice,
                        "data-test-selector": d,
                        linkTo: this.state.hasPopupExperiment ? void 0 : this.props.url,
                        onClick: this.handleClick,
                        purchase: this.props.tierPrice
                    }, Object(c._63)(this.props), {
                        targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                    }), t)
                }, t = i.__decorate([Object(s.d)("SubTierButton", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return u
        })
    },
    YH6m: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("vBst"),
            l = n("Tzcg"),
            c = n("CSlQ"),
            d = n("daN3"),
            u = n("37Pp"),
            p = n("YEG/"),
            m = n("FDYX"),
            h = n("CwIZ"),
            g = n("odx1"),
            b = n("Odds"),
            f = (n("6O9f"), "gift-subscription-button"),
            v = "subscribe-button";

        function k(e) {
            return "subscribe-button-modal-tab-" + e
        }! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(i || (i = {}));
        var y = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.toggleActiveTab = function(e) {
                    if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-tier")) {
                        case "subscribe-button-modal-tab-" + i.Prime:
                            n.setState({
                                activeTab: i.Prime,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(i.Prime);
                            break;
                        case "subscribe-button-modal-tab-" + i.Tier1:
                            n.setState({
                                activeTab: i.Tier1,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(i.Tier1);
                            break;
                        case "subscribe-button-modal-tab-" + i.Tier2:
                            n.setState({
                                activeTab: i.Tier2,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[1])
                            }), n.props.onSelectTierTab(i.Tier2);
                            break;
                        case "subscribe-button-modal-tab-" + i.Tier3:
                            n.setState({
                                activeTab: i.Tier3,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[2])
                            }), n.props.onSelectTierTab(i.Tier3);
                            break;
                        default:
                            n.setState({
                                activeTab: i.Prime,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(i.Prime)
                    }
                }, n.getTabTitle = function() {
                    switch (n.state.activeTab) {
                        case i.Prime:
                            return Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                        case i.Tier1:
                            return n.props.subscriptionProducts[0].displayName;
                        case i.Tier2:
                            return n.props.subscriptionProducts[1].displayName;
                        case i.Tier3:
                            return n.props.subscriptionProducts[2].displayName;
                        default:
                            return n.props.subscriptionProducts[0].displayName
                    }
                }, n.getTierSubscribeButton = function() {
                    var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                    if (n.props.isGift) {
                        var t = Object(o.d)("Gift A Subscription", "SubTierTabs");
                        return n.props.giftRecipient ? a.createElement(d.a, {
                            subProductId: e.id,
                            giftRecipient: n.props.giftRecipient,
                            checkoutURL: e.url,
                            buttonMessage: t,
                            purchase: n.state.currentPurchasePrice,
                            onClick: n.reportGiftCheckoutAction
                        }) : a.createElement(b.v, {
                            ariaLabel: t + " " + n.state.currentPurchasePrice,
                            "data-test-selector": f,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, t)
                    }
                    return n.state.subbedTier === n.state.activeTab && n.state.activeTab === i.Prime ? a.createElement(g.a, {
                        authToken: n.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: n.props.isSubscribed,
                        isSubscribedWithPrime: n.props.subbedTier === s.a.Prime,
                        onSubscribedWithPrime: n.onSubscribedWithPrime,
                        reportSubMenuAction: n.props.reportSubMenuAction,
                        subLogin: n.props.subLogin,
                        userHasPrime: n.props.userHasPrime,
                        canPrimeSubscribe: n.props.canPrimeSubscribe,
                        channelLogin: n.props.subLogin
                    }) : a.createElement(p.a, {
                        isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                        tierPrice: n.state.currentPurchasePrice,
                        reportSubAction: n.props.reportSubMenuAction,
                        url: e.url,
                        "data-a-target": "subscribe-now-button",
                        "data-test-selector": v
                    })
                }, n.onSubscribedWithPrime = function() {
                    n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                }, n.reportGiftCheckoutAction = function() {
                    n.props.reportSubMenuAction({
                        action: h.a.BuyGiftSub,
                        checkoutButtonTier: n.state.currentPurchasePrice,
                        giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                    })
                }, n.onGiftSelect = function() {
                    n.props.onGiftSelect && n.props.onGiftSelect()
                }, n.getTierExperimentAssignment = function() {
                    var e = o.o.experiments.getAssignment("TWILIGHT_MOBILE_SUBS_TIER_NAMES");
                    n.setState({
                        tierNameEnabled: "name" === e
                    })
                }, n.mapSubbedTierToTabs = function(e) {
                    e.subbedTier === s.a.Prime ? (n.setState({
                        activeTab: i.Prime,
                        subbedTier: i.Prime
                    }), e.onSelectTierTab(i.Prime)) : e.subbedTier === s.a.Tier1 ? (n.setState({
                        activeTab: i.Tier1,
                        subbedTier: i.Tier1
                    }), e.onSelectTierTab(i.Tier1)) : e.subbedTier === s.a.Tier2 ? (n.setState({
                        activeTab: i.Tier2,
                        subbedTier: i.Tier2
                    }), e.onSelectTierTab(i.Tier2)) : e.subbedTier === s.a.Tier3 ? (n.setState({
                        activeTab: i.Tier3,
                        subbedTier: i.Tier3
                    }), e.onSelectTierTab(i.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(i.Prime)
                }, n.getExtraEmotes = function(e) {
                    return (e === i.Tier2 ? Object(l.b)(n.props.subscriptionProducts[1].emotes) : Object(l.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                        return a.createElement(b._8, {
                            display: b.R.InlineFlex,
                            margin: {
                                right: .5
                            },
                            key: e.id
                        }, a.createElement("img", {
                            srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                        }))
                    })
                }, n.state = n.getInitialState(), n
            }
            return r.__extends(t, e), t.prototype.componentWillMount = function() {
                this.mapSubbedTierToTabs(this.props), this.getTierExperimentAssignment()
            }, t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                var e = null;
                this.state.subbedTier && (e = a.createElement(b._8, {
                    display: b.R.InlineFlex,
                    margin: {
                        right: .5
                    },
                    className: "subscription-balloon-options__subbed-star"
                }, a.createElement(b._24, {
                    asset: b._25.Star
                })));
                var t = null,
                    n = null,
                    r = null,
                    l = this.state.tierNameEnabled ? Object(o.d)("Tier 3", "SubTierTabs") : this.props.subscriptionProducts[2].price,
                    c = a.createElement(b._8, {
                        display: b.R.InlineFlex
                    }, this.state.subbedTier === i.Tier3 && e, a.createElement(b._36, {
                        active: this.state.activeTab === i.Tier3,
                        "data-tier": k(i.Tier3),
                        "data-a-target": k(i.Tier3),
                        onClick: this.toggleActiveTab
                    }, l));
                if (this.props.subbedTier !== s.a.Prime || this.props.isGift || (t = a.createElement(b._8, {
                        display: b.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, a.createElement(b._8, {
                        display: b.R.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, a.createElement(b._24, {
                        asset: b._25.Crown
                    })), a.createElement(b._36, {
                        active: this.state.activeTab === i.Prime,
                        "data-tier": k(i.Prime),
                        "data-a-target": k(i.Prime),
                        onClick: this.toggleActiveTab
                    }, Object(o.d)("Prime", "SubTierTabs")))), !this.props.subbedTier || this.props.subbedTier === s.a.Tier1) {
                    var d = this.state.tierNameEnabled ? Object(o.d)("Tier 1", "SubTierTabs") : this.props.subscriptionProducts[0].price;
                    n = a.createElement(b._8, {
                        display: b.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === i.Tier1 && e, a.createElement(b._36, {
                        active: this.state.activeTab === i.Tier1,
                        "data-tier": k(i.Tier1),
                        "data-a-target": k(i.Tier1),
                        onClick: this.toggleActiveTab
                    }, d))
                }
                if (!this.props.subbedTier || this.props.subbedTier === s.a.Prime || this.props.subbedTier === s.a.Tier1 || this.props.subbedTier === s.a.Tier2) {
                    var p = this.state.tierNameEnabled ? Object(o.d)("Tier 2", "SubTierTabs") : this.props.subscriptionProducts[1].price;
                    r = a.createElement(b._8, {
                        display: b.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === i.Tier2 && e, a.createElement(b._36, {
                        active: this.state.activeTab === i.Tier2,
                        "data-tier": k(i.Tier2),
                        "data-a-target": k(i.Tier2),
                        onClick: this.toggleActiveTab
                    }, p))
                }
                var m = this.props.subscriptionProducts[1].emotes.length,
                    h = m + this.props.subscriptionProducts[2].emotes.length,
                    g = null;
                (m > 0 && this.state.activeTab === i.Tier2 || h > 0 && this.state.activeTab === i.Tier3) && (g = a.createElement(b._8, {
                    display: b.R.InlineFlex,
                    alignItems: b.c.Center
                }, this.getExtraEmotes(this.state.activeTab), a.createElement(b.Q, {
                    bold: !0
                }, Object(o.d)("{extraEmoteCount, plural, one {Plus {extraEmoteCount, number} extra channel emote} other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: this.state.activeTab === i.Tier2 ? m : h
                }, "SubTierTabs"))));
                var f = this.props.subscriptionProducts[this.state.activeTab - 1];
                return a.createElement(b._8, {
                    className: "channel-header__subscription-balloon-options"
                }, a.createElement(b._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(b._37, null, t, n, r, c)), a.createElement(b._8, null, a.createElement(b._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(b.Q, {
                    type: b._49.H5,
                    bold: !0
                }, this.getTabTitle())), a.createElement(b._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(b.Q, null, Object(o.d)("{availableEmoteCount, plural, one {Includes {availableEmoteCount, number} emoticon, subscriber badge, and customizable messages upon subscribing} other {Includes {availableEmoteCount, number} emoticons, subscriber badge, and customizable messages upon subscribing}}", {
                    availableEmoteCount: this.props.subscriptionProducts[0].emotes.length
                }, "SubTierTabs"))), g, a.createElement(u.a, {
                    subscriptionProduct: f,
                    isGift: this.props.isGift
                }), a.createElement(b._8, {
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, this.getTierSubscribeButton())))
            }, t.prototype.getInitialState = function() {
                var e = this.props.subscriptionProducts[0].price;
                return (Object(m.d)(this.props.subscriptionProducts) || Object(m.c)(this.props.subscriptionProducts)) && (e = Object(m.a)(this.props.subscriptionProducts[0], this.props.isGift)), {
                    activeTab: i.Tier1,
                    currentPurchasePrice: e,
                    subbedTier: null,
                    tierNameEnabled: !1
                }
            }, t.prototype.getPrice = function(e) {
                return Object(m.d)(this.props.subscriptionProducts) || Object(m.c)(this.props.subscriptionProducts) ? Object(m.a)(e, this.props.isGift) : e.price
            }, t = r.__decorate([Object(c.d)("SubTierTabs")], t)
        }(a.Component);
        n.d(t, !1, function() {
            return f
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return k
        }), n.d(t, "a", function() {
            return y
        })
    },
    YJNl: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsChatReplay"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "videoOffsetSeconds"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "broadcaster"
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
                                    value: "curator"
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
                                    value: "durationSeconds"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "video"
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
                                                    value: "broadcastBadges"
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
                                                            value: "clickAction"
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
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "comments"
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
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "contentOffsetSeconds"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "videoOffsetSeconds"
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
                                                                    value: "commenter"
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
                                                                            value: "chatColor"
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
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "contentOffsetSeconds"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "message"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "fragments"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "emote"
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
                                                                                            value: "emoteID"
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
                                                                            value: "userBadges"
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
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "state"
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
                end: 738
            }
        };
        n.loc.source = {
            body: "query ClipsChatReplay($slug: ID! $videoOffsetSeconds: Int $cursor: Cursor) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\n}\ncurator {\nid\nlogin\n}\ndurationSeconds\nvideo {\nid\nowner {\nid\nbroadcastBadges {\nid\nclickAction\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nsetID\nversion\n}\n}\ncomments(first: 100 contentOffsetSeconds: $videoOffsetSeconds after: $cursor) {\nedges {\ncursor\nnode {\nid\ncommenter {\nid\nchatColor\ndisplayName\nlogin\n}\ncontentOffsetSeconds\nmessage {\nfragments {\ntext\nemote {\nid\nemoteID\n}\n}\nuserBadges {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}\n}\nstate\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    YugT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowEvent_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                                    value: "id"
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
                                    value: "isPartner"
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
        n.loc.source = {
            body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "Z+EN": function(e, t) {},
    Zifq: function(e, t) {},
    ZxOd: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("xX9u"),
            s = n("bhVC"),
            l = n("8Wuk"),
            c = n("+Znq"),
            d = n("7vx8"),
            u = n("AoO8"),
            p = n("yDzg"),
            m = n("CSlQ"),
            h = n("sEID"),
            g = n("WNmM"),
            b = n("McFO"),
            f = n("46tX"),
            v = n("rCmJ"),
            k = n("2hJ3"),
            y = n("f6Cj"),
            S = n("Odds"),
            _ = (n("Jjeq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getUrl = function() {
                        return t.props.url || window.location.href
                    }, t.onShareClick = function() {
                        t.props.onShareClick && t.props.onShareClick(t.props.type)
                    }, t.copyPageUrl = function() {
                        t.onShareClick(), Object(k.a)(t.getUrl())
                    }, t.renderIcon = function() {
                        var e = t.getAssetFromType();
                        return r.createElement(S._8, {
                            className: "clips-mobile-share-sheet__share-icon clips-social-button__icon " + t.addSocialClassModifier("clips-social-button__icon")
                        }, r.createElement(S._24, {
                            asset: e,
                            fill: !0
                        }))
                    }, t.isLink = function() {
                        return t.props.type !== l.b.Copy
                    }, t.getAssetFromType = function() {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return S._25.Twitter;
                            case l.b.Facebook:
                                return S._25.Facebook;
                            case l.b.VKontakte:
                                return S._25.VKontakte;
                            case l.b.Reddit:
                                return S._25.Reddit;
                            case l.b.Copy:
                            default:
                                return S._25.Copy
                        }
                    }, t.getLabelFromType = function() {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return Object(a.d)("Twitter", "ClipsSocialShare");
                            case l.b.Facebook:
                                return Object(a.d)("Facebook", "ClipsSocialShare");
                            case l.b.VKontakte:
                                return Object(a.d)("VK", "ClipsSocialShare");
                            case l.b.Reddit:
                                return Object(a.d)("Reddit", "ClipsSocialShare");
                            case l.b.Copy:
                                return Object(a.d)("Copy", "ClipsSocialShare");
                            default:
                                return ""
                        }
                    }, t.addSocialClassModifier = function(e) {
                        switch (t.props.type) {
                            case l.b.Twitter:
                                return e + "--twitter";
                            case l.b.Reddit:
                                return e + "--reddit";
                            case l.b.Facebook:
                                return e + "--facebook";
                            case l.b.VKontakte:
                                return e + "--vkontakte";
                            case l.b.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, t.getLinkTarget = function() {
                        var e = t.props,
                            n = e.text,
                            i = e.type,
                            r = t.getUrl(),
                            a = n || "";
                        switch (i) {
                            case l.b.Reddit:
                                return Object(y.b)(r, a);
                            case l.b.VKontakte:
                                return Object(y.d)(r);
                            case l.b.Facebook:
                                return Object(y.a)(r);
                            case l.b.Twitter:
                                return Object(y.c)(r, a);
                            default:
                                return ""
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(S._8, {
                        className: "clips-mobile-share-sheet__row",
                        display: S.R.Flex,
                        alignItems: S.c.Center,
                        key: this.props.type,
                        margin: {
                            bottom: 1,
                            x: 2
                        }
                    }, this.renderIcon(), r.createElement(S._35, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S.Q, {
                        type: S._49.Span
                    }, this.getLabelFromType())));
                    return this.renderLink(e)
                }, t.prototype.renderLink = function(e) {
                    return this.isLink() ? r.createElement("a", {
                        href: this.getLinkTarget(),
                        target: "_blank",
                        onClick: this.onShareClick,
                        "data-test-selector": "clips-social-button__link"
                    }, e) : r.createElement("div", {
                        onClick: this.copyPageUrl,
                        "data-test-selector": "clips-social-button__link"
                    }, e)
                }, t
            }(r.Component)),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isModalOpen: !1,
                        isCopiedModalOpen: !1
                    }, t.onToggleShareButton = function() {
                        t.setState(function(e) {
                            return {
                                isModalOpen: !e.isModalOpen
                            }
                        })
                    }, t.onShareClick = function(e) {
                        t.setState({
                            isModalOpen: !1
                        }), e === l.b.Copy && (t.setState({
                            isCopiedModalOpen: !0
                        }), setTimeout(function() {
                            return t.setState({
                                isCopiedModalOpen: !1
                            })
                        }, 1500))
                    }, t.onClickOut = function() {
                        t.setState({
                            isModalOpen: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.clip.id && e.clip.id && this.props.clip.id !== e.clip.id && this.setState({
                        isModalOpen: !1
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = Object(a.d)("Share Clip", "ClipsSocialShare"),
                        n = Object(a.d)("Copied!", "ClipsSocialShare");
                    return r.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.End,
                        alignItems: S.c.Center,
                        margin: {
                            top: 1,
                            bottom: 1
                        }
                    }, r.createElement(S.v, {
                        type: S.B.Hollow,
                        onClick: this.onToggleShareButton,
                        "data-test-selector": "social-share-mobile-button"
                    }, t), this.state.isModalOpen && r.createElement(S._35, {
                        position: S._15.Fixed,
                        background: S.n.Overlay,
                        zIndex: S._62.Above,
                        attachLeft: !0,
                        attachTop: !0,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(v.a, {
                        onClickOut: this.onClickOut
                    }, r.createElement(S._8, {
                        position: S._15.Absolute,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        display: S.R.Flex,
                        flexDirection: S.T.Column,
                        zIndex: S._62.Above,
                        "data-test-selector": "social-share-mobile-menu-root"
                    }, r.createElement(S.e, {
                        type: S.j.SlideInBottom,
                        enabled: this.state.isModalOpen
                    }, r.createElement(S._35, {
                        background: S.n.Base,
                        elevation: 3,
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(S._35, {
                        className: "clips-mobile-share-sheet__title",
                        display: S.R.Flex,
                        flexDirection: S.T.Row,
                        justifyContent: S._7.Between,
                        alignItems: S.c.Center,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            right: 1,
                            left: 2
                        },
                        borderBottom: !0
                    }, r.createElement(S.Q, {
                        bold: !0,
                        color: S.K.Alt,
                        type: S._49.Span,
                        fontSize: S.V.Size6,
                        "data-test-selector": "social-share-mobile-menu-title"
                    }, t), r.createElement(S.w, {
                        "data-test-selector": "social-share-mobile-menu-close",
                        icon: S._25.Close,
                        ariaLabel: "Close Share",
                        size: S.x.Large,
                        onClick: this.onToggleShareButton
                    })), r.createElement(S._8, null, h.b.map(function(t) {
                        return r.createElement(_, {
                            key: t.type,
                            type: t.type,
                            text: e.props.clip.title,
                            url: Object(p.a)(e.props.clip.url, t.params),
                            onShareClick: e.onShareClick
                        })
                    }))))))), this.state.isCopiedModalOpen && r.createElement(S._8, {
                        fullWidth: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        className: "clips-mobile-share-sheet",
                        position: S._15.Fixed,
                        zIndex: S._62.Above
                    }, r.createElement(S.e, {
                        type: S.j.SlideInBottom,
                        duration: S.g.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, r.createElement(S._35, {
                        padding: {
                            x: 1,
                            y: 1
                        },
                        background: S.n.Base,
                        elevation: 3,
                        borderTop: !0,
                        display: S.R.Flex,
                        alignItems: S.c.Center
                    }, r.createElement(S._8, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(S.e, {
                        type: S.j.BounceIn,
                        duration: S.g.Medium,
                        delay: S.f.Short,
                        enabled: this.state.isCopiedModalOpen
                    }, r.createElement(S._24, {
                        type: S._26.Success,
                        asset: S._25.Check
                    }))), r.createElement(S.Q, {
                        type: S._49.Span,
                        fontSize: S.V.Size4,
                        bold: !0
                    }, n)))))
                }, t
            }(r.Component),
            T = n("bnNq"),
            E = (n("twHn"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.trackLinkShare = function() {
                        var e = t.props.data.clip;
                        if (e) return Object(g.c)(e.id, e.game && e.game.name, e.broadcaster && e.broadcaster.id, e.broadcaster && e.broadcaster.login, t.props.pageType)(s.b.CopyInput)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip,
                        n = Object(f.c)(window.navigator.userAgent),
                        i = !(!t || !t.id);
                    if (!i && !n) return r.createElement(S._8, null, this.renderPlaceholders());
                    if (!i && n) return r.createElement(S._8, null, this.renderMobilePlaceholders());
                    if (n) return r.createElement(C, {
                        clip: t
                    });
                    var s = Object(a.d)("More", "ClipsSocialShare");
                    return r.createElement(S._8, {
                        display: S.R.Flex,
                        position: S._15.Relative,
                        zIndex: S._62.Above,
                        justifyContent: S._7.End,
                        alignItems: S.c.Center,
                        margin: {
                            y: 1
                        }
                    }, r.createElement(S._8, {
                        display: S.R.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, r.createElement(b.a, {
                        broadcasterLogin: t.broadcaster && t.broadcaster.login || "",
                        broadcasterId: t.broadcaster && t.broadcaster.id || "",
                        slug: this.props.slug,
                        pageType: this.props.pageType
                    })), h.b.map(function(n) {
                        return r.createElement(S._8, {
                            display: S.R.InlineBlock,
                            key: n.type,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(l.a, {
                            key: n.type,
                            type: n.type,
                            text: t.title,
                            url: Object(p.a)(t.url, n.params),
                            onShareClick: Object(g.c)(t.id, t.game && t.game.name, t.broadcaster && t.broadcaster.id, t.broadcaster && t.broadcaster.login, e.props.pageType)
                        }))
                    }), r.createElement(S._8, {
                        display: S.R.InlineBlock,
                        position: S._15.Relative
                    }, r.createElement(c.a, null, r.createElement(S.v, {
                        type: S.B.Hollow,
                        ariaLabel: s,
                        "data-test-selector": "social-share-button"
                    }, s), r.createElement(S.q, {
                        direction: S.r.BottomRight,
                        noTail: !0
                    }, r.createElement(S._8, {
                        padding: 1
                    }, r.createElement(S.W, {
                        id: "social-share-link",
                        orientation: S.X.Vertical,
                        label: Object(a.d)("Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-link"
                    }, r.createElement(o.a, {
                        value: t.url,
                        onClick: this.trackLinkShare
                    })), r.createElement(S._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(S.W, {
                        id: "social-share-link",
                        orientation: S.X.Vertical,
                        label: Object(a.d)("Embed Link", "ClipsSocialShare"),
                        "data-test-selector": "social-share-embed-link"
                    }, r.createElement(o.a, {
                        value: Object(u.a)(this.props.data.clip.embedURL),
                        onClick: this.trackLinkShare
                    }))))))))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return r.createElement(S.e, {
                        type: S.j.FadeIn,
                        duration: S.g.Medium,
                        enabled: !0
                    }, r.createElement(S._8, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: S.R.Flex,
                        justifyContent: S._7.End
                    }, r.createElement(S._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S._14, {
                        width: 30,
                        height: 30
                    })), r.createElement(S._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S._14, {
                        width: 30,
                        height: 30
                    })), r.createElement(S._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S._14, {
                        width: 30,
                        height: 30
                    })), r.createElement(S._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S._14, {
                        width: 30,
                        height: 30
                    })), r.createElement(S._8, {
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S._14, {
                        width: 46,
                        height: 30
                    }))))
                }, t.prototype.renderMobilePlaceholders = function() {
                    return r.createElement(S._8, {
                        margin: {
                            y: 1
                        },
                        display: S.R.Flex,
                        justifyContent: S._7.End
                    }, r.createElement(S._8, null, r.createElement(S._14, {
                        width: 72,
                        height: 30
                    })))
                }, t = i.__decorate([Object(m.d)("ClipsSocialShare"), Object(d.a)(T)], t)
            }(r.Component));
        n.d(t, "a", function() {
            return E
        })
    },
    a0y1: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("Aj/L"),
            a = n("TToO"),
            o = n("GiK3"),
            s = n("6sO2"),
            l = n("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.getPrimePromotionTextNode(),
                        t = this.props.isOverlay ? l.K.Overlay : l.K.Base;
                    return e ? o.createElement(l._8, null, o.createElement(l._8, {
                        display: l.R.Flex
                    }, o.createElement(l._8, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(l._24, {
                        asset: l._25.Crown,
                        type: l._26.Prime
                    })), o.createElement(l.Q, {
                        color: t
                    }, e))) : null
                }, t.prototype.getPrimePromotionTextNode = function() {
                    var e = this.props.isOverlay ? l.P.Overlay : l.P.Default;
                    if (this.props.userHasPrime) return Object(s.d)("Get 500 Bits as a bonus reward on purchase, only with Twitch Prime.", "EsportsCampaignTabs");
                    return Object(s.d)("Get 500 Bits as a bonus reward on purchase, only with Twitch Prime <x:link>Sign up now</x:link>", {
                        "x:link": function(t) {
                            return o.createElement(l.Q, {
                                noWrap: !0,
                                type: l._49.Span
                            }, o.createElement(l.O, {
                                key: "insider-prime-link",
                                to: s.a.tryPrimeURI,
                                type: e,
                                targetBlank: !0
                            }, t))
                        }
                    }, "EsportsCampaignTabs")
                }, t
            }(o.PureComponent);
        var d = Object(i.b)(function(e) {
            return {
                user: Object(r.c)(e)
            }
        })(c);
        n.d(t, "a", function() {
            return d
        })
    },
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
    acVP: function(e, t) {
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
    arZ9: function(e, t) {},
    bW4X: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsView"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "creationState"
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
                end: 70
            }
        };
        n.loc.source = {
            body: "query ClipsView($slug: ID!) {\nclip(slug: $slug) {\nid\ncreationState\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var i = n("8Wuk");
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
    },
    bnNq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsSocialShare"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "url"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "embedURL"
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
                                    value: "broadcaster"
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
        n.loc.source = {
            body: "query ClipsSocialShare($slug: ID!) {\nclip(slug: $slug) {\nid\nurl\nembedURL\ntitle\ngame {\nid\nname\n}\nbroadcaster {\nid\nlogin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    dJGa: function(e, t) {},
    dPTw: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("CSlQ"),
            l = n("Odds"),
            c = n("0CQq"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.clip || this.props.data.loading) return r.createElement(l._8, null, this.renderPlaceholders());
                    var e = this.props.padding && this.props.padding.bottom,
                        t = void 0 === e ? .5 : e;
                    return r.createElement(l._8, {
                        display: l.R.Flex,
                        alignItems: l.c.Center,
                        padding: {
                            bottom: t
                        }
                    }, !this.props.hideSymbol && r.createElement(l._8, {
                        margin: {
                            right: .5
                        },
                        display: l.R.Flex,
                        alignItems: l.c.Center
                    }, r.createElement(l._24, {
                        asset: l._25.GlyphViews,
                        type: l._26.Brand
                    })), r.createElement(l.Q, {
                        bold: !0,
                        type: l._49.Span,
                        fontSize: this.props.fontSize ? this.props.fontSize : l.V.Size5
                    }, Object(a.d)("{views} views", {
                        views: Object(a.e)(this.props.data.clip.viewCount)
                    }, "ClipsViewCount")))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return r.createElement(l.e, {
                        type: l.j.FadeIn,
                        duration: l.g.Long,
                        enabled: !0
                    }, r.createElement(l.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : l.V.Size5
                    }, r.createElement(l._14, {
                        lineCount: 1,
                        width: 80
                    })))
                }, t = i.__decorate([Object(s.d)("ClipsViewCount"), Object(o.a)(c)], t)
            }(r.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    "dQ/z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsFullVideoButton"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "videoOffsetSeconds"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "video"
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
                end: 99
            }
        };
        n.loc.source = {
            body: "query ClipsFullVideoButton($slug: ID!) {\nclip(slug: $slug) {\nid\nvideoOffsetSeconds\nvideo {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    daN3: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("yDzg"),
            l = n("CSlQ"),
            c = n("Odds"),
            d = n("lK86"),
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleClick = function() {
                        return n.openCheckout(), n.props.onClick && n.props.onClick()
                    }, n.openCheckout = function() {
                        n.state.hasPopupExperiment && n.props.checkoutURL && n.props.giftRecipient && window.open(Object(s.a)(n.props.checkoutURL, {
                            recipient: n.props.giftRecipient,
                            ref: "gift-subscribe-button"
                        }), "Twitch", "width=1000, height=1100, menubar, toolbar, location, personalbar, scrollbars")
                    };
                    var i = a.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_POPUP");
                    return n.state = {
                        hasPopupExperiment: "yes" === i
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                    this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button");
                    var i = this.props.checkoutURL && this.props.giftRecipient ? Object(s.a)(this.props.checkoutURL, {
                        recipient: this.props.giftRecipient
                    }) : "";
                    return r.createElement(c.v, {
                        targetBlank: !0,
                        disabled: !n,
                        onClick: this.handleClick,
                        linkTo: this.state.hasPopupExperiment ? void 0 : i,
                        "data-test-selector": t,
                        purchase: this.props.purchase
                    }, this.props.buttonMessage || e)
                }, t = i.__decorate([Object(l.d)("GiftSubscribeButton", {
                    autoReportInteractive: !0
                }), Object(o.a)(d, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(r.Component);
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, !1, function() {
            return "checkout-gift-subscribe-button"
        }), n.d(t, !1, function() {
            return "esports-gift-subscribe-button"
        }), n.d(t, !1, function() {
            return "esports-checkout-gift-subscribe-button"
        }), n.d(t, "a", function() {
            return u
        })
    },
    eBiB: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e && "v" === e.charAt(0)) return e.substring(1);
            return e
        }
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(r, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(a, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(s, {
                url: e
            })
        };
        var i = n("yDzg"),
            r = "https://www.facebook.com/sharer/sharer.php",
            a = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
    },
    fc0G: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("F8kA"),
            o = n("6sO2"),
            s = n("hdYS"),
            l = n("+Znq"),
            c = n("vH/s"),
            d = n("LjAQ"),
            u = n("mw/a"),
            p = n("70dR"),
            m = n("Odds"),
            h = (n("Zifq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportHosterClick = function() {
                        t.props.isLoggedIn ? t.props.showReportUserModal({
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentType: u.a.User,
                                targetUserID: t.props.hostChannelID
                            },
                            title: Object(o.d)("Report {channelDisplayName}", {
                                channelDisplayName: t.props.hostChannelDisplayName
                            }, "VideoPlayerHostingUI")
                        }) : t.props.login()
                    }, t.handleReportModalClose = function(e) {
                        (e === d.b.MutationError || e === d.b.Success) && t.props.history.push("/")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName;
                    return r.createElement(m._35, {
                        className: "video-player-hosting-ui__container"
                    }, e && this.renderHeader(), r.createElement("span", {
                        key: "video-player"
                    }, this.props.children), r.createElement(m._8, {
                        display: e ? m.R.Block : m.R.Hide,
                        position: m._15.Relative,
                        zIndex: m._62.Above
                    }, e && this.renderFooter()))
                }, t.prototype.renderHeader = function() {
                    return r.createElement(m.e, {
                        type: m.j.SlideInBottom,
                        delay: m.f.Medium,
                        duration: m.g.Medium,
                        enabled: !0
                    }, r.createElement(a.a, {
                        key: "hosting-ui-header",
                        className: "video-player-hosting-ui__link",
                        to: {
                            pathname: "/" + this.props.hostedChannelLogin,
                            state: {
                                medium: c.PageviewMedium.Channel,
                                content: c.PageviewContent.Host
                            }
                        },
                        "data-a-target": "hosting-ui-link",
                        "data-test-selector": "video-player-hosting-ui__header"
                    }, r.createElement(m._35, {
                        className: "video-player-hosting-ui__header",
                        display: m.R.Flex,
                        background: m.n.AccentAlt2,
                        color: m.K.Overlay,
                        alignItems: m.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        "data-a-target": "hosting-ui-header"
                    }, r.createElement(m._8, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, r.createElement(m.m, {
                        src: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        alt: Object(o.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), r.createElement(m._35, {
                        margin: {
                            left: 1
                        },
                        fontSize: m.V.Size5
                    }, Object(o.d)("Hosting", "VideoPlayerHostingUI"), " ", r.createElement(m.Q, {
                        type: m._49.Span,
                        className: "video-player-hosting-ui__channel-name",
                        color: m.K.OverlayAlt,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))))
                }, t.prototype.renderFooter = function() {
                    return r.createElement(m.e, {
                        type: m.j.SlideInTop,
                        enabled: !0,
                        delay: m.f.Medium,
                        duration: m.g.Medium
                    }, r.createElement(m._35, {
                        key: "hosting-ui-footer",
                        background: m.n.AccentAlt2,
                        className: "video-player-hosting-ui__footer",
                        display: m.R.Block,
                        padding: 1,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, r.createElement(m._8, {
                        padding: {
                            y: .5
                        },
                        display: m.R.Flex,
                        justifyContent: m._7.Between
                    }, r.createElement(m._8, {
                        display: m.R.Flex
                    }, r.createElement(m._8, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: m.r.BottomLeft,
                        followUIType: s.b.IconAndText,
                        unfollowUIType: s.b.IconOnly
                    })), r.createElement(m._8, null, r.createElement(p.a, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), r.createElement(l.a, null, r.createElement(m.w, {
                        ariaLabel: Object(o.d)("More options", "HostingUI"),
                        overlay: !0,
                        icon: m._25.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), r.createElement(m.q, {
                        direction: m.r.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, r.createElement(m._8, {
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m._6, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, r.createElement(m._8, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(o.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))))
                }, t
            }(r.Component)),
            g = n("RH2O"),
            b = n("2KeS"),
            f = n("+xm8"),
            v = n("V5M+"),
            k = n("f2i/"),
            y = n("Aj/L"),
            S = n("oSFp");
        var _ = Object(g.b)(function(e) {
                return {
                    isLoggedIn: Object(y.d)(e)
                }
            }, function(e) {
                return Object(b.b)({
                    login: function() {
                        return Object(k.f)(f.a.ReportHoster)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(v.d)(S.a, t)
                    }
                }, e)
            })(Object(a.f)(h)),
            C = n("CIox"),
            T = n("BhGt"),
            E = [];
        T.onchange = function() {
            E.forEach(function(e) {
                e()
            })
        };
        var O = n("7enT"),
            N = n("0nzt"),
            w = n("UvtE"),
            P = n("Hjbq"),
            R = n("j0cR"),
            I = n("HW6M"),
            D = n("BwgW"),
            F = n("knr3"),
            x = n("OAwv"),
            j = n("eBiB"),
            M = n("HM6l"),
            L = n("JpYe"),
            U = n("ZVME"),
            A = n("CSlQ"),
            B = n("L3z0"),
            V = n("5MsU"),
            W = n("ijOz"),
            G = n("Tjmd"),
            z = (n("4NZK"), n("Ryxq")),
            H = {
                allowfullscreen: !0,
                externalfullscreen: !1,
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: W.c.Site,
                showInfo: !1,
                showtheatre: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: "",
                gdprConsent: !1
            };

        function q() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var Q = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.lastGDPRConsent = !1, n.logger = o.j.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        q() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onMetadataLoaded = function() {
                        var e = n.player && n.player.getSessionInfo();
                        e && (n.logger.debug("Got player session info from player instance", e), o.n.setVideoPlayerTrackingData({
                            broadcastID: e.broadcastId,
                            playSessionID: e.playSessionId
                        }))
                    }, n.onOpenStream = function() {
                        if (n.props.playerTypeOverride === W.c.Frontpage && n.player)
                            if (n.props.channelLogin) o.o.history.push("/" + n.props.channelLogin);
                            else if (n.props.vodID) {
                            var e = Math.floor(n.player.getCurrentTime());
                            o.o.history.push("/videos/" + n.props.vodID + "?t=" + Object(z.a)(e))
                        } else n.props.collectionID && o.o.history.push("/collections/" + n.props.collectionID)
                    }, n.onPlayerReady = function() {
                        n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.setState({
                            playerInitialized: !0
                        }, n.updatePlayerTrackingDataFromProps))
                    }, n.onPlayerPlay = function() {
                        n.logger.debug("Play"), n.reportPlayerBuffering(), n.lastPausedProp = !1, n.togglePause(!1)
                    }, n.onPlayerPlaying = function() {
                        n.logger.debug("Playing"), n.reportPlayerPlayed(), n.lastPausedProp = !1, n.state.playerRefID !== n.props.activeVideoPlayerRefID && n.props.reportPlayerInstanceStarted && n.props.reportPlayerInstanceStarted(n.state.playerRefID), n.togglePause(!1)
                    }, n.onPause = function() {
                        n.logger.debug("Pause"), n.lastPausedProp = !0, n.togglePause(!0)
                    }, n.togglePause = function(e) {
                        n.setState({
                            playerPaused: e
                        }), n.props.onPauseToggled && n.props.onPauseToggled(e)
                    }, n.onStreamStatusOnline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(V.a.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(V.a.Offline)
                    }, n.onTheatreChange = function(e) {
                        e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                    }, n.onFullScreenChange = function() {
                        n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                            isFullScreen: n.player.fullscreen
                        }))
                    }, n.onExternalFullScreenChange = function() {
                        n.player && (n.logger.debug("External Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && (n.player.fullscreen ? n.enterFullscreen() : n.exitFullscreen()))
                    }, n.onClipsModerationOpen = function(e) {
                        n.player && (n.logger.debug("Clips Moderation Open", e), n.props.onClipsModerationOpen && n.props.onClipsModerationOpen(e))
                    }, n.onTwilightFullscreenChange = function() {
                        var e = n.props.fullscreen.element(),
                            t = !!e && !!n.playerRef && e.contains(n.playerRef);
                        n.state.isFullScreen && !t && n.exitFullscreen()
                    }, n.onSeek = function() {
                        n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                    }, n.onTimeUpdate = function() {
                        n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                    }, n.onHistoryChange = function() {
                        n.state.isFullScreen && n.exitFullscreen()
                    }, n.onTransitionToCollectionVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(j.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(j.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.onPersistentPlayerToggled = function() {
                        n.props.togglePersistentPlayer && n.props.togglePersistentPlayer()
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = o.n.getLastPageview(),
                                r = {
                                    host_channel: e.hostChannel,
                                    collapse_right: !e.rightColumnExpanded,
                                    collapse_left: !e.sideNavExpanded
                                };
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                updates: r
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                updates: r
                            }), n.player.setTrackingProperties(i.__assign({}, t, r))
                        }
                    }, n.updatePlayerTrackingDataFromProps = function() {
                        n.updatePlayerTrackingData(n.props)
                    }, n.updatePlayerType = function(e) {
                        var t = e || H.player;
                        n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerBuffering = n.registerBufferingEvent(), n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: q(),
                        playerInitialized: !1,
                        isFullScreen: !1,
                        playerPaused: !1,
                        playerRefID: Object(M.a)()
                    }, n.playerType = t.playerTypeOverride || H.player, n.lastSetChannel = t.channelLogin, n.lastGDPRConsent = t.gdpr.consentGiven, t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.historyUnlistener = this.props.history.listen(this.onHistoryChange), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), o.n.eventEmitter.addListener(c.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), window.__playerScriptChunk && !t.tagInjected) {
                        this.logger.debug("Loading player chunk after page loaded");
                        var e = document.createElement("script");
                        e.async = !0, e.crossOrigin = "anonymous", e.src = window.__playerScriptChunk, document.body.appendChild(e);
                        var n = document.createElement("link");
                        n.href = window.__playerStyleChunk, n.media = "screen", n.rel = "stylesheet", n.type = "text/css", document.body.appendChild(n), t.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    if (this.state.canInitializePlayer || !t.canInitializePlayer) {
                        if (t.canInitializePlayer && t.playerInitialized) {
                            if (this.updatePlayerTrackingData(e), this.updatePlayerType(e.playerTypeOverride), this.player && t.isFullScreen !== this.player.fullscreen && this.player.setFullscreen(t.isFullScreen), this.player) {
                                var n = this.props.editing || {},
                                    i = e.editing || {},
                                    r = n.startOffset,
                                    a = n.endOffset,
                                    s = n.videoUrl,
                                    l = n.isPostEdit;
                                s !== i.videoUrl && i.slug && this.player.setEditClipStream({
                                    videoUrl: i.videoUrl,
                                    slug: i.slug
                                }), l !== i.isPostEdit && this.player.updateClipsEditing({
                                    isPostEdit: i.isPostEdit
                                }), r === i.startOffset && a === i.endOffset || this.player.updateEditingOffsets([{
                                    startOffset: i.startOffset,
                                    endOffset: i.endOffset
                                }])
                            }
                            this.player && e.clipSlug && this.props.clipSlug !== e.clipSlug && this.player.setClip(e.clipSlug), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.miniModeEnabled !== this.props.miniModeEnabled && this.player.setMiniPlayerMode(!!e.miniModeEnabled), this.player && t.playerPaused !== this.lastPausedProp && (t.playerPaused ? this.player.pause() : t.playerPaused || this.player.play(), this.lastPausedProp = t.playerPaused), this.player && e.gdpr.consentGiven !== this.lastGDPRConsent && (this.player.setGDPRConsent(e.gdpr.consentGiven), this.lastGDPRConsent = e.gdpr.consentGiven);
                            var c = e.channelLogin !== this.lastSetChannel;
                            if (this.player && e.channelLogin && (c || Object(G.a)(this.props, e))) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void o.n.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var d = e.collectionID && this.props.collectionID !== e.collectionID,
                                u = e.vodID && this.props.vodID !== e.vodID;
                            if (d || u) {
                                var p = e.vodID ? Object(L.b)(e.vodID) : "";
                                if ("" !== p && o.n.setVideoPlayerTrackingData({
                                        vodID: e.vodID
                                    }), !this.player) return;
                                d || e.collectionID && u ? this.player.setCollection(e.collectionID, p, e.nextVideoOffset) : this.player.setVideo(p, e.nextVideoOffset)
                            } else void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset)
                        }
                    } else this.initializePlayer()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (void 0 !== e.paused && this.props.paused !== e.paused) this.togglePause(e.paused);
                    else {
                        var t = this.props.activeVideoPlayerRefID,
                            n = e.activeVideoPlayerRefID;
                        t !== n && (n === this.state.playerRefID && this.state.playerPaused ? this.togglePause(!1) : n === this.state.playerRefID || this.state.playerPaused || this.togglePause(!0))
                    }
                }, t.prototype.render = function() {
                    var e = I("video-player", {
                            "video-player--theatre": this.props.theatreModeEnabled,
                            "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible,
                            "video-player--logged-in": this.props.isLoggedIn,
                            "video-player--fullscreen": this.state.isFullScreen
                        }),
                        t = I("video-player__container", {
                            "video-player__container--clips": W.a.includes(this.playerType)
                        });
                    return r.createElement("div", {
                        className: I(e),
                        "data-test-selector": "video-player"
                    }, r.createElement("div", {
                        className: t,
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.latencyTracking.reportInteractive(), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), o.n.eventEmitter.removeListener(c.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(V.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(V.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(V.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(B.a.Ended, this.onStreamStatusOffline), this.player.removeEventListener(B.a.Play, this.onPlayerPlay), this.player.removeEventListener(B.a.Playing, this.onPlayerPlaying), this.player.removeEventListener(V.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(V.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(V.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(V.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(B.a.Seeked, this.onSeek), this.player.removeEventListener(B.a.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(V.a.OpenStream, this.onOpenStream), this.player.removeEventListener(B.a.Pause, this.onPause), this.player.removeEventListener(V.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(B.a.LoadedMetadata, this.onMetadataLoaded), D.extensionService.unregisterPlayer(), this.player.destroy()), o.n.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.trackMiniPlayerAction = function(e, t) {
                    this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                }, t.prototype.initializePlayer = function() {
                    var e = i.__assign({}, H, {
                        showtheatre: !this.props.disableTheatreButton,
                        allowfullscreen: !this.props.disableFullscreen,
                        externalfullscreen: this.props.fullscreen.supported(),
                        autoplay: !this.props.paused,
                        gdprConsent: this.props.gdpr.consentGiven
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride, this.props.playerTypeOverride === W.c.ClipsEditing && (e.muted = !0)), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.clipSlug && (e.clip = this.props.clipSlug), this.props.vodID && (e.video = Object(L.b)(this.props.vodID), o.n.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.showChannelInfoOnHover && (e.showInfo = this.props.showChannelInfoOnHover), void 0 !== this.props.nextVideoOffset && this.props.nextVideoOffset >= 0 && (e.time = Object(z.a)(this.props.nextVideoOffset)), this.lastPausedProp = this.props.paused, e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(V.a.PlayerReady, this.onPlayerReady), t.addEventListener(V.a.Online, this.onStreamStatusOnline), t.addEventListener(V.a.Offline, this.onStreamStatusOffline), t.addEventListener(B.a.Ended, this.onStreamStatusOffline), t.addEventListener(B.a.Play, this.onPlayerPlay), t.addEventListener(B.a.Playing, this.onPlayerPlaying), t.addEventListener(B.a.Seeked, this.onSeek), t.addEventListener(B.a.TimeUpdate, this.onTimeUpdate), t.addEventListener(V.a.TheatreChange, this.onTheatreChange), t.addEventListener(V.a.FullscreenChange, this.onFullScreenChange), t.addEventListener(V.a.ExternalFullscreenChange, this.onExternalFullScreenChange), t.addEventListener(V.a.ClipsModerationOpen, this.onClipsModerationOpen), t.addEventListener(V.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(V.a.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(V.a.OpenStream, this.onOpenStream), t.addEventListener(B.a.Pause, this.onPause), t.addEventListener(V.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), t.addEventListener(B.a.LoadedMetadata, this.onMetadataLoaded), D.extensionService.registerPlayer(this.player), D.extensionService.setPlayerWindow(window), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerBufferingEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: U.a.Player,
                        key: U.b.PlayerBuffering,
                        label: U.c.Buffering
                    })
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: U.a.Player,
                        key: U.b.PlayerCreated,
                        label: U.c.Created
                    })
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 2500,
                        group: U.a.Player,
                        key: U.b.PlayerLoaded,
                        label: U.c.Init
                    })
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 4e3,
                        group: U.a.Player,
                        key: U.b.PlayerPlayed,
                        label: U.c.FirstFrame
                    })
                }, t.prototype.reportPlayerBuffering = function() {
                    this.hasBuffered || (this.hasBuffered = !0, this.playerBuffering && this.props.latencyTracking.reportCustomEvent(this.playerBuffering))
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.enterFullscreen = function() {
                    this.setState({
                        isFullScreen: !0
                    }), this.props.fullscreenRef ? this.props.fullscreen.enable(this.props.fullscreenRef) : this.props.supportTheatreFullscreen ? (this.props.enableFullscreenTheatreMode(), this.props.fullscreen.enable(document.body)) : this.props.fullscreen.enable(this.playerRef)
                }, t.prototype.exitFullscreen = function() {
                    this.state.isFullScreen && (this.props.disableFullscreenTheatreMode(), this.setState({
                        isFullScreen: !1
                    }), this.props.fullscreen.disable())
                }, t.prototype.maybeAttachToWindow = function(e) {
                    x.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    F.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    F.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(r.Component),
            K = Object(A.d)("VideoPlayer")(Q);
        var $ = Object(b.d)(Object(g.b)(function(e) {
            return {
                isWhispersBottomBarVisible: Object(N.b)(e),
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded,
                sideNavExpanded: e.ui.sideNavExpanded,
                isLoggedIn: Object(y.d)(e),
                authToken: Object(y.a)(e),
                activeVideoPlayerRefID: Object(R.a)(e)
            }
        }, function(e) {
            return Object(b.b)({
                enableTheatreMode: O.v,
                disableTheatreMode: O.t,
                enableFullscreenTheatreMode: O.u,
                disableFullscreenTheatreMode: O.s,
                togglePersistentPlayer: O.B,
                reportPlayerInstanceStarted: P.b
            }, e)
        }), function(e) {
            return function(t) {
                function n() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.addChangeListener = function(e) {
                        E.push(e)
                    }, e.removeChangeListener = function(e) {
                        E = E.filter(function(t) {
                            return t !== e
                        })
                    }, e
                }
                return i.__extends(n, t), n.prototype.render = function() {
                    var t = {
                        fullscreen: {
                            addChangeListener: this.addChangeListener,
                            removeChangeListener: this.removeChangeListener,
                            supported: this.supported,
                            element: this.element,
                            enable: this.enable,
                            disable: this.disable
                        }
                    };
                    return r.createElement(e, i.__assign({}, t, this.props))
                }, n.prototype.supported = function() {
                    return !!T.enabled
                }, n.prototype.element = function() {
                    return T.element
                }, n.prototype.enable = function(e) {
                    T.request(e)
                }, n.prototype.disable = function() {
                    T.exit()
                }, n
            }(r.Component)
        }, Object(w.b)(), C.f)(K);

        function Y(e, t, n) {
            if (e.collectionID || !e.videoID)
                if (e.collectionID && e.videoID) {
                    if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                    t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
                } else !e.collectionID || e.videoID ? o.j.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.") : t.push("/collections/" + e.collectionID);
            else t.push("/videos/" + e.videoID)
        }
        n.d(t, !1, function() {
            return "hosting-ui-report-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-balloon"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-channel-name"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer"
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, "a", function() {
            return _
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return $
        }), n.d(t, "d", function() {
            return Y
        }), n.d(t, "b", function() {
            return W.c
        })
    },
    hdYS: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("4bQk");
        var c = Object(i.b)(function(e) {
            var t = Object(s.c)(e);
            return {
                currentUserLogin: t && t.login,
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return Object(o.f)(a.a.FollowButton)
                }
            }, e)
        })(l.a);
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return l.b
        })
    },
    iOr9: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.logger = a.o.logger.withCategory("component-experiment");
                    var i = a.o.experiments.getAssignment(n.props.name, n.props.channel ? {
                        channel: n.props.channel
                    } : {});
                    return i && n.props.assignments[i] ? n.logger.debug("Displaying component for experiment", {
                        name: n.props.name,
                        assignment: i
                    }) : n.logger.debug("Displaying fallback component for experiment", {
                        name: n.props.name,
                        assignment: i
                    }), n.state = {
                        assignment: i
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.state.assignment && this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    ijOz: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }),
            function(e) {
                e.AnimatedThumbnails = "animated_thumbnails", e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed"
            }(i || (i = {}));
        var r, a = [i.ClipsEditing, i.ClipsViewing, i.ClipsEmbed];
        ! function(e) {
            e.Delete = "delete", e.DeleteAll = "deleteAll", e.ReportUser = "report"
        }(r || (r = {}))
    },
    isxN: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PublishClip"
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
                                value: "PublishClipInput"
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
                            value: "publishClip"
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
                                    value: "clip"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "slug"
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
                                            value: "message"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    j0cR: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.videoPlayer.activeVideoPlayerInstanceRefID
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Hjbq");
        r.o.store.registerReducer("videoPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                activeVideoPlayerInstanceRefID: void 0
            }), t.type) {
                case a.a:
                    return i.__assign({}, e, {
                        activeVideoPlayerInstanceRefID: t.playerRefID
                    });
                default:
                    return e
            }
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function l(e) {
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
                                    l = a.medium,
                                    c = a.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
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
            return l
        })
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
                    if (n.type !== o.q) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var a = r.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = r.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = a;
                    return this.props.tooltipProps && (l = r.createElement(o._52, i.__assign({}, this.props.tooltipProps), a)), r.createElement(o._8, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._15.Relative
                    }, r.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, l), s)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t
            }(r.Component)
    },
    lK86: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
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
                            value: "subProductId"
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
                                    value: "recipientLogin"
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
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
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
                end: 171
            }
        };
        n.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String $subProductId: String!) {\nuser(login: $recipientLogin) {\nid\nself {\ncanGift(product: $subProductId)\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lTii: function(e, t) {},
    m0Vj: function(e, t) {},
    mK8J: function(e, t) {},
    mRH2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
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
                            value: "reportContent"
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
                                    value: "contentID"
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
                end: 111
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mVDO: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("6sO2"),
            c = n("7vx8"),
            d = n("sikP"),
            u = n("CSlQ"),
            p = n("oSFp"),
            m = n("mw/a"),
            h = n("fc0G"),
            g = n("ijOz"),
            b = n("46tX"),
            f = n("kJau"),
            v = n("Odds"),
            k = (n("+g5R"), n("RsNJ")),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDismissed: !1,
                        isShowingLiveCTA: !1
                    }, t.dismissWatchLivePrompt = function(e) {
                        e.preventDefault(), t.setState({
                            isDismissed: !0
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.slug !== e.slug && this.setState({
                        isShowingLiveCTA: !1
                    }), this.updateLiveVisibility(e)
                }, t.prototype.render = function() {
                    var e = this.props.data.clip;
                    if (this.state.isDismissed || !this.state.isShowingLiveCTA || !(e && e.game && e.broadcaster && e.broadcaster.stream && e.broadcaster.stream.id)) return null;
                    var t = e.broadcaster,
                        n = e.game,
                        i = Object(f.b)(t.login);
                    return s.createElement(v._8, {
                        className: "watch-live-prompt",
                        position: v._15.Absolute,
                        zIndex: v._62.Above,
                        attachRight: !0
                    }, s.createElement(v.O, {
                        to: i,
                        targetBlank: !0
                    }, s.createElement(v.e, {
                        type: v.j.SlideInRight,
                        duration: v.g.Short,
                        enabled: !0
                    }, s.createElement(v._35, {
                        padding: 1,
                        elevation: 2,
                        background: v.n.Overlay
                    }, s.createElement(v._8, {
                        position: v._15.Relative,
                        display: v.R.Flex,
                        flexDirection: v.T.Row,
                        alignItems: v.c.Center
                    }, s.createElement(v._8, {
                        position: v._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: v._62.Above
                    }, s.createElement(v._12, {
                        label: Object(l.d)("LIVE", "WatchLivePrompt"),
                        type: v._13.Live
                    })), s.createElement(v.C, {
                        row: !0
                    }, s.createElement(v.E, {
                        src: e.thumbnailURL,
                        alt: Object(l.d)("Clip Thumbnail", "ClipWatchLivePrompt"),
                        aspect: v.l.Aspect16x9,
                        size: v.F.Size6
                    }), s.createElement(v.D, null, s.createElement(v._8, {
                        className: "watch-live-prompt__copy",
                        padding: {
                            x: 1
                        }
                    }, s.createElement(v.Q, {
                        type: v._49.H5,
                        color: v.K.Overlay,
                        lineHeight: v._9.Heading,
                        ellipsis: !0
                    }, Object(l.d)("Watch {displayName} Live", {
                        displayName: t.displayName
                    }, "WatchLivePrompt")), s.createElement(v.Q, {
                        type: v._49.H6,
                        color: v.K.OverlayAlt,
                        lineHeight: v._9.Heading,
                        ellipsis: !0
                    }, Object(l.d)("playing {gameName}", {
                        gameName: n.displayName
                    }, "WatchLivePrompt"))))), s.createElement(v.w, {
                        ariaLabel: Object(l.d)("Dismiss watch live prompt", "WatchLivePrompt"),
                        icon: v._25.Close,
                        onClick: this.dismissWatchLivePrompt,
                        type: v.y.Default,
                        overlay: !0,
                        size: v.x.Large
                    }))))))
                }, t.prototype.updateLiveVisibility = function(e) {
                    var t = e.currentTime,
                        n = e.data.clip && e.data.clip.durationSeconds;
                    if (n && t) {
                        var i = .6 * n;
                        !this.state.isShowingLiveCTA && t > i && 18 <= n && this.setState({
                            isShowingLiveCTA: !0
                        })
                    }
                }, t = o.__decorate([Object(c.a)(k)], t)
            }(s.Component),
            S = (n("zU1d"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(v._2, {
                        position: v._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, s.createElement("div", {
                        ref: this.props.setPlayerWrapperRef
                    }, s.createElement(v._35, {
                        className: "clips-video-overlay",
                        fullHeight: !0,
                        fullWidth: !0,
                        position: v._15.Absolute,
                        overflow: v._11.Hidden
                    }, !Object(b.c)(window.navigator.userAgent) && this.props.playerType === h.b.ClipsViewing && s.createElement(y, {
                        slug: this.props.slug,
                        currentTime: this.props.currentTime
                    })), s.createElement(v._8, {
                        position: v._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.props.children)))
                }, t
            }(s.Component)),
            _ = (n("3yhY"), n("U8/5")),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoaded: !1
                    }, t.playerWrapperRef = null, t.onClipsModerationOpen = function(e) {
                        if (e === g.b.ReportUser) {
                            var n = t.props.data.clip && t.props.data.clip.broadcaster ? t.props.data.clip.broadcaster.id : "",
                                i = t.props.data.clip && t.props.data.clip.curator ? t.props.data.clip.curator.id : "";
                            t.props.showModal(p.a, {
                                title: Object(l.d)("Report this Clip", "ClipsViewModerationModals"),
                                reportContext: {
                                    contentType: m.a.Clip,
                                    contentID: t.props.slug,
                                    targetUserID: n,
                                    additionalTrackingID: i
                                },
                                onClose: t.props.closeModal
                            })
                        }
                        e === g.b.Delete && t.props.showModal(d.d, {
                            slug: t.props.slug,
                            onClose: t.props.closeModal
                        }), e === g.b.DeleteAll && t.props.showModal(d.e, {
                            slug: t.props.slug,
                            onClose: t.props.closeModal
                        })
                    }, t.setDoneLoading = function() {
                        t.setState({
                            isLoaded: !0
                        }), t.props.onLoaded && t.props.onLoaded()
                    }, t.setPlayerWrapperRef = function(e) {
                        return t.playerWrapperRef = e
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.slug,
                        n = e.playerType;
                    return s.createElement(v._8, {
                        flexGrow: 1
                    }, s.createElement(v.k, {
                        ratio: v.l.Aspect16x9
                    }, s.createElement(S, {
                        slug: t,
                        setPlayerWrapperRef: this.setPlayerWrapperRef,
                        playerType: this.props.playerType,
                        currentTime: this.props.currentTime
                    }, s.createElement(v._35, {
                        className: "clips-video-wrapper",
                        position: v._15.Relative,
                        fullWidth: !0,
                        fullHeight: !0
                    }, s.createElement(v._35, {
                        display: this.state.isLoaded ? v.R.Hide : v.R.Flex,
                        color: v.K.Overlay,
                        alignItems: v.c.Center,
                        justifyContent: v._7.Center,
                        position: v._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, s.createElement(v._10, {
                        size: v._33.Large,
                        inheritColor: !0
                    })), s.createElement(v._8, {
                        display: this.state.isLoaded ? v.R.Block : v.R.HideAccessible,
                        position: v._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, s.createElement(h.c, {
                        clipSlug: t,
                        playerTypeOverride: n,
                        disableTheatreButton: !0,
                        onInit: this.setDoneLoading,
                        onVideoTimeChange: this.props.setCurrentTime,
                        onClipsModerationOpen: this.onClipsModerationOpen,
                        fullscreenRef: this.playerWrapperRef,
                        editing: this.props.editing
                    }))))))
                }, t = o.__decorate([Object(u.d)("ClipsVideoPlayer", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            T = Object(c.a)(_)(C);
        var E = Object(i.b)(null, function(e) {
            return Object(r.b)({
                showModal: a.d,
                closeModal: a.c
            }, e)
        })(T);
        n.d(t, "a", function() {
            return E
        })
    },
    mZoE: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GDPRConsent"
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
                                    value: "isFromEEA"
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
                end: 47
            }
        };
        n.loc.source = {
            body: "query GDPRConsent {\nrequestInfo {\nisFromEEA\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mbxv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("+V/3"),
            o = n("Odds"),
            s = (n("2IkU"), n("6sO2")),
            l = n("vH/s"),
            c = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.o.tracking.track(l.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return d
        });
        var d = function(e) {
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
                    c({
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
                    l = r.createElement("img", {
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
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (l = r.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, l)), this.state.isHovering ? r.createElement(o._52, {
                    align: o._53.Left,
                    "data-a-target": "chat-badge",
                    display: o.R.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, l) : l
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case a.e:
                        return e.clickURL;
                    case a.c:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case a.d:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(r.Component)
    },
    mmQh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
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
                            value: "reportUserInCommunity"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 138
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mmqR: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsChatCard"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "videoOffsetSeconds"
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
                                    value: "curator"
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
                                    value: "video"
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
                end: 123
            }
        };
        n.loc.source = {
            body: "query ClipsChatCard($slug: ID!) {\nclip(slug: $slug) {\nid\nvideoOffsetSeconds\ncreatedAt\ncurator {\nid\nlogin\n}\nvideo {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "mw/a": function(e, t, n) {
        "use strict";
        var i, r;
        n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }),
            function(e) {
                e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
            }(i || (i = {})),
            function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {}))
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
    nU46: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("7vx8"),
            o = n("CSlQ"),
            s = n("Odds"),
            l = n("0Kuu"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return !this.props.data.clip || this.props.data.loading ? r.createElement(s._8, null, this.renderPlaceholders()) : r.createElement(s.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.V.Size3,
                        type: s._49.Span,
                        lineHeight: s._9.Heading,
                        ellipsis: this.props.ellipsis
                    }, this.props.data.clip.title)
                }, t.prototype.reportInteractive = function() {
                    this.props.data.clip && this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return r.createElement(s.e, {
                        type: s.j.FadeIn,
                        duration: s.g.Long,
                        delay: s.f.Short,
                        enabled: !0
                    }, r.createElement(s.Q, {
                        fontSize: this.props.fontSize ? this.props.fontSize : s.V.Size3
                    }, r.createElement(s._14, {
                        lineCount: 1,
                        width: 100
                    })))
                }, t = i.__decorate([Object(o.d)("ClipsTitle"), Object(a.a)(l)], t)
            }(r.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    nWgz: function(e, t, n) {
        "use strict";
        t.a = function() {
            return i.b.get("gdpr_consent_enabled", !1)
        };
        var i = n("6sO2")
    },
    nmYW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "blockedUsers"
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
                            value: "blockedUsers"
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
                end: 56
            }
        };
        n.loc.source = {
            body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    oFw4: function(e, t) {},
    oMs9: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.creating = "CREATING", e.created = "CREATED", e.failed = "FAILED"
            }(i || (i = {}))
    },
    oSFp: function(e, t, n) {
        "use strict";
        var i = n("A5Hr"),
            r = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            s = n("2KeS"),
            l = n("+8VM"),
            c = n("V5M+"),
            d = n("CSlQ"),
            u = n("Odds"),
            p = (n("oFw4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e, n) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u._35, {
                        className: "reporting-modal__container",
                        background: u.n.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, a.createElement(i.b, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), a.createElement(l.a, null))
                }, t
            }(a.Component));
        var m = Object(s.d)(Object(d.d)("ReportUserModal"), Object(o.b)(null, function(e) {
            return Object(s.b)({
                closeModal: c.c
            }, e)
        }))(p);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.c
        }), n.d(t, !1, function() {
            return i.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.b
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    odx1: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("iOr9")),
            s = n("bZTi"),
            l = n("Odds");
        ! function(e) {
            e.TREATMENT = "treatment", e.CONTROL = "control"
        }(i || (i = {}));
        var c = function(e) {
            var t, c = {
                    failSilently: !1,
                    placeholder: a.createElement(l._14, {
                        width: 82,
                        height: 30
                    })
                },
                d = {
                    name: "TWILIGHT_PRIME_SUB_CREDIT_API_WEXIT",
                    assignments: (t = {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return n.e(61).then(n.bind(null, "tkxl"))
                            }, "SubscribeWithPrimeButton", c)(e)
                        }
                    }, t[i.TREATMENT] = function() {
                        return s.a.wrap(function() {
                            return n.e(59).then(n.bind(null, "JJaH"))
                        }, "PrimeSubscribeButton", c)(e)
                    }, t),
                    loader: function() {
                        return a.createElement(l._14, {
                            width: 82,
                            height: 30
                        })
                    }
                };
            return a.createElement(o.a, r.__assign({}, d))
        }
    },
    onRC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "followButtonFragment"
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
                                    value: "follower"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 172
            }
        };
        n.loc.source = {
            body: "# Queries the data necessary to render the FollowButton component.\nfragment followButtonFragment on User {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    pQNb: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("FDYX"),
            s = n("Odds"),
            l = (n("Z+EN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.hasDiscount(this.props.subscriptionProducts)) {
                        var e = this.getMessage();
                        return r.createElement(s._35, {
                            textAlign: s._45.Center,
                            className: "sub-discount-banner",
                            padding: 1,
                            color: s.K.Overlay,
                            "data-test-selector": "sub-discount-banner"
                        }, r.createElement(s.Q, {
                            bold: !0
                        }, e))
                    }
                    return null
                }, t.prototype.getMessage = function() {
                    var e = Object(o.b)(this.props.subscriptionProducts[0], this.props.isGift);
                    return this.props.isGift ? Object(a.d)("Gift a sub and get {percent} off!", {
                        percent: Object(a.e)(e / 100, "percent")
                    }, "SubDiscountBanner") : Object(a.d)("Get {percent} off the first month of any paid subscription!", {
                        percent: Object(a.e)(e / 100, "percent")
                    }, "SubDiscountBanner")
                }, t.prototype.hasDiscount = function(e) {
                    return this.props.isGift ? Object(o.c)(e) : Object(o.d)(e)
                }, t
            }(r.Component));
        n.d(t, !1, function() {
            return "sub-discount-banner"
        }), n.d(t, "a", function() {
            return l
        })
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
    qe65: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("RH2O"),
            o = n("NXs7"),
            s = n("0nzt"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = (e.defaultRes, e.sources),
                        n = (e.darkModeEnabled, i.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                        a = this.props.darkModeEnabled ? t.dark : t.light,
                        o = Object.keys(a);
                    delete n.dispatch;
                    var s = i.__assign({}, n, {
                        src: a[this.props.defaultRes || o[0]],
                        srcSet: o.map(function(e) {
                            return a[e] + " " + e
                        }).join(",")
                    });
                    return r.createElement("img", i.__assign({}, s, {
                        onLoad: this.props.onLoad
                    }))
                }, t
            }(r.Component);
        var c = Object(a.b)(function(e) {
            return {
                darkModeEnabled: Object(s.a)(e) === o.a.Dark
            }
        })(l);
        n.d(t, "a", function() {
            return c
        })
    },
    rWzl: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BlockUser"
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
                                value: "BlockUserInput"
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
                            value: "blockUser"
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
                                    value: "targetUser"
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
                end: 94
            }
        };
        n.loc.source = {
            body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sADG: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("RH2O"),
            o = n("2KeS"),
            s = n("6sO2"),
            l = n("7vx8");

        function c() {
            var e = window;
            return !!(e.evidon && e.evidon.notice && e.evidon.notice.consentIsGiven)
        }
        var d, u = n("nWgz"),
            p = n("BzvE");
        ! function(e) {
            e.Consent = "consent", e.Close = "close"
        }(d || (d = {}));
        var m = function() {
                function e() {
                    var t = this;
                    this.logger = s.j.withCategory("evidon-manager"), this.scriptsLoaded = !1, this.eventEmitter = new p.EventEmitter, this.onConsentGivenCallback = function() {
                        t.logger.debug("consent given"), t.eventEmitter.emit(d.Consent, !0)
                    }, this.onConsentRevokedCallback = function() {
                        t.logger.debug("consent revoked"), t.eventEmitter.emit(d.Consent, !1)
                    }, this.onCloseCallback = function() {
                        t.eventEmitter.emit(d.Close)
                    }, e.instance && this.logger.error(new Error("More than one EvidonManager constructed"), "You may only construct one EvidonManager per session.")
                }
                return e.addListeners = function(t) {
                    e.instance || (e.instance = new e), e.instance.addListeners(t), e.instance.loadScripts()
                }, e.removeListeners = function(t) {
                    e.instance && e.instance.removeListeners(t)
                }, e.prototype.loadScripts = function() {
                    if (this.scriptsLoaded) this.logger.debug("Canceling loading Evidon scripts. A process may already be in flight, or the script has already completed loading.");
                    else {
                        this.scriptsLoaded = !0;
                        var e = "//c.evidon.com",
                            t = e + "/sitenotice";
                        window.evidon = {
                            id: "5419",
                            priorConsentCallback: this.onConsentGivenCallback,
                            closeCallback: this.onCloseCallback,
                            consentWithdrawnCallback: this.onConsentRevokedCallback
                        };
                        try {
                            this.appendScript("evidon-notice", t + "/evidon-sitenotice-tag.js"), this.appendScript("evidon-location", e + "/geo/country.js"), this.appendScript("evidon-themes", t + "/5419/snthemes.js"), this.appendScript("evidon-settings", t + "/5419/twitch/settings.js")
                        } catch (e) {
                            this.logger.error(e, "Failed loading the Evidon scripts.")
                        }
                    }
                }, e.prototype.addListeners = function(e) {
                    e.consent && (this.eventEmitter.addListener(d.Consent, e.consent), e.consent(c())), e.close && this.eventEmitter.addListener(d.Close, e.close)
                }, e.prototype.removeListeners = function(e) {
                    e.consent && this.eventEmitter.removeListener(d.Consent, e.consent), e.close && this.eventEmitter.removeListener(d.Close, e.close)
                }, e.prototype.appendScript = function(e, t) {
                    var n = document.getElementsByTagName("script")[0];
                    n || (n = document.head);
                    var i = document.createElement("script");
                    if (i.async = !0, i.id = e, i.src = t, !n.parentNode) throw new Error("Failed to insert " + e + " into document");
                    n.parentNode.insertBefore(i, n)
                }, e
            }(),
            h = n("mZoE");
        t.a = function() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            consentGiven: c()
                        }, e.dynamicSettingsEnabled = Object(u.a)(), e.logger = s.j.withCategory("with-gdpr-consent"), e.initializeEvidon = function() {
                            e.logger.debug("Listening to EvidonManager", {
                                displayName: n.displayName
                            }), m.addListeners({
                                consent: e.onConsentChange
                            })
                        }, e.onConsentChange = function(t) {
                            e.setState({
                                consentGiven: t
                            })
                        }, e.canInitializeEvidon = function(t) {
                            return !!(e.isEnabled() && t.data && t.data.requestInfo && (t.data.requestInfo.isFromEEA || e.hasQueryParamOverride()))
                        }, e.isEnabled = function() {
                            return e.hasQueryParamOverride() || e.dynamicSettingsEnabled
                        }, e
                    }
                    return i.__extends(n, t), n.prototype.componentDidMount = function() {
                        this.canInitializeEvidon(this.props) && this.initializeEvidon()
                    }, n.prototype.componentDidUpdate = function(e) {
                        var t = this.props.data && !this.props.data.loading && (!e.data || e.data.loading);
                        t && this.canInitializeEvidon(this.props) && this.initializeEvidon()
                    }, n.prototype.componentWillUnmount = function() {
                        m.removeListeners({
                            consent: this.onConsentChange
                        })
                    }, n.prototype.render = function() {
                        var t = !1,
                            n = this.props.data && this.props.data.requestInfo,
                            a = n && (n.isFromEEA || this.hasQueryParamOverride()),
                            o = n && !a;
                        (!this.isEnabled() || o || a && this.state.consentGiven) && (t = !0);
                        var s = {
                            gdpr: {
                                consentGiven: t
                            }
                        };
                        return r.createElement(e, i.__assign({}, s, this.props))
                    }, n.prototype.hasQueryParamOverride = function() {
                        return window.location.search.includes("gdpr_override")
                    }, n.displayName = "WithGDPRConsent(" + (e.displayName || e.name || "Component") + ")", n
                }(r.Component);
                return Object(o.d)(Object(a.b)(function(e) {
                    return {
                        firstPageLoaded: e.session.firstPageLoaded
                    }
                }), Object(l.a)(h, {
                    options: function(e) {
                        return {
                            skip: !e.firstPageLoaded
                        }
                    }
                }))(t)
            }
        }
    },
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "a", function() {
            return d
        });
        var i = n("GiK3"),
            r = (n.n(i), n("8Wuk")),
            a = n("yDzg"),
            o = n("WNmM"),
            s = n("McFO"),
            l = n("Odds"),
            c = [{
                type: r.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: r.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: r.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: r.b.Copy
            }],
            d = function(e) {
                return i.createElement(l._8, {
                    className: "clips-social-share",
                    display: l.R.Flex,
                    flexWrap: l.U.NoWrap
                }, i.createElement(l._8, {
                    display: l.R.InlineBlock,
                    margin: {
                        right: 1
                    }
                }, i.createElement(s.a, {
                    broadcasterLogin: e.clip.broadcaster && e.clip.broadcaster.login || "",
                    broadcasterId: e.clip.broadcaster && e.clip.broadcaster.id || "",
                    slug: e.clip.slug,
                    pageType: e.pageType
                })), c.map(function(t) {
                    return i.createElement(l._8, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(r.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(a.a)(e.clip.url, t.params),
                        onShareClick: Object(o.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
                    }))
                }))
            }
    },
    sikP: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("rCmJ"),
            s = n("Odds"),
            l = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(s._35, {
                            "data-test-selector": l.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, r.createElement(s.Q, {
                            type: s._49.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(s._35, {
                            "data-test-selector": l.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, r.createElement(s.Q, {
                            type: s._49.Strong,
                            color: s.K.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._35, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, r.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.v, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(a.d)("Close", "ClipsModal")))))) : r.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._35, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, r.createElement(s._35, {
                        "data-test-selector": l.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(s._35, {
                        "data-test-selector": l.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, r.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.v, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        type: s.B.Text,
                        onClick: this.props.onClose
                    }, Object(a.d)("Cancel", "ClipsModal"))), r.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.v, {
                        "data-test-selector": l.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.B.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(s._10, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            d = n("1OO3"),
            u = n("CSlQ"),
            p = 86400,
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(s.Q, {
                            type: s._49.H5,
                            ellipsis: !0
                        }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s.Q, {
                            type: s._49.H5,
                            ellipsis: !0
                        }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(s.Q, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : r.createElement(s.Q, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(a.d)("Timeout User", "ClipsModalBanUser") : Object(a.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(a.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(a.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent().banUserFromChatRoom.error ? this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }) : this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(c, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            h = Object(u.d)("ClipsModalBanUser")(Object(d.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(m)),
            g = n("7vx8"),
            b = n("wnjK");

        function f(e) {
            return Object(g.a)(b, e)
        }
        var v = n("LnKh"),
            k = (n("lTii"), this),
            y = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.state = y, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(s.Q, {
                        key: "title",
                        type: s._49.H4
                    }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s._8, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, r.createElement(s.Q, {
                        type: s._49.P,
                        color: s.K.Alt2
                    }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = r.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = r.createElement(s._35, {
                        display: s.R.Flex,
                        flexWrap: s.U.NoWrap
                    }, r.createElement(s._8, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.k, {
                        ratio: s.l.Aspect16x9
                    }, r.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), r.createElement(s._8, null, r.createElement(s.Q, {
                        type: s._49.H5
                    }, this.props.data.clip.title), r.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(a.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), r.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(a.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(a.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            _ = Object(g.a)(v)(f({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(k, void 0, void 0, function() {
                                var n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = i.sent(), a.j.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(S)),
            C = n("3zLD"),
            T = n("wqRA"),
            E = this,
            O = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            N = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.deleteAll = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(a.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, n.renderFailure = function() {
                        return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, n.state = O, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(s.Q, {
                        type: s._49.P
                    }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(s.Q, {
                            type: s._49.H4
                        }, Object(a.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(a.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            w = Object(C.compose)(Object(u.d)("ClipsModalDeleteAll"), f({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(E, void 0, void 0, function() {
                                var r, o, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 6, , 7]), r = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return o = i.sent(), r = o.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return o = i.sent(), r = o.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(r.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = i.sent(), a.j.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(g.a)(T, {
                props: function(e) {
                    var t = e.data.clip;
                    return t ? {
                        videoID: t.video ? t.video.id : null,
                        broadcastID: t.broadcast.id
                    } : {
                        videoID: null,
                        broadcastID: ""
                    }
                },
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(N),
            P = this,
            R = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            I = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(a.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, n.renderError = function() {
                        return n.state.hasErrored ? Object(a.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return e.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.state = R, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(s.Q, {
                            type: s._49.H4
                        }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(s.Q, {
                            type: s._49.P
                        }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(a.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            D = f({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(P, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clipSlugs
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), a.j.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(I);
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return h
        }), n.d(t, "d", function() {
            return _
        }), n.d(t, "e", function() {
            return w
        }), n.d(t, "c", function() {
            return D
        })
    },
    tGx1: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "recommendedClip"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Clip"
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
                            value: "title"
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
                            value: "slug"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "broadcaster"
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsRecommendations"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "slug"
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
                                    value: "broadcaster"
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
                                    value: "video"
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
                                    value: "relatedClips"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "similar"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "broadcaster"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
                                                directives: []
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
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "top"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendedClip"
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
            }],
            loc: {
                start: 0,
                end: 429
            }
        };
        n.loc.source = {
            body: "fragment recommendedClip on Clip {\nid\ntitle\nthumbnailURL\nslug\nbroadcaster {\nid\ndisplayName\nlogin\n}\ngame {\nid\ndisplayName\nname\n}\nviewCount\n}\nquery ClipsRecommendations($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\ngame {\nid\nname\ndisplayName\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nvideo {\nid\n}\nrelatedClips {\nsimilar {\n...recommendedClip\n}\nbroadcaster {\n...recommendedClip\n}\ngame {\n...recommendedClip\n}\ntop {\n...recommendedClip\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tIhJ: function(e, t) {},
    twHn: function(e, t) {},
    u8SD: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(r.a)(s, {
                props: function(t) {
                    return {
                        blockUserMutation: function(n, r, s, l) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n,
                                                        sourceContext: s,
                                                        reason: r
                                                    }
                                                },
                                                optimisticResponse: {
                                                    blockUser: {
                                                        __typename: "BlockUserPayload",
                                                        targetUser: {
                                                            __typename: "User",
                                                            id: n
                                                        }
                                                    }
                                                },
                                                update: function(e) {
                                                    var t = e.readFragment({
                                                        id: Object(o.a)(l),
                                                        fragment: a
                                                    });
                                                    t && (t.blockedUsers.push({
                                                        id: n,
                                                        __typename: "User"
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(l),
                                                        fragment: a,
                                                        data: t
                                                    }))
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            throw new Error("blockUserMutation is not ready");
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var i = n("TToO"),
            r = n("7vx8"),
            a = n("nmYW"),
            o = (n.n(a), n("yADj")),
            s = n("rWzl");
        n.n(s)
    },
    uTyw: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            var t, n, l, c, d, u = e.append,
                p = void 0 !== u && u,
                m = e.searchResults,
                h = e.currentGameResults,
                g = e.currentUserResults,
                b = e.currentCommunityResults,
                f = e.currentVideoResults,
                v = e.currentLiveResults;
            m.games && (t = {
                totalHits: m.games.totalHits,
                results: p && h ? h.results : []
            }, p && m.exhaustedHits && h && !m.games.totalHits && (t.totalHits = h.totalHits), t.results = t.results.concat(m.games.hits.map(function(e, t) {
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
                var k = p && f ? f.results : [],
                    y = m.videos.totalHits;
                p && m.exhaustedHits && f && !m.videos.totalHits && (y = f.totalHits), c = function(e, t, n) {
                    return {
                        results: e.concat(t.hits.map(s)),
                        totalHits: t.totalHits || n
                    }
                }(k, m.videos, y)
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
            m.channels && ((d = {
                totalHits: p && v ? v.totalHits : m.channels.totalHits,
                results: p && v ? v.results : []
            }).results = d.results.concat(m.channels.hits.map(function(e, t) {
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
            m.communities && (l = {
                totalHits: m.communities.totalHits,
                results: p && b ? b.results : []
            }, p && m.exhaustedHits && b && !m.communities.totalHits && (l.totalHits = b.totalHits), l.results = l.results.concat(m.communities.hits.map(function(e, t) {
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
                currentLiveResults: d,
                currentCommunityResults: l,
                currentVideoResults: c,
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
    urTJ: function(e, t, n) {
        "use strict";
        var i = n("mbxv");
        n.d(t, "a", function() {
            return i.a
        })
    },
    vBst: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
            }(i || (i = {}));
        var r = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000",
            Custom: "Custom"
        }
    },
    wnjK: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Clips_DeleteClips"
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
                                value: "DeleteClipsInput"
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
                            value: "deleteClips"
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
                                    value: "clips"
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
                                            value: "slug"
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
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wqRA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsModalDeleteAll_Clip"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "video"
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
                                    value: "broadcast"
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
                end: 101
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    x4k6: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_User"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "followButtonFragment"
                                },
                                directives: []
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
        i.loc.source = {
            body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery FollowButton_User($login: String!) {\nuser(login: $login) {\nid\n...followButtonFragment\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("onRC").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    x6ny: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
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
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 114
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    xX9u: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(a._4, {
                        readOnly: !0,
                        type: a._5.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    xwpJ: function(e, t, n) {
        "use strict";
        var i = function(e, t) {
                var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
            },
            r = n("6sO2");

        function a() {
            return [{
                id: "other",
                text: Object(r.d)("Other Terms of Service Violation", "ReportUserModal")
            }]
        }
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        })
    },
    yADj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e && Object(i.c)(e) || ""
        };
        var i = n("+dIz")
    },
    ynxC: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("hdYS"),
            s = n("7vx8"),
            l = n("CSlQ"),
            c = n("kJau"),
            d = n("Odds"),
            u = n("U5tC"),
            p = {
                tt_content: "player_profile_img"
            },
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.clip && this.props.data.clip.broadcaster ? r.createElement(d._8, {
                        className: "clips-broadcaster-info",
                        padding: 1,
                        display: d.R.Flex,
                        alignItems: d.c.Center
                    }, r.createElement("a", {
                        target: "_blank",
                        href: Object(c.c)(this.props.data.clip.broadcaster.login, p)
                    }, r.createElement(d.m, {
                        src: this.props.data.clip.broadcaster.profileImageURL,
                        alt: Object(a.d)("Broadcaster Avatar", "ClipsBroadcasterInfo"),
                        size: 30
                    })), r.createElement(d._8, {
                        display: d.R.Flex,
                        flexDirection: d.T.Column,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        },
                        ellipsis: !0
                    }, r.createElement("a", {
                        href: Object(c.c)(this.props.data.clip.broadcaster.login, p)
                    }, r.createElement(d.Q, {
                        fontSize: d.V.Size4,
                        type: d._49.Span
                    }, this.props.data.clip.broadcaster.displayName), !(!this.props.data.clip.broadcaster.stream || !this.props.data.clip.broadcaster.stream.id) && r.createElement(d._8, {
                        margin: {
                            left: .5
                        },
                        display: d.R.InlineBlock
                    }, r.createElement(d._12, {
                        label: Object(a.d)("LIVE", "ClipsBroadcasterInfo"),
                        type: d._13.Live
                    }))), r.createElement(d._8, null, r.createElement(d.Q, {
                        color: d.K.Alt2,
                        fontSize: d.V.Size5,
                        ellipsis: !0
                    }, this.props.data.clip.game && Object(a.d)("playing {gameName}", {
                        gameName: r.createElement("a", {
                            target: "_blank",
                            href: Object(c.d)(this.props.data.clip.game.name, {
                                tt_medium: "clips_web"
                            })
                        }, this.props.data.clip.game.displayName)
                    }, "ClipsBroadcasterInfo")))), r.createElement(d._8, {
                        flexShrink: 1
                    }, r.createElement(o.a, {
                        isHostedFollow: !1,
                        channelLogin: this.props.data.clip.broadcaster.login,
                        followUIType: o.b.IconAndText,
                        unfollowUIType: o.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }))) : r.createElement(d._8, null, this.renderPlaceholders())
                }, t.prototype.renderPlaceholders = function() {
                    return r.createElement(d._8, {
                        padding: 1,
                        display: d.R.Flex,
                        alignItems: d.c.Center
                    }, r.createElement(d._8, null, r.createElement(d.e, {
                        type: d.j.FadeIn,
                        duration: d.g.Long,
                        enabled: !0
                    }, r.createElement(d._14, {
                        height: 30,
                        width: 30
                    }))), r.createElement(d._35, {
                        fontSize: d.V.Size5,
                        flexGrow: 1,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(d.e, {
                        type: d.j.FadeIn,
                        duration: d.g.Long,
                        enabled: !0
                    }, r.createElement(d._14, {
                        lineCount: 1,
                        width: 80
                    })), r.createElement(d.e, {
                        type: d.j.FadeIn,
                        duration: d.g.Long,
                        delay: d.f.Short,
                        enabled: !0
                    }, r.createElement(d._14, {
                        lineCount: 1,
                        width: 120
                    }))), r.createElement(d._8, null, r.createElement(d.e, {
                        type: d.j.FadeIn,
                        duration: d.g.Long,
                        enabled: !0
                    }, r.createElement(d._14, {
                        height: 30,
                        width: 70
                    }))))
                }, t = i.__decorate([Object(l.d)("ClipsBroadcasterInfo"), Object(s.a)(u)], t)
            }(r.Component);
        n.d(t, "a", function() {
            return m
        })
    },
    zU1d: function(e, t) {}
});
//# sourceMappingURL=sites.clips.pages.view-3c59997a4bc1c7724b74d0b4412566c2.js.map