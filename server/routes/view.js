const express = require("express");

const viewController = require("../controllers/view");

const router = express.Router();

// router.get('/view',viewController.getActivities)

// router.get('/view/:viewId',viewController.getActivity)

router.post("/view", viewController.postActivity);

// router.post('/view-delete-item',vieController.postDeleteActivity)

module.exports = router;
