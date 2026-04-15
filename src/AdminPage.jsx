import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const [requests, setRequests] = useState([]);
  const [vendorAssignments, setVendorAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [vendorForms, setVendorForms] = useState({});
  const [saveMessage, setSaveMessage] = useState("");
  const [openVendorCard, setOpenVendorCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requestsResponse, vendorsResponse] = await Promise.all([
          fetch("http://localhost:5000/api/event-requests"),
          fetch("http://localhost:5000/api/request-vendors"),
        ]);

        const requestsData = await requestsResponse.json();
        const vendorsData = await vendorsResponse.json();

        if (!requestsResponse.ok) {
          setErrorMessage(requestsData.message || "Failed to load requests.");
          setLoading(false);
          return;
        }

        if (!vendorsResponse.ok) {
          setErrorMessage(vendorsData.message || "Failed to load vendor assignments.");
          setLoading(false);
          return;
        }

        setRequests(requestsData.data || []);
        setVendorAssignments(vendorsData.data || []);
      } catch (error) {
        console.error("Admin fetch error:", error);
        setErrorMessage("Server error loading dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const assignmentsByRequest = useMemo(() => {
    const grouped = {};

    for (const assignment of vendorAssignments) {
      const requestId = assignment.event_request_id;
      if (!grouped[requestId]) {
        grouped[requestId] = [];
      }
      grouped[requestId].push(assignment);
    }

    return grouped;
  }, [vendorAssignments]);

  const handleVendorFormChange = (requestId, field, value) => {
    setVendorForms((prev) => ({
      ...prev,
      [requestId]: {
        ...prev[requestId],
        [field]: value,
      },
    }));
  };

  const handleSaveVendor = async (request) => {
    const form = vendorForms[request.id] || {};

    try {
      const response = await fetch("http://localhost:5000/api/request-vendors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventRequestId: request.id,
          serviceType: form.serviceType || "",
          vendorName: form.vendorName || "",
          vendorCost: form.vendorCost || "",
          customerPrice: form.customerPrice || "",
          status: form.status || "pending",
          notes: form.notes || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setSaveMessage(data.message || "Failed to save vendor assignment.");
        return;
      }

      setSaveMessage(`Vendor assignment saved for request #${request.id}.`);

      setVendorAssignments((prev) => [...prev, data.data]);

      setVendorForms((prev) => ({
        ...prev,
        [request.id]: {
          serviceType: "",
          vendorName: "",
          vendorCost: "",
          customerPrice: "",
          status: "pending",
          notes: "",
        },
      }));

      setOpenVendorCard(null);
    } catch (error) {
      console.error("Save vendor error:", error);
      setSaveMessage("Server error saving vendor assignment.");
    }
  };

  return (
    <div className="adminPage">
      <div className="adminContainer">
       <div className="adminHeader">
  <div>
    <p className="adminEyebrow">Admin Dashboard</p>
    <h1 className="adminTitle">Event Requests</h1>
    <p className="adminText">
      Review incoming booking requests and keep track of new leads.
    </p>
  </div>

  <Link to="/" className="adminBtn secondary">
    Back to Home
  </Link>
</div>

        {loading && <p className="adminMessage">Loading requests...</p>}
        {errorMessage && <p className="adminError">{errorMessage}</p>}
        {saveMessage && <p className="adminMessage">{saveMessage}</p>}

        {!loading && !errorMessage && requests.length === 0 && (
          <p className="adminMessage">No event requests yet.</p>
        )}

        <div className="adminGrid">
          {requests.map((request) => {
            const savedAssignments = assignmentsByRequest[request.id] || [];

            return (
              <div key={request.id} className="adminCard">
                <div className="adminCardTop">
                  <div>
                    <p className="adminCardLabel">Request #{request.id}</p>
                    <h2 className="adminCardTitle">{request.name}</h2>
                  </div>
                  <span className="adminBadge">{request.event_type}</span>
                </div>

                <div className="adminDetails">
                  <p>
                    <strong>Email:</strong> {request.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {request.phone}
                  </p>
                  <p>
                    <strong>Event Date:</strong>{" "}
                    {request.event_date
                      ? new Date(request.event_date).toLocaleDateString()
                      : "N/A"}
                  </p>
                  <p>
                    <strong>Submitted:</strong>{" "}
                    {request.created_at
                      ? new Date(request.created_at).toLocaleString()
                      : "N/A"}
                  </p>
                </div>

                <div className="adminSection">
                  <p className="adminSectionTitle">Services Needed</p>
                  <div className="adminPills">
                    {Array.isArray(request.services) && request.services.length > 0 ? (
                      request.services.map((service, index) => (
                        <span key={index} className="adminPill">
                          {service}
                        </span>
                      ))
                    ) : (
                      <span className="adminEmpty">No services selected</span>
                    )}
                  </div>
                </div>

                <div className="adminSection">
                  <p className="adminSectionTitle">Details</p>
                  <p className="adminNotes">
                    {request.details || "No details provided."}
                  </p>
                </div>

                <div className="adminSection">
                  <p className="adminSectionTitle">Saved Vendor Assignments</p>

                  {savedAssignments.length === 0 ? (
                    <p className="adminEmpty">No vendor assignments saved yet.</p>
                  ) : (
                    <div className="savedAssignments">
                      {savedAssignments.map((assignment) => (
                        <div key={assignment.id} className="savedAssignmentCard">
  <div className="savedAssignmentTop">
    <div className="savedAssignmentTitleWrap">
      <p className="savedAssignmentService">
        {assignment.service_type || "No service type"}
      </p>
      <p className="savedAssignmentVendor">
        {assignment.vendor_name || "Not assigned"}
      </p>
    </div>

    <span className="savedStatus">
      {assignment.status || "pending"}
    </span>
  </div>

  <div className="savedAssignmentGrid">
    <div className="savedAssignmentItem">
      <span className="savedAssignmentLabel">Vendor Cost</span>
      <span className="savedAssignmentValue">
        {assignment.vendor_cost || "N/A"}
      </span>
    </div>

    <div className="savedAssignmentItem">
      <span className="savedAssignmentLabel">Customer Price</span>
      <span className="savedAssignmentValue">
        {assignment.customer_price || "N/A"}
      </span>
    </div>
  </div>

  {assignment.notes && assignment.notes !== "None" && (
    <div className="savedAssignmentNotes">
      <span className="savedAssignmentLabel">Notes</span>
      <p>{assignment.notes}</p>
    </div>
  )}
</div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="adminActions">
                  <button
                    className="adminBtn"
                    onClick={() =>
                      setOpenVendorCard(openVendorCard === request.id ? null : request.id)
                    }
                  >
                    {openVendorCard === request.id ? "Close Vendor Form" : "Assign Vendor"}
                  </button>

                  <button className="adminBtn secondary" type="button">
                    Add Price
                  </button>

                  <button className="adminBtn ghost" type="button">
                    Mark Complete
                  </button>
                </div>

                {openVendorCard === request.id && (
                  <div className="adminAssignBox">
                    <p className="adminSectionTitle">Vendor Assignment</p>

                    <div className="adminFormGrid">
                      <input
                        className="adminInput"
                        placeholder="Service Type"
                        value={vendorForms[request.id]?.serviceType || ""}
                        onChange={(e) =>
                          handleVendorFormChange(request.id, "serviceType", e.target.value)
                        }
                      />

                      <input
                        className="adminInput"
                        placeholder="Vendor Name"
                        value={vendorForms[request.id]?.vendorName || ""}
                        onChange={(e) =>
                          handleVendorFormChange(request.id, "vendorName", e.target.value)
                        }
                      />

                      <input
                        className="adminInput"
                        placeholder="Vendor Cost"
                        value={vendorForms[request.id]?.vendorCost || ""}
                        onChange={(e) =>
                          handleVendorFormChange(request.id, "vendorCost", e.target.value)
                        }
                      />

                      <input
                        className="adminInput"
                        placeholder="Customer Price"
                        value={vendorForms[request.id]?.customerPrice || ""}
                        onChange={(e) =>
                          handleVendorFormChange(request.id, "customerPrice", e.target.value)
                        }
                      />

                      <select
                        className="adminInput"
                        value={vendorForms[request.id]?.status || "pending"}
                        onChange={(e) =>
                          handleVendorFormChange(request.id, "status", e.target.value)
                        }
                      >
                        <option value="pending">Pending</option>
                        <option value="booked">Booked</option>
                        <option value="completed">Completed</option>
                      </select>

                      <input
                        className="adminInput"
                        placeholder="Notes"
                        value={vendorForms[request.id]?.notes || ""}
                        onChange={(e) =>
                          handleVendorFormChange(request.id, "notes", e.target.value)
                        }
                      />
                    </div>

                    <div className="adminActions">
                      <button
                        className="adminBtn"
                        type="button"
                        onClick={() => handleSaveVendor(request)}
                      >
                        Save Vendor Assignment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}