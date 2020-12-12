let Weather=document.querySelector('form');
let value=document.querySelector('input');
let output=document.querySelector('.values1');
Weather.addEventListener('submit',e=>{
    console.log('clicked');
    e.preventDefault();
    output.innerHTML="Loading";
let input=null; 
input=value.value;
if(input.length<=0){
    output.innerHTML="Please input something";

}
else{
let template='loading';
fetch("/weather?search="+input)
.then(response=>{
    response.json().then(data=>{
        if(data.error){
           // console.log(data.error);
            template=data.error;
            output.innerHTML=template;
        }
        else{
            //console.log(data);
            template="The current Temperature is "+data.temp_c+",it is "+data.condition.text;
        output.innerHTML=template;
        }
    });
});
}
});