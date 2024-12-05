import React, { useState } from "react";
import Header from "../components/Others/Header";
import CreateTask from "../components/Others/CreateTask";

import AddNewUserForm from "../components/Others/AddNewUserForm";

export default function AdminDashboard({ onLogout, adminData }) {
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const toggleAddUserForm = () => {
    setShowAddUserForm((prev) => !prev);
  };

  return (
    <>
      <Header
        onLogOut={onLogout}
        handleNewUserlogic={toggleAddUserForm}
        userData={adminData}
        isAddUserFormVisible={showAddUserForm}
      />
      {showAddUserForm ? (
        <AddNewUserForm setShowAddUserFrom={setShowAddUserForm} />
      ) : (
        <CreateTask />
      )}
    </>
  );
}
