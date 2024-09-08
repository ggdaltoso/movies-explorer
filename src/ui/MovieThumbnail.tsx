import { Wangimg130 } from '@react95/icons';
import { MoviePreview } from '@services/movies';
import { FC } from 'react';
import { Shortcut } from '../components/Shortcut';

export const MovieThumbnail: FC<{
  movie: MoviePreview;
  onSelectMovie: () => void;
}> = ({ movie, onSelectMovie }) => {
  const icon = movie.posterUrl ? (
    <img
      alt={`The poster of '${movie.title}' movie`}
      src={movie.posterUrl}
      className="h-20"
    />
  ) : (
    <Wangimg130 variant="32x32_4" className="h-20" />
  );

  return (
    <li key={movie.id}>
      <Shortcut title={movie.title} icon={icon} onDoubleClick={onSelectMovie} />
    </li>
  );
};
