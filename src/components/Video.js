import React from "react";

export default function Video() {
    return (
        <main>
            <div className="video--container">
             <h3>Showtime</h3>  
             <p>Aquí te dejo un cortometraje sobre el valor del tiempo</p> 
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/lGZufSXkPWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>    
        </main>
    )
}