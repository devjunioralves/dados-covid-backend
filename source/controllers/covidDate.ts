
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}


const getInfosCovid = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const filters = {state: "SC", is_last: "True"};
        let result: AxiosResponse = await axios.get(`https://api.brasil.io/v1/dataset/covid19/caso/data/?page=5&page_size=10000&state=${filters.state}`, {
            headers:{
                Authorization: 'Token a08c5666ba982f0fab2a48cccf5d04318b3be213'
            }
        });
        let posts = result.data;
        return res.status(200).json({
            message: posts
        });
    }catch(Err){
        console.log(Err)
    }    
};


export default { getInfosCovid };