import { useState } from "react";
import axios from 'axios';
import FileInput from "../FileInput";
import styles from "./styles.module.css";

const SongForm = () => {
    const [data, setData] = useState({
        name: "",
        artist: "",
        song: "",
        img: "",
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = process.env.REACT_APP_API_URL + "/songs"
            const { data: res } = await axios.post(url, data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className={styles.containerForm}>
            <form className={styles.form} onSubmit={handleSubmit} >
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Nombre archivo"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Autor"
                    name="artist"
                    onChange={handleChange}
                    value={data.artist}
                />
                <FileInput
                    name="img"
                    label="Elegir imagen para podcast"
                    handleInputState={handleInputState}
                    type="image"
                    value={data.img}
                />
                <FileInput
                    name="song"
                    label="Elegir archivo"
                    handleInputState={handleInputState}
                    type="audio"
                    value={data.song}
                />
                <div className={styles.contButton}>
                    <button type="submit" className='btn btn-primary' >
                        Cargar
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SongForm;
