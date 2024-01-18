import { useState, useEffect } from "react";
import background from "../images/sports-tools_53876-138077.avif";

const Athlete = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetch('https://sportsclub-09737a3d422c.herokuapp.com/athlete')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    })
    
    return (  
        <div class="h-[100%] w-auto bg-gradient-to-br from-300 via-400 to-700 font-mono ">
            <h1 className="lg:text-[85px] text-[40px] text-center text-50 underline ">Επαγγελματίες αθλητές του συλλόγου</h1>
            {data.map(athlete => (  
             <div className="flex flex-col">
              <div className="border-2 border-50 rounded-lg m-5 lg:w-[45%] w-[fit-content] p-3 mx-auto  bg-600 bg-opacity-50">
              <h3 className="text-[50px] text-50 text-center">{athlete.Ονοματεπωνυμο}</h3>
              <p className="text-[20px] text-50 text-center">{athlete.Description}</p>
              </div>
             </div>
            ))}
        </div>
     );
}
 
export default Athlete;