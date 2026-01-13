import ImageKit from "imagekit";
import {v4 as uuid} from 'uuid';
import config from "../config/config.js";

export const imagekit = new ImageKit({
    publicKey:config.IMAGEKIT_PUBLICKEY,
    privateKey:config.IMAGEKIT_PRIVATEKEY,
    urlEndpoint:config.IMAGEKIT_URL_ENDPOINT
});


export async function uploadMusic({buffer,folder='/echo'}){
    
    const res = await imagekit.upload({
        file:buffer,
        fileName:uuid(),
        folder,
    });

    return {
        url:res.url,
        thumbnail:res.thumbnailUrl || res.url,
        id:res.fileId
    };

}