import express from 'express'
import parser from 'body-parser'
import chalk from 'chalk'

import {readFileSync} from 'fs'
import {join, resolve, normalize} from 'path'
// 配置文件
import config, {requestFormat} from './config.js'

// 启动时避免因修改config.js 导致nodemon刷新引起的日志不连贯
console.clear()
// 配置文件解析
const getStaticFile = (baseDirectory, path) => {
    try {
        return readFileSync(join(resolve(), baseDirectory, path))
    } catch {
        try {
            return readFileSync(join(resolve(), baseDirectory, '/index.html'))
        } catch (err) {
            return new Error()
        }
    }
}
for (const data of config) {
    const app = express()
    // body json解析
    app.use(parser.json())
    // 中间件打印配置文件
    app.use('*', (req, res, next) => {
        console.log(`
${chalk.rgb(180, 127, 187).bold('↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓')}
    ${chalk.rgb(215, 185, 142).bold('请求地址:')}   ${req.baseUrl}
    ${chalk.rgb(215, 185, 142).bold('请求类型:')}   ${req.method}
    ${chalk.rgb(215, 185, 142).bold('请求格式:')}   ${req.header('content-type')}
${chalk.rgb(180, 127, 187).bold('↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑')}
        `)
        next()
    })
    // 创建路由
    for (const path in data.paths) {
        const conf = data.paths[path]
        if (conf.staticManager) {
            app.get(path, (req, res) => {
                const staticInfo = conf.staticManager
                try {
                    res.send(getStaticFile(staticInfo.path, normalize(req.url.replace(new RegExp(path), ''))))
                } catch {
                    res.status(404).send('404 NOT FOUND')
                }
            })
        } else {
            app[conf.type](path, (req, res) => {
                const note = []
                let eligible = true
                if (conf.params) {
                    for (const key in conf.params) {
                        const info = conf.params[key]
                        if (info.necessary) {
                            if (info.check && !info.check(req.query[key])) {
                                eligible = false
                                note.push(`query : ${key} check校验错误`)
                            } else {
                                note.push(`query : ${key} check校验通过`)
                            }
                        }
                    }
                }
                if (conf.body && conf.body.necessary) {
                    if (typeof (req.body) !== conf.body.type) {
                        eligible = false
                        note.push(`body 类型错误或缺失参数`)
                    } else {
                        note.push(`body 校验通过`)
                    }
                }
                let request
                if (typeof conf.request === "function") {
                    request = conf.request(eligible, note)
                    note.push(`请求结果: ${request.result}`)
                } else {
                    request = conf.request
                }
                res.send(requestFormat(path, conf, request, note))
            })
        }
    }
    // 启动监听服务
    app.listen(data.port, () => {
        console.log(`端口 ${chalk.rgb(255, 0, 0).bold(data.port)} 服务已启动，--${chalk.rgb(26, 87, 85).bold(data.description)}`)
    })
}
