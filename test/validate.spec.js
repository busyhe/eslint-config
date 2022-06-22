/**
 * File: validate-config.js
 * Created by busyhe on 2022/6/22 10:38.
 * Email: busyhe@qq.com
 * Description:
 */
const { ESLint } = require('eslint')

test('load config in eslint to validate all rule syntax is correct', async () => {
    const eslint = new ESLint()
    const code = 'const foo = 1\nconst bar = function() {}\nbar(foo)\n'
    const [lintResult] = await eslint.lintText(code)
    expect(lintResult.errorCount).toEqual(0)
})

test('ensure we allow top level await', async () => {
    const eslint = new ESLint()
    const code = 'const foo = await 1\nconst bar = function() {}\nawait bar(foo)\n'
    const [lintResult] = await eslint.lintText(code)
    expect(lintResult.errorCount).toEqual(0)
})
