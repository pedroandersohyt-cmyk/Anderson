"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [data, setData] = useState("")
  const [horaSel, setHoraSel] = useState("")
  const [agendamentos, setAgendamentos] = useState([])
  const [nome, setNome] = useState("")
  const horarios = ["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00"]

  async function carregar() {
    try {
      const res = await fetch("/api/agendamentos")
      const lista = await res.json()
      setAgendamentos(lista)
    } catch {}
  }

  useEffect(() => { carregar() }, [])

  const ocupados = agendamentos.filter(a => a.data === data).map(a => a.horario)

  async function agendar() {
    if (!data || !horaSel || !nome) { alert("Preencha nome, data e hora!"); return }
    const res = await fetch("/api/agendamentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data, horario: horaSel, cliente: nome })
    })
    if (!res.ok) { 
      alert(`❌ Já está ocupado: ${horaSel} do dia ${data}`); 
      carregar()
      return 
    }
    alert(`✅ ${nome}, agendado ${data} às ${horaSel}!`)
    carregar()
    setHoraSel("")
  }

  return (
    <div style={{background:"#0a0a0a", color:"#fff", minHeight:"100vh", fontFamily:"sans-serif"}}>
      <div style={{background:"#d4a017", color:"#000", textAlign:"center", padding:"30px 20px"}}>
        <h1 style={{fontSize:32, fontWeight:900, margin:0}}>BARBEARIA ESTILO</h1>
        <p>08h às 18h - Pausa 12h | Agora trava pra todos!</p>
      </div>
      <div style={{maxWidth:420, margin:"0 auto", padding:20}}>
        <input placeholder="Seu nome" value={nome} onChange={e=>setNome(e.target.value)} style={{width:"100%", padding:14, borderRadius:10, marginBottom:12, background:"#222", color:"#fff", border:"1px solid #333"}}/>
        <input type="date" value={data} onChange={e=>setData(e.target.value)} style={{width:"100%", padding:14, borderRadius:10, marginBottom:15, background:"#222", color:"#fff", border:"1px solid #333"}}/>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:15}}>
          {horarios.map(h=>{
            const ocupado = ocupados.includes(h)
            return <button key={h} disabled={ocupado} onClick={()=>setHoraSel(h)} style={{padding:14, borderRadius:10, fontWeight:"bold", border:"none", background: ocupado? "#333" : h===horaSel? "#d4a017" : "#1a1a1a", color: ocupado? "#666" : h===horaSel? "#000" : "#fff"}}>{ocupado? `${h} ❌` : h}</button>
          })}
        </div>
        <button onClick={agendar} style={{width:"100%", background:"#d4a017", color:"#000", padding:16, borderRadius:12, fontWeight:900, border:"none"}}>CONFIRMAR AGENDAMENTO</button>
        {data && <p style={{textAlign:"center", marginTop:12, color:"#aaa"}}>{ocupados.length} horários ocupados neste dia</p>}
      </div>
    </div>
  )
}
