// src/components/ShippingAddressForm.js
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  /* Styles for the form can be added here if needed */
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

function ShippingAddressForm() {
  return (
    <Form>
      <FormGroup>
        <Label htmlFor="fullName">Full Name</Label>
        <Input type="text" id="fullName" name="fullName" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" name="address" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="pincode">Pincode</Label>
        <Input type="text" id="pincode" name="pincode" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="mobile">Mobile Number</Label>
        <Input type="tel" id="mobile" name="mobile" />
      </FormGroup>
      {/* You might have a submit button here or in the parent component */}
    </Form>
  );
}

export default ShippingAddressForm;