const request =require('request');
const Caller=(search,callback)=>{
    const url='http://api.weatherapi.com/v1/current.json?key=8e5db619df984444801112947202211&days=4&q='+search;
    request({url,json:true},(error,{ body } )=>{
        if(error){
            return(undefined,"you are not connected");
        }
        else if(request.body<=0){
            return ("please try another search",undefined);
        }
        else{
        callback(undefined,body.current);
    }
    });
};
module.exports=Caller;