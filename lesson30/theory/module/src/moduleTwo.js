/*
const moduleTwo = () => {
    setInterval(()=>{
        document.body.innerHTML = Date();
    }, 1000);
};

module.exports = moduleTwo;
*/
export default function moduleTwo(a, b) {
    setInterval(()=>{
        document.body.innerHTML = Date();
    }, 1000);
    return a+b;
};