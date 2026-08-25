export default function Home() {
  return (
    <div style={{background:'#050505', color:'white', minHeight:'100vh'}}>
      <div style={{maxWidth:'800px', margin:'0 auto', padding:'40px 20px', textAlign:'center'}}>
        <h1 style={{color:'#00ff88', fontSize:'14px', letterSpacing:'4px'}}>CORTE VISIONARIO</h1>
        <h2 style={{fontSize:'36px', fontWeight:'900', marginTop:'30px'}}>TRANSFORME SEU CELULAR EM UMA <span style={{color:'#00ff88'}}>MAQUINA DE CORTES VIRAIS</span></h2>
        <p style={{marginTop:'15px', color:'#aaa'}}>O metodo que barbeiros usam pra lotar agenda com cortes de R$70+</p>
        <div style={{background:'#111', border:'2px solid #00ff88', borderRadius:'16px', padding:'30px', marginTop:'30px'}}>
          <div style={{background:'#000', height:'180px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>VIDEO AQUI</div>
          <a href="https://wa.me/5588999999999" style={{display:'block', background:'#00ff88', color:'black', fontWeight:'900', padding:'18px', borderRadius:'12px', marginTop:'20px', textDecoration:'none'}}>QUERO ENTRAR NO GRUPO VIP</a>
          <p style={{fontSize:'12px', color:'#666', marginTop:'8px'}}>127 vagas restantes hoje</p>
        </div>
        <div style={{textAlign:'left', marginTop:'40px', display:'grid', gap:'12px'}}>
          <div style={{background:'#111', padding:'16px', borderRadius:'10px', borderLeft:'4px solid #00ff88'}}>✅ 300 ideias de cortes que viralizam</div>
          <div style={{background:'#111', padding:'16px', borderRadius:'10px', borderLeft:'4px solid #00ff88'}}>✅ Como cobrar R$70+ sem perder cliente</div>
          <div style={{background:'#111', padding:'16px', borderRadius:'10px', borderLeft:'4px solid #00ff88'}}>✅ Legendas prontas que vendem</div>
        </div>
      </div>
    </div>
  )
}
