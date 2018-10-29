(window.webpackJsonp = window.webpackJsonp || []).push([
    [207], {
        "0SKf": function(e, n, t) {
            "use strict";
            t.d(n, "g", function() {
                return a
            }), t.d(n, "b", function() {
                return i
            }), t.d(n, "a", function() {
                return o
            }), t.d(n, "f", function() {
                return r
            }), t.d(n, "h", function() {
                return N
            }), t.d(n, "d", function() {
                return E
            }), t.d(n, "e", function() {
                return c
            }), t.d(n, "c", function() {
                return T
            });
            var E, a = 500,
                i = 5e3,
                o = 15e4,
                r = 5,
                N = 4;
            ! function(e) {
                e.BountiesCompleted = "completedBountyCount", e.Viewers = "totalViewerCount", e.Viewers2m = "twoMinuteViewerCount", e.MinutesWatched = "minutesWatched"
            }(E || (E = {}));
            var T, c = {
                series: [],
                total: 0,
                interval: {
                    start: new Date,
                    end: new Date
                }
            };
            ! function(e) {
                e.BountiesExpanded = "expandedBountyCount", e.BountiesAccepted = "claimedBountyCount", e.BountiesCompleted = "completedBountyCount", e.BountiesTotal = "viewedBountyCount"
            }(T || (T = {}))
        },
        "4brS": function(e, n, t) {},
        DMoW: function(e, n, t) {
            "use strict";
            var E, a, i, o, r, N, T, c, R, _, A, u, d, l, O, I, D, m, s, S, C, L, p, f, M, b, P, v, U, g, B, F, G, V, y, k, H, h, W, Y, j, X, K, w, z, x, Q, Z, J, q, $, ee, ne, te, Ee, ae, ie, oe, re, Ne, Te, ce, Re, _e, Ae, ue, de, le, Oe, Ie, De, me, se, Se, Ce, Le, pe, fe, Me, be, Pe, ve, Ue, ge, Be, Fe, Ge, Ve, ye, ke, He, he, We, Ye, je, Xe, Ke, we, ze, xe, Qe, Ze, Je, qe, $e, en, nn, tn, En, an, on;
            t.d(n, "c", function() {
                    return a
                }), t.d(n, "F", function() {
                    return r
                }), t.d(n, "y", function() {
                    return N
                }), t.d(n, "g", function() {
                    return d
                }), t.d(n, "e", function() {
                    return D
                }), t.d(n, "f", function() {
                    return m
                }), t.d(n, "k", function() {
                    return C
                }), t.d(n, "O", function() {
                    return L
                }), t.d(n, "H", function() {
                    return p
                }), t.d(n, "o", function() {
                    return f
                }), t.d(n, "i", function() {
                    return P
                }), t.d(n, "G", function() {
                    return v
                }), t.d(n, "b", function() {
                    return V
                }), t.d(n, "q", function() {
                    return y
                }), t.d(n, "p", function() {
                    return H
                }), t.d(n, "J", function() {
                    return h
                }), t.d(n, "L", function() {
                    return W
                }), t.d(n, "A", function() {
                    return Y
                }), t.d(n, "M", function() {
                    return j
                }), t.d(n, "r", function() {
                    return w
                }), t.d(n, "n", function() {
                    return z
                }), t.d(n, "K", function() {
                    return x
                }), t.d(n, "a", function() {
                    return Q
                }), t.d(n, "u", function() {
                    return Z
                }), t.d(n, "w", function() {
                    return J
                }), t.d(n, "C", function() {
                    return $
                }), t.d(n, "D", function() {
                    return ee
                }), t.d(n, "B", function() {
                    return te
                }), t.d(n, "E", function() {
                    return Ee
                }), t.d(n, "N", function() {
                    return de
                }), t.d(n, "m", function() {
                    return Le
                }), t.d(n, "l", function() {
                    return pe
                }), t.d(n, "P", function() {
                    return Pe
                }), t.d(n, "z", function() {
                    return Ge
                }), t.d(n, "t", function() {
                    return ke
                }), t.d(n, "j", function() {
                    return he
                }), t.d(n, "h", function() {
                    return We
                }), t.d(n, "v", function() {
                    return Ye
                }), t.d(n, "I", function() {
                    return Xe
                }), t.d(n, "x", function() {
                    return Qe
                }), t.d(n, "d", function() {
                    return En
                }), t.d(n, "s", function() {
                    return an
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
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(r || (r = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(N || (N = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(T || (T = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(c || (c = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(R || (R = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(_ || (_ = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(A || (A = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(u || (u = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(d || (d = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(l || (l = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(O || (O = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(I || (I = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(D || (D = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(m || (m = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(s || (s = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(S || (S = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(C || (C = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(L || (L = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(p || (p = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(f || (f = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(M || (M = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(b || (b = {})),
                function(e) {
                    e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(P || (P = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(v || (v = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(U || (U = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(g || (g = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(B || (B = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(F || (F = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(G || (G = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_IS_VIP = "TARGET_IS_VIP", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(V || (V = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(y || (y = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(k || (k = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(H || (H = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(h || (h = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(W || (W = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(Y || (Y = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(j || (j = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(X || (X = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(K || (K = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(w || (w = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(z || (z = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(x || (x = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(Q || (Q = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(Z || (Z = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(J || (J = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(q || (q = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }($ || ($ = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }(ee || (ee = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ne || (ne = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(te || (te = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(Ee || (Ee = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ae || (ae = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ie || (ie = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(oe || (oe = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(re || (re = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(Ne || (Ne = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(Te || (Te = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(ce || (ce = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(Re || (Re = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(_e || (_e = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(Ae || (Ae = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(ue || (ue = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(de || (de = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(le || (le = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Oe || (Oe = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(Ie || (Ie = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(De || (De = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(me || (me = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(se || (se = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Se || (Se = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Ce || (Ce = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(Le || (Le = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(pe || (pe = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(fe || (fe = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Me || (Me = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(be || (be = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(Pe || (Pe = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(ve || (ve = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(Ue || (Ue = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(ge || (ge = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(Be || (Be = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(Fe || (Fe = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(Ge || (Ge = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(Ve || (Ve = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(ye || (ye = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(ke || (ke = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(He || (He = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(he || (he = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(We || (We = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(Ye || (Ye = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(je || (je = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Xe || (Xe = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(Ke || (Ke = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(we || (we = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(ze || (ze = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(xe || (xe = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(Qe || (Qe = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(Ze || (Ze = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(Je || (Je = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(qe || (qe = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }($e || ($e = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(en || (en = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(nn || (nn = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(tn || (tn = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(En || (En = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(an || (an = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(on || (on = {}))
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

            function i(e) {
                return new Date(function(e) {
                    return e.getTime() - 6e4 * e.getTimezoneOffset()
                }(e))
            }
            t.d(n, "b", function() {
                return E
            }), t.d(n, "c", function() {
                return a
            }), t.d(n, "a", function() {
                return i
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
                o = t("/MKj"),
                r = t("fvjX"),
                N = t("aCAx"),
                T = t("Ue10"),
                c = t("/7QA"),
                R = t("cZKs");
            ! function(e) {
                e.TitleText = "dev-cancel-campaign-modal-title-text", e.ContentText = "dev-create-campaign-content-text", e.CloseButton = "dev-create-campaign-modal-close-button"
            }(E || (E = {}));
            var _ = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.onClose = function() {
                            n.props.onClose()
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(T.Xa, {
                            className: "dev-bounty-board-cancel-campaign-modal"
                        }, i.createElement(T.zb, {
                            borderBottom: !0,
                            padding: 2,
                            textAlign: T.Lb.Center
                        }, i.createElement(T.W, {
                            type: T.Pb.H4,
                            bold: !0,
                            "data-test-selector": E.TitleText
                        }, Object(c.d)("Cancel Campaign", "DevBountyCancelCampaignModal")), i.createElement(R.a, null)), i.createElement(T.Xa, {
                            display: T.X.Flex,
                            flexDirection: T.Aa.Column,
                            padding: 2
                        }, i.createElement(T.W, {
                            type: T.Pb.P,
                            "data-test-selector": E.ContentText
                        }, Object(c.d)("You must contact <x:link>bountyboard@twitch.tv</x:link> in order to cancel your campaign. Once contacted, cancellations typically take 24-48 hours to process.", {
                            "x:link": function(e) {
                                return i.createElement("a", {
                                    href: "mailto:bountyboard@twitch.tv"
                                }, e)
                            }
                        }, "DevBountyBoardCampaignPage")), i.createElement("br", null), i.createElement(T.W, {
                            type: T.Pb.P,
                            "data-test-selector": E.ContentText
                        }, Object(c.d)("By cancelling a campaign early you will only have your unclaimed budget refunded. Broadcasters who have already claimed bounties will have their remaining time to complete the bounty.", "DevBountyCancelCampaignModal"))), i.createElement(T.zb, {
                            alignItems: T.f.Center,
                            background: T.r.Alt2,
                            borderTop: !0,
                            display: T.X.Flex,
                            flexDirection: T.Aa.Row,
                            flexWrap: T.Ba.Wrap,
                            justifyContent: T.Wa.End,
                            padding: 1
                        }, i.createElement(T.z, {
                            onClick: this.onClose,
                            "data-test-selector": E.CloseButton
                        }, Object(c.d)("Close", "DevBountyCancelCampaignModal"))))
                    }, n
                }(i.PureComponent),
                A = (t("4brS"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(T.zb, {
                            background: T.r.Base,
                            className: "dev-bounty-board-cancel-campaign-modal__container"
                        }, i.createElement(_, {
                            onClose: this.props.closeModal
                        }))
                    }, n
                }(i.Component));
            var u = Object(o.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    closeModal: N.c
                }, e)
            })(A);
            t.d(n, !1, function() {
                return A
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
                return N
            }), t.d(n, "e", function() {
                return T
            }), t.d(n, "d", function() {
                return c
            }), t.d(n, "a", function() {
                return R
            });
            var E = t("/7QA"),
                a = t("DMoW"),
                i = t("JQ82"),
                o = t("0SKf"),
                r = function(e) {
                    var n = e.node;
                    if (!n) return "";
                    var t = n.displayName,
                        E = "",
                        i = n.game,
                        o = n.type;
                    if (i && i.displayName && (t = i.displayName), !t) return "";
                    switch (o !== a.e.GAME_TRAILER && o !== a.e.MISC_TRAILER || (E = "[Trailer]"), o) {
                        case a.e.GAME_TRAILER:
                        case a.e.MISC_TRAILER:
                            E = "[Trailer]";
                            break;
                        case a.e.PAY_TO_STREAM:
                            E = (n.availablePlatforms || []).map(function(e) {
                                return "[" + e + "]"
                            }).join(" ");
                            break;
                        default:
                            E = ""
                    }
                    return E ? t + " " + E : t
                },
                N = function(e) {
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
                T = function(e) {
                    var n = Object(i.c)(e).getTime(),
                        t = c(e) ? 4 : 5;
                    return new Date(n - 60 * t * 60 * 1e3)
                },
                c = function(e) {
                    try {
                        return -1 !== Object(E.j)(e, {
                            timeZone: "America/New_York",
                            timeZoneName: "short"
                        }).indexOf("EDT")
                    } catch (e) {
                        return !1
                    }
                },
                R = function(e) {
                    var n = e / 100;
                    return n - Math.floor(n) != 0 ? Object(E.f)(n, {
                        style: "currency",
                        currency: "USD"
                    }) : "$" + Object(E.f)(n)
                }
        },
        epaB: function(e, n, t) {
            "use strict";
            t.r(n);
            var E, a = t("mrSG"),
                i = t("q1tI"),
                o = t("oJmH"),
                r = t("/7QA"),
                N = t("GnwI"),
                T = t("Ue10"),
                c = t("WSnR"),
                R = t("yR8l"),
                _ = t("DMoW"),
                A = t("H3dc");
            ! function(e) {
                e.AccordionHeaderSelector = "dev-bounty-dashboard-campaign-list-accordion-header-selector", e.AccordionBodySelector = "dev-bounty-dashboard-campaign-list-accordion-body-selector", e.LoadingSelector = "dev-bounty-dashboard-campaign-list-loading-indicator", e.EmptySelector = "dev-bounty-dashboard-campaign-list-empty-set"
            }(E || (E = {}));
            var u, d = function(e) {
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
                        return Object.values(_.d).forEach(function(t) {
                            n = n.concat(e.getCampaigns(t))
                        }), n.sort(this.compareCampaigns), !this.props.data.currentUser && this.props.data.loading ? this.renderLoading() : 0 === n.length ? this.renderEmpty() : i.createElement(i.Fragment, null, i.createElement(T.a, {
                            title: Object(r.d)("{title} ({count})", {
                                title: this.props.title,
                                count: n.length
                            }, "DevBountyDashboardCampaignList"),
                            isOpen: this.state.isOpen,
                            onClick: this.toggleAccordion,
                            "data-test-selector": E.AccordionHeaderSelector
                        }), i.createElement(T.zb, {
                            background: T.r.Base,
                            elevation: 1,
                            display: this.state.isOpen ? T.X.Block : T.X.HideAccessible,
                            "data-test-selector": E.AccordionBodySelector,
                            overflow: T.ab.Auto
                        }, i.createElement(T.Cb, null, this.props.renderHeader(), i.createElement(T.Db, null, n.map(this.props.renderRow)))))
                    }, n.prototype.compareCampaigns = function(e, n) {
                        return (n.node && n.node.startTime && new Date(n.node.startTime).getTime() || 0) - (e.node && e.node.startTime && new Date(e.node.startTime).getTime() || 0)
                    }, n.prototype.renderLoading = function() {
                        return i.createElement(T.zb, {
                            "data-test-selector": E.LoadingSelector,
                            border: !0,
                            borderRadius: T.x.Small,
                            background: T.r.Base,
                            display: T.X.Flex,
                            justifyContent: T.Wa.Center,
                            padding: 1
                        }, i.createElement(T.Za, null))
                    }, n.prototype.renderEmpty = function() {
                        var e = this.props.emptyMessage;
                        return i.createElement(T.zb, {
                            "data-test-selector": E.EmptySelector,
                            border: !0,
                            borderRadius: T.x.Small,
                            background: T.r.Base,
                            display: T.X.Flex,
                            justifyContent: T.Wa.Center,
                            padding: 1
                        }, i.createElement(T.W, null, e))
                    }, n
                }(i.Component),
                l = Object(o.compose)(Object(N.b)("DevBountyDashboardCampaignList"), Object(R.a)(A, {
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
            (u || (u = {})).DetailsButtonSelector = "dev-bounty-completed-campaign-details-button";
            var O, I = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            title: Object(r.d)("Completed", "DevBountyDashboardCompletedCampaignList"),
                            fetchCompleted: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow,
                            emptyMessage: Object(r.d)("No completed campaigns were found.", "DevBountyDashboardCompletedCampaignList")
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Fb, null, i.createElement(T.Gb, {
                            label: Object(r.d)("Campaign", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Budget Spent", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Content", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Start (ET)", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("End (ET)", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: ""
                        }))
                    }, n.prototype.renderCampaignRow = function(e) {
                        var n = e.node;
                        if (!n) return null;
                        var t = Object(c.e)(new Date(n.startTime)),
                            E = Object(c.e)(new Date(n.endTime)),
                            a = Object(c.b)(e),
                            o = n.brandDetails && n.brandDetails.spentBudgetCents || 0;
                        return i.createElement(T.Hb, {
                            key: n.id
                        }, i.createElement(T.Eb, null, i.createElement(T.U, {
                            linkTo: "/console/bounty-board/campaign/" + n.id
                        }, i.createElement(T.W, {
                            ellipsis: !0,
                            title: n.title,
                            fontSize: T.Ca.Size5
                        }, n.title))), i.createElement(T.Eb, null, i.createElement(T.W, {
                            fontSize: T.Ca.Size5
                        }, Object(c.a)(o))), i.createElement(T.Eb, null, i.createElement(T.W, {
                            ellipsis: !0,
                            title: a,
                            fontSize: T.Ca.Size5
                        }, a)), i.createElement(T.Eb, null, i.createElement(T.W, {
                            fontSize: T.Ca.Size5
                        }, Object(r.c)(t) + " " + Object(r.j)(t))), i.createElement(T.Eb, null, i.createElement(T.W, {
                            fontSize: T.Ca.Size5
                        }, Object(r.c)(E) + " " + Object(r.j)(E))), i.createElement(T.Eb, {
                            textAlign: T.Lb.Center
                        }, i.createElement(T.Xa, {
                            display: T.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(T.z, {
                            "data-test-selector": u.DetailsButtonSelector,
                            fullWidth: !0,
                            type: T.F.Hollow,
                            linkTo: "/console/bounty-board/campaign/" + n.id
                        }, i.createElement(T.Xa, {
                            display: T.X.Inline,
                            margin: {
                                x: 2
                            }
                        }, Object(r.d)("Details", "DevBountyDashboardCompletedCampaignList"))))))
                    }, n
                }(i.Component),
                D = Object(o.compose)(Object(N.b)("DevBountyDashboardCompletedCampaignList", {
                    autoReportInteractive: !0
                }))(I),
                m = t("/MKj"),
                s = t("fvjX"),
                S = t("aCAx"),
                C = t("PJwv");
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-live-campaign-details-button", e.CancelButtonSelector = "dev-bounty-live-campaign-cancel-button"
            }(O || (O = {}));
            var L = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderCampaignRow = function(e) {
                            var t = e.node;
                            if (!t) return null;
                            var E = Object(c.e)(new Date(t.startTime)),
                                a = Object(c.e)(new Date(t.endTime)),
                                o = Object(c.b)(e),
                                N = t.brandDetails && t.brandDetails.totalBudgetCents || 0;
                            return i.createElement(T.Hb, {
                                key: t.id
                            }, i.createElement(T.Eb, null, i.createElement(T.U, {
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.W, {
                                ellipsis: !0,
                                title: t.title,
                                fontSize: T.Ca.Size5
                            }, t.title))), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(c.a)(N))), i.createElement(T.Eb, null, i.createElement(T.W, {
                                ellipsis: !0,
                                title: o,
                                fontSize: T.Ca.Size5
                            }, o)), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(r.c)(E) + " " + Object(r.j)(E))), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(r.c)(a) + " " + Object(r.j)(a))), i.createElement(T.Eb, {
                                textAlign: T.Lb.Center
                            }, i.createElement(T.Xa, {
                                display: T.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(T.z, {
                                "data-test-selector": O.DetailsButtonSelector,
                                type: T.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.Xa, {
                                display: T.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(r.d)("Details", "DevBountyDashboardLiveCampaignList")))), i.createElement(T.z, {
                                "data-test-selector": O.CancelButtonSelector,
                                onClick: n.props.showCancelCampaignModal,
                                type: T.F.Hollow
                            }, Object(r.d)("Cancel", "DevBountyDashboardLiveCampaignList"))))
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            emptyMessage: Object(r.d)("No live campaigns were found.", "DevBountyDashboardLiveCampaignList"),
                            title: Object(r.d)("Live", "DevBountyDashboardLiveCampaignList"),
                            fetchLive: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Fb, null, i.createElement(T.Gb, {
                            label: Object(r.d)("Campaign", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Budget", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Content", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Start (ET)", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("End (ET)", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(T.Gb, {
                            label: ""
                        }))
                    }, n
                }(i.Component),
                p = Object(o.compose)(Object(N.b)("DevBountyDashboardLiveCampaignList", {
                    autoReportInteractive: !0
                }))(L);
            var f, M = Object(o.compose)(Object(m.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    showCancelCampaignModal: function() {
                        return Object(S.d)(C.a, {})
                    }
                }, e)
            }))(p);
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-queue-campaign-details-button", e.CancelButtonSelector = "dev-bounty-queue-campaign-cancel-button"
            }(f || (f = {}));
            var b = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.renderCampaignRow = function(e) {
                            var t = e.node;
                            if (!t) return null;
                            var E = Object(c.e)(new Date(t.startTime)),
                                a = Object(c.e)(new Date(t.endTime)),
                                o = Object(c.b)(e),
                                N = t.brandDetails && t.brandDetails.totalBudgetCents || 0;
                            return i.createElement(T.Hb, {
                                key: t.id
                            }, i.createElement(T.Eb, null, i.createElement(T.U, {
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.W, {
                                ellipsis: !0,
                                title: t.title,
                                fontSize: T.Ca.Size5
                            }, t.title))), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, t.status)), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(c.a)(N))), i.createElement(T.Eb, null, i.createElement(T.W, {
                                ellipsis: !0,
                                title: o,
                                fontSize: T.Ca.Size5
                            }, o)), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(r.c)(E) + " " + Object(r.j)(E))), i.createElement(T.Eb, null, i.createElement(T.W, {
                                fontSize: T.Ca.Size5
                            }, Object(r.c)(a) + " " + Object(r.j)(a))), i.createElement(T.Eb, {
                                textAlign: T.Lb.Center
                            }, i.createElement(T.Xa, {
                                display: T.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(T.z, {
                                "data-test-selector": f.DetailsButtonSelector,
                                type: T.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + t.id
                            }, i.createElement(T.Xa, {
                                display: T.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(r.d)("Details", "DevBountyDashboardQueueCampaignList")))), i.createElement(T.z, {
                                "data-test-selector": f.CancelButtonSelector,
                                type: T.F.Hollow,
                                onClick: n.props.showCancelCampaignModal
                            }, Object(r.d)("Cancel", "DevBountyDashboardQueueCampaignList"))))
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            emptyMessage: Object(r.d)("No queued campaigns were found.", "DevBountyDashboardQueueCampaignList"),
                            title: Object(r.d)("In Queue", "DevBountyDashboardQueueCampaignList"),
                            fetchPending: !0,
                            fetchApproved: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Fb, null, i.createElement(T.Gb, {
                            label: Object(r.d)("Campaign", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Approval", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Budget", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Content", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Start (ET)", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("End (ET)", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(T.Gb, {
                            label: ""
                        }))
                    }, n
                }(i.Component),
                P = Object(o.compose)(Object(N.b)("DevBountyDashboardQueueCampaignList", {
                    autoReportInteractive: !0
                }))(b);
            var v, U = Object(o.compose)(Object(m.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    showCancelCampaignModal: function() {
                        return Object(S.d)(C.a, {})
                    }
                }, e)
            }))(P);
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-rejected-campaign-details-button", e.DeleteButtonSelector = "dev-bounty-rejected-campaign-delete-button"
            }(v || (v = {}));
            var g = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(l, {
                            emptyMessage: Object(r.d)("No rejected campaigns were found.", "DevBountyDashboardRejectedCampaignList"),
                            title: Object(r.d)("Rejected", "DevBountyDashboardRejectedCampaignList"),
                            fetchRejected: !0,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, n.prototype.renderCampaignHeader = function() {
                        return i.createElement(T.Fb, null, i.createElement(T.Gb, {
                            label: Object(r.d)("Campaign", "DevBountyDashboardRejectedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: Object(r.d)("Reject Reason", "DevBountyDashboardRejectedCampaignList")
                        }), i.createElement(T.Gb, {
                            label: ""
                        }))
                    }, n.prototype.renderCampaignRow = function(e) {
                        var n = e.node;
                        return n ? i.createElement(T.Hb, {
                            key: n.id
                        }, i.createElement(T.Eb, null, i.createElement(T.U, {
                            linkTo: "/console/bounty-board/campaign/" + n.id
                        }, i.createElement(T.W, {
                            ellipsis: !0,
                            title: n.title,
                            fontSize: T.Ca.Size5
                        }, n.title))), i.createElement(T.Eb, null, i.createElement(T.W, {
                            fontSize: T.Ca.Size5
                        }, n.rejectionReason)), i.createElement(T.Eb, {
                            textAlign: T.Lb.Center
                        }, i.createElement(T.Xa, {
                            display: T.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(T.z, {
                            "data-test-selector": v.DetailsButtonSelector,
                            fullWidth: !0,
                            type: T.F.Hollow,
                            linkTo: "/console/bounty-board/campaign/" + n.id
                        }, i.createElement(T.Xa, {
                            display: T.X.Inline,
                            margin: {
                                x: 2
                            }
                        }, Object(r.d)("Details", "DevBountyDashboardRejectedCampaignList")))))) : null
                    }, n
                }(i.Component),
                B = Object(o.compose)(Object(N.b)("DevBountyDashboardRejectedCampaignList", {
                    autoReportInteractive: !0
                }))(g),
                F = (t("n/TW"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return i.createElement(T.Xa, {
                            className: "dev-bounty-board-campaign-manager"
                        }, i.createElement(T.Xa, {
                            padding: {
                                top: 1,
                                bottom: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            display: T.X.Flex,
                            justifyContent: T.Wa.End
                        }, i.createElement(T.z, {
                            "data-test-selector": "dev-bounty-board-campaign-manager-create-campaign-selector",
                            icon: T.pb.Plus,
                            linkTo: "/console/bounty-board/campaign"
                        }, Object(r.d)("Create Campaign", "DevBountyBoardCampaignManagerPage"))), i.createElement(T.Xa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(M, null)), i.createElement(T.Xa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(U, null)), i.createElement(T.Xa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(B, null)), i.createElement(T.Xa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(D, null)))
                    }, n
                }(i.Component)),
                G = Object(o.compose)(Object(N.b)("DevBountyBoardCampaignManagerPagePresentation", {
                    autoReportInteractive: !0
                }))(F);
            t.d(n, "CREATE_CAMPAIGN_SELECTOR", function() {
                return "dev-bounty-board-campaign-manager-create-campaign-selector"
            }), t.d(n, "DevBountyBoardCampaignManagerPagePresentation", function() {
                return F
            }), t.d(n, "DevBountyBoardCampaignManagerPage", function() {
                return G
            })
        },
        "n/TW": function(e, n, t) {}
    }
]);