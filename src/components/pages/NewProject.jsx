// Permite navegar entre páginas via JavaScript
import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        // Inicializa valores padrão antes de enviar à API
        project.cost = 0
        project.services = []

        // Envia o novo projeto ao backend
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            // Converte o objeto project para JSON
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // Redireciona para a página de projetos
            navigate('/projects', { message: 'Projeto criado com sucesso!' })
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm  handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject