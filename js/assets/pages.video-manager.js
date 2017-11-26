webpackJsonp([43], {
    1008: function(e, t) {},
    1013: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(b.bindActionCreators)({
                onClose: k.c
            }, e)
        }
        var r = n(0),
            i = n(1),
            s = n(2),
            o = n(959),
            d = n(3),
            l = (n(1121), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(o.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        onFilesSubmitted: this.props.processFiles
                    }, i.createElement(d.U, {
                        className: "image-uploader",
                        textAlign: d._22.Center,
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center,
                        position: d._2.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), i.createElement(d.U, {
                        position: d._2.Relative
                    }, i.createElement(d.U, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, i.createElement(d._8, {
                        asset: d._9.Upload,
                        type: d._10.Alt2,
                        width: 99,
                        height: 76
                    })), i.createElement(d.U, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: d._2.Absolute,
                        display: this.props.isLoading ? d.H.Block : d.H.Hide,
                        attachTop: !0
                    }, i.createElement(d._8, {
                        asset: d._9.Upload,
                        type: d._10.Brand,
                        width: 99,
                        height: 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return i.createElement(d.U, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, i.createElement(d._21, {
                        type: d._26.H4
                    }, Object(s.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(s.d)("Browse", "ImageUploader");
                    return i.createElement(d.U, null, i.createElement(d.U, {
                        padding: 1
                    }, i.createElement(d._21, {
                        type: d._26.H4
                    }, Object(s.d)("Drag and drop your image here", "ImageUploader"))), i.createElement(d.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, i.createElement(d._21, {
                        type: d._26.P,
                        fontSize: d.L.Size7,
                        color: d.F.Alt2
                    }, this.props.hintMessage)), i.createElement(d.U, null, i.createElement(d.u, {
                        ariaLabel: e,
                        type: d.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return i.createElement(d.U, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, i.createElement(d._21, {
                        type: d._26.H5,
                        color: d.F.Error,
                        bold: !0
                    }, this.props.errorMessage))
                }, t
            }(i.Component)),
            u = n(985),
            c = function(e) {
                return new Promise(function(t, n) {
                    var a = new FileReader;
                    a.onload = function() {
                        var e = _(a.result);
                        t(e)
                    }, a.onerror = function(e) {
                        n(e)
                    }, a.readAsDataURL(e)
                })
            },
            _ = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            },
            m = this,
            h = function(e, t, n) {
                return r.__awaiter(m, void 0, void 0, function() {
                    var a, i, s, o, d, l;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t ? (a = void 0, n ? (d = {}, i = n, [4, c(e)]) : [3, 2]) : [3, 5];
                            case 1:
                                return d[i] = r.sent(), a = d, [3, 4];
                            case 2:
                                return l = {}, s = u.a.Default, [4, c(e)];
                            case 3:
                                l[s] = r.sent(), a = l, r.label = 4;
                            case 4:
                                return [2, a];
                            case 5:
                                return o = new FormData, o.append("files[]", e), [2, o];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            p = function(e, t) {
                return Object(s.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            f = function(e, t) {
                return Object(s.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            g = function(e) {
                return Object(s.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            M = function() {
                return Object(s.d)("File too large.", "ImageUploader")
            },
            y = function() {
                return Object(s.d)("Incompatible format. File must be an image in PNG or JPG format.", "ImageUploader")
            },
            v = n(917),
            L = this,
            D = function(e, t) {
                return r.__awaiter(L, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, v.a.post(e, {
                                    body: t,
                                    credentials: t instanceof FormData ? "include" : void 0
                                })];
                            case 1:
                                if (n = a.sent(), n.status >= 200 && n.status < 300) return [2, n.body];
                                if (n && n.error) throw new Error(JSON.stringify(n.error));
                                if (n && n.requestError) throw new Error(JSON.stringify(n.requestError));
                                throw new Error(g(n.status))
                        }
                    })
                })
            },
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        errorMessage: "",
                        hintMessage: "",
                        allowedFileTypes: ["image/jpeg", "image/png"]
                    }, t.processFiles = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = e[0], (this.setState({
                                            errorMessage: "",
                                            isLoading: !0
                                        }), this.isFileTypeAcceptable(t)) ? [3, 1] : (this.setState({
                                            errorMessage: y(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: M(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 2:
                                        return [4, h(t, this.props.shouldBase64Encode, this.props.base64EncodedPropertyName)];
                                    case 3:
                                        n = r.sent(), r.label = 4;
                                    case 4:
                                        return r.trys.push([4, 6, , 7]), [4, D(this.props.uploadURL, n)];
                                    case 5:
                                        return a = r.sent(), this.setState({
                                            isLoading: !1
                                        }), this.props.onFinishUploading && this.props.onFinishUploading(a, n), [3, 7];
                                    case 6:
                                        return i = r.sent(), this.setState({
                                            errorMessage: i.message,
                                            isLoading: !1
                                        }), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = "";
                    e = this.props.isRequiredImageDimensions ? f(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : p(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return i.createElement(l, {
                        allowedFileTypes: this.state.allowedFileTypes,
                        errorMessage: this.state.errorMessage,
                        hintMessage: this.state.hintMessage,
                        isLoading: this.state.isLoading,
                        processFiles: this.processFiles
                    })
                }, t.prototype.isFileTypeAcceptable = function(e) {
                    return this.state.allowedFileTypes.includes(e.type)
                }, t.prototype.isFileSizeAcceptable = function(e) {
                    var t = 1e6 * this.props.maxFileSizeMegabytes;
                    return e.size <= t
                }, t
            }(i.Component),
            w = n(8),
            b = n(11),
            k = n(50),
            T = n(134),
            S = (n(1122), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(d._17, {
                        className: "image-uploader-modal",
                        background: d.m.Base
                    }, i.createElement(Y, r.__assign({
                        onFinishUploading: this.props.onClose
                    }, this.props)), i.createElement(T.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(i.Component)),
            E = Object(w.a)(null, a)(S);
        n.d(t, "a", function() {
            return Y
        }), n.d(t, "b", function() {
            return E
        })
    },
    1046: function(e, t, n) {
        "use strict";
        var a = n(970);
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, "b", function() {
            return a.b
        })
    },
    1121: function(e, t) {},
    1122: function(e, t) {},
    1135: function(e, t, n) {
        "use strict";

        function a(e, t) {
            void 0 === t && (t = s);
            var n = i.__assign({}, s, t),
                a = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
            return n.textLink && (a += r(n.textLink.url, n.textLink.text)), a
        }

        function r(e, t) {
            return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
        }
        t.a = a;
        var i = n(0),
            s = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            }
    },
    1158: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object.assign({
                id: Object(o.b)(),
                errors: [],
                fileSizeBytes: 0,
                filePartIndex: 0,
                fileByteIndex: 0,
                viewable: i.private,
                videoAuthToken: "",
                status: u.queued,
                progressPercentage: 0
            }, e)
        }

        function r(e) {
            var t = [];
            return c.includes(e.type) || t.push(new Error(Object(s.d)("File type {filetype} is not currently supported", {
                filetype: e.type
            }, "VideoUploadModel"))), e.size > d && t.push(new Error(Object(s.d)("File too large. The maximum file size is {maxFileSizeLabel}", {
                maxFileSizeLabel: l
            }, "VideoUploadModel"))), t
        }
        n.d(t, "b", function() {
            return i
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        }), t.c = a, t.d = r;
        var i, s = n(2),
            o = n(20),
            d = 2e10,
            l = "20GB";
        ! function(e) {
            e[e.published = 0] = "published", e[e.private = 1] = "private"
        }(i || (i = {}));
        var u, c = ["video/mp4", "video/quicktime", "video/avi", "video/x-flv", "video/x-msvideo", "video/*", ".mp4", ".mov", ".flv", ".avi"];
        ! function(e) {
            e[e.queued = 0] = "queued", e[e.uploading = 1] = "uploading", e[e.completed = 2] = "completed", e[e.errored = 3] = "errored", e[e.stopped = 4] = "stopped"
        }(u || (u = {}))
    },
    1159: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1160: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                a = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                r = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                i = function(e) {
                    return function(t, n, i, s) {
                        var o = a(t),
                            d = r[e][a(t)];
                        return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
            return e.defineLocale("ar", {
                months: s,
                monthsShort: s,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: i("s"),
                    m: i("m"),
                    mm: i("m"),
                    h: i("h"),
                    hh: i("h"),
                    d: i("d"),
                    dd: i("d"),
                    M: i("M"),
                    MM: i("M"),
                    y: i("y"),
                    yy: i("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1161: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-dz", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        })
    },
    1162: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        })
    },
    1163: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    0: "0"
                },
                n = function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                a = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                },
                r = function(e) {
                    return function(t, r, i, s) {
                        var o = n(t),
                            d = a[e][n(t)];
                        return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t)
                    }
                },
                i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            return e.defineLocale("ar-ly", {
                months: i,
                monthsShort: i,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1164: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1165: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                };
            return e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1166: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1167: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            return e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e) return e + "-ıncı";
                    var n = e % 10,
                        a = e % 100 - n,
                        r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1168: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(r[a], +e)
            }
            return e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1169: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1170: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                },
                n = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
            return e.defineLocale("bn", {
                months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1171: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "༡",
                    2: "༢",
                    3: "༣",
                    4: "༤",
                    5: "༥",
                    6: "༦",
                    7: "༧",
                    8: "༨",
                    9: "༩",
                    0: "༠"
                },
                n = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                };
            return e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1172: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return e + " " + r({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[n], e)
            }

            function n(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }

            function a(e) {
                return e > 9 ? a(e % 10) : e
            }

            function r(e, t) {
                return 2 === t ? i(e) : e
            }

            function i(e) {
                var t = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
            }
            return e.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY h[e]mm A",
                    LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    return e + (1 === e ? "añ" : "vet")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1173: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1174: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "[el] D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "[el] D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1175: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "pár sekund" : "pár sekundami";
                    case "m":
                        return n ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return n || r ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return n || r ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return n || r ? "den" : "dnem";
                    case "dd":
                        return n || r ? i + (t(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return n || r ? "měsíc" : "měsícem";
                    case "MM":
                        return n || r ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return n || r ? "rok" : "rokem";
                    case "yy":
                        return n || r ? i + (t(e) ? "roky" : "let") : i + "lety"
                }
            }
            var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                r = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
            return e.defineLocale("cs", {
                months: a,
                monthsShort: r,
                monthsParse: function(e, t) {
                    var n, a = [];
                    for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return a
                }(a, r),
                shortMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                    return n
                }(r),
                longMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                    return n
                }(a),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1176: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1177: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = e,
                        n = "",
                        a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1178: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1179: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1180: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1181: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH.mm",
                    LLLL: "dddd, D. MMMM YYYY HH.mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1182: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            return e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(e) {
                    return "މފ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            })
        })
    },
    1183: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            return e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return e ? /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, n) {
                    var a = this._calendarEl[e],
                        r = n && n.hours();
                    return t(a) && (a = a.apply(n)), a.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1184: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1185: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            })
        })
    },
    1186: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1187: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1188: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1189: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-a de] MMMM, YYYY",
                    LLL: "D[-a de] MMMM, YYYY HH:mm",
                    LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1190: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1191: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
            return e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1192: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
            }
            return e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1193: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1194: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "۱",
                    2: "۲",
                    3: "۳",
                    4: "۴",
                    5: "۵",
                    6: "۶",
                    7: "۷",
                    8: "۸",
                    9: "۹",
                    0: "۰"
                },
                n = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                };
            return e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1195: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, a, r) {
                var i = "";
                switch (a) {
                    case "s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return r ? "minuutin" : "minuutti";
                    case "mm":
                        i = r ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return r ? "tunnin" : "tunti";
                    case "hh":
                        i = r ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return r ? "päivän" : "päivä";
                    case "dd":
                        i = r ? "päivän" : "päivää";
                        break;
                    case "M":
                        return r ? "kuukauden" : "kuukausi";
                    case "MM":
                        i = r ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return r ? "vuoden" : "vuosi";
                    case "yy":
                        i = r ? "vuoden" : "vuotta"
                }
                return i = n(e, r) + " " + i
            }

            function n(e, t) {
                return e < 10 ? t ? r[e] : a[e] : e
            }
            var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                r = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
            return e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1196: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    m: "ein minutt",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaði",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1197: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "D":
                            return e + (1 === e ? "er" : "");
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1198: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                            case "M":
                            case "Q":
                            case "D":
                            case "DDD":
                            case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                                case "W":
                                return e + (1 === e ? "re" : "e")
                    }
                }
            })
        })
    },
    1199: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                            case "M":
                            case "Q":
                            case "D":
                            case "DDD":
                            case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                                case "W":
                                return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1200: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            return e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1201: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
                n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
                a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            return e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1202: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1203: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["thodde secondanim", "thodde second"],
                    m: ["eka mintan", "ek minute"],
                    mm: [e + " mintanim", e + " mintam"],
                    h: ["eka horan", "ek hor"],
                    hh: [e + " horanim", e + " hor"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disanim", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineanim", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsanim", e + " vorsam"]
                };
                return t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("gom-latn", {
                months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Ieta to] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fatlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "D":
                            return e + "er";
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                        case "w":
                        case "W":
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /rati|sokalli|donparam|sanje/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            })
        })
    },
    1204: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        })
    },
    1205: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1206: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return a += 1 === e ? "dan" : "dana";
                    case "MM":
                        return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            return e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1207: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = e;
                switch (n) {
                    case "s":
                        return a || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (a || t ? " perc" : " perce");
                    case "mm":
                        return r + (a || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (a || t ? " óra" : " órája");
                    case "hh":
                        return r + (a || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (a || t ? " nap" : " napja");
                    case "dd":
                        return r + (a || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (a || t ? " hónap" : " hónapja");
                    case "MM":
                        return r + (a || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (a || t ? " év" : " éve");
                    case "yy":
                        return r + (a || t ? " év" : " éve")
                }
                return ""
            }

            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
            }
            var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            return e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return n.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return n.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1208: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1209: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1210: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e % 100 == 11 || e % 10 != 1
            }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? i + (n || r ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
                    case "hh":
                        return t(e) ? i + (n || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                    case "d":
                        return n ? "dagur" : r ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? i + "dagar" : i + (r ? "daga" : "dögum") : n ? i + "dagur" : i + (r ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : r ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
                    case "y":
                        return n || r ? "ár" : "ári";
                    case "yy":
                        return t(e) ? i + (n || r ? "ár" : "árum") : i + (n || r ? "ár" : "ári")
                }
            }
            return e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1211: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1212: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 HH:mm dddd",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日 HH:mm dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        })
    },
    1213: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1214: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                    },
                    s: "რამდენიმე წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1215: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            return e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(e) {
                    var n = e % 10,
                        a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1216: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1217: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "೧",
                    2: "೨",
                    3: "೩",
                    4: "೪",
                    5: "೫",
                    6: "೬",
                    7: "೭",
                    8: "೮",
                    9: "೯",
                    0: "೦"
                },
                n = {
                    "೧": "1",
                    "೨": "2",
                    "೩": "3",
                    "೪": "4",
                    "೫": "5",
                    "೬": "6",
                    "೭": "7",
                    "೮": "8",
                    "೯": "9",
                    "೦": "0"
                };
            return e.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function(e) {
                    return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function(e) {
                    return e + "ನೇ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1218: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        })
    },
    1219: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            };
            return e.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кече саат] LT",
                    lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function(e) {
                    var n = e % 10,
                        a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1220: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? r[n][0] : r[n][1]
            }

            function n(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }

            function a(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }

            function r(e) {
                if (e = parseInt(e, 10), isNaN(e)) return !1;
                if (e < 0) return !0;
                if (e < 10) return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10,
                        n = e / 10;
                    return r(0 === t ? n : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;) e /= 10;
                    return r(e)
                }
                return e /= 1e3, r(e)
            }
            return e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "e puer Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1221: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            })
        })
    },
    1222: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
            }

            function n(e, t, n, a) {
                return t ? r(n)[0] : a ? r(n)[1] : r(n)[2]
            }

            function a(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }

            function r(e) {
                return s[e].split("_")
            }

            function i(e, t, i, s) {
                var o = e + " ";
                return 1 === e ? o + n(e, t, i[0], s) : t ? o + (a(e) ? r(i)[1] : r(i)[0]) : s ? o + r(i)[1] : o + (a(e) ? r(i)[1] : r(i)[2])
            }
            var s = {
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            return e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: t,
                    m: n,
                    mm: i,
                    h: n,
                    hh: i,
                    d: n,
                    dd: i,
                    M: n,
                    MM: i,
                    y: n,
                    yy: i
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1223: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }

            function n(e, n, a) {
                return e + " " + t(i[a], e, n)
            }

            function a(e, n, a) {
                return t(i[a], e, n)
            }

            function r(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }
            var i = {
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            return e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: r,
                    m: a,
                    mm: n,
                    h: a,
                    hh: n,
                    d: a,
                    dd: n,
                    M: a,
                    MM: n,
                    y: a,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1224: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mjesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1225: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1226: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1227: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        })
    },
    1228: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = "";
                if (t) switch (n) {
                    case "s":
                        r = "काही सेकंद";
                        break;
                    case "m":
                        r = "एक मिनिट";
                        break;
                    case "mm":
                        r = "%d मिनिटे";
                        break;
                    case "h":
                        r = "एक तास";
                        break;
                    case "hh":
                        r = "%d तास";
                        break;
                    case "d":
                        r = "एक दिवस";
                        break;
                    case "dd":
                        r = "%d दिवस";
                        break;
                    case "M":
                        r = "एक महिना";
                        break;
                    case "MM":
                        r = "%d महिने";
                        break;
                    case "y":
                        r = "एक वर्ष";
                        break;
                    case "yy":
                        r = "%d वर्षे"
                } else switch (n) {
                    case "s":
                        r = "काही सेकंदां";
                        break;
                    case "m":
                        r = "एका मिनिटा";
                        break;
                    case "mm":
                        r = "%d मिनिटां";
                        break;
                    case "h":
                        r = "एका तासा";
                        break;
                    case "hh":
                        r = "%d तासां";
                        break;
                    case "d":
                        r = "एका दिवसा";
                        break;
                    case "dd":
                        r = "%d दिवसां";
                        break;
                    case "M":
                        r = "एका महिन्या";
                        break;
                    case "MM":
                        r = "%d महिन्यां";
                        break;
                    case "y":
                        r = "एका वर्षा";
                        break;
                    case "yy":
                        r = "%d वर्षां"
                }
                return r.replace(/%d/i, e)
            }
            var n = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                a = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return a[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return n[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1229: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1230: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1231: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "၁",
                    2: "၂",
                    3: "၃",
                    4: "၄",
                    5: "၅",
                    6: "၆",
                    7: "၇",
                    8: "၈",
                    9: "၉",
                    0: "၀"
                },
                n = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                };
            return e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1232: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1233: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            return e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1234: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1235: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            return e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1236: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1237: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "੧",
                    2: "੨",
                    3: "੩",
                    4: "੪",
                    5: "੫",
                    6: "੬",
                    7: "੭",
                    8: "੮",
                    9: "੯",
                    0: "੦"
                },
                n = {
                    "੧": "1",
                    "੨": "2",
                    "੩": "3",
                    "੪": "4",
                    "੫": "5",
                    "੬": "6",
                    "੭": "7",
                    "੮": "8",
                    "੯": "9",
                    "੦": "0"
                };
            return e.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function(e) {
                    return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1238: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }

            function n(e, n, a) {
                var r = e + " ";
                switch (a) {
                    case "m":
                        return n ? "minuta" : "minutę";
                    case "mm":
                        return r + (t(e) ? "minuty" : "minut");
                    case "h":
                        return n ? "godzina" : "godzinę";
                    case "hh":
                        return r + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return r + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return r + (t(e) ? "lata" : "lat")
                }
            }
            var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                r = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
            return e.defineLocale("pl", {
                months: function(e, t) {
                    return e ? "" === t ? "(" + r[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? r[e.month()] : a[e.month()] : a
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: n,
                    y: "rok",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1239: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("pt", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1240: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            })
        })
    },
    1241: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n) {
                var a = {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + a[n]
            }
            return e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1242: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === a ? n ? "минута" : "минуту" : e + " " + t(r[a], +e)
            }
            var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            return e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1243: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            return e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1244: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1245: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            })
        })
    },
    1246: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e) {
                return e > 1 && e < 5
            }

            function n(e, n, a, r) {
                var i = e + " ";
                switch (a) {
                    case "s":
                        return n || r ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return n ? "minúta" : r ? "minútu" : "minútou";
                    case "mm":
                        return n || r ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return n ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return n || r ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return n || r ? "deň" : "dňom";
                    case "dd":
                        return n || r ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return n || r ? "mesiac" : "mesiacom";
                    case "MM":
                        return n || r ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return n || r ? "rok" : "rokom";
                    case "yy":
                        return n || r ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
                }
            }
            var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                r = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            return e.defineLocale("sk", {
                months: a,
                monthsShort: r,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1247: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                    case "d":
                        return t || a ? "en dan" : "enim dnem";
                    case "dd":
                        return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                    case "M":
                        return t || a ? "en mesec" : "enim mesecem";
                    case "MM":
                        return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                    case "y":
                        return t || a ? "eno leto" : "enim letom";
                    case "yy":
                        return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
                }
            }
            return e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1248: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1249: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1250: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            return e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "дан",
                    dd: t.translate,
                    M: "месец",
                    MM: t.translate,
                    y: "годину",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1251: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1252: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1253: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "masiku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1254: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                    1: "௧",
                    2: "௨",
                    3: "௩",
                    4: "௪",
                    5: "௫",
                    6: "௬",
                    7: "௭",
                    8: "௮",
                    9: "௯",
                    0: "௦"
                },
                n = {
                    "௧": "1",
                    "௨": "2",
                    "௩": "3",
                    "௪": "4",
                    "௫": "5",
                    "௬": "6",
                    "௭": "7",
                    "௮": "8",
                    "௯": "9",
                    "௦": "0"
                };
            return e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function(e) {
                    return e + "வது"
                },
                preparse: function(e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e, t, n) {
                    return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1255: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        })
    },
    1256: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "minutu balun",
                    m: "minutu ida",
                    mm: "minutus %d",
                    h: "horas ida",
                    hh: "horas %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1257: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        })
    },
    1258: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1259: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
            }

            function n(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
            }

            function a(e, t, n, a) {
                var i = r(e);
                switch (n) {
                    case "mm":
                        return i + " tup";
                    case "hh":
                        return i + " rep";
                    case "dd":
                        return i + " jaj";
                    case "MM":
                        return i + " jar";
                    case "yy":
                        return i + " DIS"
                }
            }

            function r(e) {
                var t = Math.floor(e % 1e3 / 100),
                    n = Math.floor(e % 100 / 10),
                    a = e % 10,
                    r = "";
                return t > 0 && (r += i[t] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + i[n] + "maH"), a > 0 && (r += ("" !== r ? " " : "") + i[a]), "" === r ? "pagh" : r
            }
            var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
            return e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: t,
                    past: n,
                    s: "puS lup",
                    m: "wa’ tup",
                    mm: a,
                    h: "wa’ rep",
                    hh: a,
                    d: "wa’ jaj",
                    dd: a,
                    M: "wa’ jar",
                    MM: a,
                    y: "wa’ DIS",
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1260: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            return e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(e) {
                    if (0 === e) return e + "'ıncı";
                    var n = e % 10,
                        a = e % 100 - n,
                        r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1261: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t, n, a) {
                var r = {
                    s: ["viensas secunds", "'iensas secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", e + " ars"]
                };
                return a ? r[n][0] : t ? r[n][0] : r[n][1]
            }
            return e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function(e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1262: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1263: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        })
    },
    1264: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";

            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function n(e, n, a) {
                var r = {
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(r[a], +e)
            }

            function a(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            }

            function r(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            return e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: r("[Сьогодні "),
                    nextDay: r("[Завтра "),
                    lastDay: r("[Вчора "),
                    nextWeek: r("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return r("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return r("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1265: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            return e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1266: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1267: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        })
    },
    1268: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1269: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1270: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1271: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        })
    },
    1272: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日 HH:mm",
                    LLLL: "YYYY年MMMD日dddd HH:mm",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    },
    1273: function(e, t, n) {
        ! function(e, t) {
            t(n(913))
        }(0, function(e) {
            "use strict";
            return e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日 HH:mm",
                    LLLL: "YYYY年MMMD日dddd HH:mm",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        })
    },
    1280: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(3),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(i.Q, {
                        readOnly: !0,
                        type: i.R.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return s
        })
    },
    1286: function(e, t, n) {
        "use strict";

        function a(e, t) {
            return {
                id: e.id,
                owner: {
                    id: e.owner.id,
                    login: t.owner.login,
                    roles: {
                        isPartner: t.owner.roles.isPartner
                    }
                },
                broadcastType: t.broadcastType,
                game: t.game
            }
        }
        n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "b", function() {
            return _
        });
        var r, i = n(0),
            s = n(2),
            o = n(14),
            d = n(140),
            l = n(1323),
            u = (n.n(l), this);
        ! function(e) {
            e.Video = "video", e.Collection = "collection"
        }(r || (r = {}));
        var c = function(e, t, n) {
                return i.__awaiter(u, void 0, void 0, function() {
                    var r, u, _, m;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!e) return [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, n.query({
                                    query: l,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return r = i.sent().data, u = a(e, r.video), _ = {
                                    channel: u.owner.login,
                                    channel_id: Number(u.owner.id),
                                    game: u.game ? u.game.name : null,
                                    partner: u.owner.roles.isPartner,
                                    location: o.PageviewLocation.VideoWatchPage,
                                    share_context: t.collectionID ? o.ShareItemContext.Collection : null,
                                    share_platform: t.sharePlatform,
                                    shared_item_id: u.id,
                                    shared_item_type: Object(d.a)(u.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: u.id,
                                    source_item_type: Object(d.a)(u.broadcastType)
                                }, s.n.tracking.track(o.SpadeEventType.ShareItem, _), [3, 4];
                            case 3:
                                return m = i.sent(), s.i.error(m.toString(), c.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            _ = function(e, t, n) {
                return i.__awaiter(u, void 0, void 0, function() {
                    var r, u, c, m;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!e || !t.collectionID) return [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, n.query({
                                    query: l,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return r = i.sent().data, u = a(e, r.video), c = {
                                    channel: u.owner.login,
                                    channel_id: Number(u.owner.id),
                                    game: null,
                                    partner: u.owner.roles.isPartner,
                                    location: o.PageviewLocation.VideoWatchPage,
                                    share_context: null,
                                    share_platform: t.sharePlatform,
                                    shared_item_id: t.collectionID,
                                    shared_item_type: o.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: u.id,
                                    source_item_type: Object(d.a)(u.broadcastType)
                                }, s.n.tracking.track(o.SpadeEventType.ShareItem, c), [3, 4];
                            case 3:
                                return m = i.sent(), s.i.error(m.toString(), _.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
    },
    1289: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "j", function() {
            return i
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "i", function() {
            return o
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "h", function() {
            return l
        }), n.d(t, "l", function() {
            return u
        }), n.d(t, "m", function() {
            return c
        }), n.d(t, "d", function() {
            return _
        }), n.d(t, "c", function() {
            return m
        }), n.d(t, "e", function() {
            return h
        }), n.d(t, "k", function() {
            return p
        });
        var a = (n(1349), "generated"),
            r = "custom",
            i = "uploading",
            s = "pending_transcode",
            o = "transcoding",
            d = "failed",
            l = "recorded",
            u = [l, "recording"],
            c = [o, s, d],
            _ = "FORMAT_NOT_SUPPORTED",
            m = "BAD_ASSET",
            h = "INTERNAL_ERROR",
            p = {
                VIDEO_PREMIERE_STATUS_UNSCHEDULED: "unscheduled",
                VIDEO_PREMIERE_STATUS_SCHEDULED: "scheduled",
                VIDEO_PREMIERE_STATUS_STARTED: "started",
                VIDEO_PREMIERE_STATUS_FAILED: "failed"
            }
    },
    1291: function(e, t, n) {
        "use strict";
        var a = n(1289);
        n.d(t, "VIDEO_STATUS_FAILED", function() {
            return a.f
        }), n.d(t, "VIDEO_STATUS_PENDING_TRANSCODE", function() {
            return a.g
        }), n.d(t, "VIDEO_STATUS_RECORDED", function() {
            return a.h
        }), n.d(t, "VIDEO_STATUS_TRANSCODING", function() {
            return a.i
        }), n.d(t, "VIDEO_STATUS_UPLOADING", function() {
            return a.j
        }), n.d(t, "VideoPremiereStatus", function() {
            return a.k
        }), n.d(t, "availableVideoStatuses", function() {
            return a.l
        }), n.d(t, "pendingVideoStatuses", function() {
            return a.m
        });
        var r = (n(1158), n(1878));
        n.n(r);
        n.o(r, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return r.EditModalErrorOrigin
        }), n.o(r, "NotificationType") && n.d(t, "NotificationType", function() {
            return r.NotificationType
        });
        var i = n(1879);
        n.d(t, "NotificationType", function() {
            return i.a
        });
        var s = n(1880);
        n.n(s);
        n.o(s, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return s.EditModalErrorOrigin
        });
        var o = n(1881);
        n.d(t, "EditModalErrorOrigin", function() {
            return o.a
        })
    },
    1292: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return f
        });
        var a, r = n(0),
            i = n(21),
            s = (n.n(i), n(1)),
            o = (n.n(s), n(2)),
            d = n(1280),
            l = n(1046),
            u = n(64),
            c = n(1135),
            _ = n(14),
            m = n(1286),
            h = n(3),
            p = "collection-link";
        ! function(e) {
            e.Embed = "option_embed", e.Link = "option_link", e.Twitter = "twitter", e.Reddit = "reddit", e.VKontakte = "vk", e.Facebook = "fb", e.Copy = "link", e.Unknown = ""
        }(a || (a = {}));
        var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCollectionLink = function() {
                        if (t.props.collectionID && "" !== t.props.collectionID && t.props.video) return s.createElement(h.U, {
                            padding: {
                                top: 1
                            },
                            "data-test-selector": p
                        }, s.createElement(h._21, null, Object(o.d)("Collection Link", "VideoShareBox")), s.createElement(d.a, {
                            value: L(t.props.collectionID),
                            onClick: t.onShareClickCollectionLinkHandler
                        }))
                    }, t.onShareClickEmbedHandler = function() {
                        t.props.onShareClick({
                            shareTrackingType: m.a.Video,
                            sharePlatform: a.Embed,
                            shareURL: y(t.props)
                        })
                    }, t.onShareClickCollectionLinkHandler = function() {
                        t.props.collectionID && "" !== t.props.collectionID ? t.props.onShareClick({
                            shareTrackingType: m.a.Collection,
                            sharePlatform: a.Link,
                            collectionID: t.props.collectionID,
                            shareURL: L(t.props.collectionID)
                        }) : o.i.withCategory("video-share-box").error(new Error("Expected a collection ID for collection share link, got " + t.props.collectionID), "Expected a collection ID for collection share link, got " + t.props.collectionID)
                    }, t.onShareClickVideoLinkHandler = function() {
                        var e = {
                            shareTrackingType: m.a.Video,
                            sharePlatform: a.Link,
                            shareURL: M(t.props)
                        };
                        t.props.collectionID && (e.collectionID = t.props.collectionID), t.props.onShareClick(e)
                    }, t.onShareClickSocialHandler = function(e) {
                        t.props.onShareClick({
                            shareTrackingType: m.a.Video,
                            sharePlatform: g(e),
                            shareURL: M(t.props)
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u.a, null, s.createElement(h.u, {
                        type: this.props.buttonType,
                        "data-test-selector": "dropdown-button"
                    }, Object(o.d)("Share", "VideoShareBox")), this.props.video ? s.createElement(h.p, {
                        direction: this.props.balloonDirection,
                        size: h.r.Small
                    }, s.createElement(h.U, {
                        padding: 1
                    }, s.createElement(h.U, {
                        display: h.H.Flex,
                        justifyContent: h.T.Between
                    }, s.createElement(l.a, {
                        url: M(this.props),
                        onShareClick: this.onShareClickSocialHandler,
                        type: l.b.Twitter,
                        text: this.props.video.title,
                        "data-test-selector": "twitter-button"
                    }), s.createElement(l.a, {
                        url: M(this.props),
                        onShareClick: this.onShareClickSocialHandler,
                        type: l.b.Facebook,
                        "data-test-selector": "fb-button"
                    }), s.createElement(l.a, {
                        url: M(this.props),
                        onShareClick: this.onShareClickSocialHandler,
                        type: l.b.VKontakte,
                        "data-test-selector": "vk-button"
                    }), s.createElement(l.a, {
                        url: M(this.props),
                        onShareClick: this.onShareClickSocialHandler,
                        type: l.b.Reddit,
                        text: this.props.video.title,
                        "data-test-selector": "reddit-button"
                    }), s.createElement(l.a, {
                        url: M(this.props),
                        onShareClick: this.onShareClickSocialHandler,
                        type: l.b.Copy,
                        "data-test-selector": "copy-link-button"
                    })), this.renderCollectionLink(), s.createElement(h.U, {
                        "data-test-selector": "video-link",
                        padding: {
                            top: 1
                        }
                    }, s.createElement(h._21, null, Object(o.d)("Video Link", "VideoShareBox")), s.createElement(d.a, {
                        value: M(this.props),
                        onClick: this.onShareClickVideoLinkHandler
                    })), s.createElement(h.U, {
                        "data-test-selector": "embed-link",
                        padding: {
                            top: 1
                        }
                    }, s.createElement(h._21, null, Object(o.d)("Embed Video", "VideoShareBox")), s.createElement(d.a, {
                        value: v(this.props),
                        onClick: this.onShareClickEmbedHandler
                    })))) : s.createElement(h.p, null))
                }, t
            }(s.Component),
            g = function(e) {
                switch (e) {
                    case l.b.Twitter:
                        return a.Twitter;
                    case l.b.Reddit:
                        return a.Reddit;
                    case l.b.VKontakte:
                        return a.VKontakte;
                    case l.b.Facebook:
                        return a.Facebook;
                    case l.b.Copy:
                        return a.Copy;
                    default:
                        return o.i.withCategory("video-share-box").error(new Error("Unknown social button type: " + e), "Unknown social button type: " + e), a.Unknown
                }
            },
            M = function(e) {
                return e.video ? e.collectionID ? D(e.video.id, {
                    collection: e.collectionID
                }) : D(e.video.id) : ""
            },
            y = function(e) {
                return e.video ? D(e.video.id, {
                    tt_medium: _.PageviewMedium.VideoEmbed,
                    tt_content: _.PageviewContent.TextLink
                }) : ""
            },
            v = function(e) {
                if (!e.video) return "";
                var t, n = e.video.owner.displayName,
                    a = e.video.title,
                    r = Y(e.video.id),
                    i = y(e);
                return t = a ? Object(o.d)("Watch {title} from {displayName} on www.twitch.tv", {
                    displayName: n,
                    title: a
                }, "VideoShareBox") : Object(o.d)("Watch video from {displayName} on www.twitch.tv", {
                    displayName: n
                }, "VideoShareBox"), Object(c.a)(r, {
                    textLink: {
                        url: i,
                        text: t
                    },
                    allowScrolling: !1,
                    allowFullscreen: !0
                })
            },
            L = function(e) {
                return new URL("https://www.twitch.tv/collections/" + e).toString()
            },
            D = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = i.stringify(t)), n.toString()
            },
            Y = function(e) {
                return "https://player.twitch.tv/?" + i.stringify({
                    video: "v" + e,
                    autoplay: !1
                })
            }
    },
    1322: function(e, t, n) {
        function a(e) {
            return n(r(e))
        }

        function r(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        var i = {
            "./af": 1159,
            "./af.js": 1159,
            "./ar": 1160,
            "./ar-dz": 1161,
            "./ar-dz.js": 1161,
            "./ar-kw": 1162,
            "./ar-kw.js": 1162,
            "./ar-ly": 1163,
            "./ar-ly.js": 1163,
            "./ar-ma": 1164,
            "./ar-ma.js": 1164,
            "./ar-sa": 1165,
            "./ar-sa.js": 1165,
            "./ar-tn": 1166,
            "./ar-tn.js": 1166,
            "./ar.js": 1160,
            "./az": 1167,
            "./az.js": 1167,
            "./be": 1168,
            "./be.js": 1168,
            "./bg": 1169,
            "./bg.js": 1169,
            "./bn": 1170,
            "./bn.js": 1170,
            "./bo": 1171,
            "./bo.js": 1171,
            "./br": 1172,
            "./br.js": 1172,
            "./bs": 1173,
            "./bs.js": 1173,
            "./ca": 1174,
            "./ca.js": 1174,
            "./cs": 1175,
            "./cs.js": 1175,
            "./cv": 1176,
            "./cv.js": 1176,
            "./cy": 1177,
            "./cy.js": 1177,
            "./da": 1178,
            "./da.js": 1178,
            "./de": 1179,
            "./de-at": 1180,
            "./de-at.js": 1180,
            "./de-ch": 1181,
            "./de-ch.js": 1181,
            "./de.js": 1179,
            "./dv": 1182,
            "./dv.js": 1182,
            "./el": 1183,
            "./el.js": 1183,
            "./en-au": 1184,
            "./en-au.js": 1184,
            "./en-ca": 1185,
            "./en-ca.js": 1185,
            "./en-gb": 1186,
            "./en-gb.js": 1186,
            "./en-ie": 1187,
            "./en-ie.js": 1187,
            "./en-nz": 1188,
            "./en-nz.js": 1188,
            "./eo": 1189,
            "./eo.js": 1189,
            "./es": 1190,
            "./es-do": 1191,
            "./es-do.js": 1191,
            "./es.js": 1190,
            "./et": 1192,
            "./et.js": 1192,
            "./eu": 1193,
            "./eu.js": 1193,
            "./fa": 1194,
            "./fa.js": 1194,
            "./fi": 1195,
            "./fi.js": 1195,
            "./fo": 1196,
            "./fo.js": 1196,
            "./fr": 1197,
            "./fr-ca": 1198,
            "./fr-ca.js": 1198,
            "./fr-ch": 1199,
            "./fr-ch.js": 1199,
            "./fr.js": 1197,
            "./fy": 1200,
            "./fy.js": 1200,
            "./gd": 1201,
            "./gd.js": 1201,
            "./gl": 1202,
            "./gl.js": 1202,
            "./gom-latn": 1203,
            "./gom-latn.js": 1203,
            "./he": 1204,
            "./he.js": 1204,
            "./hi": 1205,
            "./hi.js": 1205,
            "./hr": 1206,
            "./hr.js": 1206,
            "./hu": 1207,
            "./hu.js": 1207,
            "./hy-am": 1208,
            "./hy-am.js": 1208,
            "./id": 1209,
            "./id.js": 1209,
            "./is": 1210,
            "./is.js": 1210,
            "./it": 1211,
            "./it.js": 1211,
            "./ja": 1212,
            "./ja.js": 1212,
            "./jv": 1213,
            "./jv.js": 1213,
            "./ka": 1214,
            "./ka.js": 1214,
            "./kk": 1215,
            "./kk.js": 1215,
            "./km": 1216,
            "./km.js": 1216,
            "./kn": 1217,
            "./kn.js": 1217,
            "./ko": 1218,
            "./ko.js": 1218,
            "./ky": 1219,
            "./ky.js": 1219,
            "./lb": 1220,
            "./lb.js": 1220,
            "./lo": 1221,
            "./lo.js": 1221,
            "./lt": 1222,
            "./lt.js": 1222,
            "./lv": 1223,
            "./lv.js": 1223,
            "./me": 1224,
            "./me.js": 1224,
            "./mi": 1225,
            "./mi.js": 1225,
            "./mk": 1226,
            "./mk.js": 1226,
            "./ml": 1227,
            "./ml.js": 1227,
            "./mr": 1228,
            "./mr.js": 1228,
            "./ms": 1229,
            "./ms-my": 1230,
            "./ms-my.js": 1230,
            "./ms.js": 1229,
            "./my": 1231,
            "./my.js": 1231,
            "./nb": 1232,
            "./nb.js": 1232,
            "./ne": 1233,
            "./ne.js": 1233,
            "./nl": 1234,
            "./nl-be": 1235,
            "./nl-be.js": 1235,
            "./nl.js": 1234,
            "./nn": 1236,
            "./nn.js": 1236,
            "./pa-in": 1237,
            "./pa-in.js": 1237,
            "./pl": 1238,
            "./pl.js": 1238,
            "./pt": 1239,
            "./pt-br": 1240,
            "./pt-br.js": 1240,
            "./pt.js": 1239,
            "./ro": 1241,
            "./ro.js": 1241,
            "./ru": 1242,
            "./ru.js": 1242,
            "./sd": 1243,
            "./sd.js": 1243,
            "./se": 1244,
            "./se.js": 1244,
            "./si": 1245,
            "./si.js": 1245,
            "./sk": 1246,
            "./sk.js": 1246,
            "./sl": 1247,
            "./sl.js": 1247,
            "./sq": 1248,
            "./sq.js": 1248,
            "./sr": 1249,
            "./sr-cyrl": 1250,
            "./sr-cyrl.js": 1250,
            "./sr.js": 1249,
            "./ss": 1251,
            "./ss.js": 1251,
            "./sv": 1252,
            "./sv.js": 1252,
            "./sw": 1253,
            "./sw.js": 1253,
            "./ta": 1254,
            "./ta.js": 1254,
            "./te": 1255,
            "./te.js": 1255,
            "./tet": 1256,
            "./tet.js": 1256,
            "./th": 1257,
            "./th.js": 1257,
            "./tl-ph": 1258,
            "./tl-ph.js": 1258,
            "./tlh": 1259,
            "./tlh.js": 1259,
            "./tr": 1260,
            "./tr.js": 1260,
            "./tzl": 1261,
            "./tzl.js": 1261,
            "./tzm": 1262,
            "./tzm-latn": 1263,
            "./tzm-latn.js": 1263,
            "./tzm.js": 1262,
            "./uk": 1264,
            "./uk.js": 1264,
            "./ur": 1265,
            "./ur.js": 1265,
            "./uz": 1266,
            "./uz-latn": 1267,
            "./uz-latn.js": 1267,
            "./uz.js": 1266,
            "./vi": 1268,
            "./vi.js": 1268,
            "./x-pseudo": 1269,
            "./x-pseudo.js": 1269,
            "./yo": 1270,
            "./yo.js": 1270,
            "./zh-cn": 1271,
            "./zh-cn.js": 1271,
            "./zh-hk": 1272,
            "./zh-hk.js": 1272,
            "./zh-tw": 1273,
            "./zh-tw.js": 1273
        };
        a.keys = function() {
            return Object.keys(i)
        }, a.resolve = r, e.exports = a, a.id = 1322
    },
    1323: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoShareBox_Tracking_Video"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "broadcastType"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "login"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isPartner"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 223
            }
        };
        n.loc.source = {
            body: "query VideoShareBox_Tracking_Video($videoID: ID!) {\n  video(id: $videoID) {\n    id\n    broadcastType\n    owner {\n      id\n      login\n      roles {\n        isPartner\n      }\n    }\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1348: function(e, t, n) {
        "use strict";

        function a(e, t) {
            return e.find(function(e) {
                return e.url === t
            }) ? t : e[0] ? e[0].url : ""
        }

        function r(e, t, n, a) {
            for (var r = [i.b, i.a].map(function(t) {
                    return e.filter(function(e) {
                        return e.type === t
                    })
                }), o = r[0], d = r[1]; o.length > s - 1;) o.pop();
            var l = o.slice();
            if (a) l.push({
                url: a,
                type: i.a
            });
            else if (!t) {
                var u = d.find(function(e) {
                    return e.url === n
                });
                u ? l.push(u) : d.length > 0 && l.push(d[0])
            }
            return l
        }
        n.d(t, "b", function() {
            return o
        }), t.c = a, t.a = r;
        var i = n(1289),
            s = 4,
            o = function(e, t, n, a, r, i, s) {
                var o = document.createElement("canvas");
                o.width = i, o.height = s;
                var d = o.getContext("2d"),
                    l = "";
                if (d) {
                    var u = new Image;
                    u.src = e, d.drawImage(u, t, n, a, r, 0, 0, i, s), l = o.toDataURL("image/png")
                }
                return o.remove(), l
            }
    },
    1349: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            Created: "created",
            Downloading: "downloading",
            Transmuxing: "transmuxing",
            Failed: "failed",
            Complete: "complete"
        }
    },
    1350: function(e, t) {},
    1409: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(2),
            s = n(3),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange(e.currentTarget.value)
                    }, t.renderLanguageOption = function(e) {
                        return r.createElement("option", {
                            key: e.languageCode,
                            value: e.languageCode
                        }, e.name)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(s._14, {
                        onChange: this.onChange,
                        disabled: this.props.disabled,
                        defaultValue: this.props.defaultLanguage
                    }, i.a.locales.map(this.renderLanguageOption));
                    return this.props.label && (e = r.createElement(s.M, {
                        label: this.props.label
                    }, e)), e
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    1440: function(e, t, n) {
        e.exports = n(1441)
    },
    1441: function(e, t, n) {
        e.exports = function(e) {
            function t(a) {
                if (n[a]) return n[a].exports;
                var r = n[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.i = function(e) {
                return e
            }, t.d = function(e, n, a) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: a
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 10)
        }([function(e, t) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function r(e) {
                if (u === setTimeout) return setTimeout(e, 0);
                if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
                try {
                    return u(e, 0)
                } catch (t) {
                    try {
                        return u.call(null, e, 0)
                    } catch (t) {
                        return u.call(this, e, 0)
                    }
                }
            }

            function i(e) {
                if (c === clearTimeout) return clearTimeout(e);
                if ((c === a || !c) && clearTimeout) return c = clearTimeout, clearTimeout(e);
                try {
                    return c(e)
                } catch (t) {
                    try {
                        return c.call(null, e)
                    } catch (t) {
                        return c.call(this, e)
                    }
                }
            }

            function s() {
                p && m && (p = !1, m.length ? h = m.concat(h) : f = -1, h.length && o())
            }

            function o() {
                if (!p) {
                    var e = r(s);
                    p = !0;
                    for (var t = h.length; t;) {
                        for (m = h, h = []; ++f < t;) m && m[f].run();
                        f = -1, t = h.length
                    }
                    m = null, p = !1, i(e)
                }
            }

            function d(e, t) {
                this.fun = e, this.array = t
            }

            function l() {}
            var u, c, _ = e.exports = {};
            ! function() {
                try {
                    u = "function" == typeof setTimeout ? setTimeout : n
                } catch (e) {
                    u = n
                }
                try {
                    c = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    c = a
                }
            }();
            var m, h = [],
                p = !1,
                f = -1;
            _.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                h.push(new d(e, t)), 1 !== h.length || p || r(o)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, _.title = "browser", _.browser = !0, _.env = {}, _.argv = [], _.version = "", _.versions = {}, _.on = l, _.addListener = l, _.once = l, _.off = l, _.removeListener = l, _.removeAllListeners = l, _.emit = l, _.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, _.cwd = function() {
                return "/"
            }, _.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, _.umask = function() {
                return 0
            }
        }, function(e, t, n) {
            "use strict";

            function a(e) {
                return function() {
                    return e
                }
            }
            var r = function() {};
            r.thatReturns = a, r.thatReturnsFalse = a(!1), r.thatReturnsTrue = a(!0), r.thatReturnsNull = a(null), r.thatReturnsThis = function() {
                return this
            }, r.thatReturnsArgument = function(e) {
                return e
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                function n(e, t, n, r, i, s, o, d) {
                    if (a(t), !e) {
                        var l;
                        if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var u = [n, r, i, s, o, d],
                                c = 0;
                            l = new Error(t.replace(/%s/g, function() {
                                return u[c++]
                            })), l.name = "Invariant Violation"
                        }
                        throw l.framesToPop = 1, l
                    }
                }
                var a = function(e) {};
                "production" !== t.env.NODE_ENV && (a = function(e) {
                    if (void 0 === e) throw new Error("invariant requires an error message argument")
                }), e.exports = n
            }).call(t, n(0))
        }, function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                var a = n(1),
                    r = a;
                "production" !== t.env.NODE_ENV && function() {
                    var e = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                        var r = 0,
                            i = "Warning: " + e.replace(/%s/g, function() {
                                return n[r++]
                            });
                        "undefined" != typeof console && console.error(i);
                        try {
                            throw new Error(i)
                        } catch (e) {}
                    };
                    r = function(t, n) {
                        if (void 0 === n) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                        if (0 !== n.indexOf("Failed Composite propType: ") && !t) {
                            for (var a = arguments.length, r = Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) r[i - 2] = arguments[i];
                            e.apply(void 0, [n].concat(r))
                        }
                    }
                }(), e.exports = r
            }).call(t, n(0))
        }, function(e, t, n) {
            (function(t) {
                if ("production" !== t.env.NODE_ENV) {
                    var a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                        r = function(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === a
                        };
                    e.exports = n(9)(r, !0)
                } else e.exports = n(8)()
            }).call(t, n(0))
        }, function(e, t) {
            e.exports = n(1)
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                function a(e, n, a, d, l) {
                    if ("production" !== t.env.NODE_ENV)
                        for (var u in e)
                            if (e.hasOwnProperty(u)) {
                                var c;
                                try {
                                    r("function" == typeof e[u], "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", d || "React class", a, u), c = e[u](n, u, d, a, null, s)
                                } catch (e) {
                                    c = e
                                }
                                if (i(!c || c instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", a, u, typeof c), c instanceof Error && !(c.message in o)) {
                                    o[c.message] = !0;
                                    var _ = l ? l() : "";
                                    i(!1, "Failed %s type: %s%s", a, c.message, null != _ ? _ : "")
                                }
                            }
                }
                if ("production" !== t.env.NODE_ENV) var r = n(2),
                    i = n(4),
                    s = n(3),
                    o = {};
                e.exports = a
            }).call(t, n(0))
        }, function(e, t, n) {
            "use strict";
            var a = n(1),
                r = n(2),
                i = n(3);
            e.exports = function() {
                function e(e, t, n, a, s, o) {
                    o !== i && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t
                };
                return n.checkPropTypes = a, n.PropTypes = n, n
            }
        }, function(e, t, n) {
            "use strict";
            (function(t) {
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    s = n(3),
                    o = n(7);
                e.exports = function(e, n) {
                    function d(e) {
                        var t = e && (b && e[b] || e[k]);
                        if ("function" == typeof t) return t
                    }

                    function l(e, t) {
                        return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
                    }

                    function u(e) {
                        this.message = e, this.stack = ""
                    }

                    function c(e) {
                        function a(a, l, c, _, m, h, p) {
                            if (_ = _ || T, h = h || c, p !== s)
                                if (n) r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                else if ("production" !== t.env.NODE_ENV && "undefined" != typeof console) {
                                var f = _ + ":" + c;
                                !o[f] && d < 3 && (i(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", h, _), o[f] = !0, d++)
                            }
                            return null == l[c] ? a ? new u(null === l[c] ? "The " + m + " `" + h + "` is marked as required in `" + _ + "`, but its value is `null`." : "The " + m + " `" + h + "` is marked as required in `" + _ + "`, but its value is `undefined`.") : null : e(l, c, _, m, h)
                        }
                        if ("production" !== t.env.NODE_ENV) var o = {},
                            d = 0;
                        var l = a.bind(null, !1);
                        return l.isRequired = a.bind(null, !0), l
                    }

                    function _(e) {
                        function t(t, n, a, r, i, s) {
                            var o = t[n];
                            if (L(o) !== e) return new u("Invalid " + r + " `" + i + "` of type `" + D(o) + "` supplied to `" + a + "`, expected `" + e + "`.");
                            return null
                        }
                        return c(t)
                    }

                    function m(e) {
                        function t(t, n, a, r, i) {
                            if ("function" != typeof e) return new u("Property `" + i + "` of component `" + a + "` has invalid PropType notation inside arrayOf.");
                            var o = t[n];
                            if (!Array.isArray(o)) {
                                return new u("Invalid " + r + " `" + i + "` of type `" + L(o) + "` supplied to `" + a + "`, expected an array.")
                            }
                            for (var d = 0; d < o.length; d++) {
                                var l = e(o, d, a, r, i + "[" + d + "]", s);
                                if (l instanceof Error) return l
                            }
                            return null
                        }
                        return c(t)
                    }

                    function h(e) {
                        function t(t, n, a, r, i) {
                            if (!(t[n] instanceof e)) {
                                var s = e.name || T;
                                return new u("Invalid " + r + " `" + i + "` of type `" + w(t[n]) + "` supplied to `" + a + "`, expected instance of `" + s + "`.")
                            }
                            return null
                        }
                        return c(t)
                    }

                    function p(e) {
                        function n(t, n, a, r, i) {
                            for (var s = t[n], o = 0; o < e.length; o++)
                                if (l(s, e[o])) return null;
                            return new u("Invalid " + r + " `" + i + "` of value `" + s + "` supplied to `" + a + "`, expected one of " + JSON.stringify(e) + ".")
                        }
                        return Array.isArray(e) ? c(n) : ("production" !== t.env.NODE_ENV && i(!1, "Invalid argument supplied to oneOf, expected an instance of array."), a.thatReturnsNull)
                    }

                    function f(e) {
                        function t(t, n, a, r, i) {
                            if ("function" != typeof e) return new u("Property `" + i + "` of component `" + a + "` has invalid PropType notation inside objectOf.");
                            var o = t[n],
                                d = L(o);
                            if ("object" !== d) return new u("Invalid " + r + " `" + i + "` of type `" + d + "` supplied to `" + a + "`, expected an object.");
                            for (var l in o)
                                if (o.hasOwnProperty(l)) {
                                    var c = e(o, l, a, r, i + "." + l, s);
                                    if (c instanceof Error) return c
                                }
                            return null
                        }
                        return c(t)
                    }

                    function g(e) {
                        function n(t, n, a, r, i) {
                            for (var o = 0; o < e.length; o++) {
                                if (null == (0, e[o])(t, n, a, r, i, s)) return null
                            }
                            return new u("Invalid " + r + " `" + i + "` supplied to `" + a + "`.")
                        }
                        if (!Array.isArray(e)) return "production" !== t.env.NODE_ENV && i(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), a.thatReturnsNull;
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            if ("function" != typeof o) return i(!1, "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.", Y(o), r), a.thatReturnsNull
                        }
                        return c(n)
                    }

                    function M(e) {
                        function t(t, n, a, r, i) {
                            var o = t[n],
                                d = L(o);
                            if ("object" !== d) return new u("Invalid " + r + " `" + i + "` of type `" + d + "` supplied to `" + a + "`, expected `object`.");
                            for (var l in e) {
                                var c = e[l];
                                if (c) {
                                    var _ = c(o, l, a, r, i + "." + l, s);
                                    if (_) return _
                                }
                            }
                            return null
                        }
                        return c(t)
                    }

                    function y(t) {
                        switch (typeof t) {
                            case "number":
                            case "string":
                            case "undefined":
                                return !0;
                            case "boolean":
                                return !t;
                            case "object":
                                if (Array.isArray(t)) return t.every(y);
                                if (null === t || e(t)) return !0;
                                var n = d(t);
                                if (!n) return !1;
                                var a, r = n.call(t);
                                if (n !== t.entries) {
                                    for (; !(a = r.next()).done;)
                                        if (!y(a.value)) return !1
                                } else
                                    for (; !(a = r.next()).done;) {
                                        var i = a.value;
                                        if (i && !y(i[1])) return !1
                                    }
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function v(e, t) {
                        return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                    }

                    function L(e) {
                        var t = typeof e;
                        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : v(t, e) ? "symbol" : t
                    }

                    function D(e) {
                        if (void 0 === e || null === e) return "" + e;
                        var t = L(e);
                        if ("object" === t) {
                            if (e instanceof Date) return "date";
                            if (e instanceof RegExp) return "regexp"
                        }
                        return t
                    }

                    function Y(e) {
                        var t = D(e);
                        switch (t) {
                            case "array":
                            case "object":
                                return "an " + t;
                            case "boolean":
                            case "date":
                            case "regexp":
                                return "a " + t;
                            default:
                                return t
                        }
                    }

                    function w(e) {
                        return e.constructor && e.constructor.name ? e.constructor.name : T
                    }
                    var b = "function" == typeof Symbol && Symbol.iterator,
                        k = "@@iterator",
                        T = "<<anonymous>>",
                        S = {
                            array: _("array"),
                            bool: _("boolean"),
                            func: _("function"),
                            number: _("number"),
                            object: _("object"),
                            string: _("string"),
                            symbol: _("symbol"),
                            any: function() {
                                return c(a.thatReturnsNull)
                            }(),
                            arrayOf: m,
                            element: function() {
                                function t(t, n, a, r, i) {
                                    var s = t[n];
                                    if (!e(s)) {
                                        return new u("Invalid " + r + " `" + i + "` of type `" + L(s) + "` supplied to `" + a + "`, expected a single ReactElement.")
                                    }
                                    return null
                                }
                                return c(t)
                            }(),
                            instanceOf: h,
                            node: function() {
                                function e(e, t, n, a, r) {
                                    return y(e[t]) ? null : new u("Invalid " + a + " `" + r + "` supplied to `" + n + "`, expected a ReactNode.")
                                }
                                return c(e)
                            }(),
                            objectOf: f,
                            oneOf: p,
                            oneOfType: g,
                            shape: M
                        };
                    return u.prototype = Error.prototype, S.checkPropTypes = o, S.PropTypes = S, S
                }
            }).call(t, n(0))
        }, function(e, t, n) {
            "use strict";

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function o(e) {
                var t = e.getBoundingClientRect(),
                    n = document.documentElement;
                return {
                    top: t.top + window.pageYOffset - n.clientTop,
                    left: t.left + window.pageXOffset - n.clientLeft
                }
            }

            function d(e) {
                var t = void 0,
                    n = void 0;
                return e.touches ? (t = e.touches[0].pageX, n = e.touches[0].pageY) : (t = e.pageX, n = e.pageY), {
                    x: t,
                    y: n
                }
            }

            function l(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }

            function u(e) {
                return !e.width || !e.height
            }

            function c(e) {
                var t = void 0;
                return "n" === e ? t = "s" : "ne" === e ? t = "sw" : "e" === e ? t = "w" : "se" === e ? t = "nw" : "s" === e ? t = "n" : "sw" === e ? t = "ne" : "w" === e ? t = "e" : "nw" === e && (t = "se"), t
            }

            function _(e, t) {
                var n = t.naturalWidth,
                    a = t.naturalHeight,
                    r = n / a,
                    i = h({}, e);
                return i.width ? i.height = i.width / i.aspect * r : i.height && (i.width = i.height * i.aspect / r), i.y + i.height > 100 && (i.height = 100 - i.y, i.width = i.height * i.aspect / r), i.x + i.width > 100 && (i.width = 100 - i.x, i.height = i.width / i.aspect * r), i
            }
            var m = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n), a && e(t, a), t
                    }
                }(),
                h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                },
                p = n(6),
                f = a(p),
                g = n(5),
                M = a(g),
                y = function(e) {
                    function t(e) {
                        r(this, t);
                        var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.onDocMouseTouchMove = n.onDocMouseTouchMove.bind(n), n.onDocMouseTouchEnd = n.onDocMouseTouchEnd.bind(n), n.onImageLoad = n.onImageLoad.bind(n), n.onComponentMouseTouchDown = n.onComponentMouseTouchDown.bind(n), n.onComponentKeyDown = n.onComponentKeyDown.bind(n), n.onCropMouseTouchDown = n.onCropMouseTouchDown.bind(n), n.state = {
                            crop: n.nextCropState(e.crop)
                        }, n
                    }
                    return s(t, e), m(t, [{
                        key: "componentDidMount",
                        value: function() {
                            if (document.addEventListener("mousemove", this.onDocMouseTouchMove), document.addEventListener("touchmove", this.onDocMouseTouchMove), document.addEventListener("mouseup", this.onDocMouseTouchEnd), document.addEventListener("touchend", this.onDocMouseTouchEnd), document.addEventListener("touchcancel", this.onDocMouseTouchEnd), this.imageRef.complete || this.imageRef.readyState)
                                if (0 === this.imageRef.naturalWidth) {
                                    var e = this.imageRef.src;
                                    this.imageRef.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", this.imageRef.src = e
                                } else this.onImageLoad(this.imageRef)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = this;
                            if (e.crop) {
                                var n = this.nextCropState(e.crop),
                                    a = n.aspect !== this.state.crop.aspect;
                                n.aspect && (n = _(n, this.imageRef)), this.cropInvalid = u(n), this.setState({
                                    crop: n
                                }, function() {
                                    a && t.props.onAspectRatioChange(n, t.getPixelCrop(n))
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("mousemove", this.onDocMouseTouchMove), document.removeEventListener("touchmove", this.onDocMouseTouchMove), document.removeEventListener("mouseup", this.onDocMouseTouchEnd), document.removeEventListener("touchend", this.onDocMouseTouchEnd), document.removeEventListener("touchcancel", this.onDocMouseTouchEnd)
                        }
                    }, {
                        key: "onDocMouseTouchMove",
                        value: function(e) {
                            if (this.props.onDragStart(), !this.props.disabled && this.mouseDownOnCrop) {
                                e.preventDefault();
                                var t = this.state.crop,
                                    n = this.evData,
                                    a = d(e);
                                n.isResize && t.aspect && n.cropOffset && (a.y = this.straightenYPath(a.x));
                                var r = a.x - n.clientStartX;
                                n.xDiffPc = r / n.imageWidth * 100;
                                var i = a.y - n.clientStartY;
                                n.yDiffPc = i / n.imageHeight * 100, n.isResize ? this.resizeCrop() : this.dragCrop(), this.cropInvalid = !1, this.props.onChange(t, this.getPixelCrop(t)), this.setState({
                                    crop: t
                                })
                            }
                        }
                    }, {
                        key: "onCropMouseTouchDown",
                        value: function(e) {
                            if (!this.props.disabled) {
                                e.preventDefault();
                                var t = this.state.crop,
                                    n = d(e);
                                this.componentRef.focus();
                                var a = e.target.dataset.ord,
                                    r = "nw" === a || "w" === a || "sw" === a,
                                    i = "nw" === a || "n" === a || "ne" === a,
                                    s = void 0;
                                t.aspect && (s = o(this.cropSelectRef)), this.evData = {
                                    imageWidth: this.imageRef.width,
                                    imageHeight: this.imageRef.height,
                                    clientStartX: n.x,
                                    clientStartY: n.y,
                                    cropStartWidth: t.width,
                                    cropStartHeight: t.height,
                                    cropStartX: r ? t.x + t.width : t.x,
                                    cropStartY: i ? t.y + t.height : t.y,
                                    xInversed: r,
                                    yInversed: i,
                                    xCrossOver: r,
                                    yCrossOver: i,
                                    startXCrossOver: r,
                                    startYCrossOver: i,
                                    isResize: e.target !== this.cropSelectRef,
                                    ord: a,
                                    cropOffset: s
                                }, this.mouseDownOnCrop = !0
                            }
                        }
                    }, {
                        key: "onComponentMouseTouchDown",
                        value: function(e) {
                            if ((e.target === this.imageCopyRef || e.target === this.cropWrapperRef) && !this.props.disabled) {
                                e.preventDefault();
                                var t = !0 === this.props.keepSelection ? {} : this.state.crop,
                                    n = d(e);
                                this.componentRef.focus();
                                var a = o(this.imageRef),
                                    r = (n.x - a.left) / this.imageRef.width * 100,
                                    i = (n.y - a.top) / this.imageRef.height * 100;
                                t.x = r, t.y = i, t.width = 0, t.height = 0, this.evData = {
                                    imageWidth: this.imageRef.width,
                                    imageHeight: this.imageRef.height,
                                    clientStartX: n.x,
                                    clientStartY: n.y,
                                    cropStartWidth: t.width,
                                    cropStartHeight: t.height,
                                    cropStartX: t.x,
                                    cropStartY: t.y,
                                    xInversed: !1,
                                    yInversed: !1,
                                    xCrossOver: !1,
                                    yCrossOver: !1,
                                    startXCrossOver: !1,
                                    startYCrossOver: !1,
                                    isResize: !0,
                                    ord: "nw"
                                }, this.mouseDownOnCrop = !0, this.setState({
                                    newCropIsBeingDrawn: !0
                                })
                            }
                        }
                    }, {
                        key: "onComponentKeyDown",
                        value: function(e) {
                            var n = this;
                            if (!this.props.disabled) {
                                var a = e.which,
                                    r = this.state.crop,
                                    i = !1;
                                r.width && r.height && (a === t.arrowKey.left ? (r.x -= t.nudgeStep, i = !0) : a === t.arrowKey.right ? (r.x += t.nudgeStep, i = !0) : a === t.arrowKey.up ? (r.y -= t.nudgeStep, i = !0) : a === t.arrowKey.down && (r.y += t.nudgeStep, i = !0), i && (e.preventDefault(), r.x = l(r.x, 0, 100 - r.width), r.y = l(r.y, 0, 100 - r.height), this.setState({
                                    crop: r
                                }, function() {
                                    n.props.onChange(r, n.getPixelCrop(r)), n.props.onComplete(r, n.getPixelCrop(r))
                                })))
                            }
                        }
                    }, {
                        key: "onDocMouseTouchEnd",
                        value: function() {
                            if (this.props.onDragEnd(), !this.props.disabled && this.mouseDownOnCrop) {
                                var e = this.state.crop;
                                this.cropInvalid = u(e), this.mouseDownOnCrop = !1, this.props.onComplete(e, this.getPixelCrop(e)), this.setState({
                                    newCropIsBeingDrawn: !1
                                })
                            }
                        }
                    }, {
                        key: "onImageLoad",
                        value: function(e) {
                            var t = this.state.crop;
                            t.aspect && (t = _(t, e), this.cropInvalid = u(t), this.setState({
                                crop: t
                            })), this.props.onImageLoaded && this.props.onImageLoaded(t, e, this.getPixelCrop(t))
                        }
                    }, {
                        key: "getPixelCrop",
                        value: function(e) {
                            return {
                                x: Math.round(this.imageRef.naturalWidth * (e.x / 100)),
                                y: Math.round(this.imageRef.naturalHeight * (e.y / 100)),
                                width: Math.round(this.imageRef.naturalWidth * (e.width / 100)),
                                height: Math.round(this.imageRef.naturalHeight * (e.height / 100))
                            }
                        }
                    }, {
                        key: "getCropStyle",
                        value: function() {
                            return {
                                top: this.state.crop.y + "%",
                                left: this.state.crop.x + "%",
                                width: this.state.crop.width + "%",
                                height: this.state.crop.height + "%"
                            }
                        }
                    }, {
                        key: "getNewSize",
                        value: function() {
                            var e = this.state.crop,
                                t = this.evData,
                                n = t.imageWidth / t.imageHeight,
                                a = t.cropStartWidth + t.xDiffPc;
                            t.xCrossOver && (a = Math.abs(a));
                            var r = this.props.maxWidth;
                            this.state.newCropIsBeingDrawn || (r = ["nw", "w", "sw"].indexOf(t.inversedXOrd || t.ord) > -1 ? t.cropStartX : 100 - t.cropStartX, r = l(r, 100, this.props.maxWidth)), a = l(a, this.props.minWidth, r);
                            var i = void 0;
                            i = e.aspect ? a / e.aspect * n : t.cropStartHeight + t.yDiffPc, t.yCrossOver && (i = Math.min(Math.abs(i), t.cropStartY));
                            var s = this.props.maxHeight;
                            return this.state.newCropIsBeingDrawn || (s = ["nw", "n", "ne"].indexOf(t.inversedYOrd || t.ord) > -1 ? t.cropStartY : 100 - t.cropStartY, s = l(s, 100, this.props.maxHeight)), i = l(i, this.props.minHeight, s), e.aspect && (a = l(i * e.aspect / n, 0, 100)), {
                                width: a,
                                height: i
                            }
                        }
                    }, {
                        key: "dragCrop",
                        value: function() {
                            var e = this.state.crop,
                                t = this.evData;
                            e.x = l(t.cropStartX + t.xDiffPc, 0, 100 - e.width), e.y = l(t.cropStartY + t.yDiffPc, 0, 100 - e.height)
                        }
                    }, {
                        key: "resizeCrop",
                        value: function() {
                            var e = this.state.crop,
                                n = this.evData,
                                a = n.ord;
                            n.xInversed && (n.xDiffPc -= 2 * n.cropStartWidth), n.yInversed && (n.yDiffPc -= 2 * n.cropStartHeight);
                            var r = this.getNewSize(),
                                i = n.cropStartX,
                                s = n.cropStartY;
                            n.xCrossOver && (i = e.x + (e.width - r.width)), n.yCrossOver && (s = !1 === n.lastYCrossover ? e.y - r.height : e.y + (e.height - r.height)), e.aspect || t.xyOrds.indexOf(a) > -1 ? (e.x = l(i, 0, 100 - r.width), e.y = l(s, 0, 100 - r.height), e.width = r.width, e.height = r.height) : t.xOrds.indexOf(a) > -1 ? (e.x = l(i, 0, 100 - r.width), e.width = r.width) : t.yOrds.indexOf(a) > -1 && (e.y = l(s, 0, 100 - r.height), e.height = r.height), n.lastYCrossover = n.yCrossOver, this.crossOverCheck()
                        }
                    }, {
                        key: "straightenYPath",
                        value: function(e) {
                            var t = this.evData,
                                n = t.ord,
                                a = t.cropOffset,
                                r = t.cropStartWidth / 100 * t.imageWidth,
                                i = t.cropStartHeight / 100 * t.imageHeight,
                                s = void 0,
                                o = void 0;
                            return "nw" === n || "se" === n ? (s = i / r, o = a.top - a.left * s) : (s = -i / r, o = a.top + (i - a.left * s)), s * e + o
                        }
                    }, {
                        key: "createCropSelection",
                        value: function() {
                            var e = this,
                                t = this.getCropStyle();
                            return f.default.createElement("div", {
                                ref: function(t) {
                                    return e.cropSelectRef = t
                                },
                                style: t,
                                className: "ReactCrop__crop-selection",
                                onMouseDown: this.onCropMouseTouchDown,
                                onTouchStart: this.onCropMouseTouchDown
                            }, f.default.createElement("div", {
                                className: "ReactCrop__drag-bar ord-n",
                                "data-ord": "n"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-bar ord-e",
                                "data-ord": "e"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-bar ord-s",
                                "data-ord": "s"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-bar ord-w",
                                "data-ord": "w"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-nw",
                                "data-ord": "nw"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-n",
                                "data-ord": "n"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-ne",
                                "data-ord": "ne"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-e",
                                "data-ord": "e"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-se",
                                "data-ord": "se"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-s",
                                "data-ord": "s"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-sw",
                                "data-ord": "sw"
                            }), f.default.createElement("div", {
                                className: "ReactCrop__drag-handle ord-w",
                                "data-ord": "w"
                            }))
                        }
                    }, {
                        key: "nextCropState",
                        value: function(e) {
                            var n = h({}, t.defaultCrop, e);
                            return this.cropInvalid = u(n), n
                        }
                    }, {
                        key: "crossOverCheck",
                        value: function() {
                            var e = this.evData;
                            (!e.xCrossOver && -Math.abs(e.cropStartWidth) - e.xDiffPc >= 0 || e.xCrossOver && -Math.abs(e.cropStartWidth) - e.xDiffPc <= 0) && (e.xCrossOver = !e.xCrossOver), (!e.yCrossOver && -Math.abs(e.cropStartHeight) - e.yDiffPc >= 0 || e.yCrossOver && -Math.abs(e.cropStartHeight) - e.yDiffPc <= 0) && (e.yCrossOver = !e.yCrossOver);
                            var t = e.xCrossOver !== e.startXCrossOver,
                                n = e.yCrossOver !== e.startYCrossOver;
                            e.inversedXOrd = !!t && c(e.ord), e.inversedYOrd = !!n && c(e.ord)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = void 0;
                            this.cropInvalid || (t = this.createCropSelection());
                            var n = ["ReactCrop"];
                            return this.state.newCropIsBeingDrawn && n.push("ReactCrop--new-crop"), this.state.crop.aspect && n.push("ReactCrop--fixed-aspect"), this.props.disabled && n.push("ReactCrop--disabled"), f.default.createElement("div", {
                                ref: function(t) {
                                    return e.componentRef = t
                                },
                                className: n.join(" "),
                                onTouchStart: this.onComponentMouseTouchDown,
                                onMouseDown: this.onComponentMouseTouchDown,
                                tabIndex: "1",
                                onKeyDown: this.onComponentKeyDown
                            }, f.default.createElement("img", {
                                ref: function(t) {
                                    return e.imageRef = t
                                },
                                crossOrigin: this.props.crossorigin,
                                className: "ReactCrop__image",
                                src: this.props.src,
                                onLoad: function(t) {
                                    return e.onImageLoad(t.target)
                                },
                                alt: this.props.imageAlt
                            }), f.default.createElement("div", {
                                className: "ReactCrop__crop-wrapper",
                                ref: function(t) {
                                    return e.cropWrapperRef = t
                                }
                            }, f.default.createElement("img", {
                                ref: function(t) {
                                    return e.imageCopyRef = t
                                },
                                crossOrigin: this.props.crossorigin,
                                className: "ReactCrop__image-copy",
                                src: this.props.src,
                                alt: this.props.imageAlt
                            }), t), this.props.children)
                        }
                    }]), t
                }(p.Component);
            y.propTypes = {
                src: M.default.string.isRequired,
                crop: M.default.shape({
                    x: M.default.number,
                    y: M.default.number,
                    width: M.default.number,
                    height: M.default.number
                }),
                imageAlt: M.default.string,
                minWidth: M.default.number,
                minHeight: M.default.number,
                maxWidth: M.default.number,
                maxHeight: M.default.number,
                keepSelection: M.default.bool,
                onChange: M.default.func,
                onComplete: M.default.func,
                onImageLoaded: M.default.func,
                onAspectRatioChange: M.default.func,
                onDragStart: M.default.func,
                onDragEnd: M.default.func,
                disabled: M.default.bool,
                crossorigin: M.default.string,
                children: M.default.oneOfType([M.default.arrayOf(M.default.node), M.default.node])
            }, y.defaultProps = {
                crop: void 0,
                crossorigin: void 0,
                disabled: !1,
                imageAlt: "",
                maxWidth: 100,
                maxHeight: 100,
                minWidth: 0,
                minHeight: 0,
                keepSelection: !1,
                onChange: function() {},
                onComplete: function() {},
                onImageLoaded: function() {},
                onAspectRatioChange: function() {},
                onDragStart: function() {},
                onDragEnd: function() {},
                children: void 0
            }, y.xOrds = ["e", "w"], y.yOrds = ["n", "s"], y.xyOrds = ["nw", "ne", "se", "sw"], y.arrowKey = {
                left: 37,
                up: 38,
                right: 39,
                down: 40
            }, y.nudgeStep = .2, y.defaultCrop = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                aspect: !1
            }, e.exports = y
        }])
    },
    1452: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(2),
            s = n(1286),
            o = n(1292),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTrackHandler = function(e) {
                        switch (e.shareTrackingType) {
                            case s.a.Video:
                                return Object(s.c)(t.props.video, e, i.n.apollo.client);
                            case s.a.Collection:
                                return Object(s.b)(t.props.video, e, i.n.apollo.client);
                            default:
                                return e.shareTrackingType
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(o.b, {
                        collectionID: this.props.collectionID,
                        video: this.props.video,
                        buttonType: this.props.buttonType,
                        balloonDirection: this.props.balloonDirection,
                        onShareClick: this.onTrackHandler
                    })
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    1453: function(e, t) {},
    1541: function(e, t) {},
    1542: function(e, t) {},
    1543: function(e, t) {},
    1878: function(e, t) {},
    1879: function(e, t, n) {
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
    1880: function(e, t) {},
    1881: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Save = 0] = "Save", e[e.Thumbnail = 1] = "Thumbnail", e[e.Initialize = 2] = "Initialize"
        }(a || (a = {}))
    },
    1882: function(e, t, n) {
        ! function(t, a) {
            "use strict";
            var r;
            try {
                r = n(913)
            } catch (e) {}
            e.exports = a(r)
        }(0, function(e) {
            "use strict";
            var t = "function" == typeof e,
                n = !!window.addEventListener,
                a = window.document,
                r = window.setTimeout,
                i = function(e, t, a, r) {
                    n ? e.addEventListener(t, a, !!r) : e.attachEvent("on" + t, a)
                },
                s = function(e, t, a, r) {
                    n ? e.removeEventListener(t, a, !!r) : e.detachEvent("on" + t, a)
                },
                o = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                d = function(e, t) {
                    return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
                },
                l = function(e, t) {
                    d(e, t) || (e.className = "" === e.className ? t : e.className + " " + t)
                },
                u = function(e, t) {
                    e.className = o((" " + e.className + " ").replace(" " + t + " ", " "))
                },
                c = function(e) {
                    return /Array/.test(Object.prototype.toString.call(e))
                },
                _ = function(e) {
                    return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
                },
                m = function(e) {
                    var t = e.getDay();
                    return 0 === t || 6 === t
                },
                h = function(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                },
                p = function(e, t) {
                    return [31, h(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                f = function(e) {
                    _(e) && e.setHours(0, 0, 0, 0)
                },
                g = function(e, t) {
                    return e.getTime() === t.getTime()
                },
                M = function(e, t, n) {
                    var a, r;
                    for (a in t) r = void 0 !== e[a], r && "object" == typeof t[a] && null !== t[a] && void 0 === t[a].nodeName ? _(t[a]) ? n && (e[a] = new Date(t[a].getTime())) : c(t[a]) ? n && (e[a] = t[a].slice(0)) : e[a] = M({}, t[a], n) : !n && r || (e[a] = t[a]);
                    return e
                },
                y = function(e, t, n) {
                    var r;
                    a.createEvent ? (r = a.createEvent("HTMLEvents"), r.initEvent(t, !0, !1), r = M(r, n), e.dispatchEvent(r)) : a.createEventObject && (r = a.createEventObject(), r = M(r, n), e.fireEvent("on" + t, r))
                },
                v = function(e) {
                    return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e
                },
                L = {
                    field: null,
                    bound: void 0,
                    position: "bottom left",
                    reposition: !0,
                    format: "YYYY-MM-DD",
                    toString: null,
                    parse: null,
                    defaultDate: null,
                    setDefaultDate: !1,
                    firstDay: 0,
                    formatStrict: !1,
                    minDate: null,
                    maxDate: null,
                    yearRange: 10,
                    showWeekNumber: !1,
                    pickWholeWeek: !1,
                    minYear: 0,
                    maxYear: 9999,
                    minMonth: void 0,
                    maxMonth: void 0,
                    startRange: null,
                    endRange: null,
                    isRTL: !1,
                    yearSuffix: "",
                    showMonthAfterYear: !1,
                    showDaysInNextAndPreviousMonths: !1,
                    enableSelectionDaysInNextAndPreviousMonths: !1,
                    numberOfMonths: 1,
                    mainCalendar: "left",
                    container: void 0,
                    blurFieldOnSelect: !0,
                    i18n: {
                        previousMonth: "Previous Month",
                        nextMonth: "Next Month",
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                    theme: null,
                    events: [],
                    onSelect: null,
                    onOpen: null,
                    onClose: null,
                    onDraw: null
                },
                D = function(e, t, n) {
                    for (t += e.firstDay; t >= 7;) t -= 7;
                    return n ? e.i18n.weekdaysShort[t] : e.i18n.weekdays[t]
                },
                Y = function(e) {
                    var t = [],
                        n = "false";
                    if (e.isEmpty) {
                        if (!e.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
                        t.push("is-outside-current-month"), e.enableSelectionDaysInNextAndPreviousMonths || t.push("is-selection-disabled")
                    }
                    return e.isDisabled && t.push("is-disabled"), e.isToday && t.push("is-today"), e.isSelected && (t.push("is-selected"), n = "true"), e.hasEvent && t.push("has-event"), e.isInRange && t.push("is-inrange"), e.isStartRange && t.push("is-startrange"), e.isEndRange && t.push("is-endrange"), '<td data-day="' + e.day + '" class="' + t.join(" ") + '" aria-selected="' + n + '"><button class="pika-button pika-day" type="button" data-pika-year="' + e.year + '" data-pika-month="' + e.month + '" data-pika-day="' + e.day + '">' + e.day + "</button></td>"
                },
                w = function(e, t, n) {
                    var a = new Date(n, 0, 1);
                    return '<td class="pika-week">' + Math.ceil(((new Date(n, t, e) - a) / 864e5 + a.getDay() + 1) / 7) + "</td>"
                },
                b = function(e, t, n, a) {
                    return '<tr class="pika-row' + (n ? " pick-whole-week" : "") + (a ? " is-selected" : "") + '">' + (t ? e.reverse() : e).join("") + "</tr>"
                },
                k = function(e) {
                    return "<tbody>" + e.join("") + "</tbody>"
                },
                T = function(e) {
                    var t, n = [];
                    for (e.showWeekNumber && n.push("<th></th>"), t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + D(e, t) + '">' + D(e, t, !0) + "</abbr></th>");
                    return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
                },
                S = function(e, t, n, a, r, i) {
                    var s, o, d, l, u, _ = e._o,
                        m = n === _.minYear,
                        h = n === _.maxYear,
                        p = '<div id="' + i + '" class="pika-title" role="heading" aria-live="assertive">',
                        f = !0,
                        g = !0;
                    for (d = [], s = 0; s < 12; s++) d.push('<option value="' + (n === r ? s - t : 12 + s - t) + '"' + (s === a ? ' selected="selected"' : "") + (m && s < _.minMonth || h && s > _.maxMonth ? 'disabled="disabled"' : "") + ">" + _.i18n.months[s] + "</option>");
                    for (l = '<div class="pika-label">' + _.i18n.months[a] + '<select class="pika-select pika-select-month" tabindex="-1">' + d.join("") + "</select></div>", c(_.yearRange) ? (s = _.yearRange[0], o = _.yearRange[1] + 1) : (s = n - _.yearRange, o = 1 + n + _.yearRange), d = []; s < o && s <= _.maxYear; s++) s >= _.minYear && d.push('<option value="' + s + '"' + (s === n ? ' selected="selected"' : "") + ">" + s + "</option>");
                    return u = '<div class="pika-label">' + n + _.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + d.join("") + "</select></div>", _.showMonthAfterYear ? p += u + l : p += l + u, m && (0 === a || _.minMonth >= a) && (f = !1), h && (11 === a || _.maxMonth <= a) && (g = !1), 0 === t && (p += '<button class="pika-prev' + (f ? "" : " is-disabled") + '" type="button">' + _.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (p += '<button class="pika-next' + (g ? "" : " is-disabled") + '" type="button">' + _.i18n.nextMonth + "</button>"), p += "</div>"
                },
                E = function(e, t, n) {
                    return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + n + '">' + T(e) + k(t) + "</table>"
                },
                x = function(s) {
                    var o = this,
                        l = o.config(s);
                    o._onMouseDown = function(e) {
                        if (o._v) {
                            e = e || window.event;
                            var t = e.target || e.srcElement;
                            if (t)
                                if (d(t, "is-disabled") || (!d(t, "pika-button") || d(t, "is-empty") || d(t.parentNode, "is-disabled") ? d(t, "pika-prev") ? o.prevMonth() : d(t, "pika-next") && o.nextMonth() : (o.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), l.bound && r(function() {
                                        o.hide(), l.blurFieldOnSelect && l.field && l.field.blur()
                                    }, 100))), d(t, "pika-select")) o._c = !0;
                                else {
                                    if (!e.preventDefault) return e.returnValue = !1, !1;
                                    e.preventDefault()
                                }
                        }
                    }, o._onChange = function(e) {
                        e = e || window.event;
                        var t = e.target || e.srcElement;
                        t && (d(t, "pika-select-month") ? o.gotoMonth(t.value) : d(t, "pika-select-year") && o.gotoYear(t.value))
                    }, o._onKeyChange = function(e) {
                        if (e = e || window.event, o.isVisible()) switch (e.keyCode) {
                            case 13:
                            case 27:
                                l.field && l.field.blur();
                                break;
                            case 37:
                                e.preventDefault(), o.adjustDate("subtract", 1);
                                break;
                            case 38:
                                o.adjustDate("subtract", 7);
                                break;
                            case 39:
                                o.adjustDate("add", 1);
                                break;
                            case 40:
                                o.adjustDate("add", 7)
                        }
                    }, o._onInputChange = function(n) {
                        var a;
                        n.firedBy !== o && (l.parse ? a = l.parse(l.field.value, l.format) : t ? (a = e(l.field.value, l.format, l.formatStrict), a = a && a.isValid() ? a.toDate() : null) : a = new Date(Date.parse(l.field.value)), _(a) && o.setDate(a), o._v || o.show())
                    }, o._onInputFocus = function() {
                        o.show()
                    }, o._onInputClick = function() {
                        o.show()
                    }, o._onInputBlur = function() {
                        var e = a.activeElement;
                        do {
                            if (d(e, "pika-single")) return
                        } while (e = e.parentNode);
                        o._c || (o._b = r(function() {
                            o.hide()
                        }, 50)), o._c = !1
                    }, o._onClick = function(e) {
                        e = e || window.event;
                        var t = e.target || e.srcElement,
                            a = t;
                        if (t) {
                            !n && d(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), i(t, "change", o._onChange)));
                            do {
                                if (d(a, "pika-single") || a === l.trigger) return
                            } while (a = a.parentNode);
                            o._v && t !== l.trigger && a !== l.trigger && o.hide()
                        }
                    }, o.el = a.createElement("div"), o.el.className = "pika-single" + (l.isRTL ? " is-rtl" : "") + (l.theme ? " " + l.theme : ""), i(o.el, "mousedown", o._onMouseDown, !0), i(o.el, "touchend", o._onMouseDown, !0), i(o.el, "change", o._onChange), i(a, "keydown", o._onKeyChange), l.field && (l.container ? l.container.appendChild(o.el) : l.bound ? a.body.appendChild(o.el) : l.field.parentNode.insertBefore(o.el, l.field.nextSibling), i(l.field, "change", o._onInputChange), l.defaultDate || (t && l.field.value ? l.defaultDate = e(l.field.value, l.format).toDate() : l.defaultDate = new Date(Date.parse(l.field.value)), l.setDefaultDate = !0));
                    var u = l.defaultDate;
                    _(u) ? l.setDefaultDate ? o.setDate(u, !0) : o.gotoDate(u) : o.gotoDate(new Date), l.bound ? (this.hide(), o.el.className += " is-bound", i(l.trigger, "click", o._onInputClick), i(l.trigger, "focus", o._onInputFocus), i(l.trigger, "blur", o._onInputBlur)) : this.show()
                };
            return x.prototype = {
                config: function(e) {
                    this._o || (this._o = M({}, L, !0));
                    var t = M(this._o, e, !0);
                    t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null;
                    var n = parseInt(t.numberOfMonths, 10) || 1;
                    if (t.numberOfMonths = n > 4 ? 4 : n, _(t.minDate) || (t.minDate = !1), _(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && this.setMaxDate(t.maxDate), c(t.yearRange)) {
                        var a = (new Date).getFullYear() - 10;
                        t.yearRange[0] = parseInt(t.yearRange[0], 10) || a, t.yearRange[1] = parseInt(t.yearRange[1], 10) || a
                    } else t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || L.yearRange, t.yearRange > 100 && (t.yearRange = 100);
                    return t
                },
                toString: function(n) {
                    return n = n || this._o.format, _(this._d) ? this._o.toString ? this._o.toString(this._d, n) : t ? e(this._d).format(n) : this._d.toDateString() : ""
                },
                getMoment: function() {
                    return t ? e(this._d) : null
                },
                setMoment: function(n, a) {
                    t && e.isMoment(n) && this.setDate(n.toDate(), a)
                },
                getDate: function() {
                    return _(this._d) ? new Date(this._d.getTime()) : null
                },
                setDate: function(e, t) {
                    if (!e) return this._d = null, this._o.field && (this._o.field.value = "", y(this._o.field, "change", {
                        firedBy: this
                    })), this.draw();
                    if ("string" == typeof e && (e = new Date(Date.parse(e))), _(e)) {
                        var n = this._o.minDate,
                            a = this._o.maxDate;
                        _(n) && e < n ? e = n : _(a) && e > a && (e = a), this._d = new Date(e.getTime()), f(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), y(this._o.field, "change", {
                            firedBy: this
                        })), t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                    }
                },
                gotoDate: function(e) {
                    var t = !0;
                    if (_(e)) {
                        if (this.calendars) {
                            var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                                a = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                                r = e.getTime();
                            a.setMonth(a.getMonth() + 1), a.setDate(a.getDate() - 1), t = r < n.getTime() || a.getTime() < r
                        }
                        t && (this.calendars = [{
                            month: e.getMonth(),
                            year: e.getFullYear()
                        }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars()
                    }
                },
                adjustDate: function(e, t) {
                    var n, a = this.getDate() || new Date,
                        r = 24 * parseInt(t) * 60 * 60 * 1e3;
                    "add" === e ? n = new Date(a.valueOf() + r) : "subtract" === e && (n = new Date(a.valueOf() - r)), this.setDate(n)
                },
                adjustCalendars: function() {
                    this.calendars[0] = v(this.calendars[0]);
                    for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = v({
                        month: this.calendars[0].month + e,
                        year: this.calendars[0].year
                    });
                    this.draw()
                },
                gotoToday: function() {
                    this.gotoDate(new Date)
                },
                gotoMonth: function(e) {
                    isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars())
                },
                nextMonth: function() {
                    this.calendars[0].month++, this.adjustCalendars()
                },
                prevMonth: function() {
                    this.calendars[0].month--, this.adjustCalendars()
                },
                gotoYear: function(e) {
                    isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars())
                },
                setMinDate: function(e) {
                    e instanceof Date ? (f(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth()) : (this._o.minDate = L.minDate, this._o.minYear = L.minYear, this._o.minMonth = L.minMonth, this._o.startRange = L.startRange), this.draw()
                },
                setMaxDate: function(e) {
                    e instanceof Date ? (f(e), this._o.maxDate = e, this._o.maxYear = e.getFullYear(), this._o.maxMonth = e.getMonth()) : (this._o.maxDate = L.maxDate, this._o.maxYear = L.maxYear, this._o.maxMonth = L.maxMonth, this._o.endRange = L.endRange), this.draw()
                },
                setStartRange: function(e) {
                    this._o.startRange = e
                },
                setEndRange: function(e) {
                    this._o.endRange = e
                },
                draw: function(e) {
                    if (this._v || e) {
                        var t, n = this._o,
                            a = n.minYear,
                            i = n.maxYear,
                            s = n.minMonth,
                            o = n.maxMonth,
                            d = "";
                        this._y <= a && (this._y = a, !isNaN(s) && this._m < s && (this._m = s)), this._y >= i && (this._y = i, !isNaN(o) && this._m > o && (this._m = o)), t = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                        for (var l = 0; l < n.numberOfMonths; l++) d += '<div class="pika-lendar">' + S(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, t) + this.render(this.calendars[l].year, this.calendars[l].month, t) + "</div>";
                        this.el.innerHTML = d, n.bound && "hidden" !== n.field.type && r(function() {
                            n.trigger.focus()
                        }, 1), "function" == typeof this._o.onDraw && this._o.onDraw(this), n.bound && n.field.setAttribute("aria-label", "Use the arrow keys to pick a date")
                    }
                },
                adjustPosition: function() {
                    var e, t, n, r, i, s, o, d, l, u;
                    if (!this._o.container) {
                        if (this.el.style.position = "absolute", e = this._o.trigger, t = e, n = this.el.offsetWidth, r = this.el.offsetHeight, i = window.innerWidth || a.documentElement.clientWidth, s = window.innerHeight || a.documentElement.clientHeight, o = window.pageYOffset || a.body.scrollTop || a.documentElement.scrollTop, "function" == typeof e.getBoundingClientRect) u = e.getBoundingClientRect(), d = u.left + window.pageXOffset, l = u.bottom + window.pageYOffset;
                        else
                            for (d = t.offsetLeft, l = t.offsetTop + t.offsetHeight; t = t.offsetParent;) d += t.offsetLeft, l += t.offsetTop;
                        (this._o.reposition && d + n > i || this._o.position.indexOf("right") > -1 && d - n + e.offsetWidth > 0) && (d = d - n + e.offsetWidth), (this._o.reposition && l + r > s + o || this._o.position.indexOf("top") > -1 && l - r - e.offsetHeight > 0) && (l = l - r - e.offsetHeight), this.el.style.left = d + "px", this.el.style.top = l + "px"
                    }
                },
                render: function(e, t, n) {
                    var a = this._o,
                        r = new Date,
                        i = p(e, t),
                        s = new Date(e, t, 1).getDay(),
                        o = [],
                        d = [];
                    f(r), a.firstDay > 0 && (s -= a.firstDay) < 0 && (s += 7);
                    for (var l = 0 === t ? 11 : t - 1, u = 11 === t ? 0 : t + 1, c = 0 === t ? e - 1 : e, h = 11 === t ? e + 1 : e, M = p(c, l), y = i + s, v = y; v > 7;) v -= 7;
                    y += 7 - v;
                    for (var L = !1, D = 0, k = 0; D < y; D++) {
                        var T = new Date(e, t, D - s + 1),
                            S = !!_(this._d) && g(T, this._d),
                            x = g(T, r),
                            H = -1 !== a.events.indexOf(T.toDateString()),
                            C = D < s || D >= i + s,
                            O = D - s + 1,
                            j = t,
                            P = e,
                            A = a.startRange && g(a.startRange, T),
                            F = a.endRange && g(a.endRange, T),
                            I = a.startRange && a.endRange && a.startRange < T && T < a.endRange,
                            R = a.minDate && T < a.minDate || a.maxDate && T > a.maxDate || a.disableWeekends && m(T) || a.disableDayFn && a.disableDayFn(T);
                        C && (D < s ? (O = M + O, j = l, P = c) : (O -= i, j = u, P = h));
                        var V = {
                            day: O,
                            month: j,
                            year: P,
                            hasEvent: H,
                            isSelected: S,
                            isToday: x,
                            isDisabled: R,
                            isEmpty: C,
                            isStartRange: A,
                            isEndRange: F,
                            isInRange: I,
                            showDaysInNextAndPreviousMonths: a.showDaysInNextAndPreviousMonths,
                            enableSelectionDaysInNextAndPreviousMonths: a.enableSelectionDaysInNextAndPreviousMonths
                        };
                        a.pickWholeWeek && S && (L = !0), d.push(Y(V)), 7 == ++k && (a.showWeekNumber && d.unshift(w(D - s, t, e)), o.push(b(d, a.isRTL, a.pickWholeWeek, L)), d = [], k = 0, L = !1)
                    }
                    return E(a, o, n)
                },
                isVisible: function() {
                    return this._v
                },
                show: function() {
                    this.isVisible() || (this._v = !0, this.draw(), u(this.el, "is-hidden"), this._o.bound && (i(a, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
                },
                hide: function() {
                    var e = this._v;
                    !1 !== e && (this._o.bound && s(a, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", l(this.el, "is-hidden"), this._v = !1, void 0 !== e && "function" == typeof this._o.onClose && this._o.onClose.call(this))
                },
                destroy: function() {
                    this.hide(), s(this.el, "mousedown", this._onMouseDown, !0), s(this.el, "touchend", this._onMouseDown, !0), s(this.el, "change", this._onChange), s(a, "keydown", this._onKeyChange), this._o.field && (s(this._o.field, "change", this._onInputChange), this._o.bound && (s(this._o.trigger, "click", this._onInputClick), s(this._o.trigger, "focus", this._onInputFocus), s(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }
            }, x
        })
    },
    1883: function(e, t) {},
    1884: function(e, t) {},
    1885: function(e, t) {},
    1886: function(e, t) {},
    1887: function(e, t) {},
    1888: function(e, t) {},
    1889: function(e, t) {},
    1890: function(e, t) {},
    1891: function(e, t) {},
    1892: function(e, t) {},
    1893: function(e, t) {},
    1894: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 259
            }
        };
        n.loc.source = {
            body: "query VideoManager_User($login: String!) {\n  currentUser {\n    id\n    login\n    displayName\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n  user(login: $login) {\n    id\n    login\n    displayName\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1895: function(e, t) {},
    1896: function(e, t) {},
    2028: function(e, t, n) {
        "use strict";

        function a(e, t) {
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

        function r(e) {
            return {
                __typename: "TwitchEvent",
                id: e.premiere.id,
                eventID: e.premiere.event.id,
                title: e.premiere.event.title,
                imageID: e.premiere.event.image_id,
                imageUrl: e.premiere.event.image_url,
                description: e.premiere.event.description,
                ownerID: e.premiere.event.owner_id,
                game: {
                    __typename: "Game",
                    id: e.premiere.event.game_id,
                    name: ""
                },
                language: e.premiere.event.language,
                startTime: new Date(e.premiere.event.start_time),
                endTime: new Date(e.premiere.event.end_time),
                timeZoneID: e.premiere.event.time_zone_id
            }
        }

        function i(e) {
            var t = {
                __typename: "Video",
                id: Object(st.a)(e._id) || "",
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
                tags: e.tag_list ? e.tag_list.split(",") : []
            };
            if (e.failure && (t.failure = {
                    vodID: e.failure.vod_id,
                    errorCode: e.failure.error_code,
                    errorMessage: e.failure.error_message,
                    createdAt: e.failure.created_at
                }), e.premiere && (t.premiere = {
                    status: e.premiere.status
                }, e.premiere.event)) {
                var n = {
                    __typename: "EventModel",
                    id: e.premiere.id,
                    eventID: e.premiere.event.id,
                    title: e.premiere.event.title,
                    imageID: e.premiere.event.image_id || null,
                    imageUrl: e.premiere.event.image_url || null,
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

        function s(e) {
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
                tag_list: e.tags.join(", "),
                thumbnail_path: e.preview,
                title: e.title,
                viewable: e.scope.toLowerCase(),
                viewable_at: e.viewableAt
            }
        }

        function o(e, t) {
            var n = null;
            return t.game && (n = {
                __typename: "Game",
                id: "",
                name: t.game
            }), rt.__assign({}, e, {
                description: t.description,
                game: n,
                language: t.language,
                title: t.title,
                preview: t.thumbnail_path,
                scope: t.viewable.toUpperCase(),
                viewableAt: t.viewable_at,
                tags: t.tag_list ? t.tag_list.split(", ") : []
            })
        }

        function d(e, t) {
            return l(e, t).then(function(e) {
                return e.json()
            })
        }

        function l(e, t) {
            return fetch(e, t).then(function(e) {
                return e.status >= 300 ? Promise.reject(e) : e
            })
        }

        function u(e) {
            void 0 === e && (e = "");
            var t = {};
            return "" !== e && (t[zt] = "OAuth " + e), t
        }

        function c(e) {
            return Qt.getClient(Object(at.a)(e.getState()))
        }

        function _(e) {
            return function(t, n) {
                var a = {
                        dispatch: t,
                        getState: n
                    },
                    r = c(a);
                return e({
                    store: a,
                    apiClient: r
                })
            }
        }

        function m(e, t) {
            if (t && p(t)) return Object(it.d)("Error Uploading: ", "VideoManager") + t.errors.map(function(e) {
                return e.message
            }).join("\n");
            if (f(e)) {
                var n = e.failure;
                if (n) switch (n.errorCode) {
                    case $t.c:
                        return Object(it.d)("Invalid video file.", "VideoManager");
                    case $t.d:
                        return Object(it.d)("Video must be encoded in H.264 format.", "VideoManager");
                    case $t.e:
                        return Object(it.d)("Error processing video, please try uploading again.", "VideoManager");
                    default:
                        return it.i.error(new Error("Unrecognized failure error code on uploaded video: " + n.errorCode), "Failed to map video creation error code to user message"), Object(it.d)("Error processing video, please try uploading again.", "VideoManager.Default")
                }
            }
            return null
        }

        function h(e) {
            return e.status === ot.VIDEO_STATUS_PENDING_TRANSCODE || e.status === ot.VIDEO_STATUS_TRANSCODING
        }

        function p(e) {
            return !!(e && e.errors.length > 0)
        }

        function f(e) {
            return e.status === ot.VIDEO_STATUS_FAILED
        }

        function g(e) {
            return !!e && e.status === dt.a.uploading
        }

        function M(e) {
            return e.status === ot.VIDEO_STATUS_UPLOADING
        }

        function y(e) {
            var t = E(e);
            return !!t && t < an
        }

        function v(e) {
            return !!e && e.status === dt.a.queued
        }

        function L(e) {
            return !!e.premiere && e.premiere.status.toLowerCase() === ot.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_FAILED
        }

        function D(e) {
            return !!e.premiere && e.premiere.status.toLowerCase() === ot.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_STARTED
        }

        function Y(e) {
            return w(e) && h(e)
        }

        function w(e) {
            return !(!e.premiere || !e.premiere.event) && e.premiere.status.toLowerCase() === ot.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_SCHEDULED
        }

        function b(e) {
            return !!e.premiere && e.premiere.status.toLowerCase() === ot.VideoPremiereStatus.VIDEO_PREMIERE_STATUS_UNSCHEDULED
        }

        function k(e) {
            return e.status === ot.VIDEO_STATUS_RECORDED && e.broadcastType.toLowerCase() === Zt.a.Archive.toLowerCase()
        }

        function T(e) {
            return e.status === ot.VIDEO_STATUS_RECORDED && e.broadcastType.toLowerCase() === Zt.a.PastPremiere.toLowerCase()
        }

        function S(e, t) {
            return v(t) ? nn.queued : p(t) ? nn.uploadFailed : g(t) ? nn.uploadInProgress : f(e) ? nn.processingFailed : Y(e) ? nn.processingAndScheduled : h(e) ? nn.processing : M(e) ? nn.uploading : b(e) ? nn.unscheduled : w(e) ? nn.scheduled : D(e) ? nn.started : L(e) ? nn.premiereFailed : y(e) ? nn.expiring : k(e) ? nn.archive : T(e) ? nn.pastPremiere : nn.uploadOrHighlight
        }

        function E(e) {
            if (e.deleteAt) return (new Date(e.deleteAt).valueOf() - Date.now()) / rn
        }

        function x(e) {
            return C(e)
        }

        function H() {
            return O()
        }

        function C(e) {
            return rt.__awaiter(this, void 0, void 0, function() {
                var t, n, a, r, s, o, d, l, u;
                return rt.__generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (!(t = e.store.getState().videoManager.processingVideos.data)) return en = setTimeout(function() {
                                C(e)
                            }, sn), [2];
                            if (!(n = t.filter(function(e) {
                                    return h(e)
                                }))) return [3, 7];
                            if (0 === n.length) return en = setTimeout(function() {
                                C(e)
                            }, sn), [2];
                            a = n.map(function(e) {
                                return e.id
                            }), c.label = 1;
                        case 1:
                            c.trys.push([1, 6, , 7]), r = 0, s = a, c.label = 2;
                        case 2:
                            return r < s.length ? (o = s[r], [4, e.apiClient.doAuthRequest(new URL(Gt + "/v5/videos/" + o))]) : [3, 5];
                        case 3:
                            d = c.sent(), l = i(d), h(l) || (f(l) ? e.store.dispatch({
                                type: ft,
                                video: l
                            }) : e.store.dispatch({
                                type: pt,
                                video: l
                            })), c.label = 4;
                        case 4:
                            return r++, [3, 2];
                        case 5:
                            return [3, 7];
                        case 6:
                            return u = c.sent(), it.i.error(u, "Failed to update processing videos in the background. Checking again in " + sn / 1e3 + " seconds..."), [3, 7];
                        case 7:
                            return en = setTimeout(function() {
                                C(e)
                            }, sn), [2]
                    }
                })
            })
        }

        function O() {
            clearTimeout(en)
        }

        function j(e) {
            var t = e.toString(),
                n = -1 !== t.indexOf("custom") ? 1 : 0,
                a = /thumb\/(.*)/,
                r = t.match(a);
            if (!r) {
                var i = new Error("Error extracting generated thumbnail path from URL");
                throw it.i.error(i, "Failed to delete thumbnail"), i
            }
            var s = /-%7Bwidth%7Dx%7Bheight%7D/;
            return r[n].replace(s, "")
        }

        function P(e, t, n) {
            return e.replace(t.toFixed(), "{width}").replace(n.toFixed(), "{height}")
        }

        function A(e, t, n) {
            return e.replace("{width}", t.toString()).replace("{height}", n.toString())
        }

        function F(e, t) {
            var n = rt.__assign({}, e);
            if (n.thumbnails = n.thumbnails.filter(function(e) {
                    return e.url !== t
                }), n.thumbnails.length <= 0) throw new Error("There arent enough thumbnail's on this video to delete one");
            return n.preview = n.thumbnails[0].url, n
        }

        function I(e, t) {
            var n = rt.__assign({}, e),
                a = n.thumbnails.map(function(e) {
                    return e.url
                }),
                r = t.find(function(e) {
                    return !a.includes(e.url)
                });
            if (!r) throw new Error("A new thumbnail url wasn't returned from the backend");
            return n.thumbnails = t, n.preview = r.url, n
        }

        function R(e, t, n, a) {
            return rt.__awaiter(this, void 0, void 0, function() {
                var r, i;
                return rt.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 2, , 3]), [4, t.apiClient.doAuthRequest(new URL(Gt + "/v5/vods/" + e + "/download"))];
                        case 1:
                            switch (r = s.sent(), r.status) {
                                case un.a.Complete:
                                    t.store.dispatch({
                                        type: Et,
                                        videoId: e
                                    }), window.location.href = r.download_url;
                                    break;
                                case un.a.Failed:
                                    t.store.dispatch({
                                        type: xt,
                                        videoId: e
                                    }), a.push(Object(it.d)("Download Failed: We couldn't make a download file for this video.", "VideoManagerDownloadStatus"));
                                    break;
                                default:
                                    n && t.store.dispatch({
                                        type: St,
                                        download: r,
                                        videoId: e
                                    }), setTimeout(function() {
                                        R(e, t, !1, a)
                                    }, cn)
                            }
                            return [3, 3];
                        case 2:
                            return i = s.sent(), t.store.dispatch({
                                type: xt,
                                videoId: e
                            }), a.push(Object(it.d)("Download Failed: We couldn't make a download file for this video.", "VideoManager")), it.i.error(i, "Failed to download file"), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function V(e, t, n) {
            return R(e, t, !0, n)
        }

        function N(e) {
            return e.status === dt.a.queued
        }

        function U(e) {
            return e.status === dt.a.uploading
        }

        function W(e) {
            return N(e) || U(e)
        }

        function z(e) {
            ++_n > 1 || (mn || (mn = J(e)), window.addEventListener("beforeunload", mn))
        }

        function G() {
            --_n < 1 && mn && window.removeEventListener("beforeunload", mn)
        }

        function J(e) {
            return function(t) {
                if (e().videoManager.videoUploads.some(W)) {
                    var n = Object(it.d)("You have video uploads in progress, are you sure you want to leave Twitch and cancel the uploads?", "VideoManager");
                    return t.returnValue = n, n
                }
            }
        }

        function B(e) {
            return new Mn(e)
        }

        function q(e, t, n, a, r) {
            try {
                n().videoManager.videoUploads.some(U) ? setTimeout(function() {
                    q(e, t, n, a, r)
                }, yn) : (a({
                    type: Pt,
                    uploadID: r
                }), e())
            } catch (e) {
                t(e)
            }
        }

        function K(e, t, n, a) {
            return rt.__awaiter(this, void 0, void 0, function() {
                var r, i, s, o, d, l;
                return rt.__generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (r = Object(dt.d)(a), r.length > 0) return e({
                                type: Rt,
                                name: a.name,
                                errors: r
                            }), [2];
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 6, 7, 8]), z(t), i = B(n), [4, i.createVideo()];
                        case 2:
                            return s = u.sent(), n = rt.__assign({}, n, {
                                videoAuthToken: s.videoAuthToken,
                                url: s.url,
                                video: s.video
                            }), e({
                                type: At,
                                uploadID: n.id,
                                video: s.video
                            }), [4, new Promise(function(a, r) {
                                q(a, r, t, e, n.id)
                            })];
                        case 3:
                            return u.sent(), o = function(a, r, i) {
                                e({
                                    type: Ft,
                                    uploadID: n.id,
                                    filePartIndex: a,
                                    fileByteIndex: r,
                                    progressPercentage: i
                                });
                                var s = t(),
                                    o = s.videoManager.videoUploads.find(function(e) {
                                        return e.id === n.id
                                    });
                                o && U(o) || d.stop()
                            }, d = new hn(a, i, o), [4, d.uploadFile(n.filePartIndex)];
                        case 4:
                            return u.sent(), [4, i.completeVideo()];
                        case 5:
                            return u.sent(), e({
                                type: It,
                                uploadID: n.id,
                                video: n.video
                            }), [3, 8];
                        case 6:
                            return l = u.sent(), e({
                                type: Vt,
                                uploadID: n.id,
                                errors: [l]
                            }), [3, 8];
                        case 7:
                            return G(), [7];
                        case 8:
                            return [2]
                    }
                })
            })
        }

        function Q() {
            return {
                type: Ot
            }
        }

        function Z() {
            return {
                type: Ht
            }
        }

        function $(e) {
            return {
                type: Ct,
                channelName: e
            }
        }

        function X(e) {
            var t = this;
            return _(function(n) {
                return rt.__awaiter(t, void 0, void 0, function() {
                    var t;
                    return rt.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.apiClient.doAuthRequest(new URL(Gt + "/v5/videos/" + e), {
                                    method: qt
                                })];
                            case 1:
                                return a.sent(), n.store.dispatch({
                                    type: wt,
                                    videoId: e
                                }), [3, 3];
                            case 2:
                                return t = a.sent(), n.store.dispatch({
                                    type: vt,
                                    error: Object(it.d)("Error deleting video", "VideoManagerUploads")
                                }), it.i.error(t, "Error deleting video with ID " + e), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function ee(e) {
            var t = this;
            return _(function(n) {
                return rt.__awaiter(t, void 0, void 0, function() {
                    return rt.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, n.apiClient.doAuthRequest(new URL(Gt + "/v5/channels/" + e + "/video_manager_properties"))];
                            case 1:
                                return t.sent(), n.store.dispatch({
                                    type: kt,
                                    userId: e
                                }), [2]
                        }
                    })
                })
            })
        }

        function te(e) {
            var t = this;
            return _(function(n) {
                return rt.__awaiter(t, void 0, void 0, function() {
                    var t, a;
                    return rt.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.apiClient.doAuthRequest(new URL(Gt + "/v5/broadcast_queues/" + e))];
                            case 1:
                                return t = r.sent(), n.store.dispatch({
                                    type: Mt,
                                    vodcastQueue: t.items
                                }), [3, 3];
                            case 2:
                                return a = r.sent(), it.i.error(a, "Failed to fetch vodcast queue"), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function ne(e) {
            var t = this;
            return _(function(n) {
                return rt.__awaiter(t, void 0, void 0, function() {
                    var t, a;
                    return rt.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.apiClient.doAuthRequest(new URL(Gt + "/v5/videos/" + e))];
                            case 1:
                                return t = r.sent(), [2, i(t)];
                            case 2:
                                throw a = r.sent(), it.i.error(a, "Failed to fetch video"), a;
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function ae(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, r;
                    return rt.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                a.store.dispatch({
                                    type: Dt
                                }), s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]), [4, a.apiClient.doAuthRequest(new URL(Gt + "/v5/videos/" + t))];
                            case 2:
                                return n = s.sent(), a.store.dispatch({
                                    type: ct,
                                    video: i(n),
                                    userId: e
                                }), [3, 4];
                            case 3:
                                return r = s.sent(), a.store.dispatch({
                                    type: vt,
                                    error: Object(it.d)("Could not load video details for editing.", "VideoManager"),
                                    origin: ot.EditModalErrorOrigin.Initialize
                                }), it.i.error(r, "Failed to fetch video"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            })
        }

        function re(e, t, n, a) {
            var r = this;
            return _(function(s) {
                return rt.__awaiter(r, void 0, void 0, function() {
                    var r, o, d, l, u;
                    return rt.__generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                s.store.dispatch({
                                    type: Lt
                                }), c.label = 1;
                            case 1:
                                return c.trys.push([1, 3, , 4]), r = ot.availableVideoStatuses.join(","), o = Gt + "/v5/channels/" + e + "/video_manager", t && (o += "/" + t.toLowerCase()), n || (n = 0), o += "?offset=" + n + "&limit=" + vn + "&status=" + r, [4, s.apiClient.doAuthRequest(new URL(o))];
                            case 2:
                                return d = c.sent(), l = void 0, l = d.videos.map(function(e) {
                                    return i(e)
                                }), s.store.dispatch({
                                    type: _t,
                                    userId: e,
                                    activeFilter: t,
                                    offset: n,
                                    videos: l,
                                    resetVideos: a
                                }), [3, 4];
                            case 3:
                                return u = c.sent(), s.store.dispatch({
                                    type: mt
                                }), it.i.error(u, "Failed to fetch videos"), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            })
        }

        function ie(e, t, n) {
            var a = this;
            return _(function(r) {
                return rt.__awaiter(a, void 0, void 0, function() {
                    var a, s, o, d, l;
                    return rt.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return u.trys.push([0, 2, , 3]), r.store.dispatch({
                                    type: Yt
                                }), t || (t = 0), a = ot.pendingVideoStatuses.join(","), s = Gt + "/v5/channels/" + e + "/video_manager?offset=" + t + "&limit=" + Ln + "&status=" + a, [4, r.apiClient.doAuthRequest(new URL(s))];
                            case 1:
                                return o = u.sent(), d = o.videos.map(function(e) {
                                    return i(e)
                                }), r.store.dispatch({
                                    type: ht,
                                    userId: e,
                                    videos: d
                                }), [3, 3];
                            case 2:
                                return l = u.sent(), n.push(Object(it.d)("Failed to fetch videos", "VideoManagerProcessingVideos")), it.i.error(l, "Failed to fetch processing videos"), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function se(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, r, i, s, o;
                    return rt.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                if (d.trys.push([0, 2, , 3]), n = F(e, t), r = new URL(t), !(i = j(r))) throw new Error("bad thumbnail url/path");
                                return s = new URL(Gt + "/v5/videos/" + n.id + "/thumbnail?path=" + i), [4, a.apiClient.doRawAuthRequest(s, {
                                    method: qt
                                })];
                            case 1:
                                return d.sent(), a.store.dispatch({
                                    type: lt,
                                    video: n
                                }), [3, 3];
                            case 2:
                                throw o = d.sent(), a.store.dispatch({
                                    type: vt,
                                    error: Object(it.d)("Deleting Thumbnail Failed!", "VideoManager"),
                                    origin: ot.EditModalErrorOrigin.Thumbnail
                                }), it.i.error(o, "Failed to delete thumbnail"), o;
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function oe(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, r, i, s, o;
                    return rt.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                return d.trys.push([0, 2, , 3]), n = Object(at.b)(it.n.store.getState()), r = new FormData, r.append("image", t.file, t.file.name), r.append("crop_x", t.cropX.toString()), r.append("crop_y", t.cropY.toString()), r.append("crop_w", t.cropW.toString()), r.append("crop_h", t.cropH.toString()), [4, a.apiClient.doAuthRequest(new URL(Gt + "/api/vods/" + e.id + "/upload_thumbnail"), {
                                    method: Jt,
                                    body: r,
                                    credentials: "include",
                                    headers: {
                                        "twitch-api-token": n
                                    }
                                })];
                            case 1:
                                return i = d.sent(), s = I(e, i.thumbnails), a.store.dispatch({
                                    type: lt,
                                    video: s
                                }), [2, i.thumbnails];
                            case 2:
                                throw o = d.sent(), a.store.dispatch({
                                    type: vt,
                                    error: Object(it.d)("Saving custom video image failed.", "VideoManager"),
                                    origin: ot.EditModalErrorOrigin.Thumbnail
                                }), it.i.error(o, "Failed to upload thumbnail"), o;
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function de(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, r, s, o;
                    return rt.__generator(this, function(d) {
                        switch (d.label) {
                            case 0:
                                a.store.dispatch({
                                    type: ut,
                                    isSaving: !0
                                }), d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]), n = rt.__assign({}, t), r = new URL(n.thumbnail_path), n.thumbnail_path = j(r), [4, a.apiClient.doAuthRequest(new URL(Gt + "/v5/videos/" + e.id), {
                                    method: Bt,
                                    body: JSON.stringify(n)
                                })];
                            case 2:
                                return s = d.sent(), a.store.dispatch({
                                    type: lt,
                                    video: i(s)
                                }), [3, 4];
                            case 3:
                                throw o = d.sent(), a.store.dispatch({
                                    type: vt,
                                    error: Object(it.d)("Saving Failed!", "VideoManager"),
                                    origin: ot.EditModalErrorOrigin.Save
                                }), it.i.error(o, "Failed to save video"), o;
                            case 4:
                                return [2]
                        }
                    })
                })
            })
        }

        function le(e, t, n) {
            var a = this;
            return _(function(r) {
                return rt.__awaiter(a, void 0, void 0, function() {
                    var a, i;
                    return rt.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return s.trys.push([0, 2, , 3]), [4, r.apiClient.doAuthRequest(new URL(Gt + "/v5/broadcast_queues/" + e + "/videos"), {
                                    method: Jt,
                                    body: JSON.stringify({
                                        id: t
                                    })
                                })];
                            case 1:
                                return a = s.sent(), r.store.dispatch({
                                    type: yt,
                                    videoId: a.item_id
                                }), [3, 3];
                            case 2:
                                return i = s.sent(), n.push(Object(it.d)("Failed to add video to vodcast queue", "VideoManager")), it.i.error(i, "Failed to add video to vodcast queue"), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function ue(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n;
                    return rt.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, a.apiClient.doAuthRequest(new URL(Gt + "/v5/videos/" + e), {
                                    method: qt
                                })];
                            case 1:
                                return r.sent(), a.store.dispatch({
                                    type: bt,
                                    videoId: e
                                }), [3, 3];
                            case 2:
                                return n = r.sent(), t.push(Object(it.d)("Error deleting video", "VideoManager")), it.i.error(n, "Error deleting video with ID " + e), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            })
        }

        function ce(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    return rt.__generator(this, function(n) {
                        return a.store.getState().videoManager.videoDownloads[e] ? [2] : Object.keys(a.store.getState().videoManager.videoDownloads).length >= Dn ? (t.push(Object(it.d)("Too many downloads: Please wait for your current downloads to finish", "VideoManager")), [2]) : (V(e, a, t), [2])
                    })
                })
            })
        }

        function _e() {
            var e = this;
            return _(function(t) {
                return rt.__awaiter(e, void 0, void 0, function() {
                    return rt.__generator(this, function(e) {
                        return x(t), [2]
                    })
                })
            })
        }

        function me() {
            var e = this;
            return _(function() {
                return rt.__awaiter(e, void 0, void 0, function() {
                    return rt.__generator(this, function(e) {
                        return H(), [2]
                    })
                })
            })
        }

        function he(e, t) {
            return function(n, a) {
                var r = t.map(function(t) {
                    return Object(dt.c)({
                        ownerID: e,
                        title: t.name,
                        fileSizeBytes: t.size
                    })
                });
                n({
                    type: jt,
                    videoUploads: r
                });
                for (var i = 0; i < t.length; ++i) K(n, a, r[i], t[i])
            }
        }

        function pe(e) {
            return function(t) {
                t({
                    type: Nt,
                    uploadID: e.id
                })
            }
        }

        function fe(e, t) {
            var n = this;
            return _(function(i) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, s, o, d, l, u, c;
                    return rt.__generator(this, function(_) {
                        switch (_.label) {
                            case 0:
                                return _.trys.push([0, 2, , 5]), [4, i.apiClient.doAuthRequest(new URL(Gt + "/v5/channels/" + e.ownerID + "/premieres"), {
                                    method: Jt,
                                    body: JSON.stringify(a(e, t))
                                })];
                            case 1:
                                return n = _.sent(), s = r(n), s.game.name = e.game.name, i.store.dispatch({
                                    type: gt,
                                    premiereStatus: n.premiere_status,
                                    event: s,
                                    videoId: t
                                }), [3, 5];
                            case 2:
                                return o = _.sent(), d = Object(it.d)("Failed to create premiere!", "EventModalPremiereCreation"), l = null, o instanceof Response ? [4, o.json()] : [3, 4];
                            case 3:
                                if ((u = _.sent()) && u.params) l = u.params;
                                else try {
                                    c = JSON.parse(u.message), l = c.params
                                } catch (e) {}
                                return l && l.includes("start_time") && (d = Object(it.d)("Cannot schedule premiere! Please check the start time and try again.", "EventModalPremiereCreation")), [3, 4];
                            case 4:
                                throw i.store.dispatch({
                                    type: wn,
                                    error: d,
                                    origin: tn.Submit
                                }), o;
                            case 5:
                                return [2]
                        }
                    })
                })
            })
        }

        function ge(e, t) {
            var n = this;
            return _(function(i) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, s, o, d, l, u, c;
                    return rt.__generator(this, function(_) {
                        switch (_.label) {
                            case 0:
                                return _.trys.push([0, 2, , 5]), [4, i.apiClient.doAuthRequest(new URL(Gt + "/v5/channels/" + e.ownerID + "/premieres/" + e.id), {
                                    method: Bt,
                                    body: JSON.stringify(a(e, t))
                                })];
                            case 1:
                                return n = _.sent(), s = r(n), s.game.name = e.game.name, i.store.dispatch({
                                    type: gt,
                                    premiereStatus: n.premiere_status,
                                    event: s,
                                    videoId: t
                                }), [3, 5];
                            case 2:
                                return o = _.sent(), d = Object(it.d)("Failed to update premiere!", "EventModalPremiereUpdate"), l = null, o instanceof Response ? [4, o.json()] : [3, 4];
                            case 3:
                                if ((u = _.sent()) && u.params) l = u.params;
                                else try {
                                    c = JSON.parse(u.message), l = c.params
                                } catch (e) {}
                                return l && l.includes("start_time") && (d = Object(it.d)("Cannot schedule premiere! Please check the start time and try again.", "EventModalPremiereUpdate")), [3, 4];
                            case 4:
                                throw i.store.dispatch({
                                    type: wn,
                                    error: d,
                                    origin: tn.Submit
                                }), o;
                            case 5:
                                return [2]
                        }
                    })
                })
            })
        }

        function Me(e, t, n) {
            return rt.__awaiter(this, void 0, void 0, function() {
                var a;
                return rt.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return a = !!n && n.activeFilter !== t.activeFilter, [4, re(t.userId, t.activeFilter, t.offset, a)(e.store.dispatch, e.store.getState, {})];
                        case 1:
                            return r.sent(), [2]
                    }
                })
            })
        }

        function ye(e, t) {
            return rt.__awaiter(this, void 0, void 0, function() {
                var n;
                return rt.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!t.userId) return [2];
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, ee(t.userId)(e.store.dispatch, e.store.getState, {})];
                        case 2:
                            return a.sent(), [3, 4];
                        case 3:
                            if ((n = a.sent()) instanceof Response && 403 === n.status) throw e.store.dispatch({
                                type: Tt
                            }), n;
                            return [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }

        function ve(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, r, i;
                    return rt.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return e.isLoggedIn && e.userId ? (n = a.store.getState().videoManager.editingVideo.data, r = a.store.getState().videoManager.userId, i = !t || t && !t.userId, i ? r === e.userId ? [3, 3] : [4, ye(a, e)] : [3, 6]) : [2];
                            case 1:
                                return s.sent(), [4, te(e.userId)(a.store.dispatch, a.store.getState, {})];
                            case 2:
                                s.sent(), s.label = 3;
                            case 3:
                                return n ? [3, 5] : [4, ae(e.userId, e.videoId)(a.store.dispatch, a.store.getState, {})];
                            case 4:
                                s.sent(), s.label = 5;
                            case 5:
                                return [3, 8];
                            case 6:
                                return t && t.videoId !== e.videoId ? [4, ae(e.userId, e.videoId)(a.store.dispatch, a.store.getState, {})] : [3, 8];
                            case 7:
                                s.sent(), s.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            })
        }

        function Le(e, t, n) {
            var a = this;
            return _(function(r) {
                return rt.__awaiter(a, void 0, void 0, function() {
                    return rt.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return e.isLoggedIn && e.userId ? [4, ie(e.userId, t, n)(r.store.dispatch, r.store.getState, {})] : [2];
                            case 1:
                                return a.sent(), [2]
                        }
                    })
                })
            })
        }

        function De(e, t) {
            var n = this;
            return _(function(a) {
                return rt.__awaiter(n, void 0, void 0, function() {
                    var n, r, i;
                    return rt.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return e.isLoggedIn && e.userId ? (n = a.store.getState().videoManager.videos.data, r = a.store.getState().videoManager.userId, i = !t || t && !t.userId, i ? r === e.userId ? [3, 3] : [4, ye(a, e)] : [3, 6]) : [2];
                            case 1:
                                return s.sent(), [4, te(e.userId)(a.store.dispatch, a.store.getState, {})];
                            case 2:
                                s.sent(), s.label = 3;
                            case 3:
                                return n ? [3, 5] : [4, Me(a, e, t)];
                            case 4:
                                s.sent(), s.label = 5;
                            case 5:
                                return [3, 8];
                            case 6:
                                return !t || e.offset === t.offset && e.activeFilter === t.activeFilter ? [3, 8] : [4, Me(a, e, t)];
                            case 7:
                                s.sent(), s.label = 8;
                            case 8:
                                return [2]
                        }
                    })
                })
            })
        }

        function Ye(e, t) {
            var n = Object.assign({}, e);
            return delete n[t], n
        }

        function we() {
            return {
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
                channelName: null,
                editingVideo: {
                    data: null,
                    saving: !1,
                    loading: !1
                },
                notificationMessage: null,
                forbidden: !1,
                vodcastQueueVideoIDs: null,
                videoDownloads: {},
                videoUploads: [],
                uploadValidationErrors: [],
                editModalErrors: []
            }
        }

        function be(e, t) {
            var n = [],
                a = new Set(e.map(function(e) {
                    return e.id
                }));
            return n.concat(e, t.filter(function(e) {
                return !a.has(e.id)
            }))
        }

        function ke(e, t) {
            switch (void 0 === e && (e = we()), t.type) {
                case gt:
                    return rt.__assign({}, e, {
                        videos: rt.__assign({}, e.videos, {
                            data: e.videos.data ? e.videos.data.map(function(e) {
                                return e.id === t.videoId ? Object.assign({}, e, {
                                    premiere: {
                                        status: t.premiereStatus,
                                        event: t.event
                                    }
                                }) : e
                            }) : e.videos.data
                        }),
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            data: e.processingVideos.data ? e.processingVideos.data.map(function(e) {
                                return e.id === t.videoId ? Object.assign({}, e, {
                                    premiere: {
                                        status: t.premiereStatus,
                                        event: t.event
                                    }
                                }) : e
                            }) : e.processingVideos.data
                        })
                    });
                case Ht:
                    return rt.__assign({}, e, {
                        editModalErrors: [],
                        editingVideo: rt.__assign({}, e.editingVideo, {
                            saving: !1
                        })
                    });
                case Dt:
                    return rt.__assign({}, e, {
                        editingVideo: rt.__assign({}, e.editingVideo, {
                            loading: !0
                        })
                    });
                case Lt:
                    return rt.__assign({}, e, {
                        videos: rt.__assign({}, e.videos, {
                            loading: !0
                        })
                    });
                case Yt:
                    return rt.__assign({}, e, {
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            loading: !0
                        })
                    });
                case kt:
                    return rt.__assign({}, e, {
                        forbidden: !1,
                        userId: t.userId
                    });
                case Tt:
                    return rt.__assign({}, e, {
                        forbidden: !0
                    });
                case ut:
                    return rt.__assign({}, e, {
                        editingVideo: rt.__assign({}, e.editingVideo, {
                            saving: !0
                        }),
                        editModalErrors: []
                    });
                case lt:
                    var n = t.video;
                    return rt.__assign({}, e, {
                        videos: rt.__assign({}, e.videos, {
                            loading: !1,
                            data: e.videos.data ? e.videos.data.map(function(e) {
                                return e.id === n.id ? n : e
                            }) : e.videos.data
                        }),
                        notificationMessage: null,
                        editModalErrors: []
                    });
                case ct:
                    return rt.__assign({}, e, {
                        editingVideo: rt.__assign({}, e.editingVideo, {
                            data: t.video,
                            loading: !1
                        }),
                        notificationMessage: null
                    });
                case Mt:
                    var a = new Set(t.vodcastQueue.map(function(e) {
                        return e.item_id
                    }));
                    return rt.__assign({}, e, {
                        vodcastQueueVideoIDs: a
                    });
                case yt:
                    var r = e.vodcastQueueVideoIDs ? e.vodcastQueueVideoIDs : new Set,
                        i = r.add(t.videoId);
                    return rt.__assign({}, e, {
                        notificationMessage: null,
                        vodcastQueueVideoIDs: i
                    });
                case _t:
                    var s = [],
                        o = e.videos.data || [],
                        d = t.videos;
                    return s = t.resetVideos ? d : be(o, d), rt.__assign({}, e, {
                        activeFilter: t.activeFilter,
                        videos: rt.__assign({}, e.videos, {
                            data: s,
                            loading: !1,
                            moreDataAvailable: !(d.length < vn)
                        }),
                        notificationMessage: null
                    });
                case mt:
                    return rt.__assign({}, e, {
                        videos: rt.__assign({}, e.videos, {
                            loading: !1
                        })
                    });
                case pt:
                    var l = e.videos.data || [];
                    return -1 === l.findIndex(function(e) {
                        return e.id === t.video.id
                    }) && (l = [t.video].concat(l)), rt.__assign({}, e, {
                        videos: rt.__assign({}, e.videos, {
                            data: l
                        }),
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            data: e.processingVideos.data.filter(function(e) {
                                return e.id !== t.video.id
                            })
                        })
                    });
                case ft:
                    var u = e.processingVideos.data.map(function(e) {
                        return e.id === t.video.id ? t.video : e
                    });
                    return rt.__assign({}, e, {
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            data: u
                        })
                    });
                case ht:
                    var c = be(e.processingVideos.data || [], t.videos);
                    return rt.__assign({}, e, {
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            data: c,
                            loading: !1,
                            moreDataAvailable: !(t.videos.length < Ln)
                        })
                    });
                case bt:
                    return rt.__assign({}, e, {
                        videos: rt.__assign({}, e.videos, {
                            data: e.videos.data ? e.videos.data.filter(function(e) {
                                return e.id !== t.videoId
                            }) : e.videos.data
                        }),
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            data: e.processingVideos.data.filter(function(e) {
                                return e.id !== t.videoId
                            })
                        })
                    });
                case wt:
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads ? e.videoUploads.filter(function(e) {
                            return e.video && e.video.id !== t.videoId
                        }) : e.videoUploads
                    });
                case vt:
                    return rt.__assign({}, e, {
                        editModalErrors: e.editModalErrors.concat({
                            message: t.error,
                            origin: t.origin
                        }),
                        editingVideo: rt.__assign({}, e.editingVideo, {
                            saving: !1
                        }),
                        videos: rt.__assign({}, e.videos, {
                            loading: !1
                        }),
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            loading: !1
                        })
                    });
                case Et:
                    return rt.__assign({}, e, {
                        videoDownloads: Ye(e.videoDownloads, t.videoId)
                    });
                case St:
                    return rt.__assign({}, e, {
                        videoDownloads: rt.__assign({}, e.videoDownloads, (m = {}, m[t.videoId] = t.download, m))
                    });
                case xt:
                    return rt.__assign({}, e, {
                        videoDownloads: Ye(e.videoDownloads, t.videoId)
                    });
                case Ct:
                    return rt.__assign({}, we(), {
                        channelName: t.channelName
                    });
                case Ot:
                    return rt.__assign({}, e, {
                        editingVideo: rt.__assign({}, e.editingVideo, {
                            data: null
                        }),
                        notificationMessage: null,
                        editModalErrors: []
                    });
                case jt:
                    return rt.__assign({}, e, {
                        videoUploads: t.videoUploads.concat(e.videoUploads),
                        uploadValidationErrors: []
                    });
                case Pt:
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads.map(function(e) {
                            return e.id !== t.uploadID ? e : rt.__assign({}, e, {
                                status: dt.a.uploading
                            })
                        })
                    });
                case At:
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads.map(function(e) {
                            return e.id !== t.uploadID ? e : rt.__assign({}, e, {
                                video: t.video
                            })
                        })
                    });
                case Ft:
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads.map(function(e) {
                            return e.id !== t.uploadID ? e : rt.__assign({}, e, {
                                filePartIndex: t.filePartIndex,
                                fileByteIndex: t.fileByteIndex,
                                progressPercentage: t.progressPercentage
                            })
                        })
                    });
                case It:
                    var _ = rt.__assign({}, t.video, {
                        status: ot.VIDEO_STATUS_PENDING_TRANSCODE
                    });
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads.filter(function(e) {
                            return e.id !== t.uploadID
                        }),
                        processingVideos: rt.__assign({}, e.processingVideos, {
                            data: e.processingVideos.data ? [_].concat(e.processingVideos.data) : [_]
                        })
                    });
                case Vt:
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads.map(function(e) {
                            return e.id !== t.uploadID ? e : rt.__assign({}, e, {
                                errors: e.errors.concat(t.errors)
                            })
                        })
                    });
                case Rt:
                    return rt.__assign({}, e, {
                        uploadValidationErrors: e.uploadValidationErrors.concat(t.errors.map(function(e) {
                            return e.message
                        }).join(", ") + ": " + t.name)
                    });
                case Nt:
                    return rt.__assign({}, e, {
                        videoUploads: e.videoUploads.map(function(e) {
                            return e.id !== t.uploadID ? e : rt.__assign({}, e, {
                                errors: []
                            })
                        })
                    });
                default:
                    return e
            }
            var m
        }

        function Te(e) {
            return function(t) {
                return !!e.vodcastQueueVideoIDs && e.vodcastQueueVideoIDs.has(t)
            }
        }

        function Se(e, t) {
            void 0 === t && (t = {});
            var n = new Date;
            n.setHours(n.getHours() + 12);
            var a = new Date;
            return a.setHours(a.getHours() + 12), rt.__assign({
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
                endTime: a,
                timeZoneID: "America/Los_Angeles"
            }, t)
        }

        function Ee() {
            return {
                type: kn
            }
        }

        function xe() {
            return {
                saving: !1,
                loading: !1,
                notificationMessage: null,
                errors: []
            }
        }

        function He(e, t) {
            switch (void 0 === e && (e = xe()), t.type) {
                case bn:
                    return rt.__assign({}, e, {
                        loading: !0
                    });
                case Yn:
                    return rt.__assign({}, e, {
                        saving: !1,
                        notificationMessage: null
                    });
                case wn:
                    return rt.__assign({}, e, {
                        loading: !1,
                        errors: e.errors.concat({
                            message: t.error,
                            origin: t.origin
                        }),
                        saving: !1
                    });
                case kn:
                    return rt.__assign({}, e, {
                        errors: []
                    });
                default:
                    return e
            }
        }

        function Ce(e, t) {
            return Object(Fn.format)(e, t)
        }

        function Oe(e, t) {
            var n = e.split(":");
            if (2 !== n.length) throw new Error("invalid time string: " + e);
            var a = parseInt(n[0], 10),
                r = parseInt(n[1].substring(0, n[1].length - 2), 10),
                i = n[1].substring(n[1].length - 2);
            12 === a && (a = 0), "pm" === i && (a += 12);
            var s = t || new Date;
            return s.setHours(a, r), s
        }

        function je() {
            for (var e = [], t = ["am", "pm"], n = ["00", "30"], a = 0, r = t; a < r.length; a++)
                for (var i = r[a], s = 0; s < 12; ++s)
                    for (var o = 0, d = n; o < d.length; o++) {
                        var l = d[o];
                        e.push((0 === s ? 12 : s) + ":" + l + i)
                    }
            return e
        }

        function Pe(e) {
            return {
                isLoggedIn: Object(at.d)(e),
                saving: e.eventModal.saving,
                forbidden: !1,
                errors: e.eventModal.errors
            }
        }

        function Ae(e) {
            return Object(tt.bindActionCreators)({
                closeModal: nt.c,
                clearErrors: Ee
            }, e)
        }

        function Fe(e, t, n, a) {
            var r = this;
            return void 0 === n && (n = void 0), void 0 === a && (a = void 0), _(function(i) {
                return rt.__awaiter(r, void 0, void 0, function() {
                    var r, s, o, d, l;
                    return rt.__generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return i.store.dispatch({
                                    type: ut,
                                    isSaving: !0
                                }), n ? [4, se(e, n)(i.store.dispatch, i.store.getState, {})] : [3, 2];
                            case 1:
                                u.sent(), u.label = 2;
                            case 2:
                                return r = e.thumbnails.map(function(e) {
                                    return e.url
                                }), a ? [4, oe(e, a)(i.store.dispatch, i.store.getState, {})] : [3, 4];
                            case 3:
                                s = u.sent(), r.find(function(e) {
                                    return e === t.thumbnail_path
                                }) || (o = s.find(function(e) {
                                    return !r.includes(e.url)
                                })) && (d = P(o.url, ln.width, ln.height), l = new URL(d), t.thumbnail_path = j(l)), u.label = 4;
                            case 4:
                                return [4, de(e, t)(i.store.dispatch, i.store.getState, {})];
                            case 5:
                                return u.sent(), [2]
                        }
                    })
                })
            })
        }

        function Ie(e) {
            return "/" + e + "/manager_v2"
        }

        function Re(e, t) {
            return "/" + e + "/manager_v2/edit/" + t
        }

        function Ve(e, t) {
            return or + "/" + e + "/manager/v" + t + "/highlight"
        }

        function Ne(e, t) {
            return or + "/" + e + "/dashboard/video-stats/" + t
        }

        function Ue(e, t) {
            return "/" + e + "/manager_v2/schedule/" + t
        }

        function We(e) {
            return "/videos/" + e
        }

        function ze(e, t) {
            return {
                title: e.title,
                id: e.id,
                owner: {
                    id: t.id,
                    displayName: t.displayName
                }
            }
        }

        function Ge(e) {
            return {
                isLoggedIn: Object(at.d)(e),
                saving: e.videoManager.editingVideo.saving,
                forbidden: e.videoManager.forbidden,
                isInVodcastQueue: Te(e.videoManager),
                apiData: {
                    video: e.videoManager.editingVideo.data,
                    loading: e.videoManager.editingVideo.loading,
                    channelName: e.videoManager.channelName,
                    errors: e.videoManager.editModalErrors
                }
            }
        }

        function Je(e) {
            return Object(tt.bindActionCreators)({
                clearEditingVideo: Q,
                changeChannel: $,
                fetchVideoData: ve,
                saveVideoAndThumbnails: Fe,
                addVideoToVodcastQueue: le,
                clearEditModalErrors: Z
            }, e)
        }

        function Be(e) {
            var t;
            switch (e.toUpperCase()) {
                case Zt.a.Upload:
                    t = Object(it.d)("Upload", "VideoManagerVideoCard");
                    break;
                case Zt.a.Archive:
                    t = Object(it.d)("Past Broadcast", "VideoManagerVideoCard");
                    break;
                case Zt.a.Highlight:
                    t = Object(it.d)("Highlight", "VideoManagerVideoCard");
                    break;
                case Zt.a.PastPremiere:
                    t = Object(it.d)("Past Premiere", "VideoManagerVideoCard");
                    break;
                case Zt.a.PremiereUpload:
                    t = Object(it.d)("Premiere Upload", "VideoManagerVideoCard");
                    break;
                default:
                    t = ""
            }
            return t
        }

        function qe(e, t, n) {
            return t >= Cr ? Object(it.d)("{progress, number} GB / {total, number} GB ({percentage, number}%)", {
                progress: Ke(e / Cr),
                total: Ke(t / Cr),
                percentage: n
            }, "VideoManager.Uploader") : t >= Or ? Object(it.d)("{progress, number} MB / {total, number} MB ({percentage, number}%)", {
                progress: Ke(e / Or),
                total: Ke(t / Or),
                percentage: n
            }, "VideoManager.Uploader") : t >= jr ? Object(it.d)("{progress, number} KB / {total, number} KB ({percentage, number}%)", {
                progress: Ke(e / jr),
                total: Ke(t / jr),
                percentage: n
            }, "VideoManager.Uploader") : Object(it.d)("{progress, number} B / {total, number} B ({percentage, number}%)", {
                progress: e,
                total: t,
                percentage: n
            }, "VideoManager.Uploader")
        }

        function Ke(e) {
            return Number(e.toFixed(1))
        }

        function Qe(e) {
            return {
                isLoggedIn: Object(at.d)(e),
                activeFilter: e.videoManager.activeFilter,
                forbidden: e.videoManager.forbidden,
                isInVodcastQueue: Te(e.videoManager),
                apiData: {
                    videos: e.videoManager.videos,
                    processingVideos: e.videoManager.processingVideos,
                    notificationMessage: e.videoManager.notificationMessage,
                    channelName: e.videoManager.channelName,
                    vodcastQueueVideoIDs: e.videoManager.vodcastQueueVideoIDs
                },
                videoUploads: e.videoManager.videoUploads,
                uploadValidationErrors: e.videoManager.uploadValidationErrors
            }
        }

        function Ze(e) {
            return Object(tt.bindActionCreators)({
                fetchVideosData: De,
                fetchProcessingVideosData: Le,
                addVideoToVodcastQueue: le,
                showModal: nt.d,
                closeModal: nt.c,
                changeChannel: $,
                downloadVideo: ce,
                deleteVideo: ue,
                removeVideoUpload: X,
                submitVideoUploadFiles: he,
                clearVideoUploadErrors: pe,
                beginPollingProcessingVideos: _e,
                stopPollingProcessingVideos: me,
                clearEditModalErrors: Z,
                fetchVideoForScheduling: ne,
                createEvent: fe,
                updateEvent: ge
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var $e, Xe, et = n(8),
            tt = n(11),
            nt = n(50),
            at = n(19),
            rt = n(0),
            it = n(2),
            st = n(998),
            ot = n(1291),
            dt = n(1158),
            lt = "videoManager.VIDEO_SAVED",
            ut = "videoManager.VIDEO_SAVING",
            ct = "videoManager.FETCH_VIDEO_SUCCESS",
            _t = "videoManager.FETCH_VIDEOS_SUCCESS",
            mt = "videoManager.FETCH_VIDEOS_FAILED",
            ht = "videoManager.FETCH_PROCESSING_SUCCESS",
            pt = "videoManager.VIDEO_PROCESSING_SUCCEEDED",
            ft = "videoManager.VIDEO_PROCESSING_FAILED",
            gt = "videoManager.VIDEO_SCHEDULED",
            Mt = "videoManager.VODCAST_QUEUE_FETCHED",
            yt = "videoManager.ADDED_VIDEO_TO_VODCAST_QUEUE",
            vt = "videoManager.REQUEST_ERRORED",
            Lt = "videoManager.VIDEOS_LOADING",
            Dt = "videoManager.VIDEO_LOADING",
            Yt = "videoManager.PROCESSING_VIDEOS_LOADING",
            wt = "videoManager.VIDEO_UPLOAD_REMOVED",
            bt = "videoManager.VIDEO_DELETE_SUCCESS",
            kt = "videoManager.ACCESS_ALLOWED",
            Tt = "videoManager.ACCESS_FORBIDDEN",
            St = "videoManager.DOWNLOAD_INFO_FETCHED",
            Et = "videoManager.DOWNLOAD_BEGAN",
            xt = "videoManager.DOWNLOAD_FAILED",
            Ht = "videoManager.EDIT_MODAL_ERRORS_CLEARED",
            Ct = "videoManager.CHANNEL_CHANGED",
            Ot = "videoManager.EDITING_VIDEO_CLEARED",
            jt = "videoManager.UPLOADS_SUBMITTED",
            Pt = "videoManager.UPLOAD_STARTED",
            At = "videoManager.UPLOAD_VIDEO_CREATED",
            Ft = "videoManager.UPLOAD_PROGRESSED",
            It = "videoManager.UPLOAD_COMPLETED",
            Rt = "videoManager.UPLOAD_VALIDATION_FAILED",
            Vt = "videoManager.UPLOAD_FAILED",
            Nt = "videoManager.UPLOAD_ERRORS_DELETED",
            Ut = n(912),
            Wt = function(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var n = new Ut.BrowserHeaders(t),
                    a = new Ut.BrowserHeaders(e);
                return n.forEach(function(e, t) {
                    a.set(e, t)
                }), a
            },
            zt = "Authorization",
            Gt = "https://api.twitch.tv",
            Jt = "POST",
            Bt = "PUT",
            qt = "DELETE",
            Kt = ($e = {}, $e.Accept = "application/vnd.twitchtv.v5+json", $e["CLIENT-ID"] = "jzkbprff40iqj646a697cyrvl0zt2m6", $e),
            Qt = function() {
                function e(e) {
                    this.chatOAuthToken = e
                }
                return e.getClient = function(t) {
                    return void 0 === t && (t = ""), new e(t)
                }, e.prototype.doRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = Kt;
                    t.body && t.body instanceof FormData || (n = Object.assign({}, Kt, (r = {}, r["Content-Type"] = "application/json", r)));
                    var a = rt.__assign({}, t, {
                        headers: Wt(n, t.headers).toHeaders()
                    });
                    return d(new Request(e.toString(), a));
                    var r
                }, e.prototype.doAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = rt.__assign({}, t, {
                        headers: Wt(u(this.chatOAuthToken), t.headers)
                    });
                    return this.doRequest(e, n)
                }, e.prototype.doRawRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = rt.__assign({}, t, {
                        headers: Wt(Kt, t.headers).toHeaders()
                    });
                    return l(new Request(e.toString(), n))
                }, e.prototype.doRawAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = rt.__assign({}, t, {
                        headers: Wt(u(this.chatOAuthToken), t.headers)
                    });
                    return this.doRawRequest(e, n)
                }, e
            }(),
            Zt = n(272),
            $t = n(1289),
            Xt = n(3);
        ! function(e) {
            e[e.Delete = 0] = "Delete", e[e.EditPremiereEvent = 1] = "EditPremiereEvent"
        }(Xe || (Xe = {}));
        var en, tn, nn = {
                unscheduled: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Schedule Premiere", "UnscheduledVideoManagerCard"),
                        action: Xe.EditPremiereEvent,
                        buttonType: Xt.z.Hollow
                    },
                    subheader: {
                        duration: !0,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Unpremiered", "VideoManagerThumnbnail"),
                        overlayIcon: Xt._9.Lock,
                        error: !1
                    },
                    subrow: {
                        spinner: !1,
                        uploadProgress: !1,
                        expirationWarning: !1
                    },
                    interactableMetaData: !0,
                    sharable: !1
                },
                scheduled: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Edit premiere event", "VideoManagerCard"),
                        action: Xe.EditPremiereEvent,
                        buttonType: Xt.z.Hollow
                    },
                    subheader: {
                        duration: !1,
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
                },
                started: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !1,
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
                },
                processingAndScheduled: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Edit premiere event", "ProcessingScheduledVideoManagerCard"),
                        action: Xe.EditPremiereEvent,
                        buttonType: Xt.z.Hollow
                    },
                    subheader: {
                        duration: !1,
                        scheduledDate: !0,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Processing...", "ProcessingScheduledVideoManagerThumnbnail"),
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
                },
                premiereFailed: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Reschedule Premiere", "VideoManagerCard"),
                        action: Xe.EditPremiereEvent,
                        buttonType: Xt.z.Hollow
                    },
                    subheader: {
                        duration: !0,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Premiere failed", "VideoManagerThumnbnail"),
                        overlayIcon: Xt._9.Warning,
                        error: !0
                    },
                    subrow: {
                        spinner: !1,
                        uploadProgress: !1,
                        expirationWarning: !1
                    },
                    interactableMetaData: !0,
                    sharable: !1
                },
                uploadFailed: {
                    menu: {
                        show: !1,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Cancel upload", "VideoManagerCard"),
                        action: Xe.Delete,
                        buttonType: Xt.z.Text
                    },
                    subheader: {
                        duration: !1,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Error", "VideoManagerThumnbnail"),
                        overlayIcon: Xt._9.Warning,
                        error: !0
                    },
                    subrow: {
                        spinner: !1,
                        uploadProgress: !1,
                        expirationWarning: !1
                    },
                    interactableMetaData: !1,
                    sharable: !1
                },
                processingFailed: {
                    menu: {
                        show: !1,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Remove Video", "VideoManagerProcessingCard"),
                        action: Xe.Delete,
                        buttonType: Xt.z.Text
                    },
                    subheader: {
                        duration: !1,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Processing Error", "VideoManagerProcessingCard"),
                        overlayIcon: Xt._9.Warning,
                        error: !0
                    },
                    subrow: {
                        spinner: !1,
                        uploadProgress: !1,
                        expirationWarning: !1
                    },
                    interactableMetaData: !1,
                    sharable: !1
                },
                processing: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !0,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Processing...", "VideoManagerThumnbnail"),
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
                },
                uploadInProgress: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Cancel upload", "VideoManagerUploadInProgressCard"),
                        action: Xe.Delete,
                        buttonType: Xt.z.Text
                    },
                    subheader: {
                        duration: !1,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Uploading...", "VideoManagerThumnbnail"),
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
                },
                uploading: {
                    menu: {
                        show: !1,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: {
                        message: Object(it.d)("Cancel upload", "VideoManagerUploadingCard"),
                        action: Xe.Delete,
                        buttonType: Xt.z.Text
                    },
                    subheader: {
                        duration: !1,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Error", "VideoManagerUploadingCard"),
                        overlayIcon: Xt._9.Lock,
                        error: !0
                    },
                    subrow: {
                        spinner: !1,
                        uploadProgress: !1,
                        expirationWarning: !1
                    },
                    interactableMetaData: !0,
                    sharable: !1
                },
                queued: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !0,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !1
                    },
                    thumbnail: {
                        message: Object(it.d)("Queued", "VideoManagerThumnbnail"),
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
                },
                expiring: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !0
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !1,
                        scheduledDate: !1,
                        publishedDateBroadcastType: !0
                    },
                    thumbnail: {
                        message: Object(it.d)("Expiring", "VideoManagerThumnbnail"),
                        overlayIcon: Xt._9.Warning,
                        error: !0
                    },
                    subrow: {
                        spinner: !1,
                        uploadProgress: !1,
                        expirationWarning: !0
                    },
                    interactableMetaData: !0,
                    sharable: !1
                },
                archive: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !0
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !1,
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
                },
                pastPremiere: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !1,
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
                },
                uploadOrHighlight: {
                    menu: {
                        show: !0,
                        canDownloadHighlightAddToVodcast: !1
                    },
                    callToActionButton: null,
                    subheader: {
                        duration: !1,
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
            an = 7,
            rn = 86400,
            sn = 3e4,
            on = {
                width: 300,
                height: 169
            },
            dn = {
                width: 133,
                height: 75
            },
            ln = {
                width: 320,
                height: 240
            },
            un = n(1349),
            cn = 5e3,
            _n = 0,
            mn = void 0,
            hn = function() {
                function e(e, t, n) {
                    this.file = e, this.client = t, this.onProgressUpdate = n, this.isStopped = !1, this.totalFileParts = Math.ceil(this.file.size / this.client.partSizeBytes), this.numCompletedParts = 0
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
                    return rt.__awaiter(this, void 0, void 0, function() {
                        var n, a, r, i, s;
                        return rt.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    n = e, o.label = 1;
                                case 1:
                                    if (!(n < this.totalFileParts)) return [3, 7];
                                    if (this.isStopped) return [2, Promise.resolve()];
                                    o.label = 2;
                                case 2:
                                    return o.trys.push([2, 4, , 5]), a = this.sliceFile(n), [4, this.client.transferPart(a)];
                                case 3:
                                    return o.sent(), [3, 5];
                                case 4:
                                    throw r = o.sent(), this.stop(), r;
                                case 5:
                                    ++this.numCompletedParts, i = Math.min(this.numCompletedParts * this.client.partSizeBytes, this.file.size), s = Math.floor(i / this.file.size * 100), this.onProgressUpdate(n, i, s), o.label = 6;
                                case 6:
                                    return n += t, [3, 1];
                                case 7:
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
                }, e
            }(),
            pn = n(917),
            fn = [503],
            gn = [1e3, 5e3, 15e3, 6e4, 18e4, 3e5, 6e5],
            Mn = function() {
                function e(e) {
                    this.partSizeBytes = 15e6, this.maxConcurrentRequests = 2, this.upload = e
                }
                return e.prototype.createVideo = function() {
                    return rt.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return rt.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, pn.a.post("/kraken/videos", {
                                        body: {
                                            channel_id: this.upload.ownerID,
                                            title: this.upload.title,
                                            viewable: dt.b[this.upload.viewable],
                                            create_premiere: !0
                                        }
                                    })];
                                case 1:
                                    return e = n.sent(), e.body ? (t = e.body, this.videoAuthToken = t.upload.token, this.url = new URL(t.upload.url), [2, {
                                        url: this.url,
                                        videoAuthToken: this.videoAuthToken,
                                        video: i(t.video)
                                    }]) : [2, Promise.reject(e)]
                            }
                        })
                    })
                }, e.prototype.transferPart = function(e, t) {
                    return void 0 === t && (t = 0), rt.__awaiter(this, void 0, void 0, function() {
                        var n, a, r = this;
                        return rt.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.validUploadCreation() ? [4, fetch(this.url + "?part=" + (e.filePartIndex + 1) + "&upload_token=" + this.videoAuthToken, {
                                        body: e.blob,
                                        method: "PUT"
                                    })] : [2, Promise.reject(new Error("Upload was not successfully created."))];
                                case 1:
                                    return n = i.sent(), n.ok ? [2] : (a = this.retryPartDelayMilliseconds(t), a && fn.includes(n.status) ? [2, new Promise(function(n) {
                                        setTimeout(function() {
                                            n(r.transferPart(e, t + 1))
                                        }, a)
                                    })] : [2, Promise.reject(n)])
                            }
                        })
                    })
                }, e.prototype.completeVideo = function() {
                    return rt.__awaiter(this, void 0, void 0, function() {
                        return rt.__generator(this, function(e) {
                            return this.validUploadCreation() ? [2, fetch(this.url + "/complete?upload_token=" + this.videoAuthToken, {
                                method: "POST"
                            })] : [2, Promise.reject(new Error("Upload was not successfully created."))]
                        })
                    })
                }, e.prototype.retryPartDelayMilliseconds = function(e) {
                    return gn[e]
                }, e.prototype.validUploadCreation = function() {
                    return this.videoAuthToken && this.url
                }, e
            }(),
            yn = 1e3,
            vn = 30,
            Ln = 10,
            Dn = 3,
            Yn = "eventModal.EVENT_SAVED",
            wn = "eventModal.REQUEST_ERRORED",
            bn = "eventModal.LOADING",
            kn = "eventModal.ERRORS_CLEARED";
        ! function(e) {
            e[e.Submit = 0] = "Submit"
        }(tn || (tn = {})), it.n.store.registerReducer("videoManager", ke);
        var Tn = n(1),
            Sn = n(31),
            En = n(66),
            xn = n(30),
            Hn = n(918),
            Cn = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            On = function(e) {
                return {
                    description: e.description || "",
                    endTime: e.endTime,
                    gameID: e.game.id,
                    gameName: e.game.name,
                    language: e.language,
                    startTime: e.startTime,
                    timeZoneID: e.timeZoneID || Cn(),
                    title: e.title || ""
                }
            },
            jn = function(e, t, n) {
                var a = n;
                return a || (a = Se(t, e)), e.gameID && e.gameName && (a.game.id = e.gameID, a.game.name = e.gameName, delete e.gameID, delete e.gameName), rt.__assign({}, a, e)
            };
        it.n.store.registerReducer("eventModal", He);
        var Pn, An = n(88),
            Fn = n(911),
            In = n(1882),
            Rn = (n(1883), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setInputRef = function(e) {
                        return t.textInput = e
                    }, t.setContainerRef = function(e) {
                        return t.containerElement = e
                    }, t
                }
                return rt.__extends(t, e), t.prototype.componentDidMount = function() {
                    this._picker = new In({
                        field: this.textInput,
                        onSelect: this.props.onChange,
                        theme: "inline",
                        minDate: this.props.minDate,
                        defaultDate: this.props.defaultDate,
                        setDefaultDate: !0,
                        container: this.containerElement,
                        format: "MMMM D, YYYY",
                        toString: function(e, t) {
                            return Object(Fn.format)(e, t)
                        }
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setDateIfChanged(this.props.defaultDate, e.defaultDate)
                }, t.prototype.render = function() {
                    var e = {};
                    return this.props.readOnly && (e.readOnly = !0), Tn.createElement(Xt.U, {
                        className: "date-picker"
                    }, Tn.createElement(Xt.Q, rt.__assign({
                        type: Xt.R.Text,
                        refDelegate: this.setInputRef
                    }, e)), Tn.createElement("div", {
                        className: "date-picker__container",
                        ref: this.setContainerRef
                    }))
                }, t.prototype.setDateIfChanged = function(e, t) {
                    var n = e ? e.getTime() : null;
                    (t ? t.getTime() : null) !== n && (null === t && (this.textInput.value = ""), this._picker.setDate(t || new Date, !0))
                }, t
            }(Tn.Component)),
            Vn = n(72),
            Nn = n(1013),
            Un = n(6),
            Wn = (n(1884), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        base64ImageData: null
                    }, t.onFinishUploading = function(e, n) {
                        !n || n instanceof FormData || !n.event_cover_image || t.setState({
                            base64ImageData: n.event_cover_image
                        }), t.props.onFinishUploading(e)
                    }, t.removeImage = function() {
                        t.setState({
                            base64ImageData: null
                        }), t.props.onFinishUploading({})
                    }, t
                }
                return rt.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = null;
                    return this.state.base64ImageData && (e = Tn.createElement(Xt._17, {
                        display: Xt.H.Flex,
                        justifyContent: Xt.T.Center,
                        alignItems: Xt.c.Center,
                        background: Xt.m.Alt,
                        position: Xt._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachTop: !0
                    }, Tn.createElement("img", {
                        className: "event-modal-image-uploader__preview-image",
                        src: "data:image/jpg;base64," + this.state.base64ImageData
                    })), t = Tn.createElement(Xt.u, {
                        type: Xt.z.Text,
                        onClick: this.removeImage
                    }, Object(it.d)("Remove", "EventModalImageUploader"))), Tn.createElement(Xt.U, {
                        className: "event-modal-image-uploader"
                    }, Tn.createElement(Xt.U, {
                        className: "event-modal-image-uploader__container",
                        overflow: Xt.Y.Hidden,
                        display: Xt.H.Flex,
                        margin: {
                            top: 2,
                            bottom: 1
                        },
                        flexDirection: Xt.J.Column,
                        position: Xt._2.Relative
                    }, Tn.createElement(Xt.U, {
                        className: "event-modal-image-uploader__uploader"
                    }, Tn.createElement(Nn.a, {
                        imageDimensions: "676x380",
                        maxFileSizeMegabytes: 1,
                        uploadURL: "https://api.twitch.tv/v5/channels/" + this.props.user.id + "/event_cover_images",
                        base64EncodedPropertyName: "event_cover_image",
                        shouldBase64Encode: !0,
                        onFinishUploading: this.onFinishUploading
                    })), e), Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        },
                        fullWidth: !0
                    }, t))
                }, t = rt.__decorate([Object(Un.c)("EventModalImageUploader")], t)
            }(Tn.Component)),
            zn = Wn,
            Gn = n(409),
            Jn = n(4),
            Bn = n(65),
            qn = n(459),
            Kn = (n(1541), function(e) {
                return Tn.createElement(Xt.U, {
                    attachTop: !0,
                    attachRight: !0,
                    attachLeft: !0,
                    attachBottom: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    display: Xt.H.Flex,
                    flexDirection: Xt.J.Column,
                    justifyContent: Xt.T.Center,
                    alignItems: Xt.c.Center,
                    position: Xt._2.Absolute
                }, Tn.createElement(Xt.U, {
                    textAlign: Xt._22.Center,
                    flexShrink: 1
                }, Tn.createElement(Xt._8, {
                    asset: e.icon,
                    width: 46,
                    height: 48,
                    type: Xt._10.Alt2
                })), Tn.createElement(Xt.U, {
                    margin: {
                        top: 1
                    },
                    textAlign: Xt._22.Center
                }, Tn.createElement(Xt._21, {
                    type: Xt._26.H4,
                    color: Xt.F.Alt2
                }, e.titleText)), Tn.createElement(Xt.U, {
                    textAlign: Xt._22.Center
                }, Tn.createElement(Xt._21, {
                    type: Xt._26.P,
                    color: Xt.F.Alt2
                }, e.subText)))
            });
        ! function(e) {
            e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
        }(Pn || (Pn = {}));
        var Qn = {};
        Qn[Bn.a.Esc] = Pn.Dismiss, Qn[Bn.a.Enter] = Pn.Confirm, Qn[Bn.a.Tab] = Pn.Confirm, Qn[Bn.a.Up] = Pn.Up, Qn[Bn.a.Down] = Pn.Down;
        var Zn, $n = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onFocus = function() {
                        t.props.searchTerm && t.setState({
                            isOpen: !0
                        })
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.handleInteraction(Pn.Dismiss)
                    }, t.onKeyDown = function(e) {
                        var n = Qn[e.keyCode];
                        n && t.handleInteraction(n)
                    }, t.handleInteraction = function(e) {
                        switch (e) {
                            case Pn.Dismiss:
                                "" === t.props.searchTerm ? t.props.selectEmptyGame() : t.props.initialGameTitle ? t.props.selectGameByName(t.props.initialGameTitle) : t.props.gameResults && t.props.gameResults.length > 0 && t.props.selectGame(t.state.highlightedGameIndex), t.setState({
                                    isOpen: !1
                                });
                                break;
                            case Pn.Confirm:
                                t.props.searchTerm && t.props.gameResults ? t.props.selectGame(t.state.highlightedGameIndex) : t.props.selectEmptyGame(), t.setState({
                                    isOpen: !1
                                });
                                break;
                            case Pn.Up:
                                if (!t.props.gameResults) return;
                                t.setState({
                                    highlightedGameIndex: Math.max(0, t.state.highlightedGameIndex - 1)
                                });
                                break;
                            case Pn.Down:
                                if (!t.props.gameResults) return;
                                t.setState({
                                    highlightedGameIndex: Math.min(t.props.gameResults.length - 1, t.state.highlightedGameIndex + 1)
                                })
                        }
                    }, t.onChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            isOpen: !!n,
                            highlightedGameIndex: 0
                        }, function() {
                            t.props.startNewSearch(n)
                        })
                    }, t.onClickGame = function(e) {
                        var n = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                        t.props.selectGame(n), t.setState({
                            isOpen: !1
                        })
                    }, t.state = t.state = {
                        isOpen: !1,
                        highlightedGameIndex: 0
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, Tn.createElement(An.a, {
                        onClickOut: this.onClickOut
                    }, Tn.createElement(Xt.Q, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: Xt.R.Text,
                        icon: Xt._9.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm
                    }), Tn.createElement(Xt.p, {
                        direction: Xt.q.Bottom,
                        noTail: !0,
                        size: Xt.r.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = Jn("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? Tn.createElement(Xt.X, {
                        fillContent: !0
                    }) : Tn.createElement(Kn, {
                        icon: Xt._9.SearchNoResults,
                        titleText: Object(it.d)("No results found", "EventGameSelector"),
                        subText: Object(it.d)("They're probably in another castle", "EventGameSelector")
                    }) : Tn.createElement(Kn, {
                        icon: Xt._9.DeadGlitch,
                        titleText: Object(it.d)("Search is not available at this time", "EventGameSelector"),
                        subText: Object(it.d)("Please try again later", "EventGameSelector")
                    })), Tn.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, Tn.createElement(Xt._17, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: Xt.m.Base,
                        position: Xt._2.Absolute,
                        overflow: Xt.Y.Hidden,
                        display: Xt.H.Block
                    }, Tn.createElement(xn.b, {
                        className: "search-result-view__wrapper",
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, Tn.createElement(Xt.U, {
                        className: "search-result-view__listing-wrapper",
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, Tn.createElement(xn.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, a, r) {
                        var i = r[t] === r[a];
                        return Tn.createElement(qn.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: i,
                            "data-game-highlighted": i,
                            "data-game-index": a
                        })
                    })
                }, t
            }(Tn.Component),
            Xn = n(89),
            ea = n(139),
            ta = 10,
            na = function() {
                function e() {
                    var e = this;
                    this.searchCode = function(t, n) {
                        return rt.__awaiter(e, void 0, void 0, function() {
                            var e;
                            return rt.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(Xn.a.Games, t, t, {
                                            hitsPerPage: ta,
                                            page: n
                                        })];
                                    case 1:
                                        return [2, a.sent()];
                                    case 2:
                                        throw e = a.sent(), it.i.error(e, "Algolia type results search failed"), e;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, this.searchClient = new ea.a(it.a.algoliaApplicationID, it.a.algoliaAPIKey)
                }
                return e
            }(),
            aa = [],
            ra = {
                objectID: "",
                name: ""
            },
            ia = function(e) {
                return {
                    objectID: "",
                    name: e
                }
            },
            sa = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
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
                                var r = Object(Gn.b)({
                                    searchResults: e,
                                    append: n.state.nextAlgoliaPage > 0,
                                    currentGameResults: a
                                }).currentGameResults;
                                t = r ? r.results : aa
                            }
                            n.setState({
                                gameResults: t,
                                isSearchPending: !1,
                                nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                            })
                        }
                    }, n.selectGame = function(e) {
                        if (!(n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title)) return void n.selectEmptyGame();
                        var t = n.state.gameResults[e];
                        if (!t.title) return void n.selectEmptyGame();
                        var a = {
                            objectID: t.id,
                            name: t.title
                        };
                        n.setSelectedGameState(a)
                    }, n.selectGameByName = function(e) {
                        n.setSelectedGameState(ia(e))
                    }, n.selectEmptyGame = function() {
                        n.setSelectedGameState(ra)
                    }, n.setSelectedGameState = function(e) {
                        n.setState({
                            selectedGame: e,
                            searchTerm: e.name,
                            redrawKey: Math.random()
                        }, n.fireChangeGame)
                    }, n.fireChangeGame = function() {
                        n.props.onChange(n.state.selectedGame)
                    }, n.searchClient = new na, n.state = n.state = {
                        searchTerm: t.currentGameTitle,
                        gameResults: aa,
                        isSearchPending: !1,
                        nextAlgoliaPage: 0,
                        selectedGame: ia(t.currentGameTitle),
                        redrawKey: Math.random()
                    }, n
                }
                return rt.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.startNewSearch(this.props.currentGameTitle)
                }, t.prototype.render = function() {
                    return this.props.disabled ? Tn.createElement("div", {
                        className: "game-selector__search-container"
                    }, Tn.createElement(Xt.Q, {
                        value: this.props.currentGameTitle,
                        type: Xt.R.Text,
                        icon: Xt._9.NavGames,
                        disabled: !0
                    })) : Tn.createElement($n, {
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
            }(Tn.Component),
            oa = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange({
                            language: e.currentTarget.value
                        })
                    }, t.renderLanguageOption = function(e) {
                        return Tn.createElement("option", {
                            key: e.languageCode,
                            value: e.languageCode
                        }, e.name)
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt.M, {
                        id: "event-language",
                        label: Object(it.d)("Event language", "EventModal")
                    }, Tn.createElement(Xt._14, {
                        name: "event-language",
                        onChange: this.onChange,
                        disabled: this.props.disabled,
                        defaultValue: this.props.defaultLanguage
                    }, it.a.locales.map(this.renderLanguageOption)))
                }, t
            }(Tn.Component),
            da = (n(1885), {
                RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                timeString: "h:mma"
            }),
            la = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onFocus = function() {
                        n.setState({
                            isOpen: !0
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            isOpen: !1
                        })
                    }, n.onClickTime = function(e) {
                        var t = e.currentTarget.getAttribute("data-time");
                        n.setState({
                            isOpen: !1,
                            selectedTime: t
                        }), n.notifyChange(t)
                    }, n.setInputRef = function(e) {
                        return n.textInput = e
                    }, n.state = {
                        isOpen: !1,
                        selectedTime: t.defaultDate ? n.timeToString(t.defaultDate) : ""
                    }, n
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        n = t.timeOptions.map(function(t) {
                            return Tn.createElement(Xt.S, {
                                hover: e.state.selectedTime === t,
                                key: t,
                                "data-time": t,
                                onClick: e.onClickTime
                            }, Tn.createElement(Xt.U, {
                                padding: .5
                            }, t))
                        });
                    return Tn.createElement(Xt.U, {
                        position: Xt._2.Relative,
                        className: "time-picker"
                    }, Tn.createElement(An.a, {
                        onClickOut: this.onClickOut
                    }, Tn.createElement(Xt.Q, {
                        type: Xt.R.Text,
                        onFocus: this.onFocus,
                        readOnly: !0,
                        refDelegate: this.setInputRef,
                        value: this.state.selectedTime
                    }), Tn.createElement(Xt.p, {
                        noTail: !0,
                        show: this.state.isOpen,
                        "data-a-target": "time-selector-balloon"
                    }, Tn.createElement(Xt._17, {
                        color: Xt.F.Link,
                        fontSize: Xt.L.Size5,
                        className: "time-picker__dropdown"
                    }, n))))
                }, t.prototype.notifyChange = function(e) {
                    this.props.onChange && this.props.onChange(Oe(e, this.props.defaultDate))
                }, t.prototype.timeToString = function(e) {
                    return Ce(e, da.timeString)
                }, t.timeOptions = je(), t
            }(Tn.Component),
            ua = function(e) {
                var t = (new Date).getTime(),
                    n = t + 36e5 * e,
                    a = new Date(n);
                return a.setMinutes(30 * Math.ceil(a.getMinutes() / 30)), a
            },
            ca = function() {
                return (new Date).toLocaleTimeString("en-us", {
                    timeZoneName: "short"
                }).split(" ")[2]
            };
        ! function(e) {
            e.Description = "description", e.EndTime = "endTime", e.GameID = "gameID", e.GameName = "gameName", e.imageID = "imageID", e.Language = "language", e.StartTime = "startTime", e.Title = "title"
        }(Zn || (Zn = {}));
        var _a, ma = function() {
                function e(e) {
                    var t = this;
                    this.FormDisplayName = (n = {}, n[Zn.Description] = "Description", n[Zn.EndTime] = "End Time", n[Zn.GameID] = "Game", n[Zn.GameName] = "Game", n[Zn.imageID] = "Image", n[Zn.Language] = "Language", n[Zn.StartTime] = "Start Time", n[Zn.Title] = "Title", n), this.RequiredFields = [Zn.Title, Zn.Description, Zn.Language, Zn.StartTime, Zn.GameID, Zn.GameName], this.errorsForMissingFields = {}, this.editsAreValid = function() {
                        var e = t.RequiredFields.filter(t.findMissingFields);
                        return e.forEach(function(e) {
                            t.errorsForMissingFields[e] = t.errorsForMissingFields[e] || [], t.errorsForMissingFields[e].push(Object(it.d)("The {fieldName} field is required", {
                                fieldName: t.FormDisplayName[e]
                            }, "EventModal"))
                        }), e.length <= 0
                    }, this.errorMessageFor = function(e) {
                        return t.errorsForMissingFields[e] && t.errorsForMissingFields[e].join(", ")
                    }, this.findMissingFields = function(e) {
                        var n = Object.keys(t.eventEdits),
                            a = n.indexOf(e) < 0,
                            r = Boolean(!t.eventEdits[e]);
                        return a || r
                    }, this.eventEdits = e;
                    var n
                }
                return e
            }(),
            ha = (n(1886), function() {
                return Object(Vn.b)()[0] || "en"
            });
        ! function(e) {
            e.EditDescriptionField = "EDIT_DESCRIPTION_FIELD", e.CancelTestSelector = "CANCEL_TEST_SELECTOR", e.SaveTestSelector = "SAVE_TEST_SELECTOR", e.ModalAnimationTestSelector = "MODAL_ANIMATION_TEST_SELECTOR", e.StartDateFields = "START_DATE_FIELDS", e.EndDateFields = "END_DATE_FIELDS", e.SubmitErrorSelector = "SUBMIT_ERROR_SELECTOR"
        }(_a || (_a = {}));
        var pa, fa = function(e) {
                function t(n) {
                    var a = e.call(this) || this;
                    return a.state = {
                        animationProps: {
                            type: Xt.i.SlideInRight,
                            duration: Xt.g.Medium,
                            timing: Xt.h.EaseInOut,
                            enabled: !0
                        },
                        eventEdits: t.instantiateEventEdits(),
                        isDirty: !1,
                        validator: new ma(t.instantiateEventEdits())
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
                        if (a.state.eventEdits && a.state.eventEdits.startTime) {
                            var t = new Date(e.getTime());
                            t.setHours(a.state.eventEdits.startTime.getHours(), a.state.eventEdits.startTime.getMinutes()), a.onChange({
                                startTime: t
                            })
                        }
                    }, a.onLanguageChange = function(e) {
                        var t = e.language;
                        a.onChange({
                            language: t
                        })
                    }, a.onChange = function(e) {
                        a.setState(function(t) {
                            return {
                                isDirty: !0,
                                eventEdits: rt.__assign({}, t.eventEdits, e)
                            }
                        }), a.props.errors.length > 0 && a.props.clearErrors()
                    }, a.onCancel = function() {
                        a.props.onCancel && a.props.onCancel(), a.animateOutAndClose()
                    }, a.onConfirm = function() {
                        return rt.__awaiter(a, void 0, void 0, function() {
                            var e;
                            return rt.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = new ma(this.state.eventEdits), e.editsAreValid() ? (this.props.clearErrors(), this.props.event || !this.props.onCreate ? [3, 2] : [4, this.props.onCreate(jn(this.state.eventEdits, this.props.user.id, this.props.event), this.props.videoID)]) : (this.setState({
                                            validator: e
                                        }), [2]);
                                    case 1:
                                        return t.sent(), [3, 4];
                                    case 2:
                                        return this.props.onUpdate && this.state.eventEdits ? [4, this.props.onUpdate(jn(this.state.eventEdits, this.props.user.id, this.props.event), this.props.videoID)] : [3, 4];
                                    case 3:
                                        t.sent(), t.label = 4;
                                    case 4:
                                        return this.animateOutAndClose(), [2]
                                }
                            })
                        })
                    }, a.closeModalWithRouteBackAndClearErrors = function() {
                        a.props.clearErrors(), a.props.closeModalWithRouteBack()
                    }, a.animateOutAndClose = function(e) {
                        void 0 === e && (e = a.closeModalWithRouteBackAndClearErrors), a.setState({
                            animationProps: rt.__assign({}, a.state.animationProps, {
                                type: Xt.i.SlideOutRight,
                                onAnimationEnd: e
                            })
                        })
                    }, n.event ? a.state.eventEdits = On(n.event) : n.initialValues && n.initialValues.game && (a.state.eventEdits.gameID = n.initialValues.game.objectID, a.state.eventEdits.gameName = n.initialValues.game.name), a
                }
                return rt.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.props.errors.find(function(e) {
                            return e.origin === tn.Submit
                        });
                    return t && (e = ga(t.message)), Tn.createElement(Xt.U, {
                        className: "event-modal"
                    }, Tn.createElement(Xt.e, rt.__assign({}, this.state.animationProps, {
                        "data-test-selector": _a.ModalAnimationTestSelector
                    }), Tn.createElement(Xt._17, {
                        className: "event-modal__content",
                        background: Xt.m.Base
                    }, Tn.createElement(Xt.P, {
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: 4
                    }, Tn.createElement(An.a, {
                        onClickOut: this.onCancel
                    }, Tn.createElement(Xt._17, {
                        display: Xt.H.Flex,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        },
                        borderBottom: !0
                    }, Tn.createElement(Xt.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.End
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H4
                    }, Object(it.d)("Event Details", "EventModal"))), Tn.createElement(Xt.U, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, Tn.createElement(Xt.u, {
                        type: Xt.z.Text,
                        onClick: this.onCancel,
                        "data-test-selector": _a.CancelTestSelector
                    }, Object(it.d)("Cancel", "EventModal")), " ", Tn.createElement(Xt.u, {
                        onClick: this.onConfirm,
                        "data-test-selector": _a.SaveTestSelector
                    }, Object(it.d)("Save", "EventModal"))), e), Tn.createElement(xn.b, null, this.renderFormFields()))))))
                }, t.prototype.renderFormFields = function() {
                    var e = Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        flexDirection: Xt.J.Row,
                        "data-test-selector": _a.EndDateFields
                    }, Tn.createElement(Xt.M, {
                        id: "event-start-date",
                        label: Object(it.d)("End Date", "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.endTime),
                        errorMessage: this.state.validator.errorMessageFor(Zn.EndTime)
                    }, Tn.createElement(Rn, {
                        defaultDate: this.state.eventEdits.endTime
                    })), Tn.createElement(Xt.M, {
                        id: "event-start-time",
                        label: Object(it.d)("End Time ({localeName})", {
                            localeName: ca()
                        }, "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.endTime),
                        errorMessage: this.state.validator.errorMessageFor(Zn.EndTime)
                    }, Tn.createElement(la, {
                        defaultDate: this.state.eventEdits.endTime
                    })));
                    return Tn.createElement(Xt.U, {
                        padding: {
                            bottom: 4
                        }
                    }, Tn.createElement(Xt.U, null, Tn.createElement(Xt.M, {
                        id: "event-title",
                        label: Object(it.d)("Event Title", "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.title),
                        errorMessage: this.state.validator.errorMessageFor(Zn.Title)
                    }, Tn.createElement(Xt.Q, {
                        onChange: this.onTitleChange,
                        value: this.state.eventEdits.title || "",
                        type: Xt.R.Text,
                        placeholder: Object(it.d)("Your title is also used in reminders and social media posts. ({limit} character limit)", {
                            limit: 140
                        }, "EventModal")
                    }))), Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        flexDirection: Xt.J.Row,
                        "data-test-selector": _a.StartDateFields
                    }, Tn.createElement(Xt.M, {
                        id: "event-start-date",
                        label: Object(it.d)("Start Date", "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.startTime),
                        errorMessage: this.state.validator.errorMessageFor(Zn.StartTime)
                    }, Tn.createElement(Rn, {
                        defaultDate: this.state.eventEdits.startTime,
                        onChange: this.onChangeStartDate
                    })), Tn.createElement(Xt.M, {
                        id: "event-start-time",
                        label: Object(it.d)("Start Time ({localeName})", {
                            localeName: ca()
                        }, "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.startTime),
                        errorMessage: this.state.validator.errorMessageFor(Zn.StartTime)
                    }, Tn.createElement(la, {
                        defaultDate: this.state.eventEdits.startTime,
                        onChange: this.onChangeStartDate
                    }))), this.props.hideEndTimeField ? null : e, Tn.createElement(Xt.U, null, Tn.createElement(Xt.M, {
                        id: "event-game",
                        label: Object(it.d)("Game", "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.gameID || this.state.validator.errorsForMissingFields.gameName),
                        errorMessage: this.state.validator.errorMessageFor(Zn.GameID) || this.state.validator.errorMessageFor(Zn.GameName)
                    }, Tn.createElement(sa, {
                        currentGameTitle: this.state.eventEdits.gameName || "",
                        onChange: this.onGameChange
                    }))), Tn.createElement(zn, {
                        user: this.props.user,
                        onFinishUploading: this.onFinishUploading
                    }), Tn.createElement(Xt.M, {
                        label: "",
                        error: Boolean(this.state.validator.errorsForMissingFields.language),
                        errorMessage: this.state.validator.errorMessageFor(Zn.Language)
                    }, Tn.createElement(Xt.U, {
                        display: Xt.H.Flex
                    }, Tn.createElement(oa, {
                        onChange: this.onLanguageChange,
                        disabled: !1,
                        defaultLanguage: this.state.eventEdits.language || ha()
                    }))), Tn.createElement(Xt.U, null, Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 1
                        }
                    }, Tn.createElement(Xt.M, {
                        label: Object(it.d)("Description", "EventModal"),
                        error: Boolean(this.state.validator.errorsForMissingFields.description),
                        errorMessage: this.state.validator.errorMessageFor(Zn.Description)
                    }, Tn.createElement(Xt._23, {
                        placeholder: Object(it.d)("Tell viewers why they should watch your event", "EventModal"),
                        onChange: this.onDescriptionChange,
                        value: this.state.eventEdits.description || "",
                        disabled: !1,
                        "data-test-selector": _a.EditDescriptionField
                    })))))
                }, t.instantiateEventEdits = function() {
                    return {
                        description: "",
                        endTime: ua(13),
                        gameID: "",
                        gameName: "",
                        language: ha(),
                        startTime: ua(12),
                        timeZoneID: Cn(),
                        title: ""
                    }
                }, t
            }(Tn.Component),
            ga = function(e) {
                return Tn.createElement(Xt.U, {
                    "data-test-selector": _a.SubmitErrorSelector,
                    fullWidth: !0,
                    padding: {
                        top: 1
                    },
                    textAlign: Xt._22.Right
                }, Tn.createElement(Xt._21, {
                    color: Xt.F.Error
                }, e))
            },
            Ma = Object(Un.c)("EventModal")(fa),
            ya = Ma,
            va = Object(et.a)(Pe, Ae)(ya),
            La = (n(1887), {
                onConfirm: "ON_CONFIRM",
                onCancel: "ON_CANCEL"
            }),
            Da = function(e) {
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
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt._17, {
                        className: "vm-edit-cancel-modal",
                        background: Xt.m.Base,
                        padding: 2
                    }, Tn.createElement(Xt.U, null, Tn.createElement(Xt._21, {
                        type: Xt._26.H3
                    }, this.props.title), Tn.createElement(Xt.U, {
                        padding: {
                            y: 1
                        }
                    }, this.props.body), Tn.createElement(Xt.U, {
                        padding: 1,
                        display: Xt.H.Flex,
                        justifyContent: Xt.T.End,
                        alignItems: Xt.c.End,
                        alignContent: Xt.b.End
                    }, Tn.createElement(Xt.U, null, Tn.createElement(Xt.u, {
                        type: Xt.z.Default,
                        onClick: this.onConfirm,
                        "data-test-selector": La.onConfirm
                    }, this.props.okText)), Tn.createElement(Xt.U, {
                        margin: {
                            left: 1
                        }
                    }, Tn.createElement(Xt.u, {
                        type: Xt.z.Hollow,
                        onClick: this.onCancel,
                        "data-test-selector": La.onCancel
                    }, this.props.cancelText)))))
                }, t
            }(Tn.PureComponent),
            Ya = n(1452),
            wa = n(1409),
            ba = n(1440),
            ka = n.n(ba),
            Ta = n(1348),
            Sa = (n(1350), 1280),
            Ea = 720,
            xa = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = it.n.logger.withCategory("video-manager"), n.onUpdateCurrentCrop = function(e, t) {
                        n.setState({
                            percentCrop: e,
                            pixelCrop: t
                        })
                    }, n.renderDefaultCrop = function() {
                        var e = n.props.defaultPixelCrop;
                        if (e) {
                            var t = new Image;
                            t.onload = function() {
                                var a = t.height,
                                    r = t.width,
                                    i = e.height < a ? e.height : a,
                                    s = e.width < r ? e.width : r;
                                n.setState({
                                    percentCrop: rt.__assign({}, e, {
                                        height: i / a * 100,
                                        width: s / r * 100
                                    })
                                })
                            }, t.src = n.state.previewSrc || ""
                        }
                    }, n.translateInitialCrop = function(e, t, a) {
                        n.setState({
                            percentCrop: e,
                            pixelCrop: a
                        })
                    }, n.onFinishCropping = function() {
                        n.props.onFinishCropping({
                            previewSrc: Object(Ta.b)(n.state.previewSrc, n.state.pixelCrop.x, n.state.pixelCrop.y, n.state.pixelCrop.width, n.state.pixelCrop.height, Sa, Ea),
                            uploadParams: {
                                file: n.props.file,
                                cropX: n.state.pixelCrop.x,
                                cropY: n.state.pixelCrop.y,
                                cropW: n.state.pixelCrop.width,
                                cropH: n.state.pixelCrop.height
                            }
                        })
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
                return rt.__extends(t, e), t.prototype.componentWillMount = function() {
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
                    var e = rt.__assign({}, this.state.percentCrop, {
                        aspect: 16 / 9
                    });
                    return this.state.previewSrc ? Tn.createElement("div", null, Tn.createElement("figure", {
                        className: "thumbnail-selector-cropper__thumbnail-cropper"
                    }, Tn.createElement(ka.a, {
                        src: this.state.previewSrc,
                        crop: e,
                        onComplete: this.onUpdateCurrentCrop,
                        onImageLoaded: this.translateInitialCrop
                    })), Tn.createElement(Xt.U, {
                        margin: {
                            top: .5
                        },
                        className: "thumbnail-selector-cropper__thumbnail-select"
                    }, Tn.createElement(Xt.u, {
                        onClick: this.onFinishCropping,
                        fullWidth: !0
                    }, Object(it.d)("Finish Cropping", "VideoManagerThumbnailSelectorCropper")))) : null
                }, t
            }(Tn.Component),
            Ha = "thumbnail-selector-cropper__thumbnail-select-image",
            Ca = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOnClick = function() {
                        t.props.onSelectThumbnail(t.props.thumbnailSrc)
                    }, t.handleDeleteCustomThumbnail = function(e) {
                        e.stopPropagation(), t.props.onDeleteCustomThumbnail(t.props.thumbnailSrc)
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (this.props.isCustomThumbnail) {
                        var t = Object(it.d)("Remove Image", "SelectableThumbnail");
                        e = Tn.createElement("div", {
                            className: "thumbnail-selector-cropper__custom-thumbnail-delete",
                            "data-test-selector": "delete-icon"
                        }, Tn.createElement(Xt._30, {
                            label: t,
                            direction: Xt._32.Right
                        }, Tn.createElement(Xt.v, {
                            onClick: this.handleDeleteCustomThumbnail,
                            ariaLabel: t,
                            type: Xt.w.Primary,
                            icon: Xt._9.Close,
                            size: Xt.x.Small
                        })))
                    }
                    var n = (r = {}, r[Ha] = !0, r["thumbnail-selector-cropper__thumbnail-select-image--selected"] = this.props.isSelected, r["thumbnail-selector-cropper__custom-thumbnail"] = this.props.isCustomThumbnail, r),
                        a = "";
                    return a = this.props.isSelected ? Object(it.d)("Currently selected video thumbnail", "VideoManagerThumbnailSelectorCropper") : Object(it.d)("Video thumbnail option", "VideoManagerThumbnailSelectorCropper"), Tn.createElement("div", {
                        className: Jn(n),
                        onClick: this.handleOnClick
                    }, Tn.createElement("figure", null, Tn.createElement(Xt.j, {
                        ratio: Xt.k.Aspect16x9
                    }, Tn.createElement("img", {
                        src: A(this.props.thumbnailSrc, on.width, on.height),
                        alt: a
                    }))), e);
                    var r
                }, t
            }(Tn.Component),
            Oa = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement("div", {
                        className: "thumbnail-selector-cropper__thumbnail-select-image thumbnail-selector-cropper__thumbnail-select-image--button",
                        key: "thumbnail-row-upload-button"
                    }, Tn.createElement(Xt.j, {
                        ratio: Xt.k.Aspect16x9
                    }, Tn.createElement(Xt._17, {
                        border: !0,
                        className: "thumbnail-selector-cropper__upload-placeholder",
                        background: Xt.m.Alt2,
                        color: Xt.F.Link,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center
                    }, Tn.createElement(Xt._8, {
                        asset: Xt._9.Upload,
                        type: Xt._10.Alt2,
                        height: 18,
                        width: 18
                    })), Tn.createElement(Xt._17, null, Tn.createElement("input", {
                        type: "file",
                        accept: "image/*",
                        name: "thumbnail",
                        className: "thumbnail-selector-cropper__thumbnail-select-button-input",
                        onChange: this.props.onSelectedFile
                    }))))
                }, t
            }(Tn.Component),
            ja = {
                thumbnailErrorSelector: "thumbnail-error-selector"
            },
            Pa = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderWhenCropping = function(e) {
                        return Tn.createElement(xa, {
                            file: e,
                            onFinishCropping: n.onFinishCropping,
                            onFailedReadFile: n.onFailedReadFile
                        })
                    }, n.onFailedReadFile = function() {
                        n.setState({
                            selectedFile: null
                        })
                    }, n.onFinishCropping = function(e) {
                        n.props.onNewCustomThumbnailChange(e.uploadParams), n.props.onSelectedThumbnailChange(e.previewSrc), n.setState({
                            selectedFile: null,
                            newCustomThumbnailPreviewSrc: e.previewSrc
                        })
                    }, n.onFileSelected = function(e) {
                        e.stopPropagation(), e && e.target && e.target.files && e.target.files[0] && n.setState({
                            selectedFile: e.target.files[0]
                        })
                    }, n.renderWhenSelecting = function() {
                        var e = Object(Ta.a)(n.props.video.thumbnails, n.props.thumbnailURLToDelete, n.props.video.preview, n.state.newCustomThumbnailPreviewSrc),
                            t = e.map(function(e, t) {
                                return Tn.createElement(Ca, {
                                    key: "thumbnail-row-" + t,
                                    title: n.props.video.title,
                                    thumbnailSrc: e.url,
                                    isCustomThumbnail: e.type === $t.a,
                                    isSelected: n.props.video.preview === e.url,
                                    onSelectThumbnail: n.props.onSelectedThumbnailChange,
                                    onDeleteCustomThumbnail: n.onDeleteCustomThumbnail
                                })
                            });
                        void 0 === e.find(function(e) {
                            return e.type === $t.a
                        }) && t.push(Tn.createElement(Oa, {
                            key: "thumbnail-row-b",
                            onSelectedFile: n.onFileSelected
                        }));
                        var a = {
                                "thumbnail-selector-cropper": !0,
                                "thumbnail-selector-cropper--error": null !== n.props.error
                            },
                            r = null;
                        return n.props.error && (r = Tn.createElement(Xt._17, {
                            color: Xt.F.Error,
                            padding: {
                                bottom: 1
                            },
                            display: Xt.H.Flex,
                            alignItems: Xt.c.Center
                        }, Tn.createElement(Xt.U, {
                            margin: {
                                right: 1
                            },
                            display: Xt.H.Flex
                        }, Tn.createElement(Xt._8, {
                            asset: Xt._9.Warning,
                            type: Xt._10.Inherit,
                            width: 24,
                            height: 24
                        })), Tn.createElement(Xt._21, {
                            "data-test-selector": ja.thumbnailErrorSelector
                        }, n.props.error))), Tn.createElement("div", {
                            className: Jn(a)
                        }, r, Tn.createElement("figure", {
                            className: "thumbnail-selector-cropper__thumbnail"
                        }, Tn.createElement(Xt._17, {
                            background: Xt.m.Alt2
                        }, Tn.createElement(Xt.j, {
                            ratio: Xt.k.Aspect16x9
                        }, Tn.createElement("img", {
                            key: n.props.video.preview,
                            src: A(n.props.video.preview, on.width, on.height),
                            alt: Object(it.d)("Video thumbnail", "VideoManagerThumbnailSelectorCropper")
                        })))), Tn.createElement(Xt.U, {
                            margin: {
                                top: .5
                            },
                            className: "thumbnail-selector-cropper__thumbnail-select"
                        }, t), Tn.createElement(Xt.U, {
                            margin: {
                                top: .5
                            },
                            className: "thumbnail-selector-cropper__thumbnail-select"
                        }, Tn.createElement(Xt._21, {
                            type: Xt._26.P,
                            fontSize: Xt.L.Size7
                        }, Object(it.d)("Max thumbnail size: 1280 x 720px", "VideoManagerThumbnailSelectorCropper"))))
                    }, n.onDeleteCustomThumbnail = function(e) {
                        var t = Object(Ta.a)(n.props.video.thumbnails, e, n.props.video.preview, n.state.newCustomThumbnailPreviewSrc);
                        e === n.state.newCustomThumbnailPreviewSrc ? n.setState({
                            newCustomThumbnailPreviewSrc: ""
                        }, function() {
                            n.props.onNewCustomThumbnailChange(void 0), n.props.onSelectedThumbnailChange(Object(Ta.c)(t, n.props.video.preview))
                        }) : (n.props.onThumbnailDelete(e), n.props.onSelectedThumbnailChange(Object(Ta.c)(t, n.props.video.preview)))
                    }, n.state = {
                        selectedFile: null,
                        newCustomThumbnailPreviewSrc: void 0
                    }, n
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return this.state.selectedFile ? this.renderWhenCropping(this.state.selectedFile) : this.renderWhenSelecting()
                }, t
            }(Tn.Component),
            Aa = (n(1542), function(e) {
                return Tn.createElement(Xt.U, {
                    attachTop: !0,
                    attachRight: !0,
                    attachLeft: !0,
                    attachBottom: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    display: Xt.H.Flex,
                    flexDirection: Xt.J.Column,
                    justifyContent: Xt.T.Center,
                    alignItems: Xt.c.Center,
                    position: Xt._2.Absolute
                }, Tn.createElement(Xt.U, {
                    textAlign: Xt._22.Center,
                    flexShrink: 1
                }, Tn.createElement(Xt._8, {
                    asset: e.icon,
                    width: 46,
                    height: 48,
                    type: Xt._10.Alt2
                })), Tn.createElement(Xt.U, {
                    margin: {
                        top: 1
                    },
                    textAlign: Xt._22.Center
                }, Tn.createElement(Xt._21, {
                    type: Xt._26.H4,
                    color: Xt.F.Alt2
                }, e.titleText)), Tn.createElement(Xt.U, {
                    textAlign: Xt._22.Center
                }, Tn.createElement(Xt._21, {
                    type: Xt._26.P,
                    color: Xt.F.Alt2
                }, e.subText)))
            });
        ! function(e) {
            e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
        }(pa || (pa = {}));
        var Fa = {};
        Fa[Bn.a.Esc] = pa.Dismiss, Fa[Bn.a.Enter] = pa.Confirm, Fa[Bn.a.Tab] = pa.Confirm, Fa[Bn.a.Up] = pa.Up, Fa[Bn.a.Down] = pa.Down;
        var Ia, Ra = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onFocus = function() {
                        t.props.searchTerm && t.setState({
                            isOpen: !0
                        })
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.handleInteraction(pa.Dismiss)
                    }, t.onKeyDown = function(e) {
                        var n = Fa[e.keyCode];
                        n && t.handleInteraction(n)
                    }, t.handleInteraction = function(e) {
                        switch (e) {
                            case pa.Dismiss:
                                "" === t.props.searchTerm ? t.props.selectEmptyGame() : t.props.initialGameTitle ? t.props.selectGameByName(t.props.initialGameTitle) : t.props.gameResults && t.props.gameResults.length > 0 && t.props.selectGame(t.state.highlightedGameIndex), t.setState({
                                    isOpen: !1
                                });
                                break;
                            case pa.Confirm:
                                t.props.searchTerm && t.props.gameResults ? t.props.selectGame(t.state.highlightedGameIndex) : t.props.selectEmptyGame(), t.setState({
                                    isOpen: !1
                                });
                                break;
                            case pa.Up:
                                if (!t.props.gameResults) return;
                                t.setState({
                                    highlightedGameIndex: Math.max(0, t.state.highlightedGameIndex - 1)
                                });
                                break;
                            case pa.Down:
                                if (!t.props.gameResults) return;
                                t.setState({
                                    highlightedGameIndex: Math.min(t.props.gameResults.length - 1, t.state.highlightedGameIndex + 1)
                                })
                        }
                    }, t.onChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            isOpen: !!n,
                            highlightedGameIndex: 0
                        }, function() {
                            t.props.startNewSearch(n)
                        })
                    }, t.onClickGame = function(e) {
                        var n = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                        t.props.selectGame(n), t.setState({
                            isOpen: !1
                        })
                    }, t.state = t.state = {
                        isOpen: !1,
                        highlightedGameIndex: 0
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, Tn.createElement(An.a, {
                        onClickOut: this.onClickOut
                    }, Tn.createElement(Xt.Q, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: Xt.R.Text,
                        icon: Xt._9.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm,
                        placeholder: Object(it.d)("Type to search and add games", "VideoManagerEdit")
                    }), Tn.createElement(Xt.p, {
                        direction: Xt.q.Bottom,
                        noTail: !0,
                        size: Xt.r.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = Jn("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? Tn.createElement(Xt.X, {
                        fillContent: !0
                    }) : Tn.createElement(Aa, {
                        icon: Xt._9.SearchNoResults,
                        titleText: Object(it.d)("No results found", "GameSelector"),
                        subText: Object(it.d)("They're probably in another castle", "GameSelector")
                    }) : Tn.createElement(Aa, {
                        icon: Xt._9.DeadGlitch,
                        titleText: Object(it.d)("Search is not available at this time", "GameSelector"),
                        subText: Object(it.d)("Please try again later", "GameSelector")
                    })), Tn.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, Tn.createElement(Xt._17, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: Xt.m.Base,
                        position: Xt._2.Absolute,
                        overflow: Xt.Y.Hidden,
                        display: Xt.H.Block
                    }, Tn.createElement(xn.b, {
                        className: "search-result-view__wrapper",
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, Tn.createElement(Xt.U, {
                        className: "search-result-view__listing-wrapper",
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, Tn.createElement(xn.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, a, r) {
                        var i = r[t] === r[a];
                        return Tn.createElement(qn.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: i,
                            "data-game-highlighted": i,
                            "data-game-index": a
                        })
                    })
                }, t
            }(Tn.Component),
            Va = 10,
            Na = function() {
                function e() {
                    var e = this;
                    this.searchCode = function(t, n) {
                        return rt.__awaiter(e, void 0, void 0, function() {
                            var e;
                            return rt.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(Xn.a.Games, t, t, {
                                            hitsPerPage: Va,
                                            page: n
                                        })];
                                    case 1:
                                        return [2, a.sent()];
                                    case 2:
                                        throw e = a.sent(), it.i.error(e, "Algolia type results search failed"), e;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, this.searchClient = new ea.a(it.a.algoliaApplicationID, it.a.algoliaAPIKey)
                }
                return e
            }(),
            Ua = [],
            Wa = {
                objectID: "",
                name: ""
            },
            za = function(e) {
                return {
                    objectID: "",
                    name: e
                }
            },
            Ga = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
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
                                var r = Object(Gn.b)({
                                    searchResults: e,
                                    append: n.state.nextAlgoliaPage > 0,
                                    currentGameResults: a
                                }).currentGameResults;
                                t = r ? r.results : Ua
                            }
                            n.setState({
                                gameResults: t,
                                isSearchPending: !1,
                                nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                            })
                        }
                    }, n.selectGame = function(e) {
                        if (!(n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title)) return void n.selectEmptyGame();
                        var t = n.state.gameResults[e];
                        if (!t.title) return void n.selectEmptyGame();
                        var a = {
                            objectID: t.id,
                            name: t.title
                        };
                        n.setselectedGametate(a)
                    }, n.selectGameByName = function(e) {
                        n.setselectedGametate(za(e))
                    }, n.selectEmptyGame = function() {
                        n.setselectedGametate(Wa)
                    }, n.setselectedGametate = function(e) {
                        n.setState({
                            selectedGame: e,
                            searchTerm: e.name,
                            redrawKey: Math.random()
                        }, n.fireChangeGame)
                    }, n.fireChangeGame = function() {
                        n.props.onChange(n.state.selectedGame)
                    }, n.searchClient = new Na, n.state = n.state = {
                        searchTerm: t.currentGameTitle,
                        gameResults: Ua,
                        isSearchPending: !1,
                        nextAlgoliaPage: 0,
                        selectedGame: za(t.currentGameTitle),
                        redrawKey: Math.random()
                    }, n
                }
                return rt.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.startNewSearch(this.props.currentGameTitle)
                }, t.prototype.render = function() {
                    return this.props.disabled ? Tn.createElement("div", {
                        className: "game-selector__search-container"
                    }, Tn.createElement(Xt.Q, {
                        value: this.props.currentGameTitle,
                        type: Xt.R.Text,
                        icon: Xt._9.NavGames,
                        disabled: !0
                    })) : Tn.createElement(Ra, {
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
            }(Tn.Component),
            Ja = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSelectedGame = function(e) {
                        t.props.onChange({
                            game: e.name
                        })
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt.M, {
                        id: "video-game",
                        label: Object(it.d)("Category / Game", "VideoManagerEdit")
                    }, Tn.createElement(Ga, {
                        onChange: this.onSelectedGame,
                        disabled: this.props.disabled,
                        currentGameTitle: this.props.game ? this.props.game.name : ""
                    }))
                }, t
            }(Tn.PureComponent),
            Ba = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange({
                            tag_list: e.currentTarget.value
                        })
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt.M, {
                        id: "video-tags",
                        label: Object(it.d)("Tags", "VideoManagerEdit")
                    }, Tn.createElement(Xt.Q, {
                        disabled: this.props.disabled,
                        defaultValue: this.props.tags.join(", "),
                        type: Xt.R.Text,
                        onChange: this.onChange,
                        name: "tags",
                        placeholder: Object(it.d)("speedrun", "VideoManagerEdit") + ", " + Object(it.d)("2016", "VideoManagerEdit") + ", " + Object(it.d)("kappa", "VideoManagerEdit") + "..."
                    }))
                }, t
            }(Tn.PureComponent),
            qa = {
                EDIT_TITLE_DESC_ICON: "edit-title-desc-icon",
                DESC_TEST_SELECTOR: "edit-video-description",
                TITLE_TEST_SELECTOR: "edit-video-title",
                EDIT_TITLE_FIELD: "edit-title-field",
                EDIT_DESCRIPTION_FIELD: "edit-description-field",
                ERROR_TEXT: "error-text",
                TITLE_INPUT: "title-input"
            },
            Ka = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.updateTitle = function(e) {
                        t.props.onChange({
                            title: e.currentTarget.value
                        })
                    }, t.updateDescription = function(e) {
                        t.props.onChange({
                            description: e.currentTarget.value
                        })
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.video;
                    return Tn.createElement(Xt.U, {
                        flexGrow: 1,
                        className: "edit-video-properties-page__editable-col-editing"
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(Xt.M, {
                        "data-test-selector": qa.TITLE_INPUT,
                        label: Object(it.d)("Title", "VideoManagerEdit"),
                        error: !!this.props.titleError,
                        errorMessage: this.props.titleError ? this.props.titleError : void 0
                    }, Tn.createElement(Xt.Q, {
                        type: Xt.R.Text,
                        onChange: this.updateTitle,
                        value: e.title,
                        disabled: this.props.disabled,
                        "data-test-selector": qa.EDIT_TITLE_FIELD,
                        maxLength: 99,
                        required: !0
                    }))), Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(Xt.M, {
                        label: Object(it.d)("Description", "VideoManagerEdit")
                    }, Tn.createElement(Xt._23, {
                        rows: 6,
                        placeholder: Object(it.d)("Describe your video", "VideoManagerEdit"),
                        onChange: this.updateDescription,
                        value: e.description || "",
                        disabled: this.props.disabled,
                        "data-test-selector": qa.EDIT_DESCRIPTION_FIELD
                    }))))
                }, t
            }(Tn.Component),
            Qa = n(989),
            Za = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCopyToClipboard = function() {
                        Object(Qa.a)(n.props.url), n.setState({
                            isCopied: !0
                        })
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.state.isCopied ? Object(it.d)("Copied", "VideoManagerVideoURL") : Object(it.d)("Copy", "VideoManagerVideoURL"), Tn.createElement(Xt.U, null, Tn.createElement(Xt.M, {
                        id: "video-url",
                        label: Object(it.d)("Video URL", "VideoManagerEdit")
                    }, Tn.createElement(Xt.U, {
                        display: Xt.H.Flex
                    }, Tn.createElement(Xt.U, {
                        flexGrow: 1
                    }, Tn.createElement(Xt.Q, {
                        type: Xt.R.Text,
                        name: "video-url",
                        value: this.props.url,
                        disabled: !0
                    })), Tn.createElement(Xt.u, {
                        type: Xt.z.Hollow,
                        onClick: this.onCopyToClipboard
                    }, e))))
                }, t
            }(Tn.PureComponent),
            $a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt.N, {
                        gutterSize: Xt.O.Large
                    }, Tn.createElement(Xt.G, {
                        cols: {
                            default: 12,
                            sm: 5
                        }
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(Pa, {
                        video: this.props.video,
                        thumbnailURLToDelete: this.props.thumbnailURLToDelete,
                        onNewCustomThumbnailChange: this.props.onNewCustomThumbnailChange,
                        onThumbnailDelete: this.props.onThumbnailDelete,
                        onSelectedThumbnailChange: this.props.onSelectedThumbnailChange,
                        error: this.props.thumbnailError
                    })), Tn.createElement(Za, {
                        url: this.props.video.url
                    })), Tn.createElement(Xt.G, {
                        cols: {
                            default: 12,
                            sm: 7
                        }
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(Ka, {
                        titleError: this.props.titleError,
                        onChange: this.props.onChange,
                        disabled: this.props.saving,
                        video: this.props.video
                    })), Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(wa.a, {
                        label: Object(it.d)("Language", "VideoManagerEdit"),
                        onChange: this.onLanguageChanged,
                        disabled: this.props.saving,
                        defaultLanguage: this.props.video.language
                    })), Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(Ja, {
                        onChange: this.props.onChange,
                        disabled: this.props.saving,
                        game: this.props.video.game
                    })), Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 2
                        }
                    }, Tn.createElement(Ba, {
                        onChange: this.props.onChange,
                        disabled: this.props.saving,
                        tags: this.props.video.tags
                    }))))
                }, t.prototype.onLanguageChanged = function(e) {
                    this.props.onChange({
                        language: e
                    })
                }, t
            }(Tn.Component),
            Xa = function() {
                return Tn.createElement(Xt.U, null, Tn.createElement(Xt.N, {
                    gutterSize: Xt.O.Large
                }, Tn.createElement(Xt.G, {
                    cols: {
                        default: 12,
                        sm: 5
                    }
                }, Tn.createElement(Xt._1, {
                    height: 170
                }), Tn.createElement(Xt.U, {
                    display: Xt.H.Flex,
                    margin: {
                        top: .5,
                        bottom: 2
                    }
                }, Tn.createElement(Xt.U, {
                    padding: {
                        right: 1
                    }
                }, Tn.createElement(Xt._1, {
                    lineCount: 1,
                    width: 70
                }), Tn.createElement(Xt._1, {
                    lineCount: 1,
                    width: 70
                }), Tn.createElement(Xt._1, {
                    lineCount: 1,
                    width: 70
                })), Tn.createElement(Xt.U, null, Tn.createElement(Xt._1, {
                    lineCount: 1,
                    width: 70
                }), Tn.createElement(Xt._1, {
                    lineCount: 1,
                    width: 70
                }), Tn.createElement(Xt._1, {
                    lineCount: 1,
                    width: 70
                })))), Tn.createElement(Xt.G, {
                    cols: {
                        default: 12,
                        sm: 7
                    }
                }, Tn.createElement(Xt._1, {
                    lineCount: 1
                }), Tn.createElement(Xt.U, {
                    margin: {
                        y: 2
                    }
                }, Tn.createElement(Xt._1, {
                    height: 100
                })), Tn.createElement(Xt._1, {
                    lineCount: 6
                }))))
            },
            er = n(15);
        ! function(e) {
            e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
        }(Ia || (Ia = {}));
        var tr, nr = (n(1888), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleMenuChange = function(e, t) {
                        null !== e && (n.setState({
                            currentKey: e
                        }), t === Ia.Right ? n.setState({
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
                    }, n.state = {
                        isDropdownMenuOpen: !1,
                        currentKey: n.startKey(),
                        slideInClass: ""
                    }, n
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = Jn("video-card-dropdown__dropdown-wrapper", {
                            "video-card-dropdown__hidden": !this.state.isDropdownMenuOpen,
                            "video-card-dropdown__dropdown-wrapper-right": this.props.isRightAligned
                        }),
                        n = this.props.children.find(function(t) {
                            return t.props.contentKey === e.state.currentKey
                        });
                    return Tn.createElement(Xt.U, {
                        fullHeight: !0,
                        className: "video-card-dropdown__button"
                    }, Tn.createElement(Xt.P, {
                        fullHeight: !0
                    }, Tn.createElement(An.a, {
                        className: "video-manager-card--menu",
                        onClickOut: this.onClickOut
                    }, Tn.createElement(Xt.U, {
                        fullHeight: !0,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Stretch
                    }, Tn.createElement(Xt.u, {
                        type: Xt.z.Text,
                        icon: this.props.icon,
                        onClick: this.onCardClick,
                        "data-test-selector": "video_card_dropdown_button_selector"
                    }, this.props.buttonText)), Tn.createElement("div", {
                        "data-click-out-id": "video-manager-card--menu",
                        className: t,
                        "data-test-selector": "video_card_dropdown_menu_selector"
                    }, Tn.createElement("div", {
                        className: this.state.slideInClass
                    }, n)))))
                }, t.prototype.getChildContext = function() {
                    return {
                        menuChangeCallback: this.handleMenuChange,
                        closeMenu: this.onClickOut
                    }
                }, t.childContextTypes = {
                    menuChangeCallback: er.func,
                    closeMenu: er.func
                }, t
            }(Tn.Component)),
            ar = (n(1453), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.context.closeMenu()
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.icon ? Tn.createElement(Xt._8, {
                        asset: this.props.icon
                    }) : null;
                    return Tn.createElement(Xt.S, {
                        linkTo: this.props.link,
                        targetBlank: this.props.targetBlank,
                        onClick: this.handleClick
                    }, Tn.createElement(Xt.P, {
                        padding: 1,
                        flexGrow: 1,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center
                    }, Tn.createElement("div", {
                        className: "video-card-dropdown--menu-item"
                    }, e, Tn.createElement("span", null, this.props.text))))
                }, t.contextTypes = {
                    closeMenu: er.func
                }, t
            }(Tn.Component)),
            rr = n(55),
            ir = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.onClick(), t.context.closeMenu()
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.icon ? Tn.createElement(Xt._8, {
                        asset: this.props.icon
                    }) : null;
                    return Tn.createElement(Xt.S, rt.__assign({
                        onClick: this.handleClick,
                        disabled: !!this.props.disabled && this.props.disabled
                    }, Object(rr.a)(this.props)), Tn.createElement(Xt.P, {
                        padding: 1,
                        flexGrow: 1,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center
                    }, Tn.createElement("div", {
                        className: "video-card-dropdown--menu-item"
                    }, e, Tn.createElement("span", null, this.props.text))))
                }, t.contextTypes = {
                    closeMenu: er.func
                }, t
            }(Tn.Component),
            sr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.context.menuChangeCallback(t.props.navTarget, t.props.navArrowSide)
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.icon ? Tn.createElement(Xt._8, {
                            asset: this.props.icon
                        }) : null,
                        t = null,
                        n = null;
                    return this.props.navArrowSide === Ia.Left ? t = Tn.createElement("span", {
                        className: "video-card-dropdown__left-side-nav-icon inline-block"
                    }, "◂") : n = Tn.createElement("span", {
                        className: "video-card-dropdown__right-side-nav-icon inline-block"
                    }, "▸"), Tn.createElement(Xt.S, {
                        onClick: this.handleClick,
                        "data-test-selector": "video_card_dropdown_menu_nav_selector"
                    }, Tn.createElement(Xt.P, {
                        padding: 1,
                        flexGrow: 1,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center
                    }, Tn.createElement("div", {
                        className: "video-card-dropdown--menu-item"
                    }, t, e, Tn.createElement("span", null, this.props.text), n)))
                }, t.contextTypes = {
                    menuChangeCallback: er.func
                }, t
            }(Tn.Component),
            or = "//www.twitch.tv",
            dr = {
                downloadVideo: "download-video",
                deleteVideo: "delete-video",
                add: "add-selector",
                highlight: "highlight-selector",
                watchVideo: "watch-video"
            },
            lr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onWatch = function() {
                        t.props.onWatch(t.props.video)
                    }, t.onDelete = function() {
                        t.props.onDeleteVideo(t.props.video, t.props.videoUpload)
                    }, t.onDownload = function() {
                        t.props.onDownloadVideo(t.props.video)
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = S(this.props.video, this.props.videoUpload);
                    return Tn.createElement("div", {
                        "data-test-selector-menu": "root"
                    }, Tn.createElement(ar, {
                        icon: Xt._9.Edit,
                        text: Object(it.d)("Edit", "VideoManagerMenuRoot"),
                        link: Re(this.props.channelName, this.props.video.id)
                    }), e.menu.canDownloadHighlightAddToVodcast && Tn.createElement(sr, {
                        "data-test-selector": dr.add,
                        icon: Xt._9.Plus,
                        text: Object(it.d)("Add to", "VideoManagerMenuRoot"),
                        navTarget: "addTo",
                        navArrowSide: Ia.Right
                    }), e.menu.canDownloadHighlightAddToVodcast && Tn.createElement(ir, {
                        icon: Xt._9.Download,
                        text: Object(it.d)("Download", "VideoManagerMenuRoot"),
                        onClick: this.onDownload,
                        "data-test-selector": dr.downloadVideo
                    }), e.menu.canDownloadHighlightAddToVodcast && Tn.createElement(ar, {
                        "data-test-selector": dr.highlight,
                        icon: Xt._9.Clip,
                        text: Object(it.d)("Highlight", "VideoManagerMenuRoot"),
                        link: Ve(this.props.channelName, this.props.video.id),
                        targetBlank: !0
                    }), Tn.createElement(ir, {
                        icon: Xt._9.Play,
                        text: Object(it.d)("Watch", "VideoManagerMenuRoot"),
                        onClick: this.onWatch,
                        "data-test-selector": dr.watchVideo
                    }), Tn.createElement("div", {
                        className: "mg-05 border-t border-l font-size-6 flex-grow-0 flex flex-nowrap"
                    }), Tn.createElement(ir, {
                        icon: Xt._9.Trash,
                        text: Object(it.d)("Delete", "VideoManagerMenuRoot"),
                        onClick: this.onDelete,
                        "data-test-selector": dr.deleteVideo
                    }))
                }, t
            }(Tn.Component),
            ur = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement("div", {
                        "data-test-selector-menu": "collections"
                    }, Tn.createElement(sr, {
                        text: Object(it.d)("Collections", "VideoManagerMenuPageCollections"),
                        navTarget: "addTo",
                        navArrowSide: Ia.Left
                    }), Tn.createElement("div", {
                        className: "border-t border-l font-size-6 flex-grow-0 flex flex-nowrap"
                    }), Tn.createElement("div", null, "Coming Soon!"))
                }, t
            }(Tn.Component),
            cr = {
                addToVodcastQueue: "add-to-vodcast-queue"
            },
            _r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.message = function() {
                        return t.props.inVodcastQueue ? Object(it.d)("In Vodcast Queue", "VideoManagerMenuPageAddTo") : Object(it.d)("Vodcast Queue", "VideoManagerMenuPageAddTo")
                    }, t.onAddVideoToVodcastQueue = function() {
                        t.props.onAddVideoToVodcastQueue(t.props.video)
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    return this.props.hasMenuNavigationHeader || (e = Tn.createElement(sr, {
                        icon: Xt._9.Plus,
                        text: Object(it.d)("Add to", "VideoManagerMenuPageAddTo"),
                        navTarget: "root",
                        navArrowSide: Ia.Left
                    }), t = Tn.createElement(Xt._17, {
                        fontSize: 6,
                        borderTop: !0,
                        borderLeft: !0,
                        display: Xt.H.Flex,
                        flexWrap: Xt.K.NoWrap,
                        flexGrow: 0
                    })), Tn.createElement("div", {
                        "data-test-selector-menu": "addTo"
                    }, e, t, Tn.createElement(ir, {
                        "data-test-selector": cr.addToVodcastQueue,
                        disabled: this.props.inVodcastQueue || this.props.vodcastQueueUnavailable,
                        text: this.message(),
                        onClick: this.onAddVideoToVodcastQueue
                    }))
                }, t
            }(Tn.Component),
            mr = (n(1889), {
                forbidden: "forbidden",
                apiError: "api-error",
                cancelTestSelector: "CANCEL_TEST_SELECTOR",
                saveTestSelector: "SAVE_TEST_SELECTOR",
                modalAnimationTestSelector: "MODAL_ANIMATION_TEST_SELECTOR",
                saveErrorSelector: "SAVE_ERROR_SELECTOR",
                watchSelector: "watch-selector",
                highlightSelector: "highlight-selector",
                downloadSelector: "download-selector",
                addToSelector: "add-to-selector"
            }),
            hr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        notificationDismissed: !1,
                        videoEdits: t.props.apiData.video ? s(t.props.apiData.video) : null,
                        isDirty: !1,
                        animationProps: {
                            type: Xt.i.SlideInRight,
                            duration: Xt.g.Medium,
                            timing: Xt.h.EaseInOut,
                            enabled: !0
                        },
                        titleError: null
                    }, t.onNewCustomThumbnailChange = function(e) {
                        t.setState({
                            newCustomThumbnail: e
                        }), t.onChange({})
                    }, t.onSaveVideo = function() {
                        t.state.videoEdits && (t.props.clearEditModalErrors(), t.setState({
                            isDirty: !1,
                            notificationDismissed: !1
                        }, function() {
                            return rt.__awaiter(t, void 0, void 0, function() {
                                return rt.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.state.videoEdits && this.props.apiData.video ? this.state.videoEdits && 0 === this.state.videoEdits.title.length ? [2] : [4, this.props.saveVideoAndThumbnails(this.props.apiData.video, this.state.videoEdits, this.state.thumbnailURLToDelete, this.state.newCustomThumbnail)] : [2];
                                        case 1:
                                            return e.sent(), window.removeEventListener("beforeunload", this.beforeunloadHandler), this.animateOutAndClose(), [2]
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
                    }, t.onWatch = function() {
                        t.props.apiData.video && (t.animateOutAndClose(t.props.closeModal), t.props.onWatch(t.props.apiData.video))
                    }, t.onDownload = function() {
                        t.props.apiData.video && t.props.onDownload(t.props.apiData.video.id, t.props.notificationService)
                    }, t.onChange = function(e) {
                        var n = Object.assign({}, t.state.videoEdits, e),
                            a = !n.title || 0 === n.title.length;
                        window.addEventListener("beforeunload", t.beforeunloadHandler), t.setState({
                            videoEdits: n,
                            isDirty: !0,
                            titleError: a ? Object(it.d)("Title is required", "VideoManagerEdit") : null
                        }), t.props.apiData.errors.length > 0 && t.props.clearEditModalErrors()
                    }, t.onCancel = function() {
                        t.state.isDirty && !t.confirmDiscardChanges() || t.animateOutAndClose()
                    }, t.animateOutAndClose = function(e) {
                        void 0 === e && (e = t.props.closeModalWithRouteToManager), t.setState({
                            animationProps: rt.__assign({}, t.state.animationProps, {
                                type: Xt.i.SlideOutRight,
                                onAnimationEnd: e
                            })
                        }), t.props.notificationService.setModalMode()
                    }, t.beforeunloadHandler = function(e) {
                        var n = t.confirmDiscardChanges();
                        return e.returnValue = n, n
                    }, t
                }
                return rt.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.apiData.channelName ? this.props.apiData.video || this.props.clearEditingVideo() : this.props.changeChannel(this.props.channelName), this.fetchData(this.propsToPageContext(this.props))
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.props.clearEditingVideo(), window.removeEventListener("beforeunload", this.beforeunloadHandler)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.fetchData(this.propsToPageContext(e), this.propsToPageContext(this.props)), e.apiData.video && (this.state.videoEdits || (this.setState({
                        isDirty: !1,
                        videoEdits: s(e.apiData.video)
                    }), window.removeEventListener("beforeunload", this.beforeunloadHandler)), this.props.apiData.video && this.state.videoEdits && this.props.apiData.video && e.apiData.video.id !== this.props.apiData.video.id && this.setState({
                        videoEdits: s(e.apiData.video)
                    }))
                }, t.prototype.renderFields = function() {
                    var e = null,
                        t = this.props.apiData.errors.find(function(e) {
                            return e.origin === ot.EditModalErrorOrigin.Thumbnail
                        }),
                        n = this.props.apiData.errors.find(function(e) {
                            return e.origin === ot.EditModalErrorOrigin.Initialize
                        });
                    return e = void 0 !== n ? Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center,
                        padding: 2
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            right: 1
                        },
                        display: Xt.H.Flex
                    }, Tn.createElement(Xt._8, {
                        asset: Xt._9.Warning,
                        type: Xt._10.Alt2,
                        width: 28,
                        height: 28
                    })), Tn.createElement(Xt._21, {
                        fontSize: Xt.L.Size4
                    }, n.message)) : !this.props.apiData.loading && this.state.videoEdits && this.props.apiData.video ? Tn.createElement($a, {
                        video: o(this.props.apiData.video, this.state.videoEdits),
                        user: this.props.user,
                        onChange: this.onChange,
                        saving: this.props.saving,
                        channelName: this.props.channelName,
                        thumbnailURLToDelete: "",
                        onThumbnailDelete: this.onThumbnailDelete,
                        onNewCustomThumbnailChange: this.onNewCustomThumbnailChange,
                        onSelectedThumbnailChange: this.onSelectedThumbnailChange,
                        inVodcastQueue: !1,
                        onAddVideoToVodcastQueue: this.onAddVideoToVodcastQueue,
                        onWatch: this.onWatch,
                        onDownload: this.onDownload,
                        vodcastQueueUnavailable: this.props.vodcastQueueUnavailable,
                        thumbnailError: t ? t.message : null,
                        titleError: this.state.titleError
                    }) : Tn.createElement(Xa, null), Tn.createElement(Xt.e, {
                        type: Xt.i.FadeIn,
                        delay: Xt.f.Medium,
                        duration: Xt.g.Medium,
                        enabled: !0
                    }, e)
                }, t.prototype.render = function() {
                    var e = this.props.saving || this.state.animationProps.onAnimationEnd === this.props.closeModal,
                        t = null !== this.state.titleError,
                        n = null,
                        a = this.props.apiData.errors.find(function(e) {
                            return e.origin === ot.EditModalErrorOrigin.Save
                        });
                    return a && (n = Tn.createElement(Xt.U, {
                        fullWidth: !0,
                        padding: {
                            top: 1
                        },
                        textAlign: Xt._22.Right
                    }, Tn.createElement(Xt._21, {
                        "data-test-selector": mr.saveErrorSelector,
                        color: Xt.F.Error
                    }, a.message))), Tn.createElement(Xt.U, {
                        className: "edit-video-properties-modal"
                    }, Tn.createElement(Xt.e, rt.__assign({}, this.state.animationProps, {
                        "data-test-selector": mr.modalAnimationTestSelector
                    }), Tn.createElement(Xt._17, {
                        className: "edit-video-properties-modal__content",
                        background: Xt.m.Base
                    }, Tn.createElement(Xt.P, {
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: 4
                    }, Tn.createElement(An.a, {
                        onClickOut: this.onCancel
                    }, Tn.createElement(Xt._17, {
                        display: Xt.H.Flex,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        },
                        borderBottom: !0
                    }, Tn.createElement(Xt.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.End
                    }, this.renderVideoActions()), Tn.createElement(Xt.U, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, Tn.createElement(Xt.u, {
                        type: Xt.z.Text,
                        onClick: this.onCancel,
                        "data-test-selector": mr.cancelTestSelector
                    }, Object(it.d)("Cancel", "VideoManagerEdit")), " ", Tn.createElement(Xt.u, {
                        onClick: this.onSaveVideo,
                        disabled: e || t,
                        state: e ? Xt.y.Loading : Xt.y.Default,
                        "data-test-selector": mr.saveTestSelector
                    }, Object(it.d)("Save Changes", "VideoManagerEdit"))), n), Tn.createElement(xn.b, null, Tn.createElement(Xt.U, null, this.renderFields())))))))
                }, t.prototype.renderVideoActions = function() {
                    var e = this.props.apiData.video;
                    if (this.props.apiData.loading && null === e) return Tn.createElement(Xt._1, {
                        lineCount: 2,
                        width: 260
                    });
                    if (null === e) return null;
                    var t = ze(e, this.props.user),
                        n = S(e);
                    return Tn.createElement(Xt._17, {
                        display: Xt.H.Flex,
                        color: Xt.F.Link
                    }, n.menu.canDownloadHighlightAddToVodcast && Tn.createElement(Xt.u, {
                        "data-test-selector": mr.highlightSelector,
                        linkTo: Ve(this.props.channelName, e.id),
                        icon: Xt._9.Clip,
                        type: Xt.z.Text,
                        disabled: this.props.saving,
                        targetBlank: !0
                    }, Object(it.d)("Highlight", "VideoManagerEditCard")), n.menu.canDownloadHighlightAddToVodcast && Tn.createElement(Xt.u, {
                        "data-test-selector": mr.downloadSelector,
                        icon: Xt._9.Download,
                        type: Xt.z.Text,
                        disabled: this.props.saving
                    }, Object(it.d)("Download", "VideoManagerEditCard")), n.menu.canDownloadHighlightAddToVodcast && Tn.createElement(nr, {
                        "data-test-selector": mr.addToSelector,
                        icon: Xt._9.Plus,
                        isRightAligned: !1,
                        buttonText: Object(it.d)("Add to", "VideoManagerEditCard")
                    }, Tn.createElement(_r, {
                        vodcastQueueUnavailable: this.props.vodcastQueueUnavailable,
                        onAddVideoToVodcastQueue: this.onAddVideoToVodcastQueue,
                        video: e,
                        channelName: this.props.channelName,
                        contentKey: "addTo",
                        hasMenuNavigationHeader: !0,
                        inVodcastQueue: !1
                    }), Tn.createElement(ur, {
                        video: e,
                        channelName: this.props.channelName,
                        contentKey: "collections"
                    })), n.sharable && Tn.createElement(Ya.a, {
                        video: t,
                        buttonType: Xt.z.Text,
                        balloonDirection: Xt.q.Bottom
                    }), Tn.createElement(Xt.u, {
                        "data-test-selector": mr.watchSelector,
                        onClick: this.onWatch,
                        icon: Xt._9.Play,
                        type: Xt.z.Text,
                        disabled: this.props.saving
                    }, Object(it.d)("Watch", "VideoManagerEditCard")))
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
                    return confirm(Object(it.d)("Are you sure you want to stop editing? All unsaved changes will be lost.", "EditVideoPropertiesModalPresentation"))
                }, t
            }(Tn.PureComponent),
            pr = Object(Un.c)("EditVideoPropertiesModalPresentation", {
                destination: Hn.a.VideoManagerEditPropertiesPage
            })(hr),
            fr = pr,
            gr = Object(et.a)(Ge, Je)(fr),
            Mr = function(e) {
                return Tn.createElement(Xt.S, rt.__assign({
                    onClick: e.onClick,
                    selected: e.selected
                }, Object(rr.a)(e)), Tn.createElement(Xt.U, {
                    display: Xt.H.Flex,
                    flexDirection: Xt.J.Row,
                    alignItems: Xt.c.Center,
                    justifyContent: Xt.T.Between,
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, Tn.createElement(Xt._21, {
                    type: Xt._26.H5
                }, e.label), e.selected ? Tn.createElement(Xt.U, {
                    display: Xt.H.Flex
                }, Tn.createElement(Xt._8, {
                    asset: Xt._9.Check
                })) : ""))
            },
            yr = (n(1890), [{
                key: null,
                label: Object(it.d)("All", "VideoManagerFilter")
            }, {
                key: Zt.a.Upload,
                label: Object(it.d)("Upload", "VideoManagerFilter")
            }, {
                key: Zt.a.PastPremiere,
                label: Object(it.d)("Past Premiere", "VideoManagerFilter")
            }, {
                key: Zt.a.Archive,
                label: Object(it.d)("Past Broadcast", "VideoManagerFilter")
            }, {
                key: Zt.a.Highlight,
                label: Object(it.d)("Highlight", "VideoManagerFilter")
            }]),
            vr = {
                container: "filters-container"
            },
            Lr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeFilter = function(e) {
                        t.props.changeFilter(e.currentTarget.getAttribute("data-filter-key"))
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = yr.map(function(t) {
                            return Tn.createElement(Mr, {
                                key: t.key || "",
                                onClick: e.onChangeFilter,
                                label: t.label,
                                selected: t.key === e.props.activeFilter,
                                "data-filter-key": t.key,
                                "data-test-selector": "filter-item"
                            })
                        });
                    return Tn.createElement(Xt.U, {
                        className: vr.container,
                        flexShrink: 1
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 1
                        }
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H4,
                        color: Xt.F.Alt
                    }, Object(it.d)("Filter By", "VideoManager"))), Tn.createElement(Xt.U, {
                        margin: {
                            bottom: .5
                        }
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H6,
                        color: Xt.F.Alt2
                    }, Object(it.d)("Type", "VideoManagerFilter"))), Tn.createElement("div", null, t))
                }, t
            }(Tn.PureComponent),
            Dr = n(959),
            Yr = "video-upload-error-text",
            wr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getErrorMessage = function(e) {
                        return Tn.createElement(Xt.U, {
                            padding: {
                                y: .5
                            }
                        }, Tn.createElement(Xt._21, {
                            "data-test-selector": Yr
                        }, e))
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e, t = this;
                    return e = this.props.errors.length <= 3 ? this.props.errors.map(function(e) {
                        return t.getErrorMessage(e)
                    }) : Tn.createElement(Xt._21, null, Object(it.d)("{numVideos, number} files you added could not be uploaded.", {
                        numVideos: this.props.errors.length
                    }, "UploadFilesBox")), this.props.errors ? Tn.createElement(Xt.U, {
                        padding: 1
                    }, Tn.createElement(Xt._17, {
                        color: Xt.F.Error
                    }, e)) : null
                }, t
            }(Tn.Component),
            br = (n(1891), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt.U, {
                        className: "upload-box",
                        position: Xt._2.Relative,
                        fullWidth: !0
                    }, Tn.createElement(Dr.a, {
                        allowedFileTypes: dt.e,
                        onFilesSubmitted: this.props.onFilesSubmitted,
                        error: this.props.errors.length > 0
                    }, Tn.createElement(Xt.U, {
                        textAlign: Xt._22.Center,
                        display: Xt.H.Flex,
                        flexDirection: Xt.J.Column,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center
                    }, Tn.createElement(Xt._17, {
                        padding: 1,
                        display: Xt.H.Flex,
                        color: Xt.F.Alt2
                    }, Tn.createElement(Xt.U, {
                        padding: {
                            right: 1
                        },
                        display: Xt.H.Flex
                    }, Tn.createElement(Xt._8, {
                        asset: Xt._9.Upload
                    })), Tn.createElement(Xt._21, {
                        fontSize: 4
                    }, Object(it.d)("Drag or select files to upload", "UploadFilesBox"))), Tn.createElement(wr, {
                        errors: this.props.errors
                    }))))
                }, t
            }(Tn.Component)),
            kr = (n(1892), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function(e) {
                        e.stopPropagation()
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    if (void 0 === this.props.stat) return Tn.createElement("div", null);
                    var e = "--";
                    if (this.props.video.publishedAt) {
                        var t = new Date(this.props.video.publishedAt);
                        Date.now() - t.valueOf() > 86400 && (e = Object(it.f)(this.props.stat, {
                            maximumFractionDigits: 1
                        }))
                    }
                    return this.props.linkTo ? Tn.createElement(Xt.U, rt.__assign({
                        className: "video-card__stat-button",
                        display: Xt.H.InlineFlex,
                        fullHeight: !0
                    }, Object(rr.a)(this.props)), Tn.createElement(Xt.S, {
                        onClick: this.handleClick,
                        linkTo: this.props.linkTo,
                        alpha: !0,
                        targetBlank: !0
                    }, Tn.createElement(Xt.U, {
                        fullHeight: !0,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center,
                        padding: 2
                    }, Tn.createElement(Xt._16, {
                        value: e,
                        icon: this.props.icon,
                        label: e + " " + this.props.label
                    })))) : Tn.createElement(Xt._16, {
                        value: e,
                        icon: this.props.icon,
                        label: e + " " + this.props.label
                    })
                }, t
            }(Tn.Component)),
            Tr = {
                published: "status-bar-published",
                viewCount: "stat-view-count"
            },
            Sr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = "";
                    if (this.props.video.viewableAt) {
                        var t = new Date(this.props.video.viewableAt);
                        e = t.toLocaleDateString() + " " + t.toLocaleTimeString()
                    }
                    return this.props.video.viewableAt ? Tn.createElement("div", {
                        className: "video-card__status-display-bar",
                        "data-test-selector": Tr.published
                    }, Object(it.d)("Scheduled: {scheduledDate}", {
                        scheduledDate: e
                    }, "VideoManager")) : Tn.createElement(Xt._17, {
                        fullHeight: !0,
                        fullWidth: !0,
                        color: Xt.F.Link,
                        className: "video-card__status-display-bar"
                    }, Tn.createElement(kr, {
                        stat: this.props.video.viewCount,
                        icon: Xt._9.GlyphViews,
                        label: "Views",
                        video: this.props.video,
                        linkTo: Ne(this.props.channelName, this.props.video.id),
                        "data-test-selector": Tr.viewCount
                    }))
                }, t
            }(Tn.Component),
            Er = n(419),
            xr = {
                VIDEO_CARD_SUB_ONLY_SELECTOR: "video-card-sub-pill-selector",
                VIDEO_CARD_BROADCAST_TYPE_STAT_SELECTOR: "video-card-broadcast-type-stat-selector",
                VIDEO_CARD_DURATION_STAT_SELECTOR: "video-card-duration-stat-selector",
                VIDEO_CARD_PUBLISH_DATE_SELECTOR: "video-card-publish-date-selector",
                VIDEO_CARD_SCHEDULED_DATE_SELECTOR: "video-card-scheduled-date-selector"
            },
            Hr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.subOnlyChannel && (e = Tn.createElement(Xt.Z, {
                        "data-test-selector": xr.VIDEO_CARD_SUB_ONLY_SELECTOR,
                        label: Object(it.d)("Sub-only", "VideoManager")
                    })), Tn.createElement(Xt._17, {
                        color: Xt.F.Alt2,
                        fontSize: Xt.L.Size6,
                        display: Xt.H.Flex,
                        flexDirection: Xt.J.Row,
                        flexWrap: Xt.K.NoWrap,
                        alignItems: Xt.c.Center,
                        margin: {
                            top: .5
                        },
                        flexShrink: 0,
                        flexGrow: 0
                    }, e, this.subheaderDetail())
                }, t.prototype.subheaderDetail = function() {
                    var e = S(this.props.video);
                    return e.subheader.duration ? Tn.createElement("div", null, this.durationElement()) : e.subheader.scheduledDate ? Tn.createElement("div", null, this.scheduledDateElement()) : e.subheader.publishedDateBroadcastType ? Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center
                    }, this.publishDateElement(), this.broadcastTypeElement()) : void 0
                }, t.prototype.scheduledDateElement = function() {
                    if (!this.props.video.premiere || !this.props.video.premiere.event) return null;
                    var e = new Date(this.props.video.premiere.event.startTime),
                        t = it.n.intl.getLanguageCode() || "en",
                        n = Intl.DateTimeFormat(t, {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            timeZoneName: "short"
                        }).format(e);
                    return Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        margin: {
                            right: 1
                        },
                        "data-test-selector": xr.VIDEO_CARD_SCHEDULED_DATE_SELECTOR
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            right: 1
                        }
                    }, Tn.createElement(Xt._21, {
                        bold: !0
                    }, Object(it.d)("Premieres:", "VideoManager"))), n)
                }, t.prototype.publishDateElement = function() {
                    if (!this.props.video.publishedAt) return null;
                    var e = new Date(this.props.video.publishedAt);
                    return e >= new Date ? null : Tn.createElement(Xt.U, {
                        margin: {
                            right: 1
                        },
                        "data-test-selector": xr.VIDEO_CARD_PUBLISH_DATE_SELECTOR
                    }, e.toLocaleDateString())
                }, t.prototype.durationElement = function() {
                    var e = this.props.video.lengthSeconds ? Object(Er.a)(this.props.video.lengthSeconds) : "--:--";
                    return Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
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
                    }, Tn.createElement(Xt._16, {
                        label: Object(it.d)("Duration", "VideoManager"),
                        value: e,
                        icon: Xt._9.GlyphLength,
                        "data-test-selector": xr.VIDEO_CARD_DURATION_STAT_SELECTOR
                    }))
                }, t.prototype.broadcastTypeElement = function() {
                    return Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
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
                    }, Tn.createElement(Xt._16, {
                        label: Object(it.d)("Type", "VideoManager.VideoLabel"),
                        value: Be(this.props.video.broadcastType),
                        icon: Xt._9.NavVideos,
                        "data-test-selector": xr.VIDEO_CARD_BROADCAST_TYPE_STAT_SELECTOR
                    }))
                }, t
            }(Tn.Component),
            Cr = 1e9,
            Or = 1e6,
            jr = 1e3,
            Pr = (n(1893), {
                VIDEO_CARD_THUMBNAIL_UPLOADING_SELECTOR: "video_card_thumbnail_uploading_selector",
                VIDEO_CARD_THUMBNAIL_QUEUED_SELECTOR: "video_card_thumbnail_queued_selector",
                VIDEO_CARD_THUMBNAIL_SELECTOR: "video_card_thumbnail_selector",
                VIDEO_CARD_THUMBNAIL_OVERLAY_SELECTOR: "video_card_thumbnail_overlay_selector",
                VIDEO_CARD_THUMBNAIL_OVERLAY_ICON_SELECTOR: "video_card_thumbnail_overlay_icon_selector"
            }),
            Ar = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = S(this.props.video, this.props.videoUpload).thumbnail,
                        t = null,
                        n = void 0;
                    e.overlayIcon && (t = Tn.createElement(Xt.U, {
                        padding: {
                            right: .5
                        }
                    }, Tn.createElement(Xt._8, {
                        asset: e.overlayIcon,
                        "data-test-selector": Pr.VIDEO_CARD_THUMBNAIL_OVERLAY_ICON_SELECTOR
                    })));
                    var a = E(this.props.video),
                        r = S(this.props.video, this.props.videoUpload).subrow;
                    if (r.spinner) n = Tn.createElement(Xt.U, {
                        padding: {
                            top: .5
                        }
                    }, Tn.createElement(Xt.X, {
                        size: Xt._15.Small,
                        inheritColor: !0
                    }));
                    else if (r.uploadProgress) n = this.renderUploadProgressText();
                    else if (r.expirationWarning && a) {
                        var i = Tn.createElement(Xt._17, {
                            fontSize: Xt.L.Size8
                        }, Object(it.d)("{numDays, number} days", {
                            numDays: a
                        }, "VideoManagerRowThumbnail"));
                        n = i
                    }
                    return this.renderThumbnail(this.renderOverlay(e.error, e.message, t, n))
                }, t.prototype.renderOverlay = function(e, t, n, a) {
                    void 0 === t && (t = null), void 0 === n && (n = null), void 0 === a && (a = null);
                    var r = null;
                    if (t) {
                        var i = e ? Xt.F.Error : Xt.F.Overlay;
                        r = Tn.createElement(Xt._17, {
                            color: i,
                            display: Xt.H.Flex,
                            flexDirection: Xt.J.Column,
                            padding: 1,
                            textAlign: Xt._22.Center,
                            className: "video-card-thumbnail__video-state-overlay",
                            "data-test-selector": Pr.VIDEO_CARD_THUMBNAIL_OVERLAY_SELECTOR
                        }, n, Tn.createElement(Xt._21, null, t), a)
                    }
                    return r
                }, t.prototype.renderThumbnail = function(e) {
                    return void 0 === e && (e = null), Tn.createElement(Xt._17, {
                        background: Xt.m.Alt2,
                        className: "video-card-thumbnail__wrapper"
                    }, Tn.createElement("figure", {
                        className: "video-card-thumbnail",
                        "data-test-selector": Pr.VIDEO_CARD_THUMBNAIL_SELECTOR
                    }, Tn.createElement(Xt.j, {
                        ratio: Xt.k.Aspect16x9,
                        align: Xt.a.Center
                    }, Tn.createElement("img", {
                        src: A(this.props.video.preview, dn.width, dn.height),
                        alt: ""
                    }))), e)
                }, t.prototype.renderUploadProgressText = function() {
                    if (this.props.videoUpload) return Tn.createElement(Xt._21, {
                        color: Xt.F.OverlayAlt,
                        "data-test-selector": Pr.VIDEO_CARD_THUMBNAIL_UPLOADING_SELECTOR
                    }, qe(this.props.videoUpload.fileByteIndex, this.props.videoUpload.fileSizeBytes, this.props.videoUpload.progressPercentage))
                }, t
            }(Tn.Component),
            Fr = (n(1543), {
                TEST_SELECTOR_ERROR: "test-selector-error"
            }),
            Ir = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteVideo = function() {
                        return t.props.onDeleteVideo(t.props.video, t.props.videoUpload)
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = S(this.props.video, this.props.videoUpload);
                    if (t.callToActionButton) {
                        var n = void 0,
                            a = void 0,
                            r = void 0;
                        t.callToActionButton.action === Xe.Delete ? (n = this.onDeleteVideo, r = Xt._9.Close) : a = Ue(this.props.channelName, this.props.video.id), e = Tn.createElement(Xt.u, {
                            type: t.callToActionButton.buttonType,
                            icon: r,
                            onClick: n,
                            linkTo: a
                        }, t.callToActionButton.message)
                    } else e = Tn.createElement(Sr, {
                        video: this.props.video,
                        channelName: this.props.channelName
                    });
                    return Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 1
                        }
                    }, Tn.createElement(Xt._17, {
                        className: "video-card",
                        "data-target": "video-card",
                        elevation: 1,
                        display: Xt.H.Flex,
                        flexWrap: Xt.K.NoWrap,
                        flexDirection: Xt.J.Row,
                        alignItems: Xt.c.Stretch
                    }, Tn.createElement(Xt.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        display: Xt.H.Flex,
                        flexWrap: Xt.K.NoWrap,
                        flexDirection: Xt.J.Column,
                        breakpointSmall: {
                            flexDirection: Xt.J.Row
                        }
                    }, this.renderVideoMetadata(t)), Tn.createElement(Xt.U, {
                        className: "video-card__status-bar-layout",
                        display: Xt.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: Xt.K.NoWrap,
                        flexDirection: Xt.J.Row,
                        alignItems: Xt.c.Center
                    }, e), this.renderVideoMenu(t)), this.renderUploadProgressBar())
                }, t.prototype.renderUploadProgressBar = function() {
                    if (this.props.videoUpload && U(this.props.videoUpload)) return Tn.createElement(Xt.U, {
                        flexGrow: 0,
                        flexShrink: 0,
                        fullWidth: !0
                    }, Tn.createElement(Xt._5, {
                        mask: !0,
                        size: Xt._6.Small,
                        value: this.props.videoUpload.progressPercentage
                    }))
                }, t.prototype.renderVideoMetadata = function(e) {
                    return e.interactableMetaData ? Tn.createElement(Xt.S, {
                        linkTo: Re(this.props.channelName, this.props.video.id),
                        alpha: !0
                    }, this.renderVideoMetadataCard()) : this.renderVideoMetadataCard()
                }, t.prototype.renderVideoMetadataCard = function() {
                    var e = m(this.props.video, this.props.videoUpload),
                        t = e ? Tn.createElement(Xt.U, null, Tn.createElement(Xt._21, {
                            "data-test-selector": Fr.TEST_SELECTOR_ERROR,
                            bold: !0
                        }, e)) : null;
                    return Tn.createElement(Xt.A, {
                        row: !0,
                        "data-video-id": this.props.video.id
                    }, Tn.createElement(Ar, {
                        video: this.props.video,
                        videoUpload: this.props.videoUpload
                    }), Tn.createElement(Xt.B, null, Tn.createElement(Xt.U, {
                        padding: {
                            x: 2
                        }
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H5,
                        color: Xt.F.Alt
                    }, t, this.props.video.title), Tn.createElement(Hr, {
                        video: this.props.video,
                        subOnlyChannel: this.props.subOnlyChannel
                    }))))
                }, t.prototype.renderVideoMenu = function(e) {
                    return e.menu.show ? Tn.createElement(Xt.U, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: Xt._2.Relative
                    }, Tn.createElement(nr, {
                        isRightAligned: !0,
                        icon: Xt._9.More
                    }, Tn.createElement(lr, {
                        video: this.props.video,
                        channelName: this.props.channelName,
                        contentKey: "root",
                        onDeleteVideo: this.props.onDeleteVideo,
                        onDownloadVideo: this.props.onDownloadVideo,
                        videoUpload: this.props.videoUpload,
                        onWatch: this.props.onWatch
                    }), Tn.createElement(_r, {
                        inVodcastQueue: this.props.inVodcastQueue,
                        onAddVideoToVodcastQueue: this.props.onAddVideoToVodcastQueue,
                        video: this.props.video,
                        channelName: this.props.channelName,
                        contentKey: "addTo",
                        vodcastQueueUnavailable: this.props.vodcastQueueUnavailable
                    }))) : null
                }, t
            }(Tn.Component),
            Rr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt._17, {
                        margin: {
                            bottom: 1
                        },
                        elevation: 1,
                        display: Xt.H.Flex,
                        flexWrap: Xt.K.NoWrap,
                        flexDirection: Xt.J.Row,
                        alignItems: Xt.c.Stretch
                    }, Tn.createElement(Xt.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        display: Xt.H.Flex,
                        flexWrap: Xt.K.NoWrap,
                        flexDirection: Xt.J.Column,
                        breakpointSmall: {
                            flexDirection: Xt.J.Row
                        }
                    }, Tn.createElement(Xt.U, {
                        fullWidth: !0
                    }, Tn.createElement(Xt.A, {
                        row: !0
                    }, Tn.createElement(Xt.U, null, Tn.createElement(Xt._1, {
                        height: 75,
                        width: 133
                    })), Tn.createElement(Xt.B, null, Tn.createElement(Xt.U, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, Tn.createElement(Xt._21, null, Tn.createElement(Xt._1, {
                        width: 600,
                        lineCount: 1
                    }), Tn.createElement(Xt._1, {
                        width: 200,
                        lineCount: 1
                    })))))), Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: Xt.K.NoWrap,
                        flexDirection: Xt.J.Row,
                        alignItems: Xt.c.Center
                    }, Tn.createElement(Xt._17, {
                        fullHeight: !0,
                        fullWidth: !0
                    }, Tn.createElement(Xt.U, {
                        display: Xt.H.InlineFlex,
                        fullHeight: !0
                    }, Tn.createElement(Xt.U, {
                        fullHeight: !0,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center,
                        padding: 2
                    }, Tn.createElement(Xt._21, null, Tn.createElement(Xt._1, {
                        width: 40,
                        lineCount: 1
                    })))))), Tn.createElement(Xt.U, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, Tn.createElement(Xt.U, {
                        fullHeight: !0,
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center,
                        padding: 1
                    }, Tn.createElement(Xt._21, null, Tn.createElement(Xt._1, {
                        width: 20,
                        lineCount: 1
                    }))))))
                }, t
            }(Tn.PureComponent);
        ! function(e) {
            e.Edit = "edit", e.Schedule = "schedule"
        }(tr || (tr = {}));
        var Vr, Nr = function(e, t) {
                return e.pathname.match(new RegExp("/" + t))
            },
            Ur = n(413),
            Wr = n(1894),
            zr = (n(1895), {
                onConfirm: "ON_CONFIRM"
            }),
            Gr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onConfirm = function() {
                        t.props.closeModal()
                    }, t
                }
                return rt.__extends(t, e), t.prototype.render = function() {
                    return Tn.createElement(Xt._17, {
                        className: "vm-notification",
                        background: Xt.m.Base,
                        padding: 2
                    }, Tn.createElement(Xt.U, null, Tn.createElement(Xt.U, {
                        padding: {
                            y: 1
                        }
                    }, this.props.body), Tn.createElement(Xt.U, {
                        padding: 1,
                        display: Xt.H.Flex,
                        justifyContent: Xt.T.End,
                        alignItems: Xt.c.End,
                        alignContent: Xt.b.End
                    }, Tn.createElement(Xt.U, null, Tn.createElement(Xt.u, {
                        type: Xt.z.Default,
                        onClick: this.onConfirm,
                        "data-test-selector": zr.onConfirm
                    }, Object(it.d)("OK", "VideoManagerConfirmation"))))))
                }, t
            }(Tn.PureComponent);
        ! function(e) {
            e[e.Modal = 0] = "Modal", e[e.Alert = 1] = "Alert"
        }(Vr || (Vr = {}));
        var Jr = function() {
                function e(e, t) {
                    var n = this;
                    this.maybeShowModal = function() {
                        if (n.messages && 0 !== n.messages.length && !n.isOpen) {
                            n.isOpen = !0;
                            var e = n.messages.pop();
                            n.showModal(Gr, {
                                body: e,
                                closeModal: n.closeModalAndScheduleNextTick
                            })
                        }
                    }, this.closeModalAndScheduleNextTick = function() {
                        n.closeModal(), n.isOpen = !1, n.maybeShowModal()
                    }, this.mode = Vr.Modal, this.messages = [], this.showModal = e, this.closeModal = t, this.isOpen = !1
                }
                return e.prototype.push = function(e) {
                    if (this.mode === Vr.Alert) return void alert(e);
                    this.messages.push(e), this.maybeShowModal()
                }, e.prototype.setAlertMode = function() {
                    this.mode = Vr.Alert
                }, e.prototype.setModalMode = function() {
                    this.mode = Vr.Modal
                }, e
            }(),
            Br = (n(1896), {
                forbidden: "forbidden",
                apiError: "api-error",
                noVideos: "no-videos",
                loadMoreProcessing: "load-more-processing"
            }),
            qr = function(e) {
                return {
                    title: Object(it.d)("Delete Video", "DeleteVideoConfirmationModal"),
                    body: Object(it.d)("Are you sure you want to delete {title}?", {
                        title: e
                    }, "DeleteVideoConfirmationModal"),
                    okText: Object(it.d)("Yes", "DeleteVideoConfirmationModal"),
                    cancelText: Object(it.d)("No", "DeleteVideoConfirmationModal")
                }
            },
            Kr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.vodcastQueueUnavailable = function() {
                        return !t.props.apiData || null === t.props.apiData.vodcastQueueVideoIDs
                    }, t.loadMoreProcessing = function() {
                        t.props.data.user && t.props.apiData.processingVideos.data && t.props.apiData.processingVideos.moreDataAvailable && t.props.fetchProcessingVideosData(t.propsToPageContext(t.props), t.props.apiData.processingVideos.data.length, t.notificationService)
                    }, t.loadMore = function() {
                        return rt.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return rt.__generator(this, function(t) {
                                return this.props.apiData.videos.data && this.props.apiData.videos.moreDataAvailable ? (e = this.propsToPageContext(this.props), [2, this.fetchData(rt.__assign({}, e, {
                                    offset: this.props.apiData.videos.data.length
                                }), e)]) : [2, Promise.resolve()]
                            })
                        })
                    }, t.onChangeFilter = function(e) {
                        var n = t.propsToPageContext(t.props);
                        t.fetchData(rt.__assign({}, n, {
                            activeFilter: e
                        }), n)
                    }, t.onDeleteVideo = function(e, n) {
                        t.props.showModal(Da, rt.__assign({}, qr(e.title), {
                            onConfirm: function() {
                                n ? t.props.removeVideoUpload(e.id) : t.props.deleteVideo(e.id, t.notificationService)
                            },
                            onCancel: void 0,
                            closeModal: t.props.closeModal
                        }))
                    }, t.onWatch = function(e) {
                        t.props.history.push(We(e.id))
                    }, t.onDownloadVideo = function(e) {
                        t.props.downloadVideo(e.id, t.notificationService)
                    }, t.onAddVideoToVodcastQueue = function(e) {
                        t.props.data && t.props.data.user && t.props.addVideoToVodcastQueue(t.props.data.user.id, e.id, t.notificationService)
                    }, t.showEditVideoPropertiesModal = function(e, n) {
                        n.data && n.data.user && n.data.currentUser && (t.notificationService.setAlertMode(), n.showModal(gr, {
                            videoID: e,
                            user: n.data.user,
                            currentUser: n.data.currentUser,
                            channelName: n.match.params.channelName,
                            closeModal: n.closeModal,
                            closeModalWithRouteToManager: t.closeModalWithRouteToManager,
                            onWatch: t.onWatch,
                            onDownload: t.props.downloadVideo,
                            vodcastQueueUnavailable: t.vodcastQueueUnavailable(),
                            notificationService: t.notificationService
                        }))
                    }, t.closeModalWithRouteToManager = function() {
                        t.props.clearEditModalErrors(), t.props.closeModal(), t.props.history.push(Ie(t.props.match.params.channelName))
                    }, t.showEventScheduleModal = function(e, n) {
                        return rt.__awaiter(t, void 0, void 0, function() {
                            var t, a, r;
                            return rt.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n.data && n.data.user ? [4, this.props.fetchVideoForScheduling(e)] : [2];
                                    case 1:
                                        return (t = i.sent()) ? D(t) ? (this.notificationService.push(Object(it.d)("Cannot edit premiere because it is already started!", "VideoManagerEditPremiere")), [2]) : (a = void 0, r = void 0, t && t.premiere && t.premiere.event ? a = t.premiere.event : t.game && (r = {
                                            objectID: t.game.id,
                                            name: t.game.name
                                        }), n.showModal(va, {
                                            user: n.data.user,
                                            channelName: n.match.params.channelName,
                                            onCancel: this.finishModalEditing,
                                            onUpdate: this.onUpdateEvent,
                                            closeModalWithRouteBack: this.closeModalWithRouteToManager,
                                            onCreate: this.onCreateEvent,
                                            videoID: e,
                                            initialValues: {
                                                game: r
                                            },
                                            hideEndTimeField: !0,
                                            event: a
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.onCreateEvent = function(e, n) {
                        return rt.__awaiter(t, void 0, void 0, function() {
                            return rt.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return n ? [4, this.props.createEvent(e, n)] : [2];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.onUpdateEvent = function(e, n) {
                        return rt.__awaiter(t, void 0, void 0, function() {
                            return rt.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return n ? [4, this.props.updateEvent(e, n)] : [2];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.handleUploadFilesSubmitted = function(e) {
                        t.props.data.user && t.props.data.user.id && t.props.submitVideoUploadFiles(t.props.data.user.id, e)
                    }, t.finishModalEditing = function() {
                        t.props.history.push(Ie(t.props.match.params.channelName))
                    }, t
                }
                return rt.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.apiData.channelName && this.props.apiData.channelName === this.props.match.params.channelName || this.props.changeChannel(this.props.match.params.channelName), this.props.fetchProcessingVideosData(this.propsToPageContext(this.props), 0, this.notificationService), this.fetchData(this.propsToPageContext(this.props))
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.beginPollingProcessingVideos()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.showModal && e.closeModal && !this.notificationService && (this.notificationService = new Jr(this.props.showModal, this.props.closeModal));
                    var t = e.location,
                        n = e.match.params.videoID;
                    !this.props.data.user && e.data.user ? (this.props.fetchProcessingVideosData(this.propsToPageContext(e), 0, this.notificationService), this.fetchData(this.propsToPageContext(e), this.propsToPageContext(this.props)), Nr(t, tr.Edit) && n ? this.showEditVideoPropertiesModal(n, e) : Nr(t, tr.Schedule) && n && this.showEventScheduleModal(n, e)) : this.props.location.pathname !== e.location.pathname && e.location.pathname.match(/\/edit/) && e.match.params.videoID ? this.showEditVideoPropertiesModal(e.match.params.videoID, e) : this.props.location.pathname !== e.location.pathname && e.location.pathname.match(/\/schedule/) && e.match.params.videoID ? this.showEventScheduleModal(e.match.params.videoID, e) : Qr("edit", this.props.location, e.location) && this.props.closeModal()
                }, t.prototype.componentWillUnmount = function() {
                    this.props.stopPollingProcessingVideos()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? this.props.forbidden ? Tn.createElement(En.a, {
                        message: Object(it.d)("Access Denied: you don't have access to these videos", "VideoManagerPage")
                    }) : this.props.data.error ? Tn.createElement(En.a, {
                        message: Object(it.d)("Error loading data", "VideoManagerPage")
                    }) : this.props.apiData && this.props.apiData.notificationMessage && this.props.apiData.notificationMessage.type === ot.NotificationType.PageError ? Tn.createElement(En.a, {
                        message: this.props.apiData.notificationMessage.message
                    }) : Tn.createElement(xn.b, null, Tn.createElement(Xt.U, {
                        padding: 3,
                        className: "video-manager",
                        fullWidth: !0
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            bottom: 1
                        }
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H3,
                        color: Xt.F.Link
                    }, Object(it.d)("Video Manager", "VideoManagerPage"))), Tn.createElement(Xt.N, {
                        gutterSize: Xt.O.Large
                    }, Tn.createElement(Xt.G, {
                        cols: 12
                    }, Tn.createElement(Xt.U, {
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H2,
                        fontSize: Xt.L.Size5,
                        transform: Xt._25.Uppercase,
                        color: Xt.F.Alt2
                    }, Object(it.d)("Upload Queue", "VideoManagerPage")))), Tn.createElement(Xt.G, {
                        cols: 8
                    }, Tn.createElement(Xt.U, {
                        position: Xt._2.Relative,
                        fullWidth: !0
                    }, Tn.createElement(br, {
                        errors: this.props.uploadValidationErrors,
                        onFilesSubmitted: this.handleUploadFilesSubmitted
                    })), Tn.createElement(Xt.U, {
                        padding: {
                            top: 1
                        }
                    }, this.getVideoUploadRows(this.props.videoUploads), this.getVideoProcessingRows())), Tn.createElement(Xt.G, {
                        cols: 4
                    }, Tn.createElement(Xt._17, {
                        background: Xt.m.Base,
                        elevation: 2
                    }, Tn.createElement(Xt.U, {
                        padding: 2
                    }, Tn.createElement(Xt._36, null, Tn.createElement("ul", null, Tn.createElement("li", null, Object(it.d)("The Twitch uploader supports MP4, MOV, AVI, and FLV files.", "VideoManagerPage")), Tn.createElement("li", null, Object(it.d)("Encoding must be H.264", "VideoManagerPage")), Tn.createElement("li", null, Object(it.d)("Max file size is 20 GB", "VideoManagerPage"))))), Tn.createElement(Xt._17, {
                        background: Xt.m.Alt,
                        borderTop: !0
                    }, Tn.createElement(Xt.u, {
                        linkTo: "https://help.twitch.tv/customer/en/portal/articles/2577667-video-upload-guide",
                        type: Xt.z.Text,
                        fullWidth: !0
                    }, Object(it.d)("To learn more visit uploads help", "VideoManagerPage"))))), Tn.createElement(Xt.G, {
                        cols: 12
                    }, Tn.createElement(Xt.U, {
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, Tn.createElement(Xt._21, {
                        type: Xt._26.H2,
                        fontSize: Xt.L.Size5,
                        transform: Xt._25.Uppercase,
                        color: Xt.F.Alt2
                    }, Object(it.d)("Videos", "VideoManagerPage")))), Tn.createElement(Xt.G, {
                        cols: 8
                    }, Tn.createElement("div", {
                        className: "video-manager-processed-list"
                    }, this.renderSuccessfullyProcessedVideos())), Tn.createElement(Xt.G, {
                        cols: 4
                    }, Tn.createElement(Lr, {
                        activeFilter: this.props.activeFilter,
                        changeFilter: this.onChangeFilter
                    }))), Tn.createElement(xn.a, {
                        enabled: !!this.props.apiData.videos.data && this.props.apiData.videos.moreDataAvailable,
                        key: this.props.activeFilter || "",
                        loadMore: this.loadMore
                    }))) : Tn.createElement(En.a, {
                        message: Object(it.d)("Access Denied: Please log in", "VideoManagerPage")
                    })
                }, t.prototype.renderSuccessfullyProcessedVideos = function() {
                    var e = this;
                    if (null === this.props.apiData.videos.data && this.props.apiData.videos.loading) return this.renderLoadingState();
                    if (null === this.props.apiData.videos.data) return this.renderErrorState();
                    if (0 === this.props.apiData.videos.data.length) return this.renderEmptyState();
                    var t = this.props.apiData.videos.data.map(function(t) {
                        return e.getVideoRow(t)
                    });
                    return this.props.apiData.videos.loading && t.push(Tn.createElement(Rr, {
                        key: "VideoCardPlaceholder" + this.props.apiData.videos.data.length
                    })), t
                }, t.prototype.renderLoadingState = function() {
                    return Tn.createElement(Xt.U, null, Tn.createElement(Rr, {
                        key: "VideoCardPlaceholderLoading1"
                    }), Tn.createElement(Rr, {
                        key: "VideoCardPlaceholderLoading2"
                    }), Tn.createElement(Rr, {
                        key: "VideoCardPlaceholderLoading3"
                    }))
                }, t.prototype.renderEmptyState = function() {
                    return Tn.createElement(Xt.U, {
                        "data-test-selector": Br.noVideos
                    }, Object(it.d)("You have no videos which match these filters.", "VideoManagerPage"))
                }, t.prototype.renderErrorState = function() {
                    return Tn.createElement(Xt.U, {
                        display: Xt.H.Flex,
                        alignItems: Xt.c.Center,
                        justifyContent: Xt.T.Center,
                        padding: 2
                    }, Tn.createElement(Xt.U, {
                        margin: {
                            right: 1
                        },
                        display: Xt.H.Flex
                    }, Tn.createElement(Xt._8, {
                        asset: Xt._9.Warning,
                        type: Xt._10.Alt2,
                        width: 28,
                        height: 28
                    })), Tn.createElement(Xt._21, {
                        fontSize: Xt.L.Size4
                    }, Object(it.d)("An error occurred loading the list of videos.", "VideoManagerPage")))
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
                            var n = this.props.apiData.processingVideos.loading ? Xt.y.Loading : Xt.y.Default;
                            t = Tn.createElement(Xt.U, {
                                display: Xt.H.Flex,
                                fullWidth: !0,
                                justifyContent: Xt.T.Center
                            }, Tn.createElement(Xt.u, {
                                "data-test-selector": Br.loadMoreProcessing,
                                state: n,
                                type: Xt.z.Hollow,
                                onClick: this.loadMoreProcessing
                            }, Object(it.d)("Load More", "VideoManagerProcessingVideos")))
                        }
                        return Tn.createElement("div", null, this.props.apiData.processingVideos.data.map(function(t) {
                            return e.getVideoRow(t)
                        }), t)
                    }
                }, t.prototype.getVideoRow = function(e, t) {
                    return this.props.data.user ? Tn.createElement(Ir, {
                        video: e,
                        videoUpload: t,
                        channelName: this.props.match.params.channelName,
                        subOnlyChannel: !1,
                        onDeleteVideo: this.onDeleteVideo,
                        onDownloadVideo: this.onDownloadVideo,
                        inVodcastQueue: this.props.isInVodcastQueue(e.id),
                        onAddVideoToVodcastQueue: this.onAddVideoToVodcastQueue,
                        vodcastQueueUnavailable: this.vodcastQueueUnavailable(),
                        key: e.id,
                        onWatch: this.onWatch,
                        user: this.props.data.user
                    }) : null
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
                }, t
            }(Tn.Component),
            Qr = function(e, t, n) {
                var a = !n.pathname.match(new RegExp("/" + e));
                return t.pathname.match(new RegExp("/" + e)) && a && t.pathname !== n.pathname
            },
            Zr = Object(Un.c)("VideoManagerPage", {
                destination: Hn.a.VideoManagerPage
            })(Kr),
            $r = Object(Sn.graphql)(Wr, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            })(Zr),
            Xr = $r,
            ei = function(e) {
                var t = function() {
                    return Tn.createElement("div", null)
                };
                return function(n) {
                    var a = or + "/" + n.match.params.channelName + "/manager",
                        r = {
                            fallback: t,
                            no: function() {
                                return a
                            },
                            yes: function() {
                                return it.b.get("premiere_video_manager_staff", !1) ? Tn.createElement(e, rt.__assign({}, n)) : a
                            }
                        };
                    return Tn.createElement(Ur.a, {
                        name: "TWILIGHT_PREMIERE_UPLOAD_FLOW",
                        loader: t,
                        assignments: r
                    })
                }
            }(Xr),
            ti = Object(et.a)(Qe, Ze)(ei);
        n.d(t, "VideoManagerPage", function() {
            return ti
        })
    },
    913: function(e, t, n) {
        (function(e) {
            ! function(t, n) {
                e.exports = n()
            }(0, function() {
                "use strict";

                function t() {
                    return va.apply(null, arguments)
                }

                function a(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function i(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }

                function s(e) {
                    return void 0 === e
                }

                function o(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function d(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function l(e, t) {
                    var n, a = [];
                    for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                    return a
                }

                function u(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function c(e, t) {
                    for (var n in t) u(t, n) && (e[n] = t[n]);
                    return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function _(e, t, n, a) {
                    return yt(e, t, n, a, !0).utc()
                }

                function m() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }
                }

                function h(e) {
                    return null == e._pf && (e._pf = m()), e._pf
                }

                function p(e) {
                    if (null == e._isValid) {
                        var t = h(e),
                            n = Da.call(t.parsedDateParts, function(e) {
                                return null != e
                            }),
                            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                        if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                        e._isValid = a
                    }
                    return e._isValid
                }

                function f(e) {
                    var t = _(NaN);
                    return null != e ? c(h(t), e) : h(t).userInvalidated = !0, t
                }

                function g(e, t) {
                    var n, a, r;
                    if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = h(t)), s(t._locale) || (e._locale = t._locale), Ya.length > 0)
                        for (n = 0; n < Ya.length; n++) a = Ya[n], r = t[a], s(r) || (e[a] = r);
                    return e
                }

                function M(e) {
                    g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === wa && (wa = !0, t.updateOffset(this), wa = !1)
                }

                function y(e) {
                    return e instanceof M || null != e && null != e._isAMomentObject
                }

                function v(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function L(e) {
                    var t = +e,
                        n = 0;
                    return 0 !== t && isFinite(t) && (n = v(t)), n
                }

                function D(e, t, n) {
                    var a, r = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        s = 0;
                    for (a = 0; a < r; a++)(n && e[a] !== t[a] || !n && L(e[a]) !== L(t[a])) && s++;
                    return s + i
                }

                function Y(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function w(e, n) {
                    var a = !0;
                    return c(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
                            for (var r, i = [], s = 0; s < arguments.length; s++) {
                                if (r = "", "object" == typeof arguments[s]) {
                                    r += "\n[" + s + "] ";
                                    for (var o in arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                    r = r.slice(0, -2)
                                } else r = arguments[s];
                                i.push(r)
                            }
                            Y(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
                        }
                        return n.apply(this, arguments)
                    }, n)
                }

                function b(e, n) {
                    null != t.deprecationHandler && t.deprecationHandler(e, n), ba[e] || (Y(n), ba[e] = !0)
                }

                function k(e) {
                    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function T(e) {
                    var t, n;
                    for (n in e) t = e[n], k(t) ? this[n] = t : this["_" + n] = t;
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function S(e, t) {
                    var n, a = c({}, e);
                    for (n in t) u(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, c(a[n], e[n]), c(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                    for (n in e) u(e, n) && !u(t, n) && r(e[n]) && (a[n] = c({}, a[n]));
                    return a
                }

                function E(e) {
                    null != e && this.set(e)
                }

                function x(e, t, n) {
                    var a = this._calendar[e] || this._calendar.sameElse;
                    return k(a) ? a.call(t, n) : a
                }

                function H(e) {
                    var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()];
                    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }), this._longDateFormat[e])
                }

                function C() {
                    return this._invalidDate
                }

                function O(e) {
                    return this._ordinal.replace("%d", e)
                }

                function j(e, t, n, a) {
                    var r = this._relativeTime[n];
                    return k(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
                }

                function P(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return k(n) ? n(t) : n.replace(/%s/i, t)
                }

                function A(e, t) {
                    var n = e.toLowerCase();
                    Oa[n] = Oa[n + "s"] = Oa[t] = e
                }

                function F(e) {
                    return "string" == typeof e ? Oa[e] || Oa[e.toLowerCase()] : void 0
                }

                function I(e) {
                    var t, n, a = {};
                    for (n in e) u(e, n) && (t = F(n)) && (a[t] = e[n]);
                    return a
                }

                function R(e, t) {
                    ja[e] = t
                }

                function V(e) {
                    var t = [];
                    for (var n in e) t.push({
                        unit: n,
                        priority: ja[n]
                    });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }), t
                }

                function N(e, n) {
                    return function(a) {
                        return null != a ? (W(this, e, a), t.updateOffset(this, n), this) : U(this, e)
                    }
                }

                function U(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function W(e, t, n) {
                    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
                }

                function z(e) {
                    return e = F(e), k(this[e]) ? this[e]() : this
                }

                function G(e, t) {
                    if ("object" == typeof e) {
                        e = I(e);
                        for (var n = V(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
                    } else if (e = F(e), k(this[e])) return this[e](t);
                    return this
                }

                function J(e, t, n) {
                    var a = "" + Math.abs(e),
                        r = t - a.length;
                    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
                }

                function B(e, t, n, a) {
                    var r = a;
                    "string" == typeof a && (r = function() {
                        return this[a]()
                    }), e && (Ia[e] = r), t && (Ia[t[0]] = function() {
                        return J(r.apply(this, arguments), t[1], t[2])
                    }), n && (Ia[n] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function q(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function K(e) {
                    var t, n, a = e.match(Pa);
                    for (t = 0, n = a.length; t < n; t++) Ia[a[t]] ? a[t] = Ia[a[t]] : a[t] = q(a[t]);
                    return function(t) {
                        var r, i = "";
                        for (r = 0; r < n; r++) i += k(a[r]) ? a[r].call(t, e) : a[r];
                        return i
                    }
                }

                function Q(e, t) {
                    return e.isValid() ? (t = Z(t, e.localeData()), Fa[t] = Fa[t] || K(t), Fa[t](e)) : e.localeData().invalidDate()
                }

                function Z(e, t) {
                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    var a = 5;
                    for (Aa.lastIndex = 0; a >= 0 && Aa.test(e);) e = e.replace(Aa, n), Aa.lastIndex = 0, a -= 1;
                    return e
                }

                function $(e, t, n) {
                    nr[e] = k(t) ? t : function(e, a) {
                        return e && n ? n : t
                    }
                }

                function X(e, t) {
                    return u(nr, e) ? nr[e](t._strict, t._locale) : new RegExp(ee(e))
                }

                function ee(e) {
                    return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, r) {
                        return t || n || a || r
                    }))
                }

                function te(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function ne(e, t) {
                    var n, a = t;
                    for ("string" == typeof e && (e = [e]), o(t) && (a = function(e, n) {
                            n[t] = L(e)
                        }), n = 0; n < e.length; n++) ar[e[n]] = a
                }

                function ae(e, t) {
                    ne(e, function(e, n, a, r) {
                        a._w = a._w || {}, t(e, a._w, a, r)
                    })
                }

                function re(e, t, n) {
                    null != t && u(ar, e) && ar[e](t, n._a, n, e)
                }

                function ie(e, t) {
                    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                }

                function se(e, t) {
                    return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hr).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
                }

                function oe(e, t) {
                    return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hr.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }

                function de(e, t, n) {
                    var a, r, i, s = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = _([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? (r = mr.call(this._shortMonthsParse, s), -1 !== r ? r : null) : (r = mr.call(this._longMonthsParse, s), -1 !== r ? r : null) : "MMM" === t ? -1 !== (r = mr.call(this._shortMonthsParse, s)) ? r : (r = mr.call(this._longMonthsParse, s), -1 !== r ? r : null) : -1 !== (r = mr.call(this._longMonthsParse, s)) ? r : (r = mr.call(this._shortMonthsParse, s), -1 !== r ? r : null)
                }

                function le(e, t, n) {
                    var a, r, i;
                    if (this._monthsParseExact) return de.call(this, e, t, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
                        if (r = _([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                        if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                        if (!n && this._monthsParse[a].test(e)) return a
                    }
                }

                function ue(e, t) {
                    var n;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = L(t);
                        else if (t = e.localeData().monthsParse(t), !o(t)) return e;
                    return n = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
                }

                function ce(e) {
                    return null != e ? (ue(this, e), t.updateOffset(this, !0), this) : U(this, "Month")
                }

                function _e() {
                    return ie(this.year(), this.month())
                }

                function me(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = gr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function he(e) {
                    return this._monthsParseExact ? (u(this, "_monthsRegex") || pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Mr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }

                function pe() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a = [],
                        r = [],
                        i = [];
                    for (t = 0; t < 12; t++) n = _([2e3, t]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
                    for (a.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = te(a[t]), r[t] = te(r[t]);
                    for (t = 0; t < 24; t++) i[t] = te(i[t]);
                    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function fe(e) {
                    return ge(e) ? 366 : 365
                }

                function ge(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function Me() {
                    return ge(this.year())
                }

                function ye(e, t, n, a, r, i, s) {
                    var o = new Date(e, t, n, a, r, i, s);
                    return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                }

                function ve(e) {
                    var t = new Date(Date.UTC.apply(null, arguments));
                    return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                }

                function Le(e, t, n) {
                    var a = 7 + t - n;
                    return -(7 + ve(e, 0, a).getUTCDay() - t) % 7 + a - 1
                }

                function De(e, t, n, a, r) {
                    var i, s, o = (7 + n - a) % 7,
                        d = Le(e, a, r),
                        l = 1 + 7 * (t - 1) + o + d;
                    return l <= 0 ? (i = e - 1, s = fe(i) + l) : l > fe(e) ? (i = e + 1, s = l - fe(e)) : (i = e, s = l), {
                        year: i,
                        dayOfYear: s
                    }
                }

                function Ye(e, t, n) {
                    var a, r, i = Le(e.year(), t, n),
                        s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                    return s < 1 ? (r = e.year() - 1, a = s + we(r, t, n)) : s > we(e.year(), t, n) ? (a = s - we(e.year(), t, n), r = e.year() + 1) : (r = e.year(), a = s), {
                        week: a,
                        year: r
                    }
                }

                function we(e, t, n) {
                    var a = Le(e, t, n),
                        r = Le(e + 1, t, n);
                    return (fe(e) - a + r) / 7
                }

                function be(e) {
                    return Ye(e, this._week.dow, this._week.doy).week
                }

                function ke() {
                    return this._week.dow
                }

                function Te() {
                    return this._week.doy
                }

                function Se(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function Ee(e) {
                    var t = Ye(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }

                function xe(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
                }

                function He(e, t) {
                    return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                }

                function Ce(e, t) {
                    return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }

                function Oe(e) {
                    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }

                function je(e) {
                    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }

                function Pe(e, t, n) {
                    var a, r, i, s = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = _([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? (r = mr.call(this._weekdaysParse, s), -1 !== r ? r : null) : "ddd" === t ? (r = mr.call(this._shortWeekdaysParse, s), -1 !== r ? r : null) : (r = mr.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : "dddd" === t ? -1 !== (r = mr.call(this._weekdaysParse, s)) ? r : -1 !== (r = mr.call(this._shortWeekdaysParse, s)) ? r : (r = mr.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : "ddd" === t ? -1 !== (r = mr.call(this._shortWeekdaysParse, s)) ? r : -1 !== (r = mr.call(this._weekdaysParse, s)) ? r : (r = mr.call(this._minWeekdaysParse, s), -1 !== r ? r : null) : -1 !== (r = mr.call(this._minWeekdaysParse, s)) ? r : -1 !== (r = mr.call(this._weekdaysParse, s)) ? r : (r = mr.call(this._shortWeekdaysParse, s), -1 !== r ? r : null)
                }

                function Ae(e, t, n) {
                    var a, r, i;
                    if (this._weekdaysParseExact) return Pe.call(this, e, t, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                        if (r = _([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                        if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                        if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                        if (!n && this._weekdaysParse[a].test(e)) return a
                    }
                }

                function Fe(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = xe(e, this.localeData()), this.add(e - t, "d")) : t
                }

                function Ie(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Re(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = He(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }

                function Ve(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = wr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Ne(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = br), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Ue(e) {
                    return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = kr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function We() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, n, a, r, i, s = [],
                        o = [],
                        d = [],
                        l = [];
                    for (t = 0; t < 7; t++) n = _([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), s.push(a), o.push(r), d.push(i), l.push(a), l.push(r), l.push(i);
                    for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = te(o[t]), d[t] = te(d[t]), l[t] = te(l[t]);
                    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                }

                function ze() {
                    return this.hours() % 12 || 12
                }

                function Ge() {
                    return this.hours() || 24
                }

                function Je(e, t) {
                    B(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function Be(e, t) {
                    return t._meridiemParse
                }

                function qe(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }

                function Ke(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Qe(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function Ze(e) {
                    for (var t, n, a, r, i = 0; i < e.length;) {
                        for (r = Qe(e[i]).split("-"), t = r.length, n = Qe(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
                            if (a = $e(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && D(r, n, !0) >= t - 1) break;
                            t--
                        }
                        i++
                    }
                    return null
                }

                function $e(t) {
                    var a = null;
                    if (!Hr[t] && void 0 !== e && e && e.exports) try {
                        a = Tr._abbr, n(1322)("./" + t), Xe(a)
                    } catch (e) {}
                    return Hr[t]
                }

                function Xe(e, t) {
                    var n;
                    return e && (n = s(t) ? nt(e) : et(e, t)) && (Tr = n), Tr._abbr
                }

                function et(e, t) {
                    if (null !== t) {
                        var n = xr;
                        if (t.abbr = e, null != Hr[e]) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Hr[e]._config;
                        else if (null != t.parentLocale) {
                            if (null == Hr[t.parentLocale]) return Cr[t.parentLocale] || (Cr[t.parentLocale] = []), Cr[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            n = Hr[t.parentLocale]._config
                        }
                        return Hr[e] = new E(S(n, t)), Cr[e] && Cr[e].forEach(function(e) {
                            et(e.name, e.config)
                        }), Xe(e), Hr[e]
                    }
                    return delete Hr[e], null
                }

                function tt(e, t) {
                    if (null != t) {
                        var n, a = xr;
                        null != Hr[e] && (a = Hr[e]._config), t = S(a, t), n = new E(t), n.parentLocale = Hr[e], Hr[e] = n, Xe(e)
                    } else null != Hr[e] && (null != Hr[e].parentLocale ? Hr[e] = Hr[e].parentLocale : null != Hr[e] && delete Hr[e]);
                    return Hr[e]
                }

                function nt(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Tr;
                    if (!a(e)) {
                        if (t = $e(e)) return t;
                        e = [e]
                    }
                    return Ze(e)
                }

                function at() {
                    return Sa(Hr)
                }

                function rt(e) {
                    var t, n = e._a;
                    return n && -2 === h(e).overflow && (t = n[ir] < 0 || n[ir] > 11 ? ir : n[sr] < 1 || n[sr] > ie(n[rr], n[ir]) ? sr : n[or] < 0 || n[or] > 24 || 24 === n[or] && (0 !== n[dr] || 0 !== n[lr] || 0 !== n[ur]) ? or : n[dr] < 0 || n[dr] > 59 ? dr : n[lr] < 0 || n[lr] > 59 ? lr : n[ur] < 0 || n[ur] > 999 ? ur : -1, h(e)._overflowDayOfYear && (t < rr || t > sr) && (t = sr), h(e)._overflowWeeks && -1 === t && (t = cr), h(e)._overflowWeekday && -1 === t && (t = _r), h(e).overflow = t), e
                }

                function it(e) {
                    var t, n, a, r, i, s, o = e._i,
                        d = Or.exec(o) || jr.exec(o);
                    if (d) {
                        for (h(e).iso = !0, t = 0, n = Ar.length; t < n; t++)
                            if (Ar[t][1].exec(d[1])) {
                                r = Ar[t][0], a = !1 !== Ar[t][2];
                                break
                            }
                        if (null == r) return void(e._isValid = !1);
                        if (d[3]) {
                            for (t = 0, n = Fr.length; t < n; t++)
                                if (Fr[t][1].exec(d[3])) {
                                    i = (d[2] || " ") + Fr[t][0];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1)
                        }
                        if (!a && null != i) return void(e._isValid = !1);
                        if (d[4]) {
                            if (!Pr.exec(d[4])) return void(e._isValid = !1);
                            s = "Z"
                        }
                        e._f = r + (i || "") + (s || ""), _t(e)
                    } else e._isValid = !1
                }

                function st(e) {
                    var t, n, a, r, i, s, o, d, l = {
                            " GMT": " +0000",
                            " EDT": " -0400",
                            " EST": " -0500",
                            " CDT": " -0500",
                            " CST": " -0600",
                            " MDT": " -0600",
                            " MST": " -0700",
                            " PDT": " -0700",
                            " PST": " -0800"
                        },
                        u = "YXWVUTSRQPONZABCDEFGHIKLM";
                    if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = Rr.exec(t)) {
                        if (a = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", r = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), i = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
                            var c = new Date(n[2]),
                                _ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][c.getDay()];
                            if (n[1].substr(0, 3) !== _) return h(e).weekdayMismatch = !0, void(e._isValid = !1)
                        }
                        switch (n[5].length) {
                            case 2:
                                0 === d ? o = " +0000" : (d = u.indexOf(n[5][1].toUpperCase()) - 12, o = (d < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00");
                                break;
                            case 4:
                                o = l[n[5]];
                                break;
                            default:
                                o = l[" GMT"]
                        }
                        n[5] = o, e._i = n.splice(1).join(""), s = " ZZ", e._f = a + r + i + s, _t(e), h(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function ot(e) {
                    var n = Ir.exec(e._i);
                    if (null !== n) return void(e._d = new Date(+n[1]));
                    it(e), !1 === e._isValid && (delete e._isValid, st(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))
                }

                function dt(e, t, n) {
                    return null != e ? e : null != t ? t : n
                }

                function lt(e) {
                    var n = new Date(t.now());
                    return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                }

                function ut(e) {
                    var t, n, a, r, i = [];
                    if (!e._d) {
                        for (a = lt(e), e._w && null == e._a[sr] && null == e._a[ir] && ct(e), null != e._dayOfYear && (r = dt(e._a[rr], a[rr]), (e._dayOfYear > fe(r) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = ve(r, 0, e._dayOfYear), e._a[ir] = n.getUTCMonth(), e._a[sr] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = i[t] = a[t];
                        for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                        24 === e._a[or] && 0 === e._a[dr] && 0 === e._a[lr] && 0 === e._a[ur] && (e._nextDay = !0, e._a[or] = 0), e._d = (e._useUTC ? ve : ye).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[or] = 24)
                    }
                }

                function ct(e) {
                    var t, n, a, r, i, s, o, d;
                    if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, s = 4, n = dt(t.GG, e._a[rr], Ye(vt(), 1, 4).year), a = dt(t.W, 1), ((r = dt(t.E, 1)) < 1 || r > 7) && (d = !0);
                    else {
                        i = e._locale._week.dow, s = e._locale._week.doy;
                        var l = Ye(vt(), i, s);
                        n = dt(t.gg, e._a[rr], l.year), a = dt(t.w, l.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i
                    }
                    a < 1 || a > we(n, i, s) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = De(n, a, r, i, s), e._a[rr] = o.year, e._dayOfYear = o.dayOfYear)
                }

                function _t(e) {
                    if (e._f === t.ISO_8601) return void it(e);
                    if (e._f === t.RFC_2822) return void st(e);
                    e._a = [], h(e).empty = !0;
                    var n, a, r, i, s, o = "" + e._i,
                        d = o.length,
                        l = 0;
                    for (r = Z(e._f, e._locale).match(Pa) || [], n = 0; n < r.length; n++) i = r[n], a = (o.match(X(i, e)) || [])[0], a && (s = o.substr(0, o.indexOf(a)), s.length > 0 && h(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), l += a.length), Ia[i] ? (a ? h(e).empty = !1 : h(e).unusedTokens.push(i), re(i, a, e)) : e._strict && !a && h(e).unusedTokens.push(i);
                    h(e).charsLeftOver = d - l, o.length > 0 && h(e).unusedInput.push(o), e._a[or] <= 12 && !0 === h(e).bigHour && e._a[or] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[or] = mt(e._locale, e._a[or], e._meridiem), ut(e), rt(e)
                }

                function mt(e, t, n) {
                    var a;
                    return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
                }

                function ht(e) {
                    var t, n, a, r, i;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) i = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], _t(t), p(t) && (i += h(t).charsLeftOver, i += 10 * h(t).unusedTokens.length, h(t).score = i, (null == a || i < a) && (a = i, n = t));
                    c(e, n || t)
                }

                function pt(e) {
                    if (!e._d) {
                        var t = I(e._i);
                        e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        }), ut(e)
                    }
                }

                function ft(e) {
                    var t = new M(rt(gt(e)));
                    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                }

                function gt(e) {
                    var t = e._i,
                        n = e._f;
                    return e._locale = e._locale || nt(e._l), null === t || void 0 === n && "" === t ? f({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), y(t) ? new M(rt(t)) : (d(t) ? e._d = t : a(n) ? ht(e) : n ? _t(e) : Mt(e), p(e) || (e._d = null), e))
                }

                function Mt(e) {
                    var n = e._i;
                    s(n) ? e._d = new Date(t.now()) : d(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? ot(e) : a(n) ? (e._a = l(n.slice(0), function(e) {
                        return parseInt(e, 10)
                    }), ut(e)) : r(n) ? pt(e) : o(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
                }

                function yt(e, t, n, s, o) {
                    var d = {};
                    return !0 !== n && !1 !== n || (s = n, n = void 0), (r(e) && i(e) || a(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = o, d._l = n, d._i = e, d._f = t, d._strict = s, ft(d)
                }

                function vt(e, t, n, a) {
                    return yt(e, t, n, a, !1)
                }

                function Lt(e, t) {
                    var n, r;
                    if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return vt();
                    for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
                    return n
                }

                function Dt() {
                    return Lt("isBefore", [].slice.call(arguments, 0))
                }

                function Yt() {
                    return Lt("isAfter", [].slice.call(arguments, 0))
                }

                function wt(e) {
                    for (var t in e)
                        if (-1 === Wr.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, a = 0; a < Wr.length; ++a)
                        if (e[Wr[a]]) {
                            if (n) return !1;
                            parseFloat(e[Wr[a]]) !== L(e[Wr[a]]) && (n = !0)
                        }
                    return !0
                }

                function bt() {
                    return this._isValid
                }

                function kt() {
                    return Gt(NaN)
                }

                function Tt(e) {
                    var t = I(e),
                        n = t.year || 0,
                        a = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || 0,
                        s = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        l = t.second || 0,
                        u = t.millisecond || 0;
                    this._isValid = wt(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = nt(), this._bubble()
                }

                function St(e) {
                    return e instanceof Tt
                }

                function Et(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function xt(e, t) {
                    B(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            n = "+";
                        return e < 0 && (e = -e, n = "-"), n + J(~~(e / 60), 2) + t + J(~~e % 60, 2)
                    })
                }

                function Ht(e, t) {
                    var n = (t || "").match(e);
                    if (null === n) return null;
                    var a = n[n.length - 1] || [],
                        r = (a + "").match(zr) || ["-", 0, 0],
                        i = 60 * r[1] + L(r[2]);
                    return 0 === i ? 0 : "+" === r[0] ? i : -i
                }

                function Ct(e, n) {
                    var a, r;
                    return n._isUTC ? (a = n.clone(), r = (y(e) || d(e) ? e.valueOf() : vt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + r), t.updateOffset(a, !1), a) : vt(e).local()
                }

                function Ot(e) {
                    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                }

                function jt(e, n, a) {
                    var r, i = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = Ht(Xa, e))) return this
                        } else Math.abs(e) < 16 && !a && (e *= 60);
                        return !this._isUTC && n && (r = Ot(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), i !== e && (!n || this._changeInProgress ? Qt(this, Gt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? i : Ot(this)
                }

                function Pt(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }

                function At(e) {
                    return this.utcOffset(0, e)
                }

                function Ft(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ot(this), "m")), this
                }

                function It() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = Ht($a, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }

                function Rt(e) {
                    return !!this.isValid() && (e = e ? vt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }

                function Vt() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function Nt() {
                    if (!s(this._isDSTShifted)) return this._isDSTShifted;
                    var e = {};
                    if (g(e, this), e = gt(e), e._a) {
                        var t = e._isUTC ? _(e._a) : vt(e._a);
                        this._isDSTShifted = this.isValid() && D(e._a, t.toArray()) > 0
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Ut() {
                    return !!this.isValid() && !this._isUTC
                }

                function Wt() {
                    return !!this.isValid() && this._isUTC
                }

                function zt() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Gt(e, t) {
                    var n, a, r, i = e,
                        s = null;
                    return St(e) ? i = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : o(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = Gr.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
                        y: 0,
                        d: L(s[sr]) * n,
                        h: L(s[or]) * n,
                        m: L(s[dr]) * n,
                        s: L(s[lr]) * n,
                        ms: L(Et(1e3 * s[ur])) * n
                    }) : (s = Jr.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
                        y: Jt(s[2], n),
                        M: Jt(s[3], n),
                        w: Jt(s[4], n),
                        d: Jt(s[5], n),
                        h: Jt(s[6], n),
                        m: Jt(s[7], n),
                        s: Jt(s[8], n)
                    }) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (r = qt(vt(i.from), vt(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), a = new Tt(i), St(e) && u(e, "_locale") && (a._locale = e._locale), a
                }

                function Jt(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function Bt(e, t) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
                }

                function qt(e, t) {
                    var n;
                    return e.isValid() && t.isValid() ? (t = Ct(t, e), e.isBefore(t) ? n = Bt(e, t) : (n = Bt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function Kt(e, t) {
                    return function(n, a) {
                        var r, i;
                        return null === a || isNaN(+a) || (b(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, r = Gt(n, a), Qt(this, r, e), this
                    }
                }

                function Qt(e, n, a, r) {
                    var i = n._milliseconds,
                        s = Et(n._days),
                        o = Et(n._months);
                    e.isValid() && (r = null == r || r, i && e._d.setTime(e._d.valueOf() + i * a), s && W(e, "Date", U(e, "Date") + s * a), o && ue(e, U(e, "Month") + o * a), r && t.updateOffset(e, s || o))
                }

                function Zt(e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function $t(e, n) {
                    var a = e || vt(),
                        r = Ct(a, this).startOf("day"),
                        i = t.calendarFormat(this, r) || "sameElse",
                        s = n && (k(n[i]) ? n[i].call(this, a) : n[i]);
                    return this.format(s || this.localeData().calendar(i, this, vt(a)))
                }

                function Xt() {
                    return new M(this)
                }

                function en(e, t) {
                    var n = y(e) ? e : vt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = F(s(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                }

                function tn(e, t) {
                    var n = y(e) ? e : vt(e);
                    return !(!this.isValid() || !n.isValid()) && (t = F(s(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                }

                function nn(e, t, n, a) {
                    return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
                }

                function an(e, t) {
                    var n, a = y(e) ? e : vt(e);
                    return !(!this.isValid() || !a.isValid()) && (t = F(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
                }

                function rn(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }

                function sn(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }

                function on(e, t, n) {
                    var a, r, i, s;
                    return this.isValid() ? (a = Ct(e, this), a.isValid() ? (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = F(t), "year" === t || "month" === t || "quarter" === t ? (s = dn(this, a), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - a, s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - r) / 864e5 : "week" === t ? (i - r) / 6048e5 : i), n ? s : v(s)) : NaN) : NaN
                }

                function dn(e, t) {
                    var n, a, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        i = e.clone().add(r, "months");
                    return t - i < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(r + 1, "months"), a = (t - i) / (n - i)), -(r + a) || 0
                }

                function ln() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function un() {
                    if (!this.isValid()) return null;
                    var e = this.clone().utc();
                    return e.year() < 0 || e.year() > 9999 ? Q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : k(Date.prototype.toISOString) ? this.toDate().toISOString() : Q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }

                function cn() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e = "moment",
                        t = "";
                    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                    var n = "[" + e + '("]',
                        a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = t + '[")]';
                    return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r)
                }

                function _n(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var n = Q(this, e);
                    return this.localeData().postformat(n)
                }

                function mn(e, t) {
                    return this.isValid() && (y(e) && e.isValid() || vt(e).isValid()) ? Gt({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function hn(e) {
                    return this.from(vt(), e)
                }

                function pn(e, t) {
                    return this.isValid() && (y(e) && e.isValid() || vt(e).isValid()) ? Gt({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }

                function fn(e) {
                    return this.to(vt(), e)
                }

                function gn(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (t = nt(e), null != t && (this._locale = t), this)
                }

                function Mn() {
                    return this._locale
                }

                function yn(e) {
                    switch (e = F(e)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function vn(e) {
                    return void 0 === (e = F(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                }

                function Ln() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function Dn() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function Yn() {
                    return new Date(this.valueOf())
                }

                function wn() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }

                function bn() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }

                function kn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function Tn() {
                    return p(this)
                }

                function Sn() {
                    return c({}, h(this))
                }

                function En() {
                    return h(this).overflow
                }

                function xn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function Hn(e, t) {
                    B(0, [e, e.length], 0, t)
                }

                function Cn(e) {
                    return An.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function On(e) {
                    return An.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function jn() {
                    return we(this.year(), 1, 4)
                }

                function Pn() {
                    var e = this.localeData()._week;
                    return we(this.year(), e.dow, e.doy)
                }

                function An(e, t, n, a, r) {
                    var i;
                    return null == e ? Ye(this, a, r).year : (i = we(e, a, r), t > i && (t = i), Fn.call(this, e, t, n, a, r))
                }

                function Fn(e, t, n, a, r) {
                    var i = De(e, t, n, a, r),
                        s = ve(i.year, 0, i.dayOfYear);
                    return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                }

                function In(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }

                function Rn(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }

                function Vn(e, t) {
                    t[ur] = L(1e3 * ("0." + e))
                }

                function Nn() {
                    return this._isUTC ? "UTC" : ""
                }

                function Un() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Wn(e) {
                    return vt(1e3 * e)
                }

                function zn() {
                    return vt.apply(null, arguments).parseZone()
                }

                function Gn(e) {
                    return e
                }

                function Jn(e, t, n, a) {
                    var r = nt(),
                        i = _().set(a, t);
                    return r[n](i, e)
                }

                function Bn(e, t, n) {
                    if (o(e) && (t = e, e = void 0), e = e || "", null != t) return Jn(e, t, n, "month");
                    var a, r = [];
                    for (a = 0; a < 12; a++) r[a] = Jn(e, a, n, "month");
                    return r
                }

                function qn(e, t, n, a) {
                    "boolean" == typeof e ? (o(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, o(t) && (n = t, t = void 0), t = t || "");
                    var r = nt(),
                        i = e ? r._week.dow : 0;
                    if (null != n) return Jn(t, (n + i) % 7, a, "day");
                    var s, d = [];
                    for (s = 0; s < 7; s++) d[s] = Jn(t, (s + i) % 7, a, "day");
                    return d
                }

                function Kn(e, t) {
                    return Bn(e, t, "months")
                }

                function Qn(e, t) {
                    return Bn(e, t, "monthsShort")
                }

                function Zn(e, t, n) {
                    return qn(e, t, n, "weekdays")
                }

                function $n(e, t, n) {
                    return qn(e, t, n, "weekdaysShort")
                }

                function Xn(e, t, n) {
                    return qn(e, t, n, "weekdaysMin")
                }

                function ea() {
                    var e = this._data;
                    return this._milliseconds = ai(this._milliseconds), this._days = ai(this._days), this._months = ai(this._months), e.milliseconds = ai(e.milliseconds), e.seconds = ai(e.seconds), e.minutes = ai(e.minutes), e.hours = ai(e.hours), e.months = ai(e.months), e.years = ai(e.years), this
                }

                function ta(e, t, n, a) {
                    var r = Gt(t, n);
                    return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble()
                }

                function na(e, t) {
                    return ta(this, e, t, 1)
                }

                function aa(e, t) {
                    return ta(this, e, t, -1)
                }

                function ra(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function ia() {
                    var e, t, n, a, r, i = this._milliseconds,
                        s = this._days,
                        o = this._months,
                        d = this._data;
                    return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * ra(oa(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = v(i / 1e3), d.seconds = e % 60, t = v(e / 60), d.minutes = t % 60, n = v(t / 60), d.hours = n % 24, s += v(n / 24), r = v(sa(s)), o += r, s -= ra(oa(r)), a = v(o / 12), o %= 12, d.days = s, d.months = o, d.years = a, this
                }

                function sa(e) {
                    return 4800 * e / 146097
                }

                function oa(e) {
                    return 146097 * e / 4800
                }

                function da(e) {
                    if (!this.isValid()) return NaN;
                    var t, n, a = this._milliseconds;
                    if ("month" === (e = F(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + sa(t), "month" === e ? n : n / 12;
                    switch (t = this._days + Math.round(oa(this._months)), e) {
                        case "week":
                            return t / 7 + a / 6048e5;
                        case "day":
                            return t + a / 864e5;
                        case "hour":
                            return 24 * t + a / 36e5;
                        case "minute":
                            return 1440 * t + a / 6e4;
                        case "second":
                            return 86400 * t + a / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }

                function la() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * L(this._months / 12) : NaN
                }

                function ua(e) {
                    return function() {
                        return this.as(e)
                    }
                }

                function ca(e) {
                    return e = F(e), this.isValid() ? this[e + "s"]() : NaN
                }

                function _a(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                function ma() {
                    return v(this.days() / 7)
                }

                function ha(e, t, n, a, r) {
                    return r.relativeTime(t || 1, !!n, e, a)
                }

                function pa(e, t, n) {
                    var a = Gt(e).abs(),
                        r = yi(a.as("s")),
                        i = yi(a.as("m")),
                        s = yi(a.as("h")),
                        o = yi(a.as("d")),
                        d = yi(a.as("M")),
                        l = yi(a.as("y")),
                        u = r <= vi.ss && ["s", r] || r < vi.s && ["ss", r] || i <= 1 && ["m"] || i < vi.m && ["mm", i] || s <= 1 && ["h"] || s < vi.h && ["hh", s] || o <= 1 && ["d"] || o < vi.d && ["dd", o] || d <= 1 && ["M"] || d < vi.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                    return u[2] = t, u[3] = +e > 0, u[4] = n, ha.apply(null, u)
                }

                function fa(e) {
                    return void 0 === e ? yi : "function" == typeof e && (yi = e, !0)
                }

                function ga(e, t) {
                    return void 0 !== vi[e] && (void 0 === t ? vi[e] : (vi[e] = t, "s" === e && (vi.ss = t - 1), !0))
                }

                function Ma(e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t = this.localeData(),
                        n = pa(this, !e, t);
                    return e && (n = t.pastFuture(+this, n)), t.postformat(n)
                }

                function ya() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, n, a = Li(this._milliseconds) / 1e3,
                        r = Li(this._days),
                        i = Li(this._months);
                    e = v(a / 60), t = v(e / 60), a %= 60, e %= 60, n = v(i / 12), i %= 12;
                    var s = n,
                        o = i,
                        d = r,
                        l = t,
                        u = e,
                        c = a,
                        _ = this.asSeconds();
                    return _ ? (_ < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (l || u || c ? "T" : "") + (l ? l + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
                }
                var va, La;
                La = Array.prototype.some ? Array.prototype.some : function(e) {
                    for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                        if (a in t && e.call(this, t[a], a, t)) return !0;
                    return !1
                };
                var Da = La,
                    Ya = t.momentProperties = [],
                    wa = !1,
                    ba = {};
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
                var ka;
                ka = Object.keys ? Object.keys : function(e) {
                    var t, n = [];
                    for (t in e) u(e, t) && n.push(t);
                    return n
                };
                var Ta, Sa = ka,
                    Ea = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    xa = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    Ha = /\d{1,2}/,
                    Ca = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    Oa = {},
                    ja = {},
                    Pa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Aa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    Fa = {},
                    Ia = {},
                    Ra = /\d/,
                    Va = /\d\d/,
                    Na = /\d{3}/,
                    Ua = /\d{4}/,
                    Wa = /[+-]?\d{6}/,
                    za = /\d\d?/,
                    Ga = /\d\d\d\d?/,
                    Ja = /\d\d\d\d\d\d?/,
                    Ba = /\d{1,3}/,
                    qa = /\d{1,4}/,
                    Ka = /[+-]?\d{1,6}/,
                    Qa = /\d+/,
                    Za = /[+-]?\d+/,
                    $a = /Z|[+-]\d\d:?\d\d/gi,
                    Xa = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    er = /[+-]?\d+(\.\d{1,3})?/,
                    tr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                    nr = {},
                    ar = {},
                    rr = 0,
                    ir = 1,
                    sr = 2,
                    or = 3,
                    dr = 4,
                    lr = 5,
                    ur = 6,
                    cr = 7,
                    _r = 8;
                Ta = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                };
                var mr = Ta;
                B("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), B("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), B("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), A("month", "M"), R("month", 8), $("M", za), $("MM", za, Va), $("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), $("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), ne(["M", "MM"], function(e, t) {
                    t[ir] = L(e) - 1
                }), ne(["MMM", "MMMM"], function(e, t, n, a) {
                    var r = n._locale.monthsParse(e, a, n._strict);
                    null != r ? t[ir] = r : h(n).invalidMonth = e
                });
                var hr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    pr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    fr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    gr = tr,
                    Mr = tr;
                B("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? "" + e : "+" + e
                }), B(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), R("year", 1), $("Y", Za), $("YY", za, Va), $("YYYY", qa, Ua), $("YYYYY", Ka, Wa), $("YYYYYY", Ka, Wa), ne(["YYYYY", "YYYYYY"], rr), ne("YYYY", function(e, n) {
                    n[rr] = 2 === e.length ? t.parseTwoDigitYear(e) : L(e)
                }), ne("YY", function(e, n) {
                    n[rr] = t.parseTwoDigitYear(e)
                }), ne("Y", function(e, t) {
                    t[rr] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return L(e) + (L(e) > 68 ? 1900 : 2e3)
                };
                var yr = N("FullYear", !0);
                B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), R("week", 5), R("isoWeek", 5), $("w", za), $("ww", za, Va), $("W", za), $("WW", za, Va), ae(["w", "ww", "W", "WW"], function(e, t, n, a) {
                    t[a.substr(0, 1)] = L(e)
                });
                var vr = {
                    dow: 0,
                    doy: 6
                };
                B("d", 0, "do", "day"), B("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), B("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), B("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), $("d", za), $("e", za), $("E", za), $("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), $("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), $("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), ae(["dd", "ddd", "dddd"], function(e, t, n, a) {
                    var r = n._locale.weekdaysParse(e, a, n._strict);
                    null != r ? t.d = r : h(n).invalidWeekday = e
                }), ae(["d", "e", "E"], function(e, t, n, a) {
                    t[a] = L(e)
                });
                var Lr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Dr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    wr = tr,
                    br = tr,
                    kr = tr;
                B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, ze), B("k", ["kk", 2], 0, Ge), B("hmm", 0, 0, function() {
                    return "" + ze.apply(this) + J(this.minutes(), 2)
                }), B("hmmss", 0, 0, function() {
                    return "" + ze.apply(this) + J(this.minutes(), 2) + J(this.seconds(), 2)
                }), B("Hmm", 0, 0, function() {
                    return "" + this.hours() + J(this.minutes(), 2)
                }), B("Hmmss", 0, 0, function() {
                    return "" + this.hours() + J(this.minutes(), 2) + J(this.seconds(), 2)
                }), Je("a", !0), Je("A", !1), A("hour", "h"), R("hour", 13), $("a", Be), $("A", Be), $("H", za), $("h", za), $("k", za), $("HH", za, Va), $("hh", za, Va), $("kk", za, Va), $("hmm", Ga), $("hmmss", Ja), $("Hmm", Ga), $("Hmmss", Ja), ne(["H", "HH"], or), ne(["k", "kk"], function(e, t, n) {
                    var a = L(e);
                    t[or] = 24 === a ? 0 : a
                }), ne(["a", "A"], function(e, t, n) {
                    n._isPm = n._locale.isPM(e), n._meridiem = e
                }), ne(["h", "hh"], function(e, t, n) {
                    t[or] = L(e), h(n).bigHour = !0
                }), ne("hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[or] = L(e.substr(0, a)), t[dr] = L(e.substr(a)), h(n).bigHour = !0
                }), ne("hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[or] = L(e.substr(0, a)), t[dr] = L(e.substr(a, 2)), t[lr] = L(e.substr(r)), h(n).bigHour = !0
                }), ne("Hmm", function(e, t, n) {
                    var a = e.length - 2;
                    t[or] = L(e.substr(0, a)), t[dr] = L(e.substr(a))
                }), ne("Hmmss", function(e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[or] = L(e.substr(0, a)), t[dr] = L(e.substr(a, 2)), t[lr] = L(e.substr(r))
                });
                var Tr, Sr = /[ap]\.?m?\.?/i,
                    Er = N("Hours", !0),
                    xr = {
                        calendar: Ea,
                        longDateFormat: xa,
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: Ha,
                        relativeTime: Ca,
                        months: pr,
                        monthsShort: fr,
                        week: vr,
                        weekdays: Lr,
                        weekdaysMin: Yr,
                        weekdaysShort: Dr,
                        meridiemParse: Sr
                    },
                    Hr = {},
                    Cr = {},
                    Or = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    jr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Pr = /Z|[+-]\d\d(?::?\d\d)?/,
                    Ar = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    Fr = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    Ir = /^\/?Date\((\-?\d+)/i,
                    Rr = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
                t.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var Vr = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = vt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : f()
                    }),
                    Nr = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = vt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : f()
                    }),
                    Ur = function() {
                        return Date.now ? Date.now() : +new Date
                    },
                    Wr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                xt("Z", ":"), xt("ZZ", ""), $("Z", Xa), $("ZZ", Xa), ne(["Z", "ZZ"], function(e, t, n) {
                    n._useUTC = !0, n._tzm = Ht(Xa, e)
                });
                var zr = /([\+\-]|\d\d)/gi;
                t.updateOffset = function() {};
                var Gr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Jr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                Gt.fn = Tt.prototype, Gt.invalid = kt;
                var Br = Kt(1, "add"),
                    qr = Kt(-1, "subtract");
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Kr = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });
                B(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), B(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), Hn("gggg", "weekYear"), Hn("ggggg", "weekYear"), Hn("GGGG", "isoWeekYear"), Hn("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), $("G", Za), $("g", Za), $("GG", za, Va), $("gg", za, Va), $("GGGG", qa, Ua), $("gggg", qa, Ua), $("GGGGG", Ka, Wa), $("ggggg", Ka, Wa), ae(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
                    t[a.substr(0, 2)] = L(e)
                }), ae(["gg", "GG"], function(e, n, a, r) {
                    n[r] = t.parseTwoDigitYear(e)
                }), B("Q", 0, "Qo", "quarter"), A("quarter", "Q"), R("quarter", 7), $("Q", Ra), ne("Q", function(e, t) {
                    t[ir] = 3 * (L(e) - 1)
                }), B("D", ["DD", 2], "Do", "date"), A("date", "D"), R("date", 9), $("D", za), $("DD", za, Va), $("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), ne(["D", "DD"], sr), ne("Do", function(e, t) {
                    t[sr] = L(e.match(za)[0], 10)
                });
                var Qr = N("Date", !0);
                B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), R("dayOfYear", 4), $("DDD", Ba), $("DDDD", Na), ne(["DDD", "DDDD"], function(e, t, n) {
                    n._dayOfYear = L(e)
                }), B("m", ["mm", 2], 0, "minute"), A("minute", "m"), R("minute", 14), $("m", za), $("mm", za, Va), ne(["m", "mm"], dr);
                var Zr = N("Minutes", !1);
                B("s", ["ss", 2], 0, "second"), A("second", "s"), R("second", 15), $("s", za), $("ss", za, Va), ne(["s", "ss"], lr);
                var $r = N("Seconds", !1);
                B("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), B(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), B(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), B(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), B(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), B(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), B(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), A("millisecond", "ms"), R("millisecond", 16), $("S", Ba, Ra), $("SS", Ba, Va), $("SSS", Ba, Na);
                var Xr;
                for (Xr = "SSSS"; Xr.length <= 9; Xr += "S") $(Xr, Qa);
                for (Xr = "S"; Xr.length <= 9; Xr += "S") ne(Xr, Vn);
                var ei = N("Milliseconds", !1);
                B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
                var ti = M.prototype;
                ti.add = Br, ti.calendar = $t, ti.clone = Xt, ti.diff = on, ti.endOf = vn, ti.format = _n, ti.from = mn, ti.fromNow = hn, ti.to = pn, ti.toNow = fn, ti.get = z, ti.invalidAt = En, ti.isAfter = en, ti.isBefore = tn, ti.isBetween = nn, ti.isSame = an, ti.isSameOrAfter = rn, ti.isSameOrBefore = sn, ti.isValid = Tn, ti.lang = Kr, ti.locale = gn, ti.localeData = Mn, ti.max = Nr, ti.min = Vr, ti.parsingFlags = Sn, ti.set = G, ti.startOf = yn, ti.subtract = qr, ti.toArray = wn, ti.toObject = bn, ti.toDate = Yn, ti.toISOString = un, ti.inspect = cn, ti.toJSON = kn, ti.toString = ln, ti.unix = Dn, ti.valueOf = Ln, ti.creationData = xn, ti.year = yr, ti.isLeapYear = Me, ti.weekYear = Cn, ti.isoWeekYear = On, ti.quarter = ti.quarters = In, ti.month = ce, ti.daysInMonth = _e, ti.week = ti.weeks = Se, ti.isoWeek = ti.isoWeeks = Ee, ti.weeksInYear = Pn, ti.isoWeeksInYear = jn, ti.date = Qr, ti.day = ti.days = Fe, ti.weekday = Ie, ti.isoWeekday = Re, ti.dayOfYear = Rn, ti.hour = ti.hours = Er, ti.minute = ti.minutes = Zr, ti.second = ti.seconds = $r, ti.millisecond = ti.milliseconds = ei, ti.utcOffset = jt, ti.utc = At, ti.local = Ft, ti.parseZone = It, ti.hasAlignedHourOffset = Rt, ti.isDST = Vt, ti.isLocal = Ut, ti.isUtcOffset = Wt, ti.isUtc = zt, ti.isUTC = zt, ti.zoneAbbr = Nn, ti.zoneName = Un, ti.dates = w("dates accessor is deprecated. Use date instead.", Qr), ti.months = w("months accessor is deprecated. Use month instead", ce), ti.years = w("years accessor is deprecated. Use year instead", yr), ti.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Pt), ti.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Nt);
                var ni = E.prototype;
                ni.calendar = x, ni.longDateFormat = H, ni.invalidDate = C, ni.ordinal = O, ni.preparse = Gn, ni.postformat = Gn, ni.relativeTime = j, ni.pastFuture = P, ni.set = T, ni.months = se, ni.monthsShort = oe, ni.monthsParse = le, ni.monthsRegex = he, ni.monthsShortRegex = me, ni.week = be, ni.firstDayOfYear = Te, ni.firstDayOfWeek = ke, ni.weekdays = Ce, ni.weekdaysMin = je, ni.weekdaysShort = Oe, ni.weekdaysParse = Ae, ni.weekdaysRegex = Ve, ni.weekdaysShortRegex = Ne, ni.weekdaysMinRegex = Ue, ni.isPM = qe, ni.meridiem = Ke, Xe("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === L(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", Xe), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", nt);
                var ai = Math.abs,
                    ri = ua("ms"),
                    ii = ua("s"),
                    si = ua("m"),
                    oi = ua("h"),
                    di = ua("d"),
                    li = ua("w"),
                    ui = ua("M"),
                    ci = ua("y"),
                    _i = _a("milliseconds"),
                    mi = _a("seconds"),
                    hi = _a("minutes"),
                    pi = _a("hours"),
                    fi = _a("days"),
                    gi = _a("months"),
                    Mi = _a("years"),
                    yi = Math.round,
                    vi = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    Li = Math.abs,
                    Di = Tt.prototype;
                return Di.isValid = bt, Di.abs = ea, Di.add = na, Di.subtract = aa, Di.as = da, Di.asMilliseconds = ri, Di.asSeconds = ii, Di.asMinutes = si, Di.asHours = oi, Di.asDays = di, Di.asWeeks = li, Di.asMonths = ui, Di.asYears = ci, Di.valueOf = la, Di._bubble = ia, Di.get = ca, Di.milliseconds = _i, Di.seconds = mi, Di.minutes = hi, Di.hours = pi, Di.days = fi, Di.weeks = ma, Di.months = gi, Di.years = Mi, Di.humanize = Ma, Di.toISOString = ya, Di.toString = ya, Di.toJSON = ya, Di.locale = gn, Di.localeData = Mn, Di.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ya), Di.lang = Kr, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), $("x", Za), $("X", er), ne("X", function(e, t, n) {
                        n._d = new Date(1e3 * parseFloat(e, 10))
                    }), ne("x", function(e, t, n) {
                        n._d = new Date(L(e))
                    }), t.version = "2.18.1",
                    function(e) {
                        va = e
                    }(vt), t.fn = ti, t.min = Dt, t.max = Yt, t.now = Ur, t.utc = _, t.unix = Wn, t.months = Kn, t.isDate = d, t.locale = Xe, t.invalid = f, t.duration = Gt, t.isMoment = y, t.weekdays = Zn, t.parseZone = zn, t.localeData = nt, t.isDuration = St, t.monthsShort = Qn, t.weekdaysMin = Xn, t.defineLocale = et, t.updateLocale = tt, t.locales = at, t.weekdaysShort = $n, t.normalizeUnits = F, t.relativeTimeRounding = fa, t.relativeTimeThreshold = ga, t.calendarFormat = Zt, t.prototype = ti, t
            })
        }).call(t, n(424)(e))
    },
    917: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var a = n(0),
            r = n(2),
            i = n(19),
            s = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        var r, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, r), [4, this._fetch(e, t)];
                                case 1:
                                    return i = a.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return r = a.sent(), t.requestError = r, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(n) {
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
                        headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.n.store.getState(),
                        a = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                    var s = Object(i.c)(n);
                    return s && (a.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (a["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        a[e] && delete a[e]
                    }), a
                }, e
            }()
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    959: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var a = n(0),
            r = n(1),
            i = (n.n(r), n(3)),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, r.createElement(i.I, {
                        dragOver: this.state.isDraggingOver
                    }, r.createElement(i.P, {
                        display: i.H.Hide
                    }, r.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(r.Component)
    },
    970: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(c.a)(_, {
                u: e
            })
        }

        function r(e, t) {
            return Object(c.a)(m, {
                url: e,
                text: t
            })
        }

        function i(e, t) {
            return Object(c.a)(h, {
                url: e,
                title: t
            })
        }

        function s(e) {
            return Object(c.a)(p, {
                url: e
            })
        }
        var o = n(0),
            d = n(1),
            l = n(2),
            u = n(989),
            c = n(136),
            _ = "https://www.facebook.com/sharer/sharer.php",
            m = "https://www.twitter.com/share",
            h = "https://www.reddit.com/submit",
            p = "https://vk.com/share.php",
            f = n(3);
        n(1008);
        n.d(t, "b", function() {
            return g
        }), n.d(t, "a", function() {
            return M
        });
        var g;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy"
        }(g || (g = {}));
        var M = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? d.createElement("a", o.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(f._39)(n.props)), n.renderIcon()) : d.createElement("button", o.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(f._39)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(u.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return d.createElement(f.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, d.createElement(f._8, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== g.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case g.Twitter:
                            return "Twitter";
                        case g.Reddit:
                            return "Reddit";
                        case g.Facebook:
                            return "Facebook";
                        case g.VKontakte:
                            return "VKontakte";
                        case g.Copy:
                            return n.state.isCopied ? Object(l.d)("Copied", "SocialButton") : Object(l.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case g.Twitter:
                            return f._9.Twitter;
                        case g.Facebook:
                            return f._9.Facebook;
                        case g.VKontakte:
                            return f._9.VKontakte;
                        case g.Reddit:
                            return f._9.Reddit;
                        case g.Copy:
                        default:
                            return f._9.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case g.Twitter:
                            return e + "--twitter";
                        case g.Reddit:
                            return e + "--reddit";
                        case g.Facebook:
                            return e + "--facebook";
                        case g.VKontakte:
                            return e + "--vkontakte";
                        case g.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        o = e.type,
                        d = n.getUrl(),
                        l = t || "";
                    switch (o) {
                        case g.Reddit:
                            return i(d, l);
                        case g.VKontakte:
                            return s(d);
                        case g.Facebook:
                            return a(d);
                        case g.Twitter:
                            return r(d, l);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return d.createElement(f.U, {
                    className: "social-button"
                }, d.createElement(f._30, {
                    label: this.getTooltipFromType(),
                    direction: f._32.Top
                }, this.renderLink()))
            }, t
        }(d.Component)
    },
    985: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            CommunitiesAvatar: "avatar_image",
            CommunitiesCover: "cover_image",
            Default: "encoded_image",
            EventCoverImage: "event_cover_image"
        }
    },
    989: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
        t.a = a
    },
    998: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && "v" === e.charAt(0) ? e.substring(1) : e
        }
        t.a = a
    }
});
//# sourceMappingURL=pages.video-manager-181fcb09babcf5d6c8e1975348ea7cab.js.map