import '../videos.css'
import { Link } from 'react-router-dom'

export function VideoCostumbres(){
    return (<div className="contenedor-video">
        <div className='navegacion'>
                    <Link to='/costumbres4'>
                        <img src="/images/navegarIzq.png" alt="flecha" className="flecha_navegationIzq" />
                    </Link>
                </div>
        <iframe
              style={{
                width: '70%',
                height: '80%',
                borderRadius: '10px',
                boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.8)',
              }}
              title="Video"
              frameBorder="0"
              allowFullScreen={true}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://www.youtube.com/embed/fEp-B8B1uqU"
            ></iframe>
    </div>)
}