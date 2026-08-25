"use client"
import { useState } from "react"

const cortes = [
  { nome: "Degradê Navalhado", preco: 35 },
  { nome: "Social Clássico", preco: 30 },
  { nome: "Moicano Visionário", preco: 40 },
  { nome: "Raspado Total", preco: 25 },
]

export default function Page() {
  const [barbeiro, setBarbeiro] = useState("")
  const [hora, setHora] = useState("")
  const [corte, setCorte] = useState(0)
  const [pag, setPag] = useState("")
  const [nome, setNome] = useState("")
  const [ok, setOk] = useState(false)

  const agendados = ["09:00", "14:00"]

  function agendar() {
    if (!barbeiro ||!hora ||!pag ||!nome) return alert("Preencha tudo!")
    if (agendados.includes(hora)) return alert("Horário já agendado!")
    setOk(true)
  }

  if (ok) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="bg-zinc-900 p-8 rounded-2xl text-center">
          <h1 className="text-3xl mb-4">✅ Agendado!</h1>
          <p>{nome} - {cortes[corte].nome} com {barbeiro} às {hora}</p>
          <p className="mt-3 text-green-400 font-bold">{pag === "PIX" && "Pague no PIX: 85999999999"}</p>
          <button onClick={() => setOk(false)} className="mt-6 bg-white text-black px-6 py-2 rounded-full font-bold">Voltar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-black text-center mt-6">CORTE NO PIX</h1>
        <p className="text-center text-zinc-400 mb-8">Barbearia Visionária</p>

        <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome" className="w-full p-3 rounded-xl bg-zinc-900 mb-5 outline-none" />

        <h2 className="font-bold mb-2">1. Escolha o corte</h2>
        <div className="grid gap-2 mb-5">
          {cortes.map((c,i)=>(
            <button key={i} onClick={()=>setCorte(i)} className={`p-3 rounded-xl text-left flex justify-between ${corte===i? "bg-white text-black" : "bg-zinc-900"}`}>
              <span>{c.nome}</span>
              <span className="text-zinc-500">R$ {c.preco}</span>
            </button>
          ))}
        </div>

        <h2 className="font-bold mb-2">2. Barbeiro</h2>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {["Marquinhos","Jhon"].map(b=>(
            <button key={b} onClick={()=>setBarbeiro(b)} className={`p-3 rounded-xl ${barbeiro===b? "bg-white text-black" : "bg-zinc-900"}`}>{b}</button>
          ))}
        </div>

        <h2 className="font-bold mb-2">3. Horário</h2>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {["09:00","10:00","11:00","14:00","15:00","16:00"].map(h=>(
            <button key={h} onClick={()=>setHora(h)} className={`p-2 rounded-xl ${hora===h? "bg-white text-black" : "bg-zinc-900"}`}>{h}</button>
          ))}
        </div>

        <h2 className="font-bold mb-2">4. Pagamento</h2>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {["PIX","Dinheiro"].map(p=>(
            <button key={p} onClick={()=>setPag(p)} className={`p-3 rounded-xl ${pag===p? "bg-white text-black" : "bg-zinc-900"}`}>{p}</button>
          ))}
        </div>

        <button onClick={agendar} className="w-full bg-white text-black p-4 rounded-full font-black text-lg">AGENDAR AGORA</button>
      </div>
    </div>
  )
}
