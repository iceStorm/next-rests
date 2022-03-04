import axios, { AxiosInstance } from "axios";
import BaseApiResource from "./BaseApiResource";

function createAxiosInstance(resourcePath: string) {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL + '/' + resourcePath,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    });

    instance.interceptors.response.use((res) => {

    },
    (err) => {
        if (!err?.status) { // network error

        }

        switch (err.status) {
            case 401:
                
                break;
        
            default:
                Promise.reject(err); // must have
                break;
        }
    });

    return instance;
}

export default class BaseApiService<S extends BaseApiResource> {
    private _resourcePath: string
    
    private _endpoint: AxiosInstance;
    public get endpoint(): AxiosInstance {
        return this._endpoint;
    }

    constructor(resourcePath: string) {
        this._resourcePath = resourcePath;
        this._endpoint = createAxiosInstance(resourcePath);
    }

    /**
     * Getting list of resources.
     * @returns list resources
     */
    async all() {
        const { data } = await this._endpoint.get<S[]>('/');
        return data;
    }

    /**
     * Getting a resource object from its id.
     * @param resourceId resource id to lookup
     * @returns resource object
     */
    async detail(resourceId: string) {
        const { data } = await this._endpoint.get<S>(`/${resourceId}`);
        return data;
    }

    /**
     * Adding/Creating a new resource.
     * @param resource new resource object to be added
     * @returns added object (maybe it has some transformations in the server, we should not get the old object before adding)
     */
    async add(resource: S) {
        const { data } = await this._endpoint.put<S>('/', resource);
        return data;
    }

    /**
     * Updating a resource.
     * @param resource resource to be updated
     * @returns updated resource object
     */
    async update(resource: S) {
        const { data } = await this._endpoint.patch<S>(`/${resource.id}`, resource);
        return data;
    }

    /**
     * Deleting a resource.
     * @param resourceId resource id to be deleted
     * @returns true/false
     */
    async delete(resourceId: string) {
        const { data } = await this._endpoint.delete(`/${resourceId}`);
        return data;
    }
}
