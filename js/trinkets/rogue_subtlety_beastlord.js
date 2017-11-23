Highcharts.chart('rogue_subtlety_beastlord',
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + this.stackY,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#ffeb3b",
            data: [
                49805,
                0,
                0,
                54826,
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
                245925,
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
            color: "#e600e3",
            data: [
                20777,
                32081,
                26206,
                36749,
                23980,
                18720,
                21450,
                12790,
                16745,
                19344,
                30168,
                17924,
                20129,
                24860,
                27706,
                22299,
                14360,
                18329,
                24943,
                20753,
                24786,
                22722,
                13994,
                0,
                22542,
                14085,
                16412,
                15480,
                21243,
                25649,
                9750,
                28185,
                18166,
                25883,
                16828,
                5296,
                21133,
                21697,
                14933,
                12970,
                0,
                5247,
                1768,
                12850,
                5033,
                6391,
                4079,
                16227,
                11347,
                5573,
                4055,
                0,
                8581,
                0
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                277381,
                20060,
                25779,
                13433,
                28691,
                29574,
                21640,
                29093,
                18958,
                20354,
                25220,
                22335,
                25661,
                18110,
                22932,
                19743,
                27406,
                29801,
                19974,
                16519,
                9746,
                25718,
                22013,
                0,
                19722,
                16182,
                17122,
                12913,
                10609,
                15649,
                20490,
                17187,
                11361,
                7802,
                24195,
                8195,
                13222,
                10722,
                10778,
                17757,
                0,
                13878,
                9457,
                0,
                8759,
                7711,
                8369,
                7893,
                0,
                6689,
                2326,
                7619,
                10300,
                8037
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                20636,
                13464,
                17992,
                26975,
                25363,
                20369,
                9939,
                25192,
                29084,
                11866,
                15338,
                13619,
                21208,
                12168,
                19464,
                18189,
                1641,
                6094,
                20417,
                31292,
                12735,
                21459,
                0,
                17655,
                19545,
                17518,
                16103,
                17924,
                12681,
                17725,
                26369,
                23145,
                21106,
                17985,
                9202,
                15345,
                6202,
                3456,
                4090,
                0,
                6771,
                14967,
                606,
                0,
                3719,
                4814,
                4480,
                8771,
                3918,
                4444,
                6517,
                4434,
                0
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                23162,
                21074,
                24375,
                18234,
                20012,
                19066,
                23239,
                16389,
                21856,
                23131,
                22974,
                15654,
                12328,
                15302,
                11623,
                14224,
                24996,
                22005,
                6884,
                8744,
                19659,
                15373,
                0,
                12999,
                16838,
                12712,
                19597,
                17501,
                17445,
                14719,
                6266,
                9271,
                13714,
                22063,
                7261,
                15023,
                7937,
                18775,
                6673,
                0,
                2584,
                1960,
                14028,
                15040,
                6133,
                9148,
                806,
                5804,
                6269,
                6288,
                0,
                12495,
                4866
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                0,
                17311,
                27365,
                186275,
                19650,
                18889,
                12954,
                19982,
                10120,
                14061,
                17838,
                18620,
                20188,
                22447,
                15337,
                17403,
                16027,
                17004,
                12591,
                21670,
                16104,
                14598,
                12215,
                0,
                16446,
                16673,
                14690,
                5903,
                8529,
                12814,
                12071,
                14663,
                16904,
                12579,
                4636,
                8738,
                11856,
                14690,
                4583,
                11146,
                0,
                15126,
                4055,
                2675,
                4661,
                4505,
                0,
                4411,
                5919,
                0,
                985,
                13411,
                8091,
                0
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                14983,
                17518,
                0,
                18591,
                18491,
                16023,
                16251,
                14014,
                19795,
                19748,
                7948,
                11372,
                10066,
                8755,
                12084,
                14460,
                21820,
                16604,
                8427,
                7413,
                13265,
                20558,
                0,
                6526,
                4410,
                1912,
                21446,
                12229,
                15945,
                15563,
                11881,
                9328,
                11276,
                13500,
                6140,
                2635,
                12721,
                13280,
                9499,
                12424,
                9766,
                13426,
                9126,
                6585,
                6746,
                8342,
                6558,
                3804,
                5532,
                2271,
                0,
                5228,
                2106
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                209687,
                12448,
                0,
                17256,
                17032,
                15976,
                15822,
                20842,
                8904,
                7611,
                14865,
                12791,
                172371,
                17779,
                9587,
                12833,
                4607,
                5138,
                15643,
                9240,
                11754,
                14067,
                0,
                8363,
                154987,
                7258,
                8215,
                7141,
                17322,
                4245,
                12472,
                20378,
                10267,
                7549,
                9229,
                20420,
                3160,
                121687,
                10161,
                3982,
                6242,
                5400,
                5035,
                4827,
                10063,
                2235,
                365,
                4639,
                9064,
                0,
                4105,
                2303,
                0
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                189872,
                0,
                175426,
                169003,
                188308,
                182249,
                176325,
                160313,
                152987,
                165418,
                165796,
                0,
                157795,
                162514,
                156611,
                150995,
                159611,
                154674,
                152337,
                135354,
                129772,
                0,
                138950,
                0,
                153481,
                138883,
                142783,
                119117,
                140855,
                118264,
                125607,
                131067,
                122914,
                174350,
                119530,
                116115,
                0,
                108405,
                160755,
                104960,
                99625,
                104553,
                96896,
                83178,
                90917,
                79762,
                75600,
                46979,
                50833,
                45612,
                16094,
                52220
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Forgefiend's Fabricator",
            "Umbral Moonglaives",
            "Golganneth's Vitality",
            "Void Stalker's Contract",
            "Arcanogolem Digit",
            "Eye of Command",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Specter of Betrayal",
            "Nightblooming Frond",
            "Stat Stick (Versatility)",
            "Stat Stick (Crit)",
            "Gorshalach's Legacy",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Entwined Elemental Foci",
            "Chaos Talisman",
            "Convergence of Fates",
            "Gift of Radiance",
            "Cradle of Anguish",
            "Six-Feather Fan",
            "Vial of Ceaseless Toxins",
            "Aman'Thul's Vision",
            "Stat Stick (Haste)",
            "Shadow-Singed Fang",
            "Terrorbound Nexus",
            "Bloodthirsty Instinct",
            "PVP Insignia of Conquest",
            "Bloodstained Handkerchief",
            "PVP Badge of Conquest",
            "Tempered Egg of Serpentrix",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Tirathon's Betrayal",
            "Unstable Arcanocrystal",
            "Splinters of Agronax",
            "Horn of Valor",
            "Seeping Scourgewing",
            "Mark of Dargrul",
            "Astral Alchemist Stone",
            "Infernal Cinders",
            "The Devilsaur's Bite",
            "Nature's Call",
            "Spontaneous Appendages",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone",
            "Faulty Countermeasure",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Spiked Counterweight",
            "Ravaged Seed Pod",
            "Draught of Souls",
            "Ley Spark"
        ]
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
                    text: "mean: 226447",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 226447.5185185185,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});
