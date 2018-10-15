(window.webpackJsonp = window.webpackJsonp || []).push([
    [208], {
        "0SKf": function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return T
            }), n.d(t, "f", function() {
                return _
            }), n.d(t, "h", function() {
                return N
            }), n.d(t, "d", function() {
                return E
            }), n.d(t, "e", function() {
                return R
            }), n.d(t, "c", function() {
                return o
            });
            var E, a = 500,
                i = 5e3,
                T = 15e4,
                _ = 5,
                N = 4;
            ! function(e) {
                e.BountiesCompleted = "completedBountyCount", e.Viewers = "totalViewerCount", e.Viewers2m = "twoMinuteViewerCount", e.MinutesWatched = "minutesWatched"
            }(E || (E = {}));
            var o, R = {
                series: [],
                total: 0,
                interval: {
                    start: new Date,
                    end: new Date
                }
            };
            ! function(e) {
                e.BountiesExpanded = "expandedBountyCount", e.BountiesAccepted = "claimedBountyCount", e.BountiesCompleted = "completedBountyCount", e.BountiesTotal = "viewedBountyCount"
            }(o || (o = {}))
        },
        "4brS": function(e, t, n) {},
        DMoW: function(e, t, n) {
            "use strict";
            var E, a, i, T, _, N, o, R, r, A, O, I, D, c, u, l, d, S, C, L, s, m, M, U, p, P, b, B, f, F, G, g, v, V, y, H, W, Y, h, k, j, K, X, w, x, z, Q, Z, J, q, $, ee, te, ne, Ee, ae, ie, Te, _e, Ne, oe, Re, re, Ae, Oe, Ie, De, ce, ue, le, de, Se, Ce, Le, se, me, Me, Ue, pe, Pe, be, Be, fe, Fe, Ge, ge, ve, Ve, ye, He, We, Ye, he, ke, je, Ke, Xe, we, xe, ze, Qe, Ze, Je, qe, $e, et, tt, nt, Et, at, it, Tt, _t, Nt;
            n.d(t, "c", function() {
                    return a
                }), n.d(t, "F", function() {
                    return _
                }), n.d(t, "y", function() {
                    return N
                }), n.d(t, "g", function() {
                    return D
                }), n.d(t, "e", function() {
                    return d
                }), n.d(t, "f", function() {
                    return S
                }), n.d(t, "j", function() {
                    return s
                }), n.d(t, "O", function() {
                    return m
                }), n.d(t, "H", function() {
                    return M
                }), n.d(t, "o", function() {
                    return U
                }), n.d(t, "G", function() {
                    return b
                }), n.d(t, "b", function() {
                    return v
                }), n.d(t, "q", function() {
                    return V
                }), n.d(t, "p", function() {
                    return H
                }), n.d(t, "J", function() {
                    return W
                }), n.d(t, "L", function() {
                    return Y
                }), n.d(t, "A", function() {
                    return h
                }), n.d(t, "M", function() {
                    return k
                }), n.d(t, "r", function() {
                    return X
                }), n.d(t, "n", function() {
                    return w
                }), n.d(t, "K", function() {
                    return x
                }), n.d(t, "a", function() {
                    return z
                }), n.d(t, "u", function() {
                    return Q
                }), n.d(t, "w", function() {
                    return Z
                }), n.d(t, "C", function() {
                    return q
                }), n.d(t, "D", function() {
                    return $
                }), n.d(t, "B", function() {
                    return te
                }), n.d(t, "E", function() {
                    return ne
                }), n.d(t, "N", function() {
                    return Ie
                }), n.d(t, "l", function() {
                    return se
                }), n.d(t, "k", function() {
                    return me
                }), n.d(t, "P", function() {
                    return Pe
                }), n.d(t, "m", function() {
                    return ge
                }), n.d(t, "z", function() {
                    return ve
                }), n.d(t, "t", function() {
                    return We
                }), n.d(t, "i", function() {
                    return he
                }), n.d(t, "h", function() {
                    return ke
                }), n.d(t, "v", function() {
                    return je
                }), n.d(t, "I", function() {
                    return Xe
                }), n.d(t, "x", function() {
                    return qe
                }), n.d(t, "d", function() {
                    return Tt
                }), n.d(t, "s", function() {
                    return _t
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
                }(T || (T = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(_ || (_ = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(N || (N = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(o || (o = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(R || (R = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(r || (r = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(A || (A = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(O || (O = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(I || (I = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(D || (D = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(c || (c = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(u || (u = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(l || (l = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(d || (d = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(S || (S = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(C || (C = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(L || (L = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(s || (s = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(m || (m = {})),
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
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(b || (b = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(B || (B = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(f || (f = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(F || (F = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(G || (G = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(g || (g = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(v || (v = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(V || (V = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(y || (y = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(H || (H = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(W || (W = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(Y || (Y = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(h || (h = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(k || (k = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(j || (j = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(K || (K = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(X || (X = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(w || (w = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(x || (x = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(z || (z = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(Q || (Q = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(Z || (Z = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }(J || (J = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }(q || (q = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }($ || ($ = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ee || (ee = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(te || (te = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ne || (ne = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(Ee || (Ee = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ae || (ae = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ie || (ie = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(Te || (Te = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(_e || (_e = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(Ne || (Ne = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(oe || (oe = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(Re || (Re = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(re || (re = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(Ae || (Ae = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(Oe || (Oe = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(Ie || (Ie = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(De || (De = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ce || (ce = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(ue || (ue = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(le || (le = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(de || (de = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(Se || (Se = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(Ce || (Ce = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(Le || (Le = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(se || (se = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(me || (me = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Me || (Me = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(Ue || (Ue = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(pe || (pe = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(Pe || (Pe = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(be || (be = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(Be || (Be = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(fe || (fe = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(Fe || (Fe = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(Ge || (Ge = {})),
                function(e) {
                    e.CREATIVE = "CREATIVE", e.GAME = "GAME", e.OTHER = "OTHER"
                }(ge || (ge = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(ve || (ve = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Ve || (Ve = {})),
                function(e) {
                    e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.REQUESTING_USER_NOT_PERMITTED = "REQUESTING_USER_NOT_PERMITTED", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG"
                }(ye || (ye = {})),
                function(e) {
                    e.ACCOUNT_TOO_YOUNG = "ACCOUNT_TOO_YOUNG", e.COMMUNITY_NAME_EXISTS = "COMMUNITY_NAME_EXISTS", e.COMMUNITY_NAME_INVALID = "COMMUNITY_NAME_INVALID", e.COMMUNITY_NAME_RESERVED = "COMMUNITY_NAME_RESERVED", e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.INVALID_LANGUAGE = "INVALID_LANGUAGE", e.OWN_TO_MANY_COMMUNITIES = "OWN_TO_MANY_COMMUNITIES", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG", e.TWO_FACTOR_NOT_ENABLED = "TWO_FACTOR_NOT_ENABLED", e.UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL"
                }(He || (He = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(We || (We = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(Ye || (Ye = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(he || (he = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(ke || (ke = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(je || (je = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ke || (Ke = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Xe || (Xe = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(we || (we = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.TARGET_USER_MOD = "TARGET_USER_MOD", e.TARGET_USER_OWNER = "TARGET_USER_OWNER", e.TARGET_USER_SELF = "TARGET_USER_SELF", e.TARGET_USER_STAFF = "TARGET_USER_STAFF"
                }(xe || (xe = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.TARGET_USER_MOD = "TARGET_USER_MOD", e.TARGET_USER_OWNER = "TARGET_USER_OWNER", e.TARGET_USER_SELF = "TARGET_USER_SELF", e.TARGET_USER_STAFF = "TARGET_USER_STAFF"
                }(ze || (ze = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(Qe || (Qe = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(Ze || (Ze = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(Je || (Je = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(qe || (qe = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }($e || ($e = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(et || (et = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(tt || (tt = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(nt || (nt = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(Et || (Et = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(at || (at = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(it || (it = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(Tt || (Tt = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(_t || (_t = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(Nt || (Nt = {}))
        },
        H3dc: function(e, t, n) {
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
                                value: "status"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "BountyCampaignStatus"
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
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "status"
                                                    }
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
                    end: 269
                }
            };
            E.loc.source = {
                body: '#import "twilight/sites/dev/features/bounty-board-dashboard/models/campaign-list-bounty.gql"\nquery DevBountyBoardDashboard_CampaignList($status: BountyCampaignStatus!) {\ncurrentUser {\nid\ncompany {\nid\nbountyCampaigns(status: $status) {\nedges {\n...devBountyEdge\n}\n}\n}\n}\n}',
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
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("Phj1").definitions)), e.exports = E
        },
        MFJw: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "fragment devCompanyGame on Game {\nid\nboxArtURL(width: 85 height: 113)\ncoverURL(width: 566 height: 85)\ndisplayName\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        PJwv: function(e, t, n) {
            "use strict";
            var E, a = n("mrSG"),
                i = n("q1tI"),
                T = n("/MKj"),
                _ = n("fvjX"),
                N = n("aCAx"),
                o = n("Ue10"),
                R = n("/7QA"),
                r = n("cZKs");
            ! function(e) {
                e.TitleText = "dev-cancel-campaign-modal-title-text", e.ContentText = "dev-create-campaign-content-text", e.CloseButton = "dev-create-campaign-modal-close-button"
            }(E || (E = {}));
            var A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClose = function() {
                            t.props.onClose()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.Wa, {
                            className: "dev-bounty-board-cancel-campaign-modal"
                        }, i.createElement(o.yb, {
                            borderBottom: !0,
                            padding: 2,
                            textAlign: o.Kb.Center
                        }, i.createElement(o.W, {
                            type: o.Ob.H4,
                            bold: !0,
                            "data-test-selector": E.TitleText
                        }, Object(R.d)("Cancel Campaign", "DevBountyCancelCampaignModal")), i.createElement(r.a, null)), i.createElement(o.Wa, {
                            display: o.X.Flex,
                            flexDirection: o.Z.Column,
                            padding: 2
                        }, i.createElement(o.W, {
                            type: o.Ob.P,
                            "data-test-selector": E.ContentText
                        }, Object(R.d)("You must contact <x:link>bountyboard@twitch.tv</x:link> in order to cancel your campaign. Once contacted, cancellations typically take 24-48 hours to process.", {
                            "x:link": function(e) {
                                return i.createElement("a", {
                                    href: "mailto:bountyboard@twitch.tv"
                                }, e)
                            }
                        }, "DevBountyBoardCampaignPage")), i.createElement("br", null), i.createElement(o.W, {
                            type: o.Ob.P,
                            "data-test-selector": E.ContentText
                        }, Object(R.d)("By cancelling a campaign early you will only have your unclaimed budget refunded. Broadcasters who have already claimed bounties will have their remaining time to complete the bounty.", "DevBountyCancelCampaignModal"))), i.createElement(o.yb, {
                            alignItems: o.f.Center,
                            background: o.r.Alt2,
                            borderTop: !0,
                            display: o.X.Flex,
                            flexDirection: o.Z.Row,
                            flexWrap: o.Aa.Wrap,
                            justifyContent: o.Va.End,
                            padding: 1
                        }, i.createElement(o.z, {
                            onClick: this.onClose,
                            "data-test-selector": E.CloseButton
                        }, Object(R.d)("Close", "DevBountyCancelCampaignModal"))))
                    }, t
                }(i.PureComponent),
                O = (n("4brS"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.yb, {
                            background: o.r.Base,
                            className: "dev-bounty-board-cancel-campaign-modal__container"
                        }, i.createElement(A, {
                            onClose: this.props.closeModal
                        }))
                    }, t
                }(i.Component));
            var I = Object(T.connect)(null, function(e) {
                return Object(_.bindActionCreators)({
                    closeModal: N.c
                }, e)
            })(O);
            n.d(t, !1, function() {
                return O
            }), n.d(t, "a", function() {
                return I
            })
        },
        Phj1: function(e, t, n) {
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
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("MFJw").definitions)), e.exports = E
        },
        WSnR: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return T
            }), n.d(t, "b", function() {
                return _
            });
            var E = n("/7QA"),
                a = n("DMoW"),
                i = n("0SKf"),
                T = function(e) {
                    var t = e.node;
                    if (!t) return "";
                    var n = t.displayName,
                        E = "",
                        i = t.game,
                        T = t.type;
                    if (!n && i && (n = i.displayName), !n) return "";
                    switch (T !== a.e.GAME_TRAILER && T !== a.e.MISC_TRAILER || (E = "[Trailer]"), T) {
                        case a.e.GAME_TRAILER:
                        case a.e.MISC_TRAILER:
                            E = "[Trailer]";
                            break;
                        case a.e.PAY_TO_STREAM:
                            E = (t.availablePlatforms || []).map(function(e) {
                                return "[" + e + "]"
                            }).join(" ");
                            break;
                        default:
                            E = ""
                    }
                    return E ? n + " " + E : n
                },
                _ = function(e) {
                    switch (e) {
                        case i.d.BountiesCompleted:
                            return Object(E.d)("Bounties Completed", "DevBountyBoardCampaignPage");
                        case i.d.Viewers:
                            return Object(E.d)("Viewers", "DevBountyBoardCampaignPage");
                        case i.d.Viewers2m:
                            return Object(E.d)("Viewers >2 min", "DevBountyBoardCampaignPage");
                        case i.d.MinutesWatched:
                            return Object(E.d)("Minutes Watched", "DevBountyBoardCampaignPage");
                        default:
                            return ""
                    }
                }
        },
        epaB: function(e, t, n) {
            "use strict";
            n.r(t);
            var E, a = n("mrSG"),
                i = n("q1tI"),
                T = n("oJmH"),
                _ = n("/7QA"),
                N = n("GnwI"),
                o = n("Ue10"),
                R = n("DMoW"),
                r = n("WSnR"),
                A = n("yR8l"),
                O = n("H3dc");
            ! function(e) {
                e.AccordionHeaderSelector = "dev-bounty-dashboard-campaign-list-accordion-header-selector", e.AccordionBodySelector = "dev-bounty-dashboard-campaign-list-accordion-body-selector", e.LoadingSelector = "dev-bounty-dashboard-campaign-list-loading-indicator", e.EmptySelector = "dev-bounty-dashboard-campaign-list-empty-set"
            }(E || (E = {}));
            var I, D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.toggleAccordion = function() {
                            n.setState({
                                isOpen: !n.state.isOpen
                            })
                        }, n.state = {
                            isOpen: !1 !== t.isOpen
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.data.currentUser && this.props.data.currentUser && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data.currentUser && this.props.data.currentUser.company,
                            t = e && e.bountyCampaigns && e.bountyCampaigns.edges || [];
                        return !this.props.data.currentUser && this.props.data.loading ? this.renderLoading() : 0 === t.length ? this.renderEmpty() : i.createElement(i.Fragment, null, i.createElement(o.a, {
                            title: Object(_.d)("{title} ({count})", {
                                title: this.props.title,
                                count: t.length
                            }, "DevBountyDashboardCampaignList"),
                            isOpen: this.state.isOpen,
                            onClick: this.toggleAccordion,
                            "data-test-selector": E.AccordionHeaderSelector
                        }), i.createElement(o.yb, {
                            background: o.r.Base,
                            elevation: 1,
                            display: this.state.isOpen ? o.X.Block : o.X.HideAccessible,
                            "data-test-selector": E.AccordionBodySelector,
                            overflow: o.Za.Auto
                        }, i.createElement(o.Bb, null, this.props.renderHeader(), i.createElement(o.Cb, null, t.map(this.props.renderRow)))))
                    }, t.prototype.renderLoading = function() {
                        return i.createElement(o.yb, {
                            "data-test-selector": E.LoadingSelector,
                            border: !0,
                            borderRadius: o.x.Small,
                            background: o.r.Base,
                            display: o.X.Flex,
                            justifyContent: o.Va.Center,
                            padding: 1
                        }, i.createElement(o.Ya, null))
                    }, t.prototype.renderEmpty = function() {
                        var e = this.props.emptyMessage;
                        return i.createElement(o.yb, {
                            "data-test-selector": E.EmptySelector,
                            border: !0,
                            borderRadius: o.x.Small,
                            background: o.r.Base,
                            display: o.X.Flex,
                            justifyContent: o.Va.Center,
                            padding: 1
                        }, i.createElement(o.W, null, e))
                    }, t
                }(i.Component),
                c = Object(T.compose)(Object(N.b)("DevBountyDashboardCampaignList"), Object(A.a)(O, {
                    options: function(e) {
                        return {
                            variables: {
                                status: e.status
                            }
                        }
                    }
                }))(D);
            (I || (I = {})).DetailsButtonSelector = "dev-bounty-completed-campaign-details-button";
            var u, l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c, {
                            title: Object(_.d)("Completed", "DevBountyDashboardCompletedCampaignList"),
                            status: R.d.COMPLETED,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow,
                            emptyMessage: Object(_.d)("No completed campaigns were found.", "DevBountyDashboardCompletedCampaignList")
                        })
                    }, t.prototype.renderCampaignHeader = function() {
                        return i.createElement(o.Eb, null, i.createElement(o.Fb, {
                            label: Object(_.d)("Campaign", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Budget Spent", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Content", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Start (UTC)", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("End (UTC)", "DevBountyDashboardCompletedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: ""
                        }))
                    }, t.prototype.renderCampaignRow = function(e) {
                        var t = e.node;
                        if (!t) return null;
                        var n = new Date(t.startTime),
                            E = new Date(t.endTime),
                            a = Object(r.a)(e),
                            T = (t.brandDetails && t.brandDetails.spentBudgetCents || 0) / 100;
                        return i.createElement(o.Gb, {
                            key: t.id
                        }, i.createElement(o.Db, null, i.createElement(o.U, {
                            linkTo: "/console/bounty-board/campaign/" + t.id
                        }, i.createElement(o.W, {
                            ellipsis: !0,
                            title: t.title,
                            fontSize: o.Ba.Size5
                        }, t.title))), i.createElement(o.Db, null, i.createElement(o.W, {
                            fontSize: o.Ba.Size5
                        }, Object(_.d)("${budget}", {
                            budget: T
                        }, "DevBountyDashboardCompletedCampaignList"))), i.createElement(o.Db, null, i.createElement(o.W, {
                            ellipsis: !0,
                            title: a,
                            fontSize: o.Ba.Size5
                        }, a)), i.createElement(o.Db, null, i.createElement(o.W, {
                            fontSize: o.Ba.Size5
                        }, Object(_.c)(n) + " " + Object(_.j)(n))), i.createElement(o.Db, null, i.createElement(o.W, {
                            fontSize: o.Ba.Size5
                        }, Object(_.c)(E) + " " + Object(_.j)(E))), i.createElement(o.Db, {
                            textAlign: o.Kb.Center
                        }, i.createElement(o.Wa, {
                            display: o.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(o.z, {
                            "data-test-selector": I.DetailsButtonSelector,
                            fullWidth: !0,
                            type: o.F.Hollow,
                            linkTo: "/console/bounty-board/campaign/" + t.id
                        }, i.createElement(o.Wa, {
                            display: o.X.Inline,
                            margin: {
                                x: 2
                            }
                        }, Object(_.d)("Details", "DevBountyDashboardCompletedCampaignList"))))))
                    }, t
                }(i.Component),
                d = Object(T.compose)(Object(N.b)("DevBountyDashboardCompletedCampaignList", {
                    autoReportInteractive: !0
                }))(l),
                S = n("/MKj"),
                C = n("fvjX"),
                L = n("aCAx"),
                s = n("PJwv");
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-live-campaign-details-button", e.CancelButtonSelector = "dev-bounty-live-campaign-cancel-button"
            }(u || (u = {}));
            var m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCampaignRow = function(e) {
                            var n = e.node;
                            if (!n) return null;
                            var E = new Date(n.startTime),
                                a = new Date(n.endTime),
                                T = Object(r.a)(e),
                                N = (n.brandDetails && n.brandDetails.totalBudgetCents || 0) / 100;
                            return i.createElement(o.Gb, {
                                key: n.id
                            }, i.createElement(o.Db, null, i.createElement(o.U, {
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(o.W, {
                                ellipsis: !0,
                                title: n.title,
                                fontSize: o.Ba.Size5
                            }, n.title))), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, Object(_.d)("${budget}", {
                                budget: N
                            }, "DevBountyDashboardLiveCampaignList"))), i.createElement(o.Db, null, i.createElement(o.W, {
                                ellipsis: !0,
                                title: T,
                                fontSize: o.Ba.Size5
                            }, T)), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, Object(_.c)(E) + " " + Object(_.j)(E))), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, Object(_.c)(a) + " " + Object(_.j)(a))), i.createElement(o.Db, {
                                textAlign: o.Kb.Center
                            }, i.createElement(o.Wa, {
                                display: o.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(o.z, {
                                "data-test-selector": u.DetailsButtonSelector,
                                type: o.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(o.Wa, {
                                display: o.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(_.d)("Details", "DevBountyDashboardLiveCampaignList")))), i.createElement(o.z, {
                                "data-test-selector": u.CancelButtonSelector,
                                onClick: t.props.showCancelCampaignModal,
                                type: o.F.Hollow
                            }, Object(_.d)("Cancel", "DevBountyDashboardLiveCampaignList"))))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c, {
                            emptyMessage: Object(_.d)("No live campaigns were found.", "DevBountyDashboardLiveCampaignList"),
                            title: Object(_.d)("Live", "DevBountyDashboardLiveCampaignList"),
                            status: R.d.LIVE,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, t.prototype.renderCampaignHeader = function() {
                        return i.createElement(o.Eb, null, i.createElement(o.Fb, {
                            label: Object(_.d)("Campaign", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Budget", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Content", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Start (UTC)", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("End (UTC)", "DevBountyDashboardLiveCampaignList")
                        }), i.createElement(o.Fb, {
                            label: ""
                        }))
                    }, t
                }(i.Component),
                M = Object(T.compose)(Object(N.b)("DevBountyDashboardLiveCampaignList", {
                    autoReportInteractive: !0
                }))(m);
            var U, p = Object(T.compose)(Object(S.connect)(null, function(e) {
                return Object(C.bindActionCreators)({
                    showCancelCampaignModal: function() {
                        return Object(L.d)(s.a, {})
                    }
                }, e)
            }))(M);
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-queue-campaign-details-button", e.CancelButtonSelector = "dev-bounty-queue-campaign-cancel-button"
            }(U || (U = {}));
            var P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCampaignRow = function(e) {
                            var n = e.node;
                            if (!n) return null;
                            var E = new Date(n.startTime),
                                a = new Date(n.endTime),
                                T = Object(r.a)(e),
                                N = (n.brandDetails && n.brandDetails.totalBudgetCents || 0) / 100;
                            return i.createElement(o.Gb, {
                                key: n.id
                            }, i.createElement(o.Db, null, i.createElement(o.U, {
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(o.W, {
                                ellipsis: !0,
                                title: n.title,
                                fontSize: o.Ba.Size5
                            }, n.title))), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, n.status)), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, Object(_.d)("${budget}", {
                                budget: N
                            }, "DevBountyDashboardQueueCampaignList"))), i.createElement(o.Db, null, i.createElement(o.W, {
                                ellipsis: !0,
                                title: T,
                                fontSize: o.Ba.Size5
                            }, T)), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, Object(_.c)(E) + " " + Object(_.j)(E))), i.createElement(o.Db, null, i.createElement(o.W, {
                                fontSize: o.Ba.Size5
                            }, Object(_.c)(a) + " " + Object(_.j)(a))), i.createElement(o.Db, {
                                textAlign: o.Kb.Center
                            }, i.createElement(o.Wa, {
                                display: o.X.Inline,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(o.z, {
                                "data-test-selector": U.DetailsButtonSelector,
                                type: o.F.Hollow,
                                linkTo: "/console/bounty-board/campaign/" + n.id
                            }, i.createElement(o.Wa, {
                                display: o.X.Inline,
                                margin: {
                                    x: 2
                                }
                            }, Object(_.d)("Details", "DevBountyDashboardQueueCampaignList")))), i.createElement(o.z, {
                                "data-test-selector": U.CancelButtonSelector,
                                type: o.F.Hollow,
                                onClick: t.props.showCancelCampaignModal
                            }, Object(_.d)("Cancel", "DevBountyDashboardQueueCampaignList"))))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c, {
                            emptyMessage: Object(_.d)("No queued campaigns were found.", "DevBountyDashboardQueueCampaignList"),
                            title: Object(_.d)("In Queue", "DevBountyDashboardQueueCampaignList"),
                            status: R.d.PENDING,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, t.prototype.renderCampaignHeader = function() {
                        return i.createElement(o.Eb, null, i.createElement(o.Fb, {
                            label: Object(_.d)("Campaign", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Approval", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Budget", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Content", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Start (UTC)", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("End (UTC)", "DevBountyDashboardQueueCampaignList")
                        }), i.createElement(o.Fb, {
                            label: ""
                        }))
                    }, t
                }(i.Component),
                b = Object(T.compose)(Object(N.b)("DevBountyDashboardQueueCampaignList", {
                    autoReportInteractive: !0
                }))(P);
            var B, f = Object(T.compose)(Object(S.connect)(null, function(e) {
                return Object(C.bindActionCreators)({
                    showCancelCampaignModal: function() {
                        return Object(L.d)(s.a, {})
                    }
                }, e)
            }))(b);
            ! function(e) {
                e.DetailsButtonSelector = "dev-bounty-rejected-campaign-details-button", e.DeleteButtonSelector = "dev-bounty-rejected-campaign-delete-button"
            }(B || (B = {}));
            var F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(c, {
                            emptyMessage: Object(_.d)("No rejected campaigns were found.", "DevBountyDashboardRejectedCampaignList"),
                            title: Object(_.d)("Rejected", "DevBountyDashboardRejectedCampaignList"),
                            status: R.d.REJECTED,
                            renderHeader: this.renderCampaignHeader,
                            renderRow: this.renderCampaignRow
                        })
                    }, t.prototype.renderCampaignHeader = function() {
                        return i.createElement(o.Eb, null, i.createElement(o.Fb, {
                            label: Object(_.d)("Campaign", "DevBountyDashboardRejectedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: Object(_.d)("Reject Reason", "DevBountyDashboardRejectedCampaignList")
                        }), i.createElement(o.Fb, {
                            label: ""
                        }))
                    }, t.prototype.renderCampaignRow = function(e) {
                        var t = e.node;
                        return t ? i.createElement(o.Gb, {
                            key: t.id
                        }, i.createElement(o.Db, null, i.createElement(o.U, {
                            linkTo: "/console/bounty-board/campaign/" + t.id
                        }, i.createElement(o.W, {
                            ellipsis: !0,
                            title: t.title,
                            fontSize: o.Ba.Size5
                        }, t.title))), i.createElement(o.Db, null, i.createElement(o.W, {
                            fontSize: o.Ba.Size5
                        }, t.rejectionReason)), i.createElement(o.Db, {
                            textAlign: o.Kb.Center
                        }, i.createElement(o.Wa, {
                            display: o.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(o.z, {
                            "data-test-selector": B.DetailsButtonSelector,
                            type: o.F.Hollow,
                            linkTo: "/console/bounty-board/campaign/" + t.id
                        }, i.createElement(o.Wa, {
                            display: o.X.Inline,
                            margin: {
                                x: 2
                            }
                        }, Object(_.d)("Details", "DevBountyDashboardRejectedCampaignList")))), i.createElement(o.z, {
                            "data-test-selector": B.DeleteButtonSelector,
                            type: o.F.Hollow
                        }, Object(_.d)("Delete", "DevBountyDashboardRejectedCampaignList")))) : null
                    }, t
                }(i.Component),
                G = Object(T.compose)(Object(N.b)("DevBountyDashboardRejectedCampaignList", {
                    autoReportInteractive: !0
                }))(F),
                g = (n("n/TW"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.Wa, {
                            className: "dev-bounty-board-campaign-manager"
                        }, i.createElement(o.Wa, {
                            padding: {
                                top: 1,
                                bottom: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            display: o.X.Flex,
                            justifyContent: o.Va.End
                        }, i.createElement(o.z, {
                            "data-test-selector": "dev-bounty-board-campaign-manager-create-campaign-selector",
                            icon: o.ob.Plus,
                            linkTo: "/console/bounty-board/campaign"
                        }, Object(_.d)("Create Campaign", "DevBountyBoardCampaignManagerPage"))), i.createElement(o.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(p, null)), i.createElement(o.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(f, null)), i.createElement(o.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(G, null)), i.createElement(o.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(d, null)))
                    }, t
                }(i.Component)),
                v = Object(T.compose)(Object(N.b)("DevBountyBoardCampaignManagerPagePresentation", {
                    autoReportInteractive: !0
                }))(g);
            n.d(t, "CREATE_CAMPAIGN_SELECTOR", function() {
                return "dev-bounty-board-campaign-manager-create-campaign-selector"
            }), n.d(t, "DevBountyBoardCampaignManagerPagePresentation", function() {
                return g
            }), n.d(t, "DevBountyBoardCampaignManagerPage", function() {
                return v
            })
        },
        "n/TW": function(e, t, n) {}
    }
]);