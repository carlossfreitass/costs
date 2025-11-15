import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    // Utilizamos useEffect para realizar a requisição da API apenas uma vez.
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, []) // Os colchetes significam um array de dependência vazio, isto é, garante que ele rode apenas uma vez.

    // Função executada ao enviar o formulário
    const submit = (e) => {
        e.preventDefault()

        // Chama a função recebida do componente pai
        handleSubmit(project)
    }

    // Atualiza o objeto 'project' conformo o usuário digita nos inputs
    function handleChange(e) {
        setProject({
            // Mantém os dados já inseridos
            ...project,

            // Atualiza apenas o campo alterado
            [e.target.name]: e.target.value
        })
    }

    // Atualiza a categoria escolhida no select
    function handleCategory(e) {
        setProject({ 
            ...project, 
            
            // Cria um objeto categoria completo (id + nome)
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto" 
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="budget" 
                placeholder="Insira o orçamento total" 
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories} 
                handleOnChange={handleCategory} 
                value={project.category ? project.category.id : ''} 
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm