const handleMongoError = (res, error) => {
  if (error.code === 121) {
    console.log("error : ", error);
    const bulkWriteError =
      error?.writeErrors[0]?.err?.errInfo?.details?.schemaRulesNotSatisfied[0]
        ?.propertiesNotSatisfied;

    console.log("--bulkWriteError--", bulkWriteError);
    const validationErrors =
      error?.errInfo?.details?.schemaRulesNotSatisfied[0]
        ?.propertiesNotSatisfied;

    const missingProperties =
      error?.errInfo?.details?.schemaRulesNotSatisfied[0]?.missingProperties;

    let extractedErrors;
    if (validationErrors) {
      extractedErrors = validationErrors?.map((error) => ({
        propertyName: error.propertyName,
        description: error.description,
      }));
    }

    if (bulkWriteError) {
      extractedErrors = bulkWriteError?.map((error) => ({
        propertyName: error.propertyName,
        description: error.description,
      }));
    }

    res.status(400).json({
      success: false,
      message: "mongo error",
      validationErrors: extractedErrors || null,
      missingProperties: missingProperties || null,
    });
  }
};

export default handleMongoError;
