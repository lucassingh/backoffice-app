import { Jumbotron } from "../components/jumbotron/Jumbotron"
import SongForm from '../components/SongForm';

export const FilesScreen = () => {
    return (
        <div>
            <Jumbotron title='Cargar Archivos PDF' subtitle='Completar el formulario para cargar archivos PDF en la base de datos' />
            <div className="container d-flex justify-content-center flex-column custom-container">
                <SongForm />
            </div>
        </div>
    )
}