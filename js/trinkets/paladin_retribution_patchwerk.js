Highcharts.chart('paladin_retribution_patchwerk', 
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
                32187,
                204653,
                0,
                32154,
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
                13041,
                0,
                13894,
                13976,
                5233,
                12798,
                14693,
                12808,
                12648,
                13765,
                13300,
                16462,
                11622,
                12552,
                10344,
                12354,
                9747,
                8920,
                13638,
                10382,
                12091,
                11893,
                12874,
                12550,
                11449,
                8879,
                12072,
                10224,
                11182,
                7937,
                10336,
                13097,
                7497,
                10885,
                10234,
                7827,
                5256,
                0,
                3304,
                7343,
                6233,
                9124,
                2334,
                5792,
                1558,
                3435,
                2718,
                3158,
                2604
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                170431,
                0,
                11452,
                14582,
                7547,
                10089,
                17000,
                11927,
                11152,
                10400,
                11761,
                11535,
                11026,
                7716,
                9797,
                9438,
                12044,
                9666,
                9986,
                11571,
                10992,
                8904,
                9320,
                9156,
                8389,
                8637,
                7975,
                11903,
                7983,
                7562,
                11789,
                10921,
                12208,
                8341,
                6171,
                5909,
                5009,
                0,
                4841,
                5177,
                4628,
                11648,
                5724,
                2559,
                4267,
                2194,
                4065,
                3352,
                3142
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                0,
                13890,
                11443,
                6154,
                10769,
                13815,
                10759,
                10707,
                11187,
                10165,
                14028,
                11234,
                11614,
                13916,
                9653,
                7046,
                10694,
                10635,
                8520,
                8659,
                10372,
                9589,
                9639,
                11026,
                12539,
                7309,
                12352,
                6244,
                7761,
                7090,
                7932,
                9683,
                9078,
                9245,
                7352,
                5412,
                0,
                4143,
                4786,
                3543,
                10020,
                4276,
                5100,
                3113,
                1608,
                743,
                1600,
                2230
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                0,
                10748,
                10337,
                6597,
                10787,
                12385,
                10174,
                10153,
                7401,
                9870,
                11293,
                7532,
                9272,
                7677,
                10373,
                14451,
                7901,
                8837,
                9380,
                9377,
                9775,
                7282,
                8262,
                10652,
                6998,
                7280,
                7820,
                8299,
                5451,
                9904,
                7660,
                8537,
                9468,
                6420,
                7884,
                6353,
                0,
                2803,
                6524,
                3841,
                9488,
                2216,
                4521,
                3683,
                5306,
                4423,
                1668,
                1788
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                0,
                0,
                11624,
                110373,
                5657,
                9308,
                12077,
                7626,
                9225,
                9073,
                8174,
                7969,
                9452,
                7340,
                7812,
                6014,
                5227,
                6442,
                7751,
                6548,
                8043,
                5884,
                9696,
                9029,
                7037,
                6698,
                8254,
                7709,
                7234,
                8596,
                8269,
                9504,
                9180,
                8807,
                4359,
                4805,
                5867,
                0,
                4182,
                848,
                2829,
                7736,
                491,
                2542,
                3406,
                1617,
                1644,
                2431,
                2257
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                10032,
                0,
                4900,
                9777,
                8545,
                7534,
                8237,
                11061,
                8859,
                12743,
                7008,
                7877,
                7840,
                8852,
                7235,
                5957,
                8453,
                8505,
                6411,
                9009,
                5639,
                6610,
                7577,
                5177,
                6578,
                8424,
                5247,
                5336,
                7363,
                6125,
                7376,
                5022,
                5881,
                4577,
                3538,
                6337,
                2128,
                7857,
                1573,
                9081,
                5512,
                2625,
                991,
                4093,
                1288,
                4125,
                2171
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                122036,
                0,
                7430,
                5156,
                8272,
                9447,
                7118,
                6067,
                6817,
                4501,
                6589,
                9117,
                8885,
                9811,
                7965,
                8008,
                7770,
                7344,
                8403,
                4870,
                6379,
                4067,
                6828,
                7985,
                6551,
                7081,
                89589,
                90185,
                6750,
                7193,
                5072,
                7497,
                6354,
                5819,
                5303,
                7760,
                5897,
                3794,
                5856,
                3888,
                3372,
                2782,
                4160,
                2164,
                6534,
                1052,
                3178
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                0,
                145497,
                112464,
                92535,
                103537,
                104478,
                103226,
                103025,
                92249,
                102704,
                100824,
                99408,
                98935,
                101406,
                105349,
                94982,
                97480,
                90778,
                93361,
                92597,
                91522,
                86903,
                90137,
                86576,
                70917,
                0,
                0,
                67762,
                66003,
                68267,
                65917,
                76026,
                77492,
                72143,
                93873,
                79539,
                67045,
                58382,
                23995,
                57826,
                54879,
                55834,
                53447,
                51192,
                50546,
                46244
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Paladin - Retribution - Patchwerk"
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
            "Aman'Thul's Vision",
            "Seeping Scourgewing",
            "Khaz'goroths Courage",
            "Unstable Arcanocrystal",
            "Eye of Command",
            "Specter of Betrayal",
            "Engine of Eradication",
            "Cradle of Anguish",
            "Stat Stick (Mastery)",
            "Horn of Valor",
            "Vial of Ceaseless Toxins",
            "Entwined Elemental Foci",
            "Chaos Talisman",
            "Stat Stick (Versatility)",
            "Memento of Angerboda",
            "Ettin Fingernail",
            "Convergence of Fates",
            "Stat Stick (Crit)",
            "Stat Stick (Haste)",
            "Nightmare Egg Shell",
            "Chrono Shard",
            "Fel-Oiled Infernal Machine",
            "Gift of Radiance",
            "PVP Badge of Victory",
            "Infernal Cinders",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "Forgefiend's Fabricator",
            "Gorshalach's Legacy",
            "Claw of the Crystalline Scorpid",
            "Ursoc's Rending Paw",
            "Might of Krosus",
            "Void Stalker's Contract",
            "Faulty Countermeasure",
            "Umbral Moonglaives",
            "Spontaneous Appendages",
            "Astral Alchemist Stone",
            "Nature's Call",
            "Terrorbound Nexus",
            "Spiked Counterweight",
            "Draught of Souls",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Windscar Whetstone",
            "Toe Knee's Promise",
            "Impact Tremor",
            "Giant Ornamental Pearl",
            "Ravaged Seed Pod"
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
                    text: "mean: 140085",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 140085.6530612245,
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