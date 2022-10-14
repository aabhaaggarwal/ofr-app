import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateFlatBooking() {

    const [bNo, setBNo] = useState('');
    const [bFrom, setBFrom] = useState('');
    const [bTo, setBTo] = useState('');
    const [bMembers, setBMembers] = useState('');
    const [bFlatId, setBFlatId] = useState('');
    const [bTenantId, setBTenantId] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/flatbooking/"+id).then(resp => {
            setBNo(resp.data.bookingNo);
            setBFrom(resp.data.bookingFrom);
            setBTo(resp.data.bookingTo);
            setBMembers(resp.data.members);
            setBFlatId(resp.data.flat.flatId);
            setBTenantId(resp.data.tenant.userId);
        });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            bookingNo: bNo,
            bookingFrom: bFrom,
            bookingTo: bTo,
            members: bMembers,
            flatId: bFlatId,
            tenantId: bTenantId
        }
        axios.put("http://localhost:8080/flatbooking/update", payload).then(resp => 
            alert("Product updated")
            // navigate("/product/all");
        );
    }
    return (
        <div className="container">
              <div className="form-group"><br></br>
                <label htmlFor="bNo">Booking No</label><br></br>
                <input type="text" className="form-control" name="bNo" id="bNo"
                    onChange={(event) => setBNo(event.target.value)} value={bNo} disabled />
            </div>
            <div className="form-group"><br></br>
                <label htmlFor="bFrom">Booking from</label><br></br>
                <input type="date" name="bFrom" id="bFrom" className="form-control" 
                    onChange={(event) => setBFrom(event.target.value)} value={bFrom} />
            </div>
            <div className="form-group"><br></br>
                <label htmlFor="bTo">Booking to</label><br></br>
                <input type="date" name="bTo" id="bTo" className="form-control" 
                    onChange={(event) => setBTo(event.target.value)} value={bTo} />
            </div>
            <div className="form-group"><br></br>
                <label htmlFor="bMembers">members</label><br></br>
                <input type="text" name="bMembers" id="bMembers" className="form-control" 
                    onChange={(event) => setBMembers(event.target.value)} value={bMembers} />
            </div>
            <div className="form-group"><br></br>
                <label htmlFor="bFlatId">flat</label><br></br>
                <input type="text" name="bFlatId" id="bFlatId" className="form-control" 
                    onChange={(event) => setBFlatId(event.target.value)} value={bFlatId} />
            </div>
            <div className="form-group"><br></br>
                <label htmlFor="bTenantId">tenant</label><br></br>
                <input type="text" name="bTenantId" id="bTenantId" className="form-control" 
                    onChange={(event) => setBTenantId(event.target.value)} value={bTenantId} />
            </div>
            <div>
                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )


}

export default UpdateFlatBooking;