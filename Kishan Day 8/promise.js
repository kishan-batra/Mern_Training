let age = 20;
const info = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("You can Vote");
    } else {
        reject("You cannot vote");
    }
})
info.then(result => console.log(result))
    .catch(error => console.log(error));
const resultInfo = async() => {
    let result = await info;
    console.log(result);
} catch (error) {
    console.log(error);
}
resultInfo();