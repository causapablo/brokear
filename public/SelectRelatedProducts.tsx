const SelecRandomProducts = (objeto: Record<string, any>)=>{
    let related: Array<{ key: string, value: any }> = [];
    const n =  Object.keys(objeto);
    if(n.length===2){
        related.push(objeto[n[0]], objeto[n[1]])
    }else if(n.length===4){
        related.push(objeto[n[0]], objeto[n[1]], objeto[n[2]])
    }else{
        related.push(objeto[n[3]], objeto[n[5]], objeto[n[7]])
    }
    return related;
}
export default SelecRandomProducts;