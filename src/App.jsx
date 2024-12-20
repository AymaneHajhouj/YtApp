import { useState, useEffect } from 'react';
import { fetchVideos } from './YoutubeAPI';
import { YTvideos } from './ytvideos';

export default function App() {
    const [query, setQuery] = useState('React videos'); // Valeur par défaut de la recherche
    const [videos, setVideos] = useState([]);

    // Effect pour effectuer une recherche initiale lorsque le composant est monté
    useEffect(() => {
        const fetchInitialVideos = async () => {
            const results = await fetchVideos(query);
            setVideos(results);
        };

        fetchInitialVideos();
    }, [query]); // Exécuter l'effet lorsque `query` change

    const handleSearch = async () => {
        const results = await fetchVideos(query);
        setVideos(results);
    };

    return (
        <div className="App">
            <h1>YouTube By Aymane</h1>
            <input
                type="text"
                placeholder="Search videos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <YTvideos videos={videos} />
        </div>
    );
}
