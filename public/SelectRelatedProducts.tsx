const SelecRandomProducts = (objeto: Record<string, any>)=>{
    let related: Array<{ key: string, value: any }> = [];
    const n =  Object.keys(objeto);
    if(n.length===2){
        related.push(objeto[n[0]], objeto[n[1]])
    }else if(n.length===4){
        related.push(objeto[n[0]], objeto[n[1]], objeto[n[2]])
    }else if(n.length===3){
        related.push(objeto[n[0]], objeto[n[1]], objeto[n[2]])
    }else{
        related.push(objeto[n[Math.floor(Math.random() * n.length)]], objeto[n[Math.floor(Math.random() * n.length)]], objeto[n[Math.floor(Math.random() * n.length)]])
    }
    return related;
}
export default SelecRandomProducts;