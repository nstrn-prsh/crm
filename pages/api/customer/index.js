import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
   //  try catch baraye etesal be data base
   try {
      6
   } catch (err) {
      console.log(err, "----------------------/api/customer");
      res.status(500).json({
         status: "failed",
         message: "Error in connecting to DB",
      });
      return; // agar etesal be db anjam nashod dg edame kar ro anjam nade
   }

   // method post
   if (req.method === "POST") {
      const data = req.body.data;
      if (!data.name || !data.lastNAme || !data.email) {
         return res
            .status(400)
            .json({ status: "failed", message: "Invalid data!" });
      }
      //   save kardane data dar db
      try {
         const customer = await Customer.create(data);
         res.status(201).json({
            status: "success",
            message: "Data Created!",
            data: customer,
         });
      } catch (error) {
         console.log(err);
         res.status(500).json({
            status: "failed",
            message: "Error in storing data in DB",
         });
      }
   }
}
