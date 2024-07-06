import './Loading.css';
import loading from '../../assets/loading.gif'

const Loading = () => {

    const loaderProps = {
        loading: true,
        size: 100,
        duration: 5,
    };

    return (
        <div className="loading-container">
           
        <img src={loading} {...loaderProps} alt="Cargando..." />
            <h2>Cargando...</h2>
            
        </div>
    );
};

export default Loading;