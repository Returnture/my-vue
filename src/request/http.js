import axios from 'axios';
import { process } from 'postcss-url';
import QS from 'qs';
import Vue from 'vue';

// 环境的切换
if (process.env.NODE_ENV === 'production') {
    if (process.env.PLATFORM === 'test') {
        axios.defaults.baseURL = ""
    } else if (process.env.PLATFORM === 'pro') {
        axios.defaults.baseURL = ""
    }
} else if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = ""
}

// 创建axios实例
const instance = axios.create({
    // baseURL: '',
    // timeout: 10000,
    // `transformRequest` allows changes to the request data before it is sent to the server
    transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
    }],
    // `transformResponse` allows changes to the response data to be made before
    // it is passed to then/catch
    transformResponse: [function (data) {
        // Do whatever you want to transform the data
        return data;
    }],
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config => {
        config.headers = Object.assign(config.method === 'get' ? {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        } : {
            'Content-Type': 'application/json'
        }, config.headers);
        if (config.method === 'post') {
            const contentType = config.headers['Content-Type'];
            // 根据Content-Type转换data格式
            if (contentType) {
                if (contentType.includes('multipart')) {
                    // 类型 multipart/form-data;
                } else if (contentType.includes('json')) {
                    // 类型 application/json;
                    // 服务器收到的raw body(原始数据) "{name:"heyWei",age:"18"}"（JSON字符串）
                    config.data = JSON.stringify(config.data);
                } else {
                    // 类型 'application/x-www-form-urlencoded;'
                    // 服务器收到的raw body(原始数据) name=heywei&age=18
                    config.data = QS.stringify(config.data);
                }
            }
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// get和post方法
export function get(url, params) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, params, type = 1) {
    let config;
    if (type === 2) {
        config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
    }
    return new Promise((resolve, reject) => {
        instance.post(url, params, config).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}