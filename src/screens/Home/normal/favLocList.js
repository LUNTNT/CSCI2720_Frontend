import React, { useEffect, useState } from "react";
import NormalUserLayout from "./normalUserLayout";
import NormalUserFooter from "./normalUserFooter";

const FavLocList = () => {
    const [favLoc, setFavLoc] = useState([])
    // const [uID, setUID] = useState("")
    // console.log(localStorage.getItem('userid'))
    // setUID(localStorage.getItem('userid'))
    const uID = localStorage.getItem('userid')
    console.log(uID)

    useEffect(() => {
        fetch(`http://18.209.252.141:13000/user/favouriteVenues/${uID}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[0])
                // console.log(data[0].favouriteVenues)
                setFavLoc(data[0].favouriteVenues)
                // console.log(favLoc)
            })
    }, [])

    return (
        <div>
            <NormalUserLayout />

            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='page-title-box'>
                            <div className='row mb-2'>
                                <div className='col-6 col-sm-6'>
                                    <a href={"/dashboard"} className="text-body pb-2" style={{ color: 'black' }}>
                                        &laquo; Back
                                    </a>
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
                                            {favLoc.map((item, index) => (
                                                <tr key={index}>
                                                    <td width="45%">
                                                        <p className="m-0 d-inline-block align-middle font-16">
                                                            <a href={"./location/" + item.id} className="text-body" >{item.venuee}</a>
                                                        </p>
                                                    </td>
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

            <br />
            <div style={{position: "absolute", left: 0, bottom:0, right:0 }} >
                <NormalUserFooter />
            </div>
        </div>
    )
    // }

}

export default FavLocList;