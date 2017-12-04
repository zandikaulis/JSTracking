webpackJsonp([35], {
    1043: function(e, t, n) {
        "use strict";

        function a(e, t) {
            void 0 === t && (t = l);
            var n = r.__assign({}, l, t),
                a = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
            return n.textLink && (a += i(n.textLink.url, n.textLink.text)), a
        }

        function i(e, t) {
            return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
        }
        t.a = a;
        var r = n(0),
            l = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            }
    },
    1059: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(b.a)(v, e)
        }
        var i = n(0),
            r = n(1),
            l = n(2),
            s = n(64),
            o = n(3),
            c = (n(1081), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(o._17, {
                            "data-test-selector": c.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: o.m.Alt,
                            fullWidth: !0
                        }, r.createElement(o._21, {
                            type: o._26.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(o._17, {
                            "data-test-selector": c.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: o.m.Alt,
                            fullWidth: !0
                        }, r.createElement(o._21, {
                            type: o._26.Strong,
                            color: o.F.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(o._17, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Center
                    }, r.createElement(o.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(l.d)("Close", "ClipsModal")))))) : r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(o._17, {
                        padding: 2,
                        background: o.m.Base,
                        className: "clip-modal"
                    }, r.createElement(o._17, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(o._17, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Center
                    }, r.createElement(o.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(o.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: o.z.Text,
                        onClick: this.props.onClose
                    }, Object(l.d)("Cancel", "ClipsModal"))), r.createElement(o.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(o.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : o.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(o.X, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n(876),
            p = n(5),
            m = 86400,
            h = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            g = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(o._21, {
                            type: o._26.H5,
                            ellipsis: !0
                        }, Object(l.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(o._21, {
                            type: o._26.H5,
                            ellipsis: !0
                        }, Object(l.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(o._21, null, Object(l.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : r.createElement(o._21, null, Object(l.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(l.d)("Timeout User", "ClipsModalBanUser") : Object(l.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(l.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(l.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.clip.curator.login, t = this.props.isTemporary ? this.props.onBanUser(e, m) : this.props.onBanUser(e), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return a.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = h, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            f = function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            },
            C = Object(p.c)("ClipsModalBanUser")(Object(u.a)(f)(g)),
            b = n(6),
            v = n(1082),
            y = (n(1083), this),
            S = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            E = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteClip(this.props.clip)];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = S, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(o._21, {
                            key: "title",
                            type: o._26.H4
                        }, Object(l.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(o.U, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(o._21, {
                            type: o._26.P,
                            color: o.F.Alt2
                        }, Object(l.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = r.createElement(o._17, {
                            display: o.H.Flex,
                            flexWrap: o.K.NoWrap
                        }, r.createElement(o.U, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(o.j, {
                            ratio: o.k.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), r.createElement(o.U, null, r.createElement(o._21, {
                            type: o._26.H5
                        }, this.props.clip.title), r.createElement(o._21, {
                            color: o.F.Alt2
                        }, Object(l.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(l.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), r.createElement(o._21, {
                            color: o.F.Alt2
                        }, Object(l.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(l.d)("Delete", "ClipsModalDelete"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(l.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            k = function(e) {
                return {
                    deleteClip: function(t) {
                        return i.__awaiter(y, void 0, void 0, function() {
                            var n;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slugs: [t.slug]
                                                }
                                            }
                                        })];
                                    case 1:
                                        return a.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                    case 2:
                                        throw n = a.sent(), l.i.error(n, "Failed to delete clip"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            _ = a({
                props: k
            })(E),
            T = n(31),
            w = n(1084),
            D = this,
            M = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            R = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, t.state = M, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(o._21, {
                        type: o._26.P
                    }, Object(l.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(o._21, {
                            type: o._26.H4
                        }, Object(l.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(l.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            O = function(e) {
                return {
                    deleteAllClips: function(t, n) {
                        return i.__awaiter(D, void 0, void 0, function() {
                            var a, r, r, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                            variables: {
                                                input: {
                                                    videoID: n
                                                }
                                            }
                                        })] : [3, 2];
                                    case 1:
                                        return r = i.sent(), a = r.data, [3, 5];
                                    case 2:
                                        return t ? [4, e.mutate({
                                            variables: {
                                                input: {
                                                    broadcastID: t
                                                }
                                            }
                                        })] : [3, 4];
                                    case 3:
                                        return r = i.sent(), a = r.data, [3, 5];
                                    case 4:
                                        throw new Error("Invalid broadcastID specified for deleteAllClips");
                                    case 5:
                                        return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                    case 6:
                                        throw s = i.sent(), l.i.error(s, "Failed to delete clips from VOD"), s;
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            N = function(e) {
                var t = e.data.clip;
                return t ? {
                    videoID: t.video ? t.video.id : null,
                    broadcastID: t.broadcast.id
                } : {
                    videoID: null,
                    broadcastID: ""
                }
            },
            x = function(e) {
                return {
                    variables: {
                        slug: e.clip.slug
                    }
                }
            },
            U = Object(T.compose)(Object(p.c)("ClipsModalDeleteAll"), a({
                props: O
            }), Object(b.a)(w, {
                props: N,
                options: x
            }))(R),
            A = this,
            L = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            I = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(l.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(l.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return t.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = L, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(o._21, {
                            type: o._26.H4
                        }, Object(l.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(o._21, {
                            type: o._26.P
                        }, Object(l.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(l.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: o.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            j = function(e) {
                return {
                    deleteClips: function() {
                        return i.__awaiter(A, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slugs: e.ownProps.clips.map(function(e) {
                                                        return e.slug
                                                    })
                                                }
                                            }
                                        })];
                                    case 1:
                                        return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                    case 2:
                                        throw t = n.sent(), l.i.error(t, "Failed to delete clips"), t;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            F = a({
                props: j
            })(I);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return C
        }), n.d(t, "d", function() {
            return _
        }), n.d(t, "e", function() {
            return U
        }), n.d(t, "c", function() {
            return F
        })
    },
    1081: function(e, t) {},
    1082: function(e, t) {
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
                                alias: null,
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
                                            value: "slug"
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
                end: 131
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\n  deleteClips(input: $input) {\n    clips {\n      id\n      slug\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1083: function(e, t) {},
    1084: function(e, t) {
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
                                    value: "video"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
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
                end: 138
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\n  clip(slug: $slug) {\n    id\n    video {\n      id\n    }\n    broadcast {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1376: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        });
        var a = "//static-cdn.jtvnw.net/ttv-boxart",
            i = "52x72"
    },
    1577: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "clip"
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
                            value: "slug"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "url"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "embedURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "language"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        value: "52"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "72"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "thumbnailURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "durationSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 298
            }
        };
        n.loc.source = {
            body: "fragment clip on Clip {\n  id\n  slug\n  url\n  embedURL\n  title\n  viewCount\n  language\n  curator {\n    id\n    login\n    displayName\n  }\n  game {\n    id\n    name\n    boxArtURL(width: 52 height: 72)\n  }\n  broadcaster {\n    id\n    login\n    displayName\n  }\n  thumbnailURL\n  createdAt\n  durationSeconds\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1858: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ClipsManagerTitleEdit_UpdateClip"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "clip"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "clip"
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
                end: 200
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/top-clips/models/clip-fragment.gql"\nmutation ClipsManagerTitleEdit_UpdateClip($input: UpdateClipInput!) {\n  updateClip(input: $input) {\n    clip {\n      ...clip\n    }\n  }\n}\n',
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
        }(n(1577).definitions)), e.exports = a
    },
    1859: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsManagerExpandedRow_CurrentUser"
                },
                variableDefinitions: [],
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 73
            }
        };
        n.loc.source = {
            body: "query ClipsManagerExpandedRow_CurrentUser {\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1860: function(e, t) {},
    1861: function(e, t) {},
    1862: function(e, t) {},
    1863: function(e, t) {},
    1864: function(e, t) {},
    1865: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsManagerTable_User"
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
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "criteria"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "UserClipsInput"
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
                                    value: "clips"
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
                                        value: "criteria"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "criteria"
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
                                            value: "pageInfo"
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
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "clip"
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
                end: 415
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/top-clips/models/clip-fragment.gql"\nquery ClipsManagerTable_User($login: String!, $limit: Int, $cursor: Cursor, $criteria: UserClipsInput){\n  user(login: $login) {\n    id\n    displayName\n    clips(first: $limit, after: $cursor, criteria: $criteria) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          ...clip\n        }\n      }\n    }\n  }\n}\n',
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
        }(n(1577).definitions)), e.exports = a
    },
    1866: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsManager_User"
                },
                variableDefinitions: [],
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 65
            }
        };
        n.loc.source = {
            body: "query ClipsManager_User {\n  currentUser {\n    id\n    login\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2056: function(e, t, n) {
        "use strict";

        function a(e) {
            e.currentTarget.select()
        }

        function i(e) {
            return Object(M.bindActionCreators)({
                showModal: j.d,
                closeModal: j.c
            }, e)
        }

        function r(e) {
            var t = e;
            return void 0 !== t.title && void 0 !== t.popularity
        }

        function l(e) {
            return void 0 !== e.followers
        }

        function s(e) {
            return me.a + "/" + e + "-" + me.b + ".jpg"
        }

        function o(e) {
            return Object(M.bindActionCreators)({
                showModal: j.d,
                closeModal: j.c
            }, e)
        }

        function c(e) {
            return Object(M.bindActionCreators)({
                login: function() {
                    return Object(O.f)(R.a.ClipsManager)
                }
            }, e)
        }

        function d(e) {
            return {
                isLoggedIn: Object(N.d)(e)
            }
        }

        function u(e, t) {
            return t === E.Curator ? "/" + e + "/manager/clips" : "/" + e + "/manager/clips/channel"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var p, m = n(0),
            h = n(1),
            g = n(31),
            f = n(22),
            C = n(811),
            b = n(808),
            v = n(12);
        ! function(e) {
            e[e.ViewsAscending = 0] = "ViewsAscending", e[e.ViewsDescending = 1] = "ViewsDescending", e[e.CreatedAtAscending = 2] = "CreatedAtAscending", e[e.CreatedAtDescending = 3] = "CreatedAtDescending"
        }(p || (p = {}));
        var y, S = (_ = {}, _[p.CreatedAtAscending] = "CREATED_AT_ASC", _[p.CreatedAtDescending] = "CREATED_AT_DESC", _[p.ViewsAscending] = "VIEWS_ASC", _[p.ViewsDescending] = "VIEWS_DESC", _);
        ! function(e) {
            e[e.Day = 0] = "Day", e[e.Week = 1] = "Week", e[e.Month = 2] = "Month", e[e.All = 3] = "All"
        }(y || (y = {}));
        var E, k = (T = {}, T[y.Day] = "LAST_DAY", T[y.Week] = "LAST_WEEK", T[y.Month] = "LAST_MONTH", T[y.All] = "ALL_TIME", T);
        ! function(e) {
            e[e.Broadcaster = 0] = "Broadcaster", e[e.Curator = 1] = "Curator"
        }(E || (E = {}));
        var _, T, w = n(5),
            D = n(7),
            M = n(9),
            R = n(48),
            O = n(32),
            N = n(17),
            x = n(14),
            U = n(2),
            A = n(6),
            L = n(67),
            I = n(21),
            j = n(36),
            F = n(28),
            B = n(1059),
            H = n(925),
            P = n(10),
            V = n(64),
            G = n(47),
            W = n(374),
            K = n(88),
            q = n(993),
            Q = n(1043),
            z = n(3),
            Y = [{
                type: q.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: q.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: q.b.VKontakte
            }, {
                type: q.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: q.b.Copy
            }],
            $ = function(e) {
                var t = Object(U.d)("Share", "ClipsManagerSocialShare");
                return h.createElement(G.a, null, h.createElement("div", null, h.createElement(z._30, {
                    label: t
                }, h.createElement(z.v, {
                    ariaLabel: t,
                    type: z.w.Hollow,
                    icon: z._9.Share
                }))), h.createElement(z.p, {
                    direction: z.q.BottomRight,
                    size: z.r.Small
                }, h.createElement(z.U, {
                    display: z.H.Flex,
                    justifyContent: z.T.Between,
                    padding: 1
                }, Y.map(function(t) {
                    return h.createElement(q.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(K.a)(e.clip.url, t.params),
                        onShareClick: Object(H.c)(e.clip, e.pageType)
                    })
                })), h.createElement(z.U, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, h.createElement(z.M, {
                    label: Object(U.d)("Video Link", "ClipsManagerSocialShare")
                }, h.createElement(z.Q, {
                    readOnly: !0,
                    type: z.R.Text,
                    value: e.clip.url,
                    onFocus: a
                }))), h.createElement(z.U, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, h.createElement(z.M, {
                    label: Object(U.d)("Embed Video", "ClipsManagerSocialShare")
                }, h.createElement(z.Q, {
                    readOnly: !0,
                    type: z.R.Text,
                    value: Object(Q.a)(e.clip.embedURL),
                    onFocus: a
                })))))
            },
            X = Object(w.c)("ClipsManagerSocialShare")($),
            J = n(39),
            Z = n(1858),
            ee = this,
            te = {
                TITLE_TEXT: "cmgr-title-text",
                TITLE_INPUT: "cmgr-title-input",
                TITLE_SAVE: "cmgr-title-save",
                TITLE_SAVE_TOOLTIP: "cmgr-title-save-tooltip"
            },
            ne = 100,
            ae = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderTitle = function() {
                        return n.props.canEdit ? h.createElement(z.Q, {
                            id: te.TITLE_INPUT,
                            "data-test-selector": te.TITLE_INPUT,
                            type: z.R.Text,
                            value: n.state.title,
                            onChange: n.handleTitleEdit,
                            onKeyDown: n.handleKeyDown
                        }) : h.createElement(z._21, {
                            "data-test-selector": te.TITLE_TEXT
                        }, n.state.title)
                    }, n.renderSaveButton = function() {
                        if (!n.props.canEdit) return null;
                        var e;
                        return e = n.state.hasErrored ? h.createElement(z._21, {
                            color: z.F.Error,
                            bold: !0
                        }, Object(U.d)("Uh-oh. Check for inappropriate language and try again!", "ClipsManagerTitleEdit")) : h.createElement(z._21, {
                            color: z.F.Link,
                            bold: !0
                        }, Object(U.d)("Title Saved!", "ClipsManagerTitleEdit")), h.createElement(z.U, {
                            flexShrink: 0,
                            flexGrow: 0
                        }, h.createElement(z.U, {
                            position: z._2.Relative
                        }, h.createElement(z.u, {
                            "data-test-selector": te.TITLE_SAVE,
                            disabled: !n.canSaveEditedTitle(),
                            onClick: n.editClipTitle
                        }, Object(U.d)("Save", "ClipsManagerTitleEdit")), h.createElement(z.S, {
                            onClick: n.dismissBalloon,
                            "data-test-selector": te.TITLE_SAVE_TOOLTIP
                        }, h.createElement(z.p, {
                            direction: z.q.TopRight,
                            show: n.state.isShowingBalloon
                        }, h.createElement(z.U, {
                            padding: 1
                        }, e)))))
                    }, n.dismissBalloon = function() {
                        n.setState({
                            isShowingBalloon: !1
                        })
                    }, n.handleTitleEdit = function(e) {
                        var t = e.currentTarget.value.slice(0, ne);
                        n.setState({
                            title: t,
                            trimmedTitle: t.trim()
                        })
                    }, n.editClipTitle = function() {
                        return m.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return m.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.editTitle(this.state.title)];
                                    case 1:
                                        return t.sent(), this.setState({
                                            isShowingBalloon: !0,
                                            hasErrored: !1
                                        }), [3, 3];
                                    case 2:
                                        return e = t.sent(), this.setState({
                                            isShowingBalloon: !0,
                                            hasErrored: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, n.canSaveEditedTitle = function() {
                        return n.props.clip.title !== n.state.trimmedTitle && "" !== n.state.trimmedTitle
                    }, n.handleKeyDown = function(e) {
                        switch (e.keyCode) {
                            case J.a.Enter:
                                return void(n.canSaveEditedTitle() && n.editClipTitle());
                            default:
                                return
                        }
                    }, n.state = {
                        title: t.clip.title,
                        trimmedTitle: t.clip.title.trim(),
                        isShowingBalloon: !1,
                        hasErrored: !1
                    }, n
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = Object(U.d)("{characterCount, number} remaining", {
                        characterCount: ne - this.state.trimmedTitle.length
                    }, "ClipsManagerTitleEdit");
                    return h.createElement(z.U, {
                        display: z.H.Flex,
                        justifyContent: z.T.Center
                    }, h.createElement(z.U, {
                        flexGrow: 1,
                        padding: 1
                    }, h.createElement(z.M, {
                        id: te.TITLE_INPUT,
                        label: Object(U.d)("Title", "ClipsManagerTitleEdit"),
                        hint: this.props.canEdit ? e : ""
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap
                    }, h.createElement(z.U, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, this.renderTitle()), this.renderSaveButton()))))
                }, t
            }(h.Component),
            ie = function(e) {
                return {
                    editTitle: function(t) {
                        return m.__awaiter(ee, void 0, void 0, function() {
                            var n;
                            return m.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slug: e.ownProps.clip.slug,
                                                    title: t
                                                }
                                            }
                                        })];
                                    case 1:
                                        return a.sent(), [3, 3];
                                    case 2:
                                        throw n = a.sent(), U.i.error(n, "Failed to edit clip title"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            re = Object(A.a)(Z, {
                props: ie
            })(ae),
            le = n(1859),
            se = (n(1860), {
                MODERATION_DROPDOWN: "cmgr-moderation-dropdown",
                MODERATION_BUTTON: "cmgr-moderation-button",
                GAME_LINK: "cmgr-expanded-game-link",
                CHANNEL_LINK: "cmgr-expanded-channel-link"
            }),
            oe = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.renderGameLink = function(e) {
                        return e.game ? h.createElement(P.a, {
                            "data-test-selector": se.GAME_LINK,
                            to: Object(W.d)(e.game.name),
                            title: e.game.name
                        }, e.game.name) : null
                    }, n.renderModerationIcon = function() {
                        if (n.props.data.currentUser.id !== n.props.clip.broadcaster.id) return null;
                        var e = Object(U.d)("Moderation", "ClipsManagerExpandedRow");
                        return h.createElement(z._30, {
                            label: e
                        }, h.createElement(z.U, {
                            margin: {
                                right: .5
                            }
                        }, h.createElement(G.a, null, h.createElement(z.v, {
                            ariaLabel: e,
                            type: z.w.Hollow,
                            icon: z._9.Sword,
                            "data-test-selector": se.MODERATION_BUTTON
                        }), h.createElement(z.p, {
                            "data-test-selector": se.MODERATION_DROPDOWN,
                            direction: z.q.BottomRight
                        }, h.createElement(z.U, {
                            padding: {
                                y: .5
                            }
                        }, h.createElement(z._17, {
                            borderBottom: !0
                        }, h.createElement(z.S, {
                            onClick: n.openTimeoutUserModal
                        }, h.createElement(z.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(U.d)("Timeout User (24 hr)", "ClipsManagerExpandedRow"))), h.createElement(z.S, {
                            onClick: n.openBanUserModal
                        }, h.createElement(z.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(U.d)("Ban User", "ClipsManagerExpandedRow")))), h.createElement(z.S, {
                            onClick: n.openDeleteAllModal
                        }, h.createElement(z.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(U.d)("Delete All Clips from Video", "ClipsManagerExpandedRow"))))))))
                    }, n.openModal = function(e, t) {
                        void 0 === t && (t = {}), n.setState({
                            isModalOpen: !0
                        }), n.props.showModal(e, t)
                    }, n.closeModal = function() {
                        n.setState({
                            isModalOpen: !1
                        }), n.props.closeModal()
                    }, n.onClickOutside = function() {
                        n.state.isModalOpen || n.props.onClose()
                    }, n.openDeleteModal = function() {
                        n.openModal(B.d, {
                            clip: n.props.clip,
                            onClose: n.closeModal,
                            onDelete: n.props.onDelete
                        })
                    }, n.openTimeoutUserModal = function() {
                        n.openModal(B.b, {
                            clip: n.props.clip,
                            isTemporary: !0,
                            onClose: n.closeModal
                        })
                    }, n.openBanUserModal = function() {
                        n.openModal(B.b, {
                            clip: n.props.clip,
                            isTemporary: !1,
                            onClose: n.closeModal
                        })
                    }, n.openDeleteAllModal = function() {
                        n.openModal(B.e, {
                            clip: n.props.clip,
                            onClose: n.closeModal,
                            onDeleteAll: n.props.onDeleteAll
                        })
                    }, n.reportInteractive = function() {
                        var e = n.props.data;
                        e && !e.loading && e.currentUser && n.props.latencyTracking.reportInteractive()
                    }, n.state = {
                        title: t.clip.title,
                        isModalOpen: !1
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(U.c)(new Date(e.createdAt), "medium"),
                        n = Object(U.d)("Close", "ClipsManagerExpandedRow"),
                        a = Object(U.d)("Delete", "ClipsManagerExpandedRow");
                    return h.createElement(V.a, {
                        onClickOut: this.onClickOutside
                    }, h.createElement(z._17, {
                        "data-target": this.props.dataTarget,
                        background: z.m.Base,
                        display: z.H.Block,
                        elevation: 3,
                        className: "clmgr-table__row-expanded",
                        position: z._2.Relative,
                        margin: {
                            bottom: 3
                        }
                    }, h.createElement(z._17, {
                        display: z.H.Flex,
                        justifyContent: z.T.Between,
                        alignItems: z.c.Center,
                        padding: 1,
                        background: z.m.Alt,
                        borderBottom: !0
                    }, h.createElement(z._30, {
                        label: n,
                        align: z._31.Left
                    }, h.createElement(z.U, {
                        flexGrow: 0
                    }, h.createElement(z.v, {
                        ariaLabel: n,
                        type: z.w.Hollow,
                        icon: z._9.Close,
                        onClick: this.props.onClose
                    }), h.createElement(z.p, {
                        direction: z.q.TopLeft
                    }))), h.createElement(z.U, {
                        display: z.H.Flex
                    }, this.renderModerationIcon(), h.createElement(z._30, {
                        label: a
                    }, h.createElement(z.U, {
                        margin: {
                            right: .5
                        }
                    }, h.createElement(z.v, {
                        ariaLabel: a,
                        type: z.w.Hollow,
                        icon: z._9.Trash,
                        onClick: this.openDeleteModal
                    }))), h.createElement(z.U, {
                        margin: {
                            right: .5
                        }
                    }, h.createElement(X, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    })), h.createElement(z._30, {
                        label: Object(U.d)("Watch on Clips Page", "ClipsManagerExpandedRow"),
                        align: z._31.Right
                    }, h.createElement(z.v, {
                        ariaLabel: Object(U.d)("Popout", "ClipsManagerExpandedRow"),
                        type: z.w.Hollow,
                        linkTo: Object(K.a)(this.props.clip.url, {
                            tt_medium: "my_clips"
                        }),
                        icon: z._9.Popout
                    })))), h.createElement(z.U, {
                        padding: 1
                    }, h.createElement(z.N, {
                        gutterSize: z.O.None
                    }, h.createElement(z.G, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 5,
                            xl: 5
                        }
                    }, h.createElement(z.U, {
                        position: z._2.Relative
                    }, h.createElement(z.j, {
                        ratio: z.k.Aspect16x9
                    }, h.createElement("iframe", {
                        src: Object(K.a)(e.embedURL, {
                            autoplay: "false"
                        }),
                        frameBorder: 0,
                        width: "100%",
                        height: "100%",
                        scrolling: "no",
                        className: "aspect__fill",
                        allowFullScreen: !0
                    })))), h.createElement(z.G, {
                        cols: {
                            default: 12,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 7,
                            xl: 7
                        }
                    }, h.createElement(re, {
                        clip: e,
                        canEdit: this.props.data.currentUser.id === e.curator.id
                    }), h.createElement(z._17, {
                        background: z.m.Alt,
                        margin: 1,
                        padding: 1,
                        border: !0
                    }, h.createElement(z.N, null, h.createElement(z.G, {
                        cols: {
                            default: 4
                        }
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5
                        }
                    }, h.createElement(z._21, {
                        bold: !0
                    }, Object(U.d)("Created On", "ClipsManagerExpandedRow")), h.createElement(z._21, {
                        ellipsis: !0,
                        transform: z._25.Capitalize,
                        title: t
                    }, t))), h.createElement(z.G, {
                        cols: {
                            default: 4
                        }
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5
                        }
                    }, h.createElement(z._21, {
                        bold: !0
                    }, Object(U.d)("Clip Length", "ClipsManagerExpandedRow")), h.createElement(z._21, {
                        ellipsis: !0
                    }, Object(U.d)("{seconds, number}s", {
                        seconds: this.props.clip.durationSeconds
                    }, "ClipsManagerExpandedRow")))), h.createElement(z.G, {
                        cols: {
                            default: 4
                        }
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5
                        }
                    }, h.createElement(z._21, {
                        bold: !0
                    }, Object(U.d)("Views", "ClipsManagerExpandedRow")), h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        ellipsis: !0
                    }, h.createElement(z._8, {
                        asset: z._9.GlyphViews
                    }), h.createElement(z.U, {
                        padding: {
                            left: .5
                        }
                    }, Object(U.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))), h.createElement(z.G, {
                        cols: {
                            default: 4
                        }
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5
                        }
                    }, h.createElement(z._21, {
                        bold: !0
                    }, Object(U.d)("Channel", "ClipsManagerExpandedRow")), h.createElement(z._21, {
                        ellipsis: !0
                    }, h.createElement(P.a, {
                        "data-test-selector": se.CHANNEL_LINK,
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), h.createElement(z.G, {
                        cols: {
                            default: 4
                        }
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5
                        }
                    }, h.createElement(z._21, {
                        bold: !0
                    }, Object(U.d)("Game", "ClipsManagerExpandedRow")), h.createElement(z._21, {
                        ellipsis: !0
                    }, this.renderGameLink(e)))))))))))
                }, t
            }(h.Component),
            ce = Object(w.c)("ClipsManagerExpandedRow")(Object(A.a)(le)(oe)),
            de = Object(D.a)(null, i)(ce),
            ue = n(107),
            pe = n(265),
            me = n(1376),
            he = (n(1861), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCardContent = function() {
                        var e = t.props.searchResult;
                        return r(e) ? h.createElement(z.A, {
                            row: !0
                        }, h.createElement(z.C, {
                            size: z.D.Size3,
                            aspect: z.k.Aspect3x4,
                            imageSrc: s(e.title),
                            imageAlt: e.thumbnailAltText
                        }), h.createElement(z.B, null, h.createElement(z.U, {
                            padding: {
                                left: 1
                            }
                        }, h.createElement(z._21, {
                            type: z._26.H5
                        }, e.title), h.createElement(z._21, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(U.d)("{numViewers, number} viewers", {
                            numViewers: e.popularity
                        }, "ClipsManagerSearch"))))) : l(e) ? h.createElement(z.A, {
                            row: !0
                        }, h.createElement(z.C, {
                            size: z.D.Size3,
                            aspect: z.k.Aspect1x1,
                            imageSrc: e.thumbnail,
                            imageAlt: e.thumbnailAltText
                        }), h.createElement(z.B, null, h.createElement(z.U, {
                            padding: {
                                left: 1
                            }
                        }, h.createElement(z._21, {
                            type: z._26.H5
                        }, e.name), h.createElement(z._21, {
                            className: "clmgr-result__subtitle",
                            ellipsis: !0
                        }, Object(U.d)("{numFollowers, number} followers", {
                            numFollowers: e.followers
                        }, "ClipsManagerSearch"))))) : void 0
                    }, t.onMouseEnter = function() {
                        t.props.onResultHover(t.props.index)
                    }, t.onClick = function() {
                        t.props.onResultSelect(t.props.index)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(z.S, null, h.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onClick: this.onClick,
                        onKeyDown: this.props.onKeyDown,
                        "data-ref-index": this.props.index,
                        ref: this.props.refDelegate,
                        tabIndex: -1,
                        className: "clmgr-result pd-x-1 pd-y-05"
                    }, this.renderCardContent()))
                }, t
            }(h.Component)),
            ge = {
                NO_RESULTS: "cmgr-no-search-results",
                RESULTS_MENU: "cmgr-search-results-menu",
                SEARCH_INPUT: "cmgr-search-input",
                CHANNEL_SEARCH: "cmgr-channel-search",
                GAME_SEARCH: "cmgr-game-search"
            },
            fe = 5,
            Ce = {
                currentCategory: L.a.Games,
                gameResults: [],
                userResults: [],
                isShowingResults: !1,
                isLoading: !1,
                searchTerm: "",
                focusedIndex: null
            },
            be = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSearchOptions = function() {
                        var e = [h.createElement(z._18, {
                            active: t.state.currentCategory === L.a.Games,
                            onClick: t.setSearchTypeGame,
                            key: ge.GAME_SEARCH,
                            "data-test-selector": ge.GAME_SEARCH
                        }, Object(U.d)("Game Search", "ClipsManagerSearch"))];
                        return t.props.userRole !== E.Broadcaster && e.push(h.createElement(z._18, {
                            active: t.state.currentCategory === L.a.Users,
                            onClick: t.setSearchTypeChannel,
                            key: ge.CHANNEL_SEARCH,
                            "data-test-selector": ge.CHANNEL_SEARCH
                        }, Object(U.d)("Channel Search", "ClipsManagerSearch"))), h.createElement(z._19, null, e)
                    }, t.renderSearchResults = function() {
                        if (t.state.isLoading) return h.createElement(z.X, null);
                        var e = t.state.currentCategory;
                        if (e === L.a.Users) {
                            var n = t.state.userResults;
                            return 0 === n.length ? t.renderNoResults() : n.map(function(e, n) {
                                return h.createElement(he, {
                                    key: e.id + "_" + n,
                                    searchResult: e,
                                    index: n,
                                    onResultHover: t.focusResult,
                                    onResultSelect: t.selectResult,
                                    refDelegate: t.setSearchResultRefs,
                                    onKeyDown: t.onKeyDown
                                })
                            })
                        }
                        if (e === L.a.Games) {
                            var a = t.state.gameResults;
                            return 0 === a.length ? t.renderNoResults() : a.map(function(e, n) {
                                return h.createElement(he, {
                                    key: e.id + "_" + n,
                                    searchResult: e,
                                    index: n,
                                    onResultHover: t.focusResult,
                                    onResultSelect: t.selectResult,
                                    refDelegate: t.setSearchResultRefs,
                                    onKeyDown: t.onKeyDown
                                })
                            })
                        }
                    }, t.renderNoResults = function() {
                        return h.createElement(z.U, {
                            "data-test-selector": ge.NO_RESULTS,
                            display: z.H.Flex,
                            flexDirection: z.J.Column
                        }, h.createElement(z._17, {
                            textAlign: z._22.Center,
                            padding: {
                                y: 5
                            }
                        }, h.createElement(z._8, {
                            asset: z._9.NavSearch,
                            height: 36,
                            width: 36,
                            type: z._10.Brand
                        }), h.createElement(z._21, {
                            type: z._26.H4
                        }, Object(U.d)("No results found", "ClipsManagerSearch")), h.createElement(z._21, {
                            type: z._26.P,
                            color: z.F.Alt
                        }, Object(U.d)("They're probably in another castle", "ClipsManagerSearch"))))
                    }, t.setSearchResultRefs = function(e) {
                        if (null !== e) {
                            var n = e.dataset.refIndex;
                            if (n) {
                                var a = parseInt(n, 0);
                                t.searchResultRefs[a] = e
                            }
                        }
                    }, t.setSearchTypeGame = function() {
                        t.setState(m.__assign({}, Ce, {
                            currentCategory: L.a.Games
                        })), t.context.setSearchType(L.a.Games)
                    }, t.setSearchTypeChannel = function() {
                        t.setState(m.__assign({}, Ce, {
                            currentCategory: L.a.Users
                        })), t.context.setSearchType(L.a.Users)
                    }, t.onChange = function(e) {
                        t.setState({
                            searchTerm: e.currentTarget.value,
                            isLoading: !0
                        }, function() {
                            "" === t.state.searchTerm && t.context.clearSearch(), t.performQuery()
                        })
                    }, t.onFocus = function() {
                        t.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), t.performQuery()
                    }, t.onKeyDown = function(e) {
                        switch (e.keyCode) {
                            case J.a.Esc:
                                return e.preventDefault(), void("" !== t.state.searchTerm ? (t.setState({
                                    searchTerm: "",
                                    focusedIndex: null
                                }, function() {
                                    t.performQuery(), t.focusSearchInput()
                                }), t.context.clearSearch()) : t.setState({
                                    isShowingResults: !1,
                                    focusedIndex: null
                                }, function() {
                                    t.focusSearchInput()
                                }));
                            case J.a.Up:
                                return void t.focusNext(!1);
                            case J.a.Down:
                                return void t.focusNext(!0);
                            case J.a.Enter:
                                return void(null !== t.state.focusedIndex && t.selectResult(t.state.focusedIndex));
                            default:
                                return t.setState({
                                    focusedIndex: null
                                }), void t.focusSearchInput()
                        }
                    }, t.focusNext = function(e) {
                        void 0 === e && (e = !0);
                        var n = t.getResultsLength();
                        0 !== n && t.setState(function(t) {
                            var a, i = t.focusedIndex;
                            return a = null === i ? e ? 0 : n - 1 : e ? i + 1 >= n ? 0 : i + 1 : i - 1 < 0 ? n - 1 : i - 1, {
                                focusedIndex: a,
                                isShowingResults: !0
                            }
                        })
                    }, t.focusResult = function(e) {
                        t.setState({
                            focusedIndex: e
                        })
                    }, t.focusResultRef = function(e) {
                        var n = t.searchResultRefs[e];
                        n && n.focus()
                    }, t.blurResultRef = function(e) {
                        var n = t.searchResultRefs[e];
                        n && n.blur()
                    }, t.focusSearchInput = function() {
                        t.searchInputRef && t.searchInputRef.focus()
                    }, t.selectResult = function(e) {
                        var n, a = t.state,
                            i = a.currentCategory,
                            r = a.gameResults,
                            l = a.userResults;
                        if (i === L.a.Games) n = r[e].title, t.context.setSearchTerm(n);
                        else {
                            var s = l[e];
                            n = s.name, t.context.setSearchTerm(s.id)
                        }
                        t.focusSearchInput(), t.setState({
                            focusedIndex: null,
                            searchTerm: n,
                            isShowingResults: !1
                        })
                    }, t.hideResults = function() {
                        t.setState({
                            isShowingResults: !1
                        })
                    }, t.getResultsLength = function() {
                        return t.state.currentCategory === L.a.Games ? t.state.gameResults.length : t.state.userResults.length
                    }, t.performQuery = function() {
                        var e = t.state,
                            n = e.isLoading,
                            a = e.searchTerm,
                            i = e.currentCategory;
                        n && t.setState({
                            isLoading: !0,
                            isShowingResults: !0
                        }), t.searchClient.queryForType(i, a, "", {
                            hitsPerPage: fe
                        }).then(function(e) {
                            if (e) {
                                var n = Object(pe.b)({
                                    searchResults: e
                                });
                                t.setState({
                                    gameResults: n.currentGameResults ? n.currentGameResults.results : [],
                                    userResults: n.currentUserResults ? n.currentUserResults.results : [],
                                    isLoading: !1
                                })
                            } else t.setState({
                                gameResults: [],
                                userResults: [],
                                isLoading: !1
                            })
                        })
                    }, t.setSearchInputRef = function(e) {
                        t.searchInputRef = e
                    }, t.searchClient = new ue.a(U.a.algoliaApplicationID, U.a.algoliaAPIKey), t.inputTimer = null, t.state = Ce, t.searchResultRefs = [], t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.userRole !== this.props.userRole && this.setState({
                        searchTerm: "",
                        isShowingResults: !1
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    var n = this.state.focusedIndex,
                        a = t.focusedIndex;
                    null !== a && null === n ? this.blurResultRef(a) : null !== n && a !== n && this.focusResultRef(n)
                }, t.prototype.render = function() {
                    return h.createElement(z.U, {
                        position: z._2.Relative
                    }, h.createElement(z.U, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderSearchOptions()), h.createElement(V.a, {
                        onClickOut: this.hideResults
                    }, h.createElement(z._11, {
                        id: ge.SEARCH_INPUT,
                        refDelegate: this.setSearchInputRef,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        value: this.state.searchTerm,
                        placeholder: this.state.currentCategory === L.a.Games ? Object(U.d)("Enter a Game", "ClipsManagerSearch") : Object(U.d)("Enter a Channel", "ClipsManagerSearch")
                    }), h.createElement(z.p, {
                        "data-test-selector": ge.RESULTS_MENU,
                        direction: z.q.Bottom,
                        noTail: !0,
                        size: z.r.Large,
                        show: this.state.isShowingResults
                    }, this.renderSearchResults())))
                }, t.contextTypes = {
                    setSearchTerm: x.func,
                    setSearchType: x.func,
                    clearSearch: x.func
                }, t
            }(h.Component),
            ve = Object(w.c)("ClipsManagerSearch")(be),
            ye = (n(1862), {
                MY_CLIPS_RADIO: "cmgr-my-clips-radio",
                CLIPS_OF_ME_RADIO: "cmgr-clips-of-me-radio"
            }),
            Se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setCuratorRole = function() {
                        t.props.updateUserRole(E.Curator)
                    }, t.setBroadcasterRole = function() {
                        t.props.updateUserRole(E.Broadcaster)
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return h.createElement(z.U, {
                        className: "clmgr-filters-container"
                    }, h.createElement(z.N, {
                        gutterSize: z.O.None
                    }, h.createElement(z.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, h.createElement(z.U, {
                        margin: {
                            bottom: .5
                        }
                    }, h.createElement(z.U, {
                        margin: {
                            bottom: .5
                        }
                    }, h.createElement(z._21, {
                        fontSize: z.L.Size5
                    }, Object(U.d)("List View", "ClipsManagerTable"))), h.createElement(z.U, {
                        margin: {
                            bottom: 2
                        }
                    }, h.createElement(z.U, {
                        margin: {
                            bottom: .5
                        }
                    }, h.createElement(z._7, {
                        "data-test-selector": ye.MY_CLIPS_RADIO,
                        label: Object(U.d)("Clips I've Created", "ClipsManagerTable"),
                        name: "MyClips",
                        checked: this.props.currentUserRole === E.Curator,
                        onChange: this.setCuratorRole
                    })), h.createElement(z.U, null, h.createElement(z._7, {
                        "data-test-selector": ye.CLIPS_OF_ME_RADIO,
                        label: Object(U.d)("Clips of My Channel", "ClipsManagerTable"),
                        name: "ClipsOfMyChannel",
                        checked: this.props.currentUserRole === E.Broadcaster,
                        onChange: this.setBroadcasterRole
                    }))))), h.createElement(z.G, {
                        cols: {
                            default: 12,
                            xs: 6,
                            sm: 6,
                            md: 12,
                            lg: 12
                        }
                    }, h.createElement(ve, {
                        userRole: this.props.currentUserRole
                    }))))
                }, t
            }(h.Component),
            Ee = Object(w.c)("ClipsManagerRightColumn")(Se),
            ke = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.handleImageError = function() {
                        n.setState({
                            imageURL: U.a.defaultStreamPreviewURL
                        })
                    }, n.state = {
                        imageURL: t.imageURL
                    }, n
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return h.createElement("img", {
                        src: this.state.imageURL,
                        alt: this.state.imageURL,
                        onError: this.handleImageError,
                        className: this.props.className
                    })
                }, t
            }(h.Component),
            _e = (n(1863), "clips-manager-row-checkbox"),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectClip = function() {
                        var e = !t.props.isSelected;
                        t.props.onSelectClip(t.props.clip, e)
                    }, t.onRowClick = function(e) {
                        var n = e.target;
                        null !== t.checkboxRef && n === t.checkboxRef || n.parentElement && n.parentElement.dataset.testSelector === _e || t.props.onRowClick(t.props.clip)
                    }, t.setCheckboxRef = function(e) {
                        t.checkboxRef = e
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.clip,
                        t = Object(U.g)(new Date(e.createdAt));
                    return h.createElement(z.U, {
                        className: "clmgr-table__row",
                        display: z.H.Flex,
                        overflow: z.Y.Hidden,
                        alignItems: z.c.Center
                    }, h.createElement(z.S, {
                        onClick: this.onRowClick,
                        alpha: !0
                    }, h.createElement(z.N, {
                        "data-target": this.props.dataTarget
                    }, h.createElement(z.G, {
                        cols: 4
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        alignItems: z.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, h.createElement(z.U, {
                        flexShrink: 0,
                        position: z._2.Relative
                    }, h.createElement(z._17, {
                        className: "clmgr-checkbox-bg",
                        background: z.m.Base,
                        position: z._2.Absolute
                    }), h.createElement(z.E, {
                        refDelegate: this.setCheckboxRef,
                        "data-test-selector": _e,
                        label: " ",
                        checked: this.props.isSelected,
                        onChange: this.selectClip
                    })), h.createElement(z.P, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, h.createElement(ke, {
                        imageURL: this.props.clip.thumbnailURL,
                        className: "clmgr-thumb"
                    })), h.createElement(z._21, {
                        type: z._26.H5,
                        title: e.title,
                        ellipsis: !0
                    }, e.title))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, h.createElement(z.P, {
                        ellipsis: !0
                    }, h.createElement(P.a, {
                        to: "/" + e.broadcaster.login + "/clips",
                        title: e.broadcaster.displayName
                    }, e.broadcaster.displayName)))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, this.renderGameLink(e))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, h.createElement(z._21, {
                        title: t,
                        transform: z._25.Capitalize,
                        ellipsis: !0
                    }, t))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        margin: {
                            right: .5
                        }
                    }, h.createElement(z._8, {
                        asset: z._9.GlyphViews
                    })), Object(U.f)(e.viewCount, {
                        maximumFractionDigits: 1
                    }))))))
                }, t.prototype.renderGameLink = function(e) {
                    return e.game ? h.createElement(z.P, {
                        ellipsis: !0
                    }, h.createElement(P.a, {
                        to: Object(W.d)(e.game.name),
                        title: e.game.name
                    }, e.game.name)) : null
                }, t
            }(h.Component),
            we = (n(1864), {
                SELECT_ALL: "clips-manager-select-all",
                BATCH_DELETE: "clips-manager-batch-delete",
                VIEWS_HEADER: "clips-manager-views-sort",
                CREATED_AT_HEADER: "clips-manager-createdat-sort",
                EMPTY_BODY: "clips-manager-empty-body"
            }),
            De = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.expandClipRow = function(e) {
                        t.setState({
                            expandedSlug: e.slug
                        })
                    }, t.closeExpandedRow = function() {
                        t.setState({
                            expandedSlug: null
                        })
                    }, t.loadMore = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(e) {
                                return this.props.loading || this.props.error || !this.props.clips ? [2] : [2, this.props.loadMore().then(function() {})]
                            })
                        })
                    }, t.selectClip = function(e, n) {
                        void 0 === n && (n = !0), t.setState(function(t) {
                            var a;
                            if (n) a = m.__assign({}, t.selectedClips, (l = {}, l[e.slug] = e, l));
                            else {
                                var i = t.selectedClips,
                                    r = e.slug;
                                i[r];
                                a = m.__rest(i, ["symbol" == typeof r ? r : r + ""])
                            }
                            return {
                                numberOfSelectedClips: Object.keys(a).length,
                                selectedClips: a
                            };
                            var l
                        })
                    }, t.toggleViewsSort = function() {
                        t.props.sort === p.ViewsDescending ? t.props.updateSort(p.ViewsAscending) : t.props.updateSort(p.ViewsDescending)
                    }, t.toggleCreatedAtSort = function() {
                        t.props.sort === p.CreatedAtDescending ? t.props.updateSort(p.CreatedAtAscending) : t.props.updateSort(p.CreatedAtDescending)
                    }, t.deleteSelectedClips = function() {
                        t.props.onBatchDeleteClips(Object.keys(t.state.selectedClips)), t.setState({
                            numberOfSelectedClips: 0,
                            selectedClips: {}
                        })
                    }, t.deleteClip = function(e) {
                        t.props.onDeleteClip(e), t.selectClip(e, !1)
                    }, t.deleteAllClips = function(e) {
                        t.props.onDeleteAllClips(e)
                    }, t.toggleClipsSelection = function() {
                        var e = t.props.clips,
                            n = t.state.numberOfSelectedClips === e.length;
                        if (n) return void t.clearClipsSelection();
                        var a = e.reduce(function(e, t) {
                            return e[t.slug] = t, e
                        }, {});
                        t.setState({
                            selectedClips: a,
                            numberOfSelectedClips: n ? 0 : Object.keys(a).length
                        })
                    }, t.clearClipsSelection = function() {
                        t.setState({
                            selectedClips: {},
                            numberOfSelectedClips: 0
                        })
                    }, t.renderDeleteClipModal = function(e) {
                        t.props.showModal(B.d, {
                            clip: e,
                            onClose: t.props.closeModal,
                            onDelete: t.props.onDeleteClip
                        })
                    }, t.renderBatchDeleteModal = function() {
                        var e = Object.keys(t.state.selectedClips);
                        if (1 === t.state.numberOfSelectedClips) {
                            var n = e[0],
                                a = t.state.selectedClips[n];
                            t.renderDeleteClipModal(a)
                        } else {
                            var i = t.state.selectedClips,
                                r = [],
                                l = Object.keys(t.state.selectedClips).reduce(function(e, t) {
                                    return e.push(i[t]), e
                                }, r);
                            t.props.showModal(B.c, {
                                clips: l,
                                onClose: t.props.closeModal,
                                onBatchDelete: t.deleteSelectedClips
                            })
                        }
                    }, t.reportInteractive = function() {
                        !t.props.loading && t.props.userID && t.props.latencyTracking.reportInteractive()
                    }, t.state = {
                        numberOfSelectedClips: 0,
                        selectedClips: {},
                        expandedSlug: null,
                        isNewQueryLoading: !1
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (e.loading) {
                        (e.sort !== this.props.sort || e.userRole !== this.props.userRole || e.searchFilterType !== this.props.searchFilterType || e.searchFilterTerm !== this.props.searchFilterTerm) && (this.clearClipsSelection(), this.setState({
                            isNewQueryLoading: !0
                        }))
                    }
                    this.state.isNewQueryLoading && !e.loading && this.setState({
                        isNewQueryLoading: !1
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.error || !this.props.userID ? null : h.createElement(z.U, {
                        className: "clmgr-body-wrap",
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        flexDirection: z.J.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: z.J.Row
                        }
                    }, h.createElement(z.U, {
                        className: "clmgr-table-wrap",
                        display: z.H.Flex,
                        flexGrow: 1,
                        position: z._2.Relative
                    }, h.createElement(z._17, {
                        background: z.m.Base,
                        border: !0,
                        elevation: 3,
                        margin: {
                            bottom: .5
                        },
                        fullWidth: !0
                    }, this.renderHeaderRow()), h.createElement(z._17, {
                        background: z.m.Base,
                        elevation: 2,
                        border: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, h.createElement(F.b, null, h.createElement(z.U, null, this.props.clips.length > 0 && !this.state.isNewQueryLoading && this.props.clips.map(function(t) {
                        return e.renderClipRow(t)
                    }), this.state.isNewQueryLoading && this.props.loading && h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        justifyContent: z.T.Center,
                        padding: 1,
                        fullWidth: !0
                    }, h.createElement(z.X, {
                        delay: 0
                    })), 0 === this.props.clips.length && !this.props.loading && h.createElement(z.U, {
                        display: z.H.Flex,
                        justifyContent: z.T.Center,
                        textAlign: z._22.Center,
                        padding: 2,
                        fullWidth: !0,
                        fullHeight: !0
                    }, h.createElement(z._21, {
                        type: z._26.H4,
                        color: z.F.Alt2,
                        "data-test-selector": we.EMPTY_BODY
                    }, Object(U.d)("Create Clips to fill this space with the most memorable moments from your favorite Twitch streams and videos. Just hit the Clip button on the video player to try it out. {learnHowLink} to use Clips.", {
                        learnHowLink: h.createElement("a", {
                            target: "_blank",
                            rel: "noopener",
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips"
                        }, Object(U.d)("Learn how", "ClipsManagerTable"))
                    }, "ClipsManagerTable"))), h.createElement(F.a, {
                        loadMore: this.loadMore,
                        enabled: !this.props.loading && this.props.hasNextPage
                    }), this.props.loading && !this.state.isNewQueryLoading && h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        justifyContent: z.T.Center,
                        padding: 1,
                        fullWidth: !0
                    }, h.createElement(z.X, {
                        delay: 0
                    })))))), h.createElement(z.U, {
                        breakpointMedium: {
                            margin: {
                                left: 2
                            }
                        },
                        flexShrink: 0
                    }, h.createElement(Ee, {
                        updateUserRole: this.props.updateUserRole,
                        currentUserRole: this.props.userRole
                    })))
                }, t.prototype.renderHeaderRow = function() {
                    var e = this.state.numberOfSelectedClips > 0,
                        t = e && this.state.numberOfSelectedClips === this.props.clips.length,
                        n = h.createElement(z.E, {
                            "data-test-selector": we.SELECT_ALL,
                            label: " ",
                            checked: t,
                            onChange: this.toggleClipsSelection,
                            disabled: this.state.isNewQueryLoading && this.props.loading
                        });
                    if (e) return h.createElement(z.N, null, h.createElement(z.G, {
                        cols: 12
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fullHeight: !0
                    }, h.createElement(z.U, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, n), h.createElement(z.U, {
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, h.createElement(z._21, null, Object(U.d)("{numClips, number} selected", {
                        numClips: this.state.numberOfSelectedClips
                    }, "ClipsManagerTable"))), h.createElement(z.U, {
                        flexShrink: 0,
                        alignItems: z.c.Center,
                        fullHeight: !0
                    }, h.createElement(z.v, {
                        ariaLabel: Object(U.d)("Delete Clip", "ClipsManagerTable"),
                        icon: z._9.Trash,
                        onClick: this.renderBatchDeleteModal,
                        "data-test-selector": we.BATCH_DELETE
                    })))));
                    var a = this.props.sort,
                        i = a === p.ViewsAscending || a === p.ViewsDescending,
                        r = a === p.CreatedAtAscending || a === p.CreatedAtDescending,
                        l = Object(U.d)("Created", "ClipsManagerTable"),
                        s = Object(U.d)("Views", "ClipsManagerTable");
                    return h.createElement(z.N, null, h.createElement(z.G, {
                        cols: 4
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        padding: 1,
                        fullHeight: !0
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        margin: {
                            right: 1
                        }
                    }, n), h.createElement(z._21, null, Object(U.d)("Info", "ClipsManagerTable")))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        padding: 1
                    }, Object(U.d)("Channel", "ClipsManagerTable"))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        padding: 1
                    }, Object(U.d)("Game", "ClipsManagerTable"))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: z.H.Flex,
                        fullHeight: !0
                    }, h.createElement(z.S, {
                        alpha: !0,
                        onClick: this.toggleCreatedAtSort,
                        "data-test-selector": we.CREATED_AT_HEADER
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        alignContent: z.b.Center,
                        justifyContent: z.T.Between,
                        padding: {
                            x: 1
                        }
                    }, h.createElement(z._21, {
                        color: z.F.Link,
                        title: l,
                        bold: !0,
                        ellipsis: !0
                    }, l), r && h.createElement(z._8, {
                        asset: a === p.CreatedAtDescending ? z._9.GlyphArrDown : z._9.GlyphArrUp,
                        type: z._10.Brand
                    }))))), h.createElement(z.G, {
                        cols: 2
                    }, h.createElement(z.U, {
                        padding: {
                            y: .5,
                            right: 1
                        },
                        display: z.H.Flex,
                        fullHeight: !0
                    }, h.createElement(z.S, {
                        alpha: !0,
                        onClick: this.toggleViewsSort,
                        "data-test-selector": we.VIEWS_HEADER
                    }, h.createElement(z.U, {
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        alignContent: z.b.Center,
                        justifyContent: z.T.Between,
                        padding: {
                            x: 1
                        }
                    }, h.createElement(z._21, {
                        color: z.F.Link,
                        title: s,
                        bold: !0,
                        ellipsis: !0
                    }, s), i && h.createElement(z._8, {
                        asset: a === p.ViewsDescending ? z._9.GlyphArrDown : z._9.GlyphArrUp,
                        type: z._10.Brand
                    }))))))
                }, t.prototype.renderClipRow = function(e) {
                    var t = !!this.state.selectedClips[e.slug];
                    if (e.slug === this.state.expandedSlug) {
                        var n = this.props.userRole === E.Curator ? H.a.MyClips : H.a.ClipsOfMyChannel;
                        return h.createElement(de, {
                            key: e.slug,
                            dataTarget: "clips-manager-table-row",
                            clip: e,
                            onClose: this.closeExpandedRow,
                            onDelete: this.deleteClip,
                            onDeleteAll: this.deleteAllClips,
                            pageType: n
                        })
                    }
                    return h.createElement(Te, {
                        key: e.slug,
                        dataTarget: "clips-manager-table-row",
                        clip: e,
                        isSelected: t,
                        onSelectClip: this.selectClip,
                        onRowClick: this.expandClipRow
                    })
                }, t
            }(h.Component),
            Me = n(1865),
            Re = function(e) {
                var t = function() {
                        var t = e.data.user.clips.edges,
                            n = t[t.length - 1].cursor;
                        return e.data.fetchMore({
                            variables: m.__assign({}, e.data.variables, {
                                cursor: n
                            }),
                            updateQuery: function(e, t) {
                                var n = t.fetchMoreResult,
                                    a = n,
                                    i = e.user.clips.edges,
                                    r = a.user.clips.edges;
                                return {
                                    user: m.__assign({}, a.user, {
                                        clips: m.__assign({}, a.user.clips, {
                                            edges: Object(I.b)(i, r)
                                        })
                                    })
                                }
                            }
                        })
                    },
                    n = function(t) {
                        var n = function(e) {
                            var n = e.user.clips.edges;
                            return e.user.clips.edges = n.filter(function(e) {
                                var n = e.node.slug;
                                return t.slug !== n
                            }), e
                        };
                        Object(I.d)(Me, e.data.variables, n)
                    },
                    a = function(t) {
                        var n = function(e) {
                            var n = e.user.clips.edges;
                            return e.user.clips.edges = n.filter(function(e) {
                                var n = e.node.slug;
                                return !t.includes(n)
                            }), e
                        };
                        Object(I.d)(Me, e.data.variables, n)
                    },
                    i = function(t) {
                        var n = function(e) {
                            var n = e.user.clips.edges;
                            return e.user.clips.edges = n.filter(function(e) {
                                var n = e.node.slug;
                                return !t.some(function(e) {
                                    return e.slug === n
                                })
                            }), e
                        };
                        Object(I.d)(Me, e.data.variables, n)
                    },
                    r = [],
                    l = "",
                    s = !1;
                return e.data.user && e.data.user.clips && (l = e.data.user.id, r = e.data.user.clips.edges.map(function(e) {
                    return e.node
                }), s = e.data.user.clips.pageInfo.hasNextPage), {
                    userID: l,
                    clips: r,
                    loading: e.data.loading,
                    hasNextPage: s,
                    error: e.data.error,
                    loadMore: t,
                    onDeleteClip: n,
                    onDeleteAllClips: i,
                    onBatchDeleteClips: a
                }
            },
            Oe = function(e) {
                var t = {
                    sort: S[e.sort],
                    period: k[y.All]
                };
                return e.userRole === E.Broadcaster ? t.broadcasterID = e.channelID : t.curatorID = e.channelID, e.searchFilterTerm && (e.searchFilterType === L.a.Users && e.userRole !== E.Broadcaster ? t.broadcasterID = e.searchFilterTerm : t.gameName = e.searchFilterTerm), {
                    variables: {
                        login: e.channelName,
                        limit: 20,
                        criteria: t
                    },
                    notifyOnNetworkStatusChange: !0
                }
            },
            Ne = Object(g.compose)(Object(w.c)("ClipsManagerTable"), Object(A.a)(Me, {
                options: Oe,
                props: Re
            }), Object(D.a)(null, o))(De),
            xe = n(1866),
            Ue = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.getChildContext = function() {
                        return {
                            setSearchTerm: n.setSearchTerm,
                            setSearchType: n.setSearchType,
                            clearSearch: n.clearSearch
                        }
                    }, n.setSortOption = function(e) {
                        n.setState({
                            sortOption: e
                        })
                    }, n.setSearchTerm = function(e) {
                        n.setState({
                            searchTerm: e
                        })
                    }, n.setSearchType = function(e) {
                        e !== n.state.searchType && n.setState({
                            searchType: e,
                            searchTerm: null
                        })
                    }, n.clearSearch = function() {
                        n.setState({
                            searchTerm: null
                        })
                    }, n.setUserRole = function(e) {
                        e !== n.state.userRole && (n.setState({
                            userRole: e,
                            searchTerm: null
                        }), n.props.onRoleChange(e))
                    }, n.reportInteractive = function() {
                        var e = n.props.data;
                        e && !e.loading && e.currentUser && n.props.latencyTracking.reportInteractive()
                    }, n.state = {
                        userRole: t.role,
                        sortOption: p.CreatedAtDescending,
                        searchType: L.a.Games,
                        searchTerm: null
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.isLoggedIn || this.props.login()
                }, t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error || !this.props.data.currentUser ? null : h.createElement(z.U, {
                        className: "scroll-y",
                        padding: 3,
                        fullHeight: !0
                    }, h.createElement(z.U, {
                        margin: {
                            bottom: 1
                        }
                    }, h.createElement(z._21, {
                        type: z._26.H1,
                        fontSize: z.L.Size3
                    }, Object(U.d)("Clips", "ClipsManagerPage"))), h.createElement(Ne, {
                        channelName: this.props.data.currentUser.login,
                        channelID: this.props.data.currentUser.id,
                        sort: this.state.sortOption,
                        updateSort: this.setSortOption,
                        userRole: this.state.userRole,
                        updateUserRole: this.setUserRole,
                        searchFilterTerm: this.state.searchTerm,
                        searchFilterType: this.state.searchType
                    }))
                }, t.childContextTypes = {
                    setSearchTerm: x.func,
                    setSearchType: x.func,
                    clearSearch: x.func
                }, t
            }(h.Component),
            Ae = Object(g.compose)(Object(w.c)("ClipsManager"), Object(A.a)(xe), f.e)(Ue),
            Le = Object(D.a)(d, c)(Ae),
            Ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== E.Broadcaster && t.props.history.push({
                            pathname: u(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(Le, {
                        channelName: this.props.match.params.channelName,
                        role: E.Broadcaster,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(h.Component),
            je = Object(g.compose)(Object(w.c)("ClipsOfMeManagerPage", {
                destination: b.a.ChannelClipsManager
            }), Object(C.a)({
                location: v.PageviewLocation.ChannelClipsManager,
                properties: {
                    is_live: !1
                }
            }), f.e)(Ie),
            Fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onRoleChange = function(e) {
                        e !== E.Curator && t.props.history.push({
                            pathname: u(t.props.match.params.channelName, e)
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(Le, {
                        channelName: this.props.match.params.channelName,
                        role: E.Curator,
                        onRoleChange: this.onRoleChange
                    })
                }, t
            }(h.Component),
            Be = Object(g.compose)(Object(w.c)("MyClipsManagerPage", {
                destination: b.a.MyClipsManager
            }), Object(C.a)({
                location: v.PageviewLocation.MyClipsManager,
                properties: {
                    is_live: !1
                }
            }), f.e)(Fe);
        n.d(t, "ChannelClipsManagerPage", function() {
            return je
        }), n.d(t, "MyClipsManagerPage", function() {
            return Be
        })
    },
    805: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.RoomMods = 21] = "RoomMods", e[e.RoomState = 22] = "RoomState", e[e.Raid = 23] = "Raid", e[e.Unraid = 24] = "Unraid", e[e.Notice = 25] = "Notice", e[e.Info = 26] = "Info", e[e.BadgesUpdated = 27] = "BadgesUpdated", e[e.Purchase = 28] = "Purchase"
        }(a || (a = {}))
    },
    807: function(e, t, n) {
        "use strict";

        function a(e) {
            return e + "-" + Date.now() + "}"
        }
        t.a = a
    },
    808: function(e, t, n) {
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
            DirectoryPopularByLanguage: "directory.popular.language",
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
    811: function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, o.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    l = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                o.n.tracking.trackPageview(i.__assign({
                                    content: l,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, o.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return l.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(l.Component);
                return Object(s.f)(n)
            }
        }
        var i = n(0),
            r = n(20),
            l = n(1),
            s = n(10),
            o = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    833: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                type: i.a.Info,
                id: Object(r.a)("notice"),
                message: e
            }
        }
        t.a = a;
        var i = n(805),
            r = n(807)
    },
    846: function(e, t, n) {
        "use strict";

        function a(e, t, n, a) {
            return {
                type: e,
                id: Object(i.a)(t + "-mod"),
                userLogin: t,
                reason: n,
                duration: a
            }
        }
        t.a = a;
        var i = n(807)
    },
    853: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(u.a)(p, {
                u: e
            })
        }

        function i(e, t) {
            return Object(u.a)(m, {
                url: e,
                text: t
            })
        }

        function r(e, t) {
            return Object(u.a)(h, {
                url: e,
                title: t
            })
        }

        function l(e) {
            return Object(u.a)(g, {
                url: e
            })
        }
        var s = n(0),
            o = n(1),
            c = n(2),
            d = n(866),
            u = n(88),
            p = "https://www.facebook.com/sharer/sharer.php",
            m = "https://www.twitter.com/share",
            h = "https://www.reddit.com/submit",
            g = "https://vk.com/share.php",
            f = n(3);
        n(895);
        n.d(t, "b", function() {
            return C
        }), n.d(t, "a", function() {
            return b
        });
        var C;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy"
        }(C || (C = {}));
        var b = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? o.createElement("a", s.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(f._39)(n.props)), n.renderIcon()) : o.createElement("button", s.__assign({
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
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(d.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return o.createElement(f.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, o.createElement(f._8, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== C.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case C.Twitter:
                            return "Twitter";
                        case C.Reddit:
                            return "Reddit";
                        case C.Facebook:
                            return "Facebook";
                        case C.VKontakte:
                            return "VKontakte";
                        case C.Copy:
                            return n.state.isCopied ? Object(c.d)("Copied", "SocialButton") : Object(c.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case C.Twitter:
                            return f._9.Twitter;
                        case C.Facebook:
                            return f._9.Facebook;
                        case C.VKontakte:
                            return f._9.VKontakte;
                        case C.Reddit:
                            return f._9.Reddit;
                        case C.Copy:
                        default:
                            return f._9.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case C.Twitter:
                            return e + "--twitter";
                        case C.Reddit:
                            return e + "--reddit";
                        case C.Facebook:
                            return e + "--facebook";
                        case C.VKontakte:
                            return e + "--vkontakte";
                        case C.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        s = e.type,
                        o = n.getUrl(),
                        c = t || "";
                    switch (s) {
                        case C.Reddit:
                            return r(o, c);
                        case C.VKontakte:
                            return l(o);
                        case C.Facebook:
                            return a(o);
                        case C.Twitter:
                            return i(o, c);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return s.__extends(t, e), t.prototype.render = function() {
                return o.createElement(f.U, {
                    className: "social-button"
                }, o.createElement(f._30, {
                    label: this.getTooltipFromType(),
                    direction: f._32.Top
                }, this.renderLink()))
            }, t
        }(o.Component)
    },
    866: function(e, t, n) {
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
    876: function(e, t, n) {
        "use strict";

        function a() {
            return Object(s.d)("Unable to ban user", "BlockUserMutation")
        }

        function i(e) {
            var t = this;
            return Object(o.a)(m, {
                props: function(n) {
                    return {
                        onBanUser: function(i, o) {
                            return void 0 === o && (o = null), l.__awaiter(t, void 0, void 0, function() {
                                var t, m, h, g, f, C;
                                return l.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (t = o ? p.a.Timeout : p.a.Ban, m = e(n.ownProps), h = m.channelID, g = m.onPushMessage, !n.mutate) return [3, 5];
                                            l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, n.mutate(Object(c.a)({
                                                channelID: h,
                                                bannedUserLogin: i,
                                                expiresIn: o && r(o)
                                            }))];
                                        case 2:
                                            return l.sent(), f = Object(u.a)(t, i, null, o), g && g(f), [2, f];
                                        case 3:
                                            throw C = l.sent(), s.i.error(C, "Unable to ban user"), g && g(Object(d.a)(a())), new Error(a());
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw g && g(Object(d.a)(a())), new Error(a());
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        }

        function r(e) {
            if (!e) return "0s";
            var t = e,
                n = "";
            if (t > b) {
                var a = Math.floor(t / b);
                t -= a * b, n += a + "mo"
            }
            if (t > C) {
                var i = Math.floor(t / C);
                t -= i * C, n += i + "w"
            }
            if (t > f) {
                var r = Math.floor(t / f);
                t -= r * f, n += r + "d"
            }
            if (t > g) {
                var l = Math.floor(t / g);
                t -= l * g, n += l + "h"
            }
            if (t > h) {
                var s = Math.floor(t / h);
                t -= s * h, n += s + "m"
            }
            return t > 0 && (n += t + "s"), n
        }
        t.a = i;
        var l = n(0),
            s = n(2),
            o = n(6),
            c = n(21),
            d = n(833),
            u = n(846),
            p = n(805),
            m = n(884),
            h = (n.n(m), 60),
            g = 60 * h,
            f = 24 * g,
            C = 7 * f,
            b = 4 * C
    },
    884: function(e, t) {
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "ban"
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
                                            value: "createdAt"
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
                end: 148
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\n  banUserFromChatRoom(input: $input) {\n    ban {\n      createdAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    895: function(e, t) {},
    925: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var a, i = n(2),
            r = n(853),
            l = n(12),
            s = (a = {}, a[r.b.Twitter] = "twitter", a[r.b.Reddit] = "reddit", a[r.b.VKontakte] = "vkontakte", a[r.b.Facebook] = "facebook", a[r.b.Copy] = "link", a),
            o = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            d = {
                MyClips: l.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: l.PageviewLocation.ChannelClipsManager,
                TopClipsGame: l.PageviewLocation.ClipsGame,
                TopClipsChannel: l.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    i.n.tracking.track(l.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: s[n],
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: Number(e.broadcaster.id),
                        channel: e.broadcaster.login,
                        live: null
                    })
                }
            }
    },
    993: function(e, t, n) {
        "use strict";
        var a = n(853);
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, "b", function() {
            return a.b
        })
    }
});
//# sourceMappingURL=pages.my-clips-manager-13ff02050aad718fe31d65128b573d91.js.map