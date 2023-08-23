
// function factors(a){
//     const arr=[]
//  for(let i=1;i<a;i++){
//     if(a%i==0){
//       arr.push(i)
//     }
//  }
//   const str=arr.reduce((prev,curr)=>{
//     return prev+curr
//   },0)

//   if(str==a){
//     return "perfect number"
//   }else if(str>a){
//     return "Abundant"
//   }else if(str<a){
//     return "Deficient"
//   }
// }
// console.log(factors(6))
// console.log(factors(12))
// console.log(factors(8))


// function num(a){
//    let sum=0
//  while(a>1){
//     if(a%2==0){
//         a=a/2
//       sum++
//      }else {
//         a=3*a + 1
//        sum++
//      }
//  }

// return sum
// }
// console.log(num(12))

function dec2bin(dec) {
    
    let str=''
    const arr=[]
    const res=[]
    const obj={1:"pop",10 : "double rip",100 : "hide your mints",1000: "fall"}

    str=( (dec >> 0).toString(2))
    //return str 
    for(let i=0;i<str.length;i++){
        if(obj[str]){
            res.push(obj[str])
            break
        }else {
            arr.push(Number(str[i]))
            arr.push(11-Number(str[i]))
            //arr.push(99+Number(str[i]))
            if(Number(str>=10000)){
                arr.push(9999+Number(str[i]))
               
            }
           
            break
        }
       
   
    }
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            res.push(obj[arr[i]])
        }
    }
    if(arr.includes(10000)){
        res.reverse()
    }
    return res
  }
  console.log(dec2bin(3))
  console.log(dec2bin(19))

        


