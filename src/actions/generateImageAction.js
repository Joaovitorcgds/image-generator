
export function bgColorAction(e){
  const corEscolhida = e.target.value;
  return {type:"BG_COLOR", payload: corEscolhida}
}

export function colorTextAction(e){
  const corEscolhida = e.target.value;
  return {type:"COLOR_TEXT", payload: corEscolhida}
}

export function professionAction(e){
  const value = e.target.value;
  return {type: "PROFESSION", payload: value}
}

export function getTechAction(e){
  const value = e.target.value;
  return { type:"GET_TECH", payload: value}
}