export const Logins=(Data)=>{
 // console.log(Data)
    return {
      type:'Login',
      Data
    }
  }
  
  export const Logout = (params)=>{
   // console.log(params)
    return {
      type:'Logout',
      params
    }
  }