Highcharts.chart('hunter_survival_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY),                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#fdbf6f",
            data: [
                56722,
                57522,
                52476,
                280485,
                276520,
                265178,
                39912,
                35706,
                214468,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                25546,
                22418,
                22987,
                0,
                0,
                0,
                17053,
                14032,
                0,
                16488,
                15575,
                14645,
                13917,
                14662,
                18124,
                9234,
                14572,
                13381,
                12952,
                14250,
                15055,
                15337,
                13193,
                15993,
                11043,
                11873,
                12876,
                13480,
                11344,
                12255,
                11110,
                18251,
                16569,
                9976,
                11260,
                8422,
                14153,
                14035,
                15333,
                12033,
                13908,
                9101,
                9973,
                8496,
                10527,
                0,
                8643,
                5493,
                5028,
                4224,
                5946,
                12559,
                4955,
                4926,
                4438,
                4118,
                2974,
                4408,
                2916,
                4376
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                21312,
                25529,
                18691,
                0,
                0,
                0,
                15631,
                183692,
                0,
                14064,
                10998,
                13746,
                12683,
                10587,
                14483,
                4575,
                12671,
                12433,
                12360,
                12073,
                9712,
                9737,
                9554,
                14154,
                13838,
                11899,
                11234,
                11158,
                12590,
                12274,
                15469,
                10298,
                10586,
                10869,
                9818,
                12614,
                12015,
                12731,
                13152,
                7829,
                11999,
                10273,
                9174,
                13025,
                6085,
                0,
                7537,
                7315,
                4602,
                6664,
                4718,
                9315,
                3472,
                3380,
                4996,
                6514,
                1891,
                3246,
                4865,
                2603
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                21939,
                19197,
                19818,
                0,
                0,
                0,
                14692,
                0,
                0,
                12225,
                12718,
                10327,
                11748,
                12876,
                15975,
                7196,
                13391,
                9971,
                11197,
                11988,
                12209,
                14144,
                12771,
                13480,
                10811,
                12097,
                11724,
                9738,
                8585,
                11211,
                10809,
                12574,
                10845,
                11240,
                7865,
                7686,
                14112,
                11527,
                11445,
                8760,
                10578,
                7689,
                6699,
                9452,
                8141,
                0,
                4244,
                5902,
                3666,
                4802,
                2999,
                10530,
                4528,
                5392,
                1983,
                3112,
                433,
                3290,
                4148,
                16
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                18319,
                17056,
                16439,
                0,
                0,
                0,
                12184,
                0,
                0,
                12601,
                24068,
                11340,
                12522,
                25000,
                12074,
                7732,
                8673,
                23625,
                11868,
                10084,
                9678,
                10188,
                11743,
                13328,
                10368,
                9030,
                10101,
                11185,
                9766,
                8643,
                13463,
                9006,
                12419,
                9089,
                10183,
                10230,
                6255,
                8234,
                7566,
                16991,
                8542,
                8354,
                6123,
                9233,
                5152,
                0,
                7519,
                6691,
                3199,
                7171,
                15997,
                18928,
                16279,
                4626,
                13954,
                3523,
                14631,
                3615,
                1949,
                4062
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                195839,
                188313,
                175971,
                0,
                0,
                0,
                135360,
                0,
                0,
                10597,
                3039,
                10527,
                10040,
                0,
                12907,
                4816,
                8142,
                1992,
                11064,
                10544,
                10909,
                7955,
                6408,
                7847,
                9583,
                8891,
                9113,
                9061,
                13042,
                9766,
                9928,
                10484,
                7617,
                5286,
                7433,
                6665,
                10413,
                12309,
                9959,
                676,
                10500,
                7718,
                6855,
                8232,
                5174,
                0,
                5204,
                2199,
                3259,
                3317,
                0,
                0,
                0,
                4082,
                0,
                1347,
                0,
                4536,
                2017,
                4232
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                9799,
                9504,
                11309,
                8323,
                10637,
                9541,
                6895,
                11022,
                11121,
                7010,
                9211,
                8989,
                8509,
                11171,
                9776,
                8547,
                8097,
                7330,
                8387,
                6312,
                7117,
                10647,
                9685,
                9553,
                10496,
                8769,
                7095,
                9967,
                9974,
                10126,
                9037,
                9124,
                8548,
                8945,
                5925,
                6529,
                11273,
                4620,
                3694,
                2023,
                5955,
                5572,
                10723,
                8228,
                3265,
                2314,
                6151,
                3403,
                1577,
                4970,
                884
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                131147,
                7761,
                7939,
                8669,
                8316,
                12205,
                6586,
                5705,
                5916,
                7808,
                117462,
                7637,
                7378,
                4152,
                8607,
                7592,
                9897,
                8744,
                8864,
                6647,
                9756,
                9615,
                8634,
                7355,
                6101,
                4796,
                7606,
                8724,
                6094,
                6567,
                95465,
                4898,
                5009,
                92680,
                8473,
                5774,
                6396,
                5965,
                7090,
                3853,
                926,
                580,
                5372,
                0,
                1772,
                3251,
                1062,
                0,
                4168,
                1485,
                2255
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                121143,
                124857,
                121970,
                117580,
                101726,
                149049,
                118536,
                113100,
                112244,
                0,
                107807,
                107942,
                110420,
                95314,
                106162,
                105813,
                106039,
                105121,
                108318,
                103599,
                88665,
                83779,
                83669,
                95426,
                97837,
                97441,
                81786,
                81498,
                81568,
                0,
                80028,
                88832,
                0,
                75140,
                80068,
                104838,
                74708,
                65992,
                78440,
                68192,
                67243,
                27996,
                64650,
                63284,
                58005,
                57113,
                63447,
                53759,
                55952,
                49824
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-02-10 17:42 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/bfd6b36e27e483e17a1ba52321c3405ec8945043\" target=\"blank\">bfd6b36</a>",
        useHTML: true
    },
    title: {
        text: "Hunter - Survival - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        },
        useHTML: true
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>"
        ],
        labels: {
            useHTML: true
        }
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: 'mean: ' + Intl.NumberFormat().format(168622),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 168622.16666666666,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});