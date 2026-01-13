import { uploadMusic } from "../service/storage.service.js";
import musicModel from '../model/music.model.js'

export async function uploadContent(req,res){

    try {

      const musicFile = req.files?.music?.[0];
      const coverImageFile = req.files?.coverImage?.[0];
        
        // const musicUrl = await uploadMusic(musicFile);
        // const coverImageUrl = await uploadMusic(coverImageFile);

        // const musicUrl = await Promise.all((musicFile || []).map(file => uploadMusic({buffer:file.buffer})));
        // const coverImageUrl = await Promise.all((coverImageFile || []).map(file => uploadMusic({buffer:file.buffer})));
       
        if (!musicFile || !coverImageFile) {
             return res.status(400).json({
                message: "Music file and cover image are required"
            });
        }

        const musicUpload = await uploadMusic({
          buffer: musicFile.buffer,
          folder: "/echo-music"
         });

        const coverImageUpload = await uploadMusic({
          buffer: coverImageFile.buffer,
         folder: "/echo-cover"
        });


        const music = await musicModel.create({
            title:req.body.title,
            artist:req.user.fullName.firstName + " " + req.user.fullName.lastName,
            artistId:req.user.id,
            musicUrl:musicUpload.url,
            coverImageUrl:coverImageUpload.url
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