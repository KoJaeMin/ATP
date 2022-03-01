//// Module Code<

import jwt  from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import config from './config.js';
import fetch from "node-fetch";
import fs from 'fs'
import request from 'request'


//// >Module Code


//// function Code<

async function UpdateAllMarket(){
    // 암호화폐 리스트 모두 가져오기
    // market.json 업데이트
    try {
        const GetRes = await fetch(`https://api.upbit.com/v1/market/all?isDetails=false`, DeafaultOptions);
        const GetResJSON = await GetRes.json();
        fs.writeFileSync('UpbitMarket.json',JSON.stringify(GetResJSON));
        console.log(Object.keys(GetResJSON).length)//market에 있는 암호화폐 갯수
    }
    catch(err){
        console.error(err);
    }
}

async function GetCandles(market='KRW-BTC',unit=1,count=1){
    try {
        const GetRes = await fetch(`${server_url}/v1/candles/minutes/${unit}?market=${market}&count=${count}`, DeafaultOptions);
        const GetResJSON = await GetRes.json();
        console.log(GetResJSON)//market에 있는 암호화폐 갯수
    }
    catch(err){
        console.error(err);
    }
}

async function GetMyWallet(){
    request(AccountOptions, (error, response, body) => {
        if (error) throw new Error(error)
        console.log(body)
    })
}

//// >function Code


//// Variable Code<

const server_url = 'https://api.upbit.com'


const payload = {
    access_key: config.Access_key,
    nonce: uuidv4(),
};

const Sign = jwt.sign(payload, config.Secret_key);
const authorizationToken = `Bearer ${Sign}`;


const DeafaultOptions = {
    method: 'GET',
    headers: {Accept: 'application/json'}
};

const AccountOptions = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${Sign}`},
}

const UpbitMarket = JSON.parse(
    await fs.promises.readFile(
        new URL(
            './UpbitMarket.json',
            import.meta.url
        )
    )
)

//// >Variable Code


//// Runnig Code<
UpdateAllMarket()
GetCandles()

//// >Runnig Code