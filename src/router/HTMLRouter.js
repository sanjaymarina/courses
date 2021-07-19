import React from 'react';
import Html from '../LanguagePages/Html.js';
import {Route} from 'react-router-dom';

function HtmlRouter(){
    return(
        <div>
            <Route path="/Html" component={Html} />
        </div>
    
    );
}

export default HtmlRouter;