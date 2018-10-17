(window.webpackJsonp = window.webpackJsonp || []).push([
    [163], {
        "0ly3": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                o = r("HSqT"),
                i = r("Ue10"),
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
                        var e = a.createElement(i.ub, {
                            onChange: this.onChange,
                            disabled: this.props.disabled,
                            defaultValue: this.props.defaultLanguage
                        }, Object(o.b)().map(this.renderLanguageOption));
                        return this.props.label && (e = a.createElement(i.Ea, {
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
        AsmT: function(e, t) {
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
        CSPL: function(e, t, r) {},
        HSqT: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return i
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

            function o(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(n.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var i = new Set(a.concat(o()).map(function(e) {
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
                }).concat(o(!0))
            }
        },
        Jgup: function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return a
            }), r.d(t, "a", function() {
                return o
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
            var o = ["US", "CA", "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "A1", "AQ", "AG", "AR", "AM", "AW", "AP", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "CI", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "O1", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "A2", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "UM", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "EH", "YE", "ZM", "ZW"]
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
                return i
            });
            var n = r("mrSG"),
                a = r("/7QA"),
                o = r("kRBY"),
                i = function() {
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
                            var a, o, i, c;
                            return n.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.constructOptions(t, r), a = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, a), i = n.__assign({}, t, {
                                            body: o
                                        }), [4, this._fetch(e, i)];
                                    case 1:
                                        return c = u.sent(), [4, this.constructLegacyAPIResponse(c)];
                                    case 2:
                                        return [2, u.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, r) {
                        return void 0 === t && (t = {}), void 0 === r && (r = {}), n.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return n.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.request(e, t, r)];
                                    case 1:
                                        if ((a = o.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, n.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw o.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return n.__awaiter(this, void 0, Promise, function() {
                            var t, r, a, o;
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
                                        return a = n.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = a), [3, 4];
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
                        var i = Object(o.e)(r);
                        return i && (n.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (n["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            n[e] && delete n[e]
                        }), n
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        bsVm: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, a = r("mrSG"),
                o = r("q1tI"),
                i = r("oJmH"),
                c = r("/7QA"),
                u = r("ZDlU"),
                s = r("yR8l"),
                l = r("V+GM"),
                d = r("NvVO"),
                m = r("2xye"),
                p = r("GnwI"),
                f = r("PIi5"),
                b = r.n(f),
                h = r("Ue10");
            r("CSPL");
            ! function(e) {
                e.Header = "header"
            }(n || (n = {}));
            var g, y, O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.header;
                        return o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            fullWidth: !0,
                            justifyContent: h.Wa.Start
                        }, o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            className: "partner-signup-exit-layout-outer-container",
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            justifyContent: h.Wa.Start
                        }, o.createElement(h.Xa, {
                            className: "partner-signup-exit-layout-inner-container"
                        }, e && o.createElement(h.Xa, {
                            "data-test-selector": n.Header,
                            fullWidth: !0,
                            margin: {
                                bottom: 3
                            }
                        }, e), o.createElement(h.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, o.createElement(h.S, {
                            alt: this.props.alt,
                            src: this.props.src
                        })), o.createElement(h.Xa, {
                            textAlign: h.Kb.Center
                        }, o.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.W, {
                            bold: !0,
                            fontSize: h.Ca.Size3,
                            type: h.Ob.H3
                        }, this.props.title)), o.createElement(h.W, {
                            fontSize: h.Ca.Size5,
                            color: h.O.Alt2
                        }, this.props.description), this.props.children))))
                    }, t
                }(o.Component),
                j = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(O, {
                            alt: Object(c.d)("Approved", "SubmittedPage"),
                            description: Object(c.d)("You've been accepted into the Twitch Partner program.", "SubmittedPage"),
                            title: Object(c.d)("Congratulations!", "SubmittedPage"),
                            src: b.a
                        }, o.createElement(h.z, {
                            linkTo: "/" + this.props.channelLogin + "/dashboard/settings/revenue"
                        }, Object(c.d)("Manage Benefits", "PartnerSignupSubmittedPage")))
                    }, t
                }(o.Component),
                S = r("oCrl"),
                v = r.n(S),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(c.d)("In Review", "SubmittedPage");
                        return o.createElement(O, {
                            alt: e,
                            description: Object(c.d)("Thanks for applying to be a Twitch Partner! Your partnership application is currently being reviewed.", "SubmittedPage"),
                            title: e,
                            src: v.a
                        })
                    }, t
                }(o.Component),
                E = r("Z4LW"),
                P = r.n(E),
                A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(O, {
                            alt: Object(c.d)("Reviewed", "SubmittedPage"),
                            description: Object(c.d)("Please check your email at <x:strong>{userEmail}</x:strong> to see the result of your application. If you need to apply again, please try again on <x:strong>{reviewedByDate}</x:strong>.", {
                                userEmail: this.props.email,
                                reviewedByDate: Object(c.c)(this.props.reviewedByDate, {
                                    month: "long",
                                    day: "numeric"
                                }),
                                "x:strong": function(e) {
                                    return o.createElement(h.W, {
                                        bold: !0,
                                        type: h.Ob.Span
                                    }, e)
                                }
                            }, "SubmittedPage"),
                            title: Object(c.d)("Review Complete", "SubmittedPage"),
                            src: P.a
                        })
                    }, t
                }(o.Component),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isNotificationDismissed: !1
                        }, t.handleNotificationCloseButtonClick = function() {
                            return t.setState({
                                isNotificationDismissed: !0
                            })
                        }, t.getHeader = function() {
                            return t.state.isNotificationDismissed ? null : o.createElement(h.Na, {
                                closeButtonAriaLabel: Object(c.d)("Dismiss", "PartnerSignupApplicationSubmitted"),
                                closeButtonOnClick: t.handleNotificationCloseButtonClick,
                                description: "",
                                title: t.applicationSubmittedText,
                                type: h.Oa.Success
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(O, {
                            alt: Object(c.d)("Submitted", "PartnerSignupApplicationSubmitted"),
                            description: Object(c.d)("Thanks for applying to be a Twitch Partner! Your partnership application is currently being reviewed!", "PartnerSignupApplicationSubmitted"),
                            header: this.getHeader(),
                            title: this.applicationSubmittedText,
                            src: v.a
                        })
                    }, Object.defineProperty(t.prototype, "applicationSubmittedText", {
                        get: function() {
                            return Object(c.d)("Application Submitted!", "PartnerSignupApplicationSubmitted")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                w = r("5NYc"),
                k = r("vYsf"),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(o.Fragment, null, o.createElement(h.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.W, null, Object(c.d)("Congratulations! You're eligible to apply for the Twitch Partnership Program", "PartnerSignupVerifySocialMediaConnection"))), o.createElement(h.z, {
                            onClick: this.props.onChecklistComplete,
                            type: h.F.Default
                        }, Object(c.d)("Apply Now", "PartnerSignupVerifySocialMediaConnection")))
                    }, t
                }(o.Component);
            ! function(e) {
                e.Criteria = "partner-signup-checklist-criteria", e.Value = "partner-signup-checklist-value"
            }(g || (g = {})),
            function(e) {
                e[e.Complete = 0] = "Complete", e[e.Error = 1] = "Error", e[e.Incomplete = 2] = "Incomplete"
            }(y || (y = {}));
            var M, N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.value;
                        return o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row,
                            fullWidth: !0,
                            justifyContent: h.Wa.Between
                        }, o.createElement(h.W, {
                            "data-test-selector": g.Criteria,
                            bold: !0
                        }, this.props.criteria), o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row
                        }, e && o.createElement(h.Xa, {
                            margin: {
                                right: 1
                            }
                        }, "string" == typeof e ? o.createElement(h.W, {
                            color: h.O.Alt2,
                            "data-test-selector": g.Value
                        }, e) : e), o.createElement(h.ob, a.__assign({}, this.svgProps))))
                    }, Object.defineProperty(t.prototype, "svgProps", {
                        get: function() {
                            switch (this.props.type) {
                                default:
                                    case y.Complete:
                                    return {
                                    asset: h.pb.Check,
                                    type: h.qb.Success
                                };
                                case y.Error:
                                        return {
                                        asset: h.pb.NotificationError,
                                        type: h.qb.Alert
                                    };
                                case y.Incomplete:
                                        return {
                                        asset: h.pb.Check,
                                        type: h.qb.Alt2
                                    }
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.borderTop,
                            r = e.margin;
                        return o.createElement(h.yb, {
                            background: this.props.background || h.r.Base,
                            borderRadius: this.props.borderRadius || h.x.Medium,
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
                }(o.Component),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.U, {
                            targetBlank: !0,
                            to: this.props.to
                        }, o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.InlineFlex
                        }, o.createElement(h.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(h.W, null, this.props.message)), o.createElement(h.ob, {
                            asset: h.pb.Popout
                        })))
                    }, t
                }(o.Component);
            (M || (M = {})).Instruction = "instruction";
            var L, D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(o.Fragment, null, o.createElement(F, {
                        borderRadius: {
                            topLeft: h.x.Medium,
                            topRight: h.x.Medium
                        },
                        margin: 0
                    }, o.createElement(N, {
                        criteria: this.props.criteria,
                        type: y.Incomplete
                    })), o.createElement(F, {
                        background: h.r.Alt,
                        borderRadius: {
                            bottomLeft: h.x.Medium,
                            bottomRight: h.x.Medium
                        },
                        borderTop: !1
                    }, o.createElement(h.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(h.W, {
                        "data-test-selector": M.Instruction
                    }, this.props.instruction)), o.createElement(h.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(h.W, null, Object(c.d)("Unfortunately, your channel is not currently eligible to apply for the Twitch Partnership Program. In the meantime, please take a look at these resources to help grow your audience on Twitch.", "PartnerSignupVerifyAchievements"))), o.createElement(I, {
                        message: this.props.message,
                        to: this.props.to
                    })))
                }, t
            }(o.Component);
            ! function(e) {
                e[e.CanApplyToPartner = 0] = "CanApplyToPartner", e[e.CompletePathToAffiliate = 1] = "CompletePathToAffiliate", e[e.Error = 2] = "Error", e[e.StartStreaming = 3] = "StartStreaming", e[e.Loading = 4] = "Loading"
            }(L || (L = {}));
            var G, R = 4,
                B = 0,
                x = 5,
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            countdown: x,
                            retryCount: B,
                            view: L.Loading
                        }, t.handleCloseButtonOnClick = function() {
                            t.retryQuery(B)
                        }, t.handleCountdownTimer = function() {
                            var e = t.state.countdown;
                            t.state.retryCount >= R ? t.stopCountdownTimer() : e <= 0 ? t.retryQuery() : t.setState(function(e) {
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
                                    view: L.Loading
                                }
                            }, function() {
                                t.stopCountdownTimer(), t.setView()
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setView()
                    }, t.prototype.render = function() {
                        var e = Object(c.d)("Complete Path to Affiliate Achievement", "PartnerSignupVerifyAchievements"),
                            t = this.props.channelLogin;
                        switch (this.state.view) {
                            case L.Loading:
                                return o.createElement(F, null, o.createElement(h.Za, {
                                    fillContent: !0
                                }));
                            case L.Error:
                                var r = this.state.retryCount >= R ? Object(c.d)("There was an error retrieving your achievement data. Please try again later.", "PartnerSignupVerifyAchievements") : Object(c.d)("There was an error retrieving your achievement data. Retrying in ... {number} second(s)", {
                                    number: Math.max(this.state.countdown, 0)
                                }, "PartnerSignupVerifyAchievements");
                                return o.createElement(o.Fragment, null, o.createElement(F, {
                                    borderRadius: {
                                        topLeft: h.x.Medium,
                                        topRight: h.x.Medium
                                    },
                                    margin: 0
                                }, o.createElement(N, {
                                    criteria: e,
                                    type: y.Error
                                })), o.createElement(F, {
                                    background: h.r.Alt,
                                    borderRadius: {
                                        bottomLeft: h.x.Medium,
                                        bottomRight: h.x.Medium
                                    },
                                    borderTop: !1
                                }, o.createElement(h.Na, {
                                    closeButtonAriaLabel: Object(c.d)("Dismiss", "PartnerSignupVerifyAchievements"),
                                    closeButtonOnClick: this.handleCloseButtonOnClick,
                                    description: r,
                                    title: Object(c.d)("Error", "PartnerSignupVerifyAchievements"),
                                    type: h.Oa.Error
                                })));
                            default:
                            case L.StartStreaming:
                                return o.createElement(D, {
                                    criteria: Object(c.d)("Start Streaming", "PartnerSignupVerifyAchievements"),
                                    instruction: Object(c.d)("Please stream at least once before applying.", "PartnerSignupVerifyAchievements"),
                                    message: Object(c.d)("Find out more about the most common tools for broadcasting", "PartnerSignupVerifyAchievements"),
                                    to: "/" + t + "/dashboard/broadcast"
                                });
                            case L.CompletePathToAffiliate:
                                return o.createElement(D, {
                                    criteria: e,
                                    instruction: Object(c.d)("Please complete the <x:strong>Path to Affiliate</x:strong> Achievement before applying.", {
                                        "x:strong": function(e) {
                                            return o.createElement(h.W, {
                                                bold: !0,
                                                type: h.Ob.Span
                                            }, e)
                                        }
                                    }, "PartnerSignupVerifyAchievements"),
                                    message: Object(c.d)("Go to your Achievements Page", "PartnerSignupVerifyAchievements"),
                                    to: "/" + t + "/dashboard/achievements"
                                });
                            case L.CanApplyToPartner:
                                return o.createElement(o.Fragment, null, o.createElement(F, null, o.createElement(N, {
                                    criteria: e,
                                    type: y.Complete
                                })), o.createElement(_, {
                                    onChecklistComplete: this.props.onChecklistComplete
                                }))
                        }
                    }, t.prototype.getQuests = function() {
                        return a.__awaiter(this, void 0, Promise, function() {
                            var e, t, r;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, Object(k.a)(this.props.userID)];
                                    case 1:
                                        return e = n.sent(), t = !1, r = !1, e.forEach(function(e) {
                                            var n = e.is_complete,
                                                a = e.key,
                                                o = e.progress;
                                            switch (a) {
                                                case w.b.IT_BEGINS:
                                                    for (var i = 0, c = o; i < c.length; i++) {
                                                        var u = c[i];
                                                        if (u.metric === w.a.HAS_FIRST_STREAM) {
                                                            r = Boolean(u.progress);
                                                            break
                                                        }
                                                    }
                                                    break;
                                                case w.b.PATH_TO_AFFILIATE:
                                                    t = n
                                            }
                                        }), [2, {
                                            hasCompletedPathToAffiliate: t,
                                            hasStreamed: r
                                        }];
                                    case 2:
                                        return n.sent(), [2, null];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.setView = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, t, r, n, o = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.getQuests()];
                                    case 1:
                                        return (e = a.sent()) ? (t = e.hasCompletedPathToAffiliate, r = e.hasStreamed, n = void 0, n = r ? t ? L.CanApplyToPartner : L.CompletePathToAffiliate : L.StartStreaming, this.setState({
                                            view: n
                                        })) : this.setState({
                                            countdown: x,
                                            view: L.Error
                                        }, function() {
                                            o.countdownIntervalID = setInterval(o.handleCountdownTimer, 1e3)
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }(o.Component),
                V = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(F, null, this.props.isEmailVerified ? o.createElement(N, {
                            criteria: Object(c.d)("Have a Verified Email", "PartnerSignupVerifyEmail"),
                            value: this.props.email,
                            type: this.props.isEmailVerified ? y.Complete : y.Incomplete
                        }) : o.createElement(o.Fragment, null, o.createElement(h.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(h.W, {
                            bold: !0
                        }, Object(c.d)("Please verify your email", "PartnerSignupVerifyEmail"))), o.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.W, null, Object(c.d)("You must have a verified email to apply for partnership", "PartnerSignupVerifyEmail"))), o.createElement(I, {
                            message: Object(c.d)("Verify email", "PartnerSignupVerifyEmail"),
                            to: "/settings/profile"
                        })))
                    }, t
                }(o.Component);
            ! function(e) {
                e.Twitter = "twitter", e.YouTube = "youtube"
            }(G || (G = {}));
            var W, H, X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.twitterUserName,
                            r = e.youTubeChannelURL,
                            n = t && o.createElement(h.U, {
                                targetBlank: !0,
                                to: "https://twitter.com/" + t
                            }, t),
                            a = r && o.createElement(h.U, {
                                targetBlank: !0,
                                to: r
                            }, Object(c.d)("My YouTube channel", "PartnerSignupVerifySocialMediaConnection")),
                            i = !!n || !!a;
                        return o.createElement(o.Fragment, null, o.createElement(F, {
                            borderTop: !1,
                            borderRadius: {
                                bottomLeft: h.x.Medium,
                                bottomRight: h.x.Medium
                            }
                        }, i && o.createElement(o.Fragment, null, a && o.createElement(N, {
                            criteria: Object(c.d)("YouTube", "PartnerSignupVerifySocialMediaConnection"),
                            "data-test-selector": G.YouTube,
                            value: a,
                            type: y.Complete
                        }), n && o.createElement(N, {
                            criteria: Object(c.d)("Twitter", "PartnerSignupVerifySocialMediaConnection"),
                            "data-test-selector": G.Twitter,
                            value: n,
                            type: y.Complete
                        })), !i && o.createElement(o.Fragment, null, o.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.W, null, Object(c.d)("Please connect your social media accounts to continue.", "PartnerSignupVerifySocialMediaConnection"))), o.createElement(I, {
                            message: Object(c.d)("Connect social media accounts", "PartnerSignupVerifySocialMediaConnectionComponent"),
                            to: "/settings/connections"
                        }))), i && o.createElement(_, {
                            onChecklistComplete: this.props.onChecklistComplete
                        }))
                    }, t
                }(o.Component),
                K = function() {
                    return o.createElement(h.yb, {
                        background: h.r.Base,
                        padding: 2,
                        margin: {
                            bottom: 2
                        },
                        border: !0,
                        borderRadius: h.x.Medium
                    }, o.createElement(h.Xb, null, o.createElement("h3", null, Object(c.d)("Partnership Guidelines", "PartnershipSignupGuidelines")), o.createElement("ul", null, o.createElement("li", null, Object(c.d)("Complete the <x:path-to-partner>Path to Partner Achievement</x:path-to-partner> or demonstrate large, engaged viewership/following on other services. Streamers who complete the Path to Partner achievements in your Achievements Dashboard will unlock a button to apply for Partnership, and receive priority for their application to be reviewed. Please note that these Achievements list the minimum criteria we look for in potential Partners, and completing them does not guarantee Partnership.", {
                        "x:path-to-partner": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "/broadcast/dashboard/achievements"
                            }, e)
                        }
                    }, "PartnershipSignupGuidelines")), o.createElement("li", null, Object(c.d)("Content that conforms to our <x:guidelines>Community Guidelines</x:guidelines>, <x:tos>Terms of Service</x:tos> and <x:dmca>DMCA Guidelines</x:dmca>.", {
                        "x:guidelines": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/community-guidelines"
                            }, e)
                        },
                        "x:tos": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/terms-of-service"
                            }, e)
                        },
                        "x:dmca": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "https://twitch.tv/p/legal/dmca-guidelines/"
                            }, e)
                        }
                    }, "PartnershipSignupGuidelines"))), o.createElement(h.W, {
                        color: h.O.Alt2
                    }, Object(c.d)("Make sure you tell us a little bit about your channel and community as well as any other achievements that you think are relevant to your Partnership application. You can also include your social media accounts to help us evaluate your application.", "PartnershipSignupGuidelines")), o.createElement(h.W, {
                        color: h.O.Alt2
                    }, Object(c.d)("If you do not currently meet these qualifications, you should consider the <x:affiliate-program>Affiliate program</x:affiliate-program>, obtainable through the <x:path-to-affiliate>Path to Affiliate Achievement</x:path-to-affiliate>. You can also learn more about how to grow on Twitch via <x:creator-camp>Creator Camp</x:creator-camp>, the go-to strategy guide for all things Twitch.", {
                        "x:affiliate-program": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "http://affiliate.twitch.tv/"
                            }, e)
                        },
                        "x:path-to-affiliate": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "/broadcast/dashboard/achievements"
                            }, e)
                        },
                        "x:creator-camp": function(e) {
                            return o.createElement(h.U, {
                                targetBlank: !0,
                                to: "https://www.twitch.tv/creatorcamp/en/?tt_medium=owned_onsite_twitch&tt_content=creator_camp_creators_all_all_Dashboard&ttid=cd402988e1"
                            }, e)
                        }
                    }, "PartnershipSignupGuidelines")), o.createElement(h.W, {
                        color: h.O.Alt2
                    }, Object(c.d)("Since we take the time to review every application individually, it may take up to 2-4 weeks for you to hear back from us. Those who have completed the Path to Partner Achievement can expect a response within 7 business days.", "PartnershipSignupGuidelines")), o.createElement(h.W, {
                        color: h.O.Alt2
                    }, Object(c.d)("All of these are general guidelines, and exceptions are handled on a case-by-case basis.", "PartnershipSignupGuidelines"))))
                };
            r("v/DO");
            ! function(e) {
                e.LeftColumn = "left-column", e.RightColumn = "right-column"
            }(W || (W = {})),
            function(e) {
                e.Description = "partnership-signup-main-layout-description", e.LeftColumn = "partnership-signup-main-layout-left-column", e.RightColumn = "partnership-signup-main-layout-right-column"
            }(H || (H = {}));
            var Y, q, Z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.description,
                            t = this.props.flexDirection || h.Aa.Row,
                            r = t === h.Aa.Row;
                        return o.createElement(h.Xa, {
                            alignItems: h.f.Center,
                            display: h.X.Flex,
                            flexDirection: h.Aa.Column,
                            fullWidth: !0,
                            padding: 4,
                            justifyContent: h.Wa.Start
                        }, o.createElement(h.Xa, {
                            className: "partner-signup-main-layout"
                        }, o.createElement(h.Xa, null, o.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.W, {
                            bold: !0,
                            type: h.Ob.H1
                        }, Object(c.d)("Partner Application", "PartnershipSignupApplicationTitle"))), e && o.createElement(h.Xa, {
                            "data-test-selector": H.Description,
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.W, {
                            type: h.Ob.P,
                            fontSize: h.Ca.Size5
                        }, e))), o.createElement(h.Xa, {
                            display: h.X.Flex,
                            flexDirection: t
                        }, o.createElement(h.Xa, {
                            className: r ? W.LeftColumn : "",
                            "data-test-selector": H.LeftColumn,
                            flexOrder: r ? 1 : 2,
                            fullWidth: !r,
                            margin: r ? {
                                right: 2
                            } : void 0
                        }, this.props.children), o.createElement(h.Xa, {
                            className: r ? W.RightColumn : "",
                            "data-test-selector": H.RightColumn,
                            flexOrder: r ? 2 : 1,
                            fullWidth: !r
                        }, o.createElement(K, null)))))
                    }, t
                }(o.Component),
                z = r("nJta");
            ! function(e) {
                e.RadioNo = "radio-no", e.RadioYes = "radio-yes"
            }(Y || (Y = {})),
            function(e) {
                e.No = "No", e.Yes = "Yes"
            }(q || (q = {}));
            var J, Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleRadioChange = function(e) {
                            return t.setState({
                                radioValue: e.target.getAttribute("value")
                            })
                        }, t.renderSocialMediaQuestion = function(e) {
                            return o.createElement(F, {
                                borderRadius: e ? {
                                    topLeft: h.x.Medium,
                                    topRight: h.x.Medium
                                } : void 0,
                                margin: e ? 0 : void 0
                            }, o.createElement(h.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(h.W, null, Object(c.d)("Do you already have an established audience on YouTube or Twitter?", "PartnerSignupVerifySocialMediaConnection"))), o.createElement(h.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(h.lb, {
                                checked: e,
                                "data-test-selector": Y.RadioYes,
                                label: Object(c.d)("Yes", "PartnerSignupVerifySocialMedia"),
                                onChange: t.handleRadioChange,
                                value: q.Yes
                            })), o.createElement(h.lb, {
                                checked: !e,
                                "data-test-selector": Y.RadioNo,
                                label: Object(c.d)("No", "PartnerSignupVerifySocialMedia"),
                                onChange: t.handleRadioChange,
                                value: q.No
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
                        var r = this.props.data.currentUser;
                        if ((!t || !t.radioValue) && r) {
                            var n = r.accountConnections,
                                a = n.twitter,
                                o = n.youtube;
                            this.setState({
                                radioValue: a || o ? q.Yes : q.No
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.currentUser;
                        if (e.loading || !this.state || !this.state.radioValue) return o.createElement(h.Za, {
                            fillContent: !0
                        });
                        if (this.props.data.error || !t || !t.accountConnections || !t.email || !t.id || !t.login) return null;
                        var r = this.props.onChecklistComplete,
                            n = t.accountConnections,
                            a = n.twitter,
                            i = n.youtube,
                            u = t.isEmailVerified,
                            s = this.state.radioValue === q.Yes,
                            l = a && a.username,
                            d = i && i.channelURL;
                        return o.createElement(Z, {
                            description: Object(c.d)("We just need to check a few things before you're able to apply for partnership.", "PartnershipSignupForm")
                        }, o.createElement(V, {
                            email: t.email,
                            isEmailVerified: u
                        }), u && o.createElement(o.Fragment, null, this.renderSocialMediaQuestion(s), s && o.createElement(X, {
                            onChecklistComplete: r,
                            twitterUserName: l,
                            youTubeChannelURL: d
                        }), !s && o.createElement(U, {
                            channelLogin: t.login,
                            onChecklistComplete: r,
                            userID: t.id
                        })))
                    }, t
                }(o.Component),
                $ = Object(i.compose)(Object(s.a)(z))(Q),
                ee = r("/MKj"),
                te = r("fvjX"),
                re = r("1/iK"),
                ne = r("y5D0");
            ! function(e) {
                e.Login = "partnership-login-link", e.Signup = "partnership-signup-link"
            }(J || (J = {}));
            var ae = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.showModalOnLoginTab()
                }, t.prototype.render = function() {
                    return o.createElement(Z, {
                        description: Object(c.d)("The Twitch Partnership Program is for those who are committed to streaming. Twitch Partners are creators who stream a variety of content, from games, music, talk shows, art, to just about anything else you can imagine. If you love sharing what you do with a live audience and have built up a sizeable, engaged community on Twitch or other services, we want to hear from you!", "PartnershipSignupLogin"),
                        flexDirection: h.Aa.Column
                    }, o.createElement(h.Xb, null, o.createElement("hr", null)), o.createElement(h.Xa, {
                        alignItems: h.f.Center,
                        display: h.X.Flex,
                        fullWidth: !0,
                        justifyContent: h.Wa.Between
                    }, o.createElement(h.Xa, {
                        fullWidth: !0,
                        margin: {
                            right: 2
                        }
                    }, o.createElement(h.z, {
                        "data-test-selector": J.Login,
                        fullWidth: !0,
                        onClick: this.props.showModalOnLoginTab,
                        type: h.F.Default
                    }, Object(c.d)("Log in", "PartnershipSignupLogin"))), o.createElement(h.z, {
                        "data-test-selector": J.Signup,
                        fullWidth: !0,
                        onClick: this.props.showModalOnSignupTab,
                        type: h.F.Hollow
                    }, Object(c.d)("Sign up", "PartnershipSignupLogin"))))
                }, t
            }(o.Component);
            var oe, ie, ce, ue, se, le = Object(i.compose)(Object(ee.connect)(null, function(e) {
                    return Object(te.bindActionCreators)({
                        showModalOnLoginTab: function() {
                            return Object(ne.e)(re.a.PartnershipSignupPage)
                        },
                        showModalOnSignupTab: function() {
                            return Object(ne.g)(re.a.PartnershipSignupPage)
                        }
                    }, e)
                }))(ae),
                de = r("0ly3"),
                me = r("Jgup"),
                pe = r("geRD"),
                fe = r("AsmT");
            ! function(e) {
                e.ChannelLogin = "partner-signup-channel-login", e.Button = "partner-signup-submit-button", e.Category = "partner-signup-category", e.Country = "ppartner-signup-country", e.Description = "partner-signup-description", e.Email = "partnership_signup-email", e.FullName = "partner-signup-full-name", e.Language = "partner-signup-language"
            }(oe || (oe = {})),
            function(e) {
                e.Gaming = "gaming", e.Creative = "creative"
            }(ie || (ie = {})),
            function(e) {
                e.General = "general"
            }(ce || (ce = {})),
            function(e) {
                e.Category = "category", e.Country = "country", e.Description = "description", e.FullName = "full-name", e.Language = "language"
            }(ue || (ue = {})),
            function(e) {
                e.Category = "category", e.Country = "country", e.Description = "description", e.FullName = "fullName", e.Language = "language"
            }(se || (se = {}));
            var be, he = function(e) {
                    function t() {
                        var t, r = null !== e && e.apply(this, arguments) || this;
                        return r.state = {
                            fields: (t = {}, t[se.Country] = r.props.countryCode || "US", t[se.Category] = ie.Gaming, t[se.Description] = "", t[se.FullName] = "", t[se.Language] = r.props.currentUser.broadcastSettings && r.props.currentUser.broadcastSettings.language || "en", t),
                            processingApplication: !1
                        }, r.logger = c.k.withCategory("PartnershipApplication"), r.handleLanguageChange = function(e) {
                            r.handleFieldChange(se.Language, e)
                        }, r.handleFieldChange = function(e, t) {
                            r.setState(function(r) {
                                var n;
                                return {
                                    fields: a.__assign({}, r.fields, (n = {}, n[e] = t, n)),
                                    formErrorType: void 0
                                }
                            }, function() {
                                e !== se.Category && e !== se.Language || function(e, t) {
                                    c.p.tracking.track(m.SpadeEventType.PartnershipApplicationInteraction, {
                                        field_name: e,
                                        field_value: t
                                    })
                                }(e, t)
                            })
                        }, r.handleInFeatureCloseClick = function() {
                            return r.setState({
                                formErrorType: void 0
                            })
                        }, r.handleSubmitClick = function() {
                            return a.__awaiter(r, void 0, void 0, function() {
                                var e, t, r, n, o = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                processingApplication: !0
                                            }), e = Object(pe.a)(this.state.fields), t = void 0, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.createPartnershipApplication(e)];
                                        case 2:
                                            return (r = a.sent()) && r.data && r.data.createPartnershipApplication && r.data.createPartnershipApplication.partnershipApplication || (t = ce.General, this.logger.warn("Failed to submit partnership application")), [3, 4];
                                        case 3:
                                            return n = a.sent(), t = ce.General, this.logger.error(n, "Application err"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                formErrorType: t,
                                                processingApplication: !1
                                            }, function() {
                                                t || o.props.onApplicationSubmitted()
                                            }), [2]
                                    }
                                })
                            })
                        }, r.registerHandleFieldChange = function(e) {
                            return function(t) {
                                var n = t.target.value;
                                r.handleFieldChange(e, n)
                            }
                        }, r
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentUser,
                            t = e.email,
                            r = e.login;
                        return e.roles && r && t ? o.createElement(Z, null, this.state.formErrorType && o.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.Na, {
                            closeButtonAriaLabel: Object(c.d)("Dismiss", "PartnershipSignupForm"),
                            closeButtonOnClick: this.handleInFeatureCloseClick,
                            description: this.formErrorMessage,
                            title: Object(c.d)("Error", "PartnershipSignupForm"),
                            type: h.Oa.Error
                        })), o.createElement(h.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(h.Ea, {
                            label: Object(c.d)("Twitch Username", "PartnershipSignupForm")
                        }, o.createElement(h.Ra, {
                            "data-test-selector": oe.ChannelLogin,
                            disabled: !0,
                            type: h.Ta.Text,
                            value: r
                        }))), o.createElement(h.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(h.Ea, {
                            label: Object(c.d)("Email", "PartnershipSignupForm")
                        }, o.createElement(h.Ra, {
                            "data-test-selector": oe.Email,
                            disabled: !0,
                            type: h.Ta.Email,
                            value: t
                        }))), o.createElement(h.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(h.Ea, {
                            id: ue.Category,
                            label: Object(c.d)("Category", "PartnershipSignupForm")
                        }, o.createElement(h.ub, {
                            "data-test-selector": oe.Category,
                            id: ue.Category,
                            onChange: this.registerHandleFieldChange(se.Category)
                        }, o.createElement("option", {
                            value: ie.Gaming
                        }, Object(c.d)("Gaming", "PartnershipSignupForm")), o.createElement("option", {
                            value: ie.Creative
                        }, Object(c.d)("Creative", "PartnershipSignupForm"))))), o.createElement(h.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(h.Ea, {
                            id: ue.Country,
                            label: Object(c.d)("Applicant Country", "PartnershipSignupForm")
                        }, o.createElement(h.ub, {
                            "data-test-selector": oe.Country,
                            id: ue.Country,
                            value: this.state.fields.country,
                            onChange: this.registerHandleFieldChange(se.Country)
                        }, me.a.map(function(e) {
                            return o.createElement("option", {
                                value: e,
                                key: "countryCode-" + e
                            }, Object(me.b)(e))
                        })))), o.createElement(h.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(h.Ea, {
                            id: ue.Language,
                            label: Object(c.d)("Applicant Language", "PartnershipSignupForm")
                        }, o.createElement(de.a, {
                            onChange: this.handleLanguageChange,
                            defaultLanguage: this.state.fields.language,
                            disabled: !1,
                            "data-test-selector": oe.Language
                        }))), o.createElement(h.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(h.Ea, {
                            id: ue.FullName,
                            "data-test-selector": oe.FullName,
                            label: Object(c.d)("Full Name", "PartnershipSignupForm"),
                            hint: Object(c.d)("First and Last Name", "PartnershipSignupForm")
                        }, o.createElement(h.Ra, {
                            id: ue.FullName,
                            name: se.FullName,
                            type: h.Ta.Text,
                            value: this.state.fields.fullName,
                            onChange: this.registerHandleFieldChange(se.FullName)
                        }))), o.createElement(h.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(h.Ea, {
                            id: ue.Description,
                            "data-test-selector": oe.Description,
                            label: Object(c.d)("Details", "PartnershipSignupForm"),
                            hint: Object(c.d)("Tell us about your stream", "PartnershipSignupForm")
                        }, o.createElement(h.Lb, {
                            id: ue.Description,
                            onChange: this.registerHandleFieldChange(se.Description)
                        }))), o.createElement(h.z, {
                            "data-test-selector": oe.Button,
                            state: this.state.processingApplication ? h.E.Loading : h.E.Default,
                            onClick: this.handleSubmitClick,
                            disabled: !(this.state.fields[se.FullName] && this.state.fields[se.Description] && !this.state.processingApplication && !this.state.formErrorType)
                        }, Object(c.d)("Submit Application", "PartnershipSignupForm"))) : null
                    }, Object.defineProperty(t.prototype, "formErrorMessage", {
                        get: function() {
                            switch (this.state.formErrorType) {
                                default:
                                    case ce.General:
                                    return Object(c.d)("There was an error submitting your application", "PartnershipSignupForm")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(o.Component),
                ge = Object(i.compose)(Object(s.a)(fe, {
                    name: "createPartnershipApplication"
                }))(he),
                ye = r("qVpr");
            ! function(e) {
                e.ApplicationSubmitted = "application-submitted", e.Checklist = "checklist", e.Form = "form"
            }(be || (be = {}));
            var Oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            view: be.Checklist
                        }, t.setNextView = function(e) {
                            return function() {
                                return t.setState({
                                    view: e
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? o.createElement(h.Za, {
                            fillContent: !0
                        }) : this.props.data.error ? o.createElement(u.a, {
                            message: Object(c.d)("Something went wrong", "PartnershipSignup")
                        }) : o.createElement(h.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 2
                        }, this.view)
                    }, Object.defineProperty(t.prototype, "view", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            if (!e) return o.createElement(le, null);
                            var t = this.props.data.requestInfo.countryCode,
                                r = e.login,
                                n = e.roles;
                            if (!r) return null;
                            if (n && n.isPartner) return o.createElement(j, {
                                channelLogin: r
                            });
                            var a = e.email,
                                i = e.partnershipApplication;
                            if (i && a) {
                                var c = i.resolvedAt;
                                if (!c) return o.createElement(C, null);
                                var u = this.getUTCDate(),
                                    s = this.getUTCDate(new Date(c)),
                                    l = new Date(s.setDate(s.getDate() + 14));
                                if (l >= u) return o.createElement(A, {
                                    email: a,
                                    reviewedByDate: l
                                })
                            }
                            switch (this.state.view) {
                                default:
                                    case be.Checklist:
                                    return o.createElement($, {
                                    onChecklistComplete: this.setNextView(be.Form)
                                });
                                case be.Form:
                                        return o.createElement(ge, {
                                        currentUser: e,
                                        countryCode: t,
                                        onApplicationSubmitted: this.setNextView(be.ApplicationSubmitted)
                                    });
                                case be.ApplicationSubmitted:
                                        return o.createElement(T, null)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getUTCDate = function(e) {
                        return void 0 === e && (e = new Date), new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()))
                    }, t
                }(o.Component),
                je = Object(i.compose)(Object(p.b)("PartnershipSignupPage", {
                    autoReportInteractive: !0,
                    destination: d.a.PartnershipSignupPage
                }), Object(s.a)(ye), Object(l.a)({
                    location: m.PageviewLocation.PartnershipSignupPage
                }))(Oe);
            r.d(t, "View", function() {
                return be
            }), r.d(t, "PartnershipSignupPageComponent", function() {
                return Oe
            }), r.d(t, "PartnershipSignupPage", function() {
                return je
            })
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
                }],
                loc: {
                    start: 0,
                    end: 133
                }
            };
            r.loc.source = {
                body: "query Checklist {\ncurrentUser {\nid\naccountConnections {\ntwitter {\nusername\n}\nyoutube {\nchannelURL\n}\n}\nemail\nisEmailVerified\nlogin\n}\n}",
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
                                        value: "login"
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
                    end: 185
                }
            };
            r.loc.source = {
                body: "query PartnershipSignupPage {\nrequestInfo {\ncountryCode\n}\ncurrentUser {\nid\nlogin\nemail\npartnershipApplication {\nid\nresolvedAt\n}\nroles {\nisPartner\n}\nbroadcastSettings {\nid\nlanguage\n}\n}\n}",
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
                return o
            });
            var n = r("mrSG"),
                a = r("b6Yk");

            function o(e) {
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