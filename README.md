# get real ip

get a real public ip on broswer.

## Getting started

```bash
npm install get-real-ip
yarn add get-real-ip
pnpm add get-real-ip
```

## Usage

```js
import getRealIp from "get-real-ip";
getRealIp().then(ip=>{
    console.log('ip: ', ip);
})

// or with async/await

(async ()=>{
    const ip = await getRealIp()
    console.log('ip: ', ip);
})()
```
