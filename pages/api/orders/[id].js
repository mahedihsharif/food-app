import Order from "../../../models/Order";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  await dbConnect();
  // const token = cookies.token;

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }

    try {
      const updateOrder = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(updateOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Order.findOneAndDelete(id);
      res.status(201).json("Order successfully deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
