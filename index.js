
  1 const express=
  2 requir("express");
3 const app=express();
4 const port=process.env.port||
  3000;
5 app.use(express.json());
6 app.get("/",(req, res)=>{
  7res.json({
   8   message:"servidor multicaixa 
      9   express iniciado com sucesso!"
});
});
10 app.listen(port.()=>{
  11  console.log(`servidor iniciado
  12  na porta${port}');
  });
