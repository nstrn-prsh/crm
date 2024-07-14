import { useRouter } from "next/router";
import React from "react";

const AddCustomerPage = () => {
   const router = useRouter();
   const [forms, setForms] = useState({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
   });

   const saveHandler = async () => {
      const res = await fetch("/api/customer", {
         method: "POST",
         body: JSON.stringify({ data: forms }),
         headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.status === "success") router.push("/");
   };

   const cancelHandler = () => {
      setForms({
         name: "",
         lastName: "",
         email: "",
         phone: "",
         address: "",
         postalCode: "",
         date: "",
         products: [],
      });
      router.push("/");
   };

   return (
      <div className='customer-page'>
         <h4>Add New Customer</h4>
         <Form forms={forms} serForms={setForms} />
         <div className='customer-page__buttons'>
            <div className='first' onClick={cancelHandler}>
               Cancel
            </div>
            <div className='second' onClick={saveHandler}>
               Save
            </div>
         </div>
      </div>
   );
};

export default AddCustomerPage;
