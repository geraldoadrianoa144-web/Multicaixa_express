const jw=
  require("jsonwebtoken");
function verificar token(req,res,
next){
const token=
  req headers["authorization"];
  if(! token){
  return res.status(401).json({
  message:"token não informado"
  });
  }
  const tokenlimpo=
  teken replace("bearer",""):
  try{
    const dados=jwt.verify(
    process.env.jwt_secret
    );
    req.usuario=dados;
    next();
  }catch(erro){
    return res.status(401).json({
      message:"token invalido"
    });
  }
}
module exports=verificartoken
