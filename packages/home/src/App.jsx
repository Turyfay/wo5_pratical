import React from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(()=> import("nav/Header"));

import "./index.css";

const App = () =>(
    <div>
        <React.Suspense fallback={<div>No se pudo cargar</div>} >
            <Header />
        </React.Suspense>
        <div>Hola, es react home</div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
