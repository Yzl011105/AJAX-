//!1.引入express
const { response } = require('express');
const express = require('express')

//!2.创建应用对象
const app = express();

//!3.创建路由规则
/*  req是对请求报文的封装
    res是对响应报文的封装 */
//? get请求
app.get('/server', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')

    //设置相应体
    res.send('HELLO AJAX GET')
})

//? post请求
app.post('/server', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')

    //设置相应体
    res.send('HELLO AJAX POST')
})

//? JSON响应
app.all('/json-server', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    res.setHeader('Access-Control-Allow-Headers', '*')
    //相应一个数据
    const data = {
        name: 'yzl'
    }
    //对对象进行字符串转换
    const str = JSON.stringify(data);
    //设置响应体
    res.send(str);
})

//? 针对 IE 缓存
app.get('/ie', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')

    //设置相应体
    res.send('HELLO IE')
})

//? 延时响应
app.all('/delay', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    setTimeout(() => {
        //设置相应体
        res.send('延时响应')
    }, 3000)
})

//? jQuery 服务
app.all('/jquery-server', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // res.send('HELLO jQuery AJAX')
    const data = {
        name: 'yzl'
    }
    res.send(JSON.stringify(data))
})

//? Axios 服务
app.all('/axios-server', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // res.send('HELLO jQuery AJAX')
    const data = {
        name: 'yzl'
    }
    res.send(JSON.stringify(data))
})

//? fetch 服务
app.all('/fetch-server', (req, res) => {
    //设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // res.send('HELLO jQuery AJAX')
    const data = {
        name: 'yzl'
    }
    res.send(JSON.stringify(data))
})

//? jsonp 服务
app.all('/jsonp-server', (req, res) => {
    const data = {
        name: 'yzl'
    }
    let str = JSON.stringify(data)
    res.end(`handle(${str})`)
})

//? 用户检验是否存在
app.all('/check-username', (req, res) => {
    const data = {
        exist: '1',
        msg: '用户已存在'
    }
    let str = JSON.stringify(data)
    res.end(`handle(${str})`)
})

//? jQuery jsonp
app.all('/jquery-jsonp-server', (req, res) => {
    const data = {
        name: 'yzl',
        city: ['黑龙江', '哈尔滨']
    }
    let str = JSON.stringify(data)
    //接收callback参数
    let cb = req.query.callback
    //返回结果
    res.end(`${cb}(${str})`)
})

//? CORS
app.all('/cors-server', (request, response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');
    //* 这样配置 跨域请求哪个页面都可以，头信息可以自定义，请求方法也可以自定义
    response.send('hello CORS');
});

//!4.监听端口启动服务
app.listen(8000, () => {
    console.log('running!');
})