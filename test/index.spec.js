/**
 * File: index.spec.js
 * Created by busyhe on 2022/6/22 00:45.
 * Email: busyhe@qq.com
 * Description:
 */
const config = require('../index')

test('test basic properties of config', () => {
    expect(isObject(config.parserOptions)).toBeTruthy()
})

function isObject (obj) {
    return typeof obj === 'object' && obj !== null
}
