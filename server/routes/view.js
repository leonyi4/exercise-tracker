const express = require("express");

const viewController = require("../controllers/view");

const router = express.Router();

router.get("/view", viewController.getActivities);

router.get("/view/:activityId", viewController.getActivity);

router.post("/view", viewController.postActivity);

// router.post('/view-delete-item',viewController.postDeleteActivity);

router.post("/view/:viewId/edit", viewController.editActivity);

module.exports = router;
