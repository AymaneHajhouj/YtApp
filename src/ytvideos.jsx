import PropTypes from 'prop-types';

export const YTvideos = ({ videos }) => {
    if (!videos.length) {
        return <p>No videos found. Please try another search.</p>;
    }

    return (
        <div className="YTvideos">
            {videos.map((video) => (
                <div key={video.id.videoId}>
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <p>{video.snippet.title}</p>
                </div>
            ))}
        </div>
    );
};


YTvideos.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.shape({
                videoId: PropTypes.string.isRequired,
            }).isRequired,
            snippet: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};
