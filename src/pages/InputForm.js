import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { CustomInput } from '../components/custom-input/CustomInput';

const InputForm = () => {
  const [formData, setFormData] = useState({
    BusinessType: "",
    BusinessName: "",
    Location: "",
    BusinessHighlights: "",
    Services: [],
  });

  const [response, setResponse] = useState(null);

  const handleOnChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  } 

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...formData.Services];
    updatedServices[index][field] = value;

    setFormData({
      ...formData,
      Services: updatedServices,
    });
  };

  const handleOnSubmit = async(e)=>{
    e.preventDefault();

    try {
      const response = await fetch("your-post-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  useEffect(() => {
    const getHistory = async () => {
      try {
        const historyResponse = await fetch("your-get-endpoint");
        const historyData = await historyResponse.json();
        console.log("History data:", historyData);
        // Handle and display history data as needed
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    getHistory();
  }, []); // This empty dependency array ensures the effect runs only once on component mount
    const inputs = [
        {
          label: "BusinessType",
          name: "BusinessType",
          type: "text",
          value:formData.BusinessType,
          placeholder: "Marketing Agency",
          required: true,
        },
        {
          label: "BusinessName",
          name: "BusinessName",
          type: "text",
          value:formData.BusinessName,
          placeholder: "Requisite Design",
          required: true,
        },
        {
          label: "Location",
          name: "Location",
          type: "text",
          value: formData.Location,
          placeholder: "04xxxxxxxx",
        },
        {
          label: "Business Highlight",
          name: "Business Highlight",
          type: "text",
          value:formData.BusinessHighlight,
          placeholder: "Enter multiple values separated by commas",
          required: true,
        },
      ]; 
 return (
    <div className='form border p-3 shadow-lg rounded'>
      <Form onSubmit={handleOnSubmit}>
        <h1>Your Info</h1>
        <hr />
        {inputs.map((item, i)=>(
          <CustomInput {...item} onChange={handleOnChange}/>
        ))}
         {/* Services input fields */}
         {formData.Services.map((service, index) => (
          <div key={index}>
            <label>
              Service Title:
              <input
                type="text"
                value={service.title}
                onChange={(e) =>
                  handleServiceChange(index, "title", e.target.value)
                }
                placeholder="Service Title"
              />
            </label>

            <label>
              Unique Selling Point:
              <input
                type="text"
                value={service.uniqueSellingPoint}
                onChange={(e) =>
                  handleServiceChange(
                    index,
                    "uniqueSellingPoint",
                    e.target.value
                  )
                }
                placeholder="Unique Selling Point"
              />
            </label>

            <label>
              Benefits:
              <input
                type="text"
                value={service.benefits}
                onChange={(e) =>
                  handleServiceChange(index, "benefits", e.target.value)
                }
                placeholder="Benefits"
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={() => setFormData({
            ...formData,
            Services: [...formData.Services, { title: "", uniqueSellingPoint: "", benefits: "" }]
          })}>
          Add Service
        </button>
        <button type="submit">Submit</button>
      </Form>
      {response && (
        <div>
          {/* Display response data */}
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  )
        }
export default InputForm
