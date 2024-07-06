export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    if (!trimmedFormData.title) {
        errors.title = 'El título es requerido.';
    }

    if (!trimmedFormData.category) {
        errors.category = 'El equipo es requerido.';
    }

    if (!trimmedFormData.photo) {
        errors.photo = 'La URL de la foto es requerida.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'La URL de la foto no es válida o no es una foto válida.';
    }


    if (!trimmedFormData.link) {
        errors.link = 'La URL del video es requerida.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'La URL del video no es válida o no es un video válido.';
    }


    if (!trimmedFormData.description) {
        errors.description = 'La descripción es requerida.';
    } else if (trimmedFormData.description.length < 3) {
        errors.description = 'La descripción debe tener al menos 3 caracteres.';
    } else if (trimmedFormData.description.length > 500) {
        errors.description = 'La descripción no puede tener más de 500 caracteres.';
    }

    return errors;
};


const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};


const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})(\S+)?$/;
    return videoUrlPattern.test(url);
};
