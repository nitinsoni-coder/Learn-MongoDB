const asyncHandler = (func) => async (req, res, next) => {
  try {
    console.log("triggered endpoint : ", req.originalUrl);
    await func(req, res, next);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default asyncHandler;
