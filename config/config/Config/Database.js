const{ pool(}=requir("pg");
const pool=new pool(({
  connectionstring:
    process.env.DATABASE_URL.
    ssl:{
  rejectunauthorized:false
    }
});
connect()
then(()=>{
  console.log("banco de dados 
      connectad com sucesso!);
})
ctch((err)={
     console.error("erro ao 
  conectar ao banco de dados":,
       err.message);
});
modele.export=pool
