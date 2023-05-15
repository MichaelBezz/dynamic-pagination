import { useState, useEffect } from 'react';
import axios from 'axios';
import Photo from '../photo/photo';
import { TPhotos } from '../../types/photo';
import './pagination.css';


const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';
const LIMIT_PHOTO = 10;
const MIN_HEIGHT_FOR_UPDATE = 100;

function Pagination(): JSX.Element {
  const [photos, setPhotos] = useState<TPhotos>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [fetching, setFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (fetching) {
      axios.get<TPhotos>(`${BASE_URL}?_limit=${LIMIT_PHOTO}&_page=${currentPage}`)
        .then((response) => {
          setPhotos([...photos, ...response.data]);
          setCurrentPage((prevPage) => ++prevPage);
          setTotalCount(+response.headers['x-total-count']);
        })
        .finally(() => setFetching(false));
    }
  }, [photos, currentPage, fetching]);

  useEffect(() => {
    const handleDocumentScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const innerHeight = window.innerHeight;

      if (scrollHeight - (scrollTop + innerHeight) < MIN_HEIGHT_FOR_UPDATE && photos.length < totalCount) {
        setFetching(true);
      }
    };

    document.addEventListener('scroll', handleDocumentScroll);

    return () => {
      document.removeEventListener('scroll', handleDocumentScroll);
    };
  }, [photos, totalCount]);


  return (
    <div className="pagination">
      <h2 className="pagination__title">Список фотографий</h2>

      <ul className="pagination__list">
        {photos?.map((photo) => (
          <li key={photo.id} className="pagination__item">
            <Photo photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
