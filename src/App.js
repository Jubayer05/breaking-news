import react from 'react';
import './App.css';
import Header from './component/Header/Header';
import News from './component/News/News';
import TopHeadline from './component/TopHeadLine/TopHeadline';


function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
    </div>
  );
}

export default App;
