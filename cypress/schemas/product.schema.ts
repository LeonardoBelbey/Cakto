export const productSchema = {
    type: "object",
    required: ["id", "title", "price", "description", "category", "images"],
    properties: {
        id: { type: "number" },
        title: { type: "string" },
        price: { type: "number" },
        description: { type: "string" },
        images: {
            type: "array",
            items: { type: "string" }
        },
        category: {
            type: "object",
            required: ["id", "name"],
            properties: {
                id: { type: "number" },
                name: { type: "string" }
            }
        }
    },
    additionalProperties: true
};