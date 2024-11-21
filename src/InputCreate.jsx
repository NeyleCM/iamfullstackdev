import { useState } from "react";

const InputCreate = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlApiCreate = import.meta.env.VITE_APP_API_URL+'create'
        const payload = { title } // Es igual que poner : { title: title }

        try {
            //const response = await axios.post(urlApiCreate, payload)
            //setResponseTitle(`Enviada tarea: ${response.data.title}`)
            //setTitle('')
           const response = await fetch(urlApiCreate, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), 
              })
              if(response.ok) {
                const data = await response.json()
              }

        } catch (error) {
            console.error('Se ha roto', error)
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Introduce la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
        />
        <button type="submit">Enviar</button>
        </form>
        </>
    )
}

export default InputCreate