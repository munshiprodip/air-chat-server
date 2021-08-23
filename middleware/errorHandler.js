function errorHandler(err, req, res, next) {
  res
    .status(err.status || 500)
    .json(
      process.env.NODE_ENV === "development" ? err : { message: err.message }
    );
}

module.exports = {
  errorHandler,
};
