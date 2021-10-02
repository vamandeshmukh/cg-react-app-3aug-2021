import React from 'react';

const MyMedia = () => {

    return (
        <div className="container">
            <h1 className="display-4 text-primary">My Media</h1>
            <div className="border border-primary pt-3 pb-3 px-3 py-3 mt-3 mb-3">
                <p>Enjoy Beethoven's melody - Für Elise</p>
                <div>
                    <iframe
                        width="693" height="390"
                        src="https://www.youtube.com/embed/wfF0zHeU3Zs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
}
export default MyMedia;