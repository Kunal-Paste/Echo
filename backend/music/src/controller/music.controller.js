import { uploadMusic } from "../service/storage.service.js";
import musicModel from '../model/music.model.js';
import playlistModel from "../model/playlist.model.js";

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

export async function getArtistMusic(req,res){
    
    try {
        const musics = await musicModel.find({artistId:req.user.id});
        return res.status(200).json({
            message:'music fetched successfully',
            musics
        })
    } catch (err) {
       console.log(err);
       return res.status(500).json({
        message:'internal server error , while getting music'
       }) 
    }
}

export async function getAllMusic(req,res){
    
    const {skip = 0, limit = 10} = req.query;

    try {

        const musicDoc = await musicModel.find().skip(skip).limit(limit).lean();
        const musics = [];

        for(let music of musicDoc){
            musics.push(music)
        }

        return res.status(200).json({
            message:'all of the musics',
            musics
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:'internal server error , while getting all your music'
        })
    }

}

export async function getMusicById(req,res){
    const {id} = req.params;

    try {
        const music = await musicModel.findById(id).lean();

        if(!music){
            return res.status(404).json({
                message:'music not found'
            })
        }

        return res.status(200).json({
            message:'got music by id',
            music
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:'internal server error, in getMusicById'
        })
    }
}

export async function createPlaylist(req,res){

    const {title, musics} = req.body;

    try {

        const playlist = await playlistModel.create({
            title,
            artist:req.user.fullName.firstName + " " + req.user.fullName.lastName,
            artistId:req.user.id,
            musics,
            userId:req.user.id
        })

        return res.status(201).json({
            message:'playlist created successfully',
            playlist
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:'internal server error, while creating playlist'
        })
    }

}

export async function getPlaylist(req,res){
    try {
        const playlists = await playlistModel.find({artistId: req.user.id});
        return res.status(200).json({
            message:'playlist got successfully',
            playlists
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:'internal server error, while getting playlist'
        })
    }
}

export async function getPlaylistById(req,res){
    
    const {id} = req.params;

    try {
        const playlistDocs = await playlistModel.findById(id).lean();

        if(!playlistDocs){
            return res.status(404).json({
                message:'playlist not found'
            })
        }

        const musics = [];

        for(let musicId of playlistDocs.musics){

            const music = await musicModel.findById(musicId).lean();

            if(music){
               musics.push(music);
            }

            playlistDocs.musics = musics;

        }

        return res.status(200).json({
            message:'fetched playlist by id successfully',
            musics
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:'internal server error , in getPlaylistById'
        })
    }

}