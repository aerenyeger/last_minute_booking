const express=require("express");
const router=express.Router();
const {pnrcheck,train_no}=require("../controllers/ticket")


router.get("/search_pnr",pnrcheck)

router.get("/train_no",train_no)
module.exports = router;