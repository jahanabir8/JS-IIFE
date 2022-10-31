// Immediately Invoked Function Expressions (IIFE)

// আমাদের সাধারনত কোনো ফাংশন বানানোর পর পরে সেটাকে কল করে ইউজ করতে হয়।
// কিন্তু যদি আমরা ফাংশন বানানোর সাথে সাথেই সেটাকে কল করতে চাই সেক্ষেত্রে আমরা
// ইফি Immediately Invoked Function Expressions (IIFE) টেকনিক ইউজ করতে পারি

(function aDemos(){
    console.log('Hello IIFE')
})()


var sum = (function(){
    return 10+20
})()
console.log('Value of sum is: ' +sum)


// (function demos(){
//     console.log('You can not call me from outside')
// })()

// এটা যেমন সাথে সাথে কন্সোলে উক্ত লেখা প্রিন্ট করে ফেলবে, কিন্তু আপনি পরে যদি
//  কোথাও aDemoFunc() কল করেন, এটা কাজ করবে না।

// মডুলার প্রোগ্রামিং এ আপনি প্রাইভেট ফাংশন থেকে কিছু ভ্যালু পেতে চাইলে ফাংশন এক্সপ্রেশন
//  ইউজ করতে পারেন এবং সেই ফাংশন থেকে ভ্যালু অবজেক্ট বা অ্যারে আকারে রিটার্ন করে দিতে
//   পারেন। তাইলে সেটা পরবর্তিতে বাইরেও ইউজ করতে পারবেন। যেমনঃ

var controller = (function(){
    var a = {
        name:'Abir Islam Anupom',
        uid : 1062461
    }
    return a;
})()

console.log(controller)
console.log(controller.name)
