function likes(names) {
    // TODO
    let people = 0
    
    if(names.length > 3){
      
      console.log(`${names[0]}, ${names[1]} and ${names.length - 3} likes this`)
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      
    }else if (names.length === 3) {
      console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else if(names.length > 1){
      
      console.log(`${names[0]} and ${names[1]} likes this`)
      return `${names[0]} and ${names[1]} like this`
      
    }else if(names.length === 1) {
      
      console.log(`${names[0]} likes this`)
      return `${names[0]} likes this`
      
    }else if (names.length < 1){
      
      console.log(`no one likes this`)
      return `no one likes this`
      
    }
  }
  
  // time = O(1)
  
  // space complexity O(1)