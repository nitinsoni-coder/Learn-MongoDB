const UserModel = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "mobile", "age", "address"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be a string and is required",
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$",
          description: "Email must be a valid email address and is required",
        },
        mobile: {
          bsonType: "string",
          description: "Mobile must be a string and is required",
        },
        age: {
          bsonType: "int",
          minimum: 0,
          description:
            "Age must be an integer greater than or equal to 0 and is required",
        },
        address: {
          bsonType: "object",
          required: ["street_address", "city", "state", "country"],
          properties: {
            street_address: {
              bsonType: "string",
              description: "Street address must be a string and is required",
            },
            city: {
              bsonType: "string",
              description: "City must be a string and is required",
            },
            state: {
              bsonType: "string",
              description: "State must be a string and is required",
            },
            country: {
              bsonType: "string",
              description: "Country must be a string and is required",
            },
          },
        },
        firstSalary: {
          bsonType: "int",
          minimum: 0,
          description:
            "first salary should be integer greater than or equal to 0 is required",
        },
        secondSalary: {
          bsonType: "int",
          minimum: 0,
          description:
            "second salary should be integer greater than or equal to 0 is required",
        },
      },
    },
  },
};
export default UserModel;
