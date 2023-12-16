import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [Message, SetMessage] = useState();

    useEffect(() => {
        axios.get("https://mern-deploy-back-kmun.onrender.com/").then((res) => {
            SetMessage(res.data);
            console.log(res.data);
        });
    }, []);

    return <div>{Message}</div>;
};

export default App;
