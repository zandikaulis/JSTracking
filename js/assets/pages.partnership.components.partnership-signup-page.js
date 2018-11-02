(window.webpackJsonp = window.webpackJsonp || []).push([
    [166], {
        "/ysg": function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "createPartnershipApplication"
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
                                    value: "CreatePartnershipApplicationInput"
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
                                value: "createPartnershipApplication"
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
                                        value: "partnershipApplication"
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
                    end: 163
                }
            };
            r.loc.source = {
                body: "mutation createPartnershipApplication($input: CreatePartnershipApplicationInput!) {\ncreatePartnershipApplication(input: $input) {\npartnershipApplication {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        "0ly3": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("HSqT"),
                o = r("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(e.currentTarget.value)
                        }, t.renderLanguageOption = function(e) {
                            return a.createElement("option", {
                                key: e.code,
                                value: e.code
                            }, e.label)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = a.createElement(o.xb, {
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, Object(i.b)().map(this.renderLanguageOption));
                        return this.props.label && (e = a.createElement(o.Ea, {
                            label: this.props.label
                        }, e)), e
                    }, t
                }(a.Component);
            r.d(t, "a", function() {
                return c
            })
        },
        "5NYc": function(e, t, r) {
            "use strict";
            var n, a;
            r.d(t, "b", function() {
                    return n
                }), r.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.IT_BEGINS = "it_begins", e.PATH_TO_AFFILIATE = "path_to_affiliate", e.PATH_TO_PARTNER = "path_to_partner", e.VIP_BADGE = "vip_badge"
                }(n || (n = {})),
                function(e) {
                    e.AVERAGE_CCU = "average_ccu", e.DASHBOARD_VISITED = "dashboard_visited", e.FOLLOW_COUNT = "follow_count", e.GAME_COMMUNITY_TITLE_UPDATED = "game_community_title_updated", e.HAS_FIRST_STREAM = "has_first_stream", e.HOUR_COUNT = "hour_count", e.STREAM_TITLE_UPDATED = "stream_title_updated", e.UNIQUE_CHATTERS = "unique_chatters", e.UNIQUE_DAYS = "unique_days"
                }(a || (a = {}))
        },
        CSPL: function(e, t, r) {},
        HSqT: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            }), r.d(t, "b", function() {
                return c
            });
            var n = r("/7QA"),
                a = [{
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

            function i(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(n.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(a.concat(i()).map(function(e) {
                return e.code
            }));

            function c() {
                var e = n.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return a.slice().sort(function(e, r) {
                    var n = t(e),
                        a = t(r);
                    return n !== a ? n - a : n + ":" + e.label < a + ":" + r.label ? -1 : 1
                }).concat(i(!0))
            }
        },
        IeOy: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PartnershipSignupPageApplicationForm"
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
                                        value: "broadcastSettings"
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
                                                value: "language"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "email"
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
                    end: 153
                }
            };
            r.loc.source = {
                body: "query PartnershipSignupPageApplicationForm {\ncurrentUser {\nid\nbroadcastSettings {\nid\nlanguage\n}\nemail\nroles {\nisPartner\n}\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        Jgup: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return a
            }), r.d(t, "a", function() {
                return i
            });
            var n = r("/7QA");

            function a(e) {
                switch (e.toUpperCase()) {
                    case "A1":
                        return Object(n.d)("Anonymous Proxy", "format-country");
                    case "A2":
                        return Object(n.d)("Satellite Provider", "format-country");
                    case "AD":
                        return Object(n.d)("Andorra", "format-country");
                    case "AE":
                        return Object(n.d)("United Arab Emirates", "format-country");
                    case "AF":
                        return Object(n.d)("Afghanistan", "format-country");
                    case "AG":
                        return Object(n.d)("Antigua and Barbuda", "format-country");
                    case "AI":
                        return Object(n.d)("Anguilla", "format-country");
                    case "AL":
                        return Object(n.d)("Albania", "format-country");
                    case "AM":
                        return Object(n.d)("Armenia", "format-country");
                    case "AO":
                        return Object(n.d)("Angola", "format-country");
                    case "AP":
                        return Object(n.d)("Asia/Pacific Region", "format-country");
                    case "AQ":
                        return Object(n.d)("Antarctica", "format-country");
                    case "AR":
                        return Object(n.d)("Argentina", "format-country");
                    case "AS":
                        return Object(n.d)("American Samoa", "format-country");
                    case "AT":
                        return Object(n.d)("Austria", "format-country");
                    case "AU":
                        return Object(n.d)("Australia", "format-country");
                    case "AW":
                        return Object(n.d)("Aruba", "format-country");
                    case "AX":
                        return Object(n.d)("Aland Islands", "format-country");
                    case "AZ":
                        return Object(n.d)("Azerbaijan", "format-country");
                    case "BA":
                        return Object(n.d)("Bosnia and Herzegovina", "format-country");
                    case "BB":
                        return Object(n.d)("Barbados", "format-country");
                    case "BD":
                        return Object(n.d)("Bangladesh", "format-country");
                    case "BE":
                        return Object(n.d)("Belgium", "format-country");
                    case "BF":
                        return Object(n.d)("Burkina Faso", "format-country");
                    case "BG":
                        return Object(n.d)("Bulgaria", "format-country");
                    case "BH":
                        return Object(n.d)("Bahrain", "format-country");
                    case "BI":
                        return Object(n.d)("Burundi", "format-country");
                    case "BJ":
                        return Object(n.d)("Benin", "format-country");
                    case "BL":
                        return Object(n.d)("Saint Bartelemey", "format-country");
                    case "BM":
                        return Object(n.d)("Bermuda", "format-country");
                    case "BN":
                        return Object(n.d)("Brunei", "format-country");
                    case "BO":
                        return Object(n.d)("Bolivia", "format-country");
                    case "BQ":
                        return Object(n.d)("Bonaire, Saint Eustatius, and Saba", "format-country");
                    case "BR":
                        return Object(n.d)("Brazil", "format-country");
                    case "BS":
                        return Object(n.d)("Bahamas", "format-country");
                    case "BT":
                        return Object(n.d)("Bhutan", "format-country");
                    case "BV":
                        return Object(n.d)("Bouvet Island", "format-country");
                    case "BW":
                        return Object(n.d)("Botswana", "format-country");
                    case "BY":
                        return Object(n.d)("Belarus", "format-country");
                    case "BZ":
                        return Object(n.d)("Belize", "format-country");
                    case "CA":
                        return Object(n.d)("Canada", "format-country");
                    case "CC":
                        return Object(n.d)("Cocos (Keeling) Islands", "format-country");
                    case "CD":
                        return Object(n.d)("Congo, The Democratic Republic of the", "format-country");
                    case "CF":
                        return Object(n.d)("Central African Republic", "format-country");
                    case "CG":
                        return Object(n.d)("Congo", "format-country");
                    case "CH":
                        return Object(n.d)("Switzerland", "format-country");
                    case "CI":
                        return Object(n.d)("Ivory Coast", "format-country");
                    case "CK":
                        return Object(n.d)("Cook Islands", "format-country");
                    case "CL":
                        return Object(n.d)("Chile", "format-country");
                    case "CM":
                        return Object(n.d)("Cameroon", "format-country");
                    case "CN":
                        return Object(n.d)("China", "format-country");
                    case "CO":
                        return Object(n.d)("Colombia", "format-country");
                    case "CR":
                        return Object(n.d)("Costa Rica", "format-country");
                    case "CU":
                        return Object(n.d)("Cuba", "format-country");
                    case "CV":
                        return Object(n.d)("Cape Verde", "format-country");
                    case "CW":
                        return Object(n.d)("Curacao", "format-country");
                    case "CX":
                        return Object(n.d)("Christmas Island", "format-country");
                    case "CY":
                        return Object(n.d)("Cyprus", "format-country");
                    case "CZ":
                        return Object(n.d)("Czech Republic", "format-country");
                    case "DE":
                        return Object(n.d)("Germany", "format-country");
                    case "DJ":
                        return Object(n.d)("Djibouti", "format-country");
                    case "DK":
                        return Object(n.d)("Denmark", "format-country");
                    case "DM":
                        return Object(n.d)("Dominica", "format-country");
                    case "DO":
                        return Object(n.d)("Dominican Republic", "format-country");
                    case "DZ":
                        return Object(n.d)("Algeria", "format-country");
                    case "EC":
                        return Object(n.d)("Ecuador", "format-country");
                    case "EE":
                        return Object(n.d)("Estonia", "format-country");
                    case "EG":
                        return Object(n.d)("Egypt", "format-country");
                    case "EH":
                        return Object(n.d)("Western Sahara", "format-country");
                    case "ER":
                        return Object(n.d)("Eritrea", "format-country");
                    case "ES":
                        return Object(n.d)("Spain", "format-country");
                    case "ET":
                        return Object(n.d)("Ethiopia", "format-country");
                    case "EU":
                        return Object(n.d)("Europe", "format-country");
                    case "FI":
                        return Object(n.d)("Finland", "format-country");
                    case "FJ":
                        return Object(n.d)("Fiji", "format-country");
                    case "FK":
                        return Object(n.d)("Falkland Islands (Malvinas)", "format-country");
                    case "FM":
                        return Object(n.d)("Micronesia", "format-country");
                    case "FO":
                        return Object(n.d)("Faroe Islands", "format-country");
                    case "FR":
                        return Object(n.d)("France", "format-country");
                    case "GA":
                        return Object(n.d)("Gabon", "format-country");
                    case "GB":
                        return Object(n.d)("United Kingdom", "format-country");
                    case "GD":
                        return Object(n.d)("Grenada", "format-country");
                    case "GE":
                        return Object(n.d)("Georgia", "format-country");
                    case "GF":
                        return Object(n.d)("French Guiana", "format-country");
                    case "GG":
                        return Object(n.d)("Guernsey", "format-country");
                    case "GH":
                        return Object(n.d)("Ghana", "format-country");
                    case "GI":
                        return Object(n.d)("Gibraltar", "format-country");
                    case "GL":
                        return Object(n.d)("Greenland", "format-country");
                    case "GM":
                        return Object(n.d)("Gambia", "format-country");
                    case "GN":
                        return Object(n.d)("Guinea", "format-country");
                    case "GP":
                        return Object(n.d)("Guadeloupe", "format-country");
                    case "GQ":
                        return Object(n.d)("Equatorial Guinea", "format-country");
                    case "GR":
                        return Object(n.d)("Greece", "format-country");
                    case "GS":
                        return Object(n.d)("South Georgia and the South Sandwich Islands", "format-country");
                    case "GT":
                        return Object(n.d)("Guatemala", "format-country");
                    case "GU":
                        return Object(n.d)("Guam", "format-country");
                    case "GW":
                        return Object(n.d)("Guinea-Bissau", "format-country");
                    case "GY":
                        return Object(n.d)("Guyana", "format-country");
                    case "HK":
                        return Object(n.d)("Hong Kong", "format-country");
                    case "HM":
                        return Object(n.d)("Heard Island and McDonald Islands", "format-country");
                    case "HN":
                        return Object(n.d)("Honduras", "format-country");
                    case "HR":
                        return Object(n.d)("Croatia", "format-country");
                    case "HT":
                        return Object(n.d)("Haiti", "format-country");
                    case "HU":
                        return Object(n.d)("Hungary", "format-country");
                    case "ID":
                        return Object(n.d)("Indonesia", "format-country");
                    case "IE":
                        return Object(n.d)("Ireland", "format-country");
                    case "IL":
                        return Object(n.d)("Israel", "format-country");
                    case "IM":
                        return Object(n.d)("Isle of Man", "format-country");
                    case "IN":
                        return Object(n.d)("India", "format-country");
                    case "IO":
                        return Object(n.d)("British Indian Ocean Territory", "format-country");
                    case "IQ":
                        return Object(n.d)("Iraq", "format-country");
                    case "IR":
                        return Object(n.d)("Iran", "format-country");
                    case "IS":
                        return Object(n.d)("Iceland", "format-country");
                    case "IT":
                        return Object(n.d)("Italy", "format-country");
                    case "JE":
                        return Object(n.d)("Jersey", "format-country");
                    case "JM":
                        return Object(n.d)("Jamaica", "format-country");
                    case "JO":
                        return Object(n.d)("Jordan", "format-country");
                    case "JP":
                        return Object(n.d)("Japan", "format-country");
                    case "KE":
                        return Object(n.d)("Kenya", "format-country");
                    case "KG":
                        return Object(n.d)("Kyrgyzstan", "format-country");
                    case "KH":
                        return Object(n.d)("Cambodia", "format-country");
                    case "KI":
                        return Object(n.d)("Kiribati", "format-country");
                    case "KM":
                        return Object(n.d)("Comoros", "format-country");
                    case "KN":
                        return Object(n.d)("Saint Kitts and Nevis", "format-country");
                    case "KP":
                        return Object(n.d)("North Korea", "format-country");
                    case "KR":
                        return Object(n.d)("South Korea", "format-country");
                    case "KW":
                        return Object(n.d)("Kuwait", "format-country");
                    case "KY":
                        return Object(n.d)("Cayman Islands", "format-country");
                    case "KZ":
                        return Object(n.d)("Kazakhstan", "format-country");
                    case "LA":
                        return Object(n.d)("Laos", "format-country");
                    case "LB":
                        return Object(n.d)("Lebanon", "format-country");
                    case "LC":
                        return Object(n.d)("Saint Lucia", "format-country");
                    case "LI":
                        return Object(n.d)("Liechtenstein", "format-country");
                    case "LK":
                        return Object(n.d)("Sri Lanka", "format-country");
                    case "LR":
                        return Object(n.d)("Liberia", "format-country");
                    case "LS":
                        return Object(n.d)("Lesotho", "format-country");
                    case "LT":
                        return Object(n.d)("Lithuania", "format-country");
                    case "LU":
                        return Object(n.d)("Luxembourg", "format-country");
                    case "LV":
                        return Object(n.d)("Latvia", "format-country");
                    case "LY":
                        return Object(n.d)("Libya", "format-country");
                    case "MA":
                        return Object(n.d)("Morocco", "format-country");
                    case "MC":
                        return Object(n.d)("Monaco", "format-country");
                    case "MD":
                        return Object(n.d)("Moldova", "format-country");
                    case "ME":
                        return Object(n.d)("Montenegro", "format-country");
                    case "MF":
                        return Object(n.d)("Saint Martin", "format-country");
                    case "MG":
                        return Object(n.d)("Madagascar", "format-country");
                    case "MH":
                        return Object(n.d)("Marshall Islands", "format-country");
                    case "MK":
                        return Object(n.d)("Macedonia", "format-country");
                    case "ML":
                        return Object(n.d)("Mali", "format-country");
                    case "MM":
                        return Object(n.d)("Myanmar", "format-country");
                    case "MN":
                        return Object(n.d)("Mongolia", "format-country");
                    case "MO":
                        return Object(n.d)("Macao", "format-country");
                    case "MP":
                        return Object(n.d)("Northern Mariana Islands", "format-country");
                    case "MQ":
                        return Object(n.d)("Martinique", "format-country");
                    case "MR":
                        return Object(n.d)("Mauritania", "format-country");
                    case "MS":
                        return Object(n.d)("Montserrat", "format-country");
                    case "MT":
                        return Object(n.d)("Malta", "format-country");
                    case "MU":
                        return Object(n.d)("Mauritius", "format-country");
                    case "MV":
                        return Object(n.d)("Maldives", "format-country");
                    case "MW":
                        return Object(n.d)("Malawi", "format-country");
                    case "MX":
                        return Object(n.d)("Mexico", "format-country");
                    case "MY":
                        return Object(n.d)("Malaysia", "format-country");
                    case "MZ":
                        return Object(n.d)("Mozambique", "format-country");
                    case "NA":
                        return Object(n.d)("Namibia", "format-country");
                    case "NC":
                        return Object(n.d)("New Caledonia", "format-country");
                    case "NE":
                        return Object(n.d)("Niger", "format-country");
                    case "NF":
                        return Object(n.d)("Norfolk Island", "format-country");
                    case "NG":
                        return Object(n.d)("Nigeria", "format-country");
                    case "NI":
                        return Object(n.d)("Nicaragua", "format-country");
                    case "NL":
                        return Object(n.d)("Netherlands", "format-country");
                    case "NO":
                        return Object(n.d)("Norway", "format-country");
                    case "NP":
                        return Object(n.d)("Nepal", "format-country");
                    case "NR":
                        return Object(n.d)("Nauru", "format-country");
                    case "NU":
                        return Object(n.d)("Niue", "format-country");
                    case "NZ":
                        return Object(n.d)("New Zealand", "format-country");
                    case "O1":
                        return Object(n.d)("Other Country", "format-country");
                    case "OM":
                        return Object(n.d)("Oman", "format-country");
                    case "PA":
                        return Object(n.d)("Panama", "format-country");
                    case "PE":
                        return Object(n.d)("Peru", "format-country");
                    case "PF":
                        return Object(n.d)("French Polynesia", "format-country");
                    case "PG":
                        return Object(n.d)("Papua New Guinea", "format-country");
                    case "PH":
                        return Object(n.d)("Philippines", "format-country");
                    case "PK":
                        return Object(n.d)("Pakistan", "format-country");
                    case "PL":
                        return Object(n.d)("Poland", "format-country");
                    case "PM":
                        return Object(n.d)("Saint Pierre and Miquelon", "format-country");
                    case "PN":
                        return Object(n.d)("Pitcairn", "format-country");
                    case "PR":
                        return Object(n.d)("Puerto Rico", "format-country");
                    case "PS":
                        return Object(n.d)("Palestine", "format-country");
                    case "PT":
                        return Object(n.d)("Portugal", "format-country");
                    case "PW":
                        return Object(n.d)("Palau", "format-country");
                    case "PY":
                        return Object(n.d)("Paraguay", "format-country");
                    case "QA":
                        return Object(n.d)("Qatar", "format-country");
                    case "RE":
                        return Object(n.d)("Reunion", "format-country");
                    case "RO":
                        return Object(n.d)("Romania", "format-country");
                    case "RS":
                        return Object(n.d)("Serbia", "format-country");
                    case "RU":
                        return Object(n.d)("Russia", "format-country");
                    case "RW":
                        return Object(n.d)("Rwanda", "format-country");
                    case "SA":
                        return Object(n.d)("Saudi Arabia", "format-country");
                    case "SB":
                        return Object(n.d)("Solomon Islands", "format-country");
                    case "SC":
                        return Object(n.d)("Seychelles", "format-country");
                    case "SD":
                        return Object(n.d)("Sudan", "format-country");
                    case "SE":
                        return Object(n.d)("Sweden", "format-country");
                    case "SG":
                        return Object(n.d)("Singapore", "format-country");
                    case "SH":
                        return Object(n.d)("Saint Helena", "format-country");
                    case "SI":
                        return Object(n.d)("Slovenia", "format-country");
                    case "SJ":
                        return Object(n.d)("Svalbard and Jan Mayen", "format-country");
                    case "SK":
                        return Object(n.d)("Slovakia", "format-country");
                    case "SL":
                        return Object(n.d)("Sierra Leone", "format-country");
                    case "SM":
                        return Object(n.d)("San Marino", "format-country");
                    case "SN":
                        return Object(n.d)("Senegal", "format-country");
                    case "SO":
                        return Object(n.d)("Somalia", "format-country");
                    case "SR":
                        return Object(n.d)("Suriname", "format-country");
                    case "SS":
                        return Object(n.d)("South Sudan", "format-country");
                    case "ST":
                        return Object(n.d)("Sao Tome and Principe", "format-country");
                    case "SV":
                        return Object(n.d)("El Salvador", "format-country");
                    case "SX":
                        return Object(n.d)("Sint Maarten", "format-country");
                    case "SY":
                        return Object(n.d)("Syria", "format-country");
                    case "SZ":
                        return Object(n.d)("Swaziland", "format-country");
                    case "TC":
                        return Object(n.d)("Turks and Caicos Islands", "format-country");
                    case "TD":
                        return Object(n.d)("Chad", "format-country");
                    case "TF":
                        return Object(n.d)("French Southern Territories", "format-country");
                    case "TG":
                        return Object(n.d)("Togo", "format-country");
                    case "TH":
                        return Object(n.d)("Thailand", "format-country");
                    case "TJ":
                        return Object(n.d)("Tajikistan", "format-country");
                    case "TK":
                        return Object(n.d)("Tokelau", "format-country");
                    case "TL":
                        return Object(n.d)("East Timor", "format-country");
                    case "TM":
                        return Object(n.d)("Turkmenistan", "format-country");
                    case "TN":
                        return Object(n.d)("Tunisia", "format-country");
                    case "TO":
                        return Object(n.d)("Tonga", "format-country");
                    case "TR":
                        return Object(n.d)("Turkey", "format-country");
                    case "TT":
                        return Object(n.d)("Trinidad and Tobago", "format-country");
                    case "TV":
                        return Object(n.d)("Tuvalu", "format-country");
                    case "TW":
                        return Object(n.d)("Taiwan", "format-country");
                    case "TZ":
                        return Object(n.d)("Tanzania", "format-country");
                    case "UA":
                        return Object(n.d)("Ukraine", "format-country");
                    case "UG":
                        return Object(n.d)("Uganda", "format-country");
                    case "UM":
                        return Object(n.d)("United States Minor Outlying Islands", "format-country");
                    case "US":
                        return Object(n.d)("United States", "format-country");
                    case "UY":
                        return Object(n.d)("Uruguay", "format-country");
                    case "UZ":
                        return Object(n.d)("Uzbekistan", "format-country");
                    case "VA":
                        return Object(n.d)("Vatican City", "format-country");
                    case "VC":
                        return Object(n.d)("Saint Vincent and the Grenadines", "format-country");
                    case "VE":
                        return Object(n.d)("Venezuela", "format-country");
                    case "VG":
                        return Object(n.d)("British Virgin Islands", "format-country");
                    case "VI":
                        return Object(n.d)("U.S. Virgin Islands", "format-country");
                    case "VN":
                        return Object(n.d)("Vietnam", "format-country");
                    case "VU":
                        return Object(n.d)("Vanuatu", "format-country");
                    case "WF":
                        return Object(n.d)("Wallis and Futuna", "format-country");
                    case "WS":
                        return Object(n.d)("Samoa", "format-country");
                    case "YE":
                        return Object(n.d)("Yemen", "format-country");
                    case "YT":
                        return Object(n.d)("Mayotte", "format-country");
                    case "ZA":
                        return Object(n.d)("South Africa", "format-country");
                    case "ZM":
                        return Object(n.d)("Zambia", "format-country");
                    case "ZW":
                        return Object(n.d)("Zimbabwe", "format-country");
                    default:
                        return e
                }
            }
            var i = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
        },
        PIi5: function(e, t, r) {
            e.exports = r.p + "assets/approved-b7fded72105f623eb500.jpg"
        },
        Z4LW: function(e, t, r) {
            e.exports = r.p + "assets/reviewed-eba94c6c562b29d50358.jpg"
        },
        b6Yk: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("mrSG"),
                a = r("/7QA"),
                i = r("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "GET"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "PUT"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "POST"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, n.__assign({}, t, {
                                            method: "DELETE"
                                        }), r)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a, i, o, c;
                            return n.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), a = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, a), o = n.__assign({}, t, {
                                            body: i
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return c = s.sent(), [4, this.constructLegacyAPIResponse(c)];
                                    case 2:
                                        return [2, s.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return n.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((a = i.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, n.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw i.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return n.__awaiter(this, void 0, Promise, function() {
                            var t, r, a, i;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return r = n.sent(), e.ok ? t.body = r : t.error = r, [3, 4];
                                    case 3:
                                        return a = n.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), n.__awaiter(this, void 0, Promise, function() {
                            return n.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: n.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var r = a.p.store.getState(),
                            n = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (n["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(i.e)(r);
                        return o && (n.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (n["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            n[e] && delete n[e]
                        }), n
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        bsVm: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, a = r("/MKj"),
                i = r("kRBY"),
                o = r("mrSG"),
                c = r("q1tI"),
                s = r("oJmH"),
                u = r("/7QA"),
                l = r("ZDlU"),
                d = r("yR8l"),
                m = r("V+GM"),
                p = r("NvVO"),
                f = r("2xye"),
                b = r("GnwI"),
                h = r("PIi5"),
                g = r.n(h),
                y = r("Ue10");
            r("CSPL");
            ! function(e) {
                e.Header = "header"
            }(n || (n = {}));
            var O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.header;
                        return c.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            fullWidth: !0,
                            justifyContent: y.Wa.Start
                        }, c.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            className: "partner-signup-exit-layout-outer-container",
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            justifyContent: y.Wa.Start
                        }, c.createElement(y.Xa, {
                            className: "partner-signup-exit-layout-inner-container"
                        }, e && c.createElement(y.Xa, {
                            "data-test-selector": n.Header,
                            fullWidth: !0,
                            margin: {
                                bottom: 3
                            }
                        }, e), c.createElement(y.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, c.createElement(y.S, {
                            alt: this.props.alt,
                            src: this.props.src
                        })), c.createElement(y.Xa, {
                            textAlign: y.Ob.Center
                        }, c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, {
                            bold: !0,
                            fontSize: y.Ca.Size3,
                            type: y.Sb.H3
                        }, this.props.title)), c.createElement(y.W, {
                            fontSize: y.Ca.Size5,
                            color: y.O.Alt2
                        }, this.props.description), this.props.children))))
                    }, t
                }(c.Component),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.sessionUser;
                        return e ? c.createElement(O, {
                            alt: Object(u.d)("Approved", "SubmittedPage"),
                            description: Object(u.d)("You've been accepted into the Twitch Partner program.", "SubmittedPage"),
                            title: Object(u.d)("Congratulations!", "SubmittedPage"),
                            src: g.a
                        }, c.createElement(y.z, {
                            linkTo: "/" + e.login + "/dashboard/settings/revenue"
                        }, Object(u.d)("Manage Benefits", "PartnerSignupSubmittedPage"))) : null
                    }, t
                }(c.Component);
            var j, S, C = Object(a.connect)(function(e) {
                    return {
                        sessionUser: Object(i.e)(e)
                    }
                })(v),
                E = r("fvjX"),
                P = r("0ly3"),
                T = r("Jgup"),
                A = r("geRD"),
                k = function() {
                    return c.createElement(y.Cb, {
                        background: y.r.Base,
                        padding: 2,
                        margin: {
                            bottom: 2
                        },
                        border: !0,
                        borderRadius: y.x.Medium
                    }, c.createElement(y.bc, null, c.createElement("h3", null, Object(u.d)("Partnership Guidelines", "PartnershipSignupGuidelines")), c.createElement("ul", null, c.createElement("li", null, Object(u.d)("Complete the <x:path-to-partner>Path to Partner Achievement</x:path-to-partner> or demonstrate large, engaged viewership/following on other services. Streamers who complete the Path to Partner achievements in your Achievements Dashboard will unlock a button to apply for Partnership, and receive priority for their application to be reviewed. Please note that these Achievements list the minimum criteria we look for in potential Partners, and completing them does not guarantee Partnership.", {
                        "x:path-to-partner": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "/broadcast/dashboard/achievements"
                            }, e)
                        }
                    }, "PartnershipSignupGuidelines")), c.createElement("li", null, Object(u.d)("Content that conforms to our <x:guidelines>Community Guidelines</x:guidelines>, <x:tos>Terms of Service</x:tos> and <x:dmca>DMCA Guidelines</x:dmca>.", {
                        "x:guidelines": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/community-guidelines"
                            }, e)
                        },
                        "x:tos": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/terms-of-service"
                            }, e)
                        },
                        "x:dmca": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/dmca-guidelines/"
                            }, e)
                        }
                    }, "PartnershipSignupGuidelines"))), c.createElement(y.W, {
                        color: y.O.Alt2
                    }, Object(u.d)("Make sure you tell us a little bit about your channel and community as well as any other achievements that you think are relevant to your Partnership application. You can also include your social media accounts to help us evaluate your application.", "PartnershipSignupGuidelines")), c.createElement(y.W, {
                        color: y.O.Alt2
                    }, Object(u.d)("If you do not currently meet these qualifications, you should consider the <x:affiliate-program>Affiliate program</x:affiliate-program>, obtainable through the <x:path-to-affiliate>Path to Affiliate Achievement</x:path-to-affiliate>. You can also learn more about how to grow on Twitch via <x:creator-camp>Creator Camp</x:creator-camp>, the go-to strategy guide for all things Twitch.", {
                        "x:affiliate-program": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "http://affiliate.twitch.tv/"
                            }, e)
                        },
                        "x:path-to-affiliate": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "/broadcast/dashboard/achievements"
                            }, e)
                        },
                        "x:creator-camp": function(e) {
                            return c.createElement(y.U, {
                                targetBlank: !0,
                                to: "https://www.twitch.tv/creatorcamp/en/?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1"
                            }, e)
                        }
                    }, "PartnershipSignupGuidelines")), c.createElement(y.W, {
                        color: y.O.Alt2
                    }, Object(u.d)("Since we take the time to review every application individually, it may take up to 2-4 weeks for you to hear back from us. Those who have completed the Path to Partner Achievement can expect a response within 7 business days.", "PartnershipSignupGuidelines")), c.createElement(y.W, {
                        color: y.O.Alt2
                    }, Object(u.d)("All of these are general guidelines, and exceptions are handled on a case-by-case basis.", "PartnershipSignupGuidelines"))))
                };
            r("v/DO");
            ! function(e) {
                e.LeftColumn = "left-column", e.RightColumn = "right-column"
            }(j || (j = {})),
            function(e) {
                e.Description = "partnership-signup-main-layout-description", e.LeftColumn = "partnership-signup-main-layout-left-column", e.RightColumn = "partnership-signup-main-layout-right-column"
            }(S || (S = {}));
            var w, _, N, M, F, I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.description,
                            t = this.props.flexDirection || y.Aa.Row,
                            r = t === y.Aa.Row;
                        return c.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            fullWidth: !0,
                            padding: 4,
                            justifyContent: y.Wa.Start
                        }, c.createElement(y.Xa, {
                            className: "partner-signup-main-layout"
                        }, c.createElement(y.Xa, null, c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, {
                            bold: !0,
                            type: y.Sb.H1
                        }, Object(u.d)("Partner Application", "PartnershipSignupApplicationTitle"))), e && c.createElement(y.Xa, {
                            "data-test-selector": S.Description,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, {
                            type: y.Sb.P,
                            fontSize: y.Ca.Size5
                        }, e))), c.createElement(y.Xa, {
                            display: y.X.Flex,
                            flexDirection: t
                        }, c.createElement(y.Xa, {
                            className: r ? j.LeftColumn : "",
                            "data-test-selector": S.LeftColumn,
                            flexOrder: r ? 1 : 2,
                            fullWidth: !r,
                            margin: r ? {
                                right: 2
                            } : void 0
                        }, this.props.children), c.createElement(y.Xa, {
                            className: r ? j.RightColumn : "",
                            "data-test-selector": S.RightColumn,
                            flexOrder: r ? 2 : 1,
                            fullWidth: !r
                        }, c.createElement(k, null)))))
                    }, t
                }(c.Component),
                L = r("/ysg"),
                x = r("IeOy");
            ! function(e) {
                e.ChannelLogin = "partner-signup-channel-login", e.Button = "partner-signup-submit-button", e.Category = "partner-signup-category", e.Country = "ppartner-signup-country", e.Description = "partner-signup-description", e.Email = "partnership_signup-email", e.FullName = "partner-signup-full-name", e.Language = "partner-signup-language"
            }(w || (w = {})),
            function(e) {
                e.Gaming = "gaming", e.Creative = "creative"
            }(_ || (_ = {})),
            function(e) {
                e.General = "general"
            }(N || (N = {})),
            function(e) {
                e.Category = "category", e.Country = "country", e.Description = "description", e.FullName = "full-name", e.Language = "language"
            }(M || (M = {})),
            function(e) {
                e.Category = "category", e.Country = "country", e.Description = "description", e.FullName = "fullName", e.Language = "language"
            }(F || (F = {}));
            var D = function(e) {
                    function t(t) {
                        var r, n = e.call(this, t) || this;
                        n.logger = u.k.withCategory("PartnershipApplication"), n.handleLanguageChange = function(e) {
                            n.handleFieldChange(F.Language, e)
                        }, n.handleFieldChange = function(e, t) {
                            n.setState(function(r) {
                                var n;
                                return {
                                    fields: o.__assign({}, r.fields, (n = {}, n[e] = t, n)),
                                    formErrorType: void 0
                                }
                            }, function() {
                                e !== F.Category && e !== F.Language || function(e, t) {
                                    u.p.tracking.track(f.SpadeEventType.PartnershipApplicationInteraction, {
                                        field_name: e,
                                        field_value: t
                                    })
                                }(e, t)
                            })
                        }, n.handleInFeatureCloseClick = function() {
                            return n.setState({
                                formErrorType: void 0
                            })
                        }, n.handleSubmitClick = function() {
                            return o.__awaiter(n, void 0, void 0, function() {
                                var e, t, r, n, a = this;
                                return o.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                processingApplication: !0
                                            }), e = Object(A.a)(this.state.fields), t = void 0, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.props.createPartnershipApplication(e)];
                                        case 2:
                                            return (r = i.sent()) && r.data && r.data.createPartnershipApplication && r.data.createPartnershipApplication.partnershipApplication || (t = N.General, this.logger.warn("Failed to submit partnership application")), [3, 4];
                                        case 3:
                                            return n = i.sent(), t = N.General, this.logger.error(n, "Application err"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                formErrorType: t,
                                                processingApplication: !1
                                            }, function() {
                                                t || a.props.onApplicationSubmitted()
                                            }), [2]
                                    }
                                })
                            })
                        }, n.registerHandleFieldChange = function(e) {
                            return function(t) {
                                var r = t.target.value;
                                n.handleFieldChange(e, r)
                            }
                        };
                        var a = n.props.data,
                            i = a.currentUser,
                            c = a.requestInfo.countryCode;
                        return n.state = {
                            fields: (r = {}, r[F.Country] = c || "US", r[F.Category] = _.Gaming, r[F.Description] = "", r[F.FullName] = "", r[F.Language] = i && i.broadcastSettings && i.broadcastSettings.language || "en", r),
                            processingApplication: !1
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.data.currentUser,
                            r = e.sessionUser;
                        return r && t && t.email && t.roles ? c.createElement(I, null, this.state.formErrorType && c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.Na, {
                            closeButtonAriaLabel: Object(u.d)("Dismiss", "PartnershipSignupForm"),
                            closeButtonOnClick: this.handleInFeatureCloseClick,
                            description: this.formErrorMessage,
                            title: Object(u.d)("Error", "PartnershipSignupForm"),
                            type: y.Oa.Error
                        })), c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.Ea, {
                            label: Object(u.d)("Twitch Username", "PartnershipSignupForm")
                        }, c.createElement(y.Ra, {
                            "data-test-selector": w.ChannelLogin,
                            disabled: !0,
                            type: y.Ta.Text,
                            value: r.login
                        }))), c.createElement(y.Xa, {
                            margin: {
                                y: 2
                            }
                        }, c.createElement(y.Ea, {
                            label: Object(u.d)("Email", "PartnershipSignupForm")
                        }, c.createElement(y.Ra, {
                            "data-test-selector": w.Email,
                            disabled: !0,
                            type: y.Ta.Email,
                            value: t.email
                        }))), c.createElement(y.Xa, {
                            margin: {
                                y: 2
                            }
                        }, c.createElement(y.Ea, {
                            id: M.Category,
                            label: Object(u.d)("Category", "PartnershipSignupForm")
                        }, c.createElement(y.xb, {
                            "data-test-selector": w.Category,
                            id: M.Category,
                            onChange: this.registerHandleFieldChange(F.Category)
                        }, c.createElement("option", {
                            value: _.Gaming
                        }, Object(u.d)("Gaming", "PartnershipSignupForm")), c.createElement("option", {
                            value: _.Creative
                        }, Object(u.d)("Creative", "PartnershipSignupForm"))))), c.createElement(y.Xa, {
                            margin: {
                                y: 2
                            }
                        }, c.createElement(y.Ea, {
                            id: M.Country,
                            label: Object(u.d)("Applicant Country", "PartnershipSignupForm")
                        }, c.createElement(y.xb, {
                            "data-test-selector": w.Country,
                            id: M.Country,
                            value: this.state.fields.country,
                            onChange: this.registerHandleFieldChange(F.Country)
                        }, T.a.map(function(e) {
                            return c.createElement("option", {
                                value: e,
                                key: "countryCode-" + e
                            }, Object(T.b)(e))
                        })))), c.createElement(y.Xa, {
                            margin: {
                                y: 2
                            }
                        }, c.createElement(y.Ea, {
                            id: M.Language,
                            label: Object(u.d)("Applicant Language", "PartnershipSignupForm")
                        }, c.createElement(P.a, {
                            onChange: this.handleLanguageChange,
                            defaultLanguage: this.state.fields.language,
                            disabled: !1,
                            "data-test-selector": w.Language
                        }))), c.createElement(y.Xa, {
                            margin: {
                                y: 2
                            }
                        }, c.createElement(y.Ea, {
                            id: M.FullName,
                            "data-test-selector": w.FullName,
                            label: Object(u.d)("Full Name", "PartnershipSignupForm"),
                            hint: Object(u.d)("First and Last Name", "PartnershipSignupForm")
                        }, c.createElement(y.Ra, {
                            id: M.FullName,
                            name: F.FullName,
                            type: y.Ta.Text,
                            value: this.state.fields.fullName,
                            onChange: this.registerHandleFieldChange(F.FullName)
                        }))), c.createElement(y.Xa, {
                            margin: {
                                y: 2
                            }
                        }, c.createElement(y.Ea, {
                            id: M.Description,
                            "data-test-selector": w.Description,
                            label: Object(u.d)("Details", "PartnershipSignupForm"),
                            hint: Object(u.d)("Tell us about your stream", "PartnershipSignupForm")
                        }, c.createElement(y.Pb, {
                            id: M.Description,
                            onChange: this.registerHandleFieldChange(F.Description)
                        }))), c.createElement(y.z, {
                            "data-test-selector": w.Button,
                            state: this.state.processingApplication ? y.E.Loading : y.E.Default,
                            onClick: this.handleSubmitClick,
                            disabled: !(this.state.fields[F.FullName] && this.state.fields[F.Description] && !this.state.processingApplication && !this.state.formErrorType)
                        }, Object(u.d)("Submit Application", "PartnershipSignupForm"))) : null
                    }, Object.defineProperty(t.prototype, "formErrorMessage", {
                        get: function() {
                            switch (this.state.formErrorType) {
                                default:
                                    case N.General:
                                    return Object(u.d)("There was an error submitting your application", "PartnershipSignupForm")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(c.Component),
                G = Object(E.compose)(Object(d.a)(x), Object(d.a)(L, {
                    name: "createPartnershipApplication"
                }))(D);
            var R, U, B = Object(a.connect)(function(e) {
                    return {
                        sessionUser: Object(i.e)(e)
                    }
                })(G),
                V = r("oCrl"),
                W = r.n(V),
                H = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("In Review", "SubmittedPage");
                        return c.createElement(O, {
                            alt: e,
                            description: Object(u.d)("Thanks for applying to be a Twitch Partner! Your partnership application is currently being reviewed.", "SubmittedPage"),
                            title: e,
                            src: W.a
                        })
                    }, t
                }(c.Component),
                X = r("Z4LW"),
                q = r.n(X),
                Y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(O, {
                            alt: Object(u.d)("Reviewed", "SubmittedPage"),
                            description: Object(u.d)("Please check your email at <x:strong>{userEmail}</x:strong> to see the result of your application. If you need to apply again, please try again on <x:strong>{reviewedByDate}</x:strong>.", {
                                userEmail: this.props.email,
                                reviewedByDate: Object(u.c)(this.props.reviewedByDate, {
                                    month: "long",
                                    day: "numeric"
                                }),
                                "x:strong": function(e) {
                                    return c.createElement(y.W, {
                                        bold: !0,
                                        type: y.Sb.Span
                                    }, e)
                                }
                            }, "SubmittedPage"),
                            title: Object(u.d)("Review Complete", "SubmittedPage"),
                            src: q.a
                        })
                    }, t
                }(c.Component),
                K = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isNotificationDismissed: !1
                        }, t.handleNotificationCloseButtonClick = function() {
                            return t.setState({
                                isNotificationDismissed: !0
                            })
                        }, t.getHeader = function() {
                            return t.state.isNotificationDismissed ? null : c.createElement(y.Na, {
                                closeButtonAriaLabel: Object(u.d)("Dismiss", "PartnerSignupApplicationSubmitted"),
                                closeButtonOnClick: t.handleNotificationCloseButtonClick,
                                description: "",
                                title: t.applicationSubmittedText,
                                type: y.Oa.Success
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(O, {
                            alt: Object(u.d)("Submitted", "PartnerSignupApplicationSubmitted"),
                            description: Object(u.d)("Thanks for applying to be a Twitch Partner! Your partnership application is currently being reviewed!", "PartnerSignupApplicationSubmitted"),
                            header: this.getHeader(),
                            title: this.applicationSubmittedText,
                            src: W.a
                        })
                    }, Object.defineProperty(t.prototype, "applicationSubmittedText", {
                        get: function() {
                            return Object(u.d)("Application Submitted!", "PartnerSignupApplicationSubmitted")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(c.Component),
                Z = r("5NYc"),
                z = r("vYsf"),
                J = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(c.Fragment, null, c.createElement(y.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, null, Object(u.d)("Congratulations! You're eligible to apply for the Twitch Partnership Program", "PartnerSignupVerifySocialMediaConnection"))), c.createElement(y.z, {
                            onClick: this.props.onChecklistComplete,
                            type: y.F.Default
                        }, Object(u.d)("Apply Now", "PartnerSignupVerifySocialMediaConnection")))
                    }, t
                }(c.Component);
            ! function(e) {
                e.Criteria = "partner-signup-checklist-criteria", e.Value = "partner-signup-checklist-value"
            }(R || (R = {})),
            function(e) {
                e[e.Complete = 0] = "Complete", e[e.Error = 1] = "Error", e[e.Incomplete = 2] = "Incomplete"
            }(U || (U = {}));
            var Q, $ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.value;
                        return c.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Row,
                            fullWidth: !0,
                            justifyContent: y.Wa.Between
                        }, c.createElement(y.W, {
                            "data-test-selector": R.Criteria,
                            bold: !0
                        }, this.props.criteria), c.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Row
                        }, e && c.createElement(y.Xa, {
                            margin: {
                                right: 1
                            }
                        }, "string" == typeof e ? c.createElement(y.W, {
                            color: y.O.Alt2,
                            "data-test-selector": R.Value
                        }, e) : e), c.createElement(y.qb, o.__assign({}, this.svgProps))))
                    }, Object.defineProperty(t.prototype, "svgProps", {
                        get: function() {
                            switch (this.props.type) {
                                default:
                                    case U.Complete:
                                    return {
                                    asset: y.rb.Check,
                                    type: y.sb.Success
                                };
                                case U.Error:
                                        return {
                                        asset: y.rb.NotificationError,
                                        type: y.sb.Alert
                                    };
                                case U.Incomplete:
                                        return {
                                        asset: y.rb.Check,
                                        type: y.sb.Alt2
                                    }
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(c.Component),
                ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.borderTop,
                            r = e.margin;
                        return c.createElement(y.Cb, {
                            background: this.props.background || y.r.Base,
                            borderRadius: this.props.borderRadius || y.x.Medium,
                            borderBottom: !0,
                            borderLeft: !0,
                            borderRight: !0,
                            borderTop: void 0 === t || t,
                            margin: void 0 !== r ? r : {
                                bottom: 2
                            },
                            padding: 2
                        }, this.props.children)
                    }, t
                }(c.Component),
                te = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(y.U, {
                            targetBlank: !0,
                            to: this.props.to
                        }, c.createElement(y.Xa, {
                            alignItems: y.f.Center,
                            display: y.X.InlineFlex
                        }, c.createElement(y.Xa, {
                            margin: {
                                right: 1
                            }
                        }, c.createElement(y.W, null, this.props.message)), c.createElement(y.qb, {
                            asset: y.rb.Popout
                        })))
                    }, t
                }(c.Component);
            (Q || (Q = {})).Instruction = "instruction";
            var re, ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(c.Fragment, null, c.createElement(ee, {
                            borderRadius: {
                                topLeft: y.x.Medium,
                                topRight: y.x.Medium
                            },
                            margin: 0
                        }, c.createElement($, {
                            criteria: this.props.criteria,
                            type: U.Incomplete
                        })), c.createElement(ee, {
                            background: y.r.Alt,
                            borderRadius: {
                                bottomLeft: y.x.Medium,
                                bottomRight: y.x.Medium
                            },
                            borderTop: !1
                        }, c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, {
                            "data-test-selector": Q.Instruction
                        }, this.props.instruction)), c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, null, Object(u.d)("Unfortunately, your channel is not currently eligible to apply for the Twitch Partnership Program. In the meantime, please take a look at these resources to help grow your audience on Twitch.", "PartnerSignupVerifyAchievements"))), c.createElement(te, {
                            message: this.props.message,
                            to: this.props.to
                        })))
                    }, t
                }(c.Component),
                ae = r("jxNC");
            ! function(e) {
                e[e.CanApplyToPartner = 0] = "CanApplyToPartner", e[e.CompletePathToAffiliate = 1] = "CompletePathToAffiliate", e[e.CompletePathToPartner = 2] = "CompletePathToPartner", e[e.Error = 3] = "Error", e[e.StartStreaming = 4] = "StartStreaming", e[e.Loading = 5] = "Loading"
            }(re || (re = {}));
            var ie = 4,
                oe = 0,
                ce = 5,
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            countdown: ce,
                            retryCount: oe,
                            view: re.Loading
                        }, t.handleCloseButtonOnClick = function() {
                            t.retryQuery(oe)
                        }, t.handleCountdownTimer = function() {
                            var e = t.state.countdown;
                            t.state.retryCount >= ie ? t.stopCountdownTimer() : e <= 0 ? t.retryQuery() : t.setState(function(e) {
                                return {
                                    countdown: e.countdown - 1
                                }
                            })
                        }, t.stopCountdownTimer = function() {
                            t.countdownIntervalID && clearInterval(t.countdownIntervalID)
                        }, t.retryQuery = function(e) {
                            t.setState(function(t) {
                                return {
                                    retryCount: void 0 !== e ? e : t.retryCount + 1,
                                    view: re.Loading
                                }
                            }, function() {
                                t.stopCountdownTimer(), t.setView()
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.sessionUser && this.setView()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.sessionUser && (e.sessionUser && e.sessionUser.id === this.props.sessionUser.id || this.setView())
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.data,
                            r = t.currentUser,
                            n = t.error,
                            a = t.loading,
                            i = e.sessionUser;
                        if (a) return c.createElement(ue, null);
                        if (n || !i || !r) return c.createElement(le, null);
                        var o = i.login;
                        switch (this.state.view) {
                            case re.Loading:
                                return c.createElement(ue, null);
                            case re.Error:
                                var s = this.state.retryCount >= ie ? Object(u.d)("There was an error retrieving your achievement data. Please try again later.", "PartnerSignupVerifyAchievements") : Object(u.d)("There was an error retrieving your achievement data. Retrying in ... {number} second(s)", {
                                    number: Math.max(this.state.countdown, 0)
                                }, "PartnerSignupVerifyAchievements");
                                return c.createElement(c.Fragment, null, c.createElement(ee, {
                                    borderRadius: {
                                        topLeft: y.x.Medium,
                                        topRight: y.x.Medium
                                    },
                                    margin: 0
                                }, c.createElement($, {
                                    criteria: this.pathToPartnerCriteriaText,
                                    type: U.Error
                                })), c.createElement(ee, {
                                    background: y.r.Alt,
                                    borderRadius: {
                                        bottomLeft: y.x.Medium,
                                        bottomRight: y.x.Medium
                                    },
                                    borderTop: !1
                                }, c.createElement(y.Na, {
                                    closeButtonAriaLabel: Object(u.d)("Dismiss", "PartnerSignupVerifyAchievements"),
                                    closeButtonOnClick: this.handleCloseButtonOnClick,
                                    description: s,
                                    title: Object(u.d)("Error", "PartnerSignupVerifyAchievements"),
                                    type: y.Oa.Error
                                })));
                            case re.StartStreaming:
                                return c.createElement(ne, {
                                    criteria: Object(u.d)("Start Streaming", "PartnerSignupVerifyAchievements"),
                                    instruction: Object(u.d)("Please stream at least once before applying.", "PartnerSignupVerifyAchievements"),
                                    message: Object(u.d)("Find out more about the most common tools for broadcasting", "PartnerSignupVerifyAchievements"),
                                    to: "/" + o + "/dashboard/broadcast"
                                });
                            case re.CompletePathToAffiliate:
                                return r.roles && r.roles.isAffiliate ? c.createElement(ne, {
                                    criteria: this.pathToPartnerCriteriaText,
                                    instruction: this.pathToPartnerInstructionText,
                                    message: this.goToAchievementsText,
                                    to: "/" + o + "/dashboard/achievements"
                                }) : c.createElement(ne, {
                                    criteria: Object(u.d)("Complete Path to Affiliate Achievement", "PartnerSignupVerifyAchievements"),
                                    instruction: Object(u.d)("Please complete the <x:strong>Path to Affiliate</x:strong> Achievement before applying.", {
                                        "x:strong": function(e) {
                                            return c.createElement(y.W, {
                                                bold: !0,
                                                type: y.Sb.Span
                                            }, e)
                                        }
                                    }, "PartnerSignupVerifyAchievements"),
                                    message: this.goToAchievementsText,
                                    to: "/" + o + "/dashboard/achievements"
                                });
                            case re.CompletePathToPartner:
                                return c.createElement(ne, {
                                    criteria: this.pathToPartnerCriteriaText,
                                    instruction: this.pathToPartnerInstructionText,
                                    message: this.goToAchievementsText,
                                    to: "/" + o + "/dashboard/achievements"
                                });
                            case re.CanApplyToPartner:
                                return c.createElement(c.Fragment, null, c.createElement(ee, null, c.createElement($, {
                                    criteria: this.pathToPartnerCriteriaText,
                                    type: U.Complete
                                })), c.createElement(J, {
                                    onChecklistComplete: this.props.onChecklistComplete
                                }));
                            default:
                                return this.state.view
                        }
                    }, Object.defineProperty(t.prototype, "pathToPartnerCriteriaText", {
                        get: function() {
                            return Object(u.d)("Complete Path to Partner Achievement", "PartnerSignupVerifyAchievements")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pathToPartnerInstructionText", {
                        get: function() {
                            return Object(u.d)("Please complete the <x:strong>Path to Partner</x:strong> Achievement before applying.", {
                                "x:strong": function(e) {
                                    return c.createElement(y.W, {
                                        bold: !0,
                                        type: y.Sb.Span
                                    }, e)
                                }
                            }, "PartnerSignupVerifyAchievements")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "goToAchievementsText", {
                        get: function() {
                            return Object(u.d)("Go to your Achievements Page", "PartnerSignupVerifyAchievements")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getViewFromQuests = function() {
                        return o.__awaiter(this, void 0, Promise, function() {
                            var e, t, r, n;
                            return o.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!(e = this.props.sessionUser)) return [2, re.Error];
                                        t = !1, r = !1, n = !1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Object(z.a)(e.id)];
                                    case 2:
                                        return a.sent().forEach(function(e) {
                                            var a = e.is_complete,
                                                i = e.key,
                                                o = e.progress;
                                            switch (i) {
                                                case Z.b.IT_BEGINS:
                                                    for (var c = 0, s = o; c < s.length; c++) {
                                                        var u = s[c];
                                                        if (u.metric === Z.a.HAS_FIRST_STREAM) {
                                                            n = Boolean(u.progress);
                                                            break
                                                        }
                                                    }
                                                    break;
                                                case Z.b.PATH_TO_AFFILIATE:
                                                    r = a;
                                                    break;
                                                case Z.b.PATH_TO_PARTNER:
                                                    t = a
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), [2, re.Error];
                                    case 4:
                                        return t ? [2, re.CanApplyToPartner] : r ? [2, re.CompletePathToPartner] : n ? [2, re.CompletePathToAffiliate] : [2, re.StartStreaming]
                                }
                            })
                        })
                    }, t.prototype.setView = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, t = this;
                            return o.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.getViewFromQuests()];
                                    case 1:
                                        return (e = r.sent()) === re.Error ? this.setState({
                                            countdown: ce,
                                            view: e
                                        }, function() {
                                            t.countdownIntervalID = setInterval(t.handleCountdownTimer, 1e3)
                                        }) : this.setState({
                                            view: e
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(c.Component),
                ue = function() {
                    return c.createElement(ee, null, c.createElement(y.Za, {
                        fillContent: !0
                    }))
                },
                le = function() {
                    return c.createElement(ee, null, c.createElement(y.Cb, {
                        display: y.X.Flex,
                        justifyContent: y.Wa.Center
                    }, c.createElement(y.qb, {
                        asset: y.rb.DeadGlitch,
                        height: 50,
                        width: 50,
                        type: y.sb.Alt2
                    })))
                },
                de = Object(d.a)(ae)(se);
            var me, pe = Object(a.connect)(function(e) {
                    return {
                        sessionUser: Object(i.e)(e)
                    }
                })(de),
                fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(ee, null, this.props.isEmailVerified ? c.createElement($, {
                            criteria: Object(u.d)("Have a Verified Email", "PartnerSignupVerifyEmail"),
                            value: this.props.email,
                            type: this.props.isEmailVerified ? U.Complete : U.Incomplete
                        }) : c.createElement(c.Fragment, null, c.createElement(y.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(y.W, {
                            bold: !0
                        }, Object(u.d)("Please verify your email", "PartnerSignupVerifyEmail"))), c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, null, Object(u.d)("You must have a verified email to apply for partnership", "PartnerSignupVerifyEmail"))), c.createElement(te, {
                            message: Object(u.d)("Verify email", "PartnerSignupVerifyEmail"),
                            to: "/settings/profile"
                        })))
                    }, t
                }(c.Component);
            ! function(e) {
                e.Twitter = "twitter", e.YouTube = "youtube"
            }(me || (me = {}));
            var be, he, ge = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.twitterUserName,
                            r = e.youTubeChannelURL,
                            n = t && c.createElement(y.U, {
                                targetBlank: !0,
                                to: "https://twitter.com/" + t
                            }, t),
                            a = r && c.createElement(y.U, {
                                targetBlank: !0,
                                to: r
                            }, Object(u.d)("My YouTube channel", "PartnerSignupVerifySocialMediaConnection")),
                            i = !!n || !!a;
                        return c.createElement(c.Fragment, null, c.createElement(ee, {
                            borderTop: !1,
                            borderRadius: {
                                bottomLeft: y.x.Medium,
                                bottomRight: y.x.Medium
                            }
                        }, i && c.createElement(c.Fragment, null, a && c.createElement($, {
                            criteria: Object(u.d)("YouTube", "PartnerSignupVerifySocialMediaConnection"),
                            "data-test-selector": me.YouTube,
                            value: a,
                            type: U.Complete
                        }), n && c.createElement($, {
                            criteria: Object(u.d)("Twitter", "PartnerSignupVerifySocialMediaConnection"),
                            "data-test-selector": me.Twitter,
                            value: n,
                            type: U.Complete
                        })), !i && c.createElement(c.Fragment, null, c.createElement(y.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(y.W, null, Object(u.d)("Please connect your social media accounts to continue.", "PartnerSignupVerifySocialMediaConnection"))), c.createElement(te, {
                            message: Object(u.d)("Connect social media accounts", "PartnerSignupVerifySocialMediaConnectionComponent"),
                            to: "/settings/connections"
                        }))), i && c.createElement(J, {
                            onChecklistComplete: this.props.onChecklistComplete
                        }))
                    }, t
                }(c.Component),
                ye = r("nJta");
            ! function(e) {
                e.RadioNo = "radio-no", e.RadioYes = "radio-yes"
            }(be || (be = {})),
            function(e) {
                e.No = "No", e.Yes = "Yes"
            }(he || (he = {}));
            var Oe, ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleRadioChange = function(e) {
                            return t.setState({
                                radioValue: e.target.getAttribute("value")
                            })
                        }, t.renderSocialMediaQuestion = function(e) {
                            return c.createElement(ee, {
                                borderRadius: e ? {
                                    topLeft: y.x.Medium,
                                    topRight: y.x.Medium
                                } : void 0,
                                margin: e ? 0 : void 0
                            }, c.createElement(y.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, c.createElement(y.W, null, Object(u.d)("Do you already have an established audience on YouTube or Twitter?", "PartnerSignupVerifySocialMediaConnection"))), c.createElement(y.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, c.createElement(y.nb, {
                                checked: e,
                                "data-test-selector": be.RadioYes,
                                label: Object(u.d)("Yes", "PartnerSignupVerifySocialMedia"),
                                onChange: t.handleRadioChange,
                                value: he.Yes
                            })), c.createElement(y.nb, {
                                checked: !e,
                                "data-test-selector": be.RadioNo,
                                label: Object(u.d)("No", "PartnerSignupVerifySocialMedia"),
                                onChange: t.handleRadioChange,
                                value: he.No
                            }))
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
                        var r = this.props.data.currentUser;
                        if ((!t || !t.radioValue) && r) {
                            var n = r.accountConnections,
                                a = n.twitter,
                                i = n.youtube;
                            this.setState({
                                radioValue: a || i ? he.Yes : he.No
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.currentUser;
                        if (e.loading || !this.state || !this.state.radioValue) return c.createElement(y.Za, {
                            fillContent: !0
                        });
                        if (this.props.data.error || !t || !t.accountConnections || !t.email) return null;
                        var r = this.props.onChecklistComplete,
                            n = t.accountConnections,
                            a = n.twitter,
                            i = n.youtube,
                            o = t.isEmailVerified,
                            s = this.state.radioValue === he.Yes,
                            l = a && a.username,
                            d = i && i.channelURL;
                        return c.createElement(I, {
                            description: Object(u.d)("We just need to check a few things before you're able to apply for partnership.", "PartnershipSignupForm")
                        }, c.createElement(fe, {
                            email: t.email,
                            isEmailVerified: o
                        }), o && c.createElement(c.Fragment, null, this.renderSocialMediaQuestion(s), s && c.createElement(ge, {
                            onChecklistComplete: r,
                            twitterUserName: l,
                            youTubeChannelURL: d
                        }), !s && c.createElement(pe, {
                            onChecklistComplete: r
                        })))
                    }, t
                }(c.Component),
                je = Object(s.compose)(Object(d.a)(ye))(ve),
                Se = r("1/iK"),
                Ce = r("y5D0");
            ! function(e) {
                e.Login = "partnership-login-link", e.Signup = "partnership-signup-link"
            }(Oe || (Oe = {}));
            var Ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.showModalOnLoginTab()
                }, t.prototype.render = function() {
                    return c.createElement(I, {
                        description: Object(u.d)("The Twitch Partnership Program is for those who are committed to streaming. Twitch Partners are creators who stream a variety of content, from games, music, talk shows, art, to just about anything else you can imagine. If you love sharing what you do with a live audience and have built up a sizeable, engaged community on Twitch or other services, we want to hear from you!", "PartnershipSignupLogin"),
                        flexDirection: y.Aa.Column
                    }, c.createElement(y.bc, null, c.createElement("hr", null)), c.createElement(y.Xa, {
                        alignItems: y.f.Center,
                        display: y.X.Flex,
                        fullWidth: !0,
                        justifyContent: y.Wa.Between
                    }, c.createElement(y.Xa, {
                        fullWidth: !0,
                        margin: {
                            right: 2
                        }
                    }, c.createElement(y.z, {
                        "data-test-selector": Oe.Login,
                        fullWidth: !0,
                        onClick: this.props.showModalOnLoginTab,
                        type: y.F.Default
                    }, Object(u.d)("Log in", "PartnershipSignupLogin"))), c.createElement(y.z, {
                        "data-test-selector": Oe.Signup,
                        fullWidth: !0,
                        onClick: this.props.showModalOnSignupTab,
                        type: y.F.Hollow
                    }, Object(u.d)("Sign up", "PartnershipSignupLogin"))))
                }, t
            }(c.Component);
            var Pe, Te = Object(s.compose)(Object(a.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        showModalOnLoginTab: function() {
                            return Object(Ce.e)(Se.a.PartnershipSignupPage)
                        },
                        showModalOnSignupTab: function() {
                            return Object(Ce.g)(Se.a.PartnershipSignupPage)
                        }
                    }, e)
                }))(Ee),
                Ae = r("qVpr");
            ! function(e) {
                e.ApplicationSubmitted = "application-submitted", e.Checklist = "checklist", e.Form = "form"
            }(Pe || (Pe = {}));
            var ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            view: Pe.Checklist
                        }, t.setNextView = function(e) {
                            return function() {
                                return t.setState({
                                    view: e
                                })
                            }
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.sessionUser ? this.props.data.loading ? c.createElement(y.Za, {
                            fillContent: !0
                        }) : this.props.data.error ? c.createElement(l.a, {
                            message: Object(u.d)("Something went wrong", "PartnershipSignup")
                        }) : c.createElement(y.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 2
                        }, this.view) : c.createElement(Te, null)
                    }, Object.defineProperty(t.prototype, "view", {
                        get: function() {
                            var e = this.props,
                                t = e.data.currentUser;
                            if (!e.sessionUser || !t) return null;
                            var r = t.roles;
                            if (r && r.isPartner) return c.createElement(C, null);
                            var n = t.email,
                                a = t.partnershipApplication;
                            if (a && n) {
                                var i = a.resolvedAt;
                                if (!i) return c.createElement(H, null);
                                var o = this.getUTCDate(),
                                    s = this.getUTCDate(new Date(i)),
                                    u = new Date(s.setDate(s.getDate() + 14));
                                if (u >= o) return c.createElement(Y, {
                                    email: n,
                                    reviewedByDate: u
                                })
                            }
                            switch (this.state.view) {
                                default:
                                    case Pe.Checklist:
                                    return c.createElement(je, {
                                    onChecklistComplete: this.setNextView(Pe.Form)
                                });
                                case Pe.Form:
                                        return c.createElement(B, {
                                        onApplicationSubmitted: this.setNextView(Pe.ApplicationSubmitted)
                                    });
                                case Pe.ApplicationSubmitted:
                                        return c.createElement(K, null)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getUTCDate = function(e) {
                        return void 0 === e && (e = new Date), new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()))
                    }, t
                }(c.Component),
                we = Object(s.compose)(Object(b.b)("PartnershipSignupPage", {
                    autoReportInteractive: !0,
                    destination: p.a.PartnershipSignupPage
                }), Object(d.a)(Ae), Object(m.a)({
                    location: f.PageviewLocation.PartnershipSignupPage
                }))(ke);
            var _e = Object(a.connect)(function(e) {
                return {
                    sessionUser: Object(i.e)(e)
                }
            })(we);
            r.d(t, "PartnershipSignupPage", function() {
                return _e
            })
        },
        jxNC: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VerifyAchievements"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 69
                }
            };
            r.loc.source = {
                body: "query VerifyAchievements {\ncurrentUser {\nid\nroles {\nisAffiliate\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        nJta: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Checklist"
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
                                        value: "accountConnections"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "twitter"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "username"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "youtube"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "channelURL"
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
                                        value: "email"
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
            r.loc.source = {
                body: "query Checklist {\ncurrentUser {\nid\naccountConnections {\ntwitter {\nusername\n}\nyoutube {\nchannelURL\n}\n}\nemail\nisEmailVerified\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        oCrl: function(e, t, r) {
            e.exports = r.p + "assets/in-review-dc6e4a1842b0e2848db1.jpg"
        },
        qVpr: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PartnershipSignupPage"
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
                                        value: "email"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "partnershipApplication"
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
                                                value: "resolvedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
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
                                        value: "broadcastSettings"
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
                                                value: "language"
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
                    end: 179
                }
            };
            r.loc.source = {
                body: "query PartnershipSignupPage {\nrequestInfo {\ncountryCode\n}\ncurrentUser {\nid\nemail\npartnershipApplication {\nid\nresolvedAt\n}\nroles {\nisPartner\n}\nbroadcastSettings {\nid\nlanguage\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        "v/DO": function(e, t, r) {},
        vYsf: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
            });
            var n = r("mrSG"),
                a = r("b6Yk");

            function i(e) {
                return n.__awaiter(this, void 0, Promise, function() {
                    var t, r;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, a.a.get("/v5/channels/" + e + "/quests")];
                            case 1:
                                if (t = n.sent(), r = t.body, 200 !== t.status || !r) throw new Error("failed to fetch quests");
                                return [2, r.quests]
                        }
                    })
                })
            }
        }
    }
]);