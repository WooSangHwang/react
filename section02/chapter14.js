
//async
//어떤 함수를 비동기 함수로 만들어즌 키워드
//함수가 프로미스를 반환하도록 변환해주는 그런 키워드

//12번째 라인과 동일함
async function getData(){

    return {
        name: "이정환",
        id: "winter"
    }

}

//assync에 Promise를 반환하면 그냥 Promise로 작동됨.
async function getData2(){

    return new Promise((resolve, reject)=> {

        setTimeout(()=>{
            resolve({
                name: "이정환",
                id : "winter"
            })

        }, 3000);

    })

}

console.log(getData());

//await
//async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
    const data = await getData2();

    //await를 사용하지 않았을 겨우엔 아래와 같이 사용했어야 했다.
    getData().then((data)=>{
        console.log("not awiat", data);
    })
    console.log("await", data);
}

printData();


async function add10(num) {

    return num + 10;
}

async function printAdd10(){

    const a = await add10(0);
    const b = await add10(a);
    console.log(a, b);
}
printAdd10();



