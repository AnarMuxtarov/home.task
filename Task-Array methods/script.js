const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];






// tapsiriq 1
// const object = persons.map((element) => {
//     return {'object': element['name'] }
//   });
  
//   console.log(object);


//   let employeİnformation=persons.map((item)=>{
//     return{'employeİnformation':item['height']}
//   });

//   console.log(employeİnformation)


// var athlete=persons.map((value)=>{
//     return{'athlete':value['name','height']}
// })
//     console.log(athlete)

// let identity=persons.map((information)=>information.name
//    )
//    console.log(identity)




// tapsiriq 2
//   const filterSistemmass=persons.filter((element)=>element.mass>100)   
//   console.log(filterSistemmass)

//   let filterSistemmas=persons.filter((element)=>Number(element.mass)>100)
//   console.log(filterSistemmass)


//  var filterbyheight=persons.filter((item)=>item.height<200)
//  console.log('filterbyheight',filterbyheight)

//  var filterbyheight=persons.filter((item)=>Number(item.height)<200)
//  console.log('filterbyheight',filterbyheight)


//  let filterbyFemale=persons.filter((item)=>item.gender==='female')
//  console.log('filterbyFemale',filterbyFemale)

// let filterbymale=persons.filter((item)=>item.gender==='male')
//  console.log('filterbymale',filterbymale)






//tapsiriq 3
//  const sortbyMass=persons.sort((x,b)=> b.mass > x.mass
//  )
//  console.log('sortbyMass',sortbyMass)


 const sortbyGender=persons.sort((x,b)=>{
   if (x.gender>b.gender) return -1;
   return 1

})
console.log('sortbyGender',sortbyGender)


//4 cu tapsiriq

// const characterbyEvery=persons.every(item=>item.eye_color==="blue")
// console.log('characterbyEvery',characterbyEvery)

// const characterbymass=persons.every(item=>item.mass>40)
// console.log('characterbymass',characterbymass)

// const characterbysimvol=persons.every(item=>item.length<200)
// console.log('characterbysimvol',characterbysimvol)

// const characterbygender=persons.every(item=>item.gender==="male")
// console.log('characterbygender',characterbygender)


//5 ci tapsiriq
// const charactersomegender=persons.some(item=>item.gender==="male")
// console.log('charactersomegender',charactersomegender)

// const charactherSomeeye=persons.some(item=>item.eye_color==="blue")
// console.log('charactherSomeeye',charactherSomeeye)

// const characterSomeheight=persons.some(item=>item.height>200)
// console.log('characterSomeheight',characterSomeheight)


// const characterSomemass=persons.some(item=>item.mass<50)
// console.log('characterSomemass',characterSomemass)