export default [
    {
        serverName: "ofd",
        description: "轻阅读接口模拟器",
        port: 8080,
        paths: {
            '/ofd/read/newShowFile': {
                type: "post",
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    }
                },
                // params: {
                //     // key1: {
                //     //     necessary: true,
                //     //     check:(data)=>+data>1
                //     // }
                // },
                body: {
                        type: 'object',
                        necessary: true,
                        check:(data)=>true
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: {
                        pageCount: 13,
                        imagePath: [
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page0_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page1_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page2_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page3_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page4_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page5_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page6_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page7_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page8_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page9_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page10_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page11_1.jpg",
                            "\\576de0ae0b2359ec2cdd649f09ae1082\\page12_1.jpg"
                        ],
                        sealCodes: null,
                        pageHeight: 1132,
                        userId: "pfxtest",
                        pageWidth: 800,
                        url: "http://192.168.64.13:8080/ofd/previewPage?token=00a49be89a8344df9131450a30cd9ee2&fileId=576de0ae0b2359ec2cdd649f09ae1082&userId=pfxtest",
                        fileId: "576de0ae0b2359ec2cdd649f09ae1082"
                    }
                })
            },
            '/ofd/read/getUserSeals': {
                type: 'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    }
                },
                params: {
                    userType: {
                        necessary: true,
                        check: (data) => true
                    },
                    fileId: {
                        necessary: true,
                        check: (data) => true
                    },
                    userId: {
                        necessary: true,
                        check: (data) => true
                    }
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: [
                        {
                            sealName: "test10",
                            sealId: "ar4wNndCUg6xIw0gnqteEa",
                            sealImg: "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",
                            sealHeight: 171.42857142857142,
                            sealWidth: 171.42857142857142
                        }
                    ]
                })
            },
            '/ofd/read/goToSave': {
                type: 'post',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    }
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: true
                })
            },
        }
    },
    {
        serverName: 'static',
        description: '轻阅读静态资源模拟器',
        port: '8888',
        paths: {
            '/static/*':{
                staticManager: {
                    path:'./static'
                },
            }
        }
    }
]
export const requestFormat = (path, {customData, staticManager}, request, note) => {
    return {
        code: customData.codeList[request.result],
        data: request.data,
        note,
        path,
        result:request.result
    }
}

