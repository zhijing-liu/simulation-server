export const config = {
    'qyd-ofd': {
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
                    check: (data) => true
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
                            sealImg: "R0lGODlhoACgAPcAAAAAAP8AAP8AAf8BAf8CAf8CAv8DA/8EA/8EBP8FBf8GBf8GBv8GB/8HB/8HCP8ICP8JCf8JCv8KCv8KC/8LC/8LDP8MDP8ODv8OD/8PDv8PD/8QEP8SEv8TE/8UFP8VFv8WFv8XF/8YGP8aGv8bHP8cHP8dHv8eHv8fIP8gIP8iIv8iI/8jI/8kJP8lJv8mJf8mJv8nJ/8nKP8oJ/8oKP8pKf8qKf8qKv8sLP8sLf8tLP8tLf8uLv8vMP8wMP8yMv80NP81Nv82Nv84OP84Of85Of85Ov86Ov87PP88PP88Pf89PP89Pf89Pv8+Pv8+P/8/P/8/QP9AQP9BQv9CQf9CQv9DQ/9DRP9ERP9FRv9GRv9ISP9KSv9LTP9MTP9NTv9OTv9PUP9QUP9SUv9TU/9UVP9VVv9WVv9YWP9ZWv9aWv9aW/9bW/9bXP9cXP9cXf9dXP9dXf9dXv9eXf9eXv9gYP9hYv9iYv9jY/9kZP9mZf9mZv9naP9oaP9qav9rbP9sbP9tbv9ubv9vcP9wcP9xcv9ycv90dP91dv92dv93d/94eP95ev96ev97e/98e/98fP99fv9+ff9+fv9+f/9/f/9/gP+AgP+Cgv+DhP+Eg/+EhP+Fhv+Ghf+Ghv+Hh/+IiP+Jiv+Kiv+LjP+MjP+Ojv+QkP+Qkf+RkP+Rkf+Rkv+Skv+TlP+UlP+Vlv+Wlv+XmP+YmP+Zmv+amv+cnP+dnv+env+foP+goP+hov+iov+jpP+kpP+kpf+lpf+lpv+mpv+nqP+oqP+pqf+pqv+qqv+rq/+rrP+srP+urv+vsP+wsP+xsv+ysv+0tP+2tf+2tv+3uP+4uP+6uv+7vP+8vP+9vv++vv++v/+/v//AwP/Awf/Bwf/Cwv/DxP/ExP/FxP/Fxf/Fxv/Gxv/HyP/IyP/Jyv/Kyf/Kyv/LzP/MzP/Nzv/Ozv/P0P/Q0P/Q0f/R0f/S0f/S0v/S0//T0//T1P/U0//U1P/W1v/W1//X1//X2P/Y2P/Y2v/a2v/b3CH5BAEAAAAALAAAAACgAKAARwj/AAEIHEiwoMGDCBMqXEjQnTRekCCdmUixYkRe0twx3Mixo8ePIBPO8hCgpMmSA2Ac4heyZUF+h2AMOHnSwyyXOHMm9CeBpgEvDNUFgEDpC6kUJSBNMKOTYasfEOrwKxWAJUMvBmhC8Ne0q8B7NAdIc6krADeBChAAGyFl4AkeXgkCYQEJQolpA/kByaoupLSZJ+nFVdjTpJXBA8cFiCVkw8AnMAb74uChFIAkJwReCrAN8UAsJyV0RXfSsefTqD1vOInO47STWg5yAHBhDMFJDQKAS82790AJGg1qOYkXYbiThwxaPVgmkUA6uYUw842wJPWCzgiV2CSwQOaBr4LM/ywxUEyLgodOhiNY7uSw64gJ0QyAA77AFAF86BTGGoCvk/YlhMkD8xVo4IEIzocAGwFWZxIvZ5gEV4MfkZbghSXxQuFHPJh0hjQnjaMTJheUBAFqQmFoIC686YJJU4qZNBYAhQVAx06iDVTPd/gAslp+saD2YwAFXOKRLguYVIBn6DyAQB4EBTDQMwZ0INAkAfiBUB0m5UgQBybdoBAvJVnghjMbptnROAiYxKBAHgDARwx9GKSCSbMp1IJJDajpp30ElhTZR1yaFFtOIkjJRR+64LJAHbqIEkAYBN3ghRuYZpopNAhBMcBCO1gwUApcuIUFQbggUIABBsyEwKslHf/q0hYn1eGVP4CVVMlHWiQgZQoJdABBABusFoJB/tSXTADwMLQEAgyF6pasJYBhUAFiyKOttpAMsFxHm5nk7XX0hGUkQmRICQAn7DwgRisU3OILQbP0OdCyzQpUxgIIZdXBpwdRRdAJ1For0CoPJJywrwsoPBNTB12Sa0mC/WmQE/Nt0IrFXbUypElOcBxXLDEcaAALaCBDHTJosJCVgTHoIrKa4+zRgYomabDBDjz07HPPO2ygAc4ldbCHiDP35osF8z0AVNILgRHoSRbMCzVCU5dkGkcgqFHQKUsKBEwB33olixUSdOGPEGgIZEkAtnUTR0cfB2AvhRScBHBXQvz/UFA1AcwISwDYeLVKAMGhE0MCguDgd1wTU3DaDbBR6E4AwCAWSwDdEFTKBvbwRmuYLtFyUqlXpw4SFyfdxBBJJYFw0AUEHQ4tADzsojp801BggcwCCSElO5vUEEAkAfRiUAgmxWkQMicZ0xEkEybEtOTUnQQ8b1hqDSUA1JAHADRDfQS9SSoLdIJJbe+eUJsGup8QGiZlFmFJ1c/8A9H8mzTC1R0qyURMsgP5EeRl/DPgQHbgIQBYwSRH+AggVFCAkpxrIFkIAFcGI58C0cAgo5sPEBCjjeoF4BwC0UcAPNAWAFSjFK5byBEMQ5AKlqR9eZlFHdYXgBhYDQC3G8gC/7YwQsSowwPraQo/YlAMnbAjAKgbnxsWMIAWCKIZQIwEABIwNwBs4UUIUYOSEBKukthCgWgEwAYPYouTfIIjYCoJAoKTRgW6A34ByFNL/IHAxYTEA80CRQIc0AdBGFIQDfsIHQsSAEmASlTqO5VAqjWQZiTjksigwB2SAYUiXBIUARATSGZxEgOULS5Z2xtDKPAKAJAKAItQVwDeWLsAtBJfAFCMwQziyIF0g0j7KEgJQnafpwHgBLscSAG40I1mNtMQYePIxB7gpxqVpAGtJEg4pPCAsxSkGZw7CGmKwCt1ESQF3njJQOgwgL4gBJzJSEgschOaOgKgUDR5gBZas/87dHCzQLayp1fGcQkfTKx//RuADy6RRIGmKRmKAII1EXogCQBBEfF0KHWqoYWD0oQCP6hD5gYDjDr8IG8HGoAWiqNRj6iDBgUyAA/OCDVc8KCPJqEBP1sKAFHgNAAtcCdHgAFG+NADEQpRx558IgoFAmE+UVzIHCRwDYFwIwC5EAg8ArAK3xQUAOQoAgXqpApDMIR1NCkix/Axn0mABFeWIcgZ/ieQPTjPM1MQiD+gkCSWhqQS87nHhubTlD8UoB6MNKtAAtBFr6zBRgUpRACO1RTC+uZwJymqVyjwPQCEQBSboCYAbEE7r+SiHwDoQwJ4kI57inYwmKBJVxFDipP/8Cs1eAhAEgrygKjGJQ8F2EAJXDcK3tCzJKToCtNKYgCh8nQgzpAHhdSBQOyFBBcnOc9zr7ZUM3qkjSYx5kC4dKLtwqca+jmIF05CC4bgyiTpLcjWOuDXFMzIvF0ZQQBoAArBAqAJUTiID8R1yoH0wSQGWONArEsQbdCqAGBAmprUodnUmCIGPNhDLKZhlWUEwAqpSIEE+uAMAxiEJEEaCB9NUieD7K8kKfAIIAJaEEh8IAAlEAZ8xlASEVxHBO0FQDzuQCQvcKMN1CxCNTxyp5I8biBPLYladeKP5MDnoBSixQDaAYASeMANIXlxAJ7cwQD42KEGuq9vhFAGrySq/ySCAMDlTNJEe0rqQJKsozFOwg5I5GxmdfgpRVU0gBZybGglkYiEdse8QRuouaoLYAAGiD80khKhijWgpM/gCJNsTX50oKh2DTikRgAgVxcMyU4B0B4rI8ZXBzKELzwKoNR8w5w4iS1KBFKWkkTzIKvAAQsIMAAgBFEgxzaEfrfXla3SRAKd2wkI5pPRuKDBeX7Y2GIFsoBNCMUQG1DwQWwYABYJJJYlYbBB3BEZdOhhBQEYgBNoGoICe0URscLJgQNATJ1oIt4nuIOI6EHkAPAAFEyzlycCcIGx8AIBCUg1AFAaAEUURNcBSDBBtEBTgZRXII7YwLA2kAdO4Xcjsf8IhB1SQISC+GNjewNDKM98kBVb8CCAMwmNT/4nMojvIGI0iYQPMhzmrprnSaOuoTgCO7shHWrHvWtHSmYSbePkEhoiCBoK4NyN3CHOCJGUKxSygz7AY1to30F8DQIGFSCmFScZVEuAcRKaz10C6ChAtQXChhi3ZDWwCsCrIJ6APxREWuor2EGgZwoA8CMAfkfUSX6okxl6GiThGAATfKANfqZHIM41wKpYJfqMk55V//sFGFYPBuFxgfWrz8pOEe/KKCLTIJkmyKhB8rEInkbM8fYrQ9iABFfG5vP+mKVBHugLD8OjGXc7yIcJwgUvLfCuJ9jCQChZkAIMoADgB///9z8yjYk92TdhWcgysiLYFIDAPAHQwnBAQRDomRuXAIjGfms+EGoEYBkHQQEpdkyK133x5AwBgBfd0FQbgWVqMh/aZxAloC4zdCMCMRwucBAQ4AGUky8NGACvRRAWoGbZdwgQIAIIkEzYETgMEUImcTWmcFAhcHQnhw6NJi6Nh0b+IGkmgQDiVUdegEcSIm48RQs3UyAhUAddtyHqUAdvNh8dEGRPpxD8UAkTmCAFIAJHgAaXYAwNtRHjYAyXgAZHIALkdiAlUAn2NoVNUQ60IAhWUAKChiEGUAJWIAi0UA5smCZuKAhYcAJzeCEGcAJYIAi6QIN76BkEZVCOllAL/zV0iQgS/HAJPIQgWVgEZ3AJxfCFDBEOxXAJZ1CGZ2ggabiGkSgQswBTj6YCaCA9vmEMaKACgehDpygQRmggSbiE01UHN0gTUTiF+HQS+oSIM+NPWaNz27WDCvKDaRSE88EDRGhAUJAxVocQWiBe93AFAeA1vEEHyiMQ02AlC+Ex89Fv7rMKBwUCxFgQQPAA64EGC2AOAlEIGkAdjwAEZlgFHYEO06Y3qaA6E4VNKDdZ38IC/dYzp6EC2QQAbLA3YnAF/2IbDPEKx1US1mcx8yErHGEIxyYQBgAIA2EAZ5AarRACGhAM49NtLVF0taYmYKE3EtcRT/BBAnEE5QA4x/8AegEghXEBd2A2EKFwASKgMmsHLgdVMQ2SfjmxATfgARaACgIhCgkwELhgYogxADS1Di0wAH1gChE4CXv3EQ4IH8MiLs0WANUIAF7gdnxnd03BAXdwCQtQAksGAJuDRV0xMR/HG8AnFnFhOqumAQ2ABeVgAAIQAGGJE8bzABY3EHwQADHUFX9xEueHGO9lEm6FGHlQjwAwA4fRDwEACXFxAU6wHHRnCSUgmDsXF4BFYJ6RBKWRGi3QJh3nDAPAiU3hD2BQAQWQXNTxMbt1K300gKixBcJ3CJCEGCGwBgDADlugASEQfZ6xOQgWjSBBdybhlvbRWXGxA9pJHU+IOTn/EYwaWYuiUysuQXUlkZbmyRtwZxIxEBJHKHjs0J72cUd48hFNJ524cwORZ5+nEXUdAQN8chBAgAbjUhD0wGUA2hFFQH8HcVy7lxAsaQA0qAXJ5Qx7CQAc8GkNihAthoriWBDogEDlaRBlFAAdNxBnsAi+hAIEoW4fahDTqAMDpoVSEAAuWhDgdXMIkXMlsZoAIAh3QBDAIDwDIAdTaZ+RORCHkxItMFscICssIjzpM14nUZcGMZ+iRBCQ0KUGMWkzgQXCFyBDIKOpoQzV92eNEDbOUAYSMAAqcAnNUDHj4CusUCn5aRAYp3Ed8WsA4AcZEAAyMFL2URLMxht6WBCK/0AgA1ActyAQ2wAC76AQNhcAMUluOLQRVokQmJAk5uYbuXIdFoAF3SBzC1AG8CAGArEBmaBKGxF0RFIQZYamCTEIJocQIcBCQ0AdZXASdNUbXDAEmfAlWgIAJZGnH0FxjSkQsBYARYpmNFGm6BeCLYFPXmI6vqZRgmYf+5OcOUFu5vZAJeF79mQIBpI/aWR503dqJhGTCoQg67g7GPcpICJ0AoVoB2KKqRMjJSENnaY1HMMPV9iICHUB2cAxpXY/AVBAM6MNZWmwF7IATfonDCRADKuuImMKgdiIA7AHqbNpGes+eyCxJsEE7iOyi2ZAUUZRUrc7KltpaJRb/CN3mv/mIX5WEpxpQHPWP6EqP/oKCf/xgl1xAiJADqkhhAkUrw/SswFQZy2xAxRwBO+Ro6gRjP0zoYgxBLjmEntmEvVZiZvqEX1QAj/XqhHgGe3xaEjjDyViICvaFYZQVYuVD88BAbf1EfRTEuJTZt+pHH3AAhWEA+1VC21GEOIQALsyGG+rN7lHEK+gtPHmGQaANCdgqFKyAVrSCLPKEE8IdhZSEoZaEPJAJEWQdV7wsyMwDYIAA1mBA4mpE+hmElOmEGxAE8E5GDiGDwDgX8gqEOaAAIbwKZNgAbErEPxhEjslZpVZEHQwW8gGCEt1BGSTGj1rAd7kEfdQiVeqE9ZQnwL/wSUWUAbS5UBUwB3GUACiJAoFYAOLJBDMW3/RkxDVgAB3UgBYQApn2wojKSQI4Ak6AQwWAKsuQQEXoAt2QAEDkAJ50BqtUAArYAEksAIRGAedwICXkIMDcT4l0b0AIGb/mVqCpwW+MA00KRBVoAyjtQUlQgFpAL5xkate8bMtIRQU4AffsgxlUEGEEDaxMABkAAB/KxBNlh8GcRwm4WoHAQelEAtYQCAcsAfUap/vKxDjMAKxUAYpQA99cARVcAI4kAP1QRCCoB4HsW8ZZ50AYARncLwzihDCcAaAgJT+8B0HoQ658rgE0XSU9canoQEiQEvL4z+WmitF6ce+MWAo/8Gvr7F0iEwdOWoSU1wQ2loSzPjIiLFeD9IRlQxFmIwaaFUSFbsQPQpUp9EHdOsV2qAKp4HDntFdKqpqsZkTVPGz6DAAVoYmXroIvNzLi3Bg1koQ6wUqAzACxmwAD2DMI9Aq0WYQ2GVyy4ABTfEx87pKCKaLHiEGASAP/vkD3uzNiTKiLmEB0RRLBkF7BLN9KmgL/sAExOQPHaC1IaF06dYUlGMSEYgTw7FqqwABCesS/hUA5ooQ6FyA1wIUuvBxOxoSLgimOVFbJpG3HlEEAfAPYNBKPXAGlDMGmALDDEEm1BoAizpeeQYAOzAAFJDSA2AAKa3Au6QFL4AGbMAGbv8w05jCBnSAKdH6ERXpm3FhTSXNESXQARSADyngB+Fwu8kwDQzAqgIxDwUxDAFAjFLgCFZtUFad1VlNEAWtztdiAA0Q1mGdFW8QEqDRJaiBWSZRYR8dJymgfeaMrAyIKgEABAhIDx8wugbhAH2cEF09SSoIAAXAnQBAC4C6ERhXEtCLGhQ3uR3BA3WSAgOgKqanfAUhAJGBSydwtgQBOAmwAKCdJAEgwwCwlYMXb6cd2AVggQPxwGJ5ErZ6GpalJ3lzFilwfLIkyAJhAmyJfyUwAOVLGF0rECOQaekM2NeSABfQExJwAQTSEbMNHy8pLmpmEL96HyXgBYDACJeQBwH/QAgEwQJKcC/MMhABcJGL9QDEAAAZwJZhKlTH3WWBPRDk888AUAkvWxCTGRhpMt0msbgGMWADsSc+hqBg2gA/63wDMQ1DfACObRBAcH7xfXsqRhB7hpcLkaIl4bt+cowe+sFSogQBUKwDM9UHwUAEvBAzYRD9XBDpjF3bmBAIWN0GUTf8aTEtaxK+xeEd4dFpwrsIEcq06z78MFE/8XRYoRX8mjQ+NR9BxVNKNR8GAKEOxQsTBYLzvTtSMx+/U4Oq6BM8QMMcY1OCplOJOBIGMgAxsBIUAhMxQGsrNMqROA0dhSAgdQd63RTAcAc/sFxpvlKfDADhYDP8ozM88zM+KxM0+qoiRoObgf48iSBRJjsfEvADieDBj54T7PAQVl0Rns5pjoARPp5GAQEAOw==",
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
        },
        /**
         * requestFormat
         * @param path 请求路径
         * @param customData 自定义数据
         * @param staticManager 是否为静态资源模拟器
         * @param request 请求结果
         * @param note 日志
         * @returns  自定义返回
         */
        requestFormat: (path, {customData, staticManager}, request, note) => {
            return {
                code: customData.codeList[request.result],
                data: request.data,
                note,
                path,
                result: request.result
            }
        }
    },
    'qyd-static': {
        serverName: 'static',
        description: '轻阅读静态资源模拟器',
        port: 8888,
        paths: {
            '/static/*': {
                staticManager: {
                    path: './static'
                },
            }
        }
    },
    kxq: {
        serverName: 'kxq',
        description: '可信签接口模拟器',
        port: 8082,
        paths: {
            '/trustedsign/applet/doLogin/*': { // 登录
                type: 'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: {
                        openId: "oM7r95KOzn3wCwR20h5Gbo6oZcsY",
                        userInfo: {
                            userId: "testUser1",
                            accountId: "oM7r95KOzn3wCwR20h5Gbo6oZcsY",
                            userName: "测试用户1",
                            realName: 0,
                            token: "8aecc450bab2484cb5a858407461b585"
                        },
                        newUser: false
                    }
                })
            },
            '/trustedsign/applet/contract/checkCode': { // 发送验证码
                type: 'post',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                body: {
                    type: 'object',
                    necessary: true,
                    check: (data) => true
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: {}
                })
            },
            '/trustedsign/applet/contract/getAllContract': { // 获取列表
                type: 'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: [
                        {
                            "docId": "1232",
                            "typeId": "1",
                            "typeName": "图片",
                            "dirId": "432fw",
                            "docName": "附件1",
                            "docCode": "fefw2",
                            "endDate": "2022-10-12 09:57:31",
                            "companyId": "43242",
                            "companyName": "测试公司",
                            "organizeId": "242432",
                            "organizedNo": "23432",
                            "organizeName": "测试组织",
                            "flowid": "32342",
                            "instId": "42654",
                            "reportId": "64654",
                            "docUsers": "42",
                            "startTime": "2022-10-11 09:58:18",
                            "endTime": "2022-10-13 09:58:24",
                            "docAmount": 4234.00,
                            "secondParty": "423423",
                            "thirdParty": "42",
                            "docComment": "42",
                            "signState": "42",
                            "dqzt": "1",
                            "docStart": "2022-10-12 09:58:10",
                            "docEnd": "2022-10-12 09:58:12",
                            "newNodeuser": "243",
                            "completeCallUrl": "432",
                            "createUserUniqueId": "4243",
                            "createAccountId": "423432",
                            "ordinal": 42,
                            "bizId": "423",
                            "firsttime": "2022-10-12 09:58:41",
                            "lasttime": "2022-10-12 09:58:43",
                            "crYhid": "testUser1",
                            "crYhxm": "42",
                            "crDeptid": "432",
                            "crDeptname": "测试部门",
                            "crEntid": "43",
                            "insureStart": "2022-10-12 09:59:08",
                            "insureEnd": "2022-10-12 09:59:11",
                            "isRenewal": 1,
                            "isLegalReview": 1
                        },
                        {
                            "docId": "1232234",
                            "typeId": "1",
                            "typeName": "图片1",
                            "dirId": "432fw32",
                            "docName": "附件2",
                            "docCode": "fefw223",
                            "endDate": "2022-10-12 09:57:31",
                            "companyId": "432422",
                            "companyName": "测试公司2",
                            "organizeId": "242432",
                            "organizedNo": "23432",
                            "organizeName": "测试组织",
                            "flowid": "32342",
                            "instId": "42654",
                            "reportId": "64654",
                            "docUsers": "42",
                            "startTime": "2022-10-11 09:58:18",
                            "endTime": "2022-10-13 09:58:24",
                            "docAmount": 4234.00,
                            "secondParty": "423423",
                            "thirdParty": "42",
                            "docComment": "42",
                            "signState": "42",
                            "dqzt": "1",
                            "docStart": "2022-10-12 09:58:10",
                            "docEnd": "2022-10-12 09:58:12",
                            "newNodeuser": "243",
                            "completeCallUrl": "432",
                            "createUserUniqueId": "4243",
                            "createAccountId": "423432",
                            "ordinal": 42,
                            "bizId": "423",
                            "firsttime": "2022-10-12 09:58:41",
                            "lasttime": "2022-10-12 09:58:43",
                            "crYhid": "testUser1",
                            "crYhxm": "42",
                            "crDeptid": "432",
                            "crDeptname": "测试部门",
                            "crEntid": "43",
                            "insureStart": "2022-10-12 09:59:08",
                            "insureEnd": "2022-10-12 09:59:11",
                            "isRenewal": 1,
                            "isLegalReview": 1
                        },
                        {
                            "docId": "12322346",
                            "typeId": "1",
                            "typeName": "图片2",
                            "dirId": "432fw",
                            "docName": "附件3",
                            "docCode": "fefw2234",
                            "endDate": "2022-10-12 09:57:31",
                            "companyId": "43242",
                            "companyName": "测试公司3",
                            "organizeId": "242432",
                            "organizedNo": "23432",
                            "organizeName": "测试组织3",
                            "flowid": "32342",
                            "instId": "42654",
                            "reportId": "64654",
                            "docUsers": "42",
                            "startTime": "2022-10-11 09:58:18",
                            "endTime": "2022-10-13 09:58:24",
                            "docAmount": 4234.00,
                            "secondParty": "423423",
                            "thirdParty": "42",
                            "docComment": "42",
                            "signState": "42",
                            "dqzt": "1",
                            "docStart": "2022-10-12 09:58:10",
                            "docEnd": "2022-10-12 09:58:12",
                            "newNodeuser": "243",
                            "completeCallUrl": "432",
                            "createUserUniqueId": "4243",
                            "createAccountId": "423432",
                            "ordinal": 42,
                            "bizId": "423",
                            "firsttime": "2022-10-12 09:58:41",
                            "lasttime": "2022-10-12 09:58:43",
                            "crYhid": "testUser1",
                            "crYhxm": "42",
                            "crDeptid": "432",
                            "crDeptname": "测试部门",
                            "crEntid": "43",
                            "insureStart": "2022-10-12 09:59:08",
                            "insureEnd": "2022-10-12 09:59:11",
                            "isRenewal": 1,
                            "isLegalReview": 1
                        }
                    ]
                })
            },
            '/trustedsign/applet/contract/delete/*': { // 删除任务
                type: 'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: true
                })
            },
            '/trustedsign/applet/contract/getProcessByDocId/*': { // 获取详细信息
                type: 'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: [
                        {
                            processId: "2432",
                            instNodeid: "4324",
                            instId: "432",
                            docId: "1232",
                            docName: "测试1",
                            companyId: "3242",
                            companyName: "测试公司1",
                            userId: "testUser1",
                            userName: "测试用户1",
                            signDate: "2022-10-1210:46:26",
                            signOpinion: "1",
                            dqzt: "系统",
                            fileId: "232"
                        }
                    ]
                })
            },
            '/trustedsign/applet/login/verifyToken': { // 校验code
                type: 'post',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: (checkResult) => ({
                    result: 'success',
                    data: true
                })
            },
            '/trustedsign/applet/signature/getMySignature': { // 获取章
                type: 'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: (checkResult) => ({
                    result: 'success',
                    "data": [
                        {
                            "signId": "56d0ad200ab04bc59cf1c6dc2d3874a4",
                            "signWidth": 432.00,
                            "signHeight": 324.00,
                            "signImage": "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",
                            "firsttime": "2022-10-13 11:56:05"
                        },
                    ]
                })
            },
            '/trustedsign/applet/signature/createSignature/': {
                type: 'post',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request: {
                    result: true,
                    data: true
                }
            },
            '/trustedsign/trustedsign/applet/signature/*':{
                type:'get',
                customData: {
                    codeList: {
                        success: 0,
                        error: 1000
                    },
                    messageList: {
                        success: '成功',
                        error: '失败'
                    },
                },
                request:{
                    result:true,
                    data:true
                }
            }
        },
        requestFormat: (path, {customData, staticManager}, request, note) => {
            return {
                code: customData.codeList[request.result],
                data: request.data,
                msg: customData.messageList[request.result],
                note,
                path,
                result: request.result
            }
        }
    }
}

