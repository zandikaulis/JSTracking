(window.webpackJsonp = window.webpackJsonp || []).push([
    [156], {
        "+58i": function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("NAv5"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("HEnu"),
                d = n("u5aL"),
                c = n("8Ad5"),
                u = n("HGFl"),
                p = n("Ue10"),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.optionElement();
                        return this.props.disabled && this.props.disabledMessage ? o.createElement(p.Yb, {
                            direction: p.ac.Bottom,
                            align: p.Zb.Left,
                            width: 130,
                            display: p.X.Flex,
                            label: this.props.disabledMessage
                        }, e) : e
                    }, t.prototype.optionElement = function() {
                        var e = this.props,
                            t = e.displayValue,
                            n = e.selected,
                            a = e.value,
                            i = e.onClick,
                            r = e.disabled;
                        return o.createElement(p.Ua, {
                            hover: n,
                            "data-value": a,
                            "data-display-value": t,
                            onClick: i,
                            disabled: r,
                            type: p.Va.Alpha
                        }, o.createElement(p.Xa, {
                            refDelegate: this.props.refDelegate,
                            padding: .5
                        }, t || a))
                    }, t
                }(o.Component),
                h = n("Rzn4"),
                g = (n("ZYLp"), new Date("INVALID DATE")),
                f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onFocus = function() {
                            n.setState({
                                isOpen: !0
                            })
                        }, n.onInputChange = function(e) {
                            var t = e.currentTarget.value;
                            t !== n.state.displayValue && n.setValue(t)
                        }, n.onKeyDown = function(e) {
                            if ((e.charCode || e.keyCode) === c.a.Tab) {
                                var t = n.formatTime(n.state.displayValue);
                                n.setValue(t, t, !0)
                            }
                        }, n.closeDropdown = function() {
                            n.setState({
                                isOpen: !1
                            })
                        }, n.onBlur = function(e) {
                            var t = n.formatTime(e.currentTarget.value);
                            n.setValue(t, t)
                        }, n.onClickTime = function(e) {
                            var t = e.currentTarget.getAttribute("data-value"),
                                a = e.currentTarget.getAttribute("data-display-value") || t;
                            n.setValue(a, a, !0)
                        }, n.setInputRef = function(e) {
                            return n.textInput = e
                        }, n.setSelectedTimeRef = function(e) {
                            return n.selectedTime = e
                        };
                        var a = t.defaultDate ? n.timeToString(t.defaultDate) : "";
                        return n.state = {
                            isOpen: !1,
                            displayValue: a,
                            value: a
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
                        this.state.isOpen && !t.isOpen && this.selectedTime && this.selectedTime.scrollIntoView && this.selectedTime.scrollIntoView()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.options.map(function(t) {
                                return o.createElement(m, i.__assign({}, t, {
                                    key: t.value,
                                    onClick: e.onClickTime,
                                    selected: t.value === e.state.value,
                                    refDelegate: t.value === e.state.value ? e.setSelectedTimeRef : void 0
                                }))
                            });
                        return o.createElement(p.Xa, {
                            position: p.jb.Relative,
                            "data-a-target": "time-pick-field",
                            className: "time-picker"
                        }, o.createElement(d.a, {
                            onClickOut: this.closeDropdown
                        }, o.createElement(p.Ra, {
                            type: p.Ta.Text,
                            onFocus: this.onFocus,
                            onChange: this.onInputChange,
                            onBlur: this.onBlur,
                            onKeyDown: this.onKeyDown,
                            refDelegate: this.setInputRef,
                            value: this.state.displayValue
                        }), o.createElement(p.Xa, {
                            className: "time-picker__balloon",
                            position: p.jb.Absolute
                        }, o.createElement(p.u, {
                            noTail: !0,
                            show: this.state.isOpen,
                            "data-a-target": "time-selector-balloon"
                        }, o.createElement(p.Eb, {
                            className: "time-picker__dropdown"
                        }, t)))))
                    }, t.prototype.getTime = function(e) {
                        try {
                            return Object(u.d)(e || this.state.value)
                        } catch (e) {
                            return g
                        }
                    }, t.prototype.setValue = function(e, t, n) {
                        var a = this.props.options.find(function(n) {
                            return n.displayValue === (t || e)
                        });
                        e = a && a.value ? a.value : e, t = a && a.displayValue ? a.displayValue : t || e, this.setState({
                            isOpen: (!this.state.isOpen || !n) && this.state.isOpen,
                            displayValue: t,
                            value: e,
                            time: this.getTime(e)
                        }), this.notifyChange(e)
                    }, t.prototype.notifyChange = function(e) {
                        if (this.props.onChange) try {
                            var t = Object(u.d)(e, new Date);
                            this.props.onChange(t, e)
                        } catch (t) {
                            this.props.onChange(g, e)
                        }
                    }, t.prototype.timeToString = function(e) {
                        return Object(u.b)(e, u.a.timeString)
                    }, t.prototype.formatTime = function(e) {
                        var t = Object(h.a)(e);
                        if (this.props.validateTime && this.props.validateTime(t)) {
                            var n = Object(u.d)(t, new Date);
                            t = this.timeToString(n)
                        }
                        return t
                    }, t
                }(o.Component),
                v = n("y6KF");

            function b(e) {
                void 0 === e && (e = void 0);
                for (var t = [], n = ["00", "30"], a = e ? e.getHours() : 0; a < 24; ++a)
                    for (var i = 0, r = n; i < r.length; i++) {
                        var o = r[i];
                        a > 11 ? t.push((12 === a ? 12 : a - 12) + ":" + o + "pm") : t.push((0 === a ? 12 : a) + ":" + o + "am")
                    }
                return e && e.getMinutes() >= 30 ? t.splice(0, 2) : e && t.splice(0, 1), t
            }! function(e) {
                e.Now = "NOW"
            }(a || (a = {}));
            var E = new Date("INVALID DATE"),
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onChangeTime = function(e, t) {
                            if (t === a.Now) {
                                var i = new Date;
                                n.setDateTime(i, i, t)
                            } else n.setTime(e, t)
                        }, n.onChangeDate = function(e) {
                            Object(r.isToday)(e) || n.state.timeValue !== a.Now || n.setTime(E, ""), n.setDate(e)
                        };
                        var i = n.props.defaultDate || Object(r.setMinutes)(Object(r.addHours)(new Date, 3), 0);
                        return n.state = {
                            computedDateTime: i,
                            time: i,
                            date: i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(p.Xa, {
                            padding: {
                                right: 2
                            },
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(p.Ea, {
                            id: "event-start-date",
                            label: this.props.dateLabel,
                            error: this.state.invalidDate,
                            errorMessage: this.props.dateErrorMessage
                        }, o.createElement(l.a, {
                            inputProps: {
                                readOnly: !0
                            },
                            defaultDate: this.state.date,
                            onChange: this.onChangeDate
                        }))), o.createElement(p.Ea, {
                            id: "event-start-time",
                            label: this.props.timeLabel,
                            error: this.state.invalidTime,
                            errorMessage: this.props.timeErrorMessage
                        }, o.createElement(f, {
                            defaultDate: this.state.time,
                            onChange: this.onChangeTime,
                            validateTime: h.c,
                            options: this.generateTimeOptions()
                        })))
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        this.state.computedDateTime === t.computedDateTime && this.state.timeValue === t.timeValue || this.props.onChange && this.props.onChange(t.timeValue === a.Now ? new Date : t.computedDateTime)
                    }, t.prototype.generateValidTimeStrings = function() {
                        return Object(r.isToday)(this.state.date) && !this.props.allowPast ? b(new Date) : b()
                    }, t.prototype.generateTimeOptions = function() {
                        var e = this.generateValidTimeStrings().map(function(e) {
                            return {
                                value: e,
                                disabled: !1
                            }
                        });
                        return this.props.removeNow || e.unshift({
                            value: a.Now,
                            displayValue: Object(s.d)("Now", "EventModalDateTimePicker"),
                            disabled: !this.props.video || this.props.video.status !== v.l,
                            disabledMessage: Object(s.d)("Video is still being processed", "EventModalDateTimePicker")
                        }), e
                    }, t.prototype.setDateTime = function(e, t, n) {
                        var a = this.computeDateTime(e, t);
                        this.setState({
                            date: e,
                            time: t,
                            timeValue: n,
                            computedDateTime: a,
                            invalidDate: !this.props.allowPast && Object(r.isPast)(Object(r.endOfDay)(e)) || !Object(r.isValid)(e),
                            invalidTime: !Object(r.isValid)(t)
                        })
                    }, t.prototype.setTime = function(e, t) {
                        var n = this.state.date,
                            a = this.computeDateTime(n, e);
                        this.setState({
                            time: e,
                            timeValue: t,
                            computedDateTime: a,
                            invalidDate: !this.props.allowPast && Object(r.isPast)(Object(r.endOfDay)(n)),
                            invalidTime: !this.props.allowPast && Object(r.isPast)(a) || !Object(r.isValid)(a)
                        })
                    }, t.prototype.setDate = function(e) {
                        var t = this.computeDateTime(e, this.state.time);
                        this.setState({
                            date: e,
                            computedDateTime: t,
                            invalidDate: !this.props.allowPast && Object(r.isPast)(Object(r.endOfDay)(e)) || !Object(r.isValid)(t),
                            invalidTime: !this.props.allowPast && Object(r.isPast)(t)
                        })
                    }, t.prototype.computeDateTime = function(e, t) {
                        return e && t && Object(r.isValid)(e) && Object(r.isValid)(t) ? (e.setHours(t.getHours()), e.setMinutes(t.getMinutes()), e.setSeconds(0), e) : E
                    }, t
                }(o.Component);
            n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, "a", function() {
                return y
            })
        },
        "+AC8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var a = n("/7QA"),
                i = n("QzU5");

            function r(e) {
                var t;
                switch (e.toUpperCase()) {
                    case i.a.Upload:
                        t = Object(a.d)("Upload", "VideoManagerVideoCard");
                        break;
                    case i.a.Archive:
                        t = Object(a.d)("Past Broadcast", "VideoManagerVideoCard");
                        break;
                    case i.a.Highlight:
                        t = Object(a.d)("Highlight", "VideoManagerVideoCard");
                        break;
                    case i.a.PastPremiere:
                        t = Object(a.d)("Past Premiere", "VideoManagerVideoCard");
                        break;
                    case i.a.PremiereUpload:
                        t = Object(a.d)("Premiere Upload", "VideoManagerVideoCard");
                        break;
                    default:
                        t = ""
                }
                return t
            }

            function o(e) {
                if (!e) return e;
                var t = e;
                switch (e.toUpperCase()) {
                    case i.a.Upload:
                        t = [i.a.Upload, i.a.PremiereUpload].join(",")
                }
                return t.toLowerCase()
            }
        },
        "+AN2": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("aCAx"),
                o = n("kRBY"),
                s = n("XDQu"),
                l = n("mrSG"),
                d = n("/7QA"),
                c = n("QzU5"),
                u = n("SDEh"),
                p = n("edgk"),
                m = n("Fxe2"),
                h = n("VtCy");

            function g(e, t) {
                return {
                    vod_id: t,
                    language: e.language,
                    description: e.description,
                    title: e.title,
                    start_time: new Date(e.startTime).toISOString(),
                    image_id: e.imageID,
                    image_url: e.imageUrl,
                    game_id: parseInt(e.game.id, 10),
                    time_zone_id: e.timeZoneID
                }
            }

            function f(e) {
                return {
                    __typename: "TwitchEvent",
                    id: e.premiere.id,
                    eventID: e.premiere.event._id,
                    title: e.premiere.event.title,
                    imageID: e.premiere.event.image_id,
                    imageUrl: e.premiere.event.image_url,
                    description: e.premiere.event.description,
                    ownerID: e.premiere.event.owner_id,
                    game: {
                        __typename: "Game",
                        id: e.premiere.game.id.toString(),
                        name: e.premiere.game.name
                    },
                    language: e.premiere.event.language,
                    startTime: new Date(e.premiere.event.start_time),
                    endTime: new Date(e.premiere.event.end_time),
                    timeZoneID: e.premiere.event.time_zone_id
                }
            }

            function v(e) {
                var t = {
                    __typename: "Video",
                    id: Object(m.a)(e._id) || "",
                    title: e.title,
                    url: e.url,
                    description: e.description,
                    broadcastType: e.broadcast_type,
                    lengthSeconds: e.length,
                    thumbnails: e.thumbnails.template,
                    preview: e.preview.template,
                    publishedAt: e.published_at,
                    deleteAt: e.delete_at,
                    viewCount: e.views,
                    viewableAt: e.viewable_at,
                    scope: e.viewable.toUpperCase(),
                    status: e.status,
                    language: e.language,
                    game: {
                        __typename: "Game",
                        id: "",
                        name: e.game
                    },
                    tags: e.tag_list ? e.tag_list.split(",") : [],
                    restriction: b(e.restriction)
                };
                if (e.muted_segments && (t.mutedSegments = e.muted_segments), e.failure && (t.failure = {
                        vodID: e.failure.vod_id,
                        errorCode: e.failure.error_code,
                        errorMessage: e.failure.error_message,
                        createdAt: e.failure.created_at
                    }), e.premiere && (t.premiere = {
                        status: e.premiere.status,
                        id: e.premiere.id
                    }, e.premiere.event)) {
                    var n = {
                        __typename: "EventModel",
                        id: e.premiere.id,
                        eventID: e.premiere.event._id,
                        title: e.premiere.event.title,
                        imageID: e.premiere.event.cover_image_id || null,
                        imageUrl: e.premiere.event.cover_image_url || null,
                        description: e.premiere.event.description,
                        endTime: new Date(e.premiere.event.end_time),
                        game: {
                            id: e.premiere.game.id,
                            name: e.premiere.game.name,
                            __typename: "Game"
                        },
                        language: e.premiere.event.language,
                        ownerID: e.premiere.event.owner_id,
                        startTime: new Date(e.premiere.event.start_time),
                        timeZoneID: e.premiere.event.time_zone_id
                    };
                    t.premiere.event = n
                }
                return t
            }

            function b(e) {
                var t = {
                    restrictionType: h.RestrictionType.Everyone,
                    productName: "owlallaccess2018",
                    title: "All-Access Pass"
                };
                if (!e) return t;
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return d.p.logger.error(e, "Unable to parse restriction json: ${restrictionJson}"), t
                }
            }

            function E(e) {
                return {
                    description: e.description,
                    game: e.game ? e.game.name : null,
                    language: e.language,
                    notifications: {
                        email: {
                            custom_text: "",
                            enabled: !1,
                            sent_at: null
                        },
                        channel_feed: {
                            custom_text: "",
                            enabled: !1,
                            sent_at: null
                        }
                    },
                    tag_list: e.tags.join(","),
                    thumbnail_path: e.preview,
                    title: e.title,
                    restriction: null,
                    viewable: e.scope.toLowerCase(),
                    viewable_at: e.viewableAt
                }
            }
            var y, C = n("YwGE"),
                _ = n("1G35"),
                T = n("+AC8"),
                D = n("b6Yk"),
                S = "videoManager.VIDEO_SAVED",
                k = "videoManager.VIDEO_SAVING",
                w = "videoManager.FETCH_VIDEO_SUCCESS",
                O = "videoManager.FETCH_VIDEOS_SUCCESS",
                M = "videoManager.FETCH_VIDEOS_FAILED",
                I = "videoManager.FETCH_PROCESSING_SUCCESS",
                V = "videoManager.MUTED_TRACKS_FETCHED",
                x = "videoManager.VIDEO_PROCESSING_SUCCEEDED",
                A = "videoManager.VIDEO_PROCESSING_FAILED",
                j = "videoManager.VIDEO_SCHEDULED",
                N = "videoManager.VODCAST_QUEUE_FETCHED",
                F = "videoManager.ADDED_VIDEO_TO_VODCAST_QUEUE",
                P = "videoManager.REQUEST_ERRORED",
                R = "videoManager.VIDEOS_LOADING",
                U = "videoManager.VIDEO_LOADING",
                L = "videoManager.PROCESSING_VIDEOS_LOADING",
                X = "videoManager.MUTED_TRACKS_LOADING",
                W = "videoManager.CLEAR_MUTED_TRACKS",
                B = "videoManager.VIDEO_UPLOAD_REMOVED",
                G = "videoManager.VIDEO_DELETE_SUCCESS",
                z = "videoManager.ACCESS_ALLOWED",
                H = "videoManager.ACCESS_FORBIDDEN",
                Q = "videoManager.DOWNLOAD_INFO_FETCHED",
                K = "videoManager.DOWNLOAD_BEGAN",
                q = "videoManager.DOWNLOAD_FAILED",
                Y = "videoManager.EDIT_MODAL_ERRORS_CLEARED",
                Z = "videoManager.CHANNEL_CHANGED",
                J = "videoManager.EDITING_VIDEO_CLEARED",
                $ = "videoManager.UPLOADS_SUBMITTED",
                ee = "videoManager.UPLOAD_STARTED",
                te = "videoManager.UPLOAD_VIDEO_CREATED",
                ne = "videoManager.UPLOAD_PROGRESSED",
                ae = "videoManager.UPLOAD_COMPLETED",
                ie = "videoManager.UPLOAD_VALIDATION_FAILED",
                re = "videoManager.UPLOAD_FAILED",
                oe = "videoManager.UPLOAD_ERRORS_DELETED",
                se = "videoManager.YOUTUBE_CONNECTED",
                le = "videoManager.CUSTOM_THUMBNAIL_PROCESSING",
                de = "videoManager.CUSTOM_THUMBNAIL_ERRORED",
                ce = "videoManager.APPEAL_SUBMITTING",
                ue = "videoManager.APPEAL_ERROR",
                pe = "videoManager.APPEAL_SUBMITTED",
                me = "videoManager.PREMIERE_DELETED",
                he = "videoManager.VIDEO_PUBLISHED_WITHOUT_PREMIERE",
                ge = n("y6KF"),
                fe = n("Ue10");
            ! function(e) {
                e[e.Delete = 0] = "Delete", e[e.EditPremiereEvent = 1] = "EditPremiereEvent", e[e.ImmediatePublish = 2] = "ImmediatePublish", e[e.DeletePremiere = 3] = "DeletePremiere"
            }(y || (y = {}));
            var ve = function() {
                    return Object(d.d)("Processing...", "VideoManagerThumnbnail")
                },
                be = {
                    unscheduled: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Schedule Premiere", "UnscheduledVideoManagerCard"),
                                action: y.EditPremiereEvent,
                                buttonType: fe.F.Hollow,
                                dropdownActions: [{
                                    message: Object(d.d)("Publish without Premiere", "UnscheduledVideoManagerCard"),
                                    action: y.ImmediatePublish
                                }]
                            },
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Not scheduled", "VideoManagerThumnbnail"),
                                overlayIcon: fe.tb.Lock,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    scheduled: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Edit Premiere event", "VideoManagerCard"),
                                action: y.EditPremiereEvent,
                                buttonType: fe.F.Hollow,
                                dropdownActions: [{
                                    message: Object(d.d)("Cancel Premiere", "VideoManagerCard"),
                                    action: y.DeletePremiere
                                }]
                            },
                            subheader: {
                                duration: !0,
                                scheduledDate: !0,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Scheduled", "VideoManagerThumnbnail"),
                                overlayIcon: fe.tb.Check,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    started: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !0,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: null,
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    processingAndScheduled: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Edit Premiere event", "ProcessingScheduledVideoManagerCard"),
                                action: y.EditPremiereEvent,
                                buttonType: fe.F.Hollow,
                                dropdownActions: [{
                                    message: Object(d.d)("Cancel Premiere", "ProcessingScheduledVideoManagerCard"),
                                    action: y.DeletePremiere
                                }]
                            },
                            subheader: {
                                duration: !0,
                                scheduledDate: !0,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Processing...", "ProcessingScheduledVideoManagerThumnbnail"),
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !0,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    premiereFailed: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Reschedule Premiere", "VideoManagerCard"),
                                action: y.EditPremiereEvent,
                                buttonType: fe.F.Hollow,
                                dropdownActions: [{
                                    message: Object(d.d)("Cancel Premiere", "UnscheduledVideoManagerCard"),
                                    action: y.DeletePremiere
                                }]
                            },
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Premiere failed", "VideoManagerThumnbnail"),
                                overlayIcon: fe.tb.Warning,
                                error: !0
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    uploadFailed: function() {
                        return {
                            menu: {
                                show: !1,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Cancel upload", "VideoManagerCard"),
                                action: y.Delete,
                                buttonType: fe.F.Text
                            },
                            subheader: {
                                duration: !1,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Error", "VideoManagerThumnbnail"),
                                overlayIcon: fe.tb.Warning,
                                error: !0
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !1,
                            sharable: !1
                        }
                    },
                    processingFailed: function() {
                        return {
                            menu: {
                                show: !1,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Remove", "VideoManagerProcessingCard"),
                                action: y.Delete,
                                buttonType: fe.F.Text
                            },
                            subheader: {
                                duration: !1,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Processing error", "VideoManagerProcessingCard"),
                                overlayIcon: fe.tb.Warning,
                                error: !0
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !1,
                            sharable: !1
                        }
                    },
                    processing: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Schedule Premiere", "ProcessingVideoManagerCard"),
                                action: y.EditPremiereEvent,
                                buttonType: fe.F.Hollow,
                                dropdownActions: [{
                                    message: Object(d.d)("Publish without Premiere", "ProcessingVideoManagerCard")
                                }]
                            },
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: ve(),
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !0,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    processingHighlight: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !0,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !0
                            },
                            callToActionButton: {
                                message: Object(d.d)("Cancel", "ProcessingVideoManagerCard"),
                                action: y.Delete,
                                buttonType: fe.F.Text
                            },
                            subheader: {
                                duration: !1,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: ve(),
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !0,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    uploadInProgress: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Cancel upload", "VideoManagerUploadInProgressCard"),
                                action: y.Delete,
                                buttonType: fe.F.Text
                            },
                            subheader: {
                                duration: !1,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Uploading...", "VideoManagerThumnbnail"),
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !0,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    uploading: function() {
                        return {
                            menu: {
                                show: !1,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Cancel upload", "VideoManagerUploadingCard"),
                                action: y.Delete,
                                buttonType: fe.F.Text
                            },
                            subheader: {
                                duration: !1,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: ve(),
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !0,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !1
                        }
                    },
                    queued: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !1,
                                canAddToVodcast: !1,
                                canAddToCollection: !1
                            },
                            callToActionButton: {
                                message: Object(d.d)("Cancel upload", "VideoManagerUploadQueuedCard"),
                                action: y.Delete,
                                buttonType: fe.F.Text
                            },
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !1
                            },
                            thumbnail: {
                                message: Object(d.d)("Queued", "VideoManagerThumnbnail"),
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !1,
                            sharable: !1
                        }
                    },
                    expiring: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !0,
                                canDownload: !0,
                                canHighlight: !0,
                                canAddToVodcast: !0,
                                canAddToCollection: !0
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !0
                            },
                            thumbnail: {
                                message: Object(d.d)("Expiring", "VideoManagerThumnbnail"),
                                overlayIcon: fe.tb.Warning,
                                error: !0
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !0
                            },
                            interactableMetaData: !0,
                            sharable: !0
                        }
                    },
                    archive: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !0,
                                canDownload: !0,
                                canHighlight: !0,
                                canAddToVodcast: !0,
                                canAddToCollection: !0
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !0
                            },
                            thumbnail: {
                                message: null,
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !0
                        }
                    },
                    pastPremiere: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !0,
                                canDownload: !0,
                                canHighlight: !1,
                                canAddToVodcast: !0,
                                canAddToCollection: !0
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !0
                            },
                            thumbnail: {
                                message: null,
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !0
                        }
                    },
                    upload: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !0,
                                canDownload: !0,
                                canHighlight: !1,
                                canAddToVodcast: !0,
                                canAddToCollection: !0
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !0
                            },
                            thumbnail: {
                                message: null,
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !0
                        }
                    },
                    highlight: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !0,
                                canDownload: !0,
                                canHighlight: !1,
                                canAddToVodcast: !0,
                                canAddToCollection: !0
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !0
                            },
                            thumbnail: {
                                message: null,
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !0
                        }
                    },
                    recordingArchive: function() {
                        return {
                            menu: {
                                show: !0,
                                canEdit: !1,
                                canDownload: !1,
                                canHighlight: !0,
                                canAddToVodcast: !0,
                                canAddToCollection: !0
                            },
                            callToActionButton: null,
                            subheader: {
                                duration: !0,
                                scheduledDate: !1,
                                publishedDateBroadcastType: !0
                            },
                            thumbnail: {
                                message: null,
                                overlayIcon: null,
                                error: !1
                            },
                            subrow: {
                                spinner: !1,
                                uploadProgress: !1,
                                expirationWarning: !1
                            },
                            interactableMetaData: !0,
                            sharable: !0
                        }
                    }
                },
                Ee = 7,
                ye = 86400;

            function Ce(e) {
                return e.status === h.VIDEO_STATUS_PENDING_TRANSCODE || e.status === h.VIDEO_STATUS_TRANSCODING || je(e) || Se(e)
            }

            function _e(e) {
                return !!(e && e.errors.length > 0)
            }

            function Te(e) {
                return e.status === h.VIDEO_STATUS_FAILED
            }

            function De(e) {
                return !!e && e.status === _.a.uploading
            }

            function Se(e) {
                return e.status === h.VIDEO_STATUS_UPLOADING
            }

            function ke(e) {
                return e.menu.canAddToVodcast || e.menu.canAddToCollection
            }

            function we(e) {
                var t = Pe(e);
                return void 0 !== t && t < Ee
            }

            function Oe(e) {
                return !!e && e.status === _.a.queued
            }

            function Me(e) {
                return !!e.premiere && e.premiere.status.toLowerCase() === h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_STARTED
            }

            function Ie(e) {
                return !(!e.premiere || !e.premiere.event) && e.premiere.status.toLowerCase() === h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_SCHEDULED
            }

            function Ve(e) {
                return e.status === h.VIDEO_STATUS_RECORDED && e.broadcastType.toLowerCase() === c.a.Archive.toLowerCase()
            }

            function xe(e) {
                return e.status === h.VIDEO_STATUS_RECORDING && e.broadcastType.toLowerCase() === c.a.Archive.toLowerCase()
            }

            function Ae(e) {
                return Ne(e) && e.status === h.VIDEO_STATUS_RECORDED
            }

            function je(e) {
                return Ne(e) && e.status === ge.o
            }

            function Ne(e) {
                return e.broadcastType.toLowerCase() === c.a.Highlight.toLowerCase()
            }

            function Fe(e, t) {
                if (Oe(t)) return be.queued();
                if (_e(t)) return be.uploadFailed();
                if (De(t)) return be.uploadInProgress();
                if (je(e)) return be.processingHighlight();
                if (Te(e)) return be.processingFailed();
                if (function(e) {
                        return Ie(e) && Ce(e)
                    }(e)) return be.processingAndScheduled();
                if (Se(e)) return be.uploading();
                if (Ce(e)) return be.processing();
                if (function(e) {
                        return !!e.premiere && (e.premiere.status.toLowerCase() === h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_UNSCHEDULED || e.premiere.status.toLowerCase() === h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_SCHEDULED && !e.premiere.event || e.premiere.status.toLowerCase() === h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_FAILED && !e.premiere.event)
                    }(e)) return be.unscheduled();
                if (Ie(e)) return be.scheduled();
                if (Me(e)) return be.started();
                if (function(e) {
                        return !!e.premiere && e.premiere.status.toLowerCase() === h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_FAILED
                    }(e)) return be.premiereFailed();
                var n = void 0;
                return n = we(e) ? be.expiring() : Ve(e) ? be.archive() : xe(e) ? be.recordingArchive() : function(e) {
                    return e.status === h.VIDEO_STATUS_RECORDED && e.broadcastType.toLowerCase() === c.a.PastPremiere.toLowerCase()
                }(e) ? be.pastPremiere() : Ae(e) ? be.highlight() : be.upload(), e.mutedSegments && (n.thumbnail = {
                    message: Object(d.d)("Muted audio", "VideoManagerThumbnail"),
                    overlayIcon: fe.tb.Muted,
                    error: !0
                }), n
            }

            function Pe(e) {
                if (e.deleteAt) return Math.max(0, Math.ceil((new Date(e.deleteAt).valueOf() - Date.now()) / 1e3 / ye))
            }

            function Re(e) {
                return Ve(e) || Ae(e)
            }

            function Ue(e) {
                return e.status === h.VIDEO_STATUS_RECORDED || xe(e)
            }
            var Le, Xe = 1e4;

            function We(e) {
                return function e(t) {
                    return l.__awaiter(this, void 0, Promise, function() {
                        var n, a, i, r, o, s, c, u, p;
                        return l.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if (!(n = t.store.getState().videoManager.processingVideos.data)) return Le = setTimeout(function() {
                                        e(t)
                                    }, Xe), [2];
                                    if (!(a = n.filter(function(e) {
                                            return Ce(e)
                                        }))) return [3, 7];
                                    if (0 === a.length) return Le = setTimeout(function() {
                                        e(t)
                                    }, Xe), [2];
                                    i = a.map(function(e) {
                                        return e.id
                                    }), l.label = 1;
                                case 1:
                                    l.trys.push([1, 6, , 7]), r = 0, o = i, l.label = 2;
                                case 2:
                                    return r < o.length ? (s = o[r], [4, D.a.get("/v5/videos/" + s)]) : [3, 5];
                                case 3:
                                    c = l.sent(), Ce(u = v(c.body)) || (Te(u) ? t.store.dispatch({
                                        type: A,
                                        video: u
                                    }) : t.store.dispatch({
                                        type: x,
                                        video: u
                                    })), l.label = 4;
                                case 4:
                                    return r++, [3, 2];
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return p = l.sent(), d.k.error(p, "Failed to update processing videos in the background. Checking again in " + Xe / 1e3 + " seconds..."), [3, 7];
                                case 7:
                                    return Le = setTimeout(function() {
                                        e(t)
                                    }, Xe), [2]
                            }
                        })
                    })
                }(e)
            }

            function Be() {
                clearTimeout(Le)
            }
            var Ge = "https://vod-secure.twitch.tv/_404/404_processing_{width}x{height}.png";

            function ze(e) {
                var t = e.toString(),
                    n = -1 !== t.indexOf("custom") ? 1 : 0,
                    a = t.match(/\/\/?thumb\/(.*)/);
                if (!a) {
                    var i = new Error("Error extracting generated thumbnail path from URL");
                    throw d.k.error(i, "Failed to delete thumbnail"), i
                }
                var r = a[n];
                return 0 === n && (r = r.substr(1)), r.replace(/-%7Bwidth%7Dx%7Bheight%7D/, "")
            }

            function He(e, t, n) {
                return e.replace("{width}", t.toString()).replace("{height}", n.toString())
            }
            var Qe = {
                    width: 640,
                    height: 360
                },
                Ke = 133,
                qe = 75;

            function Ye(e) {
                return function(t, n) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: n
                        }
                    })
                }
            }
            var Ze = 5e3;

            function Je(e, t, n) {
                return function e(t, n, a, i) {
                    return l.__awaiter(this, void 0, Promise, function() {
                        var r, o;
                        return l.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, , 3]), [4, D.a.getOrThrow("/v5/vods/" + t + "/download")];
                                case 1:
                                    switch ((r = s.sent()).body.status) {
                                        case C.a.Complete:
                                            return n.store.dispatch({
                                                type: K,
                                                videoId: t
                                            }), window.location.href = r.body.download_url, [2, null];
                                        case C.a.Failed:
                                            return n.store.dispatch({
                                                type: q,
                                                videoId: t
                                            }), i.push(Object(d.d)("Download Failed: We couldn't make a download file for this video.", "VideoManagerDownloadStatus")), [2, null];
                                        default:
                                            return a && n.store.dispatch({
                                                type: Q,
                                                download: r.body,
                                                videoId: t
                                            }), setTimeout(function() {
                                                e(t, n, !1, i)
                                            }, Ze), [2, r.body]
                                    }
                                    return [3, 3];
                                case 2:
                                    return o = s.sent(), n.store.dispatch({
                                        type: q,
                                        videoId: t
                                    }), i.push(Object(d.d)("Download Failed: We couldn't make a download file for this video.", "VideoManager")), d.k.error(o, "Failed to download file"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }(e, t, !0, n)
            }
            var $e = n("cr+I"),
                et = 0,
                tt = void 0;

            function nt(e) {
                ++et > 1 || (tt || (tt = function(e) {
                    return function(t) {
                        if (e().videoManager.videoUploads.some(function(e) {
                                return Oe(e) || De(e)
                            })) {
                            var n = Object(d.d)("You have video uploads in progress, are you sure you want to leave Twitch and cancel the uploads?", "VideoManager");
                            return t.returnValue = n, n
                        }
                    }
                }(e)), window.addEventListener("beforeunload", tt))
            }
            var at = function() {
                    function e(e, t, n) {
                        this.file = e, this.client = t, this.onProgressUpdate = n, this.isStopped = !1, this.totalFileParts = Math.ceil(this.file.size / this.client.partSizeBytes), this.inProgressByteIndexes = []
                    }
                    return e.prototype.uploadFile = function(e) {
                        void 0 === e && (e = 0);
                        for (var t = [], n = 0; n < this.client.maxConcurrentRequests; n++) {
                            var a = this.sendFileParts(e + n, this.client.maxConcurrentRequests);
                            a && t.push(a)
                        }
                        return Promise.all(t)
                    }, e.prototype.stop = function() {
                        this.isStopped = !0
                    }, e.prototype.sendFileParts = function(e, t) {
                        return l.__awaiter(this, void 0, Promise, function() {
                            var n, a, i, r, o = this;
                            return l.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        n = function(e) {
                                            var t, n, i;
                                            return l.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        if (a.isStopped) return [2, {
                                                            value: Promise.resolve()
                                                        }];
                                                        t = function(t) {
                                                            o.inProgressByteIndexes[e] = t, o.updateFileProgress()
                                                        }, r.label = 1;
                                                    case 1:
                                                        return r.trys.push([1, 3, , 4]), n = a.sliceFile(e), [4, a.client.transferPart(n, t)];
                                                    case 2:
                                                        return r.sent(), a.inProgressByteIndexes[e] = n.blob.size, a.updateFileProgress(), [3, 4];
                                                    case 3:
                                                        throw i = r.sent(), a.stop(), i;
                                                    case 4:
                                                        return [2]
                                                }
                                            })
                                        }, a = this, i = e, s.label = 1;
                                    case 1:
                                        return i < this.totalFileParts ? [5, n(i)] : [3, 4];
                                    case 2:
                                        if ("object" == typeof(r = s.sent())) return [2, r.value];
                                        s.label = 3;
                                    case 3:
                                        return i += t, [3, 1];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.sliceFile = function(e) {
                        var t = e * this.client.partSizeBytes;
                        if (t >= this.file.size) throw new Error("Unable to slice file part: index out of range.");
                        var n = Math.min(t + this.client.partSizeBytes, this.file.size);
                        return {
                            blob: this.file.slice(t, n),
                            filePartIndex: e,
                            startByteOffset: t,
                            endByteOffset: n
                        }
                    }, e.prototype.updateFileProgress = function() {
                        var e = this.inProgressByteIndexes.reduce(function(e, t) {
                                return e + t
                            }),
                            t = Math.floor(e / this.file.size * 100);
                        this.onProgressUpdate(e, t)
                    }, e
                }(),
                it = [503],
                rt = [1e3, 5e3, 15e3, 6e4, 18e4, 3e5, 6e5],
                ot = function() {
                    function e(e) {
                        this.partSizeBytes = 15e6, this.maxConcurrentRequests = 2, this.upload = e
                    }
                    return e.prototype.createVideo = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, D.a.post("/kraken/videos", {
                                            body: {
                                                channel_id: this.upload.ownerID,
                                                title: this.upload.title,
                                                viewable: _.b[this.upload.viewable],
                                                create_premiere: !0
                                            }
                                        })];
                                    case 1:
                                        return (e = n.sent()).body ? (t = e.body, this.videoAuthToken = t.upload.token, this.url = new URL(t.upload.url), [2, {
                                            url: this.url,
                                            videoAuthToken: this.videoAuthToken,
                                            video: v(t.video)
                                        }]) : [2, Promise.reject(e)]
                                }
                            })
                        })
                    }, e.prototype.transferPart = function(e, t, n) {
                        return void 0 === n && (n = 0), l.__awaiter(this, void 0, void 0, function() {
                            var a = this;
                            return l.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.validUploadCreation() ? [4, new Promise(function(n, i) {
                                            var r = a.url + "?part=" + (e.filePartIndex + 1) + "&upload_token=" + a.videoAuthToken,
                                                o = new XMLHttpRequest;
                                            o.open("PUT", r), o.upload.onprogress = function(e) {
                                                t(e.loaded)
                                            }, o.onload = function(e) {
                                                o.status >= 400 ? i(e) : n(e)
                                            }, o.onerror = i, o.onabort = i, o.send(e.blob)
                                        }).catch(function(i) {
                                            var r = a.retryPartDelayMilliseconds(n);
                                            return r && it.includes(i.status) ? new Promise(function(i) {
                                                setTimeout(function() {
                                                    i(a.transferPart(e, t, n + 1))
                                                }, r)
                                            }) : Promise.reject(i)
                                        })] : [2, Promise.reject(new Error("Upload was not successfully created."))];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.completeVideo = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                return this.validUploadCreation() ? [2, fetch(this.url + "/complete?upload_token=" + this.videoAuthToken, {
                                    method: "POST"
                                })] : [2, Promise.reject(new Error("Upload was not successfully created."))]
                            })
                        })
                    }, e.prototype.retryPartDelayMilliseconds = function(e) {
                        return rt[e]
                    }, e.prototype.validUploadCreation = function() {
                        return this.videoAuthToken && this.url
                    }, e
                }();
            var st = 1e3;

            function lt(e, t, n, a) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var i, r, o, s, d, c;
                    return l.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if ((i = Object(_.d)(n.isEmailVerified, a)).length > 0) return e({
                                    type: ie,
                                    name: a.name,
                                    errors: i
                                }), [2];
                                u.label = 1;
                            case 1:
                                return u.trys.push([1, 7, 8, 9]), nt(t), [4, (r = function(e) {
                                    return new ot(e)
                                }(n)).createVideo()];
                            case 2:
                                return o = u.sent(), n = l.__assign({}, n, {
                                    videoAuthToken: o.videoAuthToken,
                                    url: o.url,
                                    video: o.video
                                }), e({
                                    type: te,
                                    uploadID: n.id,
                                    video: o.video
                                }), [4, new Promise(function(a, i) {
                                    ! function e(t, n, a, i, r) {
                                        try {
                                            a().videoManager.videoUploads.some(function(e) {
                                                return De(e) && !_e(e)
                                            }) ? setTimeout(function() {
                                                e(t, n, a, i, r)
                                            }, st) : (i({
                                                type: ee,
                                                uploadID: r
                                            }), t())
                                        } catch (e) {
                                            n(e)
                                        }
                                    }(a, i, t, e, n.id)
                                })];
                            case 3:
                                return u.sent(), [4, (s = new at(a, r, function(a, i) {
                                    e({
                                        type: ne,
                                        uploadID: n.id,
                                        totalBytesSent: a,
                                        progressPercentage: i
                                    });
                                    var r = t().videoManager.videoUploads.find(function(e) {
                                        return e.id === n.id
                                    });
                                    r && De(r) || s.stop()
                                })).uploadFile()];
                            case 4:
                                return u.sent(), (d = t().videoManager.videoUploads.find(function(e) {
                                    return e.id === n.id
                                })) && De(d) ? [4, r.completeVideo()] : [3, 6];
                            case 5:
                                u.sent(), e({
                                    type: ae,
                                    uploadID: n.id,
                                    video: n.video
                                }), u.label = 6;
                            case 6:
                                return [3, 9];
                            case 7:
                                return c = u.sent(), e({
                                    type: re,
                                    uploadID: n.id,
                                    errors: [c]
                                }), [3, 9];
                            case 8:
                                return --et < 1 && tt && window.removeEventListener("beforeunload", tt), [7];
                            case 9:
                                return [2]
                        }
                    })
                })
            }
            var dt = 30,
                ct = 10,
                ut = 3,
                pt = 1048576;

            function mt() {
                return {
                    type: J
                }
            }

            function ht() {
                return {
                    type: Y
                }
            }

            function gt(e) {
                return {
                    type: Z,
                    channelName: e
                }
            }

            function ft(e) {
                var t = this;
                return Ye(function(n) {
                    return l.__awaiter(t, void 0, void 0, function() {
                        var t;
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, D.a.deleteOrThrow("/v5/videos/" + e)];
                                case 1:
                                    return a.sent(), n.store.dispatch({
                                        type: B,
                                        videoId: e
                                    }), [3, 3];
                                case 2:
                                    throw t = a.sent(), n.store.dispatch({
                                        type: P,
                                        error: Object(d.d)("Error deleting video", "VideoManagerUploads")
                                    }), d.k.error(t, "Error deleting video with ID " + e), t;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function vt(e) {
                var t = this;
                return Ye(function(n) {
                    return l.__awaiter(t, void 0, void 0, function() {
                        var t, a;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, D.a.getOrThrow("/v5/broadcast_queues/" + e)];
                                case 1:
                                    return t = i.sent(), n.store.dispatch({
                                        type: N,
                                        vodcastQueue: t.body.items
                                    }), [3, 3];
                                case 2:
                                    throw a = i.sent(), d.k.error(a, "Failed to fetch vodcast queue"), a;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function bt(e) {
                var t = this;
                return Ye(function() {
                    return l.__awaiter(t, void 0, void 0, function() {
                        var t;
                        return l.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, D.a.getOrThrow("/v5/videos/" + e)];
                                case 1:
                                    return [2, v(n.sent().body)];
                                case 2:
                                    throw t = n.sent(), d.k.error(t, "Failed to fetch video"), t;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function Et(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    a.store.dispatch({
                                        type: U
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, D.a.getOrThrow("/v5/channels/" + e + "/video_manager/videos/" + t)];
                                case 2:
                                    return n = r.sent(), a.store.dispatch({
                                        type: w,
                                        video: v(n.body),
                                        userId: e
                                    }), [3, 4];
                                case 3:
                                    throw i = r.sent(), a.store.dispatch({
                                        type: P,
                                        error: Object(d.d)("Could not load video details for editing.", "VideoManager"),
                                        origin: h.EditModalErrorOrigin.Initialize
                                    }), d.k.error(i, "Failed to fetch video"), i;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function yt(e) {
                var t = this;
                return Ye(function(n) {
                    return l.__awaiter(t, void 0, void 0, function() {
                        var t, a, i, r;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), n.store.dispatch({
                                        type: X
                                    }), t = "/api/vods/" + e + "/muted_tracks", [4, D.a.get(t)];
                                case 1:
                                    if (!(a = o.sent()) || !a.body) throw new Error("Invalid muted track response");
                                    return i = a.body.muted_tracks.map(function(e) {
                                        return function(e) {
                                            return {
                                                __typename: "MutedTrack",
                                                id: e.id,
                                                title: e.title,
                                                performer: e.performer,
                                                duration: e.duration,
                                                track_appeal: e.track_appeal
                                            }
                                        }(e)
                                    }), n.store.dispatch({
                                        type: V,
                                        mutedTracks: i
                                    }), [3, 3];
                                case 2:
                                    throw r = o.sent(), d.k.error(r, "Failed to fetch muted tracks for video: " + e), r;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function Ct(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), a.store.dispatch({
                                        type: ce
                                    }), [4, D.a.post("/api/vods/" + e + "/appeal", {
                                        body: function(e) {
                                            var t = e.trackAppeals.map(function(e) {
                                                return function(e) {
                                                    return {
                                                        audible_magic_response_id: e.id,
                                                        reason: e.reason
                                                    }
                                                }(e)
                                            });
                                            return {
                                                city: e.city,
                                                country: e.country,
                                                full_name: e.fullName,
                                                state: e.stateProvince,
                                                street_address_1: e.streetAddress1,
                                                street_address_2: e.streetAddress2,
                                                zipcode: e.zipPostalCode,
                                                track_appeals: t
                                            }
                                        }(t)
                                    })];
                                case 1:
                                    if (200 !== i.sent().status) throw new Error("Invalid submit appeal response");
                                    return a.store.dispatch({
                                        type: pe
                                    }), [3, 3];
                                case 2:
                                    throw n = i.sent(), a.store.dispatch({
                                        type: ue,
                                        errorMessage: Object(d.d)("Submitting appeal failed", "VideoManagerAppealMutedAudio")
                                    }), d.k.error(n, "Exception in submit appeal"), n;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function _t() {
                return {
                    type: W
                }
            }

            function Tt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i, r, o, s;
                        return l.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (c.trys.push([0, 2, , 3]), n = function(e, t) {
                                            var n = l.__assign({}, e);
                                            if (n.thumbnails = n.thumbnails.filter(function(e) {
                                                    return e.url !== t
                                                }), n.thumbnails.length <= 0) throw new Error("There arent enough thumbnail's on this video to delete one");
                                            return n.preview = n.thumbnails[0].url, n
                                        }(e, t), i = new URL(t), !(r = ze(i))) throw new Error("bad thumbnail url/path");
                                    return o = "/v5/videos/" + n.id + "/thumbnail?path=" + r, [4, D.a.deleteOrThrow(o)];
                                case 1:
                                    return c.sent(), a.store.dispatch({
                                        type: S,
                                        video: n
                                    }), [3, 3];
                                case 2:
                                    throw s = c.sent(), a.store.dispatch({
                                        type: P,
                                        error: Object(d.d)("Deleting Thumbnail Failed!", "VideoManager"),
                                        origin: h.EditModalErrorOrigin.Thumbnail
                                    }), d.k.error(s, "Failed to delete thumbnail"), s;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function Dt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i, r, o;
                        return l.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    a.store.dispatch({
                                        type: k,
                                        isSaving: !0
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), (n = l.__assign({}, t)).thumbnail_path && function(e) {
                                        return e === Ge
                                    }(n.thumbnail_path) ? delete n.thumbnail_path : n.thumbnail_path && (i = new URL(n.thumbnail_path), n.thumbnail_path = ze(i)), [4, D.a.putOrThrow("/v5/videos/" + e.id, {
                                        body: n
                                    })];
                                case 2:
                                    return r = s.sent(), a.store.dispatch({
                                        type: S,
                                        video: v(r.body)
                                    }), [3, 4];
                                case 3:
                                    throw o = s.sent(), a.store.dispatch({
                                        type: P,
                                        error: Object(d.d)("Saving Failed!", "VideoManager"),
                                        origin: h.EditModalErrorOrigin.Save
                                    }), d.k.error(o, "Failed to save video"), o;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function St(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, D.a.put("v5/videos/" + e, {
                                        body: {
                                            broadcast_type: c.a.Upload.toLowerCase(),
                                            viewable: C.b
                                        }
                                    })];
                                case 1:
                                    if (!((n = i.sent()).status >= 200 && n.status < 300)) throw t.push(Object(d.d)("Failed to publish video", "VideoManager")), d.k.warn("Failed to publish video", n.error, n.requestError), new Error("Failed to publish video");
                                    return a.store.dispatch({
                                        type: he,
                                        videoID: e
                                    }), [2]
                            }
                        })
                    })
                })
            }

            function kt(e, t, n) {
                var a = this;
                return Ye(function(i) {
                    return l.__awaiter(a, void 0, void 0, function() {
                        var a, r;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, D.a.postOrThrow("/v5/broadcast_queues/" + e + "/videos", {
                                        body: {
                                            id: t
                                        }
                                    })];
                                case 1:
                                    return a = o.sent(), i.store.dispatch({
                                        type: F,
                                        videoId: a.body.item_id
                                    }), [3, 3];
                                case 2:
                                    throw r = o.sent(), n.push(Object(d.d)("Failed to add video to rerun queue", "VideoManager")), d.k.error(r, "Failed to add video to rerun queue"), r;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function wt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, D.a.deleteOrThrow("/v5/videos/" + e)];
                                case 1:
                                    return i.sent(), a.store.dispatch({
                                        type: G,
                                        videoId: e
                                    }), [3, 3];
                                case 2:
                                    throw n = i.sent(), t.push(Object(d.d)("Error deleting video", "VideoManager")), d.k.error(n, "Error deleting video with ID " + e), n;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function Ot(e, t, n) {
                var a = this;
                return Ye(function(i) {
                    return l.__awaiter(a, void 0, void 0, function() {
                        var a;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, D.a.delete("v5/channels/" + e + "/premieres/" + t)];
                                case 1:
                                    if (!((a = r.sent()).status >= 200 && a.status < 300)) throw n.push(Object(d.d)("Error deleting premiere", "VideoManager")), d.k.warn("Error deleting premiere with ID " + t, a.requestError, a.error), new Error("Error deleting premiere with ID " + t);
                                    return i.store.dispatch({
                                        type: me,
                                        premiereID: t
                                    }), [2]
                            }
                        })
                    })
                })
            }

            function Mt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        return l.__generator(this, function(n) {
                            return a.store.getState().videoManager.videoDownloads[e] ? [2, null] : Object.keys(a.store.getState().videoManager.videoDownloads).length >= ut ? (t.push(Object(d.d)("Too many downloads: Please wait for your current downloads to finish", "VideoManager")), [2, null]) : [2, Je(e, a, t)]
                        })
                    })
                })
            }

            function It() {
                var e = this;
                return Ye(function(t) {
                    return l.__awaiter(e, void 0, void 0, function() {
                        return l.__generator(this, function(e) {
                            return We(t), [2]
                        })
                    })
                })
            }

            function Vt() {
                var e = this;
                return Ye(function() {
                    return l.__awaiter(e, void 0, void 0, function() {
                        return l.__generator(this, function(e) {
                            return Be(), [2]
                        })
                    })
                })
            }

            function xt(e, t, n) {
                return function(a, i) {
                    var r = n.map(function(n) {
                        return Object(_.c)({
                            ownerID: e,
                            isEmailVerified: t,
                            title: n.name,
                            fileSizeBytes: n.size
                        })
                    });
                    a({
                        type: $,
                        videoUploads: r
                    });
                    for (var o = 0; o < n.length; ++o) lt(a, i, r[o], n[o])
                }
            }

            function At(e) {
                return function(t) {
                    t({
                        type: oe,
                        uploadID: e.id
                    })
                }
            }

            function jt(e) {
                return Ye(function(t) {
                    return new Promise(function(n, a) {
                        var i = d.p.config.apiBaseURL + "/v5/youtube/" + e + "/auth?client_id=" + d.p.config.legacyClientID,
                            r = window.open(i, "youtube_popup", "width=800,height=450");
                        r && !Object(u.a)() ? (r.focus(), Object(p.a)(r, function(e) {
                            e ? (t.store.dispatch({
                                type: se
                            }), n()) : a()
                        })) : a()
                    })
                })
            }

            function Nt(e, t) {
                var n = this;
                return Ye(function() {
                    return l.__awaiter(n, void 0, void 0, function() {
                        return l.__generator(this, function(n) {
                            return [2, D.a.postOrThrow("kraken/videos/" + e + "/youtube_export", {
                                body: {
                                    title: t.title,
                                    description: t.description,
                                    tag_list: t.tags,
                                    private: t.private,
                                    do_split: t.split
                                }
                            })]
                        })
                    })
                })
            }

            function Ft(e) {
                var t = this;
                return Ye(function(n) {
                    return l.__awaiter(t, void 0, void 0, function() {
                        return l.__generator(this, function(t) {
                            return n.store.dispatch({
                                type: de,
                                videoID: e
                            }), [2]
                        })
                    })
                })
            }

            function Pt() {
                d.m.set("videoProducerSkipPublishModal", !0)
            }
            var Rt, Ut = "eventModal.EVENT_SAVED",
                Lt = "eventModal.REQUEST_ERRORED",
                Xt = "eventModal.LOADING",
                Wt = "eventModal.ERRORS_CLEARED";
            ! function(e) {
                e[e.Submit = 0] = "Submit"
            }(Rt || (Rt = {}));
            var Bt = "premiere already exists in that time";

            function Gt() {
                return Object(d.d)("Selected start time conflicts with another Premiere event you have scheduled", "EventModalPremiereCreation")
            }

            function zt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i, r;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, D.a.post("/v5/channels/" + e.ownerID + "/premieres", {
                                        body: g(e, t)
                                    })];
                                case 1:
                                    if (!((n = o.sent()).status >= 200 && n.status < 300 && n.body)) throw r = Object(d.d)("Failed to create premiere!", "EventModalPremiereCreation"), n.error && n.error.message.includes(Bt) && (r = Gt()), a.store.dispatch({
                                        type: Lt,
                                        error: r,
                                        origin: Rt.Submit
                                    }), new Error("Failed to create premeire event");
                                    return (i = f(n.body)).game.name = e.game.name, a.store.dispatch({
                                        type: j,
                                        premiereStatus: n.body.premiere.status,
                                        premiereID: n.body.premiere.id,
                                        event: i,
                                        videoId: t
                                    }), [2]
                            }
                        })
                    })
                })
            }

            function Ht(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i, r;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, D.a.put("/v5/channels/" + e.ownerID + "/premieres/" + e.id, {
                                        body: g(e, t)
                                    })];
                                case 1:
                                    if (!((n = o.sent()).status >= 200 && n.status < 300 && n.body)) throw r = Object(d.d)("Failed to update premiere!", "EventModalPremiereUpdate"), n.error && n.error.message.includes(Bt) && (r = Gt()), a.store.dispatch({
                                        type: Lt,
                                        error: r,
                                        origin: Rt.Submit
                                    }), new Error("Failed to update Premiere event");
                                    return (i = f(n.body)).game.name = e.game.name, a.store.dispatch({
                                        type: j,
                                        premiereStatus: n.body.premiere.status,
                                        event: i,
                                        videoId: t
                                    }), [2]
                            }
                        })
                    })
                })
            }

            function Qt(e, t, n) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var a;
                    return l.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return a = !!n && n.activeFilter !== t.activeFilter, [4, function(e, t, n, a) {
                                    var i = this;
                                    return Ye(function(r) {
                                        return l.__awaiter(i, void 0, void 0, function() {
                                            var i, o, s, u, p, m, g;
                                            return l.__generator(this, function(l) {
                                                switch (l.label) {
                                                    case 0:
                                                        r.store.dispatch({
                                                            type: R
                                                        }), l.label = 1;
                                                    case 1:
                                                        return l.trys.push([1, 3, , 4]), i = h.availableVideoStatuses.join(","), o = "/v5/channels/" + e + "/video_manager", n || (n = 0), s = {
                                                            offset: n.toString(),
                                                            limit: dt.toString(),
                                                            status: i
                                                        }, t && (t === h.ExtraFilterType.Expiring ? (s.broadcast_type = c.a.Archive.toLowerCase(), s.sort = "time_asc") : (u = Object(T.b)(t)) && (s.broadcast_type = u)), o = o + "?" + $e.stringify(s), [4, D.a.getOrThrow(o)];
                                                    case 2:
                                                        return p = l.sent(), m = void 0, m = p.body.videos.map(function(e) {
                                                            return v(e)
                                                        }), t && t === h.ExtraFilterType.Expiring && (m = m.filter(function(e) {
                                                            return we(e)
                                                        })), r.store.dispatch({
                                                            type: O,
                                                            userId: e,
                                                            activeFilter: t,
                                                            offset: n,
                                                            videos: m,
                                                            resetVideos: a
                                                        }), [3, 4];
                                                    case 3:
                                                        throw g = l.sent(), r.store.dispatch({
                                                            type: M
                                                        }), d.k.error(g, "Failed to fetch videos"), g;
                                                    case 4:
                                                        return [2]
                                                }
                                            })
                                        })
                                    })
                                }(t.userId, t.activeFilter, t.offset, a)(e.store.dispatch, e.store.getState, {})];
                            case 1:
                                return i.sent(), [2]
                        }
                    })
                })
            }

            function Kt(e, t) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return l.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!t.userId) return [2];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, function(e) {
                                    var t = this;
                                    return Ye(function(n) {
                                        return l.__awaiter(t, void 0, void 0, function() {
                                            var t;
                                            return l.__generator(this, function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, D.a.getOrThrow("/v5/channels/" + e + "/video_manager_properties")];
                                                    case 1:
                                                        return t = a.sent(), n.store.dispatch({
                                                            type: z,
                                                            userId: e,
                                                            youtubeConnected: t.body.youtube_connected
                                                        }), [2]
                                                }
                                            })
                                        })
                                    })
                                }(t.userId)(e.store.dispatch, e.store.getState, {})];
                            case 2:
                                return a.sent(), [3, 4];
                            case 3:
                                throw n = a.sent(), e.store.dispatch({
                                    type: H
                                }), n;
                            case 4:
                                return [2]
                        }
                    })
                })
            }

            function qt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.isLoggedIn && e.userId ? (n = a.store.getState().videoManager.editingVideo.data, i = a.store.getState().videoManager.userId, !t || t && !t.userId ? i === e.userId ? [3, 3] : [4, Kt(a, e)] : [3, 6]) : [2];
                                case 1:
                                    return r.sent(), [4, vt(e.userId)(a.store.dispatch, a.store.getState, {})];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return n && n.id === e.videoId ? [3, 5] : [4, Et(e.userId, e.videoId)(a.store.dispatch, a.store.getState, {})];
                                case 4:
                                    r.sent(), r.label = 5;
                                case 5:
                                    return [3, 8];
                                case 6:
                                    return t && t.videoId !== e.videoId ? [4, Et(e.userId, e.videoId)(a.store.dispatch, a.store.getState, {})] : [3, 8];
                                case 7:
                                    r.sent(), r.label = 8;
                                case 8:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function Yt(e, t, n) {
                var a = this;
                return Ye(function(i) {
                    return l.__awaiter(a, void 0, void 0, function() {
                        return l.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return e.isLoggedIn && e.userId ? [4, function(e, t, n) {
                                        var a = this;
                                        return Ye(function(i) {
                                            return l.__awaiter(a, void 0, void 0, function() {
                                                var a, r, o, s, c, u;
                                                return l.__generator(this, function(l) {
                                                    switch (l.label) {
                                                        case 0:
                                                            return l.trys.push([0, 2, , 3]), i.store.dispatch({
                                                                type: L
                                                            }), t || (t = 0), a = h.pendingVideoStatuses.join(","), r = {
                                                                offset: t,
                                                                limit: ct,
                                                                status: a
                                                            }, o = "/v5/channels/" + e + "/video_manager?" + $e.stringify(r), [4, D.a.getOrThrow(o)];
                                                        case 1:
                                                            return s = l.sent(), c = s.body.videos.map(function(e) {
                                                                return v(e)
                                                            }), i.store.dispatch({
                                                                type: I,
                                                                userId: e,
                                                                videos: c
                                                            }), [3, 3];
                                                        case 2:
                                                            throw u = l.sent(), n.push(Object(d.d)("Failed to fetch videos", "VideoManagerProcessingVideos")), d.k.error(u, "Failed to fetch processing videos"), u;
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        })
                                    }(e.userId, t, n)(i.store.dispatch, i.store.getState, {})] : [2];
                                case 1:
                                    return a.sent(), [2]
                            }
                        })
                    })
                })
            }

            function Zt(e, t) {
                var n = this;
                return Ye(function(a) {
                    return l.__awaiter(n, void 0, void 0, function() {
                        var n, i;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.isLoggedIn && e.userId ? (n = a.store.getState().videoManager.videos.data, i = a.store.getState().videoManager.userId, !t || t && !t.userId ? i === e.userId ? [3, 3] : [4, Kt(a, e)] : [3, 6]) : [2];
                                case 1:
                                    return r.sent(), [4, vt(e.userId)(a.store.dispatch, a.store.getState, {})];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return n ? [3, 5] : [4, Qt(a, e, t)];
                                case 4:
                                    r.sent(), r.label = 5;
                                case 5:
                                    return [3, 8];
                                case 6:
                                    return !t || e.offset === t.offset && e.activeFilter === t.activeFilter ? [3, 8] : [4, Qt(a, e, t)];
                                case 7:
                                    r.sent(), r.label = 8;
                                case 8:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function Jt(e, t) {
                var n = Object.assign({}, e);
                return delete n[t], n
            }

            function $t(e, t) {
                var n = new Set(e.map(function(e) {
                    return e.id
                }));
                return [].concat(e, t.filter(function(e) {
                    return !n.has(e.id)
                }))
            }

            function en(e) {
                return function(t) {
                    return !!e.vodcastQueueVideoIDs && e.vodcastQueueVideoIDs.has(t)
                }
            }
            d.p.store.registerReducer("videoManager", function(e, t) {
                var n;
                switch (void 0 === e && (e = {
                    activeFilter: null,
                    videos: {
                        data: null,
                        loading: !0,
                        moreDataAvailable: !0
                    },
                    processingVideos: {
                        data: [],
                        loading: !1,
                        moreDataAvailable: !0
                    },
                    userId: "",
                    youtubeConnected: !1,
                    channelName: null,
                    editingVideo: {
                        data: null,
                        saving: !1,
                        loading: !1
                    },
                    mutedTracks: {
                        data: [],
                        loading: !1
                    },
                    notificationMessage: null,
                    forbidden: !1,
                    vodcastQueueVideoIDs: null,
                    videoDownloads: {},
                    videoUploads: [],
                    uploadValidationErrors: [],
                    editModalErrors: [],
                    submitAppeal: {
                        error: null,
                        submitting: !1
                    }
                }), t.type) {
                    case j:
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.map(function(e) {
                                    return e.id === t.videoId ? Object.assign({}, e, {
                                        premiere: {
                                            status: t.premiereStatus,
                                            id: t.premiereID,
                                            event: t.event
                                        }
                                    }) : e
                                }) : e.videos.data
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: e.processingVideos.data ? e.processingVideos.data.map(function(e) {
                                    return e.id === t.videoId ? Object.assign({}, e, {
                                        premiere: {
                                            status: t.premiereStatus,
                                            id: t.premiereID,
                                            event: t.event
                                        }
                                    }) : e
                                }) : e.processingVideos.data
                            })
                        });
                    case Y:
                        return l.__assign({}, e, {
                            editModalErrors: [],
                            editingVideo: l.__assign({}, e.editingVideo, {
                                saving: !1
                            })
                        });
                    case U:
                        return l.__assign({}, e, {
                            editingVideo: l.__assign({}, e.editingVideo, {
                                loading: !0
                            })
                        });
                    case R:
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                loading: !0
                            })
                        });
                    case L:
                        return l.__assign({}, e, {
                            processingVideos: l.__assign({}, e.processingVideos, {
                                loading: !0
                            })
                        });
                    case X:
                        return l.__assign({}, e, {
                            mutedTracks: l.__assign({}, e.mutedTracks, {
                                loading: !0
                            })
                        });
                    case z:
                        return l.__assign({}, e, {
                            forbidden: !1,
                            userId: t.userId,
                            youtubeConnected: t.youtubeConnected
                        });
                    case H:
                        return l.__assign({}, e, {
                            forbidden: !0
                        });
                    case k:
                        return l.__assign({}, e, {
                            editingVideo: l.__assign({}, e.editingVideo, {
                                saving: !0
                            }),
                            editModalErrors: []
                        });
                    case S:
                        var a = t.video;
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                loading: !1,
                                data: e.videos.data ? e.videos.data.map(function(e) {
                                    return e.id === a.id ? l.__assign({}, e, a) : e
                                }) : e.videos.data
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                loading: !1,
                                data: e.processingVideos.data ? e.processingVideos.data.map(function(e) {
                                    return e.id === a.id ? l.__assign({}, e, a) : e
                                }) : e.processingVideos.data
                            }),
                            notificationMessage: null,
                            editModalErrors: [],
                            editingVideo: l.__assign({}, e.editingVideo, {
                                saving: !1
                            })
                        });
                    case ce:
                        return l.__assign({}, e, {
                            submitAppeal: {
                                error: null,
                                submitting: !0
                            }
                        });
                    case ue:
                        return l.__assign({}, e, {
                            submitAppeal: l.__assign({}, e.submitAppeal, {
                                error: t.errorMessage
                            })
                        });
                    case pe:
                        return l.__assign({}, e, {
                            submitAppeal: {
                                error: null,
                                submitting: !1
                            }
                        });
                    case w:
                        return l.__assign({}, e, {
                            editingVideo: l.__assign({}, e.editingVideo, {
                                data: t.video,
                                loading: !1
                            }),
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.map(function(e) {
                                    return e.id !== t.video.id ? e : t.video
                                }) : null
                            }),
                            notificationMessage: null
                        });
                    case N:
                        var i = new Set(t.vodcastQueue.map(function(e) {
                            return e.item_id
                        }));
                        return l.__assign({}, e, {
                            vodcastQueueVideoIDs: i
                        });
                    case F:
                        var r = (e.vodcastQueueVideoIDs ? e.vodcastQueueVideoIDs : new Set).add(t.videoId);
                        return l.__assign({}, e, {
                            notificationMessage: null,
                            vodcastQueueVideoIDs: r
                        });
                    case O:
                        var o = [],
                            s = e.videos.data || [],
                            d = t.videos;
                        return o = t.resetVideos ? d : $t(s, d), l.__assign({}, e, {
                            activeFilter: t.activeFilter,
                            videos: l.__assign({}, e.videos, {
                                data: o,
                                loading: !1,
                                moreDataAvailable: !(d.length < dt)
                            }),
                            notificationMessage: null
                        });
                    case M:
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                loading: !1
                            })
                        });
                    case x:
                        var u = e.videos.data || []; - 1 === u.findIndex(function(e) {
                            return e.id === t.video.id
                        }) && (u = [t.video].concat(u));
                        var p = e.editingVideo;
                        return p.data && p.data.id === t.video.id && (p.data.status = t.video.status, p.data.thumbnails = t.video.thumbnails), l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: u
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: e.processingVideos.data.filter(function(e) {
                                    return e.id !== t.video.id
                                })
                            }),
                            editingVideo: p
                        });
                    case A:
                        var m = e.processingVideos.data.map(function(e) {
                            return e.id === t.video.id ? t.video : e
                        });
                        return l.__assign({}, e, {
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: m
                            })
                        });
                    case I:
                        var g = $t(e.processingVideos.data || [], t.videos);
                        return l.__assign({}, e, {
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: g,
                                loading: !1,
                                moreDataAvailable: !(t.videos.length < ct)
                            })
                        });
                    case V:
                        return l.__assign({}, e, {
                            mutedTracks: l.__assign({}, e.mutedTracks, {
                                data: t.mutedTracks,
                                loading: !1
                            })
                        });
                    case W:
                        return l.__assign({}, e, {
                            mutedTracks: l.__assign({}, {
                                data: [],
                                loading: !1
                            })
                        });
                    case G:
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.filter(function(e) {
                                    return e.id !== t.videoId
                                }) : e.videos.data
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: e.processingVideos.data.filter(function(e) {
                                    return e.id !== t.videoId
                                })
                            })
                        });
                    case B:
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads ? e.videoUploads.filter(function(e) {
                                return e.video && e.video.id !== t.videoId
                            }) : e.videoUploads
                        });
                    case P:
                        return l.__assign({}, e, {
                            editModalErrors: e.editModalErrors.concat({
                                message: t.error,
                                origin: t.origin
                            }),
                            editingVideo: l.__assign({}, e.editingVideo, {
                                saving: !1
                            }),
                            videos: l.__assign({}, e.videos, {
                                loading: !1
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                loading: !1
                            })
                        });
                    case K:
                        return l.__assign({}, e, {
                            videoDownloads: Jt(e.videoDownloads, t.videoId)
                        });
                    case Q:
                        return l.__assign({}, e, {
                            videoDownloads: l.__assign({}, e.videoDownloads, (n = {}, n[t.videoId] = t.download, n))
                        });
                    case q:
                        return l.__assign({}, e, {
                            videoDownloads: Jt(e.videoDownloads, t.videoId)
                        });
                    case Z:
                        return l.__assign({}, {
                            activeFilter: null,
                            videos: {
                                data: null,
                                loading: !0,
                                moreDataAvailable: !0
                            },
                            processingVideos: {
                                data: [],
                                loading: !1,
                                moreDataAvailable: !0
                            },
                            userId: "",
                            youtubeConnected: !1,
                            channelName: null,
                            editingVideo: {
                                data: null,
                                saving: !1,
                                loading: !1
                            },
                            mutedTracks: {
                                data: [],
                                loading: !1
                            },
                            notificationMessage: null,
                            forbidden: !1,
                            vodcastQueueVideoIDs: null,
                            videoDownloads: {},
                            videoUploads: [],
                            uploadValidationErrors: [],
                            editModalErrors: [],
                            submitAppeal: {
                                error: null,
                                submitting: !1
                            }
                        }, {
                            channelName: t.channelName
                        });
                    case J:
                        return l.__assign({}, e, {
                            editingVideo: {
                                loading: !1,
                                saving: !1,
                                data: null
                            },
                            notificationMessage: null,
                            editModalErrors: []
                        });
                    case $:
                        return l.__assign({}, e, {
                            videoUploads: t.videoUploads.concat(e.videoUploads),
                            uploadValidationErrors: []
                        });
                    case ee:
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads.map(function(e) {
                                return e.id !== t.uploadID ? e : l.__assign({}, e, {
                                    status: _.a.uploading
                                })
                            })
                        });
                    case te:
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads.map(function(e) {
                                return e.id !== t.uploadID ? e : l.__assign({}, e, {
                                    video: t.video
                                })
                            })
                        });
                    case ne:
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads.map(function(e) {
                                return e.id !== t.uploadID ? e : l.__assign({}, e, {
                                    totalBytesSent: t.totalBytesSent,
                                    progressPercentage: t.progressPercentage
                                })
                            })
                        });
                    case ae:
                        var f = l.__assign({}, t.video, {
                            status: h.VIDEO_STATUS_PENDING_TRANSCODE
                        });
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads.filter(function(e) {
                                return e.id !== t.uploadID
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: e.processingVideos.data ? [f].concat(e.processingVideos.data) : [f]
                            })
                        });
                    case re:
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads.map(function(e) {
                                return e.id !== t.uploadID ? e : l.__assign({}, e, {
                                    errors: e.errors.concat(t.errors)
                                })
                            })
                        });
                    case ie:
                        return l.__assign({}, e, {
                            uploadValidationErrors: e.uploadValidationErrors.concat(t.errors.map(function(e) {
                                return e.message
                            }).join(", ") + ": " + t.name)
                        });
                    case oe:
                        return l.__assign({}, e, {
                            videoUploads: e.videoUploads.map(function(e) {
                                return e.id !== t.uploadID ? e : l.__assign({}, e, {
                                    errors: []
                                })
                            })
                        });
                    case se:
                        return l.__assign({}, e, {
                            youtubeConnected: !0
                        });
                    case me:
                        var v = function(e) {
                            return e.premiere && e.premiere.id === t.premiereID ? l.__assign({}, e, {
                                premiere: {
                                    status: h.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_UNSCHEDULED
                                }
                            }) : e
                        };
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.map(v) : e.videos.data
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: e.processingVideos.data ? e.processingVideos.data.map(v) : e.processingVideos.data
                            })
                        });
                    case he:
                        return v = function(e) {
                            return e.id === t.videoID ? l.__assign({}, e, {
                                broadcastType: c.a.Upload,
                                viewable: h.VideoScope.Public,
                                premiere: void 0
                            }) : e
                        }, l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.map(v) : e.videos.data
                            }),
                            processingVideos: l.__assign({}, e.processingVideos, {
                                data: e.processingVideos.data ? e.processingVideos.data.map(v) : e.processingVideos.data
                            })
                        });
                    case le:
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.map(function(e) {
                                    return e.id !== t.videoID ? e : l.__assign({}, e, {
                                        customThumbnailProcessing: !0,
                                        customThumbnailError: !1
                                    })
                                }) : null
                            })
                        });
                    case de:
                        return l.__assign({}, e, {
                            videos: l.__assign({}, e.videos, {
                                data: e.videos.data ? e.videos.data.map(function(e) {
                                    return e.id !== t.videoID ? e : l.__assign({}, e, {
                                        customThumbnailProcessing: !1,
                                        customThumbnailError: !0
                                    })
                                }) : null
                            })
                        });
                    default:
                        return e
                }
            });
            var tn = n("q1tI"),
                nn = n("ZDlU"),
                an = n("8/mp"),
                rn = n("eJ65"),
                on = n("yR8l"),
                sn = n("V+GM"),
                ln = n("x7UT"),
                dn = n("0Log"),
                cn = n("/aPz"),
                un = n("kduP"),
                pn = n("D7An"),
                mn = n("NvVO"),
                hn = n("2xye"),
                gn = n("GnwI"),
                fn = n("S6wH"),
                vn = n("kSZU"),
                bn = n("CcE2"),
                En = n("N0BP"),
                yn = function(e) {
                    return tn.createElement(fe.Ua, l.__assign({
                        onClick: e.onClick,
                        selected: e.selected
                    }, Object(En.a)(e), {
                        type: fe.Va.Alpha,
                        blurAfterClick: !0
                    }), tn.createElement(fe.Xa, {
                        display: fe.X.Flex,
                        flexDirection: fe.Aa.Row,
                        alignItems: fe.f.Center,
                        justifyContent: fe.Wa.Between,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, tn.createElement(fe.W, {
                        fontSize: fe.Ca.Size5,
                        color: fe.O.Alt
                    }, e.label), e.selected ? tn.createElement(fe.Xa, {
                        display: fe.X.Flex,
                        padding: {
                            right: 1
                        }
                    }, tn.createElement(fe.sb, {
                        asset: fe.tb.Check,
                        height: 20,
                        width: 20
                    })) : ""))
                },
                Cn = n("opSz"),
                _n = (n("5Ubq"), "filters-container"),
                Tn = function(e) {
                    return void 0 === e && (e = !1), [{
                        key: null,
                        label: e ? Object(Cn.b)() : Object(d.d)("All", "VideoManagerFilter")
                    }, {
                        key: c.a.Upload,
                        label: Object(d.d)("Upload", "VideoManagerFilter")
                    }, {
                        key: c.a.PastPremiere,
                        label: Object(d.d)("Past Premiere", "VideoManagerFilter")
                    }, {
                        key: c.a.Archive,
                        label: Object(d.d)("Past Broadcast", "VideoManagerFilter")
                    }, {
                        key: c.a.Highlight,
                        label: Object(d.d)("Highlight", "VideoManagerFilter")
                    }, {
                        key: h.ExtraFilterType.Expiring,
                        label: Object(d.d)("Expiring", "VideoManagerFilter")
                    }]
                },
                Dn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeFilter = function(e) {
                            t.props.changeFilter(e.currentTarget.getAttribute("data-filter-key"))
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Tn().map(function(t) {
                                return tn.createElement(yn, {
                                    key: t.key || "",
                                    onClick: e.onChangeFilter,
                                    label: t.label,
                                    selected: t.key === e.props.activeFilter,
                                    "data-filter-key": t.key,
                                    "data-test-selector": "filter-item"
                                })
                            });
                        return tn.createElement(fe.Xa, {
                            className: _n,
                            flexShrink: 1
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4,
                            bold: !0
                        }, Object(d.d)("Filter", "VideoManager"))), tn.createElement("div", null, t))
                    }, t
                }(tn.PureComponent),
                Sn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            videoStats: null,
                            requestFailed: !1
                        }, t.statsRequested = !1, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.channelID || this.state.requestFailed) return null;
                        if (!this.state.videoStats) return tn.createElement(fe.Xa, {
                            padding: {
                                top: 2
                            }
                        }, tn.createElement(fe.Za, null));
                        for (var e = [], t = 0, n = Object.keys(this.state.videoStats).sort().reverse().slice(0, 2); t < n.length; t++) {
                            var a = n[t];
                            e.push(tn.createElement(fe.Xa, {
                                key: a
                            }, tn.createElement(fe.W, null, a + ": " + this.state.videoStats[a] + " MW")))
                        }
                        return tn.createElement(fe.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, e)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e.channelID !== this.props.channelID && (this.statsRequested = !1), !e.channelID || this.statsRequested ? [3, 2] : (this.statsRequested = !0, [4, D.a.get("kraken/channels/" + e.channelID + "/analytics", {})]);
                                    case 1:
                                        if (!(t = a.sent()) || !t.body) return this.setState({
                                            videoStats: null,
                                            requestFailed: !0
                                        }), [2];
                                        n = this.processVideoStats(t.body), this.setState({
                                            videoStats: n,
                                            requestFailed: !1
                                        }), a.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.processVideoStats = function(e) {
                        for (var t = {}, n = 0, a = e.analytics; n < a.length; n++) {
                            var i = a[n];
                            if ("daily" === i.aggregation && "minuteswatched" === i.metric)
                                for (var r = 0, o = i.metric_data; r < o.length; r++) {
                                    var s = o[r],
                                        l = s.time_interval.substring(0, 7),
                                        d = t[l] || 0;
                                    t[l] = d + s.value
                                }
                        }
                        return t
                    }, t
                }(tn.Component),
                kn = Object(gn.b)("MiniVideoStats", {
                    autoReportInteractive: !0
                })(Sn),
                wn = n("a1OF"),
                On = "preciseCutsAnnouncementDismissed",
                Mn = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleDismiss = function() {
                            d.m.set(On, !0), n.setState({
                                isDismissed: !0
                            })
                        }, n.state = {
                            isDismissed: d.m.get(On, !1)
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.state.isDismissed ? tn.createElement(fn.d, null) : tn.createElement(fn.a, {
                            buttonLink: "/manager/highlighter",
                            buttonText: Object(d.d)("Try it out", "VideoManagerAnnouncement"),
                            headerText: Object(d.d)("We've upgraded the Highlighter", "VideoManagerAnnouncement"),
                            headerLink: "/manager/highlighter",
                            onDismiss: this.handleDismiss,
                            src: Object(wn.d)("88", 3),
                            subtitleText: Object(d.d)("The Highlighter is now more precise with start and end points.", "VideoManagerAnnouncement"),
                            trackingType: "video_manager_announcement"
                        })
                    }, t
                }(tn.Component),
                In = n("/ZC1"),
                Vn = "video-upload-error-text",
                xn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getErrorMessage = function(e) {
                            return tn.createElement(fe.Xa, {
                                key: e,
                                display: fe.X.Flex,
                                alignItems: fe.f.Center,
                                flexWrap: fe.Ba.NoWrap
                            }, tn.createElement(fe.W, {
                                fontSize: fe.Ca.Size5,
                                "data-test-selector": Vn
                            }, e))
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e, t = this;
                        return e = this.props.errors.length <= 1 ? this.props.errors.map(function(e) {
                            return t.getErrorMessage(e)
                        }) : tn.createElement(fe.W, null, Object(d.d)("{numVideos, number} files you added could not be uploaded.", {
                            numVideos: this.props.errors.length
                        }, "UploadFilesBox")), this.props.errors ? tn.createElement(fe.Xa, null, tn.createElement(fe.Eb, {
                            color: fe.O.Error
                        }, e)) : null
                    }, t
                }(tn.Component),
                An = (n("2obe"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement(fe.Xa, {
                            className: "upload-box",
                            position: fe.jb.Relative,
                            fullWidth: !0
                        }, tn.createElement(In.a, {
                            allowedFileTypes: _.e,
                            onFilesSubmitted: this.props.onFilesSubmitted,
                            error: this.props.errors.length > 0,
                            multiFile: !0
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap,
                            justifyContent: fe.Wa.Start,
                            position: fe.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            flexWrap: fe.Ba.NoWrap,
                            flexShrink: 0,
                            flexOrder: 0,
                            alignItems: fe.f.Center,
                            background: fe.r.Alt2,
                            className: "upload-box__thumbnail-placeholder",
                            justifyContent: fe.Wa.Center
                        }, this.renderUploadIcon()), tn.createElement(fe.Xa, {
                            padding: 2,
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderUploadMessage()))))
                    }, t.prototype.renderUploadMessage = function() {
                        return 0 === this.props.errors.length ? tn.createElement("div", null, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size5,
                            color: fe.O.Alt,
                            bold: !0
                        }, Object(d.d)("Drag and drop or select files to upload", "UploadFilesBox")), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size6,
                            color: fe.O.Alt2
                        }, Object(d.d)("The Twitch uploader supports MP4, MOV, AVI and FLV files. Encoding must be H.264. Max file size is 20 GB.", "UploadFilesBox"))) : tn.createElement(xn, {
                            errors: this.props.errors
                        })
                    }, t.prototype.renderUploadIcon = function() {
                        return 0 === this.props.errors.length ? tn.createElement(fe.Eb, {
                            color: fe.O.Alt,
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Upload,
                            height: 24,
                            width: 24
                        })) : tn.createElement(fe.Eb, {
                            color: fe.O.Error,
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Warning,
                            height: 24,
                            width: 24
                        }))
                    }, t
                }(tn.Component)),
                jn = n("rj3Y"),
                Nn = n("wUQP"),
                Fn = n("17x9"),
                Pn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.onClick(), t.context.closeMenu()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.icon ? tn.createElement(fe.sb, {
                            asset: this.props.icon
                        }) : null;
                        return tn.createElement(fe.Ua, l.__assign({
                            onClick: this.handleClick,
                            disabled: !!this.props.disabled && this.props.disabled
                        }, Object(En.a)(this.props)), tn.createElement(fe.Xa, {
                            padding: 1,
                            flexGrow: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, e, tn.createElement(fe.Xa, {
                            padding: {
                                left: 1
                            }
                        }, this.props.text)))
                    }, t.contextTypes = {
                        closeMenu: Fn.func
                    }, t
                }(tn.Component),
                Rn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.context.menuChangeCallback(t.props.navTarget, t.props.navArrowSide)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.icon ? tn.createElement(fe.sb, {
                                asset: this.props.icon
                            }) : null,
                            t = null,
                            n = null;
                        return this.props.navArrowSide === h.DropdownMenuNavDirection.Left ? t = tn.createElement(fe.Eb, {
                            display: fe.X.InlineFlex,
                            alignItems: fe.f.Center,
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.GlyphArrLeft
                        })) : n = tn.createElement(fe.Eb, {
                            display: fe.X.InlineFlex,
                            alignItems: fe.f.Center,
                            padding: {
                                right: .5,
                                left: .5
                            }
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.GlyphArrRight
                        })), tn.createElement(fe.Ua, {
                            onClick: this.handleClick,
                            "data-test-selector": "video_card_dropdown_menu_nav_selector"
                        }, tn.createElement(fe.Xa, {
                            padding: 1,
                            flexGrow: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, t, e, tn.createElement(fe.Xa, {
                            padding: {
                                left: 1
                            },
                            flexGrow: 1
                        }, tn.createElement("span", null, this.props.text)), n))
                    }, t.contextTypes = {
                        menuChangeCallback: Fn.func
                    }, t
                }(tn.Component),
                Un = n("y6o+"),
                Ln = "add-to-vodcast-queue",
                Xn = "add-to-collection",
                Wn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.premieresSunset = Object(Nn.b)(Un.a), t.message = function() {
                            return t.props.inVodcastQueue ? Object(d.d)("In Rerun Queue", "VideoManagerMenuPageAddTo") : Object(d.d)("Rerun Queue", "VideoManagerMenuPageAddTo")
                        }, t.onAddVideoToVodcastQueue = function() {
                            t.props.onAddVideoToVodcastQueue(t.props.video)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.user.roles,
                            t = e.isAffiliate || e.isPartner || e.isStaff,
                            n = null,
                            a = null;
                        return this.props.hasMenuNavigationHeader || (n = tn.createElement(Rn, {
                            icon: fe.tb.Plus,
                            text: Object(d.d)("Add to", "VideoManagerMenuPageAddTo"),
                            navTarget: h.KEY_ROOT,
                            navArrowSide: h.DropdownMenuNavDirection.Left
                        }), a = tn.createElement(fe.Eb, {
                            fontSize: fe.Ca.Size6,
                            borderTop: !0,
                            borderLeft: !0,
                            display: fe.X.Flex,
                            flexWrap: fe.Ba.NoWrap,
                            flexGrow: 0
                        })), tn.createElement("div", {
                            "data-test-selector-menu": h.KEY_ADD_TO
                        }, n, a, tn.createElement(Rn, {
                            "data-test-selector": Xn,
                            text: Object(d.d)("Collections", "VideoManagerMenuPageAddTo"),
                            navTarget: h.KEY_COLLECTIONS,
                            navArrowSide: h.DropdownMenuNavDirection.Right
                        }), (!this.premieresSunset || t) && tn.createElement(Pn, {
                            "data-test-selector": Ln,
                            disabled: this.props.inVodcastQueue || this.props.vodcastQueueUnavailable,
                            text: this.message(),
                            onClick: this.onAddVideoToVodcastQueue
                        }))
                    }, t
                }(tn.Component),
                Bn = (n("zHWM"), n("MxAq")),
                Gn = n("SiBg"),
                zn = n("8Ad5"),
                Hn = "CollectionTitle",
                Qn = "CollectionCreateButton",
                Kn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onTitleChange = function(e) {
                            t.setState({
                                title: e.target.value
                            })
                        }, t.onSubmit = function() {
                            return l.__awaiter(t, void 0, Promise, function() {
                                var e, t = this;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.state.title || !this.props.videoID) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.createCollectionWithVideo(this.props.channelID, this.state.title, this.props.videoID, this.props.trackingPlace)];
                                        case 2:
                                            return n.sent(), this.setState({
                                                title: void 0
                                            }, function() {
                                                t.inputRef && (t.inputRef.value = "")
                                            }), [3, 4];
                                        case 3:
                                            return e = n.sent(), d.k.error(e, "create collection with video failed"), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onKeyDown = function(e) {
                            e.keyCode === zn.a.Enter && t.hasTitle() && t.onSubmit()
                        }, t.hasTitle = function() {
                            return Boolean(t.state.title && t.state.title.length > 0)
                        }, t.saveInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.channelID && this.props.videoID ? tn.createElement(fe.Xa, {
                            display: fe.X.Flex
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 1,
                            flexShrink: 0,
                            margin: {
                                right: .5
                            }
                        }, tn.createElement(fe.Ra, {
                            "data-test-selector": Hn,
                            autoComplete: "off",
                            name: "collection-name",
                            placeholder: Object(d.d)("Create a collection", "VideoManagerMenuPageCollections"),
                            type: fe.Ta.Text,
                            onChange: this.onTitleChange,
                            onKeyDown: this.onKeyDown,
                            refDelegate: this.saveInputRef
                        })), tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, tn.createElement(fe.z, {
                            onClick: this.onSubmit,
                            "data-test-selector": Qn,
                            disabled: !this.hasTitle()
                        }, Object(d.d)("Create", "VideoManagerMenuPageCollections")))) : tn.createElement(fe.Xa, null)
                    }, t = l.__decorate([Object(gn.b)("CollectionCreator")], t)
                }(tn.Component);
            var qn = Object(a.connect)(null, function(e) {
                    return Object(i.bindActionCreators)({
                        createCollectionWithVideo: Gn.d
                    }, e)
                })(Kn),
                Yn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            loading: !1
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement("div", {
                            "data-test-selector-menu": h.KEY_COLLECTIONS
                        }, tn.createElement(Rn, {
                            text: Object(d.d)("Collections", "VideoManagerMenuPageCollections"),
                            navTarget: h.KEY_ADD_TO,
                            navArrowSide: h.DropdownMenuNavDirection.Left
                        }), tn.createElement(fe.Eb, {
                            borderTop: !0,
                            borderLeft: !0,
                            fontSize: fe.Ca.Size6,
                            display: fe.X.Flex,
                            flexGrow: 0,
                            flexWrap: fe.Ba.NoWrap
                        }), tn.createElement(fe.Xa, {
                            padding: .5
                        }, tn.createElement(qn, {
                            channelID: this.props.channelID,
                            videoID: this.props.video.id,
                            trackingPlace: this.props.trackingPlace
                        })), tn.createElement(Bn.b, {
                            channelID: this.props.channelID,
                            videoID: this.props.video.id,
                            trackingPlace: this.props.trackingPlace
                        }))
                    }, t
                }(tn.Component);
            var Zn, Jn, $n = Object(a.connect)(function(e) {
                    return {
                        videoID: e.collections.videoID
                    }
                })(Yn),
                ea = n("rnKL"),
                ta = n("4rCz"),
                na = n("G6Bw");

            function aa(e) {
                return ta.q.apollo.client.query({
                    query: na,
                    variables: {
                        videoID: e
                    }
                })
            }

            function ia(e, t) {
                return l.__awaiter(this, void 0, void 0, function() {
                    var n, a, i, r, o, s;
                    return l.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                n = d.o.getLastPageview(), a = n && n.location || hn.PageviewLocation.None, i = null, r = null, l.label = 1;
                            case 1:
                                return l.trys.push([1, 3, , 4]), [4, aa(e)];
                            case 2:
                                return (o = l.sent().data).video && o.video.owner && (i = o.video.owner.login, r = o.video.owner.id), [3, 4];
                            case 3:
                                return s = l.sent(), d.k.error(s, aa.name), [3, 4];
                            case 4:
                                return d.o.track(ea.a.VODDownloadClick, {
                                    vod_id: e,
                                    vod_type: t,
                                    location: a,
                                    channel: i,
                                    channel_id: r
                                }), [2]
                        }
                    })
                })
            }! function(e) {
                e.CloseInteraction = "past_broadcast_storage_upsell_close"
            }(Zn || (Zn = {})),
            function(e) {
                e.Cancel = "cancel", e.Remove = "remove"
            }(Jn || (Jn = {}));
            var ra = "preparing",
                oa = "download",
                sa = "download-button",
                la = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDownload = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            ia(this.props.video.id, this.props.video.broadcastType), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDownloadVideo(this.props.video)];
                                        case 2:
                                            return (e = t.sent()) && e.status === h.DownloadStatus.Created ? [2] : [3, 4];
                                        case 3:
                                            return t.sent(), [3, 4];
                                        case 4:
                                            return this.context.closeMenu(), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.video.id in this.props.videoDownloads;
                        return tn.createElement(fe.Ua, {
                            onClick: this.onDownload,
                            disabled: e,
                            "data-test-selector": sa
                        }, tn.createElement(fe.Pa, {
                            padding: 1,
                            flexGrow: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, e ? this.renderPreparingState() : this.renderDownloadState()))
                    }, t.prototype.renderDownloadState = function() {
                        return tn.createElement(fe.Eb, {
                            "data-test-selector": oa
                        }, tn.createElement(fe.Xa, {
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Download
                        })), tn.createElement("span", null, Object(d.d)("Download", "VideoManagerMenuRoot")))
                    }, t.prototype.renderPreparingState = function() {
                        return tn.createElement(fe.Xa, {
                            "data-test-selector": ra
                        }, tn.createElement(fe.Xa, {
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.Za, {
                            size: fe.Cb.Small
                        })), tn.createElement("span", null, Object(d.d)("Preparing...", "VideoManagerMenuRoot")))
                    }, t.contextTypes = {
                        closeMenu: Fn.func
                    }, t
                }(tn.Component),
                da = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.context.closeMenu()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.icon ? tn.createElement(fe.sb, {
                            asset: this.props.icon
                        }) : null;
                        return tn.createElement(fe.Ua, {
                            linkTo: this.props.link,
                            targetBlank: this.props.targetBlank,
                            onClick: this.handleClick
                        }, tn.createElement(fe.Xa, {
                            padding: 1,
                            flexGrow: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, e, tn.createElement(fe.Xa, {
                            padding: {
                                left: 1
                            }
                        }, this.props.text)))
                    }, t.contextTypes = {
                        closeMenu: Fn.func
                    }, t
                }(tn.Component),
                ca = n("16Gl"),
                ua = "delete-video",
                pa = "add-selector",
                ma = "highlight-selector",
                ha = "watch-video",
                ga = "export",
                fa = "appeal-muted-tracks",
                va = function() {
                    return Object(d.d)("Highlight", "VideoManagerMenuRoot")
                },
                ba = function() {
                    return Object(d.d)("Watch", "VideoManagerMenuRoot")
                },
                Ea = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDelete = function() {
                            t.props.onDeleteVideo(t.props.video, t.props.videoUpload)
                        }, t.onExport = function() {
                            t.props.onExport(t.props.video)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Fe(this.props.video, this.props.videoUpload),
                            t = Re(this.props.video),
                            n = Ue(this.props.video);
                        return tn.createElement("div", {
                            "data-test-selector-menu": h.KEY_ROOT
                        }, e.menu.canEdit && tn.createElement(da, {
                            icon: fe.tb.Edit,
                            text: Object(d.d)("Edit", "VideoManagerMenuRoot"),
                            link: Object(ca.b)(this.props.channelName, this.props.video.id)
                        }), ke(e) && tn.createElement(Rn, {
                            "data-test-selector": pa,
                            icon: fe.tb.Plus,
                            text: Object(d.d)("Add to", "VideoManagerMenuRoot"),
                            navTarget: h.KEY_ADD_TO,
                            navArrowSide: h.DropdownMenuNavDirection.Right
                        }), this.props.isOwner && this.props.video.mutedSegments && this.props.video.mutedSegments.length > 0 && tn.createElement(da, {
                            icon: fe.tb.Muted,
                            text: Object(d.d)("Appeal Muted Audio", "VideoManagerMenuRoot"),
                            link: Object(ca.a)(this.props.channelName, this.props.video.id),
                            "data-test-selector": fa
                        }), e.menu.canDownload && tn.createElement(la, {
                            onDownloadVideo: this.props.onDownloadVideo,
                            video: this.props.video,
                            videoDownloads: this.props.videoDownloads
                        }), e.menu.canHighlight && tn.createElement(da, {
                            "data-test-selector": ma,
                            icon: fe.tb.Clip,
                            text: va(),
                            link: Object(ca.c)(this.props.channelName, this.props.video.id),
                            targetBlank: !0
                        }), n && tn.createElement(da, {
                            icon: fe.tb.Play,
                            text: ba(),
                            link: this.props.video.url,
                            "data-test-selector": ha,
                            targetBlank: !0
                        }), t && tn.createElement(Pn, {
                            "data-test-selector": ga,
                            onClick: this.onExport,
                            icon: fe.tb.Upload,
                            text: Object(d.d)("Export", "VideoManagerMenuRoot")
                        }), tn.createElement("div", {
                            className: "mg-05 border-t border-l font-size-6 flex-grow-0 flex flex-nowrap"
                        }), tn.createElement(Pn, {
                            icon: fe.tb.Trash,
                            text: Object(d.d)("Delete", "VideoManagerMenuRoot"),
                            onClick: this.onDelete,
                            "data-a-target": "delete-video-option",
                            "data-test-selector": ua
                        }))
                    }, t
                }(tn.Component),
                ya = n("TSYQ"),
                Ca = n("u5aL"),
                _a = (n("5mUL"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleMenuChange = function(e, t) {
                            null !== e && (n.setState({
                                currentKey: e
                            }), t === h.DropdownMenuNavDirection.Right ? n.setState({
                                slideInClass: " video-manager-dropdown__animation-right"
                            }) : n.setState({
                                slideInClass: " video-manager-dropdown__animation-left"
                            }))
                        }, n.startKey = function() {
                            return n.props.children[0].props.contentKey ? n.props.children[0].props.contentKey : ""
                        }, n.onCardClick = function(e) {
                            e.stopPropagation(), n.setState({
                                isDropdownMenuOpen: !n.state.isDropdownMenuOpen,
                                slideInClass: "",
                                currentKey: n.startKey()
                            })
                        }, n.onClickOut = function() {
                            n.setState({
                                isDropdownMenuOpen: !1,
                                slideInClass: "",
                                currentKey: n.startKey()
                            })
                        }, n.refHandler = function(e) {
                            n.menuButtonRef = e
                        }, n.inBottomHalf = function() {
                            return !!n.menuButtonRef && n.menuButtonRef.getBoundingClientRect().top > .55 * window.innerHeight
                        }, n.state = {
                            isDropdownMenuOpen: !1,
                            currentKey: n.startKey(),
                            slideInClass: ""
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e, t = this,
                            n = this.props.children.find(function(e) {
                                return e.props.contentKey === t.state.currentKey
                            }),
                            a = n && n.props.contentKey === h.KEY_COLLECTIONS,
                            i = ya("video-card-dropdown__dropdown-wrapper", {
                                "video-card-dropdown__hidden": !this.state.isDropdownMenuOpen,
                                "video-card-dropdown__dropdown-wrapper-right": this.props.isRightAligned,
                                "video-card-dropdown__dropdown-wide": a,
                                "video-card-dropdown__dropdown-open-up": this.inBottomHalf()
                            });
                        return e = this.props.showTextLabel ? tn.createElement(fe.z, {
                            type: fe.F.Text,
                            icon: this.props.icon,
                            onClick: this.onCardClick,
                            "data-a-target": "video-card-dropdown-button",
                            "data-test-selector": "video_card_dropdown_button_selector"
                        }, Object(d.d)("Add to", "VideoCardDropdown")) : tn.createElement(fe.Xa, {
                            fullHeight: !0,
                            display: fe.X.Flex,
                            alignItems: fe.f.Stretch
                        }, tn.createElement(fe.Ua, {
                            ariaLabel: this.props.buttonText,
                            type: fe.Va.Alpha,
                            onClick: this.onCardClick,
                            "data-a-target": "video-card-dropdown-button",
                            "data-test-selector": "video_card_dropdown_button_selector"
                        }, tn.createElement(fe.Xa, {
                            padding: {
                                x: 1
                            }
                        }, tn.createElement(fe.sb, {
                            asset: this.props.icon
                        })))), tn.createElement(fe.Xa, {
                            fullHeight: !0,
                            className: "video-card-dropdown__button",
                            refDelegate: this.refHandler
                        }, tn.createElement(fe.Pa, {
                            fullHeight: !0
                        }, tn.createElement(Ca.a, {
                            className: "video-manager-card--menu",
                            onClickOut: this.onClickOut
                        }, e, tn.createElement("div", {
                            "data-click-out-id": "video-manager-card--menu",
                            className: i,
                            "data-a-target": "video-card-dropdown-menu",
                            "data-test-selector": "video_card_dropdown_menu_selector"
                        }, tn.createElement("div", {
                            className: this.state.slideInClass
                        }, n)))))
                    }, t.prototype.getChildContext = function() {
                        return {
                            menuChangeCallback: this.handleMenuChange,
                            closeMenu: this.onClickOut
                        }
                    }, t.childContextTypes = {
                        menuChangeCallback: Fn.func,
                        closeMenu: Fn.func
                    }, t
                }(tn.Component)),
                Ta = n("cZKs"),
                Da = (n("0Kx4"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onConfirm = function() {
                            t.props.onConfirm(), t.props.closeModal()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement(fe.Eb, {
                            className: "confirm-cancel-modal",
                            background: fe.r.Base,
                            padding: 4
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 5
                            }
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H4
                        }, Object(d.d)("Are you sure you want to cancel your scheduled Premiere?", "CancelPremiereModal"))), tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            justifyContent: fe.Wa.Center
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            }
                        }, tn.createElement(fe.z, {
                            type: fe.F.Hollow,
                            onClick: this.props.closeModal,
                            "data-test-selector": "cancel-button"
                        }, Object(d.d)("Cancel", "CancelPremiereModal"))), tn.createElement(fe.z, {
                            onClick: this.onConfirm,
                            "data-a-target": "confirm",
                            "data-test-selector": "confirm-button"
                        }, Object(d.d)("Yes, cancel Premiere", "CancelPremiereModal"))), tn.createElement(Ta.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(tn.Component)),
                Sa = (n("N1GE"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement(fe.Eb, {
                            className: "confirm-publish-modal",
                            background: fe.r.Base,
                            padding: 4
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H4
                        }, Object(d.d)("Do you want to publish this video without a Premiere?", "ConfirmPublishModal"))), tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, Object(d.d)("A Premiere gives your video the debut it deserves, allowing your community to watch together with the excitement of chat.", "ConfirmPublishModal")), tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, tn.createElement(fe.N, {
                            onChange: this.props.dismissModalPermanently,
                            label: "Don't remind me again",
                            "data-test-selector": "dismiss-permanently-toggle"
                        })), tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            justifyContent: fe.Wa.Center
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            }
                        }, tn.createElement(fe.z, {
                            type: fe.F.Hollow,
                            onClick: this.props.closeModal,
                            "data-test-selector": "cancel-button"
                        }, Object(d.d)("Cancel", "ConfirmPublishModal"))), tn.createElement(fe.z, {
                            linkTo: this.props.onConfirm,
                            onClick: this.props.closeModal,
                            "data-test-selector": "confirm-button"
                        }, Object(d.d)("Publish without Premiere", "ConfirmPublishModal"))), tn.createElement(Ta.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(tn.Component)),
                ka = (n("jyE2"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            actionDropdownOpen: !1
                        }, t.premieresSunset = Object(Nn.b)(Un.a), t.onScheduleDropdownClick = function() {
                            t.setState(function(e) {
                                return {
                                    actionDropdownOpen: !e.actionDropdownOpen
                                }
                            })
                        }, t.hideScheduleDropdown = function() {
                            t.setState({
                                actionDropdownOpen: !1
                            })
                        }, t.renderDropdownActions = function(e) {
                            if (e.callToActionButton && e.callToActionButton.dropdownActions && e.callToActionButton.dropdownActions.length > 0) return tn.createElement("span", {
                                className: "premiere-dropdown",
                                "data-a-target": "premiere-dropdown"
                            }, tn.createElement(Ca.a, {
                                className: "premiere-dropdown__clickout",
                                onClickOut: t.hideScheduleDropdown
                            }, tn.createElement(fe.z, {
                                icon: fe.tb.GlyphArrDown,
                                type: fe.F.Hollow,
                                onClick: t.onScheduleDropdownClick,
                                "data-a-target": "open-premiere-dropdown",
                                "data-test-selector": "dropdown-actions"
                            }), tn.createElement(fe.u, {
                                direction: fe.v.BottomRight,
                                noTail: !0,
                                show: t.state.actionDropdownOpen,
                                offsetY: "0",
                                offsetX: "1rem",
                                "data-a-target": "premiere-dropdown-option",
                                "data-test-selector": "dropdown-balloon"
                            }, e.callToActionButton.dropdownActions.map(t.renderDropdownAction))))
                        }, t.renderDropdownAction = function(e) {
                            var n = t.getLinkOrAction(e),
                                a = n.publishURL,
                                i = n.modalAction;
                            return tn.createElement(fe.Ua, {
                                linkTo: a,
                                onClick: i,
                                key: e.message,
                                disabled: !a && !i
                            }, tn.createElement(fe.Xa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                textAlign: fe.Rb.Left
                            }, e.message))
                        }, t.renderPublishNow = function() {
                            return tn.createElement(fe.Xa, {
                                position: fe.jb.Relative,
                                padding: {
                                    x: 1
                                }
                            }, tn.createElement(fe.z, {
                                type: fe.F.Hollow,
                                disabled: t.props.displayProps.subrow.spinner,
                                linkTo: t.props.publishURL,
                                "data-test-selector": "primary-action"
                            }, Object(d.d)("Publish Now", "VideoCardPremiereButton")))
                        }, t.onCancelPremiere = function() {
                            t.props.showModal(Da, {
                                closeModal: t.props.closeModal,
                                onConfirm: t.props.onDeletePremiere
                            }), t.hideScheduleDropdown()
                        }, t.onImmediatePublish = function() {
                            t.props.showModal(Sa, {
                                dismissModalPermanently: t.props.dismissImmediatePublishModal,
                                closeModal: t.props.closeModal,
                                onConfirm: t.props.publishURL
                            }), t.hideScheduleDropdown()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (this.props.displayProps.callToActionButton) {
                            var e, t, n = this.props.user.roles,
                                a = n.isAffiliate || n.isPartner || n.isStaff;
                            if (this.premieresSunset && !a) return this.renderPublishNow();
                            var i = void 0;
                            return this.props.displayProps.callToActionButton.action === y.Delete ? (e = this.props.onDeleteVideo, i = fe.tb.Close) : t = this.props.scheduleURL, tn.createElement(fe.Xa, {
                                position: fe.jb.Relative,
                                padding: {
                                    x: 1
                                }
                            }, tn.createElement(fe.z, {
                                type: this.props.displayProps.callToActionButton.buttonType,
                                icon: i,
                                onClick: e,
                                linkTo: t,
                                "data-test-selector": "primary-action",
                                "data-a-target": "schedule-premiere"
                            }, this.props.displayProps.callToActionButton.message), this.renderDropdownActions(this.props.displayProps))
                        }
                    }, t.prototype.getLinkOrAction = function(e) {
                        var t, n = void 0;
                        return e.action === y.ImmediatePublish ? d.m.get("videoProducerSkipPublishModal", !1) ? n = this.props.publishURL : t = this.onImmediatePublish : e.action === y.DeletePremiere && (t = this.onCancelPremiere), {
                            publishURL: n,
                            modalAction: t
                        }
                    }, t
                }(tn.Component)),
                wa = (n("DG6M"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function(e) {
                            e.stopPropagation()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (void 0 === this.props.stat) return tn.createElement("div", null);
                        var e = "--";
                        if (this.props.video.publishedAt) {
                            var t = new Date(this.props.video.publishedAt);
                            Date.now() - t.valueOf() > 86400 && (e = Object(d.g)(this.props.stat, {
                                maximumFractionDigits: 1
                            }))
                        }
                        var n = {
                                className: "video-card__stat-button",
                                display: fe.X.InlineFlex,
                                fullHeight: !0
                            },
                            a = tn.createElement(fe.Db, {
                                value: e,
                                icon: this.props.icon,
                                label: e + " " + this.props.label
                            });
                        return this.props.linkTo ? tn.createElement(fe.Xa, l.__assign({}, n, Object(En.a)(this.props)), tn.createElement(fe.Ua, {
                            onClick: this.handleClick,
                            linkTo: this.props.linkTo,
                            type: fe.Va.Alpha,
                            targetBlank: !0
                        }, tn.createElement(fe.Xa, {
                            fullHeight: !0,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            justifyContent: fe.Wa.Center,
                            padding: 2
                        }, a))) : this.props.hoverDisplay ? tn.createElement(fe.Xa, l.__assign({}, n, {
                            alignItems: fe.f.Center,
                            justifyContent: fe.Wa.Center,
                            padding: 2
                        }, Object(En.a)(this.props)), a) : a
                    }, t
                }(tn.Component)),
                Oa = "status-bar-published",
                Ma = "stat-view-count",
                Ia = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = "";
                        if (this.props.video.viewableAt) {
                            var t = new Date(this.props.video.viewableAt);
                            e = t.toLocaleDateString() + " " + t.toLocaleTimeString()
                        }
                        return this.props.video.viewableAt ? tn.createElement("div", {
                            className: "video-card__status-display-bar",
                            "data-test-selector": Oa
                        }, Object(d.d)("Scheduled: {scheduledDate}", {
                            scheduledDate: e
                        }, "VideoManager")) : this.props.showViewCount ? tn.createElement(fe.Eb, {
                            fullHeight: !0,
                            fullWidth: !0,
                            color: fe.O.Link,
                            className: "video-card__status-display-bar"
                        }, tn.createElement(wa, {
                            stat: this.props.video.viewCount,
                            icon: fe.tb.GlyphViews,
                            label: "Views",
                            video: this.props.video,
                            hoverDisplay: !0,
                            "data-test-selector": Ma
                        })) : null
                    }, t
                }(tn.Component),
                Va = n("hyVY"),
                xa = "video-card-sub-pill-selector",
                Aa = "video-card-broadcast-type-stat-selector",
                ja = "video-card-duration-stat-selector",
                Na = "video-card-publish-date-selector",
                Fa = "video-card-scheduled-date-selector",
                Pa = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return this.props.subOnlyChannel && (e = tn.createElement(fe.gb, {
                            "data-test-selector": xa,
                            label: Object(d.d)("Sub-only", "VideoManager")
                        })), tn.createElement(fe.Eb, {
                            color: fe.O.Alt2,
                            fontSize: fe.Ca.Size6,
                            display: fe.X.Flex,
                            flexDirection: fe.Aa.Row,
                            flexWrap: fe.Ba.NoWrap,
                            alignItems: fe.f.Center,
                            margin: {
                                top: .5
                            },
                            flexShrink: 0,
                            flexGrow: 0
                        }, e, this.subheaderDetail())
                    }, t.prototype.subheaderDetail = function() {
                        var e = Fe(this.props.video),
                            t = null;
                        return e.subheader.duration && (t = this.durationElement(!0)), e.subheader.scheduledDate ? tn.createElement("div", null, this.scheduledDateElement(t)) : e.subheader.publishedDateBroadcastType ? tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, this.publishDateElement(), t, this.props.showViewCount && this.renderViewCount(), this.broadcastTypeElement()) : e.subheader.duration ? tn.createElement("div", null, this.durationElement()) : void 0
                    }, t.prototype.scheduledDateElement = function(e) {
                        if (!this.props.video.premiere || !this.props.video.premiere.event) return null;
                        var t = new Date(this.props.video.premiere.event.startTime),
                            n = d.p.intl.getLanguageCode() || "en",
                            a = Intl.DateTimeFormat(n, {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                timeZoneName: "short"
                            }).format(t);
                        return tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            margin: {
                                right: 1
                            },
                            "data-test-selector": Fa
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            }
                        }, tn.createElement(fe.W, {
                            bold: !0
                        }, Object(d.d)("Premieres:", "VideoManager"))), tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            },
                            display: fe.X.Flex,
                            flexDirection: fe.Aa.Row,
                            flexWrap: fe.Ba.Wrap
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a), tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, e)))
                    }, t.prototype.publishDateElement = function() {
                        if (!this.props.video.publishedAt) return null;
                        var e = new Date(this.props.video.publishedAt);
                        return e >= new Date ? null : tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            },
                            "data-test-selector": Na
                        }, e.toLocaleDateString())
                    }, t.prototype.renderViewCount = function() {
                        return tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            margin: {
                                right: 1
                            },
                            flexShrink: 0,
                            flexGrow: 0
                        }, tn.createElement(fe.Db, {
                            label: "",
                            value: this.props.viewCount.toString(),
                            icon: fe.tb.GlyphViews
                        }))
                    }, t.prototype.durationElement = function(e) {
                        var t = this.props.video.lengthSeconds ? Object(Va.b)(this.props.video.lengthSeconds) : "--:--";
                        return e ? tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            margin: {
                                right: 1
                            },
                            flexShrink: 0,
                            flexGrow: 0
                        }, this.durationElementData(t)) : tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0,
                            flexGrow: 0,
                            breakpointSmall: {
                                margin: {
                                    right: 1
                                }
                            }
                        }, this.durationElementData(t))
                    }, t.prototype.durationElementData = function(e) {
                        return tn.createElement(fe.Db, {
                            label: Object(d.d)("Duration", "VideoManager"),
                            value: e,
                            icon: fe.tb.GlyphLength,
                            "data-test-selector": ja
                        })
                    }, t.prototype.broadcastTypeElement = function() {
                        return tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0,
                            flexGrow: 0,
                            breakpointSmall: {
                                margin: {
                                    right: 1
                                }
                            }
                        }, tn.createElement(fe.Db, {
                            label: Object(d.d)("Type", "VideoManager.VideoLabel"),
                            value: Object(T.a)(this.props.video.broadcastType),
                            icon: fe.tb.NavVideos,
                            "data-test-selector": Aa
                        }))
                    }, t
                }(tn.Component),
                Ra = 1024,
                Ua = Ra * Ra,
                La = Ua * Ra;

            function Xa(e) {
                return Number(e.toFixed(1))
            }
            n("PEIf");
            var Wa, Ba = "video_card_thumbnail_uploading_selector",
                Ga = "video_card_thumbnail_selector",
                za = "video_card_thumbnail_overlay_selector",
                Ha = "video_card_thumbnail_overlay_icon_selector",
                Qa = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = Fe(this.props.video, this.props.videoUpload),
                            t = e.thumbnail,
                            n = null,
                            a = void 0,
                            i = t.message;
                        t.overlayIcon && (n = tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.sb, {
                            asset: t.overlayIcon,
                            "data-test-selector": Ha
                        })));
                        var r = Pe(this.props.video),
                            o = e.subrow;
                        if (o.spinner) a = tn.createElement(fe.Xa, {
                            "data-a-target": "video-card-processing",
                            padding: {
                                top: .5
                            }
                        }, tn.createElement(fe.Za, {
                            size: fe.Cb.Small,
                            inheritColor: !0
                        }));
                        else if (o.uploadProgress) a = this.renderUploadProgressText();
                        else if (o.expirationWarning && void 0 !== r) {
                            a = tn.createElement(fe.Eb, {
                                fontSize: fe.Ca.Size8
                            }, Object(d.d)("{numDays, number} days", {
                                numDays: r
                            }, "VideoManagerRowThumbnail"))
                        }
                        return this.props.video.customThumbnailError ? (i = Object(d.d)("Unable to process thumbnail, please try again", "VideoManagerCustomThumbnailError"), t.error = !0) : this.props.video.customThumbnailProcessing && (i = Object(d.d)("Processing new thumbnail...", "VideoManagerCustomThumbnail")), this.renderThumbnail(this.renderOverlay(t.error, i, n, a))
                    }, t.prototype.renderOverlay = function(e, t, n, a) {
                        void 0 === t && (t = null), void 0 === n && (n = null), void 0 === a && (a = null);
                        var i = null;
                        if (t) {
                            var r = e ? fe.O.Error : fe.O.Overlay;
                            i = tn.createElement(fe.Eb, {
                                color: r,
                                display: fe.X.Flex,
                                flexDirection: fe.Aa.Column,
                                padding: 1,
                                textAlign: fe.Rb.Center,
                                "data-a-target": "video-card-thumbnail",
                                className: "video-card-thumbnail__video-state-overlay",
                                "data-test-selector": za
                            }, n, tn.createElement(fe.W, null, t), a)
                        }
                        return i
                    }, t.prototype.renderThumbnail = function(e) {
                        return void 0 === e && (e = null), tn.createElement(fe.Eb, {
                            background: fe.r.Alt2,
                            className: "video-card-thumbnail__wrapper"
                        }, tn.createElement("figure", {
                            className: "video-card-thumbnail",
                            "data-test-selector": Ga
                        }, tn.createElement(fe.o, {
                            ratio: fe.p.Aspect16x9,
                            align: fe.d.Center
                        }, tn.createElement("img", {
                            src: He(this.props.video.preview, Ke, qe),
                            alt: ""
                        }))), e)
                    }, t.prototype.renderUploadProgressText = function() {
                        if (this.props.videoUpload) return tn.createElement(fe.W, {
                            color: fe.O.OverlayAlt,
                            "data-a-target": "video-card-thumbnail-uploading",
                            "data-test-selector": Ba
                        }, function(e, t, n) {
                            return t >= La ? Object(d.d)("{progress, number} GB / {total, number} GB ({percentage, number}%)", {
                                progress: Xa(e / La),
                                total: Xa(t / La),
                                percentage: n
                            }, "VideoManager.Uploader") : t >= Ua ? Object(d.d)("{progress, number} MB / {total, number} MB ({percentage, number}%)", {
                                progress: Xa(e / Ua),
                                total: Xa(t / Ua),
                                percentage: n
                            }, "VideoManager.Uploader") : t >= Ra ? Object(d.d)("{progress, number} KB / {total, number} KB ({percentage, number}%)", {
                                progress: Xa(e / Ra),
                                total: Xa(t / Ra),
                                percentage: n
                            }, "VideoManager.Uploader") : Object(d.d)("{progress, number} B / {total, number} B ({percentage, number}%)", {
                                progress: e,
                                total: t,
                                percentage: n
                            }, "VideoManager.Uploader")
                        }(this.props.videoUpload.totalBytesSent, this.props.videoUpload.fileSizeBytes, this.props.videoUpload.progressPercentage))
                    }, t
                }(tn.Component),
                Ka = (n("HEef"), "test-selector-error"),
                qa = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            actionDropdownOpen: !1
                        }, t.renderContextualButtons = function(e) {
                            var n = null;
                            return e.menu.canHighlight ? n = tn.createElement(fe.z, {
                                type: fe.F.Hollow,
                                icon: fe.tb.Highlighter,
                                linkTo: Object(ca.c)(t.props.channelName, t.props.video.id),
                                targetBlank: !0
                            }, va()) : Ue(t.props.video) && (n = tn.createElement(fe.z, {
                                type: fe.F.Hollow,
                                icon: fe.tb.MiniPlayerPlay,
                                linkTo: t.props.video.url,
                                targetBlank: !0
                            }, ba())), null === n ? null : tn.createElement(fe.Xa, {
                                display: fe.X.Flex,
                                alignItems: fe.f.Center,
                                margin: {
                                    x: 1
                                }
                            }, n)
                        }, t.onDeleteVideo = function() {
                            return t.props.onDeleteVideo(t.props.video, t.props.videoUpload)
                        }, t.onDeletePremiere = function() {
                            t.props.video.premiere && t.props.video.premiere.id && t.props.onDeletePremiere(t.props.user.id, t.props.video.premiere.id)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = Fe(this.props.video, this.props.videoUpload);
                        return e = t.callToActionButton ? tn.createElement(ka, {
                            displayProps: t,
                            onDeleteVideo: this.onDeleteVideo,
                            scheduleURL: Object(ca.d)(this.props.channelName, this.props.video.id),
                            showModal: this.props.showModal,
                            closeModal: this.props.closeModal,
                            onDeletePremiere: this.onDeletePremiere,
                            dismissImmediatePublishModal: this.props.dismissImmediatePublishModal,
                            publishURL: "/" + this.props.user.login + "/manager/publish/" + this.props.video.id,
                            user: this.props.user
                        }) : tn.createElement(Ia, {
                            video: this.props.video,
                            channelName: this.props.channelName,
                            showViewCount: !this.props.showContextualActions
                        }), tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.Eb, {
                            className: "video-card",
                            "data-target": "video-card",
                            elevation: 1,
                            display: fe.X.Flex,
                            flexWrap: fe.Ba.NoWrap,
                            flexDirection: fe.Aa.Row,
                            alignItems: fe.f.Stretch
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            display: fe.X.Flex,
                            flexWrap: fe.Ba.NoWrap,
                            flexDirection: fe.Aa.Column,
                            breakpointSmall: {
                                flexDirection: fe.Aa.Row
                            }
                        }, this.renderVideoMetadata(t), this.props.showContextualActions && this.renderContextualButtons(t)), tn.createElement(fe.Xa, {
                            className: "video-card__status-bar-layout",
                            display: fe.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            flexWrap: fe.Ba.NoWrap,
                            flexDirection: fe.Aa.Row,
                            alignItems: fe.f.Center
                        }, e), this.renderVideoMenu(t)), this.renderUploadProgressBar())
                    }, t.prototype.renderUploadProgressBar = function() {
                        if (this.props.videoUpload && De(this.props.videoUpload)) return tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            fullWidth: !0
                        }, tn.createElement(fe.mb, {
                            mask: !0,
                            size: fe.ob.Small,
                            value: this.props.videoUpload.progressPercentage
                        }))
                    }, t.prototype.renderVideoMetadata = function(e) {
                        var t;
                        return e.interactableMetaData && (this.props.video && e.callToActionButton && e.callToActionButton.action === y.EditPremiereEvent ? t = Object(ca.d)(this.props.channelName, this.props.video.id) : e.menu.canEdit && (t = Object(ca.b)(this.props.channelName, this.props.video.id))), t ? tn.createElement(fe.Ua, {
                            linkTo: t,
                            type: fe.Va.Alpha
                        }, this.renderVideoMetadataCard()) : tn.createElement(fe.Xa, {
                            fullWidth: !0
                        }, this.renderVideoMetadataCard())
                    }, t.prototype.renderVideoMetadataCard = function() {
                        var e = function(e, t) {
                                if (t && _e(t)) return Object(d.d)("Error Uploading: ", "VideoManager") + t.errors.map(function(e) {
                                    return e.message
                                }).join("\n");
                                if (Te(e)) {
                                    var n = e.failure;
                                    if (n) switch (n.errorCode) {
                                        case ge.g:
                                            return Object(d.d)("Invalid video file.", "VideoManager");
                                        case ge.h:
                                            return Object(d.d)("Video must be encoded in H.264 format.", "VideoManager");
                                        case ge.i:
                                            return Object(d.d)("Error processing video, please try uploading again.", "VideoManager");
                                        default:
                                            return d.k.error(new Error("Unrecognized failure error code on uploaded video: " + n.errorCode), "Failed to map video creation error code to user message"), Object(d.d)("Error processing video, please try uploading again.", "VideoManager.Default")
                                    }
                                }
                                return null
                            }(this.props.video, this.props.videoUpload),
                            t = e ? tn.createElement(fe.Xa, null, tn.createElement(fe.W, {
                                "data-test-selector": Ka,
                                bold: !0
                            }, e)) : null;
                        return tn.createElement(fe.G, {
                            row: !0,
                            "data-video-id": this.props.video.id
                        }, tn.createElement(Qa, {
                            video: this.props.video,
                            videoUpload: this.props.videoUpload
                        }), tn.createElement(fe.H, null, tn.createElement(fe.Xa, {
                            padding: {
                                x: 2
                            }
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H5,
                            color: fe.O.Alt
                        }, t, this.props.video.title), tn.createElement(Pa, {
                            video: this.props.video,
                            subOnlyChannel: this.props.subOnlyChannel,
                            showViewCount: this.props.showContextualActions,
                            viewCount: this.props.video.viewCount
                        }))))
                    }, t.prototype.renderVideoMenu = function(e) {
                        return e.menu.show ? tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            position: fe.jb.Relative
                        }, tn.createElement(_a, {
                            isRightAligned: !0,
                            icon: fe.tb.More,
                            buttonText: Object(d.d)("More Actions", "VideoManagerCard")
                        }, tn.createElement(Ea, {
                            video: this.props.video,
                            channelName: this.props.channelName,
                            contentKey: h.KEY_ROOT,
                            onDeleteVideo: this.props.onDeleteVideo,
                            onDownloadVideo: this.props.onDownloadVideo,
                            onExport: this.props.onExport,
                            videoUpload: this.props.videoUpload,
                            videoDownloads: this.props.videoDownloads,
                            isOwner: this.props.isOwner
                        }), tn.createElement(Wn, {
                            inVodcastQueue: this.props.inVodcastQueue,
                            onAddVideoToVodcastQueue: this.props.onAddVideoToVodcastQueue,
                            video: this.props.video,
                            channelName: this.props.channelName,
                            contentKey: h.KEY_ADD_TO,
                            vodcastQueueUnavailable: this.props.vodcastQueueUnavailable,
                            user: this.props.user
                        }), tn.createElement($n, {
                            video: this.props.video,
                            channelName: this.props.channelName,
                            contentKey: h.KEY_COLLECTIONS,
                            channelID: this.props.user.id,
                            trackingPlace: jn.a.VideoProducerRow
                        }))) : null
                    }, t
                }(tn.Component),
                Ya = n("tMx0"),
                Za = n("6XEL");
            ! function(e) {
                e.Control = "control", e.Variant1 = "variant1"
            }(Wa || (Wa = {}));
            var Ja = "closedUpsellExperiment",
                $a = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            qualifiesForArchiveEnableExperiment: !1
                        }, t.inUpsellExperiment = d.p.experiments.getAssignment(pn.b.VODEditingYoureWelcome, {
                            channel: t.props.channelLogin
                        }) === Wa.Variant1, t.closeUpsell = function() {
                            t.props.user && t.props.currentUser && function(e, t, n) {
                                d.o.track(ea.a.VideoManagerInteraction, {
                                    channel_id: e,
                                    user_id: t,
                                    interaction: "click",
                                    interaction_content: n
                                })
                            }(t.props.user.id, t.props.currentUser.id, Zn.CloseInteraction), d.m.set(Ja, !0), t.setState({
                                qualifiesForArchiveEnableExperiment: !1
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                return this.props.isLoading || this.handleUpsellStateCheck(this.props), [2]
                            })
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            return l.__generator(this, function(t) {
                                return Boolean(this.props.isLoading && !e.isLoading) && this.handleUpsellStateCheck(e), [2]
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.user && (e = {
                            pathname: "/" + this.props.user.login + "/dashboard/settings",
                            state: {
                                medium: hn.PageviewMedium.VideoManager,
                                content: hn.PageviewContent.ArchiveEnablingUpsell
                            }
                        }), this.state.qualifiesForArchiveEnableExperiment ? tn.createElement(fe.Na, {
                            closeButtonAriaLabel: Object(d.d)("Close", "VideoManangerUpsellNotification"),
                            description: Object(d.d)("Turn on past broadcast storage to create highlights, download your past broadcasts, and allow viewers who missed you live to catch-up. Visit Dashboard Settings to access the setting.", "VideoManangerUpsellNotification"),
                            title: "",
                            link: {
                                linkTo: e,
                                children: Object(d.d)("Dashboard settings", "VideoManangerUpsellNotification")
                            },
                            type: fe.Oa.Info,
                            closeButtonOnClick: this.closeUpsell
                        }) : null
                    }, t.prototype.handleUpsellStateCheck = function(e) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e.user ? d.m.get(Ja, !1) || !this.inUpsellExperiment ? [3, 2] : (t = e.user.roles.isPartner || e.user.roles.isAffiliate || e.user.roles.isStaff, [4, this.isArchivesEnabled(e)]) : [3, 2];
                                    case 1:
                                        n = a.sent(), this.setState({
                                                qualifiesForArchiveEnableExperiment: !n && t
                                            }),
                                            function(e) {
                                                d.o.track(ea.a.VideoManagerSectionLoad, {
                                                    section_name: "past_broadcast_storage_upsell",
                                                    channel_id: e
                                                })
                                            }(e.user.id), a.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.isArchivesEnabled = function(e) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = !1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 4, , 5]), e.user ? [4, function(e) {
                                            return l.__awaiter(this, void 0, void 0, function() {
                                                var t, n;
                                                return l.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return t = "/v5/channels/" + e + "/channel_properties", [4, Object(Za.c)({
                                                                path: t
                                                            })];
                                                        case 1:
                                                            return (n = a.sent()).isError() ? [2, {
                                                                isError: !0,
                                                                archivesEnabled: !1
                                                            }] : [2, {
                                                                isError: !1,
                                                                archivesEnabled: n.body.save_vods
                                                            }]
                                                    }
                                                })
                                            })
                                        }(e.user.id)] : [3, 3];
                                    case 2:
                                        return n = a.sent(), [2, t = n.archivesEnabled];
                                    case 3:
                                        return [3, 5];
                                    case 4:
                                        return a.sent(), [3, 5];
                                    case 5:
                                        return [2, t]
                                }
                            })
                        })
                    }, t
                }(tn.Component),
                ei = n("9rZX"),
                ti = n("4p7I"),
                ni = n("jKe7"),
                ai = n("76Lv"),
                ii = n("4VQm"),
                ri = "appealing-track",
                oi = "new-track",
                si = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.appeals = [], t.getAppealReasons = function() {
                            var e = t.state.selectedIndex;
                            return t.appeals.map(function(t, n) {
                                return tn.createElement("option", {
                                    key: n,
                                    value: t,
                                    selected: e === n
                                }, t)
                            })
                        }, t.onChange = function(e) {
                            t.setState({
                                selectedIndex: e.currentTarget.selectedIndex
                            }), 0 === e.currentTarget.selectedIndex ? t.props.onUpdateAppealReason(t.props.track) : t.props.onUpdateAppealReason(t.props.track, e.currentTarget.value)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.state = {
                            selectedIndex: 0
                        }
                    }, t.prototype.render = function() {
                        this.appeals = [Object(d.d)("Appeal Reason", "VideoManagerAppealMutedAudio"), Object(d.d)("My video does not contain the audio identified", "VideoManagerAppealMutedAudio"), Object(d.d)("I created and performed the original music without including any third party audio, and own all rights", "VideoManagerAppealMutedAudio"), Object(d.d)("I have permission from all applicable rights holders to use the audio and distribute it on Twitch as part of my video", "VideoManagerAppealMutedAudio"), Object(d.d)("My use of the audio as part of my video on Twitch is fair use", "VideoManagerAppealMutedAudio")];
                        var e = null,
                            t = null;
                        return this.props.track.track_appeal ? (e = tn.createElement(fe.W, {
                            "data-test-selector": ri
                        }, this.props.track.track_appeal.reason), t = tn.createElement(fe.W, null)) : (e = tn.createElement(fe.zb, {
                            onChange: this.onChange,
                            "data-test-selector": oi
                        }, this.getAppealReasons()), t = tn.createElement(fe.sb, {
                            asset: fe.tb.Check,
                            type: 0 !== this.state.selectedIndex ? fe.ub.Success : fe.ub.Placeholder,
                            width: 13,
                            height: 13
                        })), tn.createElement(fe.Eb, {
                            padding: 2
                        }, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Medium
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 1
                            }
                        }, t), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, tn.createElement(fe.W, {
                            bold: !0
                        }, this.props.track.title), tn.createElement(fe.W, null, this.props.track.performer)), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 1
                            }
                        }, tn.createElement(fe.W, null, new Date(1e3 * this.props.track.duration).toISOString().substr(11, 8).replace(/^[0:]+/, ""))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 3
                            }
                        }, tn.createElement(fe.W, null, this.props.track.track_appeal ? this.props.track.track_appeal.status : "")), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 2
                            }
                        }, e)))
                    }, t
                }(tn.PureComponent),
                li = "appeal",
                di = "track-row",
                ci = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onAppealRowUpdate = function(e, n) {
                            if (n) {
                                var a = t.state.appealTracks,
                                    i = a.findIndex(function(t) {
                                        return t.id === e.id
                                    }); - 1 === i ? a.push({
                                    id: e.id,
                                    title: e.title,
                                    performer: e.performer,
                                    reason: n
                                }) : a[i].reason = n, t.setState({
                                    appealTracks: a
                                })
                            } else t.setState({
                                appealTracks: t.state.appealTracks.filter(function(t) {
                                    return t.id === e.id
                                })
                            })
                        }, t.onClick = function() {
                            0 !== t.state.appealTracks.length && t.props.onAppealSelected(t.state.appealTracks)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.state = {
                            appealTracks: []
                        }
                    }, t.prototype.renderTracks = function(e) {
                        var t = this,
                            n = e.map(function(e) {
                                return tn.createElement(si, {
                                    key: e.id,
                                    track: e,
                                    onUpdateAppealReason: t.onAppealRowUpdate,
                                    "data-test-selector": di
                                })
                            });
                        return tn.createElement(fe.Xa, null, n)
                    }, t.prototype.render = function() {
                        var e = this.props.mutedTracks.data;
                        return tn.createElement(fe.Eb, {
                            padding: 2
                        }, tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            borderBottom: !0
                        }, tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4
                        }, Object(d.d)("Appeal Muted Audio", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.W, null, Object(d.d)("Please select the reason for the muted audio track you wish to appeal", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.W, null, Object(d.d)("You cannot appeal for the following reasons:", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.Eb, {
                            padding: 2,
                            background: fe.r.Alt2
                        }, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Medium
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 3
                            }
                        }, tn.createElement(fe.W, {
                            bold: !0
                        }, Object(d.d)("You own/streamed the audio", "VideoManagerAppealMutedAudio")), tn.createElement(fe.W, null, Object(d.d)("Buying or streaming audio for personal listening does not give you permission to distribute it on Twitch", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 1
                            }
                        }), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 3
                            }
                        }, tn.createElement(fe.W, {
                            bold: !0
                        }, Object(d.d)("You credited the artist", "VideoManagerAppealMutedAudio")), tn.createElement(fe.W, null, Object(d.d)("This is not enough to give you permission to distribute audio belonging to others on Twitch", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 1
                            }
                        }), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 3
                            }
                        }, tn.createElement(fe.W, {
                            bold: !0
                        }, Object(d.d)("In-game audio", "VideoManagerAppealMutedAudio")), tn.createElement(fe.W, null, Object(d.d)("Audio or music in games may still be separately copyrighted or for limited uses", "VideoManagerAppealMutedAudio"))))), tn.createElement(fe.Eb, {
                            padding: {
                                top: 2,
                                bottom: 2
                            },
                            borderBottom: !0
                        }, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Medium
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 1
                            }
                        }), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt
                        }, Object(d.d)("Track", "VideoManagerAppealMutedAudioListMutedTracks"))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 1
                            }
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt
                        }, Object(d.d)("Time", "VideoManagerAppealMutedAudioListMutedTracks"))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 3
                            }
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt
                        }, Object(d.d)("Status", "VideoManagerAppealMutedAudioListMutedTracks"))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 2
                            }
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt
                        }, Object(d.d)("Appeal Reason", "VideoManagerAppealMutedAudioListMutedTracks"))))), tn.createElement(fe.Eb, null, tn.createElement(ii.b, null, tn.createElement(fe.Xa, null, this.renderTracks(e)))), tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            padding: {
                                top: 2,
                                bottom: 2
                            },
                            borderTop: !0,
                            justifyContent: fe.Wa.Center
                        }, tn.createElement(fe.z, {
                            "data-test-selector": li,
                            onClick: this.onClick
                        }, Object(d.d)("Appeal Selected", "VideoManagerAppealMutedAudio"))))
                    }, t
                }(tn.PureComponent),
                ui = "BACK_TEST_SELECTOR",
                pi = "SUBMIT_TEST_SELECTOR",
                mi = "TRACK_TEST_SELECTOR",
                hi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSubmit = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.submitAppeal(this.props.videoID, this.state.submitData)];
                                        case 1:
                                            return e.sent(), this.props.onExit(), [2]
                                    }
                                })
                            })
                        }, t.onChange = function(e) {
                            var n = Object.assign({}, t.state.submitData, e);
                            t.setState({
                                submitData: n
                            })
                        }, t.onFullNameChange = function(e) {
                            t.onChange({
                                fullName: e.currentTarget.value
                            })
                        }, t.onStreetAddress1Change = function(e) {
                            t.onChange({
                                streetAddress1: e.currentTarget.value
                            })
                        }, t.onStreetAddress2Change = function(e) {
                            t.onChange({
                                streetAddress2: e.currentTarget.value
                            })
                        }, t.onCityChange = function(e) {
                            t.onChange({
                                city: e.currentTarget.value
                            })
                        }, t.onStateProvinceChange = function(e) {
                            t.onChange({
                                stateProvince: e.currentTarget.value
                            })
                        }, t.onZipPostalCodeChange = function(e) {
                            t.onChange({
                                zipPostalCode: e.currentTarget.value
                            })
                        }, t.onCountryChange = function(e) {
                            t.onChange({
                                country: e.currentTarget.value
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this.props.tracksForAppeal.map(function(e) {
                            return {
                                id: e.id,
                                reason: e.reason
                            }
                        });
                        this.state = {
                            submitData: {
                                fullName: "",
                                streetAddress1: "",
                                streetAddress2: "",
                                city: "",
                                stateProvince: "",
                                zipPostalCode: "",
                                country: "",
                                trackAppeals: e
                            }
                        }
                    }, t.prototype.renderTracks = function() {
                        var e = this.props.tracksForAppeal.map(function(e) {
                            return tn.createElement(fe.Eb, {
                                key: e.id,
                                padding: 1,
                                "data-test-selector": mi
                            }, tn.createElement(fe.Ja, {
                                gutterSize: fe.Ka.Medium
                            }, tn.createElement(fe.P, {
                                cols: {
                                    default: 12,
                                    sm: 4
                                }
                            }, tn.createElement(fe.W, {
                                bold: !0
                            }, e.title), tn.createElement(fe.W, null, e.performer)), tn.createElement(fe.P, {
                                cols: {
                                    default: 12,
                                    sm: 8
                                }
                            }, tn.createElement(fe.W, null, e.reason))))
                        });
                        return tn.createElement(fe.Xa, null, e)
                    }, t.prototype.renderFormRow = function(e, t, n, a, i, r) {
                        var o = null,
                            s = null;
                        return o = "" === e ? tn.createElement(fe.W, null) : tn.createElement(fe.Ea, {
                            label: e
                        }, tn.createElement(fe.Ra, {
                            type: fe.Ta.Text,
                            onChange: t,
                            defaultValue: n
                        })), s = "" === a ? tn.createElement(fe.W, null) : tn.createElement(fe.Ea, {
                            label: a
                        }, tn.createElement(fe.Ra, {
                            type: fe.Ta.Text,
                            onChange: i,
                            defaultValue: r
                        })), tn.createElement(fe.Eb, {
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Medium
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 6
                            }
                        }, o), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 6
                            }
                        }, s)))
                    }, t.prototype.renderError = function() {
                        return this.props.error && "" !== this.props.error ? tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            justifyContent: fe.Wa.Center,
                            padding: 2
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            },
                            display: fe.X.Flex
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Warning,
                            type: fe.ub.Alert,
                            width: 28,
                            height: 28
                        })), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4,
                            color: fe.O.Error
                        }, this.props.error)) : null
                    }, t.prototype.render = function() {
                        return tn.createElement(fe.Eb, {
                            padding: 2
                        }, tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            borderBottom: !0
                        }, tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4
                        }, Object(d.d)("Read and Sign", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.W, null, Object(d.d)("Please carefully read and complete the form below", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.W, null, Object(d.d)("I certify under penalty of perjury that I have a good faith belief that this portion of my VoD should be unmuted because of the following:", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.Eb, {
                            border: !0
                        }, tn.createElement(fe.Eb, {
                            padding: 1,
                            background: fe.r.Alt2,
                            borderBottom: !0
                        }, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Medium
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 4
                            }
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt
                        }, Object(d.d)("Track", "VideoManagerAppealMutedAudioSubmitAppeal"))), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt
                        }, Object(d.d)("Appeal Reason", "VideoManagerAppealMutedAudioSubmitAppeal"))))), tn.createElement(fe.Eb, null, tn.createElement(an.b, null, tn.createElement(fe.Xa, null, this.renderTracks())))), tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 1,
                                top: 2
                            }
                        }, tn.createElement(fe.W, null, Object(d.d)("I consent to the jurisdiction of the United States Federal District Court for the Northern District of California for any disputes related to this matter.", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.Xa, null, this.renderFormRow(Object(d.d)("Legal Full Name", "VideoManagerAppealMutedAudio"), this.onFullNameChange, this.state.submitData.fullName, "", function() {}, ""), this.renderFormRow(Object(d.d)("Street Address 1", "VideoManagerAppealMutedAudio"), this.onStreetAddress1Change, this.state.submitData.streetAddress1, Object(d.d)("Street Address 2", "VideoManagerAppealMutedAudio"), this.onStreetAddress2Change, this.state.submitData.streetAddress1), this.renderFormRow(Object(d.d)("City", "VideoManagerAppealMutedAudio"), this.onCityChange, this.state.submitData.city, Object(d.d)("State / Province", "VideoManagerAppealMutedAudio"), this.onStateProvinceChange, this.state.submitData.stateProvince), this.renderFormRow(Object(d.d)("Zip / Postal Code", "VideoManagerAppealMutedAudio"), this.onZipPostalCodeChange, this.state.submitData.zipPostalCode, Object(d.d)("Country", "VideoManagerAppealMutedAudio"), this.onCountryChange, this.state.submitData.country)), tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            padding: {
                                top: 2
                            },
                            justifyContent: fe.Wa.Center
                        }, tn.createElement(fe.Eb, {
                            margin: {
                                right: 1
                            }
                        }, tn.createElement(fe.z, {
                            type: fe.F.Text,
                            onClick: this.props.onBack,
                            "data-test-selector": ui
                        }, Object(d.d)("Back", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.Eb, {
                            margin: {
                                left: 1
                            }
                        }, tn.createElement(fe.z, {
                            onClick: this.onSubmit,
                            "data-test-selector": pi
                        }, Object(d.d)("Submit", "VideoManagerAppealMutedAudio")))), this.renderError())
                    }, t
                }(tn.PureComponent),
                gi = (n("HXKT"), "CANCEL_TEST_SELECTOR"),
                fi = "MODAL_ANIMATION_TEST_SELECTOR",
                vi = "LIST_MUTED_AUDIO_TRACKS_TEST_SELECTOR",
                bi = "SUBMIT_APPEAL_TEST_SELECTOR",
                Ei = "no-track",
                yi = 15e3,
                Ci = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            animationProps: {
                                type: fe.n.SlideInRight,
                                duration: fe.k.Medium,
                                timing: fe.m.EaseInOut,
                                enabled: !0
                            },
                            tracksForAppeal: []
                        }, t.timeoutID = null, t.fetchAudioTracks = function() {
                            t.props.fetchMutedTracks(t.props.videoID), t.timeoutID = setTimeout(t.fetchAudioTracks, yi)
                        }, t.onAppealSelected = function(e) {
                            t.setState({
                                tracksForAppeal: e
                            })
                        }, t.onBack = function() {
                            t.setState({
                                tracksForAppeal: []
                            })
                        }, t.onClose = function() {
                            t.animateOutAndClose()
                        }, t.animateOutAndClose = function(e) {
                            void 0 === e && (e = t.props.closeModal), t.setState({
                                animationProps: l.__assign({}, t.state.animationProps, {
                                    type: fe.n.SlideOutRight,
                                    onAnimationEnd: e
                                })
                            }), t.props.notificationService.setModalMode()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.fetchAudioTracks()
                    }, t.prototype.componentWillUnmount = function() {
                        this.timeoutID && clearTimeout(this.timeoutID), this.props.clearMutedTracks()
                    }, t.prototype.renderFields = function() {
                        var e = null;
                        return this.props.apiData.mutedTracks.data && 0 !== this.props.apiData.mutedTracks.data.length ? (e = this.state.tracksForAppeal && 0 !== this.state.tracksForAppeal.length ? tn.createElement(hi, l.__assign({}, this.props, {
                            error: this.props.apiData.submitAppeal.error,
                            tracksForAppeal: this.state.tracksForAppeal,
                            onBack: this.onBack,
                            onExit: this.onClose,
                            "data-test-selector": bi
                        })) : tn.createElement(ci, {
                            videoID: this.props.videoID,
                            mutedTracks: this.props.apiData.mutedTracks,
                            onAppealSelected: this.onAppealSelected,
                            "data-test-selector": vi
                        }), tn.createElement(fe.i, {
                            type: fe.n.FadeIn,
                            delay: fe.j.Medium,
                            duration: fe.k.Medium,
                            enabled: !0
                        }, e)) : this.props.apiData.mutedTracks.loading ? tn.createElement(fe.Za, {
                            fillContent: !0
                        }) : tn.createElement(fe.Eb, {
                            padding: 2,
                            borderTop: !0,
                            "data-test-selector": Ei
                        }, tn.createElement(fe.Xa, null, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4
                        }, Object(d.d)("Error: Unable to find muted audio details", "VideoManagerAppealMutedAudio"))), tn.createElement(fe.z, {
                            onClick: this.props.closeModal
                        }, Object(d.d)("Close", "VideoManagerAppealMutedAudio")))
                    }, t.prototype.render = function() {
                        return tn.createElement(fe.Eb, {
                            className: "appeal-muted-audio-modal",
                            position: fe.jb.Fixed
                        }, tn.createElement(fe.i, l.__assign({}, this.state.animationProps, {
                            "data-test-selector": fi
                        }), tn.createElement(fe.Eb, {
                            className: "appeal-muted-audio-modal__content",
                            background: fe.r.Base,
                            position: fe.jb.Fixed
                        }, tn.createElement(fe.Pa, {
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: 1
                        }, tn.createElement(Ca.a, {
                            onClickOut: this.onClose
                        }, tn.createElement(fe.Eb, {
                            display: fe.X.Flex
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.End
                        }), tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, tn.createElement(fe.z, {
                            type: fe.F.Text,
                            onClick: this.onClose,
                            "data-test-selector": gi
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Close,
                            type: fe.ub.Alt2
                        })))), tn.createElement(an.b, null, tn.createElement(fe.Xa, null, this.renderFields())))))), tn.createElement(Ta.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(tn.PureComponent);
            var _i = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e),
                    apiData: {
                        mutedTracks: e.videoManager.mutedTracks,
                        submitAppeal: e.videoManager.submitAppeal
                    }
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    fetchMutedTracks: yt,
                    submitAppeal: Ct,
                    clearMutedTracks: _t
                }, e)
            })(Ci);

            function Ti(e, t, n, a) {
                var i = this;
                return void 0 === n && (n = void 0), void 0 === a && (a = void 0), Ye(function(r) {
                    return l.__awaiter(i, void 0, void 0, function() {
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r.store.dispatch({
                                        type: k,
                                        isSaving: !0
                                    }), n ? [4, Tt(e, n)(r.store.dispatch, r.store.getState, {})] : [3, 2];
                                case 1:
                                    i.sent(), i.label = 2;
                                case 2:
                                    return a ? [4, function(e, t) {
                                        var n = this;
                                        return Ye(function(a) {
                                            return l.__awaiter(n, void 0, void 0, function() {
                                                var n, i;
                                                return l.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            if (t.file.size >= pt) throw a.store.dispatch({
                                                                type: P,
                                                                error: Object(d.d)("Your image file must be smaller than {imageFileMegabytes, number}MB", {
                                                                    imageFileMegabytes: "1"
                                                                }, "VideoManager"),
                                                                origin: h.EditModalErrorOrigin.Thumbnail
                                                            }), new Error("thumbnail is too big");
                                                            r.label = 1;
                                                        case 1:
                                                            return r.trys.push([1, 4, , 5]), [4, D.a.postOrThrow("/v5/videos/" + e.id + "/thumbnails/upload_requests", {
                                                                body: {
                                                                    crop_x: t.cropX,
                                                                    crop_y: t.cropY,
                                                                    crop_w: t.cropW,
                                                                    crop_h: t.cropH
                                                                }
                                                            })];
                                                        case 2:
                                                            return n = r.sent(), [4, fetch(n.body.url, {
                                                                method: "PUT",
                                                                body: t.file
                                                            })];
                                                        case 3:
                                                            return r.sent(), a.store.dispatch({
                                                                type: le,
                                                                videoID: e.id
                                                            }), [3, 5];
                                                        case 4:
                                                            throw i = r.sent(), a.store.dispatch({
                                                                type: P,
                                                                error: Object(d.d)("Saving custom video image failed.", "VideoManager"),
                                                                origin: h.EditModalErrorOrigin.Thumbnail
                                                            }), d.k.error(i, "Failed to upload thumbnail"), i;
                                                        case 5:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        })
                                    }(e, a)(r.store.dispatch, r.store.getState, {})] : [3, 4];
                                case 3:
                                    i.sent(), t.thumbnail_path = "", i.label = 4;
                                case 4:
                                    return [4, Dt(e, t)(r.store.dispatch, r.store.getState, {})];
                                case 5:
                                    return i.sent(), [2]
                            }
                        })
                    })
                })
            }
            var Di, Si = n("oJmH"),
                ki = n("LWYa"),
                wi = n("rixl"),
                Oi = n("7M30"),
                Mi = n("geRD"),
                Ii = n("DMoW"),
                Vi = function(e, t, n) {
                    var a = n.map(function(e) {
                        return e.id
                    });
                    return t && e.id && e.owner && e.owner.id ? t(l.__assign({}, Object(Mi.a)({
                        removedTagIDs: a,
                        contentType: Ii.q.VOD,
                        contentID: e.id,
                        authorID: e.owner.id
                    }))) : Promise.resolve()
                },
                xi = n("5Ijs"),
                Ai = n("trBB");
            ! function(e) {
                e.EveryoneOption = "everyone", e.SubOnlyOption = "sub-only"
            }(Di || (Di = {}));
            var ji = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(e.currentTarget.value)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement(fe.Ea, {
                            label: Object(d.d)("Permissions", "RestrictionSelect")
                        }, tn.createElement(fe.zb, {
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultValue.restrictionType
                        }, tn.createElement("option", {
                            key: "everyone",
                            value: h.RestrictionType.Everyone,
                            selected: this.props.defaultValue.restrictionType === h.RestrictionType.Everyone,
                            "data-test-selector": Di.EveryoneOption
                        }, Object(d.d)("Everyone", "RestrictionSelect")), tn.createElement("option", {
                            key: h.RestrictionType.SubOnly,
                            value: h.RestrictionType.SubOnly,
                            selected: this.props.defaultValue.restrictionType === h.RestrictionType.SubOnly,
                            "data-test-selector": Di.SubOnlyOption
                        }, Object(d.d)("$29.99 All-Access Pass purchaser only", "RestrictionSelect"))))
                    }, t
                }(tn.Component),
                Ni = n("KJdW"),
                Fi = n.n(Ni),
                Pi = n("KGBd"),
                Ri = (n("tUWl"), 1280),
                Ui = 720,
                Li = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = d.p.logger.withCategory("video-manager"), n.imageHeight = 0, n.imageWidth = 0, n.onUpdateCurrentCrop = function(e, t) {
                            n.setState({
                                percentCrop: e,
                                pixelCrop: t
                            }, n.onUpdateCropping)
                        }, n.renderDefaultCrop = function() {
                            var e = n.props.defaultPixelCrop;
                            if (e) {
                                var t = new Image;
                                t.onload = function() {
                                    var a = t.height,
                                        i = t.width,
                                        r = e.height < a ? e.height : a,
                                        o = e.width < i ? e.width : i;
                                    n.setState({
                                        percentCrop: l.__assign({}, e, {
                                            height: r / a * 100,
                                            width: o / i * 100
                                        })
                                    })
                                }, t.src = n.state.previewSrc || ""
                            }
                        }, n.translateInitialCrop = function(e, t, a) {
                            n.imageHeight = t.naturalHeight, n.imageWidth = t.naturalWidth, n.setState({
                                percentCrop: e,
                                pixelCrop: a
                            }, n.onUpdateCropping)
                        }, n.onUpdateCropping = function(e) {
                            (e ? n.props.onFinishCropping : n.props.onUpdateCropping)({
                                previewSrc: Object(Pi.a)(n.state.previewSrc, n.getScaledValue(n.state.percentCrop.x, n.imageWidth), n.getScaledValue(n.state.percentCrop.y, n.imageHeight), n.getScaledValue(n.state.percentCrop.width, n.imageWidth), n.getScaledValue(n.state.percentCrop.height, n.imageHeight), Ri, Ui),
                                uploadParams: {
                                    file: n.props.file,
                                    cropX: n.getScaledValue(n.state.percentCrop.x, n.imageWidth),
                                    cropY: n.getScaledValue(n.state.percentCrop.y, n.imageHeight),
                                    cropW: n.getScaledValue(n.state.percentCrop.width, n.imageWidth),
                                    cropH: n.getScaledValue(n.state.percentCrop.height, n.imageHeight)
                                }
                            })
                        }, n.onFinishCropping = function() {
                            n.onUpdateCropping(!0)
                        }, n.getScaledValue = function(e, t) {
                            return Math.floor(e / 100 * t)
                        }, n.state = {
                            percentCrop: {
                                x: 0,
                                y: 0,
                                width: 100,
                                height: 100
                            },
                            pixelCrop: {
                                x: 0,
                                y: 0,
                                width: 100,
                                height: 100
                            }
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = this,
                            t = new FileReader;
                        t.onloadend = function() {
                            e.setState({
                                previewSrc: t.result
                            }, e.renderDefaultCrop)
                        }, t.onerror = function(t) {
                            e.logger.error(new Error("code: " + t.code), "failed to read thumbnail file")
                        }, t.readAsDataURL(this.props.file)
                    }, t.prototype.render = function() {
                        var e = l.__assign({}, this.state.percentCrop, {
                            aspect: 16 / 9
                        });
                        return this.state.previewSrc ? tn.createElement("div", null, tn.createElement("figure", {
                            className: "thumbnail-selector-cropper__thumbnail-cropper"
                        }, tn.createElement(Fi.a, {
                            src: this.state.previewSrc,
                            crop: e,
                            onComplete: this.onUpdateCurrentCrop,
                            onImageLoaded: this.translateInitialCrop
                        })), tn.createElement(fe.Xa, {
                            margin: {
                                top: .5
                            },
                            className: "thumbnail-selector-cropper__thumbnail-select"
                        }, tn.createElement(fe.z, {
                            onClick: this.onFinishCropping,
                            fullWidth: !0
                        }, Object(d.d)("Finish Cropping", "VideoManagerThumbnailSelectorCropper")))) : null
                    }, t
                }(tn.Component),
                Xi = (n("/Fcb"), "thumbnail-selector-cropper__thumbnail-select-image"),
                Wi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleOnClick = function() {
                            t.props.onSelectThumbnail(t.props.thumbnailSrc)
                        }, t.handleDeleteCustomThumbnail = function(e) {
                            e.stopPropagation(), t.props.onDeleteCustomThumbnail(t.props.thumbnailSrc)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e, t = null;
                        if (this.props.isCustomThumbnail) {
                            var n = Object(d.d)("Remove Image", "SelectableThumbnail");
                            t = tn.createElement("div", {
                                className: "thumbnail-selector-cropper__custom-thumbnail-delete",
                                "data-test-selector": "delete-icon"
                            }, tn.createElement(fe.Yb, {
                                label: n,
                                direction: fe.ac.Right
                            }, tn.createElement(fe.A, {
                                onClick: this.handleDeleteCustomThumbnail,
                                ariaLabel: n,
                                type: fe.C.Primary,
                                icon: fe.tb.Close,
                                size: fe.B.Small
                            })))
                        }
                        var a = ((e = {})[Xi] = !0, e["thumbnail-selector-cropper__thumbnail-select-image--selected"] = this.props.isSelected, e["thumbnail-selector-cropper__custom-thumbnail"] = this.props.isCustomThumbnail, e),
                            i = "";
                        return i = this.props.isSelected ? Object(d.d)("Currently selected video thumbnail", "VideoManagerThumbnailSelectorCropper") : Object(d.d)("Video thumbnail option", "VideoManagerThumbnailSelectorCropper"), tn.createElement("div", {
                            className: ya(a),
                            onClick: this.handleOnClick
                        }, tn.createElement("figure", null, tn.createElement(fe.o, {
                            ratio: fe.p.Aspect16x9
                        }, tn.createElement("img", {
                            src: He(this.props.thumbnailSrc, Qe.width, Qe.height),
                            alt: i
                        }))), t)
                    }, t
                }(tn.Component),
                Bi = (n("pQ0o"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement("div", {
                            className: "thumbnail-selector-cropper__thumbnail-select-image thumbnail-selector-cropper__thumbnail-select-image--button",
                            key: "thumbnail-row-upload-button"
                        }, tn.createElement(fe.o, {
                            ratio: fe.p.Aspect16x9
                        }, tn.createElement(fe.Eb, {
                            border: !0,
                            className: "thumbnail-selector-cropper__upload-placeholder",
                            background: fe.r.Alt2,
                            color: fe.O.Link,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            justifyContent: fe.Wa.Center
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Upload,
                            type: fe.ub.Alt2,
                            height: 20,
                            width: 20
                        })), tn.createElement(fe.Eb, null, tn.createElement("input", {
                            type: "file",
                            accept: "image/jpeg, image/png",
                            name: "thumbnail",
                            className: "thumbnail-selector-cropper__thumbnail-select-button-input",
                            onChange: this.props.onSelectedFile
                        }))))
                    }, t
                }(tn.Component)),
                Gi = 4;

            function zi(e, t) {
                return e.find(function(e) {
                    return e.url === t
                }) ? t : e[0] ? e[0].url : ""
            }

            function Hi(e, t, n, a) {
                for (var i = [ge.f, ge.e].map(function(t) {
                        return e.filter(function(e) {
                            return e.type === t
                        })
                    }), r = i[0], o = i[1]; r.length > Gi - 1;) r.pop();
                var s = r.slice();
                if (a) s.push({
                    url: a,
                    type: ge.e
                });
                else if (!t) {
                    var l = o.find(function(e) {
                        return e.url === n
                    });
                    l ? s.push(l) : o.length > 0 && s.push(o[0])
                }
                return s
            }
            n("ZcVA");
            var Qi, Ki = {
                    thumbnailErrorSelector: "thumbnail-error-selector",
                    thumbnailSrcImage: "thumbnail-src-image"
                },
                qi = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderWhenCropping = function(e) {
                            return tn.createElement(Li, {
                                file: e,
                                onUpdateCropping: n.onUpdateCropping,
                                onFinishCropping: n.onFinishCropping,
                                onFailedReadFile: n.onFailedReadFile
                            })
                        }, n.onFailedReadFile = function() {
                            n.setState({
                                selectedFile: null
                            })
                        }, n.onUpdateCropping = function(e, t) {
                            n.props.onNewCustomThumbnailChange(e.uploadParams), n.props.onSelectedThumbnailChange(e.previewSrc), t && n.setState({
                                selectedFile: null,
                                newCustomThumbnailPreviewSrc: e.previewSrc
                            })
                        }, n.onFinishCropping = function(e) {
                            n.onUpdateCropping(e, !0)
                        }, n.onFileSelected = function(e) {
                            e.stopPropagation(), e && e.target && e.target.files && e.target.files[0] && (e.target.files[0].type.match("image/") ? n.setState({
                                selectedFile: e.target.files[0],
                                thumbnailTypeError: !1
                            }) : n.setState({
                                thumbnailTypeError: !0
                            }))
                        }, n.renderWhenSelecting = function() {
                            var e = Hi(n.props.video.thumbnails, n.props.thumbnailURLToDelete, n.props.video.preview, n.state.newCustomThumbnailPreviewSrc),
                                t = e.map(function(e, t) {
                                    return tn.createElement(Wi, {
                                        key: "thumbnail-row-" + t,
                                        title: n.props.video.title,
                                        thumbnailSrc: e.url,
                                        isCustomThumbnail: e.type === h.THUMBNAIL_TYPE_CUSTOM,
                                        isSelected: n.props.video.preview === e.url,
                                        onSelectThumbnail: n.props.onSelectedThumbnailChange,
                                        onDeleteCustomThumbnail: n.onDeleteCustomThumbnail
                                    })
                                });
                            void 0 === e.find(function(e) {
                                return e.type === h.THUMBNAIL_TYPE_CUSTOM
                            }) && t.push(tn.createElement(Bi, {
                                key: "thumbnail-row-b",
                                onSelectedFile: n.onFileSelected
                            }));
                            var a = {
                                    "thumbnail-selector-cropper": !0,
                                    "thumbnail-selector-cropper--error": n.state.thumbnailTypeError || null !== n.props.error
                                },
                                i = null;
                            if (n.props.error || n.state.thumbnailTypeError) {
                                var r = Object(d.d)("Please select a valid image file.", "VideoManagerThumbnailSelectorCropper");
                                i = tn.createElement(fe.Eb, {
                                    color: fe.O.Error,
                                    padding: {
                                        bottom: 1
                                    },
                                    display: fe.X.Flex,
                                    alignItems: fe.f.Center
                                }, tn.createElement(fe.Xa, {
                                    margin: {
                                        right: 1
                                    },
                                    display: fe.X.Flex
                                }, tn.createElement(fe.sb, {
                                    asset: fe.tb.Warning,
                                    type: fe.ub.Inherit,
                                    width: 24,
                                    height: 24
                                })), tn.createElement(fe.W, {
                                    "data-test-selector": Ki.thumbnailErrorSelector
                                }, n.state.thumbnailTypeError ? r : n.props.error))
                            }
                            var o = Fe(n.props.video),
                                s = n.props.video.preview;
                            return n.props.video.thumbnails && n.props.video.thumbnails[0] && (s = n.props.video.thumbnails[0].url), tn.createElement("div", {
                                className: ya(a)
                            }, i, tn.createElement("figure", {
                                className: "thumbnail-selector-cropper__thumbnail"
                            }, tn.createElement(fe.Eb, {
                                background: fe.r.Alt2,
                                className: "video-card-thumbnail__wrapper"
                            }, tn.createElement(fe.o, {
                                ratio: fe.p.Aspect16x9
                            }, tn.createElement("img", {
                                "data-test-selector": Ki.thumbnailSrcImage,
                                key: n.props.video.id,
                                src: n.state.newCustomThumbnailPreviewSrc || He(s, Qe.width, Qe.height),
                                alt: Object(d.d)("Video thumbnail", "VideoManagerThumbnailSelectorCropper")
                            })), je(n.props.video) && n.thumbnailProcessingWrapper(o))), tn.createElement(fe.Xa, {
                                margin: {
                                    top: .5
                                },
                                className: "thumbnail-selector-cropper__thumbnail-select"
                            }, t), tn.createElement(fe.Xa, {
                                margin: {
                                    top: .5
                                },
                                className: "thumbnail-selector-cropper__thumbnail-select"
                            }, tn.createElement(fe.W, {
                                type: fe.Vb.P,
                                fontSize: fe.Ca.Size7
                            }, Object(d.d)("Max thumbnail size: 1280 x 720px", "VideoManagerThumbnailSelectorCropper"))))
                        }, n.thumbnailProcessingWrapper = function(e) {
                            return tn.createElement(fe.Eb, {
                                color: fe.O.Overlay,
                                display: fe.X.Flex,
                                flexDirection: fe.Aa.Column,
                                textAlign: fe.Rb.Center,
                                className: "video-card-thumbnail__video-state-overlay"
                            }, tn.createElement(fe.W, {
                                fontSize: fe.Ca.Size4
                            }, e.thumbnail.message), tn.createElement(fe.Xa, {
                                padding: {
                                    top: 1
                                }
                            }, tn.createElement(fe.Za, {
                                inheritColor: !0,
                                size: fe.Cb.Large
                            })))
                        }, n.onDeleteCustomThumbnail = function(e) {
                            var t = Hi(n.props.video.thumbnails, e, n.props.video.preview, void 0);
                            e === n.state.newCustomThumbnailPreviewSrc ? n.setState({
                                newCustomThumbnailPreviewSrc: ""
                            }, function() {
                                n.props.onNewCustomThumbnailChange(void 0), n.props.onSelectedThumbnailChange(zi(t, n.props.video.preview))
                            }) : (n.props.onThumbnailDelete(e), n.props.onSelectedThumbnailChange(zi(t, n.props.video.preview)))
                        }, n.state = {
                            selectedFile: null,
                            newCustomThumbnailPreviewSrc: void 0,
                            thumbnailTypeError: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return this.state.selectedFile ? this.renderWhenCropping(this.state.selectedFile) : this.renderWhenSelecting()
                    }, t
                }(tn.Component),
                Yi = n("Jxh/"),
                Zi = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCopyToClipboard = function() {
                            Object(Yi.a)(n.props.url), n.setState({
                                isCopied: !0
                            })
                        }, n.state = {
                            isCopied: !1
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.state.isCopied ? Object(d.d)("Copied", "VideoManagerVideoURL") : Object(d.d)("Copy", "VideoManagerVideoURL"), tn.createElement(fe.Xa, null, tn.createElement(fe.Ea, {
                            id: "video-url",
                            label: Object(d.d)("Video URL", "VideoManagerEdit")
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.Ra, {
                            type: fe.Ta.Text,
                            name: "video-url",
                            value: this.props.url,
                            disabled: !0
                        })), tn.createElement(fe.z, {
                            type: fe.F.Hollow,
                            onClick: this.onCopyToClipboard
                        }, e))))
                    }, t
                }(tn.PureComponent);
            (Qi || (Qi = {})).VideoFieldEditor = "VideoFieldEditor";
            var Ji = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getVideoEdits = function(e) {
                            return {
                                title: e.title,
                                description: e.description ? e.description : null,
                                language: e.language,
                                game: e.game ? e.game.name : null,
                                tag_list: e.tags.join(",")
                            }
                        }, t.onVideoFieldChangeHandler = function(e, n) {
                            t.props.onChange(t.getVideoEdits(e), n)
                        }, t.onRestrictionChangeHandler = function(e) {
                            var n = {
                                restrictionType: e,
                                productName: t.props.video.restriction.productName,
                                title: t.props.video.restriction.title
                            };
                            t.props.onChange({
                                restriction: function(e) {
                                    return e.restrictionType === h.RestrictionType.Everyone ? "" : JSON.stringify(e)
                                }(n)
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = tn.createElement(Zi, {
                            url: this.props.video.url
                        });
                        return this.props.video.broadcastType && this.props.video.broadcastType.toLowerCase() === c.a.PremiereUpload.toLowerCase() && (e = null), tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Large
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(qi, {
                            video: this.props.video,
                            thumbnailURLToDelete: this.props.thumbnailURLToDelete,
                            onNewCustomThumbnailChange: this.props.onNewCustomThumbnailChange,
                            onThumbnailDelete: this.props.onThumbnailDelete,
                            onSelectedThumbnailChange: this.props.onSelectedThumbnailChange,
                            error: this.props.thumbnailError
                        })), tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, e)), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                sm: 7
                            }
                        }, this.renderVideoFieldEditor()))
                    }, t.prototype.renderVideoFieldEditor = function() {
                        var e = this.props.video,
                            t = {
                                description: e.description || "",
                                game: e.game ? {
                                    id: e.game.id,
                                    name: e.game.name
                                } : null,
                                language: e.language,
                                tags: e.tags,
                                title: e.title
                            },
                            n = tn.createElement(Ai.VideoFieldEditor, {
                                "data-test-selector": Qi.VideoFieldEditor,
                                disabled: this.props.saving,
                                onChange: this.onVideoFieldChangeHandler,
                                titleError: this.props.titleError ? this.props.titleError : void 0,
                                legacyVideo: t,
                                videoFragment: this.props.videoFragment
                            }),
                            a = null;
                        return this.props.showRestrictions && (a = tn.createElement(fe.Xa, {
                            margin: {
                                top: 2
                            }
                        }, tn.createElement(ji, {
                            disabled: this.props.saving,
                            defaultValue: this.props.video.restriction,
                            onChange: this.onRestrictionChangeHandler
                        }))), tn.createElement(fe.Xa, null, n, a)
                    }, t
                }(tn.Component),
                $i = function() {
                    return tn.createElement(fe.Xa, null, tn.createElement(fe.Ja, {
                        gutterSize: fe.Ka.Large
                    }, tn.createElement(fe.P, {
                        cols: {
                            default: 12,
                            sm: 5
                        }
                    }, tn.createElement(fe.ib, {
                        height: 170
                    }), tn.createElement(fe.Xa, {
                        display: fe.X.Flex,
                        margin: {
                            top: .5,
                            bottom: 2
                        }
                    }, tn.createElement(fe.Xa, {
                        padding: {
                            right: 1
                        }
                    }, tn.createElement(fe.ib, {
                        lineCount: 1,
                        width: 70
                    }), tn.createElement(fe.ib, {
                        lineCount: 1,
                        width: 70
                    }), tn.createElement(fe.ib, {
                        lineCount: 1,
                        width: 70
                    })), tn.createElement(fe.Xa, null, tn.createElement(fe.ib, {
                        lineCount: 1,
                        width: 70
                    }), tn.createElement(fe.ib, {
                        lineCount: 1,
                        width: 70
                    }), tn.createElement(fe.ib, {
                        lineCount: 1,
                        width: 70
                    })))), tn.createElement(fe.P, {
                        cols: {
                            default: 12,
                            sm: 7
                        }
                    }, tn.createElement(fe.ib, {
                        lineCount: 1
                    }), tn.createElement(fe.Xa, {
                        margin: {
                            y: 2
                        }
                    }, tn.createElement(fe.ib, {
                        height: 100
                    })), tn.createElement(fe.ib, {
                        lineCount: 6
                    }))))
                },
                er = (n("LUgQ"), 900),
                tr = "save",
                nr = "cancel",
                ar = "over-capacity-notice",
                ir = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderSplitOption = function() {
                            if (n.props.video.lengthSeconds > er) {
                                var e = er / 60;
                                return tn.createElement(fe.Xa, {
                                    margin: {
                                        y: 1
                                    }
                                }, tn.createElement(fe.Ea, {
                                    id: "ye-split",
                                    label: Object(d.d)("Length", "VideoManagerYoutubeExport")
                                }, tn.createElement(fe.Yb, {
                                    direction: fe.ac.Bottom,
                                    align: fe.Zb.Left,
                                    label: Object(d.d)("{numMinutes, number} minutes is the maximum allowed upload length for non-verified YouTube accounts. The export may fail if your YouTube account is not verified.", {
                                        numMinutes: e
                                    }, "VideoManagerYoutubeExport"),
                                    width: 300
                                }, tn.createElement(fe.N, {
                                    id: "ye-split",
                                    label: Object(d.d)("Split the video in to {numMinutes, number} minute segments.", {
                                        numMinutes: e
                                    }, "VideoManagerYoutubeExport"),
                                    onChange: n.onChangeSplit
                                }))))
                            }
                        }, n.renderErrorMessage = function() {
                            if (null !== n.state.error && n.state.error.length > 0) return tn.createElement(fe.Eb, {
                                display: fe.X.Flex,
                                alignItems: fe.f.Center,
                                flexWrap: fe.Ba.NoWrap,
                                color: fe.O.Error
                            }, tn.createElement(fe.Xa, {
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: {
                                    right: 1
                                },
                                display: fe.X.Flex
                            }, tn.createElement(fe.sb, {
                                asset: fe.tb.Warning,
                                height: 24,
                                width: 24
                            })), tn.createElement(fe.W, null, n.state.error))
                        }, n.onChangeTitle = function(e) {
                            n.onSettingsChange({
                                title: e.currentTarget.value
                            })
                        }, n.onChangeDescription = function(e) {
                            n.onSettingsChange({
                                description: e.currentTarget.value
                            })
                        }, n.onChangeTags = function(e) {
                            n.onSettingsChange({
                                tags: e.currentTarget.value
                            })
                        }, n.onChangePrivate = function(e) {
                            n.onSettingsChange({
                                private: "true" === e.currentTarget.value
                            })
                        }, n.onChangeSplit = function(e) {
                            n.onSettingsChange({
                                split: "true" === e.currentTarget.value
                            })
                        }, n.onConfirm = function() {
                            return l.__awaiter(n, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return function(e, t, n) {
                                                l.__awaiter(this, void 0, void 0, function() {
                                                    var a, i, r, o, s, c;
                                                    return l.__generator(this, function(l) {
                                                        switch (l.label) {
                                                            case 0:
                                                                a = d.o.getLastPageview(), i = a && a.location || hn.PageviewLocation.None, r = null, o = null, l.label = 1;
                                                            case 1:
                                                                return l.trys.push([1, 3, , 4]), [4, aa(e)];
                                                            case 2:
                                                                return (s = l.sent().data).video && s.video.owner && (r = s.video.owner.login, o = s.video.owner.id), [3, 4];
                                                            case 3:
                                                                return c = l.sent(), d.k.error(c, aa.name), [3, 4];
                                                            case 4:
                                                                return d.o.track(ea.a.VODExportClick, {
                                                                    vod_id: e,
                                                                    vod_type: t,
                                                                    export_destination: n,
                                                                    location: i,
                                                                    channel: r,
                                                                    channel_id: o
                                                                }), [2]
                                                        }
                                                    })
                                                })
                                            }(this.props.video.id, this.props.video.broadcastType, h.ExportDestination.Youtube), [4, this.props.exportVideo(this.props.video.id, this.state.settings)];
                                        case 1:
                                            return e.sent(), this.props.closeModal(), [2]
                                    }
                                })
                            })
                        }, n.onCancel = function() {
                            n.props.closeModal()
                        }, n.state = {
                            exporterDisabled: !1,
                            settings: {
                                title: t.video.title,
                                description: t.video.description || "",
                                tags: t.video.tags.join(","),
                                private: !0,
                                split: !1
                            },
                            error: null
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = d.b.get("youtube_export_disabled", !1);
                        this.setState({
                            exporterDisabled: e
                        })
                    }, t.prototype.render = function() {
                        var e = Object(d.d)("Cancel", "VideoManagerYoutubeExport");
                        return this.state.exporterDisabled ? tn.createElement(fe.Eb, {
                            className: "export-youtube-modal",
                            display: fe.X.Flex,
                            justifyContent: fe.Wa.Center,
                            background: fe.r.Base,
                            padding: 4,
                            "data-test-selector": ar
                        }, tn.createElement(fe.W, null, Object(d.d)("Our YouTube exporter is over capacity right now. We'll be back soon. Follow <x:link>@TwitchSupport</x:link> on Twitter for updates and assistance.", {
                            "x:link": function(e) {
                                return tn.createElement("a", {
                                    href: "https://twitter.com/TwitchSupport",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, e)
                            }
                        }, "VideoManagerYoutubeExport")), tn.createElement(fe.z, {
                            onClick: this.onCancel
                        }, e)) : tn.createElement(fe.Eb, {
                            className: "export-youtube-modal",
                            background: fe.r.Base,
                            padding: 4
                        }, tn.createElement(fe.Eb, {
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 2
                            },
                            borderBottom: !0
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H3
                        }, Object(d.d)("Export to YouTube", "VideoManagerYoutubeExport"))), this.renderErrorMessage(), tn.createElement(fe.Xa, {
                            margin: {
                                y: 1
                            }
                        }, tn.createElement(fe.Ea, {
                            id: "ye-title",
                            label: Object(d.d)("Title", "VideoManagerYoutubeExport")
                        }, tn.createElement(fe.Ra, {
                            id: "ye-title",
                            type: fe.Ta.Text,
                            name: "title",
                            value: this.state.settings.title,
                            onChange: this.onChangeTitle
                        }))), tn.createElement(fe.Xa, {
                            margin: {
                                y: 1
                            }
                        }, tn.createElement(fe.Ea, {
                            id: "ye-description",
                            label: Object(d.d)("Description", "VideoManagerYoutubeExport")
                        }, tn.createElement(fe.Sb, {
                            id: "ye-description",
                            name: "description",
                            value: this.state.settings.description,
                            onChange: this.onChangeDescription
                        }))), tn.createElement(fe.Xa, {
                            margin: {
                                y: 1
                            }
                        }, tn.createElement(fe.Ea, {
                            id: "ye-tags",
                            label: Object(d.d)("Tags", "VideoManagerYoutubeExport")
                        }, tn.createElement(fe.Ra, {
                            id: "ye-tags",
                            type: fe.Ta.Text,
                            name: "tag_list",
                            value: this.state.settings.tags,
                            onChange: this.onChangeTags
                        }))), tn.createElement(fe.Xa, {
                            margin: {
                                y: 1
                            }
                        }, tn.createElement(fe.Ea, {
                            id: "ye-private",
                            label: Object(d.d)("Visibility", "VideoManagerYoutubeExport")
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.InlineBlock,
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.pb, {
                            label: Object(d.d)("Public", "VideoManagerYoutubeExport"),
                            value: "false",
                            checked: !this.state.settings.private,
                            name: "video-manager-youtube-export-privacy-public",
                            onChange: this.onChangePrivate
                        })), tn.createElement(fe.Xa, {
                            display: fe.X.InlineBlock,
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.pb, {
                            label: Object(d.d)("Private", "VideoManagerYoutubeExport"),
                            value: "true",
                            checked: this.state.settings.private,
                            name: "video-manager-youtube-export-privacy-private",
                            onChange: this.onChangePrivate
                        })))), this.renderSplitOption(), tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            justifyContent: fe.Wa.Center,
                            padding: {
                                top: 2
                            },
                            margin: {
                                top: 2
                            },
                            borderTop: !0
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                x: 1
                            }
                        }, tn.createElement(fe.z, {
                            type: fe.F.Text,
                            onClick: this.onCancel,
                            "data-test-selector": nr
                        }, e)), tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                x: 1
                            }
                        }, tn.createElement(fe.z, {
                            onClick: this.onConfirm,
                            "data-test-selector": tr
                        }, Object(d.d)("Start Export", "VideoManagerYoutubeExport")))), tn.createElement(Ta.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.prototype.onSettingsChange = function(e) {
                        this.setState({
                            settings: l.__assign({}, this.state.settings, e)
                        })
                    }, t
                }(tn.PureComponent),
                rr = (n("Bwwq"), "CANCEL_TEST_SELECTOR"),
                or = "SAVE_TEST_SELECTOR",
                sr = "MODAL_ANIMATION_TEST_SELECTOR",
                lr = "SAVE_ERROR_SELECTOR",
                dr = "watch-selector",
                cr = "highlight-selector",
                ur = "download-selector",
                pr = "add-to-selector",
                mr = "export-selector",
                hr = "download",
                gr = "preparing",
                fr = "bottom-row",
                vr = "next-video",
                br = "previousVideo",
                Er = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            notificationDismissed: !1,
                            videoEdits: t.props.apiData.video ? E(t.props.apiData.video) : null,
                            videoFragmentEdits: {
                                contentTagsToRemove: []
                            },
                            isDirty: !1,
                            animationProps: {
                                type: fe.n.SlideInRight,
                                duration: fe.k.Medium,
                                timing: fe.m.EaseInOut,
                                enabled: !0
                            },
                            titleError: null,
                            videoExported: !1,
                            vodQueue: t.props.location && t.props.location.state && t.props.location.state.vodIDs || []
                        }, t.onNewCustomThumbnailChange = function(e) {
                            t.setState({
                                newCustomThumbnail: e
                            }), t.onChange({})
                        }, t.onSaveVideo = function() {
                            t.state.videoEdits && (t.props.clearEditModalErrors(), t.setState({
                                isDirty: !1,
                                notificationDismissed: !1
                            }, function() {
                                return l.__awaiter(t, void 0, void 0, function() {
                                    return l.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return this.state.videoEdits && this.props.apiData.video ? this.state.videoEdits && 0 === this.state.videoEdits.title.length ? [2] : [4, this.props.saveVideoAndThumbnails(this.props.apiData.video, this.state.videoEdits, this.state.thumbnailURLToDelete, this.state.newCustomThumbnail)] : [2];
                                            case 1:
                                                return e.sent(), this.props.publishFlow ? [4, this.props.immediatePublish(this.props.apiData.video.id, this.props.notificationService)] : [3, 3];
                                            case 2:
                                                e.sent(), e.label = 3;
                                            case 3:
                                                return this.props.data.video && this.state.videoFragmentEdits.contentTagsToRemove.length > 0 ? [4, Vi(this.props.data.video, this.props.updateContentTags, this.state.videoFragmentEdits.contentTagsToRemove)] : [3, 5];
                                            case 4:
                                                e.sent(), e.label = 5;
                                            case 5:
                                                return window.removeEventListener("beforeunload", this.beforeunloadHandler), 0 === this.state.vodQueue.length || this.getPositionInQueue() === this.state.vodQueue.length - 1 ? this.animateOutAndClose() : this.navigateToNextVODInQueue(), [2]
                                        }
                                    })
                                })
                            }))
                        }, t.onSelectedThumbnailChange = function(e) {
                            t.onChange({
                                thumbnail_path: e
                            })
                        }, t.onThumbnailDelete = function(e) {
                            t.setState({
                                thumbnailURLToDelete: e
                            }), t.onChange({})
                        }, t.onAddVideoToVodcastQueue = function(e) {
                            t.props.user && t.props.addVideoToVodcastQueue(t.props.user.id, e.id, t.props.notificationService)
                        }, t.onDownload = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                return l.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.apiData.video ? (ia(this.props.apiData.video.id, this.props.apiData.video.broadcastType), [4, this.props.onDownload(this.props.apiData.video.id, this.props.notificationService)]) : [2];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                })
                            })
                        }, t.onChange = function(e, n) {
                            var a = Object.assign({}, t.state.videoEdits, e),
                                i = !a.title || 0 === a.title.trim().length;
                            window.addEventListener("beforeunload", t.beforeunloadHandler);
                            var r = t.state.videoFragmentEdits;
                            n && (r = {
                                contentTagsToRemove: r.contentTagsToRemove.concat([n])
                            }), t.setState({
                                videoEdits: a,
                                videoFragmentEdits: r,
                                isDirty: !0,
                                titleError: i ? Object(d.d)("Title is required", "VideoManagerEdit") : null
                            }), t.props.apiData.errors.length > 0 && t.props.clearEditModalErrors()
                        }, t.onCancel = function() {
                            return !(t.state.isDirty && !t.confirmDiscardChanges()) && (t.setState({
                                isDirty: !1
                            }), t.animateOutAndClose(), !0)
                        }, t.animateOutAndClose = function(e) {
                            void 0 === e && (e = t.props.closeManagerModal), t.setState({
                                animationProps: l.__assign({}, t.state.animationProps, {
                                    type: fe.n.SlideOutRight,
                                    onAnimationEnd: e
                                })
                            }), t.props.notificationService.setModalMode()
                        }, t.beforeunloadHandler = function(e) {
                            var n = t.confirmDiscardChanges();
                            return e.returnValue = n, n
                        }, t.renderCancelMessage = function() {
                            return Object(d.d)("Cancel", "VideoManagerEdit")
                        }, t.renderSaveMessage = function() {
                            return Object(d.d)("Save Changes", "VideoManagerEdit")
                        }, t.renderSaveNextMessage = function() {
                            return Object(d.d)("Save and Next", "VideoManagerEdit")
                        }, t.renderPublishMessage = function() {
                            return Object(d.d)("Publish", "VideoManagerEdit")
                        }, t.renderNavigationWarningMessage = function() {
                            return Object(d.d)("Are you sure you want to stop editing? All unsaved changes will be lost.", "VideoManagerEdit")
                        }, t.navigateToVODInQueue = function(e) {
                            t.props.clearEditModalErrors(), t.props.history.push("/" + t.props.channelName + "/manager/edit/" + t.state.vodQueue[e]), t.setState({
                                newCustomThumbnail: void 0
                            })
                        }, t.navigateToNextVODInQueue = function() {
                            t.navigateToVODInQueue(t.getPositionInQueue() + 1)
                        }, t.navigateToPreviousVODInQueue = function() {
                            t.navigateToVODInQueue(t.getPositionInQueue() - 1)
                        }, t.getPositionInQueue = function() {
                            return t.state.vodQueue.findIndex(function(e) {
                                return e === t.props.videoID
                            })
                        }, t.onExport = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return l.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.onCancel() ? (e = this.props.user.id === this.props.currentUser.id, this.props.youtubeConnected ? (this.showExportModal(), [3, 4]) : [3, 1]) : [3, 4];
                                        case 1:
                                            return e ? [4, this.props.authenticateYoutube(this.props.user.id)] : [3, 3];
                                        case 2:
                                            return t.sent(), this.showExportModal(), [3, 4];
                                        case 3:
                                            this.props.notificationService.push(Object(d.d)("This channel has not connected their youtube account", "VideoManagerEdit")), t.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.showExportModal = function() {
                            t.props.showModal(ir, {
                                video: t.props.apiData.video,
                                exportVideo: t.props.exportVideo,
                                closeModal: t.props.closeModal
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.props.apiData.channelName ? this.props.apiData.video || this.props.clearEditingVideo() : this.props.changeChannel(this.props.channelName), this.fetchData(this.propsToPageContext(this.props))
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.clearEditingVideo(), window.removeEventListener("beforeunload", this.beforeunloadHandler)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.fetchData(this.propsToPageContext(e), this.propsToPageContext(this.props)), e.apiData.video && (this.state.videoEdits || (this.setState({
                            isDirty: !1,
                            videoEdits: E(e.apiData.video)
                        }), window.removeEventListener("beforeunload", this.beforeunloadHandler)), this.props.apiData.video && this.state.videoEdits && this.props.apiData.video && e.apiData.video.id !== this.props.apiData.video.id && this.setState({
                            videoEdits: E(e.apiData.video),
                            isDirty: !1
                        }))
                    }, t.prototype.renderFields = function() {
                        var e = null,
                            t = this.props.apiData.errors.find(function(e) {
                                return e.origin === h.EditModalErrorOrigin.Thumbnail
                            }),
                            n = this.props.apiData.errors.find(function(e) {
                                return e.origin === h.EditModalErrorOrigin.Initialize
                            }),
                            a = this.props.user.campaignProperties && this.props.user.campaignProperties.domains && this.props.user.campaignProperties.domains.length > 0 || !1;
                        if (void 0 !== n) e = tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            justifyContent: fe.Wa.Center,
                            padding: 2
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            },
                            display: fe.X.Flex
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Warning,
                            type: fe.ub.Alt2,
                            width: 28,
                            height: 28
                        })), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4
                        }, n.message));
                        else if (!this.props.apiData.loading && this.state.videoEdits && this.props.apiData.video) {
                            var i = d.b.get("twilight_owl_sub_only_vod", !1) && a,
                                r = function(e, t) {
                                    var n = null;
                                    return t.game && (n = {
                                        __typename: "Game",
                                        id: "",
                                        name: t.game
                                    }), l.__assign({}, e, {
                                        description: t.description,
                                        game: n,
                                        language: t.language,
                                        title: t.title,
                                        preview: t.thumbnail_path,
                                        scope: t.viewable.toUpperCase(),
                                        restriction: t.restriction ? b(t.restriction) : e.restriction,
                                        viewableAt: t.viewable_at,
                                        tags: t.tag_list ? t.tag_list.split(",") : []
                                    })
                                }(this.props.apiData.video, this.state.videoEdits);
                            this.props.data && this.props.data.video && this.props.data.video.contentTags && this.props.data.video.owner && this.props.data.video.owner.id && (r.contentTags = this.props.data.video.contentTags, r.owner = {
                                id: this.props.data.video.owner.id
                            }), e = tn.createElement(Ji, {
                                video: r,
                                onChange: this.onChange,
                                saving: this.props.saving,
                                thumbnailURLToDelete: this.state.thumbnailURLToDelete,
                                onThumbnailDelete: this.onThumbnailDelete,
                                onNewCustomThumbnailChange: this.onNewCustomThumbnailChange,
                                onSelectedThumbnailChange: this.onSelectedThumbnailChange,
                                thumbnailError: t ? t.message : null,
                                titleError: this.state.titleError,
                                showRestrictions: i,
                                videoFragment: this.props.data.video
                            })
                        } else e = tn.createElement($i, null);
                        return tn.createElement(fe.i, {
                            type: fe.n.FadeIn,
                            delay: fe.j.Medium,
                            duration: fe.k.Medium,
                            enabled: !0
                        }, e)
                    }, t.prototype.render = function() {
                        var e = this.props.saving || this.state.animationProps.onAnimationEnd === this.props.closeManagerModal,
                            t = null !== this.state.titleError,
                            n = null,
                            a = this.props.apiData.errors.find(function(e) {
                                return e.origin === h.EditModalErrorOrigin.Save
                            });
                        a && (n = tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, tn.createElement(fe.W, {
                            "data-test-selector": lr,
                            color: fe.O.Error
                        }, a.message)));
                        var i = null;
                        this.props.apiData.video && this.props.apiData.video.broadcastType === c.a.Highlight && this.props.apiData.video.status === h.VIDEO_STATUS_FAILED && (i = tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            flexWrap: fe.Ba.Wrap,
                            justifyContent: fe.Wa.Between,
                            className: "edit-video-properties-modal__error",
                            background: fe.r.Alt2,
                            padding: {
                                x: 1,
                                top: 1
                            },
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            flexWrap: fe.Ba.NoWrap,
                            alignItems: fe.f.Center,
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.NotificationError,
                            type: fe.ub.Alert
                        })), tn.createElement(fe.Xa, {
                            display: fe.X.InlineBlock,
                            margin: {
                                left: 1
                            }
                        }, tn.createElement(fe.W, {
                            bold: !0
                        }, Object(d.d)("Error Processing Highlight", "VideoManagerEdit")), tn.createElement(fe.W, null, Object(d.d)("An unexpected error occurred. Please try again later, or click Remove if you no longer want to create this highlight.", "VideoManagerEdit")))), tn.createElement(fe.Xa, {
                            display: fe.X.InlineFlex,
                            justifyContent: fe.Wa.End,
                            alignItems: fe.f.Center,
                            flexGrow: 1,
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, tn.createElement(fe.z, {
                            type: fe.F.Hollow
                        }, Object(d.d)("Remove", "VideoManagerEdit"))))));
                        var r = this.renderSaveMessage();
                        return this.props.publishFlow ? r = this.renderPublishMessage() : this.state.vodQueue.length > 1 && (r = this.renderSaveNextMessage()), tn.createElement(fe.Xa, {
                            className: "edit-video-properties-modal",
                            zIndex: fe.ic.Below,
                            position: fe.jb.Fixed
                        }, tn.createElement(fe.i, l.__assign({}, this.state.animationProps, {
                            "data-test-selector": sr
                        }), tn.createElement(Ca.a, {
                            onClickOut: this.onCancel
                        }, tn.createElement(fe.Eb, {
                            className: "edit-video-properties-modal__content",
                            background: fe.r.Base,
                            display: fe.X.Flex,
                            flexDirection: fe.Aa.Column,
                            justifyContent: fe.Wa.Between,
                            padding: {
                                top: 4
                            }
                        }, tn.createElement(fe.Xa, {
                            padding: {
                                x: 4
                            },
                            flexGrow: 0,
                            flexShrink: 0
                        }, i, tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            alignContent: fe.e.Center,
                            justifyContent: fe.Wa.Between,
                            borderBottom: !0
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.End
                        }, this.renderVideoActions()), n)), tn.createElement(fe.Xa, {
                            flexGrow: 4,
                            flexShrink: 4,
                            position: fe.jb.Relative
                        }, tn.createElement(fe.Xa, {
                            position: fe.jb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0
                        }, tn.createElement(an.b, null, tn.createElement(fe.Xa, {
                            padding: {
                                x: 4,
                                bottom: 2
                            }
                        }, this.renderFields())))), tn.createElement(fe.Eb, {
                            "data-test-selector": fr,
                            background: fe.r.Alt2,
                            display: fe.X.Flex,
                            justifyContent: fe.Wa.Between,
                            alignContent: fe.e.Center,
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.state.vodQueue.length > 1 && tn.createElement(fe.Xa, {
                            padding: {
                                y: 2,
                                x: 3
                            }
                        }, tn.createElement(fe.A, {
                            "data-test-selector": br,
                            ariaLabel: Object(d.d)("Previous", "VideoManagerEdit"),
                            icon: fe.tb.GlyphArrLeft,
                            type: fe.C.Hollow,
                            onClick: this.navigateToPreviousVODInQueue,
                            disabled: 0 === this.getPositionInQueue()
                        }), tn.createElement(fe.Xa, {
                            display: fe.X.InlineBlock,
                            margin: {
                                x: 2
                            }
                        }, Object(d.d)("{position} of {total} videos", {
                            position: Object(d.f)(this.getPositionInQueue() + 1),
                            total: Object(d.f)(this.state.vodQueue.length)
                        }, "VideoManagerEdit")), tn.createElement(fe.A, {
                            "data-test-selector": vr,
                            ariaLabel: Object(d.d)("Next", "VideoManagerEdit"),
                            icon: fe.tb.GlyphArrRight,
                            type: fe.C.Hollow,
                            onClick: this.navigateToNextVODInQueue,
                            disabled: this.getPositionInQueue() === this.state.vodQueue.length - 1
                        })), tn.createElement("div", null), " ", tn.createElement(fe.Xa, {
                            padding: {
                                y: 2,
                                x: 3
                            },
                            display: fe.X.Flex
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            }
                        }, tn.createElement(fe.z, {
                            type: fe.F.Text,
                            onClick: this.onCancel,
                            "data-test-selector": rr
                        }, this.renderCancelMessage())), tn.createElement(fe.z, {
                            onClick: this.onSaveVideo,
                            disabled: e || t,
                            state: e ? fe.E.Loading : fe.E.Default,
                            "data-test-selector": or
                        }, r)))))), tn.createElement(ki.a, {
                            when: this.state.isDirty,
                            message: this.renderNavigationWarningMessage()
                        }))
                    }, t.prototype.renderVideoActions = function() {
                        var e = this.props.apiData.video;
                        if (this.props.apiData.loading && null === e) return tn.createElement(fe.ib, {
                            lineCount: 2,
                            width: 260
                        });
                        if (null === e) return null;
                        var t = Fe(e),
                            n = this.state.vodQueue.length > 1 ? jn.a.PostCreateModal : jn.a.EditModal;
                        return tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            color: fe.O.Link
                        }, t.menu.canHighlight && tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.z, {
                            "data-test-selector": cr,
                            icon: fe.tb.Highlighter,
                            linkTo: Object(ca.c)(this.props.channelName, e.id),
                            type: fe.F.Text,
                            disabled: this.props.saving,
                            targetBlank: !0
                        }, Object(d.d)("Highlight", "VideoManagerEditCard"))), t.menu.canDownload && this.renderDownloadAction(e), Re(e) && tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.z, {
                            "data-test-selector": mr,
                            onClick: this.onExport,
                            icon: fe.tb.Upload,
                            type: fe.F.Text,
                            disabled: this.props.saving
                        }, Object(d.d)("Export", "VideoManagerEditCard"))), ke(t) && tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(_a, {
                            "data-test-selector": pr,
                            icon: fe.tb.Plus,
                            isRightAligned: !1,
                            buttonText: Object(d.d)("Add to", "VideoManagerEditCard"),
                            showTextLabel: !0
                        }, tn.createElement(Wn, {
                            vodcastQueueUnavailable: this.props.vodcastQueueUnavailable || !t.menu.canAddToVodcast,
                            onAddVideoToVodcastQueue: this.onAddVideoToVodcastQueue,
                            video: e,
                            channelName: this.props.channelName,
                            contentKey: h.KEY_ADD_TO,
                            hasMenuNavigationHeader: !0,
                            inVodcastQueue: this.props.isInVodcastQueue(this.props.videoID),
                            user: this.props.user
                        }), tn.createElement($n, {
                            video: e,
                            channelName: this.props.channelName,
                            contentKey: h.KEY_COLLECTIONS,
                            channelID: this.props.user.id,
                            trackingPlace: n
                        }))), t.sharable && tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(xi.a, {
                            balloonDirection: fe.v.Bottom,
                            buttonType: fe.F.Text,
                            content: {
                                videoID: e.id
                            },
                            tracking: {
                                location: hn.PageviewLocation.VideoManager
                            }
                        })), tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.z, {
                            "data-test-selector": dr,
                            linkTo: e.url,
                            icon: fe.tb.Play,
                            type: fe.F.Text,
                            disabled: this.props.saving || je(e),
                            targetBlank: !0
                        }, Object(d.d)("Watch", "VideoManagerEditCard"))))
                    }, t.prototype.renderDownloadAction = function(e) {
                        return this.props.videoDownloads[e.id] ? tn.createElement(fe.Eb, {
                            padding: {
                                right: .5
                            },
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            color: fe.O.Alt2,
                            "data-test-selector": gr
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.InlineFlex,
                            padding: {
                                right: 1
                            }
                        }, tn.createElement(fe.Za, {
                            size: fe.Cb.Small
                        })), Object(d.d)("Preparing...", "VideoManagerEditCard")) : tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            },
                            "data-test-selector": hr
                        }, tn.createElement(fe.z, {
                            "data-test-selector": ur,
                            onClick: this.onDownload,
                            icon: fe.tb.Download,
                            type: fe.F.Text,
                            disabled: this.props.saving
                        }, Object(d.d)("Download", "VideoManagerEditCard")))
                    }, t.prototype.propsToPageContext = function(e) {
                        return {
                            userId: e.user ? e.user.id : void 0,
                            currentUserId: e.currentUser ? e.currentUser.id : void 0,
                            isLoggedIn: e.isLoggedIn,
                            videoId: e.videoID,
                            activeFilter: null,
                            channelName: e.channelName
                        }
                    }, t.prototype.fetchData = function(e, t) {
                        this.props.fetchVideoData(e, t)
                    }, t.prototype.confirmDiscardChanges = function() {
                        return confirm(this.renderNavigationWarningMessage())
                    }, t
                }(tn.Component),
                yr = Object(Si.compose)(Object(on.a)(Oi, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.videoID
                            }
                        }
                    }
                }), Object(on.a)(wi, {
                    name: "updateContentTags"
                }), Object(gn.b)("EditVideoPropertiesModalPresentation"))(Er);
            var Cr = Object(a.connect)(function(e) {
                    return {
                        isLoggedIn: Object(o.f)(e),
                        saving: e.videoManager.editingVideo.saving,
                        forbidden: e.videoManager.forbidden,
                        isInVodcastQueue: en(e.videoManager),
                        videoDownloads: e.videoManager.videoDownloads,
                        apiData: {
                            video: e.videoManager.editingVideo.data,
                            loading: e.videoManager.editingVideo.loading,
                            channelName: e.videoManager.channelName,
                            errors: e.videoManager.editModalErrors
                        },
                        sessionUser: Object(o.e)(e),
                        youtubeConnected: e.videoManager.youtubeConnected
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        clearEditingVideo: mt,
                        changeChannel: gt,
                        fetchVideoData: qt,
                        saveVideoAndThumbnails: Ti,
                        addVideoToVodcastQueue: kt,
                        clearEditModalErrors: ht,
                        downloadVideo: Mt,
                        immediatePublish: St,
                        closeModal: r.c,
                        showModal: r.d,
                        exportVideo: Nt,
                        authenticateYoutube: jt
                    }, e)
                })(yr),
                _r = n("CbMu");

            function Tr() {
                return {
                    type: Wt
                }
            }
            d.p.store.registerReducer("eventModal", function(e, t) {
                switch (void 0 === e && (e = {
                    saving: !1,
                    loading: !1,
                    notificationMessage: null,
                    errors: []
                }), t.type) {
                    case Xt:
                        return l.__assign({}, e, {
                            loading: !0
                        });
                    case Ut:
                        return l.__assign({}, e, {
                            saving: !1,
                            notificationMessage: null
                        });
                    case Lt:
                        return l.__assign({}, e, {
                            loading: !1,
                            errors: e.errors.concat({
                                message: t.error,
                                origin: t.origin
                            }),
                            saving: !1
                        });
                    case Wt:
                        return l.__assign({}, e, {
                            errors: []
                        });
                    default:
                        return e
                }
            });
            var Dr, Sr = n("NAv5"),
                kr = n("+58i"),
                wr = n("xeRp"),
                Or = n("gT8k"),
                Mr = n("9rlX"),
                Ir = n("Rzn4"),
                Vr = n("dKHc"),
                xr = n("Wwq8"),
                Ar = n("JNgr");
            n("uzac");
            ! function(e) {
                e.EditDescriptionField = "EDIT_DESCRIPTION_FIELD", e.CancelTestSelector = "CANCEL_TEST_SELECTOR", e.SaveTestSelector = "SAVE_TEST_SELECTOR", e.ModalAnimationTestSelector = "MODAL_ANIMATION_TEST_SELECTOR", e.StartDateFields = "START_DATE_FIELDS", e.EndDateFields = "END_DATE_FIELDS", e.SubmitErrorSelector = "SUBMIT_ERROR_SELECTOR"
            }(Dr || (Dr = {}));
            var jr = function(e) {
                    function t(n) {
                        var a = e.call(this, n) || this;
                        return a.state = {
                            animationProps: {
                                type: fe.n.SlideInRight,
                                duration: fe.k.Medium,
                                timing: fe.m.EaseInOut,
                                enabled: !0
                            },
                            eventEdits: t.instantiateEventEdits(),
                            isDirty: !1,
                            startNow: !1,
                            isEventUrlCopied: !1,
                            validator: new Vr.b(t.instantiateEventEdits())
                        }, a.copyEventUrlToClipboard = function() {
                            Object(Yi.a)(a.eventUrlInput.value), a.setState({
                                isEventUrlCopied: !0
                            })
                        }, a.highlightEventUrlText = function(e) {
                            var t = e.currentTarget;
                            t && t.select()
                        }, a.setEventUrlInputRef = function(e) {
                            return a.eventUrlInput = e
                        }, a.onFinishUploading = function(e) {
                            a.onChange({
                                imageID: e._id
                            })
                        }, a.onTitleChange = function(e) {
                            var t = e.currentTarget.value;
                            a.onChange({
                                title: t
                            })
                        }, a.onDescriptionChange = function(e) {
                            var t = e.currentTarget.value;
                            a.onChange({
                                description: t
                            })
                        }, a.onGameChange = function(e) {
                            var t = e.objectID,
                                n = e.name;
                            a.onChange({
                                gameID: t,
                                gameName: n
                            })
                        }, a.onChangeStartDate = function(e) {
                            a.onChange({
                                startTime: e
                            })
                        }, a.onLanguageChange = function(e) {
                            var t = e.language;
                            a.onChange({
                                language: t
                            })
                        }, a.onChange = function(e) {
                            var t = new Date;
                            a.setState(function(n) {
                                var a = n.startNow;
                                return e.startTime && e.startTime !== n.eventEdits.startTime && (a = Object(Sr.isValid)(e.startTime) && Object(Sr.isWithinRange)(e.startTime, Object(Sr.subMinutes)(t, 1), Object(Sr.addMinutes)(t, 1))), {
                                    isDirty: !0,
                                    startNow: a,
                                    eventEdits: l.__assign({}, n.eventEdits, e)
                                }
                            }), a.props.errors.length > 0 && a.props.clearErrors()
                        }, a.onCancel = function() {
                            a.state.isDirty && !a.confirmDiscardChanges() || (a.props.onCancel && a.props.onCancel(), a.props.clearErrors(), a.animateOutAndClose())
                        }, a.onConfirm = function() {
                            return l.__awaiter(a, void 0, void 0, function() {
                                var e, t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return (e = new Vr.b(this.state.eventEdits)).addValidatorForField(Sr.isValid, Vr.a.StartTime), this.setState({
                                                validator: e
                                            }), e.editsAreValid() ? (t = this.state.eventEdits, this.state.startNow && (t = l.__assign({}, t, {
                                                startTime: Object(Sr.addMinutes)(new Date, 1)
                                            })), this.props.clearErrors(), this.props.event || !this.props.onCreate ? [3, 2] : [4, this.props.onCreate(Object(_r.b)(t, this.props.user.id, this.props.event), this.props.video.id)]) : [2];
                                        case 1:
                                            return n.sent(), [3, 4];
                                        case 2:
                                            return this.props.onUpdate && t ? [4, this.props.onUpdate(Object(_r.b)(t, this.props.user.id, this.props.event), this.props.video.id)] : [3, 4];
                                        case 3:
                                            n.sent(), n.label = 4;
                                        case 4:
                                            return this.animateOutAndClose(), [2]
                                    }
                                })
                            })
                        }, a.closeModalWithRouteBackAndClearErrors = function() {
                            a.props.clearErrors(), a.props.closeModalWithRouteBack()
                        }, a.animateOutAndClose = function(e) {
                            void 0 === e && (e = a.closeModalWithRouteBackAndClearErrors), a.setState({
                                animationProps: l.__assign({}, a.state.animationProps, {
                                    type: fe.n.SlideOutRight,
                                    onAnimationEnd: e
                                })
                            })
                        }, a.urlTemplateToUrlString = function(e) {
                            if (e) {
                                var t = e.replace("{width}", wr.c).replace("{height}", wr.b);
                                return new URL(t)
                            }
                        }, n.event ? a.state.eventEdits = Object(_r.a)(n.event) : n.initialValues && n.initialValues.game && (a.state.eventEdits.gameID = n.initialValues.game.objectID, a.state.eventEdits.gameName = n.initialValues.game.name), a
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = this.props.errors.find(function(e) {
                                return e.origin === Rt.Submit
                            });
                        return t && (e = Nr(t.message)), tn.createElement(fe.Xa, {
                            className: "event-modal"
                        }, tn.createElement(fe.i, l.__assign({}, this.state.animationProps, {
                            "data-test-selector": Dr.ModalAnimationTestSelector
                        }), tn.createElement(fe.Eb, {
                            className: "event-modal__content",
                            background: fe.r.Base
                        }, tn.createElement(fe.Pa, {
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: 4
                        }, tn.createElement(Ca.a, {
                            onClickOut: this.onCancel
                        }, tn.createElement(fe.Eb, {
                            display: fe.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: fe.Wa.Between,
                            borderBottom: !0
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 1,
                            display: fe.X.Flex,
                            alignItems: fe.f.End
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H4
                        }, Object(d.d)("Event Details", "EventModal"))), e, tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, tn.createElement(fe.z, {
                            type: fe.F.Text,
                            onClick: this.onCancel,
                            "data-test-selector": Dr.CancelTestSelector
                        }, Object(d.d)("Cancel", "EventModal")), " ", tn.createElement(fe.z, {
                            onClick: this.onConfirm,
                            "data-test-selector": Dr.SaveTestSelector,
                            "data-a-target": "save-button"
                        }, Object(d.d)("Save", "EventModal")))), tn.createElement(an.b, null, this.renderFormFields()))))))
                    }, t.prototype.renderEventUrl = function() {
                        if (!this.props.event || !this.props.event.eventID) return null;
                        var e;
                        e = this.state.isEventUrlCopied ? Object(d.d)("Copied", "EventModal") : Object(d.d)("Copy", "EventModal");
                        var t = "https://www.twitch.tv/events/" + this.props.event.eventID;
                        return tn.createElement(fe.Ea, {
                            label: Object(d.d)("Event URL", "EventModal")
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            flexDirection: fe.Aa.Row
                        }, tn.createElement(fe.Xa, {
                            flexGrow: 1
                        }, tn.createElement(fe.Ra, {
                            id: "event-url",
                            value: t,
                            type: fe.Ta.Text,
                            readOnly: !0,
                            onClick: this.highlightEventUrlText,
                            refDelegate: this.setEventUrlInputRef
                        })), tn.createElement(fe.Xa, null, tn.createElement(fe.z, {
                            type: fe.F.Hollow,
                            onClick: this.copyEventUrlToClipboard
                        }, e))))
                    }, t.prototype.renderFormFields = function() {
                        var e = null;
                        return this.props.children && (e = tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, tn.Children.only(this.props.children))), tn.createElement(fe.Xa, {
                            padding: {
                                bottom: 4
                            }
                        }, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Large
                        }, tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 5
                            }
                        }, tn.createElement(wr.a, {
                            user: this.props.user,
                            onFinishUploading: this.onFinishUploading,
                            initialImageData: this.urlTemplateToUrlString(this.props.event && this.props.event.imageUrl)
                        }), this.renderEventUrl()), tn.createElement(fe.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 7
                            }
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Ea, {
                            id: "event-title",
                            label: Object(d.d)("Event Title", "EventModal"),
                            error: Boolean(this.state.validator.errorsForMissingFields.title),
                            errorMessage: this.state.validator.errorMessageFor(Vr.a.Title)
                        }, tn.createElement(fe.Ra, {
                            "data-a-target": "event-title",
                            onChange: this.onTitleChange,
                            value: this.state.eventEdits.title || "",
                            type: fe.Ta.Text,
                            maxLength: 140,
                            placeholder: Object(d.d)("Your title is also used in reminders and social media posts. ({limit} character limit)", {
                                limit: 140
                            }, "EventModal")
                        }))), tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Ea, {
                            label: Object(d.d)("Event Description", "EventModal"),
                            error: Boolean(this.state.validator.errorsForMissingFields.description),
                            errorMessage: this.state.validator.errorMessageFor(Vr.a.Description)
                        }, tn.createElement(fe.Sb, {
                            placeholder: Object(d.d)("Tell viewers why they should watch your event", "EventModal"),
                            onChange: this.onDescriptionChange,
                            value: this.state.eventEdits.description || "",
                            disabled: !1,
                            "data-test-selector": Dr.EditDescriptionField,
                            "data-a-target": "event-description"
                        }))), tn.createElement(kr.a, {
                            "data-test-selector": Dr.StartDateFields,
                            defaultDate: this.state.eventEdits.startTime,
                            video: this.props.video,
                            onChange: this.onChangeStartDate,
                            dateLabel: Object(d.d)("Start Date", "EventModal"),
                            timeLabel: Object(d.d)("Start Time ({localeName})", {
                                localeName: Object(Ir.b)()
                            }, "EventModal"),
                            dateErrorMessage: Object(d.d)("The start date is invalid", "EventModalDateTimePicker"),
                            timeErrorMessage: Object(d.d)("The start time is invalid", "EventMOdalDateTimePicker")
                        }), e, tn.createElement(fe.Ea, {
                            label: "",
                            error: Boolean(this.state.validator.errorsForMissingFields.language),
                            errorMessage: this.state.validator.errorMessageFor(Vr.a.Language)
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(Mr.a, {
                            onChange: this.onLanguageChange,
                            disabled: !1,
                            defaultLanguage: this.state.eventEdits.language || Object(Ar.a)()
                        }))), tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Ea, {
                            id: "event-game",
                            label: Object(d.d)("Event Category/Game", "EventModal"),
                            error: Boolean(this.state.validator.errorsForMissingFields.gameID || this.state.validator.errorsForMissingFields.gameName),
                            errorMessage: this.state.validator.errorMessageFor(Vr.a.GameID) || this.state.validator.errorMessageFor(Vr.a.GameName)
                        }, tn.createElement(Or.a, {
                            currentGameTitle: this.state.eventEdits.gameName || "",
                            onChange: this.onGameChange
                        }))))))
                    }, t.prototype.confirmDiscardChanges = function() {
                        return confirm(Object(d.d)("Are you sure you want to stop editing? All unsaved changes will be lost.", "EventModalPresentation"))
                    }, t.instantiateEventEdits = function() {
                        return {
                            description: "",
                            gameID: "",
                            gameName: "",
                            language: Object(Ar.a)(),
                            startTime: Object(Sr.setMinutes)(Object(Sr.addHours)(new Date, 3), 0),
                            timeZoneID: Object(xr.a)(),
                            title: ""
                        }
                    }, t
                }(tn.Component),
                Nr = function(e) {
                    return tn.createElement(fe.Xa, {
                        flexGrow: 0,
                        flexShrink: 1,
                        display: fe.X.Flex,
                        alignItems: fe.f.Center,
                        "data-test-selector": Dr.SubmitErrorSelector
                    }, tn.createElement(fe.W, {
                        color: fe.O.Error
                    }, e))
                },
                Fr = Object(gn.b)("PremiereModal")(jr);
            var Pr, Rr = Object(a.connect)(function(e) {
                    return {
                        isLoggedIn: Object(o.f)(e),
                        saving: e.eventModal.saving,
                        forbidden: !1,
                        errors: e.eventModal.errors
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        closeModal: r.c,
                        clearErrors: Tr
                    }, e)
                })(Fr),
                Ur = (n("AmIn"), "PremiereCard"),
                Lr = Object(gn.b)("PremiereCard", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.video.thumbnails[0];
                    return tn.createElement(fe.Eb, {
                        className: "premiere-card",
                        "data-test-selector": Ur,
                        background: fe.r.Alt,
                        elevation: 1
                    }, tn.createElement(fe.G, {
                        row: !0
                    }, tn.createElement(fe.Eb, {
                        flexShrink: 0,
                        margin: {
                            right: 2
                        },
                        background: fe.r.Alt2
                    }, tn.createElement(fe.I, {
                        src: Xr(t),
                        alt: "",
                        size: fe.J.Size16
                    })), tn.createElement(fe.H, {
                        overflow: fe.cb.Hidden
                    }, tn.createElement(fe.Eb, {
                        color: fe.O.Alt,
                        margin: {
                            y: .5
                        }
                    }, tn.createElement(fe.W, {
                        title: e.video.title,
                        fontSize: fe.Ca.Size6,
                        ellipsis: !0
                    }, e.video.title)), tn.createElement(fe.Eb, {
                        display: fe.X.Flex,
                        color: fe.O.Alt
                    }, tn.createElement(fe.Db, {
                        label: Object(d.d)("Duration", "SchedulePremiere"),
                        value: Object(Va.b)(e.video.lengthSeconds),
                        icon: fe.tb.GlyphLength
                    })))))
                }),
                Xr = function(e) {
                    return e ? e.url.replace("{width}", "160").replace("{height}", "90") : ""
                },
                Wr = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCreateEvent = function(e, t) {
                            return l.__awaiter(n, void 0, void 0, function() {
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.createEvent(e, t)];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            })
                        }, n.onUpdateEvent = function(e, t) {
                            return l.__awaiter(n, void 0, void 0, function() {
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.props.updateEvent(e, t)];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                })
                            })
                        }, n.state = {
                            video: null
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return l.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.props.fetchVideoForScheduling(this.props.videoID)];
                                    case 1:
                                        return Me(e = t.sent()) ? (this.props.notificationService.push(Object(d.d)("Cannot edit premiere because it is already started!", "VideoManagerEditPremiere"), this.props.closeModal), [2]) : (this.setState({
                                            video: e
                                        }), this.props.notificationService.setAlertMode(), [2])
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        if (!this.state.video) return null;
                        var e = this.state.video,
                            t = void 0,
                            n = void 0;
                        e && e.premiere && e.premiere.event ? t = e.premiere.event : e.game && (n = {
                            objectID: e.game.id,
                            name: e.game.name
                        });
                        var a = this.renderPremiereCard(this.state.video);
                        return tn.createElement(Rr, {
                            user: this.props.user,
                            channelName: this.props.channelName,
                            onCancel: this.props.closeModal,
                            onUpdate: this.onUpdateEvent,
                            closeModalWithRouteBack: this.props.closeModal,
                            onCreate: this.onCreateEvent,
                            video: this.state.video,
                            children: a,
                            initialValues: {
                                game: n
                            },
                            event: t
                        })
                    }, t.prototype.renderPremiereCard = function(e) {
                        return tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.Ea, {
                            label: Object(d.d)("Selected Upload", "VideoManagerPage")
                        }, tn.createElement(Lr, {
                            video: e
                        })))
                    }, t
                }(tn.Component),
                Br = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderScheduleModal = function(e) {
                            return t.props.user && e.match.params.videoID ? tn.createElement(ei, {
                                isOpen: !0,
                                contentLabel: "Modal",
                                className: "modal__content",
                                overlayClassName: "modal__backdrop js-modal-backdrop " + Object(ai.b)(t.props.theme),
                                shouldCloseOnOverlayClick: !1
                            }, tn.createElement(Wr, {
                                videoID: e.match.params.videoID,
                                user: t.props.user,
                                channelName: t.props.channelName,
                                notificationService: t.props.notificationService,
                                fetchVideoForScheduling: t.props.fetchVideoForScheduling,
                                closeModal: t.props.closeModal,
                                createEvent: t.props.createEvent,
                                updateEvent: t.props.updateEvent
                            })) : null
                        }, t.renderAppealModal = function(e) {
                            return t.props.user && t.props.currentUser && e.match.params.videoID ? tn.createElement(ei, {
                                isOpen: !0,
                                contentLabel: "Modal",
                                className: "modal__content",
                                overlayClassName: "modal__backdrop js-modal-backdrop " + Object(ai.b)(t.props.theme),
                                shouldCloseOnOverlayClick: !1
                            }, tn.createElement(_i, {
                                videoID: e.match.params.videoID,
                                user: t.props.user,
                                currentUser: t.props.currentUser,
                                channelName: t.props.channelName,
                                closeModal: t.props.closeModal,
                                notificationService: t.props.notificationService
                            })) : null
                        }, t.renderEditModal = function(e) {
                            if (!(t.props.user && t.props.currentUser && e.match.params.videoID)) return null;
                            var n = e.match.path.indexOf("publish") > -1;
                            return tn.createElement(ei, {
                                isOpen: !0,
                                contentLabel: "Modal",
                                className: "modal__content",
                                overlayClassName: "modal__backdrop js-modal-backdrop " + Object(ai.b)(t.props.theme),
                                shouldCloseOnOverlayClick: !1
                            }, tn.createElement(Cr, l.__assign({}, e, {
                                videoID: e.match.params.videoID,
                                user: t.props.user,
                                currentUser: t.props.currentUser,
                                channelName: t.props.channelName,
                                closeManagerModal: t.props.closeModal,
                                onDownload: t.props.downloadVideo,
                                vodcastQueueUnavailable: t.props.vodcastQueueUnavailable(),
                                notificationService: t.props.notificationService,
                                publishFlow: n
                            })))
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement(ni.a, null, tn.createElement(ti.a, {
                            path: "/:channelName/manager/schedule/:videoID",
                            render: this.renderScheduleModal
                        }), tn.createElement(ti.a, {
                            path: "/:channelName/manager/appeal/:videoID",
                            render: this.renderAppealModal
                        }), tn.createElement(ti.a, {
                            path: "/:channelName/manager/publish/:videoID",
                            render: this.renderEditModal
                        }), tn.createElement(ti.a, {
                            path: "/:channelName/manager/edit/:videoID",
                            render: this.renderEditModal
                        }))
                    }, t
                }(tn.Component),
                Gr = "vodcastDeprecationDismissed",
                zr = "https://help.twitch.tv/customer/portal/articles/2909343-how-to-premiere-your-video-on-twitch",
                Hr = new Date(Date.UTC(2018, 8, 14, 20)),
                Qr = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleDismiss = function() {
                            d.m.set(Gr, !0), n.setState({
                                isDismissed: !0
                            })
                        }, n.state = {
                            isDismissed: d.m.get(Gr, !1)
                        }, n
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        if (this.state.isDismissed) return tn.createElement(fn.d, null);
                        var e = Object(d.c)(Hr, {
                            month: "long",
                            day: "numeric",
                            weekday: "long"
                        });
                        return tn.createElement(fn.a, {
                            buttonLink: zr,
                            buttonText: Object(d.d)("Learn More", "VodcastDeprecationAnnouncement"),
                            headerText: Object(d.d)("Reruns and Premieres Update", "VodcastDeprecationAnnouncement"),
                            headerLink: zr,
                            subtitleText: Object(d.d)("As of {formattedDate}, Reruns and Premieres will only be available once you become an Affiliate.", {
                                formattedDate: e
                            }, "VodcastDeprecationAnnouncement"),
                            trackingType: "vodcast_deprecation_announcement",
                            onDismiss: this.handleDismiss
                        })
                    }, t
                }(tn.Component),
                Kr = n("HkCh"),
                qr = (n("TUyz"), "ON_CONFIRM"),
                Yr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onConfirm = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return tn.createElement(fe.Eb, {
                            className: "vm-notification",
                            background: fe.r.Base,
                            padding: 2
                        }, tn.createElement(fe.Xa, null, tn.createElement(fe.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.props.body), tn.createElement(fe.Xa, {
                            padding: 1,
                            display: fe.X.Flex,
                            justifyContent: fe.Wa.End,
                            alignItems: fe.f.End,
                            alignContent: fe.e.End
                        }, tn.createElement(fe.Xa, null, tn.createElement(fe.z, {
                            type: fe.F.Default,
                            onClick: this.onConfirm,
                            "data-test-selector": qr
                        }, Object(d.d)("OK", "VideoManagerConfirmation"))))))
                    }, t
                }(tn.PureComponent);
            ! function(e) {
                e[e.Modal = 0] = "Modal", e[e.Alert = 1] = "Alert"
            }(Pr || (Pr = {}));
            var Zr, Jr, $r = function() {
                function e(e, t) {
                    var n = this;
                    this.maybeShowModal = function() {
                        if (n.messages && 0 !== n.messages.length && !n.isOpen) {
                            n.isOpen = !0;
                            var e = n.messages.pop();
                            e && n.showModal(Yr, {
                                body: e.body,
                                closeModal: function() {
                                    n.closeModalAndScheduleNextTick(e)
                                }
                            })
                        }
                    }, this.closeModalAndScheduleNextTick = function(e) {
                        n.closeModal(), n.isOpen = !1, e.onClose && e.onClose(), n.maybeShowModal()
                    }, this.mode = Pr.Modal, this.messages = [], this.showModal = e, this.closeModal = t, this.isOpen = !1
                }
                return e.prototype.push = function(e, t) {
                    this.mode !== Pr.Alert ? (this.messages.push({
                        body: e,
                        onClose: t
                    }), this.maybeShowModal()) : alert(e)
                }, e.prototype.setAlertMode = function() {
                    this.mode = Pr.Alert
                }, e.prototype.setModalMode = function() {
                    this.mode = Pr.Modal
                }, e
            }();
            n("GckV");
            ! function(e) {
                e.Control = "control", e.Variant1 = "variant1", e.Variant2 = "variant2", e.Variant3 = "variant3"
            }(Jr || (Jr = {}));
            var eo = "no-videos",
                to = "load-more-processing",
                no = function(e) {
                    return {
                        title: Object(d.d)("Delete Video", "DeleteVideoConfirmationModal"),
                        body: Object(d.d)("Are you sure you want to delete {title}?", {
                            title: e
                        }, "DeleteVideoConfirmationModal"),
                        okText: Object(d.d)("Yes", "DeleteVideoConfirmationModal"),
                        cancelText: Object(d.d)("No", "DeleteVideoConfirmationModal")
                    }
                },
                ao = new Date(9999, 0, 1),
                io = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.editingImUpsetVariant = d.p.experiments.getAssignment(pn.b.EditingImUpset), t.showContextualActions = function(e) {
                            return e === Jr.Variant2 || e === Jr.Variant3
                        }(t.editingImUpsetVariant), t.showRightSide = function(e) {
                            return e === Jr.Control || e === Jr.Variant3
                        }(t.editingImUpsetVariant), t.renderFilterOption = function(e) {
                            var n = t.props.activeFilter === e.key;
                            return tn.createElement(fe.Xa, {
                                key: e.key ? e.key : "default"
                            }, tn.createElement(fe.Ua, {
                                onClick: function() {
                                    t.onChangeFilter(e.key)
                                },
                                selected: n
                            }, tn.createElement(fe.Xa, {
                                padding: 1
                            }, e.label)))
                        }, t.vodcastQueueUnavailable = function() {
                            return !t.props.apiData || null === t.props.apiData.vodcastQueueVideoIDs
                        }, t.loadMoreProcessing = function() {
                            t.props.data.user && t.props.apiData.processingVideos.data && t.props.apiData.processingVideos.moreDataAvailable && t.props.fetchProcessingVideosData(t.propsToPageContext(t.props), t.props.apiData.processingVideos.data.length, t.notificationService)
                        }, t.loadMore = function() {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return l.__generator(this, function(t) {
                                    return this.props.apiData.videos.data && this.props.apiData.videos.moreDataAvailable ? (e = this.propsToPageContext(this.props), [2, this.fetchData(l.__assign({}, e, {
                                        offset: this.props.apiData.videos.data.length
                                    }), e)]) : [2, Promise.resolve()]
                                })
                            })
                        }, t.onChangeFilter = function(e) {
                            var n = t.propsToPageContext(t.props);
                            t.fetchData(l.__assign({}, n, {
                                activeFilter: e
                            }), n)
                        }, t.onDeleteVideo = function(e, n) {
                            t.props.showModal(bn.a, l.__assign({}, no(e.title), {
                                onConfirm: function() {
                                    if (n ? t.props.removeVideoUpload(e.id) : t.props.deleteVideo(e.id, t.notificationService), t.props.data.user && t.props.data.user.id) {
                                        var a = Te(e) ? Jn.Remove : Jn.Cancel;
                                        ! function(e, t, n, a) {
                                            l.__awaiter(this, void 0, void 0, function() {
                                                return l.__generator(this, function(i) {
                                                    return d.o.track(ea.a.VODProcessingInteraction, {
                                                        vod_id: e,
                                                        vod_type: t,
                                                        channel_id: n,
                                                        action: a
                                                    }), [2]
                                                })
                                            })
                                        }(e.id, e.broadcastType, t.props.data.user.id, a)
                                    }
                                },
                                onCancel: void 0,
                                closeModal: t.props.closeModal
                            }))
                        }, t.onDownloadVideo = function(e) {
                            return l.__awaiter(t, void 0, Promise, function() {
                                return l.__generator(this, function(t) {
                                    return [2, this.props.downloadVideo(e.id, this.notificationService)]
                                })
                            })
                        }, t.onAddVideoToVodcastQueue = function(e) {
                            t.props.data && t.props.data.user && t.props.addVideoToVodcastQueue(t.props.data.user.id, e.id, t.notificationService)
                        }, t.onExport = function(e) {
                            return l.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return l.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.data && this.props.data.user ? (t = this.props.data.user.login.toLowerCase() === this.props.match.params.channelName.toLowerCase(), this.props.youtubeConnected ? (this.showExportModal(e), [3, 4]) : [3, 1]) : [2];
                                        case 1:
                                            return t ? [4, this.props.authenticateYoutube(this.props.data.user.id)] : [3, 3];
                                        case 2:
                                            return n.sent(), this.showExportModal(e), [3, 4];
                                        case 3:
                                            this.notificationService.push(Object(d.d)("This channel has not connected their youtube account", "VideoManagerEditPremiere")), n.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.showExportModal = function(e) {
                            t.props.showModal(ir, {
                                video: e,
                                exportVideo: t.props.exportVideo,
                                closeModal: t.props.closeModal
                            })
                        }, t.handleUploadFilesSubmitted = function(e) {
                            t.props.data.user && t.props.data.user.id && t.props.submitVideoUploadFiles(t.props.data.user.id, t.props.data.user.isEmailVerified, e)
                        }, t.closeModal = function() {
                            t.props.history.push(Object(un.d)(t.props.match.params.channelName))
                        }, t.showMiniStats = function() {
                            return !!$e.parse(t.props.location.search).stats
                        }, t.onImmediatePublish = function(e) {
                            t.props.immediatePublish(e, t.notificationService)
                        }, t.onDeletePremiere = function(e, n) {
                            t.props.deletePremiere(e, n, t.notificationService)
                        }, t.isAffiliatePlus = function() {
                            return !(!t.props.data.user || !t.props.data.user.roles) && (t.props.data.user.roles.isAffiliate || t.props.data.user.roles.isPartner)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.props.apiData.channelName && this.props.apiData.channelName === this.props.match.params.channelName || this.props.changeChannel(this.props.match.params.channelName), this.props.fetchProcessingVideosData(this.propsToPageContext(this.props), 0, this.notificationService), this.fetchData(this.propsToPageContext(this.props))
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.beginPollingProcessingVideos(), this.setPageTitle(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return l.__generator(this, function(a) {
                                return e.showModal && e.closeModal && !this.notificationService && (e.overrideNotificationService ? this.notificationService = e.overrideNotificationService : this.notificationService = new $r(this.props.showModal, this.props.closeModal)), Boolean(!this.props.data.user && e.data.user) && (this.props.fetchProcessingVideosData(this.propsToPageContext(e), 0, this.notificationService), this.fetchData(this.propsToPageContext(e), this.propsToPageContext(this.props)), this.setPageTitle(e)), e.pubsub && e.pubsub.messages.videoThumbnailProcessed && this.props.data.user && (t = this.props.pubsub && this.props.pubsub.messages.videoThumbnailProcessed, n = e.pubsub.messages.videoThumbnailProcessed, (!t || t.upload_id !== n.upload_id) && this.props.fetchVideo(this.props.data.user.id, n.video_id)), e.pubsub && e.pubsub.messages.videoThumbnailError && (t = this.props.pubsub && this.props.pubsub.messages.videoThumbnailError, n = e.pubsub.messages.videoThumbnailError, (!t || t.upload_id !== n.upload_id) && this.props.errorProcessingThumbnail(n.video_id)), [2]
                            })
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.stopPollingProcessingVideos()
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return tn.createElement(nn.a, {
                            message: Object(d.d)("Access Denied: Please log in", "VideoManagerPage")
                        });
                        if (this.props.forbidden) return tn.createElement(nn.a, {
                            message: Object(d.d)("Access Denied: you don't have access to these videos", "VideoManagerPage")
                        });
                        if (this.props.data.error) return tn.createElement(nn.a, {
                            message: Object(d.d)("Error loading data", "VideoManagerPage")
                        });
                        if (this.props.apiData && this.props.apiData.notificationMessage && this.props.apiData.notificationMessage.type === h.NotificationType.PageError) return tn.createElement(nn.a, {
                            message: this.props.apiData.notificationMessage.message
                        });
                        var e = d.b.get("vodcast_deprecation_announcement_enabled", !1),
                            t = null;
                        return t = !this.isAffiliatePlus() && e ? tn.createElement(Qr, null) : tn.createElement(Mn, null), tn.createElement(an.b, null, tn.createElement(fe.Xa, {
                            padding: 3,
                            className: "video-manager",
                            fullWidth: !0
                        }, this.showMiniStats() ? tn.createElement(kn, {
                            channelID: this.props.data.user && this.props.data.user.id
                        }) : null, tn.createElement(fe.Ja, {
                            gutterSize: fe.Ka.Large
                        }, tn.createElement(fe.P, {
                            cols: this.showRightSide ? 8 : 12
                        }, tn.createElement(fe.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, tn.createElement($a, {
                            isLoading: this.props.data.loading,
                            channelLogin: this.props.match.params.channelName,
                            user: this.props.data.user,
                            currentUser: this.props.data.currentUser
                        }), tn.createElement(fe.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H2,
                            fontSize: fe.Ca.Size5,
                            color: fe.O.Alt2
                        }, this.showRightSide && Object(d.d)("Upload queue", "VideoManagerPage"))), tn.createElement(fe.Xa, {
                            position: fe.jb.Relative,
                            fullWidth: !0
                        }, tn.createElement(An, {
                            errors: this.props.uploadValidationErrors,
                            onFilesSubmitted: this.handleUploadFilesSubmitted
                        })), tn.createElement(fe.Xa, {
                            padding: {
                                top: 1
                            }
                        }, this.getVideoUploadRows(this.props.videoUploads), this.getVideoProcessingRows()), tn.createElement(fe.Xa, {
                            padding: {
                                top: 2
                            }
                        }, tn.createElement(fe.W, {
                            type: fe.Vb.H2,
                            fontSize: fe.Ca.Size5,
                            color: fe.O.Alt2
                        }, this.showRightSide ? tn.createElement(fe.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, Object(d.d)("Videos", "VideoManagerPage")) : this.renderFilterDropdown())), tn.createElement("div", {
                            className: "video-manager-processed-list"
                        }, this.renderSuccessfullyProcessedVideos()))), this.showRightSide && tn.createElement(fe.P, {
                            cols: 4
                        }, tn.createElement(an.c, {
                            bottomPixelThreshold: 20
                        }, tn.createElement(fe.Eb, {
                            background: fe.r.Base,
                            margin: {
                                bottom: 3
                            },
                            elevation: 2
                        }, tn.createElement(fe.Eb, {
                            padding: 2,
                            borderBottom: !0
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Xa, {
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.q, {
                            src: "https://static-cdn.jtvnw.net/ttv-vod-gala-web-assets/popcorn_purple_112.png",
                            alt: Object(d.d)("Purple popcorn", "VideoManagerPage"),
                            size: 36
                        })), tn.createElement(fe.Xa, null, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4,
                            bold: !0
                        }, Object(d.d)("Introducing Premieres", "VideoManagerPage")), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size6,
                            color: fe.O.Alt2
                        }, Object(d.d)("Give your video the debut it deserves.", "VideoManagerPage")))), tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap,
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Xa, {
                            flexShrink: 0,
                            flexGrow: 0,
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.Eb, {
                            className: "video-manager-badge",
                            color: fe.O.Overlay,
                            background: fe.r.Accent,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap,
                            justifyContent: fe.Wa.Center,
                            borderRadius: fe.x.Rounded,
                            position: fe.jb.Absolute
                        }, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size8
                        }, Object(d.f)(1))), tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                left: 2
                            }
                        }, tn.createElement("img", {
                            src: "https://static-cdn.jtvnw.net/ttv-vod-gala-web-assets/premiere-upload_56.png",
                            alt: Object(d.d)("Upload", "VideoManagerPage"),
                            height: 20,
                            width: 20
                        }))), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size5,
                            color: fe.O.Alt2
                        }, Object(d.d)("Upload your video.", "VideoManagerPage"))), tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap,
                            margin: {
                                bottom: 2
                            }
                        }, tn.createElement(fe.Xa, {
                            flexShrink: 0,
                            flexGrow: 0,
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.Eb, {
                            className: "video-manager-badge",
                            color: fe.O.Overlay,
                            background: fe.r.Accent,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap,
                            justifyContent: fe.Wa.Center,
                            borderRadius: fe.x.Rounded,
                            position: fe.jb.Absolute
                        }, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size8
                        }, Object(d.f)(2))), tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                left: 2
                            }
                        }, tn.createElement("img", {
                            src: "https://static-cdn.jtvnw.net/ttv-vod-gala-web-assets/premiere-schedule_56.png",
                            alt: Object(d.d)("Schedule", "VideoManagerPage"),
                            height: 20,
                            width: 20
                        }))), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size5,
                            color: fe.O.Alt2
                        }, Object(d.d)("Schedule a Premiere and get the word out.", "VideoManagerPage"))), tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap
                        }, tn.createElement(fe.Xa, {
                            flexShrink: 0,
                            flexGrow: 0,
                            padding: {
                                right: .5
                            }
                        }, tn.createElement(fe.Eb, {
                            className: "video-manager-badge",
                            color: fe.O.Overlay,
                            background: fe.r.Accent,
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            flexWrap: fe.Ba.NoWrap,
                            justifyContent: fe.Wa.Center,
                            borderRadius: fe.x.Rounded,
                            position: fe.jb.Absolute
                        }, tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size8
                        }, Object(d.f)(3))), tn.createElement(fe.Xa, {
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                left: 2
                            }
                        }, tn.createElement("img", {
                            src: "https://static-cdn.jtvnw.net/ttv-vod-gala-web-assets/premieres-watch_56.png",
                            alt: Object(d.d)("Community", "VideoManagerPage"),
                            height: 16,
                            width: 20
                        }))), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size5,
                            color: fe.O.Alt2
                        }, Object(d.d)("Watch with your community!", "VideoManagerPage")))), tn.createElement(fe.Eb, {
                            className: "sm-panel-btn",
                            background: fe.r.Alt,
                            display: fe.X.Flex,
                            flexGrow: 1,
                            flexWrap: fe.Ba.NoWrap
                        }, tn.createElement(fe.z, {
                            linkTo: "http://link.twitch.tv/premieres-help",
                            type: fe.F.Text,
                            fullWidth: !0
                        }, tn.createElement(fe.W, null, Object(d.d)("Learn more about Premieres", "VideoManagerPage"))))), tn.createElement(Dn, {
                            activeFilter: this.props.activeFilter,
                            changeFilter: this.onChangeFilter
                        })))), tn.createElement(an.a, {
                            enabled: !!this.props.apiData.videos.data && this.props.apiData.videos.moreDataAvailable,
                            key: this.props.activeFilter || "",
                            loadMore: this.loadMore
                        }), tn.createElement(Br, {
                            user: this.props.data.user,
                            currentUser: this.props.data.currentUser,
                            channelName: this.props.match.params.channelName,
                            notificationService: this.notificationService,
                            fetchVideoForScheduling: this.props.fetchVideoForScheduling,
                            closeModal: this.closeModal,
                            createEvent: this.props.createEvent,
                            updateEvent: this.props.updateEvent,
                            downloadVideo: this.props.downloadVideo,
                            vodcastQueueUnavailable: this.vodcastQueueUnavailable,
                            theme: this.props.theme
                        }), tn.createElement(fn.b, {
                            limit: 3
                        }, tn.createElement(vn.b, {
                            expiresAt: ao
                        }, t))))
                    }, t.prototype.renderSuccessfullyProcessedVideos = function() {
                        var e = this;
                        if (null === this.props.apiData.videos.data && this.props.apiData.videos.loading) return this.renderLoadingState();
                        if (null === this.props.apiData.videos.data) return this.renderErrorState();
                        if (0 === this.props.apiData.videos.data.length) return this.renderEmptyState();
                        var t = this.props.apiData.videos.data.map(function(t) {
                            return e.getVideoRow(t)
                        });
                        return this.props.apiData.videos.loading && t.push(tn.createElement(Ya.a, {
                            key: "VideoCardPlaceholder" + this.props.apiData.videos.data.length
                        })), t
                    }, t.prototype.renderLoadingState = function() {
                        return tn.createElement(fe.Xa, null, tn.createElement(Ya.a, {
                            key: "VideoCardPlaceholderLoading1"
                        }), tn.createElement(Ya.a, {
                            key: "VideoCardPlaceholderLoading2"
                        }), tn.createElement(Ya.a, {
                            key: "VideoCardPlaceholderLoading3"
                        }))
                    }, t.prototype.renderEmptyState = function() {
                        return tn.createElement(fe.Xa, {
                            "data-test-selector": eo
                        }, Object(d.d)("You have no videos which match these filters.", "VideoManagerPage"))
                    }, t.prototype.renderErrorState = function() {
                        return tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center,
                            justifyContent: fe.Wa.Center,
                            padding: 2
                        }, tn.createElement(fe.Xa, {
                            margin: {
                                right: 1
                            },
                            display: fe.X.Flex
                        }, tn.createElement(fe.sb, {
                            asset: fe.tb.Warning,
                            type: fe.ub.Alt2,
                            width: 28,
                            height: 28
                        })), tn.createElement(fe.W, {
                            fontSize: fe.Ca.Size4
                        }, Object(d.d)("An error occurred loading the list of videos.", "VideoManagerPage")))
                    }, t.prototype.renderFilterDropdown = function() {
                        var e = this,
                            t = Tn(!0),
                            n = t.find(function(t) {
                                return e.props.activeFilter === t.key
                            });
                        return tn.createElement(fe.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, tn.createElement(rn.a, {
                            display: fe.X.InlineFlex,
                            hideBalloonOnInsideClick: !0
                        }, tn.createElement(fe.z, {
                            type: fe.F.Hollow,
                            dropdown: !0
                        }, tn.createElement(fe.Xa, {
                            display: fe.X.Flex,
                            alignItems: fe.f.Center
                        }, tn.createElement(fe.W, {
                            color: fe.O.Alt2
                        }, n && n.label))), tn.createElement(fe.u, {
                            show: !0,
                            direction: fe.v.BottomLeft,
                            tailOffset: 10,
                            size: fe.w.Small,
                            noTail: !0
                        }, tn.createElement(fe.Xa, null, t.map(this.renderFilterOption)))))
                    }, t.prototype.getVideoUploadRows = function(e) {
                        var t = this,
                            n = e.filter(function(e) {
                                return void 0 !== e.video
                            });
                        if (n.length > 0) return n.map(function(e) {
                            if (e.video) return t.getVideoRow(e.video, e)
                        })
                    }, t.prototype.getVideoProcessingRows = function() {
                        var e = this;
                        if (null !== this.props.apiData.processingVideos.data) {
                            var t = null;
                            if (this.props.apiData.processingVideos.data && this.props.apiData.processingVideos.data.length > 0 && this.props.apiData.processingVideos.moreDataAvailable) {
                                var n = this.props.apiData.processingVideos.loading ? fe.E.Loading : fe.E.Default;
                                t = tn.createElement(fe.Xa, {
                                    display: fe.X.Flex,
                                    fullWidth: !0,
                                    justifyContent: fe.Wa.Center
                                }, tn.createElement(fe.z, {
                                    "data-test-selector": to,
                                    state: n,
                                    type: fe.F.Hollow,
                                    onClick: this.loadMoreProcessing
                                }, Object(d.d)("Load More", "VideoManagerProcessingVideos")))
                            }
                            return tn.createElement("div", null, this.props.apiData.processingVideos.data.map(function(t) {
                                return e.getVideoRow(t)
                            }), t)
                        }
                    }, t.prototype.getVideoRow = function(e, t) {
                        if (!this.props.data.user || !this.props.data.currentUser) return null;
                        var n = this.props.data.user.id === this.props.data.currentUser.id;
                        return tn.createElement(qa, {
                            video: e,
                            videoDownloads: this.props.videoDownloads,
                            videoUpload: t,
                            channelName: this.props.match.params.channelName,
                            subOnlyChannel: !1,
                            onDeleteVideo: this.onDeleteVideo,
                            onDownloadVideo: this.onDownloadVideo,
                            onExport: this.onExport,
                            inVodcastQueue: this.props.isInVodcastQueue(e.id),
                            onAddVideoToVodcastQueue: this.onAddVideoToVodcastQueue,
                            vodcastQueueUnavailable: this.vodcastQueueUnavailable(),
                            key: e.id,
                            user: this.props.data.user,
                            isOwner: n,
                            showModal: this.props.showModal,
                            closeModal: this.props.closeModal,
                            onImmediatePremiere: this.onImmediatePublish,
                            onDeletePremiere: this.onDeletePremiere,
                            dismissImmediatePublishModal: this.props.dismissImmediatePublishModal,
                            showContextualActions: this.showContextualActions
                        })
                    }, t.prototype.propsToPageContext = function(e) {
                        return {
                            isLoggedIn: e.isLoggedIn,
                            channelName: e.match.params.channelName,
                            userId: e.data.user ? e.data.user.id : void 0,
                            currentUserId: e.data.currentUser && e.data.currentUser.id,
                            activeFilter: e.activeFilter
                        }
                    }, t.prototype.fetchData = function(e, t) {
                        return this.props.fetchVideosData(e, t)
                    }, t.prototype.setPageTitle = function(e) {
                        if (e.data.user) {
                            var t = e.data.user.displayName;
                            d.p.setPageTitle(Object(d.d)("{ownerDisplayName} - Video Producer", {
                                ownerDisplayName: t
                            }, "VideoManagerPage"))
                        }
                    }, t
                }(tn.Component),
                ro = Object(i.compose)(Object(on.a)(Kr, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(gn.b)("VideoManagerPage", {
                    destination: mn.a.VideoManagerPage
                }), Object(sn.a)({
                    location: hn.PageviewLocation.VideoManager,
                    properties: function(e) {
                        var t = null;
                        return e.data.user && e.data.user.id && (t = Number(e.data.user.id)), {
                            channel_id: t
                        }
                    },
                    skip: function(e) {
                        return e.data.loading
                    }
                }), Object(ln.a)([{
                    topic: function(e) {
                        return e.data.user ? Object(cn.L)(e.data.user.id) : ""
                    },
                    mapMessageTypesToProps: (Zr = {}, Zr[dn.PubsubMessageType.VideoThumbnailProcessingComplete] = "videoThumbnailProcessed", Zr[dn.PubsubMessageType.VideoThumbnailProcessingError] = "videoThumbnailError", Zr)
                }]))(io);
            var oo = Object(a.connect)(function(e) {
                return {
                    activeFilter: e.videoManager.activeFilter,
                    apiData: {
                        channelName: e.videoManager.channelName,
                        notificationMessage: e.videoManager.notificationMessage,
                        processingVideos: e.videoManager.processingVideos,
                        videos: e.videoManager.videos,
                        vodcastQueueVideoIDs: e.videoManager.vodcastQueueVideoIDs
                    },
                    forbidden: e.videoManager.forbidden,
                    isInVodcastQueue: en(e.videoManager),
                    isLoggedIn: Object(o.f)(e),
                    uploadValidationErrors: e.videoManager.uploadValidationErrors,
                    videoUploads: e.videoManager.videoUploads,
                    youtubeConnected: e.videoManager.youtubeConnected,
                    theme: Object(s.a)(e),
                    videoDownloads: e.videoManager.videoDownloads
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    addVideoToVodcastQueue: kt,
                    authenticateYoutube: jt,
                    beginPollingProcessingVideos: It,
                    changeChannel: gt,
                    clearEditModalErrors: ht,
                    clearVideoUploadErrors: At,
                    closeModal: r.c,
                    fetchVideo: Et,
                    createEvent: zt,
                    deletePremiere: Ot,
                    deleteVideo: wt,
                    dismissImmediatePublishModal: Pt,
                    downloadVideo: Mt,
                    errorProcessingThumbnail: Ft,
                    exportVideo: Nt,
                    fetchProcessingVideosData: Yt,
                    fetchVideoForScheduling: bt,
                    fetchVideosData: Zt,
                    immediatePublish: St,
                    removeVideoUpload: ft,
                    showModal: r.d,
                    stopPollingProcessingVideos: Vt,
                    submitVideoUploadFiles: xt,
                    updateEvent: Ht
                }, e)
            })(ro);
            n.d(t, "VideoManagerPage", function() {
                return oo
            })
        },
        "/Fcb": function(e, t, n) {},
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("sL9O"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isDraggingOver: !1
                        }, t.onDragEnter = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !0
                            })
                        }, t.onDragLeave = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            })
                        }, t.onFileInputChange = function(e) {
                            e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                        }, t.onFileDrop = function(e) {
                            e.preventDefault(), t.setState({
                                isDraggingOver: !1
                            }), t.finalizeSelections(e.dataTransfer.files)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, i.createElement(r.Pa, {
                            position: r.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: r.ic.Above
                        }, i.createElement("input", {
                            "data-a-target": "file-picker-input",
                            "data-test-selector": "file-picker-input",
                            className: "drag-and-drop-file-picker__input",
                            accept: this.props.allowedFileTypes.join(","),
                            multiple: this.props.multiFile || !1,
                            onChange: this.onFileInputChange,
                            type: "file",
                            onDragLeave: this.onDragLeave,
                            onDragEnter: this.onDragEnter,
                            onDrop: this.onFileDrop
                        })), this.props.children)
                    }, t.prototype.finalizeSelections = function(e) {
                        e && this.props.onFilesSubmitted(Array.from(e))
                    }, t
                }(i.Component))
        },
        "0Kx4": function(e, t, n) {},
        "0ly3": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("HSqT"),
                o = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(e.currentTarget.value)
                        }, t.renderLanguageOption = function(e) {
                            return i.createElement("option", {
                                key: e.code,
                                value: e.code
                            }, e.label)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(o.zb, {
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, Object(r.b)().map(this.renderLanguageOption));
                        return this.props.label && (e = i.createElement(o.Ea, {
                            label: this.props.label
                        }, e)), e
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        "16Gl": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var a = n("kduP");

            function i(e, t) {
                return Object(a.d)(e) + "/edit/" + t
            }

            function r(e, t) {
                return Object(a.d)(e) + "/highlighter/" + t
            }

            function o(e, t) {
                return Object(a.d)(e) + "/schedule/" + t
            }

            function s(e, t) {
                return Object(a.d)(e) + "/appeal/" + t
            }
        },
        "1G35": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var a, i = n("/7QA"),
                r = n("f00E"),
                o = 2e10,
                s = "20GB";
            ! function(e) {
                e[e.published = 0] = "published", e[e.private = 1] = "private"
            }(a || (a = {}));
            var l, d = ["video/mp4", "video/quicktime", "video/avi", "video/x-flv", "video/x-msvideo", "video/*", ".mp4", ".mov", ".flv", ".avi"];

            function c(e) {
                return Object.assign({
                    id: Object(r.b)(),
                    errors: [],
                    fileSizeBytes: 0,
                    totalBytesSent: 0,
                    viewable: a.private,
                    videoAuthToken: "",
                    status: l.queued,
                    progressPercentage: 0
                }, e)
            }

            function u(e, t) {
                var n = [];
                if (e || n.push(new Error(Object(i.d)("Only accounts with verified email addresses can upload files. Please check your inbox for the verification email", "VideoUploadModel"))), !d.includes(t.type)) {
                    var a = "." + t.name.split(".").pop();
                    d.includes(a) || n.push(new Error(Object(i.d)("File type {filetype} is not currently supported", {
                        filetype: t.type ? t.type : a
                    }, "VideoUploadModel")))
                }
                return t.size > o && n.push(new Error(Object(i.d)("File too large. The maximum file size is {maxFileSizeLabel}", {
                    maxFileSizeLabel: s
                }, "VideoUploadModel"))), n
            }! function(e) {
                e[e.queued = 0] = "queued", e[e.uploading = 1] = "uploading", e[e.completed = 2] = "completed", e[e.errored = 3] = "errored", e[e.stopped = 4] = "stopped"
            }(l || (l = {}))
        },
        "2/NB": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
                }(a || (a = {}));
            var i = [a.JPEG, a.PNG]
        },
        "2obe": function(e, t, n) {},
        "3A4o": function(e, t, n) {},
        "5Ijs": function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("oJmH"),
                o = n("/7QA"),
                s = n("q1tI"),
                l = n("eJ65"),
                d = n("EuPq"),
                c = n("KYAw"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object(c.a)(this.props.collection.id);
                        return s.createElement("div", null, s.createElement(u.W, null, Object(o.d)("Collection Link", "VideoShareBox")), s.createElement(d.a, {
                            onClick: function() {
                                e.props.onClick(t)
                            },
                            value: t
                        }))
                    }, t
                }(s.Component),
                m = n("BQs+"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e) {
                            var n = {
                                location: t.props.tracking.location,
                                platform: m.a.Link,
                                shareURL: e
                            };
                            Object(m.b)(t.props.collection, n, o.p.apollo.client)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(p, i.__assign({}, this.props, {
                            onClick: this.onClickHandler
                        }))
                    }, t
                }(s.Component),
                g = n("EdhP"),
                f = n("2xye"),
                v = n("Addw");

            function b(e) {
                switch (e.type) {
                    case a.Collection:
                        return e.currentVideo || null;
                    case a.Video:
                        return e;
                    default:
                        return e
                }
            }! function(e) {
                e[e.Collection = 0] = "Collection", e[e.Video = 1] = "Video"
            }(a || (a = {}));
            var E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.content,
                            n = this.getEmbedPlayerContentURL(t);
                        return s.createElement("div", null, s.createElement(u.W, null, Object(o.d)("Embed Video", "VideoShareBox")), s.createElement(d.a, {
                            onClick: function() {
                                e.props.onClick(n)
                            },
                            value: this.getEmbedPlayerCode(t)
                        }))
                    }, t.prototype.getEmbedPlayerCode = function(e) {
                        var t = function(e, t) {
                                var n = {
                                    autoplay: !1
                                };
                                switch (e.type) {
                                    case a.Collection:
                                        e.currentVideo ? (n.video = e.currentVideo.id, n.t = t ? Object(v.a)(t) : void 0) : n.collection = e.id;
                                        break;
                                    case a.Video:
                                        n.video = e.id, n.t = t ? Object(v.a)(t) : void 0
                                }
                                return n
                            }(e, null !== this.props.selectedVideoStartTime ? this.props.selectedVideoStartTime : void 0),
                            n = e.owner.displayName,
                            i = e.title,
                            r = Object(o.d)("Watch {title} from {displayName} on www.twitch.tv", {
                                displayName: n,
                                title: i
                            }, "VideoShareBox");
                        return Object(g.b)(t, {
                            textLink: {
                                url: this.getEmbedPlayerContentURL(e),
                                text: r
                            },
                            allowScrolling: !1,
                            allowFullscreen: !0
                        })
                    }, t.prototype.getEmbedPlayerContentURL = function(e) {
                        switch (e.type) {
                            case a.Collection:
                                return e.currentVideo ? Object(c.b)(e.currentVideo.id, {
                                    tt_medium: f.PageviewMedium.VideoEmbed,
                                    tt_content: f.PageviewContent.TextLink,
                                    t: this.props.selectedVideoStartTime
                                }) : Object(c.a)(e.id, {
                                    tt_medium: f.PageviewMedium.VideoEmbed,
                                    tt_content: f.PageviewContent.TextLink
                                });
                            case a.Video:
                                return Object(c.b)(e.id, {
                                    tt_medium: f.PageviewMedium.VideoEmbed,
                                    tt_content: f.PageviewContent.TextLink,
                                    t: this.props.selectedVideoStartTime
                                });
                            default:
                                return e
                        }
                    }, t
                }(s.Component),
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e) {
                            var n = t.props.content;
                            switch (n.type) {
                                case a.Collection:
                                    n.currentVideo ? t.trackVideoShare(e, n.currentVideo) : t.trackCollectionShare(e, n);
                                    break;
                                case a.Video:
                                    t.trackVideoShare(e, n);
                                    break;
                                default:
                                    return n
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(E, i.__assign({}, this.props, {
                            onClick: this.onClickHandler
                        }))
                    }, t.prototype.trackCollectionShare = function(e, t) {
                        var n = {
                            location: this.props.tracking.location,
                            platform: m.a.Embed,
                            shareURL: e
                        };
                        Object(m.b)(t, n, o.p.apollo.client)
                    }, t.prototype.trackVideoShare = function(e, t) {
                        var n = {
                            location: this.props.tracking.location,
                            platform: m.a.Embed,
                            shareURL: e
                        };
                        Object(m.c)(t, n, o.p.apollo.client)
                    }, t
                }(s.Component),
                C = n("X7Ac"),
                _ = [{
                    type: C.b.Twitter,
                    selector: "twitter-button"
                }, {
                    type: C.b.Facebook,
                    selector: "fb-button"
                }, {
                    type: C.b.VKontakte,
                    selector: "vk-button"
                }, {
                    type: C.b.Reddit,
                    selector: "reddit-button"
                }, {
                    type: C.b.Copy,
                    selector: "copy-link-button"
                }],
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.content,
                            n = this.getContentURL(t),
                            a = this.getSocialShareContextTitle(t),
                            i = _.map(function(t) {
                                return s.createElement(C.a, {
                                    "data-test-selector": t.selector,
                                    key: t.type,
                                    onShareClick: function(t) {
                                        e.props.onClick(n, t)
                                    },
                                    text: a,
                                    type: t.type,
                                    url: n
                                })
                            });
                        return s.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between
                        }, i)
                    }, t.prototype.getSocialShareContextTitle = function(e) {
                        return Object(o.d)("Check out {title} from {displayName} on www.twitch.tv", {
                            displayName: e.owner.displayName,
                            title: e.title
                        }, "VideoShareBox")
                    }, t.prototype.getContentURL = function(e) {
                        switch (e.type) {
                            case a.Collection:
                                return e.currentVideo ? Object(c.b)(e.currentVideo.id, {
                                    collection: e.id,
                                    t: this.props.selectedVideoStartTime
                                }) : Object(c.a)(e.id);
                            case a.Video:
                                return Object(c.b)(e.id, {
                                    t: this.props.selectedVideoStartTime
                                });
                            default:
                                return e
                        }
                    }, t
                }(s.Component),
                D = function(e) {
                    switch (e) {
                        case C.b.Twitter:
                            return m.a.Twitter;
                        case C.b.Reddit:
                            return m.a.Reddit;
                        case C.b.VKontakte:
                            return m.a.VKontakte;
                        case C.b.Facebook:
                            return m.a.Facebook;
                        case C.b.Copy:
                            return m.a.Copy;
                        case C.b.CopyInput:
                            return m.a.Link;
                        case C.b.Download:
                            return m.a.Download;
                        default:
                            return e
                    }
                },
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e, n) {
                            var i = t.props.content;
                            switch (i.type) {
                                case a.Collection:
                                    i.currentVideo ? t.trackVideoShare(e, i.currentVideo, n, i.id) : t.trackCollectionShare(e, i, n);
                                    break;
                                case a.Video:
                                    t.trackVideoShare(e, i, n);
                                    break;
                                default:
                                    return i
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(T, i.__assign({}, this.props, {
                            onClick: this.onClickHandler
                        }))
                    }, t.prototype.trackCollectionShare = function(e, t, n) {
                        var a = {
                            location: this.props.tracking.location,
                            platform: D(n),
                            shareURL: e
                        };
                        Object(m.b)(t, a, o.p.apollo.client)
                    }, t.prototype.trackVideoShare = function(e, t, n, a) {
                        var i = {
                            collectionID: a,
                            location: this.props.tracking.location,
                            platform: D(n),
                            shareURL: e
                        };
                        Object(m.c)(t, i, o.p.apollo.client)
                    }, t
                }(s.Component),
                k = n("hyVY"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onShareTimestampClick = function(e) {
                            void 0 !== t.props.currentVideoTime && t.props.onVideoStartTimeChange(e.currentTarget.checked ? t.props.currentVideoTime : void 0)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = {};
                        this.props.collectionID && (t.collection = this.props.collectionID), this.props.selectedVideoStartTime && (t.t = this.props.selectedVideoStartTime);
                        var n = Object(c.b)(this.props.video.id, t);
                        return s.createElement("div", null, s.createElement(u.W, null, Object(o.d)("Video Link", "VideoShareBox")), s.createElement(d.a, {
                            onClick: function() {
                                e.props.onInputClick(n)
                            },
                            value: n
                        }), this.renderCurrentVideoOffsetLinkOption())
                    }, t.prototype.renderCurrentVideoOffsetLinkOption = function() {
                        if (void 0 === this.props.currentVideoTime) return null;
                        var e = this.props.selectedVideoStartTime || this.props.currentVideoTime,
                            t = Object(k.b)(e);
                        return s.createElement(u.Xa, {
                            padding: {
                                top: .5
                            }
                        }, s.createElement(u.N, {
                            id: "video-share-timestamp-toggle",
                            label: Object(o.d)("Skip to {deeplinkTimestamp}", {
                                deeplinkTimestamp: t
                            }, "VideoShareBox"),
                            "data-a-target": "video-share-timestamp-toggle",
                            "data-a-value": void 0 !== this.props.selectedVideoStartTime,
                            checked: !!this.props.selectedVideoStartTime,
                            onChange: this.onShareTimestampClick
                        }))
                    }, t
                }(s.Component),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function(e, n) {
                            var a = {
                                collectionID: n,
                                location: t.props.tracking.location,
                                platform: m.a.Link,
                                shareURL: e
                            };
                            Object(m.c)(t.props.video, a, o.p.apollo.client)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(w, i.__assign({}, this.props, {
                            onInputClick: this.onClickHandler
                        }))
                    }, t
                }(s.Component),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.toggleTimer = function(e) {
                            t.props.getCurrentVideoTime && !e && (t.updateCurrentTime(), t.getTimeTimer = setInterval(t.updateCurrentTime, 1e3))
                        }, t.updateCurrentTime = function() {
                            if (t.props.getCurrentVideoTime) {
                                var e = t.props.getCurrentVideoTime();
                                t.setState({
                                    currentTime: e
                                })
                            }
                        }, t.onVideoStartTimeChangeHandler = function(e) {
                            t.setState({
                                selectedVideoStartTime: e
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.currentVideoTime === this.state.currentTime || e.getCurrentVideoTime || this.setState({
                            currentTime: e.currentVideoTime
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        this.getTimeTimer && clearTimeout(this.getTimeTimer)
                    }, t.prototype.render = function() {
                        var e = null;
                        return this.props.content && (e = this.shareBalloonContent(this.props.content)), s.createElement(l.a, {
                            onToggle: this.toggleTimer
                        }, s.createElement(u.z, {
                            disabled: !this.props.content,
                            icon: u.tb.Share,
                            type: this.props.buttonType
                        }, Object(o.d)("Share", "VideoShareBox")), s.createElement(u.u, {
                            direction: this.props.balloonDirection,
                            size: u.w.Small
                        }, e))
                    }, t.prototype.shareBalloonContent = function(e) {
                        return s.createElement(u.Xa, {
                            padding: 1
                        }, s.createElement(S, {
                            content: e,
                            selectedVideoStartTime: this.state.selectedVideoStartTime,
                            tracking: this.props.tracking
                        }), this.renderCollectionShareInput(e), this.renderVideoShareInput(e), this.renderEmbedPlayerInput(e))
                    }, t.prototype.renderCollectionShareInput = function(e) {
                        return e.type !== a.Collection ? null : s.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(h, {
                            collection: e,
                            tracking: this.props.tracking
                        }))
                    }, t.prototype.renderVideoShareInput = function(e) {
                        var t, n;
                        if (e.type === a.Collection) {
                            if (!e.currentVideo) return null;
                            n = e.id, t = e.currentVideo
                        } else t = e;
                        return s.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(O, {
                            collectionID: n,
                            currentVideoTime: this.state.currentTime,
                            onVideoStartTimeChange: this.onVideoStartTimeChangeHandler,
                            selectedVideoStartTime: this.state.selectedVideoStartTime,
                            tracking: this.props.tracking,
                            video: t
                        }))
                    }, t.prototype.renderEmbedPlayerInput = function(e) {
                        return s.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, s.createElement(y, {
                            content: e,
                            selectedVideoStartTime: this.state.selectedVideoStartTime,
                            tracking: this.props.tracking
                        }))
                    }, t
                }(s.Component),
                I = n("gFHd");

            function V(e) {
                return e.owner && e.title ? {
                    type: a.Video,
                    id: e.id,
                    owner: {
                        id: e.owner.id,
                        displayName: e.owner.displayName
                    },
                    title: e.title
                } : null
            }
            var x = Object(r.compose)(Object(r.graphql)(I, {
                options: function(e) {
                    var t = e.content;
                    return t ? {
                        variables: {
                            collectionID: t.collectionID || "",
                            hasCollection: !!t.collectionID,
                            hasVideo: !!t.videoID,
                            videoID: t.videoID || ""
                        }
                    } : {
                        variables: {
                            collectionID: "",
                            hasCollection: !1,
                            hasVideo: !1,
                            videoID: ""
                        }
                    }
                },
                props: function(e) {
                    var t = i.__assign({}, e, {
                            content: void 0
                        }),
                        n = e.data;
                    return n.loading ? t : n.error ? (o.k.error(n.error, "VideoShareBoxContainer"), t) : (n.collection ? t.content = function(e, t) {
                        var n;
                        if (t) {
                            var i = V(t);
                            if (!i) return null;
                            n = i
                        }
                        return e.owner && e.title ? {
                            type: a.Collection,
                            id: e.id,
                            owner: {
                                id: e.owner.id,
                                displayName: e.owner.displayName
                            },
                            title: e.title,
                            currentVideo: n
                        } : null
                    }(n.collection, n.video) || void 0 : n.video && (t.content = V(n.video) || void 0), t)
                }
            }))(M);
            n.d(t, "a", function() {
                return x
            }), n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return b
            })
        },
        "5Ubq": function(e, t, n) {},
        "5mUL": function(e, t, n) {},
        "79jw": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TopTags"
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
                                value: "showTopTagsByCategory"
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
                                value: "categoryName"
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
                                        value: "categoryName"
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
                                            value: "showTopTagsByCategory"
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "TOP"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "tagFragment"
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
                                value: "topTags"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "limit"
                                    }
                                }
                            }],
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
                                            value: "showTopTagsByCategory"
                                        }
                                    }
                                }]
                            }],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 341
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery TopTags($limit: Int! $showTopTagsByCategory: Boolean! $categoryName: String) {\ngame(name: $categoryName) @include(if: $showTopTagsByCategory) {\nid\ntags(tagType: TOP limit: $limit) {\n...tagFragment\n}\n}\ntopTags(limit: $limit) @skip(if: $showTopTagsByCategory) {\n...tagFragment\n}\n}',
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
            }(n("iiOx").definitions)), e.exports = a
        },
        "7M30": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "EditVideoPropertiesModal_VideoTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                        value: "videoID"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "editVideoPropertiesModalVideo"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "editVideoPropertiesModalVideo"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Video"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contentTags"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "contentTag"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 293
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/video-field-editor/models/content-tag-fragment.gql"\nquery EditVideoPropertiesModal_VideoTags($videoID: ID!) {\nvideo(id: $videoID) {\n...editVideoPropertiesModalVideo\n}\n}\nfragment editVideoPropertiesModalVideo on Video {\nid\nowner {\nid\n}\ncontentTags {\n...contentTag\n}\n}',
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
            }(n("ErfU").definitions)), e.exports = a
        },
        "8n0m": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return s
            });
            var a = n("/7QA"),
                i = n("2xye");

            function r(e) {
                a.o.track(i.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function o(e) {
                a.o.track(i.SpadeEventType.CollectionAddItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    place: e.place
                })
            }

            function s(e) {
                a.o.track(i.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        "97MP": function(e, t, n) {},
        "9rlX": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange({
                                language: e.currentTarget.value
                            })
                        }, t.renderLanguageOption = function(e) {
                            return i.createElement("option", {
                                key: e.languageCode,
                                value: e.languageCode
                            }, e.name)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.Ea, {
                            id: "event-language",
                            label: Object(r.d)("Event Language", "EventModal")
                        }, i.createElement(o.zb, {
                            name: "event-language",
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, r.a.locales.map(this.renderLanguageOption)))
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        AZIu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, i = n("/7QA"),
                r = n("2xye");

            function o(e) {
                var t = {
                    section: e.section,
                    tag_position: e.tagPosition,
                    item_page: "browse",
                    search_event: e.searchEvent,
                    tag_id: e.tagId,
                    dismiss: e.dismiss
                };
                i.o.track(r.SpadeEventType.BrowseFilter, t)
            }! function(e) {
                e.Categories = "browse_categories", e.LiveChannels = "browse_livechannels", e.IncategoryChannels = "browse_incategory_channels"
            }(a || (a = {}))
        },
        AmIn: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("NAv5"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("8/mp"),
                l = n("CbMu"),
                d = n("+58i"),
                c = n("xeRp"),
                u = n("gT8k"),
                p = n("9rlX"),
                m = n("Rzn4"),
                h = n("dKHc"),
                g = n("Wwq8"),
                f = n("JNgr"),
                v = n("Ue10"),
                b = (n("3A4o"), function() {
                    return Object(i.setMinutes)(Object(i.addHours)(new Date, 4), 0)
                }),
                E = function(e) {
                    return e ? e.join(",") : ""
                };

            function y(e) {
                return e ? {
                    description: e.description || "",
                    gameID: e.game.id,
                    gameName: e.game.name,
                    language: e.language,
                    startTime: e.startTime,
                    endTime: e.endTime,
                    timeZoneID: e.timeZoneID,
                    title: e.title,
                    imageUrl: e.imageUrl || void 0
                } : {
                    description: "",
                    gameID: "",
                    gameName: "",
                    language: Object(f.a)(),
                    startTime: Object(i.setMinutes)(Object(i.addHours)(new Date, 3), 0),
                    endTime: b(),
                    timeZoneID: Object(g.a)(),
                    title: ""
                }
            }
            var C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.validator = new h.b(y()), n.onCancel = function() {
                            n.props.closeModal()
                        }, n.onConfirm = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e = this.validator.editsAreValid(this.state.edits), this.setState({
                                                fieldErrors: this.validator.getFieldErrors()
                                            }), e ? [4, this.props.onCommit(Object(l.b)(this.state.edits, this.props.owner.id, void 0))] : [2];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, n.onFinishUploading = function(e) {
                            n.setState(function(t) {
                                return {
                                    edits: a.__assign({}, t.edits, {
                                        imageID: e._id
                                    })
                                }
                            })
                        }, n.onTitleChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        title: t
                                    })
                                }
                            })
                        }, n.onDescriptionChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        description: t
                                    })
                                }
                            })
                        }, n.onGameChange = function(e) {
                            var t = e.objectID,
                                i = e.name;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        gameID: t,
                                        gameName: i
                                    })
                                }
                            })
                        }, n.onChangeStartDate = function(e) {
                            n.setState(function(t) {
                                return {
                                    edits: a.__assign({}, t.edits, {
                                        startTime: e
                                    })
                                }
                            })
                        }, n.onChangeEndDate = function(e) {
                            n.setState(function(t) {
                                return {
                                    edits: a.__assign({}, t.edits, {
                                        endTime: e
                                    })
                                }
                            })
                        }, n.onLanguageChange = function(e) {
                            var t = e.language;
                            n.setState(function(e) {
                                return {
                                    edits: a.__assign({}, e.edits, {
                                        language: t
                                    })
                                }
                            })
                        }, n.state = {
                            edits: y(n.props.event),
                            fieldErrors: n.validator.getFieldErrors()
                        }, n.validator.addValidatorForField(i.isValid, h.a.StartTime), n.validator.addValidatorForField(function(e) {
                            return Object(i.isValid)(e) && e > n.state.edits.startTime
                        }, h.a.EndTime), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        this.props.serviceError && (e = r.createElement(v.Xa, null, r.createElement(v.W, {
                            fontSize: v.Ca.Size4,
                            color: v.O.Error
                        }, this.props.serviceError)));
                        var t = this.props.parent ? r.createElement(v.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(v.Ea, {
                                id: "series-name",
                                label: Object(o.d)("Series Name", "EventsModal")
                            }, this.props.parent.title)) : null,
                            n = this.props.parent ? null : r.createElement(v.Ea, {
                                label: "",
                                error: !!this.state.fieldErrors.language,
                                errorMessage: E(this.state.fieldErrors.language)
                            }, r.createElement(v.Xa, {
                                display: v.X.Flex,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(p.a, {
                                onChange: this.onLanguageChange,
                                disabled: !1,
                                defaultLanguage: this.state.edits.language
                            }))),
                            a = this.state.fieldErrors.endTime ? r.createElement(v.W, {
                                color: v.O.Error
                            }, E(this.state.fieldErrors.endTime)) : null;
                        return r.createElement(v.Xa, {
                            className: "event-modal"
                        }, r.createElement(v.Eb, {
                            className: "event-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: v.r.Base
                        }, r.createElement(v.Eb, {
                            display: v.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: v.Wa.Between,
                            borderBottom: !0
                        }, r.createElement(v.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, r.createElement(v.W, {
                            type: v.Vb.H3
                        }, Object(o.d)("Create an Event", "EventsModal"))), r.createElement(v.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(v.z, {
                            type: v.F.Text,
                            onClick: this.onCancel
                        }, Object(o.d)("Cancel", "EventsModal")), r.createElement(v.z, {
                            onClick: this.onConfirm
                        }, Object(o.d)("Save", "EventsModal")))), e, r.createElement(s.b, null, r.createElement(r.Fragment, null, r.createElement(v.Ja, {
                            gutterSize: v.Ka.Large
                        }, r.createElement(v.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 5
                            }
                        }, r.createElement(c.a, {
                            user: this.props.owner,
                            onFinishUploading: this.onFinishUploading,
                            initialImageData: this.props.event && this.props.event.imageUrl && new URL(this.props.event.imageUrl) || void 0
                        })), r.createElement(v.P, {
                            cols: {
                                default: 12,
                                md: 6,
                                lg: 7
                            }
                        }, t, r.createElement(v.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(v.Ea, {
                            id: "event-title",
                            label: Object(o.d)("Event Title", "EventsModal"),
                            error: !!this.state.fieldErrors.title,
                            errorMessage: E(this.state.fieldErrors.title || [])
                        }, r.createElement(v.Ra, {
                            onChange: this.onTitleChange,
                            value: this.state.edits.title,
                            type: v.Ta.Text,
                            maxLength: 140,
                            placeholder: Object(o.d)("Your title is also used in reminders and social media posts. ({limit} character limit)", {
                                limit: 140
                            }, "EventsModal")
                        }))), r.createElement(v.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(v.Ea, {
                            label: Object(o.d)("Event Description", "EventsModal"),
                            error: !!this.state.fieldErrors.description,
                            errorMessage: E(this.state.fieldErrors.description)
                        }, r.createElement(v.Sb, {
                            placeholder: Object(o.d)("Tell viewers why they should watch your event", "EventsModal"),
                            onChange: this.onDescriptionChange,
                            value: this.state.edits.description || "",
                            disabled: !1
                        }))), r.createElement(d.a, {
                            onChange: this.onChangeStartDate,
                            dateLabel: Object(o.d)("Start Date", "EventsModal"),
                            timeLabel: Object(o.d)("Start Time ({localeName})", {
                                localeName: Object(m.b)()
                            }, "EventsModal"),
                            dateErrorMessage: Object(o.d)("The start date is invalid", "EventsModal"),
                            timeErrorMessage: Object(o.d)("The start time is invalid", "EventsModal"),
                            defaultDate: this.state.edits.startTime,
                            allowPast: !0,
                            removeNow: !0
                        }), a, r.createElement(d.a, {
                            onChange: this.onChangeEndDate,
                            dateLabel: Object(o.d)("End Date", "EventsModal"),
                            timeLabel: Object(o.d)("End Time ({localeName})", {
                                localeName: Object(m.b)()
                            }, "EventsModal"),
                            dateErrorMessage: Object(o.d)("The end date is invalid", "EventsModal"),
                            timeErrorMessage: Object(o.d)("The end time is invalid", "EventsModal"),
                            defaultDate: this.state.edits.endTime || b(),
                            allowPast: !0,
                            removeNow: !0
                        }), n, r.createElement(v.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(v.Ea, {
                            id: "event-game",
                            label: Object(o.d)("Event Category/Game", "EventsModal"),
                            error: !!this.state.fieldErrors.gameID,
                            errorMessage: E(this.state.fieldErrors.gameID)
                        }, r.createElement(u.a, {
                            currentGameTitle: this.props.event && this.props.event.game && this.props.event.game.name || "",
                            onChange: this.onGameChange
                        })))))))))
                    }, t
                }(r.Component),
                _ = C;
            n.d(t, !1, function() {
                return y
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, "a", function() {
                return _
            })
        },
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            });
            var a, i = n("mrSG"),
                r = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                d = n("L7EG");

            function c(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var a, l, u, p;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: d,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return a = i.sent().data, l = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, a.video), u = {
                                    channel: l.owner ? l.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: l.game ? l.game.name : null,
                                    partner: !!l.owner && l.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? o.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : l.id,
                                    shared_item_type: t.collectionID ? o.ShareItemType.Collection : Object(s.a)(l.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: l.id,
                                    source_item_type: Object(s.a)(l.broadcastType)
                                }, r.p.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return p = i.sent(), r.k.error(p.toString(), c.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var a, s, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return a = i.sent().data, s = {
                                    channel: a.user ? a.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!a.user && a.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: o.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: o.SourceItemType.Collection
                                }, r.p.tracking.track(o.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return d = i.sent(), r.k.error(d.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(a || (a = {}))
        },
        Bucx: function(e, t, n) {},
        Bwwq: function(e, t, n) {},
        C29h: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("9C/b"),
                s = n("fvjX"),
                l = n("/7QA"),
                d = n("N3I0"),
                c = n("8/mp"),
                u = n("f00E"),
                p = n("H/lO"),
                m = n("NZDK"),
                h = n("yR8l"),
                g = n("DMoW"),
                f = n("GIun"),
                v = n("Ue10"),
                b = function(e) {
                    var t, n = e.onClick,
                        a = e.tag;
                    n && (t = function() {
                        return n(a)
                    });
                    var i = "localizedDescription" in e.tag ? e.tag.localizedDescription : void 0;
                    return r.createElement(f.a, null, r.createElement(v.Ua, {
                        onClick: t
                    }, r.createElement(v.Xa, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(v.W, {
                        title: i
                    }, a.localizedName))))
                },
                E = n("y5I9"),
                y = n("Ryvb");
            ! function(e) {
                e.SuggestedTags = "suggested-tags"
            }(a || (a = {}));
            var C, _, T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            filteredTopTags: t.props.data.game && t.props.data.game.tags && t.props.data.game.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(e) {
                                return !t.props.selectedTagIDs.includes(e.id)
                            }).slice(0, 7) || []
                        }, t.renderTags = function() {
                            if (!t.props.data.game || !t.props.data.game.tags || !t.state.filteredTopTags) return null;
                            var e;
                            return e = t.state.filteredTopTags.map(t.renderSuggestedTag), r.createElement(v.Xa, {
                                padding: {
                                    bottom: 1
                                }
                            }, e)
                        }, t.renderSuggestedTag = function(e) {
                            return r.createElement(b, {
                                "data-test-selector": a.SuggestedTags,
                                key: e.id,
                                onClick: function() {
                                    return t.props.onAddTag(e)
                                },
                                tag: e
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.data.game,
                            n = e.data.game;
                        if (Object(E.a)(this.props.selectedTagIDs, e.selectedTagIDs) || Object(E.b)(t && t.tags, n && n.tags)) {
                            var a = n && n.tags && n.tags.filter(function(e) {
                                return !e.isAutomated
                            }).filter(function(t) {
                                return !e.selectedTagIDs.includes(t.id)
                            }).slice(0, 7) || [];
                            this.setState({
                                filteredTopTags: a
                            })
                        }
                    }, t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error ? null : this.props.data.game && this.props.data.game.tags && 0 !== this.props.data.game.tags.length && this.state.filteredTopTags && 0 !== this.state.filteredTopTags.length ? r.createElement(v.Xa, null, r.createElement(v.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            bold: !0
                        }, Object(l.d)("Suggestions", "TagSuggestions"))), this.renderTags(), r.createElement(v.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            bold: !0
                        }, Object(l.d)("All Tags", "AllTagsTitle")))) : null
                    }, t
                }(r.Component),
                D = Object(h.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                tagType: g.X.TOP,
                                limit: 50
                            }
                        }
                    }
                })(T),
                S = n("TCeE"),
                k = n("79jw"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderTags = function() {
                            return t.props.categoryName ? t.props.data.game && t.props.data.game.tags && 0 !== t.props.data.game.tags.length ? t.props.data.game.tags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null : t.props.data.topTags && 0 !== t.props.data.topTags.length ? t.props.data.topTags.slice().sort(function(e, t) {
                                return e.localizedName.localeCompare(t.localizedName)
                            }).map(t.renderTag) : null
                        }, t.renderTag = function(e) {
                            var n = t.props.categoryName ? S.b.Category : S.b.All;
                            return r.createElement(f.a, {
                                key: e.id
                            }, r.createElement(v.Ua, {
                                onClick: function() {
                                    return t.props.onAddTag(e, n)
                                }
                            }, r.createElement(v.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, e.localizedName || e.tagName)))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.error ? null : this.props.data.loading ? r.createElement(v.Xa, {
                            display: v.X.Flex,
                            justifyContent: v.Wa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Za, null)) : r.createElement(v.Xa, null, this.renderTags())
                    }, t
                }(r.Component),
                O = Object(s.compose)(Object(h.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                categoryName: e.categoryName,
                                limit: e.tagsLimit || 5,
                                showTopTagsByCategory: !!e.categoryName
                            }
                        }
                    }
                }))(w),
                M = n("sLmD"),
                I = n("AZIu"),
                V = n("4HIT");
            n("97MP");
            ! function(e) {
                e[e.TagAll = 0] = "TagAll", e[e.TagAllMinusAutomation = 1] = "TagAllMinusAutomation", e[e.TagCategory = 2] = "TagCategory", e[e.StreamTag = 3] = "StreamTag"
            }(C || (C = {})),
            function(e) {
                e.SearchContent = "tag-search-search-content", e.SearchDropdown = "search-dropdown-selector"
            }(_ || (_ = {}));
            var x = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isOpen: !1,
                            searching: !1,
                            searchTerm: ""
                        }, n.languageCode = Object(M.a)(), n.renderSearchContent = function() {
                            var e = null;
                            return e = n.props.type === C.StreamTag ? n.renderStreamTagResults() : n.renderTagResults(), r.createElement(c.b, {
                                className: "tag-search__scrollable-area",
                                suppressScrollX: !0
                            }, r.createElement(v.Xa, {
                                "data-test-selector": _.SearchContent
                            }, n.renderSuggestedTags(), e))
                        }, n.renderTagSearchResult = function(e) {
                            var t = Object(M.b)(e, n.props.type === C.TagAllMinusAutomation),
                                a = "tag_scope" in e ? e.tag_scope : void 0;
                            return r.createElement(b, {
                                key: t.id,
                                onClick: function() {
                                    return n.onTagResultSelected(t, a)
                                },
                                tag: t
                            })
                        }, n.renderStreamTagResults = function() {
                            return n.props.type === C.StreamTag && n.state.isOpen ? "" === n.state.searchTerm ? r.createElement(O, {
                                categoryName: n.props.categoryName,
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.streamTags && n.state.searchResults.streamTags.hits.length ? n.state.searchResults.streamTags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.renderTagResults = function() {
                            return n.state.isOpen ? n.props.type === C.TagAll && "" === n.state.searchTerm ? r.createElement(O, {
                                onAddTag: n.onTagResultSelected,
                                tagsLimit: 100
                            }) : !n.state.searchResults && n.state.searching ? n.renderLoading() : n.state.searchResults && n.state.searchResults.tags && n.state.searchResults.tags.hits.length ? n.state.searchResults.tags.hits.map(n.renderTagSearchResult) : n.renderNoResults() : null
                        }, n.setTagSearchRef = function(e) {
                            n.tagSearch = e
                        }, n.onTagResultSelected = function(e, t) {
                            if (n.toggleTagSearch(!1), n.clearSearchTerm(), n.props.type === C.TagCategory && t === S.b.All ? l.p.history.push(V.a.Popular) : n.props.type === C.TagAll && t === S.b.Category && l.p.history.push(V.a.Games), n.props.onTagClick && (n.props.onTagClick(e, t), n.props.section && n.props.numSelectedTags)) {
                                var a = {
                                    section: n.props.section,
                                    tagPosition: n.props.numSelectedTags,
                                    searchEvent: !0,
                                    tagId: e.id,
                                    dismiss: !1
                                };
                                Object(I.b)(a)
                            }
                        }, n.onInputChange = function(e) {
                            n.props.onInputChange && n.props.onInputChange(e), clearTimeout(n.inputTimeout), n.toggleTagSearch(!0), n.setState({
                                searchTerm: e,
                                searching: !0
                            }, function() {
                                (n.props.type !== C.TagAll && n.props.type !== C.StreamTag || n.props.type === C.TagAll && "" !== n.state.searchTerm || n.props.type === C.StreamTag && "" !== n.state.searchTerm) && (n.inputTimeout = setTimeout(function() {
                                    n.search(n.state.searchTerm)
                                }, 200))
                            })
                        }, n.onFocusInput = function() {
                            "" === n.state.searchTerm ? n.onInputChange("") : n.toggleTagSearch(!0)
                        }, n.onSearchClose = function() {
                            n.toggleTagSearch(!1)
                        }, n.toggleTagSearch = function(e) {
                            n.tagSearch && n.tagSearch.toggle(e), n.setState({
                                isOpen: e
                            })
                        }, n.clearSearchTerm = function() {
                            n.tagSearch && n.tagSearch.setValue(""), n.setState({
                                searchTerm: "",
                                searching: !1
                            })
                        }, n.searchClient = new m.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        }), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(d.a, {
                            autoFocus: this.props.autoFocus,
                            "data-test-selector": _.SearchDropdown,
                            inline: this.props.inline,
                            inputSize: this.props.inputSize,
                            onChange: this.onInputChange,
                            onFocusInput: this.onFocusInput,
                            onClose: this.onSearchClose,
                            placeholder: Object(l.d)("Search Tags", "TagSearch"),
                            ref: this.setTagSearchRef
                        }, this.renderSearchContent())
                    }, t.prototype.renderLoading = function() {
                        return r.createElement(v.Xa, {
                            display: v.X.Flex,
                            justifyContent: v.Wa.Center,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, r.createElement(v.Za, {
                            delay: 0
                        }))
                    }, t.prototype.renderNoResults = function() {
                        return this.state.searching ? null : r.createElement(v.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(l.d)("No results found", "TagSearch"))
                    }, t.prototype.renderSuggestedTags = function() {
                        if (this.props.type !== C.TagAllMinusAutomation || "" !== this.state.searchTerm) return null;
                        var e = this.props.selectedTags && this.props.selectedTags.map(function(e) {
                            return e.id
                        }) || [];
                        return r.createElement(v.Xa, null, r.createElement(D, {
                            gameName: this.props.categoryName,
                            onAddTag: this.onTagResultSelected,
                            selectedTagIDs: e
                        }))
                    }, t.prototype.search = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = e || "", t = {
                                            hitsPerPage: 100,
                                            restrictSearchableAttributes: ["localizations." + this.languageCode, "tag_name"]
                                        }, n = p.a.Tags, this.props.type === C.TagAllMinusAutomation ? (t.facetFilters = '["automated:false", "tag_scope:' + S.b.All + '"]', this.props.showAllDashboardTags && (t.hitsPerPage = 300)) : this.props.type === C.TagAll ? this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:" + S.b.All : t.facetFilters = '[["tag_scope:' + S.b.All + '", "tag_scope:' + S.b.Category + '"]]' : this.props.type === C.TagCategory ? "" === e || this.props.selectedTags && this.props.selectedTags.length ? t.facetFilters = "tag_scope:" + S.b.Category : t.facetFilters = '[["tag_scope:' + S.b.All + '", "tag_scope:' + S.b.Category + '"]]' : this.props.type === C.StreamTag && (n = p.a.StreamTags, t.facetFilters = "category_id:" + this.props.categoryID), [4, this.searchClient.queryForType(n, e, u.a(), t)];
                                    case 1:
                                        return a = i.sent(), this.setState({
                                            searchResults: a,
                                            searching: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(r.Component),
                A = Object(s.compose)(o.a)(x);
            n.d(t, "b", function() {
                return C
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, !1, function() {
                return x
            }), n.d(t, "a", function() {
                return A
            })
        },
        CbMu: function(e, t, n) {
            "use strict";
            var a = n("mrSG");
            var i = n("Wwq8");

            function r(e) {
                return {
                    end_time: new Date(e.endTime).toISOString(),
                    description: e.description,
                    start_time: new Date(e.startTime).toISOString(),
                    title: e.title,
                    cover_image_id: e.imageID,
                    cover_image_url: e.imageUrl,
                    game_id: parseInt(e.game.id, 10),
                    time_zone_id: e.timeZoneID,
                    language: e.language
                }
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var o = function(e) {
                    var t = {
                        description: e.description || "",
                        imageUrl: e.imageUrl || "",
                        title: e.title || ""
                    };
                    return a.__assign({
                        endTime: e.endTime,
                        gameID: e.game.id,
                        gameName: e.game.name,
                        language: e.language,
                        startTime: e.startTime,
                        timeZoneID: e.timeZoneID || Object(i.a)()
                    }, t)
                },
                s = function(e, t, n) {
                    var i = n,
                        r = a.__assign({}, e);
                    return i || (i = function(e, t) {
                        void 0 === t && (t = {});
                        var n = new Date;
                        n.setHours(n.getHours() + 12);
                        var i = new Date;
                        return i.setHours(i.getHours() + 12), a.__assign({
                            __typename: "EventModel",
                            id: null,
                            eventID: null,
                            title: "",
                            imageID: null,
                            imageUrl: null,
                            description: null,
                            ownerID: e,
                            game: {
                                __typename: "Game",
                                id: "",
                                name: ""
                            },
                            language: "",
                            startTime: n,
                            endTime: i,
                            timeZoneID: "America/Los_Angeles"
                        }, t)
                    }(t, r)), r.gameID && r.gameName && (i.game.id = r.gameID, i.game.name = r.gameName, delete r.gameID, delete r.gameName), a.__assign({}, i, r)
                }
        },
        CcE2: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("DOqp"), {
                    onConfirm: "ON_CONFIRM",
                    onCancel: "ON_CANCEL"
                }),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onConfirm = function() {
                            t.props.closeModal(), setTimeout(function() {
                                t.props.onConfirm()
                            }, 0)
                        }, t.onCancel = function() {
                            t.props.closeModal(), t.props.onCancel && t.props.onCancel()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Eb, {
                            className: "vm-edit-cancel-modal",
                            background: r.r.Base,
                            padding: 2
                        }, i.createElement(r.Xa, null, i.createElement(r.W, {
                            type: r.Vb.H3
                        }, this.props.title), i.createElement(r.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.props.body), i.createElement(r.Xa, {
                            padding: 1,
                            display: r.X.Flex,
                            justifyContent: r.Wa.End,
                            alignItems: r.f.End,
                            alignContent: r.e.End
                        }, i.createElement(r.Xa, null, i.createElement(r.z, {
                            type: r.F.Default,
                            onClick: this.onConfirm,
                            "data-test-selector": o.onConfirm,
                            "data-a-target": "on-confirm"
                        }, this.props.okText)), i.createElement(r.Xa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(r.z, {
                            type: r.F.Hollow,
                            onClick: this.onCancel,
                            "data-test-selector": o.onCancel
                        }, this.props.cancelText)))))
                    }, t
                }(i.PureComponent);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return s
            })
        },
        DG6M: function(e, t, n) {},
        DOqp: function(e, t, n) {},
        EdhP: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return d
            });
            var a = n("mrSG"),
                i = n("cr+I"),
                r = n("/7QA"),
                o = n("vRsq"),
                s = {
                    height: 378,
                    width: 620,
                    allowScrolling: !0,
                    allowFullscreen: !0
                };

            function l(e, t) {
                return d(function(e) {
                    e.video && (e.video = Object(o.p)(e.video));
                    var t = i.stringify(e);
                    return r.p.config.playerBaseURL + "/?" + t
                }(e), t)
            }

            function d(e, t) {
                void 0 === t && (t = s);
                var n = a.__assign({}, s, t),
                    i = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
                return n.textLink && (i += function(e, t) {
                    return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
                }(n.textLink.url, n.textLink.text)), i
            }
        },
        ErfU: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "contentTag"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tag"
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
                                value: "tagName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isAutomated"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedDescription"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 88
                }
            };
            n.loc.source = {
                body: "fragment contentTag on Tag {\nid\ntagName\nlocalizedName\nisAutomated\nlocalizedDescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        EuPq: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClickHandler = function(e) {
                            t.props.onClick && t.props.onClick(), e.currentTarget.select()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Ra, {
                            readOnly: !0,
                            type: r.Ta.Text,
                            value: this.props.value,
                            onClick: this.handleClickHandler
                        })
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return o
            })
        },
        FsIG: function(e, t, n) {
            "use strict";

            function a(e) {
                return e || ""
            }

            function i(e) {
                return e ? e.toString() : ""
            }
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            })
        },
        G6Bw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoManager_Utils_Tracking_Video"
                    },
                    variableDefinitions: [{
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
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
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
                    end: 103
                }
            };
            n.loc.source = {
                body: "query VideoManager_Utils_Tracking_Video($videoID: ID) {\nvideo(id: $videoID) {\nid\nowner {\nid\nlogin\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return i
            })
        },
        GckV: function(e, t, n) {},
        HEef: function(e, t, n) {},
        HEnu: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("NAv5"),
                r = n("FOa4"),
                o = n("q1tI"),
                s = n("Ue10"),
                l = (n("WHSC"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setInputRef = function(e) {
                            return t.textInput = e
                        }, t.setContainerRef = function(e) {
                            return t.containerElement = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this._picker = new r({
                            field: this.textInput,
                            onSelect: this.props.onChange,
                            theme: "inline",
                            minDate: this.props.minDate,
                            maxDate: this.props.maxDate,
                            defaultDate: this.props.defaultDate,
                            setDefaultDate: !0,
                            container: this.containerElement,
                            format: "MMMM D, YYYY",
                            toString: function(e, t) {
                                return Object(i.format)(e, t)
                            }
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        (this.dateDidChange(e.minDate, this.props.minDate) || this.dateDidChange(e.maxDate, this.props.maxDate)) && this.setDateRangeIfPresent(this.props.minDate, this.props.maxDate), this.dateDidChange(e.defaultDate, this.props.defaultDate) && this.setDate(this.props.defaultDate)
                    }, t.prototype.render = function() {
                        var e = this.props.inputProps;
                        return o.createElement(s.Xa, {
                            className: "date-picker",
                            "data-a-target": "date-picker"
                        }, o.createElement(s.Ra, a.__assign({
                            type: s.Ta.Text,
                            refDelegate: this.setInputRef
                        }, e)), o.createElement("div", {
                            className: "date-picker__container",
                            ref: this.setContainerRef
                        }))
                    }, t.prototype.setDate = function(e) {
                        e || (this.textInput.value = ""), this._picker.setDate(e || new Date, !0)
                    }, t.prototype.setDateRangeIfPresent = function(e, t) {
                        e && this._picker.setMinDate(e), t && this._picker.setMaxDate(t)
                    }, t.prototype.dateDidChange = function(e, t) {
                        return (e ? e.getTime() : null) !== (t ? t.getTime() : null)
                    }, t
                }(o.Component));
            n.d(t, "a", function() {
                return l
            })
        },
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var a = n("NAv5"),
                i = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function r(e, t) {
                return Object(a.format)(e, t)
            }

            function o(e) {
                return Object(a.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var a = parseInt(n[0], 10),
                    i = parseInt(n[1].substring(0, 2), 10),
                    r = n[1].substring(n[1].length - 2);
                if (12 === a && "am" === r && (a = 0), "pm" === r && a < 12 && (a += 12), isNaN(a) || a < 0 || a > 23 || isNaN(i) || i < 0 || i > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(a, i), o
            }
        },
        HNnW: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff8445933141.png"
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("/7QA"),
                i = [{
                    code: "ar",
                    label: "العربية"
                }, {
                    code: "bg",
                    label: "Български"
                }, {
                    code: "cs",
                    label: "Čeština"
                }, {
                    code: "da",
                    label: "Dansk"
                }, {
                    code: "de",
                    label: "Deutsch"
                }, {
                    code: "el",
                    label: "Ελληνικά"
                }, {
                    code: "en",
                    label: "English"
                }, {
                    code: "es",
                    label: "Español"
                }, {
                    code: "fi",
                    label: "Suomi"
                }, {
                    code: "fr",
                    label: "Français"
                }, {
                    code: "hu",
                    label: "Magyar"
                }, {
                    code: "it",
                    label: "Italiano"
                }, {
                    code: "ja",
                    label: "日本語"
                }, {
                    code: "ko",
                    label: "한국어"
                }, {
                    code: "nl",
                    label: "Nederlands"
                }, {
                    code: "no",
                    label: "Norsk"
                }, {
                    code: "pl",
                    label: "Polski"
                }, {
                    code: "pt",
                    label: "Português"
                }, {
                    code: "ro",
                    label: "Română"
                }, {
                    code: "ru",
                    label: "Русский"
                }, {
                    code: "sk",
                    label: "Slovenčina"
                }, {
                    code: "sv",
                    label: "Svenska"
                }, {
                    code: "th",
                    label: "ภาษาไทย"
                }, {
                    code: "tr",
                    label: "Türkçe"
                }, {
                    code: "vi",
                    label: "Tiếng Việt"
                }, {
                    code: "zh-hk",
                    label: "中文(粵語)"
                }, {
                    code: "zh",
                    label: "中文"
                }];

            function r(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(i.concat(r()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = a.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, n) {
                    var a = t(e),
                        i = t(n);
                    return a !== i ? a - i : a + ":" + e.label < i + ":" + n.label ? -1 : 1
                }).concat(r(!0))
            }
        },
        HXKT: function(e, t, n) {},
        HkCh: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoManager_User"
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
                                        value: "displayName"
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
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                                        value: "campaignProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "domains"
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
                                        value: "isEmailVerified"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
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
                                                value: "isAffiliate"
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
                    end: 299
                }
            };
            n.loc.source = {
                body: "query VideoManager_User($login: String!) {\ncurrentUser {\nid\nlogin\ndisplayName\nroles {\nisSiteAdmin\nisStaff\nisAffiliate\nisPartner\n}\n}\nuser(login: $login) {\nid\nlogin\ncampaignProperties {\ndomains\n}\ndisplayName\nisEmailVerified\nroles {\nisAffiliate\nisPartner\nisSiteAdmin\nisStaff\nisPartner\nisAffiliate\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        IItH: function(e, t) {},
        Iqxx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "broadcastTagFragment"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Tag"
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
                                value: "localizedName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tagName"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isAutomated"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "localizedDescription"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 98
                }
            };
            n.loc.source = {
                body: "fragment broadcastTagFragment on Tag {\nid\nlocalizedName\ntagName\nisAutomated\nlocalizedDescription\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JNgr: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("5e4V"),
                i = function() {
                    return Object(a.b)()[0] || "en"
                }
        },
        JVvM: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return v
            });
            var a, i, r, o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                d = n("u3aQ"),
                c = n.n(d),
                u = n("HNnW"),
                p = n.n(u),
                m = n("GnwI"),
                h = n("Ue10");
            n("Bucx");
            ! function(e) {
                e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
            }(i || (i = {})),
            function(e) {
                e.Half = "160", e.Full = "320"
            }(r || (r = {}));
            var g = ((a = {})[r.Half] = c.a, a[r.Full] = p.a, a),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imageLoadError: !1
                        }, t.onErrorHandler = function() {
                            t.props.latencyTracking.reportInteractive(), t.setState({
                                imageLoadError: !0
                            })
                        }, t.onLoadHandler = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, a = null;
                        "number" == typeof this.props.videoCount && (a = s.createElement(h.Xa, {
                            position: h.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, s.createElement(h.Eb, {
                            alignItems: h.f.Center,
                            attachRight: !0,
                            className: "collection-preview-image__wrapper",
                            color: h.O.Overlay,
                            display: h.X.InlineFlex,
                            flexDirection: h.Aa.Column,
                            fontSize: h.Ca.Size5,
                            fullHeight: !0,
                            justifyContent: h.Wa.Center,
                            position: h.jb.Absolute,
                            textAlign: h.Rb.Center
                        }, s.createElement(h.sb, {
                            asset: h.tb.Collections,
                            height: 20,
                            width: 20
                        }), s.createElement(h.W, {
                            "data-test-selector": i.VideoCountOverlayText
                        }, Object(l.d)("{videoCount, plural, one {# video} other {# videos}}", {
                            videoCount: this.props.videoCount.toString()
                        }, "CollectionCard")))));
                        var o = r.Full;
                        return this.props.fallbackSize && (o = this.props.fallbackSize), !this.props.src || this.state.imageLoadError ? (t = g[o], (e = {})[o + "w"] = t, n = e) : (t = this.props.src, n = this.props.srcSet), s.createElement(h.Xa, {
                            position: h.jb.Relative
                        }, s.createElement(h.S, {
                            alt: this.props.alt,
                            onError: this.onErrorHandler,
                            onLoad: this.onLoadHandler,
                            src: t,
                            srcSet: n,
                            sizes: this.props.sizes
                        }), a)
                    }, t
                }(s.Component),
                v = Object(m.b)("CollectionPreviewImage")(f)
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function a(e) {
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
            n.d(t, "a", function() {
                return a
            })
        },
        KGBd: function(e, t, n) {
            "use strict";

            function a(e, t, n, a, i, r, o) {
                var s = document.createElement("canvas");
                s.width = r, s.height = o;
                var l = s.getContext("2d"),
                    d = "";
                if (l) {
                    var c = new Image;
                    c.src = e, l.drawImage(c, t, n, a, i, 0, 0, r, o), d = s.toDataURL("image/png")
                }
                return s.remove(), d
            }
            n.d(t, "a", function() {
                return a
            })
        },
        KYAw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("mrSG"),
                i = n("cr+I"),
                r = n("Addw");

            function o(e, t) {
                var n = new URL("https://www.twitch.tv/collections/" + e);
                return t && (n.search = i.stringify(t)), n.toString()
            }

            function s(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = i.stringify(a.__assign({}, t, {
                    t: "number" == typeof t.t ? Object(r.a)(t.t) : void 0
                }))), n.toString()
            }
        },
        L7EG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_TrackingVideoContext"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                        value: "videoID"
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
                    end: 156
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_TrackingVideoContext($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        LUgQ: function(e, t, n) {},
        Lxz1: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return o
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "b", function() {
                return m
            });
            var a, i = n("/7QA"),
                r = n("2/NB"),
                o = function(e, t) {
                    return Object(i.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                s = function(e, t) {
                    return Object(i.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                        imageDimensions: e,
                        imageFileMegabytes: t
                    }, "ImageUploader")
                },
                l = function(e) {
                    return Object(i.d)("Couldn't upload image. Request returned {statusCode, number}", {
                        statusCode: e
                    }, "ImageUploader")
                },
                d = function() {
                    return Object(i.d)("The provided image does not have the required dimensions.", "ImageUploader")
                },
                c = function() {
                    return Object(i.d)("File too large.", "ImageUploader")
                },
                u = function() {
                    return Object(i.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
                },
                p = ((a = {})[r.a.JPEG] = "JPG", a[r.a.PNG] = "PNG", a[r.a.GIF] = "GIF", a),
                m = function(e) {
                    var t = e.map(function(e) {
                        return p[e]
                    });
                    return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(i.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                        allowedTypes: t.join(", ")
                    }, "ImageUploader")
                }
        },
        LyrF: function(e, t, n) {},
        MxAq: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("kRBY"),
                o = n("SiBg"),
                s = (n("zHWM"), n("mrSG")),
                l = n("q1tI"),
                d = n("/7QA"),
                c = n("hyVY"),
                u = n("GnwI"),
                p = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeHandler = function() {
                            return t.props.onSelected(t.props.collection)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(p.Xa, {
                            display: p.X.Flex
                        }, l.createElement(p.Xa, {
                            padding: 2
                        }, l.createElement(p.N, {
                            label: "",
                            onChange: this.onChangeHandler,
                            checked: this.props.videoIsInCollection
                        })), l.createElement(p.Xa, {
                            padding: 1
                        }, l.createElement(p.I, {
                            aspect: p.p.Aspect16x9,
                            alt: this.props.collection.title,
                            src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            size: p.J.Size8
                        })), l.createElement(p.Xa, {
                            padding: 1,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, l.createElement(p.Xa, null, l.createElement(p.W, {
                            ellipsis: !0
                        }, this.props.collection.title)), l.createElement(p.Xa, {
                            display: p.X.Flex
                        }, l.createElement(p.Xa, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(p.W, null, Object(d.d)("{videoCount} video", {
                            videoCount: this.props.collection.itemsCount
                        }, "CollectionRowPresentation"))), l.createElement(p.Xa, {
                            padding: {
                                x: 1
                            }
                        }, l.createElement(p.W, null, "·")), l.createElement(p.Xa, {
                            padding: {
                                left: 1
                            }
                        }, l.createElement(p.W, null, Object(c.b)(this.props.collection.totalDuration))))))
                    }, t
                }(l.Component),
                h = Object(u.b)("CollectionRow")(m),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onCollectionRowChange = function(e) {
                            t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID, t.props.trackingPlace)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.channelID && this.props.videoID && this.props.collections ? l.createElement(p.Xa, null, this.props.collections.map(function(t) {
                            return l.createElement(h, {
                                key: t.id,
                                collection: t,
                                videoIsInCollection: e.props.containingCollections.map(function(e) {
                                    return e.id
                                }).indexOf(t.id) > -1,
                                onSelected: e.onCollectionRowChange
                            })
                        })) : l.createElement(p.Xa, null)
                    }, t
                }(l.Component),
                f = Object(u.b)("CollectionsListPresentation")(g);
            var v = Object(a.connect)(function(e) {
                    return {
                        isLoggedIn: Object(r.f)(e),
                        collections: e.collections.collections,
                        containingCollections: e.collections.containingCollections
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        fetchCollectionsForVideo: o.e,
                        updateItemInCollection: o.f
                    }, e)
                })(f),
                b = n("JVvM");
            n.d(t, "b", function() {
                return v
            }), n.d(t, "a", function() {
                return b.a
            })
        },
        N1GE: function(e, t, n) {},
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("u5aL"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = function() {
                    return i.createElement(s.Xa, {
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: s.ic.Above
                    }, i.createElement(s.Eb, {
                        color: s.O.Alt2,
                        textAlign: s.Rb.Center,
                        flexShrink: 1
                    }, i.createElement(s.sb, {
                        asset: s.tb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), i.createElement(s.Pa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Rb.Center
                    }, i.createElement(s.W, {
                        type: s.Vb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), i.createElement(s.W, {
                        type: s.Vb.P
                    }, Object(o.d)("Please try again later", "DropdownSearchError")))
                },
                d = n("8Ad5"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === d.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === d.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === d.a.Down && (n(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var n = e.target.closest("[data-selectable]");
                            n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: n
                            }), t.props.onFocusChange && t.props.onFocusChange(n))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? i.createElement(l, null) : i.Children.only(this.props.children),
                            n = i.createElement(s.vb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, i.createElement(s.Eb, {
                            background: this.state.isInputFocused || this.state.isOpen ? s.r.Base : void 0,
                            borderRadius: s.x.Large,
                            padding: .5,
                            position: s.jb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && i.createElement(s.Eb, {
                            attachLeft: !0,
                            background: s.r.Base,
                            borderRadius: s.x.Large,
                            display: this.state.isOpen ? s.X.Block : s.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.jb.Absolute,
                            zIndex: s.ic.Above,
                            elevation: 3
                        }, i.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : i.createElement(r.a, {
                            onClickOut: this.onClickOut
                        }, n, e && i.createElement(s.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), i.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            a = document.activeElement,
                            i = Array.prototype.indexOf.call(n, a);
                        if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                            var r = n.item(t);
                            r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: r
                            }), this.props.onFocusChange && this.props.onFocusChange(r)
                        }
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        NLLf: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("/ZC1"),
                s = n("Ue10"),
                l = (n("aDUZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.a, {
                            allowedFileTypes: this.props.allowedFileTypes,
                            onFilesSubmitted: this.props.processFiles,
                            error: !!this.props.errorMessage
                        }, i.createElement(s.Xa, {
                            className: "image-uploader",
                            textAlign: s.Rb.Center,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Center,
                            position: s.jb.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, this.renderErrorMessage(), i.createElement(s.Xa, {
                            position: s.jb.Relative
                        }, i.createElement(s.Xa, {
                            className: "image-uploader__upload-svg--anim-backfill"
                        }, i.createElement(s.sb, {
                            asset: s.tb.Upload,
                            type: s.ub.Alt2,
                            width: this.props.iconWidth || 99,
                            height: this.props.iconWidth || 76
                        })), i.createElement(s.Xa, {
                            className: "image-uploader__upload-svg--anim-fill",
                            position: s.jb.Absolute,
                            display: this.props.isLoading ? s.X.Block : s.X.Hide,
                            attachTop: !0
                        }, i.createElement(s.sb, {
                            asset: s.tb.Upload,
                            type: s.ub.Brand,
                            width: this.props.iconWidth || 99,
                            height: this.props.iconHeight || 76
                        }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                    }, t.prototype.renderLoadingState = function() {
                        return i.createElement(s.Xa, {
                            margin: 1,
                            "data-test-selector": "image-uploader-loading"
                        }, i.createElement(s.W, {
                            type: s.Vb.H4
                        }, Object(r.d)("Uploading", "ImageUploader")))
                    }, t.prototype.renderNormalState = function() {
                        var e = Object(r.d)("Browse", "ImageUploader");
                        return i.createElement(s.Xa, null, i.createElement(s.Xa, null, i.createElement(s.W, {
                            type: s.Vb.H4
                        }, Object(r.d)("Drag and drop your image here", "ImageUploader"))), i.createElement(s.Xa, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                x: 1,
                                y: 0
                            },
                            fullWidth: !0,
                            "data-test-selector": "image-uploader-hint"
                        }, i.createElement(s.W, {
                            type: s.Vb.P,
                            fontSize: s.Ca.Size7,
                            color: s.O.Alt2
                        }, this.props.hintMessage)), i.createElement(s.Xa, null, i.createElement(s.z, {
                            ariaLabel: e,
                            type: s.F.Hollow
                        }, e)))
                    }, t.prototype.renderErrorMessage = function() {
                        if (this.props.errorMessage) return i.createElement(s.Xa, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "image-uploader-error"
                        }, i.createElement(s.W, {
                            type: s.Vb.H5,
                            color: s.O.Error,
                            bold: !0
                        }, this.props.errorMessage))
                    }, t
                }(i.Component)),
                d = n("2/NB"),
                c = n("Lxz1"),
                u = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            isLoading: !1,
                            errorMessage: "",
                            hintMessage: "",
                            allowedFileTypes: d.b
                        }, n.processFiles = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = e[0], this.setState({
                                                errorMessage: "",
                                                isLoading: !0
                                            }), this.isFileTypeAcceptable(t) ? [3, 1] : (this.setState({
                                                errorMessage: Object(c.b)(this.state.allowedFileTypes),
                                                isLoading: !1
                                            }), [3, 5]);
                                        case 1:
                                            return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                                errorMessage: Object(c.a)(),
                                                isLoading: !1
                                            }), [3, 5]);
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, this.props.provider.uploadFile(t)];
                                        case 3:
                                            return a.sent(), this.props.onClose && this.props.onClose(), [3, 5];
                                        case 4:
                                            return n = a.sent(), this.setState({
                                                errorMessage: n.message,
                                                isLoading: !1
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.allowedFileTypes && (n.state.allowedFileTypes = t.allowedFileTypes), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = "";
                        e = this.props.isRequiredImageDimensions ? Object(c.g)(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : Object(c.f)(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                            hintMessage: e
                        })
                    }, t.prototype.render = function() {
                        return i.createElement(l, {
                            allowedFileTypes: this.state.allowedFileTypes,
                            errorMessage: this.state.errorMessage,
                            hintMessage: this.state.hintMessage,
                            isLoading: this.state.isLoading,
                            processFiles: this.processFiles,
                            iconHeight: this.props.iconHeight,
                            iconWidth: this.props.iconWidth
                        })
                    }, t.prototype.isFileTypeAcceptable = function(e) {
                        return this.state.allowedFileTypes.includes(e.type)
                    }, t.prototype.isFileSizeAcceptable = function(e) {
                        var t = 1048576 * this.props.maxFileSizeMegabytes;
                        return e.size <= t
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return u
            })
        },
        "O/Ab": function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("17x9"),
                o = n("q1tI"),
                s = n("kSZU"),
                l = n("/7QA"),
                d = n("2xye");

            function c(e) {
                var t = e.action,
                    n = e.type;
                l.o.track(d.SpadeEventType.LiveDashboardBannerInteraction, {
                    action: t,
                    type: n
                })
            }! function(e) {
                e.Impression = "impression", e.Click = "click", e.Dismiss = "dismiss"
            }(a || (a = {}));
            var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onMountWithTracking = function() {
                        t.props.onMount && t.props.onMount(), c({
                            action: a.Impression,
                            type: t.props.trackingType
                        })
                    }, t.onDismissWithTracking = function() {
                        t.props.onDismiss(), c({
                            action: a.Dismiss,
                            type: t.props.trackingType
                        })
                    }, t.onButtonClickWithTracking = function() {
                        t.props.onButtonClick && t.props.onButtonClick(), c({
                            action: a.Click,
                            type: t.props.trackingType
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.context.claimSlot(this.context.announcementID, this.onDismissWithTracking)
                }, t.prototype.render = function() {
                    return this.context.hasSlot(this.context.announcementID) ? o.createElement(s.a, i.__assign({}, this.props, {
                        onMount: this.onMountWithTracking,
                        onDismiss: this.onDismissWithTracking,
                        onButtonClick: this.onButtonClickWithTracking
                    })) : null
                }, t.contextTypes = {
                    claimSlot: r.func,
                    hasSlot: r.func,
                    announcementID: r.string
                }, t
            }(o.Component);
            n.d(t, "a", function() {
                return u
            })
        },
        O8Bi: function(e, t) {},
        PEIf: function(e, t, n) {},
        RnhZ: function(e, t, n) {
            var a = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function i(e) {
                var t = r(e);
                return n(t)
            }

            function r(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            i.keys = function() {
                return Object.keys(a)
            }, i.resolve = r, e.exports = i, i.id = "RnhZ"
        },
        "Rw/r": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9kXc"),
                o = n("Ue10"),
                s = n("eNO8"),
                l = n("/7QA"),
                d = n("H/lO"),
                c = n("NZDK"),
                u = 10,
                p = function() {
                    return function() {
                        var e = this;
                        this.searchCode = function(t, n) {
                            return a.__awaiter(e, void 0, Promise, function() {
                                var e;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(d.a.Games, t, t, {
                                                hitsPerPage: u,
                                                page: n
                                            })];
                                        case 1:
                                            return [2, a.sent()];
                                        case 2:
                                            throw e = a.sent(), l.k.error(e, "Algolia type results search failed"), e;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.searchClient = new c.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        })
                    }
                }(),
                m = [],
                h = {
                    objectID: "",
                    name: ""
                },
                g = function(e) {
                    return {
                        objectID: "",
                        name: e
                    }
                },
                f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            n.setState({
                                isSearchPending: !0,
                                searchTerm: e,
                                nextAlgoliaPage: 0
                            }, n.triggerLoadMore)
                        }, n.triggerLoadMore = function() {
                            return n.searchClient.searchCode(n.state.searchTerm, n.state.nextAlgoliaPage).then(function(e) {
                                n.resolveLoadMore(e)
                            })
                        }, n.resolveLoadMore = function(e) {
                            if (!e || e.id === n.state.searchTerm) {
                                var t = void 0;
                                if (e) {
                                    var a = void 0;
                                    n.state.gameResults && (a = {
                                        totalHits: n.state.gameResults.length,
                                        results: n.state.gameResults
                                    });
                                    var i = Object(r.b)({
                                        searchResults: e,
                                        append: n.state.nextAlgoliaPage > 0,
                                        currentGameResults: a
                                    }).currentGameResults;
                                    t = i ? i.results : m
                                }
                                n.setState({
                                    gameResults: t,
                                    isSearchPending: !1,
                                    nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                                })
                            }
                        }, n.selectGame = function(e) {
                            if (n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title) {
                                var t = n.state.gameResults[e];
                                if (t.title) {
                                    var a = {
                                        objectID: t.id,
                                        name: t.title
                                    };
                                    n.setselectedGametate(a)
                                } else n.selectEmptyGame()
                            } else n.selectEmptyGame()
                        }, n.selectGameByName = function(e) {
                            n.setselectedGametate(g(e))
                        }, n.selectEmptyGame = function() {
                            n.setselectedGametate(h)
                        }, n.setselectedGametate = function(e) {
                            n.setState({
                                selectedGame: e,
                                searchTerm: n.props.clearOnSelect ? "" : e.name,
                                redrawKey: Math.random()
                            }, n.fireChangeGame)
                        }, n.fireChangeGame = function() {
                            n.props.onChange(n.state.selectedGame)
                        }, n.searchClient = new p, n.state = n.getInitialState(t), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.startNewSearch(this.props.currentGameTitle)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.currentGameTitle !== this.props.currentGameTitle && this.setState(this.getInitialState(e))
                    }, t.prototype.render = function() {
                        return this.props.disabled ? i.createElement("div", {
                            className: "game-selector__search-container"
                        }, i.createElement(o.Ra, {
                            value: this.props.currentGameTitle,
                            type: o.Ta.Text,
                            icon: o.tb.NavGames,
                            disabled: !0
                        })) : i.createElement(s.a, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame.name,
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.triggerLoadMore,
                            compact: this.props.compact
                        })
                    }, t.prototype.getInitialState = function(e) {
                        return {
                            searchTerm: e.currentGameTitle,
                            gameResults: m,
                            isSearchPending: !1,
                            nextAlgoliaPage: 0,
                            selectedGame: g(e.currentGameTitle),
                            redrawKey: Math.random()
                        }
                    }, t
                }(i.Component);
            n.d(t, !1, function() {
                return m
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, "a", function() {
                return f
            })
        },
        Ryvb: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SuggestedTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameName"
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
                                value: "tagType"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TagType"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "limit"
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
                                        value: "gameName"
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tagType"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastTagFragment"
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
                    end: 237
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery SuggestedTags($gameName: String! $tagType: TagType! $limit: Int!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType limit: $limit) {\n...broadcastTagFragment\n}\n}\n}',
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
            }(n("Iqxx").definitions)), e.exports = a
        },
        Rzn4: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            });
            var a = function() {
                    return (new Date).toLocaleTimeString("en-us", {
                        timeZoneName: "short"
                    }).split(" ")[2]
                },
                i = function(e) {
                    return Boolean(e.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s*(am|pm)?$/i))
                },
                r = function(e) {
                    if (e.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3])(am|pm)$/i)) {
                        var t = e.substr(e.length - 2);
                        return e.replace(t, ":00" + t)
                    }
                    return e
                }
        },
        S6wH: function(e, t, n) {
            "use strict";
            var a = n("O/Ab");
            n.d(t, "a", function() {
                return a.a
            });
            var i = n("V0eP");
            n.d(t, "c", function() {
                return i.a
            });
            var r = n("jbSU");
            n.d(t, "d", function() {
                return r.a
            });
            var o = n("i+a/");
            n.d(t, "b", function() {
                return o.a
            })
        },
        SiBg: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("8n0m"),
                o = n("b6Yk"),
                s = n("kRBY"),
                l = n("rj3Y"),
                d = n("uzvh");

            function c(e) {
                return function(t, n) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: n
                        }
                    })
                }
            }
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "f", function() {
                return E
            });
            var u = "collections.COLLECTIONS_FETCHED",
                p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                m = "collections.COLLECTIONS_FETCH_FAILED",
                h = "collections.COLLECTIONS_CREATE_FAILED",
                g = "collections.COLLECTIONS_UPDATE_FAILED";

            function f(e, t) {
                var n = this;
                return c(function(r) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, s, d;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 3, , 4]), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return n = a.sent(), r.store.dispatch({
                                        type: u,
                                        collections: Object(l.d)(n.body)
                                    }), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + l.b.Video + ":" + t)];
                                case 2:
                                    return s = a.sent(), r.store.dispatch({
                                        type: p,
                                        containingCollections: Object(l.d)(s.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return d = a.sent(), i.k.error(d, "Failed to fetch collections"), r.store.dispatch({
                                        type: m,
                                        errorType: "Fetch Failed",
                                        errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }
            var v = function(e, t) {
                return o.a.postOrThrow(e, {
                    body: t
                })
            };

            function b(e, t, n, o) {
                var d = this;
                return c(function(c) {
                    return a.__awaiter(d, void 0, void 0, function() {
                        var d, m, g, f, b, E, y, C;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    d = c.store.getState(), m = d.collections, g = Object(s.e)(d), f = g ? g.id : "", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 4, , 5]), [4, v("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return b = a.sent(), E = Object(l.c)(b.body), m.collections = [E].concat(m.collections), c.store.dispatch({
                                        type: u,
                                        collections: m.collections
                                    }), Object(r.b)({
                                        channelID: e,
                                        playlistID: E.id,
                                        userID: f,
                                        title: E.title
                                    }), y = {
                                        type: l.b.Video,
                                        id: n
                                    }, [4, v("/v5/collections/" + E.id + "/items", y)];
                                case 3:
                                    return a.sent(), m.containingCollections = [E].concat(m.containingCollections), c.store.dispatch({
                                        type: p,
                                        containingCollections: m.containingCollections,
                                        videoID: n
                                    }), Object(r.a)({
                                        channelID: e,
                                        itemID: n,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: E.id,
                                        userID: f,
                                        place: o
                                    }), [3, 5];
                                case 4:
                                    return C = a.sent(), i.k.error(C, "Failed to add new collection with video"), c.store.dispatch({
                                        type: h,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function E(e, t, n, u) {
                var m = this;
                return c(function(c) {
                    return a.__awaiter(m, void 0, void 0, function() {
                        var m, h, f, b, E, y, C, _, T;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    m = c.store.getState(), h = Object(d.a)(m), f = Object(s.e)(m), b = f ? f.id : "", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 6, , 7]), h.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (E = JSON.stringify({
                                        type: l.b.Video,
                                        id: t
                                    }), y = btoa(E), [4, o.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + y)]) : [3, 3];
                                case 2:
                                    return a.sent(), _ = h.filter(function(t) {
                                        return t.id !== e.id
                                    }), c.store.dispatch({
                                        type: p,
                                        containingCollections: _,
                                        videoID: t
                                    }), Object(r.c)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: b
                                    }), [3, 5];
                                case 3:
                                    return C = {
                                        type: l.b.Video,
                                        id: t
                                    }, [4, v("/v5/collections/" + e.id + "/items", C)];
                                case 4:
                                    a.sent(), _ = h.concat([e]), c.store.dispatch({
                                        type: p,
                                        containingCollections: _,
                                        videoID: t
                                    }), Object(r.a)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: b,
                                        place: u
                                    }), a.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return T = a.sent(), i.k.error(T, "Failed to fetch collections"), c.store.dispatch({
                                        type: g,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        TCeE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var a, i = 5;
            ! function(e) {
                e.All = "SCOPE_ALL", e.Category = "SCOPE_CATEGORY"
            }(a || (a = {}))
        },
        TUyz: function(e, t, n) {},
        "V/+G": function(e, t, n) {},
        V0eP: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("17x9"),
                r = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.context.reserveSlot(this.context.announcementID)
                    }, t.prototype.render = function() {
                        return null
                    }, t.contextTypes = {
                        reserveSlot: i.func,
                        announcementID: i.string
                    }, t
                }(n("q1tI").Component);
            n.d(t, "a", function() {
                return r
            })
        },
        VtCy: function(e, t, n) {
            "use strict";
            var a = n("y6KF");
            n.d(t, "DownloadStatus", function() {
                return a.a
            }), n.d(t, "ExportDestination", function() {
                return a.b
            }), n.d(t, "ExtraFilterType", function() {
                return a.c
            }), n.d(t, "RestrictionType", function() {
                return a.d
            }), n.d(t, "THUMBNAIL_TYPE_CUSTOM", function() {
                return a.e
            }), n.d(t, "VIDEO_STATUS_FAILED", function() {
                return a.j
            }), n.d(t, "VIDEO_STATUS_PENDING_TRANSCODE", function() {
                return a.k
            }), n.d(t, "VIDEO_STATUS_RECORDED", function() {
                return a.l
            }), n.d(t, "VIDEO_STATUS_RECORDING", function() {
                return a.m
            }), n.d(t, "VIDEO_STATUS_TRANSCODING", function() {
                return a.n
            }), n.d(t, "VIDEO_STATUS_UPLOADING", function() {
                return a.p
            }), n.d(t, "VideoPremiereStatus", function() {
                return a.q
            }), n.d(t, "VideoScope", function() {
                return a.r
            }), n.d(t, "availableVideoStatuses", function() {
                return a.s
            }), n.d(t, "pendingVideoStatuses", function() {
                return a.t
            });
            n("1G35");
            var i = n("IItH");
            n.o(i, "DropdownMenuNavDirection") && n.d(t, "DropdownMenuNavDirection", function() {
                return i.DropdownMenuNavDirection
            }), n.o(i, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
                return i.EditModalErrorOrigin
            }), n.o(i, "KEY_ADD_TO") && n.d(t, "KEY_ADD_TO", function() {
                return i.KEY_ADD_TO
            }), n.o(i, "KEY_COLLECTIONS") && n.d(t, "KEY_COLLECTIONS", function() {
                return i.KEY_COLLECTIONS
            }), n.o(i, "KEY_ROOT") && n.d(t, "KEY_ROOT", function() {
                return i.KEY_ROOT
            }), n.o(i, "NotificationType") && n.d(t, "NotificationType", function() {
                return i.NotificationType
            });
            var r = n("jQ+3");
            n.d(t, "NotificationType", function() {
                return r.a
            });
            var o = n("uNjw");
            n.o(o, "DropdownMenuNavDirection") && n.d(t, "DropdownMenuNavDirection", function() {
                return o.DropdownMenuNavDirection
            }), n.o(o, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
                return o.EditModalErrorOrigin
            }), n.o(o, "KEY_ADD_TO") && n.d(t, "KEY_ADD_TO", function() {
                return o.KEY_ADD_TO
            }), n.o(o, "KEY_COLLECTIONS") && n.d(t, "KEY_COLLECTIONS", function() {
                return o.KEY_COLLECTIONS
            }), n.o(o, "KEY_ROOT") && n.d(t, "KEY_ROOT", function() {
                return o.KEY_ROOT
            });
            var s = n("gh9h");
            n.d(t, "EditModalErrorOrigin", function() {
                return s.a
            });
            var l = n("z1lk");
            n.d(t, "DropdownMenuNavDirection", function() {
                return l.a
            }), n.d(t, "KEY_ADD_TO", function() {
                return l.b
            }), n.d(t, "KEY_COLLECTIONS", function() {
                return l.c
            }), n.d(t, "KEY_ROOT", function() {
                return l.d
            })
        },
        WHSC: function(e, t, n) {},
        Wwq8: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var a = n("wbMx");
            n.d(t, "a", function() {
                return a.a
            }), n.d(t, "b", function() {
                return a.b
            })
        },
        YwGE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = {
                    Created: "created",
                    Downloading: "downloading",
                    Transmuxing: "transmuxing",
                    Failed: "failed",
                    Complete: "complete"
                },
                i = "public"
        },
        ZYLp: function(e, t, n) {},
        ZcVA: function(e, t, n) {},
        aDUZ: function(e, t, n) {},
        bTcf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoShareBox_CollectionTrackingMeta"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "creatorID"
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
                                        value: "creatorID"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 117
                }
            };
            n.loc.source = {
                body: "query VideoShareBox_CollectionTrackingMeta($creatorID: ID!) {\nuser(id: $creatorID) {\nid\nlogin\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        dKHc: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var a, i, r = n("/7QA");
            ! function(e) {
                e.Description = "description", e.EndTime = "endTime", e.GameID = "gameID", e.GameName = "gameName", e.imageID = "imageID", e.Language = "language", e.StartTime = "startTime", e.Title = "title"
            }(i || (i = {}));
            var o = function() {
                function e(t) {
                    var n = this;
                    this.RequiredFields = [i.Title, i.Description, i.Language, i.StartTime, i.GameID, i.GameName], this.errorsForMissingFields = {}, this.validatorsForFields = {}, this.editsAreValid = function(t) {
                        t && n.updateEventEdits(t);
                        var a = n.RequiredFields.filter(n.findMissingFields);
                        a.forEach(function(t) {
                            n.errorsForMissingFields[t] = n.errorsForMissingFields[t] || [], n.errorsForMissingFields[t].push(Object(r.d)("The {fieldName} field is required", {
                                fieldName: e.FormDisplayName[t]
                            }, "EventModal"))
                        });
                        var i = n.runCustomValidators();
                        return a.length <= 0 && i
                    }, this.errorMessageFor = function(e) {
                        return n.errorsForMissingFields[e] && n.errorsForMissingFields[e].join(", ")
                    }, this.findMissingFields = function(e) {
                        var t = Object.keys(n.eventEdits).indexOf(e) < 0,
                            a = n.eventEdits[e],
                            i = Boolean(!a);
                        return "string" == typeof a && (i = !a.trim().length), t || i
                    }, this.updateEventEdits(t)
                }
                return e.prototype.getFieldErrors = function() {
                    return this.errorsForMissingFields
                }, e.prototype.addValidatorForField = function(e, t) {
                    this.validatorsForFields[t] = e
                }, e.prototype.updateEventEdits = function(e) {
                    this.eventEdits = e, this.errorsForMissingFields = {}
                }, e.prototype.runCustomValidators = function() {
                    var t = this;
                    return Object.keys(this.eventEdits).reduce(function(n, a) {
                        var i = t.validatorsForFields[a],
                            o = t.eventEdits[a];
                        return i && !i(o) ? (t.errorsForMissingFields[a] = t.errorsForMissingFields[a] || [], t.errorsForMissingFields[a].push(Object(r.d)("The {fieldName} field is invalid", {
                            fieldName: e.FormDisplayName[a]
                        }, "EventModal")), !1) : n
                    }, !0)
                }, e.FormDisplayName = ((a = {})[i.Description] = "Description", a[i.EndTime] = "End Time", a[i.GameID] = "Game", a[i.GameName] = "Game", a[i.imageID] = "Image", a[i.Language] = "Language", a[i.StartTime] = "Start Time", a[i.Title] = "Title", a), e
            }()
        },
        dzJR: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CategoryTags"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameName"
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
                                value: "tagType"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TagType"
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
                                        value: "gameName"
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
                                        value: "tags"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "tagType"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "tagType"
                                            }
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastTagFragment"
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
                    end: 209
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/broadcast-tag-fragment.gql"\nquery CategoryTags($gameName: String! $tagType: TagType!) {\ngame(name: $gameName) {\nid\ntags(tagType: $tagType) {\n...broadcastTagFragment\n}\n}\n}',
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
            }(n("Iqxx").definitions)), e.exports = a
        },
        eNO8: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("TSYQ"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("u5aL"),
                d = n("8/mp"),
                c = n("8Ad5"),
                u = n("Ue10"),
                p = function(e) {
                    return o.createElement(u.Xa, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        justifyContent: u.Wa.Center,
                        alignItems: u.f.Center,
                        position: u.jb.Absolute
                    }, o.createElement(u.Xa, {
                        textAlign: u.Rb.Center,
                        flexShrink: 1
                    }, o.createElement(u.sb, {
                        asset: e.icon,
                        width: 46,
                        height: 48,
                        type: u.ub.Alt2
                    })), o.createElement(u.Xa, {
                        margin: {
                            top: 1
                        },
                        textAlign: u.Rb.Center
                    }, o.createElement(u.W, {
                        type: u.Vb.H4,
                        color: u.O.Alt2
                    }, e.titleText)), o.createElement(u.Xa, {
                        textAlign: u.Rb.Center
                    }, o.createElement(u.W, {
                        type: u.Vb.P,
                        color: u.O.Alt2
                    }, e.subText)))
                },
                m = n("N0BP"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Ua, i.__assign({
                            onClick: this.props.onClick,
                            linkTo: this.props.linkTo,
                            hover: this.props.hover,
                            tabIndex: -1,
                            key: this.props.id
                        }, Object(m.a)(this.props)), o.createElement(u.Xa, {
                            className: "search-game-result-card",
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, o.createElement(u.G, {
                            row: !0
                        }, o.createElement(u.H, {
                            overflow: u.cb.Hidden
                        }, o.createElement(u.Pa, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(u.W, {
                            type: u.Vb.H5,
                            ellipsis: !0
                        }, this.props.title))))))
                    }, t
                }(o.Component),
                g = n("fk61");
            n("tK6h");
            n.d(t, "a", function() {
                    return v
                }),
                function(e) {
                    e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
                }(a || (a = {}));
            var f = {};
            f[c.a.Esc] = a.Dismiss, f[c.a.Enter] = a.Confirm, f[c.a.Tab] = a.Confirm, f[c.a.Up] = a.Up, f[c.a.Down] = a.Down;
            var v = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onFocus = function() {
                        n.props.searchTerm && n.setState({
                            isOpen: !0
                        })
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.handleInteraction(a.Dismiss)
                    }, n.onKeyDown = function(e) {
                        var t = f[e.keyCode];
                        t && n.handleInteraction(t)
                    }, n.handleInteraction = function(e) {
                        switch (e) {
                            case a.Dismiss:
                                "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle && n.props.initialGameTitle !== n.props.searchTerm && n.props.gameResults && n.props.gameResults[0] && n.props.gameResults[0].title === n.props.searchTerm ? n.props.selectGame(0) : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Confirm:
                                n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Up:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                });
                                break;
                            case a.Down:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.min(n.props.gameResults.length - 1, n.state.highlightedGameIndex + 1)
                                })
                        }
                    }, n.onChange = function(e) {
                        var t = e.target.value;
                        n.setState({
                            isOpen: !!t,
                            highlightedGameIndex: 0
                        }, function() {
                            n.props.startNewSearch(t)
                        })
                    }, n.onClickGame = function(e) {
                        var t = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                        n.props.selectGame(t), n.setState({
                            isOpen: !1
                        })
                    }, n.state = n.state = {
                        isOpen: !1,
                        highlightedGameIndex: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return o.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, o.createElement(l.a, {
                        onClickOut: this.onClickOut
                    }, o.createElement(u.Ra, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: u.Ta.Text,
                        icon: u.tb.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm,
                        placeholder: Object(s.d)("Type to search and add games", "VideoManagerEdit"),
                        autoComplete: "off"
                    }), o.createElement(u.u, {
                        direction: u.v.Bottom,
                        noTail: !0,
                        size: this.props.compact ? u.w.Medium : u.w.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = r("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? o.createElement(u.Za, {
                        fillContent: !0
                    }) : o.createElement(p, {
                        icon: u.tb.SearchNoResults,
                        titleText: Object(s.d)("No results found", "GameSelector"),
                        subText: Object(s.d)("They're probably in another castle", "GameSelector")
                    }) : o.createElement(p, {
                        icon: u.tb.DeadGlitch,
                        titleText: Object(s.d)("Search is not available at this time", "GameSelector"),
                        subText: Object(s.d)("Please try again later", "GameSelector")
                    })), o.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, o.createElement(u.Eb, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: u.r.Base,
                        position: u.jb.Absolute,
                        overflow: u.cb.Hidden,
                        display: u.X.Block
                    }, o.createElement(d.b, {
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, o.createElement(u.Xa, {
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, o.createElement(d.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, a, i) {
                        var r = i[t] === i[a];
                        return n.props.compact ? o.createElement(h, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: r,
                            "data-game-highlighted": r,
                            "data-game-index": a
                        }) : o.createElement(g.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: r,
                            "data-game-highlighted": r,
                            "data-game-index": a
                        })
                    })
                }, t
            }(o.Component)
        },
        gFHd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ShareVideo_Content"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                value: "collectionID"
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
                                value: "hasVideo"
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
                                value: "hasCollection"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                },
                                value: {
                                    kind: "ObjectValue",
                                    fields: [{
                                        kind: "ObjectField",
                                        name: {
                                            kind: "Name",
                                            value: "includePrivate"
                                        },
                                        value: {
                                            kind: "BooleanValue",
                                            value: !0
                                        }
                                    }]
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
                                            value: "hasVideo"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "collection"
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
                                        value: "collectionID"
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
                                            value: "hasCollection"
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
                    end: 451
                }
            };
            n.loc.source = {
                body: "query ShareVideo_Content($videoID: ID! $collectionID: ID! $hasVideo: Boolean! $hasCollection: Boolean!) {\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @include(if: $hasVideo) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $hasCollection) {\nid\nowner {\nid\ndisplayName\n}\ntitle\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gT8k: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("9kXc"),
                s = n("Ue10"),
                l = n("TSYQ"),
                d = n("/7QA"),
                c = n("u5aL"),
                u = n("8/mp"),
                p = n("8Ad5"),
                m = n("fk61"),
                h = (n("V/+G"), function(e) {
                    return r.createElement(s.Xa, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center,
                        alignItems: s.f.Center,
                        position: s.jb.Absolute
                    }, r.createElement(s.Xa, {
                        textAlign: s.Rb.Center,
                        flexShrink: 1
                    }, r.createElement(s.sb, {
                        asset: e.icon,
                        width: 46,
                        height: 48,
                        type: s.ub.Alt2
                    })), r.createElement(s.Xa, {
                        margin: {
                            top: 1
                        },
                        textAlign: s.Rb.Center
                    }, r.createElement(s.W, {
                        type: s.Vb.H4,
                        color: s.O.Alt2
                    }, e.titleText)), r.createElement(s.Xa, {
                        textAlign: s.Rb.Center
                    }, r.createElement(s.W, {
                        type: s.Vb.P,
                        color: s.O.Alt2
                    }, e.subText)))
                });
            ! function(e) {
                e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
            }(a || (a = {}));
            var g = {};
            g[p.a.Esc] = a.Dismiss, g[p.a.Enter] = a.Confirm, g[p.a.Tab] = a.Confirm, g[p.a.Up] = a.Up, g[p.a.Down] = a.Down;
            var f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onFocus = function() {
                            n.props.searchTerm && n.setState({
                                isOpen: !0
                            })
                        }, n.onClickOut = function() {
                            n.state.isOpen && n.handleInteraction(a.Dismiss)
                        }, n.onKeyDown = function(e) {
                            var t = g[e.keyCode];
                            t && n.handleInteraction(t)
                        }, n.handleInteraction = function(e) {
                            switch (e) {
                                case a.Dismiss:
                                    "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                        isOpen: !1
                                    });
                                    break;
                                case a.Confirm:
                                    n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                        isOpen: !1
                                    });
                                    break;
                                case a.Up:
                                    if (!n.props.gameResults) return;
                                    n.setState({
                                        highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                    });
                                    break;
                                case a.Down:
                                    if (!n.props.gameResults) return;
                                    n.setState({
                                        highlightedGameIndex: Math.min(n.props.gameResults.length - 1, n.state.highlightedGameIndex + 1)
                                    })
                            }
                        }, n.onChange = function(e) {
                            var t = e.target.value;
                            "" === t && n.props.selectEmptyGame(), n.setState({
                                isOpen: !!t,
                                highlightedGameIndex: 0
                            }, function() {
                                n.props.startNewSearch(t)
                            })
                        }, n.onClickGame = function(e) {
                            var t = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                            n.props.selectGame(t), n.setState({
                                isOpen: !1
                            })
                        }, n.state = n.state = {
                            isOpen: !1,
                            highlightedGameIndex: 0
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            className: "game-selector__search-container",
                            "data-click-out-id": "game-selector-search-balloon",
                            "data-a-target": "game-field",
                            onKeyDown: this.onKeyDown
                        }, r.createElement(c.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(s.Ra, {
                            key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                            type: s.Ta.Text,
                            icon: s.tb.NavGames,
                            name: "game",
                            onChange: this.onChange,
                            onFocus: this.onFocus,
                            defaultValue: this.props.searchTerm
                        }), r.createElement(s.u, {
                            direction: s.v.Bottom,
                            noTail: !0,
                            size: s.w.Large,
                            show: this.state.isOpen,
                            offsetY: "5px",
                            "data-a-target": "game-selector-search-balloon"
                        }, this.renderSearchResult())))
                    }, t.prototype.renderSearchResult = function() {
                        var e = l("game-selector__search-panel", {
                                "game-selector__search-panel--closed": !this.state.isOpen
                            }),
                            t = null;
                        return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? r.createElement(s.Za, {
                            fillContent: !0
                        }) : r.createElement(h, {
                            icon: s.tb.SearchNoResults,
                            titleText: Object(d.d)("No results found", "EventGameSelector"),
                            subText: Object(d.d)("They're probably in another castle", "EventGameSelector")
                        }) : r.createElement(h, {
                            icon: s.tb.DeadGlitch,
                            titleText: Object(d.d)("Search is not available at this time", "EventGameSelector"),
                            subText: Object(d.d)("Please try again later", "EventGameSelector")
                        })), r.createElement("div", {
                            className: e,
                            tabIndex: 0
                        }, r.createElement(s.Eb, {
                            attachTop: !0,
                            attachRight: !0,
                            attachLeft: !0,
                            attachBottom: !0,
                            background: s.r.Base,
                            position: s.jb.Absolute,
                            overflow: s.cb.Hidden,
                            display: s.X.Block
                        }, r.createElement(u.b, {
                            suppressScrollX: !0,
                            "data-a-target": "search-scroller"
                        }, r.createElement(s.Xa, {
                            margin: {
                                top: .5,
                                bottom: .5
                            }
                        }, t, r.createElement(u.a, {
                            enabled: this.state.isOpen,
                            loadMore: this.props.triggerLoadMore,
                            pixelThreshold: 50
                        })))))
                    }, t.prototype.renderGameResults = function(e, t) {
                        var n = this;
                        return e.map(function(e, a, i) {
                            var o = i[t] === i[a];
                            return r.createElement(m.a, {
                                id: "game_" + e.title,
                                key: "game_" + e.title,
                                imageAlt: e.thumbnailAltText,
                                onClick: n.onClickGame,
                                title: e.title ? e.title : "",
                                hover: o,
                                "data-game-highlighted": o,
                                "data-game-index": a
                            })
                        })
                    }, t
                }(r.Component),
                v = n("H/lO"),
                b = n("NZDK"),
                E = 10,
                y = function() {
                    return function() {
                        var e = this;
                        this.searchCode = function(t, n) {
                            return i.__awaiter(e, void 0, Promise, function() {
                                var e;
                                return i.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(v.a.Games, t, t, {
                                                hitsPerPage: E,
                                                page: n
                                            })];
                                        case 1:
                                            return [2, a.sent()];
                                        case 2:
                                            throw e = a.sent(), d.k.error(e, "Algolia type results search failed"), e;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.searchClient = new b.a({
                            appId: d.a.algoliaApplicationID,
                            apiKey: d.a.algoliaAPIKey,
                            apolloClient: d.p.apollo.client,
                            logger: d.k,
                            config: d.a,
                            stats: d.p.stats
                        })
                    }
                }(),
                C = [],
                _ = {
                    objectID: "",
                    name: ""
                },
                T = function(e) {
                    return {
                        objectID: "",
                        name: e
                    }
                },
                D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            n.setState({
                                isSearchPending: !0,
                                searchTerm: e,
                                nextAlgoliaPage: 0
                            }, n.triggerLoadMore)
                        }, n.triggerLoadMore = function() {
                            return n.searchClient.searchCode(n.state.searchTerm, n.state.nextAlgoliaPage).then(function(e) {
                                n.resolveLoadMore(e)
                            })
                        }, n.resolveLoadMore = function(e) {
                            if (!e || e.id === n.state.searchTerm) {
                                var t = void 0;
                                if (e) {
                                    var a = void 0;
                                    n.state.gameResults && (a = {
                                        totalHits: n.state.gameResults.length,
                                        results: n.state.gameResults
                                    });
                                    var i = Object(o.b)({
                                        searchResults: e,
                                        append: n.state.nextAlgoliaPage > 0,
                                        currentGameResults: a
                                    }).currentGameResults;
                                    t = i ? i.results : C
                                }
                                n.setState({
                                    gameResults: t,
                                    isSearchPending: !1,
                                    nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                                })
                            }
                        }, n.selectGame = function(e) {
                            if (n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title) {
                                var t = n.state.gameResults[e];
                                if (t.title) {
                                    var a = {
                                        objectID: t.id,
                                        name: t.title
                                    };
                                    n.setSelectedGameState(a)
                                } else n.selectEmptyGame()
                            } else n.selectEmptyGame()
                        }, n.selectGameByName = function(e) {
                            n.setSelectedGameState(T(e), !1)
                        }, n.selectEmptyGame = function() {
                            n.setSelectedGameState(_)
                        }, n.setSelectedGameState = function(e, t) {
                            void 0 === t && (t = !0), n.setState({
                                selectedGame: e,
                                searchTerm: e.name,
                                redrawKey: Math.random()
                            }, function() {
                                t && n.fireChangeGame()
                            })
                        }, n.fireChangeGame = function() {
                            n.props.onChange(n.state.selectedGame)
                        }, n.searchClient = new y, n.state = n.state = {
                            searchTerm: t.currentGameTitle,
                            gameResults: C,
                            isSearchPending: !1,
                            nextAlgoliaPage: 0,
                            selectedGame: T(t.currentGameTitle),
                            redrawKey: Math.random()
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.startNewSearch(this.props.currentGameTitle)
                    }, t.prototype.render = function() {
                        return this.props.disabled ? r.createElement("div", {
                            className: "game-selector__search-container"
                        }, r.createElement(s.Ra, {
                            value: this.props.currentGameTitle,
                            type: s.Ta.Text,
                            icon: s.tb.NavGames,
                            disabled: !0
                        })) : r.createElement(f, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame.name,
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.triggerLoadMore
                        })
                    }, t
                }(r.Component);
            n.d(t, !1, function() {
                return C
            }), n.d(t, !1, function() {
                return _
            }), n.d(t, "a", function() {
                return D
            })
        },
        gh9h: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Save = 0] = "Save", e[e.Thumbnail = 1] = "Thumbnail", e[e.Initialize = 2] = "Initialize"
                }(a || (a = {}))
        },
        gz5Y: function(e, t, n) {},
        "i+a/": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", function() {
                    return p
                });
                var a = n("mrSG"),
                    i = n("17x9"),
                    r = n("q1tI"),
                    o = n("/7QA"),
                    s = n("GnwI"),
                    l = n("Ue10"),
                    d = n("kSZU"),
                    c = n("k7Fj"),
                    u = (n("gz5Y"), function(t) {
                        function n() {
                            var n = null !== t && t.apply(this, arguments) || this;
                            return n.state = {
                                settledAnnouncements: new Set
                            }, n.slots = new c.a(n.props.limit, function(t) {
                                return e(function() {
                                    return n.setState({
                                        settledAnnouncements: t
                                    })
                                })
                            }), n.dismissHandlers = new Map, n.reserveSlot = function(e) {
                                n.slots.reserve(e)
                            }, n.claimSlot = function(e, t) {
                                n.slots.claim(e), n.dismissHandlers.set(e, t)
                            }, n.forfeitSlot = function(e) {
                                n.slots.forfeit(e)
                            }, n.hasSlot = function(e) {
                                return n.state.settledAnnouncements.has(e)
                            }, n.closeSlots = function() {
                                n.slots.close()
                            }, n.dismissAll = function() {
                                n.state.settledAnnouncements.forEach(function(e) {
                                    var t = n.dismissHandlers.get(e);
                                    t && t()
                                })
                            }, n
                        }
                        return a.__extends(n, t), n.prototype.componentDidMount = function() {
                            var e = this,
                                t = void 0 === this.props.timeout ? 3e3 : this.props.timeout;
                            setTimeout(function() {
                                return e.slots.ejectWaiting()
                            }, t)
                        }, n.prototype.render = function() {
                            return r.createElement(l.Eb, {
                                alignItems: l.f.Center,
                                className: "live-page-announcement-list",
                                display: l.X.Flex,
                                flexDirection: l.Aa.Row,
                                justifyContent: l.Wa.Center,
                                padding: {
                                    y: 2
                                },
                                position: l.jb.Fixed,
                                zIndex: l.ic.Above
                            }, r.createElement(l.Eb, {
                                className: "live-page-banner-wrapper-inner",
                                fullWidth: !0
                            }, r.Children.toArray(this.props.children).concat([r.createElement(d.c, {
                                key: "sentinel",
                                onMount: this.closeSlots
                            })]), this.state.settledAnnouncements.size > 1 && r.createElement(m, {
                                onClick: this.dismissAll
                            })))
                        }, n.prototype.getChildContext = function() {
                            return {
                                reserveSlot: this.reserveSlot,
                                claimSlot: this.claimSlot,
                                forfeitSlot: this.forfeitSlot,
                                hasSlot: this.hasSlot
                            }
                        }, n.childContextTypes = {
                            reserveSlot: i.func,
                            claimSlot: i.func,
                            forfeitSlot: i.func,
                            hasSlot: i.func
                        }, n
                    }(r.Component)),
                    p = Object(s.b)("AnnouncementList", {
                        autoReportInteractive: !0
                    })(u);

                function m(e) {
                    return r.createElement(l.Eb, {
                        className: "live-page-announcement-list-float-right",
                        elevation: 3
                    }, r.createElement(l.z, {
                        onClick: e.onClick
                    }, Object(o.d)("Dismiss All", "LiveDashboardAnnouncements")))
                }
            }).call(this, n("URgk").setImmediate)
        },
        "jQ+3": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = {
                PageError: "page-error",
                Error: "error",
                Success: "success",
                Info: "info"
            }
        },
        jbSU: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("17x9"),
                r = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.context.forfeitSlot(this.context.announcementID)
                    }, t.prototype.render = function() {
                        return null
                    }, t.contextTypes = {
                        forfeitSlot: i.func,
                        announcementID: i.string
                    }, t
                }(n("q1tI").Component);
            n.d(t, "a", function() {
                return r
            })
        },
        jeZI: function(e, t, n) {},
        jyE2: function(e, t, n) {},
        k7Fj: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = function() {
                function e(e, t) {
                    this.isClosed = !1, this.limit = e, this.claims = new Set, this.waiting = new Set, this.onReady = t, this.didNotify = !1, this.isClosed = !1
                }
                return e.prototype.claim = function(e) {
                    this.claims.add(e), this.waiting.delete(e), this.checkReady()
                }, e.prototype.reserve = function(e) {
                    this.claims.add(e), this.waiting.add(e)
                }, e.prototype.forfeit = function(e) {
                    this.readyAnnouncements && this.readyAnnouncements.has(e) && (this.readyAnnouncements.delete(e), this.didNotify = !1), this.claims.delete(e), this.waiting.delete(e), this.checkReady()
                }, e.prototype.ejectWaiting = function() {
                    var e = this;
                    this.waiting.forEach(function(t) {
                        return e.claims.delete(t)
                    }), this.checkReady()
                }, e.prototype.close = function() {
                    this.isClosed || (this.isClosed = !0, this.checkReady())
                }, Object.defineProperty(e.prototype, "topClaims", {
                    get: function() {
                        return Array.from(this.claims).slice(0, this.limit)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.checkReady = function() {
                    var e = this;
                    !this.didNotify && this.isClosed && this.topClaims.every(function(t) {
                        return !e.waiting.has(t)
                    }) && (this.didNotify = !0, this.readyAnnouncements || (this.readyAnnouncements = new Set(this.topClaims)), this.onReady(this.readyAnnouncements))
                }, e
            }()
        },
        kSZU: function(e, t, n) {
            "use strict";
            var a = n("O/Ab"),
                i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("Ue10"),
                l = (n("v082"), {
                    "data-test-selector": "dismiss-button"
                }),
                d = {
                    "data-test-selector": "header"
                },
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.onMount && this.props.onMount()
                    }, t.prototype.render = function() {
                        var e = this.props.src;
                        return r.createElement(s.Eb, {
                            elevation: 3,
                            fullWidth: !0
                        }, r.createElement(s.Eb, {
                            background: s.r.Alt2,
                            borderRadius: s.x.Medium,
                            justifyContent: s.Wa.Between,
                            className: "dashboard-announcement-banner-layout",
                            display: s.X.Flex,
                            margin: {
                                bottom: 1
                            },
                            padding: 1
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex
                        }, e && r.createElement(s.Xa, {
                            alignSelf: s.g.Center,
                            flexShrink: 0,
                            margin: {
                                right: 1
                            }
                        }, r.createElement("img", {
                            src: e,
                            width: "20"
                        })), r.createElement(s.Xa, null, r.createElement(s.Pa, {
                            margin: {
                                bottom: 0
                            }
                        }, r.createElement(s.W, i.__assign({
                            bold: !0,
                            fontSize: s.Ca.Size6
                        }, d), this.props.headerLink ? r.createElement(s.U, {
                            linkTo: this.props.headerLink
                        }, this.props.headerText) : this.props.headerText)), r.createElement(s.W, {
                            color: s.O.Alt2,
                            fontSize: s.Ca.Size6,
                            type: s.Vb.Span
                        }, this.props.subtitleText, "  "), r.createElement(s.U, {
                            to: this.props.buttonLink,
                            onClick: this.props.onButtonClick,
                            underline: !0
                        }, this.props.buttonText))), r.createElement(s.Xa, {
                            alignSelf: s.g.Center,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(s.A, i.__assign({
                            ariaLabel: Object(o.d)("Close", "AnnouncementBanner-temp"),
                            icon: s.tb.Close,
                            onClick: this.props.onDismiss
                        }, l)))))
                    }, t
                }(r.Component),
                u = n("V0eP"),
                p = n("jbSU"),
                m = n("17x9"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didError: !1
                        }, t.id = String(++g), t
                    }
                    return i.__extends(t, e), t.prototype.getChildContext = function() {
                        return {
                            announcementID: this.id
                        }
                    }, t.prototype.componentDidCatch = function() {
                        this.setState({
                            didError: !0
                        })
                    }, t.prototype.render = function() {
                        return this.state.didError || this.props.expiresAt <= new Date ? r.createElement(p.a, null) : this.props.children
                    }, t.childContextTypes = {
                        announcementID: m.string
                    }, t
                }(r.Component),
                g = 0;
            var f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.onMount()
                }, t.prototype.render = function() {
                    return null
                }, t
            }(r.Component);
            n.d(t, !1, function() {
                return a.a
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return u.a
            }), n.d(t, !1, function() {
                return p.a
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "c", function() {
                return f
            })
        },
        lr7A: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("yR8l"),
                l = n("DMoW"),
                d = n("FsIG"),
                c = n("C29h"),
                u = n("Ue10"),
                p = n("dzJR"),
                m = (n("sEux"), 5e3);
            ! function(e) {
                e.NoTagsSelected = "no-tags-selected", e.SelectedTag = "selected-tag"
            }(a || (a = {}));
            var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.timeoutId = null, t.renderErrorMessage = function() {
                            if (t.props.error && t.props.errorMessage) return r.createElement(u.Xa, {
                                margin: {
                                    top: .5
                                }
                            }, r.createElement(u.Da, {
                                errorMessage: t.props.errorMessage
                            }))
                        }, t.renderTagSearch = function() {
                            return t.props.readOnly ? null : r.createElement(c.a, {
                                categoryName: t.props.gameName,
                                onInputChange: t.props.onChange,
                                onTagClick: t.onTagResultSelected,
                                selectedTags: t.props.selectedTags,
                                showAllDashboardTags: t.props.showAllDashboardTags,
                                type: c.b.TagAllMinusAutomation
                            })
                        }, t.onTagResultSelected = function(e) {
                            if (5 === t.props.selectedTags.filter(function(e) {
                                    return !e.isAutomated
                                }).length && t.props.setError) return t.props.setError(Object(o.d)("You can only select up to 5 tags at the same time.", "TagSelectorSearch")), t.clearExistingTimeout(), void(t.timeoutId = setTimeout(function() {
                                t && t.props && t.props.setError && t.props.setError("")
                            }, m));
                            t.props.selectedTags.map(function(e) {
                                return e.id
                            }).includes(e.id) || t.props.onTagResultSelected && t.props.onTagResultSelected(e)
                        }, t.clearExistingTimeout = function() {
                            t.timeoutId && clearTimeout(t.timeoutId)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.clearExistingTimeout()
                    }, t.prototype.render = function() {
                        var e = Object(o.d)("Tags", "TagSelectorSearch");
                        return r.createElement(u.Xa, null, r.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between
                        }, r.createElement(u.Ha, {
                            id: Object(d.b)(e),
                            label: e
                        }), this.renderHelpButton()), r.createElement(u.Xa, {
                            alignContent: u.e.Center
                        }, r.createElement(u.Xa, {
                            position: u.jb.Relative,
                            margin: {
                                y: .5
                            }
                        }, this.renderTagSearch()), this.renderErrorMessage(), this.renderSelectedTags()))
                    }, t.prototype.renderSelectedTags = function() {
                        var e = this,
                            t = this.props.data && this.props.data.game && this.props.data.game.tags;
                        if (0 === this.props.selectedTags.length && !this.props.readOnly && (!t || t && !t.length)) return null;
                        if (0 === this.props.selectedTags.length && (!t || t && !t.length)) return r.createElement(u.Xa, {
                            "data-test-selector": a.NoTagsSelected
                        }, r.createElement(u.Ra, {
                            type: u.Ta.Text,
                            placeholder: Object(o.d)("No tags were selected", "TagSelectorSearch"),
                            disabled: !0
                        }));
                        var n = [],
                            i = this.props.selectedTags.map(function(t, n) {
                                return r.createElement(u.Xa, {
                                    display: u.X.InlineBlock,
                                    margin: {
                                        right: .5,
                                        bottom: .5
                                    },
                                    key: t.id + "_" + n
                                }, r.createElement(u.Ob, {
                                    "data-test-selector": a.SelectedTag,
                                    action: t.isAutomated ? void 0 : u.Pb.Remove,
                                    label: t.localizedName || t.tagName,
                                    key: t.id,
                                    onClick: t.isAutomated ? void 0 : e.props.onRemoveTag,
                                    "data-idx": n
                                }))
                            });
                        return t && (n = t.map(function(e, t) {
                            return r.createElement(u.Xa, {
                                display: u.X.InlineBlock,
                                margin: {
                                    right: .5,
                                    bottom: .5
                                },
                                key: e.id + "_" + t
                            }, r.createElement(u.Ob, {
                                "data-test-selector": a.SelectedTag,
                                action: void 0,
                                label: e.localizedName || e.tagName,
                                key: e.id,
                                onClick: void 0,
                                "data-idx": t
                            }))
                        })), r.createElement(u.Xa, {
                            margin: {
                                top: .5
                            },
                            padding: {
                                left: .5,
                                top: .5
                            },
                            className: "selected-tags"
                        }, i.concat(n))
                    }, t.prototype.renderHelpButton = function() {
                        return this.props.showHelpButton ? r.createElement(u.Xa, null, Object(o.d)("<x:link>Learn More</x:link>", {
                            "x:link": function(e) {
                                return r.createElement(u.U, {
                                    to: "https://link.twitch.tv/learntags"
                                }, e)
                            }
                        }, "TagSuggestions")) : null
                    }, t
                }(r.Component),
                g = Object(s.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName || "",
                                tagType: l.X.CONTENT
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.gameName
                    }
                })(h);
            n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, "a", function() {
                return g
            })
        },
        nQLY: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("0ly3"),
                l = n("lr7A"),
                d = n("Ue10");
            ! function(e) {
                e[e.FormGroup = 0] = "FormGroup", e[e.Input = 1] = "Input"
            }(a || (a = {}));
            var c, u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onInputChange = function(e) {
                            t.props.onChange(e.currentTarget.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.d)("{currentLength} of {maxLength} characters.", {
                                currentLength: this.props.title.length.toString(),
                                maxLength: 140..toString()
                            }, "TitleEditor"),
                            t = "";
                        return this.props.error ? t = this.props.error : "" === this.props.title && (t = Object(o.d)("A title is required.", "TitleEditor")), r.createElement(d.Ea, {
                            "data-test-selector": a.FormGroup,
                            hint: e,
                            label: Object(o.d)("Title", "VideoManagerEdit"),
                            error: !!t,
                            errorMessage: t
                        }, r.createElement(d.Ra, {
                            "data-test-selector": a.Input,
                            disabled: this.props.disabled,
                            maxLength: 140,
                            onChange: this.onInputChange,
                            required: !0,
                            type: d.Ta.Text,
                            value: this.props.title
                        }))
                    }, t
                }(r.Component),
                p = n("Rw/r"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onGameSelect = function(e) {
                            var n = null;
                            "" !== e.objectID && (n = {
                                id: e.objectID,
                                name: e.name
                            }), t.props.onChange(n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(d.Ea, {
                            id: "video-game",
                            label: Object(o.d)("Category / Game", "VideoManagerEdit")
                        }, r.createElement(p.a, {
                            onChange: this.onGameSelect,
                            disabled: this.props.disabled,
                            currentGameTitle: this.props.game ? this.props.game.name : ""
                        }))
                    }, t
                }(r.PureComponent);
            n.d(t, "a", function() {
                    return h
                }),
                function(e) {
                    e[e.EditDescription = 0] = "EditDescription"
                }(c || (c = {}));
            var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        removedIds: []
                    }, t.renderTagSelector = function() {
                        return r.createElement(l.a, {
                            selectedTags: t.filteredTags(),
                            onRemoveTag: t.onRemoveTagHandler,
                            readOnly: !0
                        })
                    }, t.onDescriptionChangeHandler = function(e) {
                        t.props.onChange(i.__assign({}, t.props.legacyVideo, {
                            description: e.currentTarget.value
                        }))
                    }, t.onGameChangeHandler = function(e) {
                        t.props.onChange(i.__assign({}, t.props.legacyVideo, {
                            game: e
                        }))
                    }, t.onLanguageChangeHandler = function(e) {
                        t.props.onChange(i.__assign({}, t.props.legacyVideo, {
                            language: e
                        }))
                    }, t.onRemoveTagHandler = function(e) {
                        var n = e.currentTarget.dataset.idx;
                        if (n && t.props.videoFragment && t.props.videoFragment.contentTags) {
                            var a = parseInt(n, 10);
                            if (!Number.isNaN(a)) {
                                var r = t.filteredTags()[a];
                                t.setState(function(e) {
                                    return {
                                        removedIds: e.removedIds.concat([r.id])
                                    }
                                }, function() {
                                    t.props.onChange(i.__assign({}, t.props.legacyVideo), r)
                                })
                            }
                        }
                    }, t.onTitleChangeHandler = function(e) {
                        t.props.onChange(i.__assign({}, t.props.legacyVideo, {
                            title: e
                        }))
                    }, t.filteredTags = function() {
                        return (t.props.videoFragment && t.props.videoFragment.contentTags || []).filter(function(e) {
                            return !t.state.removedIds.includes(e.id)
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.legacyVideo,
                        n = e.disabled;
                    return r.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column
                    }, r.createElement(d.Xa, {
                        margin: {
                            bottom: 2
                        },
                        flexGrow: 1
                    }, r.createElement(u, {
                        disabled: n,
                        error: this.props.titleError,
                        onChange: this.onTitleChangeHandler,
                        title: t.title
                    })), r.createElement(d.Xa, {
                        margin: {
                            bottom: 2
                        },
                        flexGrow: 1,
                        position: d.jb.Relative
                    }, r.createElement(d.Ea, {
                        label: Object(o.d)("Description", "VideoManagerEdit")
                    }, r.createElement(d.Sb, {
                        "data-test-selector": c.EditDescription,
                        disabled: n,
                        onChange: this.onDescriptionChangeHandler,
                        placeholder: Object(o.d)("Describe your video", "VideoManagerEdit"),
                        rows: 6,
                        value: t.description
                    })), r.createElement(d.Xa, {
                        position: d.jb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.d)("Supports <x:link>Markdown</x:link> (No HTML)", {
                        "x:link": function(e) {
                            return r.createElement(d.U, {
                                to: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics",
                                targetBlank: !0
                            }, e)
                        }
                    }, "VideoManagerEdit"))), r.createElement(d.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(s.a, {
                        defaultLanguage: t.language,
                        disabled: n,
                        label: Object(o.d)("Language", "VideoManagerEdit"),
                        onChange: this.onLanguageChangeHandler
                    })), r.createElement(d.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(m, {
                        disabled: n,
                        game: t.game,
                        onChange: this.onGameChangeHandler
                    })), this.renderTagSelector())
                }, t
            }(r.Component)
        },
        pQ0o: function(e, t, n) {},
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var a = n("+GjP"),
                i = "https://www.facebook.com/sharer/sharer.php",
                r = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(a.e)(i, {
                    u: e
                })
            }

            function d(e, t) {
                return Object(a.e)(r, {
                    url: e,
                    text: t
                })
            }

            function c(e, t) {
                return Object(a.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(a.e)(s, {
                    url: e
                })
            }
        },
        rixl: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "VideoFieldEditor__UpdateContentTags"
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
                                    value: "UpdateContentTagsInput"
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
                                value: "updateContentTags"
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
                                        value: "content"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Video"
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
                                                        value: "contentTags"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "contentTag"
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
                    end: 357
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/video-field-editor/models/content-tag-fragment.gql"\nmutation VideoFieldEditor__UpdateContentTags($input: UpdateContentTagsInput!) {\n# using update for now to delete as delete is auth\'d poorly atm and rejects\n# legitamate requests\nupdateContentTags(input: $input) {\ncontent {\n... on Video {\nid\ncontentTags {\n...contentTag\n}\n}\n}\n}\n}',
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
            }(n("ErfU").definitions)), e.exports = a
        },
        rj3Y: function(e, t, n) {
            "use strict";
            var a, i, r = function(e, t, n) {
                var a = e.collectionItems || [];
                return Boolean(a.find(function(e) {
                    return e.ObjectType === n && e.id === t
                }))
            };
            ! function(e) {
                e.Public = "public"
            }(a || (a = {})),
            function(e) {
                e.Staff = "staff"
            }(i || (i = {}));
            var o, s, l = function(e) {
                return {
                    __typename: "Collection",
                    id: e._id,
                    title: e.title,
                    state: a.Public,
                    thumbnailSrc: e.thumbnails && e.thumbnails.small,
                    totalDuration: e.total_duration,
                    itemsCount: e.items_count
                }
            };

            function d(e) {
                return e.collections.map(function(e) {
                    return l(e)
                })
            }! function(e) {
                e.Video = "video"
            }(o || (o = {})),
            function(e) {
                e.PostCreateModal = "post-create", e.EditModal = "edit", e.CollectionManager = "collection_manager", e.VideoProducerRow = "video_producer_row"
            }(s || (s = {})), n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            })
        },
        sEux: function(e, t, n) {},
        sL9O: function(e, t, n) {},
        tK6h: function(e, t, n) {},
        tMx0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(r.Eb, {
                            margin: {
                                bottom: 1
                            },
                            elevation: 1,
                            display: r.X.Flex,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Row,
                            alignItems: r.f.Stretch
                        }, i.createElement(r.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            display: r.X.Flex,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Column,
                            breakpointSmall: {
                                flexDirection: r.Aa.Row
                            }
                        }, i.createElement(r.Xa, {
                            fullWidth: !0
                        }, i.createElement(r.G, {
                            row: !0
                        }, i.createElement(r.Xa, null, i.createElement(r.ib, {
                            height: 75,
                            width: 133
                        })), i.createElement(r.H, null, i.createElement(r.Xa, {
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, i.createElement(r.W, null, i.createElement(r.ib, {
                            width: 600,
                            lineCount: 1
                        }), i.createElement(r.ib, {
                            width: 200,
                            lineCount: 1
                        })))))), i.createElement(r.Xa, {
                            display: r.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            flexWrap: r.Ba.NoWrap,
                            flexDirection: r.Aa.Row,
                            alignItems: r.f.Center
                        }, i.createElement(r.Eb, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, i.createElement(r.Xa, {
                            display: r.X.InlineFlex,
                            fullHeight: !0
                        }, i.createElement(r.Xa, {
                            fullHeight: !0,
                            display: r.X.Flex,
                            alignItems: r.f.Center,
                            justifyContent: r.Wa.Center,
                            padding: 2
                        }, i.createElement(r.W, null, i.createElement(r.ib, {
                            width: 40,
                            lineCount: 1
                        })))))), i.createElement(r.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(r.Xa, {
                            fullHeight: !0,
                            display: r.X.Flex,
                            alignItems: r.f.Center,
                            justifyContent: r.Wa.Center,
                            padding: 1
                        }, i.createElement(r.W, null, i.createElement(r.ib, {
                            width: 20,
                            lineCount: 1
                        }))))))
                    }, t
                }(i.PureComponent);
            n.d(t, "a", function() {
                return o
            })
        },
        tUWl: function(e, t, n) {},
        trBB: function(e, t, n) {
            "use strict";
            n("O8Bi");
            var a = n("nQLY");
            n.d(t, "VideoFieldEditor", function() {
                return a.a
            })
        },
        u3aQ: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-160x90-6d63306a771e0e239cf4.png"
        },
        uNjw: function(e, t) {},
        ulzF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = function(e) {
                    return new Promise(function(t, n) {
                        var a = new FileReader;
                        a.onload = function() {
                            var e = i(a.result);
                            t(e)
                        }, a.onerror = function(e) {
                            n(e)
                        }, a.readAsDataURL(e)
                    })
                },
                i = function(e) {
                    return e.replace(/data:image.*;base64,/, "")
                }
        },
        uzac: function(e, t, n) {},
        uzvh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("SiBg");

            function o(e) {
                return e.collections.containingCollections
            }
            i.p.store.registerReducer("collections", function(e, t) {
                var n;
                switch (void 0 === e && (e = {
                    collections: [],
                    videoID: "",
                    containingCollections: [],
                    errors: {}
                }), t.type) {
                    case r.a:
                        return a.__assign({}, e, {
                            collections: t.collections
                        });
                    case r.b:
                        return a.__assign({}, e, {
                            videoID: t.videoID,
                            containingCollections: t.containingCollections
                        });
                    case r.c:
                        return a.__assign({}, e, {
                            errors: a.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                        });
                    default:
                        return e
                }
            })
        },
        v082: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            });
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                d = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(a || (a = {}));
            var c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === a.Download ? r.createElement("a", i.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.jc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? r.createElement("a", i.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(d.jc)(n.props)), n.renderIcon()) : r.createElement("button", i.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(d.jc)(n.props)), n.renderIcon())
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
                        var e = n.getAssetFromType();
                        return r.createElement(d.Xa, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Wa.Center
                        }, r.createElement(d.sb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== a.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case a.Twitter:
                                return "Twitter";
                            case a.Reddit:
                                return "Reddit";
                            case a.Facebook:
                                return "Facebook";
                            case a.VKontakte:
                                return "VKontakte";
                            case a.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case a.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case a.Twitter:
                                return d.tb.Twitter;
                            case a.Facebook:
                                return d.tb.Facebook;
                            case a.VKontakte:
                                return d.tb.VKontakte;
                            case a.Reddit:
                                return d.tb.Reddit;
                            case a.Download:
                                return d.tb.Download;
                            case a.Copy:
                            default:
                                return d.tb.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case a.Twitter:
                                return e + "--twitter";
                            case a.Reddit:
                                return e + "--reddit";
                            case a.Facebook:
                                return e + "--facebook";
                            case a.VKontakte:
                                return e + "--vkontakte";
                            case a.Download:
                                return e + "--download";
                            case a.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            i = e.type,
                            r = n.getUrl(),
                            o = t || "";
                        switch (i) {
                            case a.Reddit:
                                return Object(l.b)(r, o);
                            case a.VKontakte:
                                return Object(l.d)(r);
                            case a.Facebook:
                                return Object(l.a)(r);
                            case a.Twitter:
                                return Object(l.c)(r, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(d.Xa, {
                        className: "social-button"
                    }, r.createElement(d.Yb, {
                        label: this.getTooltipFromType(),
                        direction: d.ac.Bottom
                    }, this.renderLink()))
                }, t
            }(r.Component)
        },
        xeRp: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("TSYQ"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("NLLf"),
                d = n("b6Yk"),
                c = n("ulzF"),
                u = n("Lxz1");
            ! function(e) {
                e.CommunitiesAvatar = "avatar_image", e.CommunitiesCover = "cover_image", e.Default = "encoded_image", e.EventCoverImage = "event_cover_image"
            }(a || (a = {}));
            var p, m = function() {
                    return function(e, t, n, r) {
                        var o = this;
                        this.uploadURL = e, this.shouldBase64Encode = t, this.base64EncodedPropertyName = n, this.onFinishUploading = r, this.uploadFile = function(e) {
                            return i.__awaiter(o, void 0, void 0, function() {
                                var t, n, r, o, s, l, p, m;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.shouldBase64Encode ? (o = void 0, this.base64EncodedPropertyName ? (t = {}, s = this.base64EncodedPropertyName, [4, Object(c.a)(e)]) : [3, 2]) : [3, 5];
                                        case 1:
                                            return t[s] = i.sent(), o = t, [3, 4];
                                        case 2:
                                            return n = {}, l = a.Default, [4, Object(c.a)(e)];
                                        case 3:
                                            n[l] = i.sent(), o = n, i.label = 4;
                                        case 4:
                                            return r = o, [3, 6];
                                        case 5:
                                            (p = new FormData).append("files[]", e), r = p, i.label = 6;
                                        case 6:
                                            return [4, d.a.post(this.uploadURL, {
                                                body: r,
                                                credentials: r instanceof FormData ? "include" : void 0
                                            })];
                                        case 7:
                                            if ((m = i.sent()) && m.error) throw new Error(JSON.stringify(m.error));
                                            if (m.status > 300) {
                                                if (m && m.requestError) throw new Error(JSON.stringify(m.requestError));
                                                throw new Error(Object(u.e)(m.status))
                                            }
                                            return this.onFinishUploading && this.onFinishUploading(m.body, r), [2]
                                    }
                                })
                            })
                        }
                    }
                }(),
                h = n("2/NB"),
                g = n("GnwI"),
                f = n("Ue10"),
                v = (n("LyrF"), "data:image/jpg;base64,"),
                b = "default:town";
            ! function(e) {
                e.ImagePreview = "ImagePreview", e.RemoveButton = "RemoveButton", e.DragDropWrapper = "DragDropWrapper"
            }(p || (p = {}));
            var E = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            srcString: null,
                            isDraggingOver: !1,
                            isResetting: !1
                        }, n.dragOverDepth = 0, n.onDragEnter = function() {
                            n.dragOverDepth++, 1 === n.dragOverDepth && n.setState({
                                isDraggingOver: !0
                            })
                        }, n.onDragLeave = function() {
                            n.dragOverDepth--, 0 === n.dragOverDepth && n.setState({
                                isDraggingOver: !1
                            })
                        }, n.onDrop = function() {
                            n.dragOverDepth = 0, n.setState({
                                isDraggingOver: !1
                            })
                        }, n.onFinishUploading = function(e, t) {
                            !t || t instanceof FormData || !t.event_cover_image || n.setState({
                                srcString: "" + v + t.event_cover_image
                            }), n.props.onFinishUploading(e)
                        }, n.removeImage = function() {
                            n.setState({
                                srcString: null,
                                isResetting: !0
                            }, function() {
                                n.setState({
                                    isResetting: !1
                                })
                            }), n.props.onFinishUploading({
                                _id: b
                            })
                        }, n.state.srcString = t.initialImageData && t.initialImageData.toString(), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = null;
                        if (this.state.srcString) {
                            var n = r({
                                "event-modal-image-uploader__preview-image": !0,
                                "event-modal-image-uploader__preview-image--preview-mode": !1 === this.state.isDraggingOver
                            });
                            e = o.createElement(f.Eb, {
                                display: f.X.Flex,
                                justifyContent: f.Wa.Center,
                                alignItems: f.f.Center,
                                background: f.r.Alt,
                                position: f.jb.Absolute,
                                attachBottom: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                attachTop: !0
                            }, o.createElement("img", {
                                "data-test-selector": p.ImagePreview,
                                className: n,
                                src: this.state.srcString
                            })), t = o.createElement(f.Xa, {
                                justifyContent: f.Wa.Center,
                                display: f.X.Flex,
                                margin: {
                                    y: 1
                                }
                            }, o.createElement(f.z, {
                                "data-a-target": "remove-button",
                                "data-test-selector": p.RemoveButton,
                                type: f.F.Hollow,
                                onClick: this.removeImage,
                                icon: f.tb.RemoveTag
                            }, Object(s.d)("Remove", "EventModalImageUploader")))
                        }
                        var i = r({
                                "event-modal-image-uploader__uploader": !0,
                                "event-modal-image-uploader__uploader--preview-mode": null !== e && !1 === this.state.isDraggingOver
                            }),
                            d = new m("https://api.twitch.tv/v5/channels/" + this.props.user.id + "/event_cover_images", !0, a.EventCoverImage, this.onFinishUploading);
                        return o.createElement(f.Xa, {
                            className: "event-modal-image-uploader",
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(f.Ea, {
                            id: "event-image",
                            label: Object(s.d)("Event Image", "EventModal"),
                            labelOptional: Object(s.d)("optional", "EventModal")
                        }, o.createElement(f.Xa, {
                            className: "event-modal-image-uploader__container"
                        }, o.createElement(f.Xa, {
                            className: "event-modal-image-uploader__uploader"
                        }, o.createElement(f.o, {
                            ratio: f.p.Aspect16x9
                        }, o.createElement(f.Pa, {
                            className: i,
                            position: f.jb.Absolute,
                            fullWidth: !0,
                            fullHeight: !0
                        }, o.createElement("div", {
                            onDragEnter: this.onDragEnter,
                            onDragLeave: this.onDragLeave,
                            onDrop: this.onDrop,
                            "data-a-target": "event-image-placeholder",
                            "data-test-selector": p.DragDropWrapper
                        }, !this.state.isResetting && o.createElement(l.a, {
                            allowedFileTypes: [h.a.JPEG],
                            imageDimensions: "676x380",
                            iconHeight: 36,
                            iconWidth: 36,
                            maxFileSizeMegabytes: 1,
                            provider: d
                        }))), e))), t))
                    }, t
                }(o.Component),
                y = Object(g.b)("EventModalImageUploader", {
                    autoReportInteractive: !0
                })(E);
            n.d(t, "b", function() {
                return "380"
            }), n.d(t, "c", function() {
                return "676"
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return E
            }), n.d(t, "a", function() {
                return y
            })
        },
        y5I9: function(e, t, n) {
            "use strict";

            function a(e, t) {
                return e.length !== t.length || e.some(function(e, n) {
                    return t[n] !== e
                })
            }

            function i(e, t) {
                var n = e || [],
                    a = t || [];
                return n.length !== a.length || n.some(function(e, t) {
                    return e.id !== a[t].id
                })
            }
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            })
        },
        y6KF: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return r
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "r", function() {
                return i
            }), n.d(t, "p", function() {
                return c
            }), n.d(t, "k", function() {
                return u
            }), n.d(t, "n", function() {
                return p
            }), n.d(t, "j", function() {
                return m
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "o", function() {
                return f
            }), n.d(t, "s", function() {
                return v
            }), n.d(t, "t", function() {
                return b
            }), n.d(t, "h", function() {
                return E
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "i", function() {
                return C
            }), n.d(t, "q", function() {
                return _
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            });
            var a = n("YwGE");
            n.d(t, "a", function() {
                return a.a
            });
            var i, r = "generated",
                o = "custom";
            ! function(e) {
                e.Private = "PRIVATE", e.Public = "PUBLIC"
            }(i || (i = {}));
            var s, l, d, c = "uploading",
                u = "pending_transcode",
                p = "transcoding",
                m = "failed",
                h = "recorded",
                g = "recording",
                f = "unprocessed",
                v = [h, g],
                b = [p, u, m, f, c],
                E = "FORMAT_NOT_SUPPORTED",
                y = "BAD_ASSET",
                C = "INTERNAL_ERROR",
                _ = {
                    VIDEO_PREMIERE_STATUS_UNSCHEDULED: "unscheduled",
                    VIDEO_PREMIERE_STATUS_SCHEDULED: "scheduled",
                    VIDEO_PREMIERE_STATUS_STARTED: "started",
                    VIDEO_PREMIERE_STATUS_FAILED: "failed"
                };
            ! function(e) {
                e.Youtube = "youtube"
            }(s || (s = {})),
            function(e) {
                e.None = "NONE", e.Expiring = "EXPIRING"
            }(l || (l = {})),
            function(e) {
                e.Everyone = "", e.SubOnly = "sub_only"
            }(d || (d = {}))
        },
        "y6o+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = "vod_premieres_sunset"
        },
        z1lk: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "d", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }), n.d(t, "c", function() {
                    return o
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
                }(a || (a = {}));
            var i = "root",
                r = "addTo",
                o = "collections"
        },
        zHWM: function(e, t, n) {
            "use strict";
            n("uzvh")
        }
    }
]);