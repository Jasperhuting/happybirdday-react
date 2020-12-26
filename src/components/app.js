import React from 'react';
import SearchBar from './searchBar';
import ImageList from './imageList';
import Route from '../components/route';
import Header from '../components/header';
import useImages from '../hooks/useImages';

const App = () => {
    
    const [images, search] = useImages();

    return (        
        <div className="ui container" style={{marginTop: '20px'}}>
            <Header />
            <Route path="/">
                <SearchBar onSubmit={search} />
                <ImageList images={images}/>
            </Route>            
            <Route path="/home">
                <SearchBar onSubmit={search} />
                <ImageList images={images}/>
            </Route>            
            <Route path="/list">
                list:
                
            </Route>
    </div>)
    

}

export default App;