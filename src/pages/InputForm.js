import React from 'react'
import { Form } from 'react-bootstrap';
import { CustomInput } from '../components/custom-input/CustomInput';

const InputForm = () => {
    const inputs = [
        {
          label: "BusinessType",
          name: "BusinessType",
          type: "text",
          placeholder: "Marketing Agency",
          required: true,
        },
        {
          label: "BusinessName",
          name: "Business Name",
          type: "text",
          placeholder: "Requisite Design",
          required: true,
        },
        {
          label: "Location",
          name: "Location",
          type: "text",
          placeholder: "04xxxxxxxx",
        },
        {
          label: "Business Highlight",
          name: "Business Highlight",
          type: "text",
          placeholder: "Enter multiple values separated by commas",
          required: true,
        },
      ]; 

      const services = [
        {
          title: "Marketing Strategy",
          uniqueSellingPoint: "We turn theory into tangibility",
          benefits:
            "30+ page marketing document that outlines your specific business next steps. Modern audits rooted in the fundamentals of marketing. Proven multi-industry approaches that are yours to keep from month 1 on",
        },
        {
          title: "SEO",
          detail: "Say no to keyword packages",
          benefits:
            "No more confusing SEO packages. Personalized SEO strategies that are tailored to your business needs and goals. Proven track record of achieving high search engine rankings for our clients year over year.",
        },
      ];
    
const handleOnSubmit = ()=>{

} 
const handleOnChange = ()=>{

} 
 return (
    <div className='form border p-3 shadow-lg rounded'>
      <Form onSubmit={handleOnSubmit}>
        <h1>Your Info</h1>
        <hr />
        {inputs.map((item, i)=>(
          <CustomInput {...item} onChange={handleOnChange}/>
        ))}
        <hr />
        <h3>Services</h3>
        {services.map((item, i)=>(
          <CustomInput {...item} onChange={handleOnChange}/>
        ))}
      </Form>
    </div>
  )
}

export default InputForm
