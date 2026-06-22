
type Input = {
    id:string,
    head:number,

}

const getData = async({id , head}:Input) =>{

    const res = await fetch(`http://127.0.0.1:8000/${id}?head=${head}`)
    const data = await res.json()
    return data
    
}

export default getData