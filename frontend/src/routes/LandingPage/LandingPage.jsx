import { useRef } from 'react'
import { useUserStore } from '../../store/user.store'
import { useNavigate } from 'react-router'
import { createUser } from '../../entities/user/user.api'

export function LandingPage () {
  // hooks
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate()
  const formRef = useRef(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formRef.current) {
      console.error('Formulario no disponible')
      return
    }

    const rawUserFormData = new FormData(formRef.current)
    const userFormData = Object.fromEntries(rawUserFormData.entries())

    try {
      const userData = await createUser(userFormData)

      if (userData.error) {
        console.error('Error al crear usuario:', userData)
      } else {
        setUser(userData)
        navigate('/home')
        /** show ui message */ 
      }
    } catch (err) {
      console.error('Fallo inesperado al enviar el formulario:', err)
      /** show ui message */
    }
  }

  return (
    <main className='container'>
      <section className='card'>
        <div className='card-image'>
          <h1>Worter</h1>
          <p>Manage your tasks smartly</p>
        </div>
        <div className='card-form'>
          <h2>Regístrate</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: <input type='text' name='name' /></label>
            <label htmlFor='email'>Email: <input type='text' name='email' /></label>
            <button type='submit'>Send</button>
          </form>
        </div>
      </section>
    </main>
  )
}
