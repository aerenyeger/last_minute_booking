const express=require("express");
const router=express.Router();
const {pnrcheck,train_no,save_pnr,search_path,make_payment,delete_ticket}=require("../controllers/ticket")


router.get("/search_pnr",pnrcheck)

router.get("/train_no",train_no)

router.post("/save_pnr",save_pnr)

router.get("/path",search_path)

router.post("/make_payment",make_payment)

router.delete("/delete_ticket",delete_ticket)

module.exports = router;