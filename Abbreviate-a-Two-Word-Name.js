function abbrevName(name){
   let a = name.split(" ")
    // code away
return a[0][0].toLocaleUpperCase().concat('.',a[1][0].toLocaleUpperCase())

}

console.log(abbrevName('SSS AAA'))
