export const errorSchema = {
  type: "object",
  required: ["statusCode", "message", "error"],
  properties: {
    statusCode: { type: "number" },
    message: { type: ["string", "array"] },
    error: { type: "string" }
  },
  additionalProperties: true
};