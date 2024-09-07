import { useMemo, useState } from 'react';
import { Frame, List, Modal, TaskBar, Tree } from '@react95/core';
import {
  Camera,
  HelpBook,
  Mmsys99,
  Mplayer11,
  Wangimg130,
} from '@react95/icons';
import { useGetGenresQuery, useGetMoviesQuery } from '@services/movies';
import { Shortcut } from './Shortcut';
import { useSelector } from 'react-redux';
import { selectAuth } from '@state/reducers/auth';

const getModalDimensions = () => {
  const rootElement = document.getElementById('root') as HTMLElement;

  const windowWidth = rootElement.clientWidth;
  const windowHeight = rootElement.clientHeight;

  const wPos = windowWidth * 0.1;
  const hPos = windowHeight * 0.05;

  return {
    width: Math.floor(windowWidth * 0.8),
    height: Math.floor(windowHeight * 0.7),
    x: Math.floor(wPos),
    y: Math.floor(hPos),
  };
};

export const Desktop = () => {
  const auth = useSelector(selectAuth);
  const { data } = useGetMoviesQuery(undefined, {
    skip: !auth.token,
  });
  const { data: genres } = useGetGenresQuery(undefined, {
    skip: !auth.token,
  });

  const [moviesExplorerModal, setMoviesExplorerModal] = useState(true);

  const dimmensions = useMemo(getModalDimensions, []);

  const showMoviesExplorer = () => {
    setMoviesExplorerModal(true);
  };

  const closeMoviesExplorer = () => {
    setMoviesExplorerModal(false);
  };

  const treeData = useMemo(() => {
    if (data?.movies && genres) {
      const allMovies = data?.movies.map((movie, index) => {
        return {
          id: index,
          label: movie.title,
          icon: <Mplayer11 variant="16x16_4" />,
        };
      });

      const allGenres = genres.genres.map((genre, index) => {
        return {
          id: index,
          label: genre.title,
          icon: <Mmsys99 variant="16x16_4" />,
        };
      });

      return [
        {
          id: 0,
          label: 'Movies',
          children: allMovies,
        },
        {
          id: 1,
          label: 'Genres',
          children: allGenres,
        },
      ];
    }

    return [];
  }, [data?.movies, genres]);

  return (
    <>
      <div className="w-full h-full p-2 grid place-items-start">
        <Shortcut
          title="Movies Explorer"
          icon={<HelpBook variant="32x32_4" />}
          onDoubleClick={showMoviesExplorer}
        />
      </div>

      {moviesExplorerModal && (
        <Modal
          onClose={closeMoviesExplorer}
          title="Movies Explorer"
          icon={<HelpBook variant="16x16_4" />}
          defaultPosition={{
            x: dimmensions.x,
            y: dimmensions.y,
          }}
        >
          <Frame
            className="flex"
            w={`${dimmensions.width}px`}
            h={`${dimmensions.height}px`}
          >
            <Frame boxShadow="$in" bg="white" w="40%" mr="$6" overflow="auto">
              {treeData && (
                <Tree
                  data={treeData}
                  root={{
                    id: 0,
                    label: 'Movies Explorer',
                    icon: <Camera variant="16x16_4" />,
                  }}
                />
              )}
            </Frame>
            <Frame boxShadow="$in" bg="white" w="100%" overflow="auto" p="$4">
              <Frame
                as="ul"
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(80px, 1fr))"
                justifyItems="center"
              >
                {data?.movies.map((movie) => {
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
                      <Shortcut title={movie.title} icon={icon} />
                    </li>
                  );
                })}
              </Frame>
            </Frame>
          </Frame>
          <Frame boxShadow="$in" p="$4" mt="$6">
            Showing {data?.movies.length} movies
          </Frame>
        </Modal>
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<HelpBook variant="32x32_4" />}
              onClick={showMoviesExplorer}
            >
              Movies Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};
