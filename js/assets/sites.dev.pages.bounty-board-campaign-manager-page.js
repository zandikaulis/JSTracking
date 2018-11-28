(window.webpackJsonp = window.webpackJsonp || []).push([
    [229], {
        "0SKf": function(e, n, t) {
            "use strict";
            t.d(n, "h", function() {
                return a
            }), t.d(n, "b", function() {
                return i
            }), t.d(n, "a", function() {
                return N
            }), t.d(n, "f", function() {
                return o
            }), t.d(n, "i", function() {
                return r
            }), t.d(n, "g", function() {
                return T
            }), t.d(n, "d", function() {
                return E
            }), t.d(n, "e", function() {
                return R
            }), t.d(n, "c", function() {
                return _
            });
            var E, a = 500,
                i = 5e3,
                N = 15e4,
                o = 5,
                r = 4,
                T = 40;
            ! function(e) {
                e.BountiesCompleted = "completedBountyCount", e.Viewers = "totalViewerCount", e.Viewers2m = "twoMinuteViewerCount", e.MinutesWatched = "minutesWatched"
            }(E || (E = {}));
            var _, R = {
                series: [],
                total: 0,
                interval: {
                    start: new Date,
                    end: new Date
                }
            };
            ! function(e) {
                e.BountiesExpanded = "expandedBountyCount", e.BountiesAccepted = "claimedBountyCount", e.BountiesCompleted = "completedBountyCount", e.BountiesTotal = "viewedBountyCount"
            }(_ || (_ = {}))
        },
        "17YR": function(e, n, t) {
            "use strict";

            function E(e) {
                return e.map(function(e) {
                    return e.join(",")
                }).join("\n")
            }

            function a(e) {
                for (var n = [], t = e[0].length, E = function(t) {
                        n.push(e.map(function(e) {
                            return e[t]
                        }))
                    }, a = 0; a < t; a++) E(a);
                return n
            }

            function i(e, n) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var t = new Blob([n], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(t, e)
                }
                var E = document.createElement("a"),
                    a = encodeURIComponent(n);
                void 0 === E.download ? E.href = "data:attachment/csv;charset=utf-8," + a : (E.href = "data:text/csv;charset=utf-8," + a, E.download = e), E.target = "_blank", E.setAttribute("style", "visibility: hidden"), document.body.appendChild(E), E.click(), document.body.removeChild(E)
            }
            t.d(n, "b", function() {
                return E
            }), t.d(n, "c", function() {
                return a
            }), t.d(n, "a", function() {
                return i
            })
        },
        "4brS": function(e, n, t) {},
        DMoW: function(e, n, t) {
            "use strict";
            var E, a, i, N, o, r, T, _, R, A, c, u, O, d, l, I, D, S, m, C, s, L, f, M, U, p, P, b, v, B, g, F, V, G, y, k, H, h, Y, W, j, K, w, X, x, Q, z, Z, J, q, $, ee, ne, te, Ee, ae, ie, Ne, oe, re, Te, _e, Re, Ae, ce, ue, Oe, de, le, Ie, De, Se, me, Ce, se, Le, fe, Me, Ue, pe, Pe, be, ve, Be, ge, Fe, Ve, Ge, ye, ke, He, he, Ye, We, je, Ke, we, Xe, xe, Qe, ze, Ze, Je, qe, $e, en, nn, tn, En, an, Nn, on, rn, Tn, _n, Rn, An, cn, un, On, dn, ln, In, Dn, Sn, mn, Cn;
            t.d(n, "O", function() {
                    return E
                }), t.d(n, "e", function() {
                    return a
                }), t.d(n, "P", function() {
                    return o
                }), t.d(n, "B", function() {
                    return r
                }), t.d(n, "b", function() {
                    return _
                }), t.d(n, "i", function() {
                    return O
                }), t.d(n, "d", function() {
                    return l
                }), t.d(n, "g", function() {
                    return S
                }), t.d(n, "h", function() {
                    return m
                }), t.d(n, "Aa", function() {
                    return s
                }), t.d(n, "n", function() {
                    return L
                }), t.d(n, "Ca", function() {
                    return f
                }), t.d(n, "S", function() {
                    return M
                }), t.d(n, "s", function() {
                    return U
                }), t.d(n, "l", function() {
                    return b
                }), t.d(n, "Q", function() {
                    return v
                }), t.d(n, "C", function() {
                    return y
                }), t.d(n, "c", function() {
                    return H
                }), t.d(n, "u", function() {
                    return h
                }), t.d(n, "Ba", function() {
                    return Y
                }), t.d(n, "t", function() {
                    return W
                }), t.d(n, "U", function() {
                    return j
                }), t.d(n, "W", function() {
                    return K
                }), t.d(n, "G", function() {
                    return w
                }), t.d(n, "X", function() {
                    return X
                }), t.d(n, "F", function() {
                    return x
                }), t.d(n, "E", function() {
                    return Q
                }), t.d(n, "q", function() {
                    return z
                }), t.d(n, "V", function() {
                    return Z
                }), t.d(n, "a", function() {
                    return J
                }), t.d(n, "x", function() {
                    return q
                }), t.d(n, "z", function() {
                    return $
                }), t.d(n, "I", function() {
                    return ne
                }), t.d(n, "J", function() {
                    return te
                }), t.d(n, "H", function() {
                    return ae
                }), t.d(n, "K", function() {
                    return ie
                }), t.d(n, "Z", function() {
                    return re
                }), t.d(n, "L", function() {
                    return de
                }), t.d(n, "Y", function() {
                    return le
                }), t.d(n, "p", function() {
                    return Me
                }), t.d(n, "o", function() {
                    return Ue
                }), t.d(n, "Ea", function() {
                    return Be
                }), t.d(n, "D", function() {
                    return He
                }), t.d(n, "Da", function() {
                    return he
                }), t.d(n, "k", function() {
                    return je
                }), t.d(n, "w", function() {
                    return Ke
                }), t.d(n, "m", function() {
                    return Xe
                }), t.d(n, "j", function() {
                    return xe
                }), t.d(n, "y", function() {
                    return Qe
                }), t.d(n, "T", function() {
                    return Ze
                }), t.d(n, "r", function() {
                    return Je
                }), t.d(n, "R", function() {
                    return nn
                }), t.d(n, "A", function() {
                    return _n
                }), t.d(n, "M", function() {
                    return Rn
                }), t.d(n, "N", function() {
                    return An
                }), t.d(n, "f", function() {
                    return Sn
                }), t.d(n, "v", function() {
                    return mn
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(E || (E = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(a || (a = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(i || (i = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(N || (N = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(r || (r = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(T || (T = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(_ || (_ = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(R || (R = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(A || (A = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(c || (c = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(u || (u = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(O || (O = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(d || (d = {})),
                function(e) {
                    e.ACQUIRED = "ACQUIRED", e.CHEERED = "CHEERED", e.NEW_USER = "NEW_USER", e.SKIPPED = "SKIPPED", e.UNKNOWN = "UNKNOWN"
                }(l || (l = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(I || (I = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(D || (D = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(S || (S = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(m || (m = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(C || (C = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(s || (s = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(L || (L = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(f || (f = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(M || (M = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(U || (U = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(p || (p = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(P || (P = {})),
                function(e) {
                    e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(b || (b = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(v || (v = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(B || (B = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(g || (g = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(F || (F = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(V || (V = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(G || (G = {})),
                function(e) {
                    e.NONE = "NONE", e.READ = "READ", e.WRITE = "WRITE"
                }(y || (y = {})),
                function(e) {
                    e.ALLOW_MESSAGE = "ALLOW_MESSAGE", e.BAN_USER = "BAN_USER", e.CHANGE_CHANNEL_RULES = "CHANGE_CHANNEL_RULES", e.COMMENT = "COMMENT", e.DENY_MESSAGE = "DENY_MESSAGE", e.INVALID_ACTION = "INVALID_ACTION", e.SET_CHANNEL_MODE = "SET_CHANNEL_MODE", e.TIMEOUT_USER = "TIMEOUT_USER", e.UNBAN_USER = "UNBAN_USER", e.UPDATE_MODERATED_TERMS = "UPDATE_MODERATED_TERMS"
                }(k || (k = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_IS_VIP = "TARGET_IS_VIP", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(H || (H = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(h || (h = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(Y || (Y = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(W || (W = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(j || (j = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(K || (K = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(w || (w = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(X || (X = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(x || (x = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(Q || (Q = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(z || (z = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(Z || (Z = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(J || (J = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(q || (q = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }($ || ($ = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(ee || (ee = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }(ne || (ne = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }(te || (te = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(Ee || (Ee = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(ae || (ae = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ie || (ie = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(Ne || (Ne = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(oe || (oe = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(re || (re = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(Te || (Te = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(_e || (_e = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(Re || (Re = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(Ae || (Ae = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ce || (ce = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(ue || (ue = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(Oe || (Oe = {})),
                function(e) {
                    e.DNR_TO_RESUB_NONRECURRING = "DNR_TO_RESUB_NONRECURRING", e.DNR_TO_RESUB_RECURRING = "DNR_TO_RESUB_RECURRING", e.GIFT_TO_PAID = "GIFT_TO_PAID"
                }(de || (de = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(le || (le = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(Ie || (Ie = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(De || (De = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(Se || (Se = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(me || (me = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(Ce || (Ce = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(se || (se = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Le || (Le = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(fe || (fe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Me || (Me = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(Ue || (Ue = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(pe || (pe = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Pe || (Pe = {})),
                function(e) {
                    e.GAME_CHANGE = "GAME_CHANGE", e.HEARTHSTONE_VCA = "HEARTHSTONE_VCA", e.OVERWATCH_VCA = "OVERWATCH_VCA", e.PUBG_VCA = "PUBG_VCA", e.STREAM_MARKER = "STREAM_MARKER", e.VCA = "VCA"
                }(be || (be = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(ve || (ve = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(Be || (Be = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(ge || (ge = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(Fe || (Fe = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(Ve || (Ve = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(Ge || (Ge = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(ye || (ye = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(ke || (ke = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(He || (He = {})),
                function(e) {
                    e.ALL_VIDEOS = "ALL_VIDEOS", e.COLLECTION = "COLLECTION", e.GAME_VIDEOS = "GAME_VIDEOS", e.LATEST_BROADCASTS = "LATEST_BROADCASTS", e.LATEST_NON_BROADCASTS = "LATEST_NON_BROADCASTS", e.LONG_VIDEOS = "LONG_VIDEOS", e.SHORT_VIDEOS = "SHORT_VIDEOS", e.TOP_CLIPS = "TOP_CLIPS"
                }(he || (he = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(Ye || (Ye = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(We || (We = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EDITOR = "EDITOR", e.MODERATOR = "MODERATOR", e.REGULAR = "REGULAR", e.SUBSCRIBER = "SUBSCRIBER"
                }(je || (je = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(Ke || (Ke = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(we || (we = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Xe || (Xe = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(xe || (xe = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(Qe || (Qe = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ze || (ze = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.STREAM_TITLE_BANNED_WORDS = "STREAM_TITLE_BANNED_WORDS", e.STREAM_TITLE_TOO_LONG = "STREAM_TITLE_TOO_LONG", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ze || (Ze = {})),
                function(e) {
                    e.INVITATION_ALREADY_EXISTS = "INVITATION_ALREADY_EXISTS", e.INVITATION_INVALID = "INVITATION_INVALID", e.SQUAD_FULL = "SQUAD_FULL", e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_ALREADY_IN_SQUAD = "USER_ALREADY_IN_SQUAD"
                }(Je || (Je = {})),
                function(e) {
                    e.SQUAD_CANNOT_BE_UPDATED = "SQUAD_CANNOT_BE_UPDATED", e.SQUAD_NOT_FOUND = "SQUAD_NOT_FOUND", e.SQUAD_TOO_FEW_MEMBERS = "SQUAD_TOO_FEW_MEMBERS", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(qe || (qe = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }($e || ($e = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }(en || (en = {})),
                function(e) {
                    e.ACCEPTED = "ACCEPTED", e.DELETED = "DELETED", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN"
                }(nn || (nn = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_ALREADY_EDITOR = "TARGET_USER_ALREADY_EDITOR", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(tn || (tn = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(En || (En = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(an || (an = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(Nn || (Nn = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(on || (on = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(rn || (rn = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(Tn || (Tn = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(_n || (_n = {})),
                function(e) {
                    e.ALREADY_WATCHED = "ALREADY_WATCHED", e.NOT_INTERESTED = "NOT_INTERESTED", e.OFFENSIVE = "OFFENSIVE", e.OTHER = "OTHER", e.UNSPECIFIED = "UNSPECIFIED"
                }(Rn || (Rn = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CHANNEL = "CHANNEL", e.SHELF = "SHELF", e.UNSPECIFIED = "UNSPECIFIED", e.VOD = "VOD"
                }(An || (An = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(cn || (cn = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(un || (un = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(On || (On = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(dn || (dn = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(ln || (ln = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(In || (In = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(Dn || (Dn = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(Sn || (Sn = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(mn || (mn = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(Cn || (Cn = {}))
        },
        H3dc: function(e, n, t) {
            var E = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DevBountyBoardDashboard_CampaignList"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "fetchPending"
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
                                value: "fetchCompleted"
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
                                value: "fetchRejected"
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
                                value: "fetchApproved"
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
                                value: "fetchLive"
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
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "company"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            alias: {
                                                kind: "Name",
                                                value: "APPROVED"
                                            },
                                            name: {
                                                kind: "Name",
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "status"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "APPROVED"
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
                                                            value: "fetchApproved"
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
                                                                value: "devBountyEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            alias: {
                                                kind: "Name",
                                                value: "COMPLETED"
                                            },
                                            name: {
                                                kind: "Name",
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "status"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "COMPLETED"
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
                                                            value: "fetchCompleted"
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
                                                                value: "devBountyEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            alias: {
                                                kind: "Name",
                                                value: "LIVE"
                                            },
                                            name: {
                                                kind: "Name",
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "status"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "LIVE"
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
                                                            value: "fetchLive"
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
                                                                value: "devBountyEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            alias: {
                                                kind: "Name",
                                                value: "PENDING"
                                            },
                                            name: {
                                                kind: "Name",
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "status"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "PENDING"
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
                                                            value: "fetchPending"
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
                                                                value: "devBountyEdge"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            alias: {
                                                kind: "Name",
                                                value: "REJECTED"
                                            },
                                            name: {
                                                kind: "Name",
                                                value: "bountyCampaigns"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "status"
                                                },
                                                value: {
                                                    kind: "EnumValue",
                                                    value: "REJECTED"
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
                                                            value: "fetchRejected"
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
                                                                value: "devBountyEdge"
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
                }],
                loc: {
                    start: 0,
                    end: 803
                }
            };
            E.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/campaign-list-bounty.gql"\nquery DevBountyBoardDashboard_CampaignList($fetchPending: Boolean! $fetchCompleted: Boolean! $fetchRejected: Boolean! $fetchApproved: Boolean! $fetchLive: Boolean!) {\ncurrentUser {\nid\ncompany {\nid\nAPPROVED: bountyCampaigns(status: APPROVED) @include(if: $fetchApproved) {\nedges {\n...devBountyEdge\n}\n}\nCOMPLETED: bountyCampaigns(status: COMPLETED) @include(if: $fetchCompleted) {\nedges {\n...devBountyEdge\n}\n}\nLIVE: bountyCampaigns(status: LIVE) @include(if: $fetchLive) {\nedges {\n...devBountyEdge\n}\n}\nPENDING: bountyCampaigns(status: PENDING) @include(if: $fetchPending) {\nedges {\n...devBountyEdge\n}\n}\nREJECTED: bountyCampaigns(status: REJECTED) @include(if: $fetchRejected) {\nedges {\n...devBountyEdge\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            E.definitions = E.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !a[n] && (a[n] = !0, !0)
                })
            }(t("Phj1").definitions)), e.exports = E
        },
        JQ82: function(e, n, t) {
            "use strict";

            function E() {
                return a(new Date)
            }

            function a(e) {
                return new Date(function(e) {
                    return e.getTime() + 6e4 * e.getTimezoneOffset()
                }(e))
            }
            t.d(n, "a", function() {
                return E
            }), t.d(n, "b", function() {
                return a
            })
        },
        MFJw: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devCompanyGame"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Game"
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
                                    value: "85"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "113"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "coverURL"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "566"
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "IntValue",
                                    value: "85"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 115
                }
            };
            t.loc.source = {
                body: "fragment devCompanyGame on Game {\nid\nboxArtURL(width: 85 height: 113)\ncoverURL(width: 566 height: 85)\ndisplayName\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        PJwv: function(e, n, t) {
            "use strict";
            var E, a = t("mrSG"),
                i = t("q1tI"),
                N = t("/MKj"),
                o = t("fvjX"),
                r = t("aCAx"),
                T = t("Ue10"),
                _ = t("/7QA"),
                R = t("cZKs");
            ! function(e) {
                e.TitleText = "dev-cancel-campaign-modal-title-text", e.ContentText = "dev-create-campaign-content-text", e.CloseButton = "dev-create-campaign-modal-close-button"
            }(E || (E = {}));
            var A = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onClose = function() {
                            n.props.onClose()
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(T.Ya, {
                            className: "dev-bounty-board-cancel-campaign-modal"
                        }, i.createElement(T.Fb, {
                            borderBottom: !0,
                            padding: 2,
                            textAlign: T.Sb.Center
                        }, i.createElement(T.W, {
                            type: T.Wb.H4,
                            bold: !0,
                            "data-test-selector": E.TitleText
                        }, Object(_.d)("Cancel Campaign", "DevBountyCancelCampaignModal")), i.createElement(R.a, null)), i.createElement(T.Ya, {
                            display: T.X.Flex,
                            flexDirection: T.Aa.Column,
                            padding: 2
                        }, i.createElement(T.W, {
                            type: T.Wb.P,
                            "data-test-selector": E.ContentText
                        }, Object(_.d)("You must contact <x:link>bountyboard@twitch.tv</x:link> in order to cancel your campaign. Once contacted, cancellations typically take 24-48 hours to process.", {
                            "x:link": function(e) {
                                return i.createElement("a", {
                                    href: "mailto:bountyboard@twitch.tv"
                                }, e)
                            }
                        }, "DevBountyBoardCampaignPage")), i.createElement("br", null), i.createElement(T.W, {
                            type: T.Wb.P,
                            "data-test-selector": E.ContentText
                        }, Object(_.d)("By cancelling a campaign early you will only have your unclaimed budget refunded. Broadcasters who have already claimed bounties will have their remaining time to complete the bounty.", "DevBountyCancelCampaignModal"))), i.createElement(T.Fb, {
                            alignItems: T.f.Center,
                            background: T.r.Alt2,
                            borderTop: !0,
                            display: T.X.Flex,
                            flexDirection: T.Aa.Row,
                            flexWrap: T.Ba.Wrap,
                            justifyContent: T.Xa.End,
                            padding: 1
                        }, i.createElement(T.z, {
                            onClick: this.onClose,
                            "data-test-selector": E.CloseButton
                        }, Object(_.d)("Close", "DevBountyCancelCampaignModal"))))
                    }, n
                }(i.PureComponent),
                c = (t("4brS"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(T.Fb, {
                            background: T.r.Base,
                            className: "dev-bounty-board-cancel-campaign-modal__container"
                        }, i.createElement(A, {
                            onClose: this.props.closeModal
                        }))
                    }, n
                }(i.Component));
            var u = Object(N.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: r.c
                }, e)
            })(c);
            t.d(n, !1, function() {
                return c
            }), t.d(n, "a", function() {
                return u
            })
        },
        Phj1: function(e, n, t) {
            var E = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "devBountyEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "BountyCampaignEdge"
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
                                        value: "rejectionReason"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "brandDetails"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalBudgetCents"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "spentBudgetCents"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                        value: "startTime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "endTime"
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
                                        value: "title"
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
                                        value: "availablePlatforms"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "devCompanyGame"
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
                    end: 313
                }
            };
            E.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/company-game.gql"\nfragment devBountyEdge on BountyCampaignEdge {\ncursor\nnode {\nid\nrejectionReason\nbrandDetails {\ntotalBudgetCents\nspentBudgetCents\n}\ndisplayName\nstartTime\nendTime\nstatus\ntitle\ntype\navailablePlatforms\ngame {\n...devCompanyGame\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            E.definitions = E.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !a[n] && (a[n] = !0, !0)
                })
            }(t("MFJw").definitions)), e.exports = E
        },
        WSnR: function(e, n, t) {
            "use strict";
            t.d(n, "b", function() {
                return r
            }), t.d(n, "c", function() {
                return T
            }), t.d(n, "f", function() {
                return _
            }), t.d(n, "d", function() {
                return R
            }), t.d(n, "a", function() {
                return A
            }), t.d(n, "e", function() {
                return c
            });
            var E = t("/7QA"),
                a = t("DMoW"),
                i = t("17YR"),
                N = t("JQ82"),
                o = t("0SKf"),
                r = function(e) {
                    var n = e.node;
                    if (!n) return "";
                    var t = n.displayName,
                        E = "",
                        i = n.game,
                        N = n.type;
                    if (i && i.displayName && (t = i.displayName), !t) return "";
                    switch (N !== a.g.GAME_TRAILER && N !== a.g.MISC_TRAILER || (E = "[Trailer]"), N) {
                        case a.g.GAME_TRAILER:
                        case a.g.MISC_TRAILER:
                            E = "[Trailer]";
                            break;
                        case a.g.PAY_TO_STREAM:
                            E = (n.availablePlatforms || []).map(function(e) {
                                return "[" + e + "]"
                            }).join(" ");
                            break;
                        default:
                            E = ""
                    }
                    return E ? t + " " + E : t
                },
                T = function(e) {
                    switch (e) {
                        case o.d.BountiesCompleted:
                            return Object(E.d)("Bounties Completed", "DevBountyBoardCampaignPage");
                        case o.d.Viewers:
                            return Object(E.d)("Viewers", "DevBountyBoardCampaignPage");
                        case o.d.Viewers2m:
                            return Object(E.d)("Viewers >2 min", "DevBountyBoardCampaignPage");
                        case o.d.MinutesWatched:
                            return Object(E.d)("Minutes Watched", "DevBountyBoardCampaignPage");
                        default:
                            return ""
                    }
                },
                _ = function(e) {
                    var n = Object(N.b)(e).getTime(),
                        t = R(e) ? 4 : 5;
                    return new Date(n - 60 * t * 60 * 1e3)
                },
                R = function(e) {
                    try {
                        return -1 !== Object(E.j)(e, {
                            timeZone: "America/New_York",
                            timeZoneName: "short"
                        }).indexOf("EDT")
                    } catch (e) {
                        return !1
                    }
                },
                A = function(e) {
                    var n = e / 100;
                    return n - Math.floor(n) != 0 ? Object(E.f)(n, {
                        style: "currency",
                        currency: "USD"
                    }) : "$" + Object(E.f)(n)
                },
                c = function(e, n) {
                    var t = [
                        [Object(E.d)("Date", "DevBountyBoardCampaignPage")].concat(n.dates.map(function(e) {
                            return e.toDateString() + " ET"
                        }))
                    ];
                    return t = t.concat(Object.values(o.d).map(function(t) {
                        return function(e, n, t) {
                            return [T(e)].concat(t.sum(n[e].series, function(e) {
                                return {
                                    date: e.date,
                                    value: e.value
                                }
                            }))
                        }(t, e, n)
                    })), {
                        fileName: n.isByDay ? Object(E.d)("Report by day {start, date} to {end, date}.csv", {
                            start: n.interval.start,
                            end: n.interval.end
                        }, "DevBountyBoardCampaignPage") : Object(E.d)("Report by week {start, date} to {end, date}.csv", {
                            start: n.interval.start,
                            end: n.interval.end
                        }, "DevBountyBoardCampaignPage"),
                        csv: Object(i.c)(t).join("\n")
                    }
                }
        },
        epaB: function(e, n, t) {
            "use strict";
            t.r(n);
            var E, a = t("mrSG"),
                i = t("q1tI"),
                N = t("oJmH"),
                o = t("/7QA"),
                r = t("GnwI"),
                T = t("Ue10"),
                _ = t("WSnR"),
                R = (t("kind"), function(e) {
                    return i.createElement("div", {
                        className: "dev-bounty-board-campaign-manager__cell"
                    }, i.createElement(T.Ya, {
                        padding: 1
                    }, e.children))
                }),
                A = t("yR8l"),
                c = t("DMoW"),
                u = t("H3dc");
            ! function(e) {
                e.AccordionHeaderSelector = "dev-bounty-dashboard-campaign-list-accordion-header-selector", e.AccordionBodySelector = "dev-bounty-dashboard-campaign-list-accordion-body-selector", e.LoadingSelector = "dev-bounty-dashboard-campaign-list-loading-indicator", e.EmptySelector = "dev-bounty-dashboard-campaign-list-empty-set"
            }(E || (E = {}));
            var O, d = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.getCampaigns = function(e) {
                            var n = t.props.data.currentUser && t.props.data.currentUser.company;
                            return n && n[e] && n[e].edges || []
                        }, t.toggleAccordion = function() {
                            t.setState({
                                isOpen: !t.state.isOpen
                            })
                        }, t.state = {
                            isOpen: !1 !== n.isOpen
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentDidUpdate = function(e) {
                        !e.data.currentUser && this.props.data.currentUser && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        var e = this,
                            n = [];
                        return Object.values(c.f).forEach(function(t) {
                            n = n.concat(e.getCampaigns(t))
                        }), n.sort(this.compareCampaigns), !this.props.data.currentUser && this.props.data.loading ? this.renderLoading() : 0 === n.length ? this.renderEmpty() : i.createElement(i.Fragment, null, i.createElement(T.a, {
                            title: Object(o.d)("{title} ({count})", {
                                title: this.props.title,
                                count: n.length
                            }, "DevBountyDashboardCampaignList"),
                            isOpen: this.state.isOpen,
                            onClick: this.toggleAccordion,
                            "data-test-selector": E.AccordionHeaderSelector
                        }), i.createElement(T.Fb, {
                            background: T.r.Base,
                            elevation: 1,
                            display: this.state.isOpen ? T.X.Block : T.X.HideAccessible,
                            "data-test-selector": E.AccordionBodySelector,
                            overflow: T.db.Auto
                        }, i.createElement(T.Ib, null, this.props.renderHeader(), i.createElement(T.Jb, null, n.map(this.props.renderRow)))))
                    }, n.prototype.compareCampaigns = function(e, n) {
                        return (n.node && n.node.startTime && new Date(n.node.startTime).getTime() || 0) - (e.node && e.node.startTime && new Date(e.node.startTime).getTime() || 0)
                    }, n.prototype.renderLoading = function() {
                        return i.createElement(T.Fb, {
                            "data-test-selector": E.LoadingSelector,
                            border: !0,
                            borderRadius: T.x.Small,
                            background: T.r.Base,
                            display: T.X.Flex,
                            justifyContent: T.Xa.Center,
                            padding: 1
                        }, i.createElement(T.ab, null))
                    }, n.prototype.renderEmpty = function() {
                        var e = this.props.emptyMessage;
                        return i.createElement(T.Fb, {
                            "data-test-selector": E.EmptySelector,
                            border: !0,
                            borderRadius: T.x.Small,
                            background: T.r.Base,
                            display: T.X.Flex,
                            justifyContent: T.Xa.Center,
                            padding: 1
                        }, i.createElement(T.W, null, e))
                    }, n
                }(i.Component),
                l = Object(N.compose)(Object(r.b)("DevBountyDashboardCampaignList"), Object(A.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                fetchApproved: !!e.fetchApproved,
                                fetchCompleted: !!e.fetchCompleted,
                                fetchLive: !!e.fetchLive,
                                fetchPending: !!e.fetchPending,
                                fetchRejected: !!e.fetchRejected
                            }
                        }
                    }
                }))(d);
            (O || (O = {})).DetailsButtonSelector = "dev-bounty-completed-campaign-details-button";
            var I, D = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderCampaignRow = function(e) {
                            var n = e.node;
                            if (!n) return null;
                            var t = Object(_.f)(new Date(n.startTime)),
                                E = Object(_.f)(new Date(n.endTime)),
                                a = Object(_.b)(e),
                                N = n.brandDetails && n.brandDetails.spentBudgetCents || 0;
                            return i.createElement(T.Nb, {
                                key: n.id
                            }, i.createElement(R, null, i.createElement(T.U, {
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(T.W, {
                                ellipsis: !0,
                                title: n.title,
                                fontSize: T.Ca.Size5
                            }, n.title))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(_.a)(N))), i.createElement(R, null, i.createElement(T.W, {
                                ellipsis: !0,
                                title: a,
                                fontSize: T.Ca.Size5
                            }, a)), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(o.c)(t) + " " + Object(o.j)(t))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(o.c)(E) + " " + Object(o.j)(E))), i.createElement(R, null, i.createElement(T.Ya, {
                                textAlign: T.Sb.Center
                            }, i.createElement(T.z, {
                                "data-test-selector": O.DetailsButtonSelector,
                                fullWidth: !0,
                                type: T.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(o.d)("Details", "DevBountyDashboardCompletedCampaignList"))))))
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            title: Object(o.d)("Completed", "DevBountyDashboardCompletedCampaignList"),
                            fetchCompleted: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow,
                            emptyMessage: Object(o.d)("No completed campaigns were found.", "DevBountyDashboardCompletedCampaignList")
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Lb, null, i.createElement(T.Mb, {
                            label: Object(o.d)("Campaign", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Budget Spent", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Content", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Start (ET)", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("End (ET)", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: ""
                        }))
                    }, n
                }(i.Component),
                S = Object(N.compose)(Object(r.b)("DevBountyDashboardCompletedCampaignList", {
                    autoReportInteractive: !0
                }))(D),
                m = t("/MKj"),
                C = t("fvjX"),
                s = t("aCAx"),
                L = t("PJwv");
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-live-campaign-details-button", e.CancelButtonSelector = "dev-bounty-live-campaign-cancel-button"
            }(I || (I = {}));
            var f = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderCampaignRow = function(e) {
                            var t = e.node;
                            if (!t) return null;
                            var E = Object(_.f)(new Date(t.startTime)),
                                a = Object(_.f)(new Date(t.endTime)),
                                N = Object(_.b)(e),
                                r = t.brandDetails && t.brandDetails.totalBudgetCents || 0;
                            return i.createElement(T.Nb, {
                                key: t.id
                            }, i.createElement(R, null, i.createElement(T.U, {
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.W, {
                                ellipsis: !0,
                                title: t.title,
                                fontSize: T.Ca.Size5
                            }, t.title))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(_.a)(r))), i.createElement(R, null, i.createElement(T.W, {
                                ellipsis: !0,
                                title: N,
                                fontSize: T.Ca.Size5
                            }, N)), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(o.c)(E) + " " + Object(o.j)(E))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(o.c)(a) + " " + Object(o.j)(a))), i.createElement(R, null, i.createElement(T.Ya, {
                                textAlign: T.Sb.Center
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(T.z, {
                                "data-test-selector": I.DetailsButtonSelector,
                                type: T.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(o.d)("Details", "DevBountyDashboardLiveCampaignList")))), i.createElement(T.z, {
                                "data-test-selector": I.CancelButtonSelector,
                                onClick: n.props.showCancelCampaignModal,
                                type: T.F.Hollow
                            }, Object(o.d)("Cancel", "DevBountyDashboardLiveCampaignList")))))
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            emptyMessage: Object(o.d)("No live campaigns were found.", "DevBountyDashboardLiveCampaignList"),
                            title: Object(o.d)("Live", "DevBountyDashboardLiveCampaignList"),
                            fetchLive: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Lb, null, i.createElement(T.Mb, {
                            label: Object(o.d)("Campaign", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Budget", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Content", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Start (ET)", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("End (ET)", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Mb, {
                            label: ""
                        }))
                    }, n
                }(i.Component),
                M = Object(N.compose)(Object(r.b)("DevBountyDashboardLiveCampaignList", {
                    autoReportInteractive: !0
                }))(f);
            var U, p = Object(N.compose)(Object(m.connect)(null, function(e) {
                return Object(C.bindActionCreators)({
                    showCancelCampaignModal: function() {
                        return Object(s.d)(L.a, {})
                    }
                }, e)
            }))(M);
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-queue-campaign-details-button", e.CancelButtonSelector = "dev-bounty-queue-campaign-cancel-button"
            }(U || (U = {}));
            var P = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderCampaignRow = function(e) {
                            var t = e.node;
                            if (!t) return null;
                            var E = Object(_.f)(new Date(t.startTime)),
                                a = Object(_.f)(new Date(t.endTime)),
                                N = Object(_.b)(e),
                                r = t.brandDetails && t.brandDetails.totalBudgetCents || 0;
                            return i.createElement(T.Nb, {
                                key: t.id
                            }, i.createElement(R, null, i.createElement(T.U, {
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.W, {
                                ellipsis: !0,
                                title: t.title,
                                fontSize: T.Ca.Size5
                            }, t.title))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, t.status)), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(_.a)(r))), i.createElement(R, null, i.createElement(T.W, {
                                ellipsis: !0,
                                title: N,
                                fontSize: T.Ca.Size5
                            }, N)), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(o.c)(E) + " " + Object(o.j)(E))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(o.c)(a) + " " + Object(o.j)(a))), i.createElement(R, null, i.createElement(T.Ya, {
                                textAlign: T.Sb.Center
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(T.z, {
                                "data-test-selector": U.DetailsButtonSelector,
                                type: T.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(o.d)("Details", "DevBountyDashboardQueueCampaignList")))), i.createElement(T.z, {
                                "data-test-selector": U.CancelButtonSelector,
                                type: T.F.Hollow,
                                onClick: n.props.showCancelCampaignModal
                            }, Object(o.d)("Cancel", "DevBountyDashboardQueueCampaignList")))))
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            emptyMessage: Object(o.d)("No queued campaigns were found.", "DevBountyDashboardQueueCampaignList"),
                            title: Object(o.d)("In Queue", "DevBountyDashboardQueueCampaignList"),
                            fetchPending: !0,
                            fetchApproved: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Lb, null, i.createElement(T.Mb, {
                            label: Object(o.d)("Campaign", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Approval", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Budget", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Content", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Start (ET)", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("End (ET)", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Mb, {
                            label: ""
                        }))
                    }, n
                }(i.Component),
                b = Object(N.compose)(Object(r.b)("DevBountyDashboardQueueCampaignList", {
                    autoReportInteractive: !0
                }))(P);
            var v, B = Object(N.compose)(Object(m.connect)(null, function(e) {
                return Object(C.bindActionCreators)({
                    showCancelCampaignModal: function() {
                        return Object(s.d)(L.a, {})
                    }
                }, e)
            }))(b);
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-rejected-campaign-details-button", e.DeleteButtonSelector = "dev-bounty-rejected-campaign-delete-button"
            }(v || (v = {}));
            var g = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderCampaignRow = function(e) {
                            var n = e.node;
                            return n ? i.createElement(T.Nb, {
                                key: n.id
                            }, i.createElement(R, null, i.createElement(T.U, {
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(T.W, {
                                ellipsis: !0,
                                title: n.title,
                                fontSize: T.Ca.Size5
                            }, n.title))), i.createElement(R, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, n.rejectionReason)), i.createElement(R, null, i.createElement(T.Ya, {
                                textAlign: T.Sb.Center
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(T.z, {
                                "data-test-selector": v.DetailsButtonSelector,
                                fullWidth: !0,
                                type: T.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(T.Ya, {
                                display: T.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(o.d)("Details", "DevBountyDashboardRejectedCampaignList"))))))) : null
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            emptyMessage: Object(o.d)("No rejected campaigns were found.", "DevBountyDashboardRejectedCampaignList"),
                            title: Object(o.d)("Rejected", "DevBountyDashboardRejectedCampaignList"),
                            fetchRejected: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Lb, null, i.createElement(T.Mb, {
                            label: Object(o.d)("Campaign", "DevBountyDashboardRejectedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: Object(o.d)("Reject Reason", "DevBountyDashboardRejectedCampaignList")
                        }), i.createElement(T.Mb, {
                            label: ""
                        }))
                    }, n
                }(i.Component),
                F = Object(N.compose)(Object(r.b)("DevBountyDashboardRejectedCampaignList", {
                    autoReportInteractive: !0
                }))(g),
                V = (t("n/TW"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(T.Ya, {
                            className: "dev-bounty-board-campaign-manager"
                        }, i.createElement(T.Ya, {
                            padding: {
                                top: 1,
                                bottom: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            display: T.X.Flex,
                            justifyContent: T.Xa.End
                        }, i.createElement(T.z, {
                            "data-test-selector": "dev-bounty-board-campaign-manager-create-campaign-selector",
                            icon: T.ub.Plus,
                            linkTo: "/console/bounty-board/campaign"
                        }, Object(o.d)("Create Campaign", "DevBountyBoardCampaignManagerPage"))), i.createElement(T.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(p, null)), i.createElement(T.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(B, null)), i.createElement(T.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(F, null)), i.createElement(T.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(S, null)))
                    }, n
                }(i.Component)),
                G = Object(N.compose)(Object(r.b)("DevBountyBoardCampaignManagerPagePresentation", {
                    autoReportInteractive: !0
                }))(V);
            t.d(n, "CREATE_CAMPAIGN_SELECTOR", function() {
                return "dev-bounty-board-campaign-manager-create-campaign-selector"
            }), t.d(n, "DevBountyBoardCampaignManagerPagePresentation", function() {
                return V
            }), t.d(n, "DevBountyBoardCampaignManagerPage", function() {
                return G
            })
        },
        kind: function(e, n, t) {},
        "n/TW": function(e, n, t) {}
    }
]);