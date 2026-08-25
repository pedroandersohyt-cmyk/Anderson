"use client"
import { useState } from 'react'

export default function Home() {
  const [hora, setHora] = useState("")
  const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
  
  const agendar = () => {
    if(!hora) return alert("Escolhe um horário!")
    const msg = `Fala! Quero agendar meu corte visionario as ${hora} 💈🔥`
    window.open(`https://wa.me/5588921592905?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <div style={{background:'#050505', color:'white', minHeight:'100vh', fontFamily:'sans-serif'}}>
      <div style={{maxWidth:'480px', margin:'0 auto', padding:'30px 20px', textAlign:'center'}}>
        <h1 style={{color:'#00ff88', fontSize:'12px', letterSpacing:'4px'}}>BARBEARIA VISIONARIA</h1>
        <h2 style={{fontSize:'32px', fontWeight:'900', marginTop:'20px', lineHeight:'1.1'}}>AGENDE SEU<br/><span style={{color:'#00ff88'}}>CORTE VISIONARIO</span></h2>
        <p style={{color:'#aaa', marginTop:'10px'}}>Escolha seu horário e garanta seu corte de R$70+</p>

        <div style={{background:'#111', border:'2px solid #00ff88', borderRadius:'16px', padding:'24px', marginTop:'25px'}}>
          <p style={{fontWeight:'700', marginBottom:'12px', textAlign:'left'}}>📅 HOJE - Horários disponíveis:</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px'}}>
            {horarios.map(h => (
              <button key={h} onClick={()=>setHora(h)} style={{padding:'12px', borderRadius:'10px', border: hora===h ? '2px solid #00ff88' : '1px solid #333', background: hora===h ? '#00ff88' : '#000', color: hora===h ? 'black' : 'white', fontWeight:'900'}}>{h}</button>
            ))}
          </div>
          <button onClick={agendar} style={{width:'100%', background:'#00ff88', color:'black', fontWeight:'900', padding:'18px', borderRadius:'12px', marginTop:'20px', border:'none', fontSize:'16px', cursor:'pointer'}}>
            AGENDAR AS {hora || '--:--'} NO WHATSAPP
          </button>
          <p style={{fontSize:'11px', color:'#666', marginTop:'8px'}}>127 vagas restantes hoje • Confirmação imediata</p>
        </div>

        <div style={{textAlign:'left', marginTop:'24px', display:'grid', gap:'10px'}}>
          <div style={{background:'#111', padding:'14px', borderRadius:'10px', borderLeft:'4px solid #00ff88'}}>💈 Corte + Finalização Visionária</div>
          <div style={{background:'#111', padding:'14px', borderRadius:'10px', borderLeft:'4px solid #00ff88'}}>⏰ 40min de experiência premium</div>
          <div style={{background:'#111', padding:'14px', borderRadius:'10px', borderLeft:'4px solid #00ff88'}}>📲 Atendimento via WhatsApp 88 92159-2905</div>
        </div>
      </div>
    </div>
  )
}
