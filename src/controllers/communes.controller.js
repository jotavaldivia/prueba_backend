import { pool } from "../db.js";

export const getCommunes = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM communes");
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "ocurrio un error" + error,
    });
  }
};
