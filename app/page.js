"use client"
import { useState } from 'react'

export default function Home() {
  const [hora, setHora] = useState("")
  const [corte, setCorte] = useState({nome:"", preco:""})
  const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
  const cortes = [
    {nome:"Social", preco:10, desc:"Clássico na tesoura"},
    {nome:"Degradê", preco:15, desc:"Degradê na zero"},
    {nome:"Navalhado", preco:20, desc:"Navalhado + acabamento"},
  ]
  
  const agendar = () => {
    if(!hora) return alert("Escolhe o horário!")
    if(!corte.nome) return alert("Escolhe o tipo de corte!")
    const msg = `Fala mano! Quero agendar: ✂️ ${corte.nome} - R$${corte.preco} as ${hora} 💈`
    window.open(`https://wa.me/5588921592905?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <div style={{background:'#050505', color:'white', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <div style={{maxWidth:'480px', margin:'0 auto', padding:'30px 20px', textAlign:'center'}}>
        <h1 style={{color:'#00ff88', fontSize:'12px', letterSpacing:'4px'}}>BARBEARIA VISIONARIA</h1>
        <h2 style={{fontSize:'32px', fontWeight:'900', marginTop:'20px', lineHeight:'1.1'}}>AGENDE SEU<br/><span style={{color:'#00ff88'}}>CORTE VISIONARIO</span></h2>
        
        <div style={{background:'#111', border:'2px solid #222', borderRadius:'16px', padding:'20px', marginTop:'25px', textAlign:'left'}}>
          <p style={{fontWeight:'700', marginBottom:'12px'}}>✂️ Escolha seu corte:</p>
          <div style={{display:'grid', gap:'10px'}}>
            {cortes.map(c => (
              <button key={c.nome} onClick={()=>setCorte(c)} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px', borderRadius:'10px', border: corte.nome===c.nome ? '2px solid #00ff88' : '1px solid #333', background: corte.nome===c.nome ? '#00ff88' : '#000', color: corte.nome===c.nome ? 'black' : 'white', textAlign:'left'}}>
                <div><div style={{fontWeight:'900'}}>{c.nome}</div><div style={{fontSize:'12px', opacity:0.7}}>{c.desc}</div></div>
                <div style={{fontWeight:'900', fontSize:'18px'}}>R${c.preco}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{background:'#111', border:'2px solid #00ff88', borderRadius:'16px', padding:'20px', marginTop:'16px'}}>
          <p style={{fontWeight:'700', marginBottom:'12px', textAlign:'left'}}>📅 HOJE - Horários disponíveis:</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px'}}>
            {horarios.map(h => (
              <button key={h} onClick={()=>setHora(h)} style={{padding:'12px', borderRadius:'10px', border: hora===h ? '2px solid #00ff88' : '1px solid #333', background: hora===h ? '#00ff88' : '#000', color: hora===h ? 'black' : 'white', fontWeight:'900'}}>{h}</button>
            ))}
          </div>
          <button onClick={agendar} style={{width:'100%', background:'#00ff88', color:'black', fontWeight:'900', padding:'18px', borderRadius:'12px', marginTop:'20px', border:'none', fontSize:'16px'}}>
            {corte.nome ? `AGENDAR ${corte.nome.toUpperCase()} AS ${hora || '--:--'}` : 'AGENDAR NO WHATSAPP'}
          </button>
          <p style={{fontSize:'11px', color:'#666', marginTop:'8px'}}>Confirmação imediata no Zap 88 92159-2905</p>
        </div>
      </div>
    </div>
  )
}
