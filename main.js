const getSymbol = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let k = Date.now().toString();
            let charCode = +(k.slice(k.length - 5, k.length));
            resolve(String.fromCharCode(charCode));
        },50);
        }
    );
};
async function getRandomChinese(length){
    let str = '';
    let char;
    for (let i = 0;i<length;i++) {
        char = await getSymbol();
        str+=char;
    }
    return str;
}
getRandomChinese(4)
    .then(rezult=>{
    console.log(rezult);
});

