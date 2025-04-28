// src/components/ContractForm.jsx

import { useState } from "react";
import api from "../api";  // ✅ Import configured api instead of axios

function ContractForm() {
  const [formData, setFormData] = useState({
    consultant_name: "",
    consultant_contact: "",
    project_name: "",
    project_description: "",
    start_date: "",
    end_date: "",
    time_commitment_hours: "",
    deliverable_milestones: "",
    payment_rate: "",
    payment_schedule: "",
    reporting_frequency: "",
    reporting_format: "",
    stakeholder_engagements: "",
    stakeholder_reporting: "",
    deliverable_ownership: "",
    knowledge_transfer_required: true,
    confidentiality_terms: "",
    conflict_of_interest_required: false,
    non_performance_penalties: "",
    termination_notice_days: 14,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/contracts/", formData);  // ✅ using api instance
      setMessage("Contract created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error creating contract.");
    }
  };

  const formGroupStyle = {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  };

  const inputStyle = {
    padding: '0.5rem',
    fontSize: '1rem'
  };

  const checkboxGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📝 Create New Consultant Contract</h2>
      {message && <p style={{ textAlign: 'center', color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        {/* All the fields remain unchanged */}
        {/* [--- Your existing form fields stay exactly the same ---] */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button type="submit" style={{ padding: '0.75rem 2rem', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Submit Contract
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContractForm;