"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [data, setData] = useState("")
  const [horaSel, setHoraSel] = useState("")
  const [agendamentos, setAgendamentos] = useState([])
  const [nome, setNome] = useState("")

  // SEU HORÁRIO OFICIAL: 08h às 18h com pausa 12h
  const horarios = ["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00"]

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem("barbearia_anderson") || "[]")
    setAgendamentos(salvos)
  }, [])

  const ocupados = agendamentos.filter(a => a.data === data).map(a => a.horario)

  function agendar() {
    if (!data || !horaSel || !nome) {
      alert("Preencha nome, data e horário!")
      return
    }
    const jaExiste = agendamentos.some(a => a.data === data && a.horario === horaSel)
    if (jaExiste) {
      alert(`❌ Horário ${horaSel} do dia ${data} já foi marcado!`)
      return
    }
    const novo = [...agendamentos, { data, horario: horaSel, cliente: nome }]
    localStorage.setItem("barbearia_anderson", JSON.stringify(novo))
    setAgendamentos(novo)
    alert(`✅ ${nome}, agendado dia ${data} às ${horaSel}!`)
    setHoraSel("")
  }

  return (
    <div style={{background:"#0a0a0a", color:"#fff", minHeight:"100vh", fontFamily:"sans-serif"}}>
      <div style={{background:"#d4a017", color:"#000", textAlign:"center", padding:"30px 20px"}}>
        <h1 style={{fontSize:32, fontWeight:900, margin:0}}>BARBEARIA ESTILO</h1>
        <p>Anderson - 08h às 18h (Almoço 12h)</p>
      </div>

      <div style={{maxWidth:420, margin:"0 auto", padding:20}}>
        <h2 style={{color:"#d4a017"}}>✂️ Agendar Corte</h2>
        
        <input 
          placeholder="Seu nome" 
          value={nome} 
          onChange={e=>setNome(e.target.value)} 
          style={{width:"100%", padding:14, borderRadius:10, marginBottom:12, background:"#222", color:"#fff", border:"1px solid #333"}}
        />

        <input 
          type="date" 
          value={data} 
          onChange={e=>setData(e.target.value)} 
          style={{width:"100%", padding:14, borderRadius:10, marginBottom:15, background:"#222", color:"#fff", border:"1px solid #333"}}
        />

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:15}}>
          {horarios.map(h=>{
            const ocupado = ocupados.includes(h)
            const selecionado = h===horaSel
            return (
              <button 
                key={h} 
                disabled={ocupado} 
                onClick={()=>setHoraSel(h)} 
                style={{
                  padding:14, 
                  borderRadius:10, 
                  fontWeight:"bold",
                  background: ocupado ? "#333" : selecionado ? "#d4a017" : "#1a1a1a",
                  color: ocupado ? "#666" : selecionado ? "#000" : "#fff",
                  border:"1px solid #333",
                  textDecoration: ocupado ? "line-through" : "none"
                }}
              >
                {ocupado ? `${h} ❌` : h}
              </button>
            )
          })}
        </div>

        <div style={{background:"#1a1a1a", padding:10, borderRadius:8, marginBottom:15, fontSize:13, color:"#aaa"}}>
          ⏰ 12:00 pausa almoço - Horário com ❌ = já marcado
        </div>

        <button onClick={agendar} style={{width:"100%", background:"#d4a017", color:"#000", padding:16, borderRadius:12, fontWeight:900, fontSize:18, border:"none"}}>
          CONFIRMAR AGENDAMENTO
        </button>

        <div style={{marginTop:20}}>
          {agendamentos.filter(a=>a.data===data).map((a,i)=>
            <div key={i} style={{background:"#222", padding:10, borderRadius:8, marginBottom:6}}>🕐 {a.horario} - {a.cliente}</div>
          )}
        </div>
      </div>
    </div>
  )
}
