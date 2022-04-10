import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const updateProduct = await Product.findOneAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(201).json(updateProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Product.findOneAndDelete(id);
      res.status(201).json("Product successfully deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
