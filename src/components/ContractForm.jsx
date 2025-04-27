// src/components/ContractForm.jsx

import { useState } from "react";
import axios from "axios";

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
      const response = await axios.post("http://127.0.0.1:5000/api/contracts/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
        {/* Consultant Info */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Consultant Name</label>
          <input style={inputStyle} name="consultant_name" value={formData.consultant_name} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Consultant Contact</label>
          <input style={inputStyle} name="consultant_contact" value={formData.consultant_contact} onChange={handleChange} required />
        </div>

        {/* Project Info */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Project Name</label>
          <input style={inputStyle} name="project_name" value={formData.project_name} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Project Description</label>
          <textarea style={inputStyle} name="project_description" value={formData.project_description} onChange={handleChange} />
        </div>

        {/* Dates */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Start Date</label>
          <input style={inputStyle} type="date" name="start_date" value={formData.start_date} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>End Date</label>
          <input style={inputStyle} type="date" name="end_date" value={formData.end_date} onChange={handleChange} required />
        </div>

        {/* Other Info */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Time Commitment (Hours)</label>
          <input style={inputStyle} type="number" name="time_commitment_hours" value={formData.time_commitment_hours} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Deliverable Milestones</label>
          <textarea style={inputStyle} name="deliverable_milestones" value={formData.deliverable_milestones} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Payment Rate</label>
          <input style={inputStyle} name="payment_rate" value={formData.payment_rate} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Payment Schedule</label>
          <input style={inputStyle} name="payment_schedule" value={formData.payment_schedule} onChange={handleChange} />
        </div>

        {/* Reporting */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Reporting Frequency</label>
          <input style={inputStyle} name="reporting_frequency" value={formData.reporting_frequency} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Reporting Format</label>
          <input style={inputStyle} name="reporting_format" value={formData.reporting_format} onChange={handleChange} />
        </div>

        {/* Stakeholder */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Stakeholder Engagements</label>
          <textarea style={inputStyle} name="stakeholder_engagements" value={formData.stakeholder_engagements} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Stakeholder Reporting</label>
          <textarea style={inputStyle} name="stakeholder_reporting" value={formData.stakeholder_reporting} onChange={handleChange} />
        </div>

        {/* Legal */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Deliverable Ownership</label>
          <input style={inputStyle} name="deliverable_ownership" value={formData.deliverable_ownership} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Confidentiality Terms</label>
          <input style={inputStyle} name="confidentiality_terms" value={formData.confidentiality_terms} onChange={handleChange} />
        </div>

        {/* Risk */}
        <div style={formGroupStyle}>
          <label style={labelStyle}>Non-Performance Penalties</label>
          <input style={inputStyle} name="non_performance_penalties" value={formData.non_performance_penalties} onChange={handleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Termination Notice Days</label>
          <input style={inputStyle} type="number" name="termination_notice_days" value={formData.termination_notice_days} onChange={handleChange} />
        </div>

        {/* Booleans */}
        <div style={checkboxGroupStyle}>
          <input type="checkbox" name="knowledge_transfer_required" checked={formData.knowledge_transfer_required} onChange={handleChange} />
          <label>Knowledge Transfer Required</label>
        </div>
        <div style={checkboxGroupStyle}>
          <input type="checkbox" name="conflict_of_interest_required" checked={formData.conflict_of_interest_required} onChange={handleChange} />
          <label>Conflict of Interest Required</label>
        </div>

        {/* Submit Button */}
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