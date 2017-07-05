/*
 * JavaScript Load Image 1.2.1
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
/*jslint nomen: true */
/*global window, document, URL, webkitURL, Blob, File, FileReader, define */
(function(e) {
    "use strict";
    var t = function(e, n, r) {
            var i = document.createElement("img"),
                s, o;
            return i.onerror = n, i.onload = function() {
                o && (!r || !r.noRevoke) && t.revokeObjectURL(o), n(t.scale(i, r))
            }, window.Blob && e instanceof Blob || window.File && e instanceof File ? s = o = t.createObjectURL(e) : s = e, s ? (i.src = s, i) : t.readFile(e, function(e) {
                i.src = e
            })
        },
        n = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
    t.scale = function(e, t) {
        t = t || {};
        var n = document.createElement("canvas"),
            r = e.width,
            i = e.height,
            s = Math.max((t.minWidth || r) / r, (t.minHeight || i) / i);
        return s > 1 && (r = parseInt(r * s, 10), i = parseInt(i * s, 10)), s = Math.min((t.maxWidth || r) / r, (t.maxHeight || i) / i), s < 1 && (r = parseInt(r * s, 10), i = parseInt(i * s, 10)), e.getContext || t.canvas && n.getContext ? (n.width = r, n.height = i, n.getContext("2d").drawImage(e, 0, 0, r, i), n) : (e.width = r, e.height = i, e)
    }, t.createObjectURL = function(e) {
        return n ? n.createObjectURL(e) : !1
    }, t.revokeObjectURL = function(e) {
        return n ? n.revokeObjectURL(e) : !1
    }, t.readFile = function(e, t) {
        if (window.FileReader && FileReader.prototype.readAsDataURL) {
            var n = new FileReader;
            return n.onload = function(e) {
                t(e.target.result)
            }, n.readAsDataURL(e), n
        }
        return !1
    }, typeof define != "undefined" && define.amd ? define(function() {
        return t
    }) : e.loadImage = t
})(this),
function(e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(window.jQuery)
}(function(e) {
    "use strict";
    var t = 0;
    e.ajaxTransport("iframe", function(n) {
        if (n.async && (n.type === "POST" || n.type === "GET")) {
            var r, i;
            return {
                send: function(s, o) {
                    r = e('<form style="display:none;"></form>'), r.attr("accept-charset", n.formAcceptCharset), i = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", function() {
                        var t, s = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                        i.unbind("load").bind("load", function() {
                            var t;
                            try {
                                t = i.contents();
                                if (!t.length || !t[0].firstChild) throw new Error
                            } catch (n) {
                                t = undefined
                            }
                            o(200, "success", {
                                iframe: t
                            }), e('<iframe src="javascript:false;"></iframe>').appendTo(r), r.remove()
                        }), r.prop("target", i.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function(t, n) {
                            e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(r)
                        }), n.fileInput && n.fileInput.length && n.type === "POST" && (t = n.fileInput.clone(), n.fileInput.after(function(e) {
                            return t[e]
                        }), n.paramName && n.fileInput.each(function(t) {
                            e(this).prop("name", s[t] || n.paramName)
                        }), r.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), r.submit(), t && t.length && n.fileInput.each(function(n, r) {
                            var i = e(t[n]);
                            e(r).prop("name", i.prop("name")), i.replaceWith(r)
                        })
                    }), r.append(i).appendTo(document.body)
                },
                abort: function() {
                    i && i.unbind("load").prop("src", "javascript".concat(":false;")), r && r.remove()
                }
            }
        }
    }), e.ajaxSetup({
        converters: {
            "iframe text": function(t) {
                return e(t[0].body).text()
            },
            "iframe json": function(t) {
                return e.parseJSON(e(t[0].body).text())
            },
            "iframe html": function(t) {
                return e(t[0].body).html()
            },
            "iframe script": function(t) {
                return e.globalEval(e(t[0].body).text())
            }
        }
    })
}),
function(e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery", "jquery.ui.widget"], e) : e(window.jQuery)
}(function(e) {
    "use strict";
    e.support.xhrFileUpload = !!window.XMLHttpRequestUpload && !!window.FileReader, e.support.xhrFormDataFileUpload = !!window.FormData, e.widget("blueimp.fileupload", {
        options: {
            namespace: undefined,
            dropZone: e(document),
            pasteZone: e(document),
            fileInput: undefined,
            replaceFileInput: !0,
            paramName: undefined,
            singleFileUploads: !0,
            limitMultiFileUploads: undefined,
            sequentialUploads: !1,
            limitConcurrentUploads: undefined,
            forceIframeTransport: !1,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: !0,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            formData: function(e) {
                return e.serializeArray()
            },
            add: function(e, t) {
                t.submit()
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _refreshOptionsList: ["namespace", "fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _BitrateTimer: function() {
            this.timestamp = +(new Date), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(e, t, n) {
                var r = e - this.timestamp;
                if (!this.bitrate || !n || r > n) this.bitrate = (t - this.loaded) * (1e3 / r) * 8, this.loaded = t, this.timestamp = e;
                return this.bitrate
            }
        },
        _isXHRUpload: function(t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function(t) {
            var n;
            return typeof t.formData == "function" ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : t.formData ? (n = [], e.each(t.formData, function(e, t) {
                n.push({
                    name: e,
                    value: t
                })
            }), n) : []
        },
        _getTotal: function(t) {
            var n = 0;
            return e.each(t, function(e, t) {
                n += t.size || 1
            }), n
        },
        _onProgress: function(e, t) {
            if (e.lengthComputable) {
                var n = +(new Date),
                    r, i;
                if (t._time && t.progressInterval && n - t._time < t.progressInterval && e.loaded !== e.total) return;
                t._time = n, r = t.total || this._getTotal(t.files), i = parseInt(e.loaded / e.total * (t.chunkSize || r), 10) + (t.uploadedBytes || 0), this._loaded += i - (t.loaded || t.uploadedBytes || 0), t.lengthComputable = !0, t.loaded = i, t.total = r, t.bitrate = t._bitrateTimer.getBitrate(n, i, t.bitrateInterval), this._trigger("progress", e, t), this._trigger("progressall", e, {
                    lengthComputable: !0,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(n, this._loaded, t.bitrateInterval)
                })
            }
        },
        _initProgressListener: function(t) {
            var n = this,
                r = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            r.upload && (e(r.upload).bind("progress", function(e) {
                var r = e.originalEvent;
                e.lengthComputable = r.lengthComputable, e.loaded = r.loaded, e.total = r.total, n._onProgress(e, t)
            }), t.xhr = function() {
                return r
            })
        },
        _initXHRData: function(t) {
            var n, r = t.files[0],
                i = t.multipart || !e.support.xhrFileUpload,
                s = t.paramName[0];
            if (!i || t.blob) t.headers = e.extend(t.headers, {
                "X-File-Name": r.name,
                "X-File-Type": r.type,
                "X-File-Size": r.size
            }), t.blob ? i || (t.contentType = "application/octet-stream", t.data = t.blob) : (t.contentType = r.type, t.data = r);
            i && e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({
                name: s,
                value: t.blob
            }) : e.each(t.files, function(e, r) {
                n.push({
                    name: t.paramName[e] || s,
                    value: r
                })
            })) : (t.formData instanceof FormData ? n = t.formData : (n = new FormData, e.each(this._getFormData(t), function(e, t) {
                n.append(t.name, t.value)
            })), t.blob ? n.append(s, t.blob, r.name) : e.each(t.files, function(e, r) {
                r instanceof Blob && n.append(t.paramName[e] || s, r, r.name)
            })), t.data = n), t.blob = null
        },
        _initIframeSettings: function(t) {
            t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && e("<a></a>").prop("href", t.url).prop("host") !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e, "iframe")
        },
        _getParamName: function(t) {
            var n = e(t.fileInput),
                r = t.paramName;
            return r ? e.isArray(r) || (r = [r]) : (r = [], n.each(function() {
                var t = e(this),
                    n = t.prop("name") || "files[]",
                    i = (t.prop("files") || [1]).length;
                while (i) r.push(n), i -= 1
            }), r.length || (r = [n.prop("name") || "files[]"])), r
        },
        _initFormSettings: function(t) {
            if (!t.form || !t.form.length) t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")));
            t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || t.form.prop("method") || "").toUpperCase(), t.type !== "POST" && t.type !== "PUT" && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(t) {
            var n = e.extend({}, this.options, t);
            return this._initFormSettings(n), this._initDataSettings(n), n
        },
        _enhancePromise: function(e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function(t, n, r) {
            var i = e.Deferred(),
                s = i.promise();
            return n = n || this.options.context || s, t === !0 ? i.resolveWith(n, r) : t === !1 && i.rejectWith(n, r), s.abort = i.promise, this._enhancePromise(s)
        },
        _chunkedUpload: function(t, n) {
            var r = this,
                i = t.files[0],
                s = i.size,
                o = t.uploadedBytes = t.uploadedBytes || 0,
                u = t.maxChunkSize || s,
                a = i.slice || i.webkitSlice || i.mozSlice,
                f, l, c, h;
            return !(this._isXHRUpload(t) && a && (o || u < s)) || t.data ? !1 : n ? !0 : o >= s ? (i.error = "Uploaded bytes exceed file size", this._getXHRPromise(!1, t.context, [null, "error", i.error])) : (l = Math.ceil((s - o) / u), f = function(n) {
                return n ? f(n -= 1).pipe(function() {
                    var s = e.extend({}, t);
                    return s.blob = a.call(i, o + n * u, o + (n + 1) * u), s.chunkIndex = n, s.chunksNumber = l, s.chunkSize = s.blob.size, r._initXHRData(s), r._initProgressListener(s), c = (e.ajax(s) || r._getXHRPromise(!1, s.context)).done(function() {
                        s.loaded || r._onProgress(e.Event("progress", {
                            lengthComputable: !0,
                            loaded: s.chunkSize,
                            total: s.chunkSize
                        }), s), t.uploadedBytes = s.uploadedBytes += s.chunkSize
                    }), c
                }) : r._getXHRPromise(!0, t.context)
            }, h = f(l), h.abort = function() {
                return c.abort()
            }, this._enhancePromise(h))
        },
        _beforeSend: function(e, t) {
            this._active === 0 && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer), this._active += 1, this._loaded += t.uploadedBytes || 0, this._total += this._getTotal(t.files)
        },
        _onDone: function(t, n, r, i) {
            this._isXHRUpload(i) || this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: 1,
                total: 1
            }), i), i.result = t, i.textStatus = n, i.jqXHR = r, this._trigger("done", null, i)
        },
        _onFail: function(e, t, n, r) {
            r.jqXHR = e, r.textStatus = t, r.errorThrown = n, this._trigger("fail", null, r), r.recalculateProgress && (this._loaded -= r.loaded || r.uploadedBytes || 0, this._total -= r.total || this._getTotal(r.files))
        },
        _onAlways: function(e, t, n, r) {
            this._active -= 1, r.textStatus = t, n && n.always ? (r.jqXHR = n, r.result = e) : (r.jqXHR = e, r.errorThrown = n), this._trigger("always", null, r), this._active === 0 && (this._trigger("stop"), this._loaded = this._total = 0, this._bitrateTimer = null)
        },
        _onSend: function(t, n) {
            var r = this,
                i, s, o, u = r._getAJAXSettings(n),
                a = function(n, s) {
                    return r._sending += 1, u._bitrateTimer = new r._BitrateTimer, i = i || (n !== !1 && r._trigger("send", t, u) !== !1 && (r._chunkedUpload(u) || e.ajax(u)) || r._getXHRPromise(!1, u.context, s)).done(function(e, t, n) {
                        r._onDone(e, t, n, u)
                    }).fail(function(e, t, n) {
                        r._onFail(e, t, n, u)
                    }).always(function(e, t, n) {
                        r._sending -= 1, r._onAlways(e, t, n, u);
                        if (u.limitConcurrentUploads && u.limitConcurrentUploads > r._sending) {
                            var i = r._slots.shift(),
                                s;
                            while (i) {
                                s = i.state ? i.state() === "pending" : !i.isRejected();
                                if (s) {
                                    i.resolve();
                                    break
                                }
                                i = r._slots.shift()
                            }
                        }
                    }), i
                };
            return this._beforeSend(t, u), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (s = e.Deferred(), this._slots.push(s), o = s.pipe(a)) : o = this._sequence = this._sequence.pipe(a, a), o.abort = function() {
                var e = [undefined, "abort", "abort"];
                return i ? i.abort() : (s && s.rejectWith(o, e), a(!1, e))
            }, this._enhancePromise(o)) : a()
        },
        _onAdd: function(t, n) {
            var r = this,
                i = !0,
                s = e.extend({}, this.options, n),
                o = s.limitMultiFileUploads,
                u = this._getParamName(s),
                a, f, l, c;
            if (!s.singleFileUploads && !o || !this._isXHRUpload(s)) l = [n.files], a = [u];
            else if (!s.singleFileUploads && o) {
                l = [], a = [];
                for (c = 0; c < n.files.length; c += o) l.push(n.files.slice(c, c + o)), f = u.slice(c, c + o), f.length || (f = u), a.push(f)
            } else a = u;
            return n.originalFiles = n.files, e.each(l || n.files, function(s, o) {
                var u = e.extend({}, n);
                return u.files = l ? o : [o], u.paramName = a[s], u.submit = function() {
                    return u.jqXHR = this.jqXHR = r._trigger("submit", t, this) !== !1 && r._onSend(t, this), this.jqXHR
                }, i = r._trigger("add", t, u)
            }), i
        },
        _replaceFileInput: function(t) {
            var n = t.clone(!0);
            e("<form></form>").append(n)[0].reset(), t.after(n).detach(), e.cleanData(t.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(e, r) {
                return r === t[0] ? n[0] : r
            }), t[0] === this.element[0] && (this.element = n)
        },
        _handleFileTreeEntry: function(t, n) {
            var r = this,
                i = e.Deferred(),
                s = function(e) {
                    e && !e.entry && (e.entry = t), i.resolve([e])
                },
                o;
            return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, i.resolve(t._file)) : t.file(function(e) {
                e.relativePath = n, i.resolve(e)
            }, s) : t.isDirectory ? (o = t.createReader(), o.readEntries(function(e) {
                r._handleFileTreeEntries(e, n + t.name + "/").done(function(e) {
                    i.resolve(e)
                }).fail(s)
            }, s)) : i.resolve([]), i.promise()
        },
        _handleFileTreeEntries: function(t, n) {
            var r = this;
            return e.when.apply(e, e.map(t, function(e) {
                return r._handleFileTreeEntry(e, n)
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(t) {
            t = t || {};
            var n = t.items;
            return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(e.map(n, function(e) {
                var t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t._file = e.getAsFile(), t) : e.getAsEntry()
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function(t) {
            t = e(t);
            var n = t.prop("webkitEntries") || t.prop("entries"),
                r, i;
            if (n && n.length) return this._handleFileTreeEntries(n);
            r = e.makeArray(t.prop("files"));
            if (!r.length) {
                i = t.prop("value");
                if (!i) return e.Deferred().resolve([]).promise();
                r = [{
                    name: i.replace(/^.*\\/, "")
                }]
            }
            return e.Deferred().resolve(r).promise()
        },
        _getFileInputFiles: function(t) {
            return t instanceof e && t.length !== 1 ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(t)
        },
        _onChange: function(t) {
            var n = t.data.fileupload,
                r = {
                    fileInput: e(t.target),
                    form: e(t.target.form)
                };
            n._getFileInputFiles(r.fileInput).always(function(e) {
                r.files = e, n.options.replaceFileInput && n._replaceFileInput(r.fileInput), n._trigger("change", t, r) !== !1 && n._onAdd(t, r)
            })
        },
        _onPaste: function(t) {
            var n = t.data.fileupload,
                r = t.originalEvent.clipboardData,
                i = r && r.items || [],
                s = {
                    files: []
                };
            e.each(i, function(e, t) {
                var n = t.getAsFile && t.getAsFile();
                n && s.files.push(n)
            });
            if (n._trigger("paste", t, s) === !1 || n._onAdd(t, s) === !1) return !1
        },
        _onDrop: function(e) {
            e.preventDefault();
            var t = e.data.fileupload,
                n = e.dataTransfer = e.originalEvent.dataTransfer,
                r = {};
            t._getDroppedFiles(n).always(function(n) {
                r.files = n, t._trigger("drop", e, r) !== !1 && t._onAdd(e, r)
            })
        },
        _onDragOver: function(e) {
            var t = e.data.fileupload,
                n = e.dataTransfer = e.originalEvent.dataTransfer;
            if (t._trigger("dragover", e) === !1) return !1;
            n && (n.dropEffect = "copy"), e.preventDefault()
        },
        _initEventHandlers: function() {
            var e = this.options.namespace;
            this._isXHRUpload(this.options) && (this.options.dropZone.bind("dragover." + e, {
                fileupload: this
            }, this._onDragOver).bind("drop." + e, {
                fileupload: this
            }, this._onDrop), this.options.pasteZone.bind("paste." + e, {
                fileupload: this
            }, this._onPaste)), this.options.fileInput.bind("change." + e, {
                fileupload: this
            }, this._onChange)
        },
        _destroyEventHandlers: function() {
            var e = this.options.namespace;
            this.options.dropZone.unbind("dragover." + e, this._onDragOver).unbind("drop." + e, this._onDrop), this.options.pasteZone.unbind("paste." + e, this._onPaste), this.options.fileInput.unbind("change." + e, this._onChange)
        },
        _setOption: function(t, n) {
            var r = e.inArray(t, this._refreshOptionsList) !== -1;
            r && this._destroyEventHandlers(), e.Widget.prototype._setOption.call(this, t, n), r && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var t = this.options;
            t.fileInput === undefined ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _create: function() {
            var t = this.options;
            e.extend(t, e(this.element[0].cloneNode(!1)).data()), t.namespace = t.namespace || this.widgetName, this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = this._loaded = this._total = 0, this._initEventHandlers()
        },
        destroy: function() {
            this._destroyEventHandlers(), e.Widget.prototype.destroy.call(this)
        },
        enable: function() {
            var t = !1;
            this.options.disabled && (t = !0), e.Widget.prototype.enable.call(this), t && this._initEventHandlers()
        },
        disable: function() {
            this.options.disabled || this._destroyEventHandlers(), e.Widget.prototype.disable.call(this)
        },
        add: function(t) {
            var n = this;
            if (!t || this.options.disabled) return;
            t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                t.files = e, n._onAdd(null, t)
            }) : (t.files = e.makeArray(t.files), this._onAdd(null, t))
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var n = this,
                        r = e.Deferred(),
                        i = r.promise(),
                        s, o;
                    return i.abort = function() {
                        return o = !0, s ? s.abort() : (r.reject(null, "abort", "abort"), i)
                    }, this._getFileInputFiles(t.fileInput).always(function(e) {
                        if (o) return;
                        t.files = e, s = n._onSend(null, t).then(function(e, t, n) {
                            r.resolve(e, t, n)
                        }, function(e, t, n) {
                            r.reject(e, t, n)
                        })
                    }), this._enhancePromise(i)
                }
                t.files = e.makeArray(t.files);
                if (t.files.length) return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}),
function(e) {
    e.fn.twitchFileUpload = function() {
        var t = {
                xhr: Twitch.api._createXHR.bind(Twitch.api),
                crossDomain: !1,
                beforeSend: function(e) {
                    e.setRequestHeader("Twitch-Api-Token", Twitch.storage.legacy.get("api_token")), e.setRequestHeader("Client-ID", Twitch.api.config.clientID)
                }
            },
            n = e(this),
            r = Array.prototype.slice.call(arguments);
        return r[r.length - 1] = e.extend(t, r[r.length - 1]), n.fileupload.apply(n, r)
    }
}(jQuery),
function(e) {
    e.Jcrop = function(t, n) {
        function u(e) {
            return e + "px"
        }

        function a(e) {
            return r.baseClass + "-" + e
        }

        function f() {
            return e.fx.step.hasOwnProperty("backgroundColor")
        }

        function l(t) {
            var n = e(t).offset();
            return [n.left, n.top]
        }

        function c(e) {
            return [e.pageX - i[0], e.pageY - i[1]]
        }

        function h(t) {
            typeof t != "object" && (t = {}), t.aspectRatio && (t.minAspectRatio = t.aspectRatio, t.maxAspectRatio = t.aspectRatio, delete t.aspectRatio), r = e.extend(r, t), e.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(e, t) {
                typeof r[t] != "function" && (r[t] = function() {})
            })
        }

        function p(e, t) {
            i = l(O), rt.setCursor(e === "move" ? e : e + "-resize");
            if (e === "move") return rt.activateHandlers(v(t), E);
            var n = et.getFixed(),
                r = m(e),
                s = et.getCorner(m(r));
            et.setPressed(et.getCorner(r)), et.setCurrent(s), rt.activateHandlers(d(e, n), E)
        }

        function d(e, t) {
            return function(n) {
                if (!r.minAspectRatio || !r.maxAspectRatio) switch (e) {
                    case "e":
                        n[1] = t.y2;
                        break;
                    case "w":
                        n[1] = t.y2;
                        break;
                    case "n":
                        n[0] = t.x2;
                        break;
                    case "s":
                        n[0] = t.x2
                } else switch (e) {
                    case "e":
                        n[1] = t.y + 1;
                        break;
                    case "w":
                        n[1] = t.y + 1;
                        break;
                    case "n":
                        n[0] = t.x + 1;
                        break;
                    case "s":
                        n[0] = t.x + 1
                }
                et.setCurrent(n), nt.update()
            }
        }

        function v(e) {
            var t = e;
            return it.watchKeys(),
                function(e) {
                    et.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, nt.update()
                }
        }

        function m(e) {
            switch (e) {
                case "n":
                    return "sw";
                case "s":
                    return "nw";
                case "e":
                    return "nw";
                case "w":
                    return "ne";
                case "ne":
                    return "sw";
                case "nw":
                    return "se";
                case "se":
                    return "nw";
                case "sw":
                    return "ne"
            }
        }

        function g(e) {
            return function(t) {
                return r.disabled ? !1 : e === "move" && !r.allowMove ? !1 : (i = l(O), Q = !0, p(e, c(t)), t.stopPropagation(), t.preventDefault(), !1)
            }
        }

        function b(e, t, n) {
            var r = e.width(),
                i = e.height();
            r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), V = e.width() / r, J = e.height() / i, e.width(r).height(i)
        }

        function w(e) {
            return {
                x: e.x * V,
                y: e.y * J,
                x2: e.x2 * V,
                y2: e.y2 * J,
                w: e.w * V,
                h: e.h * J
            }
        }

        function E(e) {
            var t = et.getFixed();
            t.w > r.minSelect[0] && t.h > r.minSelect[1] ? (nt.enableHandles(), nt.done()) : nt.release(), rt.setCursor(r.allowSelect ? "crosshair" : "default")
        }

        function S(e) {
            if (r.disabled) return !1;
            if (!r.allowSelect) return !1;
            Q = !0, i = l(O), nt.disableHandles(), rt.setCursor("crosshair");
            var t = c(e);
            return et.setPressed(t), nt.update(), rt.activateHandlers(T, E), it.watchKeys(), e.stopPropagation(), e.preventDefault(), !1
        }

        function T(e) {
            et.setCurrent(e), nt.update()
        }

        function N() {
            var t = e("<div></div>").addClass(a("tracker"));
            return e.browser.msie && t.css({
                opacity: 0,
                backgroundColor: "white"
            }), t
        }

        function st(e) {
            D.removeClass().addClass(a("holder")).addClass(e)
        }

        function ot(e, t) {
            function w() {
                window.setTimeout(E, c)
            }
            var n = e[0] / V,
                i = e[1] / J,
                s = e[2] / V,
                o = e[3] / J;
            if (G) return;
            var u = et.flipCoords(n, i, s, o),
                a = et.getFixed(),
                f = [a.x, a.y, a.x2, a.y2],
                l = f,
                c = r.animationDelay,
                h = u[0] - f[0],
                p = u[1] - f[1],
                d = u[2] - f[2],
                v = u[3] - f[3],
                m = 0,
                g = r.swingSpeed;
            x = l[0], y = l[1], s = l[2], o = l[3], nt.animMode(!0);
            var b, E = function() {
                return function() {
                    m += (100 - m) / g, l[0] = x + m / 100 * h, l[1] = y + m / 100 * p, l[2] = s + m / 100 * d, l[3] = o + m / 100 * v, m >= 99.8 && (m = 100), m < 100 ? (at(l), w()) : (nt.done(), typeof t == "function" && t.call(bt))
                }
            }();
            w()
        }

        function ut(e) {
            at([e[0] / V, e[1] / J, e[2] / V, e[3] / J]), r.onSelect.call(bt, w(et.getFixed())), nt.enableHandles()
        }

        function at(e) {
            et.setPressed([e[0], e[1]]), et.setCurrent([e[2], e[3]]), nt.update()
        }

        function ft() {
            return w(et.getFixed())
        }

        function lt() {
            return et.getFixed()
        }

        function ct(e) {
            h(e), yt()
        }

        function ht() {
            r.disabled = !0, nt.disableHandles(), nt.setCursor("default"), rt.setCursor("default")
        }

        function pt() {
            r.disabled = !1, yt()
        }

        function dt() {
            nt.done(), rt.activateHandlers(null, null)
        }

        function vt() {
            D.remove(), k.show(), e(t).removeData("Jcrop")
        }

        function mt(e, t) {
            nt.release(), ht();
            var n = new Image;
            n.onload = function() {
                var i = n.width,
                    s = n.height,
                    o = r.boxWidth,
                    u = r.boxHeight;
                O.width(i).height(s), O.attr("src", e), P.attr("src", e), b(O, o, u), M = O.width(), _ = O.height(), P.width(M).height(_), I.width(M + F * 2).height(_ + F * 2), D.width(M).height(_), tt.resize(M, _), pt(), typeof t == "function" && t.call(bt)
            }, n.src = e
        }

        function gt(e, t, n) {
            var i = t || r.bgColor;
            r.bgFade && f() && r.fadeTime && !n ? e.animate({
                backgroundColor: i
            }, {
                queue: !1,
                duration: r.fadeTime
            }) : e.css("backgroundColor", i)
        }

        function yt(e) {
            r.allowResize ? e ? nt.enableOnly() : nt.enableHandles() : nt.disableHandles(), rt.setCursor(r.allowSelect ? "crosshair" : "default"), nt.setCursor(r.allowMove ? "move" : "default"), r.hasOwnProperty("trueSize") && (V = r.trueSize[0] / M, J = r.trueSize[1] / _), r.hasOwnProperty("setSelect") && (ut(r.setSelect), nt.done(), delete r.setSelect), tt.refresh(), r.bgColor != q && (gt(r.shade ? tt.getShades() : D, r.shade ? r.shadeColor || r.bgColor : r.bgColor), q = r.bgColor), R != r.bgOpacity && (R = r.bgOpacity, r.shade ? tt.refresh() : nt.setBgOpacity(R)), U = r.maxSize[0] || 0, z = r.maxSize[1] || 0, W = r.minSize[0] || 0, X = r.minSize[1] || 0, r.hasOwnProperty("outerImage") && (O.attr("src", r.outerImage), delete r.outerImage), nt.refresh()
        }
        var r = e.extend({}, e.Jcrop.defaults),
            i, s, o = !1;
        e.browser.msie && e.browser.version.split(".")[0] === "6" && (o = !0), typeof t != "object" && (t = e(t)[0]), typeof n != "object" && (n = {}), h(n);
        var C = {
                border: "none",
                visibility: "visible",
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0
            },
            k = e(t),
            L = !0;
        if (t.tagName == "IMG") {
            if (k[0].width != 0 && k[0].height != 0) k.width(k[0].width), k.height(k[0].height);
            else {
                var A = new Image;
                A.src = k[0].src, k.width(A.width), k.height(A.height)
            }
            var O = k.clone().removeAttr("id").css(C).show();
            O.width(k.width()), O.height(k.height()), k.after(O).hide()
        } else O = k.css(C).show(), L = !1, r.shade === null && (r.shade = !0);
        b(O, r.boxWidth, r.boxHeight);
        var M = O.width(),
            _ = O.height(),
            D = e("<div />").width(M).height(_).addClass(a("holder")).css({
                position: "relative",
                backgroundColor: r.bgColor
            }).insertAfter(k).append(O);
        r.addClass && D.addClass(r.addClass);
        var P = e("<div />"),
            H = e("<div />").width("100%").height("100%").css({
                zIndex: 310,
                position: "absolute",
                overflow: "hidden"
            }),
            B = e("<div />").width("100%").height("100%").css("zIndex", 320),
            j = e("<div />").css({
                position: "absolute",
                zIndex: 600
            }).dblclick(function() {
                var e = et.getFixed();
                r.onDblClick.call(bt, e)
            }).insertBefore(O).append(H, B);
        L && (P = e("<img />").attr("src", O.attr("src")).css(C).width(M).height(_), H.append(P)), o && j.css({
            overflowY: "hidden"
        });
        var F = r.boundary,
            I = N().width(M + F * 2).height(_ + F * 2).css({
                position: "absolute",
                top: u(-F),
                left: u(-F),
                zIndex: 290
            }).mousedown(S),
            q = r.bgColor,
            R = r.bgOpacity,
            U, z, W, X, V, J, K = !0,
            Q, G, Y;
        i = l(O);
        var Z = function() {
                function e() {
                    var e = {},
                        t = ["touchstart", "touchmove", "touchend"],
                        n = document.createElement("div"),
                        r;
                    try {
                        for (r = 0; r < t.length; r++) {
                            var i = t[r];
                            i = "on" + i;
                            var s = i in n;
                            s || (n.setAttribute(i, "return;"), s = typeof n[i] == "function"), e[t[r]] = s
                        }
                        return e.touchstart && e.touchend && e.touchmove
                    } catch (o) {
                        return !1
                    }
                }

                function t() {
                    return r.touchSupport === !0 || r.touchSupport === !1 ? r.touchSupport : e()
                }
                return {
                    createDragger: function(e) {
                        return function(t) {
                            return t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, r.disabled ? !1 : e === "move" && !r.allowMove ? !1 : (Q = !0, p(e, c(t)), t.stopPropagation(), t.preventDefault(), !1)
                        }
                    },
                    newSelection: function(e) {
                        return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, S(e)
                    },
                    isSupported: e,
                    support: t()
                }
            }(),
            et = function() {
                function u(r) {
                    r = p(r), n = e = r[0], i = t = r[1]
                }

                function a(e) {
                    e = p(e), s = e[0] - n, o = e[1] - i, n = e[0], i = e[1]
                }

                function f() {
                    return [s, o]
                }

                function l(r) {
                    var s = r[0],
                        o = r[1];
                    0 > e + s && (s -= s + e), 0 > t + o && (o -= o + t), _ < i + o && (o += _ - (i + o)), M < n + s && (s += M - (n + s)), e += s, n += s, t += o, i += o
                }

                function c(e) {
                    var t = h();
                    switch (e) {
                        case "ne":
                            return [t.x2, t.y];
                        case "nw":
                            return [t.x, t.y];
                        case "se":
                            return [t.x2, t.y2];
                        case "sw":
                            return [t.x, t.y2]
                    }
                }

                function h() {
                    if (!r.minAspectRatio && !r.maxAspectRatio) return v();
                    var s = r.minAspectRatio,
                        o = r.maxAspectRatio,
                        u = r.minSize[0] / V,
                        a = r.maxSize[0] / V,
                        f = r.maxSize[1] / J,
                        l = n - e,
                        c = i - t,
                        h = Math.abs(l),
                        p = Math.abs(c),
                        g = h / p,
                        y, b, w, E, S;
                    a === 0 && (a = M * 10), f === 0 && (f = _ * 10);
                    if (s && g < s) S = s, b = i, w = p * S, y = l < 0 ? e - w : w + e, y < 0 ? y = 0 : y > M && (y = M), E = Math.abs((y - e) / S), b = c < 0 ? t - E : E + t;
                    else {
                        if (!(o && g > o)) return v();
                        S = o, y = n, E = h / S, b = c < 0 ? t - E : t + E, b < 0 ? b = 0 : b > _ && (b = _), w = Math.abs((b - t) * S), y = l < 0 ? e - w : w + e
                    }
                    return y > e ? (y - e < u ? y = e + u : y - e > a && (y = e + a), b > t ? b = t + (y - e) / S : b = t - (y - e) / S) : y < e && (e - y < u ? y = e - u : e - y > a && (y = e - a), b > t ? b = t + (e - y) / S : b = t - (e - y) / S), y < 0 ? (e -= y, y = 0) : y > M && (e -= y - M, y = M), b < 0 ? (t -= b, b = 0) : b > _ && (t -= b - _, b = _), m(d(e, t, y, b))
                }

                function p(e) {
                    return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > M && (e[0] = M), e[1] > _ && (e[1] = _), [e[0], e[1]]
                }

                function d(e, t, n, r) {
                    var i = e,
                        s = n,
                        o = t,
                        u = r;
                    return n < e && (i = n, s = e), r < t && (o = r, u = t), [i, o, s, u]
                }

                function v() {
                    var r = n - e,
                        s = i - t,
                        o;
                    return U && Math.abs(r) > U && (n = r > 0 ? e + U : e - U), z && Math.abs(s) > z && (i = s > 0 ? t + z : t - z), X / J && Math.abs(s) < X / J && (i = s > 0 ? t + X / J : t - X / J), W / V && Math.abs(r) < W / V && (n = r > 0 ? e + W / V : e - W / V), e < 0 && (n -= e, e -= e), t < 0 && (i -= t, t -= t), n < 0 && (e -= n, n -= n), i < 0 && (t -= i, i -= i), n > M && (o = n - M, e -= o, n -= o), i > _ && (o = i - _, t -= o, i -= o), e > M && (o = e - _, i -= o, t -= o), t > _ && (o = t - _, i -= o, t -= o), m(d(e, t, n, i))
                }

                function m(e) {
                    return {
                        x: e[0],
                        y: e[1],
                        x2: e[2],
                        y2: e[3],
                        w: e[2] - e[0],
                        h: e[3] - e[1]
                    }
                }
                var e = 0,
                    t = 0,
                    n = 0,
                    i = 0,
                    s, o;
                return {
                    flipCoords: d,
                    setPressed: u,
                    setCurrent: a,
                    getOffset: f,
                    moveOffset: l,
                    getCorner: c,
                    getFixed: h
                }
            }(),
            tt = function() {
                function s(e, t) {
                    i.left.css({
                        height: u(t)
                    }), i.right.css({
                        height: u(t)
                    })
                }

                function o() {
                    return a(et.getFixed())
                }

                function a(e) {
                    i.top.css({
                        left: u(e.x),
                        width: u(e.w),
                        height: u(e.y)
                    }), i.bottom.css({
                        top: u(e.y2),
                        left: u(e.x),
                        width: u(e.w),
                        height: u(_ - e.y2)
                    }), i.right.css({
                        left: u(e.x2),
                        width: u(M - e.x2)
                    }), i.left.css({
                        width: u(e.x)
                    })
                }

                function f() {
                    return e("<div />").css({
                        position: "absolute",
                        backgroundColor: r.shadeColor || r.bgColor
                    }).appendTo(n)
                }

                function l() {
                    t || (t = !0, n.insertBefore(O), o(), nt.setBgOpacity(1, 0, 1), P.hide(), c(r.shadeColor || r.bgColor, 1), nt.isAwake() ? p(r.bgOpacity, 1) : p(1, 1))
                }

                function c(e, t) {
                    gt(v(), e, t)
                }

                function h() {
                    t && (n.remove(), P.show(), t = !1, nt.isAwake() ? nt.setBgOpacity(r.bgOpacity, 1, 1) : (nt.setBgOpacity(1, 1, 1), nt.disableHandles()), gt(D, 0, 1))
                }

                function p(e, i) {
                    t && (r.bgFade && !i ? n.animate({
                        opacity: 1 - e
                    }, {
                        queue: !1,
                        duration: r.fadeTime
                    }) : n.css({
                        opacity: 1 - e
                    }))
                }

                function d() {
                    r.shade ? l() : h(), nt.isAwake() && p(r.bgOpacity)
                }

                function v() {
                    return n.children()
                }
                var t = !1,
                    n = e("<div />").css({
                        position: "absolute",
                        zIndex: 240,
                        opacity: 0
                    }),
                    i = {
                        top: f(),
                        left: f().height(_),
                        right: f().height(_),
                        bottom: f()
                    };
                return {
                    update: o,
                    updateRaw: a,
                    getShades: v,
                    setBgColor: c,
                    enable: l,
                    disable: h,
                    resize: s,
                    refresh: d,
                    opacity: p
                }
            }(),
            nt = function() {
                function l(t) {
                    var n = e("<div />").css({
                        position: "absolute",
                        opacity: r.borderOpacity
                    }).addClass(a(t));
                    return H.append(n), n
                }

                function c(t, n) {
                    var r = e("<div />").mousedown(g(t)).css({
                        cursor: t + "-resize",
                        position: "absolute",
                        zIndex: n
                    }).addClass("ord-" + t);
                    return Z.support && r.bind("touchstart.jcrop", Z.createDragger(t)), B.append(r), r
                }

                function h(e) {
                    var t = r.handleSize;
                    return c(e, n++).css({
                        opacity: r.handleOpacity
                    }).width(t).height(t).addClass(a("handle"))
                }

                function p(e) {
                    return c(e, n++).addClass("jcrop-dragbar")
                }

                function d(e) {
                    var t;
                    for (t = 0; t < e.length; t++) o[e[t]] = p(e[t])
                }

                function v(e) {
                    var t, n;
                    for (n = 0; n < e.length; n++) {
                        switch (e[n]) {
                            case "n":
                                t = "hline";
                                break;
                            case "s":
                                t = "hline bottom";
                                break;
                            case "e":
                                t = "vline right";
                                break;
                            case "w":
                                t = "vline"
                        }
                        i[e[n]] = l(t)
                    }
                }

                function m(e) {
                    var t;
                    for (t = 0; t < e.length; t++) s[e[t]] = h(e[t])
                }

                function y(e, t) {
                    r.shade || P.css({
                        top: u(-t),
                        left: u(-e)
                    }), j.css({
                        top: u(t),
                        left: u(e)
                    })
                }

                function b(e, t) {
                    j.width(e).height(t)
                }

                function E() {
                    var e = et.getFixed();
                    et.setPressed([e.x, e.y]), et.setCurrent([e.x2, e.y2]), S()
                }

                function S(e) {
                    if (t) return x(e)
                }

                function x(e) {
                    var n = et.getFixed();
                    b(n.w, n.h), y(n.x, n.y), r.shade && tt.updateRaw(n), t || C(), e ? r.onSelect.call(bt, w(n)) : r.onChange.call(bt, w(n))
                }

                function T(e, n, i) {
                    if (!t && !n) return;
                    r.bgFade && !i ? O.animate({
                        opacity: e
                    }, {
                        queue: !1,
                        duration: r.fadeTime
                    }) : O.css("opacity", e)
                }

                function C() {
                    j.show(), r.shade ? tt.opacity(R) : T(R, !0), t = !0
                }

                function k() {
                    M(), j.hide(), r.shade ? tt.opacity(1) : T(1), t = !1, r.onRelease.call(bt)
                }

                function L() {
                    f && B.show()
                }

                function A() {
                    f = !0;
                    if (r.allowResize) return B.show(), !0
                }

                function M() {
                    f = !1, B.hide()
                }

                function _(e) {
                    G === e ? M() : A()
                }

                function D() {
                    _(!1), E()
                }
                var t, n = 370,
                    i = {},
                    s = {},
                    o = {},
                    f = !1;
                r.dragEdges && e.isArray(r.createDragbars) && d(r.createDragbars), e.isArray(r.createHandles) && m(r.createHandles), r.drawBorders && e.isArray(r.createBorders) && v(r.createBorders), e(document).bind("touchstart.jcrop-ios", function(t) {
                    e(t.currentTarget).hasClass("jcrop-tracker") && t.stopPropagation()
                });
                var F = N().mousedown(g("move")).css({
                    cursor: "move",
                    position: "absolute",
                    zIndex: 360
                });
                return Z.support && F.bind("touchstart.jcrop", Z.createDragger("move")), H.append(F), M(), {
                    updateVisible: S,
                    update: x,
                    release: k,
                    refresh: E,
                    isAwake: function() {
                        return t
                    },
                    setCursor: function(e) {
                        F.css("cursor", e)
                    },
                    enableHandles: A,
                    enableOnly: function() {
                        f = !0
                    },
                    showHandles: L,
                    disableHandles: M,
                    animMode: _,
                    setBgOpacity: T,
                    done: D
                }
            }(),
            rt = function() {
                function s() {
                    I.css({
                        zIndex: 450
                    }), Z.support && e(document).bind("touchmove.jcrop", l).bind("touchend.jcrop", h), i && e(document).bind("mousemove.jcrop", u).bind("mouseup.jcrop", a)
                }

                function o() {
                    I.css({
                        zIndex: 290
                    }), e(document).unbind(".jcrop")
                }

                function u(e) {
                    return t(c(e)), !1
                }

                function a(e) {
                    return e.preventDefault(), e.stopPropagation(), Q && (Q = !1, n(c(e)), nt.isAwake() && r.onSelect.call(bt, w(et.getFixed())), o(), t = function() {}, n = function() {}), !1
                }

                function f(e, r) {
                    return Q = !0, t = e, n = r, s(), !1
                }

                function l(e) {
                    return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, u(e)
                }

                function h(e) {
                    return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, a(e)
                }

                function p(e) {
                    I.css("cursor", e)
                }
                var t = function() {},
                    n = function() {},
                    i = r.trackDocument;
                return i || I.mousemove(u).mouseup(a).mouseout(a), O.before(I), {
                    activateHandlers: f,
                    setCursor: p
                }
            }(),
            it = function() {
                function i() {
                    r.keySupport && (t.show(), t.focus())
                }

                function s(e) {
                    t.hide()
                }

                function u(e, t, n) {
                    r.allowMove && (et.moveOffset([t, n]), nt.updateVisible(!0)), e.preventDefault(), e.stopPropagation()
                }

                function a(e) {
                    if (e.ctrlKey || e.metaKey) return !0;
                    Y = e.shiftKey ? !0 : !1;
                    var t = Y ? 10 : 1;
                    switch (e.keyCode) {
                        case 37:
                            u(e, -t, 0);
                            break;
                        case 39:
                            u(e, t, 0);
                            break;
                        case 38:
                            u(e, 0, -t);
                            break;
                        case 40:
                            u(e, 0, t);
                            break;
                        case 27:
                            r.allowSelect && nt.release();
                            break;
                        case 9:
                            return !0
                    }
                    return !1
                }
                var t = e('<input type="radio" />').css({
                        position: "fixed",
                        left: "-120px",
                        width: "12px"
                    }),
                    n = e("<div />").css({
                        position: "absolute",
                        overflow: "hidden"
                    }).append(t);
                return r.keySupport && (t.keydown(a).blur(s), o || !r.fixedSupport ? (t.css({
                    position: "absolute",
                    left: "-20px"
                }), n.append(t).insertBefore(O)) : t.insertBefore(O)), {
                    watchKeys: i
                }
            }();
        Z.support && I.bind("touchstart.jcrop", Z.newSelection), B.hide(), yt(!0);
        var bt = {
            setImage: mt,
            animateTo: ot,
            setSelect: ut,
            setOptions: ct,
            tellSelect: ft,
            tellScaled: lt,
            setClass: st,
            disable: ht,
            enable: pt,
            cancel: dt,
            release: nt.release,
            destroy: vt,
            focus: it.watchKeys,
            getBounds: function() {
                return [M * V, _ * J]
            },
            getWidgetSize: function() {
                return [M, _]
            },
            getScaleFactor: function() {
                return [V, J]
            },
            getOptions: function() {
                return r
            },
            ui: {
                holder: D,
                selection: j
            }
        };
        return e.browser.msie && D.bind("selectstart", function() {
            return !1
        }), k.data("Jcrop", bt), bt
    }, e.fn.Jcrop = function(t, n) {
        var r;
        return this.each(function() {
            if (e(this).data("Jcrop")) {
                if (t === "api") return e(this).data("Jcrop");
                e(this).data("Jcrop").setOptions(t)
            } else this.tagName == "IMG" ? e.Jcrop.Loader(this, function() {
                e(this).css({
                    display: "block",
                    visibility: "hidden"
                }), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r)
            }) : (e(this).css({
                display: "block",
                visibility: "hidden"
            }), r = e.Jcrop(this, t), e.isFunction(n) && n.call(r))
        }), this
    }, e.Jcrop.Loader = function(t, n, r) {
        function o() {
            s.complete ? (i.unbind(".jcloader"), e.isFunction(n) && n.call(s)) : window.setTimeout(o, 50)
        }
        var i = e(t),
            s = i[0];
        i.bind("load.jcloader", o).bind("error.jcloader", function(t) {
            i.unbind(".jcloader"), e.isFunction(r) && r.call(s)
        }), s.complete && e.isFunction(n) && (i.unbind(".jcloader"), n.call(s))
    }, e.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: 7,
        minAspectRatio: 0,
        maxAspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function() {},
        onSelect: function() {},
        onDblClick: function() {},
        onRelease: function() {}
    }
}(jQuery),
function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0,
        r = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(n, r) {
                return typeof n == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), r && r.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            s = r.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        }
    })
}(jQuery),
function(e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function(t, n, r) {
        var i, s, o, u, a = {},
            f = t.split(".")[0];
        t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return
            }
            a[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }()
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix || t : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function(n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (arguments.length === 1) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (arguments.length === 1) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    })
}(jQuery),
function(e, t) {
    var n = !1;
    e(document).mouseup(function() {
        n = !1
    }), e.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which === 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, n) {
            this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n = this,
                r = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0]) ? !1 : (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                n._trigger("stop", t) !== !1 && n._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, r, i = this.options;
            if (!i.containment) {
                this.containment = null;
                return
            }
            if (i.containment === "window") {
                this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (i.containment === "document") {
                this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (i.containment.constructor === Array) {
                this.containment = i.containment;
                return
            }
            i.containment === "parent" && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0];
            if (!r) return;
            t = n.css("overflow") !== "hidden", this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1,
                i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: i.scrollTop(),
                left: i.scrollLeft()
            }), {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
            }
        },
        _generatePosition: function(t) {
            var n, r, i, s, o = this.options,
                u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = t.pageX,
                f = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: u.scrollTop(),
                left: u.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
                top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("ui-draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function() {
                var n = e.data(this, "ui-sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("ui-draggable"),
                i = this;
            e.each(r.sortables, function() {
                var s = !1,
                    o = this;
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s
                })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                n = e(this).data("ui-draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var r = e(n.helper),
                i = e(this).data("ui-draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("ui-draggable"),
                r = n.options,
                i = !1;
            if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
                if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var n = e(this),
                    r = n.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, n) {
            var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"),
                d = p.options,
                v = d.snapTolerance,
                m = n.offset.left,
                g = m + p.helperProportions.width,
                y = n.offset.top,
                b = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) {
                u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
                if (g < u - v || m > a + v || b < f - v || y > l + v || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)) {
                    p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                        snapItem: p.snapElements[c].item
                    })), p.snapElements[c].snapping = !1;
                    continue
                }
                d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                    top: f - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u - p.helperProportions.width
                }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                    top: f,
                    left: 0
                }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u
                }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width
                }).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[c].item
                })), p.snapElements[c].snapping = r || i || s || o || h
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, n = this.data("ui-draggable").options,
                r = e.makeArray(e(n.stack)).sort(function(t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!r.length) return;
            t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(n) {
                e(this).css("zIndex", t + n)
            }), this.css("zIndex", t + r.length)
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var r = e(n.helper),
                i = e(this).data("ui-draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function(e, t) {
    function n(e, t, n) {
        return e > t && e < t + n
    }
    e.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, n = this.options,
                r = n.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(r) ? r : function(e) {
                return e.is(r)
            }, this.proportions = function() {
                if (!arguments.length) return t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                };
                t = arguments[0]
            }, e.ui.ddmanager.droppables[n.scope] = e.ui.ddmanager.droppables[n.scope] || [], e.ui.ddmanager.droppables[n.scope].push(this), n.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            var t = 0,
                n = e.ui.ddmanager.droppables[this.options.scope];
            for (; t < n.length; t++) n[t] === this && n.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, n) {
            t === "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function(t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function(t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function(t, n) {
            var r = n || e.ui.ddmanager.current,
                i = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                        offset: t.element.offset()
                    }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1)
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(e, t, r) {
        if (!t.offset) return !1;
        var i, s, o = (e.positionAbs || e.position.absolute).left,
            u = (e.positionAbs || e.position.absolute).top,
            a = o + e.helperProportions.width,
            f = u + e.helperProportions.height,
            l = t.offset.left,
            c = t.offset.top,
            h = l + t.proportions().width,
            p = c + t.proportions().height;
        switch (r) {
            case "fit":
                return l <= o && a <= h && c <= u && f <= p;
            case "intersect":
                return l < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < h && c < u + e.helperProportions.height / 2 && f - e.helperProportions.height / 2 < p;
            case "pointer":
                return i = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, n(s, c, t.proportions().height) && n(i, l, t.proportions().width);
            case "touch":
                return (u >= c && u <= p || f >= c && f <= p || u < c && f > p) && (o >= l && o <= h || a >= l && a <= h || o < l && a > h);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, n) {
            var r, i, s = e.ui.ddmanager.droppables[t.options.scope] || [],
                o = n ? n.type : null,
                u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (r = 0; r < s.length; r++) {
                if (s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element)) continue;
                for (i = 0; i < u.length; i++)
                    if (u[i] === s[r].element[0]) {
                        s[r].proportions().height = 0;
                        continue e
                    }
                s[r].visible = s[r].element.css("display") !== "none";
                if (!s[r].visible) continue;
                o === "mousedown" && s[r]._activate.call(s[r], n), s[r].offset = s[r].element.offset(), s[r].proportions({
                    width: s[r].element[0].offsetWidth,
                    height: s[r].element[0].offsetHeight
                })
            }
        },
        drop: function(t, n) {
            var r = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                if (!this.options) return;
                !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n))
            }), r
        },
        dragStart: function(t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function(t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) return;
                var r, i, s, o = e.ui.intersect(t, this, this.options.tolerance),
                    u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                if (!u) return;
                this.options.greedy && (i = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                    return e.data(this, "ui-droppable").options.scope === i
                }), s.length && (r = e.data(s[0], "ui-droppable"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, n)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, n), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, n))
            })
        },
        dragStop: function(t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}(jQuery),
function(e, t) {
    function n(e, t, n) {
        return e > t && e < t + n
    }

    function r(e) {
        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    }
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || r(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, n) {
            var r = null,
                i = !1,
                s = this;
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type === "static") return !1;
            this._refreshItems(t), e(t.target).parents().each(function() {
                if (e.data(this, s.widgetName + "-item") === s) return r = e(this), !1
            }), e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));
            if (!r) return !1;
            if (this.options.handle && !n) {
                e(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (i = !0)
                });
                if (!i) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(t, n, r) {
            var i, s, o = this.options;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && o.cursor !== "auto" && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r)
                for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var n, r, i, s, o = this.options,
                u = !1;
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r);
                if (!s) continue;
                if (r.instance !== this.currentContainer) continue;
                if (i !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && (this.options.type === "semi-dynamic" ? !e.contains(this.element[0], i) : !0)) {
                    this.direction = s === 1 ? "down" : "up";
                    if (this.options.tolerance !== "pointer" && !this._intersectsWithSides(r)) break;
                    this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, n) {
            if (!t) return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this,
                    i = this.placeholder.offset(),
                    s = this.options.axis,
                    o = {};
                if (!s || s === "x") o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
                if (!s || s === "y") o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
                this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                    r._clear(t)
                })
            } else this._clear(t, n);
            return !1
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function() {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left,
                c = this.options.axis === "x" || r + f > u && r + f < a,
                h = this.options.axis === "y" || t + l > s && t + l < o,
                p = c && h;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function(e) {
            var t = this.options.axis === "x" || n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                r = this.options.axis === "y" || n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                i = t && r,
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o === "right" || s === "down" ? 2 : 1 : s && (s === "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                i = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? s === "right" && r || s === "left" && !r : i && (i === "down" && t || i === "up" && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e !== 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e !== 0 && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function f() {
                o.push(this)
            }
            var n, r, i, s, o = [],
                u = [],
                a = this._connectWith();
            if (a && t)
                for (n = a.length - 1; n >= 0; n--) {
                    i = e(a[n]);
                    for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && u.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s])
                }
            u.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (n = u.length - 1; n >= 0; n--) u[n][0].each(f);
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var n, r, i, s, o, u, a, f, l = this.items,
                c = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                h = this._connectWith();
            if (h && this.ready)
                for (n = h.length - 1; n >= 0; n--) {
                    i = e(h[n]);
                    for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                        item: this.currentItem
                    }) : e(s.options.items, s.element), s]), this.containers.push(s))
                }
            for (n = c.length - 1; n >= 0; n--) {
                o = c[n][1], u = c[n][0];
                for (r = 0, f = u.length; r < f; r++) a = e(u[r]), a.data(this.widgetName + "-item", o), l.push({
                    item: a,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, r, i, s;
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n];
                if (r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) continue;
                i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var n, r = t.options;
            if (!r.placeholder || r.placeholder.constructor === String) n = r.placeholder, r.placeholder = {
                element: function() {
                    var r = t.currentItem[0].nodeName.toLowerCase(),
                        i = e("<" + r + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return r === "tr" ? t.currentItem.children().each(function() {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
                    }) : r === "img" && i.attr("src", t.currentItem.attr("src")), n || i.css("visibility", "hidden"), i
                },
                update: function(e, i) {
                    if (n && !r.forcePlaceholderSize) return;
                    i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
                }
            };
            t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), r.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            var i, s, o, u, a, f, l, c, h, p, d = null,
                v = null;
            for (i = this.containers.length - 1; i >= 0; i--) {
                if (e.contains(this.currentItem[0], this.containers[i].element[0])) continue;
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (d && e.contains(this.containers[i].element[0], d.element[0])) continue;
                    d = this.containers[i], v = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            if (!d) return;
            if (this.containers.length === 1) this.containers[v].containerCache.over || (this.containers[v]._trigger("over", t, this._uiHash(this)), this.containers[v].containerCache.over = 1);
            else {
                o = 1e4, u = null, p = d.floating || r(this.currentItem), a = p ? "left" : "top", f = p ? "width" : "height", l = this.positionAbs[a] + this.offset.click[a];
                for (s = this.items.length - 1; s >= 0; s--) {
                    if (!e.contains(this.containers[v].element[0], this.items[s].item[0])) continue;
                    if (this.items[s].item[0] === this.currentItem[0]) continue;
                    if (p && !n(this.positionAbs.top + this.offset.click.top, this.items[s].top, this.items[s].height)) continue;
                    c = this.items[s].item.offset()[a], h = !1, Math.abs(c - l) > Math.abs(c + this.items[s][f] - l) && (h = !0, c += this.items[s][f]), Math.abs(c - l) < o && (o = Math.abs(c - l), u = this.items[s], this.direction = h ? "up" : "down")
                }
                if (!u && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[v]) return;
                u ? this._rearrange(t, u, null, !0) : this._rearrange(t, null, this.containers[v].element, !0), this._trigger("change", t, this._uiHash()), this.containers[v]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[v], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[v]._trigger("over", t, this._uiHash(this)), this.containers[v].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo !== "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()), (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()), r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, r, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            if (i.containment === "document" || i.containment === "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), r = e(t).css("overflow") !== "hidden", this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1,
                i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(i[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n, r, i = this.options,
                s = t.pageX,
                o = t.pageY,
                u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(u[0].tagName);
            return this.cssPosition === "relative" && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this.counter;
            this._delay(function() {
                i === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(e, t) {
            function i(e, t, n) {
                return function(r) {
                    n._trigger(e, r, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var n, r = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)
                    if (this._storedCSS[n] === "auto" || this._storedCSS[n] === "static") this._storedCSS[n] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !t && r.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (t || (r.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }), r.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), r.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (n = this.containers.length - 1; n >= 0; n--) t || r.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (r.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!t) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (n = 0; n < r.length; n++) r[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!t) {
                for (n = 0; n < r.length; n++) r[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery);