"use client"
import { useState } from 'react'

const barbeiros = [
  { id: 1, nome: "Anderson", foto: "✂️" },
  { id: 2, nome: "João", foto: "💈" },
  { id: 3, nome: "Marcos", foto: "🔥" },
]
const horarios = ["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00"]
const cortes = [
  { nome: "Corte Simples", preco: 25, pix: 20 },
  { nome: "Corte + Barba", preco: 40, pix: 35 },
  { nome: "Degradê Navalhado", preco: 35, pix: 30 },
]

export default function Home() {
  const [barbeiro, setBarbeiro] = useState<number|null>(null)
  const [hora, setHora] = useState("")
  const [corte, setCorte] = useState(0)
  const [pag, setPag] = useState("")
  const [nome, setNome] = useState("")
  const [ok, setOk] = useState(false)

  const agendados = ["09:00","14:00"] // simulando vagas travadas

  function agendar(){
    if(!barbeiro ||!hora ||!pag ||!nome) return alert("Preencha tudo!")
    if(agendados.includes(hora)) return alert("Horário já ocupado!")
    setOk(true)
  }

  if(ok) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-zinc-900 p-8 rounded-2xl text-center max-w-sm w-full border border-green-500">
        <h1 className="text-3xl mb-4">✅ Agendado!</h1>
        <p>{nome} - {cortes[corte].nome} com {barbeiros.find(b=>b.id===barbeiro)?.nome} às {hora}</p>
        <p className="mt-3 text-green-400 font-bold">Pagamento: {pag}</p>
        {pag==="PIX" && <p className="mt-2 text-sm bg-white text-black p-2 rounded">Chave PIX: 88 9 9999-9999<br/>Valor: R$ {cortes[corte].pix},00</p>}
        <button onClick={()=>setOk(false)} className="mt-6 w-full bg-white text-black py-3 rounded-xl font-bold">Novo agendamento</button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-black text-center mt-6">CORTE NO PIX 💈</h1>
        <p className="text-center text-zinc-400 mb-6">Mais barato no pix, vaga travada na hora</p>

        <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome" className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 mb-5"/>

        <h2 className="font-bold mb-2">1. Escolha o corte</h2>
        <div className="grid gap-2 mb-5">
          {cortes.map((c,i)=>(
            <button key={i} onClick={()=>setCorte(i)} className={`p-4 rounded-xl border text-left flex justify-between ${corte===i?'border-green-500 bg-zinc-900':'border-zinc-800 bg-zinc-900/50'}`}>
              <span>{c.nome}</span>
              <span><s className="text-zinc-500 text-sm mr-2">R${c.preco}</s><b className="text-green-400">R${c.pix} no PIX</b></span>
            </button>
          ))}
        </div>

        <h2 className="font-bold mb-2">2. Barbeiro</h2>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {barbeiros.map(b=>(
            <button key={b.id} onClick={()=>setBarbeiro(b.id)} className={`p-4 rounded-xl border ${barbeiro===b.id?'border-green-500 bg-zinc-800':'border-zinc-800 bg-zinc-900'}`}>
              <div className="text-2xl">{b.foto}</div><div className="font-bold">{b.nome}</div>
            </button>
          ))}
        </div>

        <h2 className="font-bold mb-2">3. Horário {barbeiro?"":"(escolha barbeiro)"}</h2>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {horarios.map(h=>{
            const ocupado = agendados.includes(h)
            return <button key={h} disabled={!barbeiro || ocupado} onClick={()=>setHora(h)} className={`p-3 rounded-xl border text-sm ${ocupado?'bg-red-900/30 border-red-800 text-red-400':'hora===h?'border-green-500 bg-white text-black font-bold':'border-zinc-800 bg-zinc-900'}`}>{ocupado?`${h} X`:h}</button>
          })}
        </div>

        <h2 className="font-bold mb-2">4. Pagamento</h2>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {["PIX","DINHEIRO","CRÉDITO","DÉBITO"].map(p=>(
            <button key={p} onClick={()=>setPag(p)} className={`p-4 rounded-xl border font-bold ${pag===p?'bg-green-500 text-black border-green-500':'bg-zinc-900 border-zinc-800'}`}>{p}{p==="PIX"?" -10%":""}</button>
          ))}
        </div>

        <button onClick={agendar} className="w-full bg-green-500 text-black p-5 rounded-2xl font-black text-lg">TRAVAR MINHA VAGA 🔒</button>
        <p className="text-center text-xs text-zinc-500 mt-3">Vaga só fica travada após confirmar. Pix tem desconto automático.</p>
      </div>
    </div>
  )
}
