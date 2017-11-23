Highcharts.chart('warlock_affliction_beastlord', 
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
                0,
                333932,
                0,
                0,
                0,
                0,
                0,
                41639,
                26703,
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
            color: "#e600e3",
            data: [
                21809,
                0,
                17090,
                17093,
                20541,
                15909,
                17060,
                17096,
                20752,
                16312,
                25892,
                18707,
                14793,
                21100,
                15294,
                13210,
                15820,
                14121,
                16566,
                11271,
                14830,
                11734,
                21171,
                5429,
                16127,
                6012,
                13611,
                19615,
                8906,
                13862,
                8988,
                5759,
                5206,
                14999,
                11921,
                20753,
                11285,
                17843,
                4219,
                9535,
                6067,
                13906,
                8041,
                9906,
                14021,
                3899,
                3160,
                0,
                4873,
                8838,
                2216,
                149,
                13085,
                7933,
                1488
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                29295,
                0,
                4750,
                22896,
                17007,
                20514,
                14571,
                7487,
                216398,
                19864,
                15695,
                17385,
                30414,
                9020,
                18939,
                22373,
                13925,
                19260,
                22859,
                14275,
                15078,
                10938,
                12497,
                16371,
                6249,
                24490,
                11489,
                4992,
                12748,
                14162,
                16699,
                17040,
                7999,
                16693,
                8533,
                8673,
                14868,
                9840,
                19164,
                10919,
                10365,
                8201,
                10652,
                2708,
                7743,
                4710,
                3112,
                0,
                7764,
                8692,
                9082,
                7829,
                0,
                7087,
                2786
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                35021,
                0,
                16478,
                14876,
                13566,
                25931,
                14451,
                12059,
                0,
                14902,
                8936,
                12535,
                5787,
                18337,
                10998,
                4018,
                13652,
                7998,
                14878,
                14983,
                10365,
                14444,
                11546,
                8423,
                15806,
                6308,
                13895,
                14496,
                7914,
                11455,
                9797,
                7745,
                11609,
                5672,
                12856,
                12338,
                8247,
                11665,
                3030,
                8716,
                6758,
                3938,
                8487,
                10165,
                1213,
                4813,
                10972,
                0,
                15516,
                0,
                4786,
                911,
                4822,
                721,
                5888
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                23025,
                0,
                10970,
                17405,
                18468,
                10723,
                16107,
                16198,
                0,
                16539,
                11639,
                15542,
                16739,
                8499,
                11019,
                10377,
                11410,
                8418,
                11991,
                6510,
                11334,
                13710,
                14984,
                18377,
                9641,
                15006,
                5197,
                13447,
                12403,
                17538,
                2738,
                4010,
                13990,
                17278,
                6601,
                17012,
                14223,
                12515,
                10565,
                12812,
                6840,
                12392,
                9428,
                1864,
                9266,
                5556,
                3218,
                0,
                12915,
                8555,
                62,
                12130,
                4289,
                3473,
                1334
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                10777,
                0,
                11749,
                12676,
                12384,
                21033,
                10592,
                180285,
                0,
                5206,
                10981,
                3995,
                16234,
                9823,
                7953,
                8295,
                6592,
                14377,
                15009,
                10648,
                13335,
                15054,
                15719,
                2579,
                8998,
                0,
                7862,
                10450,
                4030,
                8338,
                7962,
                18295,
                6336,
                10013,
                11606,
                5226,
                0,
                13197,
                7756,
                5381,
                8903,
                8201,
                6767,
                9014,
                1452,
                8160,
                5791,
                0,
                2720,
                7846,
                4884,
                1387,
                5654,
                5360,
                0
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                24058,
                0,
                8857,
                12679,
                10771,
                12771,
                6039,
                0,
                0,
                11876,
                12168,
                7649,
                17119,
                9611,
                11079,
                9882,
                20632,
                10825,
                11592,
                8333,
                3294,
                5134,
                14933,
                9767,
                11496,
                13460,
                7032,
                3820,
                11670,
                6484,
                10027,
                10180,
                8012,
                2624,
                8324,
                11558,
                13540,
                8057,
                9078,
                7749,
                7015,
                192,
                2872,
                5877,
                10558,
                1505,
                9217,
                13453,
                9171,
                5491,
                4284,
                1396,
                0,
                648,
                12007
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                23074,
                0,
                8937,
                13558,
                16545,
                6486,
                200754,
                0,
                0,
                9492,
                156440,
                11591,
                5301,
                10235,
                10443,
                16373,
                5150,
                11381,
                19239,
                11246,
                14292,
                11746,
                4393,
                9899,
                4802,
                7393,
                8203,
                8754,
                0,
                11625,
                11282,
                7299,
                129571,
                115267,
                4278,
                8477,
                6834,
                11006,
                9511,
                4484,
                6093,
                15539,
                110197,
                9164,
                3031,
                1275,
                10221,
                11991,
                10267,
                6495,
                2351,
                5859,
                7527,
                3756,
                0
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                215643,
                0,
                234243,
                179448,
                174558,
                166774,
                0,
                0,
                0,
                153982,
                0,
                153897,
                130869,
                148233,
                145016,
                145199,
                142494,
                141726,
                113700,
                141732,
                135587,
                130690,
                110241,
                133534,
                125364,
                124028,
                127584,
                116835,
                135944,
                104051,
                118578,
                114843,
                0,
                0,
                113079,
                92535,
                107230,
                90760,
                106619,
                104837,
                108075,
                96064,
                0,
                101057,
                90835,
                107120,
                89064,
                107129,
                67605,
                85054,
                92670,
                77603,
                78534,
                74276,
                64308
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warlock - Affliction - Beastlord"
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
            "Spectral Thurible",
            "Aman'Thul's Vision",
            "Unstable Arcanocrystal",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Acrid Catalyst Injector",
            "Norgannon's Prowess",
            "Kil'jaeden's Burning Wish",
            "Whispers in the Dark",
            "Prototype Personnel Decimator",
            "Tarnished Sentinel Medallion",
            "Star Gate",
            "Stat Stick (Mastery)",
            "Erratic Metronome",
            "Toe Knee's Promise",
            "Dreadstone of Endless Shadows",
            "Chrono Shard",
            "Deteriorated Construct Core",
            "Stat Stick (Haste)",
            "Stormsinger Fulmination Charge",
            "Padawsen's Unlucky Charm",
            "Reality Breacher",
            "Charm of the Rising Tide",
            "Stat Stick (Crit)",
            "Eyasu's Mulligan",
            "Corrupted Starlight",
            "Infernal Writ",
            "Caged Horror",
            "Tome of Unraveling Sanity",
            "Obelisk of the Void",
            "Stat Stick (Versatility)",
            "Terminus Signaling Beacon",
            "Sheath of Asara",
            "Terror From Below",
            "Twisting Wind",
            "PVP Badge of Dominance",
            "Bough of Corruption",
            "Eye of Skovald",
            "PVP Insignia of Dominance",
            "Moonlit Prism",
            "Horn of Valor",
            "Vitality Resonator",
            "Swarming Plaguehive",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Devilsaur Shock-Baton",
            "Astral Alchemist Stone",
            "Portable Manacracker",
            "Oakheart's Gnarled Root",
            "Naraxas' Spiked Tongue",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Wriggling Sinew",
            "Figurehead of the Naglfar"
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
                    text: "mean: 199816",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 199816.34545454546,
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