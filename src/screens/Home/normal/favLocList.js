import React, { useEffect, useState } from "react";
import NormalUserLayout from "./normalUserLayout";



const FavLocList= ()=> {
    const[favLoc, setFavLoc]=useState([])

    useEffect(()=>{
        fetch("http://18.209.252.141:13000/user/favouriteVenues/:userId   ")
        .then((res)=>res.json())
        .then((data)=>{
            setFavLoc(data)
            console.log(favLoc)
        })
    })

    return (
        <div>
            <NormalUserLayout />

            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='page-title-box'>
                            <div className='row mb-2'>
                                <div className='col-6 col-sm-6'>
                                    <div className='page-title'> Favourite Location List</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className="table table-centered w-100 nowrap">
                                        <thead className="table-light">
                                            <tr className="all" style={{ width: "20px" }}>
                                                <th className="text-body">Favourite Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {favLoc
                                                .map((item, index) => (
                                                    <tr key={index}>
                                                        <td width="10%" className="text-body">{item.id}</td>
                                                        <td width="45%">
                                                            <p className="m-0 d-inline-block align-middle font-16">
                                                                <a href={"/dashboard/location/" + item.id}  className="text-body" >{item.favouriteVenues}</a>
                                                            </p>
                                                        </td>
                                                        <td width="45%" className="text-body">{item.noofevent}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
// }

}

export default FavLocList;