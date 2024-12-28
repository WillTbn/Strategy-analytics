import { api, axios } from "boot/axios";
export default function useRequestIntercept() {
    const urlCors = process.env.API_URL_CORS
    const setCors = async () => {
        await api.get(urlCors)
            .then((response) => { })
            .catch(() => {
                infoNotify("Falha na solicitação, recarregue sua pagina.");
            })
            .finally(() => {
                hideLoading();
            });
    };

    return {
        setCors
    }
}