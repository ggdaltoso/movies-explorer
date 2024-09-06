import { Button, List, TaskBar } from '@react95/core';
// import { useClippy } from '@react95/clippy';
import { ReaderClosed, WindowsExplorer } from '@react95/icons';
import './App.css';
import { useGetMoviesQuery } from '@services/movies';

function App() {
  const { data } = useGetMoviesQuery();
  // const { clippy } = useClippy();

  // useEffect(() => {
  //   if (clippy) {
  //     clippy.speak('Hello!', false);
  //   }
  // }, [clippy]);

  console.log({ data });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Button>Click</Button>
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
}

export default App;
