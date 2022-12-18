import React from "react";
import { AdminNav,AllDetails } from "../../components";

const AdminDashboard = () => {
    return (
        <div>
            <AdminNav showDashboard={false}/>
            <AllDetails/>
        </div>
    );
}

export default AdminDashboard;