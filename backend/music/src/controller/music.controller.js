import { uploadMusic } from "../service/storage.service";
import musicModel from '../model/music.model.js'

export async function uploadContent(req,res){
    const musicFile = req.files['music'][0];
    const coverImageFile = req.files['coverImage'][0];

    try {
        
        const musicUrl = await uploadMusic(musicFile);
        const coverImageUrl = await uploadMusic(coverImageFile);

        const music = await musicModel.create({
            title:req.body.title,
            artist:req.user.firstName + " " + req.user.lastName,
            artistId:req.user.id,
            musicUrl,
            coverImageUrl
        });

        return res.status(201).json({
            message:'music uploaded successfully',
            music
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ 
            message:'internal server error while uploading'
        })
    }
}