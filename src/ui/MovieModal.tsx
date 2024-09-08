import {
  Actmovie303,
  New16,
  Star,
  Time,
  User,
  Wangimg130,
} from '@react95/icons';
import { MoviePreview, useGetMovieQuery } from '@services/movies';
import { FC, ReactNode } from 'react';
import { Fieldset, Frame, Modal, Tabs, Tab, Tooltip } from '@react95/core';

const Description = {
  Term: ({ children }: { children: string }) => {
    return <dt className="font-bold">{children}</dt>;
  },
  Details: ({ children }: { children: string }) => {
    return <dd className="last:mb-2 ml-4">{children}</dd>;
  },
};

const TooltipItem: FC<{ icon: ReactNode; text: string; tooltip: string }> = ({
  icon,
  text,
  tooltip,
}) => {
  return (
    <Tooltip text={tooltip}>
      <div className="flex gap-2 items-center">
        {icon} {text}
      </div>
    </Tooltip>
  );
};

export const MovieModal: FC<
  Pick<MoviePreview, 'id'> & { onClose: () => void }
> = ({ id, onClose }) => {
  const { data } = useGetMovieQuery({ id });

  if (!data?.movie) {
    return null;
  }

  const movie = data.movie;

  return (
    <Modal
      title={movie.title}
      onClose={onClose}
      icon={<Actmovie303 variant="16x16_4" />}
      defaultPosition={{
        x: 20,
        y: 20,
      }}
    >
      <Frame display="grid" gap="$6" gridTemplateColumns="200px 1fr">
        <Frame
          boxShadow="$in"
          p="$1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="200px"
          h="300px"
        >
          {movie.posterUrl ? (
            <img
              src={movie.posterUrl}
              alt={`The poster of '${movie.title}' movie`}
              className="w-full h-full"
            />
          ) : (
            <Frame
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Wangimg130 variant="32x32_4" className="h-20 w-20 mb-2" />
              <p className="text-center">Missing poster for {movie.title}</p>
            </Frame>
          )}
        </Frame>
        <Frame w="360px" className="[&>_div]:h-[92%]">
          <Tabs>
            <Tab title="Properties">
              <span className="font-bold mr-1">Title: </span>
              <p className="inline-block ">{movie.title}</p>

              <ul className="mt-2 flex gap-4">
                {movie.duration && (
                  <li>
                    <TooltipItem
                      icon={<Time variant="16x16_4" />}
                      text={movie.duration}
                      tooltip="Duration"
                    />
                  </li>
                )}
                {movie.datePublished && (
                  <li>
                    <TooltipItem
                      icon={<New16 variant="16x16_4" />}
                      text={movie.datePublished}
                      tooltip="Publish date"
                    />
                  </li>
                )}
                {movie.rating && (
                  <li>
                    <TooltipItem
                      icon={<User variant="16x16_4" />}
                      text={movie.rating}
                      tooltip="Age"
                    />
                  </li>
                )}
                {movie.ratingValue && (
                  <li>
                    <TooltipItem
                      icon={<Star variant="16x16_4" />}
                      text={`${movie.ratingValue} (↑${movie.bestRating} ↓${movie.worstRating})`}
                      tooltip="Rating"
                    />
                  </li>
                )}
              </ul>

              {movie.summary && (
                <Fieldset legend="Summary" p="$6" mt="$8">
                  <Frame as="p">{movie.summary}</Frame>
                </Fieldset>
              )}

              {movie.genres.length > 0 && (
                <Fieldset legend="Genres" p="$6" mt="$8">
                  <ul className="list-disc ml-4">
                    {movie.genres.map((genre) => {
                      return <li key={genre.id}>{genre.title}</li>;
                    })}
                  </ul>
                </Fieldset>
              )}
            </Tab>
            <Tab title="People">
              <dl>
                {movie.directors.length > 0 && (
                  <Description.Term>Director</Description.Term>
                )}
                {movie.directors?.map((director) => {
                  return (
                    <Description.Details key={director}>
                      {director}
                    </Description.Details>
                  );
                })}

                {movie.mainActors.length > 0 && (
                  <Description.Term>Main Actors</Description.Term>
                )}
                {movie.mainActors?.map((actor) => {
                  return (
                    <Description.Details key={actor}>
                      {actor}
                    </Description.Details>
                  );
                })}

                {movie.writers.length > 0 && (
                  <Description.Term>Writers</Description.Term>
                )}
                {movie.writers?.map((writer) => {
                  return (
                    <Description.Details key={writer}>
                      {writer}
                    </Description.Details>
                  );
                })}
              </dl>
            </Tab>
          </Tabs>
        </Frame>
      </Frame>
    </Modal>
  );
};
