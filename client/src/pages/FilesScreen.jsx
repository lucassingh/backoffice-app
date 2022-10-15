import { Jumbotron } from "../components/jumbotron/Jumbotron"
import SongForm from '../components/SongForm';

export const FilesScreen = () => {
    return (
        <div>
            <Jumbotron title='Cargar archivos PDF' subtitle='Completar el formulario para cargar archivos en la base de datos'/>

            <div className="container d-flex justify-content-center">
                <SongForm />
            </div>
        </div>
    )
}