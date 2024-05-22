import React, { useEffect, useState } from "react";
import { Carousel } from 'primereact/carousel';

const MyCarousel = ({ title, api }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch(api, {
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'z9aullzgy7xv'
                    }
                });
                const data = await response.json();
                setSongs(data.data || []);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, [api]);

    const songTemplate = (song) => {
        const artists = song.artist.map(artist => artist.name).join(', ').slice(0, 25) + (song.artist.length > 3 ? '...' : '');

        return (
            <div className="border-1 surface-border border-round m-2 py-5 px-3">
                <img src={song.thumbnail} alt={song.title} className="w-60 shadow rounded" />
                <h4 className="font-medium pt-3">{song.title}</h4>
                <h5 className="font-light pt-1 text-gray-300">{artists}</h5>
            </div>
        );
    };

    return (
        <div className="bg-black text-white m-10">
            <h1 className="font-semibold text-3xl pl-5 pt-5">{title}</h1>
            <Carousel value={songs} numVisible={6} numScroll={4} itemTemplate={songTemplate} />
        </div>
    );
};

export default MyCarousel;
