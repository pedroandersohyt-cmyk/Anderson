import { NextResponse } from "next/server"
let agendamentos = global.agendamentos || []
if (!global.agendamentos) global.agendamentos = agendamentos
export async function GET() {
  return NextResponse.json(global.agendamentos || [])
}
export async function POST(req) {
  try {
    const novo = await req.json()
    const lista = global.agendamentos || []
    const existe = lista.find(a => a.data === novo.data && a.horario === novo.horario)
    if (existe) {
      return NextResponse.json({ error: "Ocupado" }, { status: 400 })
    }
    lista.push(novo)
    global.agendamentos = lista
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "erro" }, { status: 500 })
  }
}
