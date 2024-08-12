import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  // description: {
  //   type: String,
  // },
  // shortDescription: {
  //   type: String,
  // },
  sku: {
    type: String,
    unique: true,
  },
  // price: {
  //   regular: {
  //     type: Number,
  //     required: true,
  //   },
  //   sale: {
  //     type: Number,
  //     default: null,
  //   },
  // },
  stockStatus: {
    type: String,
    enum: ["instock", "outofstock", "onbackorder"],
    default: "instock",
  },
  stockQuantity: {
    type: Number,
    default: null,
  },
  weight: {
    type: Number, // assuming weight is stored as a number (e.g., in grams)
    default: null,
  },
  // dimensions: {
  //   length: {
  //     type: Number,
  //     default: null,
  //   },
  //   width: {
  //     type: Number,
  //     default: null,
  //   },
  //   height: {
  //     type: Number,
  //     default: null,
  //   },
  // },
  categories: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  images: [
    {
      id: {
        type: String,
      },
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: "",
      },
    },
  ],
  attributes: [
    {
      name: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      visible: {
        type: Boolean,
        default: true,
      },
    },
  ],
  // tags: [
  //   {
  //     id: {
  //       type: String,
  //     },
  //     name: {
  //       type: String,
  //     },
  //   },
  // ],

  /* TODO AMS COST and COST TYPE
  COST_TYPE: {
    type: string,
    required: true,
    },
    COST: {
    type: number,
    required: true,
    }
  */
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateModified: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
