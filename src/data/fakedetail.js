const FakeDetail = [
    {
        pileId : "RON3-14/2",
        projectName: "63-09 ทางพิเศษสายพระราม 3 สัญญาที่ 2 (MLP 06 to MLP 07)",
        productType: "Dwall",
        data:{
            info:{
                diameter:"1.20",
                CutOff: '2',
                PileTip:'-57.000'
            },
            step1:{
                startDate:"	10 ธ.ค. 2565 (08:42)",
                endDate:"10 ธ.ค. 2565 (08:51)",
                rebarVendor:"ช่างจำเนียร",
                sheetNo: "23",
                tableData:[
                    {
                        isValid:"1",
                        mainBar:[
                            {
                                info:"หลัก: 38-DB32 SD50 x 12.0000 m.",
                            },
                            {
                                info:"เสริม 1: 8-DB32 SD50 x 12.0000 m.",
                            }
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 1.000 m. @0.150"},
                            {info:"ช่วงที่ 2 : DB12 SD40 x 9.200 m. @0.250"}
                        ]
                    },
                    {
                        isValid:"1",
                        mainBar:[
                            {
                                info:"หลัก: 38-DB32 SD50 x 12.0000 m.",
                            },
                            {
                                info:"เสริม 1: 8-DB32 SD50 x 12.0000 m.",
                            }
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 2.800 m. @0.250"},
                            {info:"ช่วงที่ 2 : DB12 SD40 x 6.800 m. @0.250"}
                        ]
                    },
                    {
                        isValid:"1",
                        mainBar:[
                            {
                                info:"หลัก: 38-DB28 SD40 x 12.0000 m.",
                            }
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 10.500 m. @0.250"}
                        ]
                    },
                    {
                        isValid:"1",
                        mainBar:[
                            {
                                info:"หลัก: 38-DB28 SD40 x 12.0000 m.",
                            }
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 10.800 m. @0.250"}
                        ]
                    },
                    {
                        isValid:"1",
                        mainBar:[
                            {
                                info:"หลัก: 38-DB25 SD40 x 12.0000 m.",
                            }
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 10.800 m. @0.250"}
                        ]
                    },
                    {
                        isValid:"1",
                        mainBar:[
                            {
                                info:"หลัก: 38-DB25 SD40 x 12.0000 m.",
                            }
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 3.075 m. @0.250"}
                        ]
                    }
                ]
            },
            step2:null,
            step3:{
                startDate:"7 ธ.ค. 2565 (14:54)",
                endDate:"7 ธ.ค. 2565 (14:54)",
                surveyor:"โกศล มุทาพร",
                guidewallLevel: "1.9840",
                groundLevel: "4.3600"

            },
            step4:{
                solution: "เบนโทไนท์",
                table:[
                    {
                        info:"สารละลายก่อนเจาะ",
                        pH:{
                            actual:"9.0",
                            theory:"[9.5-10.8]"
                        },
                        Density:{
                            actual:"1.02",
                            theory:"[<=1.10]"
                        },
                        Viscosity:{
                            actual:"41",
                            theory:"[30-45]"
                        },
                        Sand : {
                            actual:"0.00",
                            theory:"[<= 0.50]"
                        },
                        Date:{
                            start:"7 ธ.ค. 2565 (10:25)",
                            end:"7 ธ.ค. 2565 (10:33)"
                        },
                        examiner:"บอล-ประพันธ์ ดวงภักดี"
                    },
                    {
                        info:"สารละลายก่อนเจาะ",
                        pH:{
                            actual:"9.0",
                            theory:"[9.5-10.8]"
                        },
                        Density:{
                            actual:"1.02",
                            theory:"[<=1.10]"
                        },
                        Viscosity:{
                            actual:"34",
                            theory:"[30-45]"
                        },
                        Sand : {
                            actual:"0.25",
                            theory:"[<= 0.50]"
                        },
                        Date:{
                            start:"10 ธ.ค. 2565 (09:44)",
                            end:"10 ธ.ค. 2565 (09:52)"
                        },
                        examiner:"บอล-ประพันธ์ ดวงภักดี"
                    },
                    {
                        info:"ระหว่างเทปูนปากหลุม",
                        pH:{
                            actual:"9.0",
                            theory:"[9.5-10.8]"
                        },
                        Density:{
                            actual:"1.03",
                            theory:"[<=1.10]"
                        },
                        Viscosity:{
                            actual:"38",
                            theory:"[30-45]"
                        },
                        Sand : {
                            actual:"0.25",
                            theory:"[<= 0.50]"
                        },
                        Date:{
                            start:"11 ธ.ค. 2565 (03:38)",
                            end:"11 ธ.ค. 2565 (03:39)"
                        },
                        examiner:"ชาญศักดิ์ ภาระอุตส่าห์ ()"
                    }
                ]
            },
            step5:{
                checkVertical:"1",
                checkWaterLevel:"1",
                groundElevation:"4.3600",
                topGuideWall:"1.8940",
                bottomGuideWall:"0.4840",
                cutoff:"-1.9250",
                piletip:"-57.0000",
                expectedDepth:"58.9840",
                spareDepth:"0.000",
                heightAboveCutoff:"0.000",
                pullSteel:"3.909",
                measured:"3.900",
                drilling:[
                    {
                        type:"แกร็ป",
                        depthFromTopGuideWall : "6.500",
                        MachineNo : "CGR-10",
                        Date:"7 ธ.ค. 2565 (11:55 - 14:38)",
                        pilot:"ประดิษฐ์ ไตรมีแสง"
                    },
                    {
                        type:"แกร็ป",
                        depthFromTopGuideWall : "44.500",
                        MachineNo : "CGR-10",
                        Date:"8 ธ.ค. 2565 (08:39 - 23:56)",
                        pilot:"ประดิษฐ์ ไตรมีแสง"
                    },
                    {
                        type:"แกร็ป",
                        depthFromTopGuideWall : "59.800",
                        MachineNo : "CGR-10",
                        Date:"9 ธ.ค. 2565 (08:10 - 18:58)",
                        pilot:"ประดิษฐ์ ไตรมีแสง"
                    },
                ],
                report :{
                    crackStopend:null,
                    installWaterStop:null,
                    installStopEnd:null,
                    WaterStopType:null,
                    LengthWaterStop:null,
                    changeSolute:"1",
                    dateStopEnd:null,
                    dateSolute:{
                        time:"01:01 - 05:55",
                        date:"10 ธ.ค. 2565"
                    }
                }
            },
            step6:null,
            step7:{
                startDate:"10 ธ.ค. 2565 (11:03)",
                endDate:"10 ธ.ค. 2565 (17:03)",
                Machine:"CR-52",
                pilot:"นิรันต์ พรรณวงษ์",
                sparedDistance:"0.000",
                aboveWaterLevel: "0.000",
                maxLength : "3.909",
                sheetNo : "23",
                table:[
                    {
                        id:'6(E)',
                        install:"1",
                        clementball:"1",
                        mainBar:[
                            {info:"หลัก: 38-DB25 SD40 x 4.2750 m."}
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 3.075 m. @0.250"}
                        ]
                    },
                    {
                        id:'5(E)',
                        install:"1",
                        clementball:"1",
                        mainBar:[
                            {info:"หลัก: 38-DB25 SD40 x 12.0000 m."}
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 10.800 m. @0.250"}
                        ]
                    },
                    {
                        id:'4(E)',
                        install:"1",
                        clementball:"1",
                        mainBar:[
                            {info:"หลัก: 38-DB25 SD40 x 12.0000 m."}
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 10.800 m. @0.250"}
                        ]
                    },
                    {
                        id:'3(E)',
                        install:"1",
                        clementball:"1",
                        mainBar:[
                            {info:"หลัก: 38-DB28 SD40 x 12.0000 m."}
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 10.500 m. @0.250"}
                        ]
                    },
                    {
                        id:'2(E)',
                        install:"1",
                        clementball:"1",
                        mainBar:[
                            {info:"หลัก: 38-DB32 SD50 x 12.0000 m."},
                            {info:"เสริม 1: 8-DB32 SD50 x 12.0000 m."}
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 2.800 m. @0.250"},
                            {info:"ช่วงที่ 2 : DB12 SD40 x 6.800 m. @0.250"}
                        ]
                    },
                    {
                        id:'1(E)',
                        install:"1",
                        clementball:"1",
                        mainBar:[
                            {info:"หลัก: 38-DB32 SD50 x 12.0000 m."},
                            {info:"เสริม 1: 8-DB32 SD50 x 12.0000 m."}
                        ],
                        tieBar:[
                            {info:"ช่วงที่ 1 : DB12 SD40 x 1.000 m. @0.150"},
                            {info:"ช่วงที่ 2 : DB12 SD40 x 9.200 m. @0.250"}
                        ]
                    },
                ]
            },
            step8:{
                startDate:"	10 ธ.ค. 2565 (18:23)",
                endDate:"10 ธ.ค. 2565 (19:13)",
                Machine:"CR-32",
                pilot:"	นิรันต์ พรรณวงษ์",
                foam:"1",
                tremyLength:"59.84",
                Npoint : null,
                tremydetail:[
                    {id:12,diameter:"10",length:"2.00"},
                    {id:11,diameter:"10",length:"6.00"},
                    {id:10,diameter:"10",length:"6.05"},
                    {id:9,diameter:"10",length:"6.00"},
                    {id:8,diameter:"10",length:"6.06"},
                    {id:7,diameter:"10",length:"6.03"},
                    {id:6,diameter:"10",length:"6.05"},
                    {id:5,diameter:"10",length:"6.06"},
                    {id:4,diameter:"10",length:"3.07"},
                    {id:3,diameter:"10",length:"3.06"},
                    {id:2,diameter:"10",length:"3.10"},
                    {id:1,diameter:"10",length:"6.00"}
                ]
            },
            step9:{
                concreteVendor:"นครหลวง",
                Strength:"300 CY",
                MIXNO:"84356400",
                slump:"17.5-20.0",
                cmfConcrete:"184",
                table:[
                    {
                        n:{
                            no:'1',
                            car:'815'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"21.57"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.25"
                        }
                    },
                    {
                        n:{
                            no:'2',
                            car:'544'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"22.06"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.34"
                        }
                    },
                    {
                        n:{
                            no:'3',
                            car:'537'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"21.57"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.36"
                        }
                    },
                    {
                        n:{
                            no:'4',
                            car:'815'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"21.48"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.37"
                        }
                    },
                    {
                        n:{
                            no:'5',
                            car:'668'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"22:05"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22:40"
                        }
                    },
                    {
                        n:{
                            no:'6',
                            car:'622'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"22:03"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22:40"
                        }
                    },
                    {
                        n:{
                            no:'7',
                            car:'826'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"21.17"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.41"
                        }
                    },
                    {
                        n:{
                            no:'8',
                            car:'826'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"22.17"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.41"
                        }
                    },
                    {
                        n:{
                            no:'9',
                            car:'392'
                        },
                        concrete:"5.0",
                        slump:"20.00",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"22.11"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"22.50"
                        }
                    },
                    {
                        n:{
                            no:'10',
                            car:'625'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"22.31"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23.09"
                        }
                    },
                    {
                        n:{
                            no:'11',
                            car:'826'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23.06"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23.26"
                        }
                    },
                    {
                        n:{
                            no:'12',
                            car:'708'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:06"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23:26"
                        }
                    },
                    {
                        n:{
                            no:'13',
                            car:'623'
                        },
                        concrete:"5.0",
                        slump:"19.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23.05"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23.37"
                        }
                    },
                    {
                        n:{
                            no:'14',
                            car:'663'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23.07"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23.39"
                        }
                    },
                    {
                        n:{
                            no:'15',
                            car:'530'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:24"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23:43"
                        }
                    },
                    {
                        n:{
                            no:'16',
                            car:'531'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:34"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23:57"
                        }
                    },
                    {
                        n:{
                            no:'17',
                            car:'390'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23.17"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23.58"
                        }
                    },
                    {
                        n:{
                            no:'18',
                            car:'706'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:45"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00.06"
                        }
                    },
                    {
                        n:{
                            no:'19',
                            car:'537'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:33"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"23:58"
                        }
                    },
                    {
                        n:{
                            no:'20',
                            car:'654'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:43"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00.09"
                        }
                    },
                    {
                        n:{
                            no:'21',
                            car:'622'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:43"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00.09"
                        }
                    },
                    {
                        n:{
                            no:'22',
                            car:'750'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:25"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00.11"
                        }
                    },
                    {
                        n:{
                            no:'23',
                            car:'621'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"00:01"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00:45"
                        }
                    },
                    {
                        n:{
                            no:'24',
                            car:'544'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"00:16"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00:45"
                        }
                    },
                    {
                        n:{
                            no:'25',
                            car:'1826'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"00:26"
                        },
                        arrivedAt:{
                            date:"10 ธ.ค. 65",
                            time:"00:46"
                        }
                    },
                    {
                        n:{
                            no:'26',
                            car:'815'
                        },
                        concrete:"5.0",
                        slump:"20.0",
                        fromPlant:{
                            date:"10 ธ.ค. 65",
                            time:"23:56"
                        },
                        arrivedAt:{
                            date:"11 ธ.ค. 65",
                            time:"00:47"
                        }
                    },
                    {
                        n:{
                            no:'27',
                            car:'392'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"11 ธ.ค. 65",
                            time:"00:22"
                        },
                        arrivedAt:{
                            date:"11 ธ.ค. 65",
                            time:"00:53"
                        }
                    },
                    {
                        n:{
                            no:'28',
                            car:'826'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"11 ธ.ค. 65",
                            time:"00:40"
                        },
                        arrivedAt:{
                            date:"11 ธ.ค. 65",
                            time:"01:00"
                        }
                    },
                    {
                        n:{
                            no:'29',
                            car:'170'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"11 ธ.ค. 65",
                            time:"00:40"
                        },
                        arrivedAt:{
                            date:"11 ธ.ค. 65",
                            time:"01:00"
                        }
                    },
                    {
                        n:{
                            no:'28',
                            car:'826'
                        },
                        concrete:"5.0",
                        slump:null,
                        fromPlant:{
                            date:"11 ธ.ค. 65",
                            time:"00:40"
                        },
                        arrivedAt:{
                            date:"11 ธ.ค. 65",
                            time:"01:00"
                        }
                    },
                    
                ]

            },
            step10:{

            },
            step11:null,
        }
    }
]