/**
 * File: index.spec.js
 * Created by busyhe on 2022/6/22 00:45.
 * Email: busyhe@qq.com
 * Description:
 */
const config = require('../src')

test('test basic properties of config', () => {
    expect(isObject(config.parserOptions)).toBeTruthy()
    expect(isObject(config.env)).toBeTruthy()
    expect(isObject(config.globals)).toBeTruthy()
    expect(isObject(config.rules)).toBeTruthy()
})

function isObject (obj) {
    return typeof obj === 'object' && obj !== null
}
