// function api (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve (200);
//         },2000);
//     });
// }
// async function getWeatherData (){
//     await api();
//     await api();
// }


/*
function getData(dataId){
        return new Promise ((resolve,reject)=>{
            setTimeout (()=>{
                console.log("data",dataId);
                resolve ("success");
            },2000);
        }) ;
    }

//async-await
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}
*/
// function getData(dataId){
//     return new Promise ((resolve,reject)=>{
//         setTimeout (()=>{
//             console.log("data",dataId);
//             resolve ("success");
//         },2000);
//     }) ;
// }

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data1");
//         resolve("success");
//         },4000)
    
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data2");
//         resolve("success");
//         },4000)
    
//     });
// }

// // promise chaining 

// console.log("fetching data1..... ")
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2..... ")
// asyncFunc2().then((res)=>{
//     console.log(res);

// })

// })



// function getData(dataId){
//     return new Promise ((resolve,reject)=>{
//         setTimeout (()=>{
//             console.log("data",dataId);
//             resolve ("success");
//         },2000);
//     }) ;
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// });







// const getPromise = () =>{
//     return new Promise ((resolve,reject)=>{
//         console.log("iam a promise ");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfiled ",res);
// });

// promise.catch((err)=>{
//     console.log("promise unfullfiled ",err);
// });

// function getData (dataId, getNextData){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if (getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }

