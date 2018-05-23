webpackJsonp([47], {
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
    "/3Cb": function(e, t) {
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
    "3HXW": function(e, t, n) {
        "use strict";
        var i, r, a = n("VmM7"),
            o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("cvQl"),
            d = n("kLf9"),
            u = n("Odds");
        n("cJZy");
        ! function(e) {
            e.LeftHandle = "left-handle", e.Overlay = "overlay", e.RightHandle = "right-handle", e.SelectedSection = "section", e.Slider = "slider"
        }(i || (i = {})),
        function(e) {
            e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
        }(r || (r = {}));
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.containerRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
                    switch (e) {
                        case r.LeftHandle:
                            return {
                                handleRef: n.leftHandleRef,
                                mouseMoveHandler: n.onLeftMouseMove,
                                mouseUpHandler: n.onLeftMouseUp
                            };
                        case r.RightHandle:
                            return {
                                handleRef: n.rightHandleRef,
                                mouseMoveHandler: n.onRightMouseMove,
                                mouseUpHandler: n.onRightMouseUp
                            };
                        case r.Slider:
                            return {
                                handleRef: n.sliderHandleRef,
                                mouseMoveHandler: n.onSliderMouseMove,
                                mouseUpHandler: n.onSliderMouseUp
                            };
                        default:
                            return e
                    }
                }, n.addHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        r = t.mouseMoveHandler,
                        a = t.mouseUpHandler;
                    i && (n.preventUserSelect(), i.ownerDocument.addEventListener("mousemove", r), i.ownerDocument.addEventListener("mouseup", a))
                }, n.removeHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        i = t.handleRef,
                        r = t.mouseMoveHandler,
                        a = t.mouseUpHandler;
                    i && (n.allowUserSelect(), i.ownerDocument.removeEventListener("mousemove", r), i.ownerDocument.removeEventListener("mouseup", a))
                }, n.leftHandleRefHandler = function(e) {
                    n.leftHandleRef = e
                }, n.onLeftMouseDown = function(e) {
                    if (n.shouldHandleClick(e.button)) {
                        var t = e.clientX;
                        n.setState(function(e) {
                            return {
                                previousPosition: t,
                                previousBaseValue: e.startOffset
                            }
                        }, function() {
                            n.props.onLeftDragStart && n.props.onLeftDragStart({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.addHandleListeners(r.LeftHandle)
                        })
                    }
                }, n.onLeftMouseUp = function() {
                    n.setState({
                        previousPosition: null,
                        previousBaseValue: null
                    }, function() {
                        n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(r.LeftHandle)
                    })
                }, n.onLeftMouseMove = function(e) {
                    var t = e.clientX,
                        i = void 0 === n.props.minLength ? 0 : n.props.minLength,
                        r = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                    n.setState(function(e, a) {
                        return {
                            startOffset: n.calculateOffset(t, {
                                startBoundary: Math.max(a.minOffset, e.endOffset - r),
                                endBoundary: Math.min(e.endOffset, e.endOffset - i),
                                currentValue: e.startOffset
                            }),
                            endOffset: e.endOffset
                        }
                    }, function() {
                        n.props.onLeftDrag && n.props.onLeftDrag({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        })
                    })
                }, n.rightHandleRefHandler = function(e) {
                    n.rightHandleRef = e
                }, n.onRightMouseDown = function(e) {
                    if (n.shouldHandleClick(e.button)) {
                        var t = e.clientX;
                        n.setState(function(e) {
                            return {
                                previousPosition: t,
                                previousBaseValue: e.endOffset
                            }
                        }, function() {
                            n.props.onRightDragStart && n.props.onRightDragStart({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.addHandleListeners(r.RightHandle)
                        })
                    }
                }, n.onRightMouseUp = function() {
                    n.setState({
                        previousPosition: null,
                        previousBaseValue: null
                    }, function() {
                        n.props.onRightDragEnd && n.props.onRightDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(r.RightHandle)
                    })
                }, n.onRightMouseMove = function(e) {
                    var t = e.clientX,
                        i = void 0 === n.props.minLength ? 0 : n.props.minLength,
                        r = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength;
                    n.setState(function(e, a) {
                        return {
                            startOffset: e.startOffset,
                            endOffset: n.calculateOffset(t, {
                                startBoundary: Math.max(a.minOffset, e.startOffset + i),
                                endBoundary: Math.min(a.maxOffset, e.startOffset + r),
                                currentValue: e.endOffset
                            })
                        }
                    }, function() {
                        n.props.onRightDrag && n.props.onRightDrag({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        })
                    })
                }, n.sliderHandleRefHandler = function(e) {
                    n.sliderHandleRef = e
                }, n.onSliderMouseDown = function(e) {
                    if (n.shouldHandleClick(e.button)) {
                        var t = e.clientX;
                        n.setState(function(e) {
                            return {
                                previousPosition: t,
                                previousBaseValue: e.startOffset
                            }
                        }, function() {
                            n.props.onSliderDragStart && n.props.onSliderDragStart({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.addHandleListeners(r.Slider)
                        })
                    }
                }, n.onSliderMouseUp = function() {
                    n.setState({
                        previousPosition: null,
                        previousBaseValue: null
                    }, function() {
                        n.props.onSliderDragEnd && n.props.onSliderDragEnd({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        }), n.removeHandleListeners(r.Slider)
                    })
                }, n.onSliderMouseMove = function(e) {
                    var t = e.clientX;
                    n.setState(function(e, i) {
                        var r = e.endOffset - e.startOffset,
                            a = n.calculateOffset(t, {
                                startBoundary: i.minOffset,
                                endBoundary: i.maxOffset - r,
                                currentValue: e.startOffset
                            });
                        return {
                            startOffset: a,
                            endOffset: a + r
                        }
                    }, function() {
                        n.props.onSliderDrag && n.props.onSliderDrag({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        })
                    })
                }, n.calculateOffset = function(e, t) {
                    if (null === n.state.previousPosition || null === n.state.previousBaseValue) return t.currentValue;
                    var i = n.convertPixelsToOffsetUnits(e - n.state.previousPosition),
                        r = n.state.previousBaseValue + i;
                    return r < t.startBoundary ? t.startBoundary : r > t.endBoundary ? t.endBoundary : r
                }, n.convertPixelsToOffsetUnits = function(e) {
                    return n.containerRef ? 0 === n.containerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.containerRef.clientWidth) : 0
                }, n.addFocus = function() {
                    n.setState({
                        showFocus: !0
                    })
                }, n.removeFocus = function() {
                    n.setState({
                        showFocus: !1
                    })
                }, n.preventUserSelect = function() {
                    document.body.style.userSelect = "none"
                }, n.allowUserSelect = function() {
                    document.body.style.userSelect = "auto"
                }, n.handleContainerRef = function(e) {
                    n.containerRef = e
                }, n.state = {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    previousBaseValue: null,
                    previousPosition: null,
                    showFocus: !1
                }, n
            }
            return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                e.startOffset === this.state.startOffset && e.endOffset === this.state.endOffset || this.setState({
                    startOffset: e.startOffset,
                    endOffset: e.endOffset
                })
            }, t.prototype.render = function() {
                var e, t, n, r, o = this.props.handleSize ? this.props.handleSize : d.c.Small,
                    c = (e = {
                        handleSize: o,
                        minOffset: this.props.minOffset,
                        maxOffset: this.props.maxOffset,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    }, t = e.maxOffset - e.minOffset, n = (e.endOffset - e.startOffset) / t * 100, r = e.startOffset / t * 100, {
                        width: "calc(" + n + "% + " + 2 * e.handleSize + "px)",
                        marginLeft: "calc(" + r + "% - " + e.handleSize + "px)"
                    }),
                    p = s("draggable-slider__content", {
                        "draggable-slider__content--blue": this.props.color === a.a.Blue,
                        "draggable-slider__content--orange": this.props.color === a.a.Orange,
                        "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                    });
                return l.createElement("div", {
                    ref: this.handleContainerRef
                }, l.createElement(u._2, {
                    flexGrow: 0,
                    flexShrink: 0
                }, l.createElement("div", {
                    "data-test-selector": i.SelectedSection,
                    style: c
                }, l.createElement(u._8, {
                    className: "draggable-slider__container",
                    position: u._15.Relative,
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u._8, {
                    position: u._15.Absolute,
                    attachTop: !0,
                    fullWidth: !0
                }, l.createElement(u._8, {
                    position: u._15.Relative,
                    attachTop: !0,
                    fullWidth: !0,
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u._8, {
                    position: u._15.Absolute,
                    attachBottom: !0,
                    margin: {
                        bottom: 1
                    },
                    zIndex: u._62.Above
                }, this.props.popover))), l.createElement(u._35, {
                    className: p,
                    fullWidth: !0,
                    display: u.R.Flex,
                    justifyContent: u._7.Between
                }, l.createElement(d.a, {
                    "data-test-selector": i.LeftHandle,
                    color: this.props.color,
                    handlePosition: d.b.Left,
                    onRef: this.leftHandleRefHandler,
                    onMouseDown: this.onLeftMouseDown,
                    size: this.props.handleSize
                }), this.renderSliderContent(), l.createElement(d.a, {
                    "data-test-selector": i.RightHandle,
                    color: this.props.color,
                    handlePosition: d.b.Right,
                    onRef: this.rightHandleRefHandler,
                    onMouseDown: this.onRightMouseDown,
                    size: this.props.handleSize
                }))))))
            }, t.prototype.renderSliderContent = function() {
                var e = this.props.children;
                this.props.isSliderEnabled && (e = l.createElement("div", {
                    onMouseDown: this.onSliderMouseDown,
                    onMouseEnter: this.addFocus,
                    onMouseLeave: this.removeFocus,
                    ref: this.sliderHandleRefHandler,
                    "data-test-selector": i.Slider
                }, this.props.children));
                var t = s("draggable-slider__overlay", {
                    "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                    "draggable-slider__overlay--blue": this.props.color === a.a.Blue,
                    "draggable-slider__overlay--orange": this.props.color === a.a.Orange
                });
                return l.createElement(u._8, {
                    className: t,
                    display: u.R.InlineBlock,
                    overflow: u._11.Hidden,
                    "data-test-selector": i.Overlay,
                    fullWidth: !0
                }, e)
            }, t.prototype.shouldHandleClick = function(e) {
                return e === c.a.Left
            }, t
        }(l.Component);
        n.d(t, "c", function() {
            return a.a
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return d.c
        })
    },
    "3KVC": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            void 0 === e && (e = "");
            return i.test(e)
        }, t.b = function(e) {
            void 0 === e && (e = "");
            var t = e.match(i);
            if (null === t) return "";
            if (t && t.length > 0 && void 0 !== t.index) {
                var n = t[1];
                return n
            }
            return ""
        };
        var i = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?")
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
            return f
        }), n.d(t, "d", function() {
            return h
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return b
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
            f = r.a.Purple,
            h = "FIRST_PARTY",
            g = "THIRD_PARTY",
            b = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i)
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
    "4Gcm": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("2KeS")),
            o = n("CSlQ"),
            s = n("Odds"),
            l = n("Jg0G"),
            c = (n.n(l), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(s._8, i.__assign({
                        position: s._15.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(s._63)(this.props)), r.createElement(s._4, {
                        type: s._5.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t
            }(r.Component)),
            d = Object(a.d)(Object(o.d)("SelectableInput"))(c)
    },
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
    "4VmI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_Current_User"
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
                end: 56
            }
        };
        n.loc.source = {
            body: "query Prime_Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
        var f = n("vH/s"),
            h = n("CSlQ"),
            g = n("mYtP"),
            b = n("Odds"),
            v = n("VNvG"),
            y = (n("3ydF"), n("SUA7")),
            k = n("x4k6");
        n.d(t, "b", function() {
            return S
        }), n.d(t, "a", function() {
            return O
        });
        var S;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(S || (S = {}));
        var _ = function(e) {
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
                        t.state.isFollowing ? (t.unfollowUser(), e = f.SpadeEventType.Unfollow) : (t.followUser(), e = f.SpadeEventType.Follow);
                        var n = t.getFollowData();
                        n && function(e, t) {
                            i.__awaiter(this, void 0, void 0, function() {
                                var n, r, a, s, l, c, m, f, h, g;
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
                                            if (!(f = o.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                            i.label = 6;
                                        case 6:
                                            return i.trys.push([6, 8, , 9]), [4, o.o.apollo.client.query({
                                                query: d,
                                                variables: {
                                                    id: f
                                                }
                                            })];
                                        case 7:
                                            return n = i.sent(), [3, 9];
                                        case 8:
                                            return h = i.sent(), o.j.error(h, "Failed to make query for VOd info in FollowEvent reporting.", {
                                                currentVODID: f
                                            }), [3, 9];
                                        case 9:
                                            (r = n && n.data && n.data.video) ? c = Object(u.a)(r.broadcastType): (c = null, o.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                                currentVODID: f
                                            })), i.label = 10;
                                        case 10:
                                            return g = {
                                                channel: t.channelLogin,
                                                channel_id: t.channelID,
                                                channel_game: l,
                                                cta_visible: o.n.getVideoPlayerTrackingData().followCTAVisible,
                                                host_channel: t.hostChannelLogin,
                                                host_channel_id: t.hostChannelID,
                                                game: t.game,
                                                partner: a ? a.isPartner : null,
                                                src: t.src,
                                                vod_id: f,
                                                vod_type: c
                                            }, o.n.track(e, g), [2]
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
                        }, "FollowButton") : Object(o.d)("Follow", "FollowButton"),
                        n = this.props.isFullWidthButton ? 2 : void 0;
                    return r.createElement(b.v, i.__assign({
                        ariaLabel: t,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "follow-button",
                        "data-test-selector": "follow-button",
                        icon: this.props.followUIType === S.TextOnly ? void 0 : b._25.Heart,
                        onClick: e,
                        size: this.props.size,
                        tabIndex: this.props.tabIndex
                    }, Object(b._63)(this.props)), this.props.followUIType === S.IconOnly ? null : r.createElement(b._8, {
                        margin: {
                            right: n
                        }
                    }, t))
                }, t.prototype.renderUnfollowButton = function() {
                    var e = Object(o.d)("Unfollow", "FollowButton"),
                        t = this.props.isFullWidthButton ? 2 : void 0;
                    return r.createElement(b.v, i.__assign({
                        ariaLabel: e,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: this.props.unfollowUIType === S.TextOnly ? void 0 : b._25.Heart,
                        statusAlertIcon: this.props.unfollowUIType === S.TextOnly ? void 0 : b._25.Unheart,
                        statusAlertText: this.props.unfollowUIType === S.IconOnly ? "" : e,
                        tabIndex: this.props.tabIndex,
                        size: this.props.size,
                        onClick: this.toggleFollowing
                    }, Object(b._63)(this.props)), this.props.unfollowUIType === S.IconOnly ? null : r.createElement(b._8, {
                        margin: {
                            right: t
                        }
                    }, Object(o.d)("Followed", "FollowButton")))
                }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                    var e = this.props.balloonDirection ? this.props.balloonDirection : b.r.BottomRight;
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
                    }, r.createElement(b._8, {
                        padding: 1
                    }, r.createElement(g.a, {
                        followData: this.getFollowData(),
                        channelLogin: this.props.channelLogin
                    })))))
                }, t.prototype.reportInteractive = function() {
                    C(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t
            }(r.Component),
            O = Object(a.d)(Object(l.a)(k, {
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
            }), Object(l.a)(v, {
                name: "followUser"
            }), Object(l.a)(y, {
                name: "unfollowUser"
            }), Object(h.d)("FollowButton"))(_);

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
    "5a05": function(e, t, n) {
        "use strict";
        var i = n("sADG");
        n.d(t, "a", function() {
            return i.a
        })
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
            f = n("TeXj"),
            h = n("S1vB"),
            g = n("HZww"),
            b = n("a0y1"),
            v = n("3iBR"),
            y = n("Odds"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(y._8, {
                        className: "esports-top-page-details"
                    }, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: y.R.Flex,
                        justifyContent: y._7.Center,
                        className: "insider-pass-pre-purchase__header"
                    }, a.createElement("img", {
                        src: v.c + "/owl-2017/all-access-logo.svg",
                        alt: Object(c.d)("Overwatch League All-Access Pass on Twitch", "EsportsTopPageDetails"),
                        height: "80px",
                        "data-test-selector": "balloon-detail-logo"
                    })), a.createElement(y._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0,
                        "data-test-selector": "balloon-detail-subheader"
                    }, Object(c.d)("Your VIP pass to the best of the Overwatch League", "EsportsTopPageDetails"))), a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-igc-subheader"
                    }, Object(c.d)("Overwatch In-Game Content (requires Blizzard account link)", "EsportsTopPageDetails")), a.createElement(y.Q, {
                        "data-test-selector": "balloon-detail-igc-copy"
                    }, Object(c.d)("3 Hero Skins • Overwatch League Player Icon • Overwatch League Spray •", "EsportsTopPageDetails"), " ", a.createElement(y.Q, {
                        type: y._49.Span,
                        italic: !0
                    }, Object(c.d)("Plus more content coming soon", "EsportsTopPageDetails")))), a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-experience-subheader"
                    }, Object(c.d)("The Overwatch League All-Access Experience", "EsportsTopPageDetails")), a.createElement(y.Q, {
                        "data-test-selector": "balloon-detail-experience-copy"
                    }, Object(c.d)("Exclusive Command Center stream • Match analysis videos by players • Ask questions in post-match Q&A with players • Passholder-only chat • 23 Twitch emotes • Overwatch League chat badges • Ad-free viewing on Overwatch League", "EsportsTopPageDetails"))))
                }, t
            }(a.PureComponent),
            S = n("YEG/"),
            _ = n("FDYX"),
            O = (n("VOrx"), function(e) {
                var t = Object(_.d)(e.subscriptionProducts) ? Object(_.a)(e.subscriptionProducts[0]) : e.subscriptionProducts[0].price,
                    n = Object(c.d)("Gift All-Access Pass", "EsportsNonSubbedTopPage"),
                    i = a.createElement(y.v, {
                        ariaLabel: n,
                        onClick: e.showRecipientSelect,
                        type: y.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, n);
                return a.createElement(y._8, {
                    padding: 2
                }, a.createElement(k, null), a.createElement(y.Q, {
                    type: y._49.H6,
                    bold: !0
                }, Object(c.d)("One-Time Purchase for the 2018 Season", "EsportsNonSubbedTopPage")), a.createElement(y.Q, null, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep forever.", "EsportsNonSubbedTopPage")), a.createElement(y._8, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(y._8, {
                    margin: {
                        right: .5
                    },
                    display: y.R.Inline
                }, a.createElement(S.a, {
                    isSubbedToTier: !1,
                    tierPrice: t,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url,
                    isEsportChannel: !0
                })), i), a.createElement(y._8, {
                    display: y.R.Flex,
                    margin: {
                        top: 1
                    },
                    flexDirection: y.T.Column
                }, a.createElement(b.a, {
                    subscriptionProducts: e.subscriptionProducts,
                    userHasPrime: e.userHasPrime
                })))
            }),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Object(c.d)("Gift All-Access Pass", "EsportsSubbedTopPage"),
                        t = a.createElement(y._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(y.v, {
                            ariaLabel: e,
                            onClick: this.props.showRecipientSelect,
                            type: y.B.Hollow,
                            "data-test-selector": "subscribe-button__gift"
                        }, e));
                    return a.createElement(y._8, {
                        padding: 2
                    }, a.createElement(k, null), a.createElement(y.Q, {
                        "test-selector": "subbed-subheader",
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("You have the All-Access Pass", "EsportsSubbedTopPage")), a.createElement(y.Q, {
                        "test-selector": "subbed-copy"
                    }, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep.", "EsportsSubbedTopPage")), t)
                }, t
            }(a.PureComponent),
            E = n("6BvN"),
            T = n("HM6l"),
            P = n("5LoI"),
            w = n("MAZT"),
            N = n("uTyw"),
            D = n("zCIC"),
            I = n("SZoP"),
            R = n("2KeS"),
            x = n("lK86"),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading || !this.props.recipientLogin || this.props.data.user.self.canGift) return null;
                    var e = this.props.isEsportChannel ? Object(c.d)("Sorry, an All-Access Pass to this channel is not available for this user", "GiftRecipientIneligibleMessage") : Object(c.d)("Sorry, a gift subscription to this channel is not available for this user.", "GiftRecipientIneligibleMessage"),
                        t = this.props.isEsportChannel ? "esports-gift-eligibility-message-selector" : "gift-eligibility-message-selector";
                    return a.createElement(y._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(y.Q, {
                        italic: !0,
                        color: y.K.Alt2,
                        "data-test-selector": t
                    }, e))
                }, t
            }(a.Component),
            L = Object(R.d)(Object(l.d)("GiftRecipientIneligibleMessage"), Object(u.a)(x, {
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
            }))(F),
            j = n("daN3"),
            U = n("CwIZ"),
            M = (n("+YN9"), function(e) {
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
                    return e = this.props.isWaiting ? a.createElement(y._8, {
                        fullHeight: !0
                    }, a.createElement(y._10, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : a.createElement(y._8, {
                        margin: 1
                    }, a.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(c.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult"))), a.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, a.createElement(y._35, {
                        className: "gift-recipient-search-result-view",
                        background: y.n.Alt,
                        position: y._15.Relative,
                        overflow: y._11.Hidden,
                        display: y.R.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, a.createElement(y._2, {
                        overflow: y._11.Hidden,
                        position: y._15.Relative
                    }, a.createElement(D.b, {
                        suppressScrollX: !0
                    }, a.createElement(y._8, null, e, a.createElement(D.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), a.createElement(y._8, null, a.createElement(y._8, {
                        display: y.R.Flex,
                        alignItems: y.c.Center,
                        fullWidth: !0
                    }, this.getBuyGiftButton(), a.createElement(y._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(y.Q, {
                        "data-test-selector": "gift-recipient-display-name-selector"
                    }, Object(c.d)("for {displayName}", {
                        displayName: a.createElement(y.Q, {
                            bold: !0,
                            type: y._49.Span
                        }, this.getFormattedDisplayName())
                    }, "GiftRecipientCheckoutButton")))), a.createElement(L, {
                        subProductId: this.props.selectedProductId,
                        recipientLogin: this.state.selectedUser ? this.state.selectedUser.login : null,
                        isEsportChannel: this.props.isEsportChannel
                    })))
                }, t.prototype.getBuyGiftButton = function() {
                    return a.createElement(j.a, {
                        subProductId: this.props.selectedProductId,
                        giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                        checkoutURL: this.props.selectedProductURL,
                        onClick: this.reportGiftCheckoutAction,
                        isEsportChannel: this.props.isEsportChannel
                    })
                }, t.prototype.getFormattedDisplayName = function() {
                    return this.state.selectedUser ? Object(I.a)(this.state.selectedUser.login, this.state.selectedUser.name) : ""
                }, t.prototype.getErrorMessage = function() {
                    return a.createElement(y._8, {
                        fullWidth: !0,
                        textAlign: y._45.Center,
                        justifyContent: y._7.Center
                    }, a.createElement(y.Q, null, Object(c.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(I.a)(t.login || "", t.name || "");
                        return a.createElement(y._6, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, a.createElement(y._8, {
                            padding: .5
                        }, a.createElement(y.C, {
                            row: !0
                        }, a.createElement(y.E, {
                            alt: t.thumbnailAltText,
                            src: t.thumbnail ? t.thumbnail : "",
                            size: y.F.Size4,
                            aspect: y.l.Aspect1x1
                        }), a.createElement(y.D, {
                            overflow: y._11.Hidden
                        }, a.createElement(y._2, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(y.Q, {
                            type: y._49.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : a.createElement(y._14, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return a.createElement(y._8, {
                        margin: 1
                    }, a.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(c.d)("No Results", "GiftRecipientSearchResult")))
                }, t = r.__decorate([Object(l.d)("GiftRecipientSearchResultPanel")], t)
            }(a.Component)),
            A = (n("m0Vj"), function(e) {
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
                            e = a.createElement(y.Q, {
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
                        }, "GiftRecipientSearch")), a.createElement(y._8, {
                            padding: 2,
                            className: "subscription-gift-recipient-search"
                        }, a.createElement(y._8, null, a.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Between,
                            alignItems: y.c.Center,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(y.Q, {
                            type: y._49.H4,
                            bold: !0
                        }, Object(c.d)("Choose a Gift Recipient", "GiftRecipientSearch")), a.createElement(y.v, {
                            type: y.B.Text,
                            "data-a-target": "subscribe-back-button",
                            icon: y._25.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "gift-recipient-search-back-button"
                        }, a.createElement(y._8, {
                            alignItems: y.c.Center,
                            display: y.R.InlineFlex
                        }, a.createElement(y.Q, null, Object(c.d)("Back", "GiftRecipientSearch"))))), a.createElement(y._8, null, a.createElement(y.Q, {
                            "data-test-selector": n
                        }, i), e, a.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Center,
                            padding: {
                                top: 1
                            },
                            fullWidth: !0
                        }, a.createElement(y._2, {
                            fullWidth: !0
                        }, a.createElement("div", null, a.createElement(y._27, {
                            onChange: this.handleChange,
                            onKeyDown: this.props.onKeyDown,
                            id: "gift-recipient-search",
                            placeholder: Object(c.d)("Search for a Twitch ID", "GiftRecipientSearch"),
                            "data-test-selector": "gift-recipient-search-input-selector"
                        }), a.createElement(M, {
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
                    return a.createElement(y._14, null)
                }, t
            }(a.Component)),
            B = 50,
            V = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onChange = function(e) {
                        n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                            isWaiting: !0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doSearch(e)
                        }, B)) : n.setState(n.getEmptyState())
                    }, n.loadMore = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(P.a.Users, this.state.term, "", {
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
                                        return t ? (n = Object(N.b)({
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
                        n.state.term && (e.keyCode === E.a.Esc ? n.setState({
                            hasInput: !1
                        }) : e.keyCode === E.a.Up ? n.focusNext(-1) : e.keyCode === E.a.Down && n.focusNext(1))
                    }, n.state = n.getEmptyState(), n.searchClient = new w.a({
                        appId: c.a.algoliaApplicationID,
                        apiKey: c.a.algoliaAPIKey,
                        apolloClient: c.o.apollo.client,
                        logger: c.j,
                        config: c.a
                    }), n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(A, {
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
                                    this.inputTimer = 0, t = -1, n = T.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(P.a.Users, e, n)];
                                case 2:
                                    return a = s.sent(), [3, 4];
                                case 3:
                                    return s.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(N.b)({
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
        var H = function(e) {
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
                    return a.createElement(C, {
                        showRecipientSelect: this.props.showRecipientSelect
                    })
                }, t.prototype.getUnsubbedTopPage = function() {
                    return a.createElement(O, {
                        channelLogin: this.props.channelLogin,
                        handleTopPageSubButtonClick: this.props.handleTopPageSubButtonClick,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts ? this.props.subscriptionProducts : [],
                        userHasPrime: this.props.userHasPrime,
                        showRecipientSelect: this.props.showRecipientSelect
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return this.props.subscriptionProducts ? a.createElement(V, {
                        key: "gift-recipient-search-page",
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[0],
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: !0
                    }) : null
                }, t
            }(a.Component),
            W = n("37Pp"),
            G = n("JJaH"),
            z = function(e) {
                var t = null,
                    n = null,
                    i = null,
                    r = e.subscriptionProducts[0].price;
                if (Object(_.d)(e.subscriptionProducts) && (r = Object(_.a)(e.subscriptionProducts[0])), e.channelLogin && (e.inPrimeRegion || e.userHasPrime)) {
                    var o = e.userHasPrime ? Object(c.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                        upsellTextLink: a.createElement("a", {
                            href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            target: "_blank"
                        }, Object(c.d)("Learn more about your free sub", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage") : Object(c.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                        upsellTextBold: a.createElement("strong", null, Object(c.d)("Support your favorite streamer", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage");
                    i = a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("Free Channel Sub with Twitch Prime", "NonSubbedTopPage"))), a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "prime-sub-upsell"
                    }, a.createElement(y.Q, null, o)), a.createElement(G.a, {
                        "data-a-target": "subscribe-with-prime-button",
                        reportSubMenuAction: e.reportSubMenuAction,
                        channelLogin: e.channelLogin
                    })))
                }
                if (!e.isNonStandardSub) {
                    var s = Object(c.d)("More Paid Subscription Options", "NonSubbedTopPage");
                    t = a.createElement(y._8, {
                        margin: {
                            right: 1
                        },
                        display: y.R.Inline
                    }, a.createElement(y.v, {
                        ariaLabel: s,
                        onClick: e.showSubOptions,
                        type: y.B.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, s));
                    var l = Object(c.d)("Gift a Subscription", "NonSubbedTopPage");
                    n = a.createElement(y._8, {
                        display: y.R.Inline
                    }, a.createElement(y.v, {
                        ariaLabel: l,
                        onClick: e.showGiftOptions,
                        type: y.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, l))
                }
                return a.createElement(y._8, {
                    padding: 2
                }, i, a.createElement(y._8, null, a.createElement(y.Q, {
                    type: y._49.H4,
                    bold: !0
                }, Object(c.d)("Paid Subscription", "NonSubbedTopPage")), a.createElement(W.a, {
                    subscriptionProduct: e.subscriptionProducts[0]
                }), a.createElement(y._8, {
                    display: y.R.Flex
                }, a.createElement(y._8, {
                    margin: {
                        right: 1,
                        top: 1
                    }
                }, a.createElement(S.a, {
                    isSubbedToTier: !1,
                    tierPrice: r,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url
                })))), a.createElement(y._8, {
                    margin: {
                        right: 1,
                        top: 2
                    }
                }, t, n))
            },
            q = n("YH6m"),
            Q = function(e) {
                return a.createElement(y._8, {
                    padding: 2
                }, a.createElement(y._8, null, a.createElement(y._8, {
                    display: y.R.Flex,
                    justifyContent: y._7.Between,
                    alignItems: y.c.Center,
                    fullWidth: !0
                }, a.createElement(y.Q, {
                    type: y._49.H4,
                    bold: !0
                }, e.header), a.createElement(y.v, {
                    type: y.B.Text,
                    "data-a-target": "subscribe-back-button",
                    "data-test-selector": "subscribe-button__back-button",
                    icon: y._25.AngleLeft,
                    onClick: e.onBack
                }, a.createElement(y._8, {
                    alignItems: y.c.Center,
                    display: y.R.InlineFlex
                }, a.createElement(y.Q, null, Object(c.d)("Back", "PaidSubOptions"))))), a.createElement(q.a, {
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
            K = n("pQNb"),
            $ = (n("DquS"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform,
                        t = e || this.props.isGift ? null : this.getTopPageUpgradeSection(),
                        n = e ? this.getMobileSubbedSection() : null,
                        i = this.getGiftSection();
                    return a.createElement(y._8, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, i, n, t)
                }, t.prototype.getTopPageUpgradeSection = function() {
                    var e = this.props.subbedTier !== m.a.Tier3 ? Object(c.d)("Change Your Subscription", "SubbedTopPage") : this.getSubbedHeader();
                    return a.createElement(y._8, null, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, e), a.createElement(q.a, {
                        authToken: this.props.authToken,
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
                    return a.createElement(y._8, {
                        "data-test-selector": "subscribed-view-mobile"
                    }, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, this.getSubbedHeader())), a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y._8, null, n), a.createElement(y._8, null, i), a.createElement(y._8, null, a.createElement(y.O, {
                        to: r
                    }, Object(c.d)("How do I manage this subscription?", "SubbedTopPage")))))
                }, t.prototype.getGiftSection = function() {
                    return this.props.giftSender ? this.props.giftSender && !this.props.giftPaidUpgrade ? a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection())
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.getSubbedHeader(), t = Object(c.d)("{giftPrice} Gift Subscription from {giftSender}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(y.Q, {
                            bold: !0,
                            type: y._49.Span
                        }, this.props.giftSender || "")
                    }, "SubbedTopPage"), n = Object(c.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                        upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                        subStartDate: this.getFormattedGiftUpgradeStartDate()
                    }, "SubbedTopPage")) : (e = Object(c.d)("Your Gift Subscription", "SubbedTopPage"), t = Object(c.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(y.Q, {
                            bold: !0,
                            type: y._49.Span
                        }, this.props.giftSender || ""),
                        giftEndDate: this.getFormattedGiftEndDate()
                    }, "SubbedTopPage")), a.createElement(y._8, null, a.createElement(y.Q, {
                        bold: !0,
                        type: y._49.H4
                    }, e), a.createElement(y._2, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(y.Q, null, t)), a.createElement(y.Q, {
                        className: "balloon-subscribed-user__gift-upgrade-info",
                        bold: !0
                    }, n))
                }, t.prototype.getGiftExtendSection = function() {
                    var e, t = null;
                    if (!this.props.isNonStandardSub) {
                        var n = Object(c.d)("More Paid Subscription Options", "SubbedTopPage");
                        t = a.createElement(y._8, {
                            margin: {
                                right: 1
                            },
                            display: y.R.Inline
                        }, a.createElement(y.v, {
                            ariaLabel: n,
                            onClick: this.props.showSubOptions,
                            type: y.B.Hollow,
                            "data-a-target": "see-more-sub-options-button"
                        }, n))
                    }
                    var i = this.getGiftMessage();
                    return e = a.createElement(y._8, {
                        display: y.R.Inline
                    }, a.createElement(y.v, {
                        "data-test-selector": "subscribe-button__gift",
                        ariaLabel: i,
                        onClick: this.props.showGiftOptions,
                        type: y.B.Hollow
                    }, i)), a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("Extend Your Subscription", "SubbedTopPage")), a.createElement(y._2, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(y.Q, null, Object(c.d)("{price} / Month", {
                        price: this.props.subscriptionProducts[0].price
                    }, "SubbedTopPage"))), a.createElement(y._8, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, a.createElement(y.v, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.props.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, Object(c.d)("Subscribe Now", "SubbedTopPage")))), a.createElement(y._8, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, t, e))
                }, t.prototype.getTopPageGiftSection = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    Object(_.c)(this.props.subscriptionProducts) && (e = Object(_.a)(this.props.subscriptionProducts[0], !0));
                    var t = this.getGiftMessage(),
                        n = Object(c.d)("More Gift Options", "SubbedTopPage");
                    return a.createElement(y._8, null, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("Help Grow {streamer}'s Community", {
                        streamer: this.props.channelDisplayName
                    }, "SubbedTopPage")), a.createElement(y._8, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: y.R.Flex
                    }, a.createElement(y.v, {
                        ariaLabel: t + " " + e,
                        onClick: this.props.onGiftSelect,
                        purchase: e
                    }, t), a.createElement(y._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(y.v, {
                        ariaLabel: n,
                        onClick: this.props.showGiftOptions,
                        type: y.B.Hollow
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
        var Y = n("+p4h"),
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
                        t.tabToSubProduct || (t.tabToSubProduct = (n = t.props.data.user.subscriptionProducts, (i = new Map).set(q.b.Prime, null), n.forEach(function(e, t) {
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
                    }), a.createElement(y._8, {
                        display: y.R.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._7.Center,
                        className: "channel-header__subscription-modal"
                    }, a.createElement(y._10, {
                        fillContent: !0
                    }));
                    if (!this.props.data.user || !this.props.data.user.subscriptionProducts) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    c.j.debug("rendering balloon", {
                        state: this.state
                    });
                    var e, t = a.createElement(y._14, null),
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
                    return o && (t = a.createElement(K.a, {
                        subscriptionProducts: r,
                        isGift: n
                    })), a.createElement(y._8, {
                        key: "subscribe-balloon"
                    }, t, e)
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(V, {
                        key: "gift-recipient-search-page",
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.data.user.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportChannel
                    }) : null
                }, t.prototype.getGiftOptionsPage = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(Q, {
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
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(Q, {
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
                    return a.createElement($, {
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
                    return this.props.data.user ? a.createElement(z, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        inPrimeRegion: this.props.inPrimeRegion,
                        isNonStandardSub: this.props.isNonStandardSub,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        showGiftOptions: this.showGiftOptions,
                        showSubOptions: this.showSubOptions,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }) : null
                }, t.prototype.getEsportPage = function() {
                    return this.props.data.user ? a.createElement(y._8, {
                        key: "subscribe-balloon"
                    }, a.createElement(H, {
                        channelLogin: this.props.channelLogin,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        isSubscribed: this.props.isSubscribed,
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        currentPage: this.state.currentPage,
                        showTop: this.showTop,
                        showRecipientSelect: this.showRecipientSelect
                    })) : null
                }, t = r.__decorate([Object(u.a)(Y, {
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
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTierPrice: null,
                        inPrimeRegion: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        var n = !!(t.props.data.user && t.props.data.user.self && t.props.data.user.self.subscriptionBenefit),
                            i = t.props.data.requestInfo && Object(h.a)(t.props.data.requestInfo.countryCode);
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
                    if (this.props.hideEsportsSubscription && Object(f.a)(this.props.data.user.id, this.props.sessionUser)) return null;
                    var e = this.props.data.requestInfo && Object(h.a)(this.props.data.requestInfo.countryCode),
                        t = !!(this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                        n = Object(f.a)(this.props.data.user.id, this.props.sessionUser),
                        i = 1 === this.props.data.user.subscriptionProducts.length,
                        r = null;
                    this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && (r = this.props.data.user.self.subscriptionBenefit.purchasedWithPrime ? m.a.Prime : this.props.data.user.self.subscriptionBenefit.tier, this.modalLevel = ""), this.props.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && (i = !0);
                    var o, s = t ? Object(c.d)("All-Access Pass", "SubscribeButton") : Object(c.d)("Get the All-Access Pass", "SubscribeButton");
                    if (t) {
                        var l = i ? Object(c.d)("Subscribed", "SubscribeButton") : Object(c.d)("Gift A Sub", "SubscribeButton"),
                            u = this.props.isFullWidthButton ? 2 : void 0;
                        if (o = this.props.hostChannelID ? Object(c.d)("Subscribed to {username}", {
                                username: this.props.data.user.displayName
                            }, "SubscribeButton") : l, i && !n) return a.createElement(y.v, {
                            disabled: !0,
                            ariaLabel: o,
                            icon: y._25.Star
                        }, a.createElement(y._8, {
                            margin: {
                                right: u
                            }
                        }, o));
                        n && (o = s)
                    } else o = n ? s : this.props.hostChannelID ? Object(c.d)("Subscribe to {username}", {
                        username: this.props.data.user.displayName
                    }, "SubscribeButton") : Object(c.d)("Subscribe", "SubscribeButton");
                    var p = r === m.a.Prime ? y._25.Crown : y._25.Star,
                        g = t ? "subscribed-button" : "subscribe-button",
                        b = this.props.isFullWidthButton && t ? 2 : void 0,
                        v = a.createElement(y.v, {
                            "data-a-target": g,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: o,
                            type: t ? y.B.Success : y.B.Default,
                            dropdown: !this.props.isInSideNav,
                            fullWidth: !0,
                            icon: t ? p : void 0
                        }, a.createElement(y._8, {
                            margin: {
                                right: b
                            }
                        }, o)),
                        k = y.r.BottomRight;
                    return this.props.isInSideNav ? k = y.r.RightCenter : this.props.hostChannelID && (k = y.r.TopLeft), a.createElement(d.a, {
                        onToggle: this.handleMenuToggle
                    }, v, a.createElement(y.q, {
                        size: y.s.Large,
                        direction: k,
                        "data-a-target": "sub-balloon"
                    }, a.createElement(Z, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin || "",
                        inPrimeRegion: e,
                        isNonStandardSub: i,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subbedTier: r || m.a.Prime,
                        userHasPrime: !1,
                        isSubscribed: t,
                        isEsportChannel: n
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
                        return Object(g.x)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(a.Component),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(J, {
                        authToken: this.props.authToken,
                        sessionUser: this.props.sessionUser,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        hideEsportsSubscription: this.props.hideEsportsSubscription,
                        reportInteractive: this.reportInteractive,
                        isInSideNav: this.props.isInSideNav,
                        isFullWidthButton: this.props.isFullWidthButton
                    })
                }, t = r.__decorate([Object(l.d)("SubscribeButton")], t)
            }(a.Component);
        var te = Object(o.b)(function(e) {
            return {
                authToken: Object(s.a)(e),
                sessionUser: Object(s.c)(e)
            }
        })(ee);
        n.d(t, !1, function() {
            return ee
        }), n.d(t, "a", function() {
            return te
        }), n.d(t, !1, function() {
            return "subscribe-button__dropdown"
        }), n.d(t, !1, function() {
            return J
        })
    },
    "7L7x": function(e, t) {},
    "7WFF": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            r = n("Aj/L"),
            a = n("TToO"),
            o = n("GiK3"),
            s = n("j7/Y"),
            l = n("w9tK"),
            c = n("vH/s"),
            d = n("CSlQ"),
            u = n("YV3U"),
            p = n("kJau"),
            m = n("HW6M"),
            f = n("3zLD"),
            h = n("CIox"),
            g = n("6sO2"),
            b = n("7vx8"),
            v = n("fc0G"),
            y = n("3HXW"),
            k = n("kLf9"),
            S = n("QIXk"),
            _ = n("0B06");

        function O(e, t) {
            return {
                startOffset: e,
                endOffset: t
            }
        }
        var C = n("Odds"),
            E = (n("Wc1Y"), 1);

        function T(e) {
            return parseFloat(e.toFixed(E))
        }
        var P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        startOffset: -1,
                        endOffset: -1
                    }, t.onDrag = function(e) {
                        t.setState({
                            startOffset: T(e.startOffset),
                            endOffset: T(e.endOffset)
                        }), t.props.setEditing({
                            startOffset: t.state.startOffset,
                            endOffset: t.state.endOffset
                        })
                    }, t.renderDurationPopover = function() {
                        var e = o.createElement(C.Q, {
                            type: C._49.Strong
                        }, t.roundedPopoverDuration() + "s");
                        return o.createElement(C._35, {
                            className: "clips-editor-slider-popover",
                            background: C.n.Alt2,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            fullWidth: !0,
                            textAlign: C._45.Center,
                            overflow: C._11.Hidden,
                            border: !0
                        }, o.createElement(C.Q, {
                            align: C._59.Middle,
                            fontSize: C.V.Size5,
                            color: C.K.Alt2
                        }, e, " / 60s"), o.createElement(C.Q, {
                            align: C._59.Middle,
                            color: C.K.Alt2
                        }, Object(_.a)(t.state.startOffset) + " - " + Object(_.a)(t.state.endOffset)))
                    }, t.isReady = function() {
                        return t.props.isClipResolved && t.isValidOffset(t.state.startOffset) && t.isValidOffset(t.state.endOffset)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.isValidOffset(this.state.startOffset),
                        n = this.isValidOffset(this.state.endOffset);
                    if ((!t || !n) && e.initialOffsetStart && e.duration) {
                        var i = {},
                            r = O(e.initialOffsetStart, e.duration);
                        !t && this.isValidOffset(r.startOffset) && (i.startOffset = r.startOffset), !n && this.isValidOffset(r.endOffset) && (i.endOffset = r.endOffset), this.setState(i)
                    }
                }, t.prototype.componentDidUpdate = function() {
                    this.isReady() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.isReady() && this.props.duration ? o.createElement(C._8, null, o.createElement(C._35, {
                        margin: {
                            y: 4
                        },
                        className: "clips-editor-slider-background"
                    }, o.createElement(y.a, {
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset,
                        minOffset: 0,
                        maxOffset: this.props.duration,
                        minLength: 5,
                        maxLength: 60,
                        onLeftDrag: this.onDrag,
                        onRightDrag: this.onDrag,
                        onSliderDrag: this.onDrag,
                        popover: this.renderDurationPopover(),
                        color: y.c.Blue,
                        isSliderEnabled: !0,
                        handleSize: k.c.Medium
                    }, o.createElement(C._8, {
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        fullWidth: !0,
                        textAlign: C._45.Center,
                        overflow: C._11.Hidden
                    }))), o.createElement(S.a, {
                        clipSlug: this.props.slug,
                        location: c.PageviewLocation.ClipsEditing,
                        broadcasterName: this.props.broadcasterName,
                        startOffset: this.state.startOffset,
                        endOffset: this.state.endOffset
                    })) : this.renderPlaceholder()
                }, t.prototype.renderPlaceholder = function() {
                    return o.createElement(C._8, null, o.createElement(C.e, {
                        type: C.j.Bounce,
                        loop: !0,
                        enabled: !0,
                        duration: C.g.ExtraLong,
                        timing: C.i.EaseInOut
                    }, o.createElement(C._35, {
                        fullWidth: !0,
                        background: C.n.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            y: 3
                        },
                        textAlign: C._45.Center
                    })), o.createElement(C.e, {
                        type: C.j.Bounce,
                        loop: !0,
                        enabled: !0,
                        duration: C.g.ExtraLong,
                        timing: C.i.EaseInOut,
                        delay: C.f.Medium
                    }, o.createElement(C._35, {
                        fullWidth: !0,
                        background: C.n.Alt2,
                        margin: {
                            y: 4
                        },
                        padding: {
                            top: 2,
                            bottom: 1
                        },
                        textAlign: C._45.Center
                    })))
                }, t.prototype.roundedPopoverDuration = function() {
                    var e = this.state.endOffset - this.state.startOffset;
                    return e >= 59.7 && (e = 60), e <= 5.3 && (e = 5), e.toFixed(1)
                }, t.prototype.isValidOffset = function(e) {
                    return !isNaN(e) && e >= 0
                }, t
            }(o.Component),
            w = Object(f.compose)(Object(d.d)("ClipsEditor"))(P),
            N = n("Gso+"),
            D = (n("Jbgd"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = m("clips-edit-top-nav", {
                        "clips-edit-top-nav-rollup": this.props.isPostEdit
                    });
                    return o.createElement(C._35, {
                        background: C.n.Base,
                        className: e,
                        position: C._15.Fixed,
                        fullWidth: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        display: C.R.Flex,
                        justifyContent: C._7.Center,
                        alignItems: C.c.Center,
                        "data-test-selector": "clips-edit-top-nav-wrapper",
                        borderBottom: !0
                    }, this.props.showMessage && o.createElement(C.e, {
                        delay: C.f.Medium,
                        duration: C.g.Medium,
                        enabled: !0,
                        fillMode: C.h.Both,
                        timing: C.i.EaseInOut,
                        type: C.j.SlideInTop
                    }, o.createElement(C._8, {
                        display: C.R.Flex,
                        justifyContent: C._7.Center,
                        alignItems: C.c.Center
                    }, o.createElement(C.Q, {
                        color: C.K.Alt,
                        fontSize: C.V.Size5
                    }, Object(g.d)("Title this clip to publish", "ClipsEditTopNav")), o.createElement(C._8, {
                        margin: {
                            left: .5
                        },
                        display: C.R.Flex,
                        alignItems: C.c.Center
                    }, o.createElement(C._24, {
                        asset: C._25.Lock,
                        type: C._26.Warn
                    })))))
                }, t
            }(o.Component)),
            I = Object(d.d)("ClipsEditTopNav", {
                autoReportInteractive: !0
            })(D),
            R = n("l21v"),
            x = function() {
                return function(e) {
                    var t = this;
                    this.timerId = null, this.start = function() {
                        t.timerId && t.stop(), t.timerId = setInterval(t.onInterval, t.intervalMillis)
                    }, this.stop = function() {
                        t.timerId && (clearInterval(t.timerId), t.timerId = null)
                    }, this.restart = function(e) {
                        void 0 === e && (e = 0), t.stop(), t.timerId = setTimeout(function() {
                            t.onInterval(), t.start()
                        }, e)
                    }, this.onInterval = e.onInterval, this.intervalMillis = e.intervalMillis
                }
            }(),
            F = (n("ZYcd"), {
                clappy: Object(R.f)("192361", 3),
                clappyDerp: Object(R.f)("192362", 3),
                clappyHype: Object(R.f)("192363", 3)
            });

        function L() {
            switch (Math.floor(17 * Math.random())) {
                case 0:
                    return {
                        icon: F.clappyHype,
                        text: Object(g.d)("Generating your clip...", "ClipsPostEditLoading")
                    };
                case 1:
                    return {
                        icon: F.clappyDerp,
                        text: Object(g.d)("Almost there...", "ClipsPostEditLoading")
                    };
                case 2:
                    return {
                        icon: F.clappyHype,
                        text: Object(g.d)("Just a few more seconds...", "ClipsPostEditLoading")
                    };
                case 3:
                    return {
                        icon: F.clappy,
                        text: Object(g.d)("Grabbing popcorn...", "ClipsPostEditLoading")
                    };
                case 4:
                    return {
                        icon: F.clappyHype,
                        text: Object(g.d)("Summoning your clip...", "ClipsPostEditLoading")
                    };
                case 5:
                    return {
                        icon: F.clappyHype,
                        text: Object(g.d)("The bits are breeding...", "ClipsPostEditLoading")
                    };
                case 6:
                    return {
                        icon: F.clappy,
                        text: Object(g.d)("Building the thing...", "ClipsPostEditLoading")
                    };
                case 7:
                    return {
                        icon: F.clappyDerp,
                        text: Object(g.d)("Spinning up hamsters...", "ClipsPostEditLoading")
                    };
                case 8:
                    return {
                        icon: F.clappy,
                        text: Object(g.d)("Fetching your stick...", "ClipsPostEditLoading")
                    };
                case 9:
                    return {
                        icon: F.clappyDerp,
                        text: Object(g.d)("Applying middle out compression...", "ClipsPostEditLoading")
                    };
                case 10:
                    return {
                        icon: F.clappy,
                        text: Object(g.d)("Searching for llamas...", "ClipsPostEditLoading")
                    };
                case 11:
                    return {
                        icon: F.clappyHype,
                        text: Object(g.d)("Turning on printer...", "ClipsPostEditLoading")
                    };
                case 12:
                    return {
                        icon: F.clappy,
                        text: Object(g.d)("Learning calculus...", "ClipsPostEditLoading")
                    };
                case 13:
                    return {
                        icon: F.clappyDerp,
                        text: Object(g.d)("Training patience...", "ClipsPostEditLoading")
                    };
                case 14:
                    return {
                        icon: F.clappy,
                        text: Object(g.d)("Looking for keys...", "ClipsPostEditLoading")
                    };
                case 15:
                    return {
                        icon: F.clappyDerp,
                        text: Object(g.d)("Baking cake...", "ClipsPostEditLoading")
                    };
                default:
                    return {
                        icon: F.clappyHype,
                        text: Object(g.d)("Searching for hold music...", "ClipsPostEditLoading")
                    }
            }
        }
        var j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        percent: 0,
                        messageData: L()
                    }, t.onTimerUpdate = function() {
                        t.state.percent >= 100 ? t.countdownTimer.stop() : t.setState({
                            percent: t.state.percent + 1,
                            messageData: t.state.percent % 4 == 0 ? L() : t.state.messageData
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.countdownTimer = new x({
                        onInterval: this.onTimerUpdate,
                        intervalMillis: 500
                    }), this.countdownTimer.start()
                }, t.prototype.componentWillUnmount = function() {
                    this.countdownTimer.stop()
                }, t.prototype.render = function() {
                    return o.createElement(C._35, {
                        className: "clips-post-edit-loading",
                        padding: 4,
                        background: C.n.Base,
                        border: !0
                    }, o.createElement(C._8, {
                        display: C.R.Flex,
                        justifyContent: C._7.Between,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C.Q, {
                        type: C._49.Span,
                        fontSize: C.V.Size6
                    }, Object(g.d)("Publishing Clip!", "ClipsPostEditLoading")), o.createElement(C._8, {
                        display: C.R.InlineBlock
                    }, this.state.percent, "%")), o.createElement(C._18, {
                        animationDirection: C._19.Up,
                        animationDuration: 50,
                        mask: !0
                    }), o.createElement(C._8, {
                        margin: {
                            top: 2
                        }
                    }, o.createElement(C._8, {
                        className: "clips-post-edit-loading-clappy",
                        display: C.R.InlineBlock
                    }, o.createElement(C.e, {
                        duration: C.g.ExtraLong,
                        enabled: !0,
                        type: C.j.Bounce,
                        loop: !0,
                        timing: C.i.EaseOut
                    }, o.createElement(C.N, {
                        src: this.state.messageData.icon,
                        alt: Object(g.d)("Clappy looking good", "ClipsPostEditLoading")
                    })), o.createElement(C._8, {
                        position: C._15.Relative
                    }, o.createElement(C.q, {
                        direction: C.r.Right,
                        elevation: 2,
                        show: !0,
                        tailBackground: C.n.Alt2,
                        offsetY: "-3.8rem",
                        offsetX: "1.5rem"
                    }, o.createElement(C._35, {
                        padding: 1,
                        background: C.n.Alt2
                    }, o.createElement(C.Q, {
                        color: C.K.Alt2
                    }, this.state.messageData.text)))))))
                }, t
            }(o.Component),
            U = n("4Gcm"),
            M = n("bhVC"),
            A = n("2hJ3"),
            B = n("WNmM"),
            V = n("ZxOd"),
            H = (n("Ks2M"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showConfirmation: !1
                    }, t.copyClipURL = function() {
                        Object(A.a)(Object(p.a)(t.props.slug)), t.setState({
                            showConfirmation: !0
                        }), setTimeout(function() {
                            t.setState({
                                showConfirmation: !1
                            })
                        }, 2e3);
                        var e = t.props,
                            n = e.clipId,
                            i = e.gameName,
                            r = e.broadcasterId,
                            a = e.broadcasterLogin;
                        Object(B.c)(n, i, r, a, c.PageviewLocation.ClipsEditing)(M.b.CopyInput)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(C._35, {
                        className: "clips-post-edit-share",
                        padding: 3,
                        background: C.n.Base,
                        border: !0
                    }, o.createElement(C._8, {
                        margin: {
                            bottom: 2
                        },
                        position: C._15.Relative,
                        fullWidth: !0
                    }, o.createElement(U.a, {
                        text: Object(p.a)(this.props.slug),
                        icon: !0,
                        iconAsset: C._25.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }), o.createElement(C.q, {
                        tailBackground: C.n.Alt,
                        direction: C.r.TopCenter,
                        show: this.state.showConfirmation,
                        offsetY: "1rem",
                        elevation: 2
                    }, o.createElement(C._35, {
                        background: C.n.Alt,
                        textAlign: C._45.Center,
                        padding: {
                            y: 1
                        }
                    }, o.createElement(C.Q, {
                        color: C.K.Alt,
                        fontSize: C.V.Size5
                    }, Object(g.d)("Copied!", "ClipsPostEditShare"))))), o.createElement(C._8, {
                        display: C.R.Flex,
                        justifyContent: C._7.Center
                    }, o.createElement(V.a, {
                        slug: this.props.slug,
                        pageType: c.PageviewLocation.ClipsEditing
                    })))
                }, t
            }(o.Component)),
            W = n("8cOU"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.isDonePolling(e) && !this.isDonePolling(this.props) && this.props.data.stopPolling()
                }, t.prototype.render = function() {
                    var e = this.props.data.clip,
                        t = !(!this.isDonePolling() || !e),
                        n = null;
                    return n = t && e ? o.createElement(H, {
                        slug: this.props.slug,
                        clipId: e.id,
                        broadcasterId: e.broadcaster && e.broadcaster.id,
                        broadcasterLogin: e.broadcaster && e.broadcaster.login,
                        gameName: e.game && e.game.name
                    }) : o.createElement(j, null), o.createElement(C.e, {
                        duration: C.g.ExtraLong,
                        enabled: t,
                        fillMode: C.h.Both,
                        timing: C.i.EaseInOut,
                        type: C.j.SlideInBottom
                    }, o.createElement(C._8, {
                        display: C.R.Flex,
                        justifyContent: C._7.Center,
                        padding: {
                            top: 4
                        }
                    }, n))
                }, t.prototype.isDonePolling = function(e) {
                    void 0 === e && (e = this.props);
                    var t = e.data,
                        n = t.loading,
                        i = t.clip;
                    return !n && i && i.creationState !== N.a.CREATING
                }, t
            }(o.Component),
            z = Object(b.a)(W, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network-only",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            })(G),
            q = n("ynxC"),
            Q = n("0Ssf"),
            K = n("nU46"),
            $ = n("dPTw"),
            Y = (n("DkK3"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.slug,
                        t = o.createElement(C._8, {
                            alignItems: C.c.Center,
                            display: C.R.Flex,
                            flexDirection: C.T.Row,
                            justifyContent: C._7.Start,
                            margin: {
                                y: 1
                            },
                            ellipsis: !0
                        }, o.createElement(C._35, {
                            display: C.R.Flex,
                            fontSize: C.V.Size5
                        }, o.createElement(C.Q, {
                            type: C._49.Span
                        }, Object(_.b)(this.props.createdAt)), o.createElement(C._8, {
                            margin: {
                                x: .5
                            }
                        }, "•")), o.createElement(Q.a, {
                            slug: e,
                            ellipsis: !0
                        }));
                    return o.createElement(C._35, {
                        className: "clips-post-edit-sidebar",
                        display: C.R.Flex,
                        flexDirection: C.T.Column,
                        background: C.n.Base
                    }, o.createElement(C._35, {
                        className: "clips-post-edit-sidebar-top",
                        borderBottom: !0
                    }, o.createElement(q.a, {
                        slug: e
                    })), o.createElement(C._8, {
                        fullHeight: !0,
                        display: C.R.Flex,
                        alignItems: C.c.Center
                    }, o.createElement(C._8, {
                        className: "clips-sidebar-info",
                        display: C.R.Flex,
                        flexDirection: C.T.Column,
                        justifyContent: C._7.Around,
                        padding: 1
                    }, o.createElement($.a, {
                        slug: e
                    }), o.createElement(K.a, {
                        slug: e
                    }), t)))
                }, t
            }(o.Component)),
            Z = n("mVDO"),
            X = n("HKIP"),
            J = n("f8OD"),
            ee = (n("D9gI"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isPollingTimedOut: !1,
                        isPlayerLoaded: !1,
                        hideContent: !1,
                        editing: {},
                        shouldAnimate: !0
                    }, t.timeoutID = 0, t.hasSentEditClip = !1, t.onLoaded = function() {
                        t.setState({
                            isPlayerLoaded: !0
                        })
                    }, t.setEditing = function(e) {
                        t.setState({
                            editing: e
                        })
                    }, t.onAnimationEnd = function() {
                        t.setState({
                            shouldAnimate: !1
                        })
                    }, t.getIsClipResolved = function(e) {
                        var n = t.getClipCreationState(e);
                        return t.getRawMediaExists(e) && (n === N.a.CREATED || n === N.a.FAILED)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getClipCreationState(e) === N.a.FAILED
                    }, t.getClipCreationState = function(e) {
                        return e.rawMediaPolling.clip && e.rawMediaPolling.clip.rawMedia && e.rawMediaPolling.clip.rawMedia.status || ""
                    }, t.getRawMediaExists = function(e) {
                        return Boolean(e.rawMediaPolling.clip && e.rawMediaPolling.clip.rawMedia)
                    }, t.hideTransitioningState = function() {
                        t.setState({
                            hideContent: !0,
                            shouldAnimate: !0
                        }), setTimeout(function() {
                            t.setState({
                                hideContent: !1
                            })
                        }, 200)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.maybeRedirectToView(this.props), this.getIsClipResolved(this.props) ? this.props.rawMediaPolling.stopPolling() : this.timeoutID = setTimeout(function() {
                        return e.setState({
                            isPollingTimedOut: !0
                        })
                    }, 7e4)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRedirectToView(e), !this.props.isPostEdit && e.isPostEdit && (this.hideTransitioningState(), this.setState({
                        editing: {
                            isPostEdit: !0
                        }
                    })), this.getIsClipResolved(e) && (this.props.rawMediaPolling.stopPolling(), clearTimeout(this.timeoutID), this.props.latencyTracking.reportInteractive())
                }, t.prototype.componentWillUnmount = function() {
                    this.timeoutID && clearTimeout(this.timeoutID), this.props.rawMediaPolling.stopPolling()
                }, t.prototype.componentDidUpdate = function() {
                    var e = this.getIsClipResolved(this.props) && !this.getIsCreationFailed(this.props);
                    if (!this.props.isPostEdit && !this.hasSentEditClip && e && this.state.isPlayerLoaded && this.props.rawMediaPolling.clip && this.props.rawMediaPolling.clip.rawMedia) {
                        var t = this.props.rawMediaPolling.clip.rawMedia,
                            n = t.defaultClipInitialOffset,
                            i = t.duration,
                            r = t.videoURL,
                            a = O(n, i);
                        this.setState({
                            editing: {
                                startOffset: a.startOffset,
                                endOffset: a.endOffset,
                                videoUrl: r,
                                slug: this.props.slug
                            }
                        }), this.hasSentEditClip = !0
                    }
                }, t.prototype.render = function() {
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return o.createElement(h.b, {
                        to: Object(p.f)(u.a.Default)
                    });
                    var e = this.props.data.clip,
                        t = this.props.rawMediaPolling.clip,
                        n = t && t.rawMedia,
                        i = this.getIsClipResolved(this.props),
                        r = null;
                    r = this.props.isPostEdit ? o.createElement(z, {
                        slug: this.props.slug
                    }) : o.createElement(w, {
                        isClipResolved: i,
                        slug: this.props.slug,
                        broadcasterName: e && e.broadcaster && e.broadcaster.displayName || "",
                        initialOffsetStart: n && n.defaultClipInitialOffset,
                        duration: n && n.duration,
                        setEditing: this.setEditing
                    });
                    var a = m("clips-edit-clip-wrapper", {
                        "clips-post-edit-clip-wrapper-hide": this.state.hideContent,
                        "clips-post-edit-clip-wrapper": this.props.isPostEdit
                    });
                    return o.createElement(C._8, null, o.createElement(I, {
                        showMessage: i,
                        isPostEdit: this.props.isPostEdit
                    }), o.createElement(C.e, {
                        duration: C.g.ExtraLong,
                        enabled: this.state.shouldAnimate,
                        fillMode: C.h.Both,
                        timing: C.i.EaseInOut,
                        type: C.j.SlideInBottom,
                        onAnimationEnd: this.onAnimationEnd
                    }, o.createElement(C._8, {
                        className: a,
                        padding: 2
                    }, o.createElement(C._35, {
                        display: C.R.Flex,
                        border: this.props.isPostEdit
                    }, o.createElement(C.k, {
                        ratio: C.l.Aspect16x9
                    }, o.createElement(C._8, {
                        position: C._15.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, o.createElement(Z.a, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: v.b.ClipsEditing,
                        editing: this.state.editing
                    }))), this.props.isPostEdit && o.createElement(Y, {
                        slug: this.props.slug,
                        createdAt: e && e.createdAt
                    })), r)))
                }, t.prototype.maybeRedirectToView = function(e) {
                    var t = e.data.clip && e.data.clip.isPublished,
                        n = e.data.clip && e.data.clip.curator && this.props.userLogin && e.data.clip.curator.login !== this.props.userLogin;
                    (t || n) && g.o.history.push("/" + e.slug)
                }, t
            }(o.Component)),
            te = Object(f.compose)(Object(b.a)(J, {
                name: "rawMediaPolling",
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }), Object(b.a)(X, {
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }), Object(d.d)("EditClip"))(ee),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRedirect = function(e) {
                        if ("/:slug/edit" === e.match.path) e.history.replace("/create", a.__assign({}, e.location.state, {
                            slug: e.match.params.slug
                        }));
                        else if (e.shouldRedirectToError) e.history.push(Object(p.f)(u.a.NotLoggedIn));
                        else if (!e.location.state || !e.location.state.slug) return e.history.push("/")
                    }, t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive(1)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.handleRedirect(this.props), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.handleRedirect(e), this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.location.state && this.props.location.state.slug;
                    return e ? o.createElement(C._8, null, o.createElement(te, {
                        slug: e,
                        isPostEdit: !!this.props.location.state.isPostEdit,
                        userLogin: this.props.userLogin
                    })) : null
                }, t = a.__decorate([Object(d.d)("ClipsEditingPage", {
                    destination: l.a.ClipsEditing
                }), Object(s.a)({
                    location: c.PageviewLocation.ClipsEditing
                })], t)
            }(o.Component);
        var ie = Object(i.b)(function(e) {
            var t = Object(r.c)(e);
            return {
                shouldRedirectToError: Object(r.e)(e) && !Object(r.d)(e),
                userLogin: t && t.login
            }
        })(ne);
        n.d(t, "ClipsCreate", function() {
            return ie
        })
    },
    "7tMz": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("75D5");

        function o(e) {
            return {
                latencyTracking: function(e, t) {
                    return new a.a(e, t)
                }(e),
                rootLatencyTracker: s()
            }
        }

        function s() {
            return new a.a("Root")
        }
        n("MRMr");

        function l(e, t) {
            return function(t) {
                return function(n) {
                    function a() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return i.__extends(a, n), a.prototype.render = function() {
                        return r.createElement(t, i.__assign({}, this.props, o(e)))
                    }, a
                }(r.Component)
            }
        }
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return l
        })
    },
    "81fF": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PrimeSubscribe_UserPrimeData"
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
                end: 314
            }
        };
        n.loc.source = {
            body: "query PrimeSubscribe_UserPrimeData($login: String!) {\nuser(login: $login) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8OKC": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updatePrimeOfferStatus"
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
                                value: "UpdatePrimeOfferStatusInput"
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
                            value: "updatePrimeOfferStatus"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
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
                end: 171
            }
        };
        n.loc.source = {
            body: "mutation updatePrimeOfferStatus($input: UpdatePrimeOfferStatusInput!) {\nupdatePrimeOfferStatus(input: $input) {\nself {\nhasEntitlement\nclaimData\nstatus\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var i, r = n("RH2O"),
            a = n("TToO"),
            o = n("OAwv"),
            s = n("GiK3"),
            l = n("3zLD"),
            c = n("6sO2"),
            d = n("+Znq"),
            u = n("7vx8"),
            p = n("S1vB"),
            m = n("oIkB"),
            f = n("ZVME"),
            h = n("CSlQ"),
            g = n("AGQo"),
            b = n("Odds"),
            v = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(b._8, null, s.createElement(b._35, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: b.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(b.Q, {
                        bold: !0,
                        type: b._49.H6
                    }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(b._35, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: b.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(b._8, {
                        fullWidth: !0,
                        display: b.R.Flex,
                        alignItems: b.c.Center
                    }, s.createElement(b._8, {
                        flexGrow: 1
                    }, s.createElement(b.Q, {
                        bold: !0,
                        type: b._49.H6
                    }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(b._8, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: b._45.Center
                    }, s.createElement(b._35, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: b.n.Base,
                        color: b.K.Base,
                        display: b.R.Flex,
                        alignItems: b.c.Center,
                        justifyContent: b._7.Center
                    }, s.createElement(b.Q, null, e.toString())))))
                }, t
            }(s.Component)),
            y = Object(h.d)("PrimeOfferHeader", {
                autoReportInteractive: !0
            })(v),
            k = n("Lpko"),
            S = n("Tr7p"),
            _ = n("Kckk");
        ! function(e) {
            e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
        }(i || (i = {}));
        var O = n("8OKC"),
            C = n("tTbW"),
            E = (n("9856"), n("wjhu")),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0,
                        updated: !1,
                        status: void 0,
                        error: void 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = o.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        }), Object(S.c)(!e, {
                            hasPrime: t.hasPrime(),
                            numberOfOffers: t.getNumberOfOffers()
                        })
                    }, t.getHiddenCrownOfferIds = function() {
                        return c.b.get("prime-crown-hidden-ids", [])
                    }, t.getNumberOfOffers = function() {
                        var e = t.props.offersData,
                            n = e && e.primeOffers;
                        return n && n.length || 0
                    }, t.onHover = function() {
                        Object(S.b)({
                            hasPrime: t.hasPrime()
                        })
                    }, t.hasPrime = function() {
                        return !(!t.props.userData.currentUser || !t.props.userData.currentUser.hasPrime)
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: f.a.TwitchPrime,
                            key: f.b.PrimeOfferLoaded,
                            label: f.c.Loaded,
                            start: f.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [];
                            t.setState({
                                numOfUnseenOffers: i.filter(t.offerIsUnseen).length
                            })
                        }
                    }, t.offerIsUnseen = function(e) {
                        var n = Object(_.i)();
                        return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            t.updateOfferStatus(), Object(_.m)(n)
                        }
                    }, t.updateOfferStatus = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, o, s, l, c;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.props.userData, !(t = e.currentUser && e.currentUser.id)) return [2];
                                        n = this.props.offersData.primeOffers || [], r = n.map(function(e) {
                                            return {
                                                offerID: e.id,
                                                status: _.a.Seen
                                            }
                                        }), o = Object(m.a)({
                                            userID: t,
                                            statusChanges: r
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(o)];
                                    case 2:
                                        return s = a.sent(), (l = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && l.code ? (c = i[l.code], this.setState({
                                            updated: !1,
                                            error: c || i.UNKNOWN
                                        }), [2]) : s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.self ? (this.setState({
                                            updated: !0,
                                            error: void 0
                                        }), [3, 4]) : (this.setState({
                                            updated: !1,
                                            error: i.UNKNOWN
                                        }), [2]);
                                    case 3:
                                        return a.sent(), this.setState({
                                            updated: !1,
                                            error: i.UNKNOWN
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderOfferList = function() {
                        return s.createElement(b._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(y, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(k.a, {
                            placement: _.d.Crown
                        }))
                    }, t.shouldReportInteractive = function() {
                        return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive(), this.offersLoadedEvent = this.registerOffersLoadedEvent(), this.getUnseenOffers(this.props)
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e);
                    var t = this.props.offersData,
                        n = e.offersData;
                    if (t && t.loading && n && !n.loading && n.primeOffers) {
                        this.props.latencyTracking.reportCustomEvent(this.offersLoadedEvent);
                        var i = n.primeOffers,
                            r = i && i.length;
                        Object(S.d)({
                            hasPrime: this.hasPrime(),
                            numberOfOffers: r || 0
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: b._53.Center,
                        direction: b._54.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(c.d)("New Prime Loot", "PrimeOffers") : n.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(b._8, {
                        className: "prime-offers",
                        position: b._15.Relative
                    }, s.createElement(d.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(g.a, {
                        onHover: this.onHover
                    }, s.createElement(b.w, {
                        ariaLabel: Object(c.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: b.x.Large,
                        icon: b._25.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    })), s.createElement(b.q, {
                        direction: b.r.BottomRight,
                        size: b.s.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.offerIsSeen = function(e) {
                    return e.self && e.self.status === _.a.Seen
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e && !this.state.error) return s.createElement(b._8, {
                        className: "prime-offers__pill",
                        position: b._15.Absolute
                    }, s.createElement(b.e, {
                        type: b.j.BounceIn,
                        duration: b.g.Medium,
                        timing: b.i.EaseIn,
                        enabled: e > 0
                    }, s.createElement(b._12, {
                        label: e.toString(),
                        type: b._13.Notification
                    })))
                }, Object.defineProperty(t.prototype, "isUserDataLoading", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isUserDataError", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataError", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            P = Object(l.compose)(Object(u.a)(C, {
                name: "offersData",
                skip: function(e) {
                    return !e.firstPageLoaded && !e.openByDefault
                },
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(_.f)()
                        }
                    }
                }
            }), Object(u.a)(E, {
                name: "userData"
            }), Object(u.a)(O, {
                name: "updatePrimeOfferStatus"
            }), Object(h.d)("PrimeOffers"))(T);
        var w = Object(r.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(P),
            N = n("lfvs"),
            D = n("Hs3O"),
            I = (n("ukY1"), n("F1v6")),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(_.n)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(D.d)(D.a, ""),
                        i = Object(c.d)("Twitch Prime", "BlueBar"),
                        r = s.createElement("span", null, Object(c.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(D.d)(D.a, ""),
                        o = Object(c.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var l = this.props.data;
                        l && l.primePromotions && l.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, i = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    r = s.createElement(N, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return s.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    a = e.externalURL, o = e.text
                            }
                        })
                    }
                    return s.createElement(b._35, {
                        color: b.K.Base,
                        className: "blue-bar",
                        "data-a-target": "blue-bar",
                        position: b._15.Relative,
                        fullWidth: !0,
                        zIndex: b._62.Above
                    }, s.createElement(b._8, {
                        className: "blue-bar__bar",
                        display: b.R.Flex,
                        alignItems: b.c.Center,
                        justifyContent: b._7.Between,
                        flexWrap: b.U.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(b._8, {
                        display: b.R.InlineFlex,
                        alignItems: b.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(b._8, {
                        className: "blue-bar__logo",
                        display: b.R.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(b._24, {
                        asset: b._25.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(b.Q, {
                        bold: !0,
                        type: b._49.Span,
                        noWrap: !0,
                        fontSize: b.V.Size6
                    }, s.createElement(b._2, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        "data-a-target": "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, i))), s.createElement(b.Q, {
                        className: "blue-bar__headline",
                        type: b._49.Span,
                        fontSize: b.V.Size6
                    }, r)), s.createElement(b._8, {
                        display: b.R.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(b.Q, {
                        bold: !0,
                        type: b._49.Span,
                        noWrap: !0,
                        fontSize: b.V.Size6,
                        color: b.K.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o)))))
                }, t
            }(s.Component),
            x = Object(l.compose)(Object(u.a)(I, {
                options: function() {
                    return {
                        variables: {
                            stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                            dateOverride: Object(_.f)()
                        }
                    }
                }
            }), Object(h.d)("BlueBarComponent"))(R),
            F = n("dnng");
        n.d(t, "c", function() {
            return w
        }), n.d(t, "a", function() {
            return x
        }), n.d(t, "b", function() {
            return F.a
        }), n.d(t, "d", function() {
            return _.f
        }), n.d(t, !1, function() {
            return _.c
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
    "8cOU": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsEditPoller"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "query ClipsEditPoller($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\nlogin\n}\ngame {\nid\nname\n}\ncreationState\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    9856: function(e, t) {},
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
            f = n("vH/s"),
            h = n("CSlQ"),
            g = n("Odds"),
            b = (n("Vr0l"), "report-wizard-block"),
            v = "report-wizard-unblock",
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        userBlocked: t.props.userBlocked || !1
                    }, t.renderBlock = function() {
                        return a.createElement(g.O, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleBlock,
                            "data-test-selector": b
                        }, a.createElement(g._8, {
                            display: g.R.Flex,
                            alignItems: g.c.Center
                        }, a.createElement(g._24, {
                            type: g._26.Brand,
                            asset: g._25.Ban
                        }), a.createElement(g._8, {
                            margin: {
                                left: .5
                            }
                        }, Object(l.d)("Block {user}", {
                            user: t.props.targetUser.displayName
                        }, "ReportWizardBlockActions"))))
                    }, t.renderUnblock = function() {
                        return a.createElement(g._8, {
                            className: "reporting-wizard__block-actions",
                            display: g.R.Flex,
                            alignItems: g.c.Center
                        }, a.createElement(g._24, {
                            type: g._26.Success,
                            asset: g._25.FollowCheck
                        }), a.createElement(g._8, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.Q, {
                            className: "block-user__success",
                            type: g._49.Span
                        }, Object(l.d)("{user} blocked", {
                            user: t.props.targetUser.displayName
                        }, "ReportWizardBlockActions"))), a.createElement(g.O, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleUnblock,
                            "data-test-selector": v
                        }, a.createElement(g._8, {
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
                    return a.createElement(g._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            top: 1
                        }
                    }, a.createElement(g._8, null, Object(l.d)("Would you like to block {user}?", {
                        user: this.props.targetUser.displayName
                    }, "ReportWizardBlockActions")), a.createElement(g._8, {
                        margin: {
                            y: 1
                        }
                    }, Object(l.d)("By blocking them, you will no longer see their messages, and they will not be able to host you or add you as a friend.", "ReportWizardBlockActions")), a.createElement(g._8, {
                        margin: {
                            top: 1
                        }
                    }, e))
                }, t
            }(a.Component),
            k = n("mw/a");
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
            O = {
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
                    reportReason: k.b.Harassment
                },
                violence: {
                    getTitle: function() {
                        return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                    },
                    value: "violence/threats",
                    reportReason: k.b.Harm
                },
                report_username: {
                    getTitle: function() {
                        return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                    },
                    value: "inappropriate username",
                    reportReason: k.b.OffensiveUsername
                },
                report_emotes: {
                    getTitle: function() {
                        return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                    },
                    value: "inappropriate emotes",
                    reportReason: k.b.Other
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
                    reportReason: k.b.Spam
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
                    reportReason: k.b.Impersonation
                },
                underage: {
                    getTitle: function() {
                        return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                    },
                    value: "underage",
                    reportReason: k.b.Underaged
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
                    reportReason: k.b.Other
                },
                inappropriateBadge: {
                    getTitle: function() {
                        return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                    },
                    value: "emote/subscriber badge",
                    reportReason: k.b.Other
                },
                noModeration: {
                    getTitle: function() {
                        return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                    },
                    value: "not moderating chat",
                    reportReason: k.b.Other
                },
                inappropriateExtension: {
                    getTitle: function() {
                        return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                    },
                    value: "inappropriate extension",
                    reportReason: k.b.Other
                },
                cheating: {
                    getTitle: function() {
                        return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                    },
                    value: "cheating",
                    reportReason: k.b.Cheating
                },
                bitsViolation: {
                    getTitle: function() {
                        return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                    },
                    value: "bits violation",
                    reportReason: k.b.BitsViolation
                },
                video_labeling: {
                    getTitle: function() {
                        return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                    },
                    value: "incorrect label",
                    reportReason: k.b.Miscategorized
                },
                video_inactive: {
                    getTitle: function() {
                        return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                    },
                    value: "inactive stream",
                    reportReason: k.b.Miscategorized
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
                    reportReason: k.b.HatefulConduct
                },
                harassment: {
                    getTitle: function() {
                        return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                    },
                    value: "harassment",
                    reportReason: k.b.Harassment
                },
                abusiveViolence: {
                    getTitle: _.abusiveViolence,
                    value: "threatening violence",
                    reportReason: k.b.Harm
                },
                commitingViolence: {
                    getTitle: _.commitingViolence,
                    value: "committing violence",
                    reportReason: k.b.Harm
                },
                swatting: {
                    getTitle: function() {
                        return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                    },
                    value: "swatting/ddosing",
                    reportReason: k.b.Harassment
                },
                personalInfo: {
                    getTitle: function() {
                        return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                    },
                    value: "revealing personal info",
                    reportReason: k.b.Harassment
                },
                threat_me: {
                    getTitle: function() {
                        return Object(l.d)("At me", "ReportModalWizard")
                    },
                    value: "against me",
                    reportReason: k.b.Harm
                },
                threat_person: {
                    getTitle: function() {
                        return Object(l.d)("At someone else", "ReportModalWizard")
                    },
                    value: "against another person",
                    reportReason: k.b.Harm
                },
                threat_group: {
                    getTitle: function() {
                        return Object(l.d)("At a group of people", "ReportModalWizard")
                    },
                    value: "against group of people",
                    reportReason: k.b.Harm
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
                    reportReason: k.b.Prohibited
                },
                sexuallyViolent: {
                    getTitle: function() {
                        return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                    },
                    value: "sexually violent",
                    reportReason: k.b.SexualViolence
                },
                childAnimal: {
                    getTitle: function() {
                        return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                    },
                    value: "sexual conduct; child or animal",
                    reportReason: k.b.SexualViolence
                },
                pornographic: {
                    getTitle: function() {
                        return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                    },
                    value: "pornographic",
                    reportReason: k.b.SexualContent
                },
                gory: {
                    getTitle: function() {
                        return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                    },
                    value: "gory",
                    reportReason: k.b.Gore
                },
                suggestive: {
                    getTitle: function() {
                        return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                    },
                    value: "sexually suggestive",
                    reportReason: k.b.SexualContent
                },
                nudity: {
                    getTitle: function() {
                        return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                    },
                    value: "nudity",
                    reportReason: k.b.SexualContent
                },
                other: {
                    getTitle: function() {
                        return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                    },
                    value: "other",
                    reportReason: k.b.Other
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
                    reportReason: k.b.TosBanEvasion
                },
                evasion_chat: {
                    getTitle: function() {
                        return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                    },
                    value: "chat ban",
                    reportReason: k.b.ChatBanEvasion
                },
                evasion_messaging: {
                    getTitle: function() {
                        return Object(l.d)("A block from messaging me", "ReportModalWizard")
                    },
                    value: "messaging block",
                    reportReason: k.b.ChatBanEvasion
                },
                impersonation_me: {
                    getTitle: _.me,
                    value: "impersonating me",
                    reportReason: k.b.Impersonation
                },
                impersonation_brand: {
                    getTitle: function() {
                        return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                    },
                    value: "impersonating brand",
                    reportReason: k.b.Impersonation
                },
                impersonation_other: {
                    getTitle: _.someoneElse,
                    value: "impersonating someone else",
                    reportReason: k.b.Impersonation
                },
                selfharm: {
                    getTitle: function() {
                        return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                    },
                    value: "selfharm",
                    reportReason: k.b.SelfHarm
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
                    reportContext: k.a.Whisper
                },
                username: {
                    getTitle: function() {
                        return Object(l.d)("In the username", "ReportModalWizard")
                    },
                    value: "username",
                    reportReason: k.b.OffensiveUsername
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
                    reportReason: k.b.Harassment,
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
                    reportReason: k.b.Harm
                },
                external_commitingViolence: {
                    getTitle: _.commitingViolence,
                    value: "external site; committing violence",
                    reportReason: k.b.Harm
                },
                conduct_impersonation: {
                    getTitle: function() {
                        return Object(l.d)("impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: k.b.Impersonation
                },
                spam: {
                    getTitle: function() {
                        return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                    },
                    value: "spam",
                    reportReason: k.b.Spam
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
            C = function(e) {
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
                    var e = this.props.currentCard.getDescription ? a.createElement(g._8, {
                        padding: {
                            bottom: 1
                        }
                    }, this.props.currentCard.getDescription()) : null;
                    return a.createElement(g._8, {
                        className: "reporting-wizard-card"
                    }, e, a.createElement(g.W, {
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
                                return a.createElement(g._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, t.getTitle());
                            case i.Link:
                                return a.createElement(g._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, a.createElement(g.O, {
                                    to: t.value,
                                    targetBlank: !0
                                }, a.createElement(g._8, {
                                    display: g.R.Flex
                                }, a.createElement(g._8, {
                                    display: g.R.Inline,
                                    padding: {
                                        right: .5
                                    }
                                }, a.createElement(g._24, {
                                    asset: g._25.Document
                                })), t.getTitle())));
                            case i.Textarea:
                                var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                    o = t.required && (!r || !!r && 0 === r.trim().length);
                                return a.createElement(g._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, a.createElement(g.W, {
                                    label: t.getTitle(),
                                    labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                }, a.createElement(g._46, {
                                    onChange: e.onChange,
                                    rows: t.rows || 3,
                                    name: t.value,
                                    error: e.props.error && o,
                                    value: r,
                                    "data-test-selector": "report-wizard-textarea"
                                })));
                            case i.MultipleChoice:
                            default:
                                return a.createElement(g._8, {
                                    key: n,
                                    padding: {
                                        y: .5
                                    }
                                }, a.createElement(g._21, {
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
        var T, P, w, N = {
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
            D = {
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
                getTitle: D.thanks,
                type: S.Info,
                value: "end card"
            },
            R = {
                socialMedia: r.__assign({}, I, {
                    items: [O.endBlurb_socialmedia]
                }),
                violence: r.__assign({}, I, {
                    items: [O.endBlurb_threat]
                }),
                legal: {
                    getTitle: D.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                    },
                    items: [O.endLink_DMCA, O.endLink_trademark, O.endLink_devAgreement],
                    type: S.Info,
                    value: "ip end"
                },
                selfharm: {
                    getTitle: D.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                    },
                    items: [O.endLink_selfharm],
                    type: S.Info,
                    value: "selfharm end"
                },
                twitchEvent: {
                    getTitle: D.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                    },
                    items: [O.endLink_eventCoC],
                    value: "twitch event end",
                    type: S.Info
                }
            },
            x = {
                getTitle: D.report,
                getLabel: function() {
                    return Object(l.d)("Where is the problem?", "ReportModalWizard")
                },
                items: [O.video, O.whisper, O.chat, O.room, O.profile, O.username, O.report_other],
                type: S.MultipleChoice,
                value: "content type"
            },
            F = {
                identifyUser: {
                    getTitle: D.reportVideo,
                    getLabel: N.identifyUser,
                    items: [O.video_streamer, O.video_someoneElse, O.video_chatSomeone],
                    type: S.MultipleChoice,
                    value: "video identify user"
                },
                content: {
                    getTitle: D.reportVideo,
                    getLabel: N.contentGeneral,
                    items: [O.revealPersonalInfo, O.video_labeling, O.video_inactive, O.video_general, O.report_ip, O.violateDevAgreement, O.selfharm],
                    type: S.MultipleChoice,
                    value: "video report reason"
                },
                general: {
                    getTitle: D.reportVideo,
                    getLabel: N.content,
                    items: [O.report_username, O.violence, O.abusive, O.cheating, O.scam, O.inappropriateContent, O.evasion, O.impersonation, O.underage, O.bitsViolation],
                    type: S.MultipleChoice,
                    value: "video general report reason"
                }
            },
            L = {
                content: {
                    getTitle: D.reportMessage,
                    getLabel: N.contentGeneral,
                    items: [O.revealPersonalInfo, O.evasion, O.spam, O.maliciousRaid, O.report_username, O.messaging_general, O.selfharm],
                    type: S.MultipleChoice,
                    value: "message report reason"
                },
                general: {
                    getTitle: D.reportMessage,
                    getLabel: N.content,
                    items: [O.report_emotes, O.violence, O.abusive, O.inappropriateContent, O.impersonation, O.underage, O.bitsViolation],
                    type: S.MultipleChoice,
                    value: "message general report reason"
                }
            },
            j = r.__assign({}, L.content, {
                getDescription: function() {
                    return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                }
            }),
            U = {
                content: {
                    getTitle: D.reportProfile,
                    getLabel: N.contentGeneral,
                    items: [O.revealPersonalInfo, O.inappropriateBadge, O.inappropriateExtension, O.noModeration, O.profile_general, O.report_ip, O.violateDevAgreement, O.selfharm],
                    type: S.MultipleChoice,
                    value: "profile report reason"
                },
                general: {
                    getTitle: D.reportProfile,
                    getLabel: N.content,
                    items: [O.report_username, O.violence, O.abusive, O.scam, O.inappropriateContent, O.evasion, O.impersonation, O.underage, O.bitsViolation],
                    type: S.MultipleChoice,
                    value: "profile general report reason"
                }
            },
            M = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Room", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: N.identifyUser,
                items: [O.report_channelOwner, O.report_member],
                value: "room report user",
                type: S.MultipleChoice
            },
            A = {
                getTitle: D.tellUsMore,
                items: [O.input_description],
                type: S.Confirm,
                value: "tell us more"
            },
            B = {
                banEvasion: r.__assign({}, A, {
                    items: [O.input_usernames, O.input_description],
                    value: "ban evasion tell us more"
                }),
                socialMedia: r.__assign({}, A, {
                    items: [O.input_link, O.input_connection, O.input_description],
                    nextCard: R.socialMedia,
                    value: "social media tell us more"
                })
            },
            V = {
                content: {
                    getTitle: D.reportAbusive,
                    getLabel: N.relevantStatements,
                    items: [O.hateSpeech, O.harassment, O.abusiveViolence, O.commitingViolence, O.swatting, O.personalInfo],
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
                    items: [O.threat_me, O.threat_person, O.threat_group, O.threat_selfharm],
                    type: S.MultipleChoice,
                    value: "violence type"
                }
            },
            H = {
                identifyLocation: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for something else...", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                    },
                    items: [O.location_onTwitch, O.location_anotherSite, O.location_TwitchEvent],
                    type: S.MultipleChoice,
                    value: "off-site conduct location"
                },
                externalSite: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: N.thisPersonIs,
                    getDescription: function() {
                        return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                    },
                    items: [O.external_incitingRaids, O.external_threatening, O.external_harassment],
                    type: S.MultipleChoice,
                    nextCard: B.socialMedia,
                    value: "external site conduct"
                },
                external_violence: r.__assign({}, V.violence, {
                    items: [O.threat_me, O.threat_person, O.threat_group],
                    nextCard: B.socialMedia
                }),
                external_abusive: r.__assign({}, V.content, {
                    items: [O.hateSpeech, O.harassment, O.external_abusiveViolence, O.external_commitingViolence, O.swatting, O.personalInfo],
                    nextCard: B.socialMedia
                })
            },
            W = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: N.contentGeneral,
                items: [O.spam_bot, O.spam_scam, O.spam_repeated],
                type: S.MultipleChoice,
                value: "spam type"
            },
            G = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Inappropriate Content", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: N.relevantStatements,
                items: [O.inappropriate_game, O.gory, O.sexuallyViolent, O.childAnimal, O.pornographic, O.suggestive, O.nudity, O.other],
                type: S.MultipleChoice,
                value: "inappropriate content type"
            },
            z = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Evading a Ban", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: function() {
                    return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                },
                value: "ban type",
                items: [O.evasion_chat, O.evasion_sitewide, O.evasion_messaging],
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
                items: [O.impersonation_me, O.impersonation_brand, O.impersonation_other],
                type: S.MultipleChoice,
                value: "impersonation type"
            },
            Q = x,
            K = A,
            $ = I,
            Y = {
                video: F.identifyUser,
                whisper: j,
                chat: L.content,
                profile: U.content,
                room: M,
                "somewhere else": H.identifyLocation,
                streamer: F.content,
                "someone else in video": F.content,
                "someone in chat": L.content,
                general_video: F.general,
                general_messaging: L.general,
                general_profile: U.general,
                "channel owner": U.content,
                "community member": L.content,
                "on twitch": U.content,
                "another site": H.externalSite,
                "twitch event": R.twitchEvent,
                "brigading/raids": B.socialMedia,
                threatening: H.external_violence,
                "hateful/harassing": H.external_abusive,
                "external site; threatening violence": H.external_violence,
                "external site; committing violence": H.external_violence,
                "external site; scam": B.socialMedia,
                "ban evasion": z,
                spam: W,
                hateful: V.content,
                impersonation: q,
                "violence/threats": V.violence,
                "threatening violence": V.violence,
                "committing violence": V.violence,
                abusive: V.content,
                "inappropriate content": G,
                "intellectual property": R.legal,
                "violating developer agreement": R.legal
            },
            Z = {
                selfharm: R.selfharm,
                harm: R.violence,
                other: $
            },
            X = {
                CHANNEL_FEED_POST_REPORT: U.content,
                COMMUNITY_REPORT: U.content,
                CHAT_REPORT: L.content,
                CLIP_REPORT: F.content,
                EVENT_REPORT: U.content,
                EXTENSION_REPORT: U.content,
                LIVE_UP_REPORT: U.content,
                ROOM_REPORT: M,
                WHISPER_REPORT: j,
                VOD_COMMENT_REPORT: L.content
            },
            J = "report-wizard-back",
            ee = "report-wizard-close",
            te = "report-wizard-next",
            ne = "report-wizard-submit",
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentCard: t.props.currentCard || X[t.props.reportContentType] || Q,
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
                        return a.createElement(g._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(g.Q, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
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
                        return a.createElement(g._8, null, o, a.createElement(g.v, {
                            onClick: n,
                            disabled: r,
                            "data-test-selector": i
                        }, a.createElement(g._8, {
                            padding: {
                                x: 1
                            }
                        }, e)))
                    }, t.renderBack = function() {
                        return a.createElement(g._8, {
                            margin: {
                                right: 1
                            },
                            display: g.R.InlineBlock
                        }, a.createElement(g.v, {
                            type: g.B.Hollow,
                            onClick: t.handleBack,
                            "data-test-selector": J
                        }, a.createElement(g._8, {
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
                                return t.trackNavigation(P.Next, e.value)
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
                                                i = $, Z[t] && (i = Z[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                    currentCard: i,
                                                    prevCards: [],
                                                    prevSelections: [],
                                                    currentSelection: null,
                                                    displacedSelections: [],
                                                    userTextInput: {},
                                                    error: ""
                                                }, function() {
                                                    return a.trackNavigation(P.Submit)
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
                                    return o.trackNavigation(P.Back, e.value)
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
                    var e = this.state.currentCard.type === S.Info && this.state.currentCard.blockPrompt ? a.createElement(y, {
                            targetUser: this.props.targetUser,
                            onBlock: this.props.onBlock,
                            onUnblock: this.props.onUnblock,
                            userBlocked: this.props.userBlocked
                        }) : null,
                        t = this.state.error ? a.createElement(g._35, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            padding: 1,
                            className: "reporting__error-container"
                        }, this.state.error) : null,
                        n = this.state.prevCards.length || this.state.currentCard.type === S.Info ? null : this.renderPrimer();
                    return a.createElement(g._35, {
                        className: "reporting-wizard",
                        display: g.R.Flex,
                        margin: {
                            x: 1
                        },
                        flexDirection: g.T.Column,
                        fullHeight: !0,
                        "data-test-card-value": this.state.currentCard.value
                    }, t, a.createElement(g.Q, {
                        bold: !0,
                        fontSize: g.V.Size4
                    }, this.getTitle()), n, a.createElement(g._8, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(C, {
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
                return P
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "b", function() {
                return ce
            }),
            function(e) {
                e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(T || (T = {})),
            function(e) {
                e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(P || (P = {})),
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
                                    return r.sent(), l.o.tracking.track(f.SpadeEventType.CommunityModeration, {
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
                                        u.state.showWizard || u.trackAction(T.Submit)
                                    }), [3, 4];
                                case 3:
                                    return n = r.sent(), l.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                        submitStatus: E.b.MutationError
                                    }), [3, 4];
                                case 4:
                                    return [3, 9];
                                case 5:
                                    if (s = o === k.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                            description: t,
                                            reason: e,
                                            content: s,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === k.a.Community && this.props.reportContext.extra && (c.description = Object(re.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                        submitStatus: E.b.UserError
                                    }), [2];
                                    r.label = 6;
                                case 6:
                                    return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                case 7:
                                    return r.sent(), this.props.reportContext.contentType === k.a.Community && l.o.tracking.track(f.SpadeEventType.CommunityReport, {
                                        community_id: this.props.reportContext.contentID,
                                        name: this.props.reportContext.extra,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        reason: e
                                    }), this.setState({
                                        submitStatus: E.b.Success
                                    }, function() {
                                        u.state.showWizard || u.trackAction(T.Submit)
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
                    n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(P.Open, void 0, e) : n.trackAction(T.Open), n.setState({
                        openEventSent: !0
                    }))
                }, n.trackClose = function(e, t) {
                    n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(P.Close, t, void 0, e) : n.trackAction(T.Close), n.setState({
                        closeEventSent: !0
                    }))
                }, n.trackWizardAction = function(e, t, i, r) {
                    l.o.tracking.track(f.SpadeEventType.ReportWizardFlowAction, {
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
                    l.o.tracking.track(f.SpadeEventType.ReportFlowAction, {
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
                return this.state.showWizard ? this.props.data.loading ? a.createElement(g._10, null) : a.createElement(ie, r.__assign({}, e, {
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
        }), Object(h.d)("ReportUser", {
            autoReportInteractive: !0
        }), Object(d.a)(), Object(u.a)(), Object(o.b)(function(e) {
            return {
                sessionUser: e.session.user
            }
        }, null))(le)
    },
    AGQo: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3");
        ! function(e) {
            e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
        }(i || (i = {}));
        var o = 200,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.hoverTimer = 0, t.onMouseEnter = function(e) {
                        t.clearTimeout(), t.hoverTimer = setTimeout(function() {
                            t.props.onHover && t.props.onHover(e)
                        }, o)
                    }, t.onMouseLeave = function() {
                        t.clearTimeout()
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.clearTimeout()
                    }, t.clearTimeout = function() {
                        t.hoverTimer && (clearTimeout(t.hoverTimer), t.hoverTimer = 0)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": i.PrimeTrackingButtonWrapper,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, this.props.children)
                }, t
            }(a.Component);
        n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return s
        })
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
    Bir6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
    },
    CBaN: function(e, t) {},
    CFVp: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (!l) {
                var e = [],
                    t = {};
                Object.keys(a).forEach(function(n) {
                    var i = d(n, a[n]);
                    e.push(i), t[n.toLowerCase()] = i
                }), l = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return l
        }, t.b = function() {
            c || (c = function(e) {
                if (l) return l.indexedActions[e.toLowerCase()];
                return d(e, a[e])
            }("Cheer"));
            return c
        };
        var i = n("I89S"),
            r = n("3iBR"),
            a = {
                Cheer: r.d,
                Kreygasm: r.d,
                Kappa: r.d,
                Muxy: r.e,
                Streamlabs: r.e,
                SwiftRage: r.d,
                VoHiYo: r.d
            },
            o = ["LIGHT", "DARK"],
            s = [1, 1.5, 2, 3, 4],
            l = null;
        var c = null;

        function d(e, t) {
            var n = [i.a.Red, i.a.Blue, i.a.Green, i.a.Purple, i.a.Gray],
                r = new Map,
                a = [];
            if ("Cheer" === e) {
                var o = u(e, i.a.Yellow);
                r.set(i.a.Yellow, o), a.push(o)
            }
            return a.push.apply(a, n.map(function(t) {
                var n = u(e, t);
                return r.set(t, n), n
            })), {
                prefix: e,
                type: t,
                tiers: a,
                orderedTiers: a,
                indexedTiers: r
            }
        }

        function u(e, t) {
            for (var n = [], i = {}, a = 0, l = o; a < l.length; a++)
                for (var c = l[a], d = 0, u = s; d < u.length; d++) {
                    var m = u[d];
                    i[c] || (i[c] = {
                        animated: new Map,
                        static: new Map
                    });
                    var f = p(e, c, !0, t, m);
                    n.push(f), i[c].animated.set(m, f.url);
                    var h = p(e, c, !1, t, m);
                    n.push(h), i[c].static.set(m, h.url)
                }
            return {
                id: e + ";" + t,
                canCheer: t <= r.k,
                bits: t,
                color: r.f[t],
                images: n,
                indexedImages: i
            }
        }

        function p(e, t, n, i, r) {
            var a = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: r,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + r + "." + a
            }
        }
    },
    CwIZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), t.b = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n, l, c, d, u, p, m, f, h, g, b, v;
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
                            })), f = u && u.self, h = f ? !!f.subscriptionBenefit : null, g = f && f.subscriptionBenefit && f.subscriptionBenefit.purchasedWithPrime || !1, b = f ? f.canPrimeSubscribe : null, v = {
                                action: e.action,
                                can_subscribe: b,
                                channel: e.channelLogin,
                                channel_id: e.channelID,
                                checkout_button_tier: e.checkoutButtonTier,
                                has_sub_credit: e.hasSubCredit,
                                host_channel: e.hostChannelLogin,
                                host_channel_id: e.hostChannelID,
                                is_menu_open: e.isMenuOpen,
                                is_subscribed: h,
                                is_subscribed_current_tier: f && f.subscriptionBenefit && f.subscriptionBenefit.tier,
                                sub_location: e.sub_location,
                                sub_recipient: e.giftRecipient,
                                modal: e.modal,
                                modal_level: e.modalLevel || "",
                                show_prime_content: e.showPrimeContent,
                                show_resub: u ? b && g : null,
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
    D9gI: function(e, t) {},
    "DgR+": function(e, t) {},
    DkK3: function(e, t) {},
    DquS: function(e, t) {},
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
    GHQc: function(e, t) {},
    GSZ7: function(e, t, n) {
        "use strict";
        t.b = function() {
            return i.b.get("gdpr_consent_enabled", !1)
        }, t.a = function() {
            return i.b.get("gdpr_disabled_eea_consent", !1)
        };
        var i = n("6sO2")
    },
    "Gso+": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
            }(i || (i = {}))
    },
    HKIP: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsEditClipInfo"
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
                                    value: "isPublished"
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
            body: "query ClipsEditClipInfo($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\ndisplayName\n}\ncurator {\nid\nlogin\n}\nisPublished\ncreatedAt\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
                l.error(e, "Could not decode location pathname substring for redirect")
            }
            return r ? n + "?ref_=" + e + "&redirectRoute=" + r : n + "?ref_=" + e
        };
        var i = n("6sO2"),
            r = "sm_tw_tup_ntp_t_all",
            a = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            l = i.j.withCategory("PrimeUtilsLogger")
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
    JJaH: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("3zLD"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("vBst"),
            d = n("oIkB"),
            u = n("CSlQ"),
            p = n("CwIZ"),
            m = n("8PKe"),
            f = n("Kckk"),
            h = n("Odds"),
            g = n("iQti");
        ! function(e) {
            e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
        }(i || (i = {}));
        var b = n("81fF");
        n.d(t, "a", function() {
            return k
        });
        var v = "subscribe-button__prime-subscribe",
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !1,
                        error: void 0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: p.a.ClickSignupForPrime
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || f.b.UNABLE_TO_SPEND
                    }, t.spendPrimeCredit = function() {
                        t.setState({
                            isSubscribing: !0
                        });
                        var e = t.props,
                            n = e.data;
                        if (t.isUserDataReady(e) && n.currentUser && n.currentUser.id && n.user && n.user.id) {
                            var r = n.user.id,
                                a = n.currentUser.id,
                                o = Object(d.a)({
                                    broadcasterID: r,
                                    userID: a
                                });
                            t.props.spendPrimeSubscriptionCredit(o).then(function(e) {
                                var n = ((e.data || {}).spendSubscriptionCredit || {}).error;
                                if (n) {
                                    var r = f.b[n.code];
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !0,
                                        error: r || f.b.UNABLE_TO_SPEND
                                    })
                                } else {
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !1,
                                        error: void 0
                                    });
                                    Object(d.e)(b, {
                                        login: t.props.channelLogin
                                    }, function(e) {
                                        var t = e.user;
                                        return t && t.self && t.id && (t.self.subscriptionBenefit || (t.self.subscriptionBenefit = {
                                            __typename: "SubscriptionBenefit",
                                            id: t.id,
                                            purchasedWithPrime: !0,
                                            tier: c.a.Prime,
                                            platform: i.WEB,
                                            gift: {
                                                __typename: "SubscriptionGift",
                                                isGift: !1,
                                                gifter: null
                                            },
                                            renewsAt: null,
                                            endsAt: null,
                                            paidUpgrade: null
                                        }), t.self.canPrimeSubscribe = !1), e
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    isSubscribing: !1,
                                    primeSubFailure: !0,
                                    error: f.b.UNABLE_TO_SPEND
                                })
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.state.isSubscribing) return a.createElement(h.v, r.__assign({
                        "data-test-selector": v,
                        disabled: this.state.isSubscribing,
                        icon: h._25.Crown,
                        state: h.A.Loading
                    }, Object(h._63)(this.props)));
                    if (this.state.primeSubFailure) {
                        var e = this.getErrorType();
                        return a.createElement(m.b, {
                            fontSize: h.V.Size6,
                            testTarget: "prime-sub-error",
                            errorType: e
                        })
                    }
                    if (!this.isUserDataReady(this.props)) return a.createElement(h._14, {
                        width: 82,
                        height: 30
                    });
                    var t = this.canPrimeSubscribe(this.props),
                        n = this.canResub(this.props);
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var i = Object(s.d)("Start Your Free Trial", "PrimeSubscribe");
                        return a.createElement(h.v, r.__assign({
                            ariaLabel: i,
                            "data-test-selector": v,
                            icon: h._25.Crown,
                            linkTo: s.a.tryPrimeURI,
                            onClick: this.handleStartPrimeTrialClick
                        }, Object(h._63)(this.props), {
                            targetBlank: !0
                        }), i)
                    }
                    if (this.isSubscribed(this.props) && !n) {
                        var o = Object(s.d)("Subscribed", "PrimeSubscribe");
                        return a.createElement(h.v, r.__assign({
                            ariaLabel: o,
                            "data-test-selector": v,
                            disabled: !0,
                            icon: h._25.Crown
                        }, Object(h._63)(this.props)), o)
                    }
                    if (!t) {
                        var l = Object(s.d)("Not yet!", "PrimeSubscribe");
                        return a.createElement(h.v, r.__assign({
                            ariaLabel: l,
                            "data-test-selector": v,
                            disabled: !0,
                            icon: h._25.Crown
                        }, Object(h._63)(this.props)), l)
                    }
                    var c = n ? Object(s.d)("Resubscribe Free", "PrimeSubscribe") : Object(s.d)("Subscribe Free", "PrimeSubscribe");
                    return a.createElement(h.v, r.__assign({
                        ariaLabel: c,
                        "data-test-selector": v,
                        disabled: this.state.isSubscribing,
                        icon: h._25.Crown,
                        state: this.state.isSubscribing ? h.A.Loading : h.A.Default,
                        onClick: this.spendPrimeCredit
                    }, Object(h._63)(this.props)), c)
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.canPrimeSubscribe = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.canPrimeSubscribe
                }, t.prototype.canResub = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && e.data.user.self.subscriptionBenefit.purchasedWithPrime && this.canPrimeSubscribe(this.props)
                }, t.prototype.isSubscribed = function(e) {
                    var t = e.data,
                        n = t && t.user,
                        i = n && n.self;
                    return i && i.subscriptionBenefit
                }, t
            }(a.Component),
            k = Object(o.compose)(Object(u.d)("PrimeSubscribe"), Object(l.a)(b, {
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
            }), Object(l.a)(g, {
                name: "spendPrimeSubscriptionCredit"
            }))(y)
    },
    Jbgd: function(e, t) {},
    Jg0G: function(e, t) {},
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
    Kckk: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return u
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "b", function() {
            return m
        }), n.d(t, "g", function() {
            return f
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, "j", function() {
            return h
        }), n.d(t, "h", function() {
            return g
        }), n.d(t, "i", function() {
            return b
        }), n.d(t, "m", function() {
            return v
        }), n.d(t, "o", function() {
            return y
        }), n.d(t, "n", function() {
            return S
        }), n.d(t, "f", function() {
            return _
        }), n.d(t, "l", function() {
            return O
        }), n.d(t, "k", function() {
            return C
        });
        var i, r, a = n("HW6M"),
            o = (n.n(a), n("OAwv")),
            s = (n.n(o), n("GiK3")),
            l = (n.n(s), n("F8kA")),
            c = n("6sO2"),
            d = n("S1vB"),
            u = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(i || (i = {})),
        function(e) {
            e.Crown = "Crown", e.LootPage = "LootPage"
        }(r || (r = {}));
        var p, m = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
            },
            f = function(e) {
                switch (e || m.UNKNOWN_ERROR) {
                    case m.OFFER_ALREADY_CLAIMED:
                        return Object(c.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click {learnMoreLink}.", {
                            learnMoreLink: s.createElement(l.a, {
                                to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                target: "_blank",
                                className: "prime-error__link",
                                "data-a-target": "prime-error_link"
                            }, "here to learn more")
                        }, "PrimeError");
                    case m.UNABLE_TO_SPEND:
                    case m.TOO_MANY_RECENT_SPENDS:
                    default:
                        return Object(c.d)("Something has gone wrong. Please try again later.", "PrimeError")
                }
            };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(p || (p = {}));
        var h = function(e) {
                return e === i.Vertical
            },
            g = function(e, t) {
                var n = t === i.Horizontal ? "horizontal" : "vertical";
                return a(e, e + "--" + n)
            },
            b = function() {
                return k("seenOffers")
            },
            v = function(e) {
                c.l.set("seenOffers", e)
            },
            y = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            k = function(e) {
                return c.l.get(e, [])
            },
            S = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(d.a)(t))
            },
            _ = function() {
                var e = location.search,
                    t = o.parse(e);
                return t && t.dateOverride || void 0
            },
            O = function(e) {
                return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
            },
            C = function(e) {
                return e && e.loading
            }
    },
    Ks2M: function(e, t) {},
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
    LXDe: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
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
            f = Object(o.d)(Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            }), Object(c.d)("ReportReasonSelect"))(m),
            h = (n("I4TS"), n("1EXI"));
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "c", function() {
            return y
        });
        var g, b = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
        }(g || (g = {}));
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
                            if (t.state.reason === b && !t.state.selectedCommunityID) {
                                if (t.props.data.user && !t.props.data.user.directories.nodes.length) return void t.props.onError(g.CommunityError);
                                t.props.onError(g.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(g.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories ? t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }) : [];
                        n.length && e === b ? t.setState({
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
                    return this.props.submitStatus === g.Success ? a.createElement("div", null, a.createElement(u.v, {
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
                    }, a.createElement(f, {
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
                        case g.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        case g.UserError:
                            e = Object(s.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case g.CommunityError:
                            e = Object(s.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return a.createElement(u._35, {
                        className: t,
                        fullWidth: this.props.submitStatus !== g.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component),
            y = Object(o.d)(Object(l.a)(h, {
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
    Lpko: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("TToO"),
            a = n("GiK3"),
            o = n("3zLD"),
            s = n("6sO2"),
            l = n("zCIC"),
            c = n("7vx8"),
            d = n("CSlQ"),
            u = n("Odds"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: a.createElement(u.Q, {
                            italic: !0,
                            type: u._49.Span
                        }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                        smite: a.createElement(u.Q, {
                            italic: !0,
                            type: u._49.Span
                        }, Object(s.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return a.createElement(u._8, {
                        className: "prime-empty",
                        margin: 2
                    }, a.createElement(u._8, {
                        textAlign: u._45.Center,
                        margin: 2
                    }, a.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), a.createElement(u.Q, {
                        type: u._49.P,
                        bold: !0
                    }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                }, t
            }(a.Component),
            m = Object(d.d)("PrimeEmpty", {
                autoReportInteractive: !0
            })(p),
            f = n("lfvs"),
            h = n("oIkB"),
            g = n("AGQo"),
            b = n("Tr7p"),
            v = n("Kckk"),
            y = (n("w/8h"), n("sq7i")),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(b.e)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== v.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                    }, t.onHover = function() {
                        Object(b.f)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = v.j(e),
                        n = v.h("prime-claim-button", e);
                    return a.createElement(u._8, {
                        fullWidth: !0,
                        className: n,
                        display: t ? u.R.Block : u.R.InlineBlock
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = e.externalURL,
                        n = e.claiming,
                        i = e.offerType,
                        r = this.getButtonText();
                    if (t || i === v.e.EXTERNAL_OFFER) return a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        fullWidth: !0,
                        linkTo: t,
                        targetBlank: !0,
                        onClick: this.onClick
                    }, r));
                    var o = a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        fullWidth: !0,
                        state: n ? u.A.Loading : u.A.Default,
                        disabled: n,
                        linkTo: t,
                        onClick: this.onClick,
                        "data-a-target": "prime-claim-button"
                    }, r));
                    return a.createElement(u._8, {
                        position: u._15.Relative
                    }, o)
                }, t.prototype.getButtonText = function() {
                    var e = Object(s.d)("Learn More", "PrimeClaimButton");
                    if (this.props.externalURL) return e;
                    switch (this.props.offerType) {
                        case v.e.CLAIM_CODE:
                            return Object(s.d)("Get Code", "PrimeClaimButton");
                        case v.e.EXTERNAL_OFFER:
                            return e;
                        case v.e.DIRECT_ENTITLEMENT:
                        default:
                            return Object(s.d)("Claim Offer", "PrimeClaimButton")
                    }
                }, t
            }(a.Component),
            S = Object(o.compose)(Object(c.a)(y), Object(d.d)("PrimeClaimButton"))(k),
            _ = (n("zAvr"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        var e = !n.state.showDescription;
                        Object(b.h)(e, {
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }), n.setState({
                            showDescription: e
                        })
                    }, n.onHover = function() {
                        n.state.showDescription ? Object(b.g)({
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }) : Object(b.i)({
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        })
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.h)("prime-claim-description", e);
                    return a.createElement(u._8, {
                        fullWidth: !0,
                        className: t,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        "data-a-target": "prime-claim-description-button",
                        fullWidth: !0,
                        type: u.B.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function(e) {
                    var t = null,
                        n = Object(v.j)(e);
                    return this.state.showDescription && (t = a.createElement(u._35, {
                        className: "prime-claim-description__body",
                        background: n ? u.n.Alt2 : u.n.Base,
                        border: !0,
                        position: n ? u._15.Relative : u._15.Absolute
                    }, a.createElement(u._8, {
                        "data-a-target": "prime-claim-description-body",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, a.createElement(f, {
                        source: this.props.description || ""
                    })))), t
                }, t
            }(a.Component)),
            O = Object(d.d)("PrimeClaimDescription", {
                autoReportInteractive: !0
            })(_),
            C = n("Hs3O"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        Object(b.l)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t.onHover = function() {
                        Object(b.m)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u._8, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onClick
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                }, t.prototype.getLink = function() {
                    if (this.props.externalURL) return this.props.externalURL;
                    var e = this.props.externalReftag || C.c;
                    return Object(C.d)(e, window.location.pathname.substring(1))
                }, t
            }(a.Component),
            T = Object(d.d)("PrimeUpsellButton", {
                autoReportInteractive: !0
            })(E),
            P = n("4VmI"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.h)("prime-claim", e);
                    return a.createElement(u._8, {
                        className: t,
                        margin: {
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return Object(v.l)(e) ? a.createElement(S, {
                        offerType: this.props.offerType,
                        offerID: this.props.offerID,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        orientation: this.props.orientation,
                        externalURL: this.props.externalURL,
                        index: this.props.index
                    }) : a.createElement(T, {
                        externalReftag: this.props.externalReftag,
                        externalURL: this.props.externalURL,
                        offerID: this.props.offerID,
                        index: this.props.index
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    if (this.props.offerType === v.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                    var e = this.props.data;
                    return a.createElement(O, {
                        description: this.props.offerDescription,
                        offerID: this.props.offerID,
                        externalURL: this.props.externalURL,
                        index: this.props.index,
                        orientation: this.props.orientation,
                        hasPrime: Object(v.l)(e)
                    })
                }, t
            }(a.Component),
            N = Object(o.compose)(Object(c.a)(P), Object(d.d)("PrimeInstructions"))(w),
            D = n("dnng"),
            I = n("2KeS"),
            R = (n("nFc2"), function(e) {
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
                    return a.createElement(u._8, {
                        className: "copy-button copy-btn",
                        display: u.R.Flex,
                        "data-test-target": "copy-button"
                    }, a.createElement(u._2, {
                        className: "copy-button__btn"
                    }, a.createElement(u.v, {
                        onClick: this.copy,
                        type: this.state.copied ? u.B.Success : u.B.Default
                    }, e)), a.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t
            }(a.Component)),
            x = Object(I.d)(Object(d.d)("CopyButton"))(R),
            F = function(e) {
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
                    return this.state && this.state.value ? a.createElement(u._8, {
                        className: "copyable-item",
                        display: u.R.Flex,
                        flexGrow: 1
                    }, a.createElement(u._8, {
                        flexGrow: 1
                    }, a.createElement(u._4, {
                        type: u._5.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), a.createElement(u._8, null, a.createElement(x, {
                        clipboardText: this.state.value
                    }))) : null
                }, t
            }(a.Component),
            L = Object(I.d)(Object(d.d)("CopyableItem"))(F),
            j = (n("yqdF"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getClaimInstructions = function() {
                        return a.createElement(u._58, null, a.createElement(f, {
                            source: n.props.claimInstructions || "",
                            escapeHtml: !0,
                            renderers: {
                                Link: function(e) {
                                    return a.createElement("a", {
                                        href: e.href,
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer"
                                    }, e.children)
                                }
                            }
                        }))
                    }, n.renderVerticalLayout = function() {
                        return a.createElement(u._35, {
                            className: "prime-claim-instructions prime-claim-instructions--vertical",
                            background: u.n.Alt2,
                            border: !0,
                            padding: 1,
                            fontSize: u.V.Size6
                        }, n.getClaimInstructions())
                    }, n.renderHorizontalLayout = function() {
                        return a.createElement(u._35, {
                            fullWidth: !0,
                            className: "prime-claim-instructions prime-claim-instructions--horizontal",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(u.v, {
                            fullWidth: !0,
                            type: u.B.Text,
                            onClick: n.toggleShowDescription
                        }, n.getDescriptionButtonText()), n.state.showDescription && a.createElement(u._35, {
                            className: "prime-claim-instructions__body",
                            border: !0,
                            position: u._15.Absolute,
                            padding: 1,
                            background: u.n.Alt,
                            overflow: u._11.Scroll
                        }, n.getClaimInstructions()))
                    }, n.toggleShowDescription = function() {
                        n.setState({
                            showDescription: !n.state.showDescription
                        })
                    }, n.getDescriptionButtonText = function() {
                        return n.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimInstruction") : Object(s.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default;
                    return Object(v.j)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t
            }(a.Component)),
            U = Object(d.d)("PrimeClaimInstructions", {
                autoReportInteractive: !0
            })(j),
            M = (n("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(U, {
                            claimInstructions: t.props.claimInstructions || "",
                            orientation: t.props.orientation
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.h)("prime-redeem", e);
                    return a.createElement(u._8, {
                        className: t
                    }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function(e) {
                    var t = Object(v.j)(e);
                    if (this.props.code && this.props.deliveryMethod === v.e.CLAIM_CODE) return a.createElement(u._8, null, a.createElement(L, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    }));
                    var n = t ? 1 : 0;
                    return a.createElement(u._35, {
                        display: u.R.Flex,
                        justifyContent: u._7.Center,
                        margin: {
                            bottom: n
                        },
                        padding: {
                            y: n
                        },
                        className: "prime-redeem__confirmation"
                    }, a.createElement(u.Q, {
                        type: t ? u._49.H4 : u._49.H6,
                        align: u._59.Middle,
                        color: u.K.Overlay
                    }, a.createElement(u._8, {
                        display: u.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: u.U.NoWrap,
                        alignItems: u.c.Center,
                        "data-test-target": "prime-redeem-check",
                        "data-a-target": "prime-redeem-check",
                        padding: {
                            left: n
                        }
                    }, a.createElement(u._8, {
                        margin: {
                            right: 1
                        },
                        display: u.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: u.U.NoWrap,
                        padding: {
                            y: .5
                        },
                        alignItems: u.c.Center
                    }, a.createElement(u._24, {
                        asset: u._25.Check,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t
            }(a.Component)),
            A = Object(d.d)("PrimeRedeem", {
                autoReportInteractive: !0
            })(M),
            B = n("/3Cb"),
            V = (n("v+rJ"), "prime-offer__video"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: void 0,
                        claimData: void 0,
                        status: void 0
                    }, t.renderVerticalLayout = function(e) {
                        var n = t.props.isLast || !1,
                            i = e.content || {},
                            r = i.game || {},
                            o = i.categories || [];
                        return a.createElement(u._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--vertical",
                            alignItems: u.c.Center,
                            display: u.R.Block,
                            borderBottom: !n,
                            textAlign: u._45.Left,
                            position: u._15.Relative,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, a.createElement(u._8, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            },
                            alignItems: u.c.Start
                        }, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), t.renderOfferImageOrVideo(e.imageURL), a.createElement(u._35, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u._8, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, a.createElement(u.Q, {
                            type: u._49.P
                        }, r.name, " ", o[0])), a.createElement(u._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(u.Q, {
                            type: u._49.P,
                            color: u.K.Alt2,
                            fontSize: u.V.Size7
                        }, i.publisher))), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderHorizontalLayout = function(e) {
                        var n = e.content || {},
                            i = n.game || {},
                            r = n.categories || [];
                        return a.createElement(u._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--horizontal",
                            alignItems: u.c.Center,
                            display: u.R.InlineBlock,
                            textAlign: u._45.Left,
                            position: u._15.Relative,
                            padding: {
                                right: 1,
                                y: .5
                            }
                        }, a.createElement(u._35, {
                            className: "prime-offer__content",
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u._35, {
                            className: "prime-offer__content__text",
                            background: u.n.Base
                        }, a.createElement(u._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(u.Q, {
                            type: u._49.P,
                            color: u.K.OverlayAlt,
                            fontSize: u.V.Size7,
                            transform: u._48.Uppercase
                        }, n.publisher)), a.createElement(u._8, {
                            className: "prime-offer__title",
                            alignItems: u.c.Start
                        }, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), a.createElement(u._8, {
                            className: "prime-offer__description"
                        }, a.createElement(u.Q, {
                            type: u._49.P,
                            color: u.K.Alt2
                        }, i.name, " ", r[0]))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderOfferImageOrVideo = function(e) {
                        var n = t.getExtensionFromURL(e),
                            i = /iPhone.*Mobile|iPod|iPad/.test(navigator.userAgent);
                        return "mp4" === n ? a.createElement("video", {
                            ref: function(e) {
                                t.offerVideo = e || void 0
                            },
                            preload: "auto",
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            controls: i,
                            "data-test-selector": V
                        }, a.createElement("source", {
                            src: e,
                            type: "video/mp4"
                        })) : a.createElement("img", {
                            src: e
                        })
                    }, t.getExtensionFromURL = function(e) {
                        if (!e) return e;
                        var t = e.split(".");
                        return t[t.length - 1]
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            r = t.props.data || {};
                        if (t.state.error) {
                            var o = t.getErrorType();
                            return a.createElement(D.a, {
                                fontSize: u.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if (!n.externalURL && (t.isCurrentOfferClaimed(e) || t.state.claimed) && Object(v.l)(r)) {
                            var s = t.state.claimData || i.claimData;
                            return a.createElement(A, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod,
                                orientation: t.props.orientation
                            })
                        }
                        return a.createElement(N, {
                            offerID: e.id,
                            offerDescription: e.description,
                            offerType: e.deliveryMethod,
                            externalReftag: t.props.externalReftag,
                            externalURL: n.externalURL,
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming,
                            index: t.props.index,
                            orientation: t.props.orientation
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || v.b.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser && n.currentUser.id) {
                            var i = t.props.offer,
                                r = Object(h.a)({
                                    offerID: i.id
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = (e.data || {}).claimPrimeOffer || {},
                                    r = n.self || {},
                                    a = n.error || {};
                                if (r && r.hasEntitlement && i && t.setState({
                                        claimData: r.claimData,
                                        claiming: !1,
                                        claimed: !0,
                                        error: void 0
                                    }), a && a.code) {
                                    var o = v.b[a.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: o || v.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: v.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive(), this.offerVideo && this.offerVideo.play()
                }, t.prototype.render = function() {
                    var e = this.props.offer;
                    if (e) {
                        var t = this.props.orientation || v.c.Default;
                        return v.j(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement
                }, t
            }(a.Component),
            W = Object(o.compose)(Object(c.a)(P, {
                name: "data"
            }), Object(c.a)(B, {
                name: "claimPrimeOffer"
            }), Object(d.d)("PrimeOffer"))(H),
            G = (n("WC9X"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.j)(e);
                    return a.createElement(u._35, {
                        className: "prime-offer-placeholder",
                        alignItems: u.c.Center,
                        borderBottom: t,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: t ? u.R.Block : u.R.InlineBlock,
                        fullWidth: !0
                    }, a.createElement(u._8, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, a.createElement(u._14, {
                        height: 20
                    })), a.createElement(u._14, {
                        height: 160
                    }), a.createElement(u._8, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, a.createElement(u._14, {
                        height: 20,
                        width: 160
                    })), a.createElement(u._8, {
                        className: "prime-offer-placeholder__publisher"
                    }, a.createElement(u._14, {
                        height: 20,
                        width: 80
                    })), a.createElement(u._8, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(u._14, {
                        height: 40
                    })))
                }, t
            }(a.Component)),
            z = Object(d.d)("PrimeOfferPlaceholder", {
                autoReportInteractive: !0
            })(G),
            q = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u._35, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: u.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, a.createElement(u.Q, {
                        type: u._49.H4
                    }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(u._8, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: u._45.Center
                    }, a.createElement(u._24, {
                        asset: u._25.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: u._26.Brand
                    })), a.createElement(u.Q, {
                        type: u._49.P
                    }, Object(s.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(T, null))
                }, t
            }(a.Component)),
            Q = Object(d.d)("PrimeUpsell", {
                autoReportInteractive: !0
            })(q),
            K = n("LXDe"),
            $ = n("eY4D"),
            Y = (n("DgR+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDesktopOffers = function(e) {
                        return a.createElement(u._8, {
                            className: "prime-offer-list__content--desktop"
                        }, t.renderSectionTitle(), a.createElement(u._55, {
                            childWidth: u._56.Large,
                            gutterSize: u._57.Small,
                            center: !0,
                            placeholderItems: 20
                        }, e))
                    }, t.renderSectionTitle = function() {
                        return t.props.sectionTitle && a.createElement(u._8, {
                            padding: {
                                top: 1
                            },
                            className: "prime-offers__title"
                        }, a.createElement(u.Q, {
                            type: u._49.H3,
                            color: u.K.Base,
                            bold: !0
                        }, t.props.sectionTitle))
                    }, t.renderMobileOffers = function(e) {
                        return a.createElement(u._8, {
                            className: "prime-offer-list__content--mobile"
                        }, t.renderSectionTitle(), e)
                    }, t.getOfferListOrientation = function() {
                        return t.props.listDirection || v.c.Default
                    }, t.getHiddenOfferIdsByPlacement = function(e) {
                        switch (e) {
                            case v.d.Crown:
                                return s.b.get("prime-crown-hidden-ids", []);
                            case v.d.LootPage:
                                return s.b.get("prime-loot-page-hidden-ids", []);
                            default:
                                return []
                        }
                    }, t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData;
                        return !e || e.loading
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], n = 0; n < 3; ++n) {
                            var i = a.createElement(z, {
                                key: n,
                                orientation: t.getOfferListOrientation()
                            });
                            e.push(i)
                        }
                        return e
                    }, t.shouldReportInteractive = function() {
                        return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getOfferListOrientation(),
                        t = e.toLowerCase(),
                        n = Object(v.h)("prime-offer-list", e),
                        i = "prime-offer-list__content prime-offer-list__content--" + t,
                        r = this.props.listDirection === v.c.Horizontal,
                        o = this.props.listDirection === v.c.Vertical,
                        s = this.renderOfferExperience();
                    return a.createElement(l.b, {
                        className: n,
                        suppressScrollX: o,
                        suppressScrollY: r
                    }, a.createElement(u._8, {
                        className: i,
                        alignItems: u.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 1
                        }
                    }, this.renderUpsell(), this.props.listDirection === v.c.Horizontal && this.renderDesktopOffers(s), this.renderMobileOffers(s)))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!Object(v.k)(e) && !Object(v.l)(e) && !this.props.hideUpsell) return a.createElement(Q, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (t.primeOffers && t.primeOffers.length) {
                        var n = this.getSortedOffers(),
                            i = n[n.length - 1];
                        return n.map(function(t, n) {
                            return a.createElement(W, {
                                externalReftag: e.props.externalReftag,
                                key: t.id,
                                offer: t,
                                isLast: i.id === t.id,
                                index: n,
                                orientation: e.getOfferListOrientation()
                            })
                        })
                    }
                    return a.createElement(m, null)
                }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                    return s.b.get("prime_free_game_offerids", [])
                }, t.prototype.getSortedOffers = function() {
                    var e = this,
                        t = this.getUserId();
                    if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                    var n = this.props.offersData.primeOffers,
                        i = this.getHiddenOfferIdsByPlacement(this.props.placement),
                        r = n.filter(function(e) {
                            return !i.includes(e.id)
                        });
                    if (t) {
                        var a = r.filter(function(t) {
                                return !e.offerHasExternalURL(t) && t.self && t.self.hasEntitlement
                            }).sort(v.o),
                            o = this.filterOffersByOfferType(a),
                            s = r.filter(function(t) {
                                return e.offerHasExternalURL(t) || !t.self || !t.self.hasEntitlement
                            }).sort(v.o);
                        return this.filterOffersByOfferType(s).concat(o)
                    }
                    return this.filterOffersByOfferType(r).slice().sort(v.o)
                }, t.prototype.offerHasExternalURL = function(e) {
                    var t = e && e.content;
                    return t && t.externalURL
                }, t.prototype.filterOffersByOfferType = function(e) {
                    var t = this.getFreeGamesWithPrimeOfferIds();
                    return this.props.offerFilterType === K.a.Game ? e.filter(function(e) {
                        return t.includes(e.id)
                    }).sort(v.o) : this.props.offerFilterType === K.a.InGameLoot ? e.filter(function(e) {
                        return !t.includes(e.id)
                    }).sort(v.o) : e
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, Object.defineProperty(t.prototype, "isUserDataLoading", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isUserDataError", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataError", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component)),
            Z = Object(o.compose)(Object(c.a)($, {
                name: "offersData",
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(v.f)()
                        }
                    }
                },
                skip: function(e) {
                    return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                }
            }), Object(c.a)(P, {
                name: "userData",
                skip: function(e) {
                    return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                }
            }), Object(d.d)("PrimeOfferList"))(Y);
        var X = Object(i.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(Z);
        n.d(t, "a", function() {
            return X
        })
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
                        f = a.numericFilters;
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, c, p, h, g, b = this;
                        return i.__generator(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    switch (r = {
                                        id: n,
                                        currentPage: l
                                    }, a = function(e) {
                                        return i.__awaiter(b, void 0, void 0, function() {
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
                                                                numericFilters: f || e.singleTypeNumericFilters,
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
                                    return h = r, [4, a(d.videos)];
                                case 8:
                                    return h.videos = v.sent(), [3, 12];
                                case 9:
                                    return g = r, [4, a(d.communities)];
                                case 10:
                                    return g.communities = v.sent(), [3, 12];
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
                        n = "";
                    if (t && t.videoQualities) {
                        var i = t.videoQualities[0];
                        n = i.sourceURL
                    }
                    var r = this.props,
                        a = r.broadcasterId,
                        c = r.broadcasterLogin,
                        u = r.forceShow;
                    return o.createElement(s.a, {
                        ownerLogin: this.props.broadcasterLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(i) {
                        var r = i.permitted;
                        return n && (r || u) ? o.createElement(l.a, {
                            type: l.b.Download,
                            text: e.props.slug,
                            url: n,
                            onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, a, c, e.props.pageType) : void 0
                        }) : null
                    })
                }, t
            }(o.Component),
            m = Object(c.a)(u)(p);
        var f = Object(i.b)(function(e) {
            var t = Object(r.c)(e);
            return {
                userLogin: t ? t.login : ""
            }
        })(m);
        n.d(t, "a", function() {
            return f
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
            f = function(e, t, n, i, r) {
                var a = Date.now() / 1e3;
                l.o.tracking.track(p.SpadeEventType.ClipEdit, {
                    channel_id: e,
                    client_time: a,
                    clip_edit_session_id: t + "," + Math.floor(a),
                    clip_id: t,
                    clip_slug: n,
                    effect_name: "publish-twilight",
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
            v = 60,
            y = n("Odds"),
            k = n("isxN"),
            S = {
                publishState: a.Unsent,
                errorMessage: null
            },
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = S, t.onError = function(e) {
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
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < b || e > v) return this.onError(i.InvalidDuration), [2];
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
                                        return (t = r.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message, this.onError(n)) : (f(Number(this.props.clipBroadcasterId), this.props.clipId, this.props.slug, this.props.title, p.PageviewLocation.ClipsEditing), this.setState({
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
                    this.state.publishState === a.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(S), e.isSubmitted && !this.props.isSubmitted && this.onPublish()
                }, t.prototype.render = function() {
                    var e = this.state.publishState === a.Error,
                        t = this.state.publishState === a.Sending;
                    return s.createElement(y._8, null, s.createElement(y.v, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? y.A.Loading : y.A.Default,
                        size: y.z.Large,
                        blurAfterClick: !0
                    }, Object(l.d)("Publish", "ClipsPublishButton")))
                }, t = o.__decorate([Object(c.a)(k, {
                    name: "publishClip"
                })], t)
            }(s.Component),
            O = Object(h.f)(_),
            C = n("2TZ0"),
            E = {
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            };
        ! function(e) {
            e.emptySubmission = "emptySubmission", e.characterLimitReached = "characterLimitReached", e.channelViolation = "channelViolation", e.notCurator = "notCurator", e.unknown = "unknown"
        }(g || (g = {}));
        var T = 100,
            P = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderForClipsViewing = function() {
                        return s.createElement("div", null, s.createElement(y._46, {
                            id: E.TITLE_INPUT,
                            "data-test-selector": E.TITLE_INPUT,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }), s.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Between,
                            alignItems: y.c.Center,
                            padding: {
                                top: 1
                            }
                        }, n.state.showError ? s.createElement(y.Q, {
                            color: y.K.Error
                        }, n.getErrorMessage()) : s.createElement(y.Q, {
                            color: y.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(y._8, {
                            display: y.R.Flex
                        }, s.createElement(y.v, {
                            "data-test-selector": E.TITLE_SAVE,
                            onClick: n.props.onCancel,
                            type: y.B.Hollow
                        }, Object(l.d)("Cancel", "ClipsTitleEdit")), s.createElement(y._8, {
                            padding: {
                                left: 1
                            }
                        }, n.renderSave()))))
                    }, n.renderForManager = function() {
                        return s.createElement(y.W, {
                            id: E.TITLE_INPUT,
                            label: Object(l.d)("Title", "ClipsTitleEdit"),
                            hint: n.getRemainingCharacterText()
                        }, s.createElement(y._8, {
                            display: y.R.Flex,
                            flexWrap: y.U.NoWrap
                        }, s.createElement(y._8, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(y._4, {
                            id: E.TITLE_INPUT,
                            "data-test-selector": E.TITLE_INPUT,
                            type: y._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        })), s.createElement(y._8, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, s.createElement(y._8, {
                            position: y._15.Relative
                        }, n.renderSave(), s.createElement(y._6, {
                            onClick: n.dismissMessage,
                            "data-test-selector": E.TITLE_SAVE_TOOLTIP
                        }, s.createElement(y.q, {
                            direction: y.r.TopRight,
                            show: n.state.showError || n.state.showSuccess
                        }, s.createElement(y._8, {
                            padding: 1
                        }, n.state.showSuccess ? s.createElement(y.Q, {
                            color: y.K.Link
                        }, Object(l.d)("Title Saved!", "ClipsTitleEdit")) : s.createElement(y.Q, {
                            color: y.K.Error
                        }, n.getErrorMessage()))))))))
                    }, n.renderForEdit = function() {
                        var e;
                        if ((n.props.startOffset || 0 === n.props.startOffset) && n.props.endOffset) return e = n.state.showError ? s.createElement(y.Q, {
                            color: y.K.Error
                        }, n.getErrorMessage()) : 0 === n.state.title.length && n.props.broadcasterName ? s.createElement(y.Q, {
                            color: y.K.Alt2
                        }, Object(l.d)("Clips with titles get more views. Help {broadcasterName} get discovered by adding a title.", {
                            broadcasterName: n.props.broadcasterName
                        }, "ClipsTitleEdit")) : s.createElement(y.Q, {
                            color: y.K.Alt2
                        }, n.getRemainingCharacterText()), s.createElement(y._8, null, s.createElement(y._8, {
                            fullWidth: !0
                        }, s.createElement(y._4, {
                            id: E.TITLE_INPUT,
                            "data-test-selector": E.TITLE_INPUT,
                            type: y._5.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown,
                            placeholder: Object(l.d)("Add a title (required)", "ClipsTitleEdit"),
                            autoFocus: !0
                        })), s.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Between,
                            alignItems: y.c.Center,
                            padding: {
                                top: 1
                            }
                        }, e, s.createElement(y._8, {
                            display: y.R.Flex
                        }, s.createElement(y._8, {
                            padding: {
                                left: 1
                            }
                        }, s.createElement(O, {
                            clipId: n.props.clipId,
                            clipBroadcasterId: n.props.clipBroadcasterId,
                            isSubmitted: n.state.showSuccess,
                            title: n.state.title,
                            slug: n.props.clipSlug,
                            startOffset: n.props.startOffset,
                            endOffset: n.props.endOffset,
                            onError: n.onPublishClipError
                        })))))
                    }, n.renderSave = function() {
                        return s.createElement(y.v, {
                            "data-test-selector": E.TITLE_SAVE,
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
                            characterCount: T - n.state.title.length
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
                        var t = e.currentTarget.value.slice(0, T);
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
            w = Object(c.a)(C, {
                name: "editTitle"
            })(P);
        n.d(t, !1, function() {
            return E
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, !1, function() {
            return P
        }), n.d(t, "a", function() {
            return w
        })
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
    S5wX: function(e, t) {},
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
        t.b = function(e, t, n) {
            void 0 === n && (n = !1);
            return s(r, e, t, n)
        }, t.a = function(e, t, n) {
            void 0 === n && (n = !1);
            return s(a, e, t, n)
        }, t.c = function(e, t) {
            return s(o, e, t)
        };
        var i = n("6sO2"),
            r = "esport_channel_page_whitelist",
            a = "esport_insider_pass_whitelist",
            o = "esports_room_cheering_whitelist";

        function s(e, t, n, r) {
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
    Tr7p: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function(e) {
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                action: i.Hover,
                user_agent: navigator.userAgent
            })
        }, t.c = function(e, t) {
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: t.hasPrime,
                client_time: Date.now(),
                number_of_offers: t.numberOfOffers,
                action: e ? i.Open : i.Close,
                user_agent: navigator.userAgent
            })
        }, t.d = function(e) {
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                number_of_offers: e.numberOfOffers,
                action: i.OffersLoaded,
                user_agent: navigator.userAgent
            })
        }, t.l = function(e) {
            u(e, r.Click, a.StartYourFreeTrial)
        }, t.m = function(e) {
            u(e, r.Hover, a.StartYourFreeTrial)
        }, t.h = function(e, t) {
            u(t, r.Click, e ? a.MoreInfo : a.CloseInfo)
        }, t.e = function(e, t) {
            d(e, r.Click, t)
        }, t.i = function(e) {
            u(e, r.Hover, a.MoreInfo)
        }, t.g = function(e) {
            u(e, r.Hover, a.CloseInfo)
        }, t.f = function(e, t) {
            d(e, r.Hover, t)
        }, t.j = function(e) {
            s.n.track(l.SpadeEventType.PrimeLootPagePageview, {
                client_time: Date.now(),
                reftag: e.reftag,
                user_agent: navigator.userAgent
            })
        }, t.k = function(e) {
            s.n.track(l.SpadeEventType.PrimeLootPageTryPrimeClick, {
                client_time: Date.now(),
                button_position: e.buttonPosition,
                user_agent: navigator.userAgent
            })
        };
        var i, r, a, o, s = n("6sO2"),
            l = n("vH/s"),
            c = n("Kckk");

        function d(e, t, n) {
            var i;
            switch (n) {
                case c.e.CLAIM_CODE:
                    i = a.GetCode;
                    break;
                case c.e.EXTERNAL_OFFER:
                    i = a.LearnMore;
                    break;
                case c.e.DIRECT_ENTITLEMENT:
                    i = a.ClaimOffer
            }
            i && u(e, t, i)
        }

        function u(e, t, n) {
            s.n.track(l.SpadeEventType.PrimeOfferInteraction, {
                client_time: Date.now(),
                offer_id: e.offerID,
                external_url: e.externalURL,
                index: e.index,
                element: n,
                action: t,
                user_agent: navigator.userAgent,
                has_prime: e.hasPrime
            })
        }! function(e) {
            e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
        }(i || (i = {})),
        function(e) {
            e.Hover = "hover", e.Click = "click"
        }(r || (r = {})),
        function(e) {
            e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code"
        }(a || (a = {})),
        function(e) {
            e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
        }(o || (o = {}))
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
            return f
        }), n.d(t, "d", function() {
            return h
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
            f = function(e, t) {
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
            h = function(e) {
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
                end: 131
            }
        };
        n.loc.source = {
            body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
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
        var i = n("5a05");
        n.d(t, "b", function() {
            return i.a
        });
        var r = n("GSZ7");
        n.d(t, "a", function() {
            return r.b
        })
    },
    VCvu: function(e, t, n) {
        "use strict";
        var i, r = n("BzvE"),
            a = n("6sO2"),
            o = n("u2Hz"),
            s = n("vH/s"),
            l = n("Aj/L");

        function c(e) {
            var t = Object(l.c)(a.o.store.getState()),
                n = {
                    consent_action: e ? "consent_given" : "consent_denied",
                    user_id: t && t.id || null
                };
            a.n.track(s.SpadeEventType.GDPRConsent, n)
        }
        n.d(t, "a", function() {
                return d
            }),
            function(e) {
                e.Consent = "consent", e.Close = "close", e.Load = "load"
            }(i || (i = {}));
        var d = function() {
            function e() {
                var t = this;
                this.logger = a.j.withCategory("evidon-manager"), this.scriptsLoaded = !1, this.eventEmitter = new r.EventEmitter, this.onConsentGivenCallback = function() {
                    t.logger.debug("consent given"), c(!0), t.eventEmitter.emit(i.Consent, !0)
                }, this.onConsentRevokedCallback = function() {
                    t.logger.debug("consent revoked"), c(!1), t.eventEmitter.emit(i.Consent, !1)
                }, this.onConsentDeclinedCallback = function() {
                    t.logger.debug("consent declined"), c(!1)
                }, this.onCloseCallback = function() {
                    t.eventEmitter.emit(i.Close)
                }, e.instance && this.logger.error(new Error("More than one EvidonManager constructed"), "You may only construct one EvidonManager per session.")
            }
            return e.addListeners = function(e) {
                this.getInstance().addListeners(e)
            }, e.removeListeners = function(t) {
                e.instance && e.instance.removeListeners(t)
            }, e.loadScripts = function() {
                this.getInstance().loadScripts()
            }, e.getInstance = function() {
                return e.instance || (e.instance = new e), e.instance
            }, e.prototype.loadScripts = function() {
                var e = this;
                if (this.scriptsLoaded) this.logger.debug("Canceling loading Evidon scripts. A process may already be in flight, or the script has already completed loading.");
                else {
                    this.scriptsLoaded = !0;
                    var t = "//c.evidon.com",
                        n = t + "/sitenotice";
                    window.evidon = {
                        id: "5419",
                        priorConsentCallback: this.onConsentGivenCallback,
                        closeCallback: this.onCloseCallback,
                        consentDeclinedCallback: this.onConsentDeclinedCallback,
                        consentWithdrawnCallback: this.onConsentRevokedCallback
                    };
                    var r = a.b.get("gdpr_evidon_timeout_ms", 3e4),
                        o = Date.now() + r,
                        s = setInterval(function() {
                            if (e.isEvidonLoaded()) clearInterval(s), e.eventEmitter.emit(i.Load);
                            else if (Date.now() > o) {
                                clearInterval(s);
                                var t = "Evidon failed to load after " + r / 1e3 + "s";
                                e.logger.error(new Error(t), t)
                            }
                        }, 1e3);
                    try {
                        this.appendScript("evidon-notice", n + "/evidon-sitenotice-tag.js"), this.appendScript("evidon-location", t + "/geo/country.js"), this.appendScript("evidon-themes", n + "/5419/snthemes.js"), this.appendScript("evidon-settings", n + "/5419/twitch/settings.js")
                    } catch (e) {
                        this.logger.error(e, "Failed loading the Evidon scripts."), clearInterval(s)
                    }
                }
            }, e.prototype.addListeners = function(e) {
                e.consent && (this.eventEmitter.addListener(i.Consent, e.consent), e.consent(Object(o.a)())), e.close && this.eventEmitter.addListener(i.Close, e.close), e.load && (this.eventEmitter.addListener(i.Load, e.load), this.isEvidonLoaded() && e.load())
            }, e.prototype.removeListeners = function(e) {
                e.consent && this.eventEmitter.removeListener(i.Consent, e.consent), e.close && this.eventEmitter.removeListener(i.Close, e.close), e.load && this.eventEmitter.removeListener(i.Load, e.load)
            }, e.prototype.appendScript = function(e, t) {
                var n = document.getElementsByTagName("script")[0];
                n || (n = document.head);
                var i = document.createElement("script");
                if (i.async = !0, i.id = e, i.src = t, !n.parentNode) throw new Error("Failed to insert " + e + " into document");
                n.parentNode.insertBefore(i, n)
            }, e.prototype.isEvidonLoaded = function() {
                var e = window;
                return e.evidon && e.evidon.notice
            }, e
        }()
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
    VmM7: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Orange = "orange", e.Blue = "blue"
            }(i || (i = {}))
    },
    Vr0l: function(e, t) {},
    WC9X: function(e, t) {},
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
    Wc1Y: function(e, t) {},
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
            f = n("CwIZ"),
            h = n("JJaH"),
            g = n("Odds"),
            b = (n("6O9f"), "gift-subscription-button"),
            v = "subscribe-button";
        ! function(e) {
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
                        }) : a.createElement(g.v, {
                            ariaLabel: t + " " + n.state.currentPurchasePrice,
                            "data-test-selector": b,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, t)
                    }
                    return n.state.subbedTier === n.state.activeTab && n.state.activeTab === i.Prime ? a.createElement(h.a, {
                        "data-a-target": "subscribe-with-prime-button",
                        reportSubMenuAction: n.props.reportSubMenuAction,
                        channelLogin: n.props.subLogin
                    }) : a.createElement(p.a, {
                        isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                        tierPrice: n.state.currentPurchasePrice,
                        reportSubAction: n.props.reportSubMenuAction,
                        url: e.url,
                        "data-a-target": "subscribe-now-button",
                        "data-test-selector": v
                    })
                }, n.reportGiftCheckoutAction = function() {
                    n.props.reportSubMenuAction({
                        action: f.a.BuyGiftSub,
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
                        return a.createElement(g._8, {
                            display: g.R.InlineFlex,
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
            }, t.prototype.render = function() {
                var e = null;
                this.state.subbedTier && (e = a.createElement(g._8, {
                    display: g.R.InlineFlex,
                    margin: {
                        right: .5
                    },
                    className: "subscription-balloon-options__subbed-star"
                }, a.createElement(g._24, {
                    asset: g._25.Star
                })));
                var t = null,
                    n = null,
                    r = null,
                    l = this.state.tierNameEnabled ? Object(o.d)("Tier 3", "SubTierTabs") : this.props.subscriptionProducts[2].price,
                    c = a.createElement(g._8, {
                        display: g.R.InlineFlex
                    }, this.state.subbedTier === i.Tier3 && e, a.createElement(g._36, {
                        active: this.state.activeTab === i.Tier3,
                        "data-tier": k(i.Tier3),
                        "data-a-target": k(i.Tier3),
                        onClick: this.toggleActiveTab
                    }, l));
                if (this.props.subbedTier !== s.a.Prime || this.props.isGift || (t = a.createElement(g._8, {
                        display: g.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, a.createElement(g._8, {
                        display: g.R.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, a.createElement(g._24, {
                        asset: g._25.Crown
                    })), a.createElement(g._36, {
                        active: this.state.activeTab === i.Prime,
                        "data-tier": k(i.Prime),
                        "data-a-target": k(i.Prime),
                        onClick: this.toggleActiveTab
                    }, Object(o.d)("Prime", "SubTierTabs")))), !this.props.subbedTier || this.props.subbedTier === s.a.Tier1) {
                    var d = this.state.tierNameEnabled ? Object(o.d)("Tier 1", "SubTierTabs") : this.props.subscriptionProducts[0].price;
                    n = a.createElement(g._8, {
                        display: g.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === i.Tier1 && e, a.createElement(g._36, {
                        active: this.state.activeTab === i.Tier1,
                        "data-tier": k(i.Tier1),
                        "data-a-target": k(i.Tier1),
                        onClick: this.toggleActiveTab
                    }, d))
                }
                if (!this.props.subbedTier || this.props.subbedTier === s.a.Prime || this.props.subbedTier === s.a.Tier1 || this.props.subbedTier === s.a.Tier2) {
                    var p = this.state.tierNameEnabled ? Object(o.d)("Tier 2", "SubTierTabs") : this.props.subscriptionProducts[1].price;
                    r = a.createElement(g._8, {
                        display: g.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === i.Tier2 && e, a.createElement(g._36, {
                        active: this.state.activeTab === i.Tier2,
                        "data-tier": k(i.Tier2),
                        "data-a-target": k(i.Tier2),
                        onClick: this.toggleActiveTab
                    }, p))
                }
                var m = this.props.subscriptionProducts[1].emotes.length,
                    f = m + this.props.subscriptionProducts[2].emotes.length,
                    h = null;
                (m > 0 && this.state.activeTab === i.Tier2 || f > 0 && this.state.activeTab === i.Tier3) && (h = a.createElement(g._8, {
                    display: g.R.InlineFlex,
                    alignItems: g.c.Center
                }, this.getExtraEmotes(this.state.activeTab), a.createElement(g.Q, {
                    bold: !0
                }, Object(o.d)("{extraEmoteCount, plural, one {Plus {extraEmoteCount, number} extra channel emote} other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: this.state.activeTab === i.Tier2 ? m : f
                }, "SubTierTabs"))));
                var b = this.props.subscriptionProducts[this.state.activeTab - 1];
                return a.createElement(g._8, {
                    className: "channel-header__subscription-balloon-options"
                }, a.createElement(g._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(g._37, null, t, n, r, c)), a.createElement(g._8, null, a.createElement(g._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(g.Q, {
                    type: g._49.H5,
                    bold: !0
                }, this.getTabTitle())), a.createElement(g._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(g.Q, null, Object(o.d)("{availableEmoteCount, plural, one {Includes {availableEmoteCount, number} emoticon, subscriber badge, and customizable messages upon subscribing} other {Includes {availableEmoteCount, number} emoticons, subscriber badge, and customizable messages upon subscribing}}", {
                    availableEmoteCount: this.props.subscriptionProducts[0].emotes.length
                }, "SubTierTabs"))), h, a.createElement(u.a, {
                    subscriptionProduct: b,
                    isGift: this.props.isGift
                }), a.createElement(g._8, {
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
            }, t
        }(a.Component);

        function k(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var S = Object(c.d)("SubTierTabs", {
            autoReportInteractive: !0
        })(y);
        n.d(t, !1, function() {
            return b
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, !1, function() {
            return k
        }), n.d(t, "a", function() {
            return S
        })
    },
    YRMu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LiveNotificationsToggle_User"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 137
            }
        };
        n.loc.source = {
            body: "query LiveNotificationsToggle_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nself {\nfollower {\ndisableNotifications\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    YhVV: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = [];
            if (!e || !t) return n;
            var r = /[^\s\.,\!]+/g,
                a = r.exec(e);
            for (; a;) {
                var o = a[0],
                    s = t[o];
                if (s && "function" != typeof s) {
                    var l = Object(i.d)(e.slice(0, a.index)),
                        c = l ? l.length : a.index;
                    n[c] = {
                        startIndex: c,
                        endIndex: c + o.length,
                        data: {
                            alt: o,
                            images: {
                                themed: !1,
                                sources: {
                                    "1x": Object(i.f)(s.id, 1),
                                    "2x": Object(i.f)(s.id, 2),
                                    "4x": Object(i.f)(s.id, 4)
                                }
                            }
                        }
                    }
                }
                a = r.exec(e)
            }
            return n
        }, t.a = function(e) {
            for (var t = {}, n = 0, i = e; n < i.length; n++)
                for (var o = i[n], s = 0, l = o.emotes; s < l.length; s++)
                    for (var c = l[s], d = r[c.token] || [c.token], u = 0, p = d; u < p.length; u++) {
                        var m = p[u];
                        t[m] && o.id === a || (t[m] = {
                            id: c.id,
                            token: m
                        })
                    }
            return t
        };
        var i = n("l21v");
        var r = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            },
            a = "0"
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
    ZYcd: function(e, t) {},
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
            f = n("sEID"),
            h = n("WNmM"),
            g = n("McFO"),
            b = n("46tX"),
            v = n("rCmJ"),
            y = n("2hJ3"),
            k = n("f6Cj"),
            S = n("Odds"),
            _ = (n("Jjeq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getUrl = function() {
                        return t.props.url || window.location.href
                    }, t.onShareClick = function() {
                        t.props.onShareClick && t.props.onShareClick(t.props.type)
                    }, t.copyPageUrl = function() {
                        t.onShareClick(), Object(y.a)(t.getUrl())
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
                                return Object(k.b)(r, a);
                            case l.b.VKontakte:
                                return Object(k.d)(r);
                            case l.b.Facebook:
                                return Object(k.a)(r);
                            case l.b.Twitter:
                                return Object(k.c)(r, a);
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
            O = function(e) {
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
                    })), r.createElement(S._8, null, f.b.map(function(t) {
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
            C = n("bnNq"),
            E = (n("twHn"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.trackLinkShare = function() {
                        var e = t.props.data.clip;
                        if (e) return Object(h.c)(e.id, e.game && e.game.name, e.broadcaster && e.broadcaster.id, e.broadcaster && e.broadcaster.login, t.props.pageType)(s.b.CopyInput)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip,
                        n = Object(b.c)(window.navigator.userAgent),
                        i = !(!t || !t.id);
                    if (!i && !n) return r.createElement(S._8, null, this.renderPlaceholders());
                    if (!i && n) return r.createElement(S._8, null, this.renderMobilePlaceholders());
                    if (n) return r.createElement(O, {
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
                    }, r.createElement(g.a, {
                        broadcasterLogin: t.broadcaster && t.broadcaster.login || "",
                        broadcasterId: t.broadcaster && t.broadcaster.id || "",
                        slug: this.props.slug,
                        pageType: this.props.pageType
                    })), f.b.map(function(n) {
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
                            onShareClick: Object(h.c)(t.id, t.game && t.game.name, t.broadcaster && t.broadcaster.id, t.broadcaster && t.broadcaster.login, e.props.pageType)
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
                }, t = i.__decorate([Object(m.d)("ClipsSocialShare"), Object(d.a)(C)], t)
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
    bhwk: function(e, t) {},
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
    cJZy: function(e, t) {},
    cvQl: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Middle = 1] = "Middle", e[e.Right = 2] = "Right", e[e.Back = 3] = "Back", e[e.Forward = 4] = "Forward"
            }(i || (i = {}))
    },
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
    dnng: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("CSlQ"),
            o = n("Kckk"),
            s = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.g)(this.props.errorType);
                    return r.createElement(s._35, {
                        background: s.n.Alt2,
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: s._45.Center,
                        "data-test-selector": this.props.testTarget,
                        "data-a-target": this.props.testTarget
                    }, r.createElement(s.Q, {
                        type: s._49.H4,
                        align: s._59.Middle
                    }, r.createElement(s._35, {
                        padding: 1,
                        display: s.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: s.U.NoWrap,
                        alignItems: s.c.Center,
                        textAlign: s._45.Left,
                        fontSize: this.props.fontSize ? this.props.fontSize : s.V.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, r.createElement(s._8, {
                        margin: {
                            right: 1
                        },
                        display: s.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: s.U.NoWrap,
                        alignItems: s.c.Center
                    }, r.createElement(s._24, {
                        asset: s._25.DeadGlitch,
                        type: s._26.Alert,
                        width: 20,
                        height: 20
                    })), r.createElement(s.Q, {
                        type: s._49.P
                    }, e))))
                }, t
            }(r.Component),
            c = Object(a.d)("PrimeError", {
                autoReportInteractive: !0
            })(l);
        n.d(t, "a", function() {
            return c
        })
    },
    e1CU: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = e,
                i = !1;
            n ? n.split("").map(function(e) {
                return e.charCodeAt(0) > 127
            }).reduce(function(e, t) {
                return e || t
            }) && (i = !0) : n = t;
            return {
                userDisplayName: n,
                isIntl: i
            }
        }
    },
    eBiB: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e && "v" === e.charAt(0)) return e.substring(1);
            return e
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
    f8OD: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsRawMedia"
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
                                    value: "rawMedia"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "defaultClipInitialOffset"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
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
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "videoURL"
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
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nid\nrawMedia {\ndefaultClipInitialOffset\nduration\nstatus\nvideoURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f8UT: function(e, t) {},
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
            f = (n("Zifq"), function(e) {
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
            h = n("RH2O"),
            g = n("2KeS"),
            b = n("+xm8"),
            v = n("V5M+"),
            y = n("f2i/"),
            k = n("Aj/L"),
            S = n("oSFp");
        var _ = Object(h.b)(function(e) {
                return {
                    isLoggedIn: Object(k.d)(e)
                }
            }, function(e) {
                return Object(g.b)({
                    login: function() {
                        return Object(y.f)(b.a.ReportHoster)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(v.d)(S.a, t)
                    }
                }, e)
            })(Object(a.f)(f)),
            O = n("CIox"),
            C = n("BhGt"),
            E = [];
        C.onchange = function() {
            E.forEach(function(e) {
                e()
            })
        };
        var T = n("7enT"),
            P = n("0nzt"),
            w = n("UvtE"),
            N = n("Hjbq"),
            D = n("j0cR"),
            I = n("HW6M"),
            R = n("BwgW"),
            x = n("knr3"),
            F = n("OAwv"),
            L = n("eBiB"),
            j = n("HM6l"),
            U = n("JpYe"),
            M = n("ZVME"),
            A = n("CSlQ"),
            B = n("L3z0"),
            V = n("5MsU"),
            H = n("ijOz"),
            W = n("Tjmd"),
            G = (n("4NZK"), n("Ryxq")),
            z = {
                allowfullscreen: !0,
                externalfullscreen: !1,
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: H.c.Site,
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
                        if (n.props.playerTypeOverride === H.c.Frontpage && n.player)
                            if (n.props.channelLogin) o.o.history.push("/" + n.props.channelLogin);
                            else if (n.props.vodID) {
                            var e = Math.floor(n.player.getCurrentTime());
                            o.o.history.push("/videos/" + n.props.vodID + "?t=" + Object(G.a)(e))
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
                            e.vodId && (t.videoID = Object(L.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(L.a)(e.vodId)), n.props.onNavigationRequest(t)
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
                        var t = e || z.player;
                        n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerBuffering = n.registerBufferingEvent(), n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: q(),
                        playerInitialized: !1,
                        isFullScreen: !1,
                        playerPaused: !1,
                        playerRefID: Object(j.a)()
                    }, n.playerType = t.playerTypeOverride || z.player, n.lastSetChannel = t.channelLogin, n.lastGDPRConsent = t.gdpr.consentGiven, t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
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
                            if (this.player && e.channelLogin && (c || Object(W.a)(this.props, e))) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void o.n.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var d = e.collectionID && this.props.collectionID !== e.collectionID,
                                u = e.vodID && this.props.vodID !== e.vodID;
                            if (d || u) {
                                var p = e.vodID ? Object(U.b)(e.vodID) : "";
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
                            "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible && !this.state.isFullScreen,
                            "video-player--logged-in": this.props.isLoggedIn,
                            "video-player--fullscreen": this.state.isFullScreen
                        }),
                        t = I("video-player__container", {
                            "video-player__container--clips": H.a.includes(this.playerType)
                        });
                    return r.createElement("div", {
                        className: I(e),
                        "data-test-selector": "video-player"
                    }, r.createElement("div", {
                        className: t,
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.latencyTracking.reportInteractive(), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), o.n.eventEmitter.removeListener(c.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(V.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(V.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(V.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(B.a.Ended, this.onStreamStatusOffline), this.player.removeEventListener(B.a.Play, this.onPlayerPlay), this.player.removeEventListener(B.a.Playing, this.onPlayerPlaying), this.player.removeEventListener(V.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(V.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(V.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(V.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(B.a.Seeked, this.onSeek), this.player.removeEventListener(B.a.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(V.a.OpenStream, this.onOpenStream), this.player.removeEventListener(B.a.Pause, this.onPause), this.player.removeEventListener(V.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(B.a.LoadedMetadata, this.onMetadataLoaded), R.extensionService.unregisterPlayer(), this.player.destroy()), o.n.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.trackMiniPlayerAction = function(e, t) {
                    this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                }, t.prototype.initializePlayer = function() {
                    var e = i.__assign({}, z, {
                        showtheatre: !this.props.disableTheatreButton,
                        allowfullscreen: !this.props.disableFullscreen,
                        externalfullscreen: this.props.fullscreen.supported(),
                        autoplay: !this.props.paused,
                        gdprConsent: this.props.gdpr.consentGiven
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride, this.props.playerTypeOverride === H.c.ClipsEditing && (e.muted = !0)), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.clipSlug && (e.clip = this.props.clipSlug), this.props.vodID && (e.video = Object(U.b)(this.props.vodID), o.n.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.showChannelInfoOnHover && (e.showInfo = this.props.showChannelInfoOnHover), void 0 !== this.props.nextVideoOffset && this.props.nextVideoOffset >= 0 && (e.time = Object(G.a)(this.props.nextVideoOffset)), this.lastPausedProp = this.props.paused, e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(V.a.PlayerReady, this.onPlayerReady), t.addEventListener(V.a.Online, this.onStreamStatusOnline), t.addEventListener(V.a.Offline, this.onStreamStatusOffline), t.addEventListener(B.a.Ended, this.onStreamStatusOffline), t.addEventListener(B.a.Play, this.onPlayerPlay), t.addEventListener(B.a.Playing, this.onPlayerPlaying), t.addEventListener(B.a.Seeked, this.onSeek), t.addEventListener(B.a.TimeUpdate, this.onTimeUpdate), t.addEventListener(V.a.TheatreChange, this.onTheatreChange), t.addEventListener(V.a.FullscreenChange, this.onFullScreenChange), t.addEventListener(V.a.ExternalFullscreenChange, this.onExternalFullScreenChange), t.addEventListener(V.a.ClipsModerationOpen, this.onClipsModerationOpen), t.addEventListener(V.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(V.a.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(V.a.OpenStream, this.onOpenStream), t.addEventListener(B.a.Pause, this.onPause), t.addEventListener(V.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), t.addEventListener(B.a.LoadedMetadata, this.onMetadataLoaded), R.extensionService.registerPlayer(this.player), R.extensionService.setPlayerWindow(window), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerBufferingEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: M.a.Player,
                        key: M.b.PlayerBuffering,
                        label: M.c.Buffering
                    })
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: M.a.Player,
                        key: M.b.PlayerCreated,
                        label: M.c.Created
                    })
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 2500,
                        group: M.a.Player,
                        key: M.b.PlayerLoaded,
                        label: M.c.Init
                    })
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 4e3,
                        group: M.a.Player,
                        key: M.b.PlayerPlayed,
                        label: M.c.FirstFrame
                    })
                }, t.prototype.reportPlayerBuffering = function() {
                    this.hasBuffered || (this.hasBuffered = !0, this.playerBuffering && this.props.latencyTracking.reportCustomEvent(this.playerBuffering))
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.enterFullscreen = function() {
                    this.setState({
                        isFullScreen: !0
                    }), this.props.fullscreenRef ? this.props.fullscreen.enable(this.props.fullscreenRef) : this.props.fullscreen.enable(this.playerRef), this.props.onFullscreenChange && this.props.onFullscreenChange(!0)
                }, t.prototype.exitFullscreen = function() {
                    this.state.isFullScreen && (this.setState({
                        isFullScreen: !1
                    }), this.props.fullscreen.disable(), this.props.onFullscreenChange && this.props.onFullscreenChange(!1))
                }, t.prototype.maybeAttachToWindow = function(e) {
                    F.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    x.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    x.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(r.Component),
            K = Object(A.d)("VideoPlayer")(Q);
        var $ = Object(g.d)(Object(h.b)(function(e) {
            return {
                isWhispersBottomBarVisible: Object(P.b)(e),
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded,
                sideNavExpanded: e.ui.sideNavExpanded,
                isLoggedIn: Object(k.d)(e),
                authToken: Object(k.a)(e),
                activeVideoPlayerRefID: Object(D.a)(e)
            }
        }, function(e) {
            return Object(g.b)({
                enableTheatreMode: T.v,
                disableTheatreMode: T.t,
                togglePersistentPlayer: T.B,
                reportPlayerInstanceStarted: N.b
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
                    return !!C.enabled
                }, n.prototype.element = function() {
                    return C.element
                }, n.prototype.enable = function(e) {
                    C.request(e)
                }, n.prototype.disable = function() {
                    C.exit()
                }, n
            }(r.Component)
        }, Object(w.b)(), O.f)(K);

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
            return f
        }), n.d(t, "a", function() {
            return _
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return $
        }), n.d(t, "d", function() {
            return Y
        }), n.d(t, "b", function() {
            return H.c
        })
    },
    gsf5: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "LiveNotificationsToggle_ToggleNotifications"
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
        n.loc.source = {
            body: "mutation LiveNotificationsToggle_ToggleNotifications($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\nuser {\nid\nself {\nfollower {\ndisableNotifications\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    iQti: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PrimeSubscribe_SpendPrimeSubscriptionCredit"
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
                                value: "SpendSubscriptionCreditInput"
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
                            value: "spendSubscriptionCredit"
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
                                    value: "userID"
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
                                            value: "endsAt"
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
                end: 227
            }
        };
        n.loc.source = {
            body: "mutation PrimeSubscribe_SpendPrimeSubscriptionCredit($input: SpendSubscriptionCreditInput!) {\nspendSubscriptionCredit(input: $input) {\nuserID\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nendsAt\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
                e.AnimatedThumbnails = "animated_thumbnails", e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed", e.Dashboard = "dashboard"
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
    iydZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function(e, t) {
            var n = [],
                o = t.indexedActions,
                l = new RegExp("^(" + Object.keys(o).join("|") + ")(\\d+)$", "i"),
                c = e.split(/\s+/);
            return c.forEach(function(e, t) {
                var d = l.exec(e);
                if (d) {
                    var u = d[1].toLowerCase(),
                        p = +d[2],
                        m = o[u];
                    if (m || u !== i.g || (m = Object(r.b)()), m) {
                        var f = m.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !f && p && (f = m.orderedTiers[0]), f && n.push({
                            type: a.a.Emote,
                            content: {
                                images: s(f),
                                alt: m.prefix,
                                cheerAmount: p,
                                cheerColor: f.color
                            }
                        })
                    }
                } else {
                    var h = n.length && n[n.length - 1],
                        g = "";
                    if (t < c.length - 1 && (g = " "), h && h.type === a.a.Text) h.content += e + g;
                    else {
                        var b = "";
                        t && (b = " "), n.push({
                            type: a.a.Text,
                            content: b + e + g
                        })
                    }
                }
            }), n
        }, t.b = s;
        var i = n("3iBR"),
            r = n("CFVp"),
            a = n("mwvJ"),
            o = {
                indexedActions: {},
                orderedActions: []
            };

        function s(e, t, n) {
            void 0 === n && (n = !0);
            var i, r, a = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[a].get(t), i),
                light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[a].get(t), r)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[a].get(1),
                    "1.5x": e.indexedImages.DARK[a].get(1.5),
                    "2x": e.indexedImages.DARK[a].get(2),
                    "3x": e.indexedImages.DARK[a].get(3),
                    "4x": e.indexedImages.DARK[a].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[a].get(1),
                    "1.5x": e.indexedImages.LIGHT[a].get(1.5),
                    "2x": e.indexedImages.LIGHT[a].get(2),
                    "3x": e.indexedImages.LIGHT[a].get(3),
                    "4x": e.indexedImages.LIGHT[a].get(4)
                }
            }
        }
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
    kLf9: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return u
        });
        var i, r, a, o = n("HW6M"),
            s = (n.n(o), n("GiK3")),
            l = (n.n(s), n("VmM7")),
            c = n("Odds"),
            d = n("CBaN");
        n.n(d);
        ! function(e) {
            e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
        }(i || (i = {})),
        function(e) {
            e[e.Handle = 0] = "Handle"
        }(r || (r = {})),
        function(e) {
            e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
        }(a || (a = {}));
        var u = function(e) {
            var t = o("draggable-slider-handle", {
                "draggable-slider-handle--left": e.handlePosition === i.Left,
                "draggable-slider-handle--right": e.handlePosition === i.Right,
                "draggable-slider-handle--blue": e.color === l.a.Blue,
                "draggable-slider-handle--orange": e.color === l.a.Orange
            });
            return s.createElement(c._2, {
                flexGrow: 0,
                flexShrink: 0,
                className: t,
                display: c.R.Flex,
                fullHeight: !0
            }, s.createElement("div", {
                "data-test-selector": r.Handle,
                onMouseDown: e.onMouseDown,
                ref: e.onRef
            }, s.createElement(c._24, {
                asset: c._25.DragHandle,
                width: e.size
            })))
        }
    },
    l21v: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
            o = n("iydZ"),
            s = n("mwvJ"),
            l = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?");
        var c = n("YhVV"),
            d = n("3KVC"),
            u = n("e1CU");
        t.a = function(e, t, n, r, a, o) {
            void 0 === o && (o = !1);
            var s;
            s = a ? Object(c.b)(e, a) : function(e) {
                var t = [];
                e && Object.keys(e).forEach(function(n) {
                    var i = e[n];
                    i.forEach(function(e) {
                        t[e.startIndex] = {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex + 1,
                            data: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": _(n, 1),
                                        "2x": _(n, 2),
                                        "4x": _(n, 4)
                                    }
                                }
                            }
                        }
                    })
                });
                return t
            }(t.emotes);
            var l = Object(u.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: i.__assign({}, l, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || b(t.userID)
                }),
                messageParts: e ? v(e, s, t.bits, n, r, t.username) : [],
                deleted: o,
                timestamp: Date.now()
            }
        }, t.b = b, t.g = v, t.d = y, t.c = S, t.f = _, t.e = function(e) {
            return {
                src: _(e, 1),
                srcSet: _(e, 1) + " 1x, " + _(e, 2) + " 2x, " + _(e, 3) + " 4x"
            }
        };
        var p = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            m = {},
            f = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
            h = /@([^\u0000-\u007F]|[\w-])+/,
            g = /['"*([{</]+/;

        function b(e, t) {
            return void 0 === t && (t = 15), "number" != typeof m[e] && (m[e] = Math.floor(Math.random() * t)), p[m[e]]
        }

        function v(e, t, n, r, a, o) {
            void 0 === t && (t = []);
            var l = [],
                c = 0,
                d = y(e);
            t.forEach(function(t) {
                var u = d ? d.slice(c, t.startIndex).join("") : e.slice(c, t.startIndex);
                u && (l = n ? l.concat(k(u, o, a, r)) : l.concat(S(u, o, a))), l.push({
                    type: s.a.Emote,
                    content: i.__assign({
                        alt: d ? d.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), c = t.endIndex
            });
            var u = d ? d.slice(c).join("") : e.slice(c);
            return u && (l = n ? l.concat(k(u, o, a, r)) : l.concat(S(u, o, a))), l
        }

        function y(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function k(e, t, n, i) {
            if (!i) return S(e, t, n);
            var r = Object(o.c)(e, i).map(function(e) {
                return e.type === s.a.Text ? S(e.content, t, n) : e
            });
            return [].concat.apply([], r)
        }

        function S(e, t, n) {
            var i = [],
                o = e.split(/\s+/),
                c = Object(a.c)(r.o.store.getState());
            return o.forEach(function(e, a) {
                f.lastIndex = 0, h.lastIndex = 0;
                var u = f.exec(e),
                    p = 0 === a,
                    m = a === o.length - 1,
                    b = function(e, t, n, i, r) {
                        var a = [],
                            o = e.indexOf("@"),
                            l = e.match(h),
                            c = e.slice(0, o),
                            d = 0 === c.length || g.test(c);
                        if (!l || l.length < 1 || !d) return a;
                        var u = l[0].slice(1);
                        o > 0 && a.push({
                            type: s.a.Text,
                            content: (n ? "" : " ") + e.slice(0, o)
                        });
                        a.push({
                            type: s.a.Mention,
                            content: {
                                sender: t,
                                recipient: u,
                                isCurrentUserRecipient: O(u, r)
                            }
                        });
                        var p = o + u.length + 1;
                        p < e.length && a.push({
                            type: s.a.Text,
                            content: e.slice(p) + (i ? "" : " ")
                        });
                        return a
                    }(e, t, p, m, c);
                if (u) {
                    var v = u.index;
                    0 !== v && i.push({
                        type: s.a.Text,
                        content: "" + e.slice(0, v)
                    });
                    var y = f.lastIndex;
                    if (n) i.push({
                        type: s.a.Text,
                        content: " <" + Object(r.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var k = (u[1] ? "" : "https://") + e.slice(v, y);
                        if (function(e) {
                                return void 0 === e && (e = ""), l.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(k)) {
                            var S = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(l);
                                return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                            }(k);
                            i.push({
                                type: s.a.ClipLink,
                                content: {
                                    slug: S,
                                    url: k,
                                    displayText: e.slice(v, y)
                                }
                            })
                        } else if (Object(d.a)(k)) {
                            var _ = Object(d.b)(k);
                            i.push({
                                type: s.a.VideoLink,
                                content: {
                                    id: _,
                                    url: k,
                                    displayText: e.slice(v, y)
                                }
                            })
                        } else i.push({
                            type: s.a.Link,
                            content: {
                                displayText: e.slice(v, y),
                                url: k
                            }
                        })
                    }
                    var C = e.slice(y),
                        E = "";
                    a < o.length - 1 && (E = " "), C && i.push({
                        type: s.a.Text,
                        content: "" + C + E
                    })
                } else if (b.length > 0) i.push.apply(i, b);
                else if (O(e, c)) i.push({
                    type: s.a.CurrentUserHighlight,
                    content: e
                });
                else {
                    var T = i.length && i[i.length - 1];
                    E = m ? "" : " ";
                    if (T && T.type === s.a.Text) T.content += e + E;
                    else {
                        var P = p ? "" : " ";
                        i.push({
                            type: s.a.Text,
                            content: P + e + E
                        })
                    }
                }
            }), i
        }

        function _(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }

        function O(e, t) {
            if (!t) return !1;
            var n = t.displayName,
                i = t.login;
            return e === n || e.toLowerCase() === i
        }
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
            f = n("fc0G"),
            h = n("ijOz"),
            g = n("46tX"),
            b = n("kJau"),
            v = n("Odds"),
            y = (n("+g5R"), n("RsNJ")),
            k = function(e) {
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
                        i = Object(b.b)(t.login);
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
                }, t = o.__decorate([Object(c.a)(y)], t)
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
                    }, !Object(g.c)(window.navigator.userAgent) && this.props.playerType === f.b.ClipsViewing && s.createElement(k, {
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
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoaded: !1
                    }, t.playerWrapperRef = null, t.onClipsModerationOpen = function(e) {
                        if (e === h.b.ReportUser) {
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
                        e === h.b.Delete && t.props.showModal(d.d, {
                            slug: t.props.slug,
                            onClose: t.props.closeModal
                        }), e === h.b.DeleteAll && t.props.showModal(d.e, {
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
                    }, s.createElement(f.c, {
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
            C = Object(c.a)(_)(O);
        var E = Object(i.b)(null, function(e) {
            return Object(r.b)({
                showModal: a.d,
                closeModal: a.c
            }, e)
        })(C);
        n.d(t, "a", function() {
            return E
        })
    },
    mYtP: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("Aj/L"),
            a = n("TToO"),
            o = n("GiK3"),
            s = n("3zLD"),
            l = n("6sO2"),
            c = n("7vx8"),
            d = n("oIkB"),
            u = n("7tMz"),
            p = n("Odds"),
            m = n("gsf5"),
            f = n("YRMu"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1,
                        disableNotifications: !0
                    }, t.toggleNotificationsEnabled = function() {
                        var e = t.getFollowData();
                        if (e) {
                            var n = e.user && e.user.id || "",
                                i = {
                                    disableNotifications: !t.state.disableNotifications,
                                    targetID: n
                                },
                                r = {
                                    followUser: {
                                        __typename: "FollowUserPayload",
                                        follow: {
                                            __typename: "Follow",
                                            user: {
                                                __typename: "User",
                                                id: n,
                                                self: {
                                                    __typename: "UserSelfConnection",
                                                    follower: {
                                                        __typename: "FollowerEdge",
                                                        disableNotifications: !t.state.disableNotifications
                                                    }
                                                }
                                            }
                                        }
                                    }
                                };
                            t.props.followUser(Object(d.b)(i, r)), t.setState(function(e) {
                                return {
                                    disableNotifications: !e.disableNotifications
                                }
                            })
                        }
                    }, t.getFollowData = function() {
                        return t.props.followData ? t.props.followData : t.props.data
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this.props.followData;
                    if (e) {
                        var t = e.user && e.user.self && e.user.self.follower && e.user.self.follower.disableNotifications;
                        this.setState({
                            isFollowing: null !== t || !1,
                            disableNotifications: t
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = null;
                    e.followData && e.followData.user ? t = e.followData.user : !e.data || e.data.loading || e.data.error || (t = e.data.user), t && this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t;
                    return this.state.isFollowing ? this.state.disableNotifications ? (t = "live-notifications-toggle__status-text--disabled", e = Object(l.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "LiveNotificationsToggle")) : (t = "live-notifications-toggle__status-text--enabled", e = Object(l.d)("You will be notified on this channel's activity, including when they go live.", "LiveNotificationsToggle")) : (e = Object(l.d)("Follow this channel to receive notifications when they go live.", "LiveNotificationsToggle"), t = "live-notifications-toggle__status-text--not-following"), o.createElement(p._35, {
                        color: p.K.Base,
                        display: p.R.Flex,
                        flexWrap: p.U.Wrap
                    }, o.createElement(p._8, {
                        display: p.R.Flex,
                        flexWrap: p.U.NoWrap,
                        fullWidth: !0,
                        justifyContent: p._7.Between
                    }, o.createElement(p._8, {
                        display: p.R.Flex,
                        padding: {
                            right: 2
                        }
                    }, o.createElement("span", null, o.createElement(p.Q, {
                        fontSize: p.V.Size4,
                        bold: !0
                    }, Object(l.d)("Notifications", "LiveNotificationsToggle")))), o.createElement(p._8, {
                        display: p.R.Flex,
                        flexShrink: 0
                    }, o.createElement(p._51, {
                        onChange: this.toggleNotificationsEnabled,
                        checked: !this.state.disableNotifications,
                        "data-test-selector": "live-notifications-toggle__toggle",
                        "data-a-target": "notifications-toggle",
                        disabled: !this.state.isFollowing
                    }))), o.createElement(p._8, {
                        display: p.R.InlineFlex,
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(p.Q, {
                        type: p._49.Span,
                        color: p.K.Alt2,
                        "data-test-selector": t
                    }, e)))
                }, t
            }(o.Component),
            g = Object(s.compose)(Object(c.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !(e.firstPageLoaded && e.isLoggedIn && e.channelLogin && !e.followData)
                }
            }), Object(c.a)(m, {
                name: "followUser"
            }), Object(u.a)("LiveNotificationsToggle"))(h);
        var b = Object(i.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(r.d)(e)
            }
        })(g);
        n.d(t, "a", function() {
            return b
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
    mwvJ: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Text = 0] = "Text", e[e.CurrentUserHighlight = 1] = "CurrentUserHighlight", e[e.Mention = 2] = "Mention", e[e.Link = 3] = "Link", e[e.Emote = 4] = "Emote", e[e.ClipLink = 5] = "ClipLink", e[e.VideoLink = 6] = "VideoLink"
            }(i || (i = {}))
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
        t.a = function() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            consentGiven: Object(c.a)()
                        }, e.logger = s.j.withCategory("with-gdpr-consent"), e.initializeEvidon = function() {
                            e.logger.debug("Listening to EvidonManager", {
                                displayName: n.displayName
                            }), d.a.addListeners({
                                consent: e.onConsentChange
                            }), d.a.loadScripts()
                        }, e.onConsentChange = function(t) {
                            e.setState({
                                consentGiven: t
                            })
                        }, e.canInitializeEvidon = function(t) {
                            return !!(e.isGDPRConsentEnabled() && t.gdprData && t.gdprData.requestInfo && (t.gdprData.requestInfo.isFromEEA || e.hasQueryParamOverride()))
                        }, e.isGDPRConsentEnabled = function() {
                            return e.hasQueryParamOverride() || Object(u.b)()
                        }, e
                    }
                    return i.__extends(n, t), n.prototype.componentDidMount = function() {
                        this.canInitializeEvidon(this.props) && this.initializeEvidon()
                    }, n.prototype.componentDidUpdate = function(e) {
                        var t = this.props.gdprData && !this.props.gdprData.loading && (!e.gdprData || e.gdprData.loading);
                        t && this.canInitializeEvidon(this.props) && this.initializeEvidon()
                    }, n.prototype.componentWillUnmount = function() {
                        d.a.removeListeners({
                            consent: this.onConsentChange
                        })
                    }, n.prototype.render = function() {
                        var t = this.isGDPRConsentEnabled(),
                            n = this.props.gdprData && this.props.gdprData.requestInfo,
                            a = n && !n.isFromEEA && !this.hasQueryParamOverride(),
                            o = a || (t ? this.state.consentGiven : Object(u.a)()),
                            s = {
                                gdpr: {
                                    consentGiven: o
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
                }), Object(l.a)(p, {
                    name: "gdprData",
                    options: function(e) {
                        return {
                            skip: !e.firstPageLoaded
                        }
                    }
                }))(t)
            }
        };
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("RH2O")),
            o = n("2KeS"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("u2Hz"),
            d = n("VCvu"),
            u = n("GSZ7"),
            p = n("mZoE"),
            m = (n.n(p), n("bhwk"));
        n.n(m)
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
            f = Object(u.d)("ClipsModalBanUser")(Object(d.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(m)),
            h = n("7vx8"),
            g = n("wnjK");

        function b(e) {
            return Object(h.a)(g, e)
        }
        var v = n("LnKh"),
            y = (n("lTii"), this),
            k = {
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
                    }, n.state = k, n
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
            _ = Object(h.a)(v)(b({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(y, void 0, void 0, function() {
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
            O = n("3zLD"),
            C = n("wqRA"),
            E = this,
            T = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            P = function(e) {
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
                    }, n.state = T, n
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
            w = Object(O.compose)(Object(u.d)("ClipsModalDeleteAll"), b({
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
            }), Object(h.a)(C, {
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
            }))(P),
            N = this,
            D = {
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
                    }, n.state = D, n
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
            R = b({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(N, void 0, void 0, function() {
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
            return f
        }), n.d(t, "d", function() {
            return _
        }), n.d(t, "e", function() {
            return w
        }), n.d(t, "c", function() {
            return R
        })
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
                                            value: "status"
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
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nstatus\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    twHn: function(e, t) {},
    u2Hz: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = window;
            return !!(e.evidon && e.evidon.notice && e.evidon.notice.consentIsGiven)
        }
    },
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
                f = e.currentGameResults,
                h = e.currentUserResults,
                g = e.currentCommunityResults,
                b = e.currentVideoResults,
                v = e.currentLiveResults;
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
                var y = p && b ? b.results : [],
                    k = m.videos.totalHits;
                p && m.exhaustedHits && b && !m.videos.totalHits && (k = b.totalHits), c = function(e, t, n) {
                    return {
                        results: e.concat(t.hits.map(s)),
                        totalHits: t.totalHits || n
                    }
                }(y, m.videos, k)
            }
            m.users && (n = {
                totalHits: p && h ? h.totalHits : m.users.totalHits,
                results: p && h ? h.results : []
            }, p && m.exhaustedHits && h && !m.users.totalHits && (n.totalHits = h.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
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
                results: p && g ? g.results : []
            }, p && m.exhaustedHits && g && !m.communities.totalHits && (l.totalHits = g.totalHits), l.results = l.results.concat(m.communities.hits.map(function(e, t) {
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
    ukY1: function(e, t) {},
    "v+rJ": function(e, t) {},
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
    "w/8h": function(e, t) {},
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
    yqdF: function(e, t) {},
    zAvr: function(e, t) {},
    zU1d: function(e, t) {}
});
//# sourceMappingURL=sites.clips.pages.create-0f8b84c07f8af8d1a787705eef63e052.js.map