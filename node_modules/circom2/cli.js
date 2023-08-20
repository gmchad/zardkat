#!/usr/bin/env node

const { CircomRunner, bindings } = require('./index')
const fs = require('fs')
const path = require('path')

async function main() {
    const args = process.argv
        .slice(2)
        .map((k) => (k.startsWith('-') ? k : path.relative(process.cwd(), k)))
    if (args.length === 0) args.push('--help')
    const circom = new CircomRunner({
        args,
        env: process.env,
        preopens: preopensFull(),
        bindings: {
            ...bindings,
            exit(code) {
                process.exit(code)
            },
            kill(signal) {
                process.kill(process.pid, signal)
            },
            fs,
        },
    })
    const wasm_bytes = fs.readFileSync(require.resolve('./circom.wasm'))
    // There is a slight delay between this logging and the circom compiler version logging
    if (args.includes('--version')) {
        console.log('circom2 npm package', require('./package.json').version)
    }
    await circom.execute(wasm_bytes)
}

// Enumerate all possible relative parent paths for the preopens.
function preopensFull() {
    const preopens = {}
    let cwd = process.cwd()
    while (1) {
        const seg = path.relative(process.cwd(), cwd) || '.'
        preopens[seg] = seg
        const next = path.dirname(cwd)
        if (next === cwd) break
        cwd = next
    }
    return preopens
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
