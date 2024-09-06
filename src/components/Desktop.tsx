import { useMemo, useState } from 'react';
import { Frame, List, Modal, TaskBar, Tree } from '@react95/core';
import {
  Camera,
  Mplayer11,
  ReaderClosed,
  Wangimg130,
  WindowsExplorer,
} from '@react95/icons';
import { useGetGenresQuery, useGetMoviesQuery } from '@services/movies';
import { Shortcut } from './Shortcut';

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
  const { data } = useGetMoviesQuery();
  const { data: genres } = useGetGenresQuery();

  const [moviesExplorerModal, setMoviesExplorerModal] = useState(true);

  const dimmensions = useMemo(getModalDimensions, []);

  const showMoviesExplorer = () => {
    setMoviesExplorerModal(true);
  };

  const closeMoviesExplorer = () => {
    setMoviesExplorerModal(false);
  };

  console.log({ genres });

  const treeData = useMemo(() => {
    if (data?.movies && genres) {
      const allMovies = data?.movies.map((movie, index) => {
        return {
          id: index,
          label: movie.title,
          icon: <Mplayer11 variant="16x16_4" />,
        };
      });

      // const allGenres = genres

      return [
        {
          id: 0,
          label: 'Movies',
          children: allMovies,
        },
      ];
    }

    return [];
  }, [data?.movies, genres]);

  return (
    <>
      <div className="w-full h-full p-2 grid place-items-start">
        <Shortcut
          title="ThisTube"
          icon={<Camera variant="32x32_4" />}
          onDoubleClick={showMoviesExplorer}
        />
      </div>

      {moviesExplorerModal && (
        <Modal
          onClose={closeMoviesExplorer}
          title="Movies Explorer"
          icon={<Camera variant="16x16_4" />}
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
            <Frame boxShadow="$in" bg="white" w="40%" mr="$6">
              {treeData && (
                <Tree
                  data={treeData}
                  root={{
                    id: 0,
                    label: 'ThisTube',
                    icon: <Camera variant="16x16_4" />,
                  }}
                />
              )}
            </Frame>
            <Frame boxShadow="$in" bg="white" w="100%" overflow="auto">
              <Frame
                as="ul"
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(80px, 1fr))"
                justifyItems="center"
              >
                {data?.movies.map((movie) => {
                  const icon = movie.posterUrl ? (
                    <img
                      alt={`The poster of ${movie.title}`}
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
            <List.Item icon={<ReaderClosed variant="32x32_4" />}>
              Local Disk (C:)
            </List.Item>
            <List.Item icon={<WindowsExplorer variant="32x32_4" />}>
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};
