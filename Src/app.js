const express=require('express');
const path=require('path');
const app=express();
const Caller=require('./Caller');
const hbs=require('hbs');
let port=process.env.PORT||3000;
//Defining Paths
const dir=path.join(__dirname,'../Public');
const dir2=path.join(__dirname,'../Templates/views');
const partialPath=path.join(__dirname,'../Templates/partials');

//setting Handle Bars
app.set('view engine','hbs');
app.set('views',dir2);
hbs.registerPartials(partialPath);
//set up static directory
app.use(express.static(dir));
//setting the routing
 app.get('',(req,res)=>{
     res.render('index',{
         title:'Weather App',
         name:'Ademola'
     });
 });
app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'please provide a search input'
        });
    }
    Caller(req.query.search,(error,response)=>{
        if(!response){
          return res.send({
              error:'Please try another search'
            })
        }
          return  res.send(response);
    });
    console.log(req.query.search);
    // res.send(
    //     {
    //         temperature:12,
    //         climate:11,
    //         address:req.query.search
    //     }
   // );
});
app.get('/products',(req,res)=>{
    if(!req.query.search){
   return res.send({
        error:'please provide a search term'
    });
}
    console.log(req.query.search);
    res.send({
        products:[]
    });
})
app.get('/about',(req,res)=>{
res.render('About',{
    title:'The about Section'
});
});
app.get('/help',(req,res)=>{
res.render('help',{
    title:'this is the help segment'
});
});
app.get('/contact',(req,res)=>{
res.render('Contact',{
    title:'this is the contact Segmant'
});
});
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'Please try another search'
    });
});
app.get('*',(req,res)=>{
    res.render('404',{
        title:'Please try another search'
    });
});
//app.com
//app.com/help
app.listen(port,()=>{
    console.log('started on port 3000');
});