import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Api(){

    const [data,setData] = useState([]);
    const [country,SetCountry] = useState("pakistan");
    const [allCountries,setCountries] = useState([])
    const [waitMessege,setWaitMessege] = useState("wait loading....")
    const [change,setChange] = useState(false)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '038be29401msh9d8e235ed195f64p124145jsna9a60c47d40f',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        fetch(`https://covid-193.p.rapidapi.com/countries`, options)
            .then(response => response.json())
            .then(response =>{ 
                // console.log(response.response)
                setCountries(response.response)
            })
    },[])

    useEffect(()=>{
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
            .then(response => response.json())
            .then(response =>{ 
                setData(response.response[0])
                setChange(false)
                // console.log(response.response[0])
            })

    },[country])

    return(
        <>
        { 
        data.country ?  
        <div>

            <h1 className="mt-5"><u><strong>COVID DETAILS</strong></u></h1><br />

            <select className="form-select my-5" aria-label="Default select example" onChange={(e)=>{SetCountry(e.target.value); setChange(true)}} autoFocus>
                <option value="pakistan">Select Country</option>
                {
                    allCountries.map((item,index)=>{
                                
                        return <option value={item} key={index}>{item}</option>
                    })
                }    
            </select>    
            <h2 style={{"fontFamily":"sans-serif","textAlign":"left"}}>Country Details : </h2>
            {
                !change ?
                <>
                <table className="table table-bordered  table-rounded table-hovered">
                <thead  className="bg-secondary text-white">
                    <tr>
                        <th>Country</th>
                        <th>Continent</th>
                        <th>Population</th>
                        <th>Day</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>{data.country ? data.country : "N/A"}</td>
                        <td>{data.continent ? data.continent : "N/A"}</td>
                        <td>{data.population ? data.population : "N/A"}</td>
                        <td>{data.day ? data.day : "N/A"}</td>
                        <td>{data.time ? data.time : "N/A"}</td>
                    </tr>
                </tbody>
                </table>

            <br/><br/>

            <h2 style={{"fontFamily":"sans-serif","textAlign":"left"}}>Covid Details : </h2>
            <table className="table table-bordered table-rounded table-hovered">
                <thead className="bg-secondary text-white">
                    <tr>
                        <th>New</th>
                        <th>Active</th>
                        <th>Critical</th>
                        <th>Recovered</th>
                        <th>Total Cases</th>
                        <th>Tests Reported</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>{data.cases.new ? data.cases.new :"N/A"}</td>
                        <td>{data.cases.active ? data.cases.active : "N/A"}</td>
                        <td>{data.cases.critical?data.cases.critical :"N/A"}</td>
                        <td>{data.cases.recovered ? data.cases.recovered : "N/A"}</td>
                        <td>{data.cases.total ? data.cases.total : "N/A"}</td>
                        <td>{data.tests.total ? data.tests.total : "N/A"}</td>
                        <td>{data.deaths.total ? data.deaths.total : "N/A"}</td>
                    </tr>
                </tbody>
            </table>
            </>
                : <Loader/>

            }

            </div>
        : <Loader/>}



        </>
    );
}