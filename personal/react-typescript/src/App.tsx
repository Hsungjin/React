import { Layout } from './layouts/Layout';
import { Example1 } from './pages/Example1';
import { Example2 } from './pages/Example2';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import styled from '@emotion/styled';
import { BlogPosts } from './pages/BlogPosts';
import Photo from './pages/Photo';
import TodoList from './pages/TodoList';

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/example1' element={<Example1 />} />
        <Route path='/example2' element={<Example2 />} />
        <Route path='/blog-posts' element={<BlogPosts />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/todo-list' element={<TodoList />} />
        <Route
          path={'*'}
          element={
            <>
              <NotFound>
                404 <br /> NOT FOUND
              </NotFound>
            </>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
