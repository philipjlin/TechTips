import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import List from './List.jsx';
import technologies from '../technologies.js';


/**
 * App
 * Main file
 * 
 * 
 * @returns Main application view
 */
function App(){
    
    //Hook for search terms used to select cards to display
    const [searchTerms, setSearchTerms] = React.useState("");

    //Hook for if list should be shown
    const [showList, setShowList] = React.useState(false); 

    //Hook for list object to show
    const [list, setList] = React.useState({

        title: "",
        description: "",
        instructions: []
    });    



    return (
        <div>
            <div id="cards" style={showList ? {filter: 'blur(2px)'} : {filter: 'none'} }>
                
                <Header />

                {/* Search Component sets search terms based on searchTerms prop */}
                <Search
                    searchTerms={searchTerms}
                    setSearchTerms={setSearchTerms}
                />
                
                {/*     
                    Filter techologies by search terms
                    Map cards and pass props to each card using external file
                    Return mapped out cards  
                */}
                {
                
                    technologies.filter(technology => technology.title.toLowerCase().includes(searchTerms.toLowerCase()))
                                .map( filterResultTechnology => {

                                    return <Card 
                                                key={filterResultTechnology.title}
                                                
                                                setShowList={setShowList}
                                                setList={setList}
                                                {...filterResultTechnology} //passes all other fields of technology to corresponding prop i.e. title={filterResult.title} 
                                            />;
                                })
                }

                <Footer />

            </div>
            
            {/* List Component shown/hidden based on value of showList prop  */}
            <List 
                showList={showList}
                setShowList={setShowList}

                {...list}
            />;     

        </div>
    );
    
}

export default App;