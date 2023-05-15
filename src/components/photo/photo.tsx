import { TPhoto } from '../../types/photo';
import './photo.css';


type PhotoProps = {
  photo: TPhoto;
};

function Photo({photo}: PhotoProps): JSX.Element {
  return (
    <div className="photo">
      <div className="photo__image">
        <img src={photo.thumbnailUrl} width="150" height="150" alt={photo.title} />
      </div>

      <div className="photo__content">
        <h3 className="photo__title">{photo.title}</h3>
        <p className="photo__text">Альбом ID: {photo.albumId}</p>
        <p className="photo__text">Фото ID: {photo.id}</p>
        <a className="photo__link" href={photo.url} target="_blank" rel="nofollow noopener noreferrer">
          Оригинал фотографии
        </a>
      </div>
    </div>
  );
}

export default Photo;
