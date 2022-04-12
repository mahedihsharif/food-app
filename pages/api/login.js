export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      //   res.setHeader(
      //     "Set-Cookie",
      //     cookie.serialize("token", {
      //       maxAge: 60 * 60,
      //       sameSite: "strict",
      //       path: "/",
      //     })
      //   );
      res.status(200).json("Successfull");
    } else {
      console.log("Wrong creadential...");
    }
  }
}
